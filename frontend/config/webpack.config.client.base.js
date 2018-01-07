'use strict';

const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: '../src/index.js',
  output: {
    // filename: '[name]-[hash].js',
    publicPath: '/static/build/',
    // The build folder.
    path: path.resolve(__dirname, '../../backend/app/static/build/')
  },
  resolve: {
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: '[name].[contenthash].css',
    // }),
    new BundleTracker({
      path: path.resolve(__dirname),
      filename: './webpack-stats.client.json'
    }),
    new CleanWebpackPlugin([
      'backend/app/static/build/*'
    ],
      {
        root: path.resolve(__dirname, '..', '..'),
        watch: true
      }
    )
  ]
}
