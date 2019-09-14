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
        items : [],
    },
    matchups : {
        isFetching : false,
        didInvalidate : false,
        items : [],
    },
};