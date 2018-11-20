import React from 'react';

import style from './app.css';

class GenericTableLi extends React.Component {
    render() {
        let selected = this.props.selected ? 'selected' : '';
        let classes = `${this.props.list_item_style} ${selected}`

        return(
            <li className={classes}>
                {this.props.name}
            </li>
        )
    }
}

module.exports = GenericTableLi;