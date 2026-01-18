import React from 'react';
import { 
  FaGasPump, 
  FaRoad, 
  FaUserTie, 
  FaBox, 
  FaWrench, 
  FaBuilding,
  FaChartLine,
  FaLeaf,
  FaMoneyBillWave,
  FaTruck
} from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';

const OptimizationResults = ({ data }) => {
  const distanceSaved = (data.originalDistance - data.optimizedDistance).toFixed(1);
  const timeSaved = (data.originalTime - data.optimizedTime);
  const efficiency = ((distanceSaved / data.originalDistance) * 100).toFixed(0);
  const costSaved = (data.originalCost - data.optimizedCost).toFixed(2);

  // Calculate detailed cost breakdown based on route data
  const calculateCostBreakdown = () => {
    const distance = data.optimizedDistance;
    const time = data.optimizedTime;
    const stops = data.numberOfStops;
    
    // Dynamic calculations based on Indian logistics rates
    return {
      // Variable Costs (based on distance/time)
      fuelCost: (distance * 0.85).toFixed(2), // ₹85/km for diesel
      tollCharges: (distance * 0.12).toFixed(2), // 12% of distance
      driverCosts: ((time / 60) * 400).toFixed(2), // ₹400/hour
      
      // Fixed Costs (based on stops)
      handlingCharges: (stops * 180).toFixed(2), // ₹180 per stop
      loadingUnloading: ((stops - 1) * 150).toFixed(2), // ₹150 per delivery point
      
      // Operational Costs
      vehicleMaintenance: (distance * 0.25).toFixed(2), // ₹0.25/km
      insuranceCosts: (distance * 0.08).toFixed(2), // 8% of distance
      adminOverhead: (distance * 0.15).toFixed(2), // 15% admin
      
      // Sustainability Costs
      carbonEmissions: (distance * 0.9).toFixed(1), // kg CO2 per km
      carbonCost: (distance * 0.5).toFixed(2), // ₹0.5 per km carbon cost
      
      // Totals
      variableCosts: 0, // Will be calculated
      fixedCosts: 0, // Will be calculated
      operationalCosts: 0, // Will be calculated
      totalCalculated: 0 // Will be calculated
    };
  };

  const costBreakdown = calculateCostBreakdown();
  
  // Calculate totals
  costBreakdown.variableCosts = (
    parseFloat(costBreakdown.fuelCost) +
    parseFloat(costBreakdown.tollCharges) +
    parseFloat(costBreakdown.driverCosts)
  ).toFixed(2);
  
  costBreakdown.fixedCosts = (
    parseFloat(costBreakdown.handlingCharges) +
    parseFloat(costBreakdown.loadingUnloading)
  ).toFixed(2);
  
  costBreakdown.operationalCosts = (
    parseFloat(costBreakdown.vehicleMaintenance) +
    parseFloat(costBreakdown.insuranceCosts) +
    parseFloat(costBreakdown.adminOverhead)
  ).toFixed(2);
  
  costBreakdown.totalCalculated = (
    parseFloat(costBreakdown.variableCosts) +
    parseFloat(costBreakdown.fixedCosts) +
    parseFloat(costBreakdown.operationalCosts)
  ).toFixed(2);

  return (
    <div className="optimization-results bg-white rounded-2xl shadow-lg p-6">
      {/* Header with Savings Highlight */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <GiReceiveMoney className="text-green-600" />
            AI Cost Breakdown & Results
          </h3>
          <p className="text-gray-600 mt-1">Detailed analysis of your optimized route</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-green-600">₹{costSaved}</div>
          <div className="text-sm text-gray-600">Total Savings</div>
        </div>
      </div>

      {/* Efficiency Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-xl">
          <div className="text-sm text-blue-700 font-medium mb-1">Distance Saved</div>
          <div className="text-2xl font-bold text-blue-900">{distanceSaved} km</div>
          <div className="text-xs text-blue-600">{efficiency}% more efficient</div>
        </div>
        <div className="bg-green-50 p-4 rounded-xl">
          <div className="text-sm text-green-700 font-medium mb-1">Time Saved</div>
          <div className="text-2xl font-bold text-green-900">
            {Math.floor(timeSaved / 60)}h {Math.floor(timeSaved % 60)}m
          </div>
          <div className="text-xs text-green-600">Faster delivery</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-xl">
          <div className="text-sm text-purple-700 font-medium mb-1">Stops Optimized</div>
          <div className="text-2xl font-bold text-purple-900">{data.numberOfStops}</div>
          <div className="text-xs text-purple-600">Optimal sequence</div>
        </div>
      </div>

      {/* Detailed Cost Breakdown */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <FaChartLine className="text-sky-600" />
          Detailed Cost Analysis
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Variable Costs */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-4 rounded-xl border border-blue-100">
            <h5 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
              <FaTruck className="w-4 h-4" />
              Variable Costs
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaGasPump className="w-4 h-4 text-blue-600" />
                  <span>Fuel</span>
                </div>
                <span className="font-semibold">₹{costBreakdown.fuelCost}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaRoad className="w-4 h-4 text-blue-600" />
                  <span>Tolls</span>
                </div>
                <span className="font-semibold">₹{costBreakdown.tollCharges}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaUserTie className="w-4 h-4 text-blue-600" />
                  <span>Driver</span>
                </div>
                <span className="font-semibold">₹{costBreakdown.driverCosts}</span>
              </div>
              <div className="pt-2 border-t border-blue-200">
                <div className="flex justify-between items-center font-bold">
                  <span>Subtotal</span>
                  <span className="text-blue-800">₹{costBreakdown.variableCosts}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fixed Costs */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
            <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <FaBox className="w-4 h-4" />
              Fixed Costs
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaBox className="w-4 h-4 text-green-600" />
                  <span>Handling</span>
                </div>
                <span className="font-semibold">₹{costBreakdown.handlingCharges}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaBox className="w-4 h-4 text-green-600" />
                  <span>Loading/Unloading</span>
                </div>
                <span className="font-semibold">₹{costBreakdown.loadingUnloading}</span>
              </div>
              <div className="pt-2 border-t border-green-200">
                <div className="flex justify-between items-center font-bold">
                  <span>Subtotal</span>
                  <span className="text-green-800">₹{costBreakdown.fixedCosts}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Operational & Environmental Costs */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl border border-amber-100">
            <h5 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <FaWrench className="w-4 h-4" />
              Operational Costs
            </h5>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaWrench className="w-4 h-4 text-amber-600" />
                  <span>Maintenance</span>
                </div>
                <span className="font-semibold">₹{costBreakdown.vehicleMaintenance}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaBuilding className="w-4 h-4 text-amber-600" />
                  <span>Insurance & Admin</span>
                </div>
                <span className="font-semibold">₹{(
                  parseFloat(costBreakdown.insuranceCosts) + 
                  parseFloat(costBreakdown.adminOverhead)
                ).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <FaLeaf className="w-4 h-4 text-green-600" />
                  <span>Carbon ({costBreakdown.carbonEmissions}kg)</span>
                </div>
                <span className="font-semibold text-green-700">₹{costBreakdown.carbonCost}</span>
              </div>
              <div className="pt-2 border-t border-amber-200">
                <div className="flex justify-between items-center font-bold">
                  <span>Subtotal</span>
                  <span className="text-amber-800">₹{costBreakdown.operationalCosts}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Cost Comparison */}
        <div className="mt-6 p-6 bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl border border-sky-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h5 className="font-bold text-sky-900 mb-1">Total Calculated Cost</h5>
              <p className="text-sm text-sky-700">Based on current market rates</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-500 line-through">₹{data.originalCost.toFixed(2)}</div>
                <div className="text-xs text-gray-500">Original Estimate</div>
              </div>
              <div className="text-3xl font-bold text-green-600">→</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600">₹{costBreakdown.totalCalculated}</div>
                <div className="text-xs text-sky-600">AI Calculated Cost</div>
              </div>
            </div>
          </div>
          
          {/* AI Insights */}
          <div className="mt-4 p-4 bg-white rounded-lg border border-sky-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-sky-100 rounded-lg">
                <FaChartLine className="w-5 h-5 text-sky-600" />
              </div>
              <div>
                <h6 className="font-medium text-gray-900 mb-1">AI Insight</h6>
                <p className="text-sm text-gray-700">
                  Your optimized route saves ₹{costSaved} primarily through reduced fuel consumption (₹{(distanceSaved * 0.85).toFixed(2)}) 
                  and efficient stop sequencing. The AI algorithm identified {Math.floor(timeSaved / 60)} hours of idle time reduction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Summary */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h4 className="text-lg font-bold text-gray-900 mb-4">Route Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{data.numberOfStops}</div>
            <div className="text-sm text-gray-600">Total Stops</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{data.numberOfStops - 1}</div>
            <div className="text-sm text-gray-600">Delivery Segments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{data.optimizedDistance} km</div>
            <div className="text-sm text-gray-600">Optimized Distance</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{Math.floor(data.optimizedTime / 60)}h {data.optimizedTime % 60}m</div>
            <div className="text-sm text-gray-600">Estimated Time</div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full">
            <FaMoneyBillWave className="w-4 h-4" />
            <span className="font-medium">Cost per km: ₹{(data.optimizedCost / data.optimizedDistance).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizationResults;