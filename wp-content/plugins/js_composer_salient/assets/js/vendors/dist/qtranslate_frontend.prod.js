"use strict";!function(r){r("#vc_vendor_qtranslate_langs_front").on("change",function(){vc.closeActivePanel(),r("#vc_logo").addClass("vc_ui-wp-spinner"),window.location.href=r(this).val()}),vc.ShortcodesBuilder.prototype.getContent=function(){var t,e=r("#vc_vendor_qtranslate_postcontent"),n=e.attr("data-lang"),o=e.val();return vc.shortcodes.sort(),t=this.modelsToString(vc.shortcodes.where({parent_id:!1})),qtrans_integrate(n,t,o)},vc.ShortcodesBuilder.prototype.getTitle=function(){var t=r("#vc_vendor_qtranslate_posttitle"),e=t.attr("data-lang"),n=t.val();return qtrans_integrate(e,vc.title,n)}}(window.jQuery);