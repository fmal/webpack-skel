'use strict';

module.exports = exports = Object.create(require('./webpack.config'));

exports.devtool = 'eval';

exports.entry = Object.create(exports.entry);
exports.entry['index'] = [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/dev-server'
].concat(exports.entry['index']);