const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.client.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const config = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin([
      'backend/app/static/js/main-*.*', 'backend/app/static/js/*.hot-update.*'
    ],
      {
        root: path.resolve(__dirname, '..'),
        watch: true
      }
    )
  ]
};

module.exports = merge(baseConfig, config);
