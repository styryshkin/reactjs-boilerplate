'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = process.env.NODE_ENV !== 'production';
const dir_js = path.resolve(__dirname, 'src/js');
const dir_build = path.resolve(__dirname, 'build');
const dir_node_modules = path.join(__dirname, '/node_modules/');

let plugins = [];
let devtools = '';

if (development){
    plugins = [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        })
    ];

    devtools = 'source-map';
}else {
    plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
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

plugins.push(new webpack.NoErrorsPlugin());

module.exports = {
    entry: path.resolve(dir_js, 'app.js'),
    output: {
        filename: 'bundle.js',
        path: dir_build
    },
    devServer: {
        contentBase: dir_build
    },
    module: {
        loaders: [{
            test: dir_js,
            loader: 'babel-loader',
            exclude: dir_node_modules
        }]
    },
    stats: {
        colors: true
    },
    devtool: devtools,
    plugins: plugins,
    target: "web",
    progress: true
};