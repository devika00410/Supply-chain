import React, { useState } from 'react';
import { 
  FaBuilding, 
  FaUser, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFileAlt,
  FaRupeeSign,
  FaShieldAlt,
  FaCheckCircle,
  FaUpload,
  FaIdCard,
  FaTruck,
  FaWarehouse
} from 'react-icons/fa';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';

const ServiceProviderRegister = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    businessName: '',
    businessType: 'sole_proprietorship',
    yearEstablished: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    
    // Step 2: Business Details
    gstin: '',
    pan: '',
    businessAddress: '',
    operationalCities: [],
    serviceCategories: [],
    teamSize: '',
    
    // Step 3: Services & Pricing
    servicesOffered: [],
    pricingModel: 'per_kg',
    minOrderValue: '',
    deliveryRadius: '',
    
    // Step 4: Documents
    businessRegistration: null,
    gstCertificate: null,
    panCard: null,
    bankAccountProof: null,
    
    // Step 5: Bank Details
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    accountType: 'current',
    
    // Agreement
    acceptTerms: false,
    acceptPrivacy: false,
    acceptGstTerms: false
  });

  const serviceCategories = [
    'Road Transportation',
    'Warehousing',
    'Cold Chain Logistics',
    'Last Mile Delivery',
    'Express Logistics',
    'Heavy Haulage',
    'Packaging Services',
    'Customs Clearance',
    'Inventory Management',
    'Supply Chain Consulting'
  ];

  const pricingModels = [
    { id: 'per_kg', label: 'Per KG/KM', icon: '⚖️' },
    { id: 'per_truck', label: 'Per Truck/Trip', icon: '🚚' },
    { id: 'monthly', label: 'Monthly Contract', icon: '📅' },
    { id: 'project', label: 'Project Basis', icon: '📋' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      serviceCategories: prev.serviceCategories.includes(service)
        ? prev.serviceCategories.filter(s => s !== service)
        : [...prev.serviceCategories, service]
    }));
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration submission
    console.log('Registration data:', formData);
    // API call to register service provider
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Register as a Service Provider
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join TransChain's network of verified logistics partners and grow your business
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4, 5].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                  step >= stepNum 
                    ? 'bg-gradient-to-r from-sky-600 to-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > stepNum ? (
                    <FaCheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-bold">{stepNum}</span>
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  step >= stepNum ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {stepNum === 1 && 'Basic Info'}
                  {stepNum === 2 && 'Business Details'}
                  {stepNum === 3 && 'Services'}
                  {stepNum === 4 && 'Documents'}
                  {stepNum === 5 && 'Bank Details'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-200 mt-6">
            <div 
              className="h-full bg-gradient-to-r from-sky-600 to-blue-600 transition-all duration-300"
              style={{ width: `${(step - 1) * 25}%` }}
            ></div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-sky-100">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <FaBuilding className="w-5 h-5 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Business/Company Name *
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Business Type *
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    >
                      <option value="sole_proprietorship">Sole Proprietorship</option>
                      <option value="partnership">Partnership Firm</option>
                      <option value="llp">LLP (Limited Liability Partnership)</option>
                      <option value="pvt_ltd">Private Limited Company</option>
                      <option value="individual">Individual/Freelancer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Year Established *
                    </label>
                    <select
                      name="yearEstablished"
                      value={formData.yearEstablished}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    >
                      <option value="">Select Year</option>
                      {Array.from({length: 30}, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                      pattern="[0-9]{10}"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-blue-800">
                        Your information is secure and will be used only for verification and communication purposes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Details */}
            {step === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <FaIdCard className="w-5 h-5 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Business Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      GSTIN Number *
                    </label>
                    <input
                      type="text"
                      name="gstin"
                      value={formData.gstin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                      placeholder="22AAAAA0000A1Z5"
                      pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Required for invoicing and tax compliance
                    </p>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      PAN Number *
                    </label>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                      pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                      placeholder="ABCDE1234F"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Business Address *
                    </label>
                    <textarea
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 h-32"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    >
                      <option value="">Select</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-20">6-20 employees</option>
                      <option value="21-50">21-50 employees</option>
                      <option value="51-100">51-100 employees</option>
                      <option value="100+">100+ employees</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-2">
                      Service Categories *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {serviceCategories.map((category) => (
                        <label
                          key={category}
                          className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition-colors ${
                            formData.serviceCategories.includes(category)
                              ? 'bg-sky-50 border-sky-300'
                              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={formData.serviceCategories.includes(category)}
                            onChange={() => handleServiceToggle(category)}
                            className="hidden"
                          />
                          <div className={`w-5 h-5 border rounded flex items-center justify-center ${
                            formData.serviceCategories.includes(category)
                              ? 'bg-sky-600 border-sky-600'
                              : 'border-gray-300'
                          }`}>
                            {formData.serviceCategories.includes(category) && (
                              <FaCheckCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="text-sm">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Services & Pricing */}
            {step === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <GiPayMoney className="w-5 h-5 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Services & Pricing</h2>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-4">
                    Pricing Model *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {pricingModels.map((model) => (
                      <label
                        key={model.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                          formData.pricingModel === model.id
                            ? 'border-sky-500 bg-sky-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="pricingModel"
                          value={model.id}
                          checked={formData.pricingModel === model.id}
                          onChange={handleInputChange}
                          className="hidden"
                        />
                        <div className="text-center">
                          <div className="text-2xl mb-2">{model.icon}</div>
                          <div className="font-medium">{model.label}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Minimum Order Value (₹)
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        <FaRupeeSign className="w-4 h-4 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="minOrderValue"
                        value={formData.minOrderValue}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                        min="0"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Maximum Delivery Radius (KM)
                    </label>
                    <input
                      type="number"
                      name="deliveryRadius"
                      value={formData.deliveryRadius}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      min="0"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Describe Your Services
                  </label>
                  <textarea
                    name="servicesDescription"
                    value={formData.servicesDescription || ''}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 h-32"
                    placeholder="Briefly describe your services, expertise, and what makes you unique..."
                  />
                </div>
              </div>
            )}

            {/* Step 4: Document Upload */}
            {step === 4 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <FaFileAlt className="w-5 h-5 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Document Upload</h2>
                </div>

                <div className="space-y-6">
                  <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-sky-400 transition-colors">
                    <div className="text-center">
                      <FaUpload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h4 className="font-semibold text-gray-900 mb-2">Business Registration Certificate</h4>
                      <p className="text-gray-600 text-sm mb-4">Upload your company registration certificate (PDF/Image)</p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="mx-auto"
                        onChange={(e) => setFormData(prev => ({...prev, businessRegistration: e.target.files[0]}))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FaIdCard className="w-4 h-4 text-blue-600" />
                        GST Certificate
                      </h4>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full"
                        onChange={(e) => setFormData(prev => ({...prev, gstCertificate: e.target.files[0]}))}
                      />
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FaIdCard className="w-4 h-4 text-green-600" />
                        PAN Card
                      </h4>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full"
                        onChange={(e) => setFormData(prev => ({...prev, panCard: e.target.files[0]}))}
                      />
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <GiReceiveMoney className="w-4 h-4 text-purple-600" />
                        Bank Account Proof
                      </h4>
                      <p className="text-xs text-gray-500 mb-2">(Cancelled cheque or bank statement)</p>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full"
                        onChange={(e) => setFormData(prev => ({...prev, bankAccountProof: e.target.files[0]}))}
                      />
                    </div>

                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <FaTruck className="w-4 h-4 text-amber-600" />
                        Vehicle/Fleet Details (Optional)
                      </h4>
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                  <div className="flex items-start gap-3">
                    <FaShieldAlt className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="text-yellow-800 text-sm">
                        All documents are encrypted and stored securely. Verification typically takes 2-3 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Bank Details & Agreement */}
            {step === 5 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <GiReceiveMoney className="w-5 h-5 text-sky-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Bank Details & Agreement</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Account Holder Name *
                    </label>
                    <input
                      type="text"
                      name="accountHolderName"
                      value={formData.accountHolderName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Account Number *
                    </label>
                    <input
                      type="text"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      IFSC Code *
                    </label>
                    <input
                      type="text"
                      name="ifscCode"
                      value={formData.ifscCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                      pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Bank Name *
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      required
                    />
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-4 mt-8">
                  <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="space-y-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptTerms"
                          checked={formData.acceptTerms}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                        <div>
                          <span className="font-medium text-gray-900">
                            I agree to the TransChain Service Provider Agreement *
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            This includes terms for service delivery, payment terms (4% platform fee, 96% payout within 7-15 days), 
                            dispute resolution, and platform usage guidelines.
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptPrivacy"
                          checked={formData.acceptPrivacy}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                        <div>
                          <span className="font-medium text-gray-900">
                            I agree to the Privacy Policy and Data Processing Agreement *
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            Your data will be processed in compliance with Indian DPDP Act 2023 and used for platform operations.
                          </p>
                        </div>
                      </label>

                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="acceptGstTerms"
                          checked={formData.acceptGstTerms}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                        <div>
                          <span className="font-medium text-gray-900">
                            I confirm that my GST details are correct and I will provide GST invoices for all transactions *
                          </span>
                          <p className="text-sm text-gray-600 mt-1">
                            Platform fee of 4% is subject to 18% GST as applicable.
                          </p>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-green-900 mb-1">Verification Process</h4>
                        <p className="text-green-800 text-sm">
                          After submission, your application will be reviewed within 2-3 business days. 
                          Upon approval, you'll receive login credentials and can start receiving orders.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              )}
              
              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white font-medium rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all duration-300 ml-auto"
                >
                  Continue
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 ml-auto shadow-lg hover:shadow-xl"
                >
                  Submit Registration
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-sky-100">
              <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GiPayMoney className="w-6 h-6 text-sky-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">4% Platform Fee</h4>
              <p className="text-gray-600 text-sm">You keep 96% of every transaction</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-sky-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Verified Business</h4>
              <p className="text-gray-600 text-sm">Access to pre-verified corporate clients</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-sky-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaTruck className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Business Growth</h4>
              <p className="text-gray-600 text-sm">Scale your operations with our platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderRegister;