import React, { useEffect, useState } from 'react';
import './PropertySection.css';

const fallbackDeals = [
  {
    dealId: "test123",
    property: {
      address: { street: "Exempelgatan 1" },
      location: { city: "Stockholm" },
      livingArea: 75,
    },
    saleStatus: "Till salu",
    externalUrl: "https://exempel.se/fastighet/test123",
  },
  {
    dealId: "test456",
    property: {
      address: { street: "Storgatan 12" },
      location: { city: "Göteborg" },
      livingArea: 95,
    },
    saleStatus: "Visning",
    externalUrl: "https://exempel.se/fastighet/test456",
  },
];

const PropertySection = () => {
  const [deals, setDeals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/deals');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setDeals(data.length ? data : fallbackDeals); // Använd fallback om tomt
      } catch (err) {
        console.error('Error fetching deals:', err);
        setDeals(fallbackDeals); // Visa fallback även vid fel
        setError("Visar exempeldata p.g.a. fel");
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  if (loading) return <p>Laddar fastigheter...</p>;

  return (
    <div className="container" id="fastigheter">
      <h1 className="title">Till salu</h1>
      {error && <p style={{ color: 'orange' }}>{error}</p>}
      <div className="deal-grid">
        {deals.map((deal) => (
          <a
            key={deal.dealId}
            href={deal.externalUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="deal-card"
          >
            <h2>{deal.property?.address?.street || 'Okänd adress'}</h2>
            <p>{deal.property?.location?.city || 'Okänd ort'}</p>
            <p>Status: {deal.saleStatus}</p>
            {deal.property?.livingArea && (
              <p>Boarea: {deal.property.livingArea} m²</p>
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default PropertySection;
