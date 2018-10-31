const charactersController = require( '../controllers' ).characters;
const matchesController = require( '../controllers' ).matches;


module.exports = ( app ) => {
    app.get( '/api', ( req, res ) => res.status( 200 ).send({
        message : 'Welcome to the API!',
    }));

    app.get( '/api/matches', ( req, res ) => {
        matchesController.list( req, res );
    });

    app.get( '/api/characters', ( req, res ) => {
        charactersController.list( req, res );
    });

    app.post( '/api/characters', (req, res ) => {
        charactersController.create( req, res );
    });
}