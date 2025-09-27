import React, { useState } from "react";

const ServiceCard = ({ service, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:shadow-xl border border-gray-100 group"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative z-10">
        {/* Service Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {service.name}
        </h3>
        
        {/* Service Description */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Learn More Link */}
        <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
          <span>Learn more</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;