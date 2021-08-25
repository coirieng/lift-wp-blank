"use strict";

(function ($) {
  'use strict';

  window.InlineShortcodeView_vc_round_chart = window.InlineShortcodeView.extend({
    render: function render() {
      var model_id = this.model.get('id');

      window.InlineShortcodeView_vc_round_chart.__super__.render.call(this);

      vc.frame_window.vc_iframe.addActivity(function () {
        this.vc_round_charts(model_id);
      });
      return this;
    },
    parentChanged: function parentChanged() {
      var modelId = this.model.get('id');

      window.InlineShortcodeView_vc_round_chart.__super__.parentChanged.call(this);

      _.defer(function () {
        vc.frame_window.vc_round_charts(modelId);
      });

      return this;
    },
    remove: function remove() {
      var id = this.$el.find('.vc_round-chart').data('vcChartId');

      window.InlineShortcodeView_vc_round_chart.__super__.remove.call(this);

      if (id && undefined !== vc.frame_window.Chart.instances[id]) {
        delete vc.frame_window.Chart.instances[id];
      }
    }
  });
})(window.jQuery);