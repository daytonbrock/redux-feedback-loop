// FeedbackListItem.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Swal from 'sweetalert2';

class Admin extends Component {

    handleClick = (event) => {
        // prompt user to confirm before deleting
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover this feedback!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                // send confirmation message
                Swal.fire(
                    'Deleted!',
                    'Feedback removed from database.',
                    'success'
                )
                // delete feedback
                this.willDelete();
            }
        }); 
    }

    willDelete = () => {
        // when called, will delete feedback by id then refresh state
        axios({
            method: 'DELETE',
            url: '/admin/' + this.props.feedback.id
        }).then((response) => {
            this.refreshFeedback();
        })
    }

    refreshFeedback = () => {
        // this will refresh feedback in redux state
        axios({
            method: 'GET',
            url: '/admin'
        }).then((response) => {
            this.props.dispatch({
                type: 'REFRESH_FEEDBACK',
                payload: response.data
            });
        });
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