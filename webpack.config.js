'use strict';

var path = require('path');
var externals = require('webpack-node-externals');
var pkg = require('./package.json');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, pkg.main)],
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    filename: pkg.main
  },
  target: 'node',
  externals: [externals()],
  module: {
    loaders: [
      { test:/\.js$/, loader:'babel', exclude: /node_modules/ },
      { test:/\.json$/, loader:'json' }
    ]
  }
};
