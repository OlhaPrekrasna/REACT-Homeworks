import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button className={styles.button} onClick={toggleLanguage}>
      {language === 'en' ? 'Сменить язык на Русский' : 'Switch to English'}
    </button>
  );
};

export default LanguageSwitcher;
