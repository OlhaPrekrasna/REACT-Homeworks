import React from 'react';

const CityCard = ({ city }) => {
  if (!city) return null;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto'
    }}>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} style={{ width: '100%', borderRadius: '8px' }} />
      <p style={{ marginTop: '10px' }}>{city.description}</p>
      <ul>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
