"use strict";window.jQuery,window.InlineShortcodeView_vc_round_chart=window.InlineShortcodeView.extend({render:function(){var e=this.model.get("id");return window.InlineShortcodeView_vc_round_chart.__super__.render.call(this),vc.frame_window.vc_iframe.addActivity(function(){this.vc_round_charts(e)}),this},parentChanged:function(){var e=this.model.get("id");return window.InlineShortcodeView_vc_round_chart.__super__.parentChanged.call(this),_.defer(function(){vc.frame_window.vc_round_charts(e)}),this},remove:function(){var e=this.$el.find(".vc_round-chart").data("vcChartId");window.InlineShortcodeView_vc_round_chart.__super__.remove.call(this),e&&void 0!==vc.frame_window.Chart.instances[e]&&delete vc.frame_window.Chart.instances[e]}});