var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: 'assets',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?stage=0'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)\??/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
};
