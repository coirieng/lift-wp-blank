"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _i18n = require("@wordpress/i18n");

var _lodash = require("lodash");

var _containers = require("../../../containers");

var _base = _interopRequireDefault(require("../conditions/base"));

var _boolean2 = _interopRequireDefault(require("../conditions/boolean"));

var _postTerm = _interopRequireDefault(require("../conditions/post-term"));

var _postTemplate = _interopRequireDefault(require("../conditions/post-template"));

var _postAncestorId = _interopRequireDefault(require("../conditions/post-ancestor-id"));

var _termParentId = _interopRequireDefault(require("../conditions/term-parent-id"));

var _termAncestorId = _interopRequireDefault(require("../conditions/term-ancestor-id"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Keeps track of supported conditions.
 *
 * @type {Object}
 */
var conditions = {
  "boolean": _boolean2["default"],
  post_term: _postTerm["default"],
  post_ancestor_id: _postAncestorId["default"],
  post_parent_id: _base["default"],
  post_level: _base["default"],
  post_format: _base["default"],
  post_template: _postTemplate["default"],
  term_level: _base["default"],
  term_parent: _termParentId["default"],
  term_ancestor: _termAncestorId["default"],
  user_role: _base["default"]
};
/**
 * Walks through the definitions and evaluates the conditions.
 *
 * @param  {Object[]} definitions
 * @param  {Object}   values
 * @param  {string}   relation
 * @return {boolean}
 */

function evaluate(definitions, values, relation) {
  var results = definitions.map(function (definition) {
    if (!definition.relation) {
      var condition = (0, _lodash.get)(conditions, definition.type);

      if (condition) {
        return condition.isFulfiled(definition, values);
      } else {
        // eslint-disable-line no-else-return
        // eslint-disable-next-line no-console
        console.error((0, _i18n.sprintf)((0, _i18n.__)('Unsupported container condition - "%1$s".', 'carbon-fields-ui'), definition.type));
        return false;
      }
    } else {
      // eslint-disable-line no-else-return
      return evaluate(definition.conditions, values, definition.relation);
    }
  });

  switch (relation) {
    case 'AND':
      return results.every(Boolean);

    case 'OR':
      return results.some(Boolean);

    default:
      // eslint-disable-next-line no-console
      console.error((0, _i18n.sprintf)((0, _i18n.__)('Unsupported container condition relation used - "%1$s".', 'carbon-fields-ui'), relation));
      return false;
  }
}
/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @param  {Object} props.containers
 * @param  {string} props.context
 * @return {Function}
 */


function handler(_ref) {
  var containers = _ref.containers,
      context = _ref.context;
  return function (effect) {
    var results = (0, _lodash.map)(containers, function (container, id) {
      return [id, evaluate(container.conditions.conditions, effect, container.conditions.relation)];
    });
    results.forEach(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          id = _ref3[0],
          result = _ref3[1];

      var postboxNode = document.getElementById(id);
      var containerNode = document.querySelector(".container-".concat(id));
      var isMounted = !!containerNode.dataset.mounted;

      if (postboxNode) {
        postboxNode.hidden = !result;
      }

      if (containerNode) {
        if (result && !isMounted) {
          (0, _containers.renderContainer)(containers[id], context);
        }

        if (!result && isMounted) {
          delete containerNode.dataset.mounted; // Rely on React's internals instead of `unmountComponentAtNode`
          // due to https://github.com/facebook/react/issues/13690.
          // TODO: Conditionally render the fields in the container, this way
          // we can move away from mount/unmount cycles.

          containerNode._reactRootContainer.unmount();
        }
      }
    });
  };
}