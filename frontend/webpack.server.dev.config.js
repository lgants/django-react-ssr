const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.server.base.config.js');
const webpackNodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  externals: [
    webpackNodeExternals()
  ],
  plugins: [
    new CleanWebpackPlugin(
      [
        'build/*.*',
      ],
      {
        watch: true
      }
    )
  ]
};

module.exports = merge(baseConfig, config);
