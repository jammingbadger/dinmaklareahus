
import './Info2.css';
import infoImage2 from "../assets/rusty.jpg";


const Info2 = () => {
  
    return (
      <section id="info2" className="info2">
  
          <div className='info2-text'>
          <h1>Engagemang och omtanke</h1>
          <p>Vi tror på att leverera en mäklartjänst där engagemang, omtanke och en genuin förståelse för kundens bästa är centrala värderingar.</p> 
            <p>Vårt mål är att bygga en personlig relation med varje kund, där vi tillsammans arbetar mot ett gemensamt mål med stor noggrannhet och passion.</p>
          <p>Vi undviker tomma superlativ om att vara störst eller bäst, och vi lägger inte fokus på statistik som kan vinklas. Istället låter vi vårt arbete, vår kompetens och våra kunders upplevelser tala för sig själva.</p>

          </div>

          <div className='info2-image'>
          <img src={infoImage2} alt='infoImage'/>
        </div>
  
      </section>
    );
  };
  
  export default Info2;