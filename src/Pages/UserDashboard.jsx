// --- UserDashboard.jsx (Updated Version) ---
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ServiceDetails from '../Data/ServiceDetails.json';
import './UserDashboard.css';

const UserDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { activeService, serviceName, newlyAdded, newlyRegistered, selectedServices, isTrial } = location.state || {};

  const [userData, setUserData] = useState(null);
  const [userServices, setUserServices] = useState([]);
  const [activeTab, setActiveTab] = useState('analytics');
  const [selectedService, setSelectedService] = useState(activeService || null);
  const [serviceData, setServiceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication and load user data
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const savedUserData = localStorage.getItem('userData');
    const savedUserServices = localStorage.getItem('userServices');

    if (!token || !savedUserData) {
      navigate("/login");
      return;
    }

    setUserData(JSON.parse(savedUserData));
    
    // Use selectedServices from signup if available, otherwise fall back to localStorage
    let services = [];
    if (selectedServices && selectedServices.length > 0) {
      services = selectedServices;
      localStorage.setItem('userServices', JSON.stringify(services));
    } else {
      services = savedUserServices ? JSON.parse(savedUserServices) : [];
    }
    
    setUserServices(services);
    setIsLoading(false);

    // Set initial selected service
    if (activeService && services.includes(parseInt(activeService))) {
      setSelectedService(parseInt(activeService));
      const service = ServiceDetails.find(s => s.id === parseInt(activeService));
      setServiceData(service);
    } else if (services.length > 0) {
      setSelectedService(services[0]);
      const service = ServiceDetails.find(s => s.id === services[0]);
      setServiceData(service);
    }
  }, [activeService, navigate, selectedServices]);

  // Update service data when selected service changes
  useEffect(() => {
    if (selectedService) {
      const service = ServiceDetails.find(s => s.id === parseInt(selectedService));
      setServiceData(service);
    }
  }, [selectedService]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userServices');
    navigate("/");
  };

  const handleAddMoreServices = () => {
    navigate("/services");
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setActiveTab('analytics');
  };

  const handleManageService = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  // Mock data for demonstration
  const getAnalyticsData = () => {
    if (!serviceData) return null;
    
    return {
      performance: {
        efficiency: 87,
        onTimeDelivery: 94,
        costSavings: 23,
        customerSatisfaction: 96
      },
      metrics: [
        { label: "Shipments Processed", value: "1,247", change: "+12%", icon: "📦" },
        { label: "Active Orders", value: "48", change: "-5%", icon: "🔄" },
        { label: "Revenue Generated", value: "₹2.4L", change: "+18%", icon: "💰" },
        { label: "Issue Resolutions", value: "89%", change: "+3%", icon: "✅" }
      ],
      charts: [
        { title: "Weekly Performance", type: "line", data: [65, 78, 82, 79, 85, 87, 90] },
        { title: "Cost Analysis", type: "bar", data: [12000, 15000, 11000, 13000, 14000] },
        { title: "Delivery Timeline", type: "area", data: [85, 88, 92, 90, 94, 96, 94] }
      ]
    };
  };

  const getDocumentsData = () => {
    if (!serviceData) return [];
    
    return [
      { id: 1, name: "Service Agreement.pdf", type: "contract", date: "2024-01-15", status: "signed", size: "2.4 MB" },
      { id: 2, name: "Performance Report Q1.pdf", type: "report", date: "2024-03-31", status: "reviewed", size: "1.8 MB" },
      { id: 3, name: "Invoice_00456.pdf", type: "invoice", date: "2024-04-05", status: "paid", size: "0.9 MB" },
      { id: 4, name: "Compliance Certificate.pdf", type: "certificate", date: "2024-02-20", status: "active", size: "3.2 MB" }
    ];
  };

  const getSettingsData = () => {
    if (!serviceData) return null;
    
    return {
      notifications: {
        email: true,
        sms: false,
        push: true,
        weeklyReports: true
      },
      preferences: {
        autoRefresh: true,
        darkMode: false,
        language: "English",
        timezone: "IST"
      },
      integrations: [
        { name: "ERP System", connected: true, lastSync: "2 hours ago" },
        { name: "Payment Gateway", connected: true, lastSync: "5 minutes ago" },
        { name: "CRM Software", connected: false, lastSync: "Never" }
      ]
    };
  };

  const analyticsData = getAnalyticsData();
  const documents = getDocumentsData();
  const settingsData = getSettingsData();

  if (isLoading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (!userData) {
    return <div className="dashboard-loading">Loading Dashboard...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <header className="dashboard-header">
        <div className="dashboard-nav">
          <div className="dashboard-logo" onClick={() => navigate("/")}>
            TransChain
          </div>
          <nav className="dashboard-nav-links">
            <button 
              className={activeTab === 'analytics' ? 'active' : ''}
              onClick={() => setActiveTab('analytics')}
            >
              📊 Analytics
            </button>
            <button 
              className={activeTab === 'documents' ? 'active' : ''}
              onClick={() => setActiveTab('documents')}
            >
              📁 Documents
            </button>
            <button 
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => setActiveTab('settings')}
            >
              ⚙️ Settings
            </button>
          </nav>
          <div className="dashboard-user">
            <div className="user-info">
              <span className="welcome-text">Welcome, {userData.firstName}!</span>
              {isTrial && (
                <span className="trial-badge">🚀 Trial Active</span>
              )}
            </div>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        {/* Sidebar - Service Selection */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <h3>My Services</h3>
            <button onClick={handleAddMoreServices} className="add-service-btn">
              + Add Service
            </button>
          </div>
          
          <div className="service-list">
            {userServices.map(serviceId => {
              const service = ServiceDetails.find(s => s.id === parseInt(serviceId));
              if (!service) return null;
              
              return (
                <div 
                  key={serviceId}
                  className={`service-item ${selectedService === serviceId ? 'active' : ''}`}
                  onClick={() => handleServiceSelect(serviceId)}
                >
                  <div className="service-icon">🚚</div>
                  <div className="service-info">
                    <h4>{service.title}</h4>
                    <span className="service-status">Active</span>
                    <span className="service-description">{service.shortDescription}</span>
                  </div>
                </div>
              );
            })}
            
            {userServices.length === 0 && (
              <div className="no-services">
                <p>No services added yet</p>
                <button onClick={handleAddMoreServices} className="browse-services-btn">
                  Browse Services
                </button>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="sidebar-stats">
            <h4>Quick Stats</h4>
            <div className="stat-item">
              <span>Services Active</span>
              <strong>{userServices.length}</strong>
            </div>
            {isTrial && (
              <div className="trial-info">
                <span>Trial Expires</span>
                <strong>30 days</strong>
              </div>
            )}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="dashboard-main">
          {/* Welcome Banner for new users or newly added services */}
          {(newlyRegistered || newlyAdded) && (
            <div className="welcome-banner">
              <div className="welcome-content">
                <h3>
                  {newlyRegistered ? '🎉 Welcome to TransChain!' : '✅ Service Added!'}
                </h3>
                <p>
                  {newlyRegistered 
                    ? `Your account has been created successfully. ${serviceData ? `You now have access to ${serviceData.title}.` : 'Start by exploring your dashboard.'}`
                    : `${serviceData?.title} has been successfully added to your dashboard. Start exploring the features below.`
                  }
                </p>
                {newlyRegistered && (
                  <div className="welcome-actions">
                    <button className="action-btn primary" onClick={() => navigate("/services")}>
                      Explore More Services
                    </button>
                    <button className="action-btn secondary" onClick={() => setActiveTab('settings')}>
                      Configure Settings
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {!serviceData ? (
            <div className="no-service-selected">
              <div className="empty-state">
                <h2>Welcome to Your Dashboard!</h2>
                <p>Get started by adding your first service to see analytics, documents, and settings.</p>
                <div className="empty-actions">
                  <button className="action-btn primary" onClick={handleAddMoreServices}>
                    Browse Services
                  </button>
                  <button className="action-btn secondary" onClick={() => navigate("/services")}>
                    View All Services
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Service Header */}
              <div className="service-header">
                <div className="service-title-section">
                  <h1>{serviceData.title}</h1>
                  <p className="service-description">{serviceData.shortDescription}</p>
                </div>
                <div className="service-actions">
                  <button className="action-btn primary" onClick={() => window.open(`/service/${serviceData.id}`, '_blank')}>
                    Service Details
                  </button>
                  <button className="action-btn secondary">Export Data</button>
                  <button className="action-btn tertiary" onClick={handleAddMoreServices}>
                    Add Another Service
                  </button>
                </div>
              </div>

              {/* Analytics Tab */}
              {activeTab === 'analytics' && analyticsData && (
                <div className="tab-content analytics-tab">
                  <div className="performance-cards">
                    <div className="perf-card">
                      <div className="perf-icon">⚡</div>
                      <h4>Efficiency Score</h4>
                      <div className="perf-value">{analyticsData.performance.efficiency}%</div>
                      <div className="perf-trend positive">+5% this month</div>
                    </div>
                    <div className="perf-card">
                      <div className="perf-icon">⏱️</div>
                      <h4>On-Time Delivery</h4>
                      <div className="perf-value">{analyticsData.performance.onTimeDelivery}%</div>
                      <div className="perf-trend positive">+2% this month</div>
                    </div>
                    <div className="perf-card">
                      <div className="perf-icon">💰</div>
                      <h4>Cost Savings</h4>
                      <div className="perf-value">{analyticsData.performance.costSavings}%</div>
                      <div className="perf-trend positive">+7% this month</div>
                    </div>
                    <div className="perf-card">
                      <div className="perf-icon">😊</div>
                      <h4>Customer Satisfaction</h4>
                      <div className="perf-value">{analyticsData.performance.customerSatisfaction}%</div>
                      <div className="perf-trend positive">+3% this month</div>
                    </div>
                  </div>

                  <div className="metrics-grid">
                    {analyticsData.metrics.map((metric, index) => (
                      <div key={index} className="metric-card">
                        <div className="metric-icon">{metric.icon}</div>
                        <h5>{metric.label}</h5>
                        <div className="metric-value">{metric.value}</div>
                        <span className={`metric-change ${metric.change.includes('+') ? 'positive' : 'negative'}`}>
                          {metric.change}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="charts-section">
                    <h3>Performance Analytics</h3>
                    <div className="charts-grid">
                      {analyticsData.charts.map((chart, index) => (
                        <div key={index} className="chart-placeholder">
                          <h4>{chart.title}</h4>
                          <div className="chart-content">
                            <div className="chart-visual">
                              {/* Simple chart visualization */}
                              <div className="chart-bars">
                                {chart.data.map((value, i) => (
                                  <div 
                                    key={i} 
                                    className="chart-bar" 
                                    style={{ height: `${value * 0.8}%` }}
                                    title={`Value: ${value}`}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            <div className="chart-info">
                              {chart.type} chart showing {serviceData.title} performance
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Documents Tab */}
              {activeTab === 'documents' && (
                <div className="tab-content documents-tab">
                  <div className="documents-header">
                    <h3>Document Management</h3>
                    <div className="doc-actions">
                      <button className="upload-btn">📤 Upload Document</button>
                      <button className="filter-btn">🔍 Filter</button>
                    </div>
                  </div>
                  
                  <div className="documents-grid">
                    {documents.map(doc => (
                      <div key={doc.id} className="document-card">
                        <div className="doc-icon">📄</div>
                        <div className="doc-info">
                          <h4>{doc.name}</h4>
                          <div className="doc-meta">
                            <span>Type: {doc.type}</span>
                            <span>Date: {doc.date}</span>
                            <span>Size: {doc.size}</span>
                          </div>
                        </div>
                        <div className="doc-actions">
                          <div className={`doc-status ${doc.status}`}>
                            {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                          </div>
                          <button className="doc-action download-btn">Download</button>
                          <button className="doc-action view-btn">View</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && settingsData && (
                <div className="tab-content settings-tab">
                  <div className="settings-section">
                    <h3>🔔 Notification Preferences</h3>
                    <div className="settings-grid">
                      {Object.entries(settingsData.notifications).map(([key, value]) => (
                        <label key={key} className="setting-item">
                          <input 
                            type="checkbox" 
                            checked={value} 
                            onChange={() => {}} 
                          />
                          <span className="setting-label">
                            {key.split(/(?=[A-Z])/).join(' ').replace(/^\w/, c => c.toUpperCase())}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="settings-section">
                    <h3>⚙️ User Preferences</h3>
                    <div className="preferences-grid">
                      <div className="preference-item">
                        <label>Auto-refresh Data</label>
                        <input type="checkbox" checked={settingsData.preferences.autoRefresh} onChange={() => {}} />
                      </div>
                      <div className="preference-item">
                        <label>Dark Mode</label>
                        <input type="checkbox" checked={settingsData.preferences.darkMode} onChange={() => {}} />
                      </div>
                      <div className="preference-item">
                        <label>Language</label>
                        <select value={settingsData.preferences.language}>
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                        </select>
                      </div>
                      <div className="preference-item">
                        <label>Timezone</label>
                        <select value={settingsData.preferences.timezone}>
                          <option>IST</option>
                          <option>UTC</option>
                          <option>EST</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="settings-section">
                    <h3>🔗 Integrations</h3>
                    <div className="integrations-list">
                      {settingsData.integrations.map((integration, index) => (
                        <div key={index} className="integration-item">
                          <div className="integration-info">
                            <span className="integration-name">{integration.name}</span>
                            <span className="integration-sync">{integration.lastSync}</span>
                          </div>
                          <span className={`integration-status ${integration.connected ? 'connected' : 'disconnected'}`}>
                            {integration.connected ? 'Connected' : 'Disconnected'}
                          </span>
                          <button className="integration-action">
                            {integration.connected ? 'Configure' : 'Connect'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;