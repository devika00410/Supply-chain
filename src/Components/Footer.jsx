import React from 'react';
import './Footer.css';

// Import social icons (you'll need to add these to your project)
// Alternatively, you can use react-icons or similar library
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Logistics Solutions</h3>
            <p>Streamlining supply chains across India with innovative technology and reliable service.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><span className="icon-facebook"></span></a>
              <a href="#" aria-label="Twitter"><span className="icon-twitter"></span></a>
              <a href="#" aria-label="LinkedIn"><span className="icon-linkedin"></span></a>
              <a href="#" aria-label="Instagram"><span className="icon-instagram"></span></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Last-Mile Delivery</a></li>
              <li><a href="#">Supply Chain Management</a></li>
              <li><a href="#">Real-Time Tracking</a></li>
              <li><a href="#">Logistics Analytics</a></li>
              <li><a href="#">Carrier Network</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Webinars</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><span className="icon-location"></span> 123 Logistics Way, Mumbai, 400001</p>
              <p><span className="icon-phone"></span> +91 123 456 7890</p>
              <p><span className="icon-email"></span> info@logisticsolutions.com</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Logistics Solutions. All rights reserved.</p>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;