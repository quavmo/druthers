import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { currentDocket } from './reducers'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  combineReducers({currentDocket}),
  applyMiddleware(sagaMiddleware)
);
