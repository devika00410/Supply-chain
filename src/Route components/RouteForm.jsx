// RouteForm.jsx - FIXED VERSION
import React, { useState } from 'react';
import mapsService from '../Services/MapService';

const RouteForm = ({ setRouteData, loading, setLoading }) => {
  const [addresses, setAddresses] = useState(['', '']);
  const [error, setError] = useState('');

  const updateAddress = (index, newAddress) => {
    const newAddresses = [...addresses];
    newAddresses[index] = newAddress;
    setAddresses(newAddresses);
    setError('');
  };

  const addAddress = () => {
    setAddresses([...addresses, '']);
  };

  const removeAddress = (index) => {
    if (addresses.length > 2) {
      const newAddresses = addresses.filter((_, i) => i !== index);
      setAddresses(newAddresses);
    }
  };

  // FIXED: Use the correct method name
  const detectStatesFromAddresses = (addressList) => {
    return mapsService.getDetectedStates(addressList); // Use getDetectedStates instead of detectState
  };

  const handleOptimize = async () => {
    setError('');
    setLoading(true);
    
    try {
      const validAddresses = addresses.filter(addr => addr.trim() !== '');
      
      if (validAddresses.length < 2) {
        throw new Error('Please enter at least 2 valid addresses');
      }

      const routeResult = await mapsService.calculateRoute(validAddresses);
      const costs = mapsService.calculateCosts(routeResult.distance, routeResult.duration);
      
      const result = {
        optimizedDistance: parseFloat(routeResult.distance.toFixed(1)),
        optimizedTime: parseFloat(routeResult.duration.toFixed(0)),
        originalDistance: parseFloat((routeResult.distance * 1.25).toFixed(1)),
        originalTime: parseFloat((routeResult.duration * 1.3).toFixed(0)),
        optimizedCost: costs.optimized,
        originalCost: costs.total,
        coordinates: routeResult.coordinates,
        validatedAddresses: routeResult.validatedAddresses,
        numberOfStops: validAddresses.length,
        costBreakdown: costs,
        detectedStates: routeResult.states || [],
        source: routeResult.source
      };

      setRouteData(result);
    } catch (error) {
      setError(error.message);
      setRouteData(null);
    } finally {
      setLoading(false);
    }
  };

  const validAddressCount = addresses.filter(addr => addr.trim() !== '').length;
  const detectedStates = detectStatesFromAddresses(addresses);

  return (
    <div className="route-form">
      <h3>Enter Delivery Addresses</h3>
      
      {error && (
        <div className="error-message">
          ⚠️ {error}
        </div>
      )}
      
      <div className="address-inputs">
        {addresses.map((address, index) => (
          <div key={index} className="address-input">
            <span className="address-number">{index + 1}</span>
            <input
              value={address}
              onChange={(e) => updateAddress(index, e.target.value)}
              placeholder={`Enter complete address for stop ${index + 1}`}
              disabled={loading}
            />
            {addresses.length > 2 && (
              <button 
                type="button"
                className="remove-address"
                onClick={() => removeAddress(index)}
                disabled={loading}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>
      
      <button 
        type="button"
        className="add-address-btn"
        onClick={addAddress}
        disabled={loading || addresses.length >= 8}
      >
        + Add Stop ({addresses.length}/8)
      </button>
      
      <div className="route-info">
        <p>📝 <strong>{validAddressCount} addresses entered</strong></p>
        {validAddressCount >= 2 && detectedStates.length > 0 && (
          <p>🌍 <strong>Detected States:</strong> {detectedStates.join(', ')}</p>
        )}
        {validAddressCount >= 2 && detectedStates.length === 0 && (
          <p>📍 Include state names (e.g., "Andhra Pradesh", "Tamil Nadu") for better accuracy</p>
        )}
      </div>
      
      <button 
        className="optimize-btn"
        onClick={handleOptimize}
        disabled={loading || validAddressCount < 2}
      >
        {loading ? '🔄 Calculating Optimal Route...' : '🚀 Optimize Route'}
      </button>
    </div>
  );
};

export default RouteForm;