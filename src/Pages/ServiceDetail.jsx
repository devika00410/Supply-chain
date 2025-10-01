// --- ServiceDetail.jsx (Updated Version) ---
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ServiceDetails from '../Data/ServiceDetails.json';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [roiInputs, setRoiInputs] = useState({
    monthlyShipments: 100,
    averageValue: 1000,
    currentLossRate: 5
  });
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    company: '',
    rating: 5,
    message: ''
  });

  // Authentication and user state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userServices, setUserServices] = useState([]);
  const [userData, setUserData] = useState(null);

  const service = ServiceDetails.find(s => s.id === parseInt(serviceId));
  if (!service) {
    return <div className="sd-service-not-found">Service Not Found</div>;
  }

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    const savedUserData = localStorage.getItem('userData');
    const savedUserServices = localStorage.getItem('userServices');

    if (token && savedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(savedUserData));
      setUserServices(savedUserServices ? JSON.parse(savedUserServices) : []);
    } else {
      setIsLoggedIn(false);
      setUserData(null);
      setUserServices([]);
    }
  };

  // SMART PRIMARY BUTTON HANDLER
  const handlePrimaryCTA = () => {
    if (!isLoggedIn) {
      // Redirect to SIGNUP page with service context
      navigate("/signup", { 
        state: { 
          serviceName: service.title,
          serviceId: service.id,
          redirectTo: "dashboard",
          prefillService: service.id
        } 
      });
    } else {
      // User is logged in - add service to dashboard and redirect
      addServiceToUserDashboard();
    }
  };

  // Add service to user's dashboard
  const addServiceToUserDashboard = () => {
    let updatedServices = [...userServices];
    let isNewService = false;

    if (!userServices.includes(service.id)) {
      updatedServices = [...userServices, service.id];
      setUserServices(updatedServices);
      localStorage.setItem('userServices', JSON.stringify(updatedServices));
      isNewService = true;
    }
    
    // Redirect to dashboard with this service pre-selected
    navigate("/dashboard", { 
      state: { 
        activeService: service.id,
        serviceName: service.title,
        newlyAdded: isNewService
      } 
    });
  };

  // Get dynamic button text for primary CTA button
  const getPrimaryButtonText = () => {
    if (!isLoggedIn) {
      return service.cta || "Get Started";
    } else if (!userServices.includes(service.id)) {
      return `Add ${service.title} to Dashboard`;
    } else {
      return `Open ${service.title} in Dashboard`;
    }
  };

  // Handle other buttons
  const handleScheduleConsultation = () => {
    navigate("/consultation", { 
      state: { 
        serviceName: service.title,
        serviceId: service.id 
      } 
    });
  };

  const handleStartFreeTrial = () => {
    if (!isLoggedIn) {
      navigate("/signup", { 
        state: { 
          serviceName: service.title,
          serviceId: service.id,
          trial: true,
          prefillService: service.id
        } 
      });
    } else {
      addServiceToUserDashboard();
    }
  };

  // ROI Calculation
  const calculateROI = () => {
    const { monthlyShipments, averageValue, currentLossRate } = roiInputs;
    const currentMonthlyLoss = monthlyShipments * averageValue * (currentLossRate / 100);
    const projectedLossRate = currentLossRate * 0.3;
    const projectedMonthlyLoss = monthlyShipments * averageValue * (projectedLossRate / 100);
    const monthlySavings = currentMonthlyLoss - projectedMonthlyLoss;
    const annualSavings = monthlySavings * 12;
    
    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      lossReduction: Math.round((currentLossRate - projectedLossRate) * 10) / 10,
      roi: Math.round((annualSavings / 12000) * 100)
    };
  };

  const roiResults = calculateROI();

  const handleInputChange = (e) => {
    setRoiInputs({
      ...roiInputs,
      [e.target.name]: parseFloat(e.target.value)
    });
  };

  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback! We appreciate your input.');
    setFeedback({
      name: '',
      email: '',
      company: '',
      rating: 5,
      message: ''
    });
  };

  // Auto-rotate testimonials and gallery
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % service.testimonials.length);
    }, 5000);
    
    const galleryInterval = setInterval(() => {
      setCurrentGalleryImage((prev) => (prev + 1) % service.gallery.length);
    }, 4000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(galleryInterval);
    };
  }, [service.testimonials.length, service.gallery.length]);

  const renderStars = (rating) => "★".repeat(rating);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const goToGalleryImage = (index) => {
    setCurrentGalleryImage(index);
  };

  return (
    <div className="sd-container">
      {/* Header */}
      <header className="sd-header">
        <div className="sd-nav-container">
          <div className="sd-logo" onClick={() => navigate("/")}>TransChain</div>
          <div className="sd-auth-status">
            {isLoggedIn ? (
              <span className="sd-user-welcome">
                Welcome, {userData?.firstName}!
                <button 
                  className="sd-dashboard-btn"
                  onClick={() => navigate("/dashboard")}
                >
                  Dashboard
                </button>
              </span>
            ) : (
              <div className="sd-auth-buttons">
              </div>
            )}
          </div>
        </div>
        <div className="sd-nav-container">
          <div className="sd-back-nav">
            <button onClick={() => navigate("/services")} className="sd-back-btn">
              ← Back to Services
            </button>
            <div className="sd-breadcrumb">
              Services / <span className="sd-current-service">{service.title}</span>
              {isLoggedIn && userServices.includes(service.id) && (
                <span className="sd-service-badge">✓ In Your Dashboard</span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="sd-hero-section">
        <div className="sd-hero-container">
          <div className="sd-hero-content">
            <h1>{service.title}</h1>
            <p className="sd-hero-description">{service.shortDescription}</p>
            
            {isLoggedIn && (
              <div className="sd-user-status">
                {userServices.includes(service.id) ? (
                  <div className="sd-status-added">
                    ✅ This service is already in your dashboard
                  </div>
                ) : (
                  <div className="sd-status-not-added">
                    💡 Click below to add this service to your dashboard
                  </div>
                )}
              </div>
            )}

            <div className="sd-hero-cta-buttons">
              <button className="sd-hero-cta-btn primary" onClick={handlePrimaryCTA}>
                {getPrimaryButtonText()}
              </button>
              <button className="sd-hero-cta-btn secondary" onClick={() => navigate("/mainform")}>
                Book now
              </button>
            </div>

            <div className="sd-button-explainer">
              {!isLoggedIn ? (
                <p>🔒 Sign up to access this service in your personal dashboard</p>
              ) : (
                <p>📊 This service will be added to your analytics and document management dashboard</p>
              )}
            </div>
          </div>
          <div className="sd-hero-visual">
            <h3>Real-time Monitoring Dashboard</h3>
            <p>Live tracking and analytics for your shipments</p>
            <div className="sd-dashboard-image">
              <img 
                src={service.heroImage} 
                alt={`${service.title} Dashboard`}
                className="sd-hero-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <section className="sd-services-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Key Features</h2>
          <p className="sd-section-description">Comprehensive features designed to solve your logistics challenges</p>
        </div>
        <div className="sd-services-grid">
          {service.features.map((feature, index) => (
            <div key={index} className="sd-service-card">
              <h3>{feature}</h3>
              <p>{service.benefits[index] || "Improves efficiency and reduces costs"}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sd-services-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Key Features</h2>
          <p className="sd-section-description">Comprehensive features designed to solve your logistics challenges</p>
        </div>
        <div className="sd-services-grid">
          {service.features.map((feature, index) => (
            <div key={index} className="sd-service-card">
              <h3>{feature}</h3>
              <p>{service.benefits[index] || "Improves efficiency and reduces costs"}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sd-how-it-works-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Platform Overview</h2>
          <p className="sd-section-description">See our platform in action with real screenshots</p>
        </div>
        <div className="sd-testimonial-carousel">
          <div className="sd-testimonial-card">
            <div className="sd-dashboard-image">
              <img 
                src={service.gallery[currentGalleryImage]} 
                alt={`${service.title} Platform View ${currentGalleryImage + 1}`}
                className="sd-gallery-img"
              />
            </div>
            <div className="sd-carousel-dots">
              {service.gallery.map((_, index) => (
                <button
                  key={index}
                  className={`sd-carousel-dot ${index === currentGalleryImage ? 'active' : ''}`}
                  onClick={() => goToGalleryImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sd-ideal-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Ideal For</h2>
          <p className="sd-section-description">This service is perfect for these types of businesses</p>
        </div>
        <div className="sd-ideal-grid">
          {service.idealUsers.map((user, index) => (
            <div key={index} className="sd-ideal-card">
              <h3>{user}</h3>
              <p>Optimized for businesses requiring {service.title.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sd-how-it-works-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">How It Works</h2>
          <p className="sd-section-description">Simple, transparent process from start to finish</p>
        </div>
        <div className="sd-process-steps">
          {service.howItWorks.map((step, index) => (
            <div key={index} className="sd-step-card">
              <div className="sd-step-number">{index + 1}</div>
              <h3>{step.split(':')[0]}</h3>
              <p>{step.split(':')[1] || step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sd-problem-solution-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">How We Solve Your Problems</h2>
          <p className="sd-section-description">Transforming challenges into opportunities with our innovative solutions</p>
        </div>
        <div className="sd-problem-solution-container">
          <div className="sd-problem-side">
            <h3>Common Problems</h3>
            <ul className="sd-problem-list">
              {service.problems.map((problem, index) => (
                <li key={index}>
                  <span className="sd-problem-icon">•</span>
                  {problem}
                </li>
              ))}
            </ul>
          </div>
          <div className="sd-solution-side">
            <h3>Our Solutions</h3>
            <ul className="sd-solution-list">
              {service.solutionsList.map((solution, index) => (
                <li key={index}>
                  <span className="sd-solution-icon">✓</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sd-roi-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">ROI Calculator</h2>
          <p className="sd-section-description">See how much you can save with our solution (Values in ₹)</p>
        </div>
        <div className="sd-roi-calculator">
          <div className="sd-calculator-inputs">
            <div className="sd-input-group">
              <label>Monthly Shipments</label>
              <input 
                type="number" 
                name="monthlyShipments"
                value={roiInputs.monthlyShipments}
                onChange={handleInputChange}
              />
            </div>
            <div className="sd-input-group">
              <label>Average Shipment Value (₹)</label>
              <input 
                type="number" 
                name="averageValue"
                value={roiInputs.averageValue}
                onChange={handleInputChange}
              />
            </div>
            <div className="sd-input-group">
              <label>Current Loss Rate (%)</label>
              <input 
                type="number" 
                name="currentLossRate"
                value={roiInputs.currentLossRate}
                onChange={handleInputChange}
                step="0.1"
              />
            </div>
          </div>
          
          <div className="sd-roi-results">
            <h3>Projected Savings</h3>
            <div className="sd-roi-metrics">
              <div className="sd-roi-metric">
                <div className="sd-roi-value">₹{roiResults.monthlySavings.toLocaleString()}</div>
                <div className="sd-roi-label">Monthly Savings</div>
              </div>
              <div className="sd-roi-metric">
                <div className="sd-roi-value">₹{roiResults.annualSavings.toLocaleString()}</div>
                <div className="sd-roi-label">Annual Savings</div>
              </div>
              <div className="sd-roi-metric">
                <div className="sd-roi-value">{roiResults.lossReduction}%</div>
                <div className="sd-roi-label">Loss Reduction</div>
              </div>
              <div className="sd-roi-metric">
                <div className="sd-roi-value">{roiResults.roi}%</div>
                <div className="sd-roi-label">ROI First Year</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sd-testimonials-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Client Success Stories</h2>
          <p className="sd-section-description">See what our clients say about our service</p>
        </div>
        <div className="sd-testimonial-carousel">
          <div className="sd-testimonial-card">
            <div className="sd-stars">{renderStars(service.testimonials[currentTestimonial].rating)}</div>
            <p className="sd-testimonial-text">"{service.testimonials[currentTestimonial].comment}"</p>
            <div className="sd-testimonial-author">
              {service.testimonials[currentTestimonial].name}
            </div>
            <div className="sd-testimonial-company">
              {service.testimonials[currentTestimonial].company}
            </div>
          </div>
          <div className="sd-carousel-dots">
            {service.testimonials.map((_, index) => (
              <button
                key={index}
                className={`sd-carousel-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sd-roi-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Our Impact</h2>
          <p className="sd-section-description">Real results delivered to our clients</p>
        </div>
        <div className="sd-roi-calculator">
          <div className="sd-roi-results">
            <div className="sd-roi-metrics">
              {service.stats.map((stat, index) => (
                <div key={index} className="sd-roi-metric">
                  <div className="sd-roi-value">{stat.value}</div>
                  <div className="sd-roi-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sd-ideal-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Use Cases</h2>
          <p className="sd-section-description">Practical applications of our service</p>
        </div>
        <div className="sd-ideal-grid">
          {service.useCases.map((useCase, index) => (
            <div key={index} className="sd-ideal-card">
              <h3>{useCase}</h3>
              <p>Ideal scenario for implementing {service.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sd-feedback-section">
        <div className="sd-section-header">
          <h2 className="sd-section-title">Share Your Feedback</h2>
          <p className="sd-section-description">We'd love to hear about your experience with our service</p>
        </div>
        <div className="sd-feedback-container">
          <form className="sd-feedback-form" onSubmit={handleFeedbackSubmit}>
            <div className="sd-form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name"
                value={feedback.name}
                onChange={handleFeedbackChange}
                required 
              />
            </div>
            <div className="sd-form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                name="email"
                value={feedback.email}
                onChange={handleFeedbackChange}
                required 
              />
            </div>
            <div className="sd-form-group">
              <label>Company</label>
              <input 
                type="text" 
                name="company"
                value={feedback.company}
                onChange={handleFeedbackChange}
              />
            </div>
            <div className="sd-form-group">
              <label>Rating</label>
              <select 
                name="rating"
                value={feedback.rating}
                onChange={handleFeedbackChange}
              >
                <option value="5">5 Stars - Excellent</option>
                <option value="4">4 Stars - Very Good</option>
                <option value="3">3 Stars - Good</option>
                <option value="2">2 Stars - Fair</option>
                <option value="1">1 Star - Poor</option>
              </select>
            </div>
            <div className="sd-form-group">
              <label>Your Feedback</label>
              <textarea 
                name="message"
                value={feedback.message}
                onChange={handleFeedbackChange}
                placeholder="Tell us about your experience..."
                required
              />
            </div>
            <button type="submit" className="sd-submit-btn">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

      <section className="sd-cta-section">
        <div className="sd-cta-content">
          <div className="sd-section-header">
            <h2 className="sd-section-title">Ready to Transform Your Supply Chain?</h2>
            <p className="sd-section-description">Join industry leaders who trust our solutions</p>
          </div>
          <div className="sd-cta-buttons">
            <button className="sd-cta-btn primary" onClick={handleStartFreeTrial}>
              Start Free Trial
            </button>
            <button className="sd-cta-btn secondary" onClick={handleScheduleConsultation}>
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;