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
                    return <li key={item.id}>{item.name}</li>
                })}
            </ul>
        );
    }
}

module.exports = UserSuggestions;