// Admin.js
import React, { Component } from 'react';
import FeedbackList from '../FeedbackList/FeedbackList';

class Admin extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback Results!</h1>
                </header>
                <br/>
                <table>
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <FeedbackList />
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Admin;