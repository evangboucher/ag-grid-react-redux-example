import reducers from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import {fromJS} from 'immutable';
import {routerMiddleware} from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
    // Create the store with two middlewares
    // 1. sagaMiddleware: Makes redux-sagas work
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [sagaMiddleware];
    const enhancers = composeWithDevTools(
        // Middleware you want to use in development:
        applyMiddleware(sagaMiddleware)
    );

    const store = createStore(reducers, initialState, enhancers);

    // Extensions sagaMiddleware.run()

    return store;
}