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
                icon   : null,
                description : 'Report a match'
            },
            {
                title : 'Lookup Player',
                icon   : null,
                description : 'TODO:'
            },
            {
                title : 'Featured Matchup',
                icon : null,
                component : Matchup,
                component_data : {
                    character_1 : 11, // Fox
                    character_2 : 10, // Falco
                },
                description : 'Fox vs Falco'
            }
        ]

        return(
            <div>
                <News></News>
                <div>
                    {block_items.map( (item, index) => {
                        return <BlockItem key={index} title={item.title} icon={item.icon} description={item.description} component={item.component} component_data={item.component_data}></BlockItem>
                    })}
                </div>
            </div>
        );
    }
}

module.exports = Home;