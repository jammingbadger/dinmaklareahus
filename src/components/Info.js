
import React, { useState } from 'react';
import './Info.css';
import infoImage from "../assets/bild yngsjö 2.jpg";

const Info = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Här kan du lägga till logik för att skicka formuläret (t.ex. via en API)
    console.log('Form submitted', formData);
  };

  return (
    <section id="info" className="info">
      <div className='info-image'>
        <img src={infoImage} alt='infoImage'/>
      </div>

        <div className='info-text'>
          <h1>Din Mäklare Åhus & Österlen</h1>
            <p>Vi är ett erfaret och respekterat företag med över 30 års erfarenhet på fastighetsmarknaden.
               Vi erbjuder skräddarsydd förmedling av fastigheter, oavsett typ eller pris, med fokus på kundens individuella behov.</p>

               <p> Som registrerad fastighetsmäklare med 33 års erfarenhet har jag god kännedom om marknaden och vad våra kunder förväntar sig.
               Vi prioriterar alltid hög service, affärsmässighet och ett långsiktigt förhållningssätt för att hjälpa våra kunder nå sina mål.</p>

        </div>
    </section>
  );
};

export default Info;