import React from 'react';
import ReactDOM from 'react-dom';

import styles from './app.css';

class UserSuggestions extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <ul className={styles.user_suggestion_list}>
                {this.props.items.map( item => {
                    return <li className={styles.user_suggestion} onClick={ (e) => this.props.handleChoice( e, this.props.player_number )} key={item.id} value={item.id} data-name={item.name}>{item.name}</li>
                })}
            </ul>
        );
    }
}

module.exports = UserSuggestions;