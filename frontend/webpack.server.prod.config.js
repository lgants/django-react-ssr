var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var baseConfig = require('./webpack.server.base.config.js');
var webpackNodeExternals = require('webpack-node-externals');

const config = {
  externals: [
    webpackNodeExternals()
  ],
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false, //suppress uglification warnings
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi] //skip pre-minified libs
    }),
  ]
};

module.exports = merge(baseConfig, config);
