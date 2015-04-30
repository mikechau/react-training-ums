/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, 'build', 'assets'),
    publicPath: '/assets/',
    filename: "[name].js",
    chunkFilename: "[id].chunk.[hash].js",
    sourceMapFilename: "debugging/[file].map",
    pathinfo: true
  },

  cache: true,
  debug: true,
  devtool: 'eval',
  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:9999',
      'webpack/hot/only-dev-server',
      './app/main.jsx'
    ]
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    root: path.join(__dirname, 'app'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },

  resolveLoader: { root: path.join(__dirname, "node_modules") },

  externals: {},

  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0&optional=runtime'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel-loader?stage=0&optional=runtime'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(scss|sass)$/,
        loader: 'css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loder?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.json5$/,
        loader: 'json5-loader'
      },
      {
        test: /\.(wav|mp3)$/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(md|markdown)$/,
        loaders: ['html-loader', 'markdown-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify('development')
      },
      DEBUG: true,
      BROWSER: true
    })
  ],

  devServer: {
    stats: {
      exclude: [
        /node_modules[\\\/]react(-router)?[\\\/]/
      ]
    }
  },

  eslint: {
    configFile: './.eslintrc'
  }

};
