import axios from 'axios';

export const loadQuestions = () => async dispatch => {
  const res = await axios.get('http://localhost:8000/questions');
  console.log(res.data.result);
  dispatch({
    type: 'LOAD_QUESTIONS',
    data: res.data.result
  });
};

export const nextQuestion = id => dispatch => {
  dispatch({
    type: 'NEXT_QUESTION',
    id: id
  });
};

export const submitAnswer = checkedBoxes => dispatch => {
  dispatch({ type: 'SUBMIT_ANSWER', answer: checkedBoxes });
};
