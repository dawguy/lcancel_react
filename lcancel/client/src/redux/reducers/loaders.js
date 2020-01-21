import {LOAD_STAGE_REQUEST, LOAD_STAGE_SUCCESS, LOAD_STAGE_FAILURE} from '../../actionTypes';
import {LOAD_CHARACTER_REQUEST, LOAD_CHARACTER_SUCCESS, LOAD_CHARACTER_FAILURE} from '../../actionTypes';
import {LOAD_CHARACTER_MATCHES_REQUEST, LOAD_CHARACTER_MATCHES_SUCCESS, LOAD_CHARACTER_MATCHES_FAILURE} from '../../actionTypes';
import {LOAD_CHARACTER_MATCHUP_REQUEST, LOAD_CHARACTER_MATCHUP_SUCCESS, LOAD_CHARACTER_MATCHUP_FAILURE} from '../../actionTypes';

const stages = ( state = {
    isFetching : false,
    all : [],
    byId : {},
}, action ) => {
    switch( action.type ){
        case LOAD_STAGE_REQUEST:
            return Object.assign({}, state, {
                isFetching : true,
            });
        case LOAD_STAGE_SUCCESS:
            return Object.assign({}, state, {
                isFetching : false,
                all : action.stages,
                byId : action.stages.reduce( ( acc, stage ) => {
                    acc[stage.id] = stage;
                    return acc;
                }, {} ),
            });
        case LOAD_STAGE_FAILURE:
            break;
        default:
            return state;
    }
};

const characters = ( state = {
    isFetching : false,
    all : [],
    byId : {},
}, action ) => {
    switch( action.type ){
        case LOAD_CHARACTER_REQUEST:
            return Object.assign({}, state, {
                isFetching : true,
            });
        case LOAD_CHARACTER_SUCCESS:
            return Object.assign({}, state, {
                isFetching : false,
                all : action.characters,
                byId : action.characters.reduce( ( acc, character ) => {
                    acc[character.id] = character;
                    return acc;
                }, {} ),
            });
        case LOAD_CHARACTER_FAILURE:
            break;
        default:
            return state;
    }
};

const matches = ( state = {
    isFetching : false,
    didInvalidte : false,
    current      : [],
    byId : {},
    byCharacter : {},
    byCharacterMatchup : {},

}, action ) => {
    switch( action.type ){
        case LOAD_CHARACTER_MATCHUP_REQUEST:
            return Object.assign({}, state, {
                isFetching : true,
            });
        case LOAD_CHARACTER_MATCHUP_SUCCESS:
            var matches = action.matches;

            return Object.assign({}, state, {
                isFetching : false,
                byId       : assign_matches_by_id( state.byId, matches ),
                byCharacterMatchup : assign_matches_by_character_matchup( state.byCharacterMatchup, matches ),
            });
        case LOAD_CHARACTER_MATCHUP_FAILURE:
            break;
        case LOAD_CHARACTER_MATCHES_REQUEST:
            return Object.assign({}, state, {
                isFetching : true,
            });
        case LOAD_CHARACTER_MATCHES_SUCCESS:
            var matches = action.matches;
            var character = action.character;

            return Object.assign({}, state, {
                isFetching : false,
                byId       : assign_matches_by_id( state.byId, matches ),
                byCharacter : assign_matches_by_character( state.byCharacter, matches, character ),
            });
        case LOAD_CHARACTER_MATCHES_FAILURE:
            break;
        default:
            return state;
    }
};

const assign_matches_by_character = ( state = {}, matches, pk_character ) => {
    var matchups = Object.assign( {}, state );

    matches.forEach( match => {
        matchups[pk_character] = matchups[pk_character] || [];

        matchups[pk_character].push( match.id );
    });

    return matchups;
}

const assign_matches_by_character_matchup = ( state = {}, matches ) => {
    var matchups = Object.assign( {}, state );

    matches.forEach( match => {
        const character_a = match['winning_character'];
        const character_b = match['losing_character'];

        matchups[character_a] = matchups[character_a] || {};
        matchups[character_a][character_b] = matchups[character_a][character_b] || [];

        matchups[character_a][character_b].push( match.id );
    });

    return matchups;
}

const assign_matches_by_id = ( state = {}, matches ) => {
    var new_matches = matches.reduce( ( acc, match ) => {
        acc[match.id] = match;
        return acc;
    }, {} );

    return Object.assign({}, state, new_matches );
}

export {characters, matches, stages};