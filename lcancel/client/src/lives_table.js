import React from 'react';

import style from './app.css';
import Live from './live';
import _ from 'lodash';

class LivesTable extends React.Component {
    render() {
        return(
            <div className={style.lives}>
                <label>Lives:</label>
                <select>
                    {/* Neat trick to generate a array of numbers from 0 to lives */}
                    {_.range( this.props.lives + 1 ).map( ( count, index ) => {
                        return <Live key={index} count={count}></Live>
                    })}
                </select>
            </div>
        )
    }
}

module.exports = LivesTable;