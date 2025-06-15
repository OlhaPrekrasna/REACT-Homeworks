import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://randomuser.me/api');
      setUser(response.data.results[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <p className={styles.loading}>Loading...</p>;
  }

  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
      />
      <h2 className={styles.name}>
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p className={styles.email}>Email: {user.email}</p>
      <p className={styles.location}>
        Location: {user.location.city}, {user.location.country}
      </p>
      <button className={styles.button} onClick={fetchUser}>
        Загрузить нового пользователя
      </button>
    </div>
  );
};

export default UserProfile;

