import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe( 'reducer', () => {
    it( 'handles add player', () => {
        const state = Map();
        const action = {
            type : 'ADD_PLAYER',
            player : {
                name : 'faker',
                elo : 1500,
            }
        };
        const next_state = reducer( state, action );

        expect( next_state ).to.equal( fromJS({
            players : [
                {
                    name : 'faker',
                    elo : 1500,
                }
            ]
        }))
    });

    it( 'handles add match', () => {
        const state = Map({
            players : [
                {
                    name : 'faker',
                    elo : 1500,
                },
                {
                    name : 'boxer',
                    elo : 1250,
                }
            ],
            characters : [
                'Bowser',
                'Mario',
            ],
            matches : []
        });
        const action = {
            type : 'ADD_MATCH',
            winner : {
                name : 'faker',
                character : 'Bowser',
                stocks : 3,
            },
            loser : {
                name : 'boxer',
                character : 'Mario',
                stocks : 0,
            },
            stage : 'Dreamland',
        };
        const next_state = reducer( state, action );

        expect( next_state ).to.equal( fromJS({
            players : [
                {
                    name : 'faker',
                    elo : 1500,
                },
                {
                    name : 'boxer',
                    elo : 1250,
                }
            ],
            characters : [
                'Bowser',
                'Mario',
            ],
            matches : [
                {
                    winner : {
                        name : 'faker',
                        character : 'Bowser',
                        stocks : 3,
                    },
                    loser : {
                        name : 'boxer',
                        character : 'Mario',
                        stocks : 0,
                    },
                    stage : 'Dreamland',
                }
            ]
        }));
    });
})
