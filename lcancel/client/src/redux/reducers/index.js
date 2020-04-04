import { combineReducers, reduceRecucers } from 'redux';
import {match} from './match';
import {characters, matches, stages} from './loaders';

const combinedReducers = combineReducers({
    match,
    characters,
    stages,
    matches
})

const rootReducer = ( state, action ) => {
    switch( action.type ){
        case 'ADD_MATCH': 

        default:
            return state;
    }
}

const allReducer = ( state, action ) => {
    const intermediateState = combinedReducers( state, action );
    const finalState = rootReducer( intermediateState, action );

    return finalState;
}

export default allReducer;
