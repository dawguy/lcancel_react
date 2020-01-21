import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Home from './presentations/home';
import AddMatch from './presentations/add_match';
import Matchup from './presentations/matchup';
import CharacterInfo from './presentations/character_info';

import { Provider } from 'react-redux';
import store from './redux/store';
import { add_match, fetch_characters, fetch_stages } from './redux/actions';

store.dispatch( fetch_characters() );
store.dispatch( fetch_stages() );

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/add_match">Add Match</Link>
              </nav>
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/add_match" component={AddMatch}></Route>
                <Route path="/matchup/characters/:character_a/:character_b" component={Matchup}></Route>
                <Route path="/matchup/characters/:character" component={CharacterInfo}></Route>
              </Switch>
            </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

const mountNode = document.querySelector( '#index' );
ReactDOM.render( <App />, mountNode );

module.exports = App;
