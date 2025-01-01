import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // Håller reda på scrollpositionen
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Håller reda på om menyn är öppen
  const [isMobile, setIsMobile] = useState(false); // Håller reda på om skärmen är liten (mobil/tablet)

  // Effekt för att lyssna på scrollhändelser
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY); // Uppdatera scrollpositionen
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effekt för att upptäcka om enheten är mobil eller tablet
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Uppdatera om skärmen är mindre än 768px
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Kontrollera storleken direkt vid initialisering

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState); // Växlar mellan öppen/stängd meny
  };

  return (
    <section id="home" className="home">
      <div className="overlay"></div>
      <div className="home-content">
        <div className="home-text">
          <h1>Välkommen till Din Mäklare i Åhus & Österlen.</h1>
          <div className="buttons">
            <button className="button-1" onClick={() => scrollToSection('contact')}>Kontakta oss</button>
            <button className="button-2" onClick={() => scrollToSection('estates')}>Till salu</button>
          </div>
        </div>
      </div>

      {/* Hamburgermeny (Endast på mobil/tablet) */}
      {isMobile && (
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="hamburger-icon">
            {!isMenuOpen ? (
              <i className="fas fa-bars"></i> 
            ) : (
              <i className="fas fa-times"></i>  
            )}
          </div>
        </div>
      )}

      {/* Sidomeny (Endast på mobil/tablet) */}
      {isMobile && (
        <nav className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Hem</a></li>
          <li><a href="#estates" onClick={() => setIsMenuOpen(false)}>Bostäder till salu</a></li>
          <li><a href="#sell" onClick={() => setIsMenuOpen(false)}>Sälj din bostad</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Kontakta oss</a></li>
            
          </ul>
          <div className='burger-contact-text'>

            <p>Åhusgatan 1</p>
            <p>123 45 Åhus</p>
            <p>info@dinmaklareahus.se </p>
            <p>044 - 24 23 24 </p>
          
        </div>
        </nav>
      )}
    </section>
  );
};

export default Home;
