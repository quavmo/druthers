import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import fireSaga from './sagas/fireSaga';
import navSaga from './sagas/navSaga';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(fireSaga)
sagaMiddleware.run(navSaga)
