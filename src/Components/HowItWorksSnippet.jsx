import React from 'react';
import { FaPercentage, FaHandshake, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HowItWorksSnippet = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/how-it-works');
  };

  return (
    <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-6 md:p-8 shadow-lg border border-sky-100">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="lg:w-2/3">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <FaHandshake className="text-sky-600" />
            How TransChain Works
          </h3>
          <p className="text-gray-700 mb-4">
            We connect verified logistics service providers with businesses, ensuring transparency, 
            legal compliance, and secure transactions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-sky-100 rounded-lg flex items-center justify-center">
                  <FaPercentage className="w-4 h-4 text-sky-600" />
                </div>
                <h4 className="font-semibold text-gray-900">4% Platform Fee</h4>
              </div>
              <p className="text-sm text-gray-600">Transparent pricing, no hidden charges</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <FaShieldAlt className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Legal Compliance</h4>
              </div>
              <p className="text-sm text-gray-600">GDPR, DPDP Act, GST, Indian laws</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-sky-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-blue-600">₹</span>
                </div>
                <h4 className="font-semibold text-gray-900">Secure Payments</h4>
              </div>
              <p className="text-sm text-gray-600">7-15 day payout, escrow protection</p>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/3 text-center">
          <button
            onClick={handleLearnMore}
            className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl"
          >
            Learn How It Works
            <FaArrowRight className="w-4 h-4" />
          </button>
          <p className="text-sm text-gray-600 mt-3">
            Detailed breakdown of fees, payment flow, and legal policies
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSnippet;