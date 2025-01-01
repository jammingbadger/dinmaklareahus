// src/components/AllEstates.js
import React from 'react';
import './AllEstates.css';  // Importera din CSS

const AllEstates = () => {
  const estates = [
    { id: 1, name: 'Villa i Stockholm', price: '5,000,000 SEK' },
    { id: 2, name: 'Lägenhet i Göteborg', price: '2,500,000 SEK' },
    { id: 3, name: 'Hus på landet', price: '3,200,000 SEK' },
    // Lägg till fler bostäder här
  ];

  return (
    <div className="all-estates">
      <h1>Bostäder till salu</h1>
      <ul>
        {estates.map(estate => (
          <li key={estate.id}>
            <h2>{estate.name}</h2>
            <p>{estate.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllEstates;
