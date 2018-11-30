import React from 'react';

class BlockItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                {this.props.name}
                <div>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

module.exports = BlockItem;