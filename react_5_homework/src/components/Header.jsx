import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '../assets/png/g10.png';

const Header = () => {
  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
