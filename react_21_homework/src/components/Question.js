import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnswer } from '../features/questionnaire/questionnaireSlice';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(
    (state) =>
      state.questionnaire.questions.find((q) => q.id === question.id)
        ?.selectedAnswer
  );

  const handleChange = (e) => {
    dispatch(selectAnswer({ questionId: question.id, answer: e.target.value }));
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>{question.text}</h3>
      <label>
        <input
          type="radio"
          name={`question-${question.id}`}
          value="Option 1"
          checked={selectedAnswer === 'Option 1'}
          onChange={handleChange}
        />
        Option 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          name={`question-${question.id}`}
          value="Option 2"
          checked={selectedAnswer === 'Option 2'}
          onChange={handleChange}
        />
        Option 2
      </label>
    </div>
  );
};

export default Question;
