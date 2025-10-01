import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EventsSection.css";

const eventsData = [
  {
    id: 1,
    title: "Annual Tech Conference 2025",
    date: "Oct 15, 2025",
    location: "Mumbai, India",
    image: "https://via.placeholder.com/300x180?text=Tech+Conference",
  },
  {
    id: 2,
    title: "Startup Pitch Event",
    date: "Nov 5, 2025",
    location: "Bangalore, India",
    image: "https://via.placeholder.com/300x180?text=Startup+Pitch",
  },
  {
    id: 3,
    title: "AI & Machine Learning Workshop",
    date: "Dec 12, 2025",
    location: "Hyderabad, India",
    image: "https://via.placeholder.com/300x180?text=AI+Workshop",
  },
  {
    id: 4,
    title: "Digital Marketing Meetup",
    date: "Jan 10, 2026",
    location: "Delhi, India",
    image: "https://via.placeholder.com/300x180?text=Marketing+Meetup",
  },
];

const EventsSection = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true); // trigger animation after component mounts
    }, 100);
  }, []);

  return (
    <section className={`events-section ${visible ? "show-section" : ""}`}>
      <div className="events-content">
        <div className="events-header">
          <h2>Upcoming Events</h2>
          <p>Stay updated with our latest events and workshops</p>
        </div>
        <div className="events-grid">
          {eventsData.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={event.title} className="event-image" />
              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="events-actions">
          <button
            className="more-events-btn"
            onClick={() => navigate("/events")}
          >
            More Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
