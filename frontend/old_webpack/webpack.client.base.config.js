var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var RewriteImportPlugin = require("less-plugin-rewrite-import");

module.exports = {
  entry: './src/client/index.js',
  output: {
    filename: '[name]-[hash].js',
    publicPath: '/static/js/',
    path: path.resolve(__dirname, '../backend/app/static/js/')
  },
  // tells webpack to run babel on every file it runs through
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
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
        test: /\.less/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      },
    ]
  },
  plugins: [
    new RewriteImportPlugin({
      paths: {
        "../../theme.config": path.resolve(__dirname, '/src/semantic-ui/theme.config'),
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
    }),
    new BundleTracker(
      {
        filename: './webpack-stats.client.json'
      }
    ),
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
