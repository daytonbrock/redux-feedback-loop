// Support.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Support extends Component {

    handleChange = (event) => {
        // update state on change
        this.props.dispatch({
            type: 'SUPPORT_FEEDBACK',
            payload: event.target.value
        });
    }

    handleNextClick = () => {
        // navigate to comments
        this.props.history.push('/3');
    }

    handleBackClick = () => {
        // navigate to understanding
        this.props.history.push('/1');
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <h3>How well are you being supported?</h3>
                <label>Support?</label>
                <select onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleBackClick}>BACK</button>
                <button onClick={this.handleNextClick}>NEXT</button>
                <ReviewFeedback/>
            </div>
        );
    }
}

export default connect()(Support);