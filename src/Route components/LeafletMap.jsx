import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LeafletMap = ({ coordinates }) => {
  if (!coordinates || coordinates.length < 2) {
    return (
      <div className="map-container">
        <h3>🗺️ Route Map</h3>
        <div className="map-placeholder">
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            color: 'white'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🗺️</div>
              <h3>Interactive Route Map</h3>
              <p>Enter addresses to see optimized route</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const center = coordinates[0];
  const positions = coordinates.map(coord => [coord.lat, coord.lng]);

  return (
    <div className="map-container">
      <h3> Optimized Route</h3>
      <MapContainer 
        center={[center.lat, center.lng]} 
        zoom={12} 
        style={{ height: '400px', width: '100%', borderRadius: '10px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        
        {coordinates.map((coord, index) => (
          <Marker key={index} position={[coord.lat, coord.lng]}>
            <Popup>
              <strong>Stop {index + 1}</strong><br />
              {coord.formattedAddress}
            </Popup>
          </Marker>
        ))}
        
        <Polyline positions={positions} color="blue" weight={4} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;