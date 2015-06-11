# Font Awesome icons as React components

## Installation

React Font Awesome is distributed via [npm][]:

    % npm install react react-fa

You also need to install [webpack][] which is the only bundler at the moment
capable to bundle not only JavaScript code but also stylesheets and static
assets such as fonts and images:

    % npm install webpack

You also need a couple of loaders for webpack:

    % npm install jsx-loader style-loader css-loader url-loader
    % npm install extract-text-webpack-plugin

## Usage

Just as simple as:

    var React = require('react')
    var Icon = require('react-fa')

    React.renderComponent(
      <Icon spin name="spinner" />,
      document.body
    )

Use the following webpack config (put it in `webpack.config.js`):

    var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
            loader: 'jsx-loader?harmony'
          },
          {
            test: /\.(css)(\?.+)$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
          },
          {
            test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)$/,
            loader: 'url-loader?limit=8192'
          }
        ]
      },
      plugins: [
        new ExtractTextPlugin('bundle.css')
      ]
    }

which compile everything (js, stylesheets and icon fonts) into `assets/`
directory so you would need this basic HTML file to start your app:

    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="assets/bundle.css">
      </head>
      <body>
        <div id="main"></div>
        <script src="assets/bundle.js"></script>
      </body>
    </html>

[webpack]: http://webpack.github.io/
[npm]: http://npmjs.org
