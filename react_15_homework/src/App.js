import React, { useState, useCallback, useMemo } from 'react';
import UserList from './components/UserList';

const initialUsers = [
  { id: 1, name: 'Dan Reynolds' },
  { id: 2, name: 'Ben McKee' },
  { id: 3, name: 'Wayne Sermon' },
  { id: 4, name: 'Daniel Platzman' },
  { id: 5, name: 'Minka Kelly' }
];

function App() {
  const [filter, setFilter] = useState('');

  const filterUsers = useCallback((filterText) => {
    return initialUsers.filter(user =>
      user.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>User Directory</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={styles.input}
        />
        <UserList users={filteredUsers} />
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minHeight: '100vh',
    background: '#FFFFFF',
    padding: '3rem'
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%'
  },
  title: {
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    color: '#333',
    fontWeight: '600',
    textAlign: 'center'
  },
  input: {
    padding: '0.75rem',
    width: '100%',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    marginBottom: '1.5rem',
    fontSize: '1rem',
    outline: 'none',
    transition: '0.3s'
  }
};

export default App;
