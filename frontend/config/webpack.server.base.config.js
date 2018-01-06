var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var BundleTracker = require('webpack-bundle-tracker');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, '../build/')
  },
  // Tell webpack to run babel on every file it runs through
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({
      path: path.resolve(__dirname),
      filename: './webpack-stats.server.json'
    }),
    new CleanWebpackPlugin(
      ['build/*.*',],
      {
        watch: true
      }
    )
  ]
};
