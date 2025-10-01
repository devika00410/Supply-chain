// Report.jsx
import React, { useState } from 'react';
import './Report.css';

const Report = () => {
  const [formData, setFormData] = useState({
    issueType: '',
    subject: '',
    description: '',
    priority: 'medium',
    attachments: [],
    contactEmail: '',
    phoneNumber: ''
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

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: files
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Report submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        issueType: '',
        subject: '',
        description: '',
        priority: 'medium',
        attachments: [],
        contactEmail: '',
        phoneNumber: ''
      });
      
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="report-page">
      <div className="report-container">
        {/* Header Section */}
        <div className="report-header">
          <h1 className="report-title">Report an Issue</h1>
          <p className="report-subtitle">
            Let us know about any problems you're experiencing. Our support team will get back to you within 24 hours.
          </p>
        </div>

        {/* Main Content */}
        <div className="report-content">
          <form className="report-form" onSubmit={handleSubmit}>
            {/* Issue Type */}
            <div className="form-group">
              <label htmlFor="issueType" className="form-label">
                Issue Type *
              </label>
              <select
                id="issueType"
                name="issueType"
                value={formData.issueType}
                onChange={handleInputChange}
                className="form-select"
                required
              >
                <option value="">Select issue type</option>
                <option value="technical">Technical Issue</option>
                <option value="billing">Billing Problem</option>
                <option value="service">Service Disruption</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
                <option value="security">Security Concern</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Priority Level */}
            <div className="form-group">
              <label htmlFor="priority" className="form-label">
                Priority Level
              </label>
              <div className="priority-options">
                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="low"
                    checked={formData.priority === 'low'}
                    onChange={handleInputChange}
                  />
                  <span className="priority-badge low">Low</span>
                </label>
                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    checked={formData.priority === 'medium'}
                    onChange={handleInputChange}
                  />
                  <span className="priority-badge medium">Medium</span>
                </label>
                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="high"
                    checked={formData.priority === 'high'}
                    onChange={handleInputChange}
                  />
                  <span className="priority-badge high">High</span>
                </label>
                <label className="priority-option">
                  <input
                    type="radio"
                    name="priority"
                    value="urgent"
                    checked={formData.priority === 'urgent'}
                    onChange={handleInputChange}
                  />
                  <span className="priority-badge urgent">Urgent</span>
                </label>
              </div>
            </div>

            {/* Subject */}
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
                placeholder="Brief description of the issue"
                required
              />
            </div>

            {/* Description */}
            <div className="form-group">
              <label htmlFor="description" className="form-label">
                Detailed Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="form-textarea"
                rows="6"
                placeholder="Please provide detailed information about the issue, including steps to reproduce if applicable..."
                required
              />
            </div>

            {/* Contact Information */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contactEmail" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber" className="form-label">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* File Attachments */}
            <div className="form-group">
              <label htmlFor="attachments" className="form-label">
                Attachments (Optional)
              </label>
              <div className="file-upload">
                <input
                  type="file"
                  id="attachments"
                  multiple
                  onChange={handleFileChange}
                  className="file-input"
                  accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                />
                <label htmlFor="attachments" className="file-label">
                  <span className="file-icon">📎</span>
                  Choose Files
                </label>
                <span className="file-hint">Max 5 files, 10MB each (JPG, PNG, PDF, DOC)</span>
              </div>

              {/* Attachments Preview */}
              {formData.attachments.length > 0 && (
                <div className="attachments-preview">
                  <h4>Selected Files:</h4>
                  {formData.attachments.map((file, index) => (
                    <div key={index} className="attachment-item">
                      <span className="attachment-name">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="remove-attachment"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
                    Submitting...
                  </>
                ) : (
                  'Submit Report'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="status-message success">
                ✅ Thank you! Your report has been submitted successfully. We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                ❌ There was an error submitting your report. Please try again.
              </div>
            )}
          </form>

          {/* Support Information */}
          <div className="support-info">
            <h3>Need Immediate Help?</h3>
            <div className="support-channels">
              <div className="support-channel">
                <span className="channel-icon">📞</span>
                <div>
                  <strong>Phone Support</strong>
                  <p>+1 (800) 123-4567</p>
                  <small>Available 24/7</small>
                </div>
              </div>
              <div className="support-channel">
                <span className="channel-icon">💬</span>
                <div>
                  <strong>Live Chat</strong>
                  <p>Click the chat icon below</p>
                  <small>Mon-Fri, 9AM-6PM EST</small>
                </div>
              </div>
              <div className="support-channel">
                <span className="channel-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>support@transchain.com</p>
                  <small>Response within 4 hours</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;