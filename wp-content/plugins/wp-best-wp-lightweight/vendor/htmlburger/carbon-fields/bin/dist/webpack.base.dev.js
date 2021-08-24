"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * External dependencies.
 */
var path = require('path');

var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var TerserPlugin = require('terser-webpack-plugin');
/**
 * Indicates if we're running the build process in production mode.
 *
 * @type {Boolean}
 */


var isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  output: {
    filename: isProduction ? '[name].min.js' : '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    }, {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 3
        }
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader'
      }, {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../assets/styles/*.scss')
        }
      }]
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: isProduction ? '[name].min.css' : '[name].css'
  })].concat(_toConsumableArray(isProduction ? [new OptimizeCssAssetsPlugin({
    cssProcessorPluginOptions: {
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    }
  }), new TerserPlugin({
    cache: true,
    parallel: true
  })] : [])),
  stats: {
    modules: false,
    hash: false,
    builtAt: false,
    children: false
  }
};