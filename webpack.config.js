'use strict';

var path = require('path');

module.exports = {
    context: here('src'),
    entry: {
        index: ['./index.js']
    },
    output: {
        path: here('dist'),
        publicPath: 'dist/',
        filename: '[name].js',
        library: 'MyComponent',
        libraryTarget: 'umd'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' }
        ]
    },
    plugins: [],
    // https://github.com/webpack/webpack/issues/451
    node: {
        fs: 'empty'
    }
};

function here (p) {
    return path.resolve(__dirname, p || '');
}