import React from 'react';

import style from './app.css';
import Live from './live';
import _ from 'lodash';

class LivesTable extends React.Component {
    render() {
        return(
            <div className={style.live_table}>
                <div className={style.table_label}>
                    Lives
                </div>
                <ul>
                    {/* Neat trick to generate a array of numbers from 0 to lives */}
                    {_.range( this.props.lives + 1 ).map( ( count, index ) => {
                        return <Live key={index} count={count}></Live>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = LivesTable;