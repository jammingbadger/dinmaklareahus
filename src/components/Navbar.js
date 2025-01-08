import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logga.png";
/* import logo from "../assets/logga.png" */

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Observera alla sektioner
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id !== "home") {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id); // Aktiverar länk manuellt vid klick
  };

  return (
    <>
      <nav className="navbar">

        <img src={logo} alt="logga" className="navbar-logo"/>
        {/*  <div className="user-name">
          <span className="first-name">Peter</span>
          <span className="last-name">Olvsborn</span>
        </div>  */}
       {/*  <img src={logo} alt="Logo" className="navbar-logo" /> */}

        <ul className="navbar-links">
          <li>
            <a
              href="#estates"
              className={activeSection === "estates" ? "active" : ""}
              onClick={() => handleLinkClick("estates")}
            >
              Bostäder till salu
            </a>
          </li>
          <li>
            <a
              href="#sell"
              className={activeSection === "sell" ? "active" : ""}
              onClick={() => handleLinkClick("sell")}
            >
              Sälj din bostad
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={() => handleLinkClick("contact")}
            >
              Kontakta oss
            </a>
          </li>
        </ul>
        <div className="social-icons-footer">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
