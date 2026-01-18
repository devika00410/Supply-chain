import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const eventsData = [
  {
    id: 1,
    title: "Global Supply Chain Innovation Summit 2025",
    date: "March 20, 2025",
    location: "Rotterdam, Netherlands",
    image: "https://unctad.org/sites/default/files/inline-images/ttl-gscf-innovation-challenge-v2_1200x675_0.jpg",
    category: "Conference"
  },
  {
    id: 2,
    title: "Warehouse Automation & Robotics Expo",
    date: "April 15, 2025",
    location: "Chicago, USA",
    image: "https://www.therobotreport.com/wp-content/uploads/2025/04/BostonDeviceRobotics-featured.jpg",
    category: "Exhibition"
  },
  {
    id: 3,
    title: "Blockchain in Logistics Workshop",
    date: "May 10, 2025",
    location: "Virtual",
    image: "https://media.licdn.com/dms/image/v2/D5612AQFqV93sHyI9Dg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1724157687929?e=2147483647&v=beta&t=5jRRI8zs3C0AhZtnp4W2RoWsbP5_3Syv0C5ML6cOTbY",
    category: "Workshop"
  },
  {
    id: 4,
    title: "Last-Mile Delivery Solutions Forum",
    date: "June 5, 2025",
    location: "Berlin, Germany",
    image: "https://acropolium.com/img/articles/last-mile-delivery-solutions-optimize-logistics-for-better-customer-satisfaction/img01.jpg",
    category: "Forum"
  },
];

const EventsSection = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  const categories = ["All", "Conference", "Workshop", "Exhibition", "Forum", "Virtual"];
  
  const filteredEvents = selectedCategory === "All" 
    ? eventsData 
    : eventsData.filter(event => event.category === selectedCategory);

  return (
    <section className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl shadow-lg p-6 md:p-8 lg:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-lg mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Logistics Industry Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join leading supply chain experts, innovators, and logistics professionals at our curated events
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Event Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {/* Date */}
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm">{event.location}</span>
                    </div>

                    {/* Virtual Badge for Online Events */}
                    {event.location === "Virtual" && (
                      <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        Online Event
                      </div>
                    )}
                  </div>

                  {/* Register Button */}
                  <button className="mt-6 w-full py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-0.5">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section with CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Can't Find Your Desired Event?
              </h3>
              <p className="text-blue-100 mb-6">
                Submit your event or suggest topics for future logistics and supply chain discussions
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => navigate("/events")}
                  className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View All Events
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  Submit Event
                </button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Industry Speakers</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Logistics Professionals</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Countries Represented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;