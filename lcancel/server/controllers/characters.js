const Character = require('../models').character;

module.exports = {
    create( req, res ){
        console.log( Character );
        return Character
            .create({
                name : req.body.name,
            })
            .then( character => res.status( 201 ).send( character ) )
            .catch( error => res.status( 400 ).send( error ) );
    },
};