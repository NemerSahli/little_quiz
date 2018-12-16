import React from 'react';

export default function About() {
  return (
    <div className="container mt-5">
      <h1 className="display-4">About little Quiz</h1>
      <p className="lead">
        Simple app, that sends request to server and the respose will be the
        array of questions to start the quiz{' '}
      </p>
      <p className="text-secondary">Version 1.0.2</p>
    </div>
  );
}
