"use strict";

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _lodash = require("lodash");

var _core = require("@carbon-fields/core");

require("./style.scss");

/**
 * External dependencies.
 */

/**
 * Carbon Fields dependencies.
 */

/**
 * Internal dependencies.
 */
(0, _hooks.addFilter)('carbon-fields.association.block', 'carbon-fields/blocks', (0, _core.withProps)(function (props) {
  return {
    hierarchyResolver: function hierarchyResolver() {
      // Get the block that contains the field.
      var block = (0, _data.select)('core/editor').getBlock(props.blockId); // Get the path.

      var path = props.id.split('__'); // Remove the chunk that contains the block identifier.

      path.shift(); // Get the hierarchy.

      var hierarchy = path.shift();
      var accessor = "data.".concat(hierarchy); // Visit every branch in the tree so we can get the full hierarchy.

      while (path.length > 0) {
        var chunk = path.shift();
        var isGroup = chunk.indexOf('cf-') === 0;

        if (isGroup) {
          var groups = (0, _lodash.get)(block.attributes, "".concat(accessor));
          var group = (0, _lodash.find)(groups, ['_id', chunk]);
          var groupIndex = groups.indexOf(group);
          accessor = "".concat(accessor, ".").concat(groupIndex);
          hierarchy = "".concat(hierarchy, "[").concat(groupIndex, "]:").concat(group._type, "/");
        } else {
          accessor = "".concat(accessor, ".").concat(chunk);
          hierarchy = "".concat(hierarchy).concat(chunk);
        }
      }

      return hierarchy;
    }
  };
}));