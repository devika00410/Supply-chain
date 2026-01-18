// CostBreakdown.jsx - FIXED
import React from 'react';

const CostBreakdown = ({ data }) => {
  const costSaved = (data.originalCost - data.optimizedCost).toFixed(2);
  
  return (
    <div className="cost-breakdown">
      <h3>💰 Cost Analysis</h3>
      <div className="cost-items">
        <div className="cost-item">
          <span className="cost-label">Original Cost:</span>
          <span className="cost-value">${data.originalCost?.toFixed(2)}</span>
        </div>
        <div className="cost-item">
          <span className="cost-label">Optimized Cost:</span>
          <span className="cost-value optimized">${data.optimizedCost?.toFixed(2)}</span>
        </div>
        <div className="cost-savings">
          <span className="savings-label">Total Savings:</span>
          <span className="savings-amount">${costSaved}</span>
        </div>
      </div>
    </div>
  );
};

export default CostBreakdown;