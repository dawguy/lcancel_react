const Character = require('../models').character;

module.exports = {
    list( req, res ){
        return Character
            .all()
            .then( characters => res.status( 200 ).send( characters ) )
            .catch( error => res.status( 400 ).send( error ) );
    },

    get( req, res ){
        let character_id = req.params.id;

        return Character.findAll({
            where : {
                id : character_id,
            }
        })
        .then( characters => {
            res.status( 200 ).send( characters );
        })
        .catch( error => {
            res.status( 400 ).send( error );
        })
    },
};