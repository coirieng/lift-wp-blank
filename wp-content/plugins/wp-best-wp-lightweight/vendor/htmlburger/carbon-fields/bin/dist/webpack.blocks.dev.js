"use strict";

/**
 * External dependencies.
 */
var merge = require('webpack-merge');
/**
 * Internal dependencies.
 */


var base = require('./webpack.base');

var paths = require('./paths');

var wpPackages = require('./wp-packages');

module.exports = [merge(base, {
  entry: {
    blocks: './packages/blocks/index.js'
  },
  output: {
    path: paths.gutenbergBuildPath
  },
  externals: Object.assign({}, wpPackages.externals, {
    'react': ['cf', 'vendor', 'react'],
    'react-dom': ['cf', 'vendor', 'react-dom'],
    'nanoid': ['cf', 'vendor', 'nanoid'],
    'immer': ['cf', 'vendor', 'immer'],
    '@wordpress/api-fetch': ['wp', 'apiFetch'],
    '@wordpress/components': ['wp', 'components'],
    '@wordpress/blocks': ['wp', 'blocks'],
    '@wordpress/editor': ['wp', 'editor'],
    '@wordpress/i18n': ['wp', 'i18n'],
    '@wordpress/date': ['wp', 'date'],
    '@carbon-fields/core': 'cf.core',
    'lodash': ['lodash']
  })
})];