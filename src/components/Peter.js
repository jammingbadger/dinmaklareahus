import React, {useEffect} from "react";
/* import { Link } from "react-router-dom";
 */import "./Peter.css";
import img4 from "../assets/2412037.jpg";
import img5 from "../assets/_DSC3402.jpg";
import img6 from "../assets/rusty.jpg";
import img7 from "../assets/peter2.jpg";

const Peter = () => {
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="background-wrapper">
      <div className="title">
      <h2>"Återkommande kunder är inte bara smickrande – det är ett bevis på förtroende."</h2>
      </div>
      <section className="contact-section2">
        <div className="contact-text">
          <h2 className="section-title">PETER OLVSBORN</h2>
          
          <p className="contact-info">
            <strong>Telefon:</strong> +46 (0) 708-240472 <br />
            <strong>Email:</strong> peter@dinmaklareahus.se
          </p>
        </div>
        <div className="contact-image-container">
          <img
            className="contact-image"
            src={img7}
            alt="Mäklare"
          />
        </div>
      </section>
    

<div className="page-container">
  <section className="page-section">
    <div className="page-content">
      <div className="hero-text">
        <h2 className="hero-title">Lokalkännedom med fingertoppskänsla</h2>
        <p className="hero-subtitle">
          
          Med kontor i hjärtat av Åhus på Köpmannagatan förmedlar jag bostäder i en av Sveriges vackraste delar. 
          Min långa erfarenhet, starka lokala förankring och breda kontaktnät ger mig de bästa förutsättningarna att skapa framgångsrika affärer för dig som kund. 
          
        </p>
        <h2>Glädjen i yrket och värdet av relationer</h2>
  <p>
    För att trivas i fastighetsmäklaryrket i över 37 år krävs mer än bara kompetens – 
    det krävs ett genuint intresse för människor, bostäder och affärer. Jag tycker om 
    det jag gör och ser ett stort värde i att bygga långsiktiga, personliga kontakter 
    med både säljare och köpare.
  </p>

  <h2>Ett kontaktnät som gör skillnad</h2>
  <p>
    Det nätverk jag byggt upp genom åren är ovärderligt för dig som säljare. Det här är 
    inte något som kan ersättas av nyexaminerad energi eller ungdomlig entusiasm. 
    Kontakter och förtroende byggs över tid – genom ärlighet, tillgänglighet och 
    upprepade lyckade affärer.
  </p>

  <h2>Nöjda kunder kommer tillbaka</h2>
  <p>
    En stor del av mina kunder är återkommande, vilket jag ser som det bästa kvittot på 
    att jag har gjort ett bra jobb. Att få förtroendet igen, ofta flera gånger, är både 
    hedrande och motiverande.
  </p>

  <h2>Ärlighet lönar sig</h2>
  <p>
    Som mäklare måste man våga vara uppriktig. Om en stor buske skymmer entrén, eller om 
    ett rum är överbelamrat med detaljer som tar fokus från helheten, behöver det påtalas. 
    Vi arbetar mot samma mål – att skapa bästa möjliga förutsättningar för en lyckad affär.
  </p>
      </div>
      
    </div>
  </section>
</div>

{/* <section className="checklist-section" style={{ backgroundColor: '#f0f8ff', padding: '3rem 2rem', borderRadius: '12px', maxWidth: '900px', margin: '3rem auto' }}>
  <h2 className="section-title" style={{ textAlign: 'center', color: '#2f4858' }}>
    Din roliga checklista innan försäljning 🏡✨
  </h2>
  <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#444' }}>
    Här är några enkla tips för att göra din bostad oemotståndlig – och sälja snabbt utan stress!
  </p>
  <ul style={{ listStyle: 'none', paddingLeft: 0, maxWidth: '600px', margin: '0 auto' }}>
    <li style={{ marginBottom: '1rem' }}>
      ✅ <strong>Rensa bort allt onödigt</strong> – ingen vill titta på dina samlingar av souvenirer (så fina de än är).
    </li>
    <li style={{ marginBottom: '1rem' }}>
      ✅ <strong>Låt solen in</strong> – öppna gardinerna och släpp in ljuset, det gör underverk för stämningen.
    </li>
    <li style={{ marginBottom: '1rem' }}>
      ✅ <strong>Fräscha upp doften</strong> – kaffe, nybakade kakor eller en mild doftspray funkar magiskt!
    </li>
    <li style={{ marginBottom: '1rem' }}>
      ✅ <strong>Småreparationer räknas</strong> – laga den där knarrande dörren eller droppande kranen innan visningen.
    </li>
    <li style={{ marginBottom: '1rem' }}>
      ✅ <strong>Gör det personligt, men neutralt</strong> – lite hemtrevnad utan att chocka med för mycket färg och konstiga möbler.
    </li>
  </ul>
  <p style={{ textAlign: 'center', marginTop: '2rem', fontStyle: 'italic', color: '#2f4858' }}>
    Följ dessa tips så är du redan ett steg före i försäljningsracet!
  </p>
</section> */}



<section className="services-section">
  <h2 className="section-title">Peters tips för att maxa din försäljning</h2>
  <div className="services-grid">
    
    <div className="service-card">
      <img className="service-image" src={img4} alt="Styling & Förberedelse" />
      <h3 className="service-title">Styling gör skillnad</h3>
      <p className="service-desc">
        Små fix kan göra stor skillnad. En kudde här, en list där – vips är din bostad kär i spegeln.
      </p>
    </div>

    <div className="service-card">
      <img className="service-image" src={img5} alt="Tajming & Säsong" />
      <h3 className="service-title">Rätt tajming</h3>
      <p className="service-desc">
        Sommarsol, höstljus eller vårgrönt? Tajming är allt – visa ditt hem när det glänser som mest.
      </p>
    </div>

    <div className="service-card">
      <img className="service-image" src={img6} alt="Mäklare & Rådgivning" />
      <h3 className="service-title">Proffshjälp på vägen</h3>
      <p className="service-desc">
        En bra mäklare är som en bra GPS – guidar dig rätt, undviker gupp och vet var fällorna finns.
      </p>
    </div>

  </div>
</section>


      
    </div>
    
  );
};

export default Peter;
