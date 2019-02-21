import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Matchup from './matchup';
import News from './news';
import BlockItem from './block_item';


class Home extends React.Component{
    constructor(){
        super();
    }

    render(){
        let block_items = [
            {
                title : 'Add Match',
                icon : null,
                link : '/add_match',
                description : 'Report a match'
            },
            {
                title : 'Lookup Player',
                icon   : null,
                link : '/lookup_player',
                description : 'TODO:'
            },
            {
                title : 'Featured Matchup',
                icon : null,
                link : '/matchup/characters/11/10',
                description : 'Fox vs Falco'
            }
        ]

        return(
            <div>
                <News></News>
                <div>
                    {block_items.map( (item, index) => {
                        return <BlockItem key={index} title={item.title} icon={item.icon} description={item.description} link={item.link}></BlockItem>
                    })}
                </div>
            </div>
        );
    }
}

module.exports = Home;