const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack to build a bundle for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of the server application
  entry: './src/server/index.js',

  // Tell webpack where to put the output file
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, 'build/')
  },

  // Tells webpack to not bundle any libraries into output server-side bundle if that library exists inside the node modules folder, which speeds webpack by reducing bundle size
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);