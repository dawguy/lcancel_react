import React from 'react';

import style from './app.css';

class Live extends React.Component {
    render() {
        return(
            <li className={style.live}>
                {this.props.count}
            </li>
        )
    }
}

module.exports = Live;