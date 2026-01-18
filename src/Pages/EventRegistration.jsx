import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaUserCheck,
  FaCreditCard,
  FaLock,
  FaCheckCircle,
  FaArrowLeft,
  FaTicketAlt,
  FaUserPlus,
  FaUserMinus,
  FaShoppingCart,
  FaArrowRight,
  FaShareAlt,
  FaPrint,
  FaEnvelope,
  FaWhatsapp,
  FaRegCalendarCheck
} from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';

const EventRegistration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationCount, setRegistrationCount] = useState(1);
  const [showPayment, setShowPayment] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    attendees: [{
      name: '',
      email: '',
      dietary: ''
    }]
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const eventsContainerRef = useRef(null);

  // Events data
  const events = [
    {
      id: 1,
      title: "Global Supply Chain Innovation Summit 2025",
      date: "March 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Rotterdam, Netherlands",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conference",
      description: "Join industry leaders to discuss the future of global supply chains, digital transformation, and sustainable logistics.",
      speakers: 25,
      attendees: 500,
      price: 299,
      earlyBirdPrice: 249,
      earlyBirdValid: true,
      seatsAvailable: 50,
      featured: true
    },
    {
      id: 2,
      title: "Warehouse Automation & Robotics Expo",
      date: "April 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Chicago, USA",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Exhibition",
      description: "Explore the latest advancements in warehouse automation, robotics, and smart logistics solutions.",
      speakers: 18,
      attendees: 350,
      price: 149,
      earlyBirdPrice: 129,
      earlyBirdValid: true,
      seatsAvailable: 120,
      featured: true
    },
    {
      id: 3,
      title: "Blockchain in Logistics Workshop",
      date: "May 10, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Workshop",
      description: "Hands-on workshop exploring blockchain applications in supply chain transparency and security.",
      speakers: 3,
      attendees: 100,
      price: 99,
      earlyBirdPrice: 79,
      earlyBirdValid: false,
      seatsAvailable: 25,
      featured: false
    },
    {
      id: 4,
      title: "Last-Mile Delivery Solutions Forum",
      date: "June 5, 2025",
      time: "9:30 AM - 4:30 PM",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Forum",
      description: "Discussion on optimizing last-mile delivery, urban logistics, and customer experience.",
      speakers: 12,
      attendees: 200,
      price: 199,
      earlyBirdPrice: 169,
      earlyBirdValid: true,
      seatsAvailable: 75,
      featured: true
    },
    {
      id: 5,
      title: "Supply Chain Risk Management Conference",
      date: "July 18, 2025",
      time: "8:30 AM - 5:00 PM",
      location: "Singapore",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conference",
      description: "Strategies for managing supply chain disruptions, building resilience, and mitigating risks.",
      speakers: 20,
      attendees: 400,
      price: 349,
      earlyBirdPrice: 299,
      earlyBirdValid: true,
      seatsAvailable: 45,
      featured: false
    }
  ];

  // Initialize with first event or from location state
  useEffect(() => {
    if (location.state?.eventId) {
      const event = events.find(e => e.id === location.state.eventId);
      if (event) {
        setSelectedEvent(event);
      }
    } else if (events.length > 0) {
      setSelectedEvent(events[0]);
    }
  }, [location.state]);

  // Initialize attendees array based on registration count
  useEffect(() => {
    if (registrationCount > 0) {
      const newAttendees = [...formData.attendees];
      if (newAttendees.length < registrationCount) {
        // Add new attendees
        while (newAttendees.length < registrationCount) {
          newAttendees.push({ name: '', email: '', dietary: '' });
        }
      } else if (newAttendees.length > registrationCount) {
        // Remove extra attendees
        newAttendees.length = registrationCount;
      }
      setFormData(prev => ({ ...prev, attendees: newAttendees }));
    }
  }, [registrationCount]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAttendeeChange = (index, field, value) => {
    const newAttendees = [...formData.attendees];
    newAttendees[index][field] = value;
    setFormData(prev => ({ ...prev, attendees: newAttendees }));
  };

  // Calculate totals
  const calculateSubtotal = () => {
    if (!selectedEvent) return 0;
    const price = selectedEvent.earlyBirdValid ? selectedEvent.earlyBirdPrice : selectedEvent.price;
    return price * registrationCount;
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - discount;
  };

  // Apply coupon
  const handleApplyCoupon = () => {
    if (couponCode === 'EARLYBIRD20') {
      setDiscount(calculateSubtotal() * 0.2); // 20% discount
      alert('Coupon applied! 20% discount added.');
    } else if (couponCode === 'SUPPLYCHAIN10') {
      setDiscount(calculateSubtotal() * 0.1); // 10% discount
      alert('Coupon applied! 10% discount added.');
    } else {
      alert('Invalid coupon code');
    }
  };

  // Handle event selection
  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setShowPayment(false);
    setRegistrationCount(1);
    setDiscount(0);
    setCouponCode('');
    
    // Scroll to registration form
    document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' });
  };

  // Handle payment submission
  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setRegistrationComplete(true);
      
      // Generate registration ID
      const registrationId = 'REG-' + Math.random().toString(36).substr(2, 9).toUpperCase();
      
      // Store registration data
      const registrationData = {
        id: registrationId,
        event: selectedEvent,
        registrationCount,
        total: calculateTotal(),
        primaryAttendee: formData,
        paymentMethod,
        date: new Date().toISOString()
      };
      
      // In real app, send to backend
      console.log('Registration completed:', registrationData);
      
      // Scroll to confirmation
      document.getElementById('confirmation').scrollIntoView({ behavior: 'smooth' });
    }, 2000);
  };

  // Print registration
  const handlePrint = () => {
    window.print();
  };

  // Share registration
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Registration for ${selectedEvent.title}`,
        text: `I've registered for ${selectedEvent.title} on ${selectedEvent.date}!`,
        url: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/events')}
              className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium"
            >
              <FaArrowLeft className="w-4 h-4" />
              Back to Events
            </button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900">Event Registration</h1>
              <p className="text-gray-600 text-sm">Secure your spot at industry-leading events</p>
            </div>
            <div className="w-24"></div> {/* Spacer for alignment */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaCalendarAlt className="w-5 h-5 text-sky-600" />
                Available Events
              </h2>
              
              <div 
                ref={eventsContainerRef}
                className="space-y-4 max-h-[500px] overflow-y-auto pr-2"
              >
                {events.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => handleEventSelect(event)}
                    className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                      selectedEvent?.id === event.id
                        ? 'border-sky-500 bg-sky-50 shadow-md'
                        : 'border-gray-200 hover:border-sky-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="font-bold text-gray-900 line-clamp-2">
                            {event.title}
                          </h3>
                          {event.featured && (
                            <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                          <FaMapMarkerAlt className="w-3 h-3" />
                          <span>{event.location}</span>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-lg font-bold text-sky-600">
                            ${event.earlyBirdValid ? event.earlyBirdPrice : event.price}
                          </span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            {event.seatsAvailable} seats left
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUsers className="w-4 h-4" />
                    <span>Max 3 registrations</span>
                  </div>
                  <div className="text-sky-600 font-medium">
                    {events.length} events
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Registration Form */}
          <div className="lg:col-span-2">
            {selectedEvent && !registrationComplete && (
              <>
                {/* Selected Event Summary */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedEvent.title}
                      </h2>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="w-4 h-4 text-sky-500" />
                          <span>{selectedEvent.date} • {selectedEvent.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-4 h-4 text-sky-500" />
                          <span>{selectedEvent.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-sky-600">
                        ${selectedEvent.earlyBirdValid ? selectedEvent.earlyBirdPrice : selectedEvent.price}
                      </div>
                      {selectedEvent.earlyBirdValid && (
                        <div className="text-sm text-gray-500 line-through">
                          ${selectedEvent.price}
                        </div>
                      )}
                      <div className="text-xs text-green-600 mt-1">
                        {selectedEvent.earlyBirdValid ? 'Early Bird Price!' : 'Regular Price'}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{selectedEvent.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedEvent.speakers}</div>
                      <div className="text-sm text-gray-600">Speakers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedEvent.attendees}</div>
                      <div className="text-sm text-gray-600">Attendees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedEvent.seatsAvailable}</div>
                      <div className="text-sm text-gray-600">Seats Available</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{selectedEvent.category}</div>
                      <div className="text-sm text-gray-600">Event Type</div>
                    </div>
                  </div>
                </div>

                {/* Registration Form */}
                <div id="registration-form" className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FaUserCheck className="w-5 h-5 text-sky-600" />
                    Registration Details
                  </h3>
                  
                  {/* Number of Registrations */}
                  <div className="mb-8">
                    <label className="block text-gray-700 font-medium mb-3">
                      Number of Registrations (Max 3)
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => registrationCount > 1 && setRegistrationCount(prev => prev - 1)}
                        className={`p-3 rounded-lg ${
                          registrationCount > 1
                            ? 'bg-sky-100 text-sky-600 hover:bg-sky-200'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={registrationCount <= 1}
                      >
                        <FaUserMinus className="w-5 h-5" />
                      </button>
                      
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900">{registrationCount}</div>
                        <div className="text-sm text-gray-600">Person(s)</div>
                      </div>
                      
                      <button
                        onClick={() => registrationCount < 3 && setRegistrationCount(prev => prev + 1)}
                        className={`p-3 rounded-lg ${
                          registrationCount < 3
                            ? 'bg-sky-100 text-sky-600 hover:bg-sky-200'
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={registrationCount >= 3}
                      >
                        <FaUserPlus className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Primary Attendee Form */}
                  <div className="space-y-6">
                    <h4 className="text-lg font-semibold text-gray-900 border-b pb-2">
                      Primary Attendee Information
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py 3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 text-sm font-medium mb-2">
                          Designation/Role
                        </label>
                        <input
                          type="text"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Attendees */}
                  {registrationCount > 1 && (
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">
                        Additional Attendee Information
                      </h4>
                      
                      <div className="space-y-6">
                        {formData.attendees.slice(1).map((attendee, index) => (
                          <div key={index} className="bg-gray-50 p-6 rounded-lg">
                            <h5 className="font-medium text-gray-900 mb-4">
                              Attendee {index + 2}
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                  Full Name *
                                </label>
                                <input
                                  type="text"
                                  value={attendee.name}
                                  onChange={(e) => handleAttendeeChange(index + 1, 'name', e.target.value)}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                                  required
                                />
                              </div>
                              
                              <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                  Email Address *
                                </label>
                                <input
                                  type="email"
                                  value={attendee.email}
                                  onChange={(e) => handleAttendeeChange(index + 1, 'email', e.target.value)}
                                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                                  required
                                />
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <label className="block text-gray-700 text-sm font-medium mb-2">
                                Dietary Requirements (Optional)
                              </label>
                              <textarea
                                value={attendee.dietary}
                                onChange={(e) => handleAttendeeChange(index + 1, 'dietary', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                                rows="2"
                                placeholder="Any allergies or dietary restrictions..."
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Payment Section */}
                {!showPayment ? (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <FaShoppingCart className="w-5 h-5 text-sky-600" />
                      Order Summary
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Event Ticket x{registrationCount}</span>
                        <span className="font-medium">${selectedEvent.earlyBirdValid ? selectedEvent.earlyBirdPrice : selectedEvent.price}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">${calculateSubtotal()}</span>
                      </div>
                      
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount Applied</span>
                          <span>-${discount}</span>
                        </div>
                      )}
                      
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total Amount</span>
                          <span className="text-sky-600">${calculateTotal()}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coupon Code */}
                    <div className="mb-6">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Coupon Code
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter coupon code"
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                        />
                        <button
                          onClick={handleApplyCoupon}
                          className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Try: EARLYBIRD20 (20% off) or SUPPLYCHAIN10 (10% off)
                      </p>
                    </div>
                    
                    <button
                      onClick={() => setShowPayment(true)}
                      className="w-full py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <FaCreditCard className="w-5 h-5" />
                      Proceed to Payment
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <FaLock className="w-5 h-5 text-sky-600" />
                      Secure Payment
                    </h3>
                    
                    <form onSubmit={handlePayment}>
                      {/* Payment Method Selection */}
                      <div className="mb-6">
                        <label className="block text-gray-700 font-medium mb-3">
                          Select Payment Method
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {['card', 'paypal', 'bank', 'upi'].map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setPaymentMethod(method)}
                              className={`p-4 rounded-lg border flex flex-col items-center justify-center ${
                                paymentMethod === method
                                  ? 'border-sky-500 bg-sky-50'
                                  : 'border-gray-200 hover:border-sky-300'
                              }`}
                            >
                              <div className="w-8 h-8 mb-2 flex items-center justify-center">
                                {method === 'card' && <FaCreditCard className="w-6 h-6" />}
                                {method === 'paypal' && <span className="text-blue-500 font-bold">PayPal</span>}
                                {method === 'bank' && <span className="text-green-600 font-bold">Bank</span>}
                                {method === 'upi' && <span className="text-purple-600 font-bold">UPI</span>}
                              </div>
                              <span className="text-sm font-medium capitalize">{method}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      {/* Card Details (if card selected) */}
                      {paymentMethod === 'card' && (
                        <div className="space-y-4 mb-6">
                          <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                              Card Number
                            </label>
                            <input
                              type="text"
                              placeholder="1234 5678 9012 3456"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-gray-700 text-sm font-medium mb-2">
                                Expiry Date
                              </label>
                              <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                                required
                              />
                            </div>
                            
                            <div>
                              <label className="block text-gray-700 text-sm font-medium mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                placeholder="123"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Order Summary */}
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-medium text-gray-900">{selectedEvent.title}</div>
                            <div className="text-sm text-gray-600">{registrationCount} Ticket(s)</div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-sky-600">${calculateTotal()}</div>
                            {discount > 0 && (
                              <div className="text-sm text-green-600">-${discount} discount</div>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 ${
                          isProcessing
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-sky-600 hover:bg-sky-700 text-white'
                        }`}
                      >
                        {isProcessing ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Processing Payment...
                          </>
                        ) : (
                          <>
                            <FaCheckCircle className="w-5 h-5" />
                            Pay ${calculateTotal()} Now
                          </>
                        )}
                      </button>
                      
                      <div className="flex items-center justify-center gap-2 mt-4 text-gray-600 text-sm">
                        <FaLock className="w-4 h-4" />
                        <span>Secure SSL Encrypted Payment</span>
                      </div>
                    </form>
                  </div>
                )}
              </>
            )}

            {/* Registration Confirmation */}
            {registrationComplete && (
              <div id="confirmation" className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="w-10 h-10 text-green-600" />
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Registration Successful!
                </h2>
                
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Thank you for registering for {selectedEvent.title}. 
                  Your registration has been confirmed and a confirmation email 
                  has been sent to {formData.email}.
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-6 max-w-md mx-auto">
                  <div className="text-lg font-bold text-gray-900 mb-2">
                    Registration ID: REG-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                  </div>
                  <div className="text-gray-600">
                    Event: {selectedEvent.title}
                  </div>
                  <div className="text-gray-600">
                    Date: {selectedEvent.date}
                  </div>
                  <div className="text-gray-600">
                    Tickets: {registrationCount}
                  </div>
                  <div className="text-gray-600">
                    Total Paid: ${calculateTotal()}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handlePrint}
                    className="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaPrint className="w-4 h-4" />
                    Print Confirmation
                  </button>
                  
                  <button
                    onClick={handleShare}
                    className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaShareAlt className="w-4 h-4" />
                    Share Registration
                  </button>
                  
                  <button
                    onClick={() => navigate('/events')}
                    className="px-6 py-3 border border-sky-600 text-sky-600 font-medium rounded-lg hover:bg-sky-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <FaRegCalendarCheck className="w-4 h-4" />
                    Browse More Events
                  </button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-4">Next Steps</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-800 mb-1">1. Check Email</div>
                      <div className="text-blue-600">Confirmation email sent with details</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="font-medium text-green-800 mb-1">2. Save the Date</div>
                      <div className="text-green-600">Add event to your calendar</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="font-medium text-purple-800 mb-1">3. Join Community</div>
                      <div className="text-purple-600">Connect with other attendees</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <FaLock className="w-5 h-5 text-green-400" />
              <span className="font-medium">100% Secure Payment</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 TransChain Supply Chain Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;