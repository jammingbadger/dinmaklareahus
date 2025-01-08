import React from 'react';
import { Link } from 'react-router-dom';  // För att länka till detaljsidor
import './AllEstates.css'; // Om du vill lägga till CSS för denna komponent

const AllEstates = ({ estates }) => {
  return (
    <section className="all-estates">
      <h1>Alla Bostäder</h1>
      <div className="estates-list">
        {estates.map((estate) => (
          <div key={estate.id} className="estate-card">
            <img src={estate.imageUrl} alt={estate.title} className="estate-image" />
            <div className="estate-info">
              <h2>{estate.title}</h2>
              <p>{estate.description}</p>
              <Link to={`/estate/${estate.id}`} className="view-details-link">
                Visa detaljer
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllEstates;
