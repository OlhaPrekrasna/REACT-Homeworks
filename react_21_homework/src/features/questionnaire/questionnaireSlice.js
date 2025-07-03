import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Question 1?',
      correctAnswer: 'Option 1',
      selectedAnswer: '',
    },
    {
      id: 2,
      text: 'Question 2?',
      correctAnswer: 'Option 2',
      selectedAnswer: '',
    },
    {
      id: 3,
      text: 'Question 3?',
      correctAnswer: 'Option 1',
      selectedAnswer: '',
    },
    {
      id: 4,
      text: 'Question 4?',
      correctAnswer: 'Option 1',
      selectedAnswer: '',
    },
    {
      id: 5,
      text: 'Question 5?',
      correctAnswer: 'Option 2',
      selectedAnswer: '',
    },
  ],
  score: null,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      const { questionId, answer } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);
      if (question) {
        question.selectedAnswer = answer;
      }
    },
    submitAnswers: (state) => {
        let score = 0;
        for (const q of state.questions) {
          if (q.selectedAnswer === q.correctAnswer) {
            score++;
          }
        }
        state.score = score;
      }
      
  },
});

export const { selectAnswer, submitAnswers } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
