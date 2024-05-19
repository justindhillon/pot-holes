"use client"; // Add this at the top of your component file

import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXAPI || '';

const initialCoordinates = { lng: -122.9199, lat: 49.2781 }; // Coordinates for Simon Fraser University

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const geocoderContainerRef = useRef(null);
  const markerRef = useRef(null); // Use ref to keep track of the marker instance
  const [markerCoordinates, setMarkerCoordinates] = useState(initialCoordinates);

  useEffect(() => {
    const map = new mapboxgl.Map({
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
      geocoderContainerRef.current.appendChild(geocoder.onAdd(map));
    }

    const marker = new mapboxgl.Marker({
      draggable: false // Marker should not be draggable
    })
      .setLngLat([markerCoordinates.lng, markerCoordinates.lat])
      .addTo(map);

    markerRef.current = marker; // Save the marker instance

    map.on('move', () => {
      const center = map.getCenter();
      marker.setLngLat(center);
      setMarkerCoordinates({ lng: center.lng, lat: center.lat });
    });

    geocoder.on('result', (event) => {
      const { result } = event;
      const lngLat = result.geometry.coordinates;
      map.flyTo({ center: lngLat });
    });

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
      map.remove();
    };
  }, []);

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
      <button onClick={saveCoordinates} className="save-button">
        Save Coordinates
      </button>
    </div>
  );
};

export default MapComponent;
