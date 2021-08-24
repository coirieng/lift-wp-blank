"use strict";

/**
 * External dependencies.
 */
var webpack = require('webpack');

var merge = require('webpack-merge');
/**
 * Internal dependencies.
 */


var base = require('./webpack.base');

var paths = require('./paths');

var wpPackages = require('./wp-packages');

var config = {
  entry: {
    vendor: './packages/vendor/index.js'
  }
};
module.exports = [merge(base, config, {
  output: {
    path: paths.gutenbergBuildPath
  },
  externals: Object.assign({}, wpPackages.externals, {
    'lodash': 'lodash',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'jquery': 'jQuery'
  })
}), merge(base, config, {
  output: {
    path: paths.classicBuildPath
  },
  plugins: [new webpack.ProvidePlugin(wpPackages.providers)]
})];