import {LOAD_STAGE_FAILURE,LOAD_STAGE_REQUEST,LOAD_STAGE_SUCCESS} from '../actionTypes';
import {LOAD_CHARACTER_FAILURE,LOAD_CHARACTER_REQUEST,LOAD_CHARACTER_SUCCESS} from '../actionTypes';
import {LOAD_CHARACTER_MATCHES_FAILURE,LOAD_CHARACTER_MATCHES_REQUEST,LOAD_CHARACTER_MATCHES_SUCCESS} from '../actionTypes';
import {LOAD_CHARACTER_MATCHUP_FAILURE,LOAD_CHARACTER_MATCHUP_REQUEST,LOAD_CHARACTER_MATCHUP_SUCCESS} from '../actionTypes';
import {ADD_MATCH,SELECT_CHARACTER,SELECT_STAGE,SELECT_LIVES} from '../actionTypes';
import {CREATE_MATCH_FAILURE,CREATE_MATCH_REQUEST,CREATE_MATCH_SUCCESS} from '../actionTypes';
import {INVALIDATE_MATCHES} from '../actionTypes';


export const load_stages_request = () => ({
    type : LOAD_STAGE_REQUEST,
});

export const load_stages_success = ( data ) => ({
    type   : LOAD_STAGE_SUCCESS,
    stages : data,
});

export const load_stages_failure = ( err ) => ({
    type   : LOAD_STAGE_FAILURE,
    stages : [],
});

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

export const reset_match = () => ({
    type : RESET_MATCH,
});

export const select_character = ( player, character ) => ({
    type      : SELECT_CHARACTER,
    player    : player,
    character : character,
});

export const select_lives = ( player, lives ) => ({
    type   : SELECT_LIVES,
    player : player,
    lives  : lives,
});

export const select_stage = ( stage ) => ({
    type   : SELECT_STAGE,
    stage  : stage,
});

export const invalidate_matches = () => ({
    type : INVALIDATE_MATCHES,
});

export const create_match_success = () => ({
    type : CREATE_MATCH_SUCCESS,
});

export const create_match_failure = () => ({
    type : CREATE_MATCH_FAILURE,
});

export function fetch_stages(){
    return function( dispatch ){
        dispatch( load_stages_request );

        return fetch( 'http://localhost:8000/api/stages/all' )
            .then(
                response => response.json(),
                error => console.log( 'An error occured', error )
            )
            .then( json => {
                    dispatch( load_stages_success( json ) );
                }
            )
    }
}

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

export function send_create_match_request( match ){
    return function( dispatch ){
        var json;

        // Hard coding the users here because I reduced the scope of this
        // project to not use users for now. It'll only track character matchups
        // for a while.
        if( match.player_a.lives > match.player_b.lives ){
            json = {
                winning_character : match.player_a.character,
                losing_character : match.player_b.character,
                winning_user : 1,
                losing_user : 2,
                stages : match.stage,
            };
        } else {
            json = {
                winning_character : match.player_b.character,
                losing_character : match.player_a.character,
                winning_user : 2,
                losing_user : 1,
                stages : match.stage,
            };
        }

        const url = 'http://localhost:8000/api/matches';
        let params = {
            method : 'POST',
            headers : {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body : JSON.stringify( json )
          };
      
          return fetch( url, params )
            .then( response =>
            {
                dispatch( invalidate_matches() );
                dispatch( create_match_success() );
            },
            response =>
            {
                dispatch( create_match_failure );
            });
    }
}