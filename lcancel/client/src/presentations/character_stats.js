import React from 'react';
import {connect} from 'react-redux';
import styles from '../css/app.css';
import { getCharacterById, getCharacterMatches } from '../redux/selectors';

class CharacterStats extends React.Component{

    // Character id will be a property
    constructor( a ){
        super();

        this._is_mounted = false;
    }

    componentDidMount() {
        this._is_mounted = true;
    }

    render(){
        if( this.props.character )

        return(
            <div>
                <div className={styles.character_stats}>
                    <h1>{this.props.character.name}</h1>
                    <div className={styles.stat}>Matches: {this.props.matches.length}</div>
                    <div className={styles.stat}>Wins: {this.props.wins.length}</div>
                    <div className={styles.stat}>Losses: {this.props.losses.length}</div>
                </div>
                {/* <div className={styles.character_favored_matchups}>
                    {this.props.favored_matchups.map( (matchup) => {
                        <div className={styles.matchup}>
                            {matchup.character_name} : {matchup.win_percent}%
                        </div>
                    })}
                </div>
                <div className={styles.character_losing_matchups}>
                    {this.props.losing_matchups.map( (matchup) => {
                        <div className={styles.matchup}>
                            {matchup.character_name} : {matchup.win_percent}%
                        </div>
                    })}
                </div> */}
            </div>
        );
    }
}

const mapStateToProps = ( state, ownProps ) => {
    const matches = getCharacterMatches( state, ownProps.character );
    const character = getCharacterById( state, ownProps.character );

    return {
        character : character,
        matches : matches,
        wins : matches.filter( match => match.winning_character === character.id ),
        losses : matches.filter( match => match.losing_character === character.id ),
    }
};

CharacterStats = connect( 
    mapStateToProps,
)( CharacterStats );

module.exports = CharacterStats;
