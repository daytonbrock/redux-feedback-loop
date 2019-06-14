import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {

    render() {
        return (
            <div className="App">
                <h3>Review Your Feedback</h3>
                <p>Feelings: $REDUCER</p>
                <p>Understanding: $REDUCER</p>
                <p>Support: $REDUCER</p>
                <p>Comments: $REDUCER</p>
                <button>INCOMPLETE</button>
            </div>
        );
    }
}

export default connect()(ReviewFeedback);