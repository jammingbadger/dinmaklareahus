/* import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Estates.css';

const Estates = () => {
  const [estates, setEstates] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    
    axios.get('https://dinmaklareahus.se/wp-admin/admin-ajax.php?action=mspecs_webhook', {
      headers: {
        'Authorization': `MspxTokenee4e1d74-1f5b-4e52-8693-4e230c864a24` 
      }
    })
    .then(response => {
      setEstates(response.data); 
      setLoading(false); 
    })
    .catch(error => {
      console.error("Det gick inte att hämta data från Mspecs:", error);
      setLoading(false); 
    });
  }, []); 

  if (loading) {
    return <div>Laddar...</div>; 
  }

  return (
    <section id="estates" className="estates">
      <div className="estate-title">
        <h1>Bostäder till salu</h1>
        <p>Senaste</p>
      </div>
      <div className="estates-content">
        {estates.map((estate) => (
          <div key={estate.id} className="estate-card">
            <Link to={`/estate/${estate.id}`}>
              <div className="estate-image-container">
                <img src={estate.imageUrl} alt={estate.title} className="estate-image" />
                <div className="estate-text-overlay">
                  <h2>{estate.title}</h2>
                  <p>{estate.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Estates;
 */