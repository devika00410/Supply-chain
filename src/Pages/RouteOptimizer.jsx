// RouteOptimizer.jsx - SIMPLIFIED VERSION
import React, { useState } from 'react'; 
import { 
  FaRoute, 
  FaMapMarkerAlt, 
  FaRobot,
  FaCalculator,
  FaChartLine
} from 'react-icons/fa';
import RouteForm from '../Route components/RouteForm';
import RouteMap from '../Route components/RouteMap';
import OptimizationResults from '../Route components/OptimizationResults';
import AILogisticsAssistant from '../Pages/AiLogisticsAssistant';
import './RouteOptimizer.css';

export default function RouteOptimizer() {
  const [routeData, setRouteData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <FaRoute className="text-sky-600" />
                AI-Powered Route Optimization
              </h1>
              <p className="text-gray-600 mt-2">
                Optimize delivery routes, reduce costs, and get AI-powered logistics insights
              </p>
            </div>
            
            {/* AI Assistant Toggle */}
            <button
              onClick={() => setShowAIAssistant(!showAIAssistant)}
              className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-medium rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2"
            >
              <FaRobot className="w-5 h-5" />
              {showAIAssistant ? 'Hide AI Assistant' : 'Show AI Assistant'}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Input Form & AI Chat */}
          <div className="lg:col-span-1 space-y-8">
            {/* Input Form */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                <FaMapMarkerAlt className="w-6 h-6 text-sky-600" />
                <h2 className="text-xl font-bold text-gray-900">Route Planner</h2>
              </div>
              
              <RouteForm 
                setRouteData={setRouteData}
                loading={loading}
                setLoading={setLoading}
              />
            </div>

            {/* AI Logistics Assistant */}
            {showAIAssistant && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <AILogisticsAssistant routeData={routeData} />
              </div>
            )}
          </div>

          {/* Middle Column - Map & Results */}
          <div className="lg:col-span-2 space-y-8">
            {/* Results Summary */}
            {routeData && !loading && (
              <div className="space-y-8">
                {/* Map Component */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <FaChartLine className="w-6 h-6 text-sky-600" />
                    <h2 className="text-xl font-bold text-gray-900">Optimized Route Visualization</h2>
                  </div>
                  
                  <RouteMap 
                    coordinates={routeData.coordinates}
                    validatedAddresses={routeData.validatedAddresses}
                  />
                </div>

                {/* AI Cost Breakdown & Results Component */}
                <OptimizationResults data={routeData} />
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border-4 border-sky-200 border-t-sky-600 rounded-full animate-spin mb-6"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Calculating Optimal Route</h3>
                  <p className="text-gray-600">
                    Analyzing stops, calculating distances, and optimizing for cost efficiency...
                  </p>
                </div>
              </div>
            )}

            {/* Empty State */}
            {!routeData && !loading && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaMapMarkerAlt className="w-10 h-10 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">No Route Calculated Yet</h3>
                  <p className="text-gray-600 mb-8">
                    Enter delivery addresses to get AI-powered route optimization with detailed cost breakdown
                  </p>
                  <div className="bg-sky-50 rounded-xl p-6">
                    <h4 className="font-semibold text-sky-900 mb-3">What you'll get:</h4>
                    <ul className="text-sm text-sky-800 space-y-2">
                      <li className="flex items-center gap-2">
                        <FaCalculator className="w-4 h-4" />
                        <span>Detailed AI Cost Breakdown (Fuel, Toll, Handling, etc.)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaChartLine className="w-4 h-4" />
                        <span>Route Optimization & Time Savings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FaRobot className="w-4 h-4" />
                        <span>AI Insights for Better Decisions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}