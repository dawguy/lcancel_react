const NODE_ENV = process.env.NODE_ENV;
const dotenv   = require( 'dotenv' );

const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path');
      join    = path.join;
      resolve = path.resolve;

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

const get_config = require('hjs-webpack');

const isDev = NODE_ENV === 'development';

const root    = resolve(__dirname);
const src     = join( root, 'client/src' );
const modules = join( root, 'node_modules' );
const dest    = join( root, 'dist' );

const dotenv_vars = dotenv.config();
const environment_env = dotenv.config({
    path : join( root, 'config', '${NODE_ENV}.config.js'),
    silent : true,
})

const env_variables = Object.assign({}, dotenv_vars, environment_env);

const defines = Object.keys( env_variables )
    .reduce( ( memo, key ) => {
        const val = JSON.stringify( env_variables[key] );
        memo[`__${key.toUpperCase()}__`] = val;
        return memo;
    }, {
        __NODE_ENV__ : JSON.stringify( NODE_ENV )
    });

let config = {
    mode : 'development',
    entry : join( src, 'app.js' ),
    output : {
        filename : 'index-webpack.bundle.js',
        path : dest,
    },
    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                exclude : /node_modules/,
                use : [
                    'babel-loader',
                ],
            },
            {
                test : /\.css$/,
                use : [
                    { loader : 'style-loader' },
                    {
                        loader : 'css-loader',
                        options : {
                            modules : true
                        }
                    }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : path.join( src, 'index.html' ),
        }),
    ]
}


// config.hooks = {
    
// }

// config.plugins.push( new webpack.ProvidePlugin( defines ) );

// TODO get postcss working
// config.postcss = [].concat([
//     require('precss')({}),
//     require('autoprefixer')({}),
//     require('cssnano')({})
// ]);

module.exports = config;