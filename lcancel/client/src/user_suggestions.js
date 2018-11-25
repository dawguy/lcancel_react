import React from 'react';
import ReactDOM from 'react-dom';

class UserSuggestions extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <ul>
                {this.props.items.map( item => {
                    return <li onClick={ (e) => this.props.handleChoice( e, this.props.player_number )} key={item.id} data-id={item.id} data-name={item.name}>{item.name}</li>
                })}
            </ul>
        );
    }
}

module.exports = UserSuggestions;