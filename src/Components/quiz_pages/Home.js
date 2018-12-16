import React, { Component } from 'react';

import { connect } from 'react-redux';
import { loadQuestions } from '../../actions/actions';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
class Home extends Component {
  state = {
    linkId: this.props.match.params.id
  };

  componentDidMount() {
    this.props.loadQuestions();
    if (this.state.linkId) {
      this.props.openModal(this.state.linkId);
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Little Quiz</h1>
        <p>Check your knowledge!</p>
        <p>
          This is a quiz about HTML, CSS and JavaScript, that can be used to
          repeat all the basics that are needed in everday's life of a web
          developer.
        </p>
        <p>Find out if you know all the details!</p>
        <Link to="/questions" className="text-white">
          <Button color="primary">Let's have fun! -> </Button>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { loadQuestions }
)(Home);
