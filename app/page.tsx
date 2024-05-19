"use client";

import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import 'mapbox-gl/dist/mapbox-gl.css'; // Ensure to import default Mapbox and Geocoder styles

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXAPI || '';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const geocoderContainer = useRef(null); // Dedicated container for the geocoder

  useEffect(() => {
    if (!mapContainer.current) return; // exit if map container not initialized

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-123.1207, 49.2827],
      zoom: 9
    });

    // Initialize the geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      placeholder: 'Search for places...',
      marker: false,
    });

    // Append geocoder to the geocoderContainer directly, without adding to map controls
    if (geocoderContainer.current) {
      geocoderContainer.current.appendChild(geocoder.onAdd(map));
    }

    return () => {
      map.remove(); // Cleanup map when component unmounts
      if (geocoderContainer.current) {
        geocoderContainer.current.removeChild(geocoderContainer.current.firstChild);
      }
    };
  }, []);

  return (
    <div>
      <div ref={mapContainer} className="map-container" style={{ height: '100vh' }}>
        <div ref={geocoderContainer} className="geocoder-container" />
      </div>
    </div>
  );
};

export default MapComponent;
