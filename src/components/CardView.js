import React from 'react';
import './CardView.css'; // CSS-import för stil
import image1 from '../assets/blue-canvas.jpeg';
import image2 from '../assets/rusty.jpg';
import image3 from '../assets/yngsjö.jpg';
import image4 from '../assets/freepik__the-style-is-candid-image-photography-with-natural__78384.jpeg';



const CardView = () => {



  return (
    <section className="card-section">
    <div className="card-container">
      <div className="card">
        <div className="card-image" style={{ backgroundImage: `url(${image1})` }}></div>
        <h3 className="card-title">Engagemang och omtanke</h3>
        <div className="card-content">
          <p className="card-description">
          Vårt mål är att bygga en personlig relation med varje kund, där vi tillsammans arbetar mot ett gemensamt mål med stor noggrannhet och passion.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image" style={{ backgroundImage: `url(${image3})` }}></div>
        <h3 className="card-title">Över 30 års erfarenhet</h3>
        <div className="card-content">
          <p className="card-description">Vi är ett erfaret och respekterat företag med över 30 års erfarenhet på fastighetsmarknaden.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image" style={{ backgroundImage: `url(${image2})` }}></div>
        <h3 className="card-title">Över 30 års erfarenhet</h3>
        <div className="card-content">
          <p className="card-description">Vi är ett erfaret och respekterat företag med över 30 års erfarenhet på fastighetsmarknaden.</p>
        </div>
      </div>

      <div className="card">
        <div className="card-image" style={{ backgroundImage: `url(${image4})` }}></div>
        <h3 className="card-title">Card Title 4</h3>
        <div className="card-content">
          <p className="card-description">Vi är ett erfaret och respekterat företag med över 30 års erfarenhet på fastighetsmarknaden.</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default CardView;
