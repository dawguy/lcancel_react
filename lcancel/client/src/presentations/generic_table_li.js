import React from 'react';

import styles from '../css/app.css';

class GenericTableLi extends React.Component {
    render() {
        let selected = this.props.selected ? styles.selected : '';
        let classes = `${selected}`

        return(
            <li onClick={ (e) => this.props.click_handler( e, this.props.pk, this.props.player_number ) } value={this.props.pk} className={classes}>
                {this.props.name}
            </li>
        )
    }
}

module.exports = GenericTableLi;