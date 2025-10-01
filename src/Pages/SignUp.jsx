// --- Signup.jsx (Simplified - No Service Selection) ---
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDetails from '../Data/ServiceDetails.json';
import './SignUp.css';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const serviceContext = location.state || {};
  const prefillService = serviceContext.prefillService || serviceContext.serviceId;
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    newsletter: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const prefillServiceDetails = prefillService 
    ? ServiceDetails.find(s => s.id === parseInt(prefillService))
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms and conditions';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      const userData = {
        id: Date.now(),
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        industry: formData.industry,
        services: prefillService ? [prefillService] : [],
        joinDate: new Date().toISOString()
      };

      localStorage.setItem('authToken', 'mock-jwt-token-' + Date.now());
      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('userServices', JSON.stringify(prefillService ? [prefillService] : []));

      // Redirect to onboarding if new user, otherwise to dashboard
      if (prefillService) {
        // If user came from a specific service, go directly to dashboard with that service
        navigate("/userdashboard", { 
          state: { 
            newlyRegistered: true,
            activeService: prefillService,
            serviceName: serviceContext.serviceName
          }
        });
      } else {
        // If general signup, show onboarding
        navigate("/userdashboard", { 
          state: { 
            newlyRegistered: true,
            showOnboarding: true
          }
        });
      }

    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLoginRedirect = () => {
    navigate('/login', { state: { redirectBack: location.pathname } });
  };

  return (
    <div className="signup-container">
      {/* Header */}
      <header className="signup-header">
        <div className="signup-nav-container">
          <div className="signup-logo" onClick={() => navigate("/")}></div>
          <button className="login-redirect-btn" onClick={handleLoginRedirect}>
            Already have an account? Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="signup-content">
        <div className="signup-form-container">
          <div className="signup-header-content">
            <h1>Start Your Supply Chain Transformation</h1>
            {prefillServiceDetails ? (
              <>
                <p className="service-context">
                  Get started with <strong>{prefillServiceDetails.title}</strong>
                </p>
                <p>Create your account to access this service and explore our complete suite of supply chain solutions.</p>
              </>
            ) : (
              <p>Join TransChain to optimize your logistics, reduce costs, and streamline your supply chain operations.</p>
            )}
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Personal Information */}
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={errors.firstName ? 'error' : ''}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={errors.lastName ? 'error' : ''}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            {/* Company Information */}
            <div className="form-section">
              <h3>Company Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="industry">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                  >
                    <option value="">Select your industry</option>
                    <option value="logistics">Logistics & Supply Chain</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="technology">Technology</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="form-section">
              <h3>Security</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="password">Password *</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={errors.password ? 'error' : ''}
                    placeholder="Create a password"
                  />
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password *</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={errors.confirmPassword ? 'error' : ''}
                    placeholder="Confirm your password"
                  />
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="form-section">
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                  />
                  I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> *
                </label>
                {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
              </div>

              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                  />
                  Send me product updates, industry insights, and best practices
                </label>
              </div>
            </div>

            {errors.submit && (
              <div className="error-message submit-error">{errors.submit}</div>
            )}

            <button 
              type="submit" 
              className="signup-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating Account...' : 'Create Account & Continue'}
            </button>
          </form>

          <div className="signup-footer">
            <p>Already have an account? <button onClick={handleLoginRedirect} className="text-link">Login here</button></p>
          </div>
        </div>

        {/* Benefits Sidebar */}
        <div className="signup-benefits">
          <h2>Why Join TransChain?</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <h3>🚀 Quick Setup</h3>
              <p>Get started in minutes with our intuitive platform and guided onboarding</p>
            </div>
            <div className="benefit-item">
              <h3>📊 Real-time Analytics</h3>
              <p>Make data-driven decisions with live insights into your supply chain performance</p>
            </div>
            <div className="benefit-item">
              <h3>💰 Cost Savings</h3>
              <p>Reduce operational costs by up to 30% with optimized logistics and automation</p>
            </div>
            <div className="benefit-item">
              <h3>🔒 Enterprise Security</h3>
              <p>Your data is protected with bank-level security and compliance standards</p>
            </div>
          </div>

          {prefillServiceDetails && (
            <div className="service-highlight">
              <div className="highlight-card">
                <h4>Ready to explore:</h4>
                <div className="service-preview">
                  <h5>{prefillServiceDetails.title}</h5>
                  <p>{prefillServiceDetails.shortDescription}</p>
                  <div className="service-features">
                    {prefillServiceDetails.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="onboarding-preview">
            <h4>What's Next?</h4>
            <div className="onboarding-steps">
              <div className="step">
                <span className="step-number">1</span>
                <span className="step-text">Complete your profile</span>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <span className="step-text">Explore available services</span>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <span className="step-text">Start your 30-day free trial</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;