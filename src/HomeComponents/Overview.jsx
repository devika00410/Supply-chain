import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './Overview.css';
import {
  GlobeAltIcon,
  TruckIcon,
  DocumentCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

function Overview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="services"
      style={{
        padding: '60px 20px',
        background: 'linear-gradient(135deg, #fafbfc 0%, #f8f9fa 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div
        ref={sectionRef}
        className={`view ${isVisible ? 'visible' : ''}`}
      >
        <h2 className='heads'>What We Offer</h2>
        <p className='subheads'>
          Our comprehensive supply chain and logistics solutions are designed to simplify operations, reduce costs, and ensure seamless delivery across every stage of your business.
        </p>

        <div className="card-container">
          <div className='card'>
            <div className="card-icon-container">
              <GlobeAltIcon className='card-icon text-blue-600'/>
            </div>
            <h1 className='card-title'>Smart Logistics Marketplace</h1>
            <p className='card-text'>
              Get instant quotes and book vetted trucks & warehouses across India. Connect with reliable partners to efficiently move and store your goods.
            </p>
          </div>

          <div className='card'>
            <div className="card-icon-container">
              <TruckIcon className='card-icon text-red-600'/>
            </div>
            <h1 className='card-title'>Real-Time Shipment Tracker</h1>
            <p className='card-text'>
              Gain live GPS visibility into your shipments from pickup to delivery. Receive proactive delay alerts and predictive ETAs.
            </p>
          </div>

          <div className='card'>
            <div className="card-icon-container">
              <DocumentCheckIcon className='card-icon text-violet-800'/>
            </div>
            <h1 className='card-title'>Digital Documentation Hub</h1>
            <p className='card-text'>
              Automate E-Way bill generation, manage permits, and get secure digital proof of delivery. Streamline compliance.
            </p>
          </div>

          <div className='card'>
            <div className="card-icon-container">
              <ChartBarIcon className='card-icon text-orange-600'/>
            </div>
            <h1 className='card-title'>Performance Analytics Dashboard</h1>
            <p className='card-text'>
              Measure key metrics like on-time performance and costs. Gain data-driven insights to optimize your supply chain strategy.
            </p>
          </div>
        </div>

        <div className="button-container">
          <button
            onClick={() => navigate('/services')} // ✅ Navigate to Services Page
            className='btns btn-secondary'
          >
            View more services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className='btns btn-primary'
          >
            Get started
          </button>
        </div>

      </div>
    </div>
  );
}

export default Overview;
