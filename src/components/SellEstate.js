import React from "react";
import "./SellEstate.css";

const SellEstate = () => {


    return (
<section id="sell" className="sell-section">
  <h2>Funderar du på att sälja din bostad?</h2>
  <p>Vi hjälper dig att göra din bostadsförsäljning snabb och enkel. Fyll i formuläret nedan så återkommer vi till dig med 
    information om nästa steg och en kostnadsfri värdering.</p>
  <form className="contact-form">
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="first-name">Förnamn</label>
        <input type="text" id="first-name" name="first-name" placeholder="Förnamn" required />
      </div>
      
      <div className="form-group">
        <label htmlFor="last-name">Efternamn</label>
        <input type="text" id="last-name" name="last-name" placeholder="Efternamn" required />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="email">E-postadress</label>
        <input type="email" id="email" name="email" placeholder="Ange din e-postadress..." required />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefonnummer</label>
        <input type="tel" id="phone" name="phone" placeholder="Ange ditt telefonnummer" required />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group">
        <label htmlFor="address">Adress</label>
        <input type="text" id="address" name="address" placeholder="Ange din adress" required />
      </div>

      <div className="form-group">
        <label htmlFor="postal-code">Postnummer och ort</label>
        <input type="text" id="postal-code" name="postal-code" placeholder="Postnummer och ort" required />
      </div>
    </div>

    <div className="form-row">
      <div className="form-group full-width">
        <label htmlFor="property-type">Typ av fastighet</label>
        <select id="property-type" name="property-type" required>
          <option value="">Välj typ</option>
          <option value="villa">Villa</option>
          <option value="lägenhet">Lägenhet</option>
          <option value="radhus">Radhus</option>
          <option value="tomt">Tomt</option>
        </select>
      </div>
    </div>

    <div className="form-row">
      <div className="form-group full-width">
        <label htmlFor="message">Meddelande</label>
        <textarea id="message" name="message" placeholder="Skriv ditt meddelande här..." required></textarea>
      </div>
    </div>

    <button type="submit" className="submit-button">Skicka</button>
  </form>
</section>

      

    );
};

export default SellEstate;


