"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _callbagDropUntil = _interopRequireDefault(require("callbag-drop-until"));

var _callbagDistinctUntilChanged = _interopRequireDefault(require("callbag-distinct-until-changed"));

var _hooks = require("@wordpress/hooks");

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

var _refractCallbag = require("refract-callbag");

var _callbagDebounce = require("callbag-debounce");

var _callbagBasics = require("callbag-basics");

var _required = _interopRequireDefault(require("./required"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * The function that controls the stream of side-effects.
 *
 * @param  {Object} component
 * @param  {Object} props
 * @return {Object}
 */
function aperture(component, props) {
  if (!props.field.required) {
    return;
  }

  var mount$ = component.mount;
  var unmount$ = component.unmount;
  var value$ = component.observe('value');
  var visible$ = component.observe('visible');
  return (0, _callbagBasics.merge)((0, _callbagBasics.pipe)((0, _callbagBasics.combine)(value$, visible$, mount$), (0, _callbagBasics.filter)(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        visible = _ref2[1];

    return visible;
  }), (0, _callbagBasics.take)(1), (0, _callbagBasics.map)(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 1),
        value = _ref4[0];

    return {
      type: 'VALIDATE',
      payload: {
        value: value,
        "transient": true
      }
    };
  })), (0, _callbagBasics.pipe)(value$, (0, _callbagDropUntil["default"])(mount$), (0, _callbagDistinctUntilChanged["default"])(), (0, _callbagDebounce.debounce)(250), (0, _callbagBasics.map)(function (value) {
    return {
      type: 'VALIDATE',
      payload: {
        value: value,
        "transient": false
      }
    };
  })), (0, _callbagBasics.pipe)(unmount$, (0, _callbagBasics.map)(function () {
    return {
      type: 'RESET'
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
  return function (effect) {
    var id = props.id,
        field = props.field,
        markAsInvalid = props.markAsInvalid,
        markAsValid = props.markAsValid,
        lockSaving = props.lockSaving,
        unlockSaving = props.unlockSaving;

    switch (effect.type) {
      case 'VALIDATE':
        var _effect$payload = effect.payload,
            value = _effect$payload.value,
            _transient = _effect$payload["transient"];
        var hook = "carbon-fields.".concat(field.type, ".validate");
        var error = (0, _hooks.hasFilter)(hook) ? (0, _hooks.applyFilters)(hook, field, value) : (0, _required["default"])(value);

        if (error) {
          if (!_transient) {
            markAsInvalid(id, error);
          }

          lockSaving(id);
        } else {
          if (!_transient) {
            markAsValid(id);
          }

          unlockSaving(id);
        }

        break;

      case 'RESET':
        markAsValid(id);
        unlockSaving(id);
        break;
    }
  };
}

var applyWithEffects = (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
});
var applyWithDispatch = (0, _data.withDispatch)(function (dispatch) {
  var _dispatch = dispatch('carbon-fields/core'),
      markAsValid = _dispatch.markAsValid,
      markAsInvalid = _dispatch.markAsInvalid;

  return {
    markAsValid: markAsValid,
    markAsInvalid: markAsInvalid
  };
});

var _default = (0, _compose.compose)(applyWithDispatch, applyWithEffects);

exports["default"] = _default;