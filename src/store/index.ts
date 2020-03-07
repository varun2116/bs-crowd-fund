import { createStore } from 'redux';
import reducers from '../reducers';
import { initialState } from './constants';

let store = createStore(reducers, initialState);

export default store;
