import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`navbar ${isHomePage ? 'home-navbar' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img src={require('../assets/images/logo.png')} alt="Sustainify Logo" className="logo" />
        </Link>
        
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <ul className="navbar-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active-link' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/recycle" 
                className={location.pathname === '/recycle' ? 'active-link' : ''}
              >
                Sell Scrap
              </Link>
            </li>
            <li>
              <Link 
                to="/rates" 
                className={location.pathname === '/rates' ? 'active-link' : ''}
              >
                Scrap Rates
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={location.pathname === '/blog' ? 'active-link' : ''}
              >
                Blog
              </Link>
            </li>
            <li>
              <a href={isHomePage ? '#about' : '/#about'}>
                About Us
              </a>
            </li>
            <li>
              <Link 
                to="/recycle" 
                className="navbar-cta"
              >
                Book Pickup
              </Link>
            </li>
          </ul>
          
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke={isHomePage ? "white" : "#1f2937"} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active-link' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/recycle" 
                className={location.pathname === '/recycle' ? 'active-link' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Scrap
              </Link>
            </li>
            <li>
              <Link 
                to="/rates" 
                className={location.pathname === '/rates' ? 'active-link' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Scrap Rates
              </Link>
            </li>
            <li>
              <Link 
                to="/blog" 
                className={location.pathname === '/blog' ? 'active-link' : ''}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <a 
                href={isHomePage ? '#about' : '/#about'} 
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
            </li>
            <li>
              <Link 
                to="/recycle" 
                className="navbar-cta block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Pickup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
