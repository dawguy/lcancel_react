import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddMatch from './add_match';

class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <div>Home Text</div>
            </div>
        );
    }
}

module.exports = Home;