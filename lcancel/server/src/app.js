import React from 'react';
import ReactDOM from 'react-dom';

import app_css from './app.css';
import styles from './styles.module.css';

class App extends React.Component {
  render() {
    return(
      <div className="wrapper">
        text text text
      </div>
    )
  }
}

const mountNode = document.querySelector( '#root' );
ReactDOM.render( <App />, mountNode );