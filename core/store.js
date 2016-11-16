import { createStore, combineReducers } from 'redux';
import { currentDocket } from './reducers'

export default createStore(combineReducers({currentDocket}));
