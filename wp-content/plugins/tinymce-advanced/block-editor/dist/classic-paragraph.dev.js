"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function o(r) {
    if (t[r]) return t[r].exports;
    var n = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }

  o.m = e, o.c = t, o.d = function (e, t, r) {
    o.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, o.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, o.t = function (e, t) {
    if (1 & t && (e = o(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (o.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      o.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, o.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return o.d(t, "a", t), t;
  }, o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, o.p = "", o(o.s = 1);
}([, function (e, t, o) {
  "use strict";

  o.r(t);
  var _window = window,
      r = _window.wp,
      n = window._.debounce,
      c = window.tadvBlockRegister,
      _r$blockEditor = r.blockEditor,
      a = _r$blockEditor.BlockControls,
      i = _r$blockEditor.useBlockProps,
      s = r.components.ToolbarGroup,
      _r$element = r.element,
      l = _r$element.Component,
      d = _r$element.createElement,
      u = _r$element.Fragment,
      p = _r$element.useEffect,
      m = _r$element.useRef,
      _r$keycodes = r.keycodes,
      b = _r$keycodes.BACKSPACE,
      f = _r$keycodes.DELETE,
      g = _r$keycodes.F10,
      k = _r$keycodes.isKeyboardEvent;
  var _wp$element = wp.element,
      y = _wp$element.RawHTML,
      h = _wp$element.createElement;
  var _wp$richText = wp.richText,
      v = _wp$richText.join,
      w = _wp$richText.split,
      _ = _wp$richText.create,
      B = _wp$richText.toHTMLString,
      _wp$blocks = wp.blocks,
      C = _wp$blocks.createBlock,
      E = _wp$blocks.getBlockContent;
  var P = {
    from: function () {
      var e = [];
      return ["core-embed/twitter", "core-embed/youtube", "core-embed/facebook", "core-embed/instagram", "core-embed/wordpress", "core-embed/soundcloud", "core-embed/spotify", "core-embed/flickr", "core-embed/vimeo", "core-embed/animoto", "core-embed/cloudup", "core-embed/collegehumor", "core-embed/crowdsignal", "core-embed/dailymotion", "core-embed/hulu", "core-embed/imgur", "core-embed/issuu", "core-embed/kickstarter", "core-embed/meetup-com", "core-embed/mixcloud", "core-embed/polldaddy", "core-embed/reddit", "core-embed/reverbnation", "core-embed/screencast", "core-embed/scribd", "core-embed/slideshare", "core-embed/smugmug", "core-embed/speaker", "core-embed/speaker-deck", "core-embed/ted", "core-embed/tumblr", "core-embed/videopress", "core-embed/wordpress-tv", "core-embed/amazon-kindle"].forEach(function (t) {
        e.push({
          type: "block",
          blocks: [t],
          transform: function transform(e) {
            if (!e.url) return C("tadv/classic-paragraph", {
              content: ""
            });
            var o = E(C(t, e));
            var r,
                n = "<p>" + e.url + "</p>";
            return o && o.indexOf("</figcaption>") > -1 && o.replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/, function (e, t) {
              r = t;
            }), n += r ? "<p>" + r + "</p>" : '<p><br data-mce-bogus="1"></p>', C("tadv/classic-paragraph", {
              content: n
            });
          }
        });
      }), ["core/paragraph", "core/image", "core/heading", "core/gallery", "core/list", "core/quote", "core/code", "core/columns", "core/freeform", "core/html", "core/media-text", "core/missing", "core/preformatted", "core/pullquote", "core/subhead", "core/table", "core/text-columns", "core/verse"].forEach(function (t) {
        e.push({
          type: "block",
          blocks: [t],
          transform: function transform(e) {
            var o = E(C(t, e));
            return (!o || o.indexOf("</div>") > -1) && (o += '<p><br data-mce-bogus="1"></p>'), C("tadv/classic-paragraph", {
              content: o
            });
          }
        });
      }), e.push({
        type: "raw",
        priority: 21,
        isMatch: function isMatch() {
          return !0;
        }
      }, {
        type: "block",
        isMultiBlock: !0,
        blocks: ["core/paragraph"],
        transform: function transform(e) {
          var t = B({
            value: v(e.map(function (_ref) {
              var e = _ref.content;
              return _({
                html: e
              });
            }), "\u2028"),
            multilineTag: "p"
          });
          return C("tadv/classic-paragraph", {
            content: t
          });
        }
      }, {
        type: "block",
        isMultiBlock: !0,
        blocks: ["tadv/classic-paragraph"],
        transform: function transform(e) {
          var t = B({
            value: v(e.map(function (_ref2) {
              var e = _ref2.content;
              return _({
                html: e
              });
            }), "\u2028")
          });
          return C("tadv/classic-paragraph", {
            content: t
          });
        }
      }, {
        type: "block",
        isMultiBlock: !0,
        blocks: ["core/freeform"],
        transform: function transform(e) {
          var t = B({
            value: v(e.map(function (_ref3) {
              var e = _ref3.content;
              return _({
                html: e
              });
            }), "\u2028")
          });
          return C("tadv/classic-paragraph", {
            content: t
          });
        }
      }), e;
    }(),
    to: [{
      type: "block",
      blocks: ["core/freeform"],
      transform: function transform(e) {
        return C("core/freeform", e);
      }
    }, {
      type: "block",
      blocks: ["core/html"],
      transform: function transform(e) {
        return C("core/html", e);
      }
    }]
  };
  var x = wp.i18n.__,
      T = window.tadvBlockRegister,
      _name$category$attrib = {
    name: "tadv/classic-paragraph",
    category: "common",
    attributes: {
      content: {
        type: "string",
        source: "html"
      },
      align: {
        type: "string"
      }
    }
  },
      M = _name$category$attrib.name,
      S = _name$category$attrib.attributes,
      L = _name$category$attrib.category;
  var N = {
    name: M,
    attributes: S,
    category: L,
    title: T.classicParagraphTitle,
    description: T.description,
    keywords: [x("text")],
    icon: "welcome-widgets-menus",
    supports: {
      className: !1,
      customClassName: !1,
      reusable: !0
    },
    merge: function merge(e, t) {
      return {
        content: (e.content || "") + (t.content || "")
      };
    },
    transforms: P,
    edit: function edit(_ref4) {
      var e = _ref4.clientId,
          t = _ref4.attributes.content,
          o = _ref4.setAttributes,
          a = _ref4.onReplace;
      var s = m(!1);
      return p(function () {
        if (!s.current) return;
        var o = window.tinymce.get("editor-".concat(e));
        var r;
        o && (r = o.getContent()), r !== t && o.setContent(t || "");
      }, [t]), p(function () {
        var _window$wpEditorL10n$ = window.wpEditorL10n.tinymce,
            c = _window$wpEditorL10n$.baseURL,
            i = _window$wpEditorL10n$.suffix;

        function l(e) {
          var r;
          t && e.on("loadContent", function () {
            return e.setContent(t);
          }), e.on("blur", function () {
            r = e.selection.getBookmark(2, !0);
            var t = document.querySelector(".interface-interface-skeleton__content"),
                n = t.scrollTop;
            return o({
              content: e.getContent()
            }), e.once("focus", function () {
              r && (e.selection.moveToBookmark(r), t.scrollTop !== n && (t.scrollTop = n));
            }), !1;
          }), e.on("mousedown touchstart", function () {
            r = null;
          });
          var c = n(function () {
            var t = e.getContent();
            t !== e._lastChange && (e._lastChange = t, o({
              content: t
            }));
          }, 250);
          e.on("Paste Change input Undo Redo", c), e.on("remove", c.cancel), e.on("keydown", function (t) {
            k.primary(t, "z") && t.stopPropagation(), t.keyCode !== b && t.keyCode !== f || !function (e) {
              var t = e.getBody();
              return !(t.childNodes.length > 1) && (0 === t.childNodes.length || !(t.childNodes[0].childNodes.length > 1) && /^\n?$/.test(t.innerText || t.textContent));
            }(e) || (a([]), t.preventDefault(), t.stopImmediatePropagation());
            var o = t.altKey;
            o && t.keyCode === g && t.stopPropagation();
          }), e.on("init", function () {
            var t = e.getBody();
            t.ownerDocument.activeElement === t && (t.blur(), e.focus());
          });
        }

        function d() {
          var t = window.wpEditorL10n.tinymce.settings;
          r.oldEditor.initialize("editor-".concat(e), {
            tinymce: _objectSpread({}, t, {
              inline: !0,
              content_css: !1,
              fixed_toolbar_container: "#toolbar-".concat(e),
              setup: l
            })
          });
        }

        function u() {
          "complete" === document.readyState && d();
        }

        return s.current = !0, window.tinymce.EditorManager.overrideDefaults({
          base_url: c,
          suffix: i
        }), "complete" === document.readyState ? d() : document.addEventListener("readystatechange", u), function () {
          document.removeEventListener("readystatechange", u), r.oldEditor.remove("editor-".concat(e));
        };
      }, []), d("div", i(), d("div", {
        key: "toolbar",
        id: "toolbar-".concat(e),
        className: "block-library-classic__toolbar tma-classic-paragraph__toolbar",
        onClick: function onClick() {
          var t = window.tinymce.get("editor-".concat(e));
          t && t.focus();
        },
        "data-placeholder": c.classicParagraphTitle,
        onKeyDown: function onKeyDown(e) {
          e.stopPropagation(), e.nativeEvent.stopImmediatePropagation();
        }
      }), d("div", {
        key: "editor",
        id: "editor-".concat(e),
        className: "wp-block-freeform block-library-rich-text__tinymce tma-classic-paragraph"
      }));
    },
    save: function save(_ref5) {
      var e = _ref5.attributes;
      var t = e.content;
      return h(y, null, t);
    }
  };
  var _wp$data = wp.data,
      O = _wp$data.dispatch,
      j = _wp$data.select,
      _wp$blocks2 = wp.blocks,
      R = _wp$blocks2.createBlock,
      $ = _wp$blocks2.rawHandler;

  var D = function D() {
    var e = j("core/block-editor").getSelectedBlock();
    var t;

    if (e) {
      var _o = e.attributes.content;
      _o ? (/<p data-tadv-p="keep">/.test(_o) && (_o = _o.replace(/<p data-tadv-p="keep">/g, "<p>")), t = $({
        HTML: _o
      })) : t = R("core/paragraph"), O("core/block-editor").replaceBlocks(e.clientId, t);
    }
  };

  !function () {
    var e = window.wp,
        t = window.tadvBlockRegister;
    if (!e || !t) return;
    var o = e.element.createElement,
        r = e.i18n.__,
        n = e.hooks.addFilter,
        c = e.editPost.PluginBlockSettingsMenuItem,
        a = e.plugins.registerPlugin,
        _e$blocks = e.blocks,
        i = _e$blocks.registerBlockType,
        s = _e$blocks.setDefaultBlockName;
    t.classicParagraph ? (i("tadv/classic-paragraph", N), a("tadv-add-submenu", {
      render: function render() {
        return t.hybridMode && s("tadv/classic-paragraph"), o(c, {
          allowedBlocks: ["tadv/classic-paragraph"],
          icon: "screenoptions",
          label: r("Convert to Blocks"),
          onClick: D
        });
      }
    })) : t.hybridMode && a("tadv-set-default-block", {
      render: function render() {
        return s("core/freeform"), null;
      }
    });
  }();
}]);