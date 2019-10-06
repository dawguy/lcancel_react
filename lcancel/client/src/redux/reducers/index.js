import { combineReducers } from 'redux';
import {match} from './match';
import {characters, matches} from './loaders';

export default combineReducers({
    match,
    characters,
    matches
});
