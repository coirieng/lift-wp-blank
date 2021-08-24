"use strict";

var _data = require("@wordpress/data");

var _hooks = require("@wordpress/hooks");

/**
 * External dependencies.
 */
(0, _hooks.addFilter)('carbon-fields.sidebar.metabox', 'carbon-fields/metaboxes', (0, _data.withDispatch)(function (dispatch) {
  var _dispatch = dispatch('carbon-fields/metaboxes'),
      receiveSidebar = _dispatch.receiveSidebar;

  return {
    onAdded: receiveSidebar
  };
}));