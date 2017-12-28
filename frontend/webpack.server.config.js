const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, 'build/')
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
