import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './TextDisplay.module.css';

const TextDisplay = () => {
  const { language } = useContext(LanguageContext);

  const text = {
    en: 'Welcome to the language switcher app!',
    ru: 'Добро пожаловать в приложение переключения языка!',
  };

  return <p className={styles.text}>{text[language]}</p>;
};

export default TextDisplay;
