const express = require('express');
const logger = require('morgan');
const body_parser = require('body-parser');

const l_server = express();

l_server.use( logger( 'dev' ) );

l_server.use( body_parser.json() );
l_server.use( body_parser.urlencoded( { extended: false }) );

// Load the routes

require( '../routes' )( l_server );

// // l_server.get( '*', ( req, res ) => res.status( 200 ).send({
// }));
    
    module.exports = l_server;