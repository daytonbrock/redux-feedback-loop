// App.js
// Bring in frameworks, styles, axios
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

class App extends Component {

  // DOM is ready
  componentDidMount() {
    this.refreshFeedback();
  }

  // get feedback from database, send to redux state
  refreshFeedback = () => {
    axios({
      method: 'GET',
      url: '/admin'
    }).then((response) => {
      this.props.dispatch({
        type: 'REFRESH_FEEDBACK',
        payload: response.data
      });
    });
  }

  render() {
    return (
      <Router>
        <Route path='/' exact component={Feelings}/>
        <Route path='/1' component={Understanding}/>
        <Route path='/2' component={Support}/>
        <Route path='/3' component={Comments}/>
        <Route path='/4' component={ReviewFeedback}/>
        <Route path='/5' component={Success}/>
        <Route path='/admin' component={Admin}/>
      </Router>
    );
  }
}

export default connect()(App);
