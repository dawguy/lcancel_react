import React from 'react';
import NewsItem from './news_item';

class News extends React.Component{
    constructor(){
        super();
        
        this._mounted = false;
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
                text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget erat quis dolor commodo porta. Proin vulputate ornare convallis. Mauris eget neque ac nunc ultricies vulputate vel vel diam. Fusce laoreet ornare tellus at facilisis. Donec vulputate diam orci. Vestibulum fermentum facilisis eros. Nam viverra turpis ut iaculis lobortis. Donec faucibus rutrum dapibus. Cras faucibus ipsum justo, sed aliquam arcu porttitor ac. Donec ut lacus porttitor odio sagittis congue eget eget leo. Ut faucibus massa quis tortor molestie vestibulum. Nulla facilisi. Proin a urna diam.',
            },
            {
                title : 'Third',
                text : 'Vivamus accumsan felis tellus, at luctus nibh tincidunt in. Donec vestibulum, velit ornare fermentum ultrices, metus lacus tincidunt orci, sit amet consequat ante lectus ut nulla. Aliquam mattis, nibh vitae pretium iaculis, neque leo suscipit erat, quis eleifend nisi dolor sed est. Proin ultricies nunc in magna feugiat, at finibus sapien scelerisque. Suspendisse porttitor dictum massa auctor blandit. Nunc vulputate scelerisque dui, id viverra est fringilla at. Maecenas at orci sed eros tempus mollis. Nullam molestie eros elit, congue suscipit erat cursus eu. Nulla malesuada eleifend tortor eu pretium. Praesent congue, sapien ut tincidunt finibus, metus urna sodales urna, rutrum ornare odio augue vitae nulla. Quisque imperdiet, elit in pellentesque facilisis, urna ligula feugiat sapien, in ultrices mauris nisi sit amet felis. Nunc sed hendrerit dui. Mauris facilisis, augue sit amet varius blandit, turpis erat rhoncus ex, in malesuada dui arcu id quam. Proin eleifend odio non venenatis congue.',
            }
        ];

        // simulating an API fetch
        return new Promise( resolve => {
            setTimeout( function(){
                resolve( news );
            }, 250)
        })
    }

    componentDidMount(){
        this._mounted = true;

        this.get_news().then( ( news ) => {
            if( this._mounted ){
                this.setState({
                    news : news
                })
            }
        });
    }

    componentWillUnmount(){
        this._mounted = false;
    }

    render(){
        return(
            <div>
                {this.state.news.map( (news_item, index) => {
                    return <NewsItem key={index} title={news_item.title} text={news_item.text}></NewsItem>
                })}
            </div>
        );
    }
}

module.exports = News;