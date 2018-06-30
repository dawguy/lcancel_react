const Character = require('../models/character');

module.exports = {
    create( req, res ){
        return Character
            .create({
                name : req.body.title,
            })
            .then( character => res.status( 201 ).send( character ) )
            .catch( error => res.status( 400 ).send( error ) );
    },
};