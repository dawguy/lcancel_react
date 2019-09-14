import {LOAD_CHARACTER_REQUEST, LOAD_CHARACTER_SUCCESS, LOAD_CHARACTER_FAILURE} from '../../actionTypes';
import {LOAD_MATCHUP_REQUEST, LOAD_MATCHUP_SUCCESS, LOAD_MATCHUP_FAILURE} from '../../actionTypes';

const characters = ( state = {
    isFetching : false,
    items : []
}, action ) => {
    switch( action.type ){
        case LOAD_CHARACTER_REQUEST:
            return Object.assign({}, state, {
                isFetching : true,
            });
        case LOAD_CHARACTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching : false,
                items : action.characters
            });
        case LOAD_CHARACTER_FAILURE:
            break;
        default:
            return state;
    }
};

const matchups = ( state = {
    isFetching : false,
    items : []
}, action ) => {
    switch( action.type ){
        case LOAD_MATCHUP_REQUEST:
            return Object.assign({}, state, {
                isFetching : true,
            });
        case LOAD_MATCHUP_SUCCESS:
            return Object.assign({}, state, {
                isFetching : false,
                items : action.matchups
            });
        case LOAD_MATCHUP_FAILURE:
            break;
        default:
            return state;
    }
};

export {characters, matchups};