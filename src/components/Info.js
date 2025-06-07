import "./Info.css";
import Img1 from '../assets/DJI_0220 - kopia.jpg';

const Info = () => {
  return (
    <div className="real-estate-container">
      {/* Bildsektion */}
      <div className="real-estate-image">
        <img 
          src={Img1} 
          alt="Modern fastighet" loading="lazy"
        />
      </div>
      
      {/* Textsektion */}
      <div className="real-estate-text">
        <div className="real-estate-text-content">
          <h2>Vi guidar dig hem</h2>
          <p>Vi strävar efter att erbjuda en mäklartjänst där engagemang, omtanke och en genuin förståelse för varje kunds unika situation står i fokus.
           Vårt mål är att bygga långsiktiga relationer genom personlig service och ett engagerat samarbete mot en lyckad bostadsaffär. Med noggrannhet, erfarenhet och passion skapar vi trygga och framgångsrika processer för våra kunder.</p> 
          
        </div>
      </div>
    </div>
  );
};

export default Info;
