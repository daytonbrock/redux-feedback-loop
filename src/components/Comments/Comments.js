import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

    render() {
        return (
            <div className="App">
                <h3>Any comments you want to leave?</h3>
                <label>Comments</label>
                <input placeholder="Comments"/>
                <button>NEXT</button>
            </div>
        );
    }
}

export default connect()(Comments);