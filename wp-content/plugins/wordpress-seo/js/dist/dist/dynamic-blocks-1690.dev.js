"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 334);
}({
  0: function _(e, t) {
    e.exports = window.wp.element;
  },
  117: function _(e, t) {
    e.exports = window.wp.blocks;
  },
  253: function _(e, t) {
    e.exports = window.wp.serverSideRender;
  },
  3: function _(e, t) {
    e.exports = window.wp.i18n;
  },
  334: function _(e, t, r) {
    "use strict";

    r.r(t);
    var n = r(0),
        o = r(117),
        s = r(3),
        i = r(253),
        u = r.n(i);
    Object(o.registerBlockType)("yoast-seo/breadcrumbs", {
      title: Object(s.__)("Yoast Breadcrumbs", "wordpress-seo"),
      icon: "admin-links",
      category: "yoast-internal-linking-blocks",
      description: Object(s.__)("Adds the Yoast SEO breadcrumbs to your template or content.", "wordpress-seo"),
      keywords: [Object(s.__)("seo", "wordpress-seo"), Object(s.__)("breadcrumbs", "wordpress-seo"), Object(s.__)("internal linking", "wordpress-seo"), Object(s.__)("site structure", "wordpress-seo")],
      example: {
        attributes: {}
      },
      edit: function edit(e) {
        return Object(n.createElement)(u.a, {
          block: "yoast-seo/breadcrumbs",
          attributes: e.attributes
        });
      },
      save: function save() {
        return null;
      }
    });
  }
});