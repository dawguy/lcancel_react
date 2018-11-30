import React from 'react';

class NewsItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        let title = this.props.title ? <h3>{this.props.title}</h3> : '';

        return(
            <div>
                {title}
                {this.props.text}
            </div>
        );
    }
}

module.exports = NewsItem;