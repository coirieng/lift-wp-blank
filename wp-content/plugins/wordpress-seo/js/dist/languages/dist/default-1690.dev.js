"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
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

  return o.m = e, o.c = t, o.d = function (e, t, r) {
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
  }, o.p = "", o(o.s = 50);
}({
  0: function _(e, t) {
    e.exports = window.yoast.analysis;
  },
  1: function _(e, t) {
    function o(t) {
      return e.exports = o = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, o(t);
    }

    e.exports = o, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  3: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  4: function _(e, t, o) {
    var r = o(8);
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
  5: function _(e, t, o) {
    var r = o(6)["default"],
        n = o(9);
    e.exports = function (e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? n(e) : t;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  50: function _(e, t, o) {
    "use strict";

    o.r(t), o.d(t, "default", function () {
      return x;
    });
    var r = o(3),
        n = o.n(r),
        u = o(4),
        s = o.n(u),
        c = o(5),
        f = o.n(c),
        i = o(1),
        l = o.n(i),
        a = o(0),
        p = a.languageProcessing.baseStemmer;

    function d() {
      return p;
    }

    var x = function (e) {
      s()(u, e);
      var t,
          o,
          r = (t = u, o = function () {
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
            r = l()(t);

        if (o) {
          var n = l()(this).constructor;
          e = Reflect.construct(r, arguments, n);
        } else e = r.apply(this, arguments);

        return f()(this, e);
      });

      function u(e) {
        var t;
        return n()(this, u), delete (t = r.call(this, e)).defaultResearches.getFleschReadingScore, delete t.defaultResearches.getPassiveVoiceResult, delete t.defaultResearches.getSentenceBeginnings, delete t.defaultResearches.findTransitionWords, delete t.defaultResearches.functionWordsInKeyphrase, Object.assign(t.config, {
          functionWords: []
        }), Object.assign(t.helpers, {
          getStemmer: d
        }), t;
      }

      return u;
    }(a.languageProcessing.AbstractResearcher);
  },
  6: function _(e, t) {
    function o(t) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = o = function o(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = o = function o(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), o(t);
    }

    e.exports = o, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  8: function _(e, t) {
    function o(t, r) {
      return e.exports = o = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, o(t, r);
    }

    e.exports = o, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  9: function _(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  }
});