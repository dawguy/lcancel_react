const User = require('../models').user;
const Sequelize = require( 'sequelize' );

module.exports = {
    create( req, res ){
        return User
            .create({
                name : req.body.name,
                elo  : 1000,
            })
            .then( user => res.status( 201 ).send( user ) )
            .catch( error => {               
                res.status( 400 ).send( error )
            });
    },

    list( req, res ){
        return User
            .all()
            .then( users => res.status( 200 ).send( users ) )
            .catch( error => res.status( 400 ).send( error ) );
    },

    get( req, res ){
        let user_id = req.params.id;

        return User.findAll({
            where : {
                id : user_id,
            }
        })
        .then( users => {
            res.status( 200 ).send( users );
        })
        .catch( error => {
            res.status( 400 ).send( error );
        })
    },

    search( req, res ){
        const {gt, lte, ne, regexp, in: opIn} = Sequelize.Op;

        let search_params = {};

        if( typeof req.query.name !== 'undefined' ){
            search_params['name'] = {
                [regexp] : req.query.name,
            };
        }

        if( typeof req.query.elo_greater_than !== 'undefined' ){
            search_params['elo'] = {
                [gt] : req.query.elo_greater_than,
            };
        }

        if( typeof req.query.elo_less_than !== 'undefined' ){
            search_params['elo'] = {
                [lte] : req.query.elo_less_than,
            };
        }

        return User.findAll({
            where : search_params,
            limit : 25
        })
        .then( users => {
            res.status( 200 ).send( users );
        })
        .catch( error => {
            res.status( 400 ).send( error );
        })
    },

    paginate( req, res ){
        let limit = 25;
        let offset = 0;

        return User.findAndCountAll({})
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

            User.findAll({
                limit : limit,
                offset : offset,
                order : ['id'],
            })
            .then( users => {
                res.status( 200 ).json( {
                    'data' : users,
                    'count' : result.count,
                    'pages' : pages
                });
            });
        })
        .catch( error => res.status( 400 ).send( error ) );
    }
};