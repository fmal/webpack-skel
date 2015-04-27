'use strict';

module.exports = exports = Object.create(require('./webpack.config'));

exports.context = __dirname;

exports.entry = {
    test: [ './webpack.test.js' ]
};