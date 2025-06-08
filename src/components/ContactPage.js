import React from "react";
import "./ContactPage.css";

const ContactPage = () => {

  return (
    <section id="kontakt" className="contact-section">
      <div className="contact-container">
        <div className="contact-form">
{/*           <img src={logo2} alt="Logotyp2" className="logo2" /> 
 */}          <h3>Köp eller sälj med oss</h3>
          <p>Vi finns här för att guida dig genom hela processen – 
            från första steget till ett lyckat resultat. Oavsett om 
            du letar efter ditt drömboende eller vill sälja din bostad, 
            erbjuder vi personlig service och expertis för att säkerställa en smidig och trygg affär.</p>
            <button onClick={() => window.location.href = "mailto:info@dinmaklareahus.se"} 
                    className="real-estate-button">Skicka e-post</button>
     
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
