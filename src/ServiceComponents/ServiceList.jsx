import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ServiceListData from '../Data/ServiceList.json';
import './ServiceList.css';
import Amazon from '../assets/Logo1/Amazon.png';
import Flipkart from '../assets/Logo1/Flipkart.png';
import Reliance from '../assets/Logo1/Reliance.png';
import Tata from '../assets/Logo1/Tata.png';
import Mahindra from '../assets/Logo1/Mahindra.png';
import Unilever from '../assets/Logo1/Unilever.png';

const ServiceList = () => {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleLearnMore = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

const clients = [
    { name: "Amazon", logo: Amazon },
    { name: "Flipkart", logo: Flipkart },
    { name: "Reliance", logo: Reliance },
    { name: "Tata", logo: Tata },
    { name: "Mahindra", logo: Mahindra },
    { name: "Hindustan Unilever", logo: Unilever }
];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechGrowth Inc.",
      text: "Impaedial Marketing transformed our digital presence. Our engagement increased by 300% in just 3 months!",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Chen",
      company: "Global Logistics",
      text: "The analytics dashboard provided insights we never had before. Truly game-changing for our marketing strategy.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Sharma",
      company: "Retail Plus",
      text: "Exceptional service and innovative solutions. Their team understands modern marketing challenges perfectly.",
      rating: 4
    },
    {
      id: 4,
      name: "Robert Williams",
      company: "Enterprise Solutions",
      text: "Their data-driven approach helped us optimize our marketing spend and achieve 2x ROI in just 6 months.",
      rating: 5
    },
    {
      id: 5,
      name: "Emily Davis",
      company: "Tech Innovations",
      text: "Professional, responsive, and results-oriented. Impaedial delivered beyond our expectations.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="service-list-container">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🚀 Transforming Digital Landscapes</span>
            </div>
            <h1 className="hero-title">Impaedial Marketing Solutions</h1>
            <p className="hero-subtitle">
              Driving growth through innovative marketing strategies and data-driven solutions
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <div className="stat-label">Support</div>
              </div>
            </div>
          </div>
          
          <div className="hero-graphics">
            <div className="circle-frame frame-1">
              <img src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/07/Logistics_Supply_Chain.jpg" alt="Logistics" />
            </div>
            <div className="circle-frame frame-2">
              <img src="https://website-files.genpact.com/redesign/images/_1200x630_crop_center-center_82_none/service-hero-supply-chain-management-1.jpg?mtime=1655282919" alt="Supply Chain" />
            </div>
            <div className="circle-frame frame-3">
              <img src="https://static.vecteezy.com/system/resources/previews/034/795/644/non_2x/3d-isometric-global-logistics-network-concept-with-transportation-operation-service-supply-chain-management-scm-company-logistics-processes-illustration-eps-10-free-vector.jpg" alt="Global Logistics" />
            </div>
            <div className="circle-frame frame-4">
              <img src="https://www.phoenixlogistics-eg.com/layout/image/supply-chain.jpg" alt="Supply Chain Management" />
            </div>
            <div className="circle-frame frame-5">
              <img src="https://scm-logistics.co/images/services/0003.jpg" alt="Logistics Services" />
            </div>
            <div className="circle-frame frame-6">
              <img src="https://www.cwu.edu.tr/wp-content/uploads/2025/08/Logistics-vs-Supply-Chain-Management-Key-Differences-Explained.webp" alt="Logistics vs Supply Chain" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="quote-banner">
        <div className="quote-content">
          <span className="quote-icon">❝</span>
          <p className="quote-text">
            *Impaedial Marketing transformed our digital presence. Our engagement increased by 300% in just 3 months!*
          </p>
          <span className="quote-icon">❞</span>
          <div className="quote-author">
            <strong>Sarah Johnson</strong>
            <span>TechGrowth Inc.</span>
          </div>
          <div className="quote-note">
            We're proud to partner with brands that shape the future
          </div>
        </div>
      </section>

      {/* Services Grid - 3 Cards per Row */}
      <section className="services-section">
        <div className="section-header">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-description">
            Comprehensive solutions designed to elevate your brand and drive measurable growth
          </p>
        </div>

        <div className="services-grid">
          {ServiceListData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-header">
                <div className="service-number">0{service.id}</div>
                <div className="service-image-container">
                  <img 
                    src={service.image || "/images/default-service.jpg"} 
                    alt={service.title}
                    className="service-image"
                  />
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">
                  {service.shortDescription}
                </p>
                <div className="service-features">
                  <span className="feature-tag">Strategy</span>
                  <span className="feature-tag">Analytics</span>
                  <span className="feature-tag">Growth</span>
                </div>
              </div>
              
              <div className="card-footer">
                <button 
                  onClick={() => handleLearnMore(service.id)}
                  className="learn-more-btn"
                >
                  <span>Explore Service</span>
                  <div className="btn-arrow">→</div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section with Images */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-image">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMRYaWj4fZsX_85oanj4mgqL2XwlEuiw_6w&s" alt="Verified Partners" />
            </div>
            <div className="stat-data">
              <div className="stat-number">1,500+</div>
              <div className="stat-label">Verified Partners</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-image">
              <img src="/images/stats/campaigns.png" alt="Campaigns Managed" />
            </div>
            <div className="stat-data">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Campaigns Managed</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-image">
              <img src="/images/stats/satisfaction.png" alt="Client Satisfaction" />
            </div>
            <div className="stat-data">
              <div className="stat-number">97%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-image">
              <img src="/images/stats/industries.png" alt="Industries Served" />
            </div>
            <div className="stat-data">
              <div className="stat-number">200+</div>
              <div className="stat-label">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-description">
            Real results from businesses that trust our marketing expertise
          </p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-active">
            <div className="stars">
              {'★'.repeat(testimonials[currentTestimonial].rating)}
              {'☆'.repeat(5 - testimonials[currentTestimonial].rating)}
            </div>
            <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
            <div className="testimonial-author">
              <strong>{testimonials[currentTestimonial].name}</strong>
              <span>{testimonials[currentTestimonial].company}</span>
            </div>
          </div>
          
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="section-header">
          <h2 className="section-title">Trusted by Industry Leaders</h2>
          <p className="section-description">
            We're proud to partner with brands that shape the future
          </p>
        </div>
        
        <div className="partners-container">
          <div className="partners-track">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="partner-logo">
                <div className="logo-container">
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="logo-image"
                  />
                </div>
                <span className="partner-name">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Elevate Your Brand?</h2>
            <p className="cta-description">
              Join thousands of successful businesses that have transformed their marketing with our innovative solutions
            </p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                Start Free Consultation
              </button>
              <button className="cta-btn secondary">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceList;