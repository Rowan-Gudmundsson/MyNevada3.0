import { applyMiddleware, createStore, Middleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { createBrowserHistory } from 'history';

import rootReducer from './reducers';

export const history = createBrowserHistory();

export default (preloaded?: any) => {
    let middleware: Middleware<any, any, any>[] = [
        thunk
    ];

    if (process.env.NODE_ENV === 'development') {
        middleware = [
            ...middleware,
            logger,
        ];
    }

    return createStore(rootReducer, preloaded, applyMiddleware(...middleware));
}