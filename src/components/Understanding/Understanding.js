import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Understanding extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'UNDERSTANDING_FEEDBACK', 
            payload: event.target.value
        });
    }

    handleNextClick = () => {
        this.props.history.push('/2');
    }

    handleBackClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <h3>How well are you understanding the content?</h3>
                <label>Understanding?</label>
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

export default connect()(Understanding);