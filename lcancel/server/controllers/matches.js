const Match = require('../models').match;
const Sequelize = require( 'sequelize' );

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
    },

    character( req, res ){
        return Match
            .findAll({
                where : Sequelize.or(
                    { winning_character : req.params.character },
                    { losing_character : req.params.character }
                ),
            })
            .then( matches => res.status( 200 ).send( matches ) )
            .catch( error => res.status( 400 ).send( error ) );
    },

    character_matchup( req, res ){
        return Match
            .findAll({
                where : Sequelize.or(
                    Sequelize.and(
                        { winning_character : req.params.character_a },
                        { losing_character : req.params.character_b }
                    ),
                    Sequelize.and(
                        { winning_character : req.params.character_b },
                        { losing_character : req.params.character_a }
                    )
                ),
            })
            .then( matches => res.status( 200 ).send( matches ) )
            .catch( error => res.status( 400 ).send( error ) );
    },

    user( req, res ){
        return Match
            .findAll({
                where : Sequelize.or(
                    { winning_user : req.params.user },
                    { losing_user : req.params.user }
                ),
            })
            .then( matches => res.status( 200 ).send( matches ) )
            .catch( error => res.status( 400 ).send( error ) );
    },

    user_matchup( req, res ){
        return Match
            .findAll({
                where : Sequelize.or(
                    Sequelize.and(
                        { winning_user : req.params.user_a },
                        { losing_user : req.params.user_b }
                    ),
                    Sequelize.and(
                        { winning_user : req.params.user_b },
                        { losing_user : req.params.user_a }
                    )
                ),
            })
            .then( matches => res.status( 200 ).send( matches ) )
            .catch( error => res.status( 400 ).send( error ) );
    },

    paginate( req, res ){
        let limit = 100;
        let offset = 0;

        return Match.findAndCountAll({})
        .then( result => {
            if( typeof req.params.page !== 'undefined' && req.params.page > 0 )
            {
                var page = req.params.page;
            }
            else {
                var page = 1;
            }
            
            let pages = Math.ceil( result.count / limit );
            offset = limit * ( page - 1 );

            Match.findAll({
                limit : limit,
                offset : offset,
                order : ['id'],
            })
            .then( matches => {
                res.status( 200 ).json( {
                    'data' : matches,
                    'count' : result.count,
                    'pages' : pages
                });
            });
        })
        .catch( error => res.status( 400 ).send( error ) );
    }
};