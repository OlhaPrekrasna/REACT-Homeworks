import React, { useState } from 'react';

const List = () => {

  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },
    { id: 2, name: 'Мария', age: 22 },
    { id: 3, name: 'Алексей', age: 21 },
    { id: 4, name: 'Марина', age: 19 },
    { id: 5, name: 'Даша', age: 23 },
    { id: 6, name: 'Глеб', age: 24 },
    { id: 7, name: 'Дима', age: 18 },
    { id: 8, name: 'Гриша', age: 20 },
    { id: 9, name: 'Серафим', age: 21 }
  ]);

  const handleRemove = (id) => {
    
    setPeople(prevPeople => prevPeople.filter(person => person.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>Список приглашённых</h2>

      {people.length === 0 ? (
        <p style={styles.empty}>Список пуст</p>
      ) : (
        <ul style={styles.list}>
          {people.map((person) => (
            <li key={person.id} style={styles.listItem}>
              <span>{person.name}, {person.age} лет</span>
              <button onClick={() => handleRemove(person.id)} style={styles.button}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default List;

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  list: {
    listStyleType: 'none',
    padding: 0
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ddd'
  },
  button: {
    backgroundColor: 'purple',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  empty: {
    textAlign: 'center',
    color: '#999'
  }
};
