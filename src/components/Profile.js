import "./Building.css";
import Img1 from '../assets/straw-bales.jpg';

const Info = () => {

  const handleClick = () => {
    window.open("https://www.hemnet.se/maklare/din-maklare-peter-olvsborn-717571", "_blank");
  };

  return (
    <div id="fastigheter" className="build-container">
      {/* Bildsektion */}
      <div className="build-image">
        <img 
          src={Img1} 
          alt="Modern fastighet" 
        />
      </div>
      
      {/* Textsektion */}
      <div className="build-text">
        <div className="build-text-content">
          <h2>Just nu</h2>
          <p>Vi arbetar på att bygga en mer omfattande sektion för våra fastigheter.
             Tills dess kan du ta del av vårt aktuella utbud genom att följa länken nedan.</p>
          <button className="build-button" onClick={handleClick}>
            Till salu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
