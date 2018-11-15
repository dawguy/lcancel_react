const express = require('express');
const logger = require('morgan');
const body_parser = require('body-parser');

const l_server = express();

l_server.use( logger( 'dev' ) );

l_server.use( body_parser.json() );
l_server.use( body_parser.urlencoded( { extended: false }) );

// Load the routes
l_server.all( '/*', function( req, res, next ) {
    res.header( 'Access-Control-Allow-Origin', '*' );
    res.header( 'Access-Control-Allow-Headers', 'X-Requested-With' );
    next();
})
require( '../routes' )( l_server );
    
module.exports = l_server;