"use strict";!function(i){window.InlineShortcodeView_vc_column=window.InlineShortcodeViewContainerWithParent.extend({controls_selector:"#vc_controls-template-vc_column",resizeDomainName:"columnSize",_x:0,css_width:12,prepend:!1,initialize:function(s){window.InlineShortcodeView_vc_column.__super__.initialize.call(this,s),_.bindAll(this,"startChangeSize","stopChangeSize","resize")},render:function(){return window.InlineShortcodeView_vc_column.__super__.render.call(this),this.prepend=!1,i('<div class="vc_resize-bar"></div>').appendTo(this.$el).mousedown(this.startChangeSize),this.setColumnClasses(),this.customCssClassReplace(),this},destroy:function(s){var e=this.model.get("parent_id");window.InlineShortcodeView_vc_column.__super__.destroy.call(this,s),vc.shortcodes.where({parent_id:e}).length||vc.shortcodes.get(e).destroy()},customCssClassReplace:function(){var s=this.$el.find(".wpb_column").attr("class"),e=/.*(vc_custom_\d+).*/,i=!(!s||!s.match)&&s.match(e);i&&i[1]&&(this.$el.addClass(i[1]),this.$el.find(".wpb_column").attr("class",s.replace(i[1],"").trim()))},setColumnClasses:function(){var s=this.getParam("offset")||"",e=this.getParam("width")||"1/1",i=this.$el.find("> .wpb_column");this.css_class_width=this.convertSize(e),this.css_class_width!==e&&(this.css_class_width=this.css_class_width.replace(/[^\d]/g,"")),i.removeClass("vc_col-sm-"+this.css_class_width),s.match(/vc_col\-sm\-\d+/)||this.$el.addClass("vc_col-sm-"+this.css_class_width),vc.responsive_disabled&&(s=s.replace(/vc_col\-(lg|md|xs)[^\s]*/g,"")),_.isEmpty(s)||(i.removeClass(s),this.$el.addClass(s))},startChangeSize:function(s){var e=this.getParam(e)||12;this._grid_step=this.parent_view.$el.width()/e,vc.frame_window.jQuery("body").addClass("vc_column-dragging").disableSelection(),this._x=parseInt(s.pageX,10),vc.$page.bind("mousemove."+this.resizeDomainName,this.resize),i(vc.frame_window.document).on("mouseup",this.stopChangeSize)},stopChangeSize:function(){this._x=0,vc.frame_window.jQuery("body").removeClass("vc_column-dragging").enableSelection(),vc.$page.unbind("mousemove."+this.resizeDomainName)},resize:function(s){var e,i=this.model.get("params"),t=s.pageX-this._x;Math.abs(t)<this._grid_step||(this._x=parseInt(s.pageX,10),e=""+this.css_class_width,0<t?this.css_class_width+=1:t<0&&--this.css_class_width,12<this.css_class_width&&(this.css_class_width=12),this.css_class_width<1&&(this.css_class_width=1),i.width=vc.getColumnSize(this.css_class_width),this.model.save({params:i},{silent:!0}),this.$el.removeClass("vc_col-sm-"+e).addClass("vc_col-sm-"+this.css_class_width))},convertSize:function(s){var e="vc_col-sm-",i=s?s.split("/"):[1,1],t=_.range(1,13),c=!_.isUndefined(i[0])&&0<=_.indexOf(t,parseInt(i[0],10))&&parseInt(i[0],10),n=!_.isUndefined(i[1])&&0<=_.indexOf(t,parseInt(i[1],10))&&parseInt(i[1],10);return"5"===i[1]?s:!1!==c&&!1!==n?e+12*c/n:e+"12"},allowAddControl:function(){return vc_user_access().shortcodeAll("vc_column")}})}(window.jQuery);