import { combineReducers } from 'redux';
import {match} from './match';
import {characters, matchups} from './loaders';

export default combineReducers({
    match,
    characters,
    matchups
});
