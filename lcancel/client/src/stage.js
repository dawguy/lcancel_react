import React from 'react';

import style from './app.css';

class Stage extends React.Component {
    render() {
        let selected = this.props.selected ? 'selected' : '';
        let classes = `stage ${selected}`

        return(
            <li className={classes}>
                {this.props.name}
            </li>
        )
    }
}

module.exports = Stage;