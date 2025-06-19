import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './CatImage.module.css';

const CatImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  const fetchCatImage = async () => {
    try {
      const response = await axios.get(
        'https://api.thecatapi.com/v1/images/search'
      );
      setImageUrl(response.data[0].url);
    } catch (error) {
      console.error('Ошибка при загрузке изображения:', error);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Random cat image</h1>
      {imageUrl && (
        <img className={styles.image} src={imageUrl} alt="Random cat" />
      )}
      <button className={styles.button} onClick={fetchCatImage}>
        Load new image
      </button>
    </div>
  );
};

export default CatImage;
