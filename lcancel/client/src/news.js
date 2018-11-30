import React from 'react';
import NewsItem from './news_item';

class News extends React.Component{
    constructor(){
        super();
        
        this.state = {
            news : [],
        };
    }

    get_news(){
        var news = [
            {
                title : 'First',
                text : 'Hello my name is david and this is the first news item.',
            },
            {
                title : '2nd',
                text : 'Sometimes Fox is able to beat Peach, but not always.',
            },
            {
                title : 'Third',
                text : 'Peach always loses to Marth.',
            }
        ];

        // simulating an API fetch
        return new Promise( resolve => {
            setTimeout( function(){
                resolve( news );
            }, 250)
        })

    }

    render(){
        return(
            <div>
                {this.state.news.map( news_item => {
                    return <NewsItem title={news_item.title} text={news_item.text}></NewsItem>
                })}
            </div>
        );
    }
}

module.exports = News;