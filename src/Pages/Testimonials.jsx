import React, { useState, useEffect } from 'react';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaUserCircle, 
  FaBuilding, 
  FaCalendarAlt,
  FaChartLine,
  FaMoneyBillWave,
  FaClock,
  FaTruck,
  FaPlus,
  FaCheckCircle,
  FaIndustry,
  FaLeaf,
  FaCogs,
  FaShippingFast,
  FaLaptopCode
} from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    quote: '',
    rating: 5,
    category: 'logistics'
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('userTestimonials');
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  // Category icons mapping
  const categoryIcons = {
    logistics: <FaShippingFast className="w-4 h-4" />,
    technology: <MdComputer className="w-4 h-4" />,
    operations: <FaCogs className="w-4 h-4" />,
    sustainability: <FaLeaf className="w-4 h-4" />,
    cost: <FaMoneyBillWave className="w-4 h-4" />
  };

  // Category colors
  const categoryColors = {
    logistics: 'bg-blue-100 text-blue-800',
    technology: 'bg-purple-100 text-purple-800',
    operations: 'bg-green-100 text-green-800',
    sustainability: 'bg-emerald-100 text-emerald-800',
    cost: 'bg-amber-100 text-amber-800'
  };

  // Predefined success stories
  const successStories = [
    {
      id: 1,
      title: "23% Cost Reduction in First Quarter",
      company: "Kolkata Spices Ltd.",
      industry: "Food & Spices",
      before: "₹19.5L/month logistics costs",
      after: "₹15L/month logistics costs",
      savings: "₹4.5 lakhs saved",
      duration: "3 months",
      metrics: [
        { icon: <FaMoneyBillWave className="w-5 h-5" />, label: "Cost Savings", value: "23%" },
        { icon: <FaClock className="w-5 h-5" />, label: "Time Saved", value: "45 hours/month" },
        { icon: <FaTruck className="w-5 h-5" />, label: "On-Time Delivery", value: "98.7%" }
      ],
      story: "Implemented AI route optimization and real-time tracking, reducing manual coordination by 80%."
    },
    {
      id: 2,
      title: "From Manual Tracking to Automated Operations",
      company: "Bangalore Electronics",
      industry: "Electronics Manufacturing",
      before: "Manual Excel tracking sheets",
      after: "Automated dashboard with alerts",
      savings: "60% reduction in manual work",
      duration: "2 months",
      metrics: [
        { icon: <FaChartLine className="w-5 h-5" />, label: "Efficiency Gain", value: "60%" },
        { icon: <FaClock className="w-5 h-5" />, label: "Reporting Time", value: "From 8h to 30min" },
        { icon: <FaTruck className="w-5 h-5" />, label: "Shipment Visibility", value: "Real-time" }
      ],
      story: "Transitioned from spreadsheets to TransChain's automated system, freeing up team for strategic tasks."
    },
    {
      id: 3,
      title: "Cold Chain Logistics Excellence",
      company: "Mumbai Pharma Distributors",
      industry: "Pharmaceuticals",
      before: "Temperature violations in 15% shipments",
      after: "99.9% temperature compliance",
      savings: "Zero product spoilage",
      duration: "4 months",
      metrics: [
        { icon: <FaCheckCircle className="w-5 h-5" />, label: "Compliance", value: "99.9%" },
        { icon: <FaMoneyBillWave className="w-5 h-5" />, label: "Loss Prevention", value: "100%" },
        { icon: <FaClock className="w-5 h-5" />, label: "Documentation Time", value: "Reduced by 70%" }
      ],
      story: "Implemented IoT temperature monitoring with automated compliance reporting for cold chain logistics."
    }
  ];

  // Predefined testimonials
  const dummyTestimonials = [
    {
      id: 101,
      name: "Rajesh Kumar",
      company: "Kolkata Spices Ltd",
      role: "Supply Chain Manager",
      quote: "TransChain reduced our logistics costs by 23% in the first quarter. The AI route optimization saved us ₹4.5 lakhs in fuel costs alone.",
      rating: 5,
      date: "2 months ago",
      verified: true,
      isDemo: true,
      category: "logistics"
    },
    {
      id: 102,
      name: "Priya Sharma",
      company: "Bangalore Electronics",
      role: "Operations Director",
      quote: "The real-time tracking dashboard eliminated 80% of our manual tracking efforts. Our team now focuses on strategic improvements.",
      rating: 5,
      date: "1 month ago",
      verified: true,
      isDemo: true,
      category: "technology"
    },
    {
      id: 103,
      name: "Amit Patel",
      company: "Delhi Textile Traders",
      role: "Logistics Head",
      quote: "Documentation automation cut our customs clearance time by 50%. The AI suggested optimal shipping routes we hadn't considered.",
      rating: 4,
      date: "3 weeks ago",
      verified: true,
      isDemo: true,
      category: "operations"
    },
    {
      id: 104,
      name: "Sneha Reddy",
      company: "Hyderabad Auto Parts",
      role: "Supply Chain Director",
      quote: "Carbon footprint tracking helped us optimize routes for sustainability. We reduced emissions by 18% while maintaining efficiency.",
      rating: 5,
      date: "2 weeks ago",
      verified: true,
      isDemo: true,
      category: "sustainability"
    }
  ];

  // Combine dummy and user testimonials
  const allTestimonials = [...dummyTestimonials, ...testimonials];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      company: formData.company,
      role: formData.role,
      quote: formData.quote,
      rating: parseInt(formData.rating),
      date: 'Just now',
      verified: false,
      isDemo: false,
      category: formData.category
    };

    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('userTestimonials', JSON.stringify(updatedTestimonials));
    
    setSuccessMessage('Thank you! Your testimonial has been submitted and will appear below.');
    setFormData({
      name: '',
      company: '',
      role: '',
      quote: '',
      rating: 5,
      category: 'logistics'
    });
    setShowForm(false);

    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getAvatarBackground = (name) => {
    const colors = [
      'from-sky-100 to-blue-100',
      'from-blue-50 to-cyan-50',
      'from-cyan-100 to-sky-50',
      'from-sky-50 to-blue-50'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Customer Success Stories
          </h1>
          <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
            Real impact from businesses transforming their supply chain with TransChain
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Demo Disclaimer */}
        <div className="bg-gradient-to-r from-sky-50 to-blue-50 border-l-4 border-sky-500 p-6 rounded-lg mb-12 max-w-4xl mx-auto shadow-sm">
          <div className="flex items-start gap-4">
            <div className="text-2xl text-sky-600">🚀</div>
            <div>
              <h3 className="text-lg font-bold text-sky-900 mb-2">Demo Version Notice</h3>
              <p className="text-sky-800">
                This page showcases sample success stories and testimonials to demonstrate TransChain's potential impact. 
                We're currently seeking pilot customers for Q1 2025. <strong>Feel free to add your own testimonial below!</strong>
              </p>
              <div className="flex flex-wrap gap-4 mt-4 text-sm text-sky-700">
                <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-full">
                  <FaCheckCircle className="w-4 h-4 text-sky-600" />
                  Working Prototype
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-full">
                  <FaCheckCircle className="w-4 h-4 text-sky-600" />
                  Real Impact Potential
                </span>
                <span className="flex items-center gap-2 px-3 py-1 bg-white rounded-full">
                  <FaCheckCircle className="w-4 h-4 text-sky-600" />
                  Seeking Pilot Partners
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <GiTrophy className="text-amber-500 w-8 h-8" />
              <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Quantifiable results from businesses that transformed their operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                      <div className="flex items-center gap-2">
                        <FaBuilding className="w-4 h-4 text-sky-500" />
                        <span className="text-gray-600 font-medium">{story.company}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-sky-100 text-sky-800 text-sm font-medium rounded-full flex items-center gap-1 whitespace-nowrap">
                      <FaIndustry className="w-3 h-3" />
                      {story.industry}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-sky-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">Before</div>
                      <div className="text-red-600 font-semibold line-through">{story.before}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-1">After</div>
                      <div className="text-green-600 font-semibold">{story.after}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start gap-2">
                      <FaQuoteLeft className="w-4 h-4 text-sky-300 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 italic">"{story.story}"</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {story.metrics.map((metric, index) => (
                      <div key={index} className="text-center p-3 bg-white border border-sky-100 rounded-lg">
                        <div className="text-sky-600 mb-2 flex justify-center">
                          {metric.icon}
                        </div>
                        <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
                        <div className="font-bold text-gray-900">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-4 h-4 text-sky-500" />
                      <span>{story.duration}</span>
                    </div>
                    <div className="text-green-600 font-semibold flex items-center gap-2">
                      <FaMoneyBillWave className="w-4 h-4" />
                      {story.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">What Our Users Say</h2>
              <p className="text-gray-600 text-lg">Hear from logistics professionals and business leaders</p>
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <FaPlus className="w-4 h-4" />
              Share Your Experience
            </button>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800 font-medium">{successMessage}</p>
              </div>
            </div>
          )}

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((testimonial) => (
              <div key={testimonial.id} className={`bg-white rounded-2xl shadow-lg p-6 border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${testimonial.isDemo ? 'border-sky-100' : 'border-blue-100'}`}>
                {/* Badge */}
                {testimonial.isDemo ? (
                  <div className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-semibold rounded-full mb-4 border border-amber-200">
                    Sample Story
                  </div>
                ) : (
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-800 text-xs font-semibold rounded-full mb-4 border border-blue-200 flex items-center gap-1">
                    <FaUserCircle className="w-3 h-3" />
                    User Submitted
                  </div>
                )}

                {/* Quote */}
                <div className="mb-6">
                  <div className="flex gap-2">
                    <FaQuoteLeft className="text-sky-200 w-6 h-6 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 italic text-lg pl-2">"{testimonial.quote}"</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-gray-600 font-medium ml-1">{testimonial.rating}.0</span>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-gradient-to-br ${getAvatarBackground(testimonial.name)}`}>
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 truncate">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <FaCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm truncate">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs truncate">{testimonial.company}</p>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${categoryColors[testimonial.category] || 'bg-gray-100 text-gray-800'}`}>
                    {categoryIcons[testimonial.category] || <FaIndustry className="w-3 h-3" />}
                    {testimonial.category}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <FaCalendarAlt className="w-3 h-3" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No User Testimonials Message */}
          {testimonials.length === 0 && allTestimonials.length === dummyTestimonials.length && (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <FaUserCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Be the First to Share!</h3>
                <p className="text-gray-500 mb-6">
                  No user testimonials yet. Share your experience and help others learn about TransChain.
                </p>
                <button
                  onClick={() => setShowForm(true)}
                  className="px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
                >
                  Add Your Testimonial
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Add Testimonial Form */}
        {showForm && (
          <section className="mb-20 animate-fadeIn">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto border border-sky-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Share Your Experience</h2>
                <p className="text-gray-600">Help others learn about how TransChain can transform their supply chain</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-colors"
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-colors"
                      required
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Your Role *
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-colors"
                      required
                      placeholder="Supply Chain Manager"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Category *
                    </label>
                    <div className="relative">
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none appearance-none transition-colors"
                        required
                      >
                        <option value="logistics">Logistics & Shipping</option>
                        <option value="technology">Technology & Innovation</option>
                        <option value="operations">Operations & Efficiency</option>
                        <option value="sustainability">Sustainability</option>
                        <option value="cost">Cost Savings</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <div className="w-4 h-4 text-gray-400">▼</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Rating *
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingClick(star)}
                        className="focus:outline-none transform hover:scale-110 transition-transform"
                      >
                        <FaStar
                          className={`w-8 h-8 ${star <= formData.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Testimonial *
                  </label>
                  <textarea
                    name="quote"
                    value={formData.quote}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition-colors h-40 resize-none"
                    required
                    placeholder="Tell us about your experience with TransChain. How did it help your business? What specific benefits did you see?"
                    maxLength={500}
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.quote.length}/500 characters
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex-1 shadow-lg hover:shadow-xl"
                  >
                    Submit Testimonial
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center py-12">
          <div className="bg-gradient-to-r from-sky-600 to-blue-700 rounded-3xl p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Share Your Success Story?</h2>
            <p className="text-sky-100 mb-8 max-w-2xl mx-auto text-lg">
              Join the growing community of businesses transforming their supply chain with AI-powered optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-white text-sky-700 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Share Your Experience
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Request a Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;