import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './SignUp.css'; // Reuse the same CSS

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { serviceName, serviceId, redirectTo } = location.state || {};

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setErrors({ 
        general: 'Please fill in all fields' 
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate login API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, create a mock user
      const userData = {
        firstName: "Demo",
        lastName: "User",
        email: formData.email,
        company: "Demo Company",
        phone: "+1234567890"
      };

      // Save auth data
      localStorage.setItem('authToken', 'user-authenticated-token');
      localStorage.setItem('userData', JSON.stringify(userData));
      
      // Redirect based on context
      if (serviceId) {
        navigate("/dashboard", { 
          state: { 
            activeService: parseInt(serviceId),
            serviceName: serviceName
          } 
        });
      } else {
        navigate("/dashboard");
      }
      
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <header className="signup-header">
        <div className="signup-nav-container">
          <div className="signup-logo" onClick={() => navigate("/")}>TransChain</div>
          <button className="login-redirect-btn" onClick={() => navigate("/signup", { state: location.state })}>
            Don't have an account? Sign Up
          </button>
        </div>
      </header>

      <div className="signup-content">
        <div className="signup-form-container">
          <div className="signup-header-content">
            <h1>Welcome Back</h1>
            {serviceName && (
              <p className="service-context">
                Login to access <strong>{serviceName}</strong>
              </p>
            )}
            <p>Sign in to your TransChain account</p>
          </div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            {errors.general && (
              <div className="error-message" style={{textAlign: 'center', margin: '1rem 0'}}>
                {errors.general}
              </div>
            )}

            <button type="submit" className="signup-btn" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          <div className="signup-footer">
            <p>Don't have an account? <button onClick={() => navigate("/signup", { state: location.state })} className="text-link">Sign up</button></p>
          </div>
        </div>

        <div className="signup-benefits">
          <h2>Continue Your Journey</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <h3>📊 Access Analytics</h3>
              <p>View real-time insights and performance metrics</p>
            </div>
            <div className="benefit-item">
              <h3>📁 Manage Documents</h3>
              <p>Access all your contracts and reports in one place</p>
            </div>
            <div className="benefit-item">
              <h3>⚙️ Customize Settings</h3>
              <p>Personalize your dashboard and preferences</p>
            </div>
            <div className="benefit-item">
              <h3>🚀 Grow Your Business</h3>
              <p>Scale your operations with our advanced tools</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;