export const getCharacterMatchupList = ( store, character_a, character_b ) => {
    const winning_matches = store && store.matches && store.matches.byCharacterMatchup && store.matches.byCharacterMatchup[character_a] && store.matches.byCharacterMatchup[character_a][character_b]     
        ? store.matches.byCharacterMatchup[character_a][character_b]
        : [];
    const losing_matches = store && store.matches && store.matches.byCharacterMatchup && store.matches.byCharacterMatchup[character_b] && store.matches.byCharacterMatchup[character_b][character_a]     
        ? store.matches.byCharacterMatchup[character_b][character_a]
        : [];

    return winning_matches.concat( losing_matches );
}

export const getCharacterMatchesList = ( store, character ) =>
    store && store.matches && store.matches.byCharacter && store.matches.byCharacter[character]
        ? store.matches.byCharacter && store.matches.byCharacter[character]
        : [];

export const getMatchById = ( store, id ) => 
    store && store.matches && store.matches.byId && store.matches.byId[id]
        ? store.matches.byId[id]
        : {};

export const getCharacterById = ( store, id ) =>
    store && store.characters && store.characters.byId && store.characters.byId[id]
        ? store.characters.byId[id]
        : {};

export const getCharactersList = ( store ) =>
    store && store.characters && store.characters.all
        ? store.characters.all
        : [];

export const getCharacters = ( store ) =>
    getCharactersList( store ).map( id => getCharacterById( store, id ) );

export const getCharacterMatches = ( store, character ) =>
    getCharacterMatchesList( store, character ).map( id => getMatchById( store, id ) );

export const getCharacterMatchupMatches = ( store, character_a, character_b ) =>
    getCharacterMatchupList( store, character_a, character_b ).map( id => getMatchById( store, id ) );

export const getStages = ( store ) =>
    getStagesList( store ).map( id => getStageById( store, id ) );

export const getStageById = ( store, id ) =>
    store && store.stages && store.stages.byId && store.stages.byId[id]
        ? store.stages.byId[id]
        : {};

export const getStagesList = ( store ) =>
    store && store.stages && store.stages.all
        ? store.stages.all
        : [];

export const getMatch = ( store ) =>
    store && store.match
        ? store.match
        : {};