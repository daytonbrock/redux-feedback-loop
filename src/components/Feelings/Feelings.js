// Feelings.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Feelings extends Component {

    handleChange = (event) => {
        // update redux state on change
        this.props.dispatch({type: 'FEELINGS_FEEDBACK', payload: event.target.value});
    }

    handleClick = () => {
        // navigate to understanding
        this.props.history.push('/1');
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <h3>How are you feelings today?</h3>
                <label>Feeling?</label>
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

export default connect()(Feelings);