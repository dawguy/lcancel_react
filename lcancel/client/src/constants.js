export const initialState = {
    match : {    
        player_a : {
            user : null,
            character : null,
            lives : null
        },
        player_b : {
            user : null,
            character : null,
            lives : null
        },
        stage : null
    },
    characters : {
        isFetching : false,
        all : [],
        byId : {},
    },
    matches : {
        isFetching : false,
        didInvalidate : false,
        recent : [],
        byId : {},
        byCharacter : {},
        byCharacterMatchup : {},
        byUser : {},
        byUserMatchup : {},
    },
};