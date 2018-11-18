import React from 'react';

import style from './app.css';
import classNames from 'classnames';
import Character from './character';

class CharacterTable extends React.Component {
    render() {
        return(
            <div>
                <div className={style.character_label}>
                    Character
                </div>
                <ul className={classNames( style.flex_ul, style.characters )}>
                    {this.props.characters.map( ( character, index ) => {
                        let selected = ( this.props.selected_character === character.id );

                        return <Character key={index} name={character.name} pk={character.id} selected={selected}></Character>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = CharacterTable;