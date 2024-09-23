import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Map = () => {
  const mapLocation = useSelector((state) => state.mapLocation);  // Get the location from Redux
  const mapRef = useRef(null);  // Store reference to map instance
  const markerRef = useRef(null);  // Store reference to marker instance

  useEffect(() => {
    if (window.google && mapRef.current === null) {
      // Initialize map if not already initialized
      mapRef.current = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 0, lng: 0 },
        zoom: 2,
      });
    }
  }, []);

  useEffect(() => {
    if (mapLocation && mapRef.current) {
      // Update map center when location changes
      const map = mapRef.current;

      map.setCenter(mapLocation);
      map.setZoom(5);

      if (markerRef.current) {
        markerRef.current.setPosition(mapLocation);
      } else {
        // Create a new marker if not created yet
        markerRef.current = new window.google.maps.Marker({
          position: mapLocation,
          map: map,
        });
      }
    }
  }, [mapLocation]);

  return (
    <div id="map" style={{ width: '100%', height: '500px', marginTop: '20px' }}></div>
  );
};

export default Map;
