import React from 'react';
import { Link } from 'react-router-dom';
import './Estates.css';
import house from "../assets/miami-south-beach-sunrise_649448-244.jpg";
import house2 from "../assets/beautiful-architecture-building_74190-6332.jpg.avif";
import house3 from "../assets/breathtaking-scenery-sandy-beach-beautiful-sunset_181624-45259.jpg.avif";

const estatesData = [
  {
    id: 1,
    title: "Villa på landet",
    description: "En vacker villa med utsikt över sjön.",
    imageUrl: house, 
    className: "large",  // Stora bilden
  },
  {
    id: 2,
    title: "Modern Lägenhet",
    description: "En nyrenoverad lägenhet i centrala staden.",
    imageUrl: house2,
    className: "small",  // Små bilder
  },
  {
    id: 3,
    title: "Modern Lägenhet",
    description: "En nyrenoverad lägenhet i centrala staden.",
    imageUrl: house3,
    className: "small",  // Små bilder
  },
];

const Estates = () => {
  return (
    <section id="estates" className="estates">
      <div className='estate-title'>
        <h1>Bostäder till salu</h1>
        <p>Senaste</p>
      </div>
      <div className="estates-content">
        {estatesData.map((estate, index) => (
          <div key={estate.id} className={`estate-card ${estate.className}`}>
            <div className="estate-image-container">
              <img src={estate.imageUrl} alt={estate.title} className="estate-image" />
              <div className="estate-text-overlay">
                <h2>{estate.title}</h2>
                <p>{estate.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/all-estates">
        <h1 className='all-estates-button'>Se alla bostäder</h1>
      </Link>
    </section>
  );
};

export default Estates;
