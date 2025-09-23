// About.jsx
import React, { useEffect, useRef } from 'react'
import './About.css'

function About() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const quoteRef = useRef(null);
    const buttonRef = useRef(null);
    const statsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('stat-visible');
                }
            });
        }, { threshold: 0.5 });

        // Observe main sections
        if (sectionRef.current) observer.observe(sectionRef.current);
        if (imageRef.current) observer.observe(imageRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (quoteRef.current) observer.observe(quoteRef.current);
        if (buttonRef.current) observer.observe(buttonRef.current);

        // Observe stats
        statsRef.current.forEach(stat => {
            if (stat) statsObserver.observe(stat);
        });

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
            if (imageRef.current) observer.unobserve(imageRef.current);
            if (textRef.current) observer.unobserve(textRef.current);
            if (quoteRef.current) observer.unobserve(quoteRef.current);
            if (buttonRef.current) observer.unobserve(buttonRef.current);
            
            statsRef.current.forEach(stat => {
                if (stat) statsObserver.unobserve(stat);
            });
        };
    }, []);

    const addToStatsRefs = (el) => {
        if (el && !statsRef.current.includes(el)) {
            statsRef.current.push(el);
        }
    };

    return (
        <div className='about-section' ref={sectionRef}>
            <div className='grid-container'>
                <div className="grid-image" ref={imageRef}>
                    <img src='https://www.shutterstock.com/image-photo/outside-logistics-distributions-warehouse-diverse-600nw-2042952425.jpg' alt='Logistics warehouse'></img>
                </div>
                <div className="grid-text" ref={textRef}>
                    <h1>About our company</h1>
                    <h2>Delivering Excellence Across Every Mile</h2>
                    <p>LogiSwift is a leading logistics and supply chain management provider committed to connecting businesses with seamless, efficient, and reliable solutions.</p>
                    <p>With a focus on innovation and technology, we streamline transportation, warehousing, and end-to-end supply chain operations to help businesses thrive.</p>
                    <p><strong>Our mission</strong> is to ensure that goods reach their destination on time, every time, while providing unmatched transparency and customer support.</p>
                </div>
            </div>
            
            {/* Compact full width section */}
            <div className="compact-section">
                <div className="quote" ref={quoteRef}>
                    "Trusted by businesses nationwide to move their products faster, safer, and smarter."
                </div>
                
                <button className="cta-button" ref={buttonRef}>Discover Our Solutions</button>
                
                <div className="stats">
                    <div className="stat-item" ref={addToStatsRefs}>
                        <span className="stat-number">99.7%</span>
                        <span className="stat-label">On-Time Delivery</span>
                    </div>
                    <div className="stat-item" ref={addToStatsRefs}>
                        <span className="stat-number">500+</span>
                        <span className="stat-label">Happy Clients</span>
                    </div>
                    <div className="stat-item" ref={addToStatsRefs}>
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Support</span>
                    </div>
                </div>
                
                <div className="impact-cta">
                    <button className="impact-button">See Our Impact Across India</button>
                </div>
            </div>
        </div>
    )
}

export default About