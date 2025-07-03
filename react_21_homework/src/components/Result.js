import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => {
  const score = useSelector((state) => state.questionnaire.score);

  return score !== null ? (
    <h2 style={{ marginTop: '30px' }}>Your Score: {score}</h2>
  ) : null;
};

export default Result;
