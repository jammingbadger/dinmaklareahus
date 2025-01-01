
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
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
    <section id="contact" className="contact">
        <div className='contact-text'>
            <h1 className='contact-title'>Kontakta oss</h1>
            <p>Vi ser fram emot att höra från dig!</p>
            <div className='contact-adress'>
            <p>Åhusgatan 1</p>
            <p>123 45 Åhus</p>
            <p>info@dinmaklareahus.se </p>
            <p>044 - 24 23 24 </p>
            </div>
          
        </div>

    </section>
  );
};

export default Contact;
