import React from 'react';
import ReactDOM from 'react-dom';

import styles from './app.css';
import _ from 'lodash';

import GenericTable from './generic_table';
import Player from './player';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // p1_character : null,
      // p2_character : null,
      // p1_lives : 4,
      // p2_lives : 4,
      // stage : null,
      // characters : [],
      // stages : [],
      p1_character : 3,
      p2_character : 11,
      p1_lives : 4,
      p2_lives : 4,
      stage : 2,
      characters : [],
      stages : [],
    };
  }

  componentDidMount() {
    Promise.all( [this.get_characters(), this.get_stages()] )
    .then( ( [characters, stages] ) => {

      this.setState({
        characters : characters,
        stages : stages,
      });
    });
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
          <Player player_class={styles.player_1} characters={this.state.characters} selected_character={this.state.p1_character} lives={lives} selected_live={this.state.p1_lives}></Player>
          <Player player_class={styles.player_2} characters={this.state.characters} selected_character={this.state.p2_character} lives={lives} selected_live={this.state.p2_lives}></Player>
        </div>
        <GenericTable table_label={'Stages'} list_items={this.state.stages} selected_li={this.state.stage} list_style={styles.stages}></GenericTable>
        <button className={styles.submit}>Submit</button>
      </div>
    )
  }
}

const mountNode = document.querySelector( '#index' );
ReactDOM.render( <App />, mountNode );

module.exports = App;