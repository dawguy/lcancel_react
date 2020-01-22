import {ADD_MATCH, SELECT_CHARACTER, SELECT_STAGE, SELECT_LIVES} from '../../actionTypes';

const match = ( state = {
    player_a : {
        character : null,
        lives : null
    },
    player_b : {
        character : null,
        lives : null
    },
    stage : null
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
        case ADD_MATCH:
            var new_match = {
                winning_character : action.character_a,
                losing_character : action.character_b,
                stage : action.stage
            };
            state.matches.push( new_match );
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

// TODO: ADD_MATCH still needs to be implemented. It needs to take the existing state
// and send a server request + add the match to the list of matches. 
const matches = ( state = {}, action ) => {
    switch( action.type ){
        case ADD_MATCH:
            var new_match = {
                winning_character : action.character_a,
                losing_character : action.character_b,
                stage : action.stage
            };
            state.matches.push( new_match );
        default:
            return state;
    }
};

export {match};