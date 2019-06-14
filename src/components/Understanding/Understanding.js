import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Understanding extends Component {

    render() {
        return (
            <div className="App">
                <h3>How well are you understanding the content?</h3>
                <label>Understanding?</label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <button>NEXT</button>
                <ReviewFeedback/>
            </div>
        );
    }
}

export default connect()(Understanding);