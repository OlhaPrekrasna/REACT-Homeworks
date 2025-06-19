import React from 'react';
import styles from '../styles/UserItem.module.css';

const UserItem = ({ name }) => {
  return <li className={styles.user}>{name}</li>;
};

export default UserItem;
