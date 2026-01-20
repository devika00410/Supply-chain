import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaRocket, 
  FaHandshake, 
  FaBullseye, 
  FaLeaf, 
  FaShieldAlt, 
  FaLightbulb,
  FaLinkedin,
  FaUserFriends,
  FaGlobe,
  FaGraduationCap,
  FaBriefcase,
  FaChartLine,
  FaUsers,
  FaTruck,
  FaStar
} from 'react-icons/fa';
import { 
  RiTeamFill,
  RiGlobalLine,
  RiAwardFill,
  RiFilePaperFill
} from 'react-icons/ri';
import HowItWorksSnippet from '../Components/HowItWorksSnippet';

const AboutUs = () => {
  const navigate = useNavigate();
  const timelineRef = useRef([]);
  const valueCardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-timelineIn');
          entry.target.classList.remove('opacity-0', 'translate-x-10');
        }
      });
    }, { threshold: 0.3 });

    // Observe timeline items
    timelineRef.current.forEach(item => {
      if (item) timelineObserver.observe(item);
    });

    // Observe value cards
    valueCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      timelineRef.current.forEach(item => item && timelineObserver.unobserve(item));
      valueCardsRef.current.forEach(card => card && observer.unobserve(card));
    };
  }, []);

  const addToTimelineRefs = (el) => {
    if (el && !timelineRef.current.includes(el)) {
      timelineRef.current.push(el);
    }
  };

  const addToValueCardsRefs = (el) => {
    if (el && !valueCardsRef.current.includes(el)) {
      valueCardsRef.current.push(el);
    }
  };

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

  // Enhanced Values data with React Icons
  const values = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that transform the logistics industry through AI and machine learning.'
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: 'Partnership',
      description: 'We build lasting relationships based on trust, transparency, and mutual success with our clients, suppliers, and partners.'
    },
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for perfection in every aspect of our service, from technology development to customer support and delivery.'
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: 'Sustainability',
      description: 'We build solutions that are good for business, society, and the planet, promoting eco-friendly supply chain practices.'
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Security',
      description: 'We prioritize data security and privacy, ensuring our clients information is protected with enterprise-grade security measures.'
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: 'Transparency',
      description: 'We believe in open communication and clear visibility throughout the supply chain, building trust with all stakeholders.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-sky-100/50 bg-grid-pattern opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <h4 className='text-red-600 text-sm'>*It is a dummy about page</h4>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-900 leading-tight">
                Transforming Supply Chains with Intelligence
              </h1>
              <p className="text-lg md:text-xl text-sky-700 leading-relaxed">
                We're building the future of logistics through innovative technology, 
                data-driven insights, and a relentless focus on customer success.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-2">500+</div>
                  <div className="text-sm font-medium text-sky-800">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-2">$2B+</div>
                  <div className="text-sm font-medium text-sky-800">Goods Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-2">98%</div>
                  <div className="text-sm font-medium text-sky-800">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="https://img.freepik.com/free-photo/businesspeople-having-good-time-meeting_1098-1786.jpg?semt=ais_hybrid&w=740&q=80" 
                  alt="TransChain Operations Center" 
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-900/80 to-transparent p-6">
                  <p className="text-white text-sm font-medium">
                    Global Operations Center - Real-time monitoring across continents
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sky-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-sky-50 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Our Story</h2>
            <p className="text-lg text-sky-700">
              From a simple idea to a global supply chain revolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-sky-800 leading-relaxed text-lg">
                Founded in 2020, TransChain emerged from a simple observation: 
                supply chain logistics were fragmented, inefficient, and lacked 
                the digital transformation that other industries had embraced.
              </p>
              <p className="text-sky-800 leading-relaxed">
                Our founders, seasoned professionals from logistics and technology 
                backgrounds, set out to create a platform that would bring transparency, 
                efficiency, and intelligence to global supply chains.
              </p>
              <p className="text-sky-800 leading-relaxed">
                Today, we're proud to serve some of the world's largest enterprises, 
                helping them reduce costs, improve reliability, and build more resilient 
                supply chains for the future.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://assets.entrepreneur.com/content/3x2/2000/20181020104936-team.jpeg" 
                  alt="TransChain Founding Team" 
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-sky-900/80 text-white p-4 text-sm">
                  Our founding team in 2020 - The beginning of an incredible journey
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-sky-50 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-sky-700">
              Clear purpose, ambitious vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sky-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sky-100 rounded-lg mr-4">
                  <FaChartLine className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-sky-900">Our Mission</h3>
              </div>
              <p className="text-sky-800 leading-relaxed">
                To democratize access to world-class supply chain technology, 
                enabling businesses of all sizes to optimize their logistics, 
                reduce costs, and drive sustainable growth through intelligent automation 
                and real-time visibility across global operations.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-sky-100">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-sky-100 rounded-lg mr-4">
                  <FaStar className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-2xl font-bold text-sky-900">Our Vision</h3>
              </div>
              <p className="text-sky-800 leading-relaxed">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Our Values</h2>
            <p className="text-lg text-sky-700">
              The principles that guide every decision we make
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                ref={addToValueCardsRefs}
                className="opacity-0 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-sky-100 rounded-xl mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-sky-900 mb-3">{value.title}</h4>
                  <p className="text-sky-700 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        <section className="py-12">
        <div className="container mx-auto px-4">
          <HowItWorksSnippet />
        </div>
      </section>

      {/* Enhanced Meet Our Team Section */}
      <section className="py-16 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-6">Meet Our Team</h2>
            <p className="text-lg text-sky-700 leading-relaxed max-w-3xl mx-auto">
              Behind every great company is an incredible team. Meet the passionate 
              professionals driving innovation and excellence at TransChain. Our diverse 
              team brings together expertise from logistics, technology, data science, 
              and business strategy to deliver exceptional value to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <RiTeamFill className="w-10 h-10 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-sky-900 mb-2">50+</div>
              <div className="text-sm font-medium text-sky-700">Team Members</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <RiGlobalLine className="w-10 h-10 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-sky-900 mb-2">15</div>
              <div className="text-sm font-medium text-sky-700">Countries Represented</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <RiAwardFill className="w-10 h-10 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-sky-900 mb-2">20+</div>
              <div className="text-sm font-medium text-sky-700">Years Avg. Experience</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="flex justify-center mb-4">
                <RiFilePaperFill className="w-10 h-10 text-sky-600" />
              </div>
              <div className="text-3xl font-bold text-sky-900 mb-2">100+</div>
              <div className="text-sm font-medium text-sky-700">Collective Patents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-sky-700">
              Experienced professionals driving our mission forward with expertise and vision
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={member.linkedin} 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-sky-600 px-4 py-2 rounded-full flex items-center gap-2 hover:bg-sky-50 transition-colors duration-300"
                    >
                      <FaLinkedin className="w-4 h-4" />
                      <span className="text-sm font-medium">Connect</span>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-sky-900 mb-2">{member.name}</h4>
                  <p className="text-sky-600 font-medium mb-3">{member.position}</p>
                  <p className="text-sky-700 text-sm">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Our Journey</h2>
            <p className="text-lg text-sky-700">
              Key milestones in our growth story and vision for the future
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-sky-200"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={index}
                ref={addToTimelineRefs}
                className={`relative mb-12 md:mb-16 opacity-0 translate-x-10 transition-all duration-700 ease-out ${
                  index % 2 === 0 ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'
                } ${index % 2 === 0 ? 'md:text-right' : ''}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-sky-500 rounded-full z-10"></div>
                  
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="inline-block px-4 py-1 bg-sky-100 text-sky-700 font-bold rounded-full mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="text-xl font-bold text-sky-900 mb-2">{milestone.event}</h4>
                    <p className="text-sky-700">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Supply Chain?
            </h2>
            <p className="text-lg text-sky-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of enterprises that trust TransChain to power 
              their logistics operations and drive business growth. Experience 
              the future of supply chain management today with our cutting-edge 
              solutions and expert support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/signup')}
                className="px-8 py-3 bg-white text-sky-600 font-bold rounded-lg hover:bg-sky-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Start Free Trial
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes timelineIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-timelineIn {
          animation: timelineIn 0.8s ease-out forwards;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #e0f2fe 1px, transparent 1px),
                            linear-gradient(to bottom, #e0f2fe 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;