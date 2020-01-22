import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../css/app.css';
import _ from 'lodash';

import GenericTable from './generic_table';
import Player from './player';

import store from '../redux/store';
import {add_match} from '../redux/reducers/match';
import {select_lives, select_character, select_stage} from '../redux/actions';
import {connect} from 'react-redux';
import {getCharacters, getStages, getMatch} from '../redux/selectors';

class AddMatch extends React.Component {

  constructor() {
    super();
  }

  handleSubmit( e ){
    const url = 'http://localhost:8000/api/matches';
    if( !this.validate_state() ){
      alert( 'Invalid match attributes' );
      return;
    }

    let winner = {
      character : this.state.p1_character,
    };
    let loser = {
      character : this.state.p2_character,
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

    dispatch( add_match() )

    let params = {
      method : 'POST',
      headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body : JSON.stringify()
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
    if( ( typeof this.state.p1_character === 'undefined' || this.state.p1_character === null ) ||
        ( typeof this.state.p2_character === 'undefined' || this.state.p2_character === null ) ||
        ( typeof this.state.p1_lives === 'undefined' || this.state.p1_lives === null ) ||
        ( typeof this.state.p2_lives === 'undefined' || this.state.p2_lives === null ) ||
        ( typeof this.state.stage === 'undefined' || this.state.stage === null )
      )
    {
        return false;
    }

    return true;
  }

  changeLives( e, id, player_number ) {
    store.dispatch( select_lives( player_number, id ) );
  }

  changeCharacter( e, id, player_number ) {
    store.dispatch( select_character( player_number, id ) );
  }

  changeStage( e, id ) {
    store.dispatch( select_stage( id ) );
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
          <Player player_class={styles.player_1}
                  characters={this.props.characters}
                  player_number={1}
                  lives={lives}
                  lives_click_handler={this.changeLives}
                  characters_click_handler={this.changeCharacter}
                  selected_character={this.props.match.player_a.character}
                  selected_lives={this.props.match.player_a.lives}></Player>
          <Player player_class={styles.player_2} 
                  characters={this.props.characters} 
                  player_number={2} lives={lives} 
                  lives_click_handler={this.changeLives} 
                  characters_click_handler={this.changeCharacter}
                  selected_character={this.props.match.player_b.character}
                  selected_lives={this.props.match.player_b.lives}></Player>
        </div>
        <GenericTable table_label={'Stages'} click_handler={this.changeStage} list_items={this.props.stages} selected_li={this.props.match.stage} list_style={styles.stages}></GenericTable>
        <button onClick={this.handleSubmit} className={styles.submit}>Submit</button>
      </div>
    )
  }
}


const mapStateToProps = ( state, ownProps ) => {
  const characters = getCharacters( state );
  const stages = getStages( state );
  const match = getMatch( state );

  return {
    characters : characters,
    stages : stages,
    match : match,
  };
};

AddMatch = connect( mapStateToProps )( AddMatch );

module.exports = AddMatch;
