import "./Team.css";
import { Link } from "react-router-dom";
import Img2 from '../assets/peter.jpg';
import Logo from '../assets/logga.png';

const Team = () => {

  const handlePhoneClick = (event) => {
    const isConfirmed = window.confirm('Vill du ringa det här numret?');
    if (isConfirmed) {
      event.preventDefault();
    }

  }

  return (
    <div id="team" className="team-container">
      {/* Bildsektion */}
      <div className="team-image">
        <img 
          src={Img2} 
          alt="Modern fastighet" 
        />
      </div>
      
      {/* Textsektion */}
      <div className="team-text">
          {/* Logga i hörnet */}
          <div className="team-logo">
            <img src={Logo} alt="Företagslogga" />
          </div>

          <div className="team-text-content">
            <h2>Peter Olvsborn</h2>
            <p className="team-text-p">Reg. Fastighetsmäklare</p>
            <p  onClick={handlePhoneClick}
      className="team-number"> 
     Tel: +46 (0) 708-240472</p>
{/*             <p>
              Jag har arbetat som registrerad fastighetsmäklare i över 37 år. 
              Med kontor i hjärtat av Åhus på Köpmannagatan förmedlar jag bostäder i en av Sveriges vackraste delar. 
              Min långa erfarenhet, starka lokala förankring och breda kontaktnät ger mig de bästa förutsättningarna att skapa framgångsrika affärer för dig som kund. 
              Hör gärna av dig!
            </p> */}
            <Link to="/peter" className="btn-team">
              Läs mer om Peter
            </Link>   
          </div>
      </div>
    </div>
  );
};

export default Team;
