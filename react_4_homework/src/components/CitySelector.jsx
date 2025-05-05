import React from 'react'

const CitySelector = ({ cities, onSelect }) => {
  return (
    <div style={{ margin: '20px' }}>
      <label htmlFor="city">Выберите город: </label>
      <select id="city" onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Город --</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>{city.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;
