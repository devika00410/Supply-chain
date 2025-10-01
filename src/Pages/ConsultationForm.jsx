import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ConsultationForm.css";

export default function ConsultationForm() {
    const location = useLocation();
    const navigate = useNavigate();
    const { serviceName, serviceId } = location.state || {};

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        mode: "Zoom",
        company: "",
        industry: "",
        topic: serviceName ? `Consultation for ${serviceName}` : "",
        questions: "",
        consultationType: "30-min Strategy Call",
        serviceInterested: serviceName || "",
    });

    const [agreements, setAgreements] = useState({
        terms: false,
        contact: false
    });

    const consultationPricing = {
        "30-min Strategy Call": 49,
        "60-min Deep Dive": 99,
        "Custom Consultation": 149,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAgreementChange = (e) => {
        const { name, checked } = e.target;
        setAgreements((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!agreements.terms || !agreements.contact) {
            alert("Please agree to both Terms & Conditions and Contact Consent.");
            return;
        }

        // Redirect to payment page
        navigate("/payment", { 
            state: { 
                formData,
                agreements,
                amount: consultationPricing[formData.consultationType]
            } 
        });
    };

    return (
        <div className="consultation-container">
            <h2 className="consultation-title">Book a Consultation</h2>
            <p className="consultation-subtitle">
                {serviceName
                    ? `Let's discuss ${serviceName} — secure your session today.`
                    : "Let's discuss your goals and challenges — secure your session today."}
            </p>

            {serviceName && (
                <div className="service-indicator">
                    <span>Service: {serviceName}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="consultation-form">
                {/* Basic Info */}
                <div className="form-group">
                    <label>Full Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                    />
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone / WhatsApp</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 9876543210"
                        />
                    </div>
                </div>

                {/* Date & Time */}
                <div className="form-grid">
                    <div className="form-group">
                        <label>Preferred Date *</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Preferred Time *</label>
                        <select
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select a time</option>
                            <option>09:00 AM - 11:00 AM</option>
                            <option>11:00 AM - 01:00 PM</option>
                            <option>02:00 PM - 04:00 PM</option>
                            <option>04:00 PM - 06:00 PM</option>
                        </select>
                    </div>
                </div>

                {/* Mode */}
                <div className="form-group">
                    <label>Consultation Mode *</label>
                    <select name="mode" value={formData.mode} onChange={handleChange}>
                        <option>Zoom</option>
                        <option>Google Meet</option>
                        <option>Phone Call</option>
                    </select>
                </div>

                {/* Service Interested (hidden if already set) */}
                {!serviceName && (
                    <div className="form-group">
                        <label>Service Interested In</label>
                        <input
                            type="text"
                            name="serviceInterested"
                            value={formData.serviceInterested}
                            onChange={handleChange}
                            placeholder="Which service are you interested in?"
                        />
                    </div>
                )}

                {/* Discussion */}
                <div className="form-group">
                    <label>Consultation Topic / Goal *</label>
                    <textarea
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        required
                        placeholder="Briefly describe what you'd like to discuss"
                        rows="4"
                    />
                </div>

                <div className="form-group">
                    <label>Any Specific Questions?</label>
                    <textarea
                        name="questions"
                        value={formData.questions}
                        onChange={handleChange}
                        placeholder="Add any specific questions here"
                        rows="3"
                    />
                </div>

                {/* Payment Section - Simplified */}
                <div className="payment-section">
                    <h3>Consultation Package</h3>

                    <div className="form-group">
                        <label>Select Package *</label>
                        <select
                            name="consultationType"
                            value={formData.consultationType}
                            onChange={handleChange}
                        >
                            <option>30-min Strategy Call</option>
                            <option>60-min Deep Dive</option>
                            <option>Custom Consultation</option>
                        </select>
                    </div>

                    <div className="total-price">
                        <span>Total Amount:</span>
                        <span className="price">${consultationPricing[formData.consultationType]}</span>
                    </div>
                </div>

                {/* Agreements */}
                <div className="agreements-section">
                    <h3>Agreements</h3>
                    <div className="agreements">
                        <label className="agreement-checkbox">
                            <input 
                                type="checkbox" 
                                name="terms"
                                checked={agreements.terms}
                                onChange={handleAgreementChange}
                                required 
                            />
                            <span className="checkmark"></span>
                            I agree to the <a href="/terms" target="_blank">Terms & Conditions</a>
                        </label>
                        <label className="agreement-checkbox">
                            <input 
                                type="checkbox" 
                                name="contact"
                                checked={agreements.contact}
                                onChange={handleAgreementChange}
                                required 
                            />
                            <span className="checkmark"></span>
                            I consent to be contacted regarding my consultation
                        </label>
                    </div>
                </div>

                {/* Submit */}
                <button type="submit" className="submit-btn">
                    Proceed to Payment - ${consultationPricing[formData.consultationType]}
                </button>
            </form>
        </div>
    );
}