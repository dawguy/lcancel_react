import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './presentations/home';
import AddMatch from './presentations/add_match';
import Matchup from './presentations/matchup';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add_match">Add Match</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/add_match" component={AddMatch}></Route>
            <Route path="/matchup/characters/:a/:b" component={Matchup}></Route>
            <Route path="/matchup/characters/:a" component={Matchup}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mountNode = document.querySelector( '#index' );
ReactDOM.render( <App />, mountNode );

module.exports = App;
