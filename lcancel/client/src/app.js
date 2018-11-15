import React from 'react';
import ReactDOM from 'react-dom';

import Player from './player';
import StageTable from './stage_table';

class App extends React.Component {
  render() {
    var characters = [
      {
        name : 'Mario',
        pk : 1,
      },
      {
        name : 'Bowser',
        pk : 2,
      },
      {
        name : 'Peach',
        pk : 3,
      },
    ];

    var stages = [
      {
        name : 'Dreamland',
        pk : 1,
      },
      {
        name : 'Final Destination',
        pk : 2,
      },
      {
        name : 'Battlefield',
        pk : 3,
      },
      {
        name : 'Fountain Of Dreams',
        pk : 4,
      },
      {
        name : 'Pokemon Stadium',
        pk : 5,
      },
    ]
    return(
      <div>
        <div className="players">
          <Player characters={characters}></Player>
          <Player characters={characters}></Player>
        </div>
        <StageTable stages={stages}></StageTable>
        <button>Submit</button>
      </div>
    )
  }
}

const mountNode = document.querySelector( '#index' );
ReactDOM.render( <App />, mountNode );

module.exports = App;