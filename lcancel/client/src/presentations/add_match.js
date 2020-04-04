import React from 'react';
import ReactDOM from 'react-dom';

import styles from '../css/app.css';
import _ from 'lodash';

import GenericTable from './generic_table';
import Player from './player';

import store from '../redux/store';
import {add_match} from '../redux/reducers/match';
import {select_lives, select_character, select_stage, send_create_match_request} from '../redux/actions';
import {connect} from 'react-redux';
import {getCharacters, getStages, getMatch} from '../redux/selectors';

class AddMatch extends React.Component {

  constructor() {
    super();

    this.handleSubmit   = this.handleSubmit.bind( this );
    this.validate_state = this.validate_state.bind( this );
  }

  handleSubmit( e ){
    if( !this.validate_state() ){
      alert( 'Invalid match attributes' );
      return;
    }

    if( this.props.match.player_b.lives !== 0 && this.props.match.player_b.lives !== 0 &&
        ( this.props.match.player_b.lives === 0 && this.props.match.player_b.lives === 0 )
      ){
      alert( 'Game can not end in a draw.' );
      return;
    }

    store.dispatch( send_create_match_request( this.props.match ) );
  }

  validate_state(){
    if( ( typeof this.props.match.player_b.character === 'undefined' || this.props.match.player_b.character === null ) ||
        ( typeof this.props.match.player_b.character === 'undefined' || this.props.match.player_b.character === null ) ||
        ( typeof this.props.match.player_a.lives === 'undefined' || this.props.match.player_a.lives === null ) ||
        ( typeof this.props.match.player_a.lives === 'undefined' || this.props.match.player_a.lives === null ) ||
        ( typeof this.props.match.stage === 'undefined' || this.props.match.stage === null )
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
