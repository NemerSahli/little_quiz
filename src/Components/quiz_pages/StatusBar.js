import React from 'react';
import { Progress } from 'reactstrap';

export default function StatusBar(props) {
  return (
    <div>
      <div className="row justify-content-between mt-5">
        <h5>
          Question {props.currentQuestion + 1}/{props.totalQuestions}{' '}
        </h5>
        <h5>Score: {props.score}</h5>
      </div>
      <Progress
        value={((props.currentQuestion + 1) * 100) / props.totalQuestions}
      />
      <hr />
    </div>
  );
}
