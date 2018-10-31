const Stage = require('../models').stage;

module.exports = {
    create( req, res ){
        return Stage
            .create({
                name : req.body.name,
            })
            .then( stage => res.status( 201 ).send( stage ) )
            .catch( error => {               
                res.status( 400 ).send( error )
            });
    },

    list( req, res ){
        return Stage
            .all()
            .then( stages => res.status( 200 ).send( stages ) )
            .catch( error => res.status( 400 ).send( error ) );
    }
};