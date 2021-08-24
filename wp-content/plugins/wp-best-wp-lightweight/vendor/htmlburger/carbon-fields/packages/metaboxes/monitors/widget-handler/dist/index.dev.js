"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _data = require("@wordpress/data");

var _element = require("@wordpress/element");

var _lodash = require("lodash");

var _refractCallbag = require("refract-callbag");

var _callbagBasics = require("callbag-basics");

var _urldecode = _interopRequireDefault(require("../../utils/urldecode"));

var _flattenField = _interopRequireDefault(require("../../utils/flatten-field"));

var _fromEventPattern = _interopRequireDefault(require("../../utils/from-event-pattern"));

var _containers = require("../../containers");

var _constants = require("../../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Performs the re-initialization of widgets.
 *
 * @return {null}
 */
function WidgetHandler() {
  return null;
}
/**
 * Returns whether the widget is created by Carbon Fields.
 *
 * @param  {string} identifier
 * @return {boolean}
 */


function isCarbonFieldsWidget(identifier) {
  return identifier.indexOf(_constants.CARBON_FIELDS_CONTAINER_WIDGET_ID_PREFIX) > -1;
}
/**
 * The function that controls the stream of side effects.
 *
 * @return {Object}
 */


function aperture() {
  return (0, _callbagBasics.merge)((0, _callbagBasics.pipe)((0, _fromEventPattern["default"])(function (handler) {
    return window.jQuery(document).on('widget-added widget-updated', handler);
  }, function (handler) {
    return window.jQuery(document).off('widget-added widget-updated', handler);
  }, function (event, $widget) {
    return {
      event: event,
      $widget: $widget
    };
  }), (0, _callbagBasics.filter)(function (_ref) {
    var $widget = _ref.$widget;
    return isCarbonFieldsWidget($widget[0].id);
  }), (0, _callbagBasics.map)(function (payload) {
    return {
      type: 'WIDGET_CREATED_OR_UPDATED',
      payload: payload
    };
  })), (0, _callbagBasics.pipe)((0, _fromEventPattern["default"])(function (handler) {
    return window.jQuery(document).on('ajaxSend', handler);
  }, function (handler) {
    return window.jQuery(document).off('ajaxSend', handler);
  }, function (event, xhr, options, data) {
    return {
      event: event,
      xhr: xhr,
      options: options,
      data: data
    };
  }), (0, _callbagBasics.filter)(function (_ref2) {
    var options = _ref2.options;
    return (0, _lodash.startsWith)(options.data, _constants.CARBON_FIELDS_CONTAINER_ID_PREFIX);
  }), (0, _callbagBasics.map)(function (payload) {
    return {
      type: 'WIDGET_BEIGN_UPDATED_OR_DELETED',
      payload: payload
    };
  })));
}
/**
 * The function that causes the side effects.
 *
 * @return {Function}
 */


function handler() {
  return function (effect) {
    var _select = (0, _data.select)('carbon-fields/metaboxes'),
        getContainerById = _select.getContainerById;

    var _dispatch = (0, _data.dispatch)('carbon-fields/metaboxes'),
        addContainer = _dispatch.addContainer,
        removeContainer = _dispatch.removeContainer,
        addFields = _dispatch.addFields,
        removeFields = _dispatch.removeFields;

    switch (effect.type) {
      case 'WIDGET_CREATED_OR_UPDATED':
        {
          var _effect$payload = effect.payload,
              event = _effect$payload.event,
              $widget = _effect$payload.$widget;
          var container = (0, _lodash.flow)(_urldecode["default"], JSON.parse)($widget.find('[data-json]').data('json'));
          var fields = [];
          container.fields = container.fields.map(function (field) {
            return (0, _flattenField["default"])(field, container, fields);
          });
          addFields(fields);
          addContainer(container);
          (0, _containers.renderContainer)(container, 'classic'); // WARNING: This piece of code manipulates the core behavior of WordPress Widgets.
          // Some day this code will stop to work and we'll need to find another workaround.
          //
          // * Disable the submit { handler } since it breaks our validation logic.
          // * Disable live preview mode because we can't detect when the widget is updated/synced.
          // * Show the "Apply" button because it's hidden by the live mode.

          if (window.cf.config.pagenow === _constants.PAGE_NOW_CUSTOMIZE && event.type === 'widget-added') {
            var widgetId = $widget.find('[name="widget-id"]').val();
            $widget.find('[name="savewidget"]').show().end().find('.widget-content:first').off('keydown', 'input').off('change input propertychange', ':input');
            var instance = wp.customize.Widgets.getWidgetFormControlForWidget(widgetId); // Change the flag for 'live mode' so we can receive proper `widget-updated` events.

            instance.liveUpdateMode = false;
          }

          break;
        }

      case 'WIDGET_BEIGN_UPDATED_OR_DELETED':
        {
          var _effect$payload$optio = effect.payload.options.data.match(/widget-id=(.+?)&/),
              _effect$payload$optio2 = _slicedToArray(_effect$payload$optio, 2),
              _widgetId = _effect$payload$optio2[1];

          var containerId = "".concat(_constants.CARBON_FIELDS_CONTAINER_ID_PREFIX).concat(_widgetId); // Get the container from the store.

          var _container = getContainerById(containerId); // Remove the current instance from DOM.


          (0, _element.unmountComponentAtNode)(document.querySelector(".container-".concat(containerId))); // Get the fields that belongs to the container.

          var fieldsIds = _.map(_container.fields, 'id'); // Remove everything from the store.


          removeContainer(containerId);
          removeFields(fieldsIds);
          break;
        }
    }
  };
}

var _default = (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
})(WidgetHandler);

exports["default"] = _default;