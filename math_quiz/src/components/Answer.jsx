import React, { useState } from 'react';

const Answer = ({ correctAnswer, updatePoints }) => {
  const [userAnswer, setUserAnswer] = useState('');

  const handleChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isCorrect = parseInt(userAnswer) === correctAnswer;
    updatePoints(isCorrect);
    setUserAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={userAnswer}
        onChange={handleChange}
        placeholder="Your answer"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Answer;
