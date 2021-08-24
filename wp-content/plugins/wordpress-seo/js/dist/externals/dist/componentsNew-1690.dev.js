"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.componentsNew = function (t) {
  var e = {};

  function n(o) {
    if (e[o]) return e[o].exports;
    var r = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) {
      n.d(o, r, function (e) {
        return t[e];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 738);
}({
  0: function _(t, e) {
    t.exports = window.yoast.propTypes;
  },
  1: function _(t, e) {
    t.exports = window.wp.element;
  },
  10: function _(t, e) {
    t.exports = window.wp.i18n;
  },
  103: function _(t, e) {
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
          o,
          r = {},
          a = Object.keys(t);

      for (o = 0; o < a.length; o++) {
        n = a[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
      }

      return r;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  11: function _(t, e, n) {
    var o = n(37);
    t.exports = function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && o(t, e);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  12: function _(t, e, n) {
    var o = n(23)["default"],
        r = n(15);
    t.exports = function (t, e) {
      return !e || "object" !== o(e) && "function" != typeof e ? r(t) : e;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  122: function _(t, e) {
    t.exports = window.lodash.isEmpty;
  },
  128: function _(t, e, n) {
    "use strict";

    function o() {
      var t = this.constructor.getDerivedStateFromProps(this.props, this.state);
      null != t && this.setState(t);
    }

    function r(t) {
      this.setState(function (e) {
        var n = this.constructor.getDerivedStateFromProps(t, e);
        return null != n ? n : null;
      }.bind(this));
    }

    function a(t, e) {
      try {
        var n = this.props,
            o = this.state;
        this.props = t, this.state = e, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, o);
      } finally {
        this.props = n, this.state = o;
      }
    }

    function i(t) {
      var e = t.prototype;
      if (!e || !e.isReactComponent) throw new Error("Can only polyfill class components");
      if ("function" != typeof t.getDerivedStateFromProps && "function" != typeof e.getSnapshotBeforeUpdate) return t;
      var n = null,
          i = null,
          s = null;

      if ("function" == typeof e.componentWillMount ? n = "componentWillMount" : "function" == typeof e.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof e.componentWillReceiveProps ? i = "componentWillReceiveProps" : "function" == typeof e.UNSAFE_componentWillReceiveProps && (i = "UNSAFE_componentWillReceiveProps"), "function" == typeof e.componentWillUpdate ? s = "componentWillUpdate" : "function" == typeof e.UNSAFE_componentWillUpdate && (s = "UNSAFE_componentWillUpdate"), null !== n || null !== i || null !== s) {
        var l = t.displayName || t.name,
            c = "function" == typeof t.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
        throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + l + " uses " + c + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== i ? "\n  " + i : "") + (null !== s ? "\n  " + s : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
      }

      if ("function" == typeof t.getDerivedStateFromProps && (e.componentWillMount = o, e.componentWillReceiveProps = r), "function" == typeof e.getSnapshotBeforeUpdate) {
        if ("function" != typeof e.componentDidUpdate) throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
        e.componentWillUpdate = a;
        var u = e.componentDidUpdate;

        e.componentDidUpdate = function (t, e, n) {
          var o = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
          u.call(this, t, e, o);
        };
      }

      return t;
    }

    n.r(e), n.d(e, "polyfill", function () {
      return i;
    }), o.__suppressDeprecationWarning = !0, r.__suppressDeprecationWarning = !0, a.__suppressDeprecationWarning = !0;
  },
  14: function _(t, e) {
    t.exports = window.yoast.helpers;
  },
  145: function _(t, e) {
    t.exports = window.lodash.flow;
  },
  15: function _(t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  151: function _(t, e, n) {},
  152: function _(t, e, n) {},
  153: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.canUseDOM = void 0;
    var o,
        r = ((o = n(348)) && o.__esModule ? o : {
      "default": o
    })["default"],
        a = r.canUseDOM ? window.HTMLElement : {};
    e.canUseDOM = r.canUseDOM, e["default"] = a;
  },
  16: function _(t, e) {
    t.exports = function (t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  17: function _(t, e) {
    function n() {
      return t.exports = n = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n.apply(this, arguments);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  19: function _(t, e, n) {
    "use strict";

    t.exports = function (t, e, n, o, r, a, i, s) {
      if (!t) {
        var l;
        if (void 0 === e) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
          var c = [n, o, r, a, i, s],
              u = 0;
          (l = new Error(e.replace(/%s/g, function () {
            return c[u++];
          }))).name = "Invariant Violation";
        }
        throw l.framesToPop = 1, l;
      }
    };
  },
  2: function _(t, e) {
    t.exports = window.lodash;
  },
  201: function _(t, e, n) {},
  202: function _(t, e, n) {},
  203: function _(t, e, n) {},
  204: function _(t, e, n) {},
  205: function _(t, e, n) {},
  206: function _(t, e, n) {},
  207: function _(t, e, n) {},
  208: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = function (t) {
      return [].slice.call(t.querySelectorAll("*"), 0).filter(a);
    };
    var o = /input|select|textarea|button|object/;

    function r(t) {
      var e = t.offsetWidth <= 0 && t.offsetHeight <= 0;
      if (e && !t.innerHTML) return !0;
      var n = window.getComputedStyle(t);
      return e ? "visible" !== n.getPropertyValue("overflow") || t.scrollWidth <= 0 && t.scrollHeight <= 0 : "none" == n.getPropertyValue("display");
    }

    function a(t) {
      var e = t.getAttribute("tabindex");
      null === e && (e = void 0);
      var n = isNaN(e);
      return (n || e >= 0) && function (t, e) {
        var n = t.nodeName.toLowerCase();
        return (o.test(n) && !t.disabled || "a" === n && t.href || e) && function (t) {
          for (var e = t; e && e !== document.body;) {
            if (r(e)) return !1;
            e = e.parentNode;
          }

          return !0;
        }(t);
      }(t, !n);
    }

    t.exports = e["default"];
  },
  209: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.assertNodeList = s, e.setElement = function (t) {
      var e = t;

      if ("string" == typeof e && a.canUseDOM) {
        var n = document.querySelectorAll(e);
        s(n, e), e = "length" in n ? n[0] : n;
      }

      return i = e || i;
    }, e.validateElement = l, e.hide = function (t) {
      l(t) && (t || i).setAttribute("aria-hidden", "true");
    }, e.show = function (t) {
      l(t) && (t || i).removeAttribute("aria-hidden");
    }, e.documentNotReadyOrSSRTesting = function () {
      i = null;
    }, e.resetForTesting = function () {
      i = null;
    };
    var o,
        r = (o = n(347)) && o.__esModule ? o : {
      "default": o
    },
        a = n(153),
        i = null;

    function s(t, e) {
      if (!t || !t.length) throw new Error("react-modal: No elements were found for selector " + e + ".");
    }

    function l(t) {
      return !(!t && !i && ((0, r["default"])(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), 1));
    }
  },
  21: function _(t, e, n) {
    var o = n(74),
        r = n(75),
        a = n(62),
        i = n(76);
    t.exports = function (t) {
      return o(t) || r(t) || a(t) || i();
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  210: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = new function t() {
      var e = this;
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.register = function (t) {
        -1 === e.openInstances.indexOf(t) && (e.openInstances.push(t), e.emit("register"));
      }, this.deregister = function (t) {
        var n = e.openInstances.indexOf(t);
        -1 !== n && (e.openInstances.splice(n, 1), e.emit("deregister"));
      }, this.subscribe = function (t) {
        e.subscribers.push(t);
      }, this.emit = function (t) {
        e.subscribers.forEach(function (n) {
          return n(t, e.openInstances.slice());
        });
      }, this.openInstances = [], this.subscribers = [];
    }();
    e["default"] = o, t.exports = e["default"];
  },
  23: function _(t, e) {
    function n(e) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (t.exports = n = function n(t) {
        return _typeof(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0) : (t.exports = n = function n(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0), n(e);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  3: function _(t, e) {
    t.exports = window.React;
  },
  305: function _(t, e) {
    t.exports = window.yoast.reactSelect;
  },
  306: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o,
        r = (o = n(343)) && o.__esModule ? o : {
      "default": o
    };
    e["default"] = r["default"], t.exports = e["default"];
  },
  330: function _(t, e, n) {},
  331: function _(t, e, n) {},
  332: function _(t, e, n) {},
  333: function _(t, e, n) {},
  334: function _(t, e, n) {},
  335: function _(t, e, n) {},
  336: function _(t, e, n) {},
  337: function _(t, e, n) {},
  338: function _(t, e, n) {},
  339: function _(t, e, n) {},
  340: function _(t, e, n) {},
  341: function _(t, e, n) {},
  342: function _(t, e, n) {},
  343: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.bodyOpenClassName = e.portalClassName = void 0;

    var o = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
      }

      return t;
    },
        r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
      };
    }(),
        a = n(3),
        i = h(a),
        s = h(n(38)),
        l = h(n(0)),
        c = h(n(344)),
        u = function (t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e["default"] = t, e;
    }(n(209)),
        p = n(153),
        d = h(p),
        f = n(128);

    function h(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    function b(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function m(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
    }

    var g = e.portalClassName = "ReactModalPortal",
        y = e.bodyOpenClassName = "ReactModal__Body--open",
        v = p.canUseDOM && void 0 !== s["default"].createPortal,
        x = function x() {
      return v ? s["default"].createPortal : s["default"].unstable_renderSubtreeIntoContainer;
    };

    function O(t) {
      return t();
    }

    var C = function (t) {
      function e() {
        var t, n, r;
        b(this, e);

        for (var a = arguments.length, l = Array(a), u = 0; u < a; u++) {
          l[u] = arguments[u];
        }

        return n = r = m(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(l))), r.removePortal = function () {
          !v && s["default"].unmountComponentAtNode(r.node);
          var t = O(r.props.parentSelector);
          t && t.contains(r.node) ? t.removeChild(r.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
        }, r.portalRef = function (t) {
          r.portal = t;
        }, r.renderPortal = function (t) {
          var n = x()(r, i["default"].createElement(c["default"], o({
            defaultStyles: e.defaultStyles
          }, t)), r.node);
          r.portalRef(n);
        }, m(r, n);
      }

      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), r(e, [{
        key: "componentDidMount",
        value: function value() {
          p.canUseDOM && (v || (this.node = document.createElement("div")), this.node.className = this.props.portalClassName, O(this.props.parentSelector).appendChild(this.node), !v && this.renderPortal(this.props));
        }
      }, {
        key: "getSnapshotBeforeUpdate",
        value: function value(t) {
          return {
            prevParent: O(t.parentSelector),
            nextParent: O(this.props.parentSelector)
          };
        }
      }, {
        key: "componentDidUpdate",
        value: function value(t, e, n) {
          if (p.canUseDOM) {
            var o = this.props,
                r = o.isOpen,
                a = o.portalClassName;
            t.portalClassName !== a && (this.node.className = a);
            var i = n.prevParent,
                s = n.nextParent;
            s !== i && (i.removeChild(this.node), s.appendChild(this.node)), (t.isOpen || r) && !v && this.renderPortal(this.props);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          if (p.canUseDOM && this.node && this.portal) {
            var t = this.portal.state,
                e = Date.now(),
                n = t.isOpen && this.props.closeTimeoutMS && (t.closesAt || e + this.props.closeTimeoutMS);
            n ? (t.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - e)) : this.removePortal();
          }
        }
      }, {
        key: "render",
        value: function value() {
          return p.canUseDOM && v ? (!this.node && v && (this.node = document.createElement("div")), x()(i["default"].createElement(c["default"], o({
            ref: this.portalRef,
            defaultStyles: e.defaultStyles
          }, this.props)), this.node)) : null;
        }
      }], [{
        key: "setAppElement",
        value: function value(t) {
          u.setElement(t);
        }
      }]), e;
    }(a.Component);

    C.propTypes = {
      isOpen: l["default"].bool.isRequired,
      style: l["default"].shape({
        content: l["default"].object,
        overlay: l["default"].object
      }),
      portalClassName: l["default"].string,
      bodyOpenClassName: l["default"].string,
      htmlOpenClassName: l["default"].string,
      className: l["default"].oneOfType([l["default"].string, l["default"].shape({
        base: l["default"].string.isRequired,
        afterOpen: l["default"].string.isRequired,
        beforeClose: l["default"].string.isRequired
      })]),
      overlayClassName: l["default"].oneOfType([l["default"].string, l["default"].shape({
        base: l["default"].string.isRequired,
        afterOpen: l["default"].string.isRequired,
        beforeClose: l["default"].string.isRequired
      })]),
      appElement: l["default"].instanceOf(d["default"]),
      onAfterOpen: l["default"].func,
      onRequestClose: l["default"].func,
      closeTimeoutMS: l["default"].number,
      ariaHideApp: l["default"].bool,
      shouldFocusAfterRender: l["default"].bool,
      shouldCloseOnOverlayClick: l["default"].bool,
      shouldReturnFocusAfterClose: l["default"].bool,
      preventScroll: l["default"].bool,
      parentSelector: l["default"].func,
      aria: l["default"].object,
      data: l["default"].object,
      role: l["default"].string,
      contentLabel: l["default"].string,
      shouldCloseOnEsc: l["default"].bool,
      overlayRef: l["default"].func,
      contentRef: l["default"].func,
      id: l["default"].string,
      overlayElement: l["default"].func,
      contentElement: l["default"].func
    }, C.defaultProps = {
      isOpen: !1,
      portalClassName: g,
      bodyOpenClassName: y,
      role: "dialog",
      ariaHideApp: !0,
      closeTimeoutMS: 0,
      shouldFocusAfterRender: !0,
      shouldCloseOnEsc: !0,
      shouldCloseOnOverlayClick: !0,
      shouldReturnFocusAfterClose: !0,
      preventScroll: !1,
      parentSelector: function parentSelector() {
        return document.body;
      },
      overlayElement: function overlayElement(t, e) {
        return i["default"].createElement("div", t, e);
      },
      contentElement: function contentElement(t, e) {
        return i["default"].createElement("div", t, e);
      }
    }, C.defaultStyles = {
      overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
      },
      content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
      }
    }, (0, f.polyfill)(C), e["default"] = C;
  },
  344: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var o = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
      }

      return t;
    },
        r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        a = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      return function (e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
      };
    }(),
        i = n(3),
        s = b(n(0)),
        l = h(n(345)),
        c = b(n(346)),
        u = h(n(209)),
        p = h(n(349)),
        d = b(n(153)),
        f = b(n(210));

    function h(t) {
      if (t && t.__esModule) return t;
      var e = {};
      if (null != t) for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
      return e["default"] = t, e;
    }

    function b(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    n(350);

    var m = {
      overlay: "ReactModal__Overlay",
      content: "ReactModal__Content"
    },
        g = 0,
        y = function (t) {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

        return n.setOverlayRef = function (t) {
          n.overlay = t, n.props.overlayRef && n.props.overlayRef(t);
        }, n.setContentRef = function (t) {
          n.content = t, n.props.contentRef && n.props.contentRef(t);
        }, n.afterClose = function () {
          var t = n.props,
              e = t.appElement,
              o = t.ariaHideApp,
              r = t.htmlOpenClassName,
              a = t.bodyOpenClassName;
          a && p.remove(document.body, a), r && p.remove(document.getElementsByTagName("html")[0], r), o && g > 0 && 0 == (g -= 1) && u.show(e), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (l.returnFocus(n.props.preventScroll), l.teardownScopedFocus()) : l.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose(), f["default"].deregister(n);
        }, n.open = function () {
          n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({
            beforeClose: !1
          })) : (n.props.shouldFocusAfterRender && (l.setupScopedFocus(n.node), l.markForFocusLater()), n.setState({
            isOpen: !0
          }, function () {
            n.setState({
              afterOpen: !0
            }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({
              overlayEl: n.overlay,
              contentEl: n.content
            });
          }));
        }, n.close = function () {
          n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout();
        }, n.focusContent = function () {
          return n.content && !n.contentHasFocus() && n.content.focus({
            preventScroll: !0
          });
        }, n.closeWithTimeout = function () {
          var t = Date.now() + n.props.closeTimeoutMS;
          n.setState({
            beforeClose: !0,
            closesAt: t
          }, function () {
            n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now());
          });
        }, n.closeWithoutTimeout = function () {
          n.setState({
            beforeClose: !1,
            isOpen: !1,
            afterOpen: !1,
            closesAt: null
          }, n.afterClose);
        }, n.handleKeyDown = function (t) {
          9 === t.keyCode && (0, c["default"])(n.content, t), n.props.shouldCloseOnEsc && 27 === t.keyCode && (t.stopPropagation(), n.requestClose(t));
        }, n.handleOverlayOnClick = function (t) {
          null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(t) : n.focusContent()), n.shouldClose = null;
        }, n.handleContentOnMouseUp = function () {
          n.shouldClose = !1;
        }, n.handleOverlayOnMouseDown = function (t) {
          n.props.shouldCloseOnOverlayClick || t.target != n.overlay || t.preventDefault();
        }, n.handleContentOnClick = function () {
          n.shouldClose = !1;
        }, n.handleContentOnMouseDown = function () {
          n.shouldClose = !1;
        }, n.requestClose = function (t) {
          return n.ownerHandlesClose() && n.props.onRequestClose(t);
        }, n.ownerHandlesClose = function () {
          return n.props.onRequestClose;
        }, n.shouldBeClosed = function () {
          return !n.state.isOpen && !n.state.beforeClose;
        }, n.contentHasFocus = function () {
          return document.activeElement === n.content || n.content.contains(document.activeElement);
        }, n.buildClassName = function (t, e) {
          var o = "object" === (void 0 === e ? "undefined" : r(e)) ? e : {
            base: m[t],
            afterOpen: m[t] + "--after-open",
            beforeClose: m[t] + "--before-close"
          },
              a = o.base;
          return n.state.afterOpen && (a = a + " " + o.afterOpen), n.state.beforeClose && (a = a + " " + o.beforeClose), "string" == typeof e && e ? a + " " + e : a;
        }, n.attributesFromObject = function (t, e) {
          return Object.keys(e).reduce(function (n, o) {
            return n[t + "-" + o] = e[o], n;
          }, {});
        }, n.state = {
          afterOpen: !1,
          beforeClose: !1
        }, n.shouldClose = null, n.moveFromContentToOverlay = null, n;
      }

      return function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(e, t), a(e, [{
        key: "componentDidMount",
        value: function value() {
          this.props.isOpen && this.open();
        }
      }, {
        key: "componentDidUpdate",
        value: function value(t, e) {
          this.props.isOpen && !t.isOpen ? this.open() : !this.props.isOpen && t.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !e.isOpen && this.focusContent();
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer);
        }
      }, {
        key: "beforeOpen",
        value: function value() {
          var t = this.props,
              e = t.appElement,
              n = t.ariaHideApp,
              o = t.htmlOpenClassName,
              r = t.bodyOpenClassName;
          r && p.add(document.body, r), o && p.add(document.getElementsByTagName("html")[0], o), n && (g += 1, u.hide(e)), f["default"].register(this);
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.id,
              n = t.className,
              r = t.overlayClassName,
              a = t.defaultStyles,
              i = t.children,
              s = n ? {} : a.content,
              l = r ? {} : a.overlay;
          if (this.shouldBeClosed()) return null;
          var c = {
            ref: this.setOverlayRef,
            className: this.buildClassName("overlay", r),
            style: o({}, l, this.props.style.overlay),
            onClick: this.handleOverlayOnClick,
            onMouseDown: this.handleOverlayOnMouseDown
          },
              u = o({
            id: e,
            ref: this.setContentRef,
            style: o({}, s, this.props.style.content),
            className: this.buildClassName("content", n),
            tabIndex: "-1",
            onKeyDown: this.handleKeyDown,
            onMouseDown: this.handleContentOnMouseDown,
            onMouseUp: this.handleContentOnMouseUp,
            onClick: this.handleContentOnClick,
            role: this.props.role,
            "aria-label": this.props.contentLabel
          }, this.attributesFromObject("aria", o({
            modal: !0
          }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
            "data-testid": this.props.testId
          }),
              p = this.props.contentElement(u, i);
          return this.props.overlayElement(c, p);
        }
      }]), e;
    }(i.Component);

    y.defaultProps = {
      style: {
        overlay: {},
        content: {}
      },
      defaultStyles: {}
    }, y.propTypes = {
      isOpen: s["default"].bool.isRequired,
      defaultStyles: s["default"].shape({
        content: s["default"].object,
        overlay: s["default"].object
      }),
      style: s["default"].shape({
        content: s["default"].object,
        overlay: s["default"].object
      }),
      className: s["default"].oneOfType([s["default"].string, s["default"].object]),
      overlayClassName: s["default"].oneOfType([s["default"].string, s["default"].object]),
      bodyOpenClassName: s["default"].string,
      htmlOpenClassName: s["default"].string,
      ariaHideApp: s["default"].bool,
      appElement: s["default"].instanceOf(d["default"]),
      onAfterOpen: s["default"].func,
      onAfterClose: s["default"].func,
      onRequestClose: s["default"].func,
      closeTimeoutMS: s["default"].number,
      shouldFocusAfterRender: s["default"].bool,
      shouldCloseOnOverlayClick: s["default"].bool,
      shouldReturnFocusAfterClose: s["default"].bool,
      preventScroll: s["default"].bool,
      role: s["default"].string,
      contentLabel: s["default"].string,
      aria: s["default"].object,
      data: s["default"].object,
      children: s["default"].node,
      shouldCloseOnEsc: s["default"].bool,
      overlayRef: s["default"].func,
      contentRef: s["default"].func,
      id: s["default"].string,
      overlayElement: s["default"].func,
      contentElement: s["default"].func,
      testId: s["default"].string
    }, e["default"] = y, t.exports = e["default"];
  },
  345: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.handleBlur = l, e.handleFocus = c, e.markForFocusLater = function () {
      a.push(document.activeElement);
    }, e.returnFocus = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          e = null;

      try {
        return void (0 !== a.length && (e = a.pop()).focus({
          preventScroll: t
        }));
      } catch (t) {
        console.warn(["You tried to return focus to", e, "but it is not in the DOM anymore"].join(" "));
      }
    }, e.popWithoutFocus = function () {
      a.length > 0 && a.pop();
    }, e.setupScopedFocus = function (t) {
      i = t, window.addEventListener ? (window.addEventListener("blur", l, !1), document.addEventListener("focus", c, !0)) : (window.attachEvent("onBlur", l), document.attachEvent("onFocus", c));
    }, e.teardownScopedFocus = function () {
      i = null, window.addEventListener ? (window.removeEventListener("blur", l), document.removeEventListener("focus", c)) : (window.detachEvent("onBlur", l), document.detachEvent("onFocus", c));
    };
    var o,
        r = (o = n(208)) && o.__esModule ? o : {
      "default": o
    },
        a = [],
        i = null,
        s = !1;

    function l() {
      s = !0;
    }

    function c() {
      if (s) {
        if (s = !1, !i) return;
        setTimeout(function () {
          i.contains(document.activeElement) || ((0, r["default"])(i)[0] || i).focus();
        }, 0);
      }
    }
  },
  346: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = function (t, e) {
      var n = (0, r["default"])(t);

      if (n.length) {
        var o = void 0,
            a = e.shiftKey,
            i = n[0],
            s = n[n.length - 1];

        if (t === document.activeElement) {
          if (!a) return;
          o = s;
        }

        if (s !== document.activeElement || a || (o = i), i === document.activeElement && a && (o = s), o) return e.preventDefault(), void o.focus();
        var l = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);

        if (null != l && "Chrome" != l[1] && null == /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) {
          var c = n.indexOf(document.activeElement);
          if (c > -1 && (c += a ? -1 : 1), void 0 === (o = n[c])) return e.preventDefault(), void (o = a ? s : i).focus();
          e.preventDefault(), o.focus();
        }
      } else e.preventDefault();
    };
    var o,
        r = (o = n(208)) && o.__esModule ? o : {
      "default": o
    };
    t.exports = e["default"];
  },
  347: function _(t, e, n) {
    "use strict";

    t.exports = function () {};
  },
  348: function _(t, e, n) {
    var o;
    !function () {
      "use strict";

      var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
          a = {
        canUseDOM: r,
        canUseWorkers: "undefined" != typeof Worker,
        canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
        canUseViewport: r && !!window.screen
      };
      void 0 === (o = function () {
        return a;
      }.call(e, n, e, t)) || (t.exports = o);
    }();
  },
  349: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.dumpClassLists = function () {};
    var o = {},
        r = {};
    e.add = function (t, e) {
      return n = t.classList, a = "html" == t.nodeName.toLowerCase() ? o : r, void e.split(" ").forEach(function (t) {
        !function (t, e) {
          t[e] || (t[e] = 0), t[e] += 1;
        }(a, t), n.add(t);
      });
      var n, a;
    }, e.remove = function (t, e) {
      return n = t.classList, a = "html" == t.nodeName.toLowerCase() ? o : r, void e.split(" ").forEach(function (t) {
        !function (t, e) {
          t[e] && (t[e] -= 1);
        }(a, t), 0 === a[t] && n.remove(t);
      });
      var n, a;
    };
  },
  350: function _(t, e, n) {
    "use strict";

    var o,
        r = (o = n(210)) && o.__esModule ? o : {
      "default": o
    },
        a = void 0,
        i = void 0,
        s = [];

    function l() {
      0 !== s.length && s[s.length - 1].focusContent();
    }

    r["default"].subscribe(function (t, e) {
      a && i || ((a = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""), a.style.position = "absolute", a.style.opacity = "0", a.setAttribute("tabindex", "0"), a.addEventListener("focus", l), (i = a.cloneNode()).addEventListener("focus", l)), (s = e).length > 0 ? (document.body.firstChild !== a && document.body.insertBefore(a, document.body.firstChild), document.body.lastChild !== i && document.body.appendChild(i)) : (a.parentElement && a.parentElement.removeChild(a), i.parentElement && i.parentElement.removeChild(i));
    });
  },
  36: function _(t, e, n) {
    var o = n(103);
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
          r,
          a = o(t, e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);

        for (r = 0; r < i.length; r++) {
          n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
        }
      }

      return a;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  37: function _(t, e) {
    function n(e, o) {
      return t.exports = n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n(e, o);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  38: function _(t, e) {
    t.exports = window.ReactDOM;
  },
  4: function _(t, e) {
    t.exports = window.yoast.styledComponents;
  },
  41: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        r = s(n(3)),
        a = s(n(71)),
        i = s(n(73));

    function s(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var l = void 0;

    e["default"] = function (t) {
      var e = t.mixedString,
          n = t.components,
          s = t.throwErrors;
      if (l = e, !n) return e;

      if ("object" !== (void 0 === n ? "undefined" : o(n))) {
        if (s) throw new Error("Interpolation Error: unable to process `" + e + "` because components is not an object");
        return e;
      }

      var c = (0, i["default"])(e);

      try {
        return function t(e, n) {
          var i,
              s,
              c,
              u,
              p,
              d,
              f,
              h,
              b = [],
              m = {};

          for (d = 0; d < e.length; d++) {
            if ("string" !== (p = e[d]).type) {
              if (!n.hasOwnProperty(p.value) || void 0 === n[p.value]) throw new Error("Invalid interpolation, missing component node: `" + p.value + "`");
              if ("object" !== o(n[p.value])) throw new Error("Invalid interpolation, component node must be a ReactElement or null: `" + p.value + "`", "\n> " + l);
              if ("componentClose" === p.type) throw new Error("Missing opening component token: `" + p.value + "`");

              if ("componentOpen" === p.type) {
                i = n[p.value], c = d;
                break;
              }

              b.push(n[p.value]);
            } else b.push(p.value);
          }

          return i && (u = function (t, e) {
            var n,
                o,
                r = e[t],
                a = 0;

            for (o = t + 1; o < e.length; o++) {
              if ((n = e[o]).value === r.value) {
                if ("componentOpen" === n.type) {
                  a++;
                  continue;
                }

                if ("componentClose" === n.type) {
                  if (0 === a) return o;
                  a--;
                }
              }
            }

            throw new Error("Missing closing component token `" + r.value + "`");
          }(c, e), f = t(e.slice(c + 1, u), n), s = r["default"].cloneElement(i, {}, f), b.push(s), u < e.length - 1 && (h = t(e.slice(u + 1), n), b = b.concat(h))), 1 === b.length ? b[0] : (b.forEach(function (t, e) {
            t && (m["interpolation-child-" + e] = t);
          }), (0, a["default"])(m));
        }(c, n);
      } catch (t) {
        if (s) throw new Error("Interpolation Error: unable to process `" + e + "` because of error `" + t.message + "`");
        return e;
      }
    };
  },
  42: function _(t, e, n) {
    "use strict";

    function o(t) {
      return function () {
        return t;
      };
    }

    var r = function r() {};

    r.thatReturns = o, r.thatReturnsFalse = o(!1), r.thatReturnsTrue = o(!0), r.thatReturnsNull = o(null), r.thatReturnsThis = function () {
      return this;
    }, r.thatReturnsArgument = function (t) {
      return t;
    }, t.exports = r;
  },
  5: function _(t, e) {
    t.exports = function (t, e) {
      return e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, {
        raw: {
          value: Object.freeze(e)
        }
      }));
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  51: function _(t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, o = new Array(e); n < e; n++) {
        o[n] = t[n];
      }

      return o;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  55: function _(t, e, n) {
    var o;
    !function () {
      "use strict";

      var n = {}.hasOwnProperty;

      function r() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          var o = arguments[e];

          if (o) {
            var a = _typeof(o);

            if ("string" === a || "number" === a) t.push(o);else if (Array.isArray(o) && o.length) {
              var i = r.apply(null, o);
              i && t.push(i);
            } else if ("object" === a) for (var s in o) {
              n.call(o, s) && o[s] && t.push(s);
            }
          }
        }

        return t.join(" ");
      }

      t.exports ? (r["default"] = r, t.exports = r) : void 0 === (o = function () {
        return r;
      }.apply(e, [])) || (t.exports = o);
    }();
  },
  6: function _(t, e) {
    t.exports = window.yoast.styleGuide;
  },
  60: function _(t, e) {
    t.exports = window.lodash.omit;
  },
  61: function _(t, e) {
    t.exports = window.wp.a11y;
  },
  62: function _(t, e, n) {
    var o = n(51);
    t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return o(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
      }
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  7: function _(t, e) {
    function n(e) {
      return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n(e);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  71: function _(t, e, n) {
    "use strict";

    var o = n(3),
        r = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
        a = n(42),
        i = n(19),
        s = n(72),
        l = "function" == typeof Symbol && Symbol.iterator;

    function c(t, e) {
      return t && "object" == _typeof(t) && null != t.key ? (n = t.key, o = {
        "=": "=0",
        ":": "=2"
      }, "$" + ("" + n).replace(/[=:]/g, function (t) {
        return o[t];
      })) : e.toString(36);
      var n, o;
    }

    var u = /\/+/g;

    function p(t) {
      return ("" + t).replace(u, "$&/");
    }

    var d,
        f,
        h = b,
        b = function b(t) {
      if (this.instancePool.length) {
        var e = this.instancePool.pop();
        return this.call(e, t), e;
      }

      return new this(t);
    };

    function m(t, e, n, o) {
      this.result = t, this.keyPrefix = e, this.func = n, this.context = o, this.count = 0;
    }

    function g(t, e, n) {
      var r,
          i,
          s = t.result,
          l = t.keyPrefix,
          c = t.func,
          u = t.context,
          d = c.call(u, e, t.count++);
      Array.isArray(d) ? y(d, s, n, a.thatReturnsArgument) : null != d && (o.isValidElement(d) && (r = d, i = l + (!d.key || e && e.key === d.key ? "" : p(d.key) + "/") + n, d = o.cloneElement(r, {
        key: i
      }, void 0 !== r.props ? r.props.children : void 0)), s.push(d));
    }

    function y(t, e, n, o, a) {
      var s = "";
      null != n && (s = p(n) + "/");
      var u = m.getPooled(e, s, o, a);
      !function (t, e, n) {
        null == t || function t(e, n, o, a) {
          var s,
              u = _typeof(e);

          if ("undefined" !== u && "boolean" !== u || (e = null), null === e || "string" === u || "number" === u || "object" === u && e.$$typeof === r) return o(a, e, "" === n ? "." + c(e, 0) : n), 1;
          var p = 0,
              d = "" === n ? "." : n + ":";
          if (Array.isArray(e)) for (var f = 0; f < e.length; f++) {
            p += t(s = e[f], d + c(s, f), o, a);
          } else {
            var h = function (t) {
              var e = t && (l && t[l] || t["@@iterator"]);
              if ("function" == typeof e) return e;
            }(e);

            if (h) for (var b, m = h.call(e), g = 0; !(b = m.next()).done;) {
              p += t(s = b.value, d + c(s, g++), o, a);
            } else if ("object" === u) {
              var y = "" + e;
              i(!1, "Objects are not valid as a React child (found: %s).%s", "[object Object]" === y ? "object with keys {" + Object.keys(e).join(", ") + "}" : y, "");
            }
          }
          return p;
        }(t, "", e, n);
      }(t, g, u), m.release(u);
    }

    m.prototype.destructor = function () {
      this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0;
    }, d = function d(t, e, n, o) {
      if (this.instancePool.length) {
        var r = this.instancePool.pop();
        return this.call(r, t, e, n, o), r;
      }

      return new this(t, e, n, o);
    }, (f = m).instancePool = [], f.getPooled = d || h, f.poolSize || (f.poolSize = 10), f.release = function (t) {
      i(t instanceof this, "Trying to release an instance into a pool of a different type."), t.destructor(), this.instancePool.length < this.poolSize && this.instancePool.push(t);
    }, t.exports = function (t) {
      if ("object" != _typeof(t) || !t || Array.isArray(t)) return s(!1, "React.addons.createFragment only accepts a single object. Got: %s", t), t;
      if (o.isValidElement(t)) return s(!1, "React.addons.createFragment does not accept a ReactElement without a wrapper object."), t;
      i(1 !== t.nodeType, "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");
      var e = [];

      for (var n in t) {
        y(t[n], e, n, a.thatReturnsArgument);
      }

      return e;
    };
  },
  72: function _(t, e, n) {
    "use strict";

    var o = n(42);
    t.exports = o;
  },
  73: function _(t, e, n) {
    "use strict";

    function o(t) {
      return t.match(/^\{\{\//) ? {
        type: "componentClose",
        value: t.replace(/\W/g, "")
      } : t.match(/\/\}\}$/) ? {
        type: "componentSelfClosing",
        value: t.replace(/\W/g, "")
      } : t.match(/^\{\{/) ? {
        type: "componentOpen",
        value: t.replace(/\W/g, "")
      } : {
        type: "string",
        value: t
      };
    }

    t.exports = function (t) {
      return t.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(o);
    };
  },
  738: function _(t, e, n) {
    "use strict";

    n.r(e), n.d(e, "NewButton", function () {
      return et;
    }), n.d(e, "ButtonStyledLink", function () {
      return nt;
    }), n.d(e, "CloseButton", function () {
      return at;
    }), n.d(e, "Checkbox", function () {
      return Ct;
    }), n.d(e, "DataModel", function () {
      return kt;
    }), n.d(e, "FieldGroup", function () {
      return Ot;
    }), n.d(e, "ImageSelect", function () {
      return Zt;
    }), n.d(e, "ImageSelectButtons", function () {
      return St;
    }), n.d(e, "TextInput", function () {
      return te;
    }), n.d(e, "DurationInput", function () {
      return le;
    }), n.d(e, "RadioButtonGroup", function () {
      return ve;
    }), n.d(e, "SingleSelect", function () {
      return Te;
    }), n.d(e, "MultiSelect", function () {
      return qe;
    }), n.d(e, "Select", function () {
      return Pe;
    }), n.d(e, "StarRating", function () {
      return Be;
    }), n.d(e, "helpIconDefaultProps", function () {
      return ct;
    }), n.d(e, "helpIconProps", function () {
      return lt;
    }), n.d(e, "HelpIcon", function () {
      return pt;
    }), n.d(e, "NewBadge", function () {
      return ft;
    }), n.d(e, "PremiumBadge", function () {
      return bt;
    }), n.d(e, "StyledSection", function () {
      return B;
    }), n.d(e, "StyledSectionBase", function () {
      return E;
    }), n.d(e, "StyledHeading", function () {
      return w;
    }), n.d(e, "LinkButton", function () {
      return W;
    }), n.d(e, "Button", function () {
      return H;
    }), n.d(e, "BaseButton", function () {
      return F;
    }), n.d(e, "addHoverStyle", function () {
      return L;
    }), n.d(e, "addActiveStyle", function () {
      return A;
    }), n.d(e, "addFocusStyle", function () {
      return D;
    }), n.d(e, "addBaseStyle", function () {
      return z;
    }), n.d(e, "addButtonStyles", function () {
      return $;
    }), n.d(e, "Collapsible", function () {
      return bn;
    }), n.d(e, "CollapsibleStateless", function () {
      return sn;
    }), n.d(e, "StyledIconsButton", function () {
      return on;
    }), n.d(e, "StyledContainer", function () {
      return en;
    }), n.d(e, "StyledContainerTopLevel", function () {
      return nn;
    }), n.d(e, "wrapInHeading", function () {
      return rn;
    }), n.d(e, "Alert", function () {
      return Gt;
    }), n.d(e, "ArticleList", function () {
      return Nn;
    }), n.d(e, "Card", function () {
      return Zn;
    }), n.d(e, "FullHeightCard", function () {
      return Xn;
    }), n.d(e, "CardBanner", function () {
      return Mn;
    }), n.d(e, "CourseDetails", function () {
      return io;
    }), n.d(e, "IconLabeledButton", function () {
      return ho;
    }), n.d(e, "IconButton", function () {
      return go;
    }), n.d(e, "IconsButton", function () {
      return Me;
    }), n.d(e, "ErrorBoundary", function () {
      return Oo;
    }), n.d(e, "Heading", function () {
      return b;
    }), n.d(e, "HelpText", function () {
      return ko;
    }), n.d(e, "Icon", function () {
      return To;
    }), n.d(e, "IconButtonToggle", function () {
      return Bo;
    }), n.d(e, "IFrame", function () {
      return Io;
    }), n.d(e, "Input", function () {
      return zo;
    }), n.d(e, "WordOccurrenceInsights", function () {
      return Vo;
    }), n.d(e, "Label", function () {
      return Xo;
    }), n.d(e, "SimulatedLabel", function () {
      return Ko;
    }), n.d(e, "LanguageNotice", function () {
      return nr;
    }), n.d(e, "languageNoticePropType", function () {
      return or;
    }), n.d(e, "Loader", function () {
      return pr;
    }), n.d(e, "MultiStepProgress", function () {
      return vr;
    }), n.d(e, "Notification", function () {
      return Br;
    }), n.d(e, "Paper", function () {
      return kr;
    }), n.d(e, "ProgressBar", function () {
      return Fr;
    }), n.d(e, "Section", function () {
      return O;
    }), n.d(e, "SectionTitle", function () {
      return Xe;
    }), n.d(e, "ScoreAssessments", function () {
      return Qr;
    }), n.d(e, "StackedProgressBar", function () {
      return ca;
    }), n.d(e, "SvgIcon", function () {
      return _;
    }), n.d(e, "icons", function () {
      return j;
    }), n.d(e, "SynonymsInput", function () {
      return ga;
    }), n.d(e, "Textarea", function () {
      return va;
    }), n.d(e, "Textfield", function () {
      return ka;
    }), n.d(e, "Toggle", function () {
      return Ia;
    }), n.d(e, "UpsellButton", function () {
      return Va;
    }), n.d(e, "UpsellLinkButton", function () {
      return Ga;
    }), n.d(e, "YoastButton", function () {
      return $a;
    }), n.d(e, "InputField", function () {
      return da;
    }), n.d(e, "YoastLinkButton", function () {
      return Ya;
    }), n.d(e, "Logo", function () {
      return Qa;
    }), n.d(e, "Modal", function () {
      return ai;
    }), n.d(e, "YoastSeoIcon", function () {
      return ii;
    }), n.d(e, "Tabs", function () {
      return zi;
    }), n.d(e, "Warning", function () {
      return Wi;
    }), n.d(e, "YouTubeVideo", function () {
      return Ki;
    }), n.d(e, "WordList", function () {
      return Zi;
    }), n.d(e, "WordOccurrences", function () {
      return Uo;
    }), n.d(e, "VariableEditorInputContainer", function () {
      return ua;
    }), n.d(e, "InsightsCard", function () {
      return ue;
    }), n.d(e, "ListTable", function () {
      return es;
    }), n.d(e, "ZebrafiedListTable", function () {
      return ns;
    }), n.d(e, "Row", function () {
      return os;
    }), n.d(e, "ScreenReaderText", function () {
      return Ke;
    }), n.d(e, "ScreenReaderShortcut", function () {
      return as;
    }), n.d(e, "KeywordSuggestions", function () {
      return Vo;
    }), n(330), n(331), n(332), n(333), n(334), n(335);

    var o = n(5),
        r = n.n(o),
        a = n(1),
        i = n(3),
        s = n.n(i),
        l = n(0),
        c = n.n(l),
        u = n(4),
        p = n.n(u),
        d = n(6),
        f = n(14),
        h = function h(t) {
      var e = "h".concat(t.level);
      return Object(a.createElement)(e, {
        className: t.className
      }, t.children);
    };

    h.propTypes = {
      level: c.a.number,
      className: c.a.string,
      children: c.a.any
    }, h.defaultProps = {
      level: 1
    };

    var b = h,
        m = function m(t) {
      return Object(a.createElement)("section", {
        className: t.className
      }, t.headingText && Object(a.createElement)(b, {
        level: t.headingLevel,
        className: t.headingClassName
      }, t.headingText), t.children);
    };

    m.propTypes = {
      className: c.a.string,
      headingText: c.a.string,
      headingLevel: c.a.number,
      headingClassName: c.a.string,
      children: c.a.any
    }, m.defaultProps = {
      headingLevel: 1
    };

    var g,
        y,
        v,
        x,
        O = m,
        C = p.a.svg(g || (g = r()(["\n\twidth: ", ";\n\theight: ", ";\n\tflex: none;\n\n\tanimation: loadingSpinnerRotator 1.4s linear infinite;\n\n\t& .path {\n\t\tstroke: ", ";\n\t\tstroke-dasharray: 187;\n\t\tstroke-dashoffset: 0;\n\t\ttransform-origin: center;\n\t\tanimation: loadingSpinnerDash 1.4s ease-in-out infinite;\n\t}\n\n\t@keyframes loadingSpinnerRotator {\n\t\t0% { transform: rotate( 0deg ); }\n\t\t100% { transform: rotate( 270deg ); }\n\t}\n\n\t@keyframes loadingSpinnerDash {\n\t\t0% { stroke-dashoffset: 187; }\n\t\t50% {\n\t\t\tstroke-dashoffset: 47;\n\t\t\ttransform:rotate( 135deg );\n\t\t}\n\t\t100% {\n\t\t\tstroke-dashoffset: 187;\n\t\t\ttransform: rotate( 450deg );\n\t\t}\n\t}\n"])), function (t) {
      return t.size;
    }, function (t) {
      return t.size;
    }, function (t) {
      return t.fill;
    }),
        j = {
      "chevron-down": {
        viewbox: "0 0 24 24",
        width: "24px",
        path: [Object(a.createElement)("g", {
          key: "1"
        }, Object(a.createElement)("path", {
          fill: "none",
          d: "M0,0h24v24H0V0z"
        })), Object(a.createElement)("g", {
          key: "2"
        }, Object(a.createElement)("path", {
          d: "M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"
        }))]
      },
      "chevron-up": {
        viewbox: "0 0 24 24",
        width: "24px",
        path: [Object(a.createElement)("g", {
          key: "1"
        }, Object(a.createElement)("path", {
          fill: "none",
          d: "M0,0h24v24H0V0z"
        })), Object(a.createElement)("g", {
          key: "2"
        }, Object(a.createElement)("path", {
          d: "M12,8l-6,6l1.41,1.41L12,10.83l4.59,4.58L18,14L12,8z"
        }))]
      },
      clipboard: {
        viewbox: "0 0 1792 1792",
        path: "M768 1664h896v-640h-416q-40 0-68-28t-28-68v-416h-384v1152zm256-1440v-64q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm256 672h299l-299-299v299zm512 128v672q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-544q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h1088q40 0 68 28t28 68v328q21 13 36 28l408 408q28 28 48 76t20 88z"
      },
      check: {
        viewbox: "0 0 1792 1792",
        path: "M249.2,431.2c-23,0-45.6,9.4-61.8,25.6L25.6,618.6C9.4,634.8,0,657.4,0,680.4c0,23,9.4,45.6,25.6,61.8 l593.1,593.1c16.2,16.2,38.8,25.6,61.8,25.6c23,0,45.6-9.4,61.8-25.6L1766.4,311c16.2-16.2,25.6-38.8,25.6-61.8 s-9.4-45.6-25.6-61.8L1604.5,25.6C1588.3,9.4,1565.8,0,1542.8,0c-23,0-45.6,9.4-61.8,25.6L680.4,827L311,456.3 C294.8,440.5,272.3,431.2,249.2,431.2z"
      },
      "angle-down": {
        viewbox: "0 0 1792 1792",
        path: "M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
      },
      "angle-left": {
        viewbox: "0 0 1792 1792",
        path: "M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"
      },
      "angle-right": {
        viewbox: "0 0 1792 1792",
        path: "M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"
      },
      "angle-up": {
        viewbox: "0 0 1792 1792",
        path: "M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"
      },
      "arrow-down": {
        viewbox: "0 0 1792 1792",
        path: "M896 1791L120.91 448.5L1671.09 448.5z"
      },
      "arrow-left": {
        viewbox: "0 0 1792 1792",
        path: "M1343.5 1671.09L1 896L1343.5 120.91z"
      },
      "arrow-right": {
        viewbox: "0 0 1792 1792",
        path: "M1791 896L448.5 1671.09L448.5 120.91z"
      },
      "arrow-up": {
        viewbox: "0 0 1792 1792",
        path: "M1671.09 1343.5L120.91 1343.5L896 1z"
      },
      "caret-right": {
        viewbox: "0 0 192 512",
        path: "M 0 384.662 V 127.338 c 0 -17.818 21.543 -26.741 34.142 -14.142 l 128.662 128.662 c 7.81 7.81 7.81 20.474 0 28.284 L 34.142 398.804 C 21.543 411.404 0 402.48 0 384.662 Z"
      },
      circle: {
        viewbox: "0 0 1792 1792",
        path: "M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
      },
      desktop: {
        viewbox: "0 0 1792 1792",
        path: "M1728 992v-832q0-13-9.5-22.5t-22.5-9.5h-1600q-13 0-22.5 9.5t-9.5 22.5v832q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5zm128-832v1088q0 66-47 113t-113 47h-544q0 37 16 77.5t32 71 16 43.5q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45q0-14 16-44t32-70 16-78h-544q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1600q66 0 113 47t47 113z"
      },
      edit: {
        viewbox: "0 0 1792 1792",
        path: "M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"
      },
      eye: {
        viewbox: "0 0 1792 1792",
        path: "M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"
      },
      "exclamation-triangle": {
        viewbox: "0 0 1792 1792",
        path: "M1024 1375v-190q0-14-9.5-23.5T992 1152H800q-13 0-22.5 9.5T768 1185v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11H786q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17H128q-34 0-63.5-17T18 1601q-37-63-2-126L784 67q17-31 47-49t65-18 65 18 47 49z"
      },
      "file-text": {
        viewbox: "0 0 1792 1792",
        path: "M1596 380q28 28 48 76t20 88v1152q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h896q40 0 88 20t76 48zm-444-244v376h376q-10-29-22-41l-313-313q-12-12-41-22zm384 1528v-1024h-416q-40 0-68-28t-28-68v-416h-768v1536h1280zm-1024-864q0-14 9-23t23-9h704q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64zm736 224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704zm0 256q14 0 23 9t9 23v64q0 14-9 23t-23 9h-704q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h704z"
      },
      gear: {
        viewbox: "0 0 1792 1792",
        path: "M1800 800h-218q-26 -107 -81 -193l154 -154l-210 -210l-154 154q-88 -55 -191 -79v-218h-300v218q-103 24 -191 79l-154 -154l-212 212l154 154q-55 88 -79 191h-218v297h217q23 101 80 194l-154 154l210 210l154 -154q85 54 193 81v218h300v-218q103 -24 191 -79 l154 154l212 -212l-154 -154q57 -93 80 -194h217v-297zM950 650q124 0 212 88t88 212t-88 212t-212 88t-212 -88t-88 -212t88 -212t212 -88z"
      },
      key: {
        viewbox: "0 0 1792 1792",
        path: "M832 512q0-80-56-136t-136-56-136 56-56 136q0 42 19 83-41-19-83-19-80 0-136 56t-56 136 56 136 136 56 136-56 56-136q0-42-19-83 41 19 83 19 80 0 136-56t56-136zm851 704q0 17-49 66t-66 49q-9 0-28.5-16t-36.5-33-38.5-40-24.5-26l-96 96 220 220q28 28 28 68 0 42-39 81t-81 39q-40 0-68-28l-671-671q-176 131-365 131-163 0-265.5-102.5t-102.5-265.5q0-160 95-313t248-248 313-95q163 0 265.5 102.5t102.5 265.5q0 189-131 365l355 355 96-96q-3-3-26-24.5t-40-38.5-33-36.5-16-28.5q0-17 49-66t66-49q13 0 23 10 6 6 46 44.5t82 79.5 86.5 86 73 78 28.5 41z"
      },
      list: {
        viewbox: "0 0 1792 1792",
        path: "M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"
      },
      "loading-spinner": {
        viewbox: "0 0 66 66",
        CustomComponent: C,
        path: [Object(a.createElement)("circle", {
          key: "5",
          className: "path",
          fill: "none",
          strokeWidth: "6",
          strokeLinecap: "round",
          cx: "33",
          cy: "33",
          r: "30"
        })]
      },
      mobile: {
        viewbox: "0 0 1792 1792",
        path: "M976 1408q0-33-23.5-56.5t-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5 56.5-23.5 23.5-56.5zm208-160v-704q0-13-9.5-22.5t-22.5-9.5h-512q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h512q13 0 22.5-9.5t9.5-22.5zm-192-848q0-16-16-16h-160q-16 0-16 16t16 16h160q16 0 16-16zm288-16v1024q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90v-1024q0-52 38-90t90-38h512q52 0 90 38t38 90z"
      },
      "pencil-square": {
        viewbox: "0 0 1792 1792",
        path: "M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1l-350 350q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672h-288v-288zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"
      },
      plus: {
        viewbox: "0 0 1792 1792",
        path: "M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
      },
      "plus-circle": {
        viewbox: "0 0 1792 1792",
        path: "M1344 960v-128q0-26-19-45t-45-19h-256v-256q0-26-19-45t-45-19h-128q-26 0-45 19t-19 45v256h-256q-26 0-45 19t-19 45v128q0 26 19 45t45 19h256v256q0 26 19 45t45 19h128q26 0 45-19t19-45v-256h256q26 0 45-19t19-45zm320-64q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
      },
      "question-circle": {
        viewbox: "0 0 1792 1792",
        path: "M1024 1376v-192q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23-9t9-23zm256-672q0-88-55.5-163t-138.5-116-170-41q-243 0-371 213-15 24 8 42l132 100q7 6 19 6 16 0 25-12 53-68 86-92 34-24 86-24 48 0 85.5 26t37.5 59q0 38-20 61t-68 45q-63 28-115.5 86.5t-52.5 125.5v36q0 14 9 23t23 9h192q14 0 23-9t9-23q0-19 21.5-49.5t54.5-49.5q32-18 49-28.5t46-35 44.5-48 28-60.5 12.5-81zm384 192q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"
      },
      search: {
        viewbox: "0 0 1792 1792",
        path: "M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"
      },
      "seo-score-bad": {
        viewbox: "0 0 496 512",
        path: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8z M328 176c17.7 0 32 14.3 32 32 s-14.3 32-32 32s-32-14.3-32-32S310.3 176 328 176z M168 176c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32S150.3 176 168 176 z M338.2 394.2C315.8 367.4 282.9 352 248 352s-67.8 15.4-90.2 42.2c-13.5 16.3-38.1-4.2-24.6-20.5C161.7 339.6 203.6 320 248 320 s86.3 19.6 114.7 53.8C376.3 390 351.7 410.5 338.2 394.2L338.2 394.2z"
      },
      "seo-score-good": {
        viewbox: "0 0 496 512",
        path: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8z M328 176c17.7 0 32 14.3 32 32 s-14.3 32-32 32s-32-14.3-32-32S310.3 176 328 176z M168 176c17.7 0 32 14.3 32 32s-14.3 32-32 32s-32-14.3-32-32S150.3 176 168 176 z M362.8 346.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5c22.4 26.9 55.2 42.2 90.2 42.2 s67.8-15.4 90.2-42.2C351.6 309.5 376.3 329.9 362.8 346.2L362.8 346.2z"
      },
      "seo-score-none": {
        viewbox: "0 0 496 512",
        path: "M248 8C111 8 0 119 0 256s111 248 248 248s248-111 248-248S385 8 248 8z"
      },
      "seo-score-ok": {
        viewbox: "0 0 496 512",
        path: [Object(a.createElement)("path", {
          key: "1",
          fill: "#000000",
          d: "M344 336c21.2 0 21.2 32 0 32H152c-21.2 0-21.2-32 0-32H344z"
        }), Object(a.createElement)("circle", {
          key: "2",
          fill: "#000000",
          cx: "328",
          cy: "208",
          r: "32"
        }), Object(a.createElement)("circle", {
          key: "3",
          fill: "#000000",
          cx: "168",
          cy: "208",
          r: "32"
        }), Object(a.createElement)("path", {
          key: "4",
          d: "M248 8c137 0 248 111 248 248S385 504 248 504S0 393 0 256S111 8 248 8z M360 208c0-17.7-14.3-32-32-32 s-32 14.3-32 32s14.3 32 32 32S360 225.7 360 208z M344 368c21.2 0 21.2-32 0-32H152c-21.2 0-21.2 32 0 32H344z M200 208 c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32S200 225.7 200 208z"
        })]
      },
      times: {
        viewbox: "0 0 1792 1792",
        path: "M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
      },
      "times-circle": {
        viewbox: "0 0 20 20",
        path: "M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8zm5 11l-3-3 3-3-2-2-3 3-3-3-2 2 3 3-3 3 2 2 3-3 3 3z"
      },
      "alert-info": {
        viewbox: "0 0 512 512",
        path: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
      },
      "alert-error": {
        viewbox: "0 0 512 512",
        path: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
      },
      "alert-success": {
        viewbox: "0 0 512 512",
        path: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
      },
      "alert-warning": {
        viewbox: "0 0 576 512",
        path: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
      }
    },
        _ = Object(f.createSvgIconComponent)(j),
        w = p()(b)(y || (y = r()(["\n\tmargin-left: ", ";\n\tpadding: ", ";\n"])), Object(f.getDirectionalStyle)("0", "20px"), Object(f.getDirectionalStyle)("0", "20px")),
        k = p()(_)(v || (v = r()([""]))),
        E = p()(O)(x || (x = r()(["\n\tbox-shadow: ", ";\n\tbackground-color: ", ";\n\tpadding-right: ", ";\n\tpadding-left: ", ";\n\tpadding-bottom: ", ";\n\tpadding-top: ", ";\n\n\t*, & {\n\t\tbox-sizing: border-box;\n\n\t\t&:before, &:after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\n\t& ", ' {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding: 8px 0 0;\n\t\tfont-size: 1rem;\n\t\tline-height: 1.5;\n\t\tmargin: 0 0 16px;\n\t\tfont-family: "Open Sans", sans-serif;\n\t\tfont-weight: 300;\n\t\tcolor: ', ";\n\t}\n\n\t& ", " {\n\t\tflex: 0 0 auto;\n\t\t", ": 8px;\n\t}\n"])), function (t) {
      return t.hasPaperStyle ? "0 1px 2px ".concat(Object(d.rgba)(d.colors.$color_black, .2)) : "none";
    }, function (t) {
      return t.hasPaperStyle ? d.colors.$color_white : "transparent";
    }, function (t) {
      return t.hasPaperStyle ? "20px" : "0";
    }, function (t) {
      return t.hasPaperStyle ? "20px" : "0";
    }, function (t) {
      return t.headingText ? "0" : "10px";
    }, function (t) {
      return t.headingText ? "0" : "10px";
    }, w, function (t) {
      return t.headingColor ? t.headingColor : "".concat(d.colors.$color_grey_dark);
    }, k, Object(f.getDirectionalStyle)("margin-right", "margin-left")),
        S = function S(t) {
      return Object(a.createElement)(E, {
        className: t.className,
        headingColor: t.headingColor,
        hasPaperStyle: t.hasPaperStyle
      }, t.headingText && Object(a.createElement)(w, {
        level: t.headingLevel,
        className: t.headingClassName
      }, t.headingIcon && Object(a.createElement)(k, {
        icon: t.headingIcon,
        color: t.headingIconColor,
        size: t.headingIconSize
      }), t.headingText), t.children);
    };

    S.propTypes = {
      className: c.a.string,
      headingLevel: c.a.number,
      headingClassName: c.a.string,
      headingColor: c.a.string,
      headingIcon: c.a.string,
      headingIconColor: c.a.string,
      headingIconSize: c.a.string,
      headingText: c.a.string,
      hasPaperStyle: c.a.bool,
      children: c.a.any
    }, S.defaultProps = {
      className: "yoast-section",
      headingLevel: 2,
      hasPaperStyle: !0
    };
    var R,
        T,
        q,
        P,
        N,
        B = S,
        I = n(145),
        M = n.n(I);

    function z(t) {
      return p()(t)(R || (R = r()(["\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tvertical-align: middle;\n\t\tborder-width: ", ";\n\t\tborder-style: solid;\n\t\tmargin: 0;\n\t\tpadding: ", " 10px;\n\t\tborder-radius: 3px;\n\t\tcursor: pointer;\n\t\tbox-sizing: border-box;\n\t\tfont-size: inherit;\n\t\tfont-family: inherit;\n\t\tfont-weight: inherit;\n\t\ttext-align: ", ";\n\t\toverflow: visible;\n\t\tmin-height: ", ';\n\t\ttransition: var(--yoast-transition-default);\n\n\t\tsvg {\n\t\t\t// Safari 10\n\t\t\talign-self: center;\n\t\t}\n\n\t\t// Only needed for IE 10+. Don\'t add spaces within brackets for this to work.\n\t\t@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n\t\t\t::after {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcontent: "";\n\t\t\t\tmin-height: ', ";\n\t\t\t}\n\t\t}\n\t"])), "".concat(1, "px"), "".concat(4, "px"), Object(f.getDirectionalStyle)("left", "right"), "".concat(32, "px"), "".concat(22, "px"));
    }

    function D(t) {
      return p()(t)(T || (T = r()(["\n\t\t&::-moz-focus-inner {\n\t\t\tborder-width: 0;\n\t\t}\n\n\t\t&:focus {\n\t\t\toutline: none;\n\t\t\tborder-color: ", ";\n\t\t\tcolor: ", ";\n\t\t\tbackground-color: ", ";\n\t\t\tbox-shadow: 0 0 3px ", "\n\t\t}\n\t"])), function (t) {
        return t.focusBorderColor;
      }, function (t) {
        return t.focusColor;
      }, function (t) {
        return t.focusBackgroundColor;
      }, function (t) {
        return Object(d.rgba)(t.focusBoxShadowColor, .8);
      });
    }

    function L(t) {
      return p()(t)(q || (q = r()(["\n\t\t&:hover {\n\t\t\tcolor: ", ";\n\t\t\tbackground-color: ", ";\n\t\t\tborder-color: var(--yoast-color-border--default);\n\t\t}\n\t"])), function (t) {
        return t.hoverColor;
      }, function (t) {
        return t.hoverBackgroundColor;
      });
    }

    function A(t) {
      return p()(t)(P || (P = r()(["\n\t\t&:active {\n\t\t\tcolor: ", ";\n\t\t\tbackground-color: ", ";\n\t\t\tborder-color: ", ";\n\t\t\tbox-shadow: inset 0 2px 5px -3px ", "\n\t\t}\n\t"])), function (t) {
        return t.activeColor;
      }, function (t) {
        return t.activeBackgroundColor;
      }, function (t) {
        return t.hoverBorderColor;
      }, function (t) {
        return Object(d.rgba)(t.activeBorderColor, .5);
      });
    }

    var $ = M()([A, D, L, z]),
        F = $(p.a.button(N || (N = r()(["\n\t\tcolor: ", ";\n\t\tborder-color: ", ";\n\t\tbackground: ", ";\n\t\tbox-shadow: 0 1px 0 ", ";\n\t"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.borderColor;
    }, function (t) {
      return t.backgroundColor;
    }, function (t) {
      return Object(d.rgba)(t.boxShadowColor, 1);
    }));
    F.propTypes = {
      type: c.a.string,
      backgroundColor: c.a.string,
      textColor: c.a.string,
      borderColor: c.a.string,
      boxShadowColor: c.a.string,
      hoverColor: c.a.string,
      hoverBackgroundColor: c.a.string,
      activeColor: c.a.string,
      activeBackgroundColor: c.a.string,
      activeBorderColor: c.a.string,
      focusColor: c.a.string,
      focusBackgroundColor: c.a.string,
      focusBorderColor: c.a.string,
      focusBoxShadowColor: c.a.string
    }, F.defaultProps = {
      type: "button",
      backgroundColor: d.colors.$color_button,
      textColor: d.colors.$color_button_text,
      borderColor: d.colors.$color_button_border,
      boxShadowColor: d.colors.$color_button_border,
      hoverColor: d.colors.$color_button_text_hover,
      hoverBackgroundColor: d.colors.$color_button_hover,
      activeColor: d.colors.$color_button_text_hover,
      activeBackgroundColor: d.colors.$color_button,
      activeBorderColor: d.colors.$color_button_border_active,
      focusColor: d.colors.$color_button_text_hover,
      focusBackgroundColor: d.colors.$color_white,
      focusBorderColor: d.colors.$color_blue,
      focusBoxShadowColor: d.colors.$color_blue_dark
    };
    var U,
        H = F,
        W = $(p.a.a(U || (U = r()(["\n\t\ttext-decoration: none;\n\t\tcolor: ", ";\n\t\tborder-color: ", ";\n\t\tbackground: ", ";\n\t\tbox-shadow: 0 1px 0 ", ";\n\t"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.borderColor;
    }, function (t) {
      return t.backgroundColor;
    }, function (t) {
      return Object(d.rgba)(t.boxShadowColor, 1);
    }));
    W.propTypes = {
      backgroundColor: c.a.string,
      textColor: c.a.string,
      borderColor: c.a.string,
      boxShadowColor: c.a.string,
      hoverColor: c.a.string,
      hoverBackgroundColor: c.a.string,
      hoverBorderColor: c.a.string,
      activeColor: c.a.string,
      activeBackgroundColor: c.a.string,
      activeBorderColor: c.a.string,
      focusColor: c.a.string,
      focusBackgroundColor: c.a.string,
      focusBorderColor: c.a.string,
      focusBoxShadowColor: c.a.string
    }, W.defaultProps = {
      backgroundColor: d.colors.$color_button,
      textColor: d.colors.$color_button_text,
      borderColor: d.colors.$color_button_border,
      boxShadowColor: d.colors.$color_button_border,
      hoverColor: d.colors.$color_button_text_hover,
      hoverBackgroundColor: d.colors.$color_button_hover,
      hoverBorderColor: d.colors.$color_button_border_hover,
      activeColor: d.colors.$color_button_text_hover,
      activeBackgroundColor: d.colors.$color_button,
      activeBorderColor: d.colors.$color_button_border_hover,
      focusColor: d.colors.$color_button_text_hover,
      focusBackgroundColor: d.colors.$color_white,
      focusBorderColor: d.colors.$color_blue,
      focusBoxShadowColor: d.colors.$color_blue_dark
    }, n(151);

    var V = n(17),
        K = n.n(V),
        G = n(36),
        Y = n.n(G),
        Z = "yoast-button yoast-button--",
        X = {
      buy: {
        iconAfter: "yoast-button--buy__caret"
      },
      edit: {
        iconBefore: "yoast-button--edit"
      },
      upsell: {
        iconAfter: "yoast-button--buy__caret"
      }
    },
        J = {
      primary: Z + "primary",
      secondary: Z + "secondary",
      buy: Z + "buy",
      hide: "yoast-hide",
      remove: "yoast-remove",
      upsell: Z + "buy",
      purple: Z + "primary",
      grey: Z + "secondary",
      yellow: Z + "buy",
      edit: Z + "primary"
    },
        Q = function Q(t, e) {
      var n = J[t];
      return e && (n += " yoast-button--small"), n;
    },
        tt = function tt(t) {
      return X[t] || null;
    },
        et = function et(t) {
      var e = t.children,
          n = t.className,
          o = t.variant,
          r = t.small,
          i = t.type,
          s = t.buttonRef,
          l = Y()(t, ["children", "className", "variant", "small", "type", "buttonRef"]),
          c = tt(o),
          u = c && c.iconBefore,
          p = c && c.iconAfter;
      return Object(a.createElement)("button", K()({
        ref: s,
        className: n || Q(o, r),
        type: i
      }, l), !!u && Object(a.createElement)("span", {
        className: u
      }), e, !!p && Object(a.createElement)("span", {
        className: p
      }));
    };

    et.propTypes = {
      onClick: c.a.func,
      type: c.a.string,
      className: c.a.string,
      buttonRef: c.a.object,
      small: c.a.bool,
      variant: c.a.oneOf(Object.keys(J)),
      children: c.a.oneOfType([c.a.node, c.a.arrayOf(c.a.node)])
    }, et.defaultProps = {
      className: "",
      type: "button",
      variant: "primary",
      small: !1,
      children: null,
      onClick: null,
      buttonRef: null
    };

    var nt = function nt(t) {
      var e = t.children,
          n = t.className,
          o = t.variant,
          r = t.small,
          i = t.buttonRef,
          s = Y()(t, ["children", "className", "variant", "small", "buttonRef"]),
          l = tt(o),
          c = l && l.iconBefore,
          u = l && l.iconAfter;
      return Object(a.createElement)("a", K()({
        className: n || Q(o, r),
        ref: i
      }, s), !!c && Object(a.createElement)("span", {
        className: c
      }), e, !!u && Object(a.createElement)("span", {
        className: u
      }));
    };

    nt.propTypes = {
      href: c.a.string.isRequired,
      variant: c.a.oneOf(Object.keys(J)),
      small: c.a.bool,
      className: c.a.string,
      buttonRef: c.a.object,
      children: c.a.oneOfType([c.a.node, c.a.arrayOf(c.a.node)])
    }, nt.defaultProps = {
      className: "",
      variant: "primary",
      small: !1,
      children: null,
      buttonRef: null
    };

    var ot = n(10),
        rt = Object(a.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 352 512",
      role: "img",
      "aria-hidden": "true",
      focusable: "false"
    }, Object(a.createElement)("path", {
      d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
    })),
        at = function at(t) {
      return Object(a.createElement)("button", K()({
        className: "yoast-close",
        "aria-label": Object(ot.__)("Close", "yoast-components")
      }, t), rt);
    };

    at.propTypes = {
      onClick: c.a.func.isRequired
    }, n(201), n(202);

    var it = n(16),
        st = n.n(it),
        lt = (n(203), {
      linkTo: c.a.string,
      linkText: c.a.string
    }),
        ct = {
      linkTo: "",
      linkText: ""
    },
        ut = function ut(t) {
      var e = t.linkTo,
          n = t.linkText;
      return Object(a.createElement)("a", {
        className: "yoast-help",
        target: "_blank",
        href: e,
        rel: "noopener noreferrer"
      }, Object(a.createElement)("span", {
        className: "yoast-help__icon"
      }, Object(a.createElement)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12 12",
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(a.createElement)("path", {
        d: "M12 6A6 6 0 110 6a6 6 0 0112 0zM6.2 2C4.8 2 4 2.5 3.3 3.5l.1.4.8.7.4-.1c.5-.5.8-.9 1.4-.9.5 0 1.1.4 1.1.8s-.3.6-.7.9C5.8 5.6 5 6 5 7c0 .2.2.4.3.4h1.4L7 7c0-.8 2-.8 2-2.6C9 3 7.5 2 6.2 2zM6 8a1.1 1.1 0 100 2.2A1.1 1.1 0 006 8z"
      }))), Object(a.createElement)("span", {
        className: "screen-reader-text"
      }, Object(ot.__)(n, "yoast-components")), Object(a.createElement)("span", {
        className: "screen-reader-text"
      }, Object(ot.__)("(Opens in a new browser tab)", "yoast-components")));
    };

    ut.propTypes = lt, ut.defaultProps = ct;

    var pt = ut,
        dt = function dt(t) {
      var e = t.inLabel;
      return Object(a.createElement)("span", {
        className: e ? "yoast-badge yoast-badge__in-label yoast-new-badge" : "yoast-badge yoast-new-badge"
      }, Object(ot.__)("New", "wordpress-seo"));
    };

    dt.propTypes = {
      inLabel: c.a.bool
    }, dt.defaultProps = {
      inLabel: !1
    };

    var ft = dt,
        ht = function ht(t) {
      var e = t.inLabel;
      return Object(a.createElement)("span", {
        className: e ? "yoast-badge yoast-badge__in-label yoast-premium-badge" : "yoast-badge yoast-premium-badge"
      }, "Premium");
    };

    ht.propTypes = {
      inLabel: c.a.bool
    }, ht.defaultProps = {
      inLabel: !1
    };
    var bt = ht;

    function mt(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function gt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? mt(Object(n), !0).forEach(function (e) {
          st()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mt(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    var yt = function yt(t) {
      var e = t.htmlFor,
          n = t.label,
          o = t.linkTo,
          r = t.linkText,
          i = t.description,
          s = t.children,
          l = t.wrapperClassName,
          c = t.titleClassName,
          u = t.hasNewBadge,
          p = t.hasPremiumBadge,
          d = e ? Object(a.createElement)("label", {
        htmlFor: e
      }, n) : Object(a.createElement)("b", null, n);
      return Object(a.createElement)("div", {
        className: l
      }, "" !== n && Object(a.createElement)("div", {
        className: c
      }, d, p && Object(a.createElement)(bt, {
        inLabel: !0
      }), u && Object(a.createElement)(ft, {
        inLabel: !0
      }), "" !== o && Object(a.createElement)(pt, {
        linkTo: o,
        linkText: r
      })), "" !== i && Object(a.createElement)("p", {
        className: "field-group-description"
      }, i), s);
    },
        vt = gt({
      label: c.a.string,
      description: c.a.string,
      children: c.a.oneOfType([c.a.node, c.a.arrayOf(c.a.node)]),
      wrapperClassName: c.a.string,
      titleClassName: c.a.string,
      htmlFor: c.a.string
    }, lt),
        xt = gt({
      label: "",
      description: "",
      children: [],
      wrapperClassName: "yoast-field-group",
      titleClassName: "yoast-field-group__title",
      htmlFor: ""
    }, ct);

    yt.propTypes = vt, yt.defaultProps = xt;
    var Ot = yt;

    function Ct(t) {
      var e = Object(i.useCallback)(function (e) {
        t.onChange(e.target.value);
      }, [t.onChange]);
      return Object(a.createElement)(Ot, {
        wrapperClassName: "yoast-field-group yoast-field-group__checkbox"
      }, Object(a.createElement)("input", {
        type: "checkbox",
        id: t.id,
        checked: t.checked,
        onChange: e
      }), Object(a.createElement)("label", {
        htmlFor: t.id
      }, t.label));
    }

    Ct.propTypes = {
      id: c.a.string.isRequired,
      label: c.a.oneOfType([c.a.string, c.a.arrayOf(c.a.node), c.a.node]).isRequired,
      checked: c.a.bool,
      onChange: c.a.func.isRequired
    }, Ct.defaultProps = {
      checked: !1
    }, n(204);

    var jt = {
      width: c.a.number.isRequired,
      name: c.a.string.isRequired,
      number: c.a.number.isRequired
    },
        _t = function _t(t) {
      /* Translators: %d expands to number of occurrences. */
      var e = Object(ot.sprintf)(Object(ot.__)("%d occurrences", "yoast-components"), t.number);
      return Object(a.createElement)("li", {
        key: t.name + "_dataItem",
        style: {
          "--yoast-width": "".concat(t.width, "%")
        }
      }, t.name, Object(a.createElement)("span", null, t.number), Object(a.createElement)("span", {
        className: "screen-reader-text"
      }, e));
    };

    _t.propTypes = jt;

    var wt = function wt(t) {
      return Object(a.createElement)("ul", {
        className: "yoast-data-model",
        "aria-label": Object(ot.__)("Prominent words", "yoast-components")
      }, t.items.map(_t));
    };

    wt.propTypes = {
      items: c.a.arrayOf(c.a.shape(jt))
    }, wt.defaultProps = {
      items: []
    };
    var kt = wt,
        Et = (n(336), function (t) {
      var e = t.imageSelected,
          n = t.onClick,
          o = t.onRemoveImageClick,
          r = t.selectImageButtonId,
          i = t.replaceImageButtonId,
          s = t.removeImageButtonId,
          l = t.isDisabled;
      return Object(a.createElement)("div", {
        className: "yoast-image-select-buttons"
      }, Object(a.createElement)(et, {
        variant: "secondary",
        id: e ? i : r,
        onClick: n,
        disabled: l
      }, e ? Object(ot.__)("Replace image", "yoast-components") : Object(ot.__)("Select image", "yoast-components")), e && Object(a.createElement)(et, {
        variant: "remove",
        id: s,
        onClick: o,
        disabled: l
      }, Object(ot.__)("Remove image", "yoast-components")));
    }),
        St = Et;
    Et.propTypes = {
      imageSelected: c.a.bool,
      onClick: c.a.func,
      onRemoveImageClick: c.a.func,
      selectImageButtonId: c.a.string,
      replaceImageButtonId: c.a.string,
      removeImageButtonId: c.a.string,
      isDisabled: c.a.bool
    }, Et.defaultProps = {
      imageSelected: !1,
      onClick: function onClick() {},
      onRemoveImageClick: function onRemoveImageClick() {},
      selectImageButtonId: "",
      replaceImageButtonId: "",
      removeImageButtonId: "",
      isDisabled: !1
    };
    var Rt,
        Tt,
        qt,
        Pt,
        Nt = n(8),
        Bt = n.n(Nt),
        It = n(9),
        Mt = n.n(It),
        zt = n(11),
        Dt = n.n(zt),
        Lt = n(12),
        At = n.n(Lt),
        $t = n(7),
        Ft = n.n($t);

    var Ut = p.a.div(Rt || (Rt = r()(["\n\tdisplay: flex;\n\talign-items: flex-start;\n\tfont-size: 14px;\n\tline-height: 1.5;\n\tborder: 1px solid rgba(0, 0, 0, 0.2);\n\tpadding: 16px;\n\tcolor: ", ";\n\tbackground: ", ";\n\tmargin-bottom: 20px;\n"])), function (t) {
      return t.alertColor;
    }, function (t) {
      return t.alertBackground;
    }),
        Ht = p.a.div(Tt || (Tt = r()(["\n\tflex-grow: 1;\n\n\ta {\n\t\tcolor: ", ";\n\t}\n\t\n\tp {\n\t\tmargin-top: 0;\n\t}\n"])), d.colors.$color_alert_link_text),
        Wt = p()(_)(qt || (qt = r()(["\n\tmargin-top: 0.125rem;\n\t", ";\n"])), Object(f.getDirectionalStyle)("margin-right: 8px", "margin-left: 8px")),
        Vt = p()(H)(Pt || (Pt = r()(["\n\t", ";\n\tfont-size: 24px;\n\tline-height: 1.4;\n\tcolor: ", ";\n\tflex-shrink: 0;\n\tmin-width: 36px;\n\theight: 36px;\n\n\t// Override the base button style: get rid of the button styling.\n\tpadding: 0;\n\n\t&, &:hover, &:active {\n\t\t/* Inherits box-sizing: border-box so this doesn't change the rendered size. */\n\t\tborder: 2px solid transparent;\n\t\tbackground: transparent;\n\t\tbox-shadow: none;\n\t\tcolor: ", ";\n\t}\n\n\t/* Inherits focus style from the Button component. */\n\t&:focus {\n\t\tbackground: transparent;\n\t\tcolor: ", ";\n\t\tborder-color: ", ";\n\t\tbox-shadow: 0px 0px 0px 3px ", ";\n\t}\n"])), Object(f.getDirectionalStyle)("margin: -8px -12px -8px 8px", "margin: -8px 8px -12px -8px"), function (t) {
      return t.alertDismissColor;
    }, function (t) {
      return t.alertDismissColor;
    }, function (t) {
      return t.alertDismissColor;
    }, d.colors.$color_yoast_focus, d.colors.$color_yoast_focus_outer),
        Kt = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "getTypeDisplayOptions",
        value: function value(t) {
          switch (t) {
            case "error":
              return {
                color: d.colors.$color_alert_error_text,
                background: d.colors.$color_alert_error_background,
                icon: "alert-error"
              };

            case "info":
              return {
                color: d.colors.$color_alert_info_text,
                background: d.colors.$color_alert_info_background,
                icon: "alert-info"
              };

            case "success":
              return {
                color: d.colors.$color_alert_success_text,
                background: d.colors.$color_alert_success_background,
                icon: "alert-success"
              };

            case "warning":
              return {
                color: d.colors.$color_alert_warning_text,
                background: d.colors.$color_alert_warning_background,
                icon: "alert-warning"
              };
          }
        }
      }, {
        key: "render",
        value: function value() {
          if (!0 === this.props.isAlertDismissed) return null;
          var t = this.getTypeDisplayOptions(this.props.type),
              e = this.props.dismissAriaLabel || Object(ot.__)("Dismiss this alert", "yoast-components");
          return Object(a.createElement)(Ut, {
            alertColor: t.color,
            alertBackground: t.background,
            className: this.props.className
          }, Object(a.createElement)(Wt, {
            icon: t.icon,
            color: t.color
          }), Object(a.createElement)(Ht, null, this.props.children), "function" == typeof this.props.onDismissed ? Object(a.createElement)(Vt, {
            alertDismissColor: t.color,
            onClick: this.props.onDismissed,
            "aria-label": e
          }, "×") : null);
        }
      }]), r;
    }(s.a.Component);

    Kt.propTypes = {
      children: c.a.any.isRequired,
      type: c.a.oneOf(["error", "info", "success", "warning"]).isRequired,
      onDismissed: c.a.func,
      isAlertDismissed: c.a.bool,
      dismissAriaLabel: c.a.string,
      className: c.a.string
    }, Kt.defaultProps = {
      onDismissed: null,
      isAlertDismissed: !1,
      dismissAriaLabel: "",
      className: ""
    };
    var Gt = Kt;

    function Yt(t) {
      var e = "" !== t.imageUrl,
          n = t.imageUrl || t.defaultImageUrl || "",
          o = t.warnings.length > 0 && e,
          r = o ? "yoast-image-select__preview yoast-image-select__preview-has-warnings" : "yoast-image-select__preview";
      "" === n && (r = "yoast-image-select__preview yoast-image-select__preview--no-preview");
      var i = {
        imageSelected: e,
        onClick: t.onClick,
        onRemoveImageClick: t.onRemoveImageClick,
        selectImageButtonId: t.selectImageButtonId,
        replaceImageButtonId: t.replaceImageButtonId,
        removeImageButtonId: t.removeImageButtonId,
        isDisabled: t.isDisabled
      };
      return Object(a.createElement)("div", {
        className: "yoast-image-select",
        onMouseEnter: t.onMouseEnter,
        onMouseLeave: t.onMouseLeave
      }, Object(a.createElement)(Ot, {
        label: t.label,
        hasNewBadge: t.hasNewBadge,
        hasPremiumBadge: t.hasPremiumBadge
      }, t.hasPreview && Object(a.createElement)("button", {
        className: r,
        onClick: t.onClick,
        type: "button",
        disabled: t.isDisabled
      }, "" !== n && Object(a.createElement)("img", {
        src: n,
        alt: t.imageAltText,
        className: "yoast-image-select__preview--image"
      }), Object(a.createElement)(function () {
        return Object(a.createElement)("span", {
          className: "screen-reader-text"
        }, e ? Object(ot.__)("Replace image", "yoast-components") : Object(ot.__)("Select image", "yoast-components"));
      }, null)), o && Object(a.createElement)("div", {
        role: "alert"
      }, t.warnings.map(function (t, e) {
        return Object(a.createElement)(Gt, {
          key: "warning".concat(e),
          type: "warning"
        }, t);
      })), Object(a.createElement)(St, i)));
    }

    var Zt = Yt;

    function Xt(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function Jt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Xt(Object(n), !0).forEach(function (e) {
          st()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Xt(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    Yt.propTypes = {
      defaultImageUrl: c.a.string,
      imageUrl: c.a.string,
      imageAltText: c.a.string.isRequired,
      hasPreview: c.a.bool.isRequired,
      label: c.a.string.isRequired,
      onClick: c.a.func,
      onMouseEnter: c.a.func,
      onMouseLeave: c.a.func,
      onRemoveImageClick: c.a.func,
      selectImageButtonId: c.a.string,
      replaceImageButtonId: c.a.string,
      removeImageButtonId: c.a.string,
      warnings: c.a.arrayOf(c.a.string),
      hasNewBadge: c.a.bool,
      isDisabled: c.a.bool,
      hasPremiumBadge: c.a.bool
    }, Yt.defaultProps = {
      defaultImageUrl: "",
      imageUrl: "",
      onClick: function onClick() {},
      onMouseEnter: function onMouseEnter() {},
      onMouseLeave: function onMouseLeave() {},
      onRemoveImageClick: function onRemoveImageClick() {},
      selectImageButtonId: "",
      replaceImageButtonId: "",
      removeImageButtonId: "",
      warnings: [],
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1
    }, n(152);

    var Qt = function Qt(t) {
      var e,
          n = Jt({}, t);
      return t.id && (n.htmlFor = t.id), Object(a.createElement)(Ot, n, Object(a.createElement)("input", {
        id: t.id,
        name: t.name,
        value: t.value,
        type: t.type,
        className: "yoast-field-group__inputfield",
        "aria-describedby": t.ariaDescribedBy,
        placeholder: t.placeholder,
        readOnly: t.readOnly,
        min: t.min,
        max: t.max,
        step: t.step,
        onChange: (e = t.onChange, function (t) {
          e(t.target.value);
        })
      }));
    };

    Qt.propTypes = Jt({
      id: c.a.string,
      name: c.a.string,
      value: c.a.string,
      type: c.a.oneOf(["text", "color", "date", "datetime-local", "email", "hidden", "month", "number", "password", "search", "tel", "time", "url", "week", "range"]),
      ariaDescribedBy: c.a.string,
      placeholder: c.a.string,
      readOnly: c.a.bool,
      min: c.a.number,
      max: c.a.number,
      step: c.a.number,
      onChange: c.a.func
    }, vt), Qt.defaultProps = Jt({
      id: "",
      name: "",
      value: "",
      ariaDescribedBy: "",
      readOnly: !1,
      type: "text",
      placeholder: void 0,
      min: void 0,
      max: void 0,
      step: void 0,
      onChange: void 0
    }, xt);
    var te = Qt,
        ee = n(15),
        ne = n.n(ee),
        oe = n(2);

    function re(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function ae(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? re(Object(n), !0).forEach(function (e) {
          st()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : re(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    function ie(t) {
      return {
        hours: Math.floor(t / 3600),
        minutes: Math.floor(t % 3600 / 60),
        seconds: t % 3600 % 60
      };
    }

    var se = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        var e;
        return Bt()(this, r), (e = o.call(this, t)).state = ae({}, ie(t.duration)), e.onHoursChange = e.onHoursChange.bind(ne()(e)), e.onMinutesChange = e.onMinutesChange.bind(ne()(e)), e.onSecondsChange = e.onSecondsChange.bind(ne()(e)), e;
      }

      return Mt()(r, [{
        key: "formatValue",
        value: function value(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MIN_VALUE,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.MAX_VALUE,
              o = parseInt(t.target.value, 10) || 0;
          return Object(oe.clamp)(o, e, n);
        }
      }, {
        key: "onHoursChange",
        value: function value(t) {
          this.props.onChange(3600 * this.formatValue(t, 0) + 60 * this.state.minutes + this.state.seconds);
        }
      }, {
        key: "onMinutesChange",
        value: function value(t) {
          this.props.onChange(3600 * this.state.hours + 60 * this.formatValue(t, 0, 59) + this.state.seconds);
        }
      }, {
        key: "onSecondsChange",
        value: function value(t) {
          this.props.onChange(3600 * this.state.hours + 60 * this.state.minutes + this.formatValue(t, 0, 59));
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.id;
          return Object(a.createElement)(Ot, t, Object(a.createElement)("div", {
            className: "duration-inputs__wrapper"
          }, Object(a.createElement)("div", {
            className: "duration-inputs__input-wrapper"
          }, Object(a.createElement)("label", {
            htmlFor: e + "-hours"
          }, Object(ot.__)("hours", "yoast-components")), Object(a.createElement)("input", {
            id: e + "-hours",
            name: "hours",
            value: this.state.hours,
            type: "number",
            className: "yoast-field-group__inputfield duration-inputs__input",
            "aria-describedby": t.hoursAriaDescribedBy,
            readOnly: t.readOnly,
            min: 0,
            onChange: this.onHoursChange
          })), Object(a.createElement)("div", {
            className: "duration-inputs__input-wrapper"
          }, Object(a.createElement)("label", {
            htmlFor: e + "-minutes"
          }, Object(ot.__)("minutes", "yoast-components")), Object(a.createElement)("input", {
            id: e + "-minutes",
            name: "minutes",
            value: this.state.minutes,
            type: "number",
            className: "yoast-field-group__inputfield duration-inputs__input",
            "aria-describedby": t.minutesAriaDescribedBy,
            readOnly: t.readOnly,
            min: 0,
            max: 59,
            onChange: this.onMinutesChange
          })), Object(a.createElement)("div", {
            className: "duration-inputs__input-wrapper"
          }, Object(a.createElement)("label", {
            htmlFor: e + "-seconds"
          }, Object(ot.__)("seconds", "yoast-components")), Object(a.createElement)("input", {
            id: e + "-seconds",
            name: "seconds",
            value: this.state.seconds,
            type: "number",
            className: "yoast-field-group__inputfield duration-inputs__input",
            "aria-describedby": t.secondsAriaDescribedBy,
            readOnly: t.readOnly,
            min: 0,
            max: 59,
            onChange: this.onSecondsChange
          }))));
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function value(t, e) {
          var n = ie(t.duration);
          return Object(oe.isEqual)(n, e) ? null : ae({}, n);
        }
      }]), r;
    }(s.a.Component);

    se.propTypes = ae({
      duration: c.a.number.isRequired,
      hoursAriaDescribedBy: c.a.string,
      minutesAriaDescribedBy: c.a.string,
      secondsAriaDescribedBy: c.a.string,
      id: c.a.string.isRequired
    }, vt), se.defaultProps = ae({
      hoursAriaDescribedBy: "",
      minutesAriaDescribedBy: "",
      secondsAriaDescribedBy: ""
    }, xt);
    var le = se;
    n(337);

    var ce = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "getInsightsCardContent",
        value: function value() {
          return Object(a.createElement)("div", {
            className: "yoast-insights-card__content"
          }, Object(a.createElement)("p", {
            className: "yoast-insights-card__score"
          }, Object(a.createElement)("span", {
            className: "yoast-insights-card__amount"
          }, this.props.amount), this.props.unit), this.props.description && Object(a.createElement)("div", {
            className: "yoast-insights-card__description"
          }, this.props.description));
        }
      }, {
        key: "render",
        value: function value() {
          return Object(a.createElement)(Ot, {
            label: this.props.title,
            linkTo: this.props.linkTo,
            linkText: this.props.linkText,
            wrapperClassName: "yoast-insights-card"
          }, this.getInsightsCardContent());
        }
      }]), r;
    }(s.a.Component),
        ue = ce;

    ce.propTypes = {
      title: c.a.string,
      amount: c.a.number.isRequired,
      description: c.a.element,
      unit: c.a.string,
      linkTo: c.a.string,
      linkText: c.a.string
    }, ce.defaultProps = {
      title: "",
      description: null,
      unit: "",
      linkTo: "",
      linkText: ""
    }, n(205);

    function pe(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function de(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? pe(Object(n), !0).forEach(function (e) {
          st()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    var fe = {
      options: c.a.array.isRequired,
      onChange: c.a.func.isRequired,
      groupName: c.a.string.isRequired,
      id: c.a.string.isRequired,
      selected: c.a.string
    },
        he = {
      selected: null
    },
        be = function be(t) {
      var e = t.value,
          n = t.label,
          o = t.checked,
          r = t.onChange,
          s = t.groupName,
          l = t.id;
      return Object(a.createElement)(i.Fragment, null, Object(a.createElement)("input", {
        type: "radio",
        name: s,
        id: l,
        value: e,
        onChange: r,
        checked: o
      }), Object(a.createElement)("label", {
        htmlFor: l
      }, n));
    };

    be.propTypes = {
      value: c.a.string.isRequired,
      label: c.a.string.isRequired,
      checked: c.a.bool.isRequired,
      groupName: c.a.string.isRequired,
      onChange: c.a.func.isRequired,
      id: c.a.string.isRequired
    };

    var me = function me(t) {
      var e = t.options,
          n = t.onChange,
          o = t.groupName,
          r = t.id,
          i = t.selected;
      return Object(a.createElement)("div", {
        className: "yoast-field-group__radiobutton"
      }, e.map(function (t) {
        return Object(a.createElement)(be, K()({
          key: t.value,
          groupName: o,
          checked: i === t.value,
          onChange: n,
          id: "".concat(r, "_").concat(t.value)
        }, t));
      }));
    };

    me.propTypes = fe, me.defaultProps = he;

    var ge = function ge(t) {
      var e = t.options,
          n = t.onChange,
          o = t.groupName,
          r = t.id,
          i = t.selected;
      return Object(a.createElement)("div", {
        onChange: n
      }, e.map(function (t) {
        return Object(a.createElement)("div", {
          className: "yoast-field-group__radiobutton yoast-field-group__radiobutton--vertical",
          key: t.value
        }, Object(a.createElement)(be, K()({
          groupName: o,
          checked: i === t.value,
          id: "".concat(r, "_").concat(t.value)
        }, t)));
      }));
    };

    ge.propTypes = fe, ge.defaultProps = he;

    var ye = function ye(t) {
      var e = t.id,
          n = t.options,
          o = t.groupName,
          r = t.onChange,
          i = t.vertical,
          s = t.selected,
          l = Y()(t, ["id", "options", "groupName", "onChange", "vertical", "selected"]),
          c = {
        options: n,
        groupName: o,
        selected: s,
        onChange: function onChange(t) {
          return r(t.target.value);
        },
        id: function (t) {
          return t || Math.random().toString(36).substr(2, 6);
        }(e)
      };
      return Object(a.createElement)(Ot, l, i ? Object(a.createElement)(ge, c) : Object(a.createElement)(me, c));
    };

    ye.propTypes = de({
      id: c.a.string,
      groupName: c.a.string.isRequired,
      options: c.a.arrayOf(c.a.shape({
        value: c.a.string.isRequired,
        label: c.a.string.isRequired
      })).isRequired,
      selected: c.a.string,
      onChange: c.a.func,
      vertical: c.a.bool
    }, vt), ye.defaultProps = de({
      id: "",
      vertical: !1,
      selected: null,
      onChange: function onChange() {}
    }, xt);
    var ve = ye,
        xe = (n(206), n(305)),
        Oe = n.n(xe);

    function Ce(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function je(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Ce(Object(n), !0).forEach(function (e) {
          st()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    var _e = function _e() {},
        we = c.a.shape({
      name: c.a.string,
      value: c.a.string
    }),
        ke = je({
      id: c.a.string.isRequired,
      name: c.a.string,
      options: c.a.arrayOf(we).isRequired,
      selected: c.a.oneOfType([c.a.arrayOf(c.a.string), c.a.string]),
      onChange: c.a.func
    }, vt),
        Ee = je({
      name: "",
      selected: [],
      onChange: function onChange() {}
    }, xt),
        Se = function Se(t) {
      var e = t.name,
          n = t.value;
      return Object(a.createElement)("option", {
        key: n,
        value: n
      }, e);
    };

    Se.propTypes = {
      name: c.a.string.isRequired,
      value: c.a.string.isRequired
    };

    var Re = function Re(t) {
      var e = t.id,
          n = t.isMulti,
          o = t.isSearchable,
          r = t.inputId,
          i = t.selected,
          s = t.options,
          l = t.name,
          c = t.onChange,
          u = Y()(t, ["id", "isMulti", "isSearchable", "inputId", "selected", "options", "name", "onChange"]),
          p = Array.isArray(i) ? i : [i],
          d = function (t) {
        return t.map(function (t) {
          return {
            value: t.value,
            label: t.name
          };
        });
      }(s),
          f = d.filter(function (t) {
        return p.includes(t.value);
      });

      return Object(a.createElement)(Ot, K()({}, u, {
        htmlFor: r
      }), Object(a.createElement)(Oe.a, {
        isMulti: n,
        id: e,
        name: l,
        inputId: r,
        value: f,
        options: d,
        hideSelectedOptions: !1,
        onChange: c,
        className: "yoast-select-container",
        classNamePrefix: "yoast-select",
        isClearable: !1,
        isSearchable: o,
        placeholder: ""
      }));
    };

    Re.propTypes = ke, Re.defaultProps = Ee;

    var Te = function Te(t) {
      var e = t.onChange,
          n = Object(i.useCallback)(function (t) {
        return e(t.value);
      });
      return Object(a.createElement)(Re, K()({}, t, {
        isMulti: !1,
        isSearchable: !0,
        onChange: n
      }));
    };

    Te.propTypes = ke, Te.defaultProps = Ee;

    var qe = function qe(t) {
      var e = t.onChange,
          n = Object(i.useCallback)(function (t) {
        t || (t = []), e(t.map(function (t) {
          return t.value;
        }));
      });
      return Object(a.createElement)(Re, K()({}, t, {
        isMulti: !0,
        isSearchable: !1,
        onChange: n
      }));
    };

    qe.propTypes = ke, qe.defaultProps = Ee;

    var Pe = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        var e;
        return Bt()(this, r), (e = o.call(this, t)).onBlurHandler = e.onBlurHandler.bind(ne()(e)), e.onInputHandler = e.onInputHandler.bind(ne()(e)), e.state = {
          selected: e.props.selected
        }, e;
      }

      return Mt()(r, [{
        key: "onBlurHandler",
        value: function value(t) {
          this.props.onChange(t.target.value);
        }
      }, {
        key: "onInputHandler",
        value: function value(t) {
          this.setState({
            selected: t.target.value
          }), this.props.onOptionFocus && this.props.onOptionFocus(t.target.name, t.target.value);
        }
      }, {
        key: "componentDidUpdate",
        value: function value(t) {
          t.selected !== this.props.selected && this.setState({
            selected: this.props.selected
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.id,
              n = t.options,
              o = t.name,
              r = Y()(t, ["id", "options", "name"]);
          return Object(a.createElement)(Ot, K()({}, r, {
            htmlFor: e
          }), Object(a.createElement)("select", {
            id: e,
            name: o,
            value: this.state.selected,
            onBlur: this.onBlurHandler,
            onInput: this.onInputHandler,
            onChange: _e
          }, n.map(Se)));
        }
      }]), r;
    }(s.a.Component);

    function Ne(t) {
      var e = t.rating;
      e < 0 && (e = 0), e > 5 && (e = 5);
      var n = 20 * e;
      return Object(a.createElement)("div", {
        "aria-hidden": "true",
        className: "yoast-star-rating"
      }, Object(a.createElement)("span", {
        className: "yoast-star-rating__placeholder",
        role: "img"
      }, Object(a.createElement)("span", {
        className: "yoast-star-rating__fill",
        style: {
          width: n + "%"
        }
      })));
    }

    Pe.propTypes = je(je({}, ke), {}, {
      onOptionFocus: c.a.func
    }), Pe.defaultProps = je(je({}, Ee), {}, {
      onOptionFocus: null
    }), n(338);
    var Be = Ne;
    Ne.propTypes = {
      rating: c.a.number.isRequired
    }, n(339), n(207), n(340), n(341), n(342);

    var Ie = function Ie(t) {
      var e = t.children,
          n = t.className,
          o = t.prefixIcon,
          r = t.suffixIcon,
          i = Y()(t, ["children", "className", "prefixIcon", "suffixIcon"]);
      return Object(a.createElement)(H, K()({
        className: n
      }, i), o && o.icon && Object(a.createElement)(_, {
        icon: o.icon,
        color: o.color,
        size: o.size
      }), e, r && r.icon && Object(a.createElement)(_, {
        icon: r.icon,
        color: r.color,
        size: r.size
      }));
    };

    Ie.propTypes = {
      className: c.a.string,
      prefixIcon: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      suffixIcon: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node, c.a.string])
    };

    var Me = Ie,
        ze = {
      ScreenReaderText: {
        "default": {
          clip: "rect(1px, 1px, 1px, 1px)",
          position: "absolute",
          height: "1px",
          width: "1px",
          overflow: "hidden"
        },
        focused: {
          clip: "auto",
          display: "block",
          left: "5px",
          top: "5px",
          height: "auto",
          width: "auto",
          zIndex: "100000",
          position: "absolute",
          backgroundColor: "#eeeeee ",
          padding: "10px"
        }
      }
    },
        De = function De(t) {
      return Object(a.createElement)("span", {
        className: "screen-reader-text",
        style: ze.ScreenReaderText["default"]
      }, t.children);
    };

    De.propTypes = {
      children: c.a.string.isRequired
    };

    var Le,
        Ae,
        $e,
        Fe,
        Ue,
        He,
        We,
        Ve,
        Ke = De,
        Ge = p.a.span(Le || (Le = r()(["\n\tflex-grow: 1;\n\toverflow-x: hidden;\n\tline-height: normal; // Avoid vertical scrollbar in IE 11 when rendered in the WP sidebar.\n"]))),
        Ye = p.a.span(Ae || (Ae = r()(["\n\tdisplay: block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tcolor: ", ";\n"])), d.colors.$color_headings),
        Ze = p.a.span($e || ($e = r()(["\n\tdisplay: block;\n\twhite-space: nowrap;\n\ttext-overflow: ellipsis;\n\toverflow: hidden;\n\tfont-size: 0.8125rem;\n\tmargin-top: 2px;\n"]))),
        Xe = function Xe(t) {
      return Object(a.createElement)(Ge, null, Object(a.createElement)(Ye, null, t.title, t.titleScreenReaderText && Object(a.createElement)(Ke, null, " " + t.titleScreenReaderText)), t.subTitle && Object(a.createElement)(Ze, null, t.subTitle));
    };

    function Je(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function Qe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Je(Object(n), !0).forEach(function (e) {
          st()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Je(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    Xe.propTypes = {
      title: c.a.string.isRequired,
      titleScreenReaderText: c.a.string,
      subTitle: c.a.string
    };
    var tn = p.a.div(Fe || (Fe = r()(["\n\tpadding: 0 16px;\n\tmargin-bottom: 16px;\n"]))),
        en = p.a.div(Ue || (Ue = r()(["\n\tbackground-color: ", ";\n"])), d.colors.$color_white),
        nn = p()(en)(He || (He = r()(["\n\tborder-top: var(--yoast-border-default);\n"]))),
        on = p()(Me)(We || (We = r()(["\n\twidth: 100%;\n\tbackground-color: ", ";\n\tpadding: 16px;\n\tjustify-content: flex-start;\n\tborder-color: transparent;\n\tborder: none;\n\tborder-radius: 0;\n\tbox-shadow: none;\n\tfont-weight: normal;\n\n\t:focus {\n\t\toutline: 1px solid ", ";\n\t\toutline-offset: -1px;\n\t}\n\n\t:active {\n\t\tbox-shadow: none;\n\t\tbackground-color: ", ";\n\t}\n\n\tsvg {\n\t\t", "\n\t\t&:first-child {\n\t\t\t", ";\n\t\t}\n\t\t&:last-child {\n\t\t\t", ";\n\t\t}\n\t}\n"])), d.colors.$color_white, d.colors.$color_blue, d.colors.$color_white, function (t) {
      return t.hasSubTitle ? "align-self: flex-start;" : "";
    }, Object(f.getDirectionalStyle)("margin-right: 8px", "margin-left: 8px"), Object(f.getDirectionalStyle)("margin-left: 8px", "margin-right: 8px"));

    function rn(t, e) {
      var n = "h".concat(e.level),
          o = p()(n)(Ve || (Ve = r()(["\n\t\tmargin: 0 !important;\n\t\tpadding: 0 !important;\n\t\tfont-size: ", " !important;\n\t\tfont-weight: ", " !important;\n\t"])), e.fontSize, e.fontWeight);
      return function (e) {
        return Object(a.createElement)(o, null, Object(a.createElement)(t, e));
      };
    }

    var an = rn(on, {
      level: 2,
      fontSize: "1rem",
      fontWeight: "normal"
    });

    function sn(t) {
      var e = null;
      t.isOpen && (e = t.hasPadding ? Object(a.createElement)(tn, {
        className: "collapsible_content"
      }, t.children) : t.children);
      var n = t.hasSeparator ? nn : en;
      return Object(a.createElement)(n, {
        className: t.className
      }, Object(a.createElement)(t.Heading, {
        id: t.id,
        "aria-expanded": t.isOpen,
        onClick: t.onToggle,
        prefixIcon: t.isOpen ? t.prefixIcon : t.prefixIconCollapsed,
        suffixIcon: t.isOpen ? t.suffixIcon : t.suffixIconCollapsed,
        hasSubTitle: !!t.subTitle
      }, Object(a.createElement)(Xe, {
        title: t.title,
        titleScreenReaderText: t.titleScreenReaderText,
        subTitle: t.subTitle
      })), e);
    }

    sn.propTypes = {
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node]),
      className: c.a.string,
      Heading: c.a.func,
      isOpen: c.a.bool.isRequired,
      hasSeparator: c.a.bool,
      hasPadding: c.a.bool,
      initialIsOpen: c.a.bool,
      onToggle: c.a.func.isRequired,
      prefixIcon: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      prefixIconCollapsed: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      subTitle: c.a.string,
      suffixIcon: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      suffixIconCollapsed: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      title: c.a.string.isRequired,
      titleScreenReaderText: c.a.string,
      id: c.a.string
    }, sn.defaultProps = {
      Heading: an,
      id: null,
      children: null,
      className: null,
      subTitle: null,
      titleScreenReaderText: null,
      hasSeparator: !1,
      hasPadding: !1,
      initialIsOpen: !1,
      prefixIcon: null,
      prefixIconCollapsed: null,
      suffixIcon: null,
      suffixIconCollapsed: null
    };

    var ln = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        var e;
        return Bt()(this, r), (e = o.call(this, t)).state = {
          isOpen: t.initialIsOpen,
          headingProps: t.headingProps,
          Heading: rn(on, t.headingProps)
        }, e.toggleCollapse = e.toggleCollapse.bind(ne()(e)), e;
      }

      return Mt()(r, [{
        key: "toggleCollapse",
        value: function value() {
          var t = this.state.isOpen;
          this.setState({
            isOpen: !t
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.state.isOpen,
              e = this.props.children,
              n = Object(oe.omit)(this.props, ["children"]);
          return Object(a.createElement)(sn, K()({
            Heading: this.state.Heading,
            isOpen: t,
            onToggle: this.toggleCollapse
          }, n), t && e);
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function value(t, e) {
          return t.headingProps.level !== e.headingProps.level || t.headingProps.fontSize !== e.headingProps.fontSize || t.headingProps.fontWeight !== e.headingProps.fontWeight ? Qe(Qe({}, e), {}, {
            headingProps: t.headingProps,
            Heading: rn(on, t.headingProps)
          }) : null;
        }
      }]), r;
    }(s.a.Component);

    ln.propTypes = {
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node]),
      className: c.a.string,
      initialIsOpen: c.a.bool,
      hasSeparator: c.a.bool,
      hasPadding: c.a.bool,
      prefixIcon: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      prefixIconCollapsed: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      suffixIcon: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      suffixIconCollapsed: c.a.shape({
        icon: c.a.string,
        color: c.a.string,
        size: c.a.string
      }),
      title: c.a.string.isRequired,
      titleScreenReaderText: c.a.string,
      subTitle: c.a.string,
      headingProps: c.a.shape({
        level: c.a.number,
        fontSize: c.a.string,
        fontWeight: c.a.string
      })
    }, ln.defaultProps = {
      hasSeparator: !1,
      hasPadding: !1,
      initialIsOpen: !1,
      subTitle: null,
      titleScreenReaderText: null,
      children: null,
      className: null,
      prefixIcon: null,
      prefixIconCollapsed: null,
      suffixIcon: {
        icon: "chevron-up",
        color: d.colors.$black,
        size: "24px"
      },
      suffixIconCollapsed: {
        icon: "chevron-down",
        color: d.colors.$black,
        size: "24px"
      },
      headingProps: {
        level: 2,
        fontSize: "1rem",
        fontWeight: "normal"
      }
    };

    var cn,
        un,
        pn,
        dn,
        fn,
        hn,
        bn = ln,
        mn = p.a.div(cn || (cn = r()(["\n\tbox-sizing: border-box;\n\n\tp {\n\t\tmargin: 0;\n\t\tfont-size: 14px;\n\t}\n"]))),
        gn = p.a.h3(un || (un = r()(["\n\tmargin: 8px 0;\n\tfont-size: 1em;\n"]))),
        yn = p.a.ul(pn || (pn = r()(["\n\tmargin: 0;\n\tlist-style: none;\n\tpadding: 0;\n"]))),
        vn = Object(f.makeOutboundLink)(p.a.a(dn || (dn = r()(["\n\tdisplay: inline-block;\n\tmargin-bottom: 4px;\n\tfont-size: 14px;\n"])))),
        xn = p.a.li(fn || (fn = r()(["\n\tmargin: 8px 0;\n"]))),
        On = p.a.div(hn || (hn = r()(["\n\ta {\n\t\tmargin: 8px 0 0;\n\t}\n"]))),
        Cn = function Cn(t) {
      return Object(a.createElement)(xn, {
        className: t.className
      }, Object(a.createElement)(vn, {
        className: "".concat(t.className, "-link"),
        href: t.link
      }, t.title), Object(a.createElement)("p", {
        className: "".concat(t.className, "-description")
      }, t.description));
    };

    Cn.propTypes = {
      className: c.a.string.isRequired,
      title: c.a.string.isRequired,
      link: c.a.string.isRequired,
      description: c.a.string.isRequired
    };

    var jn = function jn(t) {
      return Object(a.createElement)(mn, {
        className: t.className
      }, Object(a.createElement)(gn, {
        className: "".concat(t.className, "__header")
      }, t.title ? t.title : t.feed.title), Object(a.createElement)(yn, {
        className: "".concat(t.className, "__posts"),
        role: "list"
      }, t.feed.items.map(function (e) {
        return Object(a.createElement)(Cn, {
          className: "".concat(t.className, "__post"),
          key: e.link,
          title: e.title,
          link: e.link,
          description: e.description
        });
      })), t.footerLinkText && Object(a.createElement)(On, {
        className: "".concat(t.className, "__footer")
      }, Object(a.createElement)(vn, {
        className: "".concat(t.className, "__footer-link"),
        href: t.feedLink ? t.feedLink : t.feed.link
      }, t.footerLinkText)));
    };

    jn.propTypes = {
      className: c.a.string,
      feed: c.a.object.isRequired,
      title: c.a.string,
      footerLinkText: c.a.string,
      feedLink: c.a.string
    }, jn.defaultProps = {
      className: "articlelist-feed"
    };
    var wn,
        kn,
        En,
        Sn,
        Rn,
        Tn,
        qn,
        Pn,
        Nn = jn,
        Bn = p.a.span(wn || (wn = r()(["\n\tposition: absolute;\n\t\n\ttop: 8px;\n\tleft: -8px;\n\t\n\tfont-weight: 500;\n\tcolor: ", ";\n\tline-height: 16px;\n\t\n\tbackground-color: ", ";\n\tpadding: 8px 16px;\n\tbox-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.backgroundColor;
    }),
        In = p.a.span(kn || (kn = r()(["\n\tposition: absolute;\n\t\n\ttop: 40px;\n\tleft: -8px;\n\t\n\t/* This code makes the triangle. */\n\tborder-top: 8px solid ", ";\n\tborder-left: 8px solid transparent;\n"])), d.colors.$color_purple_dark);

    function Mn(t) {
      return Object(a.createElement)(i.Fragment, null, Object(a.createElement)(Bn, {
        backgroundColor: t.backgroundColor,
        textColor: t.textColor
      }, t.children), Object(a.createElement)(In, null));
    }

    Mn.propTypes = {
      backgroundColor: c.a.string,
      textColor: c.a.string,
      children: c.a.any
    }, Mn.defaultProps = {
      backgroundColor: d.colors.$color_pink_dark,
      textColor: d.colors.$color_white,
      children: null
    };

    var zn,
        Dn,
        Ln,
        An,
        $n,
        Fn,
        Un = p.a.div(En || (En = r()(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tbackground-color: ", ";\n\twidth: 100%;\n\tbox-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);\n"])), d.colors.$color_white),
        Hn = p.a.img(Sn || (Sn = r()(["\n\twidth: 100%;\n\tvertical-align: bottom;\n"]))),
        Wn = p.a.div(Rn || (Rn = r()(["\n\tpadding: 12px 16px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-grow: 1;\n"]))),
        Vn = p.a.a(Tn || (Tn = r()(["\n\ttext-decoration: none;\n\tcolor: ", ";\n\t/* IE11 bug header image height see https://github.com/philipwalton/flexbugs#flexbug-5 */\n\toverflow: hidden;\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\ttext-decoration: underline;\n\t\tcolor: ", ";\n\t}\n\n\t&:focus,\n\t&:active {\n\t\tbox-shadow: none;\n\t}\n"])), d.colors.$color_pink_dark, d.colors.$color_pink_dark),
        Kn = p.a.h2(qn || (qn = r()(["\n\tmargin: 16px 16px 0 16px;\n\tfont-weight: 400;\n\tfont-size: 1.5em;\n\tline-height: 1.2;\n\tcolor: currentColor;\n"]))),
        Gn = Object(f.makeOutboundLink)(Vn),
        Yn = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "getHeader",
        value: function value() {
          return this.props.header ? this.props.header.link ? Object(a.createElement)(Gn, {
            href: this.props.header.link
          }, Object(a.createElement)(Hn, {
            src: this.props.header.image,
            alt: ""
          }), Object(a.createElement)(Kn, null, this.props.header.title)) : Object(a.createElement)(i.Fragment, null, Object(a.createElement)(Hn, {
            src: this.props.header.image,
            alt: ""
          }), ";", Object(a.createElement)(Kn, null, this.props.header.title)) : null;
        }
      }, {
        key: "getBanner",
        value: function value() {
          return this.props.banner ? Object(a.createElement)(Mn, this.props.banner, this.props.banner.text) : null;
        }
      }, {
        key: "render",
        value: function value() {
          return Object(a.createElement)(Un, {
            className: this.props.className,
            id: this.props.id
          }, this.getHeader(), this.getBanner(), Object(a.createElement)(Wn, null, this.props.children));
        }
      }]), r;
    }(s.a.Component),
        Zn = Yn,
        Xn = p()(Yn)(Pn || (Pn = r()(["\n\theight: 100%;\n"])));

    Yn.propTypes = {
      className: c.a.string,
      id: c.a.string,
      header: c.a.shape({
        title: c.a.string,
        image: c.a.string.isRequired,
        link: c.a.string
      }),
      banner: c.a.shape({
        text: c.a.string.isRequired,
        textColor: c.a.string,
        backgroundColor: c.a.string
      }),
      children: c.a.any
    }, Yn.defaultProps = {
      className: "",
      id: "",
      header: null,
      banner: null,
      children: null
    };

    var Jn = p.a.a(zn || (zn = r()(["\n\tcolor: ", ";\n\twhite-space: nowrap;\n\tdisplay: block;\n\tborder-radius: 4px;\n\tbackground-color: ", ";\n\tpadding: 12px 16px;\n\tbox-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);\n\tborder: none;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tfont-size: inherit;\n\tmargin-bottom: 8px;\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tcolor: ", ";\n\t\tbackground-color: ", ";\n\t}\n\n\t&:active {\n\t\tbackground-color: ", ";\n\t\ttransform: translateY( 1px );\n\t\tbox-shadow: none;\n\t\tfilter: none;\n\t}\n"])), d.colors.$color_black, d.colors.$color_grey_cta, d.colors.$color_black, d.colors.$color_grey_hover, d.colors.$color_grey_hover),
        Qn = p.a.a(Dn || (Dn = r()(["\n\tcursor: pointer;\n\tcolor: ", ";\n\twhite-space: nowrap;\n\tdisplay: block;\n\tborder-radius: 4px;\n\tbackground-color: ", ";\n\tpadding: 12px 16px;\n\tbox-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);\n\tborder: none;\n\ttext-decoration: none;\n\tfont-weight: bold;\n\tfont-size: inherit;\n\tmargin-top: 0;\n\tmargin-bottom: 8px;\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t}\n\n\t&:active {\n\t\tbackground-color: ", ";\n\t\ttransform: translateY( 1px );\n\t\tbox-shadow: none;\n\t\tfilter: none;\n\t}\n"])), d.colors.$color_black, d.colors.$color_button_upsell, d.colors.$color_black, d.colors.$color_button_upsell_hover, d.colors.$color_button_hover_upsell),
        to = p.a.a(Ln || (Ln = r()(["\n\tfont-weight: bold;\n"]))),
        eo = Object(f.makeOutboundLink)(to),
        no = p.a.div(An || (An = r()(["\n\ttext-align: center;\n"]))),
        oo = p.a.div($n || ($n = r()(["\n\tul {\n\t\tlist-style-type: none;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\tli {\n\t\tposition: relative;\n\t\t", ': 16px;\n\n\t\t&:before {\n\t\t\tcontent: "✓";\n\t\t\tcolor: ', ";\n\t\t\tposition: absolute;\n\t\t\tfont-weight: bold;\n\t\t\tdisplay: inline-block;\n\t\t\t", ": -16px;\n\t\t}\n\t}\n"])), Object(f.getDirectionalStyle)("margin-left", "margin-right"), d.colors.$color_green, Object(f.getDirectionalStyle)("left", "right")),
        ro = p.a.div(Fn || (Fn = r()(["\n\tmargin-bottom: 12px;\n\tborder-bottom: 1px ", " solid;\n\tflex-grow: 1;\n"])), d.colors.$color_grey),
        ao = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "getActionBlock",
        value: function value(t, e) {
          var n = Object(f.makeOutboundLink)(t);
          return "true" === e ? Object(a.createElement)(no, null, Object(a.createElement)(n, {
            href: this.props.courseUrl
          }, this.props.ctaButtonData.ctaButtonCopy)) : Object(a.createElement)(no, null, Object(a.createElement)(n, {
            href: this.props.ctaButtonData.ctaButtonUrl
          }, this.props.ctaButtonData.ctaButtonCopy), Object(a.createElement)(eo, {
            href: this.props.courseUrl
          }, this.props.readMoreLinkText));
        }
      }, {
        key: "render",
        value: function value() {
          var t = "regular" === this.props.ctaButtonData.ctaButtonType ? Jn : Qn;
          return Object(a.createElement)(i.Fragment, null, Object(a.createElement)(ro, null, Object(a.createElement)(oo, {
            dangerouslySetInnerHTML: {
              __html: this.props.description
            }
          })), this.getActionBlock(t, this.props.isBundle));
        }
      }]), r;
    }(s.a.Component),
        io = ao;

    ao.propTypes = {
      description: c.a.string,
      courseUrl: c.a.string,
      ctaButtonData: c.a.object,
      readMoreLinkText: c.a.string,
      isBundle: c.a.string
    }, ao.defaultProps = {
      description: "",
      courseUrl: "",
      ctaButtonData: {},
      readMoreLinkText: "",
      isBundle: ""
    };

    var so,
        lo = n(60),
        co = n.n(lo),
        uo = M()([A, D, L])(p.a.button(so || (so = r()(["\n\t\tdisplay: inline-flex;\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcursor: pointer;\n\t\tbox-sizing: border-box;\n\t\tborder: 1px solid transparent;\n\t\tmargin: 0;\n\t\tpadding: 8px;\n\t\toverflow: visible;\n\t\tfont-family: inherit;\n\t\tfont-weight: inherit;\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\tfont-size: ", ";\n\n\t\tsvg {\n\t\t\tmargin: 0 0 8px;\n\t\t\tflex-shrink: 0;\n\t\t\tfill: currentColor;\n\t\t\t// Safari 10\n\t\t\talign-self: center;\n\t\t}\n\n\t\t&:active {\n\t\t\tbox-shadow: none;\n\t\t}\n\t"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.backgroundColor;
    }, function (t) {
      return t.textFontSize;
    })),
        po = function po(t) {
      var e = t.children,
          n = t.icon,
          o = t.textColor,
          r = co()(t, "icon");
      return Object(a.createElement)(uo, r, Object(a.createElement)(_, {
        icon: n,
        color: o
      }), e);
    };

    po.propTypes = {
      type: c.a.string,
      icon: c.a.string.isRequired,
      textColor: c.a.string,
      textFontSize: c.a.string,
      backgroundColor: c.a.string,
      borderColor: c.a.string,
      hoverColor: c.a.string,
      hoverBackgroundColor: c.a.string,
      hoverBorderColor: c.a.string,
      activeColor: c.a.string,
      activeBackgroundColor: c.a.string,
      activeBorderColor: c.a.string,
      focusColor: c.a.string,
      focusBackgroundColor: c.a.string,
      focusBorderColor: c.a.string,
      focusBoxShadowColor: c.a.string,
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node, c.a.string]).isRequired
    }, po.defaultProps = {
      type: "button",
      textColor: d.colors.$color_blue,
      textFontSize: "inherit",
      backgroundColor: "transparent",
      borderColor: "transparent",
      hoverColor: d.colors.$color_white,
      hoverBackgroundColor: d.colors.$color_blue,
      hoverBorderColor: d.colors.$color_button_border_hover,
      activeColor: d.colors.$color_white,
      activeBackgroundColor: d.colors.$color_blue,
      activeBorderColor: d.colors.$color_button_border_active,
      focusColor: d.colors.$color_white,
      focusBackgroundColor: d.colors.$color_blue,
      focusBorderColor: d.colors.$color_blue,
      focusBoxShadowColor: d.colors.$color_blue_dark
    };

    var fo,
        ho = po,
        bo = function bo(t) {
      var e = t.children,
          n = t.icon,
          o = t.iconColor,
          i = _;
      e && (i = function (t) {
        return p()(t)(fo || (fo = r()(["\n\t\tmargin: ", ";\n\t\tflex-shrink: 0;\n\t"])), Object(f.getDirectionalStyle)("0 8px 0 0", "0 0 0 8px"));
      }(i));
      var s = co()(t, "icon");
      return Object(a.createElement)(H, s, Object(a.createElement)(i, {
        icon: n,
        color: o
      }), e);
    };

    bo.propTypes = {
      icon: c.a.string.isRequired,
      iconColor: c.a.string,
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node, c.a.string])
    }, bo.defaultProps = {
      iconColor: "#000"
    };
    var mo,
        go = bo,
        yo = n(61);

    var vo,
        xo = p.a.p(mo || (mo = r()(["\n\ttext-align: center;\n\tmargin: 0 0 16px;\n\tpadding: 16px 16px 8px 16px;\n\tborder-bottom: 4px solid ", ";\n\tbackground: ", ";\n"])), d.colors.$color_bad, d.colors.$color_white),
        Oo = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        var e;
        return Bt()(this, r), (e = o.call(this, t)).state = {
          hasError: !1
        }, e;
      }

      return Mt()(r, [{
        key: "componentDidCatch",
        value: function value() {
          this.setState({
            hasError: !0
          });
        }
      }, {
        key: "render",
        value: function value() {
          if (this.state.hasError) {
            var t = Object(ot.__)("Something went wrong. Please reload the page.", "yoast-components");
            return Object(yo.speak)(t, "assertive"), Object(a.createElement)(xo, null, t);
          }

          return this.props.children;
        }
      }]), r;
    }(s.a.Component);

    function Co(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, o);
      }

      return n;
    }

    function jo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Co(Object(n), !0).forEach(function (e) {
          st()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Co(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    Oo.propTypes = {
      children: c.a.any
    };

    var _o,
        wo = p.a.p(vo || (vo = r()(["\n\tcolor: ", ";\n\tfont-size: ", ";\n\tmargin-top: 0;\n"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.textFontSize;
    }),
        ko = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.children,
              n = t.textColor,
              o = t.textFontSize;
          return Object(a.createElement)(wo, {
            textColor: n,
            textFontSize: o
          }, e);
        }
      }]), r;
    }(i.PureComponent),
        Eo = {
      children: c.a.oneOfType([c.a.string, c.a.array]),
      textColor: c.a.string,
      textFontSize: c.a.string
    };

    ko.propTypes = jo(jo({}, Eo), {}, {
      children: Eo.children.isRequired
    }), ko.defaultProps = {
      textColor: d.colors.$color_help_text
    };

    var So = function So(t) {
      var e = p()(t.icon)(_o || (_o = r()(["\n\t\twidth: ", ";\n\t\theight: ", ";\n\t\t", "\n\t\tflex: 0 0 auto;\n\t"])), t.width, t.height, t.color ? "fill: ".concat(t.color, ";") : ""),
          n = co()(t, ["icon", "width", "height", "color"]);
      return Object(a.createElement)(e, K()({
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, n));
    };

    So.propTypes = {
      icon: c.a.func.isRequired,
      width: c.a.string,
      height: c.a.string,
      color: c.a.string
    }, So.defaultProps = {
      width: "16px",
      height: "16px"
    };

    var Ro,
        To = So,
        qo = p.a.button(Ro || (Ro = r()(["\n\tbox-sizing: border-box;\n\tmin-width: 32px;\n\tdisplay: inline-block;\n\tborder: 1px solid ", ";\n\tbackground-color: ", ";\n\tbox-shadow: ", ";\n\tborder-radius: 3px;\n\tcursor: pointer;\n\tpadding: 0;\n\theight: ", ";\n\n\t&:hover {\n\t\tborder-color: ", ";\n\t}\n\t&:disabled {\n\t\tbackground-color: ", ";\n\t\tbox-shadow: none;\n\t\tborder: none;\n\t\tcursor: default;\n\t}\n"])), d.colors.$color_button_border, function (t) {
      return t.pressed ? t.pressedBackground : t.unpressedBackground;
    }, function (t) {
      return t.pressed ? "inset 0 2px 0 ".concat(Object(d.rgba)(t.pressedBoxShadowColor, .7)) : "0 1px 0 ".concat(Object(d.rgba)(t.unpressedBoxShadowColor, .7));
    }, function (t) {
      return t.pressed ? "23px" : "24px";
    }, function (t) {
      return t.hoverBorderColor;
    }, function (t) {
      return t.unpressedBackground;
    }),
        Po = function Po(t) {
      return "disabled" === t.marksButtonStatus;
    },
        No = function No(t) {
      return Object(a.createElement)(qo, {
        disabled: Po(t),
        type: "button",
        onClick: t.onClick,
        pressed: t.pressed,
        unpressedBoxShadowColor: t.unpressedBoxShadowColor,
        pressedBoxShadowColor: t.pressedBoxShadowColor,
        pressedBackground: t.pressedBackground,
        unpressedBackground: t.unpressedBackground,
        id: t.id,
        "aria-label": t.ariaLabel,
        "aria-pressed": t.pressed,
        unpressedIconColor: Po(t) ? t.disabledIconColor : t.unpressedIconColor,
        pressedIconColor: t.pressedIconColor,
        hoverBorderColor: t.hoverBorderColor,
        className: t.className
      }, Po(t) && Object(a.createElement)(_, {
        icon: t.icon,
        color: t.disabledIconColor,
        size: "18px"
      }), !t.pressed && !Po(t) && Object(a.createElement)(_, {
        icon: t.icon,
        color: t.unpressedIconColor,
        size: "18px"
      }), t.pressed && !Po(t) && Object(a.createElement)(_, {
        icon: t.icon,
        color: t.pressedIconColor,
        size: "18px"
      }));
    };

    No.propTypes = {
      id: c.a.string.isRequired,
      ariaLabel: c.a.string.isRequired,
      onClick: c.a.func.isRequired,
      boxShadowColor: c.a.string,
      unpressedBoxShadowColor: c.a.string,
      pressedBoxShadowColor: c.a.string,
      pressedBackground: c.a.string,
      unpressedBackground: c.a.string,
      pressedIconColor: c.a.string,
      unpressedIconColor: c.a.string,
      icon: c.a.string.isRequired,
      pressed: c.a.bool.isRequired,
      hoverBorderColor: c.a.string,
      marksButtonStatus: c.a.string,
      disabledIconColor: c.a.string,
      className: c.a.string
    }, No.defaultProps = {
      unpressedBoxShadowColor: d.colors.$color_button_border,
      pressedBoxShadowColor: d.colors.$color_purple,
      pressedBackground: d.colors.$color_pink_dark,
      unpressedBackground: d.colors.$color_button,
      pressedIconColor: d.colors.$color_white,
      unpressedIconColor: d.colors.$color_button_text,
      hoverBorderColor: d.colors.$color_white,
      marksButtonStatus: "enabled",
      disabledIconColor: d.colors.$color_grey
    };
    var Bo = No;

    function Io(t) {
      return Object(a.createElement)("iframe", K()({
        title: t.title
      }, t));
    }

    Io.propTypes = {
      title: c.a.string.isRequired
    };

    var Mo = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "componentDidUpdate",
        value: function value() {
          this.props.hasFocus && this.ref.focus();
        }
      }, {
        key: "setReference",
        value: function value(t) {
          this.ref = t;
        }
      }, {
        key: "render",
        value: function value() {
          return Object(a.createElement)("input", K()({
            ref: this.setReference.bind(this),
            type: this.props.type,
            name: this.props.name,
            defaultValue: this.props.value,
            onChange: this.props.onChange,
            autoComplete: this.props.autoComplete,
            className: this.props.className
          }, this.props.optionalAttributes));
        }
      }]), r;
    }(s.a.Component);

    Mo.propTypes = {
      name: c.a.string.isRequired,
      type: c.a.oneOf(["button", "checkbox", "number", "password", "progress", "radio", "submit", "text"]).isRequired,
      value: c.a.any,
      onChange: c.a.func,
      optionalAttributes: c.a.object,
      hasFocus: c.a.bool,
      autoComplete: c.a.string,
      className: c.a.string
    }, Mo.defaultProps = {
      name: "input",
      type: "text",
      value: "",
      hasFocus: !1,
      className: ""
    };
    var zo = Mo,
        Do = n(41),
        Lo = n.n(Do),
        Ao = n(21),
        $o = n.n(Ao);

    var Fo = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        var e;
        return Bt()(this, r), (e = o.call(this, t)).state = {
          words: []
        }, e;
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          return Object(a.createElement)("div", null, this.props.header, this.props.introduction, Object(a.createElement)(kt, {
            items: this.state.words
          }), this.props.footer);
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function value(t) {
          var e = $o()(t.words);
          e.sort(function (t, e) {
            return e.getOccurrences() - t.getOccurrences();
          });
          var n = e.map(function (t) {
            return t.getOccurrences();
          }),
              o = Math.max.apply(Math, $o()(n));
          return {
            words: e.map(function (t) {
              var e = t.getOccurrences();
              return {
                name: t.getWord(),
                number: e,
                width: e / o * 100
              };
            })
          };
        }
      }]), r;
    }(s.a.Component);

    Fo.propTypes = {
      words: c.a.array.isRequired,
      header: c.a.element,
      introduction: c.a.element,
      footer: c.a.element
    }, Fo.defaultProps = {
      header: null,
      introduction: null,
      footer: null
    };

    var Uo = Fo,
        Ho = function Ho(t) {
      var e,
          n = t.words,
          o = Object(a.createElement)("p", {
        className: "yoast-field-group__title"
      }, Object(ot.__)("Prominent words", "yoast-components")),
          r = Object(a.createElement)("p", null, 0 === n.length ? Object(ot.__)("Once you add a bit more copy, we'll give you a list of words that occur the most in the content. These give an indication of what your content focuses on.", "yoast-components") : Object(ot.__)("The following words occur the most in the content. These give an indication of what your content focuses on. If the words differ a lot from your topic, you might want to rewrite your content accordingly. ", "yoast-components")),
          i = Object(a.createElement)("p", null, (e = Object(ot.sprintf)(Object(ot.__)("Read our %1$sultimate guide to keyword research%2$s to learn more about keyword research and keyword strategy.", "yoast-components"), "{{a}}", "{{/a}}"), Lo()({
        mixedString: e,
        components: {
          a: Object(a.createElement)("a", {
            href: "https://yoa.st/keyword-research-metabox",
            target: "_blank"
          })
        }
      })));
      return Object(a.createElement)(Uo, {
        words: n,
        header: o,
        introduction: r,
        footer: i
      });
    };

    Ho.propTypes = {
      words: c.a.arrayOf(c.a.object).isRequired
    };

    var Wo,
        Vo = Ho,
        Ko = p.a.div(Wo || (Wo = r()(['\n\tcursor: pointer;\n\tfont-size: 14px;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n\tmargin: 4px 0;\n\tcolor: #303030;\n\tfont-weight: 500;\n']))),
        Go = function Go(t) {
      return Object(a.createElement)("label", K()({
        htmlFor: t["for"],
        className: t.className
      }, t.optionalAttributes), t.children);
    };

    Go.propTypes = {
      "for": c.a.string.isRequired,
      optionalAttributes: c.a.shape({
        "aria-label": c.a.string,
        onClick: c.a.func,
        className: c.a.string
      }),
      children: c.a.any.isRequired,
      className: c.a.string
    }, Go.defaultProps = {
      className: "",
      optionalAttributes: {}
    };
    var Yo,
        Zo,
        Xo = Go;

    var Jo,
        Qo,
        tr = p.a.p(Yo || (Yo = r()(["\n\tmargin: 1em 0;\n"]))),
        er = Object(f.makeOutboundLink)(p.a.a(Zo || (Zo = r()(["\n\tmargin-left: 4px;\n"])))),
        nr = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.changeLanguageLink,
              n = t.canChangeLanguage,
              o = t.language;
          if (!t.showLanguageNotice) return null;
          /* Translators: %s expands to the actual language. */

          var r = Object(ot.__)("Your site language is set to %s. ", "yoast-components");
          return n || (
          /* Translators: %s expands to the actual language. */
          r = Object(ot.__)("Your site language is set to %s. If this is not correct, contact your site administrator.", "yoast-components")), r = Object(ot.sprintf)(r, "{{strong}}".concat(o, "{{/strong}}")), r = Lo()({
            mixedString: r,
            components: {
              strong: Object(a.createElement)("strong", null)
            }
          }), Object(a.createElement)(tr, null, r, n && Object(a.createElement)(er, {
            href: e
          }, Object(ot.__)("Change language", "yoast-components")));
        }
      }]), r;
    }(i.PureComponent),
        or = {
      changeLanguageLink: c.a.string.isRequired,
      canChangeLanguage: c.a.bool,
      language: c.a.string.isRequired,
      showLanguageNotice: c.a.bool
    };

    nr.propTypes = or, nr.defaultProps = {
      canChangeLanguage: !1,
      showLanguageNotice: !1
    };

    var rr = function rr(t) {
      var e = t.className;
      return "" !== e && (e += " "), e += "yoast-loader", Object(a.createElement)("svg", {
        version: "1.1",
        id: "Y__x2B__bg",
        x: "0px",
        y: "0px",
        viewBox: "0 0 500 500",
        className: e
      }, Object(a.createElement)("g", null, Object(a.createElement)("g", null, Object(a.createElement)("linearGradient", {
        id: "SVGID_1_",
        gradientUnits: "userSpaceOnUse",
        x1: "250",
        y1: "428.6121",
        x2: "250",
        y2: "77.122"
      }, Object(a.createElement)("stop", {
        offset: "0",
        style: {
          stopColor: "#570732"
        }
      }), Object(a.createElement)("stop", {
        offset: "2.377558e-02",
        style: {
          stopColor: "#5D0936"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.1559",
        style: {
          stopColor: "#771549"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.3019",
        style: {
          stopColor: "#8B1D58"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.4669",
        style: {
          stopColor: "#992362"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.6671",
        style: {
          stopColor: "#A12768"
        }
      }), Object(a.createElement)("stop", {
        offset: "1",
        style: {
          stopColor: "#A4286A"
        }
      })), Object(a.createElement)("path", {
        fill: "url(#SVGID_1_)",
        d: "M454.7,428.6H118.4c-40.2,0-73.2-32.9-73.2-73.2V150.3c0-40.2,32.9-73.2,73.2-73.2h263.1 c40.2,0,73.2,32.9,73.2,73.2V428.6z"
      })), Object(a.createElement)("g", null, Object(a.createElement)("g", null, Object(a.createElement)("g", null, Object(a.createElement)("g", null, Object(a.createElement)("path", {
        fill: "#A4286A",
        d: "M357.1,102.4l-43.8,9.4L239.9,277l-47.2-147.8h-70.2l78.6,201.9c6.7,17.2,6.7,36.3,0,53.5 c-6.7,17.2,45.1-84.1,24.7-75.7c0,0,34.9,97.6,36.4,94.5c7-14.3,13.7-30.3,20.2-48.5L387.4,72 C387.4,72,358.4,102.4,357.1,102.4z"
      }))))), Object(a.createElement)("g", null, Object(a.createElement)("linearGradient", {
        id: "SVGID_2_",
        gradientUnits: "userSpaceOnUse",
        x1: "266.5665",
        y1: "-6.9686",
        x2: "266.5665",
        y2: "378.4586"
      }, Object(a.createElement)("stop", {
        offset: "0",
        style: {
          stopColor: "#77B227"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.4669",
        style: {
          stopColor: "#75B027"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.635",
        style: {
          stopColor: "#6EAB27"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.7549",
        style: {
          stopColor: "#63A027"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.8518",
        style: {
          stopColor: "#529228"
        }
      }), Object(a.createElement)("stop", {
        offset: "0.9339",
        style: {
          stopColor: "#3C7F28"
        }
      }), Object(a.createElement)("stop", {
        offset: "1",
        style: {
          stopColor: "#246B29"
        }
      })), Object(a.createElement)("path", {
        fill: "url(#SVGID_2_)",
        d: "M337,6.1l-98.6,273.8l-47.2-147.8H121L199.6,334c6.7,17.2,6.7,36.3,0,53.5 c-8.8,22.5-23.4,41.8-59,46.6v59.9c69.4,0,106.9-42.6,140.3-136.1L412.1,6.1H337z"
      }), Object(a.createElement)("path", {
        fill: "#FFFFFF",
        d: "M140.6,500h-6.1v-71.4l5.3-0.7c34.8-4.7,46.9-24.2,54.1-42.7c6.2-15.8,6.2-33.2,0-49l-81.9-210.3h83.7 l43.1,134.9L332.7,0h88.3L286.7,359.9c-17.9,50-36.4,83.4-58.1,105.3C205,488.9,177,500,140.6,500z M146.7,439.2v48.3 c29.9-1.2,53.3-11.1,73.1-31.1c20.4-20.5,38-52.6,55.3-100.9L403.2,12.3h-61.9L238.1,299l-51.3-160.8H130l75.3,193.5 c7.3,18.7,7.3,39.2,0,57.9C197.7,409.3,184.1,432.4,146.7,439.2z"
      }))));
    };

    rr.propTypes = {
      className: c.a.string
    }, rr.defaultProps = {
      className: ""
    };
    var ar,
        ir,
        sr,
        lr,
        cr,
        ur = Object(u.keyframes)(Jo || (Jo = r()(["\n\t0%   { transform: scale( 0.70 ); opacity: 0.4; }\n\t80%  { opacity: 1 }\n\t100%  { transform: scale( 0.95 ); opacity: 1 }\n"]))),
        pr = p()(rr)(Qo || (Qo = r()(["\n\tanimation: ", " 1.15s infinite;\n\tanimation-direction: alternate;\n\tanimation-timing-function: cubic-bezier(0.96, 0.02, 0.63, 0.86);\n"])), ur);

    var dr = p.a.div(ar || (ar = r()(["\n\tpadding: 8px;\n"]))),
        fr = p.a.ol(ir || (ir = r()(["\n\tpadding: 0;\n\tmargin: 0;\n\n\tlist-style: none;\n\tcounter-reset: multi-step-progress-counter;\n\n\tli {\n\t\tcounter-increment: multi-step-progress-counter;\n\t}\n"]))),
        hr = p.a.li(sr || (sr = r()(["\n\tdisplay: flex;\n\talign-items: baseline;\n\n\tmargin: 8px 0;\n\n\t:first-child {\n\t\tmargin-top: 0;\n\t}\n\n\t:last-child {\n\t\tmargin-bottom: 0;\n\t}\n\n\tspan {\n\t\tmargin: 0 8px;\n\t}\n\n\tsvg {\n\t\tposition: relative;\n\t\ttop: 2px;\n\t}\n\n\t::before {\n\t\tcontent: counter( multi-step-progress-counter );\n\t\tfont-size: 12px;\n\t\tbackground: ", ";\n\t\tborder-radius: 50%;\n\t\tmin-width: 16px;\n\t\theight: 16px;\n\t\tpadding: 4px;\n\t\tcolor: ", ";\n\t\ttext-align: center;\n\t}\n"])), d.colors.$color_pink_dark, d.colors.$color_white),
        br = p()(hr)(lr || (lr = r()(["\n\tspan {\n\t\tcolor: ", ";\n\t}\n\n\t::before {\n\t\tbackground-color: ", ";\n\t}\n"])), d.colors.$palette_grey_text_light, d.colors.$palette_grey_medium_dark),
        mr = p()(hr)(cr || (cr = r()(["\n\t::before {\n\t\tbackground-color: ", ";\n\t}\n"])), d.colors.$palette_grey_medium_dark),
        gr = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          var t = this;
          return Object(a.createElement)(dr, {
            role: "status",
            "aria-live": "polite",
            "aria-relevant": "additions text",
            "aria-atomic": !0
          }, Object(a.createElement)(fr, null, this.props.steps.map(function (e) {
            switch (e.status) {
              case "running":
                return t.renderRunningState(e);

              case "failed":
                return t.renderFailedState(e);

              case "finished":
                return t.renderFinishedState(e);

              case "pending":
              default:
                return t.renderPendingState(e);
            }
          })));
        }
      }, {
        key: "renderPendingState",
        value: function value(t) {
          return Object(a.createElement)(br, {
            key: t.id
          }, Object(a.createElement)("span", null, t.text));
        }
      }, {
        key: "renderRunningState",
        value: function value(t) {
          return Object(a.createElement)(mr, {
            key: t.id
          }, Object(a.createElement)("span", null, t.text), Object(a.createElement)(_, {
            icon: "loading-spinner"
          }));
        }
      }, {
        key: "renderFinishedState",
        value: function value(t) {
          return Object(a.createElement)(hr, {
            key: t.id
          }, Object(a.createElement)("span", null, t.text), Object(a.createElement)(_, {
            icon: "check",
            color: d.colors.$color_green_medium_light
          }));
        }
      }, {
        key: "renderFailedState",
        value: function value(t) {
          return Object(a.createElement)(hr, {
            key: t.id
          }, Object(a.createElement)("span", null, t.text), Object(a.createElement)(_, {
            icon: "times",
            color: d.colors.$color_red
          }));
        }
      }]), r;
    }(s.a.Component);

    gr.defaultProps = {
      steps: []
    }, gr.propTypes = {
      steps: c.a.arrayOf(c.a.shape({
        status: c.a.oneOf(["pending", "running", "finished", "failed"]).isRequired,
        text: c.a.string.isRequired,
        id: c.a.string.isRequired
      }))
    };
    var yr,
        vr = gr,
        xr = p.a.div(yr || (yr = r()(["\n\tbox-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);\n\tbackground-color: ", ";\n\tmin-height: ", ";\n"])), function (t) {
      return t.backgroundColor;
    }, function (t) {
      return t.minHeight;
    });
    xr.propTypes = {
      backgroundColor: c.a.string,
      minHeight: c.a.string
    }, xr.defaultProps = {
      backgroundColor: d.colors.$color_white,
      minHeight: "0"
    };

    var Or,
        Cr,
        jr,
        _r,
        wr,
        kr = xr,
        Er = p.a.div(Or || (Or = r()(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 24px;\n\n\th1, h2, h3, h4, h5, h6 {\n\t\tfont-size: 1.4em;\n\t\tline-height: 1;\n\t\tmargin: 0 0 4px 0;\n\n\t\t@media screen and ( max-width: ", " ) {\n\t\t\t", "\n\t\t}\n\t}\n\n\tp:last-child {\n\t\tmargin: 0;\n\t}\n\n\t@media screen and ( max-width: ", " ) {\n\t\tdisplay: block;\n\t\tposition: relative;\n\t\tpadding: 16px;\n\t}\n"])), d.breakpoints.mobile, function (t) {
      return t.isDismissable ? "margin-right: 30px;" : "";
    }, d.breakpoints.mobile),
        Sr = p.a.img(Cr || (Cr = r()(["\n\tflex: 0 0 ", ";\n\theight: ", ";\n\tmargin-right: 24px;\n\n\t@media screen and ( max-width: ", " ) {\n\t\tdisplay: none;\n\t}\n"])), function (t) {
      return t.imageWidth ? t.imageWidth : "auto";
    }, function (t) {
      return t.imageHeight ? t.imageHeight : "auto";
    }, d.breakpoints.mobile),
        Rr = p.a.div(jr || (jr = r()(["\n\tflex: 1 1 auto;\n"]))),
        Tr = p.a.button(_r || (_r = r()(["\n\tflex: 0 0 40px;\n\theight: 40px;\n\tborder: 0;\n\tmargin: 0 0 0 10px;\n\tpadding: 0;\n\tbackground: transparent;\n\tcursor: pointer;\n\n\t@media screen and ( max-width: ", " ) {\n\t\twidth: 40px;\n\t\tposition: absolute;\n\t\ttop: 5px;\n\t\tright: 5px;\n\t\tmargin: 0;\n\t}\n"])), d.breakpoints.mobile),
        qr = p()(_)(wr || (wr = r()(["\n\tvertical-align: middle;\n"])));

    function Pr(t) {
      var e = "".concat(t.headingLevel);
      return Object(a.createElement)(kr, null, Object(a.createElement)(Er, {
        isDismissable: t.isDismissable
      }, t.imageSrc && Object(a.createElement)(Sr, {
        src: t.imageSrc,
        imageWidth: t.imageWidth,
        imageHeight: t.imageHeight,
        alt: ""
      }), Object(a.createElement)(Rr, null, Object(a.createElement)(e, null, t.title), Object(a.createElement)("p", {
        className: "prova",
        dangerouslySetInnerHTML: {
          __html: t.html
        }
      })), t.isDismissable && Object(a.createElement)(Tr, {
        onClick: t.onClick,
        type: "button",
        "aria-label": Object(ot.__)("Dismiss this notice", "yoast-components")
      }, Object(a.createElement)(qr, {
        icon: "times",
        color: d.colors.$color_grey_text,
        size: "24px"
      }))));
    }

    Pr.propTypes = {
      imageSrc: c.a.string,
      imageWidth: c.a.string,
      imageHeight: c.a.string,
      title: c.a.string,
      html: c.a.string,
      isDismissable: c.a.bool,
      onClick: c.a.func,
      headingLevel: c.a.string
    }, Pr.defaultProps = {
      isDismissable: !1,
      headingLevel: "h3"
    };
    var Nr,
        Br = Pr,
        Ir = p.a.progress(Nr || (Nr = r()(["\n\tbox-sizing: border-box;\n\twidth: 100%;\n\theight: 8px;\n\tdisplay: block;\n\tmargin-top: 8px;\n\tappearance: none;\n\tbackground-color: ", ";\n\tborder: 1px solid ", ";\n\n\t::-webkit-progress-bar {\n\t   \tbackground-color: ", ";\n\t}\n\n\t::-webkit-progress-value {\n\t\tbackground-color: ", ";\n\t\ttransition: width 250ms;\n\t}\n\n\t::-moz-progress-bar {\n\t\tbackground-color: ", ";\n\t}\n\t\n\t::-ms-fill {\n\t\tbackground-color: ", ";\n\t\tborder: 0;\n\t}\n"])), function (t) {
      return t.backgroundColor;
    }, function (t) {
      return t.borderColor;
    }, function (t) {
      return t.backgroundColor;
    }, function (t) {
      return t.progressColor;
    }, function (t) {
      return t.progressColor;
    }, function (t) {
      return t.progressColor;
    });
    Ir.defaultProps = {
      max: 1,
      value: 0,
      progressColor: d.colors.$color_good,
      backgroundColor: d.colors.$color_background_light,
      borderColor: d.colors.$color_input_border,
      "aria-hidden": "true"
    }, Ir.propTypes = {
      max: c.a.number,
      value: c.a.number,
      progressColor: c.a.string,
      backgroundColor: c.a.string,
      borderColor: c.a.string,
      "aria-hidden": c.a.string
    };
    var Mr,
        zr,
        Dr,
        Lr,
        Ar,
        $r,
        Fr = Ir,
        Ur = p.a.li(Mr || (Mr = r()(["\n\tdisplay: table-row;\n\tfont-size: 14px;\n"]))),
        Hr = p.a.span(zr || (zr = r()(["\n\tdisplay: table-cell;\n\tpadding: 2px;\n"]))),
        Wr = p()(Hr)(Dr || (Dr = r()(["\n\tposition: relative;\n\ttop: 1px;\n\tdisplay: inline-block;\n\theight: 8px;\n\twidth: 8px;\n\tborder-radius: 50%;\n\tbackground-color: ", ";\n"])), function (t) {
      return t.scoreColor;
    });
    Wr.propTypes = {
      scoreColor: c.a.string.isRequired
    };

    var Vr = p()(Hr)(Lr || (Lr = r()(["\n\tpadding-left: 8px;\n\twidth: 100%;\n"]))),
        Kr = p()(Hr)(Ar || (Ar = r()(["\n\tfont-weight: 600;\n\ttext-align: right;\n\tpadding-left: 16px;\n"]))),
        Gr = function Gr(t) {
      return Object(a.createElement)(Ur, {
        className: "".concat(t.className)
      }, Object(a.createElement)(Wr, {
        className: "".concat(t.className, "-bullet"),
        scoreColor: t.scoreColor
      }), Object(a.createElement)(Vr, {
        className: "".concat(t.className, "-text"),
        dangerouslySetInnerHTML: {
          __html: t.html
        }
      }), t.value && Object(a.createElement)(Kr, {
        className: "".concat(t.className, "-score")
      }, t.value));
    };

    Gr.propTypes = {
      className: c.a.string.isRequired,
      scoreColor: c.a.string.isRequired,
      html: c.a.string.isRequired,
      value: c.a.number
    };

    var Yr = p.a.ul($r || ($r = r()(["\n\tdisplay: table;\n\tbox-sizing: border-box;\n\tlist-style: none;\n\tmax-width: 100%;\n\tmin-width: 200px;\n\tmargin: 8px 0;\n\tpadding: 0 8px;\n"]))),
        Zr = function Zr(t) {
      return Object(a.createElement)(Yr, {
        className: t.className,
        role: "list"
      }, t.items.map(function (e, n) {
        return Object(a.createElement)(Gr, {
          className: "".concat(t.className, "__item"),
          key: n,
          scoreColor: e.color,
          html: e.html,
          value: e.value
        });
      }));
    };

    Zr.propTypes = {
      className: c.a.string,
      items: c.a.arrayOf(c.a.shape({
        color: c.a.string.isRequired,
        html: c.a.string.isRequired,
        value: c.a.number
      }))
    }, Zr.defaultProps = {
      className: "score-assessments"
    };
    var Xr,
        Jr,
        Qr = Zr,
        ta = p.a.div(Xr || (Xr = r()(["\n\tmargin: 8px 0;\n\theight: ", ";\n\toverflow: hidden;\n"])), function (t) {
      return t.barHeight;
    }),
        ea = p.a.span(Jr || (Jr = r()(["\n\tdisplay: inline-block;\n\tvertical-align: top;\n\twidth: ", ";\n\tbackground-color: ", ";\n\theight: 100%;\n"])), function (t) {
      return "".concat(t.progressWidth, "%");
    }, function (t) {
      return t.progressColor;
    });
    ea.propTypes = {
      progressWidth: c.a.number.isRequired,
      progressColor: c.a.string.isRequired
    };

    var na = function na(t) {
      for (var e = 0, n = 0; n < t.items.length; n++) {
        t.items[n].value = Math.max(t.items[n].value, 0), e += t.items[n].value;
      }

      return e <= 0 ? null : Object(a.createElement)(ta, {
        className: t.className,
        barHeight: t.barHeight
      }, t.items.map(function (n, o) {
        return Object(a.createElement)(ea, {
          className: "".concat(t.className, "__part"),
          key: o,
          progressColor: n.color,
          progressWidth: n.value / e * 100
        });
      }));
    };

    na.propTypes = {
      className: c.a.string,
      items: c.a.arrayOf(c.a.shape({
        value: c.a.number.isRequired,
        color: c.a.string.isRequired
      })),
      barHeight: c.a.string
    }, na.defaultProps = {
      className: "stacked-progress-bar",
      barHeight: "24px"
    };

    var oa,
        ra,
        aa,
        ia,
        sa,
        la,
        ca = na,
        ua = p.a.div.attrs({})(oa || (oa = r()(["\n\tflex: 0 1 100%;\n\tborder: 1px solid ", ";\n\tpadding: 4px 5px;\n\tbox-sizing: border-box;\n\tbox-shadow: ", ';\n\tbackground-color: #fff;\n\tcolor: #32373c;\n\toutline: 0;\n\ttransition: 50ms border-color ease-in-out;\n\tposition: relative;\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n\tfont-size: 14px;\n\tcursor: text;\n'])), function (t) {
      return t.isActive ? "#5b9dd9" : "#ddd";
    }, function (t) {
      return t.isActive ? "0 0 2px rgba(30,140,190,.8);" : "inset 0 1px 2px rgba(0,0,0,.07)";
    }),
        pa = p.a.div(ra || (ra = r()(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin: 1em 0;\n"]))),
        da = p.a.input(aa || (aa = r()(["\n\t&&& {\n\t\tpadding: 0 8px;\n\t\tmin-height: 34px;\n\t\tfont-size: 1em;\n\t\tbox-shadow: inset 0 1px 2px ", ";\n\t\tborder: 1px solid ", ";\n\t\tborder-radius: 0;\n\n\t\t&:focus {\n\t\t\tborder-color: #5b9dd9;\n\t\t\tbox-shadow: 0 0 2px ", ";\n\t\t}\n\t}\n"])), Object(d.rgba)(d.colors.$color_black, .07), d.colors.$color_input_border, Object(d.rgba)(d.colors.$color_snippet_focus, .8)),
        fa = p.a.label(ia || (ia = r()(["\n\tfont-size: 1em;\n\tfont-weight: bold;\n\tmargin-bottom: 0.5em;\n\tdisplay: block;\n"]))),
        ha = p.a.span(sa || (sa = r()(["\n\tmargin-bottom: 0.5em;\n"]))),
        ba = p()(fa)(la || (la = r()(["\n\tdisplay: inline-block;\n\tmargin-bottom: 0;\n\t", ";\n"])), Object(f.getDirectionalStyle)("margin-right: 4px", "margin-left: 4px")),
        ma = function ma(t) {
      var e = t.label,
          n = t.helpLink,
          o = Y()(t, ["label", "helpLink"]);
      return Object(a.createElement)(pa, null, Object(a.createElement)(ha, null, Object(a.createElement)(ba, {
        htmlFor: o.id
      }, e), n), Object(a.createElement)(da, K()({}, o, {
        autoComplete: "off"
      })));
    };

    ma.propTypes = {
      type: c.a.string,
      id: c.a.string.isRequired,
      label: c.a.string,
      helpLink: c.a.node
    }, ma.defaultProps = {
      type: "text",
      label: "",
      helpLink: null
    };
    var ga = ma;

    var ya = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          return Object(a.createElement)("textarea", K()({
            ref: this.setReference.bind(this),
            name: this.props.name,
            value: this.props.value,
            onChange: this.props.onChange
          }, this.props.optionalAttributes));
        }
      }, {
        key: "setReference",
        value: function value(t) {
          this.ref = t;
        }
      }, {
        key: "componentDidUpdate",
        value: function value() {
          this.props.hasFocus && this.ref.focus();
        }
      }]), r;
    }(s.a.Component);

    ya.propTypes = {
      name: c.a.string.isRequired,
      value: c.a.string,
      onChange: c.a.func,
      optionalAttributes: c.a.object,
      hasFocus: c.a.bool
    }, ya.defaultProps = {
      name: "textarea",
      value: "",
      hasFocus: !1
    };
    var va = ya;

    var xa = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        var e;
        return Bt()(this, r), (e = o.call(this, t)).optionalAttributes = e.parseOptionalAttributes(), e;
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          return this.optionalAttributes = this.parseOptionalAttributes(), this.props["class"] && (this.optionalAttributes.container.className = this.props["class"]), Object(a.createElement)("div", this.optionalAttributes.container, Object(a.createElement)(Xo, {
            "for": this.props.name,
            optionalAttributes: this.optionalAttributes.label
          }, this.props.label), this.getTextField());
        }
      }, {
        key: "getTextField",
        value: function value() {
          return !0 === this.props.multiline ? Object(a.createElement)("div", null, Object(a.createElement)(va, {
            name: this.props.name,
            id: this.props.name,
            onChange: this.props.onChange,
            optionalAttributes: this.optionalAttributes.field,
            hasFocus: this.props.hasFocus,
            value: this.props.value
          }), this.props.explanation && Object(a.createElement)("p", null, this.props.explanation)) : Object(a.createElement)("div", null, Object(a.createElement)(zo, {
            name: this.props.name,
            id: this.props.name,
            type: "text",
            onChange: this.props.onChange,
            value: this.props.value,
            hasFocus: this.props.hasFocus,
            autoComplete: this.props.autoComplete,
            optionalAttributes: this.optionalAttributes.field
          }), this.props.explanation && Object(a.createElement)("p", null, this.props.explanation));
        }
      }, {
        key: "parseOptionalAttributes",
        value: function value() {
          var t = {},
              e = {},
              n = {
            id: this.props.name
          };
          return Object.keys(this.props).forEach(function (o) {
            o.startsWith("label-") && (e[o.split("-").pop()] = this.props[o]), o.startsWith("field-") && (n[o.split("-").pop()] = this.props[o]), o.startsWith("container-") && (t[o.split("-").pop()] = this.props[o]);
          }.bind(this)), {
            label: e,
            field: n,
            container: t
          };
        }
      }]), r;
    }(s.a.Component);

    xa.propTypes = {
      label: c.a.string.isRequired,
      name: c.a.string.isRequired,
      onChange: c.a.func.isRequired,
      value: c.a.string,
      optionalAttributes: c.a.object,
      multiline: c.a.bool,
      hasFocus: c.a.bool,
      "class": c.a.string,
      explanation: c.a.string,
      autoComplete: c.a.string
    }, xa.defaultProps = {
      optionalAttributes: {},
      multiline: !1,
      hasFocus: !1
    };

    var Oa,
        Ca,
        ja,
        _a,
        wa,
        ka = xa;

    var Ea = p.a.div(Oa || (Oa = r()(["\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: space-between;\n\talign-items: center;\n"]))),
        Sa = p.a.span(Ca || (Ca = r()(["\n\t", ": 16px;\n\tflex: 1;\n\tcursor: pointer;\n"])), Object(f.getDirectionalStyle)("margin-right", "margin-left")),
        Ra = p.a.div(ja || (ja = r()(["\n\tbackground-color: ", ";\n\tborder-radius: 7px;\n\theight: 14px;\n\twidth: 30px;\n\tcursor: pointer;\n\tmargin: 0;\n\toutline: 0;\n\t&:focus > span {\n\t\tbox-shadow: inset 0 0 0 1px ", ", 0 0 0 1px #5b9dd9, 0 0 2px 1px rgba(30, 140, 190, .8);\n\t}\n"])), function (t) {
      return t.isEnabled ? "#a5d6a7" : d.colors.$color_button_border;
    }, d.colors.$color_white),
        Ta = p.a.span(_a || (_a = r()(["\n\tbackground-color: ", ";\n\t", ";\n\tbox-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.1);\n\tborder-radius: 100%;\n\theight: 20px;\n\twidth: 20px;\n\tposition: absolute;\n\tmargin-top: -3px;\n"])), function (t) {
      return t.isEnabled ? d.colors.$color_green_medium_light : d.colors.$color_grey_medium_dark;
    }, function (t) {
      return t.isEnabled ? Object(f.getDirectionalStyle)("margin-left: 12px;", "margin-right: 12px;") : Object(f.getDirectionalStyle)("margin-left: -2px;", "margin-right: -2px;");
    }),
        qa = p.a.span(wa || (wa = r()(["\n\tfont-size: 14px;\n\tline-height: 20px;\n\t", ": 8px;\n\tfont-style: italic;\n"])), Object(f.getDirectionalStyle)("margin-left", "margin-right")),
        Pa = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        var e;
        return Bt()(this, r), (e = o.call(this, t)).onClick = e.props.onToggleDisabled, e.onKeyUp = e.props.onToggleDisabled, e.setToggleState = e.setToggleState.bind(ne()(e)), e.handleOnKeyDown = e.handleOnKeyDown.bind(ne()(e)), !0 !== t.disable && (e.onClick = e.setToggleState.bind(ne()(e)), e.onKeyUp = e.setToggleState.bind(ne()(e))), e;
      }

      return Mt()(r, [{
        key: "setToggleState",
        value: function value(t) {
          "keyup" === t.type && 32 !== t.keyCode || this.props.onSetToggleState(!this.props.isEnabled);
        }
      }, {
        key: "handleOnKeyDown",
        value: function value(t) {
          32 === t.keyCode && t.preventDefault();
        }
      }, {
        key: "render",
        value: function value() {
          return Object(a.createElement)(Ea, null, Object(a.createElement)(Sa, {
            id: this.props.id,
            onClick: this.onClick
          }, this.props.labelText), Object(a.createElement)(Ra, {
            isEnabled: this.props.isEnabled,
            onKeyDown: this.handleOnKeyDown,
            onClick: this.onClick,
            onKeyUp: this.onKeyUp,
            tabIndex: "0",
            role: "checkbox",
            "aria-labelledby": this.props.id,
            "aria-checked": this.props.isEnabled,
            "aria-disabled": this.props.disable
          }, Object(a.createElement)(Ta, {
            isEnabled: this.props.isEnabled
          })), Object(a.createElement)(qa, {
            "aria-hidden": "true"
          }, this.props.isEnabled ? Object(ot.__)("On", "yoast-components") : Object(ot.__)("Off", "yoast-components")));
        }
      }]), r;
    }(s.a.Component);

    Pa.propTypes = {
      isEnabled: c.a.bool,
      onSetToggleState: c.a.func,
      disable: c.a.bool,
      onToggleDisabled: c.a.func,
      id: c.a.string.isRequired,
      labelText: c.a.string.isRequired
    }, Pa.defaultProps = {
      isEnabled: !1,
      onSetToggleState: function onSetToggleState() {},
      labelText: "",
      disable: !1,
      onToggleDisabled: function onToggleDisabled() {}
    };
    var Na,
        Ba,
        Ia = Pa;

    function Ma(t) {
      return p()(t)(Na || (Na = r()(["\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tvertical-align: middle;\n\t\tmin-height: ", ";\n\t\tmargin: 0;\n\t\tpadding: 0 16px;\n\t\tpadding: ", ' 16px;\n\t\tborder: 0;\n\t\tborder-radius: 4px;\n\t\tbox-sizing: border-box;\n\t\tfont: 400 14px/24px "Open Sans", sans-serif;\n\t\ttext-transform: uppercase;\n\t\tbox-shadow: 0 2px 8px 0 ', ";\n\t\ttransition: box-shadow 150ms ease-out;\n\n\t\t&:hover,\n\t\t&:focus,\n\t\t&:active {\n\t\t\tbox-shadow:\n\t\t\t\t0 4px 10px 0 ", ",\n\t\t\t\tinset 0 0 0 100px ", ";\n\t\t\tcolor: ", ';\n\t\t}\n\n\t\t&:active {\n\t\t\ttransform: translateY( 1px );\n\t\t\tbox-shadow: none;\n\t\t}\n\n\t\t// Only needed for IE 10+. Don\'t add spaces within brackets for this to work.\n\t\t@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n\t\t\t::after {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcontent: "";\n\t\t\t\tmin-height: ', ";\n\t\t\t}\n\t\t}\n\t"])), "".concat(48, "px"), "".concat(0, "px"), Object(d.rgba)(d.colors.$color_black, .3), Object(d.rgba)(d.colors.$color_black, .2), Object(d.rgba)(d.colors.$color_black, .1), function (t) {
        return t.textColor;
      }, "".concat(48, "px"));
    }

    var za = function za(t) {
      var e = t.className,
          n = t.onClick,
          o = t.type,
          r = t.children,
          i = t.isExpanded;
      return Object(a.createElement)("button", {
        className: e,
        onClick: n,
        type: o,
        "aria-expanded": i
      }, Object(a.createElement)("span", null, r));
    };

    za.propTypes = {
      className: c.a.string,
      onClick: c.a.func,
      type: c.a.string,
      isExpanded: c.a.bool,
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node, c.a.string])
    }, za.defaultProps = {
      type: "button"
    };
    var Da,
        La,
        Aa,
        $a = Ma(p()(za)(Ba || (Ba = r()(["\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\tmin-width: 152px;\n\t\t", ";\n\t\toverflow: visible;\n\t\tcursor: pointer;\n\n\t\t&::-moz-focus-inner {\n\t\t\tborder-width: 0;\n\t\t}\n\n\t\t// Only needed for Safari 10 and only for buttons.\n\t\tspan {\n\t\t\tdisplay: inherit;\n\t\t\talign-items: inherit;\n\t\t\tjustify-content: inherit;\n\t\t\twidth: 100%;\n\t\t}\n\t"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.backgroundColor;
    }, function (t) {
      return t.withTextShadow ? "text-shadow: 0 0 2px ".concat(d.colors.$color_black) : "";
    }));
    $a.propTypes = {
      backgroundColor: c.a.string,
      textColor: c.a.string,
      withTextShadow: c.a.bool
    }, $a.defaultProps = {
      backgroundColor: d.colors.$color_green_medium_light,
      textColor: d.colors.$color_white,
      withTextShadow: !0
    };
    var Fa,
        Ua = p()(_)(Da || (Da = r()(["\n\t\tmargin: 2px 4px 0 4px;\n\t\tflex-shrink: 0;\n"]))),
        Ha = (Fa = p()(za)(Aa || (Aa = r()(["\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\toverflow: visible;\n\t\tcursor: pointer;\n\n\t\t&::-moz-focus-inner {\n\t\t\tborder-width: 0;\n\t\t}\n\n\t\t// Only needed for Safari 10 and only for buttons.\n\t\tspan {\n\t\t\tdisplay: inherit;\n\t\t\talign-items: inherit;\n\t\t\tjustify-content: inherit;\n\t\t\twidth: 100%;\n\t\t}\n\t"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.backgroundColor;
    }), p()(Fa)(La || (La = r()(["\n\t\tdisplay: inline-flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tvertical-align: middle;\n\t\tmin-height: ", ";\n\t\tmargin: 0;\n\t\toverflow: auto;\n\t\tmin-width: 152px;\n\t\tpadding: 0 16px;\n\t\tpadding: ", " 8px ", ' 16px;\n\t\tborder: 0;\n\t\tborder-radius: 4px;\n\t\tbox-sizing: border-box;\n\t\tfont: 400 16px/24px "Open Sans", sans-serif;\n\t\tbox-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);\n\t\tfilter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));\n\t\ttransition: box-shadow 150ms ease-out;\n\n\t\t&:hover,\n\t\t&:focus,\n\t\t&:active {\n\t\t\tbackground: ', ';\n\t\t}\n\n\t\t&:active {\n\t\t\ttransform: translateY( 1px );\n\t\t\tbox-shadow: none;\n\t\t\tfilter: none;\n\t\t}\n\n\t\t// Only needed for IE 10+. Don\'t add spaces within brackets for this to work.\n\t\t@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n\t\t\t::after {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcontent: "";\n\t\t\t\tmin-height: ', ";\n\t\t\t}\n\t\t}\n\t"])), "".concat(48, "px"), "".concat(8, "px"), "".concat(8, "px"), d.colors.$color_button_upsell_hover, "".concat(32, "px")));
    Ha.propTypes = {
      backgroundColor: c.a.string,
      hoverColor: c.a.string,
      textColor: c.a.string
    }, Ha.defaultProps = {
      backgroundColor: d.colors.$color_button_upsell,
      hoverColor: d.colors.$color_button_hover_upsell,
      textColor: d.colors.$color_black
    };

    var Wa,
        Va = function Va(t) {
      var e = t.children;
      return Object(a.createElement)(Ha, t, e, Object(a.createElement)(Ua, {
        icon: "caret-right",
        color: d.colors.$color_black,
        size: "16px"
      }));
    };

    Va.propTypes = {
      backgroundColor: c.a.string,
      hoverColor: c.a.string,
      textColor: c.a.string,
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node])
    };
    var Ka,
        Ga = p.a.a(Wa || (Wa = r()(["\n\talign-items: center;\n\tjustify-content: center;\n\tvertical-align: middle;\n\tcolor: ", ";\n\twhite-space: nowrap;\n\tdisplay: inline-flex;\n\tborder-radius: 4px;\n\tbackground-color: ", ";\n\tpadding: 4px 8px 8px;\n\tbox-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);\n\tborder: none;\n\ttext-decoration: none;\n\tfont-size: inherit;\n\n\t&:hover,\n\t&:focus,\n\t&:active {\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t}\n\n\t&:active {\n\t\tbackground-color: ", ";\n\t\ttransform: translateY( 1px );\n\t\tbox-shadow: none;\n\t\tfilter: none;\n\t}\n"])), d.colors.$color_black, d.colors.$color_button_upsell, d.colors.$color_black, d.colors.$color_button_upsell_hover, d.colors.$color_button_hover_upsell),
        Ya = Ma(p.a.a(Ka || (Ka = r()(["\n\t\ttext-decoration: none;\n\t\tcolor: ", ";\n\t\tbackground: ", ";\n\t\tmin-width: 152px;\n\t\t", ";\n\t"])), function (t) {
      return t.textColor;
    }, function (t) {
      return t.backgroundColor;
    }, function (t) {
      return t.withTextShadow ? "text-shadow: 0 0 2px ".concat(d.colors.$color_black) : "";
    }));
    Ya.propTypes = {
      backgroundColor: c.a.string,
      textColor: c.a.string,
      withTextShadow: c.a.bool
    }, Ya.defaultProps = {
      backgroundColor: d.colors.$color_green_medium_light,
      textColor: d.colors.$color_white,
      withTextShadow: !0
    };

    var Za,
        Xa,
        Ja,
        Qa = function Qa(t) {
      return Object(a.createElement)("svg", K()({}, t, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 520 240"
      }), Object(a.createElement)("linearGradient", {
        id: "a",
        gradientUnits: "userSpaceOnUse",
        x1: "476.05",
        y1: "194.48",
        x2: "476.05",
        y2: "36.513"
      }, Object(a.createElement)("stop", {
        offset: "0",
        style: {
          stopColor: "#570732"
        }
      }), Object(a.createElement)("stop", {
        offset: ".038",
        style: {
          stopColor: "#610b39"
        }
      }), Object(a.createElement)("stop", {
        offset: ".155",
        style: {
          stopColor: "#79164b"
        }
      }), Object(a.createElement)("stop", {
        offset: ".287",
        style: {
          stopColor: "#8c1e59"
        }
      }), Object(a.createElement)("stop", {
        offset: ".44",
        style: {
          stopColor: "#9a2463"
        }
      }), Object(a.createElement)("stop", {
        offset: ".633",
        style: {
          stopColor: "#a22768"
        }
      }), Object(a.createElement)("stop", {
        offset: "1",
        style: {
          stopColor: "#a4286a"
        }
      })), Object(a.createElement)("path", {
        fill: "url(#a)",
        d: "M488.7 146.1v-56h20V65.9h-20V36.5h-30.9v29.3h-15.7v24.3h15.7v52.8c0 30 20.9 47.8 43 51.5l9.2-24.8c-12.9-1.6-21.2-11.2-21.3-23.5z"
      }), Object(a.createElement)("linearGradient", {
        id: "b",
        gradientUnits: "userSpaceOnUse",
        x1: "287.149",
        y1: "172.553",
        x2: "287.149",
        y2: "61.835"
      }, Object(a.createElement)("stop", {
        offset: "0",
        style: {
          stopColor: "#570732"
        }
      }), Object(a.createElement)("stop", {
        offset: ".038",
        style: {
          stopColor: "#610b39"
        }
      }), Object(a.createElement)("stop", {
        offset: ".155",
        style: {
          stopColor: "#79164b"
        }
      }), Object(a.createElement)("stop", {
        offset: ".287",
        style: {
          stopColor: "#8c1e59"
        }
      }), Object(a.createElement)("stop", {
        offset: ".44",
        style: {
          stopColor: "#9a2463"
        }
      }), Object(a.createElement)("stop", {
        offset: ".633",
        style: {
          stopColor: "#a22768"
        }
      }), Object(a.createElement)("stop", {
        offset: "1",
        style: {
          stopColor: "#a4286a"
        }
      })), Object(a.createElement)("path", {
        fill: "url(#b)",
        d: "M332.8 137.3V95.2c0-1.5-.1-3-.2-4.4-2.7-34-51-33.9-88.3-20.9L255 91.7c24.3-11.6 38.9-8.6 44-2.9l.4.4v.1c2.6 3.5 2 9 2 13.4-31.8 0-65.7 4.2-65.7 39.1 0 26.5 33.2 43.6 68 18.3l5.2 12.4h29.8c-2.8-14.5-5.9-27-5.9-35.2zm-31.2-.3c-24.5 27.4-46.9 1.6-23.9-9.6 6.8-2.3 15.9-2.4 23.9-2.4v12z"
      }), Object(a.createElement)("linearGradient", {
        id: "c",
        gradientUnits: "userSpaceOnUse",
        x1: "390.54",
        y1: "172.989",
        x2: "390.54",
        y2: "61.266"
      }, Object(a.createElement)("stop", {
        offset: "0",
        style: {
          stopColor: "#570732"
        }
      }), Object(a.createElement)("stop", {
        offset: ".038",
        style: {
          stopColor: "#610b39"
        }
      }), Object(a.createElement)("stop", {
        offset: ".155",
        style: {
          stopColor: "#79164b"
        }
      }), Object(a.createElement)("stop", {
        offset: ".287",
        style: {
          stopColor: "#8c1e59"
        }
      }), Object(a.createElement)("stop", {
        offset: ".44",
        style: {
          stopColor: "#9a2463"
        }
      }), Object(a.createElement)("stop", {
        offset: ".633",
        style: {
          stopColor: "#a22768"
        }
      }), Object(a.createElement)("stop", {
        offset: "1",
        style: {
          stopColor: "#a4286a"
        }
      })), Object(a.createElement)("path", {
        fill: "url(#c)",
        d: "M380.3 92.9c0-10.4 16.6-15.2 42.8-3.3l9.1-22C397 57 348.9 56 348.6 92.8c-.1 17.7 11.2 27.2 27.5 33.2 11.3 4.2 27.6 6.4 27.6 15.4-.1 11.8-25.3 13.6-48.4-2.3l-9.3 23.8c31.4 15.6 89.7 16.1 89.4-23.1-.4-38.5-55.1-31.9-55.1-46.9z"
      }), Object(a.createElement)("linearGradient", {
        id: "d",
        gradientUnits: "userSpaceOnUse",
        x1: "76.149",
        y1: "3.197",
        x2: "76.149",
        y2: "178.39"
      }, Object(a.createElement)("stop", {
        offset: "0",
        style: {
          stopColor: "#77b227"
        }
      }), Object(a.createElement)("stop", {
        offset: ".467",
        style: {
          stopColor: "#75b027"
        }
      }), Object(a.createElement)("stop", {
        offset: ".635",
        style: {
          stopColor: "#6eab27"
        }
      }), Object(a.createElement)("stop", {
        offset: ".755",
        style: {
          stopColor: "#63a027"
        }
      }), Object(a.createElement)("stop", {
        offset: ".852",
        style: {
          stopColor: "#529228"
        }
      }), Object(a.createElement)("stop", {
        offset: ".934",
        style: {
          stopColor: "#3c7f28"
        }
      }), Object(a.createElement)("stop", {
        offset: "1",
        style: {
          stopColor: "#246b29"
        }
      })), Object(a.createElement)("path", {
        fill: "url(#d)",
        d: "M108.2 9.2L63.4 133.6 41.9 66.4H10l35.7 91.8c3 7.8 3 16.5 0 24.3-4 10.2-10.6 19-26.8 21.2v27.2c31.5 0 48.6-19.4 63.8-61.9L142.3 9.2h-34.1z"
      }), Object(a.createElement)("linearGradient", {
        id: "e",
        gradientUnits: "userSpaceOnUse",
        x1: "175.228",
        y1: "172.923",
        x2: "175.228",
        y2: "62.17"
      }, Object(a.createElement)("stop", {
        offset: "0",
        style: {
          stopColor: "#570732"
        }
      }), Object(a.createElement)("stop", {
        offset: ".038",
        style: {
          stopColor: "#610b39"
        }
      }), Object(a.createElement)("stop", {
        offset: ".155",
        style: {
          stopColor: "#79164b"
        }
      }), Object(a.createElement)("stop", {
        offset: ".287",
        style: {
          stopColor: "#8c1e59"
        }
      }), Object(a.createElement)("stop", {
        offset: ".44",
        style: {
          stopColor: "#9a2463"
        }
      }), Object(a.createElement)("stop", {
        offset: ".633",
        style: {
          stopColor: "#a22768"
        }
      }), Object(a.createElement)("stop", {
        offset: "1",
        style: {
          stopColor: "#a4286a"
        }
      })), Object(a.createElement)("path", {
        fill: "url(#e)",
        d: "M175.2 62.2c-38.6 0-54 27.3-54 56.2 0 30 15.1 54.6 54 54.6 38.7 0 54.1-27.6 54-54.6-.1-33-16.8-56.2-54-56.2zm0 87.1c-15.7 0-23.4-11.7-23.4-30.9s8.3-32.9 23.4-32.9c15 0 23.2 13.7 23.2 32.9s-7.5 30.9-23.2 30.9z"
      }));
    },
        ti = n(306),
        ei = n.n(ti);

    var ni = p.a.h1(Za || (Za = r()(["\n\tfloat: left;\n\tmargin: -4px 0 2rem;\n\tfont-size: 1rem;\n"]))),
        oi = p.a.button(Xa || (Xa = r()(["\n\tfloat: right;\n\twidth: 44px;\n\theight: 44px;\n\tbackground: transparent;\n\tborder: 0;\n\tmargin: -16px -16px 0 0;\n\tpadding: 0;\n\tcursor: pointer;\n"]))),
        ri = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r(t) {
        return Bt()(this, r), o.call(this, t);
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          return Object(a.createElement)(ei.a, {
            isOpen: this.props.isOpen,
            onRequestClose: this.props.onClose,
            role: "dialog",
            contentLabel: this.props.modalAriaLabel,
            overlayClassName: "yoast-modal__overlay ".concat(this.props.className),
            className: "yoast-modal__content ".concat(this.props.className),
            appElement: this.props.appElement,
            bodyOpenClassName: "yoast-modal_is-open"
          }, Object(a.createElement)("div", null, this.props.heading && Object(a.createElement)(ni, {
            className: "yoast-modal__title"
          }, this.props.heading), this.props.closeIconButton && Object(a.createElement)(oi, {
            type: "button",
            onClick: this.props.onClose,
            className: "yoast-modal__button-close-icon ".concat(this.props.closeIconButtonClassName),
            "aria-label": this.props.closeIconButton
          }, Object(a.createElement)(_, {
            icon: "times",
            color: d.colors.$color_grey_text
          }))), Object(a.createElement)("div", {
            className: "yoast-modal__inside"
          }, this.props.children), this.props.closeButton && Object(a.createElement)("div", {
            className: "yoast-modal__actions"
          }, Object(a.createElement)("button", {
            type: "button",
            onClick: this.props.onClose,
            className: "yoast-modal__button-close ".concat(this.props.closeButtonClassName)
          }, this.props.closeButton)));
        }
      }]), r;
    }(s.a.Component);

    ri.propTypes = {
      children: c.a.any,
      className: c.a.string,
      isOpen: c.a.bool,
      onClose: c.a.func.isRequired,
      modalAriaLabel: c.a.string.isRequired,
      appElement: c.a.object.isRequired,
      heading: c.a.string,
      closeIconButton: c.a.string,
      closeIconButtonClassName: c.a.string,
      closeButton: c.a.string,
      closeButtonClassName: c.a.string
    }, ri.defaultProps = {
      children: null,
      className: "",
      heading: "",
      closeIconButton: "",
      closeIconButtonClassName: "",
      closeButton: "",
      closeButtonClassName: "",
      isOpen: !1
    };

    var ai = p()(ri)(Ja || (Ja = r()(["\n\t&.yoast-modal__overlay {\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tbackground-color: rgba(0, 0, 0, 0.6);\n\t\ttransition: background 100ms ease-out;\n\t\tz-index: 999999;\n\t}\n\n\t&.yoast-modal__content {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\tright: auto;\n\t\tbottom: auto;\n\t\twidth: auto;\n\t\tmax-width: 90%;\n\t\tmax-height: 90%;\n\t\tborder: 0;\n\t\tborder-radius: 0;\n\t\tmargin-right: -50%;\n\t\tpadding: 24px;\n\t\ttransform: translate(-50%, -50%);\n\t\tbackground-color: #fff;\n\t\toutline: none;\n\n\t\t@media screen and ( max-width: 500px ) {\n\t\t\toverflow-y: auto;\n\t\t}\n\n\t\t@media screen and ( max-height: 640px ) {\n\t\t\toverflow-y: auto;\n\t\t}\n\t}\n\n\t.yoast-modal__inside {\n\t\tclear: both;\n\t}\n\n\t.yoast-modal__actions {\n\t\ttext-align: right;\n\t}\n\n\t.yoast-modal__actions button {\n\t\tmargin: 24px 0 0 8px;\n\t}\n"]))),
        ii = function ii(t) {
      return Object(a.createElement)("svg", K()({}, t, {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 500 488.22"
      }), Object(a.createElement)("path", {
        d: "M436.82 4.06A90 90 0 0 0 410 0H90A90 90 0 0 0 0 90v270a90 90 0 0 0 90 90h410V90a90 90 0 0 0-63.18-85.94z",
        fill: "#a4286a"
      }), Object(a.createElement)("path", {
        d: "M436.82 4.06L184.15 450H500V90a90 90 0 0 0-63.18-85.94z",
        fill: "#6c2548"
      }), Object(a.createElement)("path", {
        d: "M74.4 339.22v34.93c21.63-.85 38.51-8 52.84-22.46 14.76-14.83 27.45-38 39.93-72.85l92.53-248H215l-74.6 207.07-37.09-116.15h-41l54.42 139.79a57.49 57.49 0 0 1 0 41.84c-5.52 14.2-15.35 30.88-42.33 35.83z",
        fill: "#fff"
      }), Object(a.createElement)("circle", {
        cx: "368.33",
        cy: "124.68",
        r: "97.34",
        transform: "rotate(-45 368.335 124.68)",
        fill: "#9fda4f"
      }), Object(a.createElement)("path", {
        d: "M416.2 39.93l-95.74 169.51A97.34 97.34 0 1 0 416.2 39.93z",
        fill: "#77b227"
      }), Object(a.createElement)("path", {
        d: "M294.78 254.75l-.15-.08-.13-.07a63.6 63.6 0 0 0-62.56 110.76h.13a63.6 63.6 0 0 0 62.71-110.67z",
        fill: "#fec228"
      }), Object(a.createElement)("path", {
        d: "M294.5 254.59l-62.56 110.76a63.6 63.6 0 1 0 62.56-110.76z",
        fill: "#f49a00"
      }), Object(a.createElement)("path", {
        d: "M222.31 450.07A38.16 38.16 0 0 0 203 416.83a38.18 38.18 0 1 0 19.41 33.27z",
        fill: "#ff4e47"
      }), Object(a.createElement)("path", {
        d: "M202.9 416.8l-37.54 66.48a38.17 38.17 0 0 0 37.54-66.48z",
        fill: "#ed261f"
      }));
    };

    function si(t) {
      return t.type && "Tab" === t.type.tabsRole;
    }

    function li(t) {
      return t.type && "TabPanel" === t.type.tabsRole;
    }

    function ci(t) {
      return t.type && "TabList" === t.type.tabsRole;
    }

    function ui(t, e, n) {
      return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = n, t;
    }

    function pi(t, e) {
      return i.Children.map(t, function (t) {
        return null === t ? null : function (t) {
          return si(t) || ci(t) || li(t);
        }(t) ? e(t) : t.props && t.props.children && "object" == _typeof(t.props.children) ? Object(i.cloneElement)(t, function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
                o = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            }))), o.forEach(function (e) {
              ui(t, e, n[e]);
            });
          }

          return t;
        }({}, t.props, {
          children: pi(t.props.children, e)
        })) : t;
      });
    }

    function di(t, e) {
      return i.Children.forEach(t, function (t) {
        null !== t && (si(t) || li(t) ? e(t) : t.props && t.props.children && "object" == _typeof(t.props.children) && (ci(t) && e(t), di(t.props.children, e)));
      });
    }

    var fi,
        hi = n(55),
        bi = n.n(hi),
        mi = 0;

    function gi() {
      return "react-tabs-" + mi++;
    }

    function yi(t) {
      var e = 0;
      return di(t, function (t) {
        si(t) && e++;
      }), e;
    }

    function vi() {
      return (vi = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    function xi(t) {
      return t && "getAttribute" in t;
    }

    function Oi(t) {
      return xi(t) && "tab" === t.getAttribute("role");
    }

    function Ci(t) {
      return xi(t) && "true" === t.getAttribute("aria-disabled");
    }

    try {
      fi = !("undefined" == typeof window || !window.document || !window.document.activeElement);
    } catch (t) {
      fi = !1;
    }

    var ji = function (t) {
      var e, n;

      function o() {
        for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++) {
          o[r] = arguments[r];
        }

        return (e = t.call.apply(t, [this].concat(o)) || this).tabNodes = [], e.handleKeyDown = function (t) {
          if (e.isTabFromContainer(t.target)) {
            var n = e.props.selectedIndex,
                o = !1,
                r = !1;
            32 !== t.keyCode && 13 !== t.keyCode || (o = !0, r = !1, e.handleClick(t)), 37 === t.keyCode || 38 === t.keyCode ? (n = e.getPrevTab(n), o = !0, r = !0) : 39 === t.keyCode || 40 === t.keyCode ? (n = e.getNextTab(n), o = !0, r = !0) : 35 === t.keyCode ? (n = e.getLastTab(), o = !0, r = !0) : 36 === t.keyCode && (n = e.getFirstTab(), o = !0, r = !0), o && t.preventDefault(), r && e.setSelected(n, t);
          }
        }, e.handleClick = function (t) {
          var n = t.target;

          do {
            if (e.isTabFromContainer(n)) {
              if (Ci(n)) return;
              var o = [].slice.call(n.parentNode.children).filter(Oi).indexOf(n);
              return void e.setSelected(o, t);
            }
          } while (null != (n = n.parentNode));
        }, e;
      }

      n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
      var r = o.prototype;
      return r.setSelected = function (t, e) {
        if (!(t < 0 || t >= this.getTabsCount())) {
          var n = this.props;
          (0, n.onSelect)(t, n.selectedIndex, e);
        }
      }, r.getNextTab = function (t) {
        for (var e = this.getTabsCount(), n = t + 1; n < e; n++) {
          if (!Ci(this.getTab(n))) return n;
        }

        for (var o = 0; o < t; o++) {
          if (!Ci(this.getTab(o))) return o;
        }

        return t;
      }, r.getPrevTab = function (t) {
        for (var e = t; e--;) {
          if (!Ci(this.getTab(e))) return e;
        }

        for (e = this.getTabsCount(); e-- > t;) {
          if (!Ci(this.getTab(e))) return e;
        }

        return t;
      }, r.getFirstTab = function () {
        for (var t = this.getTabsCount(), e = 0; e < t; e++) {
          if (!Ci(this.getTab(e))) return e;
        }

        return null;
      }, r.getLastTab = function () {
        for (var t = this.getTabsCount(); t--;) {
          if (!Ci(this.getTab(t))) return t;
        }

        return null;
      }, r.getTabsCount = function () {
        return yi(this.props.children);
      }, r.getPanelsCount = function () {
        return t = this.props.children, e = 0, di(t, function (t) {
          li(t) && e++;
        }), e;
        var t, e;
      }, r.getTab = function (t) {
        return this.tabNodes["tabs-" + t];
      }, r.getChildren = function () {
        var t = this,
            e = 0,
            n = this.props,
            o = n.children,
            r = n.disabledTabClassName,
            a = n.focus,
            l = n.forceRenderTabPanel,
            c = n.selectedIndex,
            u = n.selectedTabClassName,
            p = n.selectedTabPanelClassName;
        this.tabIds = this.tabIds || [], this.panelIds = this.panelIds || [];

        for (var d = this.tabIds.length - this.getTabsCount(); d++ < 0;) {
          this.tabIds.push(gi()), this.panelIds.push(gi());
        }

        return pi(o, function (n) {
          var o = n;

          if (ci(n)) {
            var d = 0,
                f = !1;
            fi && (f = s.a.Children.toArray(n.props.children).filter(si).some(function (e, n) {
              return document.activeElement === t.getTab(n);
            })), o = Object(i.cloneElement)(n, {
              children: pi(n.props.children, function (e) {
                var n = "tabs-" + d,
                    o = c === d,
                    s = {
                  tabRef: function tabRef(e) {
                    t.tabNodes[n] = e;
                  },
                  id: t.tabIds[d],
                  panelId: t.panelIds[d],
                  selected: o,
                  focus: o && (a || f)
                };
                return u && (s.selectedClassName = u), r && (s.disabledClassName = r), d++, Object(i.cloneElement)(e, s);
              })
            });
          } else if (li(n)) {
            var h = {
              id: t.panelIds[e],
              tabId: t.tabIds[e],
              selected: c === e
            };
            l && (h.forceRender = l), p && (h.selectedClassName = p), e++, o = Object(i.cloneElement)(n, h);
          }

          return o;
        });
      }, r.isTabFromContainer = function (t) {
        if (!Oi(t)) return !1;
        var e = t.parentElement;

        do {
          if (e === this.node) return !0;
          if (e.getAttribute("data-tabs")) break;
          e = e.parentElement;
        } while (e);

        return !1;
      }, r.render = function () {
        var t = this,
            e = this.props,
            n = (e.children, e.className),
            o = (e.disabledTabClassName, e.domRef),
            r = (e.focus, e.forceRenderTabPanel, e.onSelect, e.selectedIndex, e.selectedTabClassName, e.selectedTabPanelClassName, function (t, e) {
          if (null == t) return {};
          var n,
              o,
              r = {},
              a = Object.keys(t);

          for (o = 0; o < a.length; o++) {
            n = a[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
          }

          return r;
        }(e, ["children", "className", "disabledTabClassName", "domRef", "focus", "forceRenderTabPanel", "onSelect", "selectedIndex", "selectedTabClassName", "selectedTabPanelClassName"]));
        return s.a.createElement("div", vi({}, r, {
          className: bi()(n),
          onClick: this.handleClick,
          onKeyDown: this.handleKeyDown,
          ref: function ref(e) {
            t.node = e, o && o(e);
          },
          "data-tabs": !0
        }), this.getChildren());
      }, o;
    }(i.Component);

    ji.defaultProps = {
      className: "react-tabs",
      focus: !1
    }, ji.propTypes = {};

    var _i = function (t) {
      var e, n;

      function o(e) {
        var n;
        return (n = t.call(this, e) || this).handleSelected = function (t, e, r) {
          var a = n.props.onSelect;

          if ("function" != typeof a || !1 !== a(t, e, r)) {
            var i = {
              focus: "keydown" === r.type
            };
            o.inUncontrolledMode(n.props) && (i.selectedIndex = t), n.setState(i);
          }
        }, n.state = o.copyPropsToState(n.props, {}, e.defaultFocus), n;
      }

      n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
      var r = o.prototype;
      return r.componentWillReceiveProps = function (t) {
        this.setState(function (e) {
          return o.copyPropsToState(t, e);
        });
      }, o.inUncontrolledMode = function (t) {
        return null === t.selectedIndex;
      }, o.copyPropsToState = function (t, e, n) {
        void 0 === n && (n = !1);
        var r = {
          focus: n
        };

        if (o.inUncontrolledMode(t)) {
          var a,
              i = yi(t.children) - 1;
          a = null != e.selectedIndex ? Math.min(e.selectedIndex, i) : t.defaultIndex || 0, r.selectedIndex = a;
        }

        return r;
      }, r.render = function () {
        var t = this.props,
            e = t.children,
            n = (t.defaultIndex, t.defaultFocus, function (t, e) {
          if (null == t) return {};
          var n,
              o,
              r = {},
              a = Object.keys(t);

          for (o = 0; o < a.length; o++) {
            n = a[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
          }

          return r;
        }(t, ["children", "defaultIndex", "defaultFocus"])),
            o = this.state,
            r = o.focus,
            a = o.selectedIndex;
        return n.focus = r, n.onSelect = this.handleSelected, null != a && (n.selectedIndex = a), s.a.createElement(ji, n, e);
      }, o;
    }(i.Component);

    function wi() {
      return (wi = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    _i.defaultProps = {
      defaultFocus: !1,
      forceRenderTabPanel: !1,
      selectedIndex: null,
      defaultIndex: null
    }, _i.propTypes = {}, _i.tabsRole = "Tabs";

    var ki = function (t) {
      var e, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      return n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, o.prototype.render = function () {
        var t = this.props,
            e = t.children,
            n = t.className,
            o = function (t, e) {
          if (null == t) return {};
          var n,
              o,
              r = {},
              a = Object.keys(t);

          for (o = 0; o < a.length; o++) {
            n = a[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
          }

          return r;
        }(t, ["children", "className"]);

        return s.a.createElement("ul", wi({}, o, {
          className: bi()(n),
          role: "tablist"
        }), e);
      }, o;
    }(i.Component);

    function Ei() {
      return (Ei = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    ki.defaultProps = {
      className: "react-tabs__tab-list"
    }, ki.propTypes = {}, ki.tabsRole = "TabList";

    var Si = function (t) {
      var e, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n;
      var r = o.prototype;
      return r.componentDidMount = function () {
        this.checkFocus();
      }, r.componentDidUpdate = function () {
        this.checkFocus();
      }, r.checkFocus = function () {
        var t = this.props,
            e = t.selected,
            n = t.focus;
        e && n && this.node.focus();
      }, r.render = function () {
        var t,
            e = this,
            n = this.props,
            o = n.children,
            r = n.className,
            a = n.disabled,
            i = n.disabledClassName,
            l = (n.focus, n.id),
            c = n.panelId,
            u = n.selected,
            p = n.selectedClassName,
            d = n.tabIndex,
            f = n.tabRef,
            h = function (t, e) {
          if (null == t) return {};
          var n,
              o,
              r = {},
              a = Object.keys(t);

          for (o = 0; o < a.length; o++) {
            n = a[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
          }

          return r;
        }(n, ["children", "className", "disabled", "disabledClassName", "focus", "id", "panelId", "selected", "selectedClassName", "tabIndex", "tabRef"]);

        return s.a.createElement("li", Ei({}, h, {
          className: bi()(r, (t = {}, t[p] = u, t[i] = a, t)),
          ref: function ref(t) {
            e.node = t, f && f(t);
          },
          role: "tab",
          id: l,
          "aria-selected": u ? "true" : "false",
          "aria-disabled": a ? "true" : "false",
          "aria-controls": c,
          tabIndex: d || (u ? "0" : null)
        }), o);
      }, o;
    }(i.Component);

    function Ri() {
      return (Ri = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var o in n) {
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
        }

        return t;
      }).apply(this, arguments);
    }

    Si.defaultProps = {
      className: "react-tabs__tab",
      disabledClassName: "react-tabs__tab--disabled",
      focus: !1,
      id: null,
      panelId: null,
      selected: !1,
      selectedClassName: "react-tabs__tab--selected"
    }, Si.propTypes = {}, Si.tabsRole = "Tab";

    var Ti,
        qi = function (t) {
      var e, n;

      function o() {
        return t.apply(this, arguments) || this;
      }

      return n = t, (e = o).prototype = Object.create(n.prototype), e.prototype.constructor = e, e.__proto__ = n, o.prototype.render = function () {
        var t,
            e = this.props,
            n = e.children,
            o = e.className,
            r = e.forceRender,
            a = e.id,
            i = e.selected,
            l = e.selectedClassName,
            c = e.tabId,
            u = function (t, e) {
          if (null == t) return {};
          var n,
              o,
              r = {},
              a = Object.keys(t);

          for (o = 0; o < a.length; o++) {
            n = a[o], e.indexOf(n) >= 0 || (r[n] = t[n]);
          }

          return r;
        }(e, ["children", "className", "forceRender", "id", "selected", "selectedClassName", "tabId"]);

        return s.a.createElement("div", Ri({}, u, {
          className: bi()(o, (t = {}, t[l] = i, t)),
          role: "tabpanel",
          id: a,
          "aria-labelledby": c
        }), r || i ? n : null);
      }, o;
    }(i.Component);

    qi.defaultProps = {
      className: "react-tabs__tab-panel",
      forceRender: !1,
      selectedClassName: "react-tabs__tab-panel--selected"
    }, qi.propTypes = {}, qi.tabsRole = "TabPanel";
    var Pi = p.a.div(Ti || (Ti = r()(["\n\tfont-size: 1em;\n\n\t.react-tabs__tab-list {\n\t\tdisplay: flex;\n\t\tflex-wrap: wrap;\n\t\tjustify-content: center;\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tborder-bottom: 4px solid ", ";\n\t}\n\n\t.react-tabs__tab {\n\t\tflex: 0 1 ", ';\n\t\ttext-align: center;\n\t\tmargin: 0 16px;\n\t\tpadding: 16px 0;\n\t\tcursor: pointer;\n\t\tfont-family: "Open Sans", sans-serif;\n\t\tfont-size: ', ";\n\t\tline-height: 1.33333333;\n\t\tfont-weight: ", ";\n\t\tcolor: ", ";\n\t\ttext-transform: ", ";\n\n\t\t&.react-tabs__tab--selected {\n\t\t\tbox-shadow: 0 4px 0 0 ", ";\n\t\t}\n\t}\n\n\t.react-tabs__tab-panel {\n\t\tdisplay: none;\n\t\tpadding: 24px 40px;\n\n\t\t@media screen and ( max-width: ", " ) {\n\t\t\tpadding: 16px 16px;\n\t\t}\n\n\t\t:focus {\n\t\t\toutline: none;\n\t\t}\n\n\t\t&.react-tabs__tab-panel--selected {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n"])), d.colors.$color_grey_light, function (t) {
      return t.tabsBaseWidth;
    }, function (t) {
      return t.tabsFontSize;
    }, function (t) {
      return t.tabsFontWeight;
    }, function (t) {
      return t.tabsTextColor;
    }, function (t) {
      return t.tabsTextTransform;
    }, d.colors.$color_pink_dark, d.breakpoints.mobile);
    Pi.propTypes = {
      tabsTextColor: c.a.string,
      tabsTextTransform: c.a.string,
      tabsFontSize: c.a.string,
      tabsFontWeight: c.a.string,
      tabsBaseWidth: c.a.string
    };

    var Ni = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "getTabs",
        value: function value() {
          return this.props.items.map(function (t) {
            return Object(a.createElement)(Si, {
              key: t.id
            }, t.label);
          });
        }
      }, {
        key: "getTabPanels",
        value: function value() {
          return this.props.items.map(function (t) {
            return Object(a.createElement)(qi, {
              key: t.id,
              tabIndex: "0"
            }, t.content);
          });
        }
      }, {
        key: "render",
        value: function value() {
          return Object(a.createElement)(Pi, {
            tabsTextColor: this.props.tabsTextColor,
            tabsTextTransform: this.props.tabsTextTransform,
            tabsFontSize: this.props.tabsFontSize,
            tabsFontWeight: this.props.tabsFontWeight,
            tabsBaseWidth: this.props.tabsBaseWidth
          }, Object(a.createElement)(_i, {
            onSelect: this.props.onTabSelect
          }, Object(a.createElement)(ki, null, this.getTabs()), this.getTabPanels()));
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          this.props.onTabsMounted();
        }
      }]), r;
    }(s.a.Component);

    Ni.propTypes = {
      items: c.a.arrayOf(c.a.shape({
        id: c.a.string.isRequired,
        label: c.a.string.isRequired,
        content: c.a.object.isRequired
      })),
      tabsTextColor: c.a.string,
      tabsTextTransform: c.a.string,
      tabsFontSize: c.a.string,
      tabsFontWeight: c.a.string,
      tabsBaseWidth: c.a.string,
      onTabSelect: c.a.func,
      onTabsMounted: c.a.func
    }, Ni.defaultProps = {
      items: [],
      tabsTextColor: d.colors.$color_grey_dark,
      tabsTextTransform: "none",
      tabsFontSize: "1.5em",
      tabsFontWeight: "200",
      tabsBaseWidth: "200px",
      onTabSelect: function onTabSelect() {},
      onTabsMounted: function onTabsMounted() {}
    };
    var Bi,
        Ii,
        Mi,
        zi = Ni,
        Di = n(122),
        Li = n.n(Di);

    var Ai = p.a.div(Bi || (Bi = r()(["\n\tdisplay: flex;\n\tpadding: 16px;\n\tbackground: ", ";\n\tcolor: ", ";\n"])), d.colors.$color_alert_warning_background, d.colors.$color_alert_warning_text),
        $i = p()(_)(Ii || (Ii = r()(["\n\tmargin-top: 2px;\n"]))),
        Fi = p.a.div(Mi || (Mi = r()(["\n\tmargin: ", ";\n"])), Object(f.getDirectionalStyle)("0 0 0 8px", "0 8px 0 0")),
        Ui = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        return Bt()(this, r), o.apply(this, arguments);
      }

      return Mt()(r, [{
        key: "render",
        value: function value() {
          var t = this.props.message;
          return Li()(t) ? null : Object(a.createElement)(Ai, null, Object(a.createElement)($i, {
            icon: "exclamation-triangle",
            size: "16px"
          }), Object(a.createElement)(Fi, null, t));
        }
      }]), r;
    }(s.a.Component);

    Ui.propTypes = {
      message: c.a.array
    }, Ui.defaultProps = {
      message: []
    };
    var Hi,
        Wi = Ui,
        Vi = p.a.div(Hi || (Hi = r()(["\n\tposition: relative;\n\tpadding-bottom: 56.25%; /* 16:9 */\n\theight: 0;\n\toverflow: hidden;\n\n\tiframe {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n"])));

    function Ki(t) {
      return Object(a.createElement)(Vi, null, Object(a.createElement)(Io, t));
    }

    Ki.propTypes = {
      width: c.a.number,
      height: c.a.number,
      src: c.a.string.isRequired,
      title: c.a.string.isRequired,
      frameBorder: c.a.number,
      allowFullScreen: c.a.bool
    }, Ki.defaultProps = {
      width: 560,
      height: 315,
      frameBorder: 0,
      allowFullScreen: !0
    };

    var Gi = function Gi(t) {
      console.warn("The WordList component has been deprecated and will be removed in a future release.");
      var e = t.title,
          n = t.classNamePrefix,
          o = t.words,
          r = t.header,
          i = t.footer,
          s = Object(a.createElement)("ol", {
        className: n + "__list"
      }, o.map(function (t) {
        return Object(a.createElement)("li", {
          key: t,
          className: n + "__item"
        }, t);
      }));
      return Object(a.createElement)("div", {
        className: n
      }, Object(a.createElement)("p", null, Object(a.createElement)("strong", null, e)), r, s, i);
    };

    Gi.propTypes = {
      words: c.a.array.isRequired,
      title: c.a.string.isRequired,
      header: c.a.string,
      footer: c.a.string,
      classNamePrefix: c.a.string
    }, Gi.defaultProps = {
      classNamePrefix: "",
      header: "",
      footer: ""
    };
    var Yi,
        Zi = Gi;

    function Xi(t) {
      var e = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }();

      return function () {
        var n,
            o = Ft()(t);

        if (e) {
          var r = Ft()(this).constructor;
          n = Reflect.construct(o, arguments, r);
        } else n = o.apply(this, arguments);

        return At()(this, n);
      };
    }

    var Ji = p.a.ul(Yi || (Yi = r()(["\n\tmargin: 0;\n \tpadding: 0;\n \tlist-style: none;\n \tposition: relative;\n \twidth: 100%;\n\n \tli:first-child {\n\t\t& > span::before {\n\t\t\tleft: auto;\n\t\t}\n\t}\n"])));
    Ji.propTypes = {
      children: c.a.any
    };

    var Qi,
        ts,
        es = function (t) {
      Dt()(n, t);
      var e = Xi(n);

      function n(t) {
        return Bt()(this, n), e.call(this, t);
      }

      return Mt()(n, [{
        key: "getChildren",
        value: function value() {
          return 1 === this.props.children ? [this.props.children] : this.props.children;
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.getChildren();
          return Object(a.createElement)(Ji, {
            role: "list"
          }, t);
        }
      }]), n;
    }(s.a.Component),
        ns = function (t) {
      Dt()(n, t);
      var e = Xi(n);

      function n(t) {
        var o;
        return Bt()(this, n), (o = e.call(this, t)).zebraProps = Object.assign({}, t), o;
      }

      return Mt()(n, [{
        key: "zebrafyChildren",
        value: function value() {
          var t = this.props.children;
          this.props.children.map || (t = [t]), this.zebraProps.children = t.map(function (t, e) {
            return s.a.cloneElement(t, {
              background: e % 2 == 1 ? d.colors.$color_white : d.colors.$color_background_light,
              key: e
            });
          });
        }
      }, {
        key: "render",
        value: function value() {
          return this.zebrafyChildren(), Object(a.createElement)(Ji, K()({
            role: "list"
          }, this.zebraProps));
        }
      }]), n;
    }(es);

    es.propTypes = {
      children: c.a.oneOfType([c.a.arrayOf(c.a.node), c.a.node])
    };
    var os = p.a.li(Qi || (Qi = r()(["\n\tbackground: ", ";\n\tdisplay: flex;\n\tmin-height: ", ";\n\talign-items: center;\n\tjustify-content: space-between;\n"])), function (t) {
      return t.background;
    }, function (t) {
      return t.rowHeight;
    });
    os.propTypes = {
      background: c.a.string,
      hasHeaderLabels: c.a.bool,
      rowHeight: c.a.string
    }, os.defaultProps = {
      background: d.colors.$color_white,
      hasHeaderLabels: !0
    }, p()(os)(ts || (ts = r()(["\n\t@media screen and ( max-width: 800px ) {\n\t\tflex-wrap: wrap;\n\t\talign-items: flex-start;\n\n\t\t&:first-child {\n\t\t\tmargin-top: ", ";\n\t\t}\n\n\t\t// Use the column headers (if any) as labels.\n\t\t& > span::before {\n\t\t\tposition: static;\n\t\t\tdisplay: inline-block;\n\t\t\tpadding-right: 0.5em;\n\t\t\tfont-size: inherit;\n\t\t}\n\t\t& > span {\n\t\t\tpadding-left: 0;\n\t\t}\n\t}\n"])), function (t) {
      return t.hasHeaderLabels ? "24px" : "0";
    });

    var rs = function (t) {
      Dt()(r, t);
      var e,
          n,
          o = (e = r, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }(), function () {
        var t,
            o = Ft()(e);

        if (n) {
          var r = Ft()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return At()(this, t);
      });

      function r() {
        var t;
        return Bt()(this, r), (t = o.call(this)).state = {
          focused: !1
        }, t;
      }

      return Mt()(r, [{
        key: "focus",
        value: function value() {
          this.setState({
            focused: !0
          });
        }
      }, {
        key: "blur",
        value: function value() {
          this.setState({
            focused: !1
          });
        }
      }, {
        key: "getStyles",
        value: function value() {
          return !0 === this.state.focused ? ze.ScreenReaderText.focused : ze.ScreenReaderText["default"];
        }
      }, {
        key: "render",
        value: function value() {
          return Object(a.createElement)("a", {
            href: "#" + this.props.anchor,
            className: "screen-reader-shortcut",
            style: this.getStyles(),
            onFocus: this.focus.bind(this),
            onBlur: this.blur.bind(this)
          }, this.props.children);
        }
      }]), r;
    }(s.a.Component);

    rs.propTypes = {
      anchor: c.a.string.isRequired,
      children: c.a.string.isRequired
    };
    var as = rs;
  },
  74: function _(t, e, n) {
    var o = n(51);
    t.exports = function (t) {
      if (Array.isArray(t)) return o(t);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  75: function _(t, e) {
    t.exports = function (t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  76: function _(t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  8: function _(t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  9: function _(t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    t.exports = function (t, e, o) {
      return e && n(t.prototype, e), o && n(t, o), t;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  }
});