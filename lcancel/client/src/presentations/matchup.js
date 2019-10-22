import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import CharacterStats from './character_stats';
import MatchupGraphic from './matchup_graphic';

import store from '../redux/store';
import {connect} from 'react-redux';
import {fetch_character_matchup} from '../redux/actions'
import { getCharacterMatchupMatches } from '../redux/selectors';

class Matchup extends React.Component{
    constructor( url ){
        super();

        store.dispatch( fetch_character_matchup( url.match.params.character_a, url.match.params.character_b ) );
    }

    render(){
        const character_a = this.props.character_a ? (<div>
            <CharacterStats matches={this.props.matches} character={this.props.character_a}></CharacterStats>
        </div>) : '';

        const character_b = this.props.character_b ? (<div>
            <CharacterStats matches={this.props.matches} character={this.props.character_b}></CharacterStats>
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

const mapStateToProps = ( state, ownProps ) => {
    const matches = getCharacterMatchupMatches(
        state,
        ownProps.match.params.character_a,
        ownProps.match.params.character_b
    );

    return {
        character_a : ownProps.match.params.character_a,
        character_b : ownProps.match.params.character_b,
        matches     : matches,
    };
};

Matchup = connect(
    mapStateToProps,
)( Matchup );

module.exports = Matchup;