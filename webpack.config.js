'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const development = process.env.NODE_ENV !== 'production';

let entry = [];
let plugins = [];
let devtools = '';

if (development){
    entry = [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        path.resolve(__dirname, 'src/js/app.js')
    ];

    plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        })
    ];

    devtools = 'source-map';
}else {
    entry = [
        path.resolve(__dirname, 'src/js/app.js')
    ];
    plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        }),
        new HtmlWebpackPlugin({
            template: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ];
}

module.exports = {
    entry: entry,
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: path.join(__dirname, '/node_modules/')
        }]
    },
    devtool: devtools,
    plugins: plugins,
    target: "web",
    progress: true
};