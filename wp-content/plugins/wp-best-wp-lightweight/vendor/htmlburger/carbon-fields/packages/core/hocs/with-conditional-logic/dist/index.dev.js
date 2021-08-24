"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withConditionalLogic;

var _compose = require("@wordpress/compose");

var _data = require("@wordpress/data");

var _refractCallbag = require("refract-callbag");

var _i18n = require("@wordpress/i18n");

var _lodash = require("lodash");

var _compare = _interopRequireDefault(require("./compare"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint no-console: [ 'error', { allow: [ 'error' ] } ] */

/**
 * External dependencies.
 */

/**
 * Internal dependencies.
 */

/**
 * Creates a high-order components which adds ability to evalute
 * the conditional logic of fields.
 *
 * @param  {Function} input
 * @param  {Function} output
 * @return {Function}
 */
function withConditionalLogic(input, output) {
  /**
   * The function that controls the stream of side-effects.
   *
   * @param  {Object} component
   * @param  {Object} props
   * @return {Object}
   */
  function aperture(component, props) {
    if ((0, _lodash.isEmpty)(props.field.conditional_logic)) {
      return;
    }

    return input(props, component);
  }
  /**
   * The function that causes the side effects.
   *
   * @param  {Object} props
   * @return {Function}
   */


  function handler(props) {
    return function (effect) {
      var fieldExists = (0, _lodash.has)(effect, props.name) || (0, _lodash.find)(effect, ['id', props.id]);

      if (!fieldExists) {
        return;
      }

      var _props$field$conditio = props.field.conditional_logic,
          relation = _props$field$conditio.relation,
          rules = _props$field$conditio.rules;
      var data = output(props, effect);
      var results = rules.reduce(function (accumulator, rule) {
        if (!(0, _lodash.has)(data, rule.field)) {
          // eslint-disable-next-line
          console.error((0, _i18n.sprintf)((0, _i18n.__)('An unknown field is used in condition - "%s"', 'carbon-fields-ui'), rule.field));
          return accumulator.concat(false);
        } // TODO: Handle the conditional logic for chained fields. Probably we'll need the id of each sibling.
        // See https://github.com/htmlburger/carbon-fields/commit/3628a86c8840c8323f45c829a96c512a9985ad10#diff-b1aea524a4b1ab510e28e01a54c25fcd


        var result = (0, _compare["default"])(data[rule.field], rule.compare, rule.value);
        return accumulator.concat(result);
      }, []);
      var isVisible = false;

      switch (relation) {
        case 'AND':
          isVisible = (0, _lodash.every)(results);
          break;

        case 'OR':
          isVisible = (0, _lodash.some)(results);
          break;
      }

      if (isVisible) {
        props.showField(props.id);
      } else {
        props.hideField(props.id);
      }
    };
  }

  return (0, _compose.createHigherOrderComponent)(function (OriginalComponent) {
    return (0, _compose.compose)((0, _data.withDispatch)(function (dispatch) {
      var _dispatch = dispatch('carbon-fields/core'),
          showField = _dispatch.showField,
          hideField = _dispatch.hideField;

      return {
        showField: showField,
        hideField: hideField
      };
    }), (0, _data.withSelect)(function (select, props) {
      return {
        visible: select('carbon-fields/core').isFieldVisible(props.id)
      };
    }), (0, _refractCallbag.withEffects)(aperture, {
      handler: handler
    }))(OriginalComponent);
  }, 'withConditionalLogic');
}