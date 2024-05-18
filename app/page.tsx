"use client";

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

// Ensure you have set the environment variable NEXT_PUBLIC_MAPBOXAPI
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXAPI || '';

export default function Home() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLng(position.coords.longitude);
        setLat(position.coords.latitude);

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [position.coords.longitude, position.coords.latitude],
          zoom: zoom,
          dragRotate: false,
          touchZoomRotate: false,
          projection: 'mercator'
        });

        map.current.on('move', () => {
          const { lng, lat } = map.current.getCenter();
          setLng(lng.toFixed(4));
          setLat(lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
      }, () => {
        // Fallback coordinates if user denies location access
        const defaultLng = -122.9202;
        const defaultLat = 49.2791;
        setLng(defaultLng);
        setLat(defaultLat);

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [defaultLng, defaultLat],
          zoom: zoom,
          dragRotate: false,
          touchZoomRotate: false,
          projection: 'mercator'
        });

        map.current.on('move', () => {
          const { lng, lat } = map.current.getCenter();
          setLng(lng.toFixed(4));
          setLat(lat.toFixed(4));
          setZoom(map.current.getZoom().toFixed(2));
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [zoom]);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" style={{ height: '100vh', width: '100%' }} />
    </div>
  );
}
