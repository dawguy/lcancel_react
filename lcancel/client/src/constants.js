export const initialState = {
    match : {    
        player_a : {
            character : null,
            lives : 4
        },
        player_b : {
            character : null,
            lives : 4
        },
        stage : null,
        isAdding : false,
    },
    characters : {
        isFetching : false,
        all : [],
        byId : {},
    },
    stages : {
        isFetching : false,
        all : [],
        byId : {},
    },
    matches : {
        isFetching : false,
        didInvalidate : false,
        byId : {},
        byCharacter : {},
        byCharacterMatchup : {},
    },
};