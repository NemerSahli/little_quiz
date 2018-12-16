import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/layout/Header';
import Home from './Components/quiz_pages/Home';
import Questios from './Components/quiz_pages/Questions';
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FinalResult from './Components/quiz_pages/FinalResult';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/questions" component={Questios} />
            <Route path="/finalresult" component={FinalResult} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
