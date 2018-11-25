import React from 'react';

import styles from './app.css';
import GenericTable from './generic_table';
import UserSelection from './user_selection';

class Player extends React.Component {
    render() {
        return(
            <div className={styles.player}>
                <h1>Player</h1>
                <UserSelection handleChoice={this.props.user_click_handler} user_name={this.props.user_name} player_number={this.props.player_number}></UserSelection>
                <GenericTable table_label={'Characters'} player_number={this.props.player_number} click_handler={this.props.characters_click_handler} list_items={this.props.characters} selected_li={this.props.selected_character} list_style={styles.characters}></GenericTable>
                <GenericTable table_label={'Lives'} player_number={this.props.player_number} click_handler={this.props.lives_click_handler} list_items={this.props.lives} selected_li={this.props.selected_live} list_style={styles.lives}></GenericTable>
            </div>
        );
    }
}

module.exports = Player;