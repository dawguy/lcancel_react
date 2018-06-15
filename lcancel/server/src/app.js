import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return(
      <div>
        text text text
      </div>
    )
  }
}

const mountNode = document.querySelector( '#root' );
ReactDOM.render( <App />, mountNode );