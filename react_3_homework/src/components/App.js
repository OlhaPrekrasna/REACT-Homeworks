import React from 'react';
import Rating from './Rating';
import List from './List';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Оцените сервис</h1>
      <Rating />
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Мероприятие</h1>
      <List />
    </div>
  );
}

export default App;
