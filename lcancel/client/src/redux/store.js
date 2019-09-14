import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import {initialState} from '../constants';
import thunk from 'redux-thunk';

export default createStore(
    rootReducer, 
    initialState,
    applyMiddleware( thunk )
);