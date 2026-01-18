// RouteMap.jsx - UPDATED WITH LARGER SIZE
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const RouteMap = ({ coordinates, validatedAddresses }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (!coordinates || coordinates.length < 2) return;

    // Initialize map
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView(
        [coordinates[0].lat, coordinates[0].lng], 
        6
      );

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(mapInstance.current);
    }

    // Clear existing layers
    mapInstance.current.eachLayer((layer) => {
      if (layer instanceof L.Marker || layer instanceof L.Polyline) {
        mapInstance.current.removeLayer(layer);
      }
    });

    // Add markers
    coordinates.forEach((coord, index) => {
      L.marker([coord.lat, coord.lng])
        .addTo(mapInstance.current)
        .bindPopup(`
          <div style="padding: 12px; min-width: 250px;">
            <strong style="font-size: 16px;">📍 Stop ${index + 1}</strong><br/>
            <span style="font-size: 14px;">${coord.formattedAddress}</span><br/>
            <small style="color: #666;">Lat: ${coord.lat.toFixed(4)}°</small><br/>
            <small style="color: #666;">Lng: ${coord.lng.toFixed(4)}°</small>
          </div>
        `);
    });

    // Add polyline
    const latlngs = coordinates.map(coord => [coord.lat, coord.lng]);
    L.polyline(latlngs, {
      color: '#3b82f6',
      weight: 5,
      opacity: 0.8,
      smoothFactor: 1
    }).addTo(mapInstance.current);

    // Fit bounds
    const bounds = L.latLngBounds(latlngs);
    mapInstance.current.fitBounds(bounds.pad(0.1));

  }, [coordinates]);

  if (!coordinates || coordinates.length < 2) {
    return (
      <div className="map-container-large">
        <h3> Route Visualization</h3>
        <div className="map-placeholder-large">
          <div className="placeholder-content-large">
            <div className="map-icon-large"></div>
            <h4>Interactive Route Map</h4>
            <p>Enter at least 2 addresses to see the optimized route</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="map-container-large">
      <h3>Route Visualization</h3>
      <div 
        ref={mapRef} 
        className="leaflet-map-large"
      />
      
      <div className="route-details-large">
        <h4>Route Information</h4>
        <div className="stops-list-large">
          {coordinates.map((coord, index) => (
            <div key={index} className="stop-item-large">
              <div className="stop-marker-large">{index + 1}</div>
              <div className="stop-info-large">
                <div className="stop-address-large">{coord.formattedAddress}</div>
                <div className="stop-coordinates-large">
                  {coord.lat.toFixed(4)}°, {coord.lng.toFixed(4)}°
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RouteMap;