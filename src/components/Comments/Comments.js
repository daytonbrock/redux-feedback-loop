import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Comments extends Component {

    render() {
        return (
            <div className="App">
                <h3>Any comments you want to leave?</h3>
                <label>Comments</label>
                <input placeholder="Comments"/>
                <button>NEXT</button>
                <ReviewFeedback/>
            </div>
        );
    }
}

export default connect()(Comments);