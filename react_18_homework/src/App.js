import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;