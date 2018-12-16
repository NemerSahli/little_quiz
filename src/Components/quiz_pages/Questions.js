import React, { Component } from 'react';
import StatusBar from './StatusBar';
import Question from './Question';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { connect } from 'react-redux';
import Answers from './Answers';
import QuestionResult from './QuestionResult';
import { Link } from 'react-router-dom';
import { submitAnswer } from '../../actions/actions';

class Questions extends Component {
  state = {
    checkedBoxex: [],
    popoverOpen: false
  };

  componentDidMount() {
    this.initializeCeckBoxes();
  }
  initializeCeckBoxes = () => {
    if (this.props.currentQuestion !== this.props.questions.length) {
      let newCheckedBoxex = [];
      this.props.questions[this.props.currentQuestion].answers.map(index => {
        return newCheckedBoxex.push({ id: index + 1, result: false });
      });

      this.setState({
        checkedBoxex: newCheckedBoxex
      });
    }
  };

  setCheckBoxTrue = (id, result) => {
    let newCheckedBoxex = [...this.state.checkedBoxex];
    newCheckedBoxex[id - 1].result = result;
    this.setState({
      checkedBoxex: newCheckedBoxex
    });
  };

  submitAnswer = () => {
    let valid = this.state.checkedBoxex.findIndex(
      checkBox => checkBox.result === true
    );
    if (valid !== -1) {
      this.setState({ popoverOpen: false });
      this.props.submitAnswer(this.state.checkedBoxex);
    } else {
      this.setState({ popoverOpen: true });
    }
  };
  closePopover = () => {
    this.setState({ popoverOpen: false });
  };
  render() {
    const { currentQuestion, questions, score } = this.props;
    return (
      <div className="container">
        <h1>Little Quiz</h1>
        <p>Check your Knowledge!</p>
        <StatusBar
          currentQuestion={
            currentQuestion < questions.length
              ? currentQuestion
              : currentQuestion - 1
          }
          totalQuestions={questions.length}
          score={score}
        />

        {currentQuestion !== questions.length ? (
          this.props.showQuestionResult ? (
            <QuestionResult
              initializeCheckBoxesHandler={this.initializeCeckBoxes}
            />
          ) : (
            <div className="border p-3">
              <Question currentQuestion={questions[currentQuestion].question} />

              <Answers
                setCheckBoxTrueHandler={this.setCheckBoxTrue}
                checkedAnswersHandler={this.state.checkedAnswers}
                checkBoxEnabled="enabled"
                answersHandler={questions[currentQuestion].answers}
              />
              <Button id="popover" color="primary" onClick={this.submitAnswer}>
                Submit Answer
              </Button>
              <Popover
                placement="bottom"
                isOpen={this.state.popoverOpen}
                target="popover"
                toggle={this.toggle}
              >
                <PopoverHeader color="danger">
                  Warning{' '}
                  <Button
                    className="float-right btn-sm"
                    onClick={this.closePopover}
                  >
                    x
                  </Button>
                </PopoverHeader>
                <PopoverBody>
                  you didn't select any answer, please select at least one!
                </PopoverBody>
              </Popover>
            </div>
          )
        ) : (
          <Link to="/finalresult">
            <Button color="primary">Show Quiz Result</Button>
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.reducer1.questions,
  currentQuestion: state.reducer1.currentQuestion,
  score: state.reducer1.score,
  showQuestionResult: state.reducer1.showQuestionResult
});

export default connect(
  mapStateToProps,
  { submitAnswer }
)(Questions);
