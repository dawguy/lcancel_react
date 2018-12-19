import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Matchup extends React.Component{
    constructor(){
        super();
    }

    render(){
        if( this.props.component ){
            let component = <div>
                <Link to="/matchup/:character_1/:character_2"></Link>
                <Route path=""></Route>
            </div>
        }
        else {
            let component = '';
        }

        return(
            <div>
                TODO: MATCHUP
            </div>
        );
    }
}

module.exports = Matchup;