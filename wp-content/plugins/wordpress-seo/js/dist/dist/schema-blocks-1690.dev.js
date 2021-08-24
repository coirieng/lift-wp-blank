"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
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
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(o, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 261);
}({
  2: function _(e, t) {
    e.exports = window.lodash;
  },
  201: function _(e, t) {
    e.exports = window.yoast.schemaBlocks;
  },
  261: function _(e, t, n) {
    "use strict";

    n.r(t);
    var o = n(201),
        r = n.n(o),
        u = n(61);
    Object(u.setTextdomainL10n)("yoast-schema-blocks"), r()(o.LogLevel.ERROR);
  },
  3: function _(e, t) {
    e.exports = window.wp.i18n;
  },
  61: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "setTextdomainL10n", function () {
      return u;
    }), n.d(t, "setYoastComponentsL10n", function () {
      return c;
    }), n.d(t, "setWordPressSeoL10n", function () {
      return i;
    });
    var o = n(3),
        r = n(2);

    function u(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wpseoYoastJSL10n",
          n = Object(r.get)(window, [t, e, "locale_data", e], !1);
      !1 === n ? Object(o.setLocaleData)({
        "": {}
      }, e) : Object(o.setLocaleData)(n, e);
    }

    function c() {
      u("yoast-components");
    }

    function i() {
      u("wordpress-seo");
    }
  }
});