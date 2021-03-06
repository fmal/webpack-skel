'use strict';

var webpack = require('webpack');

module.exports = exports = Object.create(require('./webpack.config'));

exports.plugins = exports.plugins.concat(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compressor: {
            warnings: false
        }
    })
);

exports.devtool = 'sourcemap';

exports.output = Object.create(exports.output);
exports.output.filename = exports.output.filename.replace(/\.js$/, '.min.js');