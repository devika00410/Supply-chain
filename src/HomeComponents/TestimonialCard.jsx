import React from 'react';

const TestimonialCard = ({ city }) => {
  if (!city) {
    return (
      <div className="testimonial-popup">
        <h4>Our Customer Success Stories</h4>
        <p className="testimonial-quote">Hover over a city to see how we've helped businesses across India</p>
        <div className="stats-split">
          <div className="stat-before">
            <span>Before: Challenges</span>
          </div>
          <div className="stat-after">
            <span>After: Solutions</span>
          </div>
        </div>
        <p className="client-info">Trusted by companies nationwide</p>
      </div>
    );
  }

  return (
    <div className="testimonial-popup">
      <h4>{city.company}</h4>
      <p className="testimonial-quote">"{city.quote}"</p>
      <div className="stats-split">
        <div className="stat-before">
          <span>Before: {city.beforeStat}</span>
        </div>
        <div className="stat-after">
          <span>After: {city.afterStat}</span>
        </div>
      </div>
      <p className="client-info">{city.name}, {city.title}</p>
    </div>
  );
};

export default TestimonialCard;