"use strict";

(function ($, undef) {
  var global = this; // Namespace.

  global.FS = global.FS || {};

  global.FS.PostMessage = function () {
    var _is_child = false,
        _postman = new NoJQueryPostMessageMixin('postMessage', 'receiveMessage'),
        _callbacks = {},
        _base_url,
        _parent_url = decodeURIComponent(document.location.hash.replace(/^#/, '')),
        _parent_subdomain = _parent_url.substring(0, _parent_url.indexOf('/', 'https://' === _parent_url.substring(0, 'https://'.length) ? 8 : 7)),
        _init = function _init() {
      _postman.receiveMessage(function (e) {
        var data = JSON.parse(e.data);

        if (_callbacks[data.type]) {
          for (var i = 0; i < _callbacks[data.type].length; i++) {
            // Execute type callbacks.
            _callbacks[data.type][i](data.data);
          }
        }
      }, _base_url);
    },
        _hasParent = '' !== _parent_url,
        $window = $(window),
        $html = $('html');

    return {
      init: function init(url, iframes) {
        _base_url = url;

        _init(); // Automatically receive forward messages.


        FS.PostMessage.receiveOnce('forward', function (data) {
          window.location = data.url;
        });
        iframes = iframes || [];

        if (iframes.length > 0) {
          $window.on('scroll', function () {
            for (var i = 0; i < iframes.length; i++) {
              FS.PostMessage.postScroll(iframes[i]);
            }
          });
        }
      },
      init_child: function init_child() {
        this.init(_parent_subdomain);
        _is_child = true; // Post height of a child right after window is loaded.

        $(window).bind('load', function () {
          FS.PostMessage.postHeight(); // Post message that window was loaded.

          FS.PostMessage.post('loaded');
        });
      },
      hasParent: function hasParent() {
        return _hasParent;
      },
      postHeight: function postHeight(diff, wrapper) {
        diff = diff || 0;
        wrapper = wrapper || '#wrap_section';
        this.post('height', {
          height: diff + $(wrapper).outerHeight(true)
        });
      },
      postScroll: function postScroll(iframe) {
        this.post('scroll', {
          top: $window.scrollTop(),
          height: $window.height() - parseFloat($html.css('paddingTop')) - parseFloat($html.css('marginTop'))
        }, iframe);
      },
      post: function post(type, data, iframe) {
        console.debug('PostMessage.post', type);

        if (iframe) {
          // Post to iframe.
          _postman.postMessage(JSON.stringify({
            type: type,
            data: data
          }), iframe.src, iframe.contentWindow);
        } else {
          // Post to parent.
          _postman.postMessage(JSON.stringify({
            type: type,
            data: data
          }), _parent_url, window.parent);
        }
      },
      receive: function receive(type, callback) {
        console.debug('PostMessage.receive', type);
        if (undef === _callbacks[type]) _callbacks[type] = [];

        _callbacks[type].push(callback);
      },
      receiveOnce: function receiveOnce(type, callback) {
        if (this.is_set(type)) return;
        this.receive(type, callback);
      },
      // Check if any callbacks assigned to a specified message type.
      is_set: function is_set(type) {
        return undef != _callbacks[type];
      },
      parent_url: function parent_url() {
        return _parent_url;
      },
      parent_subdomain: function parent_subdomain() {
        return _parent_subdomain;
      }
    };
  }();
})(jQuery);