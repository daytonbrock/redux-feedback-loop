import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

const feelingsFeedback = (state = 0, action) => {
    if (action.type === 'FEELINGS_FEEDBACK') {
        return action.payload;
    }
    return state;
}

const understandingFeedback = (state = 0, action) => {
    if (action.type === 'UNDERSTANDING_FEEDBACK') {
        return action.payload;
    }
    return state;
}

const supportFeedback = (state = 0, action) => {
    if (action.type === 'SUPPORT_FEEDBACK') {
        return action.payload;
    }
    return state;
}

const commentsFeedback = (state = null, action) => {
    if (action.type === 'COMMENTS_FEEDBACK') {
        return action.payload;
    }
    return state;
}

const store = createStore(
    combineReducers({
        feelingsFeedback,
        understandingFeedback,
        supportFeedback,
        commentsFeedback
    }),
    applyMiddleware( logger ),
);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
