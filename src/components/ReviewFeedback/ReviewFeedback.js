// ReviewFeedback.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewFeedback extends Component {

    handleClick = () => {
        // create data object to send to database
        const feedback = {
            feeling: this.props.feelings,
            understanding: this.props.understanding,
            support: this.props.support,
            comments: this.props.comments,
        }
        this.postToDatabase(feedback);
        // navigate to success page
        this.props.history.push('/5');
    }

    postToDatabase = (object) => {
        // this will post feedback to database then reset feedback reducers
        axios({
            method: 'POST',
            url: '/submit',
            data: object,
        }).then(() => {
            this.resetFeedbackReducers();
        })
    }

    resetFeedbackReducers = () => {
        // reset reducers
        this.props.dispatch({
            type: 'FEELINGS_FEEDBACK',
            payload: 0,
        });
        this.props.dispatch({
            type: 'UNDERSTANDING_FEEDBACK',
            payload: 0,
        });
        this.props.dispatch({
            type: 'SUPPORT_FEEDBACK',
            payload: 0,
        });
        this.props.dispatch({
            type: 'COMMENTS_FEEDBACK',
            payload: null,
        });
    }


    handleBackClick = () => {
        // navigate to comments
        this.props.history.push('/3');
    }

    render() {

        const feelings = this.props.feelings;
        const understanding = this.props.understanding;
        const support = this.props.support;
        const comments = this.props.comments;

        // variable used to conditionally render submit button if feedback is filled out
        let formFilledOut = false;
        if( feelings !== 0 && understanding !== 0 && support !== 0 && comments !== null){
            formFilledOut = true;
        }

        return (
            <div className="App">
                <h3>Review Your Feedback</h3>
                <p>Feelings: {feelings}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
                { formFilledOut ? 
                    <div>
                        <button onClick={this.handleBackClick}>BACK</button>
                        <button onClick={this.handleClick}>SUBMIT</button>
                    </div>
                :
                    <button disabled={true}>INCOMPLETE</button>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    feelings: state.feelingsFeedback,
    understanding: state.understandingFeedback,
    support: state.supportFeedback,
    comments: state.commentsFeedback,
})

export default connect(mapStateToProps)(ReviewFeedback);