const charactersController = require( '../controllers' ).characters;
const matchesController = require( '../controllers' ).matches;
const usersController = require( '../controllers' ).users;
const stagesController = require( '../controllers' ).stages;


module.exports = ( app ) => {
    // RETRIEVAL
    app.get( '/api', ( req, res ) => res.status( 200 ).send({
        message : 'Welcome to the API!',
    }));

    app.get( '/api/matches/all', ( req, res ) => {
        matchesController.list( req, res );
    });

    app.get( '/api/matches/all/:page', ( req, res ) => {
        matchesController.paginate( req, res );
    });

    app.get( '/api/matches/character/:character', ( req, res ) => {
        matchesController.character( req, res );
    });

    app.get( '/api/matches/user/:user', ( req, res ) => {
        matchesController.user( req, res );
    });

    app.get( '/api/matches/matchups/character/:character_a/:character_b', ( req, res ) => {
        matchesController.character_matchup( req, res );
    });

    app.get( '/api/matches/matchups/user/:user_a/:user_b', ( req, res ) => {
        matchesController.user_matchup( req, res );
    });

    app.get( '/api/users/all/:page', ( req, res ) => {
        usersController.paginate( req, res );
    });

    app.get( '/api/users/custom/search', ( req, res ) => {
        usersController.search( req, res );
    });

    // Don't FORGET THAT THIS MEANS ALL ROUTES THAT MATCH THIS WILL BE RUN THROUGH GET
    app.get( '/api/users/:id', ( req, res ) => {
        usersController.get( req, res );
    });

    app.get( '/api/characters/all', ( req, res ) => {
        charactersController.list( req, res );
    });

    app.get( '/api/characters/:id', ( req, res ) => {
        charactersController.get( req, res );
    });

    app.get( '/api/stages/all', ( req, res ) => {
        stagesController.list( req, res );
    });

    app.get( '/api/stages/:id', ( req, res ) => {
        stagesController.get( req, res );
    });

    // CREATION

    app.post( '/api/matches', (req, res ) => {
        matchesController.create( req, res );
    });

    app.post( '/api/users', (req, res ) => {
        usersController.create( req, res );
    });
}