import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.questionnaire.questions);

  const handleSubmit = () => {
    dispatch(submitAnswers());
  };

  return (
    <div style={{ width: '600px', margin: '0 auto', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center' }}>Questionnaire</h1>
      {questions.map((q) => (
        <Question key={q.id} question={q} />
      ))}
      <button
        onClick={handleSubmit}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Submit
      </button>
      <Result />
    </div>
  );
}

export default App;
