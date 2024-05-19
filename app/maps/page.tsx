"use client"; // Add this at the top of your component file

import React, { useEffect, useRef, useState } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { FaPlus, FaMinus, FaHome } from 'react-icons/fa'; // Import icons including FaHome
import mapboxgl, { GeoJSONSource } from 'mapbox-gl';

// Extend Window interface for File System Access API
interface CustomWindow extends Window {
  showSaveFilePicker?: (options: any) => Promise<any>;
}

// Set Mapbox access token from environment variables
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXAPI || '';

const initialCoordinates = { lng: -122.9199, lat: 49.2781 }; // Default coordinates (e.g., Simon Fraser University)

const MapComponent = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const geocoderContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const [marker, setMarker] = useState<mapboxgl.Marker | null>(null);
  const [markerCoordinates, setMarkerCoordinates] = useState(initialCoordinates);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false); // State to manage marker visibility
  const [isExpanded, setIsExpanded] = useState(false); // State to manage menu expansion
  const mapInstanceRef = useRef<any>(null);
function timeAgo(date: any) {
    const now = new Date();
    const secondsPast = (now.getTime() - date.getTime()) / 1000;
  
    if (secondsPast < 60) { // less than a minute
      return `${Math.round(secondsPast)} seconds ago`;
    }
    if (secondsPast < 3600) { // less than an hour
      return `${Math.round(secondsPast / 60)} minutes ago`;
    }
    if (secondsPast <= 86400) { // less than a day
      return `${Math.round(secondsPast / 3600)} hours ago`;
    }
    if (secondsPast <= 2592000) { // less than a month
      return `${Math.round(secondsPast / 86400)} days ago`;
    }
    if (secondsPast <= 31536000) { // less than a year
      return `${Math.round(secondsPast / 2592000)} months ago`;
    }
    return `${Math.round(secondsPast / 31536000)} years ago`;
  }
  
  useEffect(() => {
    if (map) return; // Prevent reinitialization

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: mapContainerRef.current!, // Assert non-null
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [markerCoordinates.lng, markerCoordinates.lat],
        zoom: 14,
        dragRotate: false,
        touchZoomRotate: false,
      });

      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
      });

      if (geocoderContainerRef.current) {
        geocoderContainerRef.current.innerHTML = '';
        geocoderContainerRef.current.appendChild(geocoder.onAdd(mapInstance));
      }

      const newMarker = new mapboxgl.Marker({
        draggable: false,
        color: 'blue'
      }).setLngLat([markerCoordinates.lng, markerCoordinates.lat]);

      setMarker(newMarker);
      setMap(mapInstance);

      mapInstance.on('move', () => {
        const center = mapInstance.getCenter();
        newMarker.setLngLat(center);
        setMarkerCoordinates({ lng: center.lng, lat: center.lat });
      });

      function fetchDataAndRefreshMap() {
        fetch('https://potholepatrolapi.co:8001/database.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(data => {
            // Check if the earthquakes layer already exists
            if (mapInstance.getLayer('earthquakes-layer')) {
              // Update the data source instead of removing and re-adding the layer
              const source = mapInstance.getSource('earthquakes') as GeoJSONSource;
              if (source) {
                source.setData(data);
              }
            } else {
              // Add new data source and layer
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

              // Initialize popup
              const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
              });

              // Add tooltip
              mapInstance.on('mousemove', 'earthquakes-layer', (e) => {
                if (e.features && e.features.length > 0) {
                  const feature = e.features[0];
                  const properties = feature.properties;
                  
                  const time = properties?.time ? new Date(properties.time) : null;
                  const isValidTime = time && !isNaN(time.getTime());
              
                  let htmlContent = `<p>No valid data available</p>`;
                  if (isValidTime) {
                    htmlContent = `<p>${timeAgo(time)}</p>`;
                  }
              
                  const coordinates = (feature.geometry as GeoJSON.Point).coordinates;
                  const lngLat: [number, number] = coordinates as [number, number]; // Convert to [number, number]
                  popup.setLngLat(lngLat)
                    .setHTML(htmlContent)
                    .addTo(mapInstance);
                }
              });
              // Remove tooltip when the mouse leaves the layer
              mapInstance.on('mouseleave', 'earthquakes-layer', () => {
                popup.remove();
              });
            }
          })
          .catch(error => console.error('There was a problem with the fetch operation:', error));
      }

      mapInstance.on('load', () => {
        fetchDataAndRefreshMap();
        setInterval(fetchDataAndRefreshMap, 1000);
      });

      const nav = new mapboxgl.NavigationControl();
      mapInstance.addControl(nav, 'bottom-right');

      const interval = setInterval(() => {
        const icon = document.querySelector('.mapboxgl-ctrl-geocoder--icon') as HTMLElement;
        if (icon) {
          icon.style.display = 'none';
          clearInterval(interval);
        }
      }, 100);

      return () => {
        if (geocoderContainerRef.current) {
          geocoderContainerRef.current.innerHTML = '';
        }
        mapInstance.remove();
      };
    };

    initializeMap();
  }, [map, markerCoordinates]);

  const toggleMarker = () => {
    if (marker && map) {
      isMarkerVisible ? marker.remove() : marker.addTo(map);
    }
    setIsMarkerVisible(!isMarkerVisible);
    setIsExpanded(!isExpanded);
  };

  const saveCoordinates = async () => {
    const postData = {
      type: "Feature",
      properties: {
        driver_license_number: "78499",
        image_id: "39934",
        time: Date.now()
      },
      geometry: {
        type: "Point",
        coordinates: [markerCoordinates.lng, markerCoordinates.lat, 0.0]
      }
    };
    
    const url = "https://potholepatrolapi.co:8001/";
    
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Success:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
      toggleMarker();
  };

  const goToInitialCoordinates = () => {
    if (map) {
      map.flyTo({ center: [initialCoordinates.lng, initialCoordinates.lat], zoom: 14 });
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
          Place Pot Hole
        </button>
      )}
      <button onClick={goToInitialCoordinates} className="home-button">
        <FaHome />
      </button>
    </div>
  );
};

export default MapComponent;
