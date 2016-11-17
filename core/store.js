import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import * as reducers from './reducers';
import { fireSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  combineReducers(reducers),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(fireSaga)
