import React, { useState } from 'react';
import Answer from './Answer';

const MathQuiz = () => {
  const [score, setScore] = useState(0);
  const [a, setA] = useState(generateRandomNumber());
  const [b, setB] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const updatePoints = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }

    setA(generateRandomNumber());
    setB(generateRandomNumber());
  };

  return (
    <div className="quiz-container">
      <h1>Math Quiz</h1>
      <p>Current Score: {score}</p>
      <div className="question">
        <p>{a} + {b} = ?</p>
      </div>
      <Answer correctAnswer={a + b} updatePoints={updatePoints} />
    </div>
  );
};

export default MathQuiz;
