import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaFilter, 
  FaSearch, 
  FaChevronDown,
  FaRegClock,
  FaUsers,
  FaGlobe,
  FaTicketAlt,
  FaCalendarCheck,
  FaArrowLeft
} from 'react-icons/fa';

const Events = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [showFilters, setShowFilters] = useState(false);

  // All events data
  const allEvents = [
    {
      id: 1,
      title: "Global Supply Chain Innovation Summit 2025",
      date: "March 20, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Rotterdam, Netherlands",
      image: "https://unctad.org/sites/default/files/inline-images/ttl-gscf-innovation-challenge-v2_1200x675_0.jpg",
      category: "Conference",
      description: "Join industry leaders to discuss the future of global supply chains, digital transformation, and sustainable logistics.",
      speakers: 25,
      attendees: 500,
      price: "$299",
      featured: true
    },
    {
      id: 2,
      title: "Warehouse Automation & Robotics Expo",
      date: "April 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Chicago, USA",
      image: "https://www.therobotreport.com/wp-content/uploads/2025/04/BostonDeviceRobotics-featured.jpg",
      category: "Exhibition",
      description: "Explore the latest advancements in warehouse automation, robotics, and smart logistics solutions.",
      speakers: 18,
      attendees: 350,
      price: "$149",
      featured: true
    },
    {
      id: 3,
      title: "Blockchain in Logistics Workshop",
      date: "May 10, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Virtual",
      image: "https://media.licdn.com/dms/image/v2/D5612AQFqV93sHyI9Dg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1724157687929?e=2147483647&v=beta&t=5jRRI8zs3C0AhZtnp4W2RoWsbP5_3Syv0C5ML6cOTbY",
      category: "Workshop",
      description: "Hands-on workshop exploring blockchain applications in supply chain transparency and security.",
      speakers: 3,
      attendees: 100,
      price: "$99",
      featured: false
    },
    {
      id: 4,
      title: "Last-Mile Delivery Solutions Forum",
      date: "June 5, 2025",
      time: "9:30 AM - 4:30 PM",
      location: "Berlin, Germany",
      image: "https://acropolium.com/img/articles/last-mile-delivery-solutions-optimize-logistics-for-better-customer-satisfaction/img01.jpg",
      category: "Forum",
      description: "Discussion on optimizing last-mile delivery, urban logistics, and customer experience.",
      speakers: 12,
      attendees: 200,
      price: "$199",
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
      price: "$349",
      featured: false
    },
    {
      id: 6,
      title: "Green Logistics & Sustainability Summit",
      date: "August 22, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "London, UK",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Conference",
      description: "Focus on sustainable logistics practices, carbon reduction, and eco-friendly supply chains.",
      speakers: 15,
      attendees: 300,
      price: "$249",
      featured: true
    },
    {
      id: 7,
      title: "Logistics Technology Hackathon",
      date: "September 12-14, 2025",
      time: "24 Hours",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Hackathon",
      description: "Build innovative solutions for logistics challenges. Open to developers, designers, and logistics professionals.",
      speakers: 8,
      attendees: 150,
      price: "Free",
      featured: false
    },
    {
      id: 8,
      title: "Cold Chain Logistics Symposium",
      date: "October 8, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Symposium",
      description: "Advanced techniques and technologies for temperature-controlled logistics and pharmaceuticals.",
      speakers: 10,
      attendees: 180,
      price: "$299",
      featured: true
    },
    {
      id: 9,
      title: "AI in Supply Chain Masterclass",
      date: "November 3, 2025",
      time: "1:00 PM - 5:00 PM",
      location: "Virtual",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Masterclass",
      description: "Deep dive into AI applications for demand forecasting, route optimization, and inventory management.",
      speakers: 4,
      attendees: 75,
      price: "$199",
      featured: false
    },
    {
      id: 10,
      title: "Global Trade & Customs Compliance Forum",
      date: "December 10, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Forum",
      description: "Navigating international trade regulations, customs compliance, and cross-border logistics.",
      speakers: 14,
      attendees: 250,
      price: "$279",
      featured: true
    }
  ];

  const categories = ['All', 'Conference', 'Workshop', 'Exhibition', 'Forum', 'Hackathon', 'Symposium', 'Masterclass', 'Virtual'];

  // Filter events
  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = searchTerm === '' || 
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === 'price-low') {
      const priceA = parseInt(a.price.replace('$', '').replace('Free', '0'));
      const priceB = parseInt(b.price.replace('$', '').replace('Free', '0'));
      return priceA - priceB;
    } else if (sortBy === 'price-high') {
      const priceA = parseInt(a.price.replace('$', '').replace('Free', '0'));
      const priceB = parseInt(b.price.replace('$', '').replace('Free', '0'));
      return priceB - priceA;
    }
    return 0;
  });

  // Featured events (for sidebar)
  const featuredEvents = allEvents.filter(event => event.featured).slice(0, 3);

  const handleRegister = (eventId) => {
    // In a real app, this would navigate to registration page
    // alert(`Registering for event #${eventId}`);
    navigate(`/events/register/${eventId}`);
  };

  const handleQuickView = (event) => {
    // Show event details modal or navigate to detail page
    alert(`Quick view: ${event.title}`);
    // navigate(`/events/${event.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-sky-600 to-blue-700 text-white py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover industry-leading conferences, workshops, and networking opportunities in logistics and supply chain
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <FaCalendarAlt className="w-5 h-5" />
                <span>{allEvents.length} Events</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <FaGlobe className="w-5 h-5" />
                <span>8 Countries</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <FaUsers className="w-5 h-5" />
                <span>2500+ Attendees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="lg:w-3/4">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="relative flex-1">
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search events by title, location, or description..."
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <select
                      className="appearance-none pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                    >
                      <option value="date">Sort by: Date</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                    <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  </div>
                  
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center gap-2 px-4 py-3 bg-sky-100 text-sky-700 font-medium rounded-lg hover:bg-sky-200 transition-colors"
                  >
                    <FaFilter className="w-4 h-4" />
                    Filters
                  </button>
                </div>
              </div>

              {/* Filter Categories */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          selectedCategory === category
                            ? 'bg-sky-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {sortedEvents.length} Events Found
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </h3>
                <p className="text-gray-600">Browse our upcoming logistics events</p>
              </div>
              <div className="text-sm text-gray-500">
                Showing 1-{sortedEvents.length} of {sortedEvents.length} events
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedEvents.map((event) => (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {event.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-sky-600 text-white text-xs font-semibold rounded-full">
                        {event.category}
                      </span>
                    </div>
                    {event.price === 'Free' && (
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full">
                          Free Admission
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Event Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {event.description}
                    </p>
                    
                    {/* Event Info */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-gray-700">
                        <FaCalendarAlt className="w-4 h-4 text-sky-500" />
                        <span className="text-sm font-medium">{event.date}</span>
                        <span className="mx-2">•</span>
                        <FaRegClock className="w-4 h-4 text-sky-500" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <FaMapMarkerAlt className="w-4 h-4 text-sky-500" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <FaUsers className="w-4 h-4" />
                          <span>{event.attendees} attendees</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaUsers className="w-4 h-4" />
                          <span>{event.speakers} speakers</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Price and Actions */}
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{event.price}</div>
                        <div className="text-sm text-gray-500">Per ticket</div>
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleQuickView(event)}
                          className="px-4 py-2 border border-sky-600 text-sky-600 font-medium rounded-lg hover:bg-sky-50 transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => handleRegister(event.id)}
                          className="px-6 py-2 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors flex items-center gap-2"
                        >
                          <FaTicketAlt className="w-4 h-4" />
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results Message */}
            {sortedEvents.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl shadow">
                <FaCalendarCheck className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Events Found</h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="px-6 py-3 bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Featured Events */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaCalendarAlt className="w-5 h-5 text-sky-600" />
                Featured Events
              </h3>
              <div className="space-y-4">
                {featuredEvents.map((event) => (
                  <div key={event.id} className="group cursor-pointer">
                    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-sky-600 transition-colors line-clamp-2">
                          {event.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1">
                          <FaCalendarAlt className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <FaMapMarkerAlt className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Event Categories</h3>
              <div className="space-y-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-sky-100 text-sky-700'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span>{category}</span>
                    <span className="text-sm text-gray-400">
                      {allEvents.filter(e => e.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
              <p className="text-sm text-blue-100 mb-4">
                Get notified about new events, early bird discounts, and exclusive content.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-sky-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Subscribe to Events
                </button>
              </form>
              <p className="text-xs text-blue-200 mt-3">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar View Promo */}
      <div className="bg-gradient-to-r from-sky-50 to-blue-50 py-12 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Want to view events in calendar format?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our interactive calendar view makes it easy to see all upcoming events at a glance.
          </p>
          <button className="px-8 py-3 bg-white border-2 border-sky-600 text-sky-600 font-semibold rounded-lg hover:bg-sky-50 transition-colors flex items-center gap-2 mx-auto">
            <FaCalendarAlt className="w-5 h-5" />
            Switch to Calendar View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;