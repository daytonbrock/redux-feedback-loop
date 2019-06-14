import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewFeedback extends Component {

    render() {
        return (
            <div className="App">
                <h3>Review Your Feedback</h3>
                <p>Feelings: {this.props.feelings}</p>
                <p>Understanding: {this.props.understanding}</p>
                <p>Support: {this.props.support}</p>
                <p>Comments: {this.props.comments}</p>
                <button>INCOMPLETE</button>
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