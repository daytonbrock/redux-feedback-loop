import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback';

class Comments extends Component {

    state = {
        comments: '',
    }

    handleChange = (event) => {
        this.setState({
            comments: event.target.value,
        });
    }

    handleNextClick = () => {
        this.props.dispatch({
            type: 'COMMENTS_FEEDBACK',
            payload: this.state.comments,
        });
        this.props.history.push('/4');
    }

    handleBackClick = () => {
        this.props.history.push('/2');
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <h3>Any comments you want to leave?</h3>
                <label>Comments</label>
                <input placeholder="Comments" onChange={this.handleChange}/>
                <button onClick={this.handleBackClick}>BACK</button>
                <button onClick={this.handleNextClick}>NEXT</button>
                <ReviewFeedback/>
            </div>
        );
    }
}

export default connect()(Comments);