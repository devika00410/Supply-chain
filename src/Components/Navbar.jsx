import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Check authentication status
  useEffect(() => {
    checkAuthStatus();
  }, [location]);

  const checkAuthStatus = () => {
    const token = localStorage.getItem('authToken');
    const savedUserData = localStorage.getItem('userData');

    if (token && savedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(savedUserData));
    } else {
      setIsLoggedIn(false);
      setUserData(null);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userServices');
    setIsLoggedIn(false);
    setUserData(null);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
    navigate("/");
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo" onClick={() => navigate("/")}>
            <span className="logo-text">TransChain</span>
            <span className="logo-tagline">Supply Chain Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {isLoggedIn ? (
              // Authenticated User Navigation
              <>
                <button 
                  className={`nav-link ${isActiveRoute('/dashboard') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/dashboard')}
                >
                  Dashboard
                </button>
                <button 
                  className={`nav-link ${isActiveRoute('/services') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/services')}
                >
                  Services
                </button>
                
                {/* NEW: Route Optimizer Feature */}
                <button 
                  className={`nav-link featured ${isActiveRoute('/route-optimizer') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/route-optimizer')}
                >
                  Route Optimizer
                </button>
                
                <button 
                  className={`nav-link ${isActiveRoute('/about') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/about')}
                >
                  About
                </button>
                <button 
                  className={`nav-link ${isActiveRoute('/articles') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/articles')}
                >
                  Articles
                </button>
                 <button 
                  className={`nav-link ${isActiveRoute('/mainform') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/mainform')}
                >
                  Register
                </button>
                <button 
                  className={`nav-link ${isActiveRoute('/contact') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact
                </button>
                
                {/* User Menu */}
                <div className="nav-user-menu">
                  <button 
                    className="user-menu-trigger"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <span className="user-avatar">
                      {userData?.firstName?.charAt(0)}{userData?.lastName?.charAt(0)}
                    </span>
                    <span className="user-name">
                      {userData?.firstName} {userData?.lastName}
                    </span>
                    <span className={`dropdown-arrow ${isUserMenuOpen ? 'open' : ''}`}>▼</span>
                  </button>
                  
                  {isUserMenuOpen && (
                    <div className="user-menu-dropdown">
                      <div className="user-info">
                        <div className="user-avatar-large">
                          {userData?.firstName?.charAt(0)}{userData?.lastName?.charAt(0)}
                        </div>
                        <div className="user-details">
                          <div className="user-fullname">{userData?.firstName} {userData?.lastName}</div>
                          <div className="user-email">{userData?.email}</div>
                        </div>
                      </div>
                      
                      <div className="menu-divider"></div>
                      
                      <button 
                        className="menu-item"
                        onClick={() => handleNavigation('/profile')}
                      >
                        My Profile
                      </button>
                      <button 
                        className="menu-item"
                        onClick={() => handleNavigation('/settings')}
                      >
                        Settings
                      </button>
                      
                      <div className="menu-divider"></div>
                      
                      <button 
                        className="menu-item logout"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Public Navigation
              <>
                <button 
                  className={`nav-link ${isActiveRoute('/') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/')}
                >
                  Home
                </button>
                <button 
                  className={`nav-link ${isActiveRoute('/services') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/services')}
                >
                  Services
                </button>
                
                {/* NEW: Route Optimizer Feature */}
                <button 
                  className={`nav-link featured ${isActiveRoute('/route-optimizer') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/route-optimizer')}
                >
                  Route Optimizer
                </button>
                
                <button 
                  className={`nav-link ${isActiveRoute('/about') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/about')}
                >
                  About
                </button>
                <button 
                  className={`nav-link ${isActiveRoute('/articles') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/articles')}
                >
                  Articles
                </button>
                 <button 
                  className={`nav-link ${isActiveRoute('/mainform') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/mainform')}
                >
                  Register
                </button>
                <button 
                  className={`nav-link ${isActiveRoute('/contact') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/contact')}
                >
                  Contact
                </button>
                
                <div className="nav-auth-buttons">
                  <button 
                    className="auth-btn login"
                    onClick={() => handleNavigation('/login')}
                  >
                    Login
                  </button>
                  <button 
                    className="auth-btn signup"
                    onClick={() => handleNavigation('/signup')}
                  >
                    Signup
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu - Outside main nav */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          {isLoggedIn ? (
            // Mobile Authenticated Menu
            <>
              <div className="mobile-user-info">
                <div className="user-avatar">
                  {userData?.firstName?.charAt(0)}{userData?.lastName?.charAt(0)}
                </div>
                <div className="user-details">
                  <div className="user-name">{userData?.firstName} {userData?.lastName}</div>
                  <div className="user-email">{userData?.email}</div>
                </div>
              </div>
              
              <div className="mobile-nav-divider"></div>
              
              <button 
                className={`mobile-nav-link ${isActiveRoute('/dashboard') ? 'active' : ''}`}
                onClick={() => handleNavigation('/dashboard')}
              >
                Dashboard
              </button>
              <button 
                className={`mobile-nav-link ${isActiveRoute('/services') ? 'active' : ''}`}
                onClick={() => handleNavigation('/services')}
              >
                Services
              </button>
              
              {/* NEW: Route Optimizer in Mobile Menu */}
              <button 
                className={`mobile-nav-link featured ${isActiveRoute('/route-optimizer') ? 'active' : ''}`}
                onClick={() => handleNavigation('/route-optimizer')}
              >
                Route Optimizer
              </button>
              
              <button 
                className={`mobile-nav-link ${isActiveRoute('/about') ? 'active' : ''}`}
                onClick={() => handleNavigation('/about')}
              >
                About
              </button>
              <button 
                className={`mobile-nav-link ${isActiveRoute('/articles') ? 'active' : ''}`}
                onClick={() => handleNavigation('/articles')}
              >
                Articles
              </button>
               <button 
                  className={`mobile-nav-link ${isActiveRoute('/mainform') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/mainform')}
                >
                  Register
                </button>
              <button 
                className={`mobile-nav-link ${isActiveRoute('/contact') ? 'active' : ''}`}
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </button>
              
              <div className="mobile-nav-divider"></div>
              
              <button 
                className="mobile-nav-link"
                onClick={() => handleNavigation('/profile')}
              >
                My Profile
              </button>
              <button 
                className="mobile-nav-link"
                onClick={() => handleNavigation('/settings')}
              >
                Settings
              </button>
              
              <div className="mobile-nav-divider"></div>
              
              <button className="mobile-logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            // Mobile Public Menu
            <>
              <button 
                className={`mobile-nav-link ${isActiveRoute('/') ? 'active' : ''}`}
                onClick={() => handleNavigation('/')}
              >
                Home
              </button>
              <button 
                className={`mobile-nav-link ${isActiveRoute('/services') ? 'active' : ''}`}
                onClick={() => handleNavigation('/services')}
              >
                Services
              </button>
              
              {/* NEW: Route Optimizer in Mobile Menu */}
              <button 
                className={`mobile-nav-link featured ${isActiveRoute('/route-optimizer') ? 'active' : ''}`}
                onClick={() => handleNavigation('/route-optimizer')}
              >
                🚚 Route Optimizer
              </button>
              
              <button 
                className={`mobile-nav-link ${isActiveRoute('/about') ? 'active' : ''}`}
                onClick={() => handleNavigation('/about')}
              >
                About
              </button>
              <button 
                className={`mobile-nav-link ${isActiveRoute('/articles') ? 'active' : ''}`}
                onClick={() => handleNavigation('/articles')}
              >
                Articles
              </button>
               <button 
                  className={`mobile-nav-link ${isActiveRoute('/mainform') ? 'active' : ''}`}
                  onClick={() => handleNavigation('/mainform')}
                >
                  Register
                </button>
              <button 
                className={`mobile-nav-link ${isActiveRoute('/contact') ? 'active' : ''}`}
                onClick={() => handleNavigation('/contact')}
              >
                Contact
              </button>
              
              <div className="mobile-nav-divider"></div>
              
              <div className="mobile-auth-section">
                <button 
                  className="mobile-auth-btn login"
                  onClick={() => handleNavigation('/login')}
                >
                  Login
                </button>
                <button 
                  className="mobile-auth-btn signup"
                  onClick={() => handleNavigation('/signup')}
                >
                  Signup
                </button>
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay"
          onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </>
  );
};

export default Navbar;