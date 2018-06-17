import React from 'react';
import ReactDOM from 'react-dom';

import style from './app.css';

class App extends React.Component {
  render() {
    return(
      <div className="{style.wrapper}">
        text text text aaa
      </div>
    )
  }
}

const mountNode = document.querySelector( '#index' );
ReactDOM.render( <App />, mountNode );