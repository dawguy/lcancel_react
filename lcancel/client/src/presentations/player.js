import React from 'react';

import styles from '../css/app.css';
import GenericTable from './generic_table';

class Player extends React.Component {
    render() {
        return(
            <div className={styles.player}>
                <GenericTable table_label={'Characters'} player_number={this.props.player_number} click_handler={this.props.characters_click_handler} list_items={this.props.characters} selected_li={this.props.selected_character} list_style={styles.characters}></GenericTable>
                <GenericTable table_label={'Lives'} player_number={this.props.player_number} click_handler={this.props.lives_click_handler} list_items={this.props.lives} selected_li={this.props.selected_lives} list_style={styles.lives}></GenericTable>
            </div>
        );
    }
}

module.exports = Player;
