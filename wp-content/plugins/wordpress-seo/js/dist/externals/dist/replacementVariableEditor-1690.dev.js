"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.replacementVariableEditor = function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var i = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
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
    }), 2 & e && "string" != typeof t) for (var i in t) {
      n.d(r, i, function (e) {
        return t[e];
      }.bind(null, i));
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
  }, n.p = "", n(n.s = 741);
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
  100: function _(t, e) {
    t.exports = window.lodash.filter;
  },
  101: function _(t, e) {
    t.exports = window.lodash.includes;
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
        i = n(15);
    t.exports = function (t, e) {
      return !e || "object" !== r(e) && "function" != typeof e ? i(t) : e;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  122: function _(t, e) {
    t.exports = window.lodash.isEmpty;
  },
  124: function _(t, e) {
    t.exports = window.lodash.debounce;
  },
  126: function _(t, e, n) {
    t.exports = function () {
      "use strict";

      var t = Array.prototype.slice;

      function e(t, e) {
        e && (t.prototype = Object.create(e.prototype)), t.prototype.constructor = t;
      }

      function n(t) {
        return u(t) ? t : U(t);
      }

      function r(t) {
        return a(t) ? t : V(t);
      }

      function i(t) {
        return s(t) ? t : W(t);
      }

      function o(t) {
        return u(t) && !c(t) ? t : N(t);
      }

      function u(t) {
        return !(!t || !t[l]);
      }

      function a(t) {
        return !(!t || !t[h]);
      }

      function s(t) {
        return !(!t || !t[p]);
      }

      function c(t) {
        return a(t) || s(t);
      }

      function f(t) {
        return !(!t || !t[d]);
      }

      e(r, n), e(i, n), e(o, n), n.isIterable = u, n.isKeyed = a, n.isIndexed = s, n.isAssociative = c, n.isOrdered = f, n.Keyed = r, n.Indexed = i, n.Set = o;
      var l = "@@__IMMUTABLE_ITERABLE__@@",
          h = "@@__IMMUTABLE_KEYED__@@",
          p = "@@__IMMUTABLE_INDEXED__@@",
          d = "@@__IMMUTABLE_ORDERED__@@",
          _ = {},
          v = {
        value: !1
      },
          y = {
        value: !1
      };

      function g(t) {
        return t.value = !1, t;
      }

      function m(t) {
        t && (t.value = !0);
      }

      function b() {}

      function w(t, e) {
        e = e || 0;

        for (var n = Math.max(0, t.length - e), r = new Array(n), i = 0; i < n; i++) {
          r[i] = t[i + e];
        }

        return r;
      }

      function S(t) {
        return void 0 === t.size && (t.size = t.__iterate(E)), t.size;
      }

      function O(t, e) {
        if ("number" != typeof e) {
          var n = e >>> 0;
          if ("" + n !== e || 4294967295 === n) return NaN;
          e = n;
        }

        return e < 0 ? S(t) + e : e;
      }

      function E() {
        return !0;
      }

      function x(t, e, n) {
        return (0 === t || void 0 !== n && t <= -n) && (void 0 === e || void 0 !== n && e >= n);
      }

      function I(t, e) {
        return z(t, e, 0);
      }

      function M(t, e) {
        return z(t, e, e);
      }

      function z(t, e, n) {
        return void 0 === t ? n : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t);
      }

      var k,
          D,
          j,
          C = "function" == typeof Symbol && Symbol.iterator,
          P = C || "@@iterator";

      function R(t) {
        this.next = t;
      }

      function A(t, e, n, r) {
        var i = 0 === t ? e : 1 === t ? n : [e, n];
        return r ? r.value = i : r = {
          value: i,
          done: !1
        }, r;
      }

      function q() {
        return {
          value: void 0,
          done: !0
        };
      }

      function B(t) {
        return !!F(t);
      }

      function T(t) {
        return t && "function" == typeof t.next;
      }

      function K(t) {
        var e = F(t);
        return e && e.call(t);
      }

      function F(t) {
        var e = t && (C && t[C] || t["@@iterator"]);
        if ("function" == typeof e) return e;
      }

      function L(t) {
        return t && "number" == typeof t.length;
      }

      function U(t) {
        return null == t ? Q() : u(t) ? t.toSeq() : function (t) {
          var e = tt(t) || "object" == _typeof(t) && new J(t);
          if (!e) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
          return e;
        }(t);
      }

      function V(t) {
        return null == t ? Q().toKeyedSeq() : u(t) ? a(t) ? t.toSeq() : t.fromEntrySeq() : X(t);
      }

      function W(t) {
        return null == t ? Q() : u(t) ? a(t) ? t.entrySeq() : t.toIndexedSeq() : Z(t);
      }

      function N(t) {
        return (null == t ? Q() : u(t) ? a(t) ? t.entrySeq() : t : Z(t)).toSetSeq();
      }

      function H(t) {
        this._array = t, this.size = t.length;
      }

      function J(t) {
        var e = Object.keys(t);
        this._object = t, this._keys = e, this.size = e.length;
      }

      function $(t) {
        this._iterable = t, this.size = t.length || t.size;
      }

      function G(t) {
        this._iterator = t, this._iteratorCache = [];
      }

      function Y(t) {
        return !(!t || !t["@@__IMMUTABLE_SEQ__@@"]);
      }

      function Q() {
        return k || (k = new H([]));
      }

      function X(t) {
        var e = Array.isArray(t) ? new H(t).fromEntrySeq() : T(t) ? new G(t).fromEntrySeq() : B(t) ? new $(t).fromEntrySeq() : "object" == _typeof(t) ? new J(t) : void 0;
        if (!e) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
        return e;
      }

      function Z(t) {
        var e = tt(t);
        if (!e) throw new TypeError("Expected Array or iterable object of values: " + t);
        return e;
      }

      function tt(t) {
        return L(t) ? new H(t) : T(t) ? new G(t) : B(t) ? new $(t) : void 0;
      }

      function et(t, e, n, r) {
        var i = t._cache;

        if (i) {
          for (var o = i.length - 1, u = 0; u <= o; u++) {
            var a = i[n ? o - u : u];
            if (!1 === e(a[1], r ? a[0] : u, t)) return u + 1;
          }

          return u;
        }

        return t.__iterateUncached(e, n);
      }

      function nt(t, e, n, r) {
        var i = t._cache;

        if (i) {
          var o = i.length - 1,
              u = 0;
          return new R(function () {
            var t = i[n ? o - u : u];
            return u++ > o ? {
              value: void 0,
              done: !0
            } : A(e, r ? t[0] : u - 1, t[1]);
          });
        }

        return t.__iteratorUncached(e, n);
      }

      function rt(t, e) {
        return e ? function t(e, n, r, i) {
          return Array.isArray(n) ? e.call(i, r, W(n).map(function (r, i) {
            return t(e, r, i, n);
          })) : ot(n) ? e.call(i, r, V(n).map(function (r, i) {
            return t(e, r, i, n);
          })) : n;
        }(e, t, "", {
          "": t
        }) : it(t);
      }

      function it(t) {
        return Array.isArray(t) ? W(t).map(it).toList() : ot(t) ? V(t).map(it).toMap() : t;
      }

      function ot(t) {
        return t && (t.constructor === Object || void 0 === t.constructor);
      }

      function ut(t, e) {
        if (t === e || t != t && e != e) return !0;
        if (!t || !e) return !1;

        if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
          if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e) return !0;
          if (!t || !e) return !1;
        }

        return !("function" != typeof t.equals || "function" != typeof e.equals || !t.equals(e));
      }

      function at(t, e) {
        if (t === e) return !0;
        if (!u(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || a(t) !== a(e) || s(t) !== s(e) || f(t) !== f(e)) return !1;
        if (0 === t.size && 0 === e.size) return !0;
        var n = !c(t);

        if (f(t)) {
          var r = t.entries();
          return e.every(function (t, e) {
            var i = r.next().value;
            return i && ut(i[1], t) && (n || ut(i[0], e));
          }) && r.next().done;
        }

        var i = !1;
        if (void 0 === t.size) if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();else {
          i = !0;
          var o = t;
          t = e, e = o;
        }

        var l = !0,
            h = e.__iterate(function (e, r) {
          if (n ? !t.has(e) : i ? !ut(e, t.get(r, _)) : !ut(t.get(r, _), e)) return l = !1, !1;
        });

        return l && t.size === h;
      }

      function st(t, e) {
        if (!(this instanceof st)) return new st(t, e);

        if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
          if (D) return D;
          D = this;
        }
      }

      function ct(t, e) {
        if (!t) throw new Error(e);
      }

      function ft(t, e, n) {
        if (!(this instanceof ft)) return new ft(t, e, n);

        if (ct(0 !== n, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), e < t && (n = -n), this._start = t, this._end = e, this._step = n, this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1), 0 === this.size) {
          if (j) return j;
          j = this;
        }
      }

      function lt() {
        throw TypeError("Abstract");
      }

      function ht() {}

      function pt() {}

      function dt() {}

      R.prototype.toString = function () {
        return "[Iterator]";
      }, R.KEYS = 0, R.VALUES = 1, R.ENTRIES = 2, R.prototype.inspect = R.prototype.toSource = function () {
        return this.toString();
      }, R.prototype[P] = function () {
        return this;
      }, e(U, n), U.of = function () {
        return U(arguments);
      }, U.prototype.toSeq = function () {
        return this;
      }, U.prototype.toString = function () {
        return this.__toString("Seq {", "}");
      }, U.prototype.cacheResult = function () {
        return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this;
      }, U.prototype.__iterate = function (t, e) {
        return et(this, t, e, !0);
      }, U.prototype.__iterator = function (t, e) {
        return nt(this, t, e, !0);
      }, e(V, U), V.prototype.toKeyedSeq = function () {
        return this;
      }, e(W, U), W.of = function () {
        return W(arguments);
      }, W.prototype.toIndexedSeq = function () {
        return this;
      }, W.prototype.toString = function () {
        return this.__toString("Seq [", "]");
      }, W.prototype.__iterate = function (t, e) {
        return et(this, t, e, !1);
      }, W.prototype.__iterator = function (t, e) {
        return nt(this, t, e, !1);
      }, e(N, U), N.of = function () {
        return N(arguments);
      }, N.prototype.toSetSeq = function () {
        return this;
      }, U.isSeq = Y, U.Keyed = V, U.Set = N, U.Indexed = W, U.prototype["@@__IMMUTABLE_SEQ__@@"] = !0, e(H, W), H.prototype.get = function (t, e) {
        return this.has(t) ? this._array[O(this, t)] : e;
      }, H.prototype.__iterate = function (t, e) {
        for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++) {
          if (!1 === t(n[e ? r - i : i], i, this)) return i + 1;
        }

        return i;
      }, H.prototype.__iterator = function (t, e) {
        var n = this._array,
            r = n.length - 1,
            i = 0;
        return new R(function () {
          return i > r ? {
            value: void 0,
            done: !0
          } : A(t, i, n[e ? r - i++ : i++]);
        });
      }, e(J, V), J.prototype.get = function (t, e) {
        return void 0 === e || this.has(t) ? this._object[t] : e;
      }, J.prototype.has = function (t) {
        return this._object.hasOwnProperty(t);
      }, J.prototype.__iterate = function (t, e) {
        for (var n = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
          var u = r[e ? i - o : o];
          if (!1 === t(n[u], u, this)) return o + 1;
        }

        return o;
      }, J.prototype.__iterator = function (t, e) {
        var n = this._object,
            r = this._keys,
            i = r.length - 1,
            o = 0;
        return new R(function () {
          var u = r[e ? i - o : o];
          return o++ > i ? {
            value: void 0,
            done: !0
          } : A(t, u, n[u]);
        });
      }, J.prototype[d] = !0, e($, W), $.prototype.__iterateUncached = function (t, e) {
        if (e) return this.cacheResult().__iterate(t, e);
        var n = K(this._iterable),
            r = 0;
        if (T(n)) for (var i; !(i = n.next()).done && !1 !== t(i.value, r++, this);) {
          ;
        }
        return r;
      }, $.prototype.__iteratorUncached = function (t, e) {
        if (e) return this.cacheResult().__iterator(t, e);
        var n = K(this._iterable);
        if (!T(n)) return new R(q);
        var r = 0;
        return new R(function () {
          var e = n.next();
          return e.done ? e : A(t, r++, e.value);
        });
      }, e(G, W), G.prototype.__iterateUncached = function (t, e) {
        if (e) return this.cacheResult().__iterate(t, e);

        for (var n, r = this._iterator, i = this._iteratorCache, o = 0; o < i.length;) {
          if (!1 === t(i[o], o++, this)) return o;
        }

        for (; !(n = r.next()).done;) {
          var u = n.value;
          if (i[o] = u, !1 === t(u, o++, this)) break;
        }

        return o;
      }, G.prototype.__iteratorUncached = function (t, e) {
        if (e) return this.cacheResult().__iterator(t, e);
        var n = this._iterator,
            r = this._iteratorCache,
            i = 0;
        return new R(function () {
          if (i >= r.length) {
            var e = n.next();
            if (e.done) return e;
            r[i] = e.value;
          }

          return A(t, i, r[i++]);
        });
      }, e(st, W), st.prototype.toString = function () {
        return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
      }, st.prototype.get = function (t, e) {
        return this.has(t) ? this._value : e;
      }, st.prototype.includes = function (t) {
        return ut(this._value, t);
      }, st.prototype.slice = function (t, e) {
        var n = this.size;
        return x(t, e, n) ? this : new st(this._value, M(e, n) - I(t, n));
      }, st.prototype.reverse = function () {
        return this;
      }, st.prototype.indexOf = function (t) {
        return ut(this._value, t) ? 0 : -1;
      }, st.prototype.lastIndexOf = function (t) {
        return ut(this._value, t) ? this.size : -1;
      }, st.prototype.__iterate = function (t, e) {
        for (var n = 0; n < this.size; n++) {
          if (!1 === t(this._value, n, this)) return n + 1;
        }

        return n;
      }, st.prototype.__iterator = function (t, e) {
        var n = this,
            r = 0;
        return new R(function () {
          return r < n.size ? A(t, r++, n._value) : {
            value: void 0,
            done: !0
          };
        });
      }, st.prototype.equals = function (t) {
        return t instanceof st ? ut(this._value, t._value) : at(t);
      }, e(ft, W), ft.prototype.toString = function () {
        return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (1 !== this._step ? " by " + this._step : "") + " ]";
      }, ft.prototype.get = function (t, e) {
        return this.has(t) ? this._start + O(this, t) * this._step : e;
      }, ft.prototype.includes = function (t) {
        var e = (t - this._start) / this._step;
        return e >= 0 && e < this.size && e === Math.floor(e);
      }, ft.prototype.slice = function (t, e) {
        return x(t, e, this.size) ? this : (t = I(t, this.size), (e = M(e, this.size)) <= t ? new ft(0, 0) : new ft(this.get(t, this._end), this.get(e, this._end), this._step));
      }, ft.prototype.indexOf = function (t) {
        var e = t - this._start;

        if (e % this._step == 0) {
          var n = e / this._step;
          if (n >= 0 && n < this.size) return n;
        }

        return -1;
      }, ft.prototype.lastIndexOf = function (t) {
        return this.indexOf(t);
      }, ft.prototype.__iterate = function (t, e) {
        for (var n = this.size - 1, r = this._step, i = e ? this._start + n * r : this._start, o = 0; o <= n; o++) {
          if (!1 === t(i, o, this)) return o + 1;
          i += e ? -r : r;
        }

        return o;
      }, ft.prototype.__iterator = function (t, e) {
        var n = this.size - 1,
            r = this._step,
            i = e ? this._start + n * r : this._start,
            o = 0;
        return new R(function () {
          var u = i;
          return i += e ? -r : r, o > n ? {
            value: void 0,
            done: !0
          } : A(t, o++, u);
        });
      }, ft.prototype.equals = function (t) {
        return t instanceof ft ? this._start === t._start && this._end === t._end && this._step === t._step : at(this, t);
      }, e(lt, n), e(ht, lt), e(pt, lt), e(dt, lt), lt.Keyed = ht, lt.Indexed = pt, lt.Set = dt;

      var _t = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, e) {
        var n = 65535 & (t |= 0),
            r = 65535 & (e |= 0);
        return n * r + ((t >>> 16) * r + n * (e >>> 16) << 16 >>> 0) | 0;
      };

      function vt(t) {
        return t >>> 1 & 1073741824 | 3221225471 & t;
      }

      function yt(t) {
        if (!1 === t || null == t) return 0;
        if ("function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t)) return 0;
        if (!0 === t) return 1;

        var e = _typeof(t);

        if ("number" === e) {
          if (t != t || t === 1 / 0) return 0;
          var n = 0 | t;

          for (n !== t && (n ^= 4294967295 * t); t > 4294967295;) {
            n ^= t /= 4294967295;
          }

          return vt(n);
        }

        if ("string" === e) return t.length > xt ? function (t) {
          var e = zt[t];
          return void 0 === e && (e = gt(t), Mt === It && (Mt = 0, zt = {}), Mt++, zt[t] = e), e;
        }(t) : gt(t);
        if ("function" == typeof t.hashCode) return t.hashCode();
        if ("object" === e) return function (t) {
          var e;
          if (St && void 0 !== (e = mt.get(t))) return e;
          if (void 0 !== (e = t[Et])) return e;

          if (!wt) {
            if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Et])) return e;
            if (void 0 !== (e = function (t) {
              if (t && t.nodeType > 0) switch (t.nodeType) {
                case 1:
                  return t.uniqueID;

                case 9:
                  return t.documentElement && t.documentElement.uniqueID;
              }
            }(t))) return e;
          }

          if (e = ++Ot, 1073741824 & Ot && (Ot = 0), St) mt.set(t, e);else {
            if (void 0 !== bt && !1 === bt(t)) throw new Error("Non-extensible objects are not allowed as keys.");
            if (wt) Object.defineProperty(t, Et, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: e
            });else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function () {
              return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
            }, t.propertyIsEnumerable[Et] = e;else {
              if (void 0 === t.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
              t[Et] = e;
            }
          }
          return e;
        }(t);
        if ("function" == typeof t.toString) return gt(t.toString());
        throw new Error("Value type " + e + " cannot be hashed.");
      }

      function gt(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
          e = 31 * e + t.charCodeAt(n) | 0;
        }

        return vt(e);
      }

      var mt,
          bt = Object.isExtensible,
          wt = function () {
        try {
          return Object.defineProperty({}, "@", {}), !0;
        } catch (t) {
          return !1;
        }
      }(),
          St = "function" == typeof WeakMap;

      St && (mt = new WeakMap());
      var Ot = 0,
          Et = "__immutablehash__";
      "function" == typeof Symbol && (Et = Symbol(Et));
      var xt = 16,
          It = 255,
          Mt = 0,
          zt = {};

      function kt(t) {
        ct(t !== 1 / 0, "Cannot perform this action with an infinite size.");
      }

      function Dt(t) {
        return null == t ? Wt() : jt(t) && !f(t) ? t : Wt().withMutations(function (e) {
          var n = r(t);
          kt(n.size), n.forEach(function (t, n) {
            return e.set(n, t);
          });
        });
      }

      function jt(t) {
        return !(!t || !t[Pt]);
      }

      e(Dt, ht), Dt.of = function () {
        var e = t.call(arguments, 0);
        return Wt().withMutations(function (t) {
          for (var n = 0; n < e.length; n += 2) {
            if (n + 1 >= e.length) throw new Error("Missing value for key: " + e[n]);
            t.set(e[n], e[n + 1]);
          }
        });
      }, Dt.prototype.toString = function () {
        return this.__toString("Map {", "}");
      }, Dt.prototype.get = function (t, e) {
        return this._root ? this._root.get(0, void 0, t, e) : e;
      }, Dt.prototype.set = function (t, e) {
        return Nt(this, t, e);
      }, Dt.prototype.setIn = function (t, e) {
        return this.updateIn(t, _, function () {
          return e;
        });
      }, Dt.prototype.remove = function (t) {
        return Nt(this, t, _);
      }, Dt.prototype.deleteIn = function (t) {
        return this.updateIn(t, function () {
          return _;
        });
      }, Dt.prototype.update = function (t, e, n) {
        return 1 === arguments.length ? t(this) : this.updateIn([t], e, n);
      }, Dt.prototype.updateIn = function (t, e, n) {
        n || (n = e, e = void 0);

        var r = function t(e, n, r, i) {
          var o = e === _,
              u = n.next();

          if (u.done) {
            var a = o ? r : e,
                s = i(a);
            return s === a ? e : s;
          }

          ct(o || e && e.set, "invalid keyPath");
          var c = u.value,
              f = o ? _ : e.get(c, _),
              l = t(f, n, r, i);
          return l === f ? e : l === _ ? e.remove(c) : (o ? Wt() : e).set(c, l);
        }(this, Ge(t), e, n);

        return r === _ ? void 0 : r;
      }, Dt.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Wt();
      }, Dt.prototype.merge = function () {
        return Gt(this, void 0, arguments);
      }, Dt.prototype.mergeWith = function (e) {
        var n = t.call(arguments, 1);
        return Gt(this, e, n);
      }, Dt.prototype.mergeIn = function (e) {
        var n = t.call(arguments, 1);
        return this.updateIn(e, Wt(), function (t) {
          return "function" == typeof t.merge ? t.merge.apply(t, n) : n[n.length - 1];
        });
      }, Dt.prototype.mergeDeep = function () {
        return Gt(this, Yt, arguments);
      }, Dt.prototype.mergeDeepWith = function (e) {
        var n = t.call(arguments, 1);
        return Gt(this, Qt(e), n);
      }, Dt.prototype.mergeDeepIn = function (e) {
        var n = t.call(arguments, 1);
        return this.updateIn(e, Wt(), function (t) {
          return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, n) : n[n.length - 1];
        });
      }, Dt.prototype.sort = function (t) {
        return we(Te(this, t));
      }, Dt.prototype.sortBy = function (t, e) {
        return we(Te(this, e, t));
      }, Dt.prototype.withMutations = function (t) {
        var e = this.asMutable();
        return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
      }, Dt.prototype.asMutable = function () {
        return this.__ownerID ? this : this.__ensureOwner(new b());
      }, Dt.prototype.asImmutable = function () {
        return this.__ensureOwner();
      }, Dt.prototype.wasAltered = function () {
        return this.__altered;
      }, Dt.prototype.__iterator = function (t, e) {
        return new Ft(this, t, e);
      }, Dt.prototype.__iterate = function (t, e) {
        var n = this,
            r = 0;
        return this._root && this._root.iterate(function (e) {
          return r++, t(e[1], e[0], n);
        }, e), r;
      }, Dt.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? Vt(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
      }, Dt.isMap = jt;
      var Ct,
          Pt = "@@__IMMUTABLE_MAP__@@",
          Rt = Dt.prototype;

      function At(t, e) {
        this.ownerID = t, this.entries = e;
      }

      function qt(t, e, n) {
        this.ownerID = t, this.bitmap = e, this.nodes = n;
      }

      function Bt(t, e, n) {
        this.ownerID = t, this.count = e, this.nodes = n;
      }

      function Tt(t, e, n) {
        this.ownerID = t, this.keyHash = e, this.entries = n;
      }

      function Kt(t, e, n) {
        this.ownerID = t, this.keyHash = e, this.entry = n;
      }

      function Ft(t, e, n) {
        this._type = e, this._reverse = n, this._stack = t._root && Ut(t._root);
      }

      function Lt(t, e) {
        return A(t, e[0], e[1]);
      }

      function Ut(t, e) {
        return {
          node: t,
          index: 0,
          __prev: e
        };
      }

      function Vt(t, e, n, r) {
        var i = Object.create(Rt);
        return i.size = t, i._root = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i;
      }

      function Wt() {
        return Ct || (Ct = Vt(0));
      }

      function Nt(t, e, n) {
        var r, i;

        if (t._root) {
          var o = g(v),
              u = g(y);
          if (r = Ht(t._root, t.__ownerID, 0, void 0, e, n, o, u), !u.value) return t;
          i = t.size + (o.value ? n === _ ? -1 : 1 : 0);
        } else {
          if (n === _) return t;
          i = 1, r = new At(t.__ownerID, [[e, n]]);
        }

        return t.__ownerID ? (t.size = i, t._root = r, t.__hash = void 0, t.__altered = !0, t) : r ? Vt(i, r) : Wt();
      }

      function Ht(t, e, n, r, i, o, u, a) {
        return t ? t.update(e, n, r, i, o, u, a) : o === _ ? t : (m(a), m(u), new Kt(e, r, [i, o]));
      }

      function Jt(t) {
        return t.constructor === Kt || t.constructor === Tt;
      }

      function $t(t, e, n, r, i) {
        if (t.keyHash === r) return new Tt(e, r, [t.entry, i]);
        var o,
            u = 31 & (0 === n ? t.keyHash : t.keyHash >>> n),
            a = 31 & (0 === n ? r : r >>> n);
        return new qt(e, 1 << u | 1 << a, u === a ? [$t(t, e, n + 5, r, i)] : (o = new Kt(e, r, i), u < a ? [t, o] : [o, t]));
      }

      function Gt(t, e, n) {
        for (var i = [], o = 0; o < n.length; o++) {
          var a = n[o],
              s = r(a);
          u(a) || (s = s.map(function (t) {
            return rt(t);
          })), i.push(s);
        }

        return Xt(t, e, i);
      }

      function Yt(t, e, n) {
        return t && t.mergeDeep && u(e) ? t.mergeDeep(e) : ut(t, e) ? t : e;
      }

      function Qt(t) {
        return function (e, n, r) {
          if (e && e.mergeDeepWith && u(n)) return e.mergeDeepWith(t, n);
          var i = t(e, n, r);
          return ut(e, i) ? e : i;
        };
      }

      function Xt(t, e, n) {
        return 0 === (n = n.filter(function (t) {
          return 0 !== t.size;
        })).length ? t : 0 !== t.size || t.__ownerID || 1 !== n.length ? t.withMutations(function (t) {
          for (var r = e ? function (n, r) {
            t.update(r, _, function (t) {
              return t === _ ? n : e(t, n, r);
            });
          } : function (e, n) {
            t.set(n, e);
          }, i = 0; i < n.length; i++) {
            n[i].forEach(r);
          }
        }) : t.constructor(n[0]);
      }

      function Zt(t) {
        return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, 127 & (t += t >> 8) + (t >> 16);
      }

      function te(t, e, n, r) {
        var i = r ? t : w(t);
        return i[e] = n, i;
      }

      Rt[Pt] = !0, Rt["delete"] = Rt.remove, Rt.removeIn = Rt.deleteIn, At.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, o = 0, u = i.length; o < u; o++) {
          if (ut(n, i[o][0])) return i[o][1];
        }

        return r;
      }, At.prototype.update = function (t, e, n, r, i, o, u) {
        for (var a = i === _, s = this.entries, c = 0, f = s.length; c < f && !ut(r, s[c][0]); c++) {
          ;
        }

        var l = c < f;
        if (l ? s[c][1] === i : a) return this;

        if (m(u), (a || !l) && m(o), !a || 1 !== s.length) {
          if (!l && !a && s.length >= ee) return function (t, e, n, r) {
            t || (t = new b());

            for (var i = new Kt(t, yt(n), [n, r]), o = 0; o < e.length; o++) {
              var u = e[o];
              i = i.update(t, 0, void 0, u[0], u[1]);
            }

            return i;
          }(t, s, r, i);
          var h = t && t === this.ownerID,
              p = h ? s : w(s);
          return l ? a ? c === f - 1 ? p.pop() : p[c] = p.pop() : p[c] = [r, i] : p.push([r, i]), h ? (this.entries = p, this) : new At(t, p);
        }
      }, qt.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = yt(n));
        var i = 1 << (31 & (0 === t ? e : e >>> t)),
            o = this.bitmap;
        return 0 == (o & i) ? r : this.nodes[Zt(o & i - 1)].get(t + 5, e, n, r);
      }, qt.prototype.update = function (t, e, n, r, i, o, u) {
        void 0 === n && (n = yt(r));
        var a = 31 & (0 === e ? n : n >>> e),
            s = 1 << a,
            c = this.bitmap,
            f = 0 != (c & s);
        if (!f && i === _) return this;
        var l = Zt(c & s - 1),
            h = this.nodes,
            p = f ? h[l] : void 0,
            d = Ht(p, t, e + 5, n, r, i, o, u);
        if (d === p) return this;
        if (!f && d && h.length >= ne) return function (t, e, n, r, i) {
          for (var o = 0, u = new Array(32), a = 0; 0 !== n; a++, n >>>= 1) {
            u[a] = 1 & n ? e[o++] : void 0;
          }

          return u[r] = i, new Bt(t, o + 1, u);
        }(t, h, c, a, d);
        if (f && !d && 2 === h.length && Jt(h[1 ^ l])) return h[1 ^ l];
        if (f && d && 1 === h.length && Jt(d)) return d;
        var v = t && t === this.ownerID,
            y = f ? d ? c : c ^ s : c | s,
            g = f ? d ? te(h, l, d, v) : function (t, e, n) {
          var r = t.length - 1;
          if (n && e === r) return t.pop(), t;

          for (var i = new Array(r), o = 0, u = 0; u < r; u++) {
            u === e && (o = 1), i[u] = t[u + o];
          }

          return i;
        }(h, l, v) : function (t, e, n, r) {
          var i = t.length + 1;
          if (r && e + 1 === i) return t[e] = n, t;

          for (var o = new Array(i), u = 0, a = 0; a < i; a++) {
            a === e ? (o[a] = n, u = -1) : o[a] = t[a + u];
          }

          return o;
        }(h, l, d, v);
        return v ? (this.bitmap = y, this.nodes = g, this) : new qt(t, y, g);
      }, Bt.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = yt(n));
        var i = 31 & (0 === t ? e : e >>> t),
            o = this.nodes[i];
        return o ? o.get(t + 5, e, n, r) : r;
      }, Bt.prototype.update = function (t, e, n, r, i, o, u) {
        void 0 === n && (n = yt(r));
        var a = 31 & (0 === e ? n : n >>> e),
            s = i === _,
            c = this.nodes,
            f = c[a];
        if (s && !f) return this;
        var l = Ht(f, t, e + 5, n, r, i, o, u);
        if (l === f) return this;
        var h = this.count;

        if (f) {
          if (!l && --h < re) return function (t, e, n, r) {
            for (var i = 0, o = 0, u = new Array(n), a = 0, s = 1, c = e.length; a < c; a++, s <<= 1) {
              var f = e[a];
              void 0 !== f && a !== r && (i |= s, u[o++] = f);
            }

            return new qt(t, i, u);
          }(t, c, h, a);
        } else h++;

        var p = t && t === this.ownerID,
            d = te(c, a, l, p);
        return p ? (this.count = h, this.nodes = d, this) : new Bt(t, h, d);
      }, Tt.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, o = 0, u = i.length; o < u; o++) {
          if (ut(n, i[o][0])) return i[o][1];
        }

        return r;
      }, Tt.prototype.update = function (t, e, n, r, i, o, u) {
        void 0 === n && (n = yt(r));
        var a = i === _;
        if (n !== this.keyHash) return a ? this : (m(u), m(o), $t(this, t, e, n, [r, i]));

        for (var s = this.entries, c = 0, f = s.length; c < f && !ut(r, s[c][0]); c++) {
          ;
        }

        var l = c < f;
        if (l ? s[c][1] === i : a) return this;
        if (m(u), (a || !l) && m(o), a && 2 === f) return new Kt(t, this.keyHash, s[1 ^ c]);
        var h = t && t === this.ownerID,
            p = h ? s : w(s);
        return l ? a ? c === f - 1 ? p.pop() : p[c] = p.pop() : p[c] = [r, i] : p.push([r, i]), h ? (this.entries = p, this) : new Tt(t, this.keyHash, p);
      }, Kt.prototype.get = function (t, e, n, r) {
        return ut(n, this.entry[0]) ? this.entry[1] : r;
      }, Kt.prototype.update = function (t, e, n, r, i, o, u) {
        var a = i === _,
            s = ut(r, this.entry[0]);
        return (s ? i === this.entry[1] : a) ? this : (m(u), a ? void m(o) : s ? t && t === this.ownerID ? (this.entry[1] = i, this) : new Kt(t, this.keyHash, [r, i]) : (m(o), $t(this, t, e, yt(r), [r, i])));
      }, At.prototype.iterate = Tt.prototype.iterate = function (t, e) {
        for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++) {
          if (!1 === t(n[e ? i - r : r])) return !1;
        }
      }, qt.prototype.iterate = Bt.prototype.iterate = function (t, e) {
        for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
          var o = n[e ? i - r : r];
          if (o && !1 === o.iterate(t, e)) return !1;
        }
      }, Kt.prototype.iterate = function (t, e) {
        return t(this.entry);
      }, e(Ft, R), Ft.prototype.next = function () {
        for (var t = this._type, e = this._stack; e;) {
          var n,
              r = e.node,
              i = e.index++;

          if (r.entry) {
            if (0 === i) return Lt(t, r.entry);
          } else if (r.entries) {
            if (i <= (n = r.entries.length - 1)) return Lt(t, r.entries[this._reverse ? n - i : i]);
          } else if (i <= (n = r.nodes.length - 1)) {
            var o = r.nodes[this._reverse ? n - i : i];

            if (o) {
              if (o.entry) return Lt(t, o.entry);
              e = this._stack = Ut(o, e);
            }

            continue;
          }

          e = this._stack = this._stack.__prev;
        }

        return {
          value: void 0,
          done: !0
        };
      };
      var ee = 8,
          ne = 16,
          re = 8;

      function ie(t) {
        var e = de();
        if (null == t) return e;
        if (oe(t)) return t;
        var n = i(t),
            r = n.size;
        return 0 === r ? e : (kt(r), r > 0 && r < 32 ? pe(0, r, 5, null, new se(n.toArray())) : e.withMutations(function (t) {
          t.setSize(r), n.forEach(function (e, n) {
            return t.set(n, e);
          });
        }));
      }

      function oe(t) {
        return !(!t || !t[ue]);
      }

      e(ie, pt), ie.of = function () {
        return this(arguments);
      }, ie.prototype.toString = function () {
        return this.__toString("List [", "]");
      }, ie.prototype.get = function (t, e) {
        if ((t = O(this, t)) >= 0 && t < this.size) {
          var n = ye(this, t += this._origin);
          return n && n.array[31 & t];
        }

        return e;
      }, ie.prototype.set = function (t, e) {
        return function (t, e, n) {
          if ((e = O(t, e)) != e) return t;
          if (e >= t.size || e < 0) return t.withMutations(function (t) {
            e < 0 ? ge(t, e).set(0, n) : ge(t, 0, e + 1).set(e, n);
          });
          e += t._origin;
          var r = t._tail,
              i = t._root,
              o = g(y);
          return e >= be(t._capacity) ? r = _e(r, t.__ownerID, 0, e, n, o) : i = _e(i, t.__ownerID, t._level, e, n, o), o.value ? t.__ownerID ? (t._root = i, t._tail = r, t.__hash = void 0, t.__altered = !0, t) : pe(t._origin, t._capacity, t._level, i, r) : t;
        }(this, t, e);
      }, ie.prototype.remove = function (t) {
        return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
      }, ie.prototype.insert = function (t, e) {
        return this.splice(t, 0, e);
      }, ie.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : de();
      }, ie.prototype.push = function () {
        var t = arguments,
            e = this.size;
        return this.withMutations(function (n) {
          ge(n, 0, e + t.length);

          for (var r = 0; r < t.length; r++) {
            n.set(e + r, t[r]);
          }
        });
      }, ie.prototype.pop = function () {
        return ge(this, 0, -1);
      }, ie.prototype.unshift = function () {
        var t = arguments;
        return this.withMutations(function (e) {
          ge(e, -t.length);

          for (var n = 0; n < t.length; n++) {
            e.set(n, t[n]);
          }
        });
      }, ie.prototype.shift = function () {
        return ge(this, 1);
      }, ie.prototype.merge = function () {
        return me(this, void 0, arguments);
      }, ie.prototype.mergeWith = function (e) {
        var n = t.call(arguments, 1);
        return me(this, e, n);
      }, ie.prototype.mergeDeep = function () {
        return me(this, Yt, arguments);
      }, ie.prototype.mergeDeepWith = function (e) {
        var n = t.call(arguments, 1);
        return me(this, Qt(e), n);
      }, ie.prototype.setSize = function (t) {
        return ge(this, 0, t);
      }, ie.prototype.slice = function (t, e) {
        var n = this.size;
        return x(t, e, n) ? this : ge(this, I(t, n), M(e, n));
      }, ie.prototype.__iterator = function (t, e) {
        var n = 0,
            r = he(this, e);
        return new R(function () {
          var e = r();
          return e === le ? {
            value: void 0,
            done: !0
          } : A(t, n++, e);
        });
      }, ie.prototype.__iterate = function (t, e) {
        for (var n, r = 0, i = he(this, e); (n = i()) !== le && !1 !== t(n, r++, this);) {
          ;
        }

        return r;
      }, ie.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? pe(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this);
      }, ie.isList = oe;
      var ue = "@@__IMMUTABLE_LIST__@@",
          ae = ie.prototype;

      function se(t, e) {
        this.array = t, this.ownerID = e;
      }

      ae[ue] = !0, ae["delete"] = ae.remove, ae.setIn = Rt.setIn, ae.deleteIn = ae.removeIn = Rt.removeIn, ae.update = Rt.update, ae.updateIn = Rt.updateIn, ae.mergeIn = Rt.mergeIn, ae.mergeDeepIn = Rt.mergeDeepIn, ae.withMutations = Rt.withMutations, ae.asMutable = Rt.asMutable, ae.asImmutable = Rt.asImmutable, ae.wasAltered = Rt.wasAltered, se.prototype.removeBefore = function (t, e, n) {
        if (n === e ? 1 << e : 0 === this.array.length) return this;
        var r = n >>> e & 31;
        if (r >= this.array.length) return new se([], t);
        var i,
            o = 0 === r;

        if (e > 0) {
          var u = this.array[r];
          if ((i = u && u.removeBefore(t, e - 5, n)) === u && o) return this;
        }

        if (o && !i) return this;
        var a = ve(this, t);
        if (!o) for (var s = 0; s < r; s++) {
          a.array[s] = void 0;
        }
        return i && (a.array[r] = i), a;
      }, se.prototype.removeAfter = function (t, e, n) {
        if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this;
        var r,
            i = n - 1 >>> e & 31;
        if (i >= this.array.length) return this;

        if (e > 0) {
          var o = this.array[i];
          if ((r = o && o.removeAfter(t, e - 5, n)) === o && i === this.array.length - 1) return this;
        }

        var u = ve(this, t);
        return u.array.splice(i + 1), r && (u.array[i] = r), u;
      };
      var ce,
          fe,
          le = {};

      function he(t, e) {
        var n = t._origin,
            r = t._capacity,
            i = be(r),
            o = t._tail;
        return function t(u, a, s) {
          return 0 === a ? function (t, u) {
            var a = u === i ? o && o.array : t && t.array,
                s = u > n ? 0 : n - u,
                c = r - u;
            return c > 32 && (c = 32), function () {
              if (s === c) return le;
              var t = e ? --c : s++;
              return a && a[t];
            };
          }(u, s) : function (i, o, u) {
            var a,
                s = i && i.array,
                c = u > n ? 0 : n - u >> o,
                f = 1 + (r - u >> o);
            return f > 32 && (f = 32), function () {
              for (;;) {
                if (a) {
                  var n = a();
                  if (n !== le) return n;
                  a = null;
                }

                if (c === f) return le;
                var r = e ? --f : c++;
                a = t(s && s[r], o - 5, u + (r << o));
              }
            };
          }(u, a, s);
        }(t._root, t._level, 0);
      }

      function pe(t, e, n, r, i, o, u) {
        var a = Object.create(ae);
        return a.size = e - t, a._origin = t, a._capacity = e, a._level = n, a._root = r, a._tail = i, a.__ownerID = o, a.__hash = u, a.__altered = !1, a;
      }

      function de() {
        return ce || (ce = pe(0, 0, 5));
      }

      function _e(t, e, n, r, i, o) {
        var u,
            a = r >>> n & 31,
            s = t && a < t.array.length;
        if (!s && void 0 === i) return t;

        if (n > 0) {
          var c = t && t.array[a],
              f = _e(c, e, n - 5, r, i, o);

          return f === c ? t : ((u = ve(t, e)).array[a] = f, u);
        }

        return s && t.array[a] === i ? t : (m(o), u = ve(t, e), void 0 === i && a === u.array.length - 1 ? u.array.pop() : u.array[a] = i, u);
      }

      function ve(t, e) {
        return e && t && e === t.ownerID ? t : new se(t ? t.array.slice() : [], e);
      }

      function ye(t, e) {
        if (e >= be(t._capacity)) return t._tail;

        if (e < 1 << t._level + 5) {
          for (var n = t._root, r = t._level; n && r > 0;) {
            n = n.array[e >>> r & 31], r -= 5;
          }

          return n;
        }
      }

      function ge(t, e, n) {
        void 0 !== e && (e |= 0), void 0 !== n && (n |= 0);
        var r = t.__ownerID || new b(),
            i = t._origin,
            o = t._capacity,
            u = i + e,
            a = void 0 === n ? o : n < 0 ? o + n : i + n;
        if (u === i && a === o) return t;
        if (u >= a) return t.clear();

        for (var s = t._level, c = t._root, f = 0; u + f < 0;) {
          c = new se(c && c.array.length ? [void 0, c] : [], r), f += 1 << (s += 5);
        }

        f && (u += f, i += f, a += f, o += f);

        for (var l = be(o), h = be(a); h >= 1 << s + 5;) {
          c = new se(c && c.array.length ? [c] : [], r), s += 5;
        }

        var p = t._tail,
            d = h < l ? ye(t, a - 1) : h > l ? new se([], r) : p;

        if (p && h > l && u < o && p.array.length) {
          for (var _ = c = ve(c, r), v = s; v > 5; v -= 5) {
            var y = l >>> v & 31;
            _ = _.array[y] = ve(_.array[y], r);
          }

          _.array[l >>> 5 & 31] = p;
        }

        if (a < o && (d = d && d.removeAfter(r, 0, a)), u >= h) u -= h, a -= h, s = 5, c = null, d = d && d.removeBefore(r, 0, u);else if (u > i || h < l) {
          for (f = 0; c;) {
            var g = u >>> s & 31;
            if (g !== h >>> s & 31) break;
            g && (f += (1 << s) * g), s -= 5, c = c.array[g];
          }

          c && u > i && (c = c.removeBefore(r, s, u - f)), c && h < l && (c = c.removeAfter(r, s, h - f)), f && (u -= f, a -= f);
        }
        return t.__ownerID ? (t.size = a - u, t._origin = u, t._capacity = a, t._level = s, t._root = c, t._tail = d, t.__hash = void 0, t.__altered = !0, t) : pe(u, a, s, c, d);
      }

      function me(t, e, n) {
        for (var r = [], o = 0, a = 0; a < n.length; a++) {
          var s = n[a],
              c = i(s);
          c.size > o && (o = c.size), u(s) || (c = c.map(function (t) {
            return rt(t);
          })), r.push(c);
        }

        return o > t.size && (t = t.setSize(o)), Xt(t, e, r);
      }

      function be(t) {
        return t < 32 ? 0 : t - 1 >>> 5 << 5;
      }

      function we(t) {
        return null == t ? Ee() : Se(t) ? t : Ee().withMutations(function (e) {
          var n = r(t);
          kt(n.size), n.forEach(function (t, n) {
            return e.set(n, t);
          });
        });
      }

      function Se(t) {
        return jt(t) && f(t);
      }

      function Oe(t, e, n, r) {
        var i = Object.create(we.prototype);
        return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = n, i.__hash = r, i;
      }

      function Ee() {
        return fe || (fe = Oe(Wt(), de()));
      }

      function xe(t, e, n) {
        var r,
            i,
            o = t._map,
            u = t._list,
            a = o.get(e),
            s = void 0 !== a;

        if (n === _) {
          if (!s) return t;
          u.size >= 32 && u.size >= 2 * o.size ? (r = (i = u.filter(function (t, e) {
            return void 0 !== t && a !== e;
          })).toKeyedSeq().map(function (t) {
            return t[0];
          }).flip().toMap(), t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID)) : (r = o.remove(e), i = a === u.size - 1 ? u.pop() : u.set(a, void 0));
        } else if (s) {
          if (n === u.get(a)[1]) return t;
          r = o, i = u.set(a, [e, n]);
        } else r = o.set(e, u.size), i = u.set(u.size, [e, n]);

        return t.__ownerID ? (t.size = r.size, t._map = r, t._list = i, t.__hash = void 0, t) : Oe(r, i);
      }

      function Ie(t, e) {
        this._iter = t, this._useKeys = e, this.size = t.size;
      }

      function Me(t) {
        this._iter = t, this.size = t.size;
      }

      function ze(t) {
        this._iter = t, this.size = t.size;
      }

      function ke(t) {
        this._iter = t, this.size = t.size;
      }

      function De(t) {
        var e = He(t);
        return e._iter = t, e.size = t.size, e.flip = function () {
          return t;
        }, e.reverse = function () {
          var e = t.reverse.apply(this);
          return e.flip = function () {
            return t.reverse();
          }, e;
        }, e.has = function (e) {
          return t.includes(e);
        }, e.includes = function (e) {
          return t.has(e);
        }, e.cacheResult = Je, e.__iterateUncached = function (e, n) {
          var r = this;
          return t.__iterate(function (t, n) {
            return !1 !== e(n, t, r);
          }, n);
        }, e.__iteratorUncached = function (e, n) {
          if (2 === e) {
            var r = t.__iterator(e, n);

            return new R(function () {
              var t = r.next();

              if (!t.done) {
                var e = t.value[0];
                t.value[0] = t.value[1], t.value[1] = e;
              }

              return t;
            });
          }

          return t.__iterator(1 === e ? 0 : 1, n);
        }, e;
      }

      function je(t, e, n) {
        var r = He(t);
        return r.size = t.size, r.has = function (e) {
          return t.has(e);
        }, r.get = function (r, i) {
          var o = t.get(r, _);
          return o === _ ? i : e.call(n, o, r, t);
        }, r.__iterateUncached = function (r, i) {
          var o = this;
          return t.__iterate(function (t, i, u) {
            return !1 !== r(e.call(n, t, i, u), i, o);
          }, i);
        }, r.__iteratorUncached = function (r, i) {
          var o = t.__iterator(2, i);

          return new R(function () {
            var i = o.next();
            if (i.done) return i;
            var u = i.value,
                a = u[0];
            return A(r, a, e.call(n, u[1], a, t), i);
          });
        }, r;
      }

      function Ce(t, e) {
        var n = He(t);
        return n._iter = t, n.size = t.size, n.reverse = function () {
          return t;
        }, t.flip && (n.flip = function () {
          var e = De(t);
          return e.reverse = function () {
            return t.flip();
          }, e;
        }), n.get = function (n, r) {
          return t.get(e ? n : -1 - n, r);
        }, n.has = function (n) {
          return t.has(e ? n : -1 - n);
        }, n.includes = function (e) {
          return t.includes(e);
        }, n.cacheResult = Je, n.__iterate = function (e, n) {
          var r = this;
          return t.__iterate(function (t, n) {
            return e(t, n, r);
          }, !n);
        }, n.__iterator = function (e, n) {
          return t.__iterator(e, !n);
        }, n;
      }

      function Pe(t, e, n, r) {
        var i = He(t);
        return r && (i.has = function (r) {
          var i = t.get(r, _);
          return i !== _ && !!e.call(n, i, r, t);
        }, i.get = function (r, i) {
          var o = t.get(r, _);
          return o !== _ && e.call(n, o, r, t) ? o : i;
        }), i.__iterateUncached = function (i, o) {
          var u = this,
              a = 0;
          return t.__iterate(function (t, o, s) {
            if (e.call(n, t, o, s)) return a++, i(t, r ? o : a - 1, u);
          }, o), a;
        }, i.__iteratorUncached = function (i, o) {
          var u = t.__iterator(2, o),
              a = 0;

          return new R(function () {
            for (;;) {
              var o = u.next();
              if (o.done) return o;
              var s = o.value,
                  c = s[0],
                  f = s[1];
              if (e.call(n, f, c, t)) return A(i, r ? c : a++, f, o);
            }
          });
        }, i;
      }

      function Re(t, e, n, r) {
        var i = t.size;
        if (void 0 !== e && (e |= 0), void 0 !== n && (n === 1 / 0 ? n = i : n |= 0), x(e, n, i)) return t;
        var o = I(e, i),
            u = M(n, i);
        if (o != o || u != u) return Re(t.toSeq().cacheResult(), e, n, r);
        var a,
            s = u - o;
        s == s && (a = s < 0 ? 0 : s);
        var c = He(t);
        return c.size = 0 === a ? a : t.size && a || void 0, !r && Y(t) && a >= 0 && (c.get = function (e, n) {
          return (e = O(this, e)) >= 0 && e < a ? t.get(e + o, n) : n;
        }), c.__iterateUncached = function (e, n) {
          var i = this;
          if (0 === a) return 0;
          if (n) return this.cacheResult().__iterate(e, n);
          var u = 0,
              s = !0,
              c = 0;
          return t.__iterate(function (t, n) {
            if (!s || !(s = u++ < o)) return c++, !1 !== e(t, r ? n : c - 1, i) && c !== a;
          }), c;
        }, c.__iteratorUncached = function (e, n) {
          if (0 !== a && n) return this.cacheResult().__iterator(e, n);

          var i = 0 !== a && t.__iterator(e, n),
              u = 0,
              s = 0;

          return new R(function () {
            for (; u++ < o;) {
              i.next();
            }

            if (++s > a) return {
              value: void 0,
              done: !0
            };
            var t = i.next();
            return r || 1 === e ? t : A(e, s - 1, 0 === e ? void 0 : t.value[1], t);
          });
        }, c;
      }

      function Ae(t, e, n, r) {
        var i = He(t);
        return i.__iterateUncached = function (i, o) {
          var u = this;
          if (o) return this.cacheResult().__iterate(i, o);
          var a = !0,
              s = 0;
          return t.__iterate(function (t, o, c) {
            if (!a || !(a = e.call(n, t, o, c))) return s++, i(t, r ? o : s - 1, u);
          }), s;
        }, i.__iteratorUncached = function (i, o) {
          var u = this;
          if (o) return this.cacheResult().__iterator(i, o);

          var a = t.__iterator(2, o),
              s = !0,
              c = 0;

          return new R(function () {
            var t, o, f;

            do {
              if ((t = a.next()).done) return r || 1 === i ? t : A(i, c++, 0 === i ? void 0 : t.value[1], t);
              var l = t.value;
              o = l[0], f = l[1], s && (s = e.call(n, f, o, u));
            } while (s);

            return 2 === i ? t : A(i, o, f, t);
          });
        }, i;
      }

      function qe(t, e) {
        var n = a(t),
            i = [t].concat(e).map(function (t) {
          return u(t) ? n && (t = r(t)) : t = n ? X(t) : Z(Array.isArray(t) ? t : [t]), t;
        }).filter(function (t) {
          return 0 !== t.size;
        });
        if (0 === i.length) return t;

        if (1 === i.length) {
          var o = i[0];
          if (o === t || n && a(o) || s(t) && s(o)) return o;
        }

        var c = new H(i);
        return n ? c = c.toKeyedSeq() : s(t) || (c = c.toSetSeq()), (c = c.flatten(!0)).size = i.reduce(function (t, e) {
          if (void 0 !== t) {
            var n = e.size;
            if (void 0 !== n) return t + n;
          }
        }, 0), c;
      }

      function Be(t, e, n) {
        var r = He(t);
        return r.__iterateUncached = function (r, i) {
          var o = 0,
              a = !1;
          return function t(s, c) {
            var f = this;

            s.__iterate(function (i, s) {
              return (!e || c < e) && u(i) ? t(i, c + 1) : !1 === r(i, n ? s : o++, f) && (a = !0), !a;
            }, i);
          }(t, 0), o;
        }, r.__iteratorUncached = function (r, i) {
          var o = t.__iterator(r, i),
              a = [],
              s = 0;

          return new R(function () {
            for (; o;) {
              var t = o.next();

              if (!1 === t.done) {
                var c = t.value;
                if (2 === r && (c = c[1]), e && !(a.length < e) || !u(c)) return n ? t : A(r, s++, c, t);
                a.push(o), o = c.__iterator(r, i);
              } else o = a.pop();
            }

            return {
              value: void 0,
              done: !0
            };
          });
        }, r;
      }

      function Te(t, e, n) {
        e || (e = $e);
        var r = a(t),
            i = 0,
            o = t.toSeq().map(function (e, r) {
          return [r, e, i++, n ? n(e, r, t) : e];
        }).toArray();
        return o.sort(function (t, n) {
          return e(t[3], n[3]) || t[2] - n[2];
        }).forEach(r ? function (t, e) {
          o[e].length = 2;
        } : function (t, e) {
          o[e] = t[1];
        }), r ? V(o) : s(t) ? W(o) : N(o);
      }

      function Ke(t, e, n) {
        if (e || (e = $e), n) {
          var r = t.toSeq().map(function (e, r) {
            return [e, n(e, r, t)];
          }).reduce(function (t, n) {
            return Fe(e, t[1], n[1]) ? n : t;
          });
          return r && r[0];
        }

        return t.reduce(function (t, n) {
          return Fe(e, t, n) ? n : t;
        });
      }

      function Fe(t, e, n) {
        var r = t(n, e);
        return 0 === r && n !== e && (null == n || n != n) || r > 0;
      }

      function Le(t, e, r) {
        var i = He(t);
        return i.size = new H(r).map(function (t) {
          return t.size;
        }).min(), i.__iterate = function (t, e) {
          for (var n, r = this.__iterator(1, e), i = 0; !(n = r.next()).done && !1 !== t(n.value, i++, this);) {
            ;
          }

          return i;
        }, i.__iteratorUncached = function (t, i) {
          var o = r.map(function (t) {
            return t = n(t), K(i ? t.reverse() : t);
          }),
              u = 0,
              a = !1;
          return new R(function () {
            var n;
            return a || (n = o.map(function (t) {
              return t.next();
            }), a = n.some(function (t) {
              return t.done;
            })), a ? {
              value: void 0,
              done: !0
            } : A(t, u++, e.apply(null, n.map(function (t) {
              return t.value;
            })));
          });
        }, i;
      }

      function Ue(t, e) {
        return Y(t) ? e : t.constructor(e);
      }

      function Ve(t) {
        if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
      }

      function We(t) {
        return kt(t.size), S(t);
      }

      function Ne(t) {
        return a(t) ? r : s(t) ? i : o;
      }

      function He(t) {
        return Object.create((a(t) ? V : s(t) ? W : N).prototype);
      }

      function Je() {
        return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : U.prototype.cacheResult.call(this);
      }

      function $e(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
      }

      function Ge(t) {
        var e = K(t);

        if (!e) {
          if (!L(t)) throw new TypeError("Expected iterable or array-like: " + t);
          e = K(n(t));
        }

        return e;
      }

      function Ye(t, e) {
        var n,
            r = function r(o) {
          if (o instanceof r) return o;
          if (!(this instanceof r)) return new r(o);

          if (!n) {
            n = !0;
            var u = Object.keys(t);
            !function (t, e) {
              try {
                e.forEach(tn.bind(void 0, t));
              } catch (t) {}
            }(i, u), i.size = u.length, i._name = e, i._keys = u, i._defaultValues = t;
          }

          this._map = Dt(o);
        },
            i = r.prototype = Object.create(Qe);

        return i.constructor = r, r;
      }

      e(we, Dt), we.of = function () {
        return this(arguments);
      }, we.prototype.toString = function () {
        return this.__toString("OrderedMap {", "}");
      }, we.prototype.get = function (t, e) {
        var n = this._map.get(t);

        return void 0 !== n ? this._list.get(n)[1] : e;
      }, we.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : Ee();
      }, we.prototype.set = function (t, e) {
        return xe(this, t, e);
      }, we.prototype.remove = function (t) {
        return xe(this, t, _);
      }, we.prototype.wasAltered = function () {
        return this._map.wasAltered() || this._list.wasAltered();
      }, we.prototype.__iterate = function (t, e) {
        var n = this;
        return this._list.__iterate(function (e) {
          return e && t(e[1], e[0], n);
        }, e);
      }, we.prototype.__iterator = function (t, e) {
        return this._list.fromEntrySeq().__iterator(t, e);
      }, we.prototype.__ensureOwner = function (t) {
        if (t === this.__ownerID) return this;

        var e = this._map.__ensureOwner(t),
            n = this._list.__ensureOwner(t);

        return t ? Oe(e, n, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = n, this);
      }, we.isOrderedMap = Se, we.prototype[d] = !0, we.prototype["delete"] = we.prototype.remove, e(Ie, V), Ie.prototype.get = function (t, e) {
        return this._iter.get(t, e);
      }, Ie.prototype.has = function (t) {
        return this._iter.has(t);
      }, Ie.prototype.valueSeq = function () {
        return this._iter.valueSeq();
      }, Ie.prototype.reverse = function () {
        var t = this,
            e = Ce(this, !0);
        return this._useKeys || (e.valueSeq = function () {
          return t._iter.toSeq().reverse();
        }), e;
      }, Ie.prototype.map = function (t, e) {
        var n = this,
            r = je(this, t, e);
        return this._useKeys || (r.valueSeq = function () {
          return n._iter.toSeq().map(t, e);
        }), r;
      }, Ie.prototype.__iterate = function (t, e) {
        var n,
            r = this;
        return this._iter.__iterate(this._useKeys ? function (e, n) {
          return t(e, n, r);
        } : (n = e ? We(this) : 0, function (i) {
          return t(i, e ? --n : n++, r);
        }), e);
      }, Ie.prototype.__iterator = function (t, e) {
        if (this._useKeys) return this._iter.__iterator(t, e);

        var n = this._iter.__iterator(1, e),
            r = e ? We(this) : 0;

        return new R(function () {
          var i = n.next();
          return i.done ? i : A(t, e ? --r : r++, i.value, i);
        });
      }, Ie.prototype[d] = !0, e(Me, W), Me.prototype.includes = function (t) {
        return this._iter.includes(t);
      }, Me.prototype.__iterate = function (t, e) {
        var n = this,
            r = 0;
        return this._iter.__iterate(function (e) {
          return t(e, r++, n);
        }, e);
      }, Me.prototype.__iterator = function (t, e) {
        var n = this._iter.__iterator(1, e),
            r = 0;

        return new R(function () {
          var e = n.next();
          return e.done ? e : A(t, r++, e.value, e);
        });
      }, e(ze, N), ze.prototype.has = function (t) {
        return this._iter.includes(t);
      }, ze.prototype.__iterate = function (t, e) {
        var n = this;
        return this._iter.__iterate(function (e) {
          return t(e, e, n);
        }, e);
      }, ze.prototype.__iterator = function (t, e) {
        var n = this._iter.__iterator(1, e);

        return new R(function () {
          var e = n.next();
          return e.done ? e : A(t, e.value, e.value, e);
        });
      }, e(ke, V), ke.prototype.entrySeq = function () {
        return this._iter.toSeq();
      }, ke.prototype.__iterate = function (t, e) {
        var n = this;
        return this._iter.__iterate(function (e) {
          if (e) {
            Ve(e);
            var r = u(e);
            return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n);
          }
        }, e);
      }, ke.prototype.__iterator = function (t, e) {
        var n = this._iter.__iterator(1, e);

        return new R(function () {
          for (;;) {
            var e = n.next();
            if (e.done) return e;
            var r = e.value;

            if (r) {
              Ve(r);
              var i = u(r);
              return A(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e);
            }
          }
        });
      }, Me.prototype.cacheResult = Ie.prototype.cacheResult = ze.prototype.cacheResult = ke.prototype.cacheResult = Je, e(Ye, ht), Ye.prototype.toString = function () {
        return this.__toString(Ze(this) + " {", "}");
      }, Ye.prototype.has = function (t) {
        return this._defaultValues.hasOwnProperty(t);
      }, Ye.prototype.get = function (t, e) {
        if (!this.has(t)) return e;
        var n = this._defaultValues[t];
        return this._map ? this._map.get(t, n) : n;
      }, Ye.prototype.clear = function () {
        if (this.__ownerID) return this._map && this._map.clear(), this;
        var t = this.constructor;
        return t._empty || (t._empty = Xe(this, Wt()));
      }, Ye.prototype.set = function (t, e) {
        if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + Ze(this));
        if (this._map && !this._map.has(t) && e === this._defaultValues[t]) return this;

        var n = this._map && this._map.set(t, e);

        return this.__ownerID || n === this._map ? this : Xe(this, n);
      }, Ye.prototype.remove = function (t) {
        if (!this.has(t)) return this;

        var e = this._map && this._map.remove(t);

        return this.__ownerID || e === this._map ? this : Xe(this, e);
      }, Ye.prototype.wasAltered = function () {
        return this._map.wasAltered();
      }, Ye.prototype.__iterator = function (t, e) {
        var n = this;
        return r(this._defaultValues).map(function (t, e) {
          return n.get(e);
        }).__iterator(t, e);
      }, Ye.prototype.__iterate = function (t, e) {
        var n = this;
        return r(this._defaultValues).map(function (t, e) {
          return n.get(e);
        }).__iterate(t, e);
      }, Ye.prototype.__ensureOwner = function (t) {
        if (t === this.__ownerID) return this;

        var e = this._map && this._map.__ensureOwner(t);

        return t ? Xe(this, e, t) : (this.__ownerID = t, this._map = e, this);
      };
      var Qe = Ye.prototype;

      function Xe(t, e, n) {
        var r = Object.create(Object.getPrototypeOf(t));
        return r._map = e, r.__ownerID = n, r;
      }

      function Ze(t) {
        return t._name || t.constructor.name || "Record";
      }

      function tn(t, e) {
        Object.defineProperty(t, e, {
          get: function get() {
            return this.get(e);
          },
          set: function set(t) {
            ct(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t);
          }
        });
      }

      function en(t) {
        return null == t ? cn() : nn(t) && !f(t) ? t : cn().withMutations(function (e) {
          var n = o(t);
          kt(n.size), n.forEach(function (t) {
            return e.add(t);
          });
        });
      }

      function nn(t) {
        return !(!t || !t[on]);
      }

      Qe["delete"] = Qe.remove, Qe.deleteIn = Qe.removeIn = Rt.removeIn, Qe.merge = Rt.merge, Qe.mergeWith = Rt.mergeWith, Qe.mergeIn = Rt.mergeIn, Qe.mergeDeep = Rt.mergeDeep, Qe.mergeDeepWith = Rt.mergeDeepWith, Qe.mergeDeepIn = Rt.mergeDeepIn, Qe.setIn = Rt.setIn, Qe.update = Rt.update, Qe.updateIn = Rt.updateIn, Qe.withMutations = Rt.withMutations, Qe.asMutable = Rt.asMutable, Qe.asImmutable = Rt.asImmutable, e(en, dt), en.of = function () {
        return this(arguments);
      }, en.fromKeys = function (t) {
        return this(r(t).keySeq());
      }, en.prototype.toString = function () {
        return this.__toString("Set {", "}");
      }, en.prototype.has = function (t) {
        return this._map.has(t);
      }, en.prototype.add = function (t) {
        return an(this, this._map.set(t, !0));
      }, en.prototype.remove = function (t) {
        return an(this, this._map.remove(t));
      }, en.prototype.clear = function () {
        return an(this, this._map.clear());
      }, en.prototype.union = function () {
        var e = t.call(arguments, 0);
        return 0 === (e = e.filter(function (t) {
          return 0 !== t.size;
        })).length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations(function (t) {
          for (var n = 0; n < e.length; n++) {
            o(e[n]).forEach(function (e) {
              return t.add(e);
            });
          }
        }) : this.constructor(e[0]);
      }, en.prototype.intersect = function () {
        var e = t.call(arguments, 0);
        if (0 === e.length) return this;
        e = e.map(function (t) {
          return o(t);
        });
        var n = this;
        return this.withMutations(function (t) {
          n.forEach(function (n) {
            e.every(function (t) {
              return t.includes(n);
            }) || t.remove(n);
          });
        });
      }, en.prototype.subtract = function () {
        var e = t.call(arguments, 0);
        if (0 === e.length) return this;
        e = e.map(function (t) {
          return o(t);
        });
        var n = this;
        return this.withMutations(function (t) {
          n.forEach(function (n) {
            e.some(function (t) {
              return t.includes(n);
            }) && t.remove(n);
          });
        });
      }, en.prototype.merge = function () {
        return this.union.apply(this, arguments);
      }, en.prototype.mergeWith = function (e) {
        var n = t.call(arguments, 1);
        return this.union.apply(this, n);
      }, en.prototype.sort = function (t) {
        return fn(Te(this, t));
      }, en.prototype.sortBy = function (t, e) {
        return fn(Te(this, e, t));
      }, en.prototype.wasAltered = function () {
        return this._map.wasAltered();
      }, en.prototype.__iterate = function (t, e) {
        var n = this;
        return this._map.__iterate(function (e, r) {
          return t(r, r, n);
        }, e);
      }, en.prototype.__iterator = function (t, e) {
        return this._map.map(function (t, e) {
          return e;
        }).__iterator(t, e);
      }, en.prototype.__ensureOwner = function (t) {
        if (t === this.__ownerID) return this;

        var e = this._map.__ensureOwner(t);

        return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this);
      }, en.isSet = nn;
      var rn,
          on = "@@__IMMUTABLE_SET__@@",
          un = en.prototype;

      function an(t, e) {
        return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
      }

      function sn(t, e) {
        var n = Object.create(un);
        return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
      }

      function cn() {
        return rn || (rn = sn(Wt()));
      }

      function fn(t) {
        return null == t ? vn() : ln(t) ? t : vn().withMutations(function (e) {
          var n = o(t);
          kt(n.size), n.forEach(function (t) {
            return e.add(t);
          });
        });
      }

      function ln(t) {
        return nn(t) && f(t);
      }

      un[on] = !0, un["delete"] = un.remove, un.mergeDeep = un.merge, un.mergeDeepWith = un.mergeWith, un.withMutations = Rt.withMutations, un.asMutable = Rt.asMutable, un.asImmutable = Rt.asImmutable, un.__empty = cn, un.__make = sn, e(fn, en), fn.of = function () {
        return this(arguments);
      }, fn.fromKeys = function (t) {
        return this(r(t).keySeq());
      }, fn.prototype.toString = function () {
        return this.__toString("OrderedSet {", "}");
      }, fn.isOrderedSet = ln;
      var hn,
          pn = fn.prototype;

      function dn(t, e) {
        var n = Object.create(pn);
        return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
      }

      function vn() {
        return hn || (hn = dn(Ee()));
      }

      function yn(t) {
        return null == t ? On() : gn(t) ? t : On().unshiftAll(t);
      }

      function gn(t) {
        return !(!t || !t[bn]);
      }

      pn[d] = !0, pn.__empty = vn, pn.__make = dn, e(yn, pt), yn.of = function () {
        return this(arguments);
      }, yn.prototype.toString = function () {
        return this.__toString("Stack [", "]");
      }, yn.prototype.get = function (t, e) {
        var n = this._head;

        for (t = O(this, t); n && t--;) {
          n = n.next;
        }

        return n ? n.value : e;
      }, yn.prototype.peek = function () {
        return this._head && this._head.value;
      }, yn.prototype.push = function () {
        if (0 === arguments.length) return this;

        for (var t = this.size + arguments.length, e = this._head, n = arguments.length - 1; n >= 0; n--) {
          e = {
            value: arguments[n],
            next: e
          };
        }

        return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : Sn(t, e);
      }, yn.prototype.pushAll = function (t) {
        if (0 === (t = i(t)).size) return this;
        kt(t.size);
        var e = this.size,
            n = this._head;
        return t.reverse().forEach(function (t) {
          e++, n = {
            value: t,
            next: n
          };
        }), this.__ownerID ? (this.size = e, this._head = n, this.__hash = void 0, this.__altered = !0, this) : Sn(e, n);
      }, yn.prototype.pop = function () {
        return this.slice(1);
      }, yn.prototype.unshift = function () {
        return this.push.apply(this, arguments);
      }, yn.prototype.unshiftAll = function (t) {
        return this.pushAll(t);
      }, yn.prototype.shift = function () {
        return this.pop.apply(this, arguments);
      }, yn.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : On();
      }, yn.prototype.slice = function (t, e) {
        if (x(t, e, this.size)) return this;
        var n = I(t, this.size);
        if (M(e, this.size) !== this.size) return pt.prototype.slice.call(this, t, e);

        for (var r = this.size - n, i = this._head; n--;) {
          i = i.next;
        }

        return this.__ownerID ? (this.size = r, this._head = i, this.__hash = void 0, this.__altered = !0, this) : Sn(r, i);
      }, yn.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? Sn(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
      }, yn.prototype.__iterate = function (t, e) {
        if (e) return this.reverse().__iterate(t);

        for (var n = 0, r = this._head; r && !1 !== t(r.value, n++, this);) {
          r = r.next;
        }

        return n;
      }, yn.prototype.__iterator = function (t, e) {
        if (e) return this.reverse().__iterator(t);
        var n = 0,
            r = this._head;
        return new R(function () {
          if (r) {
            var e = r.value;
            return r = r.next, A(t, n++, e);
          }

          return {
            value: void 0,
            done: !0
          };
        });
      }, yn.isStack = gn;
      var mn,
          bn = "@@__IMMUTABLE_STACK__@@",
          wn = yn.prototype;

      function Sn(t, e, n, r) {
        var i = Object.create(wn);
        return i.size = t, i._head = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i;
      }

      function On() {
        return mn || (mn = Sn(0));
      }

      function En(t, e) {
        var n = function n(_n2) {
          t.prototype[_n2] = e[_n2];
        };

        return Object.keys(e).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(n), t;
      }

      wn[bn] = !0, wn.withMutations = Rt.withMutations, wn.asMutable = Rt.asMutable, wn.asImmutable = Rt.asImmutable, wn.wasAltered = Rt.wasAltered, n.Iterator = R, En(n, {
        toArray: function toArray() {
          kt(this.size);
          var t = new Array(this.size || 0);
          return this.valueSeq().__iterate(function (e, n) {
            t[n] = e;
          }), t;
        },
        toIndexedSeq: function toIndexedSeq() {
          return new Me(this);
        },
        toJS: function toJS() {
          return this.toSeq().map(function (t) {
            return t && "function" == typeof t.toJS ? t.toJS() : t;
          }).__toJS();
        },
        toJSON: function toJSON() {
          return this.toSeq().map(function (t) {
            return t && "function" == typeof t.toJSON ? t.toJSON() : t;
          }).__toJS();
        },
        toKeyedSeq: function toKeyedSeq() {
          return new Ie(this, !0);
        },
        toMap: function toMap() {
          return Dt(this.toKeyedSeq());
        },
        toObject: function toObject() {
          kt(this.size);
          var t = {};
          return this.__iterate(function (e, n) {
            t[n] = e;
          }), t;
        },
        toOrderedMap: function toOrderedMap() {
          return we(this.toKeyedSeq());
        },
        toOrderedSet: function toOrderedSet() {
          return fn(a(this) ? this.valueSeq() : this);
        },
        toSet: function toSet() {
          return en(a(this) ? this.valueSeq() : this);
        },
        toSetSeq: function toSetSeq() {
          return new ze(this);
        },
        toSeq: function toSeq() {
          return s(this) ? this.toIndexedSeq() : a(this) ? this.toKeyedSeq() : this.toSetSeq();
        },
        toStack: function toStack() {
          return yn(a(this) ? this.valueSeq() : this);
        },
        toList: function toList() {
          return ie(a(this) ? this.valueSeq() : this);
        },
        toString: function toString() {
          return "[Iterable]";
        },
        __toString: function __toString(t, e) {
          return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
        },
        concat: function concat() {
          var e = t.call(arguments, 0);
          return Ue(this, qe(this, e));
        },
        includes: function includes(t) {
          return this.some(function (e) {
            return ut(e, t);
          });
        },
        entries: function entries() {
          return this.__iterator(2);
        },
        every: function every(t, e) {
          kt(this.size);
          var n = !0;
          return this.__iterate(function (r, i, o) {
            if (!t.call(e, r, i, o)) return n = !1, !1;
          }), n;
        },
        filter: function filter(t, e) {
          return Ue(this, Pe(this, t, e, !0));
        },
        find: function find(t, e, n) {
          var r = this.findEntry(t, e);
          return r ? r[1] : n;
        },
        forEach: function forEach(t, e) {
          return kt(this.size), this.__iterate(e ? t.bind(e) : t);
        },
        join: function join(t) {
          kt(this.size), t = void 0 !== t ? "" + t : ",";
          var e = "",
              n = !0;
          return this.__iterate(function (r) {
            n ? n = !1 : e += t, e += null != r ? r.toString() : "";
          }), e;
        },
        keys: function keys() {
          return this.__iterator(0);
        },
        map: function map(t, e) {
          return Ue(this, je(this, t, e));
        },
        reduce: function reduce(t, e, n) {
          var r, i;
          return kt(this.size), arguments.length < 2 ? i = !0 : r = e, this.__iterate(function (e, o, u) {
            i ? (i = !1, r = e) : r = t.call(n, r, e, o, u);
          }), r;
        },
        reduceRight: function reduceRight(t, e, n) {
          var r = this.toKeyedSeq().reverse();
          return r.reduce.apply(r, arguments);
        },
        reverse: function reverse() {
          return Ue(this, Ce(this, !0));
        },
        slice: function slice(t, e) {
          return Ue(this, Re(this, t, e, !0));
        },
        some: function some(t, e) {
          return !this.every(kn(t), e);
        },
        sort: function sort(t) {
          return Ue(this, Te(this, t));
        },
        values: function values() {
          return this.__iterator(1);
        },
        butLast: function butLast() {
          return this.slice(0, -1);
        },
        isEmpty: function isEmpty() {
          return void 0 !== this.size ? 0 === this.size : !this.some(function () {
            return !0;
          });
        },
        count: function count(t, e) {
          return S(t ? this.toSeq().filter(t, e) : this);
        },
        countBy: function countBy(t, e) {
          return function (t, e, n) {
            var r = Dt().asMutable();
            return t.__iterate(function (i, o) {
              r.update(e.call(n, i, o, t), 0, function (t) {
                return t + 1;
              });
            }), r.asImmutable();
          }(this, t, e);
        },
        equals: function equals(t) {
          return at(this, t);
        },
        entrySeq: function entrySeq() {
          var t = this;
          if (t._cache) return new H(t._cache);
          var e = t.toSeq().map(zn).toIndexedSeq();
          return e.fromEntrySeq = function () {
            return t.toSeq();
          }, e;
        },
        filterNot: function filterNot(t, e) {
          return this.filter(kn(t), e);
        },
        findEntry: function findEntry(t, e, n) {
          var r = n;
          return this.__iterate(function (n, i, o) {
            if (t.call(e, n, i, o)) return r = [i, n], !1;
          }), r;
        },
        findKey: function findKey(t, e) {
          var n = this.findEntry(t, e);
          return n && n[0];
        },
        findLast: function findLast(t, e, n) {
          return this.toKeyedSeq().reverse().find(t, e, n);
        },
        findLastEntry: function findLastEntry(t, e, n) {
          return this.toKeyedSeq().reverse().findEntry(t, e, n);
        },
        findLastKey: function findLastKey(t, e) {
          return this.toKeyedSeq().reverse().findKey(t, e);
        },
        first: function first() {
          return this.find(E);
        },
        flatMap: function flatMap(t, e) {
          return Ue(this, function (t, e, n) {
            var r = Ne(t);
            return t.toSeq().map(function (i, o) {
              return r(e.call(n, i, o, t));
            }).flatten(!0);
          }(this, t, e));
        },
        flatten: function flatten(t) {
          return Ue(this, Be(this, t, !0));
        },
        fromEntrySeq: function fromEntrySeq() {
          return new ke(this);
        },
        get: function get(t, e) {
          return this.find(function (e, n) {
            return ut(n, t);
          }, void 0, e);
        },
        getIn: function getIn(t, e) {
          for (var n, r = this, i = Ge(t); !(n = i.next()).done;) {
            var o = n.value;
            if ((r = r && r.get ? r.get(o, _) : _) === _) return e;
          }

          return r;
        },
        groupBy: function groupBy(t, e) {
          return function (t, e, n) {
            var r = a(t),
                i = (f(t) ? we() : Dt()).asMutable();

            t.__iterate(function (o, u) {
              i.update(e.call(n, o, u, t), function (t) {
                return (t = t || []).push(r ? [u, o] : o), t;
              });
            });

            var o = Ne(t);
            return i.map(function (e) {
              return Ue(t, o(e));
            });
          }(this, t, e);
        },
        has: function has(t) {
          return this.get(t, _) !== _;
        },
        hasIn: function hasIn(t) {
          return this.getIn(t, _) !== _;
        },
        isSubset: function isSubset(t) {
          return t = "function" == typeof t.includes ? t : n(t), this.every(function (e) {
            return t.includes(e);
          });
        },
        isSuperset: function isSuperset(t) {
          return (t = "function" == typeof t.isSubset ? t : n(t)).isSubset(this);
        },
        keyOf: function keyOf(t) {
          return this.findKey(function (e) {
            return ut(e, t);
          });
        },
        keySeq: function keySeq() {
          return this.toSeq().map(Mn).toIndexedSeq();
        },
        last: function last() {
          return this.toSeq().reverse().first();
        },
        lastKeyOf: function lastKeyOf(t) {
          return this.toKeyedSeq().reverse().keyOf(t);
        },
        max: function max(t) {
          return Ke(this, t);
        },
        maxBy: function maxBy(t, e) {
          return Ke(this, e, t);
        },
        min: function min(t) {
          return Ke(this, t ? Dn(t) : Pn);
        },
        minBy: function minBy(t, e) {
          return Ke(this, e ? Dn(e) : Pn, t);
        },
        rest: function rest() {
          return this.slice(1);
        },
        skip: function skip(t) {
          return this.slice(Math.max(0, t));
        },
        skipLast: function skipLast(t) {
          return Ue(this, this.toSeq().reverse().skip(t).reverse());
        },
        skipWhile: function skipWhile(t, e) {
          return Ue(this, Ae(this, t, e, !0));
        },
        skipUntil: function skipUntil(t, e) {
          return this.skipWhile(kn(t), e);
        },
        sortBy: function sortBy(t, e) {
          return Ue(this, Te(this, e, t));
        },
        take: function take(t) {
          return this.slice(0, Math.max(0, t));
        },
        takeLast: function takeLast(t) {
          return Ue(this, this.toSeq().reverse().take(t).reverse());
        },
        takeWhile: function takeWhile(t, e) {
          return Ue(this, function (t, e, n) {
            var r = He(t);
            return r.__iterateUncached = function (r, i) {
              var o = this;
              if (i) return this.cacheResult().__iterate(r, i);
              var u = 0;
              return t.__iterate(function (t, i, a) {
                return e.call(n, t, i, a) && ++u && r(t, i, o);
              }), u;
            }, r.__iteratorUncached = function (r, i) {
              var o = this;
              if (i) return this.cacheResult().__iterator(r, i);

              var u = t.__iterator(2, i),
                  a = !0;

              return new R(function () {
                if (!a) return {
                  value: void 0,
                  done: !0
                };
                var t = u.next();
                if (t.done) return t;
                var i = t.value,
                    s = i[0],
                    c = i[1];
                return e.call(n, c, s, o) ? 2 === r ? t : A(r, s, c, t) : (a = !1, {
                  value: void 0,
                  done: !0
                });
              });
            }, r;
          }(this, t, e));
        },
        takeUntil: function takeUntil(t, e) {
          return this.takeWhile(kn(t), e);
        },
        valueSeq: function valueSeq() {
          return this.toIndexedSeq();
        },
        hashCode: function hashCode() {
          return this.__hash || (this.__hash = function (t) {
            if (t.size === 1 / 0) return 0;
            var e = f(t),
                n = a(t),
                r = e ? 1 : 0;
            return function (t, e) {
              return e = _t(e, 3432918353), e = _t(e << 15 | e >>> -15, 461845907), e = _t(e << 13 | e >>> -13, 5), e = _t((e = (e + 3864292196 | 0) ^ t) ^ e >>> 16, 2246822507), vt((e = _t(e ^ e >>> 13, 3266489909)) ^ e >>> 16);
            }(t.__iterate(n ? e ? function (t, e) {
              r = 31 * r + Rn(yt(t), yt(e)) | 0;
            } : function (t, e) {
              r = r + Rn(yt(t), yt(e)) | 0;
            } : e ? function (t) {
              r = 31 * r + yt(t) | 0;
            } : function (t) {
              r = r + yt(t) | 0;
            }), r);
          }(this));
        }
      });
      var xn = n.prototype;
      xn[l] = !0, xn[P] = xn.values, xn.__toJS = xn.toArray, xn.__toStringMapper = jn, xn.inspect = xn.toSource = function () {
        return this.toString();
      }, xn.chain = xn.flatMap, xn.contains = xn.includes, En(r, {
        flip: function flip() {
          return Ue(this, De(this));
        },
        mapEntries: function mapEntries(t, e) {
          var n = this,
              r = 0;
          return Ue(this, this.toSeq().map(function (i, o) {
            return t.call(e, [o, i], r++, n);
          }).fromEntrySeq());
        },
        mapKeys: function mapKeys(t, e) {
          var n = this;
          return Ue(this, this.toSeq().flip().map(function (r, i) {
            return t.call(e, r, i, n);
          }).flip());
        }
      });
      var In = r.prototype;

      function Mn(t, e) {
        return e;
      }

      function zn(t, e) {
        return [e, t];
      }

      function kn(t) {
        return function () {
          return !t.apply(this, arguments);
        };
      }

      function Dn(t) {
        return function () {
          return -t.apply(this, arguments);
        };
      }

      function jn(t) {
        return "string" == typeof t ? JSON.stringify(t) : String(t);
      }

      function Cn() {
        return w(arguments);
      }

      function Pn(t, e) {
        return t < e ? 1 : t > e ? -1 : 0;
      }

      function Rn(t, e) {
        return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
      }

      return In[h] = !0, In[P] = xn.entries, In.__toJS = xn.toObject, In.__toStringMapper = function (t, e) {
        return JSON.stringify(e) + ": " + jn(t);
      }, En(i, {
        toKeyedSeq: function toKeyedSeq() {
          return new Ie(this, !1);
        },
        filter: function filter(t, e) {
          return Ue(this, Pe(this, t, e, !1));
        },
        findIndex: function findIndex(t, e) {
          var n = this.findEntry(t, e);
          return n ? n[0] : -1;
        },
        indexOf: function indexOf(t) {
          var e = this.keyOf(t);
          return void 0 === e ? -1 : e;
        },
        lastIndexOf: function lastIndexOf(t) {
          var e = this.lastKeyOf(t);
          return void 0 === e ? -1 : e;
        },
        reverse: function reverse() {
          return Ue(this, Ce(this, !1));
        },
        slice: function slice(t, e) {
          return Ue(this, Re(this, t, e, !1));
        },
        splice: function splice(t, e) {
          var n = arguments.length;
          if (e = Math.max(0 | e, 0), 0 === n || 2 === n && !e) return this;
          t = I(t, t < 0 ? this.count() : this.size);
          var r = this.slice(0, t);
          return Ue(this, 1 === n ? r : r.concat(w(arguments, 2), this.slice(t + e)));
        },
        findLastIndex: function findLastIndex(t, e) {
          var n = this.findLastEntry(t, e);
          return n ? n[0] : -1;
        },
        first: function first() {
          return this.get(0);
        },
        flatten: function flatten(t) {
          return Ue(this, Be(this, t, !1));
        },
        get: function get(t, e) {
          return (t = O(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, n) {
            return n === t;
          }, void 0, e);
        },
        has: function has(t) {
          return (t = O(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
        },
        interpose: function interpose(t) {
          return Ue(this, function (t, e) {
            var n = He(t);
            return n.size = t.size && 2 * t.size - 1, n.__iterateUncached = function (n, r) {
              var i = this,
                  o = 0;
              return t.__iterate(function (t, r) {
                return (!o || !1 !== n(e, o++, i)) && !1 !== n(t, o++, i);
              }, r), o;
            }, n.__iteratorUncached = function (n, r) {
              var i,
                  o = t.__iterator(1, r),
                  u = 0;

              return new R(function () {
                return (!i || u % 2) && (i = o.next()).done ? i : u % 2 ? A(n, u++, e) : A(n, u++, i.value, i);
              });
            }, n;
          }(this, t));
        },
        interleave: function interleave() {
          var t = [this].concat(w(arguments)),
              e = Le(this.toSeq(), W.of, t),
              n = e.flatten(!0);
          return e.size && (n.size = e.size * t.length), Ue(this, n);
        },
        keySeq: function keySeq() {
          return ft(0, this.size);
        },
        last: function last() {
          return this.get(-1);
        },
        skipWhile: function skipWhile(t, e) {
          return Ue(this, Ae(this, t, e, !1));
        },
        zip: function zip() {
          var t = [this].concat(w(arguments));
          return Ue(this, Le(this, Cn, t));
        },
        zipWith: function zipWith(t) {
          var e = w(arguments);
          return e[0] = this, Ue(this, Le(this, t, e));
        }
      }), i.prototype[p] = !0, i.prototype[d] = !0, En(o, {
        get: function get(t, e) {
          return this.has(t) ? t : e;
        },
        includes: function includes(t) {
          return this.has(t);
        },
        keySeq: function keySeq() {
          return this.valueSeq();
        }
      }), o.prototype.has = xn.includes, o.prototype.contains = o.prototype.includes, En(V, r.prototype), En(W, i.prototype), En(N, o.prototype), En(ht, r.prototype), En(pt, i.prototype), En(dt, o.prototype), {
        Iterable: n,
        Seq: U,
        Collection: lt,
        Map: Dt,
        OrderedMap: we,
        List: ie,
        Stack: yn,
        Set: en,
        OrderedSet: fn,
        Record: Ye,
        Range: ft,
        Repeat: st,
        is: ut,
        fromJS: rt
      };
    }();
  },
  13: function _(t, e) {
    t.exports = window.yoast.componentsNew;
  },
  14: function _(t, e) {
    t.exports = window.yoast.helpers;
  },
  15: function _(t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
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
  18: function _(t, e) {
    t.exports = window.yoast.draftJs;
  },
  20: function _(t, e, n) {
    t.exports = function () {
      "use strict";

      var t = Array.prototype.slice;

      function e(t, e) {
        e && (t.prototype = Object.create(e.prototype)), t.prototype.constructor = t;
      }

      function n(t) {
        return u(t) ? t : U(t);
      }

      function r(t) {
        return a(t) ? t : V(t);
      }

      function i(t) {
        return s(t) ? t : W(t);
      }

      function o(t) {
        return u(t) && !c(t) ? t : N(t);
      }

      function u(t) {
        return !(!t || !t[l]);
      }

      function a(t) {
        return !(!t || !t[h]);
      }

      function s(t) {
        return !(!t || !t[p]);
      }

      function c(t) {
        return a(t) || s(t);
      }

      function f(t) {
        return !(!t || !t[d]);
      }

      e(r, n), e(i, n), e(o, n), n.isIterable = u, n.isKeyed = a, n.isIndexed = s, n.isAssociative = c, n.isOrdered = f, n.Keyed = r, n.Indexed = i, n.Set = o;
      var l = "@@__IMMUTABLE_ITERABLE__@@",
          h = "@@__IMMUTABLE_KEYED__@@",
          p = "@@__IMMUTABLE_INDEXED__@@",
          d = "@@__IMMUTABLE_ORDERED__@@",
          _ = {},
          v = {
        value: !1
      },
          y = {
        value: !1
      };

      function g(t) {
        return t.value = !1, t;
      }

      function m(t) {
        t && (t.value = !0);
      }

      function b() {}

      function w(t, e) {
        e = e || 0;

        for (var n = Math.max(0, t.length - e), r = new Array(n), i = 0; i < n; i++) {
          r[i] = t[i + e];
        }

        return r;
      }

      function S(t) {
        return void 0 === t.size && (t.size = t.__iterate(E)), t.size;
      }

      function O(t, e) {
        if ("number" != typeof e) {
          var n = e >>> 0;
          if ("" + n !== e || 4294967295 === n) return NaN;
          e = n;
        }

        return e < 0 ? S(t) + e : e;
      }

      function E() {
        return !0;
      }

      function x(t, e, n) {
        return (0 === t || void 0 !== n && t <= -n) && (void 0 === e || void 0 !== n && e >= n);
      }

      function I(t, e) {
        return z(t, e, 0);
      }

      function M(t, e) {
        return z(t, e, e);
      }

      function z(t, e, n) {
        return void 0 === t ? n : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t);
      }

      var k,
          D,
          j,
          C = "function" == typeof Symbol && Symbol.iterator,
          P = C || "@@iterator";

      function R(t) {
        this.next = t;
      }

      function A(t, e, n, r) {
        var i = 0 === t ? e : 1 === t ? n : [e, n];
        return r ? r.value = i : r = {
          value: i,
          done: !1
        }, r;
      }

      function q() {
        return {
          value: void 0,
          done: !0
        };
      }

      function B(t) {
        return !!F(t);
      }

      function T(t) {
        return t && "function" == typeof t.next;
      }

      function K(t) {
        var e = F(t);
        return e && e.call(t);
      }

      function F(t) {
        var e = t && (C && t[C] || t["@@iterator"]);
        if ("function" == typeof e) return e;
      }

      function L(t) {
        return t && "number" == typeof t.length;
      }

      function U(t) {
        return null == t ? Q() : u(t) ? t.toSeq() : function (t) {
          var e = tt(t) || "object" == _typeof(t) && new J(t);
          if (!e) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
          return e;
        }(t);
      }

      function V(t) {
        return null == t ? Q().toKeyedSeq() : u(t) ? a(t) ? t.toSeq() : t.fromEntrySeq() : X(t);
      }

      function W(t) {
        return null == t ? Q() : u(t) ? a(t) ? t.entrySeq() : t.toIndexedSeq() : Z(t);
      }

      function N(t) {
        return (null == t ? Q() : u(t) ? a(t) ? t.entrySeq() : t : Z(t)).toSetSeq();
      }

      function H(t) {
        this._array = t, this.size = t.length;
      }

      function J(t) {
        var e = Object.keys(t);
        this._object = t, this._keys = e, this.size = e.length;
      }

      function $(t) {
        this._iterable = t, this.size = t.length || t.size;
      }

      function G(t) {
        this._iterator = t, this._iteratorCache = [];
      }

      function Y(t) {
        return !(!t || !t["@@__IMMUTABLE_SEQ__@@"]);
      }

      function Q() {
        return k || (k = new H([]));
      }

      function X(t) {
        var e = Array.isArray(t) ? new H(t).fromEntrySeq() : T(t) ? new G(t).fromEntrySeq() : B(t) ? new $(t).fromEntrySeq() : "object" == _typeof(t) ? new J(t) : void 0;
        if (!e) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
        return e;
      }

      function Z(t) {
        var e = tt(t);
        if (!e) throw new TypeError("Expected Array or iterable object of values: " + t);
        return e;
      }

      function tt(t) {
        return L(t) ? new H(t) : T(t) ? new G(t) : B(t) ? new $(t) : void 0;
      }

      function et(t, e, n, r) {
        var i = t._cache;

        if (i) {
          for (var o = i.length - 1, u = 0; u <= o; u++) {
            var a = i[n ? o - u : u];
            if (!1 === e(a[1], r ? a[0] : u, t)) return u + 1;
          }

          return u;
        }

        return t.__iterateUncached(e, n);
      }

      function nt(t, e, n, r) {
        var i = t._cache;

        if (i) {
          var o = i.length - 1,
              u = 0;
          return new R(function () {
            var t = i[n ? o - u : u];
            return u++ > o ? {
              value: void 0,
              done: !0
            } : A(e, r ? t[0] : u - 1, t[1]);
          });
        }

        return t.__iteratorUncached(e, n);
      }

      function rt(t, e) {
        return e ? function t(e, n, r, i) {
          return Array.isArray(n) ? e.call(i, r, W(n).map(function (r, i) {
            return t(e, r, i, n);
          })) : ot(n) ? e.call(i, r, V(n).map(function (r, i) {
            return t(e, r, i, n);
          })) : n;
        }(e, t, "", {
          "": t
        }) : it(t);
      }

      function it(t) {
        return Array.isArray(t) ? W(t).map(it).toList() : ot(t) ? V(t).map(it).toMap() : t;
      }

      function ot(t) {
        return t && (t.constructor === Object || void 0 === t.constructor);
      }

      function ut(t, e) {
        if (t === e || t != t && e != e) return !0;
        if (!t || !e) return !1;

        if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
          if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e) return !0;
          if (!t || !e) return !1;
        }

        return !("function" != typeof t.equals || "function" != typeof e.equals || !t.equals(e));
      }

      function at(t, e) {
        if (t === e) return !0;
        if (!u(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || a(t) !== a(e) || s(t) !== s(e) || f(t) !== f(e)) return !1;
        if (0 === t.size && 0 === e.size) return !0;
        var n = !c(t);

        if (f(t)) {
          var r = t.entries();
          return e.every(function (t, e) {
            var i = r.next().value;
            return i && ut(i[1], t) && (n || ut(i[0], e));
          }) && r.next().done;
        }

        var i = !1;
        if (void 0 === t.size) if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();else {
          i = !0;
          var o = t;
          t = e, e = o;
        }

        var l = !0,
            h = e.__iterate(function (e, r) {
          if (n ? !t.has(e) : i ? !ut(e, t.get(r, _)) : !ut(t.get(r, _), e)) return l = !1, !1;
        });

        return l && t.size === h;
      }

      function st(t, e) {
        if (!(this instanceof st)) return new st(t, e);

        if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
          if (D) return D;
          D = this;
        }
      }

      function ct(t, e) {
        if (!t) throw new Error(e);
      }

      function ft(t, e, n) {
        if (!(this instanceof ft)) return new ft(t, e, n);

        if (ct(0 !== n, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), e < t && (n = -n), this._start = t, this._end = e, this._step = n, this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1), 0 === this.size) {
          if (j) return j;
          j = this;
        }
      }

      function lt() {
        throw TypeError("Abstract");
      }

      function ht() {}

      function pt() {}

      function dt() {}

      R.prototype.toString = function () {
        return "[Iterator]";
      }, R.KEYS = 0, R.VALUES = 1, R.ENTRIES = 2, R.prototype.inspect = R.prototype.toSource = function () {
        return this.toString();
      }, R.prototype[P] = function () {
        return this;
      }, e(U, n), U.of = function () {
        return U(arguments);
      }, U.prototype.toSeq = function () {
        return this;
      }, U.prototype.toString = function () {
        return this.__toString("Seq {", "}");
      }, U.prototype.cacheResult = function () {
        return !this._cache && this.__iterateUncached && (this._cache = this.entrySeq().toArray(), this.size = this._cache.length), this;
      }, U.prototype.__iterate = function (t, e) {
        return et(this, t, e, !0);
      }, U.prototype.__iterator = function (t, e) {
        return nt(this, t, e, !0);
      }, e(V, U), V.prototype.toKeyedSeq = function () {
        return this;
      }, e(W, U), W.of = function () {
        return W(arguments);
      }, W.prototype.toIndexedSeq = function () {
        return this;
      }, W.prototype.toString = function () {
        return this.__toString("Seq [", "]");
      }, W.prototype.__iterate = function (t, e) {
        return et(this, t, e, !1);
      }, W.prototype.__iterator = function (t, e) {
        return nt(this, t, e, !1);
      }, e(N, U), N.of = function () {
        return N(arguments);
      }, N.prototype.toSetSeq = function () {
        return this;
      }, U.isSeq = Y, U.Keyed = V, U.Set = N, U.Indexed = W, U.prototype["@@__IMMUTABLE_SEQ__@@"] = !0, e(H, W), H.prototype.get = function (t, e) {
        return this.has(t) ? this._array[O(this, t)] : e;
      }, H.prototype.__iterate = function (t, e) {
        for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++) {
          if (!1 === t(n[e ? r - i : i], i, this)) return i + 1;
        }

        return i;
      }, H.prototype.__iterator = function (t, e) {
        var n = this._array,
            r = n.length - 1,
            i = 0;
        return new R(function () {
          return i > r ? {
            value: void 0,
            done: !0
          } : A(t, i, n[e ? r - i++ : i++]);
        });
      }, e(J, V), J.prototype.get = function (t, e) {
        return void 0 === e || this.has(t) ? this._object[t] : e;
      }, J.prototype.has = function (t) {
        return this._object.hasOwnProperty(t);
      }, J.prototype.__iterate = function (t, e) {
        for (var n = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
          var u = r[e ? i - o : o];
          if (!1 === t(n[u], u, this)) return o + 1;
        }

        return o;
      }, J.prototype.__iterator = function (t, e) {
        var n = this._object,
            r = this._keys,
            i = r.length - 1,
            o = 0;
        return new R(function () {
          var u = r[e ? i - o : o];
          return o++ > i ? {
            value: void 0,
            done: !0
          } : A(t, u, n[u]);
        });
      }, J.prototype[d] = !0, e($, W), $.prototype.__iterateUncached = function (t, e) {
        if (e) return this.cacheResult().__iterate(t, e);
        var n = K(this._iterable),
            r = 0;
        if (T(n)) for (var i; !(i = n.next()).done && !1 !== t(i.value, r++, this);) {
          ;
        }
        return r;
      }, $.prototype.__iteratorUncached = function (t, e) {
        if (e) return this.cacheResult().__iterator(t, e);
        var n = K(this._iterable);
        if (!T(n)) return new R(q);
        var r = 0;
        return new R(function () {
          var e = n.next();
          return e.done ? e : A(t, r++, e.value);
        });
      }, e(G, W), G.prototype.__iterateUncached = function (t, e) {
        if (e) return this.cacheResult().__iterate(t, e);

        for (var n, r = this._iterator, i = this._iteratorCache, o = 0; o < i.length;) {
          if (!1 === t(i[o], o++, this)) return o;
        }

        for (; !(n = r.next()).done;) {
          var u = n.value;
          if (i[o] = u, !1 === t(u, o++, this)) break;
        }

        return o;
      }, G.prototype.__iteratorUncached = function (t, e) {
        if (e) return this.cacheResult().__iterator(t, e);
        var n = this._iterator,
            r = this._iteratorCache,
            i = 0;
        return new R(function () {
          if (i >= r.length) {
            var e = n.next();
            if (e.done) return e;
            r[i] = e.value;
          }

          return A(t, i, r[i++]);
        });
      }, e(st, W), st.prototype.toString = function () {
        return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
      }, st.prototype.get = function (t, e) {
        return this.has(t) ? this._value : e;
      }, st.prototype.includes = function (t) {
        return ut(this._value, t);
      }, st.prototype.slice = function (t, e) {
        var n = this.size;
        return x(t, e, n) ? this : new st(this._value, M(e, n) - I(t, n));
      }, st.prototype.reverse = function () {
        return this;
      }, st.prototype.indexOf = function (t) {
        return ut(this._value, t) ? 0 : -1;
      }, st.prototype.lastIndexOf = function (t) {
        return ut(this._value, t) ? this.size : -1;
      }, st.prototype.__iterate = function (t, e) {
        for (var n = 0; n < this.size; n++) {
          if (!1 === t(this._value, n, this)) return n + 1;
        }

        return n;
      }, st.prototype.__iterator = function (t, e) {
        var n = this,
            r = 0;
        return new R(function () {
          return r < n.size ? A(t, r++, n._value) : {
            value: void 0,
            done: !0
          };
        });
      }, st.prototype.equals = function (t) {
        return t instanceof st ? ut(this._value, t._value) : at(t);
      }, e(ft, W), ft.prototype.toString = function () {
        return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
      }, ft.prototype.get = function (t, e) {
        return this.has(t) ? this._start + O(this, t) * this._step : e;
      }, ft.prototype.includes = function (t) {
        var e = (t - this._start) / this._step;
        return e >= 0 && e < this.size && e === Math.floor(e);
      }, ft.prototype.slice = function (t, e) {
        return x(t, e, this.size) ? this : (t = I(t, this.size), (e = M(e, this.size)) <= t ? new ft(0, 0) : new ft(this.get(t, this._end), this.get(e, this._end), this._step));
      }, ft.prototype.indexOf = function (t) {
        var e = t - this._start;

        if (e % this._step == 0) {
          var n = e / this._step;
          if (n >= 0 && n < this.size) return n;
        }

        return -1;
      }, ft.prototype.lastIndexOf = function (t) {
        return this.indexOf(t);
      }, ft.prototype.__iterate = function (t, e) {
        for (var n = this.size - 1, r = this._step, i = e ? this._start + n * r : this._start, o = 0; o <= n; o++) {
          if (!1 === t(i, o, this)) return o + 1;
          i += e ? -r : r;
        }

        return o;
      }, ft.prototype.__iterator = function (t, e) {
        var n = this.size - 1,
            r = this._step,
            i = e ? this._start + n * r : this._start,
            o = 0;
        return new R(function () {
          var u = i;
          return i += e ? -r : r, o > n ? {
            value: void 0,
            done: !0
          } : A(t, o++, u);
        });
      }, ft.prototype.equals = function (t) {
        return t instanceof ft ? this._start === t._start && this._end === t._end && this._step === t._step : at(this, t);
      }, e(lt, n), e(ht, lt), e(pt, lt), e(dt, lt), lt.Keyed = ht, lt.Indexed = pt, lt.Set = dt;

      var _t = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, e) {
        var n = 65535 & (t |= 0),
            r = 65535 & (e |= 0);
        return n * r + ((t >>> 16) * r + n * (e >>> 16) << 16 >>> 0) | 0;
      };

      function vt(t) {
        return t >>> 1 & 1073741824 | 3221225471 & t;
      }

      function yt(t) {
        if (!1 === t || null == t) return 0;
        if ("function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t)) return 0;
        if (!0 === t) return 1;

        var e = _typeof(t);

        if ("number" === e) {
          var n = 0 | t;

          for (n !== t && (n ^= 4294967295 * t); t > 4294967295;) {
            n ^= t /= 4294967295;
          }

          return vt(n);
        }

        if ("string" === e) return t.length > xt ? function (t) {
          var e = zt[t];
          return void 0 === e && (e = gt(t), Mt === It && (Mt = 0, zt = {}), Mt++, zt[t] = e), e;
        }(t) : gt(t);
        if ("function" == typeof t.hashCode) return t.hashCode();
        if ("object" === e) return function (t) {
          var e;
          if (St && void 0 !== (e = mt.get(t))) return e;
          if (void 0 !== (e = t[Et])) return e;

          if (!wt) {
            if (void 0 !== (e = t.propertyIsEnumerable && t.propertyIsEnumerable[Et])) return e;
            if (void 0 !== (e = function (t) {
              if (t && t.nodeType > 0) switch (t.nodeType) {
                case 1:
                  return t.uniqueID;

                case 9:
                  return t.documentElement && t.documentElement.uniqueID;
              }
            }(t))) return e;
          }

          if (e = ++Ot, 1073741824 & Ot && (Ot = 0), St) mt.set(t, e);else {
            if (void 0 !== bt && !1 === bt(t)) throw new Error("Non-extensible objects are not allowed as keys.");
            if (wt) Object.defineProperty(t, Et, {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: e
            });else if (void 0 !== t.propertyIsEnumerable && t.propertyIsEnumerable === t.constructor.prototype.propertyIsEnumerable) t.propertyIsEnumerable = function () {
              return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
            }, t.propertyIsEnumerable[Et] = e;else {
              if (void 0 === t.nodeType) throw new Error("Unable to set a non-enumerable property on object.");
              t[Et] = e;
            }
          }
          return e;
        }(t);
        if ("function" == typeof t.toString) return gt(t.toString());
        throw new Error("Value type " + e + " cannot be hashed.");
      }

      function gt(t) {
        for (var e = 0, n = 0; n < t.length; n++) {
          e = 31 * e + t.charCodeAt(n) | 0;
        }

        return vt(e);
      }

      var mt,
          bt = Object.isExtensible,
          wt = function () {
        try {
          return Object.defineProperty({}, "@", {}), !0;
        } catch (t) {
          return !1;
        }
      }(),
          St = "function" == typeof WeakMap;

      St && (mt = new WeakMap());
      var Ot = 0,
          Et = "__immutablehash__";
      "function" == typeof Symbol && (Et = Symbol(Et));
      var xt = 16,
          It = 255,
          Mt = 0,
          zt = {};

      function kt(t) {
        ct(t !== 1 / 0, "Cannot perform this action with an infinite size.");
      }

      function Dt(t) {
        return null == t ? Wt() : jt(t) && !f(t) ? t : Wt().withMutations(function (e) {
          var n = r(t);
          kt(n.size), n.forEach(function (t, n) {
            return e.set(n, t);
          });
        });
      }

      function jt(t) {
        return !(!t || !t[Pt]);
      }

      e(Dt, ht), Dt.prototype.toString = function () {
        return this.__toString("Map {", "}");
      }, Dt.prototype.get = function (t, e) {
        return this._root ? this._root.get(0, void 0, t, e) : e;
      }, Dt.prototype.set = function (t, e) {
        return Nt(this, t, e);
      }, Dt.prototype.setIn = function (t, e) {
        return this.updateIn(t, _, function () {
          return e;
        });
      }, Dt.prototype.remove = function (t) {
        return Nt(this, t, _);
      }, Dt.prototype.deleteIn = function (t) {
        return this.updateIn(t, function () {
          return _;
        });
      }, Dt.prototype.update = function (t, e, n) {
        return 1 === arguments.length ? t(this) : this.updateIn([t], e, n);
      }, Dt.prototype.updateIn = function (t, e, n) {
        n || (n = e, e = void 0);

        var r = function t(e, n, r, i) {
          var o = e === _,
              u = n.next();

          if (u.done) {
            var a = o ? r : e,
                s = i(a);
            return s === a ? e : s;
          }

          ct(o || e && e.set, "invalid keyPath");
          var c = u.value,
              f = o ? _ : e.get(c, _),
              l = t(f, n, r, i);
          return l === f ? e : l === _ ? e.remove(c) : (o ? Wt() : e).set(c, l);
        }(this, Ge(t), e, n);

        return r === _ ? void 0 : r;
      }, Dt.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Wt();
      }, Dt.prototype.merge = function () {
        return Gt(this, void 0, arguments);
      }, Dt.prototype.mergeWith = function (e) {
        var n = t.call(arguments, 1);
        return Gt(this, e, n);
      }, Dt.prototype.mergeIn = function (e) {
        var n = t.call(arguments, 1);
        return this.updateIn(e, Wt(), function (t) {
          return "function" == typeof t.merge ? t.merge.apply(t, n) : n[n.length - 1];
        });
      }, Dt.prototype.mergeDeep = function () {
        return Gt(this, Yt, arguments);
      }, Dt.prototype.mergeDeepWith = function (e) {
        var n = t.call(arguments, 1);
        return Gt(this, Qt(e), n);
      }, Dt.prototype.mergeDeepIn = function (e) {
        var n = t.call(arguments, 1);
        return this.updateIn(e, Wt(), function (t) {
          return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, n) : n[n.length - 1];
        });
      }, Dt.prototype.sort = function (t) {
        return we(Te(this, t));
      }, Dt.prototype.sortBy = function (t, e) {
        return we(Te(this, e, t));
      }, Dt.prototype.withMutations = function (t) {
        var e = this.asMutable();
        return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
      }, Dt.prototype.asMutable = function () {
        return this.__ownerID ? this : this.__ensureOwner(new b());
      }, Dt.prototype.asImmutable = function () {
        return this.__ensureOwner();
      }, Dt.prototype.wasAltered = function () {
        return this.__altered;
      }, Dt.prototype.__iterator = function (t, e) {
        return new Ft(this, t, e);
      }, Dt.prototype.__iterate = function (t, e) {
        var n = this,
            r = 0;
        return this._root && this._root.iterate(function (e) {
          return r++, t(e[1], e[0], n);
        }, e), r;
      }, Dt.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? Vt(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
      }, Dt.isMap = jt;
      var Ct,
          Pt = "@@__IMMUTABLE_MAP__@@",
          Rt = Dt.prototype;

      function At(t, e) {
        this.ownerID = t, this.entries = e;
      }

      function qt(t, e, n) {
        this.ownerID = t, this.bitmap = e, this.nodes = n;
      }

      function Bt(t, e, n) {
        this.ownerID = t, this.count = e, this.nodes = n;
      }

      function Tt(t, e, n) {
        this.ownerID = t, this.keyHash = e, this.entries = n;
      }

      function Kt(t, e, n) {
        this.ownerID = t, this.keyHash = e, this.entry = n;
      }

      function Ft(t, e, n) {
        this._type = e, this._reverse = n, this._stack = t._root && Ut(t._root);
      }

      function Lt(t, e) {
        return A(t, e[0], e[1]);
      }

      function Ut(t, e) {
        return {
          node: t,
          index: 0,
          __prev: e
        };
      }

      function Vt(t, e, n, r) {
        var i = Object.create(Rt);
        return i.size = t, i._root = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i;
      }

      function Wt() {
        return Ct || (Ct = Vt(0));
      }

      function Nt(t, e, n) {
        var r, i;

        if (t._root) {
          var o = g(v),
              u = g(y);
          if (r = Ht(t._root, t.__ownerID, 0, void 0, e, n, o, u), !u.value) return t;
          i = t.size + (o.value ? n === _ ? -1 : 1 : 0);
        } else {
          if (n === _) return t;
          i = 1, r = new At(t.__ownerID, [[e, n]]);
        }

        return t.__ownerID ? (t.size = i, t._root = r, t.__hash = void 0, t.__altered = !0, t) : r ? Vt(i, r) : Wt();
      }

      function Ht(t, e, n, r, i, o, u, a) {
        return t ? t.update(e, n, r, i, o, u, a) : o === _ ? t : (m(a), m(u), new Kt(e, r, [i, o]));
      }

      function Jt(t) {
        return t.constructor === Kt || t.constructor === Tt;
      }

      function $t(t, e, n, r, i) {
        if (t.keyHash === r) return new Tt(e, r, [t.entry, i]);
        var o,
            u = 31 & (0 === n ? t.keyHash : t.keyHash >>> n),
            a = 31 & (0 === n ? r : r >>> n);
        return new qt(e, 1 << u | 1 << a, u === a ? [$t(t, e, n + 5, r, i)] : (o = new Kt(e, r, i), u < a ? [t, o] : [o, t]));
      }

      function Gt(t, e, n) {
        for (var i = [], o = 0; o < n.length; o++) {
          var a = n[o],
              s = r(a);
          u(a) || (s = s.map(function (t) {
            return rt(t);
          })), i.push(s);
        }

        return Xt(t, e, i);
      }

      function Yt(t, e, n) {
        return t && t.mergeDeep && u(e) ? t.mergeDeep(e) : ut(t, e) ? t : e;
      }

      function Qt(t) {
        return function (e, n, r) {
          if (e && e.mergeDeepWith && u(n)) return e.mergeDeepWith(t, n);
          var i = t(e, n, r);
          return ut(e, i) ? e : i;
        };
      }

      function Xt(t, e, n) {
        return 0 === (n = n.filter(function (t) {
          return 0 !== t.size;
        })).length ? t : 0 !== t.size || t.__ownerID || 1 !== n.length ? t.withMutations(function (t) {
          for (var r = e ? function (n, r) {
            t.update(r, _, function (t) {
              return t === _ ? n : e(t, n, r);
            });
          } : function (e, n) {
            t.set(n, e);
          }, i = 0; i < n.length; i++) {
            n[i].forEach(r);
          }
        }) : t.constructor(n[0]);
      }

      function Zt(t) {
        return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, 127 & (t += t >> 8) + (t >> 16);
      }

      function te(t, e, n, r) {
        var i = r ? t : w(t);
        return i[e] = n, i;
      }

      Rt[Pt] = !0, Rt["delete"] = Rt.remove, Rt.removeIn = Rt.deleteIn, At.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, o = 0, u = i.length; o < u; o++) {
          if (ut(n, i[o][0])) return i[o][1];
        }

        return r;
      }, At.prototype.update = function (t, e, n, r, i, o, u) {
        for (var a = i === _, s = this.entries, c = 0, f = s.length; c < f && !ut(r, s[c][0]); c++) {
          ;
        }

        var l = c < f;
        if (l ? s[c][1] === i : a) return this;

        if (m(u), (a || !l) && m(o), !a || 1 !== s.length) {
          if (!l && !a && s.length >= ee) return function (t, e, n, r) {
            t || (t = new b());

            for (var i = new Kt(t, yt(n), [n, r]), o = 0; o < e.length; o++) {
              var u = e[o];
              i = i.update(t, 0, void 0, u[0], u[1]);
            }

            return i;
          }(t, s, r, i);
          var h = t && t === this.ownerID,
              p = h ? s : w(s);
          return l ? a ? c === f - 1 ? p.pop() : p[c] = p.pop() : p[c] = [r, i] : p.push([r, i]), h ? (this.entries = p, this) : new At(t, p);
        }
      }, qt.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = yt(n));
        var i = 1 << (31 & (0 === t ? e : e >>> t)),
            o = this.bitmap;
        return 0 == (o & i) ? r : this.nodes[Zt(o & i - 1)].get(t + 5, e, n, r);
      }, qt.prototype.update = function (t, e, n, r, i, o, u) {
        void 0 === n && (n = yt(r));
        var a = 31 & (0 === e ? n : n >>> e),
            s = 1 << a,
            c = this.bitmap,
            f = 0 != (c & s);
        if (!f && i === _) return this;
        var l = Zt(c & s - 1),
            h = this.nodes,
            p = f ? h[l] : void 0,
            d = Ht(p, t, e + 5, n, r, i, o, u);
        if (d === p) return this;
        if (!f && d && h.length >= ne) return function (t, e, n, r, i) {
          for (var o = 0, u = new Array(32), a = 0; 0 !== n; a++, n >>>= 1) {
            u[a] = 1 & n ? e[o++] : void 0;
          }

          return u[r] = i, new Bt(t, o + 1, u);
        }(t, h, c, a, d);
        if (f && !d && 2 === h.length && Jt(h[1 ^ l])) return h[1 ^ l];
        if (f && d && 1 === h.length && Jt(d)) return d;
        var v = t && t === this.ownerID,
            y = f ? d ? c : c ^ s : c | s,
            g = f ? d ? te(h, l, d, v) : function (t, e, n) {
          var r = t.length - 1;
          if (n && e === r) return t.pop(), t;

          for (var i = new Array(r), o = 0, u = 0; u < r; u++) {
            u === e && (o = 1), i[u] = t[u + o];
          }

          return i;
        }(h, l, v) : function (t, e, n, r) {
          var i = t.length + 1;
          if (r && e + 1 === i) return t[e] = n, t;

          for (var o = new Array(i), u = 0, a = 0; a < i; a++) {
            a === e ? (o[a] = n, u = -1) : o[a] = t[a + u];
          }

          return o;
        }(h, l, d, v);
        return v ? (this.bitmap = y, this.nodes = g, this) : new qt(t, y, g);
      }, Bt.prototype.get = function (t, e, n, r) {
        void 0 === e && (e = yt(n));
        var i = 31 & (0 === t ? e : e >>> t),
            o = this.nodes[i];
        return o ? o.get(t + 5, e, n, r) : r;
      }, Bt.prototype.update = function (t, e, n, r, i, o, u) {
        void 0 === n && (n = yt(r));
        var a = 31 & (0 === e ? n : n >>> e),
            s = i === _,
            c = this.nodes,
            f = c[a];
        if (s && !f) return this;
        var l = Ht(f, t, e + 5, n, r, i, o, u);
        if (l === f) return this;
        var h = this.count;

        if (f) {
          if (!l && --h < re) return function (t, e, n, r) {
            for (var i = 0, o = 0, u = new Array(n), a = 0, s = 1, c = e.length; a < c; a++, s <<= 1) {
              var f = e[a];
              void 0 !== f && a !== r && (i |= s, u[o++] = f);
            }

            return new qt(t, i, u);
          }(t, c, h, a);
        } else h++;

        var p = t && t === this.ownerID,
            d = te(c, a, l, p);
        return p ? (this.count = h, this.nodes = d, this) : new Bt(t, h, d);
      }, Tt.prototype.get = function (t, e, n, r) {
        for (var i = this.entries, o = 0, u = i.length; o < u; o++) {
          if (ut(n, i[o][0])) return i[o][1];
        }

        return r;
      }, Tt.prototype.update = function (t, e, n, r, i, o, u) {
        void 0 === n && (n = yt(r));
        var a = i === _;
        if (n !== this.keyHash) return a ? this : (m(u), m(o), $t(this, t, e, n, [r, i]));

        for (var s = this.entries, c = 0, f = s.length; c < f && !ut(r, s[c][0]); c++) {
          ;
        }

        var l = c < f;
        if (l ? s[c][1] === i : a) return this;
        if (m(u), (a || !l) && m(o), a && 2 === f) return new Kt(t, this.keyHash, s[1 ^ c]);
        var h = t && t === this.ownerID,
            p = h ? s : w(s);
        return l ? a ? c === f - 1 ? p.pop() : p[c] = p.pop() : p[c] = [r, i] : p.push([r, i]), h ? (this.entries = p, this) : new Tt(t, this.keyHash, p);
      }, Kt.prototype.get = function (t, e, n, r) {
        return ut(n, this.entry[0]) ? this.entry[1] : r;
      }, Kt.prototype.update = function (t, e, n, r, i, o, u) {
        var a = i === _,
            s = ut(r, this.entry[0]);
        return (s ? i === this.entry[1] : a) ? this : (m(u), a ? void m(o) : s ? t && t === this.ownerID ? (this.entry[1] = i, this) : new Kt(t, this.keyHash, [r, i]) : (m(o), $t(this, t, e, yt(r), [r, i])));
      }, At.prototype.iterate = Tt.prototype.iterate = function (t, e) {
        for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++) {
          if (!1 === t(n[e ? i - r : r])) return !1;
        }
      }, qt.prototype.iterate = Bt.prototype.iterate = function (t, e) {
        for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
          var o = n[e ? i - r : r];
          if (o && !1 === o.iterate(t, e)) return !1;
        }
      }, Kt.prototype.iterate = function (t, e) {
        return t(this.entry);
      }, e(Ft, R), Ft.prototype.next = function () {
        for (var t = this._type, e = this._stack; e;) {
          var n,
              r = e.node,
              i = e.index++;

          if (r.entry) {
            if (0 === i) return Lt(t, r.entry);
          } else if (r.entries) {
            if (i <= (n = r.entries.length - 1)) return Lt(t, r.entries[this._reverse ? n - i : i]);
          } else if (i <= (n = r.nodes.length - 1)) {
            var o = r.nodes[this._reverse ? n - i : i];

            if (o) {
              if (o.entry) return Lt(t, o.entry);
              e = this._stack = Ut(o, e);
            }

            continue;
          }

          e = this._stack = this._stack.__prev;
        }

        return {
          value: void 0,
          done: !0
        };
      };
      var ee = 8,
          ne = 16,
          re = 8;

      function ie(t) {
        var e = de();
        if (null == t) return e;
        if (oe(t)) return t;
        var n = i(t),
            r = n.size;
        return 0 === r ? e : (kt(r), r > 0 && r < 32 ? pe(0, r, 5, null, new se(n.toArray())) : e.withMutations(function (t) {
          t.setSize(r), n.forEach(function (e, n) {
            return t.set(n, e);
          });
        }));
      }

      function oe(t) {
        return !(!t || !t[ue]);
      }

      e(ie, pt), ie.of = function () {
        return this(arguments);
      }, ie.prototype.toString = function () {
        return this.__toString("List [", "]");
      }, ie.prototype.get = function (t, e) {
        if ((t = O(this, t)) >= 0 && t < this.size) {
          var n = ye(this, t += this._origin);
          return n && n.array[31 & t];
        }

        return e;
      }, ie.prototype.set = function (t, e) {
        return function (t, e, n) {
          if ((e = O(t, e)) != e) return t;
          if (e >= t.size || e < 0) return t.withMutations(function (t) {
            e < 0 ? ge(t, e).set(0, n) : ge(t, 0, e + 1).set(e, n);
          });
          e += t._origin;
          var r = t._tail,
              i = t._root,
              o = g(y);
          return e >= be(t._capacity) ? r = _e(r, t.__ownerID, 0, e, n, o) : i = _e(i, t.__ownerID, t._level, e, n, o), o.value ? t.__ownerID ? (t._root = i, t._tail = r, t.__hash = void 0, t.__altered = !0, t) : pe(t._origin, t._capacity, t._level, i, r) : t;
        }(this, t, e);
      }, ie.prototype.remove = function (t) {
        return this.has(t) ? 0 === t ? this.shift() : t === this.size - 1 ? this.pop() : this.splice(t, 1) : this;
      }, ie.prototype.insert = function (t, e) {
        return this.splice(t, 0, e);
      }, ie.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = this._origin = this._capacity = 0, this._level = 5, this._root = this._tail = null, this.__hash = void 0, this.__altered = !0, this) : de();
      }, ie.prototype.push = function () {
        var t = arguments,
            e = this.size;
        return this.withMutations(function (n) {
          ge(n, 0, e + t.length);

          for (var r = 0; r < t.length; r++) {
            n.set(e + r, t[r]);
          }
        });
      }, ie.prototype.pop = function () {
        return ge(this, 0, -1);
      }, ie.prototype.unshift = function () {
        var t = arguments;
        return this.withMutations(function (e) {
          ge(e, -t.length);

          for (var n = 0; n < t.length; n++) {
            e.set(n, t[n]);
          }
        });
      }, ie.prototype.shift = function () {
        return ge(this, 1);
      }, ie.prototype.merge = function () {
        return me(this, void 0, arguments);
      }, ie.prototype.mergeWith = function (e) {
        var n = t.call(arguments, 1);
        return me(this, e, n);
      }, ie.prototype.mergeDeep = function () {
        return me(this, Yt, arguments);
      }, ie.prototype.mergeDeepWith = function (e) {
        var n = t.call(arguments, 1);
        return me(this, Qt(e), n);
      }, ie.prototype.setSize = function (t) {
        return ge(this, 0, t);
      }, ie.prototype.slice = function (t, e) {
        var n = this.size;
        return x(t, e, n) ? this : ge(this, I(t, n), M(e, n));
      }, ie.prototype.__iterator = function (t, e) {
        var n = 0,
            r = he(this, e);
        return new R(function () {
          var e = r();
          return e === le ? {
            value: void 0,
            done: !0
          } : A(t, n++, e);
        });
      }, ie.prototype.__iterate = function (t, e) {
        for (var n, r = 0, i = he(this, e); (n = i()) !== le && !1 !== t(n, r++, this);) {
          ;
        }

        return r;
      }, ie.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? pe(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this);
      }, ie.isList = oe;
      var ue = "@@__IMMUTABLE_LIST__@@",
          ae = ie.prototype;

      function se(t, e) {
        this.array = t, this.ownerID = e;
      }

      ae[ue] = !0, ae["delete"] = ae.remove, ae.setIn = Rt.setIn, ae.deleteIn = ae.removeIn = Rt.removeIn, ae.update = Rt.update, ae.updateIn = Rt.updateIn, ae.mergeIn = Rt.mergeIn, ae.mergeDeepIn = Rt.mergeDeepIn, ae.withMutations = Rt.withMutations, ae.asMutable = Rt.asMutable, ae.asImmutable = Rt.asImmutable, ae.wasAltered = Rt.wasAltered, se.prototype.removeBefore = function (t, e, n) {
        if (n === e ? 1 << e : 0 === this.array.length) return this;
        var r = n >>> e & 31;
        if (r >= this.array.length) return new se([], t);
        var i,
            o = 0 === r;

        if (e > 0) {
          var u = this.array[r];
          if ((i = u && u.removeBefore(t, e - 5, n)) === u && o) return this;
        }

        if (o && !i) return this;
        var a = ve(this, t);
        if (!o) for (var s = 0; s < r; s++) {
          a.array[s] = void 0;
        }
        return i && (a.array[r] = i), a;
      }, se.prototype.removeAfter = function (t, e, n) {
        if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this;
        var r,
            i = n - 1 >>> e & 31;
        if (i >= this.array.length) return this;

        if (e > 0) {
          var o = this.array[i];
          if ((r = o && o.removeAfter(t, e - 5, n)) === o && i === this.array.length - 1) return this;
        }

        var u = ve(this, t);
        return u.array.splice(i + 1), r && (u.array[i] = r), u;
      };
      var ce,
          fe,
          le = {};

      function he(t, e) {
        var n = t._origin,
            r = t._capacity,
            i = be(r),
            o = t._tail;
        return function t(u, a, s) {
          return 0 === a ? function (t, u) {
            var a = u === i ? o && o.array : t && t.array,
                s = u > n ? 0 : n - u,
                c = r - u;
            return c > 32 && (c = 32), function () {
              if (s === c) return le;
              var t = e ? --c : s++;
              return a && a[t];
            };
          }(u, s) : function (i, o, u) {
            var a,
                s = i && i.array,
                c = u > n ? 0 : n - u >> o,
                f = 1 + (r - u >> o);
            return f > 32 && (f = 32), function () {
              for (;;) {
                if (a) {
                  var n = a();
                  if (n !== le) return n;
                  a = null;
                }

                if (c === f) return le;
                var r = e ? --f : c++;
                a = t(s && s[r], o - 5, u + (r << o));
              }
            };
          }(u, a, s);
        }(t._root, t._level, 0);
      }

      function pe(t, e, n, r, i, o, u) {
        var a = Object.create(ae);
        return a.size = e - t, a._origin = t, a._capacity = e, a._level = n, a._root = r, a._tail = i, a.__ownerID = o, a.__hash = u, a.__altered = !1, a;
      }

      function de() {
        return ce || (ce = pe(0, 0, 5));
      }

      function _e(t, e, n, r, i, o) {
        var u,
            a = r >>> n & 31,
            s = t && a < t.array.length;
        if (!s && void 0 === i) return t;

        if (n > 0) {
          var c = t && t.array[a],
              f = _e(c, e, n - 5, r, i, o);

          return f === c ? t : ((u = ve(t, e)).array[a] = f, u);
        }

        return s && t.array[a] === i ? t : (m(o), u = ve(t, e), void 0 === i && a === u.array.length - 1 ? u.array.pop() : u.array[a] = i, u);
      }

      function ve(t, e) {
        return e && t && e === t.ownerID ? t : new se(t ? t.array.slice() : [], e);
      }

      function ye(t, e) {
        if (e >= be(t._capacity)) return t._tail;

        if (e < 1 << t._level + 5) {
          for (var n = t._root, r = t._level; n && r > 0;) {
            n = n.array[e >>> r & 31], r -= 5;
          }

          return n;
        }
      }

      function ge(t, e, n) {
        void 0 !== e && (e |= 0), void 0 !== n && (n |= 0);
        var r = t.__ownerID || new b(),
            i = t._origin,
            o = t._capacity,
            u = i + e,
            a = void 0 === n ? o : n < 0 ? o + n : i + n;
        if (u === i && a === o) return t;
        if (u >= a) return t.clear();

        for (var s = t._level, c = t._root, f = 0; u + f < 0;) {
          c = new se(c && c.array.length ? [void 0, c] : [], r), f += 1 << (s += 5);
        }

        f && (u += f, i += f, a += f, o += f);

        for (var l = be(o), h = be(a); h >= 1 << s + 5;) {
          c = new se(c && c.array.length ? [c] : [], r), s += 5;
        }

        var p = t._tail,
            d = h < l ? ye(t, a - 1) : h > l ? new se([], r) : p;

        if (p && h > l && u < o && p.array.length) {
          for (var _ = c = ve(c, r), v = s; v > 5; v -= 5) {
            var y = l >>> v & 31;
            _ = _.array[y] = ve(_.array[y], r);
          }

          _.array[l >>> 5 & 31] = p;
        }

        if (a < o && (d = d && d.removeAfter(r, 0, a)), u >= h) u -= h, a -= h, s = 5, c = null, d = d && d.removeBefore(r, 0, u);else if (u > i || h < l) {
          for (f = 0; c;) {
            var g = u >>> s & 31;
            if (g !== h >>> s & 31) break;
            g && (f += (1 << s) * g), s -= 5, c = c.array[g];
          }

          c && u > i && (c = c.removeBefore(r, s, u - f)), c && h < l && (c = c.removeAfter(r, s, h - f)), f && (u -= f, a -= f);
        }
        return t.__ownerID ? (t.size = a - u, t._origin = u, t._capacity = a, t._level = s, t._root = c, t._tail = d, t.__hash = void 0, t.__altered = !0, t) : pe(u, a, s, c, d);
      }

      function me(t, e, n) {
        for (var r = [], o = 0, a = 0; a < n.length; a++) {
          var s = n[a],
              c = i(s);
          c.size > o && (o = c.size), u(s) || (c = c.map(function (t) {
            return rt(t);
          })), r.push(c);
        }

        return o > t.size && (t = t.setSize(o)), Xt(t, e, r);
      }

      function be(t) {
        return t < 32 ? 0 : t - 1 >>> 5 << 5;
      }

      function we(t) {
        return null == t ? Ee() : Se(t) ? t : Ee().withMutations(function (e) {
          var n = r(t);
          kt(n.size), n.forEach(function (t, n) {
            return e.set(n, t);
          });
        });
      }

      function Se(t) {
        return jt(t) && f(t);
      }

      function Oe(t, e, n, r) {
        var i = Object.create(we.prototype);
        return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = n, i.__hash = r, i;
      }

      function Ee() {
        return fe || (fe = Oe(Wt(), de()));
      }

      function xe(t, e, n) {
        var r,
            i,
            o = t._map,
            u = t._list,
            a = o.get(e),
            s = void 0 !== a;

        if (n === _) {
          if (!s) return t;
          u.size >= 32 && u.size >= 2 * o.size ? (r = (i = u.filter(function (t, e) {
            return void 0 !== t && a !== e;
          })).toKeyedSeq().map(function (t) {
            return t[0];
          }).flip().toMap(), t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID)) : (r = o.remove(e), i = a === u.size - 1 ? u.pop() : u.set(a, void 0));
        } else if (s) {
          if (n === u.get(a)[1]) return t;
          r = o, i = u.set(a, [e, n]);
        } else r = o.set(e, u.size), i = u.set(u.size, [e, n]);

        return t.__ownerID ? (t.size = r.size, t._map = r, t._list = i, t.__hash = void 0, t) : Oe(r, i);
      }

      function Ie(t, e) {
        this._iter = t, this._useKeys = e, this.size = t.size;
      }

      function Me(t) {
        this._iter = t, this.size = t.size;
      }

      function ze(t) {
        this._iter = t, this.size = t.size;
      }

      function ke(t) {
        this._iter = t, this.size = t.size;
      }

      function De(t) {
        var e = He(t);
        return e._iter = t, e.size = t.size, e.flip = function () {
          return t;
        }, e.reverse = function () {
          var e = t.reverse.apply(this);
          return e.flip = function () {
            return t.reverse();
          }, e;
        }, e.has = function (e) {
          return t.includes(e);
        }, e.includes = function (e) {
          return t.has(e);
        }, e.cacheResult = Je, e.__iterateUncached = function (e, n) {
          var r = this;
          return t.__iterate(function (t, n) {
            return !1 !== e(n, t, r);
          }, n);
        }, e.__iteratorUncached = function (e, n) {
          if (2 === e) {
            var r = t.__iterator(e, n);

            return new R(function () {
              var t = r.next();

              if (!t.done) {
                var e = t.value[0];
                t.value[0] = t.value[1], t.value[1] = e;
              }

              return t;
            });
          }

          return t.__iterator(1 === e ? 0 : 1, n);
        }, e;
      }

      function je(t, e, n) {
        var r = He(t);
        return r.size = t.size, r.has = function (e) {
          return t.has(e);
        }, r.get = function (r, i) {
          var o = t.get(r, _);
          return o === _ ? i : e.call(n, o, r, t);
        }, r.__iterateUncached = function (r, i) {
          var o = this;
          return t.__iterate(function (t, i, u) {
            return !1 !== r(e.call(n, t, i, u), i, o);
          }, i);
        }, r.__iteratorUncached = function (r, i) {
          var o = t.__iterator(2, i);

          return new R(function () {
            var i = o.next();
            if (i.done) return i;
            var u = i.value,
                a = u[0];
            return A(r, a, e.call(n, u[1], a, t), i);
          });
        }, r;
      }

      function Ce(t, e) {
        var n = He(t);
        return n._iter = t, n.size = t.size, n.reverse = function () {
          return t;
        }, t.flip && (n.flip = function () {
          var e = De(t);
          return e.reverse = function () {
            return t.flip();
          }, e;
        }), n.get = function (n, r) {
          return t.get(e ? n : -1 - n, r);
        }, n.has = function (n) {
          return t.has(e ? n : -1 - n);
        }, n.includes = function (e) {
          return t.includes(e);
        }, n.cacheResult = Je, n.__iterate = function (e, n) {
          var r = this;
          return t.__iterate(function (t, n) {
            return e(t, n, r);
          }, !n);
        }, n.__iterator = function (e, n) {
          return t.__iterator(e, !n);
        }, n;
      }

      function Pe(t, e, n, r) {
        var i = He(t);
        return r && (i.has = function (r) {
          var i = t.get(r, _);
          return i !== _ && !!e.call(n, i, r, t);
        }, i.get = function (r, i) {
          var o = t.get(r, _);
          return o !== _ && e.call(n, o, r, t) ? o : i;
        }), i.__iterateUncached = function (i, o) {
          var u = this,
              a = 0;
          return t.__iterate(function (t, o, s) {
            if (e.call(n, t, o, s)) return a++, i(t, r ? o : a - 1, u);
          }, o), a;
        }, i.__iteratorUncached = function (i, o) {
          var u = t.__iterator(2, o),
              a = 0;

          return new R(function () {
            for (;;) {
              var o = u.next();
              if (o.done) return o;
              var s = o.value,
                  c = s[0],
                  f = s[1];
              if (e.call(n, f, c, t)) return A(i, r ? c : a++, f, o);
            }
          });
        }, i;
      }

      function Re(t, e, n, r) {
        var i = t.size;
        if (void 0 !== e && (e |= 0), void 0 !== n && (n |= 0), x(e, n, i)) return t;
        var o = I(e, i),
            u = M(n, i);
        if (o != o || u != u) return Re(t.toSeq().cacheResult(), e, n, r);
        var a,
            s = u - o;
        s == s && (a = s < 0 ? 0 : s);
        var c = He(t);
        return c.size = 0 === a ? a : t.size && a || void 0, !r && Y(t) && a >= 0 && (c.get = function (e, n) {
          return (e = O(this, e)) >= 0 && e < a ? t.get(e + o, n) : n;
        }), c.__iterateUncached = function (e, n) {
          var i = this;
          if (0 === a) return 0;
          if (n) return this.cacheResult().__iterate(e, n);
          var u = 0,
              s = !0,
              c = 0;
          return t.__iterate(function (t, n) {
            if (!s || !(s = u++ < o)) return c++, !1 !== e(t, r ? n : c - 1, i) && c !== a;
          }), c;
        }, c.__iteratorUncached = function (e, n) {
          if (0 !== a && n) return this.cacheResult().__iterator(e, n);

          var i = 0 !== a && t.__iterator(e, n),
              u = 0,
              s = 0;

          return new R(function () {
            for (; u++ < o;) {
              i.next();
            }

            if (++s > a) return {
              value: void 0,
              done: !0
            };
            var t = i.next();
            return r || 1 === e ? t : A(e, s - 1, 0 === e ? void 0 : t.value[1], t);
          });
        }, c;
      }

      function Ae(t, e, n, r) {
        var i = He(t);
        return i.__iterateUncached = function (i, o) {
          var u = this;
          if (o) return this.cacheResult().__iterate(i, o);
          var a = !0,
              s = 0;
          return t.__iterate(function (t, o, c) {
            if (!a || !(a = e.call(n, t, o, c))) return s++, i(t, r ? o : s - 1, u);
          }), s;
        }, i.__iteratorUncached = function (i, o) {
          var u = this;
          if (o) return this.cacheResult().__iterator(i, o);

          var a = t.__iterator(2, o),
              s = !0,
              c = 0;

          return new R(function () {
            var t, o, f;

            do {
              if ((t = a.next()).done) return r || 1 === i ? t : A(i, c++, 0 === i ? void 0 : t.value[1], t);
              var l = t.value;
              o = l[0], f = l[1], s && (s = e.call(n, f, o, u));
            } while (s);

            return 2 === i ? t : A(i, o, f, t);
          });
        }, i;
      }

      function qe(t, e) {
        var n = a(t),
            i = [t].concat(e).map(function (t) {
          return u(t) ? n && (t = r(t)) : t = n ? X(t) : Z(Array.isArray(t) ? t : [t]), t;
        }).filter(function (t) {
          return 0 !== t.size;
        });
        if (0 === i.length) return t;

        if (1 === i.length) {
          var o = i[0];
          if (o === t || n && a(o) || s(t) && s(o)) return o;
        }

        var c = new H(i);
        return n ? c = c.toKeyedSeq() : s(t) || (c = c.toSetSeq()), (c = c.flatten(!0)).size = i.reduce(function (t, e) {
          if (void 0 !== t) {
            var n = e.size;
            if (void 0 !== n) return t + n;
          }
        }, 0), c;
      }

      function Be(t, e, n) {
        var r = He(t);
        return r.__iterateUncached = function (r, i) {
          var o = 0,
              a = !1;
          return function t(s, c) {
            var f = this;

            s.__iterate(function (i, s) {
              return (!e || c < e) && u(i) ? t(i, c + 1) : !1 === r(i, n ? s : o++, f) && (a = !0), !a;
            }, i);
          }(t, 0), o;
        }, r.__iteratorUncached = function (r, i) {
          var o = t.__iterator(r, i),
              a = [],
              s = 0;

          return new R(function () {
            for (; o;) {
              var t = o.next();

              if (!1 === t.done) {
                var c = t.value;
                if (2 === r && (c = c[1]), e && !(a.length < e) || !u(c)) return n ? t : A(r, s++, c, t);
                a.push(o), o = c.__iterator(r, i);
              } else o = a.pop();
            }

            return {
              value: void 0,
              done: !0
            };
          });
        }, r;
      }

      function Te(t, e, n) {
        e || (e = $e);
        var r = a(t),
            i = 0,
            o = t.toSeq().map(function (e, r) {
          return [r, e, i++, n ? n(e, r, t) : e];
        }).toArray();
        return o.sort(function (t, n) {
          return e(t[3], n[3]) || t[2] - n[2];
        }).forEach(r ? function (t, e) {
          o[e].length = 2;
        } : function (t, e) {
          o[e] = t[1];
        }), r ? V(o) : s(t) ? W(o) : N(o);
      }

      function Ke(t, e, n) {
        if (e || (e = $e), n) {
          var r = t.toSeq().map(function (e, r) {
            return [e, n(e, r, t)];
          }).reduce(function (t, n) {
            return Fe(e, t[1], n[1]) ? n : t;
          });
          return r && r[0];
        }

        return t.reduce(function (t, n) {
          return Fe(e, t, n) ? n : t;
        });
      }

      function Fe(t, e, n) {
        var r = t(n, e);
        return 0 === r && n !== e && (null == n || n != n) || r > 0;
      }

      function Le(t, e, r) {
        var i = He(t);
        return i.size = new H(r).map(function (t) {
          return t.size;
        }).min(), i.__iterate = function (t, e) {
          for (var n, r = this.__iterator(1, e), i = 0; !(n = r.next()).done && !1 !== t(n.value, i++, this);) {
            ;
          }

          return i;
        }, i.__iteratorUncached = function (t, i) {
          var o = r.map(function (t) {
            return t = n(t), K(i ? t.reverse() : t);
          }),
              u = 0,
              a = !1;
          return new R(function () {
            var n;
            return a || (n = o.map(function (t) {
              return t.next();
            }), a = n.some(function (t) {
              return t.done;
            })), a ? {
              value: void 0,
              done: !0
            } : A(t, u++, e.apply(null, n.map(function (t) {
              return t.value;
            })));
          });
        }, i;
      }

      function Ue(t, e) {
        return Y(t) ? e : t.constructor(e);
      }

      function Ve(t) {
        if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
      }

      function We(t) {
        return kt(t.size), S(t);
      }

      function Ne(t) {
        return a(t) ? r : s(t) ? i : o;
      }

      function He(t) {
        return Object.create((a(t) ? V : s(t) ? W : N).prototype);
      }

      function Je() {
        return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : U.prototype.cacheResult.call(this);
      }

      function $e(t, e) {
        return t > e ? 1 : t < e ? -1 : 0;
      }

      function Ge(t) {
        var e = K(t);

        if (!e) {
          if (!L(t)) throw new TypeError("Expected iterable or array-like: " + t);
          e = K(n(t));
        }

        return e;
      }

      function Ye(t, e) {
        var n,
            r = function r(o) {
          if (o instanceof r) return o;
          if (!(this instanceof r)) return new r(o);

          if (!n) {
            n = !0;
            var u = Object.keys(t);
            !function (t, e) {
              try {
                e.forEach(tn.bind(void 0, t));
              } catch (t) {}
            }(i, u), i.size = u.length, i._name = e, i._keys = u, i._defaultValues = t;
          }

          this._map = Dt(o);
        },
            i = r.prototype = Object.create(Qe);

        return i.constructor = r, r;
      }

      e(we, Dt), we.of = function () {
        return this(arguments);
      }, we.prototype.toString = function () {
        return this.__toString("OrderedMap {", "}");
      }, we.prototype.get = function (t, e) {
        var n = this._map.get(t);

        return void 0 !== n ? this._list.get(n)[1] : e;
      }, we.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : Ee();
      }, we.prototype.set = function (t, e) {
        return xe(this, t, e);
      }, we.prototype.remove = function (t) {
        return xe(this, t, _);
      }, we.prototype.wasAltered = function () {
        return this._map.wasAltered() || this._list.wasAltered();
      }, we.prototype.__iterate = function (t, e) {
        var n = this;
        return this._list.__iterate(function (e) {
          return e && t(e[1], e[0], n);
        }, e);
      }, we.prototype.__iterator = function (t, e) {
        return this._list.fromEntrySeq().__iterator(t, e);
      }, we.prototype.__ensureOwner = function (t) {
        if (t === this.__ownerID) return this;

        var e = this._map.__ensureOwner(t),
            n = this._list.__ensureOwner(t);

        return t ? Oe(e, n, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = n, this);
      }, we.isOrderedMap = Se, we.prototype[d] = !0, we.prototype["delete"] = we.prototype.remove, e(Ie, V), Ie.prototype.get = function (t, e) {
        return this._iter.get(t, e);
      }, Ie.prototype.has = function (t) {
        return this._iter.has(t);
      }, Ie.prototype.valueSeq = function () {
        return this._iter.valueSeq();
      }, Ie.prototype.reverse = function () {
        var t = this,
            e = Ce(this, !0);
        return this._useKeys || (e.valueSeq = function () {
          return t._iter.toSeq().reverse();
        }), e;
      }, Ie.prototype.map = function (t, e) {
        var n = this,
            r = je(this, t, e);
        return this._useKeys || (r.valueSeq = function () {
          return n._iter.toSeq().map(t, e);
        }), r;
      }, Ie.prototype.__iterate = function (t, e) {
        var n,
            r = this;
        return this._iter.__iterate(this._useKeys ? function (e, n) {
          return t(e, n, r);
        } : (n = e ? We(this) : 0, function (i) {
          return t(i, e ? --n : n++, r);
        }), e);
      }, Ie.prototype.__iterator = function (t, e) {
        if (this._useKeys) return this._iter.__iterator(t, e);

        var n = this._iter.__iterator(1, e),
            r = e ? We(this) : 0;

        return new R(function () {
          var i = n.next();
          return i.done ? i : A(t, e ? --r : r++, i.value, i);
        });
      }, Ie.prototype[d] = !0, e(Me, W), Me.prototype.includes = function (t) {
        return this._iter.includes(t);
      }, Me.prototype.__iterate = function (t, e) {
        var n = this,
            r = 0;
        return this._iter.__iterate(function (e) {
          return t(e, r++, n);
        }, e);
      }, Me.prototype.__iterator = function (t, e) {
        var n = this._iter.__iterator(1, e),
            r = 0;

        return new R(function () {
          var e = n.next();
          return e.done ? e : A(t, r++, e.value, e);
        });
      }, e(ze, N), ze.prototype.has = function (t) {
        return this._iter.includes(t);
      }, ze.prototype.__iterate = function (t, e) {
        var n = this;
        return this._iter.__iterate(function (e) {
          return t(e, e, n);
        }, e);
      }, ze.prototype.__iterator = function (t, e) {
        var n = this._iter.__iterator(1, e);

        return new R(function () {
          var e = n.next();
          return e.done ? e : A(t, e.value, e.value, e);
        });
      }, e(ke, V), ke.prototype.entrySeq = function () {
        return this._iter.toSeq();
      }, ke.prototype.__iterate = function (t, e) {
        var n = this;
        return this._iter.__iterate(function (e) {
          if (e) {
            Ve(e);
            var r = u(e);
            return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n);
          }
        }, e);
      }, ke.prototype.__iterator = function (t, e) {
        var n = this._iter.__iterator(1, e);

        return new R(function () {
          for (;;) {
            var e = n.next();
            if (e.done) return e;
            var r = e.value;

            if (r) {
              Ve(r);
              var i = u(r);
              return A(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e);
            }
          }
        });
      }, Me.prototype.cacheResult = Ie.prototype.cacheResult = ze.prototype.cacheResult = ke.prototype.cacheResult = Je, e(Ye, ht), Ye.prototype.toString = function () {
        return this.__toString(Ze(this) + " {", "}");
      }, Ye.prototype.has = function (t) {
        return this._defaultValues.hasOwnProperty(t);
      }, Ye.prototype.get = function (t, e) {
        if (!this.has(t)) return e;
        var n = this._defaultValues[t];
        return this._map ? this._map.get(t, n) : n;
      }, Ye.prototype.clear = function () {
        if (this.__ownerID) return this._map && this._map.clear(), this;
        var t = this.constructor;
        return t._empty || (t._empty = Xe(this, Wt()));
      }, Ye.prototype.set = function (t, e) {
        if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + Ze(this));

        var n = this._map && this._map.set(t, e);

        return this.__ownerID || n === this._map ? this : Xe(this, n);
      }, Ye.prototype.remove = function (t) {
        if (!this.has(t)) return this;

        var e = this._map && this._map.remove(t);

        return this.__ownerID || e === this._map ? this : Xe(this, e);
      }, Ye.prototype.wasAltered = function () {
        return this._map.wasAltered();
      }, Ye.prototype.__iterator = function (t, e) {
        var n = this;
        return r(this._defaultValues).map(function (t, e) {
          return n.get(e);
        }).__iterator(t, e);
      }, Ye.prototype.__iterate = function (t, e) {
        var n = this;
        return r(this._defaultValues).map(function (t, e) {
          return n.get(e);
        }).__iterate(t, e);
      }, Ye.prototype.__ensureOwner = function (t) {
        if (t === this.__ownerID) return this;

        var e = this._map && this._map.__ensureOwner(t);

        return t ? Xe(this, e, t) : (this.__ownerID = t, this._map = e, this);
      };
      var Qe = Ye.prototype;

      function Xe(t, e, n) {
        var r = Object.create(Object.getPrototypeOf(t));
        return r._map = e, r.__ownerID = n, r;
      }

      function Ze(t) {
        return t._name || t.constructor.name || "Record";
      }

      function tn(t, e) {
        Object.defineProperty(t, e, {
          get: function get() {
            return this.get(e);
          },
          set: function set(t) {
            ct(this.__ownerID, "Cannot set on an immutable record."), this.set(e, t);
          }
        });
      }

      function en(t) {
        return null == t ? cn() : nn(t) && !f(t) ? t : cn().withMutations(function (e) {
          var n = o(t);
          kt(n.size), n.forEach(function (t) {
            return e.add(t);
          });
        });
      }

      function nn(t) {
        return !(!t || !t[on]);
      }

      Qe["delete"] = Qe.remove, Qe.deleteIn = Qe.removeIn = Rt.removeIn, Qe.merge = Rt.merge, Qe.mergeWith = Rt.mergeWith, Qe.mergeIn = Rt.mergeIn, Qe.mergeDeep = Rt.mergeDeep, Qe.mergeDeepWith = Rt.mergeDeepWith, Qe.mergeDeepIn = Rt.mergeDeepIn, Qe.setIn = Rt.setIn, Qe.update = Rt.update, Qe.updateIn = Rt.updateIn, Qe.withMutations = Rt.withMutations, Qe.asMutable = Rt.asMutable, Qe.asImmutable = Rt.asImmutable, e(en, dt), en.of = function () {
        return this(arguments);
      }, en.fromKeys = function (t) {
        return this(r(t).keySeq());
      }, en.prototype.toString = function () {
        return this.__toString("Set {", "}");
      }, en.prototype.has = function (t) {
        return this._map.has(t);
      }, en.prototype.add = function (t) {
        return an(this, this._map.set(t, !0));
      }, en.prototype.remove = function (t) {
        return an(this, this._map.remove(t));
      }, en.prototype.clear = function () {
        return an(this, this._map.clear());
      }, en.prototype.union = function () {
        var e = t.call(arguments, 0);
        return 0 === (e = e.filter(function (t) {
          return 0 !== t.size;
        })).length ? this : 0 !== this.size || this.__ownerID || 1 !== e.length ? this.withMutations(function (t) {
          for (var n = 0; n < e.length; n++) {
            o(e[n]).forEach(function (e) {
              return t.add(e);
            });
          }
        }) : this.constructor(e[0]);
      }, en.prototype.intersect = function () {
        var e = t.call(arguments, 0);
        if (0 === e.length) return this;
        e = e.map(function (t) {
          return o(t);
        });
        var n = this;
        return this.withMutations(function (t) {
          n.forEach(function (n) {
            e.every(function (t) {
              return t.includes(n);
            }) || t.remove(n);
          });
        });
      }, en.prototype.subtract = function () {
        var e = t.call(arguments, 0);
        if (0 === e.length) return this;
        e = e.map(function (t) {
          return o(t);
        });
        var n = this;
        return this.withMutations(function (t) {
          n.forEach(function (n) {
            e.some(function (t) {
              return t.includes(n);
            }) && t.remove(n);
          });
        });
      }, en.prototype.merge = function () {
        return this.union.apply(this, arguments);
      }, en.prototype.mergeWith = function (e) {
        var n = t.call(arguments, 1);
        return this.union.apply(this, n);
      }, en.prototype.sort = function (t) {
        return fn(Te(this, t));
      }, en.prototype.sortBy = function (t, e) {
        return fn(Te(this, e, t));
      }, en.prototype.wasAltered = function () {
        return this._map.wasAltered();
      }, en.prototype.__iterate = function (t, e) {
        var n = this;
        return this._map.__iterate(function (e, r) {
          return t(r, r, n);
        }, e);
      }, en.prototype.__iterator = function (t, e) {
        return this._map.map(function (t, e) {
          return e;
        }).__iterator(t, e);
      }, en.prototype.__ensureOwner = function (t) {
        if (t === this.__ownerID) return this;

        var e = this._map.__ensureOwner(t);

        return t ? this.__make(e, t) : (this.__ownerID = t, this._map = e, this);
      }, en.isSet = nn;
      var rn,
          on = "@@__IMMUTABLE_SET__@@",
          un = en.prototype;

      function an(t, e) {
        return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
      }

      function sn(t, e) {
        var n = Object.create(un);
        return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
      }

      function cn() {
        return rn || (rn = sn(Wt()));
      }

      function fn(t) {
        return null == t ? vn() : ln(t) ? t : vn().withMutations(function (e) {
          var n = o(t);
          kt(n.size), n.forEach(function (t) {
            return e.add(t);
          });
        });
      }

      function ln(t) {
        return nn(t) && f(t);
      }

      un[on] = !0, un["delete"] = un.remove, un.mergeDeep = un.merge, un.mergeDeepWith = un.mergeWith, un.withMutations = Rt.withMutations, un.asMutable = Rt.asMutable, un.asImmutable = Rt.asImmutable, un.__empty = cn, un.__make = sn, e(fn, en), fn.of = function () {
        return this(arguments);
      }, fn.fromKeys = function (t) {
        return this(r(t).keySeq());
      }, fn.prototype.toString = function () {
        return this.__toString("OrderedSet {", "}");
      }, fn.isOrderedSet = ln;
      var hn,
          pn = fn.prototype;

      function dn(t, e) {
        var n = Object.create(pn);
        return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
      }

      function vn() {
        return hn || (hn = dn(Ee()));
      }

      function yn(t) {
        return null == t ? On() : gn(t) ? t : On().unshiftAll(t);
      }

      function gn(t) {
        return !(!t || !t[bn]);
      }

      pn[d] = !0, pn.__empty = vn, pn.__make = dn, e(yn, pt), yn.of = function () {
        return this(arguments);
      }, yn.prototype.toString = function () {
        return this.__toString("Stack [", "]");
      }, yn.prototype.get = function (t, e) {
        var n = this._head;

        for (t = O(this, t); n && t--;) {
          n = n.next;
        }

        return n ? n.value : e;
      }, yn.prototype.peek = function () {
        return this._head && this._head.value;
      }, yn.prototype.push = function () {
        if (0 === arguments.length) return this;

        for (var t = this.size + arguments.length, e = this._head, n = arguments.length - 1; n >= 0; n--) {
          e = {
            value: arguments[n],
            next: e
          };
        }

        return this.__ownerID ? (this.size = t, this._head = e, this.__hash = void 0, this.__altered = !0, this) : Sn(t, e);
      }, yn.prototype.pushAll = function (t) {
        if (0 === (t = i(t)).size) return this;
        kt(t.size);
        var e = this.size,
            n = this._head;
        return t.reverse().forEach(function (t) {
          e++, n = {
            value: t,
            next: n
          };
        }), this.__ownerID ? (this.size = e, this._head = n, this.__hash = void 0, this.__altered = !0, this) : Sn(e, n);
      }, yn.prototype.pop = function () {
        return this.slice(1);
      }, yn.prototype.unshift = function () {
        return this.push.apply(this, arguments);
      }, yn.prototype.unshiftAll = function (t) {
        return this.pushAll(t);
      }, yn.prototype.shift = function () {
        return this.pop.apply(this, arguments);
      }, yn.prototype.clear = function () {
        return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : On();
      }, yn.prototype.slice = function (t, e) {
        if (x(t, e, this.size)) return this;
        var n = I(t, this.size);
        if (M(e, this.size) !== this.size) return pt.prototype.slice.call(this, t, e);

        for (var r = this.size - n, i = this._head; n--;) {
          i = i.next;
        }

        return this.__ownerID ? (this.size = r, this._head = i, this.__hash = void 0, this.__altered = !0, this) : Sn(r, i);
      }, yn.prototype.__ensureOwner = function (t) {
        return t === this.__ownerID ? this : t ? Sn(this.size, this._head, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
      }, yn.prototype.__iterate = function (t, e) {
        if (e) return this.reverse().__iterate(t);

        for (var n = 0, r = this._head; r && !1 !== t(r.value, n++, this);) {
          r = r.next;
        }

        return n;
      }, yn.prototype.__iterator = function (t, e) {
        if (e) return this.reverse().__iterator(t);
        var n = 0,
            r = this._head;
        return new R(function () {
          if (r) {
            var e = r.value;
            return r = r.next, A(t, n++, e);
          }

          return {
            value: void 0,
            done: !0
          };
        });
      }, yn.isStack = gn;
      var mn,
          bn = "@@__IMMUTABLE_STACK__@@",
          wn = yn.prototype;

      function Sn(t, e, n, r) {
        var i = Object.create(wn);
        return i.size = t, i._head = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i;
      }

      function On() {
        return mn || (mn = Sn(0));
      }

      function En(t, e) {
        var n = function n(_n3) {
          t.prototype[_n3] = e[_n3];
        };

        return Object.keys(e).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(n), t;
      }

      wn[bn] = !0, wn.withMutations = Rt.withMutations, wn.asMutable = Rt.asMutable, wn.asImmutable = Rt.asImmutable, wn.wasAltered = Rt.wasAltered, n.Iterator = R, En(n, {
        toArray: function toArray() {
          kt(this.size);
          var t = new Array(this.size || 0);
          return this.valueSeq().__iterate(function (e, n) {
            t[n] = e;
          }), t;
        },
        toIndexedSeq: function toIndexedSeq() {
          return new Me(this);
        },
        toJS: function toJS() {
          return this.toSeq().map(function (t) {
            return t && "function" == typeof t.toJS ? t.toJS() : t;
          }).__toJS();
        },
        toJSON: function toJSON() {
          return this.toSeq().map(function (t) {
            return t && "function" == typeof t.toJSON ? t.toJSON() : t;
          }).__toJS();
        },
        toKeyedSeq: function toKeyedSeq() {
          return new Ie(this, !0);
        },
        toMap: function toMap() {
          return Dt(this.toKeyedSeq());
        },
        toObject: function toObject() {
          kt(this.size);
          var t = {};
          return this.__iterate(function (e, n) {
            t[n] = e;
          }), t;
        },
        toOrderedMap: function toOrderedMap() {
          return we(this.toKeyedSeq());
        },
        toOrderedSet: function toOrderedSet() {
          return fn(a(this) ? this.valueSeq() : this);
        },
        toSet: function toSet() {
          return en(a(this) ? this.valueSeq() : this);
        },
        toSetSeq: function toSetSeq() {
          return new ze(this);
        },
        toSeq: function toSeq() {
          return s(this) ? this.toIndexedSeq() : a(this) ? this.toKeyedSeq() : this.toSetSeq();
        },
        toStack: function toStack() {
          return yn(a(this) ? this.valueSeq() : this);
        },
        toList: function toList() {
          return ie(a(this) ? this.valueSeq() : this);
        },
        toString: function toString() {
          return "[Iterable]";
        },
        __toString: function __toString(t, e) {
          return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
        },
        concat: function concat() {
          var e = t.call(arguments, 0);
          return Ue(this, qe(this, e));
        },
        includes: function includes(t) {
          return this.some(function (e) {
            return ut(e, t);
          });
        },
        entries: function entries() {
          return this.__iterator(2);
        },
        every: function every(t, e) {
          kt(this.size);
          var n = !0;
          return this.__iterate(function (r, i, o) {
            if (!t.call(e, r, i, o)) return n = !1, !1;
          }), n;
        },
        filter: function filter(t, e) {
          return Ue(this, Pe(this, t, e, !0));
        },
        find: function find(t, e, n) {
          var r = this.findEntry(t, e);
          return r ? r[1] : n;
        },
        findEntry: function findEntry(t, e) {
          var n;
          return this.__iterate(function (r, i, o) {
            if (t.call(e, r, i, o)) return n = [i, r], !1;
          }), n;
        },
        findLastEntry: function findLastEntry(t, e) {
          return this.toSeq().reverse().findEntry(t, e);
        },
        forEach: function forEach(t, e) {
          return kt(this.size), this.__iterate(e ? t.bind(e) : t);
        },
        join: function join(t) {
          kt(this.size), t = void 0 !== t ? "" + t : ",";
          var e = "",
              n = !0;
          return this.__iterate(function (r) {
            n ? n = !1 : e += t, e += null != r ? r.toString() : "";
          }), e;
        },
        keys: function keys() {
          return this.__iterator(0);
        },
        map: function map(t, e) {
          return Ue(this, je(this, t, e));
        },
        reduce: function reduce(t, e, n) {
          var r, i;
          return kt(this.size), arguments.length < 2 ? i = !0 : r = e, this.__iterate(function (e, o, u) {
            i ? (i = !1, r = e) : r = t.call(n, r, e, o, u);
          }), r;
        },
        reduceRight: function reduceRight(t, e, n) {
          var r = this.toKeyedSeq().reverse();
          return r.reduce.apply(r, arguments);
        },
        reverse: function reverse() {
          return Ue(this, Ce(this, !0));
        },
        slice: function slice(t, e) {
          return Ue(this, Re(this, t, e, !0));
        },
        some: function some(t, e) {
          return !this.every(kn(t), e);
        },
        sort: function sort(t) {
          return Ue(this, Te(this, t));
        },
        values: function values() {
          return this.__iterator(1);
        },
        butLast: function butLast() {
          return this.slice(0, -1);
        },
        isEmpty: function isEmpty() {
          return void 0 !== this.size ? 0 === this.size : !this.some(function () {
            return !0;
          });
        },
        count: function count(t, e) {
          return S(t ? this.toSeq().filter(t, e) : this);
        },
        countBy: function countBy(t, e) {
          return function (t, e, n) {
            var r = Dt().asMutable();
            return t.__iterate(function (i, o) {
              r.update(e.call(n, i, o, t), 0, function (t) {
                return t + 1;
              });
            }), r.asImmutable();
          }(this, t, e);
        },
        equals: function equals(t) {
          return at(this, t);
        },
        entrySeq: function entrySeq() {
          var t = this;
          if (t._cache) return new H(t._cache);
          var e = t.toSeq().map(zn).toIndexedSeq();
          return e.fromEntrySeq = function () {
            return t.toSeq();
          }, e;
        },
        filterNot: function filterNot(t, e) {
          return this.filter(kn(t), e);
        },
        findLast: function findLast(t, e, n) {
          return this.toKeyedSeq().reverse().find(t, e, n);
        },
        first: function first() {
          return this.find(E);
        },
        flatMap: function flatMap(t, e) {
          return Ue(this, function (t, e, n) {
            var r = Ne(t);
            return t.toSeq().map(function (i, o) {
              return r(e.call(n, i, o, t));
            }).flatten(!0);
          }(this, t, e));
        },
        flatten: function flatten(t) {
          return Ue(this, Be(this, t, !0));
        },
        fromEntrySeq: function fromEntrySeq() {
          return new ke(this);
        },
        get: function get(t, e) {
          return this.find(function (e, n) {
            return ut(n, t);
          }, void 0, e);
        },
        getIn: function getIn(t, e) {
          for (var n, r = this, i = Ge(t); !(n = i.next()).done;) {
            var o = n.value;
            if ((r = r && r.get ? r.get(o, _) : _) === _) return e;
          }

          return r;
        },
        groupBy: function groupBy(t, e) {
          return function (t, e, n) {
            var r = a(t),
                i = (f(t) ? we() : Dt()).asMutable();

            t.__iterate(function (o, u) {
              i.update(e.call(n, o, u, t), function (t) {
                return (t = t || []).push(r ? [u, o] : o), t;
              });
            });

            var o = Ne(t);
            return i.map(function (e) {
              return Ue(t, o(e));
            });
          }(this, t, e);
        },
        has: function has(t) {
          return this.get(t, _) !== _;
        },
        hasIn: function hasIn(t) {
          return this.getIn(t, _) !== _;
        },
        isSubset: function isSubset(t) {
          return t = "function" == typeof t.includes ? t : n(t), this.every(function (e) {
            return t.includes(e);
          });
        },
        isSuperset: function isSuperset(t) {
          return (t = "function" == typeof t.isSubset ? t : n(t)).isSubset(this);
        },
        keySeq: function keySeq() {
          return this.toSeq().map(Mn).toIndexedSeq();
        },
        last: function last() {
          return this.toSeq().reverse().first();
        },
        max: function max(t) {
          return Ke(this, t);
        },
        maxBy: function maxBy(t, e) {
          return Ke(this, e, t);
        },
        min: function min(t) {
          return Ke(this, t ? Dn(t) : Pn);
        },
        minBy: function minBy(t, e) {
          return Ke(this, e ? Dn(e) : Pn, t);
        },
        rest: function rest() {
          return this.slice(1);
        },
        skip: function skip(t) {
          return this.slice(Math.max(0, t));
        },
        skipLast: function skipLast(t) {
          return Ue(this, this.toSeq().reverse().skip(t).reverse());
        },
        skipWhile: function skipWhile(t, e) {
          return Ue(this, Ae(this, t, e, !0));
        },
        skipUntil: function skipUntil(t, e) {
          return this.skipWhile(kn(t), e);
        },
        sortBy: function sortBy(t, e) {
          return Ue(this, Te(this, e, t));
        },
        take: function take(t) {
          return this.slice(0, Math.max(0, t));
        },
        takeLast: function takeLast(t) {
          return Ue(this, this.toSeq().reverse().take(t).reverse());
        },
        takeWhile: function takeWhile(t, e) {
          return Ue(this, function (t, e, n) {
            var r = He(t);
            return r.__iterateUncached = function (r, i) {
              var o = this;
              if (i) return this.cacheResult().__iterate(r, i);
              var u = 0;
              return t.__iterate(function (t, i, a) {
                return e.call(n, t, i, a) && ++u && r(t, i, o);
              }), u;
            }, r.__iteratorUncached = function (r, i) {
              var o = this;
              if (i) return this.cacheResult().__iterator(r, i);

              var u = t.__iterator(2, i),
                  a = !0;

              return new R(function () {
                if (!a) return {
                  value: void 0,
                  done: !0
                };
                var t = u.next();
                if (t.done) return t;
                var i = t.value,
                    s = i[0],
                    c = i[1];
                return e.call(n, c, s, o) ? 2 === r ? t : A(r, s, c, t) : (a = !1, {
                  value: void 0,
                  done: !0
                });
              });
            }, r;
          }(this, t, e));
        },
        takeUntil: function takeUntil(t, e) {
          return this.takeWhile(kn(t), e);
        },
        valueSeq: function valueSeq() {
          return this.toIndexedSeq();
        },
        hashCode: function hashCode() {
          return this.__hash || (this.__hash = function (t) {
            if (t.size === 1 / 0) return 0;
            var e = f(t),
                n = a(t),
                r = e ? 1 : 0;
            return function (t, e) {
              return e = _t(e, 3432918353), e = _t(e << 15 | e >>> -15, 461845907), e = _t(e << 13 | e >>> -13, 5), e = _t((e = (e + 3864292196 | 0) ^ t) ^ e >>> 16, 2246822507), vt((e = _t(e ^ e >>> 13, 3266489909)) ^ e >>> 16);
            }(t.__iterate(n ? e ? function (t, e) {
              r = 31 * r + Rn(yt(t), yt(e)) | 0;
            } : function (t, e) {
              r = r + Rn(yt(t), yt(e)) | 0;
            } : e ? function (t) {
              r = 31 * r + yt(t) | 0;
            } : function (t) {
              r = r + yt(t) | 0;
            }), r);
          }(this));
        }
      });
      var xn = n.prototype;
      xn[l] = !0, xn[P] = xn.values, xn.__toJS = xn.toArray, xn.__toStringMapper = jn, xn.inspect = xn.toSource = function () {
        return this.toString();
      }, xn.chain = xn.flatMap, xn.contains = xn.includes, function () {
        try {
          Object.defineProperty(xn, "length", {
            get: function get() {
              if (!n.noLengthWarning) {
                var t;

                try {
                  throw new Error();
                } catch (e) {
                  t = e.stack;
                }

                if (-1 === t.indexOf("_wrapObject")) return console && console.warn && console.warn("iterable.length has been deprecated, use iterable.size or iterable.count(). This warning will become a silent error in a future version. " + t), this.size;
              }
            }
          });
        } catch (t) {}
      }(), En(r, {
        flip: function flip() {
          return Ue(this, De(this));
        },
        findKey: function findKey(t, e) {
          var n = this.findEntry(t, e);
          return n && n[0];
        },
        findLastKey: function findLastKey(t, e) {
          return this.toSeq().reverse().findKey(t, e);
        },
        keyOf: function keyOf(t) {
          return this.findKey(function (e) {
            return ut(e, t);
          });
        },
        lastKeyOf: function lastKeyOf(t) {
          return this.findLastKey(function (e) {
            return ut(e, t);
          });
        },
        mapEntries: function mapEntries(t, e) {
          var n = this,
              r = 0;
          return Ue(this, this.toSeq().map(function (i, o) {
            return t.call(e, [o, i], r++, n);
          }).fromEntrySeq());
        },
        mapKeys: function mapKeys(t, e) {
          var n = this;
          return Ue(this, this.toSeq().flip().map(function (r, i) {
            return t.call(e, r, i, n);
          }).flip());
        }
      });
      var In = r.prototype;

      function Mn(t, e) {
        return e;
      }

      function zn(t, e) {
        return [e, t];
      }

      function kn(t) {
        return function () {
          return !t.apply(this, arguments);
        };
      }

      function Dn(t) {
        return function () {
          return -t.apply(this, arguments);
        };
      }

      function jn(t) {
        return "string" == typeof t ? JSON.stringify(t) : t;
      }

      function Cn() {
        return w(arguments);
      }

      function Pn(t, e) {
        return t < e ? 1 : t > e ? -1 : 0;
      }

      function Rn(t, e) {
        return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
      }

      return In[h] = !0, In[P] = xn.entries, In.__toJS = xn.toObject, In.__toStringMapper = function (t, e) {
        return JSON.stringify(e) + ": " + jn(t);
      }, En(i, {
        toKeyedSeq: function toKeyedSeq() {
          return new Ie(this, !1);
        },
        filter: function filter(t, e) {
          return Ue(this, Pe(this, t, e, !1));
        },
        findIndex: function findIndex(t, e) {
          var n = this.findEntry(t, e);
          return n ? n[0] : -1;
        },
        indexOf: function indexOf(t) {
          var e = this.toKeyedSeq().keyOf(t);
          return void 0 === e ? -1 : e;
        },
        lastIndexOf: function lastIndexOf(t) {
          var e = this.toKeyedSeq().reverse().keyOf(t);
          return void 0 === e ? -1 : e;
        },
        reverse: function reverse() {
          return Ue(this, Ce(this, !1));
        },
        slice: function slice(t, e) {
          return Ue(this, Re(this, t, e, !1));
        },
        splice: function splice(t, e) {
          var n = arguments.length;
          if (e = Math.max(0 | e, 0), 0 === n || 2 === n && !e) return this;
          t = I(t, t < 0 ? this.count() : this.size);
          var r = this.slice(0, t);
          return Ue(this, 1 === n ? r : r.concat(w(arguments, 2), this.slice(t + e)));
        },
        findLastIndex: function findLastIndex(t, e) {
          var n = this.toKeyedSeq().findLastKey(t, e);
          return void 0 === n ? -1 : n;
        },
        first: function first() {
          return this.get(0);
        },
        flatten: function flatten(t) {
          return Ue(this, Be(this, t, !1));
        },
        get: function get(t, e) {
          return (t = O(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, n) {
            return n === t;
          }, void 0, e);
        },
        has: function has(t) {
          return (t = O(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
        },
        interpose: function interpose(t) {
          return Ue(this, function (t, e) {
            var n = He(t);
            return n.size = t.size && 2 * t.size - 1, n.__iterateUncached = function (n, r) {
              var i = this,
                  o = 0;
              return t.__iterate(function (t, r) {
                return (!o || !1 !== n(e, o++, i)) && !1 !== n(t, o++, i);
              }, r), o;
            }, n.__iteratorUncached = function (n, r) {
              var i,
                  o = t.__iterator(1, r),
                  u = 0;

              return new R(function () {
                return (!i || u % 2) && (i = o.next()).done ? i : u % 2 ? A(n, u++, e) : A(n, u++, i.value, i);
              });
            }, n;
          }(this, t));
        },
        interleave: function interleave() {
          var t = [this].concat(w(arguments)),
              e = Le(this.toSeq(), W.of, t),
              n = e.flatten(!0);
          return e.size && (n.size = e.size * t.length), Ue(this, n);
        },
        last: function last() {
          return this.get(-1);
        },
        skipWhile: function skipWhile(t, e) {
          return Ue(this, Ae(this, t, e, !1));
        },
        zip: function zip() {
          var t = [this].concat(w(arguments));
          return Ue(this, Le(this, Cn, t));
        },
        zipWith: function zipWith(t) {
          var e = w(arguments);
          return e[0] = this, Ue(this, Le(this, t, e));
        }
      }), i.prototype[p] = !0, i.prototype[d] = !0, En(o, {
        get: function get(t, e) {
          return this.has(t) ? t : e;
        },
        includes: function includes(t) {
          return this.has(t);
        },
        keySeq: function keySeq() {
          return this.valueSeq();
        }
      }), o.prototype.has = xn.includes, En(V, r.prototype), En(W, i.prototype), En(N, o.prototype), En(ht, r.prototype), En(pt, i.prototype), En(dt, o.prototype), {
        Iterable: n,
        Seq: U,
        Collection: lt,
        Map: Dt,
        OrderedMap: we,
        List: ie,
        Stack: yn,
        Set: en,
        OrderedSet: fn,
        Record: Ye,
        Range: ft,
        Repeat: st,
        is: ut,
        fromJS: rt
      };
    }();
  },
  21: function _(t, e, n) {
    var r = n(74),
        i = n(75),
        o = n(62),
        u = n(76);
    t.exports = function (t) {
      return r(t) || i(t) || o(t) || u();
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
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
  236: function _(t, e) {
    t.exports = window.lodash.escapeRegExp;
  },
  237: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r,
        i = (r = n(490)) && r.__esModule ? r : {
      "default": r
    };

    e["default"] = function (t, e, n) {
      var r = e.getAnchorKey(),
          o = e.getAnchorOffset(),
          u = t.getCurrentContent().getBlockForKey(r).getText();
      return (0, i["default"])(u, o, n);
    };
  },
  238: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = function (t) {
      return "@" === t ? "mention" : t + "mention";
    };
  },
  3: function _(t, e) {
    t.exports = window.React;
  },
  313: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.composeDecorators = e.createEditorStateWithText = e["default"] = void 0;
    var r = u(n(476)),
        i = u(n(477)),
        o = u(n(478));

    function u(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    e["default"] = o["default"], e.createEditorStateWithText = r["default"], e.composeDecorators = i["default"];
  },
  314: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.defaultSuggestionsFilter = e.defaultTheme = e.MentionSuggestions = void 0;

    var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        i = n(487);

    Object.defineProperty(e, "MentionSuggestions", {
      enumerable: !0,
      get: function get() {
        return g(i)["default"];
      }
    });

    var o = g(n(3)),
        u = n(20),
        a = g(n(494)),
        s = g(i),
        c = g(n(496)),
        f = g(n(497)),
        l = g(n(498)),
        h = g(n(499)),
        p = g({
      mention: "draftJsMentionPlugin__mention__29BEd"
    }),
        d = g({
      mentionSuggestions: "draftJsMentionPlugin__mentionSuggestions__2DWjA"
    }),
        _ = g({
      mentionSuggestionsEntry: "draftJsMentionPlugin__mentionSuggestionsEntry__3mSwm",
      mentionSuggestionsEntryFocused: "draftJsMentionPlugin__mentionSuggestionsEntryFocused__3LcTd draftJsMentionPlugin__mentionSuggestionsEntry__3mSwm",
      mentionSuggestionsEntryText: "draftJsMentionPlugin__mentionSuggestionsEntryText__3Jobq",
      mentionSuggestionsEntryAvatar: "draftJsMentionPlugin__mentionSuggestionsEntryAvatar__1xgA9"
    }),
        v = g(n(500)),
        y = g(n(501));

    function g(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var m = e.defaultTheme = {
      mention: p["default"].mention,
      mentionSuggestions: d["default"].mentionSuggestions,
      mentionSuggestionsEntry: _["default"].mentionSuggestionsEntry,
      mentionSuggestionsEntryFocused: _["default"].mentionSuggestionsEntryFocused,
      mentionSuggestionsEntryText: _["default"].mentionSuggestionsEntryText,
      mentionSuggestionsEntryAvatar: _["default"].mentionSuggestionsEntryAvatar
    };
    e["default"] = function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          e = {
        keyBindingFn: void 0,
        handleKeyCommand: void 0,
        handleReturn: void 0,
        onChange: void 0
      },
          n = {
        ariaHasPopup: "false",
        ariaExpanded: !1,
        ariaOwneeID: void 0,
        ariaActiveDescendantID: void 0
      },
          i = (0, u.Map)(),
          p = void 0,
          d = (0, u.Map)(),
          _ = void 0,
          v = {
        getEditorState: void 0,
        setEditorState: void 0,
        getPortalClientRect: function getPortalClientRect(t) {
          return d.get(t)();
        },
        getAllSearches: function getAllSearches() {
          return i;
        },
        isEscaped: function isEscaped(t) {
          return p === t;
        },
        escapeSearch: function escapeSearch(t) {
          p = t;
        },
        resetEscapedSearch: function resetEscapedSearch() {
          p = void 0;
        },
        register: function register(t) {
          i = i.set(t, t);
        },
        updatePortalClientRect: function updatePortalClientRect(t, e) {
          d = d.set(t, e);
        },
        unregister: function unregister(t) {
          i = i["delete"](t), d = d["delete"](t);
        },
        getIsOpened: function getIsOpened() {
          return _;
        },
        setIsOpened: function setIsOpened(t) {
          _ = t;
        }
      },
          g = t.mentionPrefix,
          b = void 0 === g ? "" : g,
          w = t.theme,
          S = void 0 === w ? m : w,
          O = t.positionSuggestions,
          E = void 0 === O ? y["default"] : O,
          x = t.mentionComponent,
          I = t.mentionSuggestionsComponent,
          M = void 0 === I ? s["default"] : I,
          z = t.entityMutability,
          k = void 0 === z ? "SEGMENTED" : z,
          D = t.mentionTrigger,
          j = void 0 === D ? "@" : D,
          C = t.mentionRegExp,
          P = void 0 === C ? f["default"] : C,
          R = t.supportWhitespace,
          A = void 0 !== R && R,
          q = {
        ariaProps: n,
        callbacks: e,
        theme: S,
        store: v,
        entityMutability: k,
        positionSuggestions: E,
        mentionTrigger: j,
        mentionPrefix: b
      },
          B = function B(t) {
        return o["default"].createElement(M, r({}, t, q));
      },
          T = function T(t) {
        return o["default"].createElement(a["default"], r({}, t, {
          theme: S,
          mentionComponent: x
        }));
      },
          K = function K(t) {
        return o["default"].createElement(c["default"], r({}, t, {
          store: v
        }));
      };

      return {
        MentionSuggestions: B,
        decorators: [{
          strategy: (0, l["default"])(j),
          component: T
        }, {
          strategy: (0, h["default"])(j, A, P),
          component: K
        }],
        getAccessibilityProps: function getAccessibilityProps() {
          return {
            role: "combobox",
            ariaAutoComplete: "list",
            ariaHasPopup: n.ariaHasPopup,
            ariaExpanded: n.ariaExpanded,
            ariaActiveDescendantID: n.ariaActiveDescendantID,
            ariaOwneeID: n.ariaOwneeID
          };
        },
        initialize: function initialize(t) {
          var e = t.getEditorState,
              n = t.setEditorState;
          v.getEditorState = e, v.setEditorState = n;
        },
        keyBindingFn: function keyBindingFn(t) {
          return e.keyBindingFn && e.keyBindingFn(t);
        },
        handleReturn: function handleReturn(t) {
          return e.handleReturn && e.handleReturn(t);
        },
        onChange: function onChange(t) {
          return e.onChange ? e.onChange(t) : t;
        }
      };
    }, e.defaultSuggestionsFilter = v["default"];
  },
  315: function _(t, e) {
    t.exports = window.lodash.get;
  },
  316: function _(t, e, n) {
    var r = n(502),
        i = n(503),
        o = n(62),
        u = n(504);
    t.exports = function (t, e) {
      return r(t) || i(t, e) || o(t, e) || u();
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
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
  476: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(18);

    e["default"] = function (t) {
      return r.EditorState.createWithContent(r.ContentState.createFromText(t));
    };
  },
  477: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = function () {
      for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) {
        e[n] = arguments[n];
      }

      if (0 === e.length) return function (t) {
        return t;
      };
      if (1 === e.length) return e[0];
      var r = e[e.length - 1];
      return function () {
        for (var t = r.apply(void 0, arguments), n = e.length - 2; n >= 0; n -= 1) {
          var i = e[n];
          t = i(t);
        }

        return t;
      };
    };
  },
  478: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = n(3),
        u = _(o),
        a = _(n(0)),
        s = n(18),
        c = n(20),
        f = _(n(479)),
        l = _(n(480)),
        h = _(n(481)),
        p = _(n(485)),
        d = _(n(486));

    function _(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    function v(t, e) {
      var n = {};

      for (var r in t) {
        e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
      }

      return n;
    }

    function y(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) {
          n[e] = t[e];
        }

        return n;
      }

      return Array.from(t);
    }

    var g = function g(t) {
      var e = void 0;
      return null != t.decorators ? e = t.decorators : null != t._decorators && (e = t._decorators), null != e.size ? e.size : e.length;
    },
        m = function (t) {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

        return b.call(n), [n.props].concat(y(n.resolvePlugins())).forEach(function (t) {
          "function" == typeof t.initialize && t.initialize(n.getPluginMethods());
        }), f["default"].forEach(function (t) {
          n[t] = function () {
            var e;
            return (e = n.editor)[t].apply(e, arguments);
          };
        }), n.state = {}, n;
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
      }(e, t), i(e, [{
        key: "componentWillMount",
        value: function value() {
          var t = (0, h["default"])(this.props, this.getEditorState, this.onChange),
              e = s.EditorState.set(this.props.editorState, {
            decorator: t
          });
          this.onChange((0, l["default"])(e));
        }
      }, {
        key: "componentWillReceiveProps",
        value: function value(t) {
          var e = this.props.editorState.getDecorator(),
              n = t.editorState.getDecorator();

          if (e && !(e === n || e && n && g(e) === g(n))) {
            var r = s.EditorState.set(t.editorState, {
              decorator: e
            });
            this.onChange((0, l["default"])(r));
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          var t = this;
          this.resolvePlugins().forEach(function (e) {
            e.willUnmount && e.willUnmount({
              getEditorState: t.getEditorState,
              setEditorState: t.onChange
            });
          });
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
              e = this.createPluginHooks(),
              n = this.resolveCustomStyleMap(),
              i = this.resolveAccessibilityProps(),
              o = this.resolveblockRenderMap();
          return u["default"].createElement(s.Editor, r({}, this.props, i, e, {
            readOnly: this.props.readOnly || this.state.readOnly,
            customStyleMap: n,
            blockRenderMap: o,
            onChange: this.onChange,
            editorState: this.props.editorState,
            ref: function ref(e) {
              t.editor = e;
            }
          }));
        }
      }]), e;
    }(o.Component);

    m.propTypes = {
      editorState: a["default"].object.isRequired,
      onChange: a["default"].func.isRequired,
      plugins: a["default"].array,
      defaultKeyBindings: a["default"].bool,
      defaultKeyCommands: a["default"].bool,
      defaultBlockRenderMap: a["default"].bool,
      customStyleMap: a["default"].object,
      decorators: a["default"].array
    }, m.defaultProps = {
      defaultBlockRenderMap: !0,
      defaultKeyBindings: !0,
      defaultKeyCommands: !0,
      customStyleMap: {},
      plugins: [],
      decorators: []
    };

    var b = function b() {
      var t = this;
      this.onChange = function (e) {
        var n = e;
        t.resolvePlugins().forEach(function (e) {
          e.onChange && (n = e.onChange(n, t.getPluginMethods()));
        }), t.props.onChange && t.props.onChange(n, t.getPluginMethods());
      }, this.getPlugins = function () {
        return t.props.plugins.slice(0);
      }, this.getProps = function () {
        return r({}, t.props);
      }, this.getReadOnly = function () {
        return t.props.readOnly;
      }, this.setReadOnly = function (e) {
        e !== t.state.readOnly && t.setState({
          readOnly: e
        });
      }, this.getEditorRef = function () {
        return t.editor;
      }, this.getEditorState = function () {
        return t.props.editorState;
      }, this.getPluginMethods = function () {
        return {
          getPlugins: t.getPlugins,
          getProps: t.getProps,
          setEditorState: t.onChange,
          getEditorState: t.getEditorState,
          getReadOnly: t.getReadOnly,
          setReadOnly: t.setReadOnly,
          getEditorRef: t.getEditorRef
        };
      }, this.createEventHooks = function (e, n) {
        return function () {
          for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) {
            i[o] = arguments[o];
          }

          var u = [].slice.apply(i);
          return u.push(t.getPluginMethods()), n.some(function (t) {
            return "function" == typeof t[e] && !0 === t[e].apply(t, y(u));
          });
        };
      }, this.createHandleHooks = function (e, n) {
        return function () {
          for (var r = arguments.length, i = Array(r), o = 0; o < r; o++) {
            i[o] = arguments[o];
          }

          var u = [].slice.apply(i);
          return u.push(t.getPluginMethods()), n.some(function (t) {
            return "function" == typeof t[e] && "handled" === t[e].apply(t, y(u));
          }) ? "handled" : "not-handled";
        };
      }, this.createFnHooks = function (e, n) {
        return function () {
          for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) {
            o[u] = arguments[u];
          }

          var a = [].slice.apply(o);

          if (a.push(t.getPluginMethods()), "blockRendererFn" === e) {
            var s = {
              props: {}
            };
            return n.forEach(function (t) {
              if ("function" == typeof t[e]) {
                var n = t[e].apply(t, y(a));

                if (null != n) {
                  var i = n.props,
                      o = v(n, ["props"]),
                      u = s,
                      c = u.props,
                      f = v(u, ["props"]);
                  s = r({}, f, o, {
                    props: r({}, c, i)
                  });
                }
              }
            }), !!s.component && s;
          }

          if ("blockStyleFn" === e) {
            var c = void 0;
            return n.forEach(function (t) {
              if ("function" == typeof t[e]) {
                var n = t[e].apply(t, y(a));
                null != n && (c = (c ? c + " " : "") + n);
              }
            }), c || "";
          }

          var f = void 0,
              l = n.some(function (t) {
            return "function" == typeof t[e] && void 0 !== (f = t[e].apply(t, y(a)));
          });
          return !!l && f;
        };
      }, this.createPluginHooks = function () {
        var e = {},
            n = [],
            r = [],
            i = [],
            o = [t.props].concat(y(t.resolvePlugins()));
        return o.forEach(function (t) {
          Object.keys(t).forEach(function (t) {
            "onChange" !== t && -1 === n.indexOf(t) && -1 === i.indexOf(t) && (0 === t.indexOf("on") ? n.push(t) : 0 === t.indexOf("handle") ? r.push(t) : t.length - 2 === t.indexOf("Fn") && i.push(t));
          });
        }), n.forEach(function (n) {
          e[n] = t.createEventHooks(n, o);
        }), r.forEach(function (n) {
          e[n] = t.createHandleHooks(n, o);
        }), i.forEach(function (n) {
          e[n] = t.createFnHooks(n, o);
        }), e;
      }, this.resolvePlugins = function () {
        var e = t.props.plugins.slice(0);
        return !0 === t.props.defaultKeyBindings && e.push(p["default"]), !0 === t.props.defaultKeyCommands && e.push(d["default"]), e;
      }, this.resolveCustomStyleMap = function () {
        return t.props.plugins.filter(function (t) {
          return void 0 !== t.customStyleMap;
        }).map(function (t) {
          return t.customStyleMap;
        }).concat([t.props.customStyleMap]).reduce(function (t, e) {
          return r({}, t, e);
        }, {});
      }, this.resolveblockRenderMap = function () {
        var e = t.props.plugins.filter(function (t) {
          return void 0 !== t.blockRenderMap;
        }).reduce(function (t, e) {
          return t.merge(e.blockRenderMap);
        }, (0, c.Map)({}));
        return t.props.defaultBlockRenderMap && (e = s.DefaultDraftBlockRenderMap.merge(e)), t.props.blockRenderMap && (e = e.merge(t.props.blockRenderMap)), e;
      }, this.resolveAccessibilityProps = function () {
        var e = {};
        return [t.props].concat(y(t.resolvePlugins())).forEach(function (t) {
          if ("function" == typeof t.getAccessibilityProps) {
            var n = t.getAccessibilityProps(),
                i = {};
            void 0 === e.ariaHasPopup ? i.ariaHasPopup = n.ariaHasPopup : "true" === n.ariaHasPopup && (i.ariaHasPopup = "true"), void 0 === e.ariaExpanded ? i.ariaExpanded = n.ariaExpanded : !0 === n.ariaExpanded && (i.ariaExpanded = !0), e = r({}, e, n, i);
          }
        }), e;
      };
    };

    e["default"] = m;
  },
  479: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = ["focus", "blur", "setMode", "exitCurrentMode", "restoreEditorDOM", "setRenderGuard", "removeRenderGuard", "setClipboard", "getClipboard", "getEditorKey", "update", "onDragEnter", "onDragLeave"];
  },
  480: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(18);

    e["default"] = function (t) {
      var e = t.getCurrentContent().getBlockMap(),
          n = e.last().getKey(),
          i = e.last().getLength(),
          o = new r.SelectionState({
        anchorKey: n,
        anchorOffset: i,
        focusKey: n,
        focusOffset: i
      });
      return r.EditorState.acceptSelection(t, o);
    };
  },
  481: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(20),
        i = u(n(482)),
        o = u(n(484));

    function u(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var a = function a(t) {
      return "function" == typeof t.getDecorations && "function" == typeof t.getComponentForKey && "function" == typeof t.getPropsForKey;
    };

    e["default"] = function (t, e, n) {
      var u = function (t) {
        var e = t.decorators,
            n = t.plugins;
        return (0, r.List)([{
          decorators: e
        }].concat(function (t) {
          if (Array.isArray(t)) {
            for (var e = 0, n = Array(t.length); e < t.length; e++) {
              n[e] = t[e];
            }

            return n;
          }

          return Array.from(t);
        }(n))).filter(function (t) {
          return void 0 !== t.decorators;
        }).flatMap(function (t) {
          return t.decorators;
        });
      }(t),
          s = (0, i["default"])(u.filter(function (t) {
        return !a(t);
      }), e, n),
          c = u.filter(function (t) {
        return a(t);
      });

      return new o["default"](c.push(s));
    };
  },
  482: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r,
        i = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        o = n(20),
        u = n(18),
        a = (r = n(483)) && r.__esModule ? r : {
      "default": r
    };

    e["default"] = function (t, e, n) {
      var r = (0, o.List)(t).map(function (t) {
        return i({}, t, {
          component: (0, a["default"])(t.component, {
            getEditorState: e,
            setEditorState: n
          })
        });
      }).toJS();
      return new u.CompositeDecorator(r);
    };
  },
  483: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r,
        i = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        o = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        u = n(3),
        a = (r = u) && r.__esModule ? r : {
      "default": r
    };

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function c(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
    }

    e["default"] = function (t, e) {
      var n, r, f;
      return r = n = function (n) {
        function r() {
          return s(this, r), c(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments));
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
        }(r, n), o(r, [{
          key: "render",
          value: function value() {
            return a["default"].createElement(t, i({}, this.props, e));
          }
        }]), r;
      }(u.Component), n.displayName = "Decorated(" + ((f = t).displayName || f.name || "Component") + ")", r;
    };
  },
  484: function _(t, e, n) {
    "use strict";

    var r,
        i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = (r = n(20)) && r.__esModule ? r : {
      "default": r
    },
        u = function () {
      function t(e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, t), this.decorators = o["default"].List(e);
      }

      return i(t, [{
        key: "getDecorations",
        value: function value(t, e) {
          var n = new Array(t.getText().length).fill(null);
          return this.decorators.forEach(function (r, i) {
            r.getDecorations(t, e).forEach(function (t, e) {
              t && (n[e] = i + "-" + t);
            });
          }), o["default"].List(n);
        }
      }, {
        key: "getComponentForKey",
        value: function value(e) {
          return this.getDecoratorForKey(e).getComponentForKey(t.getInnerKey(e));
        }
      }, {
        key: "getPropsForKey",
        value: function value(e) {
          return this.getDecoratorForKey(e).getPropsForKey(t.getInnerKey(e));
        }
      }, {
        key: "getDecoratorForKey",
        value: function value(t) {
          var e = t.split("-"),
              n = Number(e[0]);
          return this.decorators.get(n);
        }
      }], [{
        key: "getInnerKey",
        value: function value(t) {
          return t.split("-").slice(1).join("-");
        }
      }]), t;
    }();

    t.exports = u;
  },
  485: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(18);
    e["default"] = {
      keyBindingFn: function keyBindingFn(t) {
        return (0, r.getDefaultKeyBinding)(t);
      }
    };
  },
  486: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(18);
    e["default"] = {
      handleKeyCommand: function handleKeyCommand(t, e, n) {
        var i = n.setEditorState,
            o = void 0;

        switch (t) {
          case "backspace":
          case "backspace-word":
          case "backspace-to-start-of-line":
            o = r.RichUtils.onBackspace(e);
            break;

          case "delete":
          case "delete-word":
          case "delete-to-end-of-block":
            o = r.RichUtils.onDelete(e);
            break;

          default:
            return "not-handled";
        }

        return null != o ? (i(o), "handled") : "not-handled";
      }
    };
  },
  487: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.MentionSuggestions = void 0;

    var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) {
          Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
        }
      }

      return t;
    },
        i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = n(3),
        u = _(o),
        a = _(n(0)),
        s = n(18),
        c = _(n(236)),
        f = _(n(488)),
        l = _(n(489)),
        h = _(n(491)),
        p = _(n(237)),
        d = _(n(492));

    function _(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    function v(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    function y(t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
    }

    var g = e.MentionSuggestions = function (t) {
      function e() {
        var t, n, r;
        v(this, e);

        for (var i = arguments.length, o = Array(i), u = 0; u < i; u++) {
          o[u] = arguments[u];
        }

        return n = r = y(this, (t = e.__proto__ || Object.getPrototypeOf(e)).call.apply(t, [this].concat(o))), r.state = {
          isActive: !1,
          focusedOptionIndex: 0
        }, r.componentDidUpdate = function (t, e) {
          if (r.popover) {
            var n = r.props.suggestions.length;
            if (n > 0 && r.state.focusedOptionIndex >= n && r.setState({
              focusedOptionIndex: n - 1
            }), !r.props.store.getAllSearches().has(r.activeOffsetKey)) return;
            var i = r.props.store.getPortalClientRect(r.activeOffsetKey),
                o = r.props.positionSuggestions({
              decoratorRect: i,
              prevProps: t,
              prevState: e,
              props: r.props,
              state: r.state,
              popover: r.popover
            });
            Object.keys(o).forEach(function (t) {
              r.popover.style[t] = o[t];
            });
          }
        }, r.componentWillUnmount = function () {
          r.props.callbacks.onChange = void 0;
        }, r.onEditorStateChange = function (t) {
          var e = r.props.store.getAllSearches();
          if (0 === e.size) return t;

          var n = function n() {
            return r.props.store.resetEscapedSearch(), r.closeDropdown(), t;
          },
              i = t.getSelection(),
              o = i.getAnchorKey(),
              u = i.getAnchorOffset();

          if (!i.isCollapsed() || !i.getHasFocus()) return n();
          var a = e.map(function (t) {
            return (0, h["default"])(t);
          }).filter(function (t) {
            return t.blockKey === o;
          }).map(function (e) {
            var n = e.blockKey,
                r = e.decoratorKey;
            return t.getBlockTree(n).getIn([r]);
          });
          if (a.every(function (t) {
            return void 0 === t;
          })) return n();
          var s = t.getCurrentContent().getPlainText(),
              f = a.filter(function (t) {
            return void 0 !== t;
          }).map(function (t) {
            var e = t.start,
                n = t.end;
            return 0 === e && u === r.props.mentionTrigger.length && s.charAt(u) !== r.props.mentionTrigger && new RegExp(String.raw({
              raw: "" + (0, c["default"])(r.props.mentionTrigger)
            }), "g").test(s) && u <= n || u > e + r.props.mentionTrigger.length && u <= n;
          });
          if (f.every(function (t) {
            return !1 === t;
          })) return n();
          var l = r.activeOffsetKey;
          return r.activeOffsetKey = f.filter(function (t) {
            return !0 === t;
          }).keySeq().first(), r.onSearchChange(t, i, r.activeOffsetKey, l), r.props.store.isEscaped(r.activeOffsetKey) || r.props.store.resetEscapedSearch(), !r.state.isActive && !r.props.store.isEscaped(r.activeOffsetKey) && r.props.suggestions.length > 0 && r.openDropdown(), void 0 !== r.lastSelectionIsInsideWord && f.equals(r.lastSelectionIsInsideWord) || r.setState({
            focusedOptionIndex: 0
          }), r.lastSelectionIsInsideWord = f, t;
        }, r.onSearchChange = function (t, e, n, i) {
          var o = (0, p["default"])(t, e, r.props.mentionTrigger).matchingString;
          r.lastSearchValue === o && n === i || (r.lastSearchValue = o, r.props.onSearchChange({
            value: o
          }));
        }, r.onDownArrow = function (t) {
          t.preventDefault();
          var e = r.state.focusedOptionIndex + 1;
          r.onMentionFocus(e >= r.props.suggestions.length ? 0 : e);
        }, r.onTab = function (t) {
          t.preventDefault(), r.commitSelection();
        }, r.onUpArrow = function (t) {
          if (t.preventDefault(), r.props.suggestions.length > 0) {
            var e = r.state.focusedOptionIndex - 1;
            r.onMentionFocus(e < 0 ? r.props.suggestions.length - 1 : e);
          }
        }, r.onEscape = function (t) {
          t.preventDefault();
          var e = r.lastSelectionIsInsideWord.filter(function (t) {
            return !0 === t;
          }).keySeq().first();
          r.props.store.escapeSearch(e), r.closeDropdown(), r.props.store.setEditorState(r.props.store.getEditorState());
        }, r.onMentionSelect = function (t) {
          if (t) {
            r.props.onAddMention && r.props.onAddMention(t), r.closeDropdown();
            var e = (0, l["default"])(r.props.store.getEditorState(), t, r.props.mentionPrefix, r.props.mentionTrigger, r.props.entityMutability);
            r.props.store.setEditorState(e);
          }
        }, r.onMentionFocus = function (t) {
          var e = "mention-option-" + r.key + "-" + t;
          r.props.ariaProps.ariaActiveDescendantID = e, r.setState({
            focusedOptionIndex: t
          }), r.props.store.setEditorState(r.props.store.getEditorState());
        }, r.commitSelection = function () {
          return r.props.store.getIsOpened() ? (r.onMentionSelect(r.props.suggestions[r.state.focusedOptionIndex]), "handled") : "not-handled";
        }, r.openDropdown = function () {
          r.props.callbacks.handleReturn = r.commitSelection, r.props.callbacks.keyBindingFn = function (t) {
            40 === t.keyCode && r.onDownArrow(t), 38 === t.keyCode && r.onUpArrow(t), 27 === t.keyCode && r.onEscape(t), 9 === t.keyCode && r.onTab(t);
          };
          var t = "mention-option-" + r.key + "-" + r.state.focusedOptionIndex;
          r.props.ariaProps.ariaActiveDescendantID = t, r.props.ariaProps.ariaOwneeID = "mentions-list-" + r.key, r.props.ariaProps.ariaHasPopup = "true", r.props.ariaProps.ariaExpanded = !0, r.setState({
            isActive: !0
          }), r.props.onOpen && r.props.onOpen();
        }, r.closeDropdown = function () {
          r.props.callbacks.handleReturn = void 0, r.props.callbacks.keyBindingFn = void 0, r.props.ariaProps.ariaHasPopup = "false", r.props.ariaProps.ariaExpanded = !1, r.props.ariaProps.ariaActiveDescendantID = void 0, r.props.ariaProps.ariaOwneeID = void 0, r.setState({
            isActive: !1
          }), r.props.onClose && r.props.onClose();
        }, y(r, n);
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
      }(e, t), i(e, [{
        key: "componentWillMount",
        value: function value() {
          this.key = (0, s.genKey)(), this.props.callbacks.onChange = this.onEditorStateChange;
        }
      }, {
        key: "componentWillReceiveProps",
        value: function value(t) {
          0 === t.suggestions.length && this.state.isActive ? this.closeDropdown() : t.suggestions.length > 0 && t.suggestions !== this.props.suggestions && !this.state.isActive && this.openDropdown();
        }
      }, {
        key: "render",
        value: function value() {
          var t = this;
          if (!this.state.isActive) return null;
          var e = this.props,
              n = e.entryComponent,
              i = e.popoverComponent,
              o = void 0 === i ? u["default"].createElement("div", null) : i,
              a = (e.onClose, e.onOpen, e.onAddMention, e.onSearchChange, e.suggestions, e.ariaProps, e.callbacks, e.theme),
              s = void 0 === a ? {} : a,
              c = (e.store, e.entityMutability, e.positionSuggestions, e.mentionTrigger, e.mentionPrefix, function (t, e) {
            var n = {};

            for (var r in t) {
              e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
            }

            return n;
          }(e, ["entryComponent", "popoverComponent", "onClose", "onOpen", "onAddMention", "onSearchChange", "suggestions", "ariaProps", "callbacks", "theme", "store", "entityMutability", "positionSuggestions", "mentionTrigger", "mentionPrefix"]));
          return u["default"].cloneElement(o, r({}, c, {
            className: s.mentionSuggestions,
            role: "listbox",
            id: "mentions-list-" + this.key,
            ref: function ref(e) {
              t.popover = e;
            }
          }), this.props.suggestions.map(function (e, r) {
            return u["default"].createElement(f["default"], {
              key: null != e.id ? e.id : e.name,
              onMentionSelect: t.onMentionSelect,
              onMentionFocus: t.onMentionFocus,
              isFocused: t.state.focusedOptionIndex === r,
              mention: e,
              index: r,
              id: "mention-option-" + t.key + "-" + r,
              theme: s,
              searchValue: t.lastSearchValue,
              entryComponent: n || d["default"]
            });
          }));
        }
      }]), e;
    }(o.Component);

    g.propTypes = {
      entityMutability: a["default"].oneOf(["SEGMENTED", "IMMUTABLE", "MUTABLE"]),
      entryComponent: a["default"].func,
      onAddMention: a["default"].func,
      suggestions: a["default"].array
    }, e["default"] = g;
  },
  488: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        i = n(3),
        o = a(i),
        u = a(n(0));

    function a(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var s = function (t) {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

        return n.onMouseUp = function () {
          n.mouseDown && (n.props.onMentionSelect(n.props.mention), n.mouseDown = !1);
        }, n.onMouseDown = function (t) {
          t.preventDefault(), n.mouseDown = !0;
        }, n.onMouseEnter = function () {
          n.props.onMentionFocus(n.props.index);
        }, n.mouseDown = !1, n;
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
        key: "componentDidUpdate",
        value: function value() {
          this.mouseDown = !1;
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.theme,
              n = void 0 === e ? {} : e,
              r = t.mention,
              i = t.searchValue,
              u = t.isFocused,
              a = t.id,
              s = u ? n.mentionSuggestionsEntryFocused : n.mentionSuggestionsEntry,
              c = this.props.entryComponent;
          return o["default"].createElement(c, {
            className: s,
            onMouseDown: this.onMouseDown,
            onMouseUp: this.onMouseUp,
            onMouseEnter: this.onMouseEnter,
            role: "option",
            id: a,
            "aria-selected": u ? "true" : null,
            theme: n,
            mention: r,
            isFocused: u,
            searchValue: i
          });
        }
      }]), e;
    }(i.Component);

    s.propTypes = {
      entryComponent: u["default"].any.isRequired,
      searchValue: u["default"].string,
      onMentionSelect: u["default"].func
    }, e["default"] = s;
  },
  489: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = n(18),
        i = u(n(237)),
        o = u(n(238));

    function u(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    e["default"] = function (t, e, n, u, a) {
      var s = t.getCurrentContent().createEntity((0, o["default"])(u), a, {
        mention: e
      }).getLastCreatedEntityKey(),
          c = t.getSelection(),
          f = (0, i["default"])(t, c, u),
          l = f.begin,
          h = f.end,
          p = c.merge({
        anchorOffset: l,
        focusOffset: h
      }),
          d = r.Modifier.replaceText(t.getCurrentContent(), p, "" + n + e.name, null, s),
          _ = p.getAnchorKey();

      t.getCurrentContent().getBlockForKey(_).getLength() === h && (d = r.Modifier.insertText(d, d.getSelectionAfter(), " "));
      var v = r.EditorState.push(t, d, "insert-mention");
      return r.EditorState.forceSelection(v, d.getSelectionAfter());
    };
  },
  490: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = function (t, e, n) {
      var r = t.substr(0, e),
          i = 0 === n.length ? 0 : r.lastIndexOf(n),
          o = 0 === n.length ? r : r.slice(i + n.length);
      return {
        begin: i,
        end: r.length,
        matchingString: o
      };
    };
  },
  491: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    e["default"] = function (t) {
      var e = function (t, e) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return function (t, e) {
          var n = [],
              _n = !0,
              r = !1,
              i = void 0;

          try {
            for (var o, u = t[Symbol.iterator](); !(_n = (o = u.next()).done) && (n.push(o.value), !e || n.length !== e); _n = !0) {
              ;
            }
          } catch (t) {
            r = !0, i = t;
          } finally {
            try {
              !_n && u["return"] && u["return"]();
            } finally {
              if (r) throw i;
            }
          }

          return n;
        }(t, e);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }(t.split("-"), 3),
          n = e[0],
          r = e[1],
          i = e[2];

      return {
        blockKey: n,
        decoratorKey: parseInt(r, 10),
        leafKey: parseInt(i, 10)
      };
    };
  },
  492: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = o(n(3)),
        i = o(n(493));

    function o(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    e["default"] = function (t) {
      var e = t.mention,
          n = t.theme,
          o = (t.isFocused, t.searchValue, function (t, e) {
        var n = {};

        for (var r in t) {
          e.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
        }

        return n;
      }(t, ["mention", "theme", "isFocused", "searchValue"]));
      return r["default"].createElement("div", o, r["default"].createElement(i["default"], {
        mention: e,
        theme: n
      }), r["default"].createElement("span", {
        className: n.mentionSuggestionsEntryText
      }, e.name));
    };
  },
  493: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r,
        i = (r = n(3)) && r.__esModule ? r : {
      "default": r
    };

    e["default"] = function (t) {
      var e = t.mention,
          n = t.theme,
          r = void 0 === n ? {} : n;
      return e.avatar ? i["default"].createElement("img", {
        src: e.avatar,
        className: r.mentionSuggestionsEntryAvatar,
        role: "presentation"
      }) : null;
    };
  },
  494: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r = o(n(3)),
        i = o(n(495));

    function o(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    var u = function u(t) {
      var e = t.mention,
          n = t.children,
          i = t.className;
      return r["default"].createElement("a", {
        href: e.link,
        className: i,
        spellCheck: !1
      }, n);
    },
        a = function a(t) {
      var e = t.children,
          n = t.className;
      return r["default"].createElement("span", {
        className: n,
        spellCheck: !1
      }, e);
    };

    e["default"] = function (t) {
      var e = t.entityKey,
          n = t.theme,
          o = void 0 === n ? {} : n,
          s = t.mentionComponent,
          c = t.children,
          f = t.decoratedText,
          l = t.className,
          h = t.contentState,
          p = (0, i["default"])(o.mention, l),
          d = h.getEntity(e).getData().mention,
          _ = s || (d.link ? u : a);

      return r["default"].createElement(_, {
        entityKey: e,
        mention: d,
        theme: o,
        className: p,
        decoratedText: f
      }, c);
    };
  },
  495: function _(t, e, n) {
    "use strict";

    function r(t) {
      var e,
          n,
          i = "";
      if ("string" == typeof t || "number" == typeof t) i += t;else if ("object" == _typeof(t)) if (Array.isArray(t)) for (e = 0; e < t.length; e++) {
        t[e] && (n = r(t[e])) && (i && (i += " "), i += n);
      } else for (e in t) {
        t[e] && (i && (i += " "), i += e);
      }
      return i;
    }

    n.r(e), e["default"] = function () {
      for (var t, e, n = 0, i = ""; n < arguments.length;) {
        (t = arguments[n++]) && (e = r(t)) && (i && (i += " "), i += e);
      }

      return i;
    };
  },
  496: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r,
        i = function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      return function (e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      };
    }(),
        o = n(3),
        u = (r = o) && r.__esModule ? r : {
      "default": r
    },
        a = function (t) {
      function e(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, e);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t));

        return n.searchPortalRef = function (t) {
          n.searchPortal = t;
        }, n;
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
      }(e, t), i(e, [{
        key: "componentDidMount",
        value: function value() {
          this.props.store.register(this.props.offsetKey), this.props.store.setIsOpened(!0), this.updatePortalClientRect(this.props), this.props.setEditorState(this.props.getEditorState());
        }
      }, {
        key: "componentWillReceiveProps",
        value: function value(t) {
          this.updatePortalClientRect(t);
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          this.props.store.unregister(this.props.offsetKey), this.props.store.setIsOpened(!1);
        }
      }, {
        key: "updatePortalClientRect",
        value: function value(t) {
          var e = this;
          this.props.store.updatePortalClientRect(t.offsetKey, function () {
            return e.searchPortal.getBoundingClientRect();
          });
        }
      }, {
        key: "render",
        value: function value() {
          return u["default"].createElement("span", {
            className: this.key,
            ref: this.searchPortalRef
          }, this.props.children);
        }
      }]), e;
    }(o.Component);

    e["default"] = a;
  },
  497: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = "[\\w-À-ÖØ-öø-ÿĀ-ňŊ-ſА-я぀-ゟ゠-ヿ㄰-㆏가-힣一-黿]*";
  },
  498: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r,
        i = (r = n(238)) && r.__esModule ? r : {
      "default": r
    };

    e["default"] = function (t) {
      return function (e, n, r) {
        e.findEntityRanges(function (e) {
          var n = e.getEntity();
          return null !== n && r.getEntity(n).getType() === (0, i["default"])(t);
        }, n);
      };
    };
  },
  499: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var r,
        i = (r = n(236)) && r.__esModule ? r : {
      "default": r
    };

    e["default"] = function (t, e, n) {
      var r = e ? new RegExp((0, i["default"])(t) + "(" + n + "|\\s){0,}", "g") : new RegExp("(\\s|^)" + (0, i["default"])(t) + n, "g");
      return function (t, e) {
        !function (t, e, n) {
          var r = e.getText();
          e.findEntityRanges(function (t) {
            return !t.getEntity();
          }, function (e, i) {
            for (var o = r.slice(e, i), u = void 0, a = void 0, s = t.lastIndex; null !== (u = t.exec(o)) && t.lastIndex !== s;) {
              s = t.lastIndex, a = e + u.index, n(a, a + u[0].length);
            }
          });
        }(r, t, e);
      };
    };
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
  500: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = function (t, e) {
      var n = t.toLowerCase(),
          r = e.filter(function (t) {
        return !n || t.name.toLowerCase().indexOf(n) > -1;
      }),
          i = r.length < 5 ? r.length : 5;
      return r.slice(0, i);
    };
  },
  501: function _(t, e, n) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e["default"] = function (t) {
      var e = t.decoratorRect,
          n = t.popover,
          r = t.state,
          i = t.props,
          o = function t(e) {
        return e ? "static" !== window.getComputedStyle(e).getPropertyValue("position") ? e : t(e.parentElement) : null;
      }(n.parentElement),
          u = {};

      if (o) {
        u.scrollLeft = o.scrollLeft, u.scrollTop = o.scrollTop;
        var a = o.getBoundingClientRect();
        u.left = e.left - a.left, u.top = e.bottom - a.top;
      } else u.scrollTop = window.pageYOffset || document.documentElement.scrollTop, u.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, u.top = e.bottom, u.left = e.left;

      var s = u.left + u.scrollLeft,
          c = u.top + u.scrollTop,
          f = void 0,
          l = void 0;
      return r.isActive && (i.suggestions.length > 0 ? (f = "scale(1)", l = "all 0.25s cubic-bezier(.3,1.2,.2,1)") : (f = "scale(0)", l = "all 0.35s cubic-bezier(.3,1,.2,1)")), {
        left: s + "px",
        top: c + "px",
        transform: f,
        transformOrigin: "1em 0%",
        transition: l
      };
    };
  },
  502: function _(t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  503: function _(t, e) {
    t.exports = function (t, e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [],
            _n = !0,
            r = !1,
            i = void 0;

        try {
          for (var o, u = t[Symbol.iterator](); !(_n = (o = u.next()).done) && (n.push(o.value), !e || n.length !== e); _n = !0) {
            ;
          }
        } catch (t) {
          r = !0, i = t;
        } finally {
          try {
            _n || null == u["return"] || u["return"]();
          } finally {
            if (r) throw i;
          }
        }

        return n;
      }
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  504: function _(t, e) {
    t.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  51: function _(t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var n = 0, r = new Array(e); n < e; n++) {
        r[n] = t[n];
      }

      return r;
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  55: function _(t, e, n) {
    var r;
    !function () {
      "use strict";

      var n = {}.hasOwnProperty;

      function i() {
        for (var t = [], e = 0; e < arguments.length; e++) {
          var r = arguments[e];

          if (r) {
            var o = _typeof(r);

            if ("string" === o || "number" === o) t.push(r);else if (Array.isArray(r) && r.length) {
              var u = i.apply(null, r);
              u && t.push(u);
            } else if ("object" === o) for (var a in r) {
              n.call(r, a) && r[a] && t.push(a);
            }
          }
        }

        return t.join(" ");
      }

      t.exports ? (i["default"] = i, t.exports = i) : void 0 === (r = function () {
        return i;
      }.apply(e, [])) || (t.exports = r);
    }();
  },
  6: function _(t, e) {
    t.exports = window.yoast.styleGuide;
  },
  61: function _(t, e) {
    t.exports = window.wp.a11y;
  },
  62: function _(t, e, n) {
    var r = n(51);
    t.exports = function (t, e) {
      if (t) {
        if ("string" == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(t, e) : void 0;
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
  74: function _(t, e, n) {
    var r = n(51);
    t.exports = function (t) {
      if (Array.isArray(t)) return r(t);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  741: function _(t, e, n) {
    "use strict";

    n.r(e), n.d(e, "ReplacementVariableEditor", function () {
      return Xt;
    }), n.d(e, "ReplacementVariableEditorStandalone", function () {
      return Vt;
    }), n.d(e, "SettingsSnippetEditor", function () {
      return re;
    }), n.d(e, "StyledEditor", function () {
      return Zt;
    }), n.d(e, "StandardButton", function () {
      return $t;
    }), n.d(e, "TriggerReplacementVariableSuggestionsButton", function () {
      return Gt;
    }), n.d(e, "replacementVariablesShape", function () {
      return X;
    }), n.d(e, "recommendedReplacementVariablesShape", function () {
      return Z;
    });

    var r = n(8),
        i = n.n(r),
        o = n(9),
        u = n.n(o),
        a = n(15),
        s = n.n(a),
        c = n(11),
        f = n.n(c),
        l = n(12),
        h = n.n(l),
        p = n(7),
        d = n.n(p),
        _ = n(1),
        v = n(3),
        y = n.n(v),
        g = n(0),
        m = n.n(g),
        b = n(87),
        w = n.n(b),
        S = n(10),
        O = n(16),
        E = n.n(O),
        x = n(5),
        I = n.n(x),
        M = n(313),
        z = n.n(M),
        k = n(314),
        D = n.n(k),
        j = n(126),
        C = n(18),
        P = /\n/g;

    function R(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
      return t.replace(P, e);
    }

    function A(t, e, n) {
      e = e || t.getCurrentContent().getBlocksAsArray();
      var r = Object(j.List)(),
          i = Object(j.List)();
      e.forEach(function (t) {
        "atomic" !== t.getType() && (r = r.push(R(t.getText())), i = i.concat(t.getCharacterList()));
      }), n.stripEntities && (i = i.map(q));
      var o = new C.ContentBlock({
        key: Object(C.genKey)(),
        text: r.join(""),
        type: "unstyled",
        characterList: i,
        depth: 0
      }),
          u = C.ContentState.createFromBlockArray([o]);
      return t = C.EditorState.push(t, u, "remove-range"), C.EditorState.moveFocusToEnd(t);
    }

    function q(t) {
      return t.set("entity", null);
    }

    function B(t) {
      var e = !1;
      return t.forEach(function (t) {
        null !== t.get("entity") && (e = !0);
      }), e;
    }

    var T = {
      stripEntities: !0
    },
        K = n(124),
        F = n.n(K),
        L = n(122),
        U = n.n(L),
        V = n(100),
        W = n.n(V),
        N = n(101),
        H = n.n(N),
        J = n(315),
        $ = n.n(J),
        G = n(61),
        Y = n(4),
        Q = n.n(Y),
        X = m.a.arrayOf(m.a.shape({
      name: m.a.string.isRequired,
      value: m.a.string.isRequired,
      label: m.a.string,
      description: m.a.string
    })),
        Z = m.a.arrayOf(m.a.string);

    function tt(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function et(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? tt(Object(n), !0).forEach(function (e) {
          E()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    var nt,
        rt = function t(e) {
      return e ? "static" !== window.getComputedStyle(e).getPropertyValue("position") ? e : t(e.parentElement) : document.documentElement;
    },
        it = function it(t) {
      return {
        width: t.offsetWidth,
        height: t.offsetHeight
      };
    },
        ot = function ot(t, e, n) {
      var r = e.top - t.top,
          i = e.bottom - e.top;
      return e.bottom + n + 3 > window.innerHeight ? r - i - n : r + i;
    },
        ut = function ut(t, e, n) {
      var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          i = e.left - t.left;
      r && (i -= n);
      var o = e.left + n + 3;

      if (r && (o -= n), o > window.innerWidth) {
        var u = o - window.innerWidth;
        return i - u;
      }

      return i;
    },
        at = function at(t, e) {
      var n = "scale(0)",
          r = "all 0.35s cubic-bezier(.3,1,.2,1)";
      return t.isActive && e.suggestions.length > 0 && (n = "scale(1)", r = "all 0.25s cubic-bezier(.3,1.2,.2,1)"), {
        transform: n,
        transformOrigin: "1em 0%",
        transition: r
      };
    },
        st = n(55),
        ct = n.n(st),
        ft = n(6),
        lt = Q.a.span(nt || (nt = I()(["\n\tcolor: ", ";\n\tbackground-color: ", ";\n\tpadding: 0 8px;\n\tmargin: 0 2px;\n\tline-height: 1.71428571; // 24px based on 14px font-size\n\tborder-radius: 17px;\n\tcursor: default;\n\n\t&:hover {\n\t\tcolor: ", ";\n\t\tbackground-color: ", ";\n\t}\n"])), ft.colors.$color_white, ft.colors.$color_pink_dark, ft.colors.$color_white, ft.colors.$color_pink_dark),
        ht = function ht(t) {
      var e = t.children,
          n = t.className;
      return Object(_.createElement)(lt, {
        className: ct()("yst-replacevar__mention", n),
        spellCheck: !1
      }, e);
    };

    ht.propTypes = {
      children: m.a.node.isRequired,
      className: m.a.string.isRequired
    };

    var pt = n(316),
        dt = n.n(pt),
        _t = n(21),
        vt = n.n(_t),
        yt = n(14);

    function gt(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function mt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? gt(Object(n), !0).forEach(function (e) {
          E()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    var bt = /%%([A-Za-z0-9_]+)%%/g;

    function wt(t) {
      return "%%" + t + "%%";
    }

    function St(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
      return vt()(e).reverse().forEach(function (e) {
        var n = e.start,
            r = e.end,
            i = e.replacementText,
            o = t.slice(0, n),
            u = t.slice(r, t.length);
        t = o + i + u;
      }), t;
    }

    function Ot(t, e, n) {
      return t >= e && t <= n;
    }

    function Et(t, e) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.start,
          i = void 0 === r ? 0 : r,
          o = n.end,
          u = void 0 === o ? t.getText().length : o,
          a = t.getText().slice(i, u),
          s = [];
      return t.findEntityRanges(function (t) {
        return !!t.getEntity();
      }, function (n, r) {
        if (Ot(n, i, u) && Ot(r, i, u)) {
          var o = e(t.getEntityAt(n));
          s.push({
            start: n - i,
            end: r - i,
            replacementText: wt(o.data.mention.replaceName)
          });
        }
      }), St(a, s);
    }

    function xt(t, e) {
      var n = e;
      return t.forEach(function (t) {
        t.name === e && t.label && (n = t.label);
      }), n;
    }

    function It(t, e) {
      var n = t.getCurrentContent().getBlockMap(),
          r = t;
      return n.forEach(function (t) {
        var n = t.text,
            i = t.key,
            o = function (t) {
          for (var e, n = []; e = bt.exec(t);) {
            var r = e,
                i = dt()(r, 2),
                o = i[0],
                u = i[1];
            n.push({
              name: u,
              start: e.index,
              length: o.length
            });
          }

          return n;
        }(n);

        vt()(o).reverse().forEach(function (t) {
          t = function (t) {
            return mt(mt({}, t), {}, {
              start: t.start,
              end: t.start + t.length,
              delta: t.label.length - t.length
            });
          }(t = function (t, e) {
            return mt(mt({}, t), {}, {
              label: xt(e, t.name)
            });
          }(t, e));

          var n = r.getSelection();

          n = function (t, e, n) {
            var r = n.start,
                i = n.end,
                o = n.delta;

            if (t.hasEdgeWithin(e, r, i)) {
              var u = i + o;
              t = t.merge({
                anchorOffset: u,
                focusOffset: u
              });
            } else t.focusOffset > i && (t = t.merge({
              anchorOffset: t.anchorOffset + o,
              focusOffset: t.focusOffset + o
            }));

            return t;
          }(n, i, t);

          var o = function (t, e, n, r) {
            var i = t.getCurrentContent(),
                o = function (t, e) {
              var n = e.getAnchorKey(),
                  r = t.getCurrentContent().getBlockForKey(n),
                  i = e.getStartOffset(),
                  o = e.getEndOffset();
              return r.getText().slice(i, o);
            }(t, C.SelectionState.createEmpty(n).merge({
              anchorOffset: r.end,
              focusOffset: r.end + 1
            }));

            if (!Object(yt.getWordBoundaries)().includes(o)) {
              var u = C.SelectionState.createEmpty(n).merge({
                anchorOffset: r.end,
                focusOffset: r.end
              }),
                  a = C.Modifier.insertText(i, u, " ");
              t = C.EditorState.push(t, a, "insert-characters"), e.getAnchorOffset() >= r.start && (e = e.merge({
                anchorOffset: e.getAnchorOffset() + 1,
                focusOffset: e.getFocusOffset() + 1
              }));
            }

            return {
              editorState: t,
              selection: e
            };
          }(r, n, i, t);

          r = function (t, e, n) {
            var r = t.getCurrentContent(),
                i = C.SelectionState.createEmpty(n).merge({
              anchorOffset: e.start,
              focusOffset: e.end
            });

            r = function (t, e) {
              var n = {
                mention: {
                  replaceName: e.name
                }
              };
              return t.createEntity("%mention", "IMMUTABLE", n);
            }(r, e);

            var o = C.Modifier.replaceText(r, i, e.label, null, r.getLastCreatedEntityKey());
            return C.EditorState.push(t, o, "apply-entity");
          }(o.editorState, t, i), r = C.EditorState.acceptSelection(r, o.selection);
        });
      }), r;
    }

    function Mt(t, e) {
      return It(C.EditorState.createWithContent(C.ContentState.createFromText(t)), e);
    }

    var zt,
        kt = function kt(t, e) {
      var n = t.charAt(e);
      return 0 === n.length || /\s/.test(n);
    },
        Dt = function Dt(t, e) {
      var n = e.getAnchorKey();
      return t.getBlockForKey(n);
    };

    function jt(t, e, n) {
      var r = t.getBlockForKey(e),
          i = null;
      return r.findEntityRanges(function (t) {
        return t.getEntity() === n;
      }, function (t, e) {
        i = {
          start: t,
          end: e
        };
      }), i;
    }

    function Ct(t, e, n) {
      var r = t.getBlockForKey(e).getEntityAt(n),
          i = jt(t, e, r);
      return null === i || i.start === n ? null : r;
    }

    function Pt(t, e) {
      var n = e.start,
          r = e.end;
      return t.getStartOffset() <= n && t.getEndOffset() >= r;
    }

    function Rt(t, e) {
      var n = Object.keys(t);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function At(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Rt(Object(n), !0).forEach(function (e) {
          E()(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }

    var qt = Q.a.div(zt || (zt = I()(["\n\tdiv {\n\t\tz-index: 10995;\n\t}\n"]))),
        Bt = function (t) {
      f()(o, t);
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
            r = d()(e);

        if (n) {
          var i = d()(this).constructor;
          t = Reflect.construct(r, arguments, i);
        } else t = r.apply(this, arguments);

        return h()(this, t);
      });

      function o(t) {
        var e;
        i()(this, o);
        var n = (e = r.call(this, t)).props,
            u = n.content,
            a = n.replacementVariables,
            s = n.recommendedReplacementVariables,
            c = Mt(u, a),
            f = e.determineCurrentReplacementVariables(a, s);
        return e.state = {
          editorState: c,
          searchValue: "",
          suggestions: e.mapReplacementVariablesToSuggestions(f)
        }, e._serializedContent = u, e.initializeBinds(), e.initializeDraftJsPlugins(t.theme.isRtl), e;
      }

      return u()(o, [{
        key: "initializeBinds",
        value: function value() {
          this.onChange = this.onChange.bind(this), this.onSearchChange = this.onSearchChange.bind(this), this.setEditorRef = this.setEditorRef.bind(this), this.handleCopyCutEvent = this.handleCopyCutEvent.bind(this), this.debouncedA11ySpeak = F()(G.speak.bind(this), 500);
        }
      }, {
        key: "initializeDraftJsPlugins",
        value: function value(t) {
          this.mentionsPlugin = D()({
            mentionTrigger: "%",
            entityMutability: "IMMUTABLE",
            positionSuggestions: function positionSuggestions(e) {
              return function (t) {
                var e = t.decoratorRect,
                    n = t.popover,
                    r = t.state,
                    i = t.props,
                    o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    u = rt(n.parentElement),
                    a = u.getBoundingClientRect(),
                    s = it(n),
                    c = {
                  top: ot(a, e, s.height),
                  left: ut(a, e, s.width, o)
                },
                    f = at(r, i);
                return et({
                  top: c.top + "px",
                  left: c.left + "px"
                }, f);
              }(e, t);
            },
            mentionComponent: ht
          }), this.singleLinePlugin = function () {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return t = Object.assign({}, T, t), {
              blockRenderMap: Object(j.Map)({
                unstyled: {
                  element: "div"
                }
              }),
              onChange: function onChange(e) {
                var n = e.getCurrentContent().getBlocksAsArray();
                if (n.length > 1) e = A(e, n, t);else {
                  var r = n[0],
                      i = r.getText(),
                      o = r.getCharacterList(),
                      u = t.stripEntities && B(o);

                  if (P.test(i) || u) {
                    i = R(i), t.stripEntities && (o = o.map(q)), r = new C.ContentBlock({
                      key: Object(C.genKey)(),
                      text: i,
                      type: "unstyled",
                      characterList: o,
                      depth: 0
                    });
                    var a = C.ContentState.createFromBlockArray([r]);
                    e = C.EditorState.push(e, a, "insert-characters");
                  }
                }
                return e;
              },
              handleReturn: function handleReturn(t) {
                return "handled";
              }
            };
          }({
            stripEntities: !1
          });
        }
      }, {
        key: "serializeContent",
        value: function value(t) {
          var e = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ",
                n = t.getBlockMap();
            return n.map(function (e) {
              return Et(e, function (e) {
                return t.getEntity(e);
              });
            }).join(e);
          }(t.getCurrentContent());

          this._serializedContent !== e && (this._serializedContent = e, this.props.onChange(this._serializedContent));
        }
      }, {
        key: "onChange",
        value: function value(t) {
          var e = this;
          return new Promise(function (n) {
            t = function (t, e) {
              var n = t.getSelection(),
                  r = e.getSelection(),
                  i = t.getCurrentContent();
              if (n === r) return t;

              var o = function (t, e, n) {
                var r = t.getStartOffset(),
                    i = t.getStartKey(),
                    o = t.getEndOffset(),
                    u = t.getEndKey(),
                    a = function (t) {
                  var e = "anchorOffset",
                      n = "focusOffset";
                  return t && (e = "focusOffset", n = "anchorOffset"), {
                    startOffsetProperty: e,
                    endOffsetProperty: n
                  };
                }(t.getIsBackward()),
                    s = a.startOffsetProperty,
                    c = a.endOffsetProperty,
                    f = Ct(n, i, r);

                if (null !== f) {
                  var l = jt(n, i, f),
                      h = l.start,
                      p = l.end;
                  t = Pt(e, l) ? t.merge(E()({}, s, p)) : t.merge(E()({}, s, h));
                }

                var d = Ct(n, u, o);

                if (null !== d) {
                  var _ = jt(n, i, d),
                      v = _.start,
                      y = _.end;

                  t = Pt(e, _) ? t.merge(E()({}, c, v)) : t.merge(E()({}, c, y));
                }

                return t;
              }(n, r, i);

              return o !== n && (t = C.EditorState.forceSelection(t, o)), t;
            }(t = It(t, e.props.replacementVariables), e.state.editorState), e.setState({
              editorState: t
            }, function () {
              e.serializeContent(t), n();
            });
          });
        }
      }, {
        key: "mapReplacementVariablesToSuggestions",
        value: function value(t) {
          return t.map(function (t) {
            return At(At({}, t), {}, {
              name: t.label,
              replaceName: t.name
            });
          });
        }
      }, {
        key: "suggestionsFilter",
        value: function value(t, e) {
          var n = t.toLowerCase();
          return e.filter(function (t) {
            return !n || 0 === t.name.toLowerCase().indexOf(n);
          });
        }
      }, {
        key: "determineCurrentReplacementVariables",
        value: function value(t, e) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
              r = "" === n && !U()(e);

          if (r) {
            var i = W()(t, function (t) {
              return H()(e, t.name);
            });
            if (0 !== i.length) return i;
          }

          return t;
        }
      }, {
        key: "onSearchChange",
        value: function value(t) {
          var e = this,
              n = t.value,
              r = this.determineCurrentReplacementVariables(this.props.replacementVariables, this.props.recommendedReplacementVariables, n),
              i = this.mapReplacementVariablesToSuggestions(r);
          this.setState({
            searchValue: n,
            suggestions: this.suggestionsFilter(n, i)
          }), setTimeout(function () {
            e.announceSearchResults();
          });
        }
      }, {
        key: "announceSearchResults",
        value: function value() {
          var t = this.state.suggestions;
          t.length ? this.debouncedA11ySpeak(Object(S.sprintf)(Object(S._n)("%d result found, use up and down arrow keys to navigate", "%d results found, use up and down arrow keys to navigate", t.length, "yoast-components"), t.length), "assertive") : this.debouncedA11ySpeak(Object(S.__)("No results", "yoast-components"), "assertive");
        }
      }, {
        key: "focus",
        value: function value() {
          this.editor.focus();
        }
      }, {
        key: "setEditorRef",
        value: function value(t) {
          this.editor = t;
        }
      }, {
        key: "setEditorFieldId",
        value: function value() {
          $()(this.editor, "editor.editor").id = this.props.fieldId;
        }
      }, {
        key: "triggerReplacementVariableSuggestions",
        value: function value() {
          var t,
              e = this,
              n = function (t) {
            var e = t.getCurrentContent(),
                n = t.getSelection(),
                r = C.Modifier.removeRange(e, n, "backward");
            return C.EditorState.push(t, r, "remove-range");
          }(this.state.editorState),
              r = n.getSelection(),
              i = n.getCurrentContent(),
              o = Dt(i, r).getText(),
              u = (t = r).getIsBackward() ? t.getEndOffset() : t.getStartOffset(),
              a = !kt(o, u - 1),
              s = !kt(o, u),
              c = function (t, e) {
            var n = "%";
            return t && (n = " " + n), e && (n += " "), n;
          }(a, s);

          n = function (t, e) {
            var n = t.getCurrentContent(),
                r = t.getSelection();
            if (!r.isCollapsed()) return t;
            var i = C.Modifier.insertText(n, r, e);
            return C.EditorState.push(t, i, "insert-characters");
          }(n, c), s && (n = function (t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                r = t.getCurrentContent(),
                i = t.getSelection();
            "" === n && (n = Dt(r, i).getKey());
            var o = C.SelectionState.createEmpty(n).merge({
              anchorOffset: e,
              focusOffset: e
            });
            return C.EditorState.acceptSelection(t, o);
          }(n, u + c.length - 1)), this.onChange(n).then(function () {
            return e.focus();
          });
        }
      }, {
        key: "componentWillReceiveProps",
        value: function value(t) {
          var e = this.props,
              n = e.content,
              r = e.replacementVariables,
              i = e.recommendedReplacementVariables,
              o = this.state.searchValue;

          if (t.content !== this._serializedContent && t.content !== n || t.replacementVariables !== r) {
            this._serializedContent = t.content;
            var u = Mt(t.content, t.replacementVariables),
                a = this.determineCurrentReplacementVariables(t.replacementVariables, i, o),
                s = this.mapReplacementVariablesToSuggestions(a);
            this.setState({
              editorState: u,
              suggestions: this.suggestionsFilter(o, s)
            });
          }
        }
      }, {
        key: "handleCopyCutEvent",
        value: function value(t) {
          var e = this.state.editorState,
              n = e.getSelection();
          if (n.getHasFocus()) try {
            var r = t.clipboardData,
                i = function (t, e) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : " ",
                  r = e.getStartKey(),
                  i = e.getEndKey(),
                  o = t.getBlockMap(),
                  u = !1,
                  a = o.skipUntil(function (t) {
                return t.getKey() === r;
              }).takeUntil(function (t) {
                var e = u;
                return t.getKey() === i && (u = !0), e;
              });
              return a.map(function (n) {
                var o = n.getKey(),
                    u = {};
                return o === r && (u.start = e.getStartOffset()), o === i && (u.end = e.getEndOffset()), Et(n, function (e) {
                  return t.getEntity(e);
                }, u);
              }).join(n);
            }(e.getCurrentContent(), n);

            r.setData("text/plain", i), t.preventDefault();
          } catch (t) {
            console.error("Couldn't copy content of editor to clipboard, defaulting to browser copy behavior."), console.error("Original error: ", t);
          }
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          document.addEventListener("copy", this.handleCopyCutEvent), document.addEventListener("cut", this.handleCopyCutEvent), this.setEditorFieldId();
        }
      }, {
        key: "componentWillUnmount",
        value: function value() {
          this.debouncedA11ySpeak.cancel(), document.removeEventListener("copy", this.handleCopyCutEvent), document.removeEventListener("cut", this.handleCopyCutEvent);
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.mentionsPlugin.MentionSuggestions,
              e = this.props,
              n = e.onFocus,
              r = e.onBlur,
              i = e.ariaLabelledBy,
              o = e.placeholder,
              u = e.theme,
              a = e.isDisabled,
              s = this.state,
              c = s.editorState,
              f = s.suggestions;
          return Object(_.createElement)(y.a.Fragment, null, Object(_.createElement)(z.a, {
            textDirectionality: u.isRtl ? "RTL" : "LTR",
            editorState: c,
            onChange: this.onChange,
            onFocus: n,
            onBlur: r,
            plugins: [this.mentionsPlugin, this.singleLinePlugin],
            ref: this.setEditorRef,
            stripPastedStyles: !0,
            ariaLabelledBy: i,
            placeholder: o,
            spellCheck: !0,
            readOnly: a
          }), Object(_.createElement)(qt, null, Object(_.createElement)(t, {
            onSearchChange: this.onSearchChange,
            suggestions: f
          })));
        }
      }]), o;
    }(y.a.Component);

    Bt.propTypes = {
      content: m.a.string.isRequired,
      replacementVariables: X.isRequired,
      recommendedReplacementVariables: Z,
      ariaLabelledBy: m.a.string.isRequired,
      onChange: m.a.func.isRequired,
      onFocus: m.a.func,
      onBlur: m.a.func,
      theme: m.a.object,
      placeholder: m.a.string,
      fieldId: m.a.string.isRequired,
      isDisabled: m.a.bool
    }, Bt.defaultProps = {
      onFocus: function onFocus() {},
      onBlur: function onBlur() {},
      placeholder: "",
      theme: {
        isRtl: !1
      },
      recommendedReplacementVariables: [],
      isDisabled: !1
    };
    var Tt,
        Kt,
        Ft,
        Lt,
        Ut,
        Vt = Object(Y.withTheme)(Bt),
        Wt = n(13),
        Nt = Q()(Wt.VariableEditorInputContainer)(Tt || (Tt = I()(["\n\t.public-DraftStyleDefault-block {\n\t\tline-height: 1.85714285; // 26px based on 14px font-size\n\t}\n\n\t.public-DraftEditorPlaceholder-root {\n\t\tcolor: ", ";\n\t\tline-height: 1.85714285; // 26px based on 14px font-size\n\t}\n\n\t.public-DraftEditorPlaceholder-hasFocus {\n\t\tcolor: ", ";\n\t}\n"])), "#707070", "#707070"),
        Ht = Q()(Wt.VariableEditorInputContainer)(Kt || (Kt = I()(["\n\tmin-height: 72px;\n\tpadding: 4px 5px;\n\tline-height: 1.85714285; // 26px based on 14px font-size\n\n\t.public-DraftEditorPlaceholder-root {\n\t\tcolor: ", ";\n\t\tposition: absolute;\n\t\tline-height: 1.85714285; // 26px based on 14px font-size\n\t}\n\n\t.public-DraftEditorPlaceholder-hasFocus {\n\t\tcolor: ", ";\n\t\tposition: absolute;\n\t}\n"])), "#707070", "#707070"),
        Jt = Q.a.div(Ft || (Ft = I()(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tmargin: 16px 0 0 0;\n"]))),
        $t = Q()(Wt.Button)(Lt || (Lt = I()(['\n\tcolor: #303030;\n\tbox-sizing: border-box;\n\tborder-radius: 4px;\n\tbox-shadow: inset 0 -2px 0 0 rgba(0,0,0,0.1);\n\tfont-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;\n\tpadding: 4px;\n\tborder: 1px solid #dbdbdb;\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tline-height: 1.5;\n\tmargin-bottom: 5px;\n\twidth: 112px;\n\theight: 40px;\n']))),
        Gt = Q()($t)(Ut || (Ut = I()(["\n\tfont-size: 13px;\n\twidth: 103px;\n\theight: 28px;\n\tmargin-left: auto;\n\t& svg {\n\t\t", ": 7px;\n\t\tfill: ", ";\n\t}\n"])), Object(yt.getDirectionalStyle)("margin-right", "margin-left"), ft.colors.$color_grey_dark);

    var Yt = function (t) {
      f()(o, t);
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
            r = d()(e);

        if (n) {
          var i = d()(this).constructor;
          t = Reflect.construct(r, arguments, i);
        } else t = r.apply(this, arguments);

        return h()(this, t);
      });

      function o(t) {
        var e;

        switch (i()(this, o), (e = r.call(this, t)).uniqueId = w()("replacement-variable-editor-field-"), t.type) {
          case "description":
            e.InputContainer = Ht;
            break;

          case "title":
            e.InputContainer = Nt;
            break;

          default:
            e.InputContainer = Nt;
        }

        return t.withCaret && (e.InputContainer = Object(ft.withCaretStyles)(e.InputContainer)), e.triggerReplacementVariableSuggestions = e.triggerReplacementVariableSuggestions.bind(s()(e)), e;
      }

      return u()(o, [{
        key: "triggerReplacementVariableSuggestions",
        value: function value() {
          this.ref.triggerReplacementVariableSuggestions();
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
              e = this.props,
              n = e.label,
              r = e.onChange,
              i = e.content,
              o = e.onFocus,
              u = e.onBlur,
              a = e.isActive,
              s = e.isHovered,
              c = e.replacementVariables,
              f = e.recommendedReplacementVariables,
              l = e.editorRef,
              h = e.placeholder,
              p = e.fieldId,
              d = e.onMouseEnter,
              v = e.onMouseLeave,
              y = e.hasNewBadge,
              g = e.isDisabled,
              m = e.hasPremiumBadge,
              b = this.InputContainer,
              w = Object(_.createElement)(Gt, {
            className: "yst-replacevar__button-insert",
            onClick: this.triggerReplacementVariableSuggestions,
            disabled: g
          }, Object(S.__)("Insert variable", "yoast-components"));
          return Object(_.createElement)(Jt, {
            className: "yst-replacevar",
            onMouseEnter: d,
            onMouseLeave: v
          }, Object(_.createElement)(Wt.SimulatedLabel, {
            className: "yst-replacevar__label",
            id: this.uniqueId,
            onClick: o
          }, n), m && Object(_.createElement)(Wt.PremiumBadge, {
            inLabel: !0
          }), y && Object(_.createElement)(Wt.NewBadge, {
            inLabel: !0
          }), w, Object(_.createElement)(b, {
            className: "yst-replacevar__editor",
            onClick: o,
            isActive: a && !g,
            isHovered: s
          }, Object(_.createElement)(Vt, {
            fieldId: p,
            placeholder: h,
            content: i,
            onChange: r,
            onFocus: o,
            onBlur: u,
            replacementVariables: c,
            recommendedReplacementVariables: f,
            ref: function ref(e) {
              t.ref = e, l(e);
            },
            ariaLabelledBy: this.uniqueId,
            isDisabled: g
          })));
        }
      }]), o;
    }(y.a.Component);

    Yt.propTypes = {
      editorRef: m.a.func,
      content: m.a.string.isRequired,
      onChange: m.a.func.isRequired,
      onBlur: m.a.func,
      replacementVariables: X,
      recommendedReplacementVariables: Z,
      isActive: m.a.bool,
      isHovered: m.a.bool,
      withCaret: m.a.bool,
      onFocus: m.a.func,
      label: m.a.string,
      placeholder: m.a.string,
      type: m.a.oneOf(["title", "description"]).isRequired,
      fieldId: m.a.string,
      onMouseEnter: m.a.func,
      onMouseLeave: m.a.func,
      hasNewBadge: m.a.bool,
      isDisabled: m.a.bool,
      hasPremiumBadge: m.a.bool
    }, Yt.defaultProps = {
      onFocus: function onFocus() {},
      onBlur: function onBlur() {},
      replacementVariables: [],
      recommendedReplacementVariables: [],
      fieldId: "",
      placeholder: "",
      label: "",
      withCaret: !1,
      isHovered: !1,
      isActive: !1,
      editorRef: function editorRef() {},
      onMouseEnter: function onMouseEnter() {},
      onMouseLeave: function onMouseLeave() {},
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1
    };
    var Qt,
        Xt = Yt;

    var Zt = Q.a.section(Qt || (Qt = I()(["\n\tpadding: ", ";\n"])), function (t) {
      return t.padding ? t.padding : "0 20px";
    }),
        te = function (t) {
      f()(o, t);
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
            r = d()(e);

        if (n) {
          var i = d()(this).constructor;
          t = Reflect.construct(r, arguments, i);
        } else t = r.apply(this, arguments);

        return h()(this, t);
      });

      function o(t) {
        var e;
        return i()(this, o), (e = r.call(this, t)).elements = {
          title: null,
          description: null
        }, e.setRef = e.setRef.bind(s()(e)), e.triggerReplacementVariableSuggestions = e.triggerReplacementVariableSuggestions.bind(s()(e)), e;
      }

      return u()(o, [{
        key: "setRef",
        value: function value(t, e) {
          this.elements[t] = e;
        }
      }, {
        key: "componentDidUpdate",
        value: function value(t) {
          this.focusOnActiveFieldChange(t.activeField);
        }
      }, {
        key: "focusOnActiveFieldChange",
        value: function value(t) {
          var e = this.props.activeField;
          e && e !== t && this.elements[e].focus();
        }
      }, {
        key: "triggerReplacementVariableSuggestions",
        value: function value(t) {
          this.elements[t].triggerReplacementVariableSuggestions();
        }
      }, {
        key: "render",
        value: function value() {
          var t = this,
              e = this.props,
              n = e.descriptionEditorFieldPlaceholder,
              r = e.activeField,
              i = e.hoveredField,
              o = e.replacementVariables,
              u = e.recommendedReplacementVariables,
              a = e.onFocus,
              s = e.onBlur,
              c = e.onChange,
              f = e.data,
              l = f.title,
              h = f.description,
              p = e.containerPadding,
              d = e.fieldIds,
              v = e.labels,
              y = e.hasNewBadge,
              g = e.isDisabled,
              m = e.hasPremiumBadge;
          return Object(_.createElement)(Zt, {
            padding: p
          }, Object(_.createElement)(Xt, {
            type: "title",
            label: v.title || Object(S.__)("SEO title", "yoast-components"),
            onFocus: function onFocus() {
              return a("title");
            },
            onBlur: s,
            isActive: "title" === r,
            isHovered: "title" === i,
            editorRef: function editorRef(e) {
              return t.setRef("title", e);
            },
            replacementVariables: o,
            recommendedReplacementVariables: u,
            content: l,
            onChange: function onChange(t) {
              return c("title", t);
            },
            fieldId: d.title,
            hasNewBadge: y,
            isDisabled: g,
            hasPremiumBadge: m
          }), Object(_.createElement)(Xt, {
            type: "description",
            placeholder: n,
            label: v.description || Object(S.__)("Meta description", "yoast-components"),
            onFocus: function onFocus() {
              return a("description");
            },
            onBlur: s,
            isActive: "description" === r,
            isHovered: "description" === i,
            editorRef: function editorRef(e) {
              return t.setRef("description", e);
            },
            replacementVariables: o,
            recommendedReplacementVariables: u,
            content: h,
            onChange: function onChange(t) {
              return c("description", t);
            },
            fieldId: d.description,
            hasNewBadge: y,
            isDisabled: g,
            hasPremiumBadge: m
          }));
        }
      }]), o;
    }(y.a.Component);

    te.propTypes = {
      replacementVariables: X,
      recommendedReplacementVariables: Z,
      onChange: m.a.func.isRequired,
      onFocus: m.a.func,
      onBlur: m.a.func,
      data: m.a.shape({
        title: m.a.string,
        description: m.a.string
      }).isRequired,
      activeField: m.a.oneOf(["title", "description"]),
      hoveredField: m.a.oneOf(["title", "description"]),
      descriptionEditorFieldPlaceholder: m.a.string,
      containerPadding: m.a.string,
      fieldIds: m.a.shape({
        title: m.a.string.isRequired,
        description: m.a.string.isRequired
      }).isRequired,
      labels: m.a.shape({
        title: m.a.string,
        description: m.a.string
      }),
      hasNewBadge: m.a.bool,
      isDisabled: m.a.bool,
      hasPremiumBadge: m.a.bool
    }, te.defaultProps = {
      replacementVariables: [],
      onFocus: function onFocus() {},
      onBlur: function onBlur() {},
      containerPadding: "0 20px",
      descriptionEditorFieldPlaceholder: null,
      labels: {},
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1
    };
    var ee = te;

    var ne = function (t) {
      f()(o, t);
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
            r = d()(e);

        if (n) {
          var i = d()(this).constructor;
          t = Reflect.construct(r, arguments, i);
        } else t = r.apply(this, arguments);

        return h()(this, t);
      });

      function o(t) {
        var e;
        return i()(this, o), (e = r.call(this, t)).state = {
          activeField: null,
          hoveredField: null
        }, e.setFieldFocus = e.setFieldFocus.bind(s()(e)), e.handleChange = e.handleChange.bind(s()(e)), e.onClick = e.onClick.bind(s()(e)), e.onBlur = e.onBlur.bind(s()(e)), e;
      }

      return u()(o, [{
        key: "handleChange",
        value: function value(t, e) {
          this.props.onChange(t, e);
        }
      }, {
        key: "setFieldFocus",
        value: function value(t) {
          this.setState({
            activeField: t
          });
        }
      }, {
        key: "onBlur",
        value: function value() {
          this.setState({
            activeField: null
          });
        }
      }, {
        key: "onClick",
        value: function value(t) {
          this.setFieldFocus(t);
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.data,
              n = t.replacementVariables,
              r = t.recommendedReplacementVariables,
              i = t.descriptionEditorFieldPlaceholder,
              o = t.hasPaperStyle,
              u = t.fieldIds,
              a = t.labels,
              s = t.hasNewBadge,
              c = t.isDisabled,
              f = t.hasPremiumBadge,
              l = this.state,
              h = l.activeField,
              p = l.hoveredField;
          return Object(_.createElement)(Wt.ErrorBoundary, null, Object(_.createElement)(ee, {
            descriptionEditorFieldPlaceholder: i,
            data: e,
            activeField: h,
            hoveredField: p,
            onChange: this.handleChange,
            onFocus: this.setFieldFocus,
            onBlur: this.onBlur,
            replacementVariables: n,
            recommendedReplacementVariables: r,
            containerPadding: o ? "0 20px" : "0",
            fieldIds: u,
            labels: a,
            hasNewBadge: s,
            isDisabled: c,
            hasPremiumBadge: f
          }));
        }
      }]), o;
    }(y.a.Component);

    ne.propTypes = {
      replacementVariables: X,
      recommendedReplacementVariables: Z,
      data: m.a.shape({
        title: m.a.string.isRequired,
        description: m.a.string.isRequired
      }).isRequired,
      onChange: m.a.func.isRequired,
      descriptionEditorFieldPlaceholder: m.a.string,
      hasPaperStyle: m.a.bool,
      fieldIds: m.a.shape({
        title: m.a.string.isRequired,
        description: m.a.string.isRequired
      }).isRequired,
      labels: m.a.shape({
        title: m.a.string,
        description: m.a.string
      }),
      hasNewBadge: m.a.bool,
      isDisabled: m.a.bool,
      hasPremiumBadge: m.a.bool
    }, ne.defaultProps = {
      replacementVariables: [],
      recommendedReplacementVariables: [],
      hasPaperStyle: !0,
      descriptionEditorFieldPlaceholder: null,
      labels: {},
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1
    };
    var re = ne;
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
  87: function _(t, e) {
    t.exports = window.lodash.uniqueId;
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