const intialState = {
  currentQuestion: 0,
  score: 0,
  showQuestionResult: false,
  answer: null,
  questions: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return {
        ...state,
        questions: action.data
      };

    case 'NEXT_QUESTION':
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        showQuestionResult: false
      };
    case 'CHECK_ANSWER':
      return {
        ...state,
        score: state.score + 1
      };
    case 'SUBMIT_ANSWER':
      let counter = 0;
      state.questions[state.currentQuestion].answers.forEach(
        (element, index) => {
          if (element.result === action.answer[index].result) {
            counter++;
          }
        }
      );
      var points = 0;
      if (counter === action.answer.length) {
        points++;
      }
      return {
        ...state,
        answer: action.answer,
        showQuestionResult: !state.showQuestionResult,
        score: state.score + points
      };

    case 'RESTART':
      return {
        ...state,
        score: 0,
        answer: null,
        currentQuestion: 0,
        showQuestionResult: false
      };

    default:
      return state;
  }
}
