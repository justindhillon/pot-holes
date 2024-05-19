"use client";

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// Ensure you have set the environment variable NEXT_PUBLIC_MAPBOXAPI
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXAPI || '';

export default function Home() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const geocoderContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null); // Adjusted for TypeScript
  const [lng, setLng] = useState(-123.1207); // Default longitude
  const [lat, setLat] = useState(49.2827); // Default latitude
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // Prevent re-initializing

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      dragRotate: false,
      touchZoomRotate: false,
    });

    // Map events
    map.current.on('move', () => {
      const center = map.current.getCenter();
      setLng(parseFloat(center.lng.toFixed(4)));
      setLat(parseFloat(center.lat.toFixed(4)));
      setZoom(parseFloat(map.current.getZoom().toFixed(2)));
    });

    // Initialize geocoder
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false,
      container: geocoderContainer.current! // Using the non-null assertion
    });

    geocoder.addTo(map.current);

    geocoder.on('result', (e) => {
      const result = e.result;
      map.current!.flyTo({
        center: result.center,
        zoom: zoom
      });
    });

    // Handle geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { longitude, latitude } = position.coords;
          setLng(longitude);
          setLat(latitude);
          map.current!.setCenter([longitude, latitude]);
        },
        () => {
          console.error('Geolocation permission denied');
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div>
      <div ref={geocoderContainer} className="geocoder-container" />
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
