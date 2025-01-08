/* import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EstateDetail = () => {
  const { id } = useParams();  
  const [estate, setEstate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    axios.get(`https://din-mspecs-api-url.com/estate/${id}`, {
      headers: {
        'Authorization': `Bearer din-api-nyckel` 
      }
    })
    .then(response => {
      setEstate(response.data); 
      setLoading(false); 
    })
    .catch(error => {
      console.error("Det gick inte att hämta detaljer:", error);
      setLoading(false); 
    });
  }, [id]); 

  if (loading) {
    return <div>Laddar...</div>; 
  }

  if (!estate) {
     return <div>Objektet hittades inte.</div>;  
  }

  return (
    <div className="estate-detail">
      <h1>{estate.title}</h1>
      <img src={estate.imageUrl} alt={estate.title} />
      <p>{estate.description}</p>
      <p>Pris: {estate.price}</p>
      <p>Plats: {estate.location}</p>
    </div>
  );
};

export default EstateDetail;
 */