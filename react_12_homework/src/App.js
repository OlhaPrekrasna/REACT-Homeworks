import React, { useState } from 'react';
import ValueDisplay from './ValueDisplay';

function App() {
  const [value, setValue] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Current and Previous Value</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ padding: '5px', fontSize: '16px' }}
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
