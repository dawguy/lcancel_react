import React from 'react';

import style from './app.css';
import Stage from './stage';

class StageTable extends React.Component {
    render() {
        return(
            <div className={style.stage_table}>
                <div className={style.table_label}>
                    Stage
                </div>
                <ul>
                    {this.props.stages.map( ( stage, index ) => {
                        let selected = ( this.props.selected_stage === stage.id );

                        return <Stage key={index} name={stage.name} pk={stage.id} selected={selected}></Stage>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = StageTable;