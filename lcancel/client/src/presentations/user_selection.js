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
        let select_label = this.props.selected_user ? 'Change User:' : 'Select User:';
        let user_name_label = this.props.user_name ? <div><label>Selected User: {this.props.user_name}</label></div> : '';
        const div_style = {

        };

        return (
            <div style={div_style}>
                {user_name_label}
                <label>{select_label}</label>
                <input type="text" value={this.state.search_term} onChange={this.handleTextInput}></input>
                <UserSuggestions player_number={this.props.player_number} handleChoice={this.props.handleChoice} items={this.state.users}></UserSuggestions>
            </div>
        );
    }
}

module.exports = UserSelection;