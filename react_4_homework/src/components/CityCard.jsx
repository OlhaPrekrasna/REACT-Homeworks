import React from 'react';

const CityCard = ({ city }) => {
  if (!city) return null;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '600px',
      margin: 'auto',
      background: '#80B86F'
    }}>
      <img
        src={city.imageUrl}
        alt={city.name}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '8px'
    }}
      />

      <h2 style={{ textAlign: 'center' }}>{city.name}</h2>
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
