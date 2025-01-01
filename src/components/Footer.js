import React from 'react';
import './Footer.css'; // CSS-filen för styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons-footer">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p>&copy; 2024 Ditt Företag. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;
