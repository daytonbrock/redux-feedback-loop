// FeedbackListItem.js
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

    handleClick = (event) => {
        console.log(this.props.feedback.id)
    }

    render() {

        const feedback = this.props.feedback;

        return (
            <tr>
                <td>{feedback.feeling}</td>
                <td>{feedback.understanding}</td>
                <td>{feedback.support}</td>
                <td>{feedback.comments}</td>
                <td>
                    <button onClick={this.handleClick}>DELETE</button>
                </td>
            </tr>
        );
    }
}

export default connect()(Admin);