import React from 'react';
import CatImage from './components/CatImage';
import styles from './components/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <CatImage />
    </div>
  );
}

export default App;
