import { combineReducers } from 'redux';
import {match} from './match';
import {characters, matches, stages} from './loaders';

export default combineReducers({
    match,
    characters,
    stages,
    matches
});
