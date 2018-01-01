var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.server.base.config.js');
var webpackNodeExternals = require('webpack-node-externals');

const config = {
  externals: [
    webpackNodeExternals()
  ],
};

module.exports = merge(baseConfig, config);
