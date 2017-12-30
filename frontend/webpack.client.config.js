const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  // Tell webpack the root file of the server application
  entry: './src/client/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: '[name]-[hash].js',
    publicPath: '/static/',
    path: path.resolve(__dirname, 'dist/')
  },

  plugins: [
    new CleanWebpackPlugin(
      [
        'dist/*.js'
      ],
      {
        watch: true
      }
    )
  ]
};

module.exports = merge(baseConfig, config);
