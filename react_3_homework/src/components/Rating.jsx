import React, { useState } from 'react';

const Rating = () => {
  
  const [ratingValue, setRatingValue] = useState(0);

  const ratingList = [
    'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png',
    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'
  ];

  const ratingLabels = [
    { label: 'Плохо', index: 0 },
    { label: 'Приемлемо', index: 1 },
    { label: 'Хорошо', index: 2 },
    { label: 'Отлично', index: 3 }
  ];

  return (
    <div style={styles.container}>
      <img
        src={ratingList[ratingValue]}
        alt="Рейтинг"
        style={styles.image}
      />

      <div style={styles.buttonsContainer}>
        {ratingLabels.map(({ label, index }) => (
          <button
            key={index}
            onClick={() => setRatingValue(index)}
            style={styles.button}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Rating;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    padding: '20px'
  },
  image: {
    width: '200px',
    height: 'auto',
    borderRadius: '8px'
  },
  buttonsContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  button: {
    padding: '10px 16px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#E1F6F6',
    transition: 'all 0.3s ease',
  }
};

