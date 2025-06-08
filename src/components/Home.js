import React, { useState } from "react";
/* import { Link } from "react-router-dom"; */
import "./Home.css";
  
const Home = () => {
  const [activeSection, setActiveSection] = useState('')


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block:"center"});
    }
  };

  return (
    <section id="hem" className="home">
      <div className="overlay">
      <div className="home-content">
      {/* <img src={logo2} alt="Logotyp2" className="logo2" /> */}
        <h1>Din Mäklare i Åhus & Österlen</h1>
        <p>Ditt hem. Din framtid. Vår passion.</p>

        <button
              
              className={`hero-button ${activeSection === "fastigheter" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveSection("fastigheter");
                scrollToSection("fastigheter");
              }}
            >
              Bostäder till salu
            </button>

      </div>
      </div>
    </section>
  );
};

export default Home;
