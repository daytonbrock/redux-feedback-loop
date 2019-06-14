import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {

    

    render() {

        const feelings = this.props.feelings;
        const understanding = this.props.understanding;
        const support = this.props.support;
        const comments = this.props.comments;

        let formFilledOut = false;
        if( feelings !== 0 && understanding !== 0 && support !== 0 && comments !== ''){
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
                    <button>SUBMIT</button>
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