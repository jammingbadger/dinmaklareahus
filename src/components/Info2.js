import "./Info2.css";
import Img1 from '../assets/_DSC3413.jpg';

const Info2 = () => {
  return (
    <div className="info2-container">
      
      {/* Textsektion */}
      <div className="info2-text">
        <div className="info2-text-content">
          <h2>Hitta ditt drömboende med oss</h2>
          <p>Vi erbjuder en helhetslösning för dig som vill köpa eller sälja bostad. Våra tjänster inkluderar:</p>
          <ul className="info2-list">
            <li><strong>Gratis värdering</strong> – Få en kostnadsfri och professionell värdering av din bostad.</li>
            <li><strong>Försäljningsprocessen</strong> – Vi hanterar allt från styling, marknadsföring och budgivning till kontraktskrivning och uppföljning.</li>
            <li><strong>Köprådgivning</strong> – Vi hjälper dig att hitta rätt bostad och guidar dig genom hela köpprocessen.</li>
          </ul>
          <button className="info2-button" onClick={() => document.getElementById("kontakt").scrollIntoView({ behavior: "smooth"})}>
            Kontakta oss
          </button>
        </div>
      </div>

      {/* Bildsektion */}
      <div className="info2-image">
        <img 
          src={Img1} 
          alt="Modern fastighet" 
        />
      </div>

    </div>
  );
};

export default Info2;
