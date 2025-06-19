import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';

function App() {
  return (
    <div style={{ width: '300px', margin: '40px auto' }}>
      <h2>Список пользователей</h2>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
