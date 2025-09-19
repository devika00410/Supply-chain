import React, { useEffect, useRef } from 'react';
import {
  RocketLaunchIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  CogIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import './Solve.css';

function Solve() {
  const steps = [
    { icon: RocketLaunchIcon, label: 'Start', description: 'Initiate your logistics request' },
    { icon: UserIcon, label: 'User', description: 'Create your profile and needs' },
    { icon: ClipboardDocumentCheckIcon, label: 'Action', description: 'We process your requirements' },
    { icon: CogIcon, label: 'Process', description: 'Optimize and match with providers' },
    { icon: CheckCircleIcon, label: 'Completed', description: 'Delivery and confirmation' },
  ];

  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the main section
          if (entry.target === sectionRef.current) {
            entry.target.classList.add('animate-in');
          } 
          // Animate individual steps with staggered delay
          else if (stepRefs.current.includes(entry.target)) {
            const index = stepRefs.current.indexOf(entry.target);
            entry.target.style.animationDelay = `${index * 0.15}s`;
            entry.target.classList.add('animate-in');
          }
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      stepRefs.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <section className="how-it-works" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Streamlined logistics solutions in 5 simple steps</p>
        
        <div className="process-steps">
          <div className="process-line"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                className="step" 
                key={index}
                ref={(el) => (stepRefs.current[index] = el)}
              >
                <div className="step-icon">
                  <div className="icon-circle">
                    <Icon className="icon" />
                  </div>
                  <div className="step-number">{index + 1}</div>
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.label}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solve;