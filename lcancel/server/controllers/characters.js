const Character = require('../models').character;

module.exports = {
    create( req, res ){
        const new_row = Character
            .create({
                name : req.body.name,
            })

            console.log( new_row );

            new_row.then( character => res.status( 201 ).send( character ) )
            .catch( error => {
                console.log( error );
                res.status( 400 ).send( error )
            });
    },

    list( req, res ){
        return Character
            .all()
            .then( charcters => res.status( 200 ).send( characters ) )
            .catch( error => res.status( 400 ).send( error ) );
    }
};