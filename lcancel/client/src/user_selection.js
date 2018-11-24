import React from 'react';
import ReactDOM from 'react-dom';
import UserSuggestions from './user_suggestions';

class UserSelection extends React.Component {
    constructor(){
        super();

        this.state = {
            users : [],
            search_term : '',
        };

        this.handleTextInput = this.handleTextInput.bind( this );
        this.searchUser = this.searchUser.bind( this );
    }

    componentWillMount(){
        this.delayedSuggestionRequest = _.debounce( name => {
            this.searchUser();
        }, 500 )
    }

    searchUser(){
        const url = `http://localhost:8000/api/users/custom/search?name=${this.state.search_term}`;

        return fetch( url )
        .then( results => results.json() )
        .then( data => {
            console.log( data );
            this.setState({
                users : data,
            });
        });        
    }

    handleTextInput( e ){
        let term = e.target.value;

        this.setState({
            search_term : term,
        });

        this.delayedSuggestionRequest( term );
    }

    render(){
        return (
            <div>
                <label>Select User:</label>
                <input type="text" value={this.state.search_term} onChange={this.handleTextInput}></input>
                <UserSuggestions items={this.state.users}></UserSuggestions>
            </div>
        );
    }
}

module.exports = UserSelection;