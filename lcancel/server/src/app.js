import React from 'react';
import ReactDOM from 'react-dom';

import Test from './test';

import style from './app.css';

class App extends React.Component {
  render() {
    return(
      <div className={style.wrapper}>
        text text text aaa
        <Test label="A"></Test>
        <Test label="B"></Test>
      </div>
    )
  }
}

const mountNode = document.querySelector( '#index' );
ReactDOM.render( <App />, mountNode );

module.exports = App;