import {LOAD_CHARACTER_FAILURE,LOAD_CHARACTER_REQUEST,LOAD_CHARACTER_SUCCESS} from '../actionTypes';
import {LOAD_CHARACTER_MATCHES_FAILURE,LOAD_CHARACTER_MATCHES_REQUEST,LOAD_CHARACTER_MATCHES_SUCCESS} from '../actionTypes';
import {LOAD_CHARACTER_MATCHUP_FAILURE,LOAD_CHARACTER_MATCHUP_REQUEST,LOAD_CHARACTER_MATCHUP_SUCCESS} from '../actionTypes';
import {ADD_MATCH} from '../actionTypes';

export const load_characters_request = () => ({
    type : LOAD_CHARACTER_REQUEST,
});

export const load_characters_success = ( data ) => ({
    type       : LOAD_CHARACTER_SUCCESS,
    characters : data,
});

export const load_characters_failure = ( err ) => ({
    type       : LOAD_CHARACTER_FAILURE,
    characters : [],
});

export const load_character_matchup_request = ( pk_character_a, pk_character_b ) => ({
    type        : LOAD_CHARACTER_MATCHUP_REQUEST,
    character_a : pk_character_a,
    character_b : pk_character_b
});

export const load_character_matchup_success = ( pk_character_a, pk_character_b, matches ) => ({
    type     : LOAD_CHARACTER_MATCHUP_SUCCESS,
    matches : matches,
    character_a : pk_character_a,
    character_b : pk_character_b
});

export const load_character_matchup_failure = ( pk_character_a, pk_character_b ) => ({
    type        : LOAD_CHARACTER_MATCHUP_FAILURE,
    character_a : pk_character_a,
    character_b : pk_character_b
});

export const load_character_matches_request = ( pk_character ) => ({
    type      : LOAD_CHARACTER_MATCHES_REQUEST,
    character : pk_character,
});

export const load_character_matches_success = ( pk_character, matches ) => ({
    type      : LOAD_CHARACTER_MATCHES_SUCCESS,
    character : pk_character,
    matches   : matches,
});

export const load_character_matches_failure = ( pk_character ) => ({
    type      : LOAD_CHARACTER_MATCHES_FAILURE,
    character : pk_character,
});

export const add_match = ( match ) => ({
    type  : ADD_MATCH,
    match : match,
});

export function fetch_characters(){
    return function( dispatch ){
        dispatch( load_characters_request );

        return fetch( 'http://localhost:8000/api/characters/all' )
            .then(
                response => response.json(),
                error => console.log( 'An error occured', error )
            )
            .then( json => {
                    dispatch( load_characters_success( json ) );
                }
            )
    }
}

export function fetch_character_matches( pk_character ){
    return function( dispatch ){
        dispatch( load_character_matches_request );

        var url = 'http://localhost:8000/api/matches/matchups/character/' + pk_character;

        return fetch( url )
            .then(
                response => response.json(),
                error => console.log( 'Failed loading character matches' )
            )
            .then( json => {
                var data = json;

                dispatch( load_character_matches_success( pk_character, data ) );
            })
    }
}

export function fetch_character_matchup( pk_character_a, pk_character_b ){
    return function( dispatch ){
        dispatch( load_character_matchup_request );

        var url = 'http://localhost:8000/api/matches/matchups/character/' + pk_character_a + '/' + pk_character_b;

        return fetch( url )
            .then(
                response => response.json(),
                error => console.log( 'Failed loading matchups', error )
            )
            .then( json => {
                var data = json;

                dispatch( load_character_matchup_success( pk_character_a, pk_character_b, data ) );
            });
    }
}