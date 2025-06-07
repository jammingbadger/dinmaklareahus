import "./Info3.css";
import Img1 from '../assets/2412059.jpg';

const Info3 = () => {

 /*  const handleClick = () => {
    window.open("https://www.hemnet.se/maklare/din-maklare-peter-olvsborn-717571", "_blank");
  }; */

  return (
    <div id="sell" className="info3-container">
      {/* Bildsektion */}
      <div className="info3-image">
        <img 
          src={Img1} 
          alt="Modern fastighet" 
        />
      </div>
      
      {/* Textsektion */}
      <div className="info3-text">
        <div className="info3-text-content">
        <h2>Upptäck din bostads fulla potential</h2>
    <p>Varje hem är unikt och förtjänar att visas från sin bästa sida. 
      Genom rätt förberedelser kan du maximera värdet på din bostad och
       skapa bästa möjliga förutsättningar för en lyckad försäljning. 
       God framförhållning ger dig tid att planera och få råd från en
        mäklare som kan ge konkreta tips inför visning och försäljning. Styling och professionella bilder spelar en avgörande roll för det första intrycket och kan kraftigt höja slutpriset. Smarta förbättringar som målning, nya lister eller små justeringar i inredningen gör ofta stor skillnad utan att kräva stora investeringar.</p>

    <p>Att fundera på planlösningen kan också löna sig – i mindre bostäder kan ett extra rum ge ett rejält lyft i värde, medan större hem ibland vinner på att öppna upp ytor istället. Tajming är en annan viktig faktor; vissa bostäder visas bäst på sommaren när trädgårdar och uteplatser kan visas upp i sin fulla prakt. Till sist är valet av mäklare avgörande för att få rätt stöd genom hela processen och skapa det bästa resultatet. Vill du veta hur vi kan hjälpa dig att maximera din bostads potential? Kontakta oss för en kostnadsfri rådgivning.</p>

        </div>
      </div>
    </div>
  );
};

export default Info3;
