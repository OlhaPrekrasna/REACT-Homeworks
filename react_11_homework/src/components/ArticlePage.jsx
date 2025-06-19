import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ArticlePage.module.css';

const articleData = {
  1: { title: 'Основы React', content: 'React — это библиотека для создания пользовательских интерфейсов.' },
  2: { title: 'Что такое React Router?', content: 'React Router помогает организовать маршруты в SPA.' },
};

const ArticlePage = () => {
  const { id } = useParams();
  const article = articleData[id];

  if (!article) return <p>Статья не найдена</p>;

  return (
    <div className={styles.container}>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
