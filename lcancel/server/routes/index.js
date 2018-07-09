const charactersController = require( '../controllers' ).characters;

module.exports = ( app ) => {
    app.get( '/api', ( req, res ) => res.status( 200 ).send({
        message : 'Welcome to the API!',
    }));

    app.get( '/api/characters', ( req, res ) => res.status( 200 ).send({
        message : 'Loading characters...',
    }));

    app.post( '/api/characters', (req, res ) => {
        console.log( charactersController )

        charactersController.create(req,res);
    });
}