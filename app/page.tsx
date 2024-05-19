"use client";

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// Ensure you have set the environment variable NEXT_PUBLIC_MAPBOXAPI
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOXAPI || '';

export default function Home() {
  const mapContainer = useRef<any>('');
  const map = useRef<any>(null);
  const [lng, setLng] = useState<any>(null);
  const [lat, setLat] = useState<any>(null);
  const [zoom, setZoom] = useState(9);
  const geocoderContainer = useRef(null);

  useEffect(() => {
    if (map.current) return; // Initialize map only once

    const initializeMap = ({ setLng, setLat, lng, lat }: any) => {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
        dragRotate: false,
        touchZoomRotate: false,
        projection: 'mercator' as unknown as mapboxgl.Projection,
      });

      map.current.on('move', () => {
        const { lng, lat } = map.current!.getCenter();
        setLng(lng.toFixed(4));
        setLat(lat.toFixed(4));
        setZoom(map.current!.getZoom().toFixed(2));
      });

      // Add the geocoder to the map
      const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false,
      });
      geocoder.addTo(geocoderContainer.current!);

      geocoder.on('result', (e) => {
        const { result } = e;
        const [lng, lat] = result.center;
        setLng(lng);
        setLat(lat);
        map.current!.flyTo({ center: result.center, zoom: zoom });
      });
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          setLng(longitude);
          setLat(latitude);
          initializeMap({ setLng, setLat, lng: longitude, lat: latitude });
        },
        () => {
          const defaultLng = -122.9202;
          const defaultLat = 49.2791;
          setLng(defaultLng);
          setLat(defaultLat);
          initializeMap({ setLng, setLat, lng: defaultLng, lat: defaultLat });
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, [zoom]);

  return (
    <div>
      <div ref={geocoderContainer} className="geocoder-container" />
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
