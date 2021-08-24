"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  var e = {};

  function o(r) {
    if (e[r]) return e[r].exports;
    var n = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
  }

  o.m = t, o.c = e, o.d = function (t, e, r) {
    o.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var r = Object.create(null);
    if (o.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) {
      o.d(r, n, function (e) {
        return t[e];
      }.bind(null, n));
    }
    return r;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 0);
}([function (t, e, o) {
  "use strict";

  o.r(e);
  var r = window.tadvBlockButtons,
      _window = window,
      n = _window.wp,
      c = window.lodash.get,
      a = n.element.createElement,
      _n$blockEditor = n.blockEditor,
      l = _n$blockEditor.InspectorControls,
      i = _n$blockEditor.PanelColorSettings,
      _n$richText = n.richText,
      s = _n$richText.registerFormatType,
      u = _n$richText.applyFormat,
      d = _n$richText.removeFormat,
      m = _n$richText.getActiveFormat;

  function p(t) {
    return (t = t.replace(/.*?(background-)?color:\s*/, "")).replace(/[; ]+$/, "");
  }

  var h = window.tadvBlockButtons || {},
      _window2 = window,
      v = _window2.wp,
      g = v.blockEditor.RichTextToolbarButton,
      _v$richText = v.richText,
      f = _v$richText.registerFormatType,
      b = _v$richText.removeFormat,
      y = v.element.createElement,
      k = v.components.ToolbarButton,
      w = h.strRemoveFormatting || "Clear formatting";
  var F;

  function T(t) {
    var e = [];
    return F || (F = h.formats_to_remove ? h.formats_to_remove.split(",") : ["core/bold", "core/italic", "core/code", "core/underline", "core/strikethrough", "core/text-color", "tadv/sup", "tadv/sub", "tadv/mark", "tadv/color-panel", "tadv/background-color-panel"]), t.forEach(function (t) {
      t && t.forEach(function (t) {
        F.indexOf(t.type) > -1 && -1 === e.indexOf(t.type) && e.push(t.type);
      });
    }), e;
  }

  function C(t) {
    var e = t.formats;
    if (!e.length) return t;
    var o = 0,
        r = e.length;
    t.end > t.start && (o = t.start, r = t.end, e = e.slice(o, r));
    var n = T(e);
    return n.length ? (n.forEach(function (e) {
      t = b(t, e, o, r);
    }), t) : t;
  }

  var _window3 = window,
      x = _window3.wp,
      _ref = (window.tadvBlockButtons, x.element),
      B = _ref.createElement,
      A = _ref.Fragment,
      N = x.i18n.__,
      E = x.components.ToolbarButton,
      _x$blockEditor = x.blockEditor,
      S = _x$blockEditor.RichTextToolbarButton,
      _ = _x$blockEditor.RichTextShortcut,
      _x$richText = x.richText,
      O = _x$richText.registerFormatType,
      P = _x$richText.getActiveFormat,
      R = _x$richText.toggleFormat,
      L = _x$richText.applyFormat,
      M = _x$richText.removeFormat,
      U = N("Strikethrough");

  function j(t, e, o) {
    e(R(t, {
      type: "core/strikethrough"
    })), o && o();
  }

  var _window4 = window,
      z = _window4.wp,
      _z$element = z.element,
      I = _z$element.createElement,
      G = _z$element.Fragment,
      H = z.i18n.__,
      V = z.components.ToolbarButton,
      _z$blockEditor = z.blockEditor,
      $ = _z$blockEditor.RichTextToolbarButton,
      q = _z$blockEditor.RichTextShortcut,
      _z$richText = z.richText,
      D = _z$richText.registerFormatType,
      J = _z$richText.getActiveFormat,
      K = _z$richText.toggleFormat,
      Q = _z$richText.remove,
      W = _z$richText.applyFormat,
      X = H("Inline Code");

  function Y(t, e, o) {
    e(K(t, {
      type: "core/code"
    })), o && o();
  }

  var _window5 = window,
      Z = _window5.wp,
      tt = window.tadvBlockButtons || {},
      _Z$element = Z.element,
      et = _Z$element.createElement,
      ot = _Z$element.Fragment,
      rt = Z.i18n.__,
      nt = Z.components.ToolbarButton,
      _Z$blockEditor = Z.blockEditor,
      ct = _Z$blockEditor.RichTextToolbarButton,
      at = _Z$blockEditor.RichTextShortcut,
      _Z$components = Z.components,
      lt = _Z$components.Path,
      it = _Z$components.SVG,
      _Z$richText = Z.richText,
      st = _Z$richText.registerFormatType,
      ut = _Z$richText.getActiveFormat,
      dt = _Z$richText.toggleFormat,
      mt = _Z$richText.applyFormat,
      pt = _Z$richText.removeFormat,
      ht = et(it, {
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    className: "dashicon tadv-mark-icon"
  }, et(lt, {
    "aria-hidden": "true",
    role: "img",
    focusable: "false",
    width: "20",
    height: "20",
    d: "M13.23 15h1.9L11 4H9L5 15h1.88l1.07-3h4.18zm-1.53-4.54H8.51L10 5.6z"
  })),
      vt = tt.strMark;

  function gt(t, e, o) {
    e(dt(t, {
      type: "tadv/mark"
    })), o && o();
  }

  var _window6 = window,
      ft = _window6.wp,
      bt = window.tadvBlockButtons || {},
      _ft$element = ft.element,
      yt = _ft$element.createElement,
      kt = _ft$element.Fragment,
      wt = ft.i18n.__,
      Ft = ft.components.ToolbarButton,
      _ft$blockEditor = ft.blockEditor,
      Tt = _ft$blockEditor.RichTextToolbarButton,
      Ct = _ft$blockEditor.RichTextShortcut,
      _ft$richText = ft.richText,
      xt = _ft$richText.registerFormatType,
      Bt = _ft$richText.getActiveFormat,
      At = _ft$richText.applyFormat,
      Nt = _ft$richText.removeFormat;

  function Et(t, e, o, r) {
    if (t) o(Nt(e, "core/underline"));else {
      o(At(e, {
        type: "core/underline",
        attributes: {
          style: "text-decoration: underline"
        }
      }));
    }
    r && r();
  }

  var _window7 = window,
      St = _window7.wp,
      _t = window.tadvBlockButtons,
      _St$element = St.element,
      Ot = _St$element.createElement,
      Pt = _St$element.Fragment,
      _St$richText = St.richText,
      Rt = _St$richText.registerFormatType,
      Lt = _St$richText.getActiveFormat,
      Mt = _St$richText.toggleFormat,
      Ut = St.components.ToolbarButton,
      _St$blockEditor = St.blockEditor,
      jt = _St$blockEditor.RichTextToolbarButton,
      zt = _St$blockEditor.RichTextShortcut,
      _St$components = St.components,
      It = _St$components.Path,
      Gt = _St$components.SVG,
      Ht = Ot(Gt, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, Ot(It, {
    "aria-hidden": "true",
    role: "img",
    focusable: "false",
    d: "M16.9 10.3l.8-1.3c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.2-.2-.4-.4-.7-.6-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.1 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3l-1.8 2.8h4.3v-1.2h-2.2zm-2.8-3.1h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
  })),
      Vt = Ot(Gt, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, Ot(It, {
    "aria-hidden": "true",
    role: "img",
    focusable: "false",
    d: "M16.9 18.3l.8-1.2c.4-.6.7-1.2.9-1.6.2-.4.3-.8.3-1.2 0-.3-.1-.7-.2-1-.1-.3-.4-.5-.6-.7-.3-.2-.6-.3-1-.3s-.8.1-1.1.2c-.3.1-.7.3-1 .6l.2 1.3c.3-.3.5-.5.8-.6s.6-.2.9-.2c.3 0 .5.1.7.2.2.2.2.4.2.7 0 .3-.1.5-.2.8-.1.3-.4.7-.8 1.3L15 19.4h4.3v-1.2h-2.4zM14.1 7.2h-2L9.5 11 6.9 7.2h-2l3.6 5.3L4.7 18h2l2.7-4 2.7 4h2l-3.8-5.5 3.8-5.3z"
  }));

  function $t(t, e, o, r) {
    o(Mt(e, {
      type: t
    })), r && r();
  }

  function qt(_ref2, c) {
    var t = _ref2.type,
        e = _ref2.tagName,
        o = _ref2.title,
        r = _ref2.character,
        n = _ref2.icon;
    Rt(t, {
      title: o,
      tagName: e,
      className: null,
      edit: function edit(_ref3) {
        var e = _ref3.value,
            a = _ref3.onChange,
            l = _ref3.onFocus,
            i = _ref3.isActive;
        var s = null;
        return c || (s = Ot(jt, {
          title: o,
          icon: n,
          onClick: function onClick() {
            return $t(t, e, a, l);
          },
          isActive: i,
          shortcutType: "primary",
          shortcutCharacter: r
        })), Ot(Pt, null, Ot(zt, {
          type: "primary",
          character: r,
          onUse: function onUse() {
            return $t(t, e, a);
          }
        }), s);
      }
    });
  }

  var _window8 = window,
      Dt = _window8.wp,
      Jt = Dt.element.createElement,
      Kt = Dt.data.select,
      Qt = Dt.hooks.addFilter,
      _Dt$components = Dt.components,
      Wt = _Dt$components.PanelBody,
      Xt = _Dt$components.Toolbar,
      Yt = Dt.blockEditor.InspectorControls,
      _Dt$richText = Dt.richText,
      Zt = _Dt$richText.registerFormatType,
      te = _Dt$richText.unregisterFormatType,
      ee = window.tadvBlockButtons || {},
      oe = ee.buttons ? ee.buttons.split(",") : [],
      re = ee.panelButtons ? ee.panelButtons.split(",") : [],
      ne = ee.unusedButtons ? ee.unusedButtons.split(",") : [],
      ce = {
    "tadv/mark": function tadvMark(t) {
      st("tadv/mark", {
        title: vt,
        tagName: "mark",
        className: null,
        edit: function edit(_ref4) {
          var e = _ref4.value,
              o = _ref4.onChange,
              r = _ref4.onFocus,
              n = _ref4.isActive;
          var c = null;
          return t || (c = et(ct, {
            title: vt,
            icon: ht,
            onClick: function onClick() {
              return gt(e, o, r);
            },
            className: "tadv-icon-button-mark",
            isActive: n,
            shortcutType: "access",
            shortcutCharacter: "m"
          })), et(ot, null, et(at, {
            type: "access",
            character: "m",
            onUse: function onUse() {
              return gt(e, o);
            }
          }), c);
        }
      });
    },
    "tadv/removeformat": function tadvRemoveformat(t) {
      f("tadv/removeformat", {
        title: w,
        tagName: "u",
        className: "remove-format",
        edit: function edit(_ref5) {
          var e = _ref5.value,
              o = _ref5.onChange,
              r = _ref5.onFocus,
              n = _ref5.isActive;
          return t ? null : y(g, {
            icon: "editor-removeformatting",
            title: w,
            onClick: function onClick() {
              return o(C(e));
            },
            isActive: null
          });
        }
      });
    },
    "core/code": function coreCode(t) {
      D("core/code", {
        title: X,
        tagName: "code",
        className: null,
        __unstableInputRule: function __unstableInputRule(t) {
          var _t2 = t,
              e = _t2.start,
              o = _t2.text;
          if ("`" !== o.slice(e - 1, e)) return t;
          var r = o.slice(0, e - 1).lastIndexOf("`");
          if (-1 === r) return t;
          var n = r,
              c = e - 2;
          return n === c ? t : (t = Q(t, n, n + 1), t = Q(t, c, c + 1), t = W(t, {
            type: "core/code"
          }, n, c));
        },
        edit: function edit(_ref6) {
          var e = _ref6.value,
              o = _ref6.onChange,
              r = _ref6.onFocus,
              n = _ref6.isActive;
          var c = null;
          return t || (c = I($, {
            icon: "editor-code",
            title: X,
            onClick: function onClick() {
              return Y(e, o, r);
            },
            isActive: n,
            shortcutType: "access",
            shortcutCharacter: "x"
          })), I(G, null, I(q, {
            type: "access",
            character: "x",
            onUse: function onUse() {
              return Y(e, o);
            }
          }), c);
        }
      });
    },
    "core/strikethrough": function coreStrikethrough(t) {
      O("core/strikethrough", {
        name: "core/strikethrough",
        title: U,
        tagName: "s",
        className: null,
        edit: function edit(_ref7) {
          var e = _ref7.value,
              o = _ref7.onChange,
              r = _ref7.onFocus,
              n = _ref7.isActive;
          var c = null;
          return t || (c = B(S, {
            icon: "editor-strikethrough",
            title: U,
            onClick: function onClick() {
              return j(e, o, r);
            },
            isActive: n,
            shortcutType: "access",
            shortcutCharacter: "d"
          })), B(A, null, B(_, {
            type: "access",
            character: "d",
            onUse: function onUse() {
              return j(e, o);
            }
          }), c);
        }
      });
    },
    "core/underline": function coreUnderline(t) {
      xt("core/underline", {
        title: bt.strUnderline,
        tagName: "span",
        className: "underline",
        attributes: {
          style: "style"
        },
        edit: function edit(_ref8) {
          var e = _ref8.value,
              o = _ref8.onChange,
              r = _ref8.onFocus,
              n = _ref8.isActive;
          var c = null;
          return t || (c = yt(Tt, {
            title: bt.strUnderline,
            icon: "editor-underline",
            onClick: function onClick() {
              return Et(n, e, o, r);
            },
            className: null,
            isActive: n,
            shortcutType: "primary",
            shortcutCharacter: "u"
          })), yt(kt, null, yt(Ct, {
            type: "primary",
            character: "u",
            onUse: function onUse() {
              return Et(n, e, o);
            }
          }), c);
        }
      });
    },
    "core/subscript": function coreSubscript(t) {
      qt({
        type: "core/subscript",
        tagName: "sub",
        title: _t.strSubscript,
        character: ",",
        icon: Vt
      }, t);
    },
    "core/superscript": function coreSuperscript(t) {
      qt({
        type: "core/superscript",
        tagName: "sup",
        title: _t.strSuperscript,
        character: ".",
        icon: Ht
      }, t);
    }
  },
      ae = {
    "tadv/mark": function tadvMark(_ref9) {
      var t = _ref9.value,
          e = _ref9.onChange,
          o = _ref9.onFocus,
          r = _ref9.isActive;
      return et(nt, {
        key: "tadv/mark",
        icon: "editor-textcolor",
        className: "tadv-icon-button tadv-icon-button-mark",
        isActive: ut(t, "tadv/mark"),
        title: vt,
        onClick: function onClick() {
          return gt(t, e, o);
        }
      });
    },
    "tadv/removeformat": function tadvRemoveformat(_ref10) {
      var t = _ref10.value,
          e = _ref10.onChange,
          o = _ref10.onFocus,
          r = _ref10.isActive;
      return y(k, {
        key: "tadv/removeformat",
        icon: "editor-removeformatting",
        className: "tadv-icon-button",
        title: w,
        onClick: function onClick() {
          return e(C(t));
        }
      });
    },
    "core/code": function coreCode(_ref11) {
      var t = _ref11.value,
          e = _ref11.onChange,
          o = _ref11.onFocus,
          r = _ref11.isActive;
      return I(V, {
        key: "core/code",
        icon: "editor-code",
        className: "tadv-icon-button",
        isActive: J(t, "core/code"),
        title: X,
        onClick: function onClick() {
          return Y(t, e, o);
        }
      });
    },
    "core/strikethrough": function coreStrikethrough(_ref12) {
      var t = _ref12.value,
          e = _ref12.onChange,
          o = _ref12.onFocus,
          r = _ref12.isActive;
      return B(E, {
        key: "core/strikethrough",
        icon: "editor-strikethrough",
        className: "tadv-icon-button",
        isActive: P(t, "core/strikethrough"),
        title: U,
        onClick: function onClick() {
          return j(t, e, o);
        }
      });
    },
    "core/underline": function coreUnderline(_ref13) {
      var t = _ref13.value,
          e = _ref13.onChange,
          o = _ref13.onFocus,
          r = _ref13.isActive;
      var n = !!Bt(t, "core/underline");
      return yt(Ft, {
        key: "core/underline",
        icon: "editor-underline",
        className: "tadv-icon-button",
        isActive: n,
        title: bt.strUnderline,
        onClick: function onClick() {
          return Et(n, t, e, o);
        }
      });
    },
    "core/subscript": function coreSubscript(_ref14) {
      var t = _ref14.value,
          e = _ref14.onChange,
          o = _ref14.onFocus,
          r = _ref14.isActive;
      return Ot(Ut, {
        key: "core/subscript",
        icon: Vt,
        className: "tadv-icon-button",
        isActive: Lt(t, "core/subscript"),
        title: _t.strSubscript,
        onClick: function onClick() {
          return $t("core/subscript", t, e, o);
        }
      });
    },
    "core/superscript": function coreSuperscript(_ref15) {
      var t = _ref15.value,
          e = _ref15.onChange,
          o = _ref15.onFocus,
          r = _ref15.isActive;
      return Ot(Ut, {
        key: "core/superscript",
        icon: Ht,
        className: "tadv-icon-button",
        isActive: Lt(t, "core/superscript"),
        title: _t.strSuperscript,
        onClick: function onClick() {
          return $t("core/superscript", t, e, o);
        }
      });
    }
  };

  function le(t) {
    (function (t) {
      var e = Kt("core/rich-text").getFormatTypes();
      var o = !1;
      return e.forEach(function (e) {
        e.name === t && (o = !0);
      }), o;
    })(t) && te(t);
  }

  function ie() {
    ne.length && ne.forEach(function (t) {
      le(t);
    }), oe.forEach(function (t) {
      ce.hasOwnProperty(t) && (le(t), ce[t].call(null));
    }), re.length && (re.forEach(function (t) {
      -1 === oe.indexOf(t) && ce.hasOwnProperty(t) && (le(t), ce[t].call(null, "panel"));
    }), Zt("tadv/tadv-format-panel", {
      title: ee.strFormatting,
      tagName: "span",
      className: "tadv-format-panel",
      edit: function edit(_ref16) {
        var t = _ref16.value,
            e = _ref16.onChange,
            o = _ref16.onFocus,
            r = _ref16.isActive;
        var n = [];
        return re.forEach(function (c) {
          ae.hasOwnProperty(c) && n.push(ae[c].call(null, {
            value: t,
            onChange: e,
            onFocus: o,
            isActive: r
          }));
        }), Jt(Yt, null, Jt(Wt, {
          title: ee.strFormatting,
          className: "tadv-buttons-panel"
        }, Jt(Xt, null, n)));
      }
    })), function () {
      if (!r.colorPanel) return;
      var t = r.colorPanel.indexOf("tadv/color-panel") > -1,
          e = r.colorPanel.indexOf("tadv/background-color-panel") > -1;
      t && s("tadv/color-panel", {
        title: r.strTextColor,
        tagName: "span",
        className: "tadv-color",
        attributes: {
          style: "style"
        },
        edit: function edit(_ref17) {
          var t = _ref17.isActive,
              o = _ref17.value,
              n = _ref17.onChange;
          var s, h;

          if (t) {
            var _t3 = m(o, "tadv/color-panel"),
                _e = c(_t3, ["attributes", "style"]) || "",
                _r = m(o, "tadv/background-color-panel"),
                _n = c(_r, ["attributes", "style"]) || "";

            s = p(_e), h = p(_n);
          }

          var v = [{
            value: s,
            onChange: function onChange(t) {
              n(t ? u(o, {
                type: "tadv/color-panel",
                attributes: {
                  style: "color:" + t
                }
              }) : d(o, "tadv/color-panel"));
            },
            label: r.strTextColorLabel
          }];
          return e && v.push({
            value: h,
            onChange: function onChange(t) {
              n(t ? u(o, {
                type: "tadv/background-color-panel",
                attributes: {
                  style: "background-color:" + t
                }
              }) : d(o, "tadv/background-color-panel"));
            },
            label: r.strBackgroundColorLabel
          }), a(l, null, a(i, {
            title: r.strTextColor,
            initialOpen: !1,
            colorSettings: v
          }));
        }
      }), s("tadv/background-color-panel", {
        title: r.strBackgroundColor,
        tagName: "span",
        className: "tadv-background-color",
        attributes: {
          style: "style"
        },
        edit: function edit(_ref18) {
          var o = _ref18.isActive,
              n = _ref18.value,
              s = _ref18.onChange;
          if (!e || t) return null;
          var h;

          if (o) {
            var _t4 = m(n, "tadv/background-color-panel");

            h = p(c(_t4, ["attributes", "style"]) || "");
          }

          var v = [{
            value: h,
            onChange: function onChange(t) {
              s(t ? u(n, {
                type: "tadv/background-color-panel",
                attributes: {
                  style: "background-color:" + t
                }
              }) : d(n, "tadv/background-color-panel"));
            },
            label: r.strBackgroundColorLabel
          }];
          return a(l, null, a(i, {
            title: r.strTextColor,
            initialOpen: !1,
            colorSettings: v
          }));
        }
      });
    }();
  }

  var se;
  Qt("blocks.registerBlockType", "tadv-register-formats", function (t) {
    return se || (ie(), se = !0), t;
  });
}]);