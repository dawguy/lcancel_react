const Stage = require('../models').stage;

module.exports = {
    list( req, res ){
        return Stage
            .all()
            .then( stages => res.status( 200 ).send( stages ) )
            .catch( error => res.status( 400 ).send( error ) );
    },

    get( req, res ){
        let stage_id = req.params.id;

        return Stage.findAll({
            where : {
                id : stage_id,
            }
        })
        .then( stages => {
            res.status( 200 ).send( stages );
        })
        .catch( error => {
            res.status( 400 ).send( error );
        })
    },
};