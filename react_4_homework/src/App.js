import React, { useState } from 'react';
import CitySelector from './components/CitySelector';
import CityCard from './components/CityCard';
import { citiesData } from './data/citiesData';

function App() {

  const [selectedCityName, setSelectedCityName] = useState('');
  const selectedCity = citiesData.find(city => city.name === selectedCityName);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Города Японии</h1>
      <CitySelector cities={citiesData} onSelect={setSelectedCityName} />
      <CityCard city={selectedCity} />
    </div>
  );
}

export default App;
