import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CharacterStats from './character_stats';

class Matchup extends React.Component{
    constructor( url ){
        super();

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
                <div>{character_a}</div>
                <div>{character_b}</div>
            </div>
        );
    }
}

module.exports = Matchup;