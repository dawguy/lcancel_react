import React from 'react';

import style from './app.css';
import CharacterTable from './character_table';
import LivesTable from './lives_table';

class Player extends React.Component {
    render() {
        return(
            <div>
                <CharacterTable characters={this.props.characters} selected_character={this.props.selected_character}></CharacterTable>
                <LivesTable lives={4}></LivesTable>
            </div>
        );
    }
}

module.exports = Player;