import React from 'react';

import style from './app.css';
import Character from './character';

class CharacterTable extends React.Component {
    constructor() {
        super();
        this.state = {
            characters : [],
        }
    }

    componentDidMount() {
        const url = 'http://localhost:8000/api/characters/all';

        fetch( url )
        .then( results => {
            return results.json();
        }).then( data => {
            console.log( data );
            this.setState( {
                characters : data,
            })
        })
    }

    render() {
        return(
            <div className={style.character_table}>
                <div className={style.table_label}>
                    Character
                </div>
                <ul>
                    {this.state.characters.map( ( character, index ) => {
                        return <Character key={index} name={character.name} pk={character.pk}></Character>
                    })}
                </ul>
            </div>
        )
    }
}

module.exports = CharacterTable;