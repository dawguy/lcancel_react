import {RESET_MATCH, SELECT_CHARACTER, SELECT_STAGE, SELECT_LIVES} from '../../actionTypes';
import {ADD_MATCH,CREATE_MATCH_REQUEST,CREATE_MATCH_SUCCESS, CREATE_MATCH_FAILURE} from '../../actionTypes';

const match = ( state = {
    player_a : {
        character : null,
        lives : null
    },
    player_b : {
        character : null,
        lives : null
    },
    stage : null,
    isAdding : false,
}, action ) => {
    switch( action.type ){
        case SELECT_CHARACTER:
            const active_player = action.player === 1 ? 'player_a' : 'player_b';
            return Object.assign({}, state, {
                [active_player] : player( state[active_player], action ),
            });
        case SELECT_STAGE:
            return Object.assign({}, state, {
                stage : action.stage
            })
        case SELECT_LIVES:
            const player_choice = action.player === 1 ? 'player_a' : 'player_b';
            return Object.assign({}, state, {
                [player_choice] : player( state[player_choice], action ),
            });
        case RESET_MATCH:
            return Object.assign({}, state, {
                player_a : {
                    character : null,
                    lives : 4
                },
                player_b : {
                    character : null,
                    lives : 4
                },
                stage : null,
                isAdding : false,
            });
        case CREATE_MATCH_REQUEST:
            return Object.assign({}, state, {
                isAdding : true,
            });
        case CREATE_MATCH_SUCCESS:
            const player_a = {
                character : state.player_a.character,
                lives : 4,
            };
            const player_b = {
                character : state.player_b.character,
                lives : 4,
            };
            return Object.assign({}, state, {
                player_a : player_a,
                player_b : player_b,
                isAdding : false,
            });
        case CREATE_MATCH_FAILURE:
            // TODO: This will need to notify the user somehow
            return Object.assign({}, state, {
                isAdding : false,
            });
        default:
            return state;
    }
};

const player = ( state = {
    character : null,
    lives : null,
}, action ) => {
    switch( action.type ){
        case SELECT_CHARACTER:
            return Object.assign({}, state, {
                character : action.character,
            });
        case SELECT_LIVES:
            return Object.assign({}, state, {
                lives : action.lives,
            });
        default:
            return state;
    }
};

const matches = ( state = {
    isFetching : false,
    didInvalidate : false,
    byId : {},
    byCharacter : {},
    byCharacterMatchup : {},
}, action ) => {
    switch( action.type ){
        case INVALIDATE_MATCHES:
            return Object.assign({}, state, {
                didInvalidate : true,
            });
        default:
            return state;
    }
};

export {match, matches};