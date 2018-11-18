import React from 'react';

import style from './app.css';

class Live extends React.Component {
    render() {
        return(
            <option className={style.live}>
                {this.props.count}
            </option>
        )
    }
}

module.exports = Live;