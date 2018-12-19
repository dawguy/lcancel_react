import React from 'react';
import styles from './app.css';

class BlockItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        let icon = this.props.icon ? this.props.icon : '';

        return(
            <div className={styles.block_item}>
                <h3>{this.props.title}</h3>
                {icon}
                <div>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

module.exports = BlockItem;