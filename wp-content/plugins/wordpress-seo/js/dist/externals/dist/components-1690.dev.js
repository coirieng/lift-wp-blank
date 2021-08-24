"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.components = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 740);
}({
  0: function _(e, t) {
    e.exports = window.yoast.propTypes;
  },
  1: function _(e, t) {
    e.exports = window.wp.element;
  },
  10: function _(e, t) {
    e.exports = window.wp.i18n;
  },
  11: function _(e, t, n) {
    var r = n(37);
    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && r(e, t);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  12: function _(e, t, n) {
    var r = n(23)["default"],
        o = n(15);
    e.exports = function (e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  123: function _(e, t) {
    e.exports = window.lodash.isUndefined;
  },
  13: function _(e, t) {
    e.exports = window.yoast.componentsNew;
  },
  14: function _(e, t) {
    e.exports = window.yoast.helpers;
  },
  148: function _(e, t) {
    e.exports = window.lodash.findIndex;
  },
  15: function _(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  16: function _(e, t) {
    e.exports = function (e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  17: function _(e, t) {
    function n() {
      return e.exports = n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n.apply(this, arguments);
    }

    e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  19: function _(e, t, n) {
    "use strict";

    e.exports = function (e, t, n, r, o, i, a, s) {
      if (!e) {
        var u;
        if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
          var c = [n, r, o, i, a, s],
              l = 0;
          (u = new Error(t.replace(/%s/g, function () {
            return c[l++];
          }))).name = "Invariant Violation";
        }
        throw u.framesToPop = 1, u;
      }
    };
  },
  2: function _(e, t) {
    e.exports = window.lodash;
  },
  21: function _(e, t, n) {
    var r = n(74),
        o = n(75),
        i = n(62),
        a = n(76);
    e.exports = function (e) {
      return r(e) || o(e) || i(e) || a();
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  23: function _(e, t) {
    function n(t) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = n = function n(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = n = function n(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), n(t);
    }

    e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  24: function _(e, t) {
    e.exports = window.yoast.replacementVariableEditor;
  },
  3: function _(e, t) {
    e.exports = window.React;
  },
  323: function _(e, t, n) {
    var r, o, i;
    o = [e, n(683), n(685), n(686)], void 0 === (i = "function" == typeof (r = function r(e, t, n, _r) {
      "use strict";

      var o = s(t),
          i = s(n),
          a = s(_r);

      function s(e) {
        return e && e.__esModule ? e : {
          "default": e
        };
      }

      var u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          c = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          l = function (e) {
        function t(e, n) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, t);

          var r = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != _typeof(t) && "function" != typeof t ? e : t;
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));

          return r.resolveOptions(n), r.listenClick(e), r;
        }

        return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + _typeof(t));
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(t, e), c(t, [{
          key: "resolveOptions",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === u(e.container) ? e.container : document.body;
          }
        }, {
          key: "listenClick",
          value: function value(e) {
            var t = this;
            this.listener = (0, a["default"])(e, "click", function (e) {
              return t.onClick(e);
            });
          }
        }, {
          key: "onClick",
          value: function value(e) {
            var t = e.delegateTarget || e.currentTarget;
            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new o["default"]({
              action: this.action(t),
              target: this.target(t),
              text: this.text(t),
              container: this.container,
              trigger: t,
              emitter: this
            });
          }
        }, {
          key: "defaultAction",
          value: function value(e) {
            return f("action", e);
          }
        }, {
          key: "defaultTarget",
          value: function value(e) {
            var t = f("target", e);
            if (t) return document.querySelector(t);
          }
        }, {
          key: "defaultText",
          value: function value(e) {
            return f("text", e);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
          }
        }], [{
          key: "isSupported",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                t = "string" == typeof e ? [e] : e,
                n = !!document.queryCommandSupported;
            return t.forEach(function (e) {
              n = n && !!document.queryCommandSupported(e);
            }), n;
          }
        }]), t;
      }(i["default"]);

      function f(e, t) {
        var n = "data-clipboard-" + e;
        if (t.hasAttribute(n)) return t.getAttribute(n);
      }

      e.exports = l;
    }) ? r.apply(t, o) : r) || (e.exports = i);
  },
  324: function _(e, t) {
    e.exports = window.lodash.assign;
  },
  37: function _(e, t) {
    function n(t, r) {
      return e.exports = n = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(t, r);
    }

    e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  4: function _(e, t) {
    e.exports = window.yoast.styledComponents;
  },
  41: function _(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        o = s(n(3)),
        i = s(n(71)),
        a = s(n(73));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var u = void 0;

    t["default"] = function (e) {
      var t = e.mixedString,
          n = e.components,
          s = e.throwErrors;
      if (u = t, !n) return t;

      if ("object" !== (void 0 === n ? "undefined" : r(n))) {
        if (s) throw new Error("Interpolation Error: unable to process `" + t + "` because components is not an object");
        return t;
      }

      var c = (0, a["default"])(t);

      try {
        return function e(t, n) {
          var a,
              s,
              c,
              l,
              f,
              p,
              d,
              y,
              h = [],
              g = {};

          for (p = 0; p < t.length; p++) {
            if ("string" !== (f = t[p]).type) {
              if (!n.hasOwnProperty(f.value) || void 0 === n[f.value]) throw new Error("Invalid interpolation, missing component node: `" + f.value + "`");
              if ("object" !== r(n[f.value])) throw new Error("Invalid interpolation, component node must be a ReactElement or null: `" + f.value + "`", "\n> " + u);
              if ("componentClose" === f.type) throw new Error("Missing opening component token: `" + f.value + "`");

              if ("componentOpen" === f.type) {
                a = n[f.value], c = p;
                break;
              }

              h.push(n[f.value]);
            } else h.push(f.value);
          }

          return a && (l = function (e, t) {
            var n,
                r,
                o = t[e],
                i = 0;

            for (r = e + 1; r < t.length; r++) {
              if ((n = t[r]).value === o.value) {
                if ("componentOpen" === n.type) {
                  i++;
                  continue;
                }

                if ("componentClose" === n.type) {
                  if (0 === i) return r;
                  i--;
                }
              }
            }

            throw new Error("Missing closing component token `" + o.value + "`");
          }(c, t), d = e(t.slice(c + 1, l), n), s = o["default"].cloneElement(a, {}, d), h.push(s), l < t.length - 1 && (y = e(t.slice(l + 1), n), h = h.concat(y))), 1 === h.length ? h[0] : (h.forEach(function (e, t) {
            e && (g["interpolation-child-" + t] = e);
          }), (0, i["default"])(g));
        }(c, n);
      } catch (e) {
        if (s) throw new Error("Interpolation Error: unable to process `" + t + "` because of error `" + e.message + "`");
        return t;
      }
    };
  },
  42: function _(e, t, n) {
    "use strict";

    function r(e) {
      return function () {
        return e;
      };
    }

    var o = function o() {};

    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), o.thatReturnsThis = function () {
      return this;
    }, o.thatReturnsArgument = function (e) {
      return e;
    }, e.exports = o;
  },
  5: function _(e, t) {
    e.exports = function (e, t) {
      return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
        raw: {
          value: Object.freeze(t)
        }
      }));
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  51: function _(e, t) {
    e.exports = function (e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, r = new Array(t); n < t; n++) {
        r[n] = e[n];
      }

      return r;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  59: function _(e, t) {
    e.exports = window.yoast.analysisReport;
  },
  6: function _(e, t) {
    e.exports = window.yoast.styleGuide;
  },
  60: function _(e, t) {
    e.exports = window.lodash.omit;
  },
  61: function _(e, t) {
    e.exports = window.wp.a11y;
  },
  62: function _(e, t, n) {
    var r = n(51);
    e.exports = function (e, t) {
      if (e) {
        if ("string" == typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0;
      }
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  683: function _(e, t, n) {
    var r, o, i;
    o = [e, n(684)], void 0 === (i = "function" == typeof (r = function r(e, t) {
      "use strict";

      var n,
          r = (n = t) && n.__esModule ? n : {
        "default": n
      },
          o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
        return _typeof(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      },
          i = function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }

        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      }(),
          a = function () {
        function e(t) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), this.resolveOptions(t), this.initSelection();
        }

        return i(e, [{
          key: "resolveOptions",
          value: function value() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";
          }
        }, {
          key: "initSelection",
          value: function value() {
            this.text ? this.selectFake() : this.target && this.selectTarget();
          }
        }, {
          key: "selectFake",
          value: function value() {
            var e = this,
                t = "rtl" == document.documentElement.getAttribute("dir");
            this.removeFake(), this.fakeHandlerCallback = function () {
              return e.removeFake();
            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[t ? "right" : "left"] = "-9999px";
            var n = window.pageYOffset || document.documentElement.scrollTop;
            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, r["default"])(this.fakeElem), this.copyText();
          }
        }, {
          key: "removeFake",
          value: function value() {
            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
          }
        }, {
          key: "selectTarget",
          value: function value() {
            this.selectedText = (0, r["default"])(this.target), this.copyText();
          }
        }, {
          key: "copyText",
          value: function value() {
            var e = void 0;

            try {
              e = document.execCommand(this.action);
            } catch (t) {
              e = !1;
            }

            this.handleResult(e);
          }
        }, {
          key: "handleResult",
          value: function value(e) {
            this.emitter.emit(e ? "success" : "error", {
              action: this.action,
              text: this.selectedText,
              trigger: this.trigger,
              clearSelection: this.clearSelection.bind(this)
            });
          }
        }, {
          key: "clearSelection",
          value: function value() {
            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
          }
        }, {
          key: "destroy",
          value: function value() {
            this.removeFake();
          }
        }, {
          key: "action",
          set: function set() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
            if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
          },
          get: function get() {
            return this._action;
          }
        }, {
          key: "target",
          set: function set(e) {
            if (void 0 !== e) {
              if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
              if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
              if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
              this._target = e;
            }
          },
          get: function get() {
            return this._target;
          }
        }]), e;
      }();

      e.exports = a;
    }) ? r.apply(t, o) : r) || (e.exports = i);
  },
  684: function _(e, t) {
    e.exports = function (e) {
      var t;
      if ("SELECT" === e.nodeName) e.focus(), t = e.value;else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
        var n = e.hasAttribute("readonly");
        n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), t = e.value;
      } else {
        e.hasAttribute("contenteditable") && e.focus();
        var r = window.getSelection(),
            o = document.createRange();
        o.selectNodeContents(e), r.removeAllRanges(), r.addRange(o), t = r.toString();
      }
      return t;
    };
  },
  685: function _(e, t) {
    function n() {}

    n.prototype = {
      on: function on(e, t, n) {
        var r = this.e || (this.e = {});
        return (r[e] || (r[e] = [])).push({
          fn: t,
          ctx: n
        }), this;
      },
      once: function once(e, t, n) {
        var r = this;

        function o() {
          r.off(e, o), t.apply(n, arguments);
        }

        return o._ = t, this.on(e, o, n);
      },
      emit: function emit(e) {
        for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, o = n.length; r < o; r++) {
          n[r].fn.apply(n[r].ctx, t);
        }

        return this;
      },
      off: function off(e, t) {
        var n = this.e || (this.e = {}),
            r = n[e],
            o = [];
        if (r && t) for (var i = 0, a = r.length; i < a; i++) {
          r[i].fn !== t && r[i].fn._ !== t && o.push(r[i]);
        }
        return o.length ? n[e] = o : delete n[e], this;
      }
    }, e.exports = n, e.exports.TinyEmitter = n;
  },
  686: function _(e, t, n) {
    var r = n(687),
        o = n(688);

    e.exports = function (e, t, n) {
      if (!e && !t && !n) throw new Error("Missing required arguments");
      if (!r.string(t)) throw new TypeError("Second argument must be a String");
      if (!r.fn(n)) throw new TypeError("Third argument must be a Function");
      if (r.node(e)) return function (e, t, n) {
        return e.addEventListener(t, n), {
          destroy: function destroy() {
            e.removeEventListener(t, n);
          }
        };
      }(e, t, n);
      if (r.nodeList(e)) return function (e, t, n) {
        return Array.prototype.forEach.call(e, function (e) {
          e.addEventListener(t, n);
        }), {
          destroy: function destroy() {
            Array.prototype.forEach.call(e, function (e) {
              e.removeEventListener(t, n);
            });
          }
        };
      }(e, t, n);
      if (r.string(e)) return function (e, t, n) {
        return o(document.body, e, t, n);
      }(e, t, n);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
    };
  },
  687: function _(e, t) {
    t.node = function (e) {
      return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
    }, t.nodeList = function (e) {
      var n = Object.prototype.toString.call(e);
      return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]));
    }, t.string = function (e) {
      return "string" == typeof e || e instanceof String;
    }, t.fn = function (e) {
      return "[object Function]" === Object.prototype.toString.call(e);
    };
  },
  688: function _(e, t, n) {
    var r = n(689);

    function o(e, t, n, r, o) {
      var a = i.apply(this, arguments);
      return e.addEventListener(n, a, o), {
        destroy: function destroy() {
          e.removeEventListener(n, a, o);
        }
      };
    }

    function i(e, t, n, o) {
      return function (n) {
        n.delegateTarget = r(n.target, t), n.delegateTarget && o.call(e, n);
      };
    }

    e.exports = function (e, t, n, r, i) {
      return "function" == typeof e.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof e && (e = document.querySelectorAll(e)), Array.prototype.map.call(e, function (e) {
        return o(e, t, n, r, i);
      }));
    };
  },
  689: function _(e, t) {
    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var n = Element.prototype;
      n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
    }

    e.exports = function (e, t) {
      for (; e && 9 !== e.nodeType;) {
        if ("function" == typeof e.matches && e.matches(t)) return e;
        e = e.parentNode;
      }
    };
  },
  69: function _(e, t) {
    e.exports = window.yoast.jed;
  },
  7: function _(e, t) {
    function n(t) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(t);
    }

    e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  71: function _(e, t, n) {
    "use strict";

    var r = n(3),
        o = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
        i = n(42),
        a = n(19),
        s = n(72),
        u = "function" == typeof Symbol && Symbol.iterator;

    function c(e, t) {
      return e && "object" == _typeof(e) && null != e.key ? (n = e.key, r = {
        "=": "=0",
        ":": "=2"
      }, "$" + ("" + n).replace(/[=:]/g, function (e) {
        return r[e];
      })) : t.toString(36);
      var n, r;
    }

    var l = /\/+/g;

    function f(e) {
      return ("" + e).replace(l, "$&/");
    }

    var p,
        d,
        y = h,
        h = function h(e) {
      if (this.instancePool.length) {
        var t = this.instancePool.pop();
        return this.call(t, e), t;
      }

      return new this(e);
    };

    function g(e, t, n, r) {
      this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0;
    }

    function b(e, t, n) {
      var o,
          a,
          s = e.result,
          u = e.keyPrefix,
          c = e.func,
          l = e.context,
          p = c.call(l, t, e.count++);
      Array.isArray(p) ? m(p, s, n, i.thatReturnsArgument) : null != p && (r.isValidElement(p) && (o = p, a = u + (!p.key || t && t.key === p.key ? "" : f(p.key) + "/") + n, p = r.cloneElement(o, {
        key: a
      }, void 0 !== o.props ? o.props.children : void 0)), s.push(p));
    }

    function m(e, t, n, r, i) {
      var s = "";
      null != n && (s = f(n) + "/");
      var l = g.getPooled(t, s, r, i);
      !function (e, t, n) {
        null == e || function e(t, n, r, i) {
          var s,
              l = _typeof(t);

          if ("undefined" !== l && "boolean" !== l || (t = null), null === t || "string" === l || "number" === l || "object" === l && t.$$typeof === o) return r(i, t, "" === n ? "." + c(t, 0) : n), 1;
          var f = 0,
              p = "" === n ? "." : n + ":";
          if (Array.isArray(t)) for (var d = 0; d < t.length; d++) {
            f += e(s = t[d], p + c(s, d), r, i);
          } else {
            var y = function (e) {
              var t = e && (u && e[u] || e["@@iterator"]);
              if ("function" == typeof t) return t;
            }(t);

            if (y) for (var h, g = y.call(t), b = 0; !(h = g.next()).done;) {
              f += e(s = h.value, p + c(s, b++), r, i);
            } else if ("object" === l) {
              var m = "" + t;
              a(!1, "Objects are not valid as a React child (found: %s).%s", "[object Object]" === m ? "object with keys {" + Object.keys(t).join(", ") + "}" : m, "");
            }
          }
          return f;
        }(e, "", t, n);
      }(e, b, l), g.release(l);
    }

    g.prototype.destructor = function () {
      this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0;
    }, p = function p(e, t, n, r) {
      if (this.instancePool.length) {
        var o = this.instancePool.pop();
        return this.call(o, e, t, n, r), o;
      }

      return new this(e, t, n, r);
    }, (d = g).instancePool = [], d.getPooled = p || y, d.poolSize || (d.poolSize = 10), d.release = function (e) {
      a(e instanceof this, "Trying to release an instance into a pool of a different type."), e.destructor(), this.instancePool.length < this.poolSize && this.instancePool.push(e);
    }, e.exports = function (e) {
      if ("object" != _typeof(e) || !e || Array.isArray(e)) return s(!1, "React.addons.createFragment only accepts a single object. Got: %s", e), e;
      if (r.isValidElement(e)) return s(!1, "React.addons.createFragment does not accept a ReactElement without a wrapper object."), e;
      a(1 !== e.nodeType, "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");
      var t = [];

      for (var n in e) {
        m(e[n], t, n, i.thatReturnsArgument);
      }

      return t;
    };
  },
  72: function _(e, t, n) {
    "use strict";

    var r = n(42);
    e.exports = r;
  },
  73: function _(e, t, n) {
    "use strict";

    function r(e) {
      return e.match(/^\{\{\//) ? {
        type: "componentClose",
        value: e.replace(/\W/g, "")
      } : e.match(/\/\}\}$/) ? {
        type: "componentSelfClosing",
        value: e.replace(/\W/g, "")
      } : e.match(/^\{\{/) ? {
        type: "componentOpen",
        value: e.replace(/\W/g, "")
      } : {
        type: "string",
        value: e
      };
    }

    e.exports = function (e) {
      return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r);
    };
  },
  74: function _(e, t, n) {
    var r = n(51);
    e.exports = function (e) {
      if (Array.isArray(e)) return r(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  740: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "OnboardingWizard", function () {
      return Lt;
    }), n.d(t, "MessageBox", function () {
      return Mt;
    }), n.d(t, "LinkSuggestions", function () {
      return se;
    }), n.d(t, "ContentAnalysis", function () {
      return h.ContentAnalysis;
    }), n.d(t, "Collapsible", function () {
      return i.Collapsible;
    }), n.d(t, "ButtonSection", function () {
      return y;
    }), n.d(t, "LoadingIndicator", function () {
      return Pt;
    }), n.d(t, "CornerstoneToggle", function () {
      return B;
    }), n.d(t, "sendRequest", function () {
      return r.sendRequest;
    }), n.d(t, "decodeHTML", function () {
      return r.decodeHTML;
    }), n.d(t, "getRtlStyle", function () {
      return At;
    }), n.d(t, "colors", function () {
      return o.colors;
    }), n.d(t, "DashboardWidgetSeoAssessment", function () {
      return h.SiteSEOReport;
    }), n.d(t, "DashboardWidgetWordpressFeed", function () {
      return i.ArticleList;
    }), n.d(t, "AnalysisList", function () {
      return h.AnalysisList;
    }), n.d(t, "renderRatingToColor", function () {
      return h.renderRatingToColor;
    }), n.d(t, "FixedWidthContainer", function () {
      return ue.FixedWidthContainer;
    }), n.d(t, "HelpTextWrapper", function () {
      return ue.HelpTextWrapper;
    }), n.d(t, "SnippetPreview", function () {
      return ue.SnippetPreview;
    }), n.d(t, "SettingsSnippetEditor", function () {
      return ue.SettingsSnippetEditor;
    }), n.d(t, "SnippetEditor", function () {
      return ue.SnippetEditor;
    }), n.d(t, "lengthProgressShape", function () {
      return ue.lengthProgressShape;
    }), n.d(t, "ReplacementVariableEditor", function () {
      return ce.ReplacementVariableEditor;
    }), n.d(t, "recommendedReplacementVariablesShape", function () {
      return ce.recommendedReplacementVariablesShape;
    }), n.d(t, "replacementVariablesShape", function () {
      return ce.replacementVariablesShape;
    }), n.d(t, "utils", function () {
      return fe;
    }), n.d(t, "localize", function () {
      return xe;
    }), n.d(t, "setTranslations", function () {
      return be;
    }), n.d(t, "translate", function () {
      return ve;
    }), n.d(t, "analysis", function () {
      return pt;
    }), n.d(t, "WordpressFeed", function () {
      return i.ArticleList;
    }), n.d(t, "SeoAssessment", function () {
      return h.SiteSEOReport;
    }), n.d(t, "KeywordInput", function () {
      return jt;
    }), n.d(t, "insightsReducer", function () {
      return Ct;
    }), n.d(t, "setWordsForInsights", function () {
      return Tt;
    }), n.d(t, "setReadabilityResults", function () {
      return Me;
    }), n.d(t, "setSeoResultsForKeyword", function () {
      return Le;
    }), n.d(t, "setOverallReadabilityScore", function () {
      return Pe;
    }), n.d(t, "setOverallSeoScore", function () {
      return Ie;
    }), n.d(t, "Card", function () {
      return i.Card;
    }), n.d(t, "FullHeightCard", function () {
      return i.FullHeightCard;
    }), n.d(t, "CardBanner", function () {
      return i.CardBanner;
    }), n.d(t, "CardDetails", function () {
      return i.CourseDetails;
    }), n.d(t, "HelpText", function () {
      return i.HelpText;
    }), n.d(t, "Icon", function () {
      return i.Icon;
    }), n.d(t, "KeywordSuggestions", function () {
      return i.KeywordSuggestions;
    }), n.d(t, "WordOccurrenceInsights", function () {
      return i.WordOccurrenceInsights;
    }), n.d(t, "LanguageNotice", function () {
      return i.LanguageNotice;
    }), n.d(t, "Loader", function () {
      return i.Loader;
    }), n.d(t, "ScoreAssessments", function () {
      return i.ScoreAssessments;
    }), n.d(t, "SvgIcon", function () {
      return i.SvgIcon;
    }), n.d(t, "SynonymsInput", function () {
      return i.SynonymsInput;
    }), n.d(t, "UpsellButton", function () {
      return i.UpsellButton;
    }), n.d(t, "UpsellLinkButton", function () {
      return i.UpsellLinkButton;
    }), n.d(t, "YoastButton", function () {
      return i.YoastButton;
    }), n.d(t, "YoastModal", function () {
      return i.Modal;
    }), n.d(t, "YoastSeoIcon", function () {
      return i.YoastSeoIcon;
    }), n.d(t, "YoastWarning", function () {
      return i.Warning;
    }), n.d(t, "StyledSection", function () {
      return i.StyledSection;
    }), n.d(t, "StyledHeading", function () {
      return i.StyledHeading;
    }), n.d(t, "StyledSectionBase", function () {
      return i.StyledSectionBase;
    });

    var r = n(14),
        o = n(6),
        i = n(13),
        a = n(1),
        s = n(0),
        u = n.n(s),
        c = n(3),
        l = n.n(c),
        f = Object(i.wrapInHeading)(i.StyledIconsButton, {
      level: 2,
      fontSize: "1rem",
      fontWeight: "normal"
    }),
        p = function p(e) {
      var t = e.hasSeparator ? i.StyledContainerTopLevel : i.StyledContainer;
      return Object(a.createElement)(t, {
        onClick: e.onClick,
        className: e.className
      }, Object(a.createElement)(e.Heading, {
        prefixIcon: e.prefixIcon,
        suffixIcon: e.suffixIcon,
        hasSubTitle: !!e.subTitle,
        id: e.id
      }, Object(a.createElement)(i.SectionTitle, {
        title: e.title,
        titleScreenReaderText: e.titleScreenReaderText,
        subTitle: e.subTitle
      })));
    };

    p.propTypes = {
      hasSeparator: u.a.bool,
      className: u.a.string,
      Heading: u.a.func,
      prefixIcon: u.a.shape({
        icon: u.a.string,
        color: u.a.string,
        size: u.a.string
      }),
      suffixIcon: u.a.shape({
        icon: u.a.string,
        color: u.a.string,
        size: u.a.string
      }),
      subTitle: u.a.string,
      title: u.a.string.isRequired,
      titleScreenReaderText: u.a.string,
      onClick: u.a.func.isRequired,
      id: u.a.string
    }, p.defaultProps = {
      Heading: f,
      id: null
    };

    var d,
        y = p,
        h = n(59),
        g = n(8),
        b = n.n(g),
        m = n(9),
        v = n.n(m),
        x = n(11),
        w = n.n(x),
        S = n(12),
        E = n.n(S),
        O = n(7),
        k = n.n(O),
        _ = n(5),
        j = n.n(_),
        T = n(4),
        R = n.n(T),
        C = n(10);

    var A = R.a.div(d || (d = j()(["\n\tdisplay: flex;\n\tmargin-top: 8px;\n"]))),
        L = function (e) {
      w()(o, e);
      var t,
          n,
          r = (t = o, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }(), function () {
        var e,
            r = k()(t);

        if (n) {
          var o = k()(this).constructor;
          e = Reflect.construct(r, arguments, o);
        } else e = r.apply(this, arguments);

        return E()(this, e);
      });

      function o() {
        return b()(this, o), r.apply(this, arguments);
      }

      return v()(o, [{
        key: "render",
        value: function value() {
          return Object(a.createElement)(A, null, Object(a.createElement)(i.Toggle, {
            id: this.props.id,
            labelText: Object(C.__)("Mark as cornerstone content", "yoast-components"),
            isEnabled: this.props.isEnabled,
            onSetToggleState: this.props.onToggle,
            onToggleDisabled: this.props.onToggleDisabled
          }));
        }
      }]), o;
    }(l.a.Component);

    L.propTypes = {
      id: u.a.string,
      isEnabled: u.a.bool,
      onSetToggleState: u.a.func,
      onToggle: u.a.func,
      disable: u.a.bool,
      onToggleDisabled: u.a.func
    }, L.defaultProps = {
      id: "cornerstone-toggle"
    };

    var M,
        P,
        I,
        F,
        B = L,
        D = n(17),
        W = n.n(D),
        H = n(15),
        N = n.n(H),
        z = R.a.div(M || (M = j()(["\n\tdisplay: flex;\n\talign-items: center;\n\tmin-height: 40px;\n\tmargin-bottom: 5px;\n"]))),
        U = R.a.button(P || (P = j()(["\n\tbox-sizing: border-box;\n\theight: 30px;\n\twidth: 30px;\n\tbackground-color: ", ";\n\tborder-radius: 5px;\n\tcursor: pointer;\n\toutline:none;\n\tmargin-right: 8px;\n\tborder: 1px solid ", ";\n\n\t&:focus {\n\t\tbox-shadow: 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, 0.8);\n\t}\n"])), o.colors.$color_button, o.colors.$color_button_border),
        q = Object(r.makeOutboundLink)(R.a.a(I || (I = j()(["\n\tmax-width: 128px;\n\tpadding: 6px 0;\n\tmargin-right: 8px;\n"])))),
        K = R.a.span(F || (F = j()(["\n\tmax-width: 75px;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\ttext-align: center;\n\tdisplay: block;\n\tpadding: 3px 8px;\n\tmargin-left: auto;\n\tfont-size: 0.85em;\n\tbackground-color: #f3f4f5;\n\tborder-radius: 2px;\n"]))),
        $ = function $(e) {
      var t = e.value,
          n = e.url,
          r = e.isActive,
          s = e.type,
          u = Object(C.__)("Copy link", "yoast-components"),
          c = Object(C.sprintf)(
      /* translators: %s expands to the link value */
      Object(C.__)("Copy link to suggested article: %s", "yoast-components"), t),
          l = "clipboard";
      return r && (l = "check"), Object(a.createElement)(z, null, Object(a.createElement)(U, {
        type: "button",
        className: "yoast-link-suggestion__copy yoast-tooltip yoast-tooltip-alt yoast-tooltip-s",
        onBlur: function onBlur(e) {
          e.nativeEvent.target.setAttribute("aria-label", c), e.nativeEvent.target.setAttribute("data-label", u);
        },
        "data-clipboard-text": n,
        "aria-label": c,
        "data-label": u
      }, Object(a.createElement)(i.SvgIcon, {
        icon: l,
        color: o.colors.$color_grey_dark
      }), Object(a.createElement)(i.ScreenReaderText, null, u)), Object(a.createElement)(q, {
        href: n
      }, t), Object(a.createElement)(K, {
        title: s
      }, s));
    };

    $.propTypes = {
      value: u.a.string.isRequired,
      url: u.a.string.isRequired,
      isActive: u.a.bool,
      type: u.a.string.isRequired
    }, $.defaultProps = {
      isActive: !1
    };
    var Y,
        V = $,
        G = n(323),
        X = n.n(G),
        J = n(41),
        Q = n.n(J),
        Z = n(61);

    var ee = Object(r.makeOutboundLink)(),
        te = R.a.div(Y || (Y = j()(["\n\tdisplay: table-cell;\n"]))),
        ne = Object(C.__)("We could not find any relevant articles on your website that you could link to from your post.", "yoast-components"),
        re = Object(C.__)("{{a}}Read our article about site structure{{/a}} to learn more about how internal linking can help improve your SEO.", "yoast-components"),
        oe = Object(C.__)("Consider linking to these {{a}}cornerstone articles:{{/a}}", "yoast-components"),
        ie = Object(C.__)("Consider linking to these articles:", "yoast-components"),
        ae = function (e) {
      w()(o, e);
      var t,
          n,
          r = (t = o, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }(), function () {
        var e,
            r = k()(t);

        if (n) {
          var o = k()(this).constructor;
          e = Reflect.construct(r, arguments, o);
        } else e = r.apply(this, arguments);

        return E()(this, e);
      });

      function o(e) {
        var t;
        return b()(this, o), (t = r.call(this, e)).state = {
          clipboard: new X.a(".yoast-link-suggestion__copy")
        }, t.state.clipboard.on("success", t.handleSuccess.bind(N()(t))), t.state.clipboard.on("error", t.handleError.bind(N()(t))), t;
      }

      return v()(o, [{
        key: "handleSuccess",
        value: function value(e) {
          var t = Object(C.__)("Copied!", "yoast-components");
          e.trigger.focus(), e.trigger.setAttribute("aria-label", t), e.trigger.setAttribute("data-label", t), Object(Z.speak)(t, "assertive");
        }
      }, {
        key: "handleError",
        value: function value(e) {
          var t = Object(C.__)("Not supported!", "yoast-components");
          e.trigger.el.setAttribute("aria-label", t), e.trigger.setAttribute("data-label", t), Object(Z.speak)(t, "assertive");
        }
      }, {
        key: "renderEmptyList",
        value: function value() {
          var e = this.props.customMessages.lengthMessage;
          return e = "" === e ? ne : e, Object(a.createElement)("div", null, Object(a.createElement)("p", null, e), Object(a.createElement)("p", null, this.props.customMessages.metaMessage), Object(a.createElement)("p", null, this.getArticleLink()));
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props.suggestions,
              t = this.props.maxSuggestions;
          if (0 === e.length) return this.renderEmptyList();
          e.length > t && (e.length = t);
          var n = this.getCornerstoneSuggestions(),
              r = this.getDefaultSuggestions();
          return Object(a.createElement)(te, null, n, r, Object(a.createElement)("p", null, this.getArticleLink()), Object(a.createElement)("p", null, this.props.customMessages.metaMessage));
        }
      }, {
        key: "getCornerstoneSuggestions",
        value: function value() {
          var e = this.filterSuggestionsByCornerstone(!0);
          if (0 === e.length) return null;
          var t = Q()({
            mixedString: oe,
            components: {
              a: Object(a.createElement)(ee, {
                href: "https://yoa.st/metabox-ls-help-cornerstone"
              })
            }
          });
          return this.getSuggestionsList(t, e);
        }
      }, {
        key: "getDefaultSuggestions",
        value: function value() {
          var e = this.filterSuggestionsByCornerstone(!1);
          return 0 === e.length ? null : this.getSuggestionsList(ie, e);
        }
      }, {
        key: "getArticleLink",
        value: function value() {
          return Q()({
            mixedString: re,
            components: {
              a: Object(a.createElement)(ee, {
                href: "https://yoa.st/site-structure-metabox"
              })
            }
          });
        }
      }, {
        key: "getSuggestionsList",
        value: function value(e, t) {
          return Object(a.createElement)("div", null, Object(a.createElement)("p", null, e), t.map(function (e, t) {
            return Object(a.createElement)(V, W()({
              key: t
            }, e));
          }));
        }
      }, {
        key: "filterSuggestionsByCornerstone",
        value: function value() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return this.props.suggestions.filter(function (t) {
            return t.isCornerstone === e;
          });
        }
      }]), o;
    }(l.a.Component);

    ae.propTypes = {
      suggestions: u.a.array.isRequired,
      maxSuggestions: u.a.number,
      customMessages: u.a.object
    }, ae.defaultProps = {
      maxSuggestions: 10,
      customMessages: {
        lengthMessage: "",
        metaMessage: ""
      }
    };
    var se = ae,
        ue = n(84),
        ce = n(24),
        le = n(2),
        fe = {
      getFeed: r.getFeed,
      getCourseFeed: r.getCourseFeed,
      getPostFeed: r.getPostFeed,
      makeOutboundLink: r.makeOutboundLink,
      buildStructuredUrl: function buildStructuredUrl(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = Object.keys(t),
            r = e;
        return n.forEach(function (e) {
          var n = t[e],
              o = Object(le.isArray)(n) ? n.join("/") : n,
              i = "%".concat(e, "%");
          r = r.replace(new RegExp(i, "g"), o);
        }), r;
      }
    },
        pe = n(69),
        de = n.n(pe),
        ye = n(324),
        he = n.n(ye);
    var ge = null;

    function be(e) {
      ge = new de.a(e);
    }

    function me() {
      return null === ge && (ge = new de.a({})), ge;
    }

    function ve(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = me();
      return "" === t ? r.gettext(e) : r.ngettext(e, t, n);
    }

    function xe(e) {
      var t = e.displayName || e.name || "",
          n = {
        translate: ve
      };
      return function (r) {
        w()(u, r);
        var o,
            i,
            s = (o = u, i = function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;

          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }(), function () {
          var e,
              t = k()(o);

          if (i) {
            var n = k()(this).constructor;
            e = Reflect.construct(t, arguments, n);
          } else e = t.apply(this, arguments);

          return E()(this, e);
        });

        function u(e) {
          var n;
          return b()(this, u), (n = s.call(this, e)).displayName = "Localized" + t, n;
        }

        return v()(u, [{
          key: "render",
          value: function value() {
            var t = he()({}, this.props, n);
            return Object(a.createElement)(e, t);
          }
        }]), u;
      }(l.a.Component);
    }

    var we = n(21),
        Se = n.n(we),
        Ee = "CONTENT_ANALYSIS_",
        Oe = "".concat(Ee, "SET_SEO_RESULTS"),
        ke = "".concat(Ee, "SET_SEO_RESULTS_FOR_KEYWORD"),
        _e = "".concat(Ee, "UPDATE_SEO_RESULT"),
        je = "".concat(Ee, "REMOVE_KEYWORD"),
        Te = "".concat(Ee, "SET_READABILITY_RESULTS"),
        Re = "".concat(Ee, "UPDATE_READABILITY_RESULT"),
        Ce = "".concat(Ee, "SET_OVERALL_READABILITY_SCORE"),
        Ae = "".concat(Ee, "SET_OVERALL_SEO_SCORE");

    function Le(e, t) {
      return {
        type: ke,
        keyword: e,
        results: t
      };
    }

    function Me(e) {
      return {
        type: Te,
        results: e
      };
    }

    function Pe(e) {
      return {
        type: Ce,
        overallScore: e
      };
    }

    function Ie(e, t) {
      return {
        type: Ae,
        keyword: t,
        overallScore: e
      };
    }

    var Fe = n(148),
        Be = n.n(Fe),
        De = n(123),
        We = n.n(De),
        He = {};

    function Ne(e, t) {
      return Object.assign({}, e, {
        results: t.results
      });
    }

    function ze(e, t) {
      if (We()(e.results)) return Object.assign({}, e, {
        results: [t.result]
      });
      var n = Be()(e.results, {
        id: t.result.id
      });

      if (-1 !== n) {
        var r = e.results.filter(function (t) {
          return t !== e.results[n];
        });
        return Object.assign({}, e, {
          results: r.concat(t.result)
        });
      }

      return Object.assign({}, e, {
        results: [].concat(Se()(e.results), [t.result])
      });
    }

    function Ue(e, t) {
      return Object.assign({}, e, {
        overallScore: t.overallScore
      });
    }

    var qe = n(16),
        Ke = n.n(qe),
        $e = n(60),
        Ye = n.n($e);

    function Ve(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function Ge(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? Ve(Object(n), !0).forEach(function (t) {
          Ke()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ve(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var Xe = {};

    function Je(e, t, n) {
      return Object.assign({}, e, Ke()({}, t, {
        results: n
      }));
    }

    function Qe(e, t) {
      return e[t.keyword] ? -1 !== Be()(e[t.keyword].results, {
        id: t.result.id
      }) ? function (e, t) {
        var n = Array.from(e[t.keyword].results, function (e) {
          return e.id === t.result.id ? t.result : e;
        });
        return Object.assign({}, e, Ke()({}, t.keyword, {
          results: n
        }));
      }(e, t) : Object.assign({}, e, Ke()({}, t.keyword, {
        results: [].concat(Se()(e[t.keyword].results), [t.result])
      })) : Je(e, t.keyword, [t.result]);
    }

    function Ze(e, t) {
      return e[t.keyword] ? Object.assign({}, e, Ke()({}, t.keyword, {
        results: t.results
      })) : Je(e, t.keyword, t.results);
    }

    function et(e) {
      var t = {};
      return e.resultsPerKeyword.forEach(function (e) {
        t[e.keyword] = {
          results: e.results
        };
      }), t;
    }

    function tt(e, t) {
      return Object.assign({}, e, Ke()({}, t.keyword, Ge(Ge({}, e[t.keyword]), {}, {
        overallScore: t.overallScore
      })));
    }

    var nt,
        rt,
        ot,
        it,
        at,
        st,
        ut,
        ct,
        lt,
        ft = n(88),
        pt = Object(ft.combineReducers)({
      seo: function seo() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xe,
            t = arguments.length > 1 ? arguments[1] : void 0;

        switch (t.type) {
          case Oe:
            return et(t);

          case _e:
            return Qe(e, t);

          case je:
            return Ye()(e, t.keyword);

          case ke:
            return Ze(e, t);

          case Ae:
            return tt(e, t);

          default:
            return e;
        }
      },
      readability: function readability() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : He,
            t = arguments.length > 1 ? arguments[1] : void 0;

        switch (t.type) {
          case Te:
            return Ne(e, t);

          case Re:
            return ze(e, t);

          case Ce:
            return Ue(e, t);

          default:
            return e;
        }
      }
    });
    var dt = o.colors.$color_bad,
        yt = o.colors.$palette_error_background,
        ht = o.colors.$color_grey_text_light,
        gt = o.colors.$palette_error_text,
        bt = R.a.div(nt || (nt = j()(["\n\tdisplay: flex;\n\tflex-direction: column;\n"]))),
        mt = R.a.label(rt || (rt = j()(["\n\tfont-size: var(--yoast-font-size-default);\n\tfont-weight: var(--yoast-font-weight-bold);\n\t", ";\n"])), Object(r.getDirectionalStyle)("margin-right: 4px", "margin-left: 4px")),
        vt = R.a.span(ot || (ot = j()(["\n\tmargin-bottom: 0.5em;\n"]))),
        xt = R()(i.InputField)(it || (it = j()(["\n\tflex: 1 !important;\n\tbox-sizing: border-box;\n\tmax-width: 100%;\n\tmargin: 0; // Reset margins inherited from WordPress.\n\n\t// Hide native X in Edge and IE11.\n\t&::-ms-clear {\n\t\tdisplay: none;\n\t}\n\n\t&.has-error {\n\t\tborder-color: ", " !important;\n\t\tbackground-color: ", " !important;\n\n\t\t&:focus {\n\t\t\tbox-shadow: 0 0 2px ", " !important;\n\t\t}\n\t}\n"])), dt, yt, dt),
        wt = R.a.ul(at || (at = j()(["\n\tcolor: ", ";\n\tlist-style-type: disc;\n\tlist-style-position: outside;\n\tmargin: 0;\n\tmargin-left: 1.2em;\n"])), gt),
        St = R.a.li(st || (st = j()(["\n\tcolor: ", ";\n\tmargin: 0 0 0.5em 0;\n"])), gt),
        Et = Object(i.addFocusStyle)(R.a.button(ut || (ut = j()(["\n\t\tborder: 1px solid transparent;\n\t\tbox-shadow: none;\n\t\tbackground: none;\n\t\tflex: 0 0 32px;\n\t\theight: 32px;\n\t\tmax-width: 32px;\n\t\tpadding: 0;\n\t\tcursor: pointer;\n\t"]))));
    Et.propTypes = {
      type: u.a.string,
      focusColor: u.a.string,
      focusBackgroundColor: u.a.string,
      focusBorderColor: u.a.string
    }, Et.defaultProps = {
      type: "button",
      focusColor: o.colors.$color_button_text_hover,
      focusBackgroundColor: "transparent",
      focusBorderColor: o.colors.$color_blue
    };

    var Ot = R()(i.SvgIcon)(ct || (ct = j()(["\n\tmargin-top: 4px;\n"]))),
        kt = R.a.div(lt || (lt = j()(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\n\t&.has-remove-keyword-button {\n\t\t", " {\n\t\t\t", ";\n\t\t}\n\n\t\t", " {\n\t\t\t", ";\n\t\t}\n\t}\n"])), xt, Object(r.getDirectionalStyle)("padding-right: 40px", "padding-left: 40px"), Et, Object(r.getDirectionalStyle)("margin-left: -32px", "margin-right: -32px")),
        _t = function (e) {
      w()(o, e);
      var t,
          n,
          r = (t = o, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }(), function () {
        var e,
            r = k()(t);

        if (n) {
          var o = k()(this).constructor;
          e = Reflect.construct(r, arguments, o);
        } else e = r.apply(this, arguments);

        return E()(this, e);
      });

      function o(e) {
        var t;
        return b()(this, o), (t = r.call(this, e)).handleChange = t.handleChange.bind(N()(t)), t;
      }

      return v()(o, [{
        key: "handleChange",
        value: function value(e) {
          this.props.onChange(e.target.value);
        }
      }, {
        key: "renderLabel",
        value: function value() {
          var e = this.props,
              t = e.id,
              n = e.label,
              r = e.helpLink;
          return Object(a.createElement)(vt, null, Object(a.createElement)(mt, {
            htmlFor: t
          }, n), r);
        }
      }, {
        key: "renderErrorMessages",
        value: function value() {
          var e = Se()(this.props.errorMessages);
          return !Object(le.isEmpty)(e) && Object(a.createElement)(wt, null, e.map(function (e, t) {
            return Object(a.createElement)(St, {
              key: t
            }, Object(a.createElement)("span", {
              role: "alert"
            }, e));
          }));
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.id,
              n = e.showLabel,
              r = e.keyword,
              o = e.onRemoveKeyword,
              i = e.onBlurKeyword,
              s = e.onFocusKeyword,
              u = e.hasError,
              c = !n,
              l = o !== le.noop;
          return Object(a.createElement)(bt, null, n && this.renderLabel(), u && this.renderErrorMessages(), Object(a.createElement)(kt, {
            className: l ? "has-remove-keyword-button" : null
          }, Object(a.createElement)(xt, {
            "aria-label": c ? this.props.label : null,
            type: "text",
            id: t,
            className: u ? "has-error" : null,
            onChange: this.handleChange,
            onFocus: s,
            onBlur: i,
            value: r,
            autoComplete: "off"
          }), l && Object(a.createElement)(Et, {
            onClick: o,
            focusBoxShadowColor: "#084A67"
          }, Object(a.createElement)(Ot, {
            size: "18px",
            icon: "times-circle",
            color: ht
          }))));
        }
      }]), o;
    }(l.a.Component);

    _t.propTypes = {
      id: u.a.string.isRequired,
      showLabel: u.a.bool,
      keyword: u.a.string,
      onChange: u.a.func.isRequired,
      onRemoveKeyword: u.a.func,
      onBlurKeyword: u.a.func,
      onFocusKeyword: u.a.func,
      label: u.a.string.isRequired,
      helpLink: u.a.node,
      hasError: u.a.bool,
      errorMessages: u.a.arrayOf(u.a.string)
    }, _t.defaultProps = {
      showLabel: !0,
      keyword: "",
      onRemoveKeyword: le.noop,
      onBlurKeyword: le.noop,
      onFocusKeyword: le.noop,
      helpLink: null,
      hasError: !1,
      errorMessages: []
    };
    var jt = _t;

    function Tt(e) {
      return {
        type: "SET_WORDS_FOR_INSIGHTS",
        wordsForInsights: e
      };
    }

    var Rt = [],
        Ct = Object(ft.combineReducers)({
      prominentWords: function prominentWords() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Rt,
            t = arguments.length > 1 ? arguments[1] : void 0;

        switch (t.type) {
          case "SET_WORDS_FOR_INSIGHTS":
            return t.wordsForInsights;

          default:
            return e;
        }
      }
    }),
        At = r.getDirectionalStyle,
        Lt = function Lt() {
      return console.warn("Deprecation Warning: Deprecated since 5.13.1. Use the `OnboardingWizard` from the `@yoast/configuration-wizard` package instead."), null;
    },
        Mt = function Mt() {
      return console.warn("Deprecation Warning: Deprecated since 5.13.1. Use the `MessageBox` from the `@yoast/configuration-wizard` package instead."), null;
    },
        Pt = function Pt() {
      return console.warn("Deprecation Warning: Deprecated since 5.13.1. Use the `LoadingIndicator` from the `@yoast/configuration-wizard` package instead."), null;
    };
  },
  75: function _(e, t) {
    e.exports = function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  76: function _(e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  8: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  84: function _(e, t) {
    e.exports = window.yoast.searchMetadataPreviews;
  },
  88: function _(e, t) {
    e.exports = window.yoast.redux;
  },
  9: function _(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    e.exports = function (e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  }
});