import {createStore, applyMiddleware, compose} from 'redux';
import allReducer from '../reducers';

import createSagaMiddleware from "redux-saga";
import {watchSagas} from './sagas';
const saga = createSagaMiddleware();
//redux dev tool
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const enhancer = composeEnhancers(applyMiddleware(saga));

const store = createStore(allReducer,enhancer);
saga.run(watchSagas);

export default store;