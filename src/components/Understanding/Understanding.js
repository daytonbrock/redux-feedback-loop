import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Understanding extends Component {

    handleChange = (event) => {
        this.props.dispatch({
            type: 'UNDERSTANDING_FEEDBACK', 
            payload: event.target.value
        });
    }

    handleClick = () => {
        this.props.history.push('/2');
    }

    render() {
        return (
            <div className="App">
                <h3>How well are you understanding the content?</h3>
                <label>Understanding?</label>
                <select onChange={this.handleChange}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleClick}>NEXT</button>
                <ReviewFeedback/>
            </div>
        );
    }
}

export default connect()(Understanding);