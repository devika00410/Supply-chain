// Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Contact form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with our team. We're here to help you with your supply chain needs.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p className="info-description">
                Have questions about our logistics solutions? Reach out to our expert team for personalized assistance.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <span>📞</span>
                  </div>
                  <div className="method-details">
                    <h3>Phone</h3>
                    <p>+1 (800) 123-4567</p>
                    <small>Available 24/7 for urgent matters</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <span>📧</span>
                  </div>
                  <div className="method-details">
                    <h3>Email</h3>
                    <p>info@transchain.com</p>
                    <small>Response within 2 business hours</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <span>💬</span>
                  </div>
                  <div className="method-details">
                    <h3>Live Chat</h3>
                    <p>Available on our platform</p>
                    <small>Mon-Fri, 8AM-8PM EST</small>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <span>🏢</span>
                  </div>
                  <div className="method-details">
                    <h3>Headquarters</h3>
                    <p>123 Logistics Drive</p>
                    <p>Suite 500, New York, NY 10001</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="office-hours">
                <h4>Office Hours</h4>
                <div className="hours-grid">
                  <div className="hour-item">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM EST</span>
                  </div>
                  <div className="hour-item">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM EST</span>
                  </div>
                  <div className="hour-item">
                    <span>Sunday</span>
                    <span>Emergency Support Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              {/* Inquiry Type */}
              <div className="form-group">
                <label htmlFor="inquiryType" className="form-label">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                </select>
              </div>

              {/* Name Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="John"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Company & Subject */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Brief subject of your inquiry"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="6"
                  placeholder="Please provide detailed information about your inquiry..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="status-message error">
                  ❌ There was an error sending your message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="map-section">
          <div className="map-placeholder">
            <div className="map-content">
              <h3>Visit Our Office</h3>
              <p>123 Logistics Drive, Suite 500</p>
              <p>New York, NY 10001</p>
              <div className="map-features">
                <div className="map-feature">
                  <span>🚗</span>
                  <span>Free Parking Available</span>
                </div>
                <div className="map-feature">
                  <span>🚇</span>
                  <span>Near Subway Station</span>
                </div>
                <div className="map-feature">
                  <span>♿</span>
                  <span>Wheelchair Accessible</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="emergency-contact">
          <div className="emergency-content">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-info">
              <h3>Emergency Support</h3>
              <p>For urgent logistics issues requiring immediate attention</p>
              <div className="emergency-contacts">
                <span>📞 +1 (800) 911-HELP</span>
                <span>📧 emergency@transchain.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;