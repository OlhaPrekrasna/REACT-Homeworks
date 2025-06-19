import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Articles.module.css';

const articles = [
  { id: '1', title: 'Основы React' },
  { id: '2', title: 'Что такое React Router?' },
];

const Articles = () => {
  return (
    <div className={styles.container}>
      <h2>Список статей</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
