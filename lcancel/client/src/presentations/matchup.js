import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CharacterStats from './character_stats';
import MatchupGraphic from './matchup_graphic';

import store from '../redux/store';
import {fetch_character_matchup} from '../redux/actions'

class Matchup extends React.Component{
    constructor( url ){
        super();

        store.dispatch( fetch_character_matchup( url.match.params.character_a, url.match.params.character_b ) );

        this.state = {
            character_a : url.match.params.a,
            character_b : url.match.params.b,
        };
    }

    render(){
        const character_a = this.state.character_a ? (<div>
            <CharacterStats character={this.state.character_a}></CharacterStats>
        </div>) : '';

        const character_b = this.state.character_b ? (<div>
            <CharacterStats character={this.state.character_b}></CharacterStats>
        </div>) : '';

        return(
            <div>
                <div>
                    <h1>Matchup</h1>
                </div>
                <MatchupGraphic></MatchupGraphic>
                <div>
                    <div>{character_a}</div>
                    <div>{character_b}</div>
                </div>
            </div>
        );
    }
}

module.exports = Matchup;