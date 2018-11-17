import React from 'react';

import style from './app.css';

class Character extends React.Component {
    render() {
        let selected = this.props.selected ? 'selected' : '';
        let classes = `character ${selected}`

        return(
            <li className={classes}>
                {this.props.name}
            </li>
        )
    }
}

module.exports = Character;