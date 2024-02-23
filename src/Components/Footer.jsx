// Footer.js
import React from 'react';
import './footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <p>&copy; 2024 ThreadsOfHope. All rights reserved.</p>
          <p>Designed and developed with love.</p>
        </div>
        <div className="footer-social">
          <p>Follow us on social media:</p>
          <div className="social-icons">
            {/* <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a> */}
            {/* Add more social media icons as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
