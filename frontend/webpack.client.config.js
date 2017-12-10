const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

const config = {
  // Tell webpack the root file of the server application
  entry: './src/client/index.js',

  // Tell webpack where to put the output file that is generated
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, 'public/')
  }
};

module.exports = merge(baseConfig, config);
