import path from 'path';
import webpack from 'webpack';
import { host } from './src/config.js';


const config = {
    //define entry point of app
    entry: {
        app: [
            path.resolve(__dirname, 'src/app.js')

        ]
    },

    devtool: 'source-map',

    //define bundle filename and directory
    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },

    stats: {
        colors: true
    },

    //define necessary modules in app
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            loaders: [
                'style-loader',
                'css-loader?sourceMap',
                'sass-loader?sourceMap'
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=10000',
        }, {
            test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
            loader: 'url-loader'
        }]
    },

    //define plugins
    plugins: [],

};


export default config;
