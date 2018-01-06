var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var baseConfig = require('./webpack.client.base.config.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'), //reduces react lib size
      }
    }),
    new ExtractTextPlugin("bundle.css", {allChunks: false}),
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
