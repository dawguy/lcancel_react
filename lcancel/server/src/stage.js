import React from 'react';

import style from './app.css';

class Stage extends React.Component {
    render() {
        return(
            <li className={style.stage}>
                {this.props.name}
            </li>
        )
    }
}

module.exports = Stage;