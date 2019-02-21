import React from 'react';

import styles from '../css/app.css';
import classNames from 'classnames';
import TableLiGeneric from './generic_table_li';

class GenericTable extends React.Component {
    render() {
        return(
            <div className={styles.table}>
                <h2>
                    {this.props.table_label}
                </h2>
                <ul className={classNames( styles.flex_ul, this.props.list_style)}>
                    {this.props.list_items.map( ( list_item, index ) => {
                        let selected = ( this.props.selected_li === list_item.id );

                        return <TableLiGeneric key={index} name={list_item.name} pk={list_item.id} click_handler={this.props.click_handler} player_number={this.props.player_number} selected={selected}></TableLiGeneric>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = GenericTable;
