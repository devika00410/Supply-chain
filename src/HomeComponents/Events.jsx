// components/EventsSnippet.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaArrowRight,
  FaUsers,
  FaMicrophone,
  FaRegCalendarCheck
} from 'react-icons/fa';

const eventsData = [
  {
    id: 1,
    title: "Supply Chain Innovation Summit",
    date: "Mar 20, 2025",
    location: "Rotterdam",
    type: "Conference",
    virtual: false
  },
  {
    id: 2,
    title: "Warehouse Automation Expo",
    date: "Apr 15, 2025",
    location: "Chicago",
    type: "Exhibition",
    virtual: false
  },
  {
    id: 3,
    title: "Blockchain Logistics Workshop",
    date: "May 10, 2025",
    location: "Online",
    type: "Workshop",
    virtual: true
  },
  {
    id: 4,
    title: "Last-Mile Delivery Forum",
    date: "Jun 5, 2025",
    location: "Berlin",
    type: "Forum",
    virtual: false
  },
];

const EventsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100 my-12">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-block p-3 bg-sky-100 rounded-xl mb-4">
          <FaCalendarAlt className="w-8 h-8 text-sky-600" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Upcoming Industry Events
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join logistics experts at premier supply chain conferences and workshops
        </p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {eventsData.map((event) => (
          <div 
            key={event.id}
            className="bg-sky-50 rounded-xl p-5 border border-sky-100 hover:border-sky-300 transition-all duration-300 hover:shadow-md"
          >
            {/* Event Type Badge */}
            <div className="mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                event.type === 'Conference' ? 'bg-sky-100 text-sky-800' :
                event.type === 'Workshop' ? 'bg-emerald-100 text-emerald-800' :
                event.type === 'Exhibition' ? 'bg-amber-100 text-amber-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {event.type}
              </span>
            </div>

            {/* Event Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
              {event.title}
            </h3>

            {/* Event Details */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center text-gray-600">
                <FaRegCalendarCheck className="w-4 h-4 text-sky-500 mr-2" />
                <span className="text-sm font-medium">{event.date}</span>
              </div>

              <div className="flex items-center text-gray-600">
                {event.virtual ? (
                  <FaGlobe className="w-4 h-4 text-emerald-500 mr-2" />
                ) : (
                  <FaMapMarkerAlt className="w-4 h-4 text-sky-500 mr-2" />
                )}
                <span className="text-sm">{event.location}</span>
              </div>
            </div>

            {/* Register Button */}
            <button
              onClick={() => navigate('/events')}
              className="w-full py-2 bg-white text-sky-700 font-medium rounded-lg hover:bg-sky-50 transition-colors border border-sky-200 text-sm"
            >
              Register Interest
            </button>
          </div>
        ))}
      </div>

      {/* Stats & CTA */}
      <div className="bg-gradient-to-r from-sky-50 to-white rounded-xl p-6 border border-sky-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 md:w-2/3">
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-600 mb-1">1K+</div>
              <div className="text-sm text-gray-600">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-600 mb-1">15+</div>
              <div className="text-sm text-gray-600">Countries</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="md:w-1/3">
            <button
              onClick={() => navigate('/events')}
              className="w-full px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-500 text-white font-semibold rounded-lg hover:from-sky-700 hover:to-sky-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <FaUsers className="w-4 h-4" />
              View All Events
              <FaArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <p className="text-center text-sm text-gray-500 mt-6">
        Network with industry leaders • Learn latest trends • Expand your business
      </p>
    </div>
  );
};

export default EventsSection;