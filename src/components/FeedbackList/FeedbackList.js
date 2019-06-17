// FeedbackList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackListItem from '../FeedbackListItem/FeedbackListItem';

class Admin extends Component {

    render() {
        return (
            <>
                {/* map out array of objects into individual items */}
                {this.props.feedbackList.map(feedback => <FeedbackListItem key={feedback.id} feedback={feedback}/>)}
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    feedbackList: state.feedbackList,
})

export default connect(mapStateToProps)(Admin);