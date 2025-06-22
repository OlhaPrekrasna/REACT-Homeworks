import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || status.trim() === '') {
      setError('Please fill in both fields');
      return;
    }
    setUserInfo(name, status);
    setName('');
    setStatus('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User Information</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Status"
          value={status}
          onChange={e => setStatus(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);
