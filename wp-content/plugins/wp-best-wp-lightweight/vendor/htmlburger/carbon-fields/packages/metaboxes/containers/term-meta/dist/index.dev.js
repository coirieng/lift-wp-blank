"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

var _hooks = require("@wordpress/hooks");

var _data = require("@wordpress/data");

var _refractCallbag = require("refract-callbag");

var _callbagBasics = require("callbag-basics");

var _fromEventPattern = _interopRequireDefault(require("../../utils/from-event-pattern"));

var _helpers = require("../../store/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */
function aperture() {
  return (0, _callbagBasics.pipe)((0, _fromEventPattern["default"])(function (handler) {
    return window.jQuery(document).on('ajaxSuccess', handler);
  }, function (handler) {
    return window.jQuery(document).off('ajaxSuccess', handler);
  }, function (e, xhr, options, data) {
    return {
      options: options,
      data: data
    };
  }), (0, _callbagBasics.filter)(function (_ref) {
    var options = _ref.options,
        data = _ref.data;
    return options.data && options.data.indexOf('carbon_fields_container') > -1 && options.data.indexOf('add-tag') > -1 && !data.documentElement.querySelector('wp_error');
  }));
}
/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */


function handler(props) {
  return function () {
    // Collects identifiers of current fields so we can remove them later.
    var oldFieldIds = _lodash["default"].map(props.container.fields, 'id'); // Get a fresh copy of the container and fields.


    var _normalizePreloadedSt = (0, _helpers.normalizePreloadedState)(_lodash["default"].get(window.cf, 'preloaded.containers', [])),
        containers = _normalizePreloadedSt.containers,
        fields = _normalizePreloadedSt.fields;

    var container = _lodash["default"].find(containers, ['id', props.id]);

    var containerFields = _lodash["default"].filter(fields, ['container_id', props.id]); // Replace the container and add the new fields.


    var _dispatch = (0, _data.dispatch)('carbon-fields/metaboxes'),
        updateState = _dispatch.updateState,
        removeFields = _dispatch.removeFields;

    updateState(_lodash["default"].keyBy([container], 'id'), _lodash["default"].keyBy(containerFields, 'id'));
    removeFields(oldFieldIds);
  };
}

(0, _hooks.addFilter)('carbon-fields.term_meta.classic', 'carbon-fields/metaboxes', (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
}));