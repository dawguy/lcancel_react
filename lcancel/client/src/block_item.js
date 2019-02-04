import React from 'react';
import { Link } from 'react-router-dom';
import styles from './app.css';

class BlockItem extends React.Component{
    constructor(){
        super();
    }

    render(){
        const icon = this.props.icon ? this.props.icon : '';
        const title = this.props.link ? <Link to={this.props.link}>{this.props.title}</Link> : <div>{this.props.title}</div>;

        return(
            <div className={styles.block_item}>
                {title}
                {icon}
                <div>
                    {this.props.description}
                </div>
            </div>
        );
    }
}

module.exports = BlockItem;