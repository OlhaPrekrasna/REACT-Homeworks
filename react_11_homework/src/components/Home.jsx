import React from 'react';
import styles from '../styles/Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // инициализация навигации

  const goToArticle = () => {
    navigate('/articles/1'); // переход к статье с id = 1
  };

  return (
    <div className={styles.container}>
      <h1>Добро пожаловать в мой блог!</h1>
      <p>Читайте интересные статьи о React и веб-разработке.</p>
      <button onClick={goToArticle} className={styles.button}>
        Читать первую статью
      </button>
    </div>
  );
};

export default Home;

