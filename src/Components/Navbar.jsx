// Navbar.js
import React, { useState } from 'react';
import './nav.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">ThreadsOfHope</div>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="navbar-link">Home</div>
          <div className="navbar-link">Contact Us</div>
          <div className="navbar-link">About Us</div>
          <div className="navbar-link">Login</div>
          <div className="navbar-link">Registration</div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
          <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
