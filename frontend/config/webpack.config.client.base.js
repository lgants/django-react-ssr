'use strict';

const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: '../src/client/index.js',
  output: {
    // filename: '[name]-[hash].js',
    publicPath: '/static/js/',
    path: path.resolve(__dirname, '../../backend/app/static/js/')
  },
  resolve: {
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: '[name].[contenthash].css',
    // }),
    new BundleTracker(
      {
        filename: './webpack-stats.client.json'
      }
    ),
    new CleanWebpackPlugin([
      'backend/app/static/js/main-*.*', 'backend/app/static/js/*.hot-update.*'
    ],
      {
        root: path.resolve(__dirname, '..', '..'),
        watch: true
      }
    )
  ]
}
