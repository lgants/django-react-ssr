const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/client/index.js',
  output: {
    filename: '[name]-[hash].js',
    publicPath: '/static/',
    path: path.resolve(__dirname, '../backend/app/static/js/')
  },
  plugins: [
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
