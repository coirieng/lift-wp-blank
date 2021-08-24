"use strict";

(function () {
  var contextmenu = function () {
    'use strict';

    var Cell = function Cell(initial) {
      var value = initial;

      var get = function get() {
        return value;
      };

      var set = function set(v) {
        value = v;
      };

      var clone = function clone() {
        return Cell(get());
      };

      return {
        get: get,
        set: set,
        clone: clone
      };
    };

    var global = tinymce.util.Tools.resolve('tinymce.PluginManager');

    var get = function get(visibleState) {
      var isContextMenuVisible = function isContextMenuVisible() {
        return visibleState.get();
      };

      return {
        isContextMenuVisible: isContextMenuVisible
      };
    };

    var Api = {
      get: get
    };

    var shouldNeverUseNative = function shouldNeverUseNative(editor) {
      return editor.settings.contextmenu_never_use_native;
    };

    var getContextMenu = function getContextMenu(editor) {
      return editor.getParam('contextmenu', 'link openlink image inserttable | cell row column deletetable');
    };

    var Settings = {
      shouldNeverUseNative: shouldNeverUseNative,
      getContextMenu: getContextMenu
    };
    var global$1 = tinymce.util.Tools.resolve('tinymce.dom.DOMUtils');

    var getUiContainer = function getUiContainer(editor) {
      return global$1.DOM.select(editor.settings.ui_container)[0];
    };

    var nu = function nu(x, y) {
      return {
        x: x,
        y: y
      };
    };

    var transpose = function transpose(pos, dx, dy) {
      return nu(pos.x + dx, pos.y + dy);
    };

    var fromPageXY = function fromPageXY(e) {
      return nu(e.pageX, e.pageY);
    };

    var fromClientXY = function fromClientXY(e) {
      return nu(e.clientX, e.clientY);
    };

    var transposeUiContainer = function transposeUiContainer(element, pos) {
      if (element && global$1.DOM.getStyle(element, 'position', true) !== 'static') {
        var containerPos = global$1.DOM.getPos(element);
        var dx = containerPos.x - element.scrollLeft;
        var dy = containerPos.y - element.scrollTop;
        return transpose(pos, -dx, -dy);
      } else {
        return transpose(pos, 0, 0);
      }
    };

    var transposeContentAreaContainer = function transposeContentAreaContainer(element, pos) {
      var containerPos = global$1.DOM.getPos(element);
      return transpose(pos, containerPos.x, containerPos.y);
    };

    var getPos = function getPos(editor, e) {
      if (editor.inline) {
        return transposeUiContainer(getUiContainer(editor), fromPageXY(e));
      } else {
        var iframePos = transposeContentAreaContainer(editor.getContentAreaContainer(), fromClientXY(e));
        return transposeUiContainer(getUiContainer(editor), iframePos);
      }
    };

    var Coords = {
      getPos: getPos
    };
    var global$2 = tinymce.util.Tools.resolve('tinymce.ui.Factory');
    var global$3 = tinymce.util.Tools.resolve('tinymce.util.Tools');

    var renderMenu = function renderMenu(editor, visibleState) {
      var menu, contextmenu;
      var items = [];
      contextmenu = Settings.getContextMenu(editor);
      global$3.each(contextmenu.split(/[ ,]/), function (name) {
        var item = editor.menuItems[name];

        if (name === '|') {
          item = {
            text: name
          };
        }

        if (item) {
          item.shortcut = '';
          items.push(item);
        }
      });

      for (var i = 0; i < items.length; i++) {
        if (items[i].text === '|') {
          if (i === 0 || i === items.length - 1) {
            items.splice(i, 1);
          }
        }
      }

      menu = global$2.create('menu', {
        items: items,
        context: 'contextmenu',
        classes: 'contextmenu'
      });
      menu.uiContainer = getUiContainer(editor);
      menu.renderTo(getUiContainer(editor));
      menu.on('hide', function (e) {
        if (e.control === this) {
          visibleState.set(false);
        }
      });
      editor.on('remove', function () {
        menu.remove();
        menu = null;
      });
      return menu;
    };

    var show = function show(editor, pos, visibleState, menu) {
      if (menu.get() === null) {
        menu.set(renderMenu(editor, visibleState));
      } else {
        menu.get().show();
      }

      menu.get().moveTo(pos.x, pos.y);
      visibleState.set(true);
    };

    var ContextMenu = {
      show: show
    };

    var isNativeOverrideKeyEvent = function isNativeOverrideKeyEvent(editor, e) {
      return e.ctrlKey && !Settings.shouldNeverUseNative(editor);
    };

    var setup = function setup(editor, visibleState, menu) {
      editor.on('contextmenu', function (e) {
        if (isNativeOverrideKeyEvent(editor, e)) {
          return;
        }

        e.preventDefault();
        ContextMenu.show(editor, Coords.getPos(editor, e), visibleState, menu);
      });
    };

    var Bind = {
      setup: setup
    };
    global.add('contextmenu', function (editor) {
      var menu = Cell(null),
          visibleState = Cell(false);
      Bind.setup(editor, visibleState, menu);
      return Api.get(visibleState);
    });

    function Plugin() {}

    return Plugin;
  }();
})();