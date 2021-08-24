"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.helpers = function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
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
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      n.d(r, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 739);
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
  11: function _(t, e, n) {
    var r = n(37);
    t.exports = function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          writable: !0,
          configurable: !0
        }
      }), e && r(t, e);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  12: function _(t, e, n) {
    var r = n(23)["default"],
        o = n(15);
    t.exports = function (t, e) {
      return !e || "object" !== r(e) && "function" != typeof e ? o(t) : e;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  15: function _(t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  17: function _(t, e) {
    function n() {
      return t.exports = n = Object.assign || function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
        }

        return t;
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n.apply(this, arguments);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  2: function _(t, e) {
    t.exports = window.lodash;
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
  25: function _(t, e) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
    }

    t.exports = n;
  },
  3: function _(t, e) {
    t.exports = window.React;
  },
  311: function _(t, e, n) {
    (function (e) {
      (function () {
        "use strict";

        var e = this;

        function n(t) {
          return "string" == typeof t;
        }

        function r(t, e, n) {
          return t.call.apply(t.bind, arguments);
        }

        function o(t, e, n) {
          if (!t) throw Error();

          if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function () {
              var n = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(n, r), t.apply(e, n);
            };
          }

          return function () {
            return t.apply(e, arguments);
          };
        }

        function i(t, e, n) {
          return (i = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r : o).apply(null, arguments);
        }

        function a(t) {
          var e = ut;

          function n() {}

          n.prototype = e.prototype, t.G = e.prototype, t.prototype = new n(), t.prototype.constructor = t, t.F = function (t, n, r) {
            for (var o = Array(arguments.length - 2), i = 2; i < arguments.length; i++) {
              o[i - 2] = arguments[i];
            }

            return e.prototype[n].apply(t, o);
          };
        }

        var u = String.prototype.trim ? function (t) {
          return t.trim();
        } : function (t) {
          return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
        };

        function s(t, e) {
          return -1 != t.indexOf(e);
        }

        function c(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }

        var f,
            l = Array.prototype.indexOf ? function (t, e, n) {
          return Array.prototype.indexOf.call(t, e, n);
        } : function (t, e, r) {
          if (r = null == r ? 0 : 0 > r ? Math.max(0, t.length + r) : r, n(t)) return n(e) && 1 == e.length ? t.indexOf(e, r) : -1;

          for (; r < t.length; r++) {
            if (r in t && t[r] === e) return r;
          }

          return -1;
        },
            p = Array.prototype.forEach ? function (t, e, n) {
          Array.prototype.forEach.call(t, e, n);
        } : function (t, e, r) {
          for (var o = t.length, i = n(t) ? t.split("") : t, a = 0; a < o; a++) {
            a in i && e.call(r, i[a], a, t);
          }
        },
            h = Array.prototype.filter ? function (t, e, n) {
          return Array.prototype.filter.call(t, e, n);
        } : function (t, e, r) {
          for (var o = t.length, i = [], a = 0, u = n(t) ? t.split("") : t, s = 0; s < o; s++) {
            if (s in u) {
              var c = u[s];
              e.call(r, c, s, t) && (i[a++] = c);
            }
          }

          return i;
        },
            d = Array.prototype.reduce ? function (t, e, n, r) {
          return r && (e = i(e, r)), Array.prototype.reduce.call(t, e, n);
        } : function (t, e, n, r) {
          var o = n;
          return p(t, function (n, i) {
            o = e.call(r, o, n, i, t);
          }), o;
        },
            y = Array.prototype.some ? function (t, e, n) {
          return Array.prototype.some.call(t, e, n);
        } : function (t, e, r) {
          for (var o = t.length, i = n(t) ? t.split("") : t, a = 0; a < o; a++) {
            if (a in i && e.call(r, i[a], a, t)) return !0;
          }

          return !1;
        };

        function b(t, e, n) {
          return 2 >= arguments.length ? Array.prototype.slice.call(t, e) : Array.prototype.slice.call(t, e, n);
        }

        t: {
          var g = e.navigator;

          if (g) {
            var m = g.userAgent;

            if (m) {
              f = m;
              break t;
            }
          }

          f = "";
        }

        var v,
            w,
            x = s(f, "Opera") || s(f, "OPR"),
            E = s(f, "Trident") || s(f, "MSIE"),
            _ = s(f, "Edge"),
            T = s(f, "Gecko") && !(s(f.toLowerCase(), "webkit") && !s(f, "Edge")) && !(s(f, "Trident") || s(f, "MSIE")) && !s(f, "Edge"),
            O = s(f.toLowerCase(), "webkit") && !s(f, "Edge");

        function N() {
          var t = e.document;
          return t ? t.documentMode : void 0;
        }

        t: {
          var j = "",
              R = (w = f, T ? /rv\:([^\);]+)(\)|;)/.exec(w) : _ ? /Edge\/([\d\.]+)/.exec(w) : E ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(w) : O ? /WebKit\/(\S+)/.exec(w) : x ? /(?:Version)[ \/]?(\S+)/.exec(w) : void 0);

          if (R && (j = R ? R[1] : ""), E) {
            var P = N();

            if (null != P && P > parseFloat(j)) {
              v = String(P);
              break t;
            }
          }

          v = j;
        }

        var S = {};

        function A(t) {
          if (!S[t]) {
            for (var e = 0, n = u(String(v)).split("."), r = u(String(t)).split("."), o = Math.max(n.length, r.length), i = 0; 0 == e && i < o; i++) {
              var a = n[i] || "",
                  s = r[i] || "",
                  f = /(\d*)(\D*)/g,
                  l = /(\d*)(\D*)/g;

              do {
                var p = f.exec(a) || ["", "", ""],
                    h = l.exec(s) || ["", "", ""];
                if (0 == p[0].length && 0 == h[0].length) break;
                e = c(0 == p[1].length ? 0 : parseInt(p[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || c(0 == p[2].length, 0 == h[2].length) || c(p[2], h[2]);
              } while (0 == e);
            }

            S[t] = 0 <= e;
          }
        }

        var B = e.document,
            D = B && E ? N() || ("CSS1Compat" == B.compatMode ? parseInt(v, 10) : 5) : void 0,
            I = E && !(9 <= Number(D)),
            k = E && !(8 <= Number(D));

        function M(t, e, n, r) {
          this.a = t, this.nodeName = n, this.nodeValue = r, this.nodeType = 2, this.parentNode = this.ownerElement = e;
        }

        function U(t, e) {
          var n = k && "href" == e.nodeName ? t.getAttribute(e.nodeName, 2) : e.nodeValue;
          return new M(e, t, e.nodeName, n);
        }

        function C(t) {
          var e = null;
          if (1 == (n = t.nodeType) && (e = null == (e = null == (e = t.textContent) || null == e ? t.innerText : e) || null == e ? "" : e), "string" != typeof e) if (I && "title" == t.nodeName.toLowerCase() && 1 == n) e = t.text;else if (9 == n || 1 == n) {
            t = 9 == n ? t.documentElement : t.firstChild;
            var n = 0,
                r = [];

            for (e = ""; t;) {
              do {
                1 != t.nodeType && (e += t.nodeValue), I && "title" == t.nodeName.toLowerCase() && (e += t.text), r[n++] = t;
              } while (t = t.firstChild);

              for (; n && !(t = r[--n].nextSibling);) {
                ;
              }
            }
          } else e = t.nodeValue;
          return "" + e;
        }

        function F(t, e, n) {
          if (null === e) return !0;

          try {
            if (!t.getAttribute) return !1;
          } catch (t) {
            return !1;
          }

          return k && "class" == e && (e = "className"), null == n ? !!t.getAttribute(e) : t.getAttribute(e, 2) == n;
        }

        function L(t, e, r, o, i) {
          return (I ? Y : H).call(null, t, e, n(r) ? r : null, n(o) ? o : null, i || new J());
        }

        function Y(t, e, n, r, o) {
          if (t instanceof kt || 8 == t.b || n && null === t.b) {
            var i = e.all;
            if (!i) return o;
            if ("*" != (t = G(t)) && !(i = e.getElementsByTagName(t))) return o;

            if (n) {
              for (var a = [], u = 0; e = i[u++];) {
                F(e, n, r) && a.push(e);
              }

              i = a;
            }

            for (u = 0; e = i[u++];) {
              "*" == t && "!" == e.tagName || et(o, e);
            }

            return o;
          }

          return z(t, e, n, r, o), o;
        }

        function H(t, e, n, r, o) {
          return e.getElementsByName && r && "name" == n && !E ? (e = e.getElementsByName(r), p(e, function (e) {
            t.a(e) && et(o, e);
          })) : e.getElementsByClassName && r && "class" == n ? (e = e.getElementsByClassName(r), p(e, function (e) {
            e.className == r && t.a(e) && et(o, e);
          })) : t instanceof Nt ? z(t, e, n, r, o) : e.getElementsByTagName && (e = e.getElementsByTagName(t.f()), p(e, function (t) {
            F(t, n, r) && et(o, t);
          })), o;
        }

        function q(t, e, n, r, o) {
          var i;

          if ((t instanceof kt || 8 == t.b || n && null === t.b) && (i = e.childNodes)) {
            var a = G(t);
            return "*" == a || (i = h(i, function (t) {
              return t.tagName && t.tagName.toLowerCase() == a;
            })) ? (n && (i = h(i, function (t) {
              return F(t, n, r);
            })), p(i, function (t) {
              "*" == a && ("!" == t.tagName || "*" == a && 1 != t.nodeType) || et(o, t);
            }), o) : o;
          }

          return V(t, e, n, r, o);
        }

        function V(t, e, n, r, o) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            F(e, n, r) && t.a(e) && et(o, e);
          }

          return o;
        }

        function z(t, e, n, r, o) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            F(e, n, r) && t.a(e) && et(o, e), z(t, e, n, r, o);
          }
        }

        function G(t) {
          if (t instanceof Nt) {
            if (8 == t.b) return "!";
            if (null === t.b) return "*";
          }

          return t.f();
        }

        function $(t, e) {
          if (!t || !e) return !1;
          if (t.contains && 1 == e.nodeType) return t == e || t.contains(e);
          if (void 0 !== t.compareDocumentPosition) return t == e || !!(16 & t.compareDocumentPosition(e));

          for (; e && t != e;) {
            e = e.parentNode;
          }

          return e == t;
        }

        function X(t, n) {
          if (t == n) return 0;
          if (t.compareDocumentPosition) return 2 & t.compareDocumentPosition(n) ? 1 : -1;

          if (E && !(9 <= Number(D))) {
            if (9 == t.nodeType) return -1;
            if (9 == n.nodeType) return 1;
          }

          if ("sourceIndex" in t || t.parentNode && "sourceIndex" in t.parentNode) {
            var r = 1 == t.nodeType,
                o = 1 == n.nodeType;
            if (r && o) return t.sourceIndex - n.sourceIndex;
            var i = t.parentNode,
                a = n.parentNode;
            return i == a ? Q(t, n) : !r && $(i, n) ? -1 * W(t, n) : !o && $(a, t) ? W(n, t) : (r ? t.sourceIndex : i.sourceIndex) - (o ? n.sourceIndex : a.sourceIndex);
          }

          return (r = (o = 9 == t.nodeType ? t : t.ownerDocument || t.document).createRange()).selectNode(t), r.collapse(!0), (o = o.createRange()).selectNode(n), o.collapse(!0), r.compareBoundaryPoints(e.Range.START_TO_END, o);
        }

        function W(t, e) {
          var n = t.parentNode;
          if (n == e) return -1;

          for (var r = e; r.parentNode != n;) {
            r = r.parentNode;
          }

          return Q(r, t);
        }

        function Q(t, e) {
          for (var n = e; n = n.previousSibling;) {
            if (n == t) return -1;
          }

          return 1;
        }

        function J() {
          this.b = this.a = null, this.l = 0;
        }

        function K(t) {
          this.node = t, this.a = this.b = null;
        }

        function Z(t, e) {
          if (!t.a) return e;
          if (!e.a) return t;

          for (var n = t.a, r = e.a, o = null, i = null, a = 0; n && r;) {
            i = n.node;
            var u = r.node;
            i == u || i instanceof M && u instanceof M && i.a == u.a ? (i = n, n = n.a, r = r.a) : 0 < X(n.node, r.node) ? (i = r, r = r.a) : (i = n, n = n.a), (i.b = o) ? o.a = i : t.a = i, o = i, a++;
          }

          for (i = n || r; i;) {
            i.b = o, o = o.a = i, a++, i = i.a;
          }

          return t.b = o, t.l = a, t;
        }

        function tt(t, e) {
          var n = new K(e);
          n.a = t.a, t.b ? t.a.b = n : t.a = t.b = n, t.a = n, t.l++;
        }

        function et(t, e) {
          var n = new K(e);
          n.b = t.b, t.a ? t.b.a = n : t.a = t.b = n, t.b = n, t.l++;
        }

        function nt(t) {
          return (t = t.a) ? t.node : null;
        }

        function rt(t) {
          return (t = nt(t)) ? C(t) : "";
        }

        function ot(t, e) {
          return new it(t, !!e);
        }

        function it(t, e) {
          this.f = t, this.b = (this.c = e) ? t.b : t.a, this.a = null;
        }

        function at(t) {
          var e = t.b;
          if (null == e) return null;
          var n = t.a = e;
          return t.b = t.c ? e.b : e.a, n.node;
        }

        function ut(t) {
          this.i = t, this.b = this.g = !1, this.f = null;
        }

        function st(t) {
          return "\n  " + t.toString().split("\n").join("\n  ");
        }

        function ct(t, e) {
          t.g = e;
        }

        function ft(t, e) {
          t.b = e;
        }

        function lt(t, e) {
          var n = t.a(e);
          return n instanceof J ? +rt(n) : +n;
        }

        function pt(t, e) {
          var n = t.a(e);
          return n instanceof J ? rt(n) : "" + n;
        }

        function ht(t, e) {
          var n = t.a(e);
          return n instanceof J ? !!n.l : !!n;
        }

        function dt(t, e, n) {
          ut.call(this, t.i), this.c = t, this.h = e, this.o = n, this.g = e.g || n.g, this.b = e.b || n.b, this.c == vt && (n.b || n.g || 4 == n.i || 0 == n.i || !e.f ? e.b || e.g || 4 == e.i || 0 == e.i || !n.f || (this.f = {
            name: n.f.name,
            s: e
          }) : this.f = {
            name: e.f.name,
            s: n
          });
        }

        function yt(t, e, n, r, o) {
          var i;

          if (e = e.a(r), n = n.a(r), e instanceof J && n instanceof J) {
            for (r = at(e = ot(e)); r; r = at(e)) {
              for (i = at(o = ot(n)); i; i = at(o)) {
                if (t(C(r), C(i))) return !0;
              }
            }

            return !1;
          }

          if (e instanceof J || n instanceof J) {
            e instanceof J ? (o = e, r = n) : (o = n, r = e);

            for (var a = _typeof(r), u = at(i = ot(o)); u; u = at(i)) {
              switch (a) {
                case "number":
                  u = +C(u);
                  break;

                case "boolean":
                  u = !!C(u);
                  break;

                case "string":
                  u = C(u);
                  break;

                default:
                  throw Error("Illegal primitive type for comparison.");
              }

              if (o == e && t(u, r) || o == n && t(r, u)) return !0;
            }

            return !1;
          }

          return o ? "boolean" == typeof e || "boolean" == typeof n ? t(!!e, !!n) : "number" == typeof e || "number" == typeof n ? t(+e, +n) : t(e, n) : t(+e, +n);
        }

        function bt(t, e, n, r) {
          this.a = t, this.w = e, this.i = n, this.m = r;
        }

        !T && !E || E && 9 <= Number(D) || T && A("1.9.1"), E && A("9"), a(dt), dt.prototype.a = function (t) {
          return this.c.m(this.h, this.o, t);
        }, dt.prototype.toString = function () {
          return "Binary Expression: " + this.c + st(this.h) + st(this.o);
        }, bt.prototype.toString = function () {
          return this.a;
        };
        var gt = {};

        function mt(t, e, n, r) {
          if (gt.hasOwnProperty(t)) throw Error("Binary operator already created: " + t);
          return t = new bt(t, e, n, r), gt[t.toString()] = t;
        }

        mt("div", 6, 1, function (t, e, n) {
          return lt(t, n) / lt(e, n);
        }), mt("mod", 6, 1, function (t, e, n) {
          return lt(t, n) % lt(e, n);
        }), mt("*", 6, 1, function (t, e, n) {
          return lt(t, n) * lt(e, n);
        }), mt("+", 5, 1, function (t, e, n) {
          return lt(t, n) + lt(e, n);
        }), mt("-", 5, 1, function (t, e, n) {
          return lt(t, n) - lt(e, n);
        }), mt("<", 4, 2, function (t, e, n) {
          return yt(function (t, e) {
            return t < e;
          }, t, e, n);
        }), mt(">", 4, 2, function (t, e, n) {
          return yt(function (t, e) {
            return t > e;
          }, t, e, n);
        }), mt("<=", 4, 2, function (t, e, n) {
          return yt(function (t, e) {
            return t <= e;
          }, t, e, n);
        }), mt(">=", 4, 2, function (t, e, n) {
          return yt(function (t, e) {
            return t >= e;
          }, t, e, n);
        });
        var vt = mt("=", 3, 2, function (t, e, n) {
          return yt(function (t, e) {
            return t == e;
          }, t, e, n, !0);
        });

        function wt(t, e, n) {
          this.a = t, this.b = e || 1, this.f = n || 1;
        }

        function xt(t, e) {
          if (e.a.length && 4 != t.i) throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");
          ut.call(this, t.i), this.c = t, this.h = e, this.g = t.g, this.b = t.b;
        }

        function Et(t, e) {
          if (e.length < t.A) throw Error("Function " + t.j + " expects at least" + t.A + " arguments, " + e.length + " given");
          if (null !== t.v && e.length > t.v) throw Error("Function " + t.j + " expects at most " + t.v + " arguments, " + e.length + " given");
          t.B && p(e, function (e, n) {
            if (4 != e.i) throw Error("Argument " + n + " to function " + t.j + " is not of type Nodeset: " + e);
          }), ut.call(this, t.i), this.h = t, this.c = e, ct(this, t.g || y(e, function (t) {
            return t.g;
          })), ft(this, t.D && !e.length || t.C && !!e.length || y(e, function (t) {
            return t.b;
          }));
        }

        function _t(t, e, n, r, o, i, a, u, s) {
          this.j = t, this.i = e, this.g = n, this.D = r, this.C = o, this.m = i, this.A = a, this.v = void 0 !== u ? u : a, this.B = !!s;
        }

        mt("!=", 3, 2, function (t, e, n) {
          return yt(function (t, e) {
            return t != e;
          }, t, e, n, !0);
        }), mt("and", 2, 2, function (t, e, n) {
          return ht(t, n) && ht(e, n);
        }), mt("or", 1, 2, function (t, e, n) {
          return ht(t, n) || ht(e, n);
        }), a(xt), xt.prototype.a = function (t) {
          return t = this.c.a(t), Ht(this.h, t);
        }, xt.prototype.toString = function () {
          return "Filter:" + st(this.c) + st(this.h);
        }, a(Et), Et.prototype.a = function (t) {
          return this.h.m.apply(null, function (t) {
            return Array.prototype.concat.apply(Array.prototype, arguments);
          }(t, this.c));
        }, Et.prototype.toString = function () {
          var t = "Function: " + this.h;

          if (this.c.length) {
            var e = d(this.c, function (t, e) {
              return t + st(e);
            }, "Arguments:");
            t += st(e);
          }

          return t;
        }, _t.prototype.toString = function () {
          return this.j;
        };
        var Tt = {};

        function Ot(t, e, n, r, o, i, a, u) {
          if (Tt.hasOwnProperty(t)) throw Error("Function already created: " + t + ".");
          Tt[t] = new _t(t, e, n, r, !1, o, i, a, u);
        }

        function Nt(t, e) {
          switch (this.h = t, this.c = void 0 !== e ? e : null, this.b = null, t) {
            case "comment":
              this.b = 8;
              break;

            case "text":
              this.b = 3;
              break;

            case "processing-instruction":
              this.b = 7;
              break;

            case "node":
              break;

            default:
              throw Error("Unexpected argument");
          }
        }

        function jt(t) {
          return "comment" == t || "text" == t || "processing-instruction" == t || "node" == t;
        }

        function Rt(t) {
          this.b = t, this.a = 0;
        }

        Ot("boolean", 2, !1, !1, function (t, e) {
          return ht(e, t);
        }, 1), Ot("ceiling", 1, !1, !1, function (t, e) {
          return Math.ceil(lt(e, t));
        }, 1), Ot("concat", 3, !1, !1, function (t, e) {
          return d(b(arguments, 1), function (e, n) {
            return e + pt(n, t);
          }, "");
        }, 2, null), Ot("contains", 2, !1, !1, function (t, e, n) {
          return s(pt(e, t), pt(n, t));
        }, 2), Ot("count", 1, !1, !1, function (t, e) {
          return e.a(t).l;
        }, 1, 1, !0), Ot("false", 2, !1, !1, function () {
          return !1;
        }, 0), Ot("floor", 1, !1, !1, function (t, e) {
          return Math.floor(lt(e, t));
        }, 1), Ot("id", 4, !1, !1, function (t, e) {
          var r = 9 == (o = t.a).nodeType ? o : o.ownerDocument,
              o = pt(e, t).split(/\s+/),
              i = [];
          p(o, function (t) {
            !(t = function (t) {
              if (I) {
                var e = r.all[t];

                if (e) {
                  if (e.nodeType && t == e.id) return e;
                  if (e.length) return function (t, e) {
                    var r;

                    t: {
                      r = t.length;

                      for (var o = n(t) ? t.split("") : t, i = 0; i < r; i++) {
                        if (i in o && e.call(void 0, o[i], i, t)) {
                          r = i;
                          break t;
                        }
                      }

                      r = -1;
                    }

                    return 0 > r ? null : n(t) ? t.charAt(r) : t[r];
                  }(e, function (e) {
                    return t == e.id;
                  });
                }

                return null;
              }

              return r.getElementById(t);
            }(t)) || 0 <= l(i, t) || i.push(t);
          }), i.sort(X);
          var a = new J();
          return p(i, function (t) {
            et(a, t);
          }), a;
        }, 1), Ot("lang", 2, !1, !1, function () {
          return !1;
        }, 1), Ot("last", 1, !0, !1, function (t) {
          if (1 != arguments.length) throw Error("Function last expects ()");
          return t.f;
        }, 0), Ot("local-name", 3, !1, !0, function (t, e) {
          var n = e ? nt(e.a(t)) : t.a;
          return n ? n.localName || n.nodeName.toLowerCase() : "";
        }, 0, 1, !0), Ot("name", 3, !1, !0, function (t, e) {
          var n = e ? nt(e.a(t)) : t.a;
          return n ? n.nodeName.toLowerCase() : "";
        }, 0, 1, !0), Ot("namespace-uri", 3, !0, !1, function () {
          return "";
        }, 0, 1, !0), Ot("normalize-space", 3, !1, !0, function (t, e) {
          return (e ? pt(e, t) : C(t.a)).replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
        }, 0, 1), Ot("not", 2, !1, !1, function (t, e) {
          return !ht(e, t);
        }, 1), Ot("number", 1, !1, !0, function (t, e) {
          return e ? lt(e, t) : +C(t.a);
        }, 0, 1), Ot("position", 1, !0, !1, function (t) {
          return t.b;
        }, 0), Ot("round", 1, !1, !1, function (t, e) {
          return Math.round(lt(e, t));
        }, 1), Ot("starts-with", 2, !1, !1, function (t, e, n) {
          return e = pt(e, t), t = pt(n, t), 0 == e.lastIndexOf(t, 0);
        }, 2), Ot("string", 3, !1, !0, function (t, e) {
          return e ? pt(e, t) : C(t.a);
        }, 0, 1), Ot("string-length", 1, !1, !0, function (t, e) {
          return (e ? pt(e, t) : C(t.a)).length;
        }, 0, 1), Ot("substring", 3, !1, !1, function (t, e, n, r) {
          if (n = lt(n, t), isNaN(n) || 1 / 0 == n || -1 / 0 == n) return "";
          if (r = r ? lt(r, t) : 1 / 0, isNaN(r) || -1 / 0 === r) return "";
          n = Math.round(n) - 1;
          var o = Math.max(n, 0);
          return t = pt(e, t), 1 / 0 == r ? t.substring(o) : t.substring(o, n + Math.round(r));
        }, 2, 3), Ot("substring-after", 3, !1, !1, function (t, e, n) {
          return e = pt(e, t), t = pt(n, t), -1 == (n = e.indexOf(t)) ? "" : e.substring(n + t.length);
        }, 2), Ot("substring-before", 3, !1, !1, function (t, e, n) {
          return e = pt(e, t), t = pt(n, t), -1 == (t = e.indexOf(t)) ? "" : e.substring(0, t);
        }, 2), Ot("sum", 1, !1, !1, function (t, e) {
          for (var n = ot(e.a(t)), r = 0, o = at(n); o; o = at(n)) {
            r += +C(o);
          }

          return r;
        }, 1, 1, !0), Ot("translate", 3, !1, !1, function (t, e, n, r) {
          e = pt(e, t), n = pt(n, t);
          var o = pt(r, t);

          for (t = {}, r = 0; r < n.length; r++) {
            var i = n.charAt(r);
            i in t || (t[i] = o.charAt(r));
          }

          for (n = "", r = 0; r < e.length; r++) {
            n += (i = e.charAt(r)) in t ? t[i] : i;
          }

          return n;
        }, 3), Ot("true", 2, !1, !1, function () {
          return !0;
        }, 0), Nt.prototype.a = function (t) {
          return null === this.b || this.b == t.nodeType;
        }, Nt.prototype.f = function () {
          return this.h;
        }, Nt.prototype.toString = function () {
          var t = "Kind Test: " + this.h;
          return null === this.c || (t += st(this.c)), t;
        };
        var Pt = /\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,
            St = /^\s/;

        function At(t, e) {
          return t.b[t.a + (e || 0)];
        }

        function Bt(t) {
          return t.b[t.a++];
        }

        function Dt(t) {
          return t.b.length <= t.a;
        }

        function It(t) {
          ut.call(this, 3), this.c = t.substring(1, t.length - 1);
        }

        function kt(t, e) {
          var n;
          this.j = t.toLowerCase(), n = "*" == this.j ? "*" : "http://www.w3.org/1999/xhtml", this.c = e ? e.toLowerCase() : n;
        }

        function Mt(t, e) {
          if (ut.call(this, t.i), this.h = t, this.c = e, this.g = t.g, this.b = t.b, 1 == this.c.length) {
            var n = this.c[0];
            n.u || n.c != $t || "*" != (n = n.o).f() && (this.f = {
              name: n.f(),
              s: null
            });
          }
        }

        function Ut() {
          ut.call(this, 4);
        }

        function Ct() {
          ut.call(this, 4);
        }

        function Ft(t) {
          return "/" == t || "//" == t;
        }

        function Lt(t) {
          ut.call(this, 4), this.c = t, ct(this, y(this.c, function (t) {
            return t.g;
          })), ft(this, y(this.c, function (t) {
            return t.b;
          }));
        }

        function Yt(t, e) {
          this.a = t, this.b = !!e;
        }

        function Ht(t, e, n) {
          for (n = n || 0; n < t.a.length; n++) {
            for (var r, o = t.a[n], i = ot(e), a = e.l, u = 0; r = at(i); u++) {
              var s = t.b ? a - u : u + 1;
              if ("number" == typeof (r = o.a(new wt(r, s, a)))) s = s == r;else if ("string" == typeof r || "boolean" == typeof r) s = !!r;else {
                if (!(r instanceof J)) throw Error("Predicate.evaluate returned an unexpected type.");
                s = 0 < r.l;
              }

              if (!s) {
                if (r = (s = i).f, !(f = s.a)) throw Error("Next must be called at least once before remove.");
                var c = f.b,
                    f = f.a;
                c ? c.a = f : r.a = f, f ? f.b = c : r.b = c, r.l--, s.a = null;
              }
            }
          }

          return e;
        }

        function qt(t, e, n, r) {
          ut.call(this, 4), this.c = t, this.o = e, this.h = n || new Yt([]), this.u = !!r, e = 0 < (e = this.h).a.length ? e.a[0].f : null, t.b && e && (t = e.name, t = I ? t.toLowerCase() : t, this.f = {
            name: t,
            s: e.s
          });

          t: {
            for (t = this.h, e = 0; e < t.a.length; e++) {
              if ((n = t.a[e]).g || 1 == n.i || 0 == n.i) {
                t = !0;
                break t;
              }
            }

            t = !1;
          }

          this.g = t;
        }

        function Vt(t, e, n, r) {
          this.j = t, this.f = e, this.a = n, this.b = r;
        }

        a(It), It.prototype.a = function () {
          return this.c;
        }, It.prototype.toString = function () {
          return "Literal: " + this.c;
        }, kt.prototype.a = function (t) {
          var e = t.nodeType;
          return !(1 != e && 2 != e || (e = void 0 !== t.localName ? t.localName : t.nodeName, "*" != this.j && this.j != e.toLowerCase() || "*" != this.c && this.c != (t.namespaceURI ? t.namespaceURI.toLowerCase() : "http://www.w3.org/1999/xhtml")));
        }, kt.prototype.f = function () {
          return this.j;
        }, kt.prototype.toString = function () {
          return "Name Test: " + ("http://www.w3.org/1999/xhtml" == this.c ? "" : this.c + ":") + this.j;
        }, a(Mt), a(Ut), Ut.prototype.a = function (t) {
          var e = new J();
          return 9 == (t = t.a).nodeType ? et(e, t) : et(e, t.ownerDocument), e;
        }, Ut.prototype.toString = function () {
          return "Root Helper Expression";
        }, a(Ct), Ct.prototype.a = function (t) {
          var e = new J();
          return et(e, t.a), e;
        }, Ct.prototype.toString = function () {
          return "Context Helper Expression";
        }, Mt.prototype.a = function (t) {
          var e = this.h.a(t);
          if (!(e instanceof J)) throw Error("Filter expression must evaluate to nodeset.");

          for (var n = 0, r = (t = this.c).length; n < r && e.l; n++) {
            var o,
                i = t[n],
                a = ot(e, i.c.a);
            if (i.g || i.c != Qt) {
              if (i.g || i.c != Kt) for (o = at(a), e = i.a(new wt(o)); null != (o = at(a));) {
                e = Z(e, o = i.a(new wt(o)));
              } else o = at(a), e = i.a(new wt(o));
            } else {
              for (o = at(a); (e = at(a)) && (!o.contains || o.contains(e)) && 8 & e.compareDocumentPosition(o); o = e) {
                ;
              }

              e = i.a(new wt(o));
            }
          }

          return e;
        }, Mt.prototype.toString = function () {
          var t;

          if (t = "Path Expression:" + st(this.h), this.c.length) {
            var e = d(this.c, function (t, e) {
              return t + st(e);
            }, "Steps:");
            t += st(e);
          }

          return t;
        }, a(Lt), Lt.prototype.a = function (t) {
          var e = new J();
          return p(this.c, function (n) {
            if (!((n = n.a(t)) instanceof J)) throw Error("Path expression must evaluate to NodeSet.");
            e = Z(e, n);
          }), e;
        }, Lt.prototype.toString = function () {
          return d(this.c, function (t, e) {
            return t + st(e);
          }, "Union Expression:");
        }, Yt.prototype.toString = function () {
          return d(this.a, function (t, e) {
            return t + st(e);
          }, "Predicates:");
        }, a(qt), qt.prototype.a = function (t) {
          var e = t.a,
              n = null,
              r = null,
              o = null,
              i = 0;
          if ((n = this.f) && (r = n.name, o = n.s ? pt(n.s, t) : null, i = 1), this.u) {
            if (this.g || this.c != Xt) {
              if (e = at(t = ot(new qt(Wt, new Nt("node")).a(t)))) for (n = this.m(e, r, o, i); null != (e = at(t));) {
                n = Z(n, this.m(e, r, o, i));
              } else n = new J();
            } else n = L(this.o, e, r, o), n = Ht(this.h, n, i);
          } else n = this.m(t.a, r, o, i);
          return n;
        }, qt.prototype.m = function (t, e, n, r) {
          return t = this.c.f(this.o, t, e, n), Ht(this.h, t, r);
        }, qt.prototype.toString = function () {
          var t;

          if (t = "Step:" + st("Operator: " + (this.u ? "//" : "/")), this.c.j && (t += st("Axis: " + this.c)), t += st(this.o), this.h.a.length) {
            var e = d(this.h.a, function (t, e) {
              return t + st(e);
            }, "Predicates:");
            t += st(e);
          }

          return t;
        }, Vt.prototype.toString = function () {
          return this.j;
        };
        var zt = {};

        function Gt(t, e, n, r) {
          if (zt.hasOwnProperty(t)) throw Error("Axis already created: " + t);
          return e = new Vt(t, e, n, !!r), zt[t] = e;
        }

        Gt("ancestor", function (t, e) {
          for (var n = new J(), r = e; r = r.parentNode;) {
            t.a(r) && tt(n, r);
          }

          return n;
        }, !0), Gt("ancestor-or-self", function (t, e) {
          var n = new J(),
              r = e;

          do {
            t.a(r) && tt(n, r);
          } while (r = r.parentNode);

          return n;
        }, !0);
        var $t = Gt("attribute", function (t, e) {
          var n = new J();
          if ("style" == (i = t.f()) && I && e.style) return et(n, new M(e.style, e, "style", e.style.cssText)), n;
          var r = e.attributes;
          if (r) if (t instanceof Nt && null === t.b || "*" == i) for (var o, i = 0; o = r[i]; i++) {
            I ? o.nodeValue && et(n, U(e, o)) : et(n, o);
          } else (o = r.getNamedItem(i)) && (I ? o.nodeValue && et(n, U(e, o)) : et(n, o));
          return n;
        }, !1),
            Xt = Gt("child", function (t, e, r, o, i) {
          return (I ? q : V).call(null, t, e, n(r) ? r : null, n(o) ? o : null, i || new J());
        }, !1, !0);
        Gt("descendant", L, !1, !0);
        var Wt = Gt("descendant-or-self", function (t, e, n, r) {
          var o = new J();
          return F(e, n, r) && t.a(e) && et(o, e), L(t, e, n, r, o);
        }, !1, !0),
            Qt = Gt("following", function (t, e, n, r) {
          var o = new J();

          do {
            for (var i = e; i = i.nextSibling;) {
              F(i, n, r) && t.a(i) && et(o, i), o = L(t, i, n, r, o);
            }
          } while (e = e.parentNode);

          return o;
        }, !1, !0);
        Gt("following-sibling", function (t, e) {
          for (var n = new J(), r = e; r = r.nextSibling;) {
            t.a(r) && et(n, r);
          }

          return n;
        }, !1), Gt("namespace", function () {
          return new J();
        }, !1);
        var Jt = Gt("parent", function (t, e) {
          var n = new J();
          if (9 == e.nodeType) return n;
          if (2 == e.nodeType) return et(n, e.ownerElement), n;
          var r = e.parentNode;
          return t.a(r) && et(n, r), n;
        }, !1),
            Kt = Gt("preceding", function (t, e, n, r) {
          var o = new J(),
              i = [];

          do {
            i.unshift(e);
          } while (e = e.parentNode);

          for (var a = 1, u = i.length; a < u; a++) {
            var s = [];

            for (e = i[a]; e = e.previousSibling;) {
              s.unshift(e);
            }

            for (var c = 0, f = s.length; c < f; c++) {
              F(e = s[c], n, r) && t.a(e) && et(o, e), o = L(t, e, n, r, o);
            }
          }

          return o;
        }, !0, !0);
        Gt("preceding-sibling", function (t, e) {
          for (var n = new J(), r = e; r = r.previousSibling;) {
            t.a(r) && tt(n, r);
          }

          return n;
        }, !0);
        var Zt = Gt("self", function (t, e) {
          var n = new J();
          return t.a(e) && et(n, e), n;
        }, !1);

        function te(t) {
          ut.call(this, 1), this.c = t, this.g = t.g, this.b = t.b;
        }

        function ee(t) {
          ut.call(this, 1), this.c = t;
        }

        function ne(t, e) {
          this.a = t, this.b = e;
        }

        function re(t) {
          for (var e, n = [];;) {
            oe(t, "Missing right hand side of binary expression."), e = le(t);
            var r = Bt(t.a);
            if (!r) break;
            var o = (r = gt[r] || null) && r.w;

            if (!o) {
              t.a.a--;
              break;
            }

            for (; n.length && o <= n[n.length - 1].w;) {
              e = new dt(n.pop(), n.pop(), e);
            }

            n.push(e, r);
          }

          for (; n.length;) {
            e = new dt(n.pop(), n.pop(), e);
          }

          return e;
        }

        function oe(t, e) {
          if (Dt(t.a)) throw Error(e);
        }

        function ie(t, e) {
          var n = Bt(t.a);
          if (n != e) throw Error("Bad token, expected: " + e + " got: " + n);
        }

        function ae(t) {
          if (")" != (t = Bt(t.a))) throw Error("Bad token: " + t);
        }

        function ue(t) {
          if (2 > (t = Bt(t.a)).length) throw Error("Unclosed literal string");
          return new It(t);
        }

        function se(t) {
          var e,
              n,
              r = [];

          if (Ft(At(t.a))) {
            if (e = Bt(t.a), n = At(t.a), "/" == e && (Dt(t.a) || "." != n && ".." != n && "@" != n && "*" != n && !/(?![0-9])[\w]/.test(n))) return new Ut();
            n = new Ut(), oe(t, "Missing next location step."), e = ce(t, e), r.push(e);
          } else {
            t: {
              switch (n = (e = At(t.a)).charAt(0)) {
                case "$":
                  throw Error("Variable reference not allowed in HTML XPath");

                case "(":
                  Bt(t.a), e = re(t), oe(t, 'unclosed "("'), ie(t, ")");
                  break;

                case '"':
                case "'":
                  e = ue(t);
                  break;

                default:
                  if (isNaN(+e)) {
                    if (jt(e) || !/(?![0-9])[\w]/.test(n) || "(" != At(t.a, 1)) {
                      e = null;
                      break t;
                    }

                    for (e = Bt(t.a), e = Tt[e] || null, Bt(t.a), n = []; ")" != At(t.a) && (oe(t, "Missing function argument list."), n.push(re(t)), "," == At(t.a));) {
                      Bt(t.a);
                    }

                    oe(t, "Unclosed function argument list."), ae(t), e = new Et(e, n);
                  } else e = new ee(+Bt(t.a));

              }

              "[" == At(t.a) && (e = new xt(e, n = new Yt(fe(t))));
            }

            if (e) {
              if (!Ft(At(t.a))) return e;
              n = e;
            } else e = ce(t, "/"), n = new Ct(), r.push(e);
          }

          for (; Ft(At(t.a));) {
            e = Bt(t.a), oe(t, "Missing next location step."), e = ce(t, e), r.push(e);
          }

          return new Mt(n, r);
        }

        function ce(t, e) {
          var n, r, o, i;
          if ("/" != e && "//" != e) throw Error('Step op should be "/" or "//"');
          if ("." == At(t.a)) return r = new qt(Zt, new Nt("node")), Bt(t.a), r;
          if (".." == At(t.a)) return r = new qt(Jt, new Nt("node")), Bt(t.a), r;
          if ("@" == At(t.a)) i = $t, Bt(t.a), oe(t, "Missing attribute name");else if ("::" == At(t.a, 1)) {
            if (!/(?![0-9])[\w]/.test(At(t.a).charAt(0))) throw Error("Bad token: " + Bt(t.a));
            if (n = Bt(t.a), !(i = zt[n] || null)) throw Error("No axis with name: " + n);
            Bt(t.a), oe(t, "Missing node name");
          } else i = Xt;
          if (n = At(t.a), !/(?![0-9])[\w\*]/.test(n.charAt(0))) throw Error("Bad token: " + Bt(t.a));

          if ("(" == At(t.a, 1)) {
            if (!jt(n)) throw Error("Invalid node type: " + n);
            if (!jt(n = Bt(t.a))) throw Error("Invalid type name: " + n);
            ie(t, "("), oe(t, "Bad nodetype");
            var a = null;
            '"' != (o = At(t.a).charAt(0)) && "'" != o || (a = ue(t)), oe(t, "Bad nodetype"), ae(t), n = new Nt(n, a);
          } else if (-1 == (o = (n = Bt(t.a)).indexOf(":"))) n = new kt(n);else {
            var u;
            if ("*" == (a = n.substring(0, o))) u = "*";else if (!(u = t.b(a))) throw Error("Namespace prefix not declared: " + a);
            n = new kt(n = n.substr(o + 1), u);
          }

          return o = new Yt(fe(t), i.a), r || new qt(i, n, o, "//" == e);
        }

        function fe(t) {
          for (var e = []; "[" == At(t.a);) {
            Bt(t.a), oe(t, "Missing predicate expression.");
            var n = re(t);
            e.push(n), oe(t, "Unclosed predicate expression."), ie(t, "]");
          }

          return e;
        }

        function le(t) {
          if ("-" == At(t.a)) return Bt(t.a), new te(le(t));
          var e = se(t);
          if ("|" != At(t.a)) t = e;else {
            for (e = [e]; "|" == Bt(t.a);) {
              oe(t, "Missing next union location path."), e.push(se(t));
            }

            t.a.a--, t = new Lt(e);
          }
          return t;
        }

        function pe() {
          return null;
        }

        function he(t, e) {
          if (t.prefix == e) return t.namespaceURI || "http://www.w3.org/1999/xhtml";
          var n = t.getAttributeNode("xmlns:" + e);
          return n && n.specified ? n.value || null : t.parentNode && 9 != t.parentNode.nodeType ? he(t.parentNode, e) : null;
        }

        function de(t, e) {
          if (!t.length) throw Error("Empty XPath expression.");

          var n = function (t) {
            t = t.match(Pt);

            for (var e = 0; e < t.length; e++) {
              St.test(t[e]) && t.splice(e, 1);
            }

            return new Rt(t);
          }(t);

          if (Dt(n)) throw Error("Invalid XPath expression.");
          e ? "function" == function (t) {
            var e = _typeof(t);

            if ("object" == e) {
              if (!t) return "null";
              if (t instanceof Array) return "array";
              if (t instanceof Object) return e;
              var n = Object.prototype.toString.call(t);
              if ("[object Window]" == n) return "object";
              if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
              if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function";
            } else if ("function" == e && void 0 === t.call) return "object";

            return e;
          }(e) || (e = i(e.lookupNamespaceURI, e)) : e = function e() {
            return null;
          };
          var r = re(new ne(n, e));
          if (!Dt(n)) throw Error("Bad token: " + Bt(n));

          this.evaluate = function (t, e) {
            return new ye(r.a(new wt(t)), e);
          };
        }

        function ye(t, e) {
          if (0 == e) if (t instanceof J) e = 4;else if ("string" == typeof t) e = 2;else if ("number" == typeof t) e = 1;else {
            if ("boolean" != typeof t) throw Error("Unexpected evaluation result.");
            e = 3;
          }
          if (2 != e && 1 != e && 3 != e && !(t instanceof J)) throw Error("value could not be converted to the specified type");
          var n;

          switch (this.resultType = e, e) {
            case 2:
              this.stringValue = t instanceof J ? rt(t) : "" + t;
              break;

            case 1:
              this.numberValue = t instanceof J ? +rt(t) : +t;
              break;

            case 3:
              this.booleanValue = t instanceof J ? 0 < t.l : !!t;
              break;

            case 4:
            case 5:
            case 6:
            case 7:
              var r = ot(t);
              n = [];

              for (var o = at(r); o; o = at(r)) {
                n.push(o instanceof M ? o.a : o);
              }

              this.snapshotLength = t.l, this.invalidIteratorState = !1;
              break;

            case 8:
            case 9:
              r = nt(t), this.singleNodeValue = r instanceof M ? r.a : r;
              break;

            default:
              throw Error("Unknown XPathResult type.");
          }

          var i = 0;
          this.iterateNext = function () {
            if (4 != e && 5 != e) throw Error("iterateNext called with wrong result type");
            return i >= n.length ? null : n[i++];
          }, this.snapshotItem = function (t) {
            if (6 != e && 7 != e) throw Error("snapshotItem called with wrong result type");
            return t >= n.length || 0 > t ? null : n[t];
          };
        }

        function be(t) {
          this.lookupNamespaceURI = function t(e) {
            switch (e.nodeType) {
              case 1:
                return function (t, e) {
                  var n = Array.prototype.slice.call(arguments, 1);
                  return function () {
                    var e = n.slice();
                    return e.push.apply(e, arguments), t.apply(this, e);
                  };
                }(he, e);

              case 9:
                return t(e.documentElement);

              case 11:
              case 10:
              case 6:
              case 12:
                return pe;

              default:
                return e.parentNode ? t(e.parentNode) : pe;
            }
          }(t);
        }

        function ge(t, n) {
          var r = t || e,
              o = r.Document && r.Document.prototype || r.document;
          o.evaluate && !n || (r.XPathResult = ye, o.evaluate = function (t, e, n, r) {
            return new de(t, n).evaluate(e, r);
          }, o.createExpression = function (t, e) {
            return new de(t, e);
          }, o.createNSResolver = function (t) {
            return new be(t);
          });
        }

        a(te), te.prototype.a = function (t) {
          return -lt(this.c, t);
        }, te.prototype.toString = function () {
          return "Unary Expression: -" + st(this.c);
        }, a(ee), ee.prototype.a = function () {
          return this.c;
        }, ee.prototype.toString = function () {
          return "Number: " + this.c;
        }, ye.ANY_TYPE = 0, ye.NUMBER_TYPE = 1, ye.STRING_TYPE = 2, ye.BOOLEAN_TYPE = 3, ye.UNORDERED_NODE_ITERATOR_TYPE = 4, ye.ORDERED_NODE_ITERATOR_TYPE = 5, ye.UNORDERED_NODE_SNAPSHOT_TYPE = 6, ye.ORDERED_NODE_SNAPSHOT_TYPE = 7, ye.ANY_UNORDERED_NODE_TYPE = 8, ye.FIRST_ORDERED_NODE_TYPE = 9;
        var me,
            ve = ["wgxpath", "install"],
            we = e;
        ve[0] in we || !we.execScript || we.execScript("var " + ve[0]);

        for (; ve.length && (me = ve.shift());) {
          ve.length || void 0 === ge ? we = we[me] ? we[me] : we[me] = {} : we[me] = ge;
        }

        t.exports.install = ge, t.exports.XPathResultType = {
          ANY_TYPE: 0,
          NUMBER_TYPE: 1,
          STRING_TYPE: 2,
          BOOLEAN_TYPE: 3,
          UNORDERED_NODE_ITERATOR_TYPE: 4,
          ORDERED_NODE_ITERATOR_TYPE: 5,
          UNORDERED_NODE_SNAPSHOT_TYPE: 6,
          ORDERED_NODE_SNAPSHOT_TYPE: 7,
          ANY_UNORDERED_NODE_TYPE: 8,
          FIRST_ORDERED_NODE_TYPE: 9
        };
      }).call(e);
    }).call(this, n(25));
  },
  312: function _(t, e) {
    t.exports = window.lodash.isArray;
  },
  37: function _(t, e) {
    function n(e, r) {
      return t.exports = n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n(e, r);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  4: function _(t, e) {
    t.exports = window.yoast.styledComponents;
  },
  475: function _(t, e) {
    !function (t) {
      "use strict";

      if (!t.fetch) {
        var e = "URLSearchParams" in t,
            n = "Symbol" in t && "iterator" in Symbol,
            r = "FileReader" in t && "Blob" in t && function () {
          try {
            return new Blob(), !0;
          } catch (t) {
            return !1;
          }
        }(),
            o = "FormData" in t,
            i = "ArrayBuffer" in t;

        if (i) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            u = function u(t) {
          return t && DataView.prototype.isPrototypeOf(t);
        },
            s = ArrayBuffer.isView || function (t) {
          return t && a.indexOf(Object.prototype.toString.call(t)) > -1;
        };
        d.prototype.append = function (t, e) {
          t = l(t), e = p(e);
          var n = this.map[t];
          n || (n = [], this.map[t] = n), n.push(e);
        }, d.prototype["delete"] = function (t) {
          delete this.map[l(t)];
        }, d.prototype.get = function (t) {
          var e = this.map[l(t)];
          return e ? e[0] : null;
        }, d.prototype.getAll = function (t) {
          return this.map[l(t)] || [];
        }, d.prototype.has = function (t) {
          return this.map.hasOwnProperty(l(t));
        }, d.prototype.set = function (t, e) {
          this.map[l(t)] = [p(e)];
        }, d.prototype.forEach = function (t, e) {
          Object.getOwnPropertyNames(this.map).forEach(function (n) {
            this.map[n].forEach(function (r) {
              t.call(e, r, n, this);
            }, this);
          }, this);
        }, d.prototype.keys = function () {
          var t = [];
          return this.forEach(function (e, n) {
            t.push(n);
          }), h(t);
        }, d.prototype.values = function () {
          var t = [];
          return this.forEach(function (e) {
            t.push(e);
          }), h(t);
        }, d.prototype.entries = function () {
          var t = [];
          return this.forEach(function (e, n) {
            t.push([n, e]);
          }), h(t);
        }, n && (d.prototype[Symbol.iterator] = d.prototype.entries);
        var c = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        w.prototype.clone = function () {
          return new w(this, {
            body: this._bodyInit
          });
        }, v.call(w.prototype), v.call(E.prototype), E.prototype.clone = function () {
          return new E(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new d(this.headers),
            url: this.url
          });
        }, E.error = function () {
          var t = new E(null, {
            status: 0,
            statusText: ""
          });
          return t.type = "error", t;
        };
        var f = [301, 302, 303, 307, 308];
        E.redirect = function (t, e) {
          if (-1 === f.indexOf(e)) throw new RangeError("Invalid status code");
          return new E(null, {
            status: e,
            headers: {
              location: t
            }
          });
        }, t.Headers = d, t.Request = w, t.Response = E, t.fetch = function (t, e) {
          return new Promise(function (n, o) {
            var i = new w(t, e),
                a = new XMLHttpRequest();
            a.onload = function () {
              var t,
                  e,
                  r = {
                status: a.status,
                statusText: a.statusText,
                headers: (t = a.getAllResponseHeaders() || "", e = new d(), t.split("\r\n").forEach(function (t) {
                  var n = t.split(":"),
                      r = n.shift().trim();

                  if (r) {
                    var o = n.join(":").trim();
                    e.append(r, o);
                  }
                }), e)
              };
              r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
              var o = "response" in a ? a.response : a.responseText;
              n(new E(o, r));
            }, a.onerror = function () {
              o(new TypeError("Network request failed"));
            }, a.ontimeout = function () {
              o(new TypeError("Network request failed"));
            }, a.open(i.method, i.url, !0), "include" === i.credentials && (a.withCredentials = !0), "responseType" in a && r && (a.responseType = "blob"), i.headers.forEach(function (t, e) {
              a.setRequestHeader(e, t);
            }), a.send(void 0 === i._bodyInit ? null : i._bodyInit);
          });
        }, t.fetch.polyfill = !0;
      }

      function l(t) {
        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
        return t.toLowerCase();
      }

      function p(t) {
        return "string" != typeof t && (t = String(t)), t;
      }

      function h(t) {
        var e = {
          next: function next() {
            var e = t.shift();
            return {
              done: void 0 === e,
              value: e
            };
          }
        };
        return n && (e[Symbol.iterator] = function () {
          return e;
        }), e;
      }

      function d(t) {
        this.map = {}, t instanceof d ? t.forEach(function (t, e) {
          this.append(e, t);
        }, this) : t && Object.getOwnPropertyNames(t).forEach(function (e) {
          this.append(e, t[e]);
        }, this);
      }

      function y(t) {
        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
        t.bodyUsed = !0;
      }

      function b(t) {
        return new Promise(function (e, n) {
          t.onload = function () {
            e(t.result);
          }, t.onerror = function () {
            n(t.error);
          };
        });
      }

      function g(t) {
        var e = new FileReader(),
            n = b(e);
        return e.readAsArrayBuffer(t), n;
      }

      function m(t) {
        if (t.slice) return t.slice(0);
        var e = new Uint8Array(t.byteLength);
        return e.set(new Uint8Array(t)), e.buffer;
      }

      function v() {
        return this.bodyUsed = !1, this._initBody = function (t) {
          if (this._bodyInit = t, t) {
            if ("string" == typeof t) this._bodyText = t;else if (r && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;else if (o && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();else if (i && r && u(t)) this._bodyArrayBuffer = m(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);else {
              if (!i || !ArrayBuffer.prototype.isPrototypeOf(t) && !s(t)) throw new Error("unsupported BodyInit type");
              this._bodyArrayBuffer = m(t);
            }
          } else this._bodyText = "";
          this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, r && (this.blob = function () {
          var t = y(this);
          if (t) return t;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function () {
          return this._bodyArrayBuffer ? y(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g);
        }), this.text = function () {
          var t,
              e,
              n,
              r = y(this);
          if (r) return r;
          if (this._bodyBlob) return t = this._bodyBlob, n = b(e = new FileReader()), e.readAsText(t), n;
          if (this._bodyArrayBuffer) return Promise.resolve(function (t) {
            for (var e = new Uint8Array(t), n = new Array(e.length), r = 0; r < e.length; r++) {
              n[r] = String.fromCharCode(e[r]);
            }

            return n.join("");
          }(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, o && (this.formData = function () {
          return this.text().then(x);
        }), this.json = function () {
          return this.text().then(JSON.parse);
        }, this;
      }

      function w(t, e) {
        var n,
            r,
            o = (e = e || {}).body;
        if ("string" == typeof t) this.url = t;else {
          if (t.bodyUsed) throw new TypeError("Already read");
          this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new d(t.headers)), this.method = t.method, this.mode = t.mode, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0);
        }
        if (this.credentials = e.credentials || this.credentials || "omit", !e.headers && this.headers || (this.headers = new d(e.headers)), this.method = (r = (n = e.method || this.method || "GET").toUpperCase(), c.indexOf(r) > -1 ? r : n), this.mode = e.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");

        this._initBody(o);
      }

      function x(t) {
        var e = new FormData();
        return t.trim().split("&").forEach(function (t) {
          if (t) {
            var n = t.split("="),
                r = n.shift().replace(/\+/g, " "),
                o = n.join("=").replace(/\+/g, " ");
            e.append(decodeURIComponent(r), decodeURIComponent(o));
          }
        }), e;
      }

      function E(t, e) {
        e || (e = {}), this.type = "default", this.status = "status" in e ? e.status : 200, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new d(e.headers), this.url = e.url || "", this._initBody(t);
      }
    }("undefined" != typeof self ? self : this);
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
  7: function _(t, e) {
    function n(e) {
      return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n(e);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  739: function _(t, e, n) {
    "use strict";

    n.r(e), n.d(e, "createSvgIconComponent", function () {
      return G;
    }), n.d(e, "getDirectionalStyle", function () {
      return o;
    }), n.d(e, "sendRequest", function () {
      return a;
    }), n.d(e, "decodeHTML", function () {
      return u;
    }), n.d(e, "getPostFeed", function () {
      return l;
    }), n.d(e, "getCourseFeed", function () {
      return m;
    }), n.d(e, "getFeed", function () {
      return b;
    }), n.d(e, "getWordBoundaries", function () {
      return $;
    }), n.d(e, "strings", function () {
      return r;
    }), n.d(e, "join", function () {
      return lt;
    }), n.d(e, "makeOutboundLink", function () {
      return mt;
    }), n.d(e, "validateFacebookImage", function () {
      return wt;
    }), n.d(e, "validateTwitterImage", function () {
      return xt;
    }), n.d(e, "curryUpdateToHiddenInput", function () {
      return _t;
    }), n.d(e, "getValueFromHiddenInput", function () {
      return Tt;
    });
    var r = {};

    function o(t, e) {
      return function (n) {
        return n.theme.isRtl ? e : t;
      };
    }

    n.r(r), n.d(r, "stripHTMLTags", function () {
      return ft;
    }), n.d(r, "stripSpaces", function () {
      return X;
    }), n(475);

    var i = function i(t, e) {
      var n = function (t, e) {
        for (var n in e) {
          e.hasOwnProperty(n) && (void 0 !== t[n] && "" !== t[n] || (t[n] = e[n]));
        }

        return t;
      }(t, {
        dataType: "json",
        method: "POST",
        contentType: "application/json"
      });

      return void 0 === n.headers && "" === n.headers || function (t, e) {
        "jquery" === t && Object.assign(e, {
          beforeSend: function beforeSend(t) {
            jQuery.each(e.headers, function (e, n) {
              t.setRequestHeader(e, n);
            });
          }
        }), "fetch" === t && "json" === e.dataType && Object.assign(e.headers, {
          Accepts: "application/json",
          "Content-Type": "application/json"
        });
      }(e, n), "json" === n.dataType && (n.data = JSON.stringify(n.data)), "fetch" === e && Object.assign(n, {
        body: n.data
      }), n;
    },
        a = function a(t, e) {
      return "undefined" != typeof jQuery && jQuery && jQuery.ajax ? function (t, e) {
        return Object.assign(e, {
          url: t
        }), new Promise(function (t, n) {
          jQuery.ajax(e).done(function (e) {
            t(e);
          }).fail(function () {
            n("Wrong request");
          });
        });
      }(t, i(e, "jquery")) : function (t, e) {
        var n = fetch(t, e);
        return new Promise(function (t, e) {
          n.then(function (n) {
            return 200 === n.status ? t(n.json()) : e("Response status is not 200");
          })["catch"](function () {
            return e("Wrong request");
          });
        });
      }(t, i(e, "fetch"));
    },
        u = function u(t) {
      var e = document.createElement("textarea");
      return e.innerHTML = t, e.value;
    },
        s = n(311),
        c = n.n(s);

    function f(t, e, n) {
      var r = {};
      return r.title = p("child::title", t, e), r.link = p("child::link", t, e), r.content = p("child::content:encoded", t, e, n), r.description = p("child::description", t, e), r.creator = p("child::dc:creator", t, e, n), r.date = p("child::pubDate", t, e), r;
    }

    function l(t, e) {
      return b(t, e, f);
    }

    function p(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          o = e.evaluate("count(" + t + ")", n || e, r, XPathResult.ANY_TYPE, null).numberValue;

      if (0 !== o) {
        var i = e.evaluate(t, n || e, r, XPathResult.STRING_TYPE, null);
        return i.stringValue ? i.stringValue : null;
      }
    }

    function h(t) {
      var e = {};
      return e.title = p("/rss/channel/title", t), e.description = p("/rss/channel/description", t), e.link = p("/rss/channel/link", t), e;
    }

    function d(t, e, n, r) {
      var o = function (t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return e.evaluate(t, n || e, r, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      }("/rss/channel/item", t),
          i = o.snapshotLength,
          a = [];

      0 !== n && (i = Math.min(i, n));

      for (var u = 0; u < i; u++) {
        var s = o.snapshotItem(u);
        a.push(r(t, s, e));
      }

      return a;
    }

    function y(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
      return new Promise(function (r, o) {
        try {
          "evaluate" in document == 0 && c.a.install();
          var i = new DOMParser().parseFromString(t, "application/xml"),
              a = i.createNSResolver(i.documentElement),
              u = h(i);
          u.items = d(i, a, e, n), r(u);
        } catch (t) {
          o(t);
        }
      });
    }

    function b(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
      return fetch(t).then(function (t) {
        return t.text();
      }).then(function (t) {
        return y(t, e, n);
      });
    }

    function g(t, e, n) {
      var r = {};
      return r.id = p("child::content:slug", t, e, n), r.title = p("child::title", t, e), r.link = p("child::link", t, e), r.content = p("child::content:encoded", t, e, n), r.image = p("child::content:image", t, e, n), r.ctaButtonCopy = p("child::content:cta_button_copy", t, e, n), r.ctaButtonType = p("child::content:cta_button_type", t, e, n), r.ctaButtonUrl = p("child::content:cta_button_url", t, e, n), r.readMoreLinkText = p("child::content:read_more_link_text", t, e, n), r.isFree = p("child::content:is_free", t, e, n), r.isBundle = p("child::content:is_bundle", t, e, n), r;
    }

    function m(t, e) {
      return b(t, e, g);
    }

    var v,
        w = n(17),
        x = n.n(w),
        E = n(8),
        _ = n.n(E),
        T = n(9),
        O = n.n(T),
        N = n(11),
        j = n.n(N),
        R = n(12),
        P = n.n(R),
        S = n(7),
        A = n.n(S),
        B = n(5),
        D = n.n(B),
        I = n(1),
        k = n(0),
        M = n.n(k),
        U = n(3),
        C = n.n(U),
        F = n(4),
        L = n.n(F),
        Y = n(312),
        H = n.n(Y);

    var q = L.a.svg(v || (v = D()(["\n\twidth: ", ";\n\theight: ", ";\n\tflex: none;\n"])), function (t) {
      return t.size;
    }, function (t) {
      return t.size;
    }),
        V = function (t) {
      j()(o, t);
      var e,
          n,
          r = (e = o, n = function () {
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
            r = A()(e);

        if (n) {
          var o = A()(this).constructor;
          t = Reflect.construct(r, arguments, o);
        } else t = r.apply(this, arguments);

        return P()(this, t);
      });

      function o() {
        return _()(this, o), r.apply(this, arguments);
      }

      return O()(o, [{
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.iconSet,
              n = t.icon,
              r = t.className,
              o = t.color,
              i = t.size,
              a = e[n];
          if (!a) return console.warn('Invalid icon name ("'.concat(n, '") passed to the SvgIcon component.')), null;
          var u = a.path,
              s = a.viewbox,
              c = ["yoast-svg-icon", "yoast-svg-icon-" + n, r].filter(Boolean).join(" "),
              f = a.CustomComponent ? a.CustomComponent : q;
          return Object(I.createElement)(f, {
            "aria-hidden": !0,
            role: "img",
            focusable: "false",
            size: i,
            className: c,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: s,
            fill: o
          }, H()(u) ? u : Object(I.createElement)("path", {
            d: u
          }));
        }
      }]), o;
    }(C.a.Component);

    V.propTypes = {
      icon: M.a.string.isRequired,
      iconSet: M.a.object.isRequired,
      color: M.a.string,
      size: M.a.string,
      className: M.a.string
    }, V.defaultProps = {
      size: "16px",
      color: "currentColor",
      className: ""
    };

    var z,
        G = function G(t) {
      var e = function e(_e) {
        return Object(I.createElement)(V, x()({}, _e, {
          iconSet: t
        }));
      };

      return e.propTypes = {
        icon: M.a.string.isRequired,
        color: M.a.string,
        size: M.a.string,
        className: M.a.string
      }, e.defaultProps = {
        size: "16px",
        color: "currentColor",
        className: ""
      }, e;
    },
        $ = function $() {
      return [" ", "\\n", "\\r", "\\t", " ", " ", ".", ",", "'", "(", ")", '"', "+", "-", ";", "!", "?", ":", "/", "»", "«", "‹", "›", "<", ">"];
    },
        X = function X(t) {
      return (t = (t = t.replace(/\s{2,}/g, " ")).replace(/\s\./g, ".")).replace(/^\s+|\s+$/g, "");
    },
        W = n(86),
        Q = n.n(W),
        J = n(2),
        K = ["address", "article", "aside", "blockquote", "canvas", "dd", "div", "dl", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "section", "table", "tfoot", "ul", "video"],
        Z = ["b", "big", "i", "small", "tt", "abbr", "acronym", "cite", "code", "dfn", "em", "kbd", "strong", "samp", "time", "var", "a", "bdo", "br", "img", "map", "object", "q", "script", "span", "sub", "sup", "button", "input", "label", "select", "textarea"],
        tt = (new RegExp("^(" + K.join("|") + ")$", "i"), new RegExp("^(" + Z.join("|") + ")$", "i"), new RegExp("^<(" + K.join("|") + ")[^>]*?>$", "i")),
        et = new RegExp("^</(" + K.join("|") + ")[^>]*?>$", "i"),
        nt = new RegExp("^<(" + Z.join("|") + ")[^>]*>$", "i"),
        rt = new RegExp("^</(" + Z.join("|") + ")[^>]*>$", "i"),
        ot = /^<([^>\s/]+)[^>]*>$/,
        it = /^<\/([^>\s]+)[^>]*>$/,
        at = /^[^<]+$/,
        ut = /^<[^><]*$/,
        st = /<!--(.|[\r\n])*?-->/g,
        ct = [];

    Object(J.memoize)(function (t) {
      var e = [],
          n = 0,
          r = "",
          o = "",
          i = "";
      return t = t.replace(st, ""), ct = [], (z = Q()(function (t) {
        ct.push(t);
      })).addRule(at, "content"), z.addRule(ut, "greater-than-sign-content"), z.addRule(tt, "block-start"), z.addRule(et, "block-end"), z.addRule(nt, "inline-start"), z.addRule(rt, "inline-end"), z.addRule(ot, "other-element-start"), z.addRule(it, "other-element-end"), z.onText(t), z.end(), Object(J.forEach)(ct, function (t, a) {
        var u = ct[a + 1];

        switch (t.type) {
          case "content":
          case "greater-than-sign-content":
          case "inline-start":
          case "inline-end":
          case "other-tag":
          case "other-element-start":
          case "other-element-end":
          case "greater than sign":
            u && (0 !== n || "block-start" !== u.type && "block-end" !== u.type) ? o += t.src : (o += t.src, e.push(o), r = "", o = "", i = "");
            break;

          case "block-start":
            0 !== n && ("" !== o.trim() && e.push(o), o = "", i = ""), n++, r = t.src;
            break;

          case "block-end":
            n--, i = t.src, "" !== r && "" !== i ? e.push(r + o + i) : "" !== o.trim() && e.push(o), r = "", o = "", i = "";
        }

        n < 0 && (n = 0);
      }), e;
    }), new RegExp("^<(" + K.join("|") + ")[^>]*?>", "i"), new RegExp("</(" + K.join("|") + ")[^>]*?>$", "i");

    var ft = function ft(t) {
      return t = t.replace(/(<([^>]+)>)/gi, " "), X(t);
    };

    function lt(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
      return t.filter(Boolean).join(e);
    }

    var pt,
        ht = n(15),
        dt = n.n(ht),
        yt = n(10),
        bt = L.a.span(pt || (pt = D()(["\n\tborder: 0;\n\tclip: rect(1px, 1px, 1px, 1px);\n\tclip-path: inset(50%);\n\theight: 1px;\n\tmargin: -1px;\n\toverflow: hidden;\n\tpadding: 0;\n\tposition: absolute !important;\n\twidth: 1px;\n\tword-wrap: normal !important;\n\t// Safari+VoiceOver bug see PR 308 and My Yoast issues 445, 712 and PR 715.\n\ttransform: translateY(1em);\n"])));

    function gt(t) {
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
            r = A()(t);

        if (e) {
          var o = A()(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);

        return P()(this, n);
      };
    }

    var mt = function mt() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a",
          e = function (e) {
        j()(r, e);
        var n = gt(r);

        function r(t) {
          var e;
          return _()(this, r), (e = n.call(this, t)).isYoastLink = e.isYoastLink.bind(dt()(e)), e;
        }

        return O()(r, [{
          key: "isYoastLink",
          value: function value(t) {
            return /yoast\.com|yoast\.test|yoa\.st/.test(t);
          }
        }, {
          key: "render",
          value: function value() {
            if (!this.props.href) return null;
            var e = this.isYoastLink(this.props.href),
                n = Object.assign({}, this.props, {
              target: "_blank",
              rel: e ? this.props.rel : "noopener"
            });
            return C.a.createElement(t, n, this.props.children, C.a.createElement(bt, null, Object(yt.__)("(Opens in a new browser tab)", "yoast-components")));
          }
        }]), r;
      }(C.a.Component);

      return e.propTypes = {
        children: M.a.oneOfType([M.a.node]),
        href: M.a.string,
        rel: M.a.string
      }, e.defaultProps = {
        children: null,
        href: null,
        rel: null
      }, e;
    },
        vt = function vt(t) {
      return function (e) {
        return t.map(function (t) {
          return t(e);
        }).filter(function (t) {
          return !0 !== t;
        });
      };
    },
        wt = vt([function (t) {
      var e = t.width,
          n = t.height,
          r = Object(yt.sprintf)(
      /* Translators: %d expands to the minimum width, %d expands to the minimum hight */
      Object(yt.__)("Your image dimensions are not suitable. The minimum dimensions are %dx%d pixels.", "yoast-components"), 200, 200);
      return !(e < 200 || n < 200) || r;
    }, function (t) {
      var e = t.type,
          n = Object(yt.sprintf)(
      /* Translators: %s expands to the jpg format, %s expands to the png format, %s expands to the gif format. */
      Object(yt.__)("The format of the uploaded image is not supported. The supported formats are: %s, %s and %s.", "yoast-components"), "JPG", "PNG", "GIF");
      return !!["jpg", "png", "gif", "jpeg"].includes(e) || n;
    }]),
        xt = vt([function (t, e) {
      var n = t.width,
          r = t.height,
          o = Object(yt.__)("Your image dimensions are not suitable. The minimum dimensions are %dx%d pixels. The maximum dimensions are %dx%d pixels.", "yoast-components"),
          i = n > 4096 || r > 4096;
      /* Translators: %d expands to the minimum width, %d expands to the minimum height,
        %d expands to the maximum width, %d expands to the maximum height. */

      return e && (n < 300 || r < 157 || i) ? Object(yt.sprintf)(o, 300, 157, 4096, 4096) : !(n < 200 || r < 200 || i) || Object(yt.sprintf)(o, 200, 200, 4096, 4096);
    }, function (t) {
      var e = t.type,
          n = Object(yt.sprintf)(
      /* Translators: %s expands to the gif format, %s expands to the gif format. */
      Object(yt.__)("You have uploaded a %s. Please note that, if it’s an animated %s, only the first frame will be used.", "yoast-components"), "GIF", "GIF"),
          r = Object(yt.sprintf)(
      /* Translators: %s expands to the jpg format, %s expands to the png format, %s expands to the gif format. */
      Object(yt.__)("The format of the uploaded image is not supported. The supported formats are: %s, %s, %s and %s.", "yoast-components"), "JPG", "PNG", "WEBP", "GIF");
      return !!["jpg", "jpeg", "png", "webp"].includes(e) || ("gif" === e ? n : r);
    }, function (t) {
      var e = t.bytes,
          n = Object(yt.sprintf)(
      /* Translators: %s expands to Twitter, %s expands to the 5MB size. */
      Object(yt.__)("The file size of the uploaded image is too large for %s. File size must be less than %s.", "yoast-components"), "Twitter", "5MB");
      return !(e >= 5) || n;
    }]),
        Et = function Et(t) {
      return document.querySelector(t);
    },
        _t = function _t(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      return function (n) {
        var r = Et(t);

        if (r) {
          var o = Array.isArray(n) ? n.join(",") : n;
          r.value = o;
        }

        e && e(n);
      };
    },
        Tt = function Tt(t) {
      var e = Et(t);
      return e ? e.value : null;
    };
  },
  8: function _(t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  86: function _(t, e) {
    var n = function n(t, e) {
      var n;

      for (n = 0; n < t.length; n++) {
        if (t[n].regex.test(e)) return t[n];
      }
    },
        r = function r(t, e) {
      var r, o, i;

      for (r = 0; r < e.length; r++) {
        if (o = n(t, e.substring(0, r + 1))) i = o;else if (i) return {
          max_index: r,
          rule: i
        };
      }

      return i ? {
        max_index: e.length,
        rule: i
      } : void 0;
    };

    t.exports = function (t) {
      var e = "",
          o = [],
          i = 1,
          a = 1,
          u = function u(e, n) {
        t({
          type: n,
          src: e,
          line: i,
          col: a
        });
        var r = e.split("\n");
        i += r.length - 1, a = (r.length > 1 ? 1 : a) + r[r.length - 1].length;
      };

      return {
        addRule: function addRule(t, e) {
          o.push({
            regex: t,
            type: e
          });
        },
        onText: function onText(t) {
          for (var n = e + t, i = r(o, n); i && i.max_index !== n.length;) {
            u(n.substring(0, i.max_index), i.rule.type), n = n.substring(i.max_index), i = r(o, n);
          }

          e = n;
        },
        end: function end() {
          if (0 !== e.length) {
            var t = n(o, e);

            if (!t) {
              var r = new Error("unable to tokenize");
              throw r.tokenizer2 = {
                buffer: e,
                line: i,
                col: a
              }, r;
            }

            u(e, t.type);
          }
        }
      };
    };
  },
  9: function _(t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
      }
    }

    t.exports = function (t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  }
});