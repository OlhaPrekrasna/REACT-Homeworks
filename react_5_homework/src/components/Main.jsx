import React, { useState } from 'react';
import styles from '../styles/Main.module.css';
import appleImg from '../assets/png/Apple.png';
import googleImg from '../assets/png/Google.png';
import xImg from '../assets/png/X.png';

const icons = [
  { id: 0, src: appleImg, alt: 'Apple' },
  { id: 1, src: googleImg, alt: 'Google' },
  { id: 2, src: xImg, alt: 'X' },
];

const Main = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div>
      <div className={styles.container}>
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <a href="#" className={styles.signInLink}>
          Sign in with
        </a>

        <div className={styles.rectangle}>
          {icons.map(({ id, src, alt }) => (
            <img
              key={id}
              src={src}
              alt={alt}
              className={`${styles.icon} ${
                activeIndex === id ? styles.active : ''
              }`}
              onClick={() => handleClick(id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
