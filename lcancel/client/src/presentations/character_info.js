import React from 'react';
import CharacterStats from './character_stats';

import store from '../redux/store';
import {fetch_character_matches} from '../redux/actions'

class CharacterInfo extends React.Component{
    constructor( url ){
        super();

        store.dispatch( fetch_character_matches( url.match.params.character ) );

        this.state = {
            character : url.match.params.character,
        };
    }

    render(){
        const character = this.state.character ? (<div>
            <CharacterStats character={this.state.character}></CharacterStats>
        </div>) : '';

        return(
            <div>
                <div>
                    <h1>Character</h1>
                </div>
                <div>
                    <div>{character}</div>
                </div>
            </div>
        );
    }
}

module.exports = CharacterInfo;