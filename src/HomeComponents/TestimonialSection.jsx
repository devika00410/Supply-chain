import React, { useState } from 'react';
import JourneyMap from './JourneyMap';
import TestimonialCard from './TestimonialCard';
import './TestimonialSection.css';

const TestimonialSection = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <section className="testimonials-section">
      <h2>See Our Impact Across India</h2>
      <p>Businesses from metros to tier-2 cities trust our platform</p>
      
      <div className="map-container">
        <JourneyMap onCityHover={setSelectedCity} />
        <TestimonialCard city={selectedCity} />
      </div>
    </section>
  );
};

export default TestimonialSection;