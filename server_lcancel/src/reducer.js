import {add_player} from './core';
import {add_match} from './match';

export default function reducer( state, action ){
    switch( action.type ){
        case 'ADD_PLAYER':
            return add_player( state, action.player );
        case 'ADD_MATCH':
            return add_match( state, action.match );
    }
}