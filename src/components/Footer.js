import React from "react";
import "./Footer.css";
import logo3 from "../assets/Logga-vit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const handlePhoneClick = (event) => {
    if (!window.confirm("Vill du ringa det här numret?")) {
      event.preventDefault();
    }
  };

  return (
    <footer id="footer" className="footer">
      <div className="footerContainer">
        {/* Vänster sektion */}
        <div className="left">
        <img src={logo3} alt="Logotyp3" className="logo3" /> 

          <p className="footer-faIcon">
            <FontAwesomeIcon /* icon={faLocationDot} */ className="icon-footer" />
            <a
              href="https://www.google.com/maps?q=Köpmannagatan+15,+296+31+Åhus"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline"
            >
              Köpmannagatan 15, 296 31 Åhus
            </a>
          </p>
          <p className="footer-faIcon">
          <FontAwesomeIcon  icon={faEnvelope}  className="icon-footer"/>
            <a href="mailto:info@dinmaklareahus.se" className="mail-link">
              peter@dinmaklareahus.se
            </a>
          </p>
          <p className="footer-faIcon">
          
            <FontAwesomeIcon  icon={faPhone}  className="icon-footer" />
            <a
              href="tel:+46708240472"
              onClick={handlePhoneClick}
              className="phone-number"
            >
              +46 (0) 708-240472
            </a>
          </p>
        </div>

        {/* Mitten sektion */}
        <div className="middle">
          
          <div className="socialIcons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
              {/* Footer Botten */}
      <div className="footerBottom">
        <p>&copy; 2025 Din Mäklare Åhus & Österlen. Alla rättigheter förbehållna.</p>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
