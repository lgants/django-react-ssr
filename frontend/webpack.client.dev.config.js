var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var baseConfig = require('./webpack.client.base.config.js');
var CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

module.exports = merge(baseConfig, config);
