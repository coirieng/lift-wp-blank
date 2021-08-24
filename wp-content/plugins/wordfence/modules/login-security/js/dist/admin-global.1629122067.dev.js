"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function ($) {
  window['GWFLS'] = {
    init: function init() {
      this.register_create_user_events();
      $('.wfls-persistent-notice').on('click', 'button', function () {
        GWFLS.ajax('wordfence_ls_dismiss_persistent_notice', {
          notice_id: $(this).parent('.notice').attr('id')
        });
      });
    },

    /**
     * Sends a WP AJAX call, automatically adding our nonce.
     *
     * @param string action
     * @param string|array|object payload
     * @param function successCallback
     * @param function failureCallback
     */
    ajax: function ajax(action, payload, successCallback, failureCallback) {
      if (typeof payload == 'string') {
        if (payload.length > 0) {
          payload += '&';
        }

        payload += 'action=' + action + '&nonce=' + GWFLSVars.nonce;
      } else if (_typeof(payload) == 'object' && payload instanceof Array) {
        // jQuery serialized form data
        payload.push({
          name: 'action',
          value: action
        });
        payload.push({
          name: 'nonce',
          value: GWFLSVars.nonce
        });
      } else if (_typeof(payload) == 'object') {
        payload['action'] = action;
        payload['nonce'] = GWFLSVars.nonce;
      }

      $.ajax({
        type: 'POST',
        url: GWFLSVars.ajaxurl,
        dataType: "json",
        data: payload,
        success: function success(json) {
          typeof successCallback == 'function' && successCallback(json);
        },
        error: function error() {
          typeof failureCallback == 'function' && failureCallback();
        }
      });
    },
    dismiss_notice: function dismiss_notice(nid) {
      this.ajax('wordfence_ls_dismiss_notice', {
        id: nid
      }, function (res) {
        $('.wfls-notice[data-notice-id="' + nid + '"]').fadeOut();
      }, function () {
        $('.wfls-notice[data-notice-id="' + nid + '"]').fadeOut();
      });
    },
    register_create_user_events: function register_create_user_events() {
      var container = $('#wfls-grace-period-toggle-container');

      if (container.length) {
        var gracePeriodToggle = container.detach().find('tr');
        $('#createuser #role').on('change', function () {
          var select = $(this);
          gracePeriodToggle.detach();
          var role = select.val();
          var row = select.closest('tr');

          if (role === 'administrator') {
            gracePeriodToggle.insertAfter(row);
          }
        }).trigger('change');
      }
    }
  };
  $(function () {
    GWFLS.init();
  });
})(jQuery);