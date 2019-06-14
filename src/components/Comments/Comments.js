import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Comments extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'COMMENTS_FEEDBACK',
            payload: event.target.value
        });
    }

    render() {
        return (
            <div className="App">
                <h3>Any comments you want to leave?</h3>
                <label>Comments</label>
                <input placeholder="Comments" onChange={this.handleChange}/>
                <button>NEXT</button>
                <ReviewFeedback/>
            </div>
        );
    }
}

export default connect()(Comments);