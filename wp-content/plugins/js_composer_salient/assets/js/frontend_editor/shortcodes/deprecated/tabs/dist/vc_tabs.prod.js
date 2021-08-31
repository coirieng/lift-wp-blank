"use strict";!function(i){window.vc.cloneMethod_vc_tab=function(t,e){return t.params=_.extend({},t.params),t.params.tab_id=vc_guid()+"-cl",_.isUndefined(e.get("active_before_cloned"))||(t.active_before_cloned=e.get("active_before_cloned")),t},window.InlineShortcodeView_vc_tabs=window.InlineShortcodeView_vc_row.extend({events:{"click > :first > .vc_empty-element":"addElement","click > :first > .wpb_wrapper > .ui-tabs-nav > li":"setActiveTab"},already_build:!1,active_model_id:!1,$tabsNav:!1,active:0,render:function(){return _.bindAll(this,"stopSorting"),this.$tabs=this.$el.find("> .wpb_tabs"),window.InlineShortcodeView_vc_tabs.__super__.render.call(this),this.buildNav(),this},buildNav:function(){var e=this.tabsControls();this.$tabs.find('> .wpb_wrapper > .vc_element[data-tag="vc_tab"]').each(function(t){i("li:eq("+t+")",e).attr("data-m-id",i(this).data("model-id"))})},changed:function(){this.allowAddControlOnEmpty()&&0===this.$el.find(".vc_element[data-tag]").length?this.$el.addClass("vc_empty").find("> :first > div").addClass("vc_empty-element"):this.$el.removeClass("vc_empty").find("> :first > div").removeClass("vc_empty-element"),this.setSorting()},setActiveTab:function(t){var e=i(t.currentTarget);this.active_model_id=e.data("m-id")},tabsControls:function(){return this.$tabsNav?this.$tabsNav:this.$tabsNav=this.$el.find(".wpb_tabs_nav")},buildTabs:function(t){var e;t&&(this.active_model_id=t.get("id"),this.active=this.tabsControls().find("[data-m-id="+this.active_model_id+"]").index()),!1===this.active_model_id&&(e=this.tabsControls().find("li:first"),this.active=e.index(),this.active_model_id=e.data("m-id")),this.checkCount()||window.vc.frame_window.vc_iframe.buildTabs(this.$tabs,this.active)},checkCount:function(){return this.$tabs.find('> .wpb_wrapper > .vc_element[data-tag="vc_tab"]').length!=this.$tabs.find("> .wpb_wrapper > .vc_element.vc_vc_tab").length},beforeUpdate:function(){this.$tabs.find(".wpb_tabs_heading").remove(),window.vc.frame_window.vc_iframe.destroyTabs(this.$tabs)},updated:function(){window.InlineShortcodeView_vc_tabs.__super__.updated.call(this),this.$tabs.find(".wpb_tabs_nav:first").remove(),this.buildNav(),window.vc.frame_window.vc_iframe.buildTabs(this.$tabs),this.setSorting()},rowsColumnsConverted:function(){_.each(window.vc.shortcodes.where({parent_id:this.model.get("id")}),function(t){t.view.rowsColumnsConverted&&t.view.rowsColumnsConverted()})},addTab:function(t){if(this.updateIfExistTab(t))return!1;var e=this.buildControlHtml(t);return t.get("cloned")&&this.tabsControls().find("[data-m-id="+t.get("cloned_from").id+"]").length?t.get("cloned_appended")||(e.appendTo(this.tabsControls()),t.set("cloned_appended",!0)):e.appendTo(this.tabsControls()),this.changed(),!0},cloneTabAfter:function(t){this.$tabs.find("> .wpb_wrapper > .wpb_tabs_nav > div").remove(),this.buildTabs(t)},updateIfExistTab:function(t){var e=this.tabsControls().find("[data-m-id="+t.get("id")+"]");return!!e.length&&(e.attr("aria-controls","tab-"+t.getParam("tab_id")).find("a").attr("href","#tab-"+t.getParam("tab_id")).text(t.getParam("title")),!0)},buildControlHtml:function(t){t.get("params");var e=i('<li data-m-id="'+t.get("id")+'"><a href="#tab-'+t.getParam("tab_id")+'"></a></li>');return e.data("model",t),e.find("> a").text(t.getParam("title")),e},addElement:function(t){t&&t.preventDefault&&t.preventDefault(),(new window.vc.ShortcodesBuilder).create({shortcode:"vc_tab",params:{tab_id:vc_guid()+"-"+this.tabsControls().find("li").length,title:this.getDefaultTabTitle()},parent_id:this.model.get("id")}).render()},getDefaultTabTitle:function(){return window.i18nLocale.tab},setSorting:function(){this.hasUserAccess()&&window.vc.frame_window.vc_iframe.setTabsSorting(this)},stopSorting:function(){this.tabsControls().find("> li").each(function(t,e){i(this).data("model").save({order:t},{silent:!0})})},placeElement:function(t){var e=window.vc.shortcodes.get(t.data("modelId"));e&&e.get("place_after_id")?(t.insertAfter(window.vc.$page.find("[data-model-id="+e.get("place_after_id")+"]")),e.unset("place_after_id")):t.insertAfter(this.tabsControls()),this.changed()},removeTab:function(t){if(1===window.vc.shortcodes.where({parent_id:this.model.get("id")}).length)return this.model.destroy();var e=this.tabsControls().find("[data-m-id="+t.get("id")+"]"),i=e.index();this.tabsControls().find("[data-m-id]:eq("+(i+1)+")").length?window.vc.frame_window.vc_iframe.setActiveTab(this.$tabs,i+1):this.tabsControls().find("[data-m-id]:eq("+(i-1)+")").length?window.vc.frame_window.vc_iframe.setActiveTab(this.$tabs,i-1):window.vc.frame_window.vc_iframe.setActiveTab(this.$tabs,0),e.remove()},clone:function(t){_.each(window.vc.shortcodes.where({parent_id:this.model.get("id")}),function(t){t.set("active_before_cloned",this.active_model_id===t.get("id"))},this),window.InlineShortcodeView_vc_tabs.__super__.clone.call(this,t)}})}(window.jQuery);