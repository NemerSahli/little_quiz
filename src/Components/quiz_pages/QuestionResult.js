import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Question from './Question';
import Answers from './Answers';
import { connect } from 'react-redux';
import { nextQuestion } from '../../actions/actions';
class QuestionResult extends Component {
  componentWillUnmount() {
    this.props.initializeCheckBoxesHandler();
  }
  nextQustion = () => {
    this.props.nextQuestion();
  };
  render() {
    const { currentQuestion, questions } = this.props;
    return (
      <div>
        <Question currentQuestion={questions[currentQuestion].question} />
        <Answers
          checkBox="disabled"
          answersHandler={questions[currentQuestion].answers}
        />
        <Button color="primary" onClick={this.nextQustion}>
          Next Question
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  questions: state.reducer1.questions,
  currentQuestion: state.reducer1.currentQuestion
});

export default connect(
  mapStateToProps,
  { nextQuestion }
)(QuestionResult);
