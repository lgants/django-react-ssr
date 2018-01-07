var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.server.base.js');
var webpackNodeExternals = require('webpack-node-externals');

const config = {
  externals: [
    webpackNodeExternals()
  ],
};

module.exports = merge(baseConfig, config);
