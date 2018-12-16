import React, { Component } from 'react';
import Prism from 'prismjs';
import PrismJsx from 'prismjs/components/prism-jsx.min';
export default class Question extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div>
        <h3>Question: {this.props.currentQuestion}</h3>
      </div>
    );
  }
}
