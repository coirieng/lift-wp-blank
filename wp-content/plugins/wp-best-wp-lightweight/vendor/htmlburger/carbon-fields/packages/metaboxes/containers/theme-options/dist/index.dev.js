"use strict";

var _hooks = require("@wordpress/hooks");

var _refractCallbag = require("refract-callbag");

var _callbagBasics = require("callbag-basics");

require("./style.scss");

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
  return (0, _callbagBasics.pipe)((0, _callbagBasics.fromEvent)(window, 'scroll'), (0, _callbagBasics.map)(function () {
    return window.jQuery(window).scrollTop();
  }));
}
/**
 * The function that causes the side effects.
 *
 * @param  {Object} props
 * @return {Function}
 */


function handler() {
  return function (windowTopOffset) {
    var $container = window.jQuery('.carbon-box:first');
    var $panel = window.jQuery('#postbox-container-1');
    var $bar = window.jQuery('#wpadminbar');
    var offset = $bar.height() + 10;
    var threshold = $container.offset().top - offset; // In some situations the threshold is negative number because
    // the container element isn't rendered yet.

    if (threshold > 0) {
      $panel.toggleClass('fixed', windowTopOffset >= threshold).css('top', offset);
    }
  };
}

(0, _hooks.addFilter)('carbon-fields.theme_options.classic', 'carbon-fields/metaboxes', (0, _refractCallbag.withEffects)(aperture, {
  handler: handler
}));