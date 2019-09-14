import {LOAD_CHARACTER_FAILURE,LOAD_CHARACTER_REQUEST,LOAD_CHARACTER_SUCCESS,LOAD_MATCHUP_FAILURE,LOAD_MATCHUP_REQUEST,LOAD_MATCHUP_SUCCESS,ADD_MATCH} from '../actionTypes';

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

export const load_matchup_request = ( pk_character_a, pk_character_b ) => ({
    type        : LOAD_MATCHUP_REQUEST,
    character_a : pk_character_a,
    character_b : pk_character_b
});

export const load_matchup_success = ( character_a, pk_character_b ) => ({
    type        : LOAD_MATCHUP_SUCCESS,
    character_a : pk_character_a,
    character_b : pk_character_b
});

export const load_matchup_failure = ( character_a, pk_character_b ) => ({
    type        : LOAD_MATCHUP_FAILURE,
    character_a : pk_character_a,
    character_b : pk_character_b
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
                    dispatch( load_characters_success( json ) )    
                }
            )
    }
}