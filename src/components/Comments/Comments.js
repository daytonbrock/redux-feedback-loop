import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Comments extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'COMMENTS_FEEDBACK',
            payload: event.target.value
        });
    }

    handleBackClick = () => {
        this.props.history.push('/2');
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <h3>Any comments you want to leave?</h3>
                <label>Comments</label>
                <input placeholder="Comments" onChange={this.handleChange}/>
                <button onClick={this.handleBackClick}>BACK</button>
                <ReviewFeedback/>
            </div>
        );
    }
}

export default connect()(Comments);