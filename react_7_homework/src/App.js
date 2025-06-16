import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import TextDisplay from './components/TextDisplay';
import styles from './App.module.css';

function App() {
  return (
    <LanguageProvider>
      <div className={styles.container}>
        <h1 className={styles.title}>React Language Context</h1>
        <LanguageSwitcher />
        <TextDisplay />
      </div>
    </LanguageProvider>
  );
}

export default App;
