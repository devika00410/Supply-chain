// --- AboutUs.jsx (Enhanced Design) ---
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Chen',
      position: 'CEO & Founder',
      experience: '15+ years in supply chain management',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-1252107-2381069.jpg&fm=jpg',
      linkedin: '#'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      position: 'CTO',
      experience: 'Former Google Cloud architect',
      image: 'https://media.istockphoto.com/id/1830126474/photo/portrait-of-a-business-man-sitting-in-an-office.jpg?s=612x612&w=0&k=20&c=jFJl6x5NUZOXEH230n2asejE-vDZ0YtATM0pbfJFTgk=',
      linkedin: '#'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      position: 'Head of Operations',
      experience: 'Ex-Amazon logistics specialist',
      image: 'https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?semt=ais_hybrid&w=740&q=80',
      linkedin: '#'
    },
    {
      id: 4,
      name: 'David Kim',
      position: 'Product Director',
      experience: '10+ years in SaaS product development',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      linkedin: '#'
    },
    {
      id: 5,
      name: 'Emily Watson',
      position: 'Head of Customer Success',
      experience: '8+ years in client relations and support',
      image: 'https://community.thriveglobal.com/wp-content/uploads/2018/08/businesswomen.jpg',
      linkedin: '#'
    },
    {
      id: 6,
      name: 'James Wilson',
      position: 'Lead Data Scientist',
      experience: 'PhD in Machine Learning from MIT',
      image: 'https://img.freepik.com/free-photo/portrait-confident-young-businessman-with-his-arms-crossed_23-2148176206.jpg?w=360',
      linkedin: '#'
    }
  ];

  // Company milestones
  const milestones = [
    { year: '2020', event: 'Company Founded', description: 'Started with a vision to transform supply chain logistics' },
    { year: '2021', event: 'Seed Funding', description: 'Raised $5M to build our platform and team' },
    { year: '2022', event: 'Product Launch', description: 'Launched our first AI-powered logistics solution' },
    { year: '2023', event: 'Series A', description: 'Secured $15M to expand globally' },
    { year: '2024', event: 'Market Leader', description: 'Serving 500+ enterprises across 3 continents' }
  ];

  // Enhanced Values data
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that transform the logistics industry through AI and machine learning.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'We build lasting relationships based on trust, transparency, and mutual success with our clients, suppliers, and partners.'
    },
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service, from technology development to customer support and delivery.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We build solutions that are good for business, society, and the planet, promoting eco-friendly supply chain practices.'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: 'We prioritize data security and privacy, ensuring our clients information is protected with enterprise-grade security measures.'
    },
    {
      icon: '💡',
      title: 'Transparency',
      description: 'We believe in open communication and clear visibility throughout the supply chain, building trust with all stakeholders.'
    }
  ];

  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-heros">
        <div className="heros-content">
          <div className="heros-text">
            <h1>Transforming Supply Chains with Intelligence</h1>
            <p className="heros-subtitle">
              We're building the future of logistics through innovative technology, 
              data-driven insights, and a relentless focus on customer success.
            </p>
            <div className="heros-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Enterprise Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">$2B+</div>
                <div className="stat-label">Goods Managed</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          <div className="heros-visual">
            <div className="image-frame heros-frame">
              <div className="frame-content">
                <img 
                  src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="TransChain Operations Center" 
                  className="heros-image"
                />
                <div className="frame-overlay">
                  <span>Global Operations Center - Real-time monitoring across continents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p className="section-subtitle">
              From a simple idea to a global supply chain revolution
            </p>
          </div>
          
          <div className="story-content">
            <div className="story-text">
              <p>
                Founded in 2020, TransChain emerged from a simple observation: 
                supply chain logistics were fragmented, inefficient, and lacked 
                the digital transformation that other industries had embraced.
              </p>
              <p>
                Our founders, seasoned professionals from logistics and technology 
                backgrounds, set out to create a platform that would bring transparency, 
                efficiency, and intelligence to global supply chains.
              </p>
              <p>
                Today, we're proud to serve some of the world's largest enterprises, 
                helping them reduce costs, improve reliability, and build more resilient 
                supply chains for the future.
              </p>
            </div>
            <div className="story-visual">
              <div className="image-frame story-frame">
                <div className="frame-content">
                  <img 
                    src="https://assets.entrepreneur.com/content/3x2/2000/20181020104936-team.jpeg" 
                    alt="TransChain Founding Team" 
                    className="story-image"
                  />
                  <div className="frame-overlay">
                    Our founding team in 2020 - The beginning of an incredible journey
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Minimal Mission & Vision Section */}
      <section className="mission-vision-minimal">
        <div className="container">
          <div className="section-header">
            <h2>Our Mission & Vision</h2>
            <p className="section-subtitle">
              Clear purpose, ambitious vision
            </p>
          </div>
          <div className="mv-minimal-grid">
            <div className="mv-minimal-card mission-card-minimal">
              <h3>Our Mission</h3>
              <p>
                To democratize access to world-class supply chain technology, 
                enabling businesses of all sizes to optimize their logistics, 
                reduce costs, and drive sustainable growth through intelligent automation 
                and real-time visibility across global operations.
              </p>
            </div>
            <div className="mv-minimal-card vision-card-minimal">
              <h3>Our Vision</h3>
              <p>
                We envision a future where supply chains are fully transparent, 
                resilient, and intelligent—creating economic value while minimizing 
                environmental impact. A world where logistics friction is eliminated 
                and global commerce flows seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
           {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p className="section-subtitle">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h4>Innovation First</h4>
              <p>We constantly push boundaries to deliver cutting-edge solutions that transform logistics through AI and advanced technology.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Partnership</h4>
              <p>We build lasting relationships based on trust, transparency, and mutual success with clients and partners.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h4>Excellence</h4>
              <p>We strive for perfection in every aspect of our service, from technology development to customer support.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h4>Sustainability</h4>
              <p>We build solutions that are good for business, society, and the planet, promoting eco-friendly supply chains.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h4>Security</h4>
              <p>We prioritize data security and privacy, ensuring client information is protected with enterprise-grade measures.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h4>Transparency</h4>
              <p>We believe in open communication and clear visibility throughout the supply chain, building trust with stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Meet Our Team Section */}
      <section className="meet-team-section">
        <div className="container">
          <div className="meet-team-content">
            <h2>Meet Our Team</h2>
            <p>
              Behind every great company is an incredible team. Meet the passionate 
              professionals driving innovation and excellence at TransChain. Our diverse 
              team brings together expertise from logistics, technology, data science, 
              and business strategy to deliver exceptional value to our clients.
            </p>
            
            <div className="team-highlights">
              <div className="team-highlight">
                <div className="highlight-icon">🌟</div>
                <div className="highlight-number">50+</div>
                <div className="highlight-text">Team Members</div>
              </div>
              <div className="team-highlight">
                <div className="highlight-icon">🌍</div>
                <div className="highlight-number">15</div>
                <div className="highlight-text">Countries Represented</div>
              </div>
              <div className="team-highlight">
                <div className="highlight-icon">🎓</div>
                <div className="highlight-number">20+</div>
                <div className="highlight-text">Years Avg. Experience</div>
              </div>
              <div className="team-highlight">
                <div className="highlight-icon">💼</div>
                <div className="highlight-number">100+</div>
                <div className="highlight-text">Collective Patents</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Leadership Team</h2>
            <p className="section-subtitle">
              Experienced professionals driving our mission forward with expertise and vision
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="image-frame team-frame">
                  <div className="frame-content">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="team-image"
                    />
                    <div className="team-overlay">
                      <a href={member.linkedin} className="linkedin-link">
                        <span>📎 LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="team-position">{member.position}</p>
                  <p className="team-experience">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p className="section-subtitle">
              Key milestones in our growth story and vision for the future
            </p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4>{milestone.event}</h4>
                  <p>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Supply Chain?</h2>
            <p>
              Join hundreds of enterprises that trust TransChain to power 
              their logistics operations and drive business growth. Experience 
              the future of supply chain management today with our cutting-edge 
              solutions and expert support team.
            </p>
            <div className="cta-buttons">
              <button 
                className="cta-btn primary"
                onClick={() => navigate('/signup')}
              >
                Start Free Trial
              </button>
              <button 
                className="cta-btn secondary"
                onClick={() => navigate('/contact')}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;