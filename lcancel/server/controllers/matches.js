const Match = require('../models').match;

module.exports = {
    create( req, res ){
        return Match
            .create({
                winning_user      : req.body.winning_user,
                losing_user       : req.body.losing_user,
                winning_character : req.body.winning_character,
                losing_character  : req.body.losing_character,
                stage             : req.body.stage,                
            })
            .then( match => res.status( 201 ).send( match ) )
            .catch( error => {               
                res.status( 400 ).send( error )
            });
    },

    list( req, res ){
        return Match
            .all()
            .then( matches => res.status( 200 ).send( matches ) )
            .catch( error => res.status( 400 ).send( error ) );
    }
};