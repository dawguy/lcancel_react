import React from 'react';

import style from './app.css';

class Character extends React.Component {
    render() {
        return(
            <li className={style.character}>
                {this.props.name}
            </li>
        )
    }
}

module.exports = Character;