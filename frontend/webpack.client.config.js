const path = require('path');
const merge = require('webpack-merge');
var webpack = require('webpack');

const baseConfig = require('./webpack.base.config.js');

const config = {
  // Tell webpack the root file of the server application
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/index.js',
  ],

  // Tell webpack where to put the output file that is generated
  output: {
    filename: '[name]-[hash].js',
    publicPath: '/static/',
    path: path.resolve(__dirname, 'dist/')
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.(png|gif)$/,
        loader: 'url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack-loader'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(ttf|eot|svg|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: {
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  }
};

module.exports = merge(baseConfig, config);
