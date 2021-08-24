"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _compose = require("@wordpress/compose");

var _refractCallbag = require("refract-callbag");

var _callbagBasics = require("callbag-basics");

var _callbagOf = _interopRequireDefault(require("callbag-of"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MediaLibrary(_ref) {
  var children = _ref.children,
      openMediaBrowser = _ref.openMediaBrowser;
  return children({
    openMediaBrowser: openMediaBrowser
  });
}
/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} component
 * @return {Object}
 */


function aperture(component) {
  var mount$ = component.mount;
  var unmount$ = component.unmount;

  var _component$useEvent = component.useEvent('openMediaBrowserEvent'),
      _component$useEvent2 = _slicedToArray(_component$useEvent, 2),
      openMediaBrowserEvent$ = _component$useEvent2[0],
      openMediaBrowser = _component$useEvent2[1];

  return (0, _callbagBasics.merge)((0, _callbagBasics.pipe)(mount$, (0, _callbagBasics.map)(function () {
    return {
      type: 'INIT'
    };
  })), (0, _callbagBasics.pipe)(unmount$, (0, _callbagBasics.map)(function () {
    return {
      type: 'DESTROY'
    };
  })), (0, _callbagBasics.pipe)((0, _callbagOf["default"])({
    openMediaBrowser: openMediaBrowser
  }), (0, _callbagBasics.map)(_refractCallbag.toProps)), (0, _callbagBasics.pipe)(openMediaBrowserEvent$, (0, _callbagBasics.map)(function (payload) {
    return {
      type: 'OPEN',
      payload: payload
    };
  })));
}
/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */


function handler(props) {
  var mediaBrowser = null;
  return function (effect) {
    switch (effect.type) {
      case 'INIT':
        var onSelect = props.onSelect,
            typeFilter = props.typeFilter;
        mediaBrowser = wp.media({
          title: props.title,
          library: {
            type: typeFilter
          },
          button: {
            text: props.buttonLabel
          },
          multiple: props.multiple
        });
        mediaBrowser.on('select', function () {
          var file = mediaBrowser.state().get('selection').toJSON();
          onSelect(file);
        });
        break;

      case 'OPEN':
        if (mediaBrowser) {
          mediaBrowser.open();
        }

        break;

      case 'DESTROY':
        mediaBrowser = null;
        break;
    }
  };
}

var applyWithEffects = (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
});

var _default = (0, _compose.compose)(applyWithEffects)(MediaLibrary);

exports["default"] = _default;