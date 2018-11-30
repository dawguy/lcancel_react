import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddMatch from './add_match';
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
            }
        ]

        return(
            <div>
                <News></News>
                <div>
                    {block_items.map( (item, index) => {
                        return <BlockItem key={index} name={item.name} icon={item.icon} description={item.description}></BlockItem>
                    })}
                </div>
            </div>
        );
    }
}

module.exports = Home;