import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaTruck, 
  FaShieldAlt, 
  FaMoneyBillWave, 
  FaChartLine,
  FaArrowRight,
  FaCheckCircle,
  FaUserFriends,
  FaClock
} from 'react-icons/fa';

const HomeServiceProviderSnippet = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-3xl p-8 shadow-xl border border-sky-100 my-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-gradient-to-br from-sky-50 to-white rounded-2xl mb-6">
          <FaTruck className="w-12 h-12 text-sky-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          For Service Providers
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Join our platform and connect with verified businesses. Focus on delivery while we handle payments and compliance.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Benefit 1 */}
        <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
            <FaMoneyBillWave className="w-7 h-7 text-sky-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Keep 96% Earnings</h3>
          <p className="text-gray-600">
            Only 4% platform fee per transaction. No hidden charges or monthly subscriptions.
          </p>
        </div>

        {/* Benefit 2 */}
        <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
            <FaUserFriends className="w-7 h-7 text-sky-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Verified Clients</h3>
          <p className="text-gray-600">
            Access pre-vetted business customers. No need to spend on customer acquisition.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
            <FaShieldAlt className="w-7 h-7 text-sky-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Legal Compliance</h3>
          <p className="text-gray-600">
            We handle GST, contracts, and legal compliance. Focus on your core business.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100">
          <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
            <FaClock className="w-7 h-7 text-sky-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Payments</h3>
          <p className="text-gray-600">
            Guaranteed payments within 7-15 days. Secure escrow system for peace of mind.
          </p>
        </div>
      </div>

      {/* Key Points */}
      <div className="bg-gradient-to-r from-sky-50 to-white rounded-2xl p-6 mb-12 border border-sky-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <FaCheckCircle className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Free Registration</h4>
              <p className="text-sm text-gray-600">No upfront costs</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <FaCheckCircle className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">GST Compliant</h4>
              <p className="text-sm text-gray-600">Automated invoicing</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <FaCheckCircle className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">24/7 Support</h4>
              <p className="text-sm text-gray-600">Dedicated assistance</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Grow Your Business?
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Join hundreds of logistics providers already scaling with TransChain
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/service-provider')}
            className="px-8 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold rounded-lg hover:from-sky-700 hover:to-sky-600 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            <FaTruck className="w-5 h-5" />
            Register as Service Provider
            <FaArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => navigate('/how-it-works')}
            className="px-6 py-3 bg-white text-sky-700 font-medium rounded-lg hover:bg-sky-50 transition-colors border border-sky-200"
          >
            Learn How It Works
          </button>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          Free to join • Verified network • Scale your operations
        </p>
      </div>
    </div>
  );
};

export default HomeServiceProviderSnippet;