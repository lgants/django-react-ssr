const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const webpackNodeExternals = require('webpack-node-externals');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, 'build/')
  },
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
