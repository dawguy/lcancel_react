import React from 'react';
import ReactDOM from 'react-dom';

import styles from './app.css';
import _ from 'lodash';

import GenericTable from './generic_table';
import Player from './player';

class AddMatch extends React.Component {

  constructor() {
    super();
    this.state = {
      p1_user_name : null,
      p2_user_name : null,
      p1_user_id : null,
      p2_user_id : null,
      p1_character : null,
      p2_character : null,
      p1_lives : 4,
      p2_lives : 4,
      stage : 1,
      characters : [],
      stages : [],
    };

    this._is_mounted = false;

    this.changeStage = this.changeStage.bind( this );
    this.changeCharacter = this.changeCharacter.bind( this );
    this.changeLives = this.changeLives.bind( this );
    this.changeUser = this.changeUser.bind( this );
    this.handleSubmit = this.handleSubmit.bind( this );
  }

  componentDidMount() {
    this._is_mounted = true;

    Promise.all( [this.get_characters(), this.get_stages()] )
    .then( ( [characters, stages] ) => {

      if( this._is_mounted ){
        this.setState({
          characters : characters,
          stages : stages,
        });
      }
    });
  }

  componentWillUnmount() {
    this._is_mounted = false;
  }

  get_characters() {
    const url = 'http://localhost:8000/api/characters/all';

    return fetch( url )
    .then( results => results.json() );
  }

  get_stages() {
    const url = 'http://localhost:8000/api/stages/all';
    
    return fetch( url )
    .then( results => results.json() );
  }

  handleSubmit( e ){
    const url = 'http://localhost:8000/api/matches';
    if( !this.validate_state() ){
      alert( 'Invalid match attributes' );
      return;
    }

    let winner = {
      user : this.state.p1_user_id,
      character : this.state.p1_character,
    };
    let loser = {
      user : this.state.p2_user_id,
      character : this.state.p2_user_id,
    };

    if( this.state.p2_lives > this.state.p1_lives ){
      let temp = winner;
      winner = loser;
      loser = temp;
    }
    else if( this.state.p2_lives !== 0 && this.state.p1_lives !== 0 &&
             ( this.state.p2_lives === 0 && this.state.p1_lives === 0 )
           ){
      alert( 'We do not currently accept draws' );
      return;
    }

    let params = {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        winning_user : winner.user,
        losing_user : loser.user,
        winning_character : winner.character,
        losing_character : loser.character,
        stage : this.state.stage
      })
    };

    return fetch( url, params )
    .then( (json) => {
      this.setState({
        p1_lives : 4,
        p2_lives : 4,
      });
    });
  }

  validate_state(){
    if( ( typeof this.state.p1_user_id === 'undefined' || this.state.p1_user_id === null ) ||
        ( typeof this.state.p2_user_id === 'undefined' || this.state.p2_user_id === null ) ||
        ( typeof this.state.p1_character === 'undefined' || this.state.p1_character === null ) ||
        ( typeof this.state.p2_character === 'undefined' || this.state.p2_character === null ) ||
        ( typeof this.state.p1_lives === 'undefined' || this.state.p1_lives === null ) ||
        ( typeof this.state.p2_lives === 'undefined' || this.state.p2_lives === null ) ||
        ( typeof this.state.stage === 'undefined' || this.state.stage === null ) 
      )
    {
        return false;
    }

    if( this.state.p1_user_id === this.state.p2_user_id ){
      return false;
    }

      return true;
  }

  changeLives( e, id, player_number ) {
    let prop_name = `p${player_number}_lives`;

    this.setState( state => ({
      [prop_name] : id,
    }));
  }

  changeCharacter( e, id, player_number ) {
    let prop_name = `p${player_number}_character`;

    this.setState( state => ({
      [prop_name] : id,
    }));
  }

  changeUser( e, player_number ) {
    let prop_name = `p${player_number}_user_name`;
    let prop_id = `p${player_number}_user_id`;

    let name = e.target.getAttribute( 'data-name' );
    let id = e.target.value;

    this.setState( state => ({
      [prop_name] : name,
      [prop_id] : id,
    }));
  }

  changeStage( e, id ) {
    this.setState( state => ({
      stage : id,
    }));
  }

  render() {
    let lives = [
      { id : 0, name : 0},
      { id : 1, name : 1},
      { id : 2, name : 2},
      { id : 3, name : 3},
      { id : 4, name : 4},
    ];

    return(
      <div>
        <div className={styles.players}>
          <Player user_name={this.state.p1_user_name} player_class={styles.player_1} characters={this.state.characters} player_number={1} selected_character={this.state.p1_character} lives={lives} selected_live={this.state.p1_lives} lives_click_handler={this.changeLives} characters_click_handler={this.changeCharacter} user_click_handler={this.changeUser}></Player>
          <Player user_name={this.state.p2_user_name} player_class={styles.player_2} characters={this.state.characters} player_number={2} selected_character={this.state.p2_character} lives={lives} selected_live={this.state.p2_lives} lives_click_handler={this.changeLives} characters_click_handler={this.changeCharacter} user_click_handler={this.changeUser}></Player>
        </div>
        <GenericTable table_label={'Stages'} click_handler={this.changeStage} list_items={this.state.stages} selected_li={this.state.stage} list_style={styles.stages}></GenericTable>
        <button onClick={this.handleSubmit} className={styles.submit}>Submit</button>
      </div>
    )
  }
}

const mountNode = document.querySelector( '#index' );
ReactDOM.render( <AddMatch />, mountNode );

module.exports = AddMatch;
