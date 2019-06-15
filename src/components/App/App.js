import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';


class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={Feelings}/>
        <Route path='/1' component={Understanding}/>
        <Route path='/2' component={Support}/>
        <Route path='/3' component={Comments}/>
        <Route path='/complete' component={ReviewFeedback}/>
      </Router>
    );
  }
}

export default App;
