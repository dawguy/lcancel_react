export const getCharacterMatchupList = ( store, character_a, character_b ) =>
    store && store.matches && store.matches.byCharacterMatchup && store.matches.byCharacterMatchup[character_a] && store.matches.byCharacterMatchup[character_a][character_b]     
        ? store.matches.byCharacterMatchup[character_a][character_b]
        : [];

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