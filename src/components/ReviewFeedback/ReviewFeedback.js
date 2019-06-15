import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewFeedback extends Component {

    handleClick = () => {
        // create data object to send
        const feedback = {
            feeling: this.props.feelings,
            understanding: this.props.understanding,
            support: this.props.support,
            comments: this.props.comments,
        }
        // post to server
        axios({
            method: 'POST',
            url: '/submit',
            data: feedback,
        }).then(() => {
            // reset redux state
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
                payload: '',
            });
        })
    }

    render() {

        const feelings = this.props.feelings;
        const understanding = this.props.understanding;
        const support = this.props.support;
        const comments = this.props.comments;

        let formFilledOut = false;
        if( feelings !== 0 && understanding !== 0 && support !== 0 ){
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
                    <button onClick={this.handleClick}>SUBMIT</button>
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