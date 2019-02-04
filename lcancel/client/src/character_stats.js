import React from 'react';
import styles from './app.css';

class CharacterStats extends React.Component{
    
    // Character id will be a property
    constructor(){
        super();

        this.state = {
            character : {
                id : -1,
                name : '',
            },
            matches_played : 0,
            wins : 0,
            losses : 0,
            // popularity : -1, // TODO
            favored_matchups : [],
            losing_matchups : [],
        };

        this._is_mounted = false;
    }

    componentDidMount() {
        this._is_mounted = true;

        Promise.all( [this.get_character(), this.get_matchups()])
            .then( ( [character_info, matchups] ) => {
                let match_info = matchups.matchups;

                const counts = match_info.reduce( ( acc, match ) => {
                    if( match.winning_character == this.props.character ){
                        acc.wins += 1;
                    }
                    else{
                        acc.losses += 1;
                    }

                    return acc;
                }, { wins : 0, losses : 0 });

                this.setState({
                    character : character_info[0],
                    matches_played : match_info.length,
                    wins : counts.wins,
                    losses : counts.losses,
                    losing_matchups : matchups.losing,
                    favored_matchups : matchups.favored,
                });
            });
    }

    get_character(){
        const url = `http://localhost:8000/api/characters/${this.props.character}`;
        
        return fetch( url )
        .then( results => results.json() );
    }

    get_matchups(){
        const matchups_url = `http://localhost:8000/api/matches/character/${this.props.character}`
        const favored_url = `http://localhost:8000/api/matches/matchups/character/${this.props.character}/favored`;
        const losing_url = `http://localhost:8000/api/matches/matchups/character/${this.props.character}/losing`;

        const matchups_request = fetch( matchups_url )
        .then( results => results.json() );

        const favored_request = fetch( favored_url )
        .then( results => results.json() );

        const losing_request = fetch( losing_url )
        .then( results => results.json() );

        return Promise.all( [matchups_request, favored_request, losing_request] )
            .then( ( res ) => {
                return {
                    matchups : res[0],
                    favored : res[1],
                    losing : res[2],
                };
            });
    }

    render(){
        return(
            <div>
                <div className={styles.character_stats}>
                    <h1>{this.state.character.name}</h1>
                    <div className={styles.stat}>Matches: {this.state.matches_played}</div>
                    <div className={styles.stat}>Wins: {this.state.wins}</div>
                    <div className={styles.stat}>Losses: {this.state.losses}</div>
                </div>
                <div className={styles.character_favored_matchups}>
                    {this.state.favored_matchups.map( (matchup) => {
                        <div className={styles.matchup}>
                            {matchup.character_name} : {matchup.win_percent}%
                        </div>
                    })}
                </div>
                <div className={styles.character_losing_matchups}>
                    {this.state.losing_matchups.map( (matchup) => {
                        <div className={styles.matchup}>
                            {matchup.character_name} : {matchup.win_percent}%
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

module.exports = CharacterStats;