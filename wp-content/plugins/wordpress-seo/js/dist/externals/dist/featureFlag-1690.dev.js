"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.featureFlag = function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var u = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(u.exports, u, u.exports, n), u.l = !0, u.exports;
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
    }), 2 & t && "string" != typeof e) for (var u in e) {
      n.d(r, u, function (t) {
        return e[t];
      }.bind(null, u));
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
  }, n.p = "", n(n.s = 474);
}({
  474: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "isFeatureEnabled", function () {
      return r;
    }), n.d(t, "enableFeatures", function () {
      return u;
    }), n.d(t, "enabledFeatures", function () {
      return o;
    });

    var r = function r(e) {
      return !!self.wpseoFeatureFlags && self.wpseoFeatureFlags.includes(e);
    },
        u = function u(e) {
      self.wpseoFeatureFlags || (self.wpseoFeatureFlags = []), e.forEach(function (e) {
        self.wpseoFeatureFlags.includes(e) || self.wpseoFeatureFlags.push(e);
      });
    },
        o = function o() {
      return self.wpseoFeatureFlags || [];
    };
  }
});