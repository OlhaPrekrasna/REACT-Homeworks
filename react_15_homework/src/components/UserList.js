import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul style={styles.list}>
      {users.length === 0 ? (
        <li style={styles.empty}>😕 No users found</li>
      ) : (
        users.map(user => (
          <li key={user.id} style={styles.item}>
            {user.name}
          </li>
        ))
      )}
    </ul>
  );
};

const styles = {
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  item: {
    background: '#f4f4f4',
    padding: '0.75rem 1rem',
    marginBottom: '0.75rem',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
    cursor: 'default'
  },
  empty: {
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#888'
  }
};

export default UserList;