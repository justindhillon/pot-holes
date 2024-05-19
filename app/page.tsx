"use client"; // Add this at the top of your component file

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import icons

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXAPI || '';

const initialCoordinates = { lng: -122.9199, lat: 49.2781 }; // Coordinates for Simon Fraser University

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const geocoderContainerRef = useRef(null);
  const [map, setMap] = useState(null); // State to manage map instance
  const [marker, setMarker] = useState(null); // State to manage marker instance
  const [markerCoordinates, setMarkerCoordinates] = useState(initialCoordinates);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false); // State to manage marker visibility
  const [isExpanded, setIsExpanded] = useState(false); // State to manage menu expansion
  const geocoderContainer = useRef(null);

  useEffect(() => {
    if (map) return; // Initialize map only once

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [markerCoordinates.lng, markerCoordinates.lat], // starting position [lng, lat]
        zoom: 14 // starting zoom
      });

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false // Disable the default marker
      });

      if (geocoderContainerRef.current) {
        // Clear any existing geocoder to prevent multiple instances
        geocoderContainerRef.current.innerHTML = '';
        geocoderContainerRef.current.appendChild(geocoder.onAdd(mapInstance));
      }

      const newMarker = new mapboxgl.Marker({
        draggable: false, // Marker should not be draggable
        color: 'blue'
      }).setLngLat([markerCoordinates.lng, markerCoordinates.lat]);

      setMarker(newMarker); // Save the marker instance
      setMap(mapInstance); // Save the map instance

      mapInstance.on('move', () => {
        const center = mapInstance.getCenter();
        newMarker.setLngLat(center);
        setMarkerCoordinates({ lng: center.lng, lat: center.lat });
      });

      mapInstance.on('load', () => {
        fetch('http://172.232.175.150:8000/database.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(data => {
            mapInstance.addSource('earthquakes', {
              type: 'geojson',
              data: data
            });

            mapInstance.addLayer({
              'id': 'earthquakes-layer',
              'type': 'circle',
              'source': 'earthquakes',
              'paint': {
                'circle-radius': 4,
                'circle-stroke-width': 2,
                'circle-color': 'red',
                'circle-stroke-color': 'white'
              }
            });
          })
          .catch(error => console.error('There was a problem with the fetch operation:', error));
      });

      geocoder.on('result', (e) => {
        const { result } = e;
        const [lng, lat] = result.center;
        setLng(lng);
        setLat(lat);
        map.current!.flyTo({ center: result.center, zoom: zoom });
      });

      // Add zoom controls
      const nav = new mapboxgl.NavigationControl();
      mapInstance.addControl(nav, 'bottom-right');

      // Hide the magnifying glass icon
      const interval = setInterval(() => {
        const icon = document.querySelector('.mapboxgl-ctrl-geocoder--icon');
        if (icon) {
          icon.style.display = 'none';
          clearInterval(interval);
        }
      }, 100);

      return () => {
        if (geocoderContainerRef.current) {
          geocoderContainerRef.current.innerHTML = ''; // Clear the geocoder container
        }
        mapInstance.remove();
      };
    };

    initializeMap();
  }, [map, markerCoordinates]);

  const toggleMarker = () => {
    if (isMarkerVisible) {
      marker.remove();
    } else {
      marker.addTo(map);
    }
    setIsMarkerVisible(!isMarkerVisible);
    setIsExpanded(!isExpanded);
  };

  const saveCoordinates = async () => {
    const jsonContent = JSON.stringify(markerCoordinates);
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: 'coordinates.json',
        types: [
          {
            description: 'JSON Files',
            accept: { 'application/json': ['.json'] }
          }
        ]
      });

      const writable = await handle.createWritable();
      await writable.write(jsonContent);
      await writable.close();
      alert('Coordinates saved successfully!');
    } catch (err) {
      console.error('Error saving the file:', err);
    }
  };

  return (
    <div>
      <div ref={geocoderContainerRef} className="geocoder-container" />
      <div ref={mapContainerRef} className="map-container" />
      <button onClick={toggleMarker} className="toggle-button">
        {isExpanded ? <FaMinus /> : <FaPlus />}
      </button>
      {isExpanded && (
        <button onClick={saveCoordinates} className="save-button">
          Save Coordinates
        </button>
      )}
    </div>
  );
};

export default MapComponent;
