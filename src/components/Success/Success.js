import React, { Component } from 'react';

class Success extends Component {

    handleClick = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Feedback!</h1>
                </header>
                <br/>
                <h3>Thank you!</h3>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>
        );
    }
}

export default Success;