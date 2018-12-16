import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
class FinalResult extends Component {
  render() {
    return (
      <div className="container">
        <h1>Final Quiz result</h1>
        <Alert color="primary">
          You answered {this.props.questions.length} questions in total.
        </Alert>
        <Alert color="success">
          You had {this.props.score} correct answers.
        </Alert>
        <Alert color="danger">
          You had {this.props.questions.length - this.props.score} wrong
          answers.
        </Alert>
        <Link to="/">
          {' '}
          <Button onClick={this.props.restart}>Restart ...</Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  score: state.reducer1.score,
  questions: state.reducer1.questions
});
const mapDispatchToProps = dispatch => ({
  restart: () => dispatch({ type: 'RESTART' })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalResult);

// mapDispatchToProps
