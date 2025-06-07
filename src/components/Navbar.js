import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/Logga-vit.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navWidth, setNavWidth] = useState("100vw");



useEffect(() => {
  setNavWidth(`${window.innerWidth}px`);
}, []);

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuOpen && !event.target.closest(".navbar")){
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  }
}, [menuOpen]);




  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

  };

/*   const handlePhoneClick = (event) => {
    const isConfirmed = window.confirm('Vill du ringa det här numret?');
    if (isConfirmed) {
      event.preventDefault();
    }
} */

  

  return (
    <nav className="navbar" style={{ width: navWidth }}>
      {/* Logotyp */}
      <Link to="hem" smooth={true} duration={500}>
        <img src={logo} alt="Logotyp" className="navbar-logo" />

      </Link>

      {/* Hamburgarikonen för mobil */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
      <li className="fade-in">
  <Link to="/#fastigheter" smooth={true} duration={500} offset={-window.innerHeight / 3} onClick={() => setMenuOpen(false)}>
    Till salu
  </Link>
</li>
<li className="fade-in">
  <Link to="/#sell" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
    Sälj din bostad
  </Link>
</li>
<li className="fade-in">
  <Link to="/#footer" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
    Kontakta oss
  </Link>
</li>
<div className="navbar-line fade-in">

</div>

<div className="bar-info fade-in">
  <p className="contact-info">
  <div className="fade-in contact-info">
  <p className="address">Köpmannagatan 15<br/>296 31 Åhus</p>
  <a 
    href="tel:+4641123456"
    className="phone-number">
    +46 (0) 411 234 56
  </a>
  <a 
    href="mailto:pe@example.com" 
    className="mail-link">
    pe@example.com
  </a>
</div>

  </p>
  

  <div className="socialIcons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon-nav fade-in"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIcon-nav fade-in"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
</div>



        

      </ul>
     
    </nav>
  );
};

export default Navbar;
