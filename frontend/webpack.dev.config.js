const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = {
  context: __dirname,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'webpack-dev-server-[hash].js',
    publicPath: 'http://localhost:3000/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader?experimental'
        ]
      }
    ]
  }
}

module.exports = merge(baseConfig, config);
