"use strict";

(function () {
  'use strict';

  window.InlineShortcodeView_vc_column_text = window.InlineShortcodeView.extend({
    initialize: function initialize(options) {
      window.InlineShortcodeView_vc_column_text.__super__.initialize.call(this, options);

      _.bindAll(this, 'setupEditor', 'updateContent');
    },
    setupEditor: function setupEditor(ed) {
      ed.on('keyup', this.updateContent);
    },
    updateContent: function updateContent() {
      var params = this.model.get('params');
      params.content = tinyMCE.activeEditor.getContent();
      this.model.save({
        params: params
      }, {
        silent: true
      });
    }
  });
})();