import React from 'react';

import style from './app.css';
import Character from './character';

class CharacterTable extends React.Component {
    render() {
        return(
            <div className={style.character_table}>
                <div className={style.table_label}>
                    Character
                </div>
                <ul>
                    {this.props.characters.map( ( character, index ) => {
                        return <Character key={index} name={character.name} pk={character.pk}></Character>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = CharacterTable;