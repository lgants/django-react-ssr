var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var CleanWebpackPlugin = require('clean-webpack-plugin');

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
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
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
  plugins: [
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
