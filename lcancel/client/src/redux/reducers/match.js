import {ADD_MATCH} from '../../actionTypes';

const match = ( state = [], action ) => {
    switch( action.type ){
        case ADD_MATCH:
            var new_match = {
                winning_user : action.user_a,
                losing_user : action.user_b,
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