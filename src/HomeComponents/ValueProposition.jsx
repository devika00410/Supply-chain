// ValueProposition.jsx
import React, { useEffect, useRef } from 'react'
import './ValueProposition.css'

function ValueProposition() {
    const sectionRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('card-visible');
                }
            });
        }, { threshold: 0.3 });

        if (sectionRef.current) {
            sectionObserver.observe(sectionRef.current);
        }

        cardRefs.current.forEach(card => {
            if (card) cardObserver.observe(card);
        });

        return () => {
            if (sectionRef.current) sectionObserver.unobserve(sectionRef.current);
            cardRefs.current.forEach(card => {
                if (card) cardObserver.unobserve(card);
            });
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    return (
        <div className="value-section" ref={sectionRef}>
            <div className="container">
                <h2>Why Choose Our Logistics Solutions?</h2>
                
                <div className="value-grid">
                    <div className="value-card" ref={addToRefs}>
                        <div className="value-image">
                            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Fast Delivery" />
                        </div>
                        <h3>Fast Delivery</h3>
                        <p>99.7% on-time delivery guarantee across India with real-time tracking and updates</p>
                    </div>
                    
                    <div className="value-card" ref={addToRefs}>
                        <div className="value-image">
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Live Tracking" />
                        </div>
                        <h3>Live Tracking</h3>
                        <p>Live GPS tracking and complete supply chain visibility from warehouse to destination</p>
                    </div>
                    
                    <div className="value-card" ref={addToRefs}>
                        <div className="value-image">
                            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Cost Effective" />
                        </div>
                        <h3>Cost Effective</h3>
                        <p>AI-powered route optimization reducing your logistics costs by up to 30%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ValueProposition