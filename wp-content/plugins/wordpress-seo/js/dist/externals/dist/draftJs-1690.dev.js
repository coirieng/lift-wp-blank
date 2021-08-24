"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.draftJs = function (t) {
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
  }, n.p = "", n(n.s = 586);
}([,,, function (t, e) {
  t.exports = window.React;
},,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  t.exports = function (t, e, n, r, i, o, a, s) {
    if (!t) {
      var u;
      if (void 0 === e) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
        var c = [n, r, i, o, a, s],
            l = 0;
        (u = new Error(e.replace(/%s/g, function () {
          return c[l++];
        }))).name = "Invariant Violation";
      }
      throw u.framesToPop = 1, u;
    }
  };
}, function (t, e, n) {
  t.exports = function () {
    "use strict";

    var t = Array.prototype.slice;

    function e(t, e) {
      e && (t.prototype = Object.create(e.prototype)), t.prototype.constructor = t;
    }

    function n(t) {
      return a(t) ? t : U(t);
    }

    function r(t) {
      return s(t) ? t : q(t);
    }

    function i(t) {
      return u(t) ? t : H(t);
    }

    function o(t) {
      return a(t) && !c(t) ? t : W(t);
    }

    function a(t) {
      return !(!t || !t[f]);
    }

    function s(t) {
      return !(!t || !t[p]);
    }

    function u(t) {
      return !(!t || !t[h]);
    }

    function c(t) {
      return s(t) || u(t);
    }

    function l(t) {
      return !(!t || !t[d]);
    }

    e(r, n), e(i, n), e(o, n), n.isIterable = a, n.isKeyed = s, n.isIndexed = u, n.isAssociative = c, n.isOrdered = l, n.Keyed = r, n.Indexed = i, n.Set = o;
    var f = "@@__IMMUTABLE_ITERABLE__@@",
        p = "@@__IMMUTABLE_KEYED__@@",
        h = "@@__IMMUTABLE_INDEXED__@@",
        d = "@@__IMMUTABLE_ORDERED__@@",
        g = {},
        y = {
      value: !1
    },
        v = {
      value: !1
    };

    function m(t) {
      return t.value = !1, t;
    }

    function _(t) {
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

    function x(t, e) {
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

    function k(t, e, n) {
      return (0 === t || void 0 !== n && t <= -n) && (void 0 === e || void 0 !== n && e >= n);
    }

    function C(t, e) {
      return T(t, e, 0);
    }

    function O(t, e) {
      return T(t, e, e);
    }

    function T(t, e, n) {
      return void 0 === t ? n : t < 0 ? Math.max(0, e + t) : void 0 === e ? t : Math.min(e, t);
    }

    var D,
        M,
        K,
        A = "function" == typeof Symbol && Symbol.iterator,
        I = A || "@@iterator";

    function B(t) {
      this.next = t;
    }

    function L(t, e, n, r) {
      var i = 0 === t ? e : 1 === t ? n : [e, n];
      return r ? r.value = i : r = {
        value: i,
        done: !1
      }, r;
    }

    function R() {
      return {
        value: void 0,
        done: !0
      };
    }

    function N(t) {
      return !!P(t);
    }

    function F(t) {
      return t && "function" == typeof t.next;
    }

    function z(t) {
      var e = P(t);
      return e && e.call(t);
    }

    function P(t) {
      var e = t && (A && t[A] || t["@@iterator"]);
      if ("function" == typeof e) return e;
    }

    function j(t) {
      return t && "number" == typeof t.length;
    }

    function U(t) {
      return null == t ? $() : a(t) ? t.toSeq() : function (t) {
        var e = tt(t) || "object" == _typeof(t) && new G(t);
        if (!e) throw new TypeError("Expected Array or iterable object of values, or keyed object: " + t);
        return e;
      }(t);
    }

    function q(t) {
      return null == t ? $().toKeyedSeq() : a(t) ? s(t) ? t.toSeq() : t.fromEntrySeq() : Z(t);
    }

    function H(t) {
      return null == t ? $() : a(t) ? s(t) ? t.entrySeq() : t.toIndexedSeq() : Q(t);
    }

    function W(t) {
      return (null == t ? $() : a(t) ? s(t) ? t.entrySeq() : t : Q(t)).toSetSeq();
    }

    function V(t) {
      this._array = t, this.size = t.length;
    }

    function G(t) {
      var e = Object.keys(t);
      this._object = t, this._keys = e, this.size = e.length;
    }

    function J(t) {
      this._iterable = t, this.size = t.length || t.size;
    }

    function X(t) {
      this._iterator = t, this._iteratorCache = [];
    }

    function Y(t) {
      return !(!t || !t["@@__IMMUTABLE_SEQ__@@"]);
    }

    function $() {
      return D || (D = new V([]));
    }

    function Z(t) {
      var e = Array.isArray(t) ? new V(t).fromEntrySeq() : F(t) ? new X(t).fromEntrySeq() : N(t) ? new J(t).fromEntrySeq() : "object" == _typeof(t) ? new G(t) : void 0;
      if (!e) throw new TypeError("Expected Array or iterable object of [k, v] entries, or keyed object: " + t);
      return e;
    }

    function Q(t) {
      var e = tt(t);
      if (!e) throw new TypeError("Expected Array or iterable object of values: " + t);
      return e;
    }

    function tt(t) {
      return j(t) ? new V(t) : F(t) ? new X(t) : N(t) ? new J(t) : void 0;
    }

    function et(t, e, n, r) {
      var i = t._cache;

      if (i) {
        for (var o = i.length - 1, a = 0; a <= o; a++) {
          var s = i[n ? o - a : a];
          if (!1 === e(s[1], r ? s[0] : a, t)) return a + 1;
        }

        return a;
      }

      return t.__iterateUncached(e, n);
    }

    function nt(t, e, n, r) {
      var i = t._cache;

      if (i) {
        var o = i.length - 1,
            a = 0;
        return new B(function () {
          var t = i[n ? o - a : a];
          return a++ > o ? {
            value: void 0,
            done: !0
          } : L(e, r ? t[0] : a - 1, t[1]);
        });
      }

      return t.__iteratorUncached(e, n);
    }

    function rt(t, e) {
      return e ? function t(e, n, r, i) {
        return Array.isArray(n) ? e.call(i, r, H(n).map(function (r, i) {
          return t(e, r, i, n);
        })) : ot(n) ? e.call(i, r, q(n).map(function (r, i) {
          return t(e, r, i, n);
        })) : n;
      }(e, t, "", {
        "": t
      }) : it(t);
    }

    function it(t) {
      return Array.isArray(t) ? H(t).map(it).toList() : ot(t) ? q(t).map(it).toMap() : t;
    }

    function ot(t) {
      return t && (t.constructor === Object || void 0 === t.constructor);
    }

    function at(t, e) {
      if (t === e || t != t && e != e) return !0;
      if (!t || !e) return !1;

      if ("function" == typeof t.valueOf && "function" == typeof e.valueOf) {
        if ((t = t.valueOf()) === (e = e.valueOf()) || t != t && e != e) return !0;
        if (!t || !e) return !1;
      }

      return !("function" != typeof t.equals || "function" != typeof e.equals || !t.equals(e));
    }

    function st(t, e) {
      if (t === e) return !0;
      if (!a(e) || void 0 !== t.size && void 0 !== e.size && t.size !== e.size || void 0 !== t.__hash && void 0 !== e.__hash && t.__hash !== e.__hash || s(t) !== s(e) || u(t) !== u(e) || l(t) !== l(e)) return !1;
      if (0 === t.size && 0 === e.size) return !0;
      var n = !c(t);

      if (l(t)) {
        var r = t.entries();
        return e.every(function (t, e) {
          var i = r.next().value;
          return i && at(i[1], t) && (n || at(i[0], e));
        }) && r.next().done;
      }

      var i = !1;
      if (void 0 === t.size) if (void 0 === e.size) "function" == typeof t.cacheResult && t.cacheResult();else {
        i = !0;
        var o = t;
        t = e, e = o;
      }

      var f = !0,
          p = e.__iterate(function (e, r) {
        if (n ? !t.has(e) : i ? !at(e, t.get(r, g)) : !at(t.get(r, g), e)) return f = !1, !1;
      });

      return f && t.size === p;
    }

    function ut(t, e) {
      if (!(this instanceof ut)) return new ut(t, e);

      if (this._value = t, this.size = void 0 === e ? 1 / 0 : Math.max(0, e), 0 === this.size) {
        if (M) return M;
        M = this;
      }
    }

    function ct(t, e) {
      if (!t) throw new Error(e);
    }

    function lt(t, e, n) {
      if (!(this instanceof lt)) return new lt(t, e, n);

      if (ct(0 !== n, "Cannot step a Range by 0"), t = t || 0, void 0 === e && (e = 1 / 0), n = void 0 === n ? 1 : Math.abs(n), e < t && (n = -n), this._start = t, this._end = e, this._step = n, this.size = Math.max(0, Math.ceil((e - t) / n - 1) + 1), 0 === this.size) {
        if (K) return K;
        K = this;
      }
    }

    function ft() {
      throw TypeError("Abstract");
    }

    function pt() {}

    function ht() {}

    function dt() {}

    B.prototype.toString = function () {
      return "[Iterator]";
    }, B.KEYS = 0, B.VALUES = 1, B.ENTRIES = 2, B.prototype.inspect = B.prototype.toSource = function () {
      return this.toString();
    }, B.prototype[I] = function () {
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
    }, e(q, U), q.prototype.toKeyedSeq = function () {
      return this;
    }, e(H, U), H.of = function () {
      return H(arguments);
    }, H.prototype.toIndexedSeq = function () {
      return this;
    }, H.prototype.toString = function () {
      return this.__toString("Seq [", "]");
    }, H.prototype.__iterate = function (t, e) {
      return et(this, t, e, !1);
    }, H.prototype.__iterator = function (t, e) {
      return nt(this, t, e, !1);
    }, e(W, U), W.of = function () {
      return W(arguments);
    }, W.prototype.toSetSeq = function () {
      return this;
    }, U.isSeq = Y, U.Keyed = q, U.Set = W, U.Indexed = H, U.prototype["@@__IMMUTABLE_SEQ__@@"] = !0, e(V, H), V.prototype.get = function (t, e) {
      return this.has(t) ? this._array[x(this, t)] : e;
    }, V.prototype.__iterate = function (t, e) {
      for (var n = this._array, r = n.length - 1, i = 0; i <= r; i++) {
        if (!1 === t(n[e ? r - i : i], i, this)) return i + 1;
      }

      return i;
    }, V.prototype.__iterator = function (t, e) {
      var n = this._array,
          r = n.length - 1,
          i = 0;
      return new B(function () {
        return i > r ? {
          value: void 0,
          done: !0
        } : L(t, i, n[e ? r - i++ : i++]);
      });
    }, e(G, q), G.prototype.get = function (t, e) {
      return void 0 === e || this.has(t) ? this._object[t] : e;
    }, G.prototype.has = function (t) {
      return this._object.hasOwnProperty(t);
    }, G.prototype.__iterate = function (t, e) {
      for (var n = this._object, r = this._keys, i = r.length - 1, o = 0; o <= i; o++) {
        var a = r[e ? i - o : o];
        if (!1 === t(n[a], a, this)) return o + 1;
      }

      return o;
    }, G.prototype.__iterator = function (t, e) {
      var n = this._object,
          r = this._keys,
          i = r.length - 1,
          o = 0;
      return new B(function () {
        var a = r[e ? i - o : o];
        return o++ > i ? {
          value: void 0,
          done: !0
        } : L(t, a, n[a]);
      });
    }, G.prototype[d] = !0, e(J, H), J.prototype.__iterateUncached = function (t, e) {
      if (e) return this.cacheResult().__iterate(t, e);
      var n = z(this._iterable),
          r = 0;
      if (F(n)) for (var i; !(i = n.next()).done && !1 !== t(i.value, r++, this);) {
        ;
      }
      return r;
    }, J.prototype.__iteratorUncached = function (t, e) {
      if (e) return this.cacheResult().__iterator(t, e);
      var n = z(this._iterable);
      if (!F(n)) return new B(R);
      var r = 0;
      return new B(function () {
        var e = n.next();
        return e.done ? e : L(t, r++, e.value);
      });
    }, e(X, H), X.prototype.__iterateUncached = function (t, e) {
      if (e) return this.cacheResult().__iterate(t, e);

      for (var n, r = this._iterator, i = this._iteratorCache, o = 0; o < i.length;) {
        if (!1 === t(i[o], o++, this)) return o;
      }

      for (; !(n = r.next()).done;) {
        var a = n.value;
        if (i[o] = a, !1 === t(a, o++, this)) break;
      }

      return o;
    }, X.prototype.__iteratorUncached = function (t, e) {
      if (e) return this.cacheResult().__iterator(t, e);
      var n = this._iterator,
          r = this._iteratorCache,
          i = 0;
      return new B(function () {
        if (i >= r.length) {
          var e = n.next();
          if (e.done) return e;
          r[i] = e.value;
        }

        return L(t, i, r[i++]);
      });
    }, e(ut, H), ut.prototype.toString = function () {
      return 0 === this.size ? "Repeat []" : "Repeat [ " + this._value + " " + this.size + " times ]";
    }, ut.prototype.get = function (t, e) {
      return this.has(t) ? this._value : e;
    }, ut.prototype.includes = function (t) {
      return at(this._value, t);
    }, ut.prototype.slice = function (t, e) {
      var n = this.size;
      return k(t, e, n) ? this : new ut(this._value, O(e, n) - C(t, n));
    }, ut.prototype.reverse = function () {
      return this;
    }, ut.prototype.indexOf = function (t) {
      return at(this._value, t) ? 0 : -1;
    }, ut.prototype.lastIndexOf = function (t) {
      return at(this._value, t) ? this.size : -1;
    }, ut.prototype.__iterate = function (t, e) {
      for (var n = 0; n < this.size; n++) {
        if (!1 === t(this._value, n, this)) return n + 1;
      }

      return n;
    }, ut.prototype.__iterator = function (t, e) {
      var n = this,
          r = 0;
      return new B(function () {
        return r < n.size ? L(t, r++, n._value) : {
          value: void 0,
          done: !0
        };
      });
    }, ut.prototype.equals = function (t) {
      return t instanceof ut ? at(this._value, t._value) : st(t);
    }, e(lt, H), lt.prototype.toString = function () {
      return 0 === this.size ? "Range []" : "Range [ " + this._start + "..." + this._end + (this._step > 1 ? " by " + this._step : "") + " ]";
    }, lt.prototype.get = function (t, e) {
      return this.has(t) ? this._start + x(this, t) * this._step : e;
    }, lt.prototype.includes = function (t) {
      var e = (t - this._start) / this._step;
      return e >= 0 && e < this.size && e === Math.floor(e);
    }, lt.prototype.slice = function (t, e) {
      return k(t, e, this.size) ? this : (t = C(t, this.size), (e = O(e, this.size)) <= t ? new lt(0, 0) : new lt(this.get(t, this._end), this.get(e, this._end), this._step));
    }, lt.prototype.indexOf = function (t) {
      var e = t - this._start;

      if (e % this._step == 0) {
        var n = e / this._step;
        if (n >= 0 && n < this.size) return n;
      }

      return -1;
    }, lt.prototype.lastIndexOf = function (t) {
      return this.indexOf(t);
    }, lt.prototype.__iterate = function (t, e) {
      for (var n = this.size - 1, r = this._step, i = e ? this._start + n * r : this._start, o = 0; o <= n; o++) {
        if (!1 === t(i, o, this)) return o + 1;
        i += e ? -r : r;
      }

      return o;
    }, lt.prototype.__iterator = function (t, e) {
      var n = this.size - 1,
          r = this._step,
          i = e ? this._start + n * r : this._start,
          o = 0;
      return new B(function () {
        var a = i;
        return i += e ? -r : r, o > n ? {
          value: void 0,
          done: !0
        } : L(t, o++, a);
      });
    }, lt.prototype.equals = function (t) {
      return t instanceof lt ? this._start === t._start && this._end === t._end && this._step === t._step : st(this, t);
    }, e(ft, n), e(pt, ft), e(ht, ft), e(dt, ft), ft.Keyed = pt, ft.Indexed = ht, ft.Set = dt;
    var gt = "function" == typeof Math.imul && -2 === Math.imul(4294967295, 2) ? Math.imul : function (t, e) {
      var n = 65535 & (t |= 0),
          r = 65535 & (e |= 0);
      return n * r + ((t >>> 16) * r + n * (e >>> 16) << 16 >>> 0) | 0;
    };

    function yt(t) {
      return t >>> 1 & 1073741824 | 3221225471 & t;
    }

    function vt(t) {
      if (!1 === t || null == t) return 0;
      if ("function" == typeof t.valueOf && (!1 === (t = t.valueOf()) || null == t)) return 0;
      if (!0 === t) return 1;

      var e = _typeof(t);

      if ("number" === e) {
        var n = 0 | t;

        for (n !== t && (n ^= 4294967295 * t); t > 4294967295;) {
          n ^= t /= 4294967295;
        }

        return yt(n);
      }

      if ("string" === e) return t.length > kt ? function (t) {
        var e = Tt[t];
        return void 0 === e && (e = mt(t), Ot === Ct && (Ot = 0, Tt = {}), Ot++, Tt[t] = e), e;
      }(t) : mt(t);
      if ("function" == typeof t.hashCode) return t.hashCode();
      if ("object" === e) return function (t) {
        var e;
        if (St && void 0 !== (e = _t.get(t))) return e;
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

        if (e = ++xt, 1073741824 & xt && (xt = 0), St) _t.set(t, e);else {
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
      if ("function" == typeof t.toString) return mt(t.toString());
      throw new Error("Value type " + e + " cannot be hashed.");
    }

    function mt(t) {
      for (var e = 0, n = 0; n < t.length; n++) {
        e = 31 * e + t.charCodeAt(n) | 0;
      }

      return yt(e);
    }

    var _t,
        bt = Object.isExtensible,
        wt = function () {
      try {
        return Object.defineProperty({}, "@", {}), !0;
      } catch (t) {
        return !1;
      }
    }(),
        St = "function" == typeof WeakMap;

    St && (_t = new WeakMap());
    var xt = 0,
        Et = "__immutablehash__";
    "function" == typeof Symbol && (Et = Symbol(Et));
    var kt = 16,
        Ct = 255,
        Ot = 0,
        Tt = {};

    function Dt(t) {
      ct(t !== 1 / 0, "Cannot perform this action with an infinite size.");
    }

    function Mt(t) {
      return null == t ? Ht() : Kt(t) && !l(t) ? t : Ht().withMutations(function (e) {
        var n = r(t);
        Dt(n.size), n.forEach(function (t, n) {
          return e.set(n, t);
        });
      });
    }

    function Kt(t) {
      return !(!t || !t[It]);
    }

    e(Mt, pt), Mt.prototype.toString = function () {
      return this.__toString("Map {", "}");
    }, Mt.prototype.get = function (t, e) {
      return this._root ? this._root.get(0, void 0, t, e) : e;
    }, Mt.prototype.set = function (t, e) {
      return Wt(this, t, e);
    }, Mt.prototype.setIn = function (t, e) {
      return this.updateIn(t, g, function () {
        return e;
      });
    }, Mt.prototype.remove = function (t) {
      return Wt(this, t, g);
    }, Mt.prototype.deleteIn = function (t) {
      return this.updateIn(t, function () {
        return g;
      });
    }, Mt.prototype.update = function (t, e, n) {
      return 1 === arguments.length ? t(this) : this.updateIn([t], e, n);
    }, Mt.prototype.updateIn = function (t, e, n) {
      n || (n = e, e = void 0);

      var r = function t(e, n, r, i) {
        var o = e === g,
            a = n.next();

        if (a.done) {
          var s = o ? r : e,
              u = i(s);
          return u === s ? e : u;
        }

        ct(o || e && e.set, "invalid keyPath");
        var c = a.value,
            l = o ? g : e.get(c, g),
            f = t(l, n, r, i);
        return f === l ? e : f === g ? e.remove(c) : (o ? Ht() : e).set(c, f);
      }(this, Xe(t), e, n);

      return r === g ? void 0 : r;
    }, Mt.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._root = null, this.__hash = void 0, this.__altered = !0, this) : Ht();
    }, Mt.prototype.merge = function () {
      return Xt(this, void 0, arguments);
    }, Mt.prototype.mergeWith = function (e) {
      var n = t.call(arguments, 1);
      return Xt(this, e, n);
    }, Mt.prototype.mergeIn = function (e) {
      var n = t.call(arguments, 1);
      return this.updateIn(e, Ht(), function (t) {
        return "function" == typeof t.merge ? t.merge.apply(t, n) : n[n.length - 1];
      });
    }, Mt.prototype.mergeDeep = function () {
      return Xt(this, Yt, arguments);
    }, Mt.prototype.mergeDeepWith = function (e) {
      var n = t.call(arguments, 1);
      return Xt(this, $t(e), n);
    }, Mt.prototype.mergeDeepIn = function (e) {
      var n = t.call(arguments, 1);
      return this.updateIn(e, Ht(), function (t) {
        return "function" == typeof t.mergeDeep ? t.mergeDeep.apply(t, n) : n[n.length - 1];
      });
    }, Mt.prototype.sort = function (t) {
      return we(Fe(this, t));
    }, Mt.prototype.sortBy = function (t, e) {
      return we(Fe(this, e, t));
    }, Mt.prototype.withMutations = function (t) {
      var e = this.asMutable();
      return t(e), e.wasAltered() ? e.__ensureOwner(this.__ownerID) : this;
    }, Mt.prototype.asMutable = function () {
      return this.__ownerID ? this : this.__ensureOwner(new b());
    }, Mt.prototype.asImmutable = function () {
      return this.__ensureOwner();
    }, Mt.prototype.wasAltered = function () {
      return this.__altered;
    }, Mt.prototype.__iterator = function (t, e) {
      return new Pt(this, t, e);
    }, Mt.prototype.__iterate = function (t, e) {
      var n = this,
          r = 0;
      return this._root && this._root.iterate(function (e) {
        return r++, t(e[1], e[0], n);
      }, e), r;
    }, Mt.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? qt(this.size, this._root, t, this.__hash) : (this.__ownerID = t, this.__altered = !1, this);
    }, Mt.isMap = Kt;
    var At,
        It = "@@__IMMUTABLE_MAP__@@",
        Bt = Mt.prototype;

    function Lt(t, e) {
      this.ownerID = t, this.entries = e;
    }

    function Rt(t, e, n) {
      this.ownerID = t, this.bitmap = e, this.nodes = n;
    }

    function Nt(t, e, n) {
      this.ownerID = t, this.count = e, this.nodes = n;
    }

    function Ft(t, e, n) {
      this.ownerID = t, this.keyHash = e, this.entries = n;
    }

    function zt(t, e, n) {
      this.ownerID = t, this.keyHash = e, this.entry = n;
    }

    function Pt(t, e, n) {
      this._type = e, this._reverse = n, this._stack = t._root && Ut(t._root);
    }

    function jt(t, e) {
      return L(t, e[0], e[1]);
    }

    function Ut(t, e) {
      return {
        node: t,
        index: 0,
        __prev: e
      };
    }

    function qt(t, e, n, r) {
      var i = Object.create(Bt);
      return i.size = t, i._root = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i;
    }

    function Ht() {
      return At || (At = qt(0));
    }

    function Wt(t, e, n) {
      var r, i;

      if (t._root) {
        var o = m(y),
            a = m(v);
        if (r = Vt(t._root, t.__ownerID, 0, void 0, e, n, o, a), !a.value) return t;
        i = t.size + (o.value ? n === g ? -1 : 1 : 0);
      } else {
        if (n === g) return t;
        i = 1, r = new Lt(t.__ownerID, [[e, n]]);
      }

      return t.__ownerID ? (t.size = i, t._root = r, t.__hash = void 0, t.__altered = !0, t) : r ? qt(i, r) : Ht();
    }

    function Vt(t, e, n, r, i, o, a, s) {
      return t ? t.update(e, n, r, i, o, a, s) : o === g ? t : (_(s), _(a), new zt(e, r, [i, o]));
    }

    function Gt(t) {
      return t.constructor === zt || t.constructor === Ft;
    }

    function Jt(t, e, n, r, i) {
      if (t.keyHash === r) return new Ft(e, r, [t.entry, i]);
      var o,
          a = 31 & (0 === n ? t.keyHash : t.keyHash >>> n),
          s = 31 & (0 === n ? r : r >>> n);
      return new Rt(e, 1 << a | 1 << s, a === s ? [Jt(t, e, n + 5, r, i)] : (o = new zt(e, r, i), a < s ? [t, o] : [o, t]));
    }

    function Xt(t, e, n) {
      for (var i = [], o = 0; o < n.length; o++) {
        var s = n[o],
            u = r(s);
        a(s) || (u = u.map(function (t) {
          return rt(t);
        })), i.push(u);
      }

      return Zt(t, e, i);
    }

    function Yt(t, e, n) {
      return t && t.mergeDeep && a(e) ? t.mergeDeep(e) : at(t, e) ? t : e;
    }

    function $t(t) {
      return function (e, n, r) {
        if (e && e.mergeDeepWith && a(n)) return e.mergeDeepWith(t, n);
        var i = t(e, n, r);
        return at(e, i) ? e : i;
      };
    }

    function Zt(t, e, n) {
      return 0 === (n = n.filter(function (t) {
        return 0 !== t.size;
      })).length ? t : 0 !== t.size || t.__ownerID || 1 !== n.length ? t.withMutations(function (t) {
        for (var r = e ? function (n, r) {
          t.update(r, g, function (t) {
            return t === g ? n : e(t, n, r);
          });
        } : function (e, n) {
          t.set(n, e);
        }, i = 0; i < n.length; i++) {
          n[i].forEach(r);
        }
      }) : t.constructor(n[0]);
    }

    function Qt(t) {
      return t = (t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135, 127 & (t += t >> 8) + (t >> 16);
    }

    function te(t, e, n, r) {
      var i = r ? t : w(t);
      return i[e] = n, i;
    }

    Bt[It] = !0, Bt["delete"] = Bt.remove, Bt.removeIn = Bt.deleteIn, Lt.prototype.get = function (t, e, n, r) {
      for (var i = this.entries, o = 0, a = i.length; o < a; o++) {
        if (at(n, i[o][0])) return i[o][1];
      }

      return r;
    }, Lt.prototype.update = function (t, e, n, r, i, o, a) {
      for (var s = i === g, u = this.entries, c = 0, l = u.length; c < l && !at(r, u[c][0]); c++) {
        ;
      }

      var f = c < l;
      if (f ? u[c][1] === i : s) return this;

      if (_(a), (s || !f) && _(o), !s || 1 !== u.length) {
        if (!f && !s && u.length >= ee) return function (t, e, n, r) {
          t || (t = new b());

          for (var i = new zt(t, vt(n), [n, r]), o = 0; o < e.length; o++) {
            var a = e[o];
            i = i.update(t, 0, void 0, a[0], a[1]);
          }

          return i;
        }(t, u, r, i);
        var p = t && t === this.ownerID,
            h = p ? u : w(u);
        return f ? s ? c === l - 1 ? h.pop() : h[c] = h.pop() : h[c] = [r, i] : h.push([r, i]), p ? (this.entries = h, this) : new Lt(t, h);
      }
    }, Rt.prototype.get = function (t, e, n, r) {
      void 0 === e && (e = vt(n));
      var i = 1 << (31 & (0 === t ? e : e >>> t)),
          o = this.bitmap;
      return 0 == (o & i) ? r : this.nodes[Qt(o & i - 1)].get(t + 5, e, n, r);
    }, Rt.prototype.update = function (t, e, n, r, i, o, a) {
      void 0 === n && (n = vt(r));
      var s = 31 & (0 === e ? n : n >>> e),
          u = 1 << s,
          c = this.bitmap,
          l = 0 != (c & u);
      if (!l && i === g) return this;
      var f = Qt(c & u - 1),
          p = this.nodes,
          h = l ? p[f] : void 0,
          d = Vt(h, t, e + 5, n, r, i, o, a);
      if (d === h) return this;
      if (!l && d && p.length >= ne) return function (t, e, n, r, i) {
        for (var o = 0, a = new Array(32), s = 0; 0 !== n; s++, n >>>= 1) {
          a[s] = 1 & n ? e[o++] : void 0;
        }

        return a[r] = i, new Nt(t, o + 1, a);
      }(t, p, c, s, d);
      if (l && !d && 2 === p.length && Gt(p[1 ^ f])) return p[1 ^ f];
      if (l && d && 1 === p.length && Gt(d)) return d;
      var y = t && t === this.ownerID,
          v = l ? d ? c : c ^ u : c | u,
          m = l ? d ? te(p, f, d, y) : function (t, e, n) {
        var r = t.length - 1;
        if (n && e === r) return t.pop(), t;

        for (var i = new Array(r), o = 0, a = 0; a < r; a++) {
          a === e && (o = 1), i[a] = t[a + o];
        }

        return i;
      }(p, f, y) : function (t, e, n, r) {
        var i = t.length + 1;
        if (r && e + 1 === i) return t[e] = n, t;

        for (var o = new Array(i), a = 0, s = 0; s < i; s++) {
          s === e ? (o[s] = n, a = -1) : o[s] = t[s + a];
        }

        return o;
      }(p, f, d, y);
      return y ? (this.bitmap = v, this.nodes = m, this) : new Rt(t, v, m);
    }, Nt.prototype.get = function (t, e, n, r) {
      void 0 === e && (e = vt(n));
      var i = 31 & (0 === t ? e : e >>> t),
          o = this.nodes[i];
      return o ? o.get(t + 5, e, n, r) : r;
    }, Nt.prototype.update = function (t, e, n, r, i, o, a) {
      void 0 === n && (n = vt(r));
      var s = 31 & (0 === e ? n : n >>> e),
          u = i === g,
          c = this.nodes,
          l = c[s];
      if (u && !l) return this;
      var f = Vt(l, t, e + 5, n, r, i, o, a);
      if (f === l) return this;
      var p = this.count;

      if (l) {
        if (!f && --p < re) return function (t, e, n, r) {
          for (var i = 0, o = 0, a = new Array(n), s = 0, u = 1, c = e.length; s < c; s++, u <<= 1) {
            var l = e[s];
            void 0 !== l && s !== r && (i |= u, a[o++] = l);
          }

          return new Rt(t, i, a);
        }(t, c, p, s);
      } else p++;

      var h = t && t === this.ownerID,
          d = te(c, s, f, h);
      return h ? (this.count = p, this.nodes = d, this) : new Nt(t, p, d);
    }, Ft.prototype.get = function (t, e, n, r) {
      for (var i = this.entries, o = 0, a = i.length; o < a; o++) {
        if (at(n, i[o][0])) return i[o][1];
      }

      return r;
    }, Ft.prototype.update = function (t, e, n, r, i, o, a) {
      void 0 === n && (n = vt(r));
      var s = i === g;
      if (n !== this.keyHash) return s ? this : (_(a), _(o), Jt(this, t, e, n, [r, i]));

      for (var u = this.entries, c = 0, l = u.length; c < l && !at(r, u[c][0]); c++) {
        ;
      }

      var f = c < l;
      if (f ? u[c][1] === i : s) return this;
      if (_(a), (s || !f) && _(o), s && 2 === l) return new zt(t, this.keyHash, u[1 ^ c]);
      var p = t && t === this.ownerID,
          h = p ? u : w(u);
      return f ? s ? c === l - 1 ? h.pop() : h[c] = h.pop() : h[c] = [r, i] : h.push([r, i]), p ? (this.entries = h, this) : new Ft(t, this.keyHash, h);
    }, zt.prototype.get = function (t, e, n, r) {
      return at(n, this.entry[0]) ? this.entry[1] : r;
    }, zt.prototype.update = function (t, e, n, r, i, o, a) {
      var s = i === g,
          u = at(r, this.entry[0]);
      return (u ? i === this.entry[1] : s) ? this : (_(a), s ? void _(o) : u ? t && t === this.ownerID ? (this.entry[1] = i, this) : new zt(t, this.keyHash, [r, i]) : (_(o), Jt(this, t, e, vt(r), [r, i])));
    }, Lt.prototype.iterate = Ft.prototype.iterate = function (t, e) {
      for (var n = this.entries, r = 0, i = n.length - 1; r <= i; r++) {
        if (!1 === t(n[e ? i - r : r])) return !1;
      }
    }, Rt.prototype.iterate = Nt.prototype.iterate = function (t, e) {
      for (var n = this.nodes, r = 0, i = n.length - 1; r <= i; r++) {
        var o = n[e ? i - r : r];
        if (o && !1 === o.iterate(t, e)) return !1;
      }
    }, zt.prototype.iterate = function (t, e) {
      return t(this.entry);
    }, e(Pt, B), Pt.prototype.next = function () {
      for (var t = this._type, e = this._stack; e;) {
        var n,
            r = e.node,
            i = e.index++;

        if (r.entry) {
          if (0 === i) return jt(t, r.entry);
        } else if (r.entries) {
          if (i <= (n = r.entries.length - 1)) return jt(t, r.entries[this._reverse ? n - i : i]);
        } else if (i <= (n = r.nodes.length - 1)) {
          var o = r.nodes[this._reverse ? n - i : i];

          if (o) {
            if (o.entry) return jt(t, o.entry);
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
      return 0 === r ? e : (Dt(r), r > 0 && r < 32 ? he(0, r, 5, null, new ue(n.toArray())) : e.withMutations(function (t) {
        t.setSize(r), n.forEach(function (e, n) {
          return t.set(n, e);
        });
      }));
    }

    function oe(t) {
      return !(!t || !t[ae]);
    }

    e(ie, ht), ie.of = function () {
      return this(arguments);
    }, ie.prototype.toString = function () {
      return this.__toString("List [", "]");
    }, ie.prototype.get = function (t, e) {
      if ((t = x(this, t)) >= 0 && t < this.size) {
        var n = ve(this, t += this._origin);
        return n && n.array[31 & t];
      }

      return e;
    }, ie.prototype.set = function (t, e) {
      return function (t, e, n) {
        if ((e = x(t, e)) != e) return t;
        if (e >= t.size || e < 0) return t.withMutations(function (t) {
          e < 0 ? me(t, e).set(0, n) : me(t, 0, e + 1).set(e, n);
        });
        e += t._origin;
        var r = t._tail,
            i = t._root,
            o = m(v);
        return e >= be(t._capacity) ? r = ge(r, t.__ownerID, 0, e, n, o) : i = ge(i, t.__ownerID, t._level, e, n, o), o.value ? t.__ownerID ? (t._root = i, t._tail = r, t.__hash = void 0, t.__altered = !0, t) : he(t._origin, t._capacity, t._level, i, r) : t;
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
        me(n, 0, e + t.length);

        for (var r = 0; r < t.length; r++) {
          n.set(e + r, t[r]);
        }
      });
    }, ie.prototype.pop = function () {
      return me(this, 0, -1);
    }, ie.prototype.unshift = function () {
      var t = arguments;
      return this.withMutations(function (e) {
        me(e, -t.length);

        for (var n = 0; n < t.length; n++) {
          e.set(n, t[n]);
        }
      });
    }, ie.prototype.shift = function () {
      return me(this, 1);
    }, ie.prototype.merge = function () {
      return _e(this, void 0, arguments);
    }, ie.prototype.mergeWith = function (e) {
      var n = t.call(arguments, 1);
      return _e(this, e, n);
    }, ie.prototype.mergeDeep = function () {
      return _e(this, Yt, arguments);
    }, ie.prototype.mergeDeepWith = function (e) {
      var n = t.call(arguments, 1);
      return _e(this, $t(e), n);
    }, ie.prototype.setSize = function (t) {
      return me(this, 0, t);
    }, ie.prototype.slice = function (t, e) {
      var n = this.size;
      return k(t, e, n) ? this : me(this, C(t, n), O(e, n));
    }, ie.prototype.__iterator = function (t, e) {
      var n = 0,
          r = pe(this, e);
      return new B(function () {
        var e = r();
        return e === fe ? {
          value: void 0,
          done: !0
        } : L(t, n++, e);
      });
    }, ie.prototype.__iterate = function (t, e) {
      for (var n, r = 0, i = pe(this, e); (n = i()) !== fe && !1 !== t(n, r++, this);) {
        ;
      }

      return r;
    }, ie.prototype.__ensureOwner = function (t) {
      return t === this.__ownerID ? this : t ? he(this._origin, this._capacity, this._level, this._root, this._tail, t, this.__hash) : (this.__ownerID = t, this);
    }, ie.isList = oe;
    var ae = "@@__IMMUTABLE_LIST__@@",
        se = ie.prototype;

    function ue(t, e) {
      this.array = t, this.ownerID = e;
    }

    se[ae] = !0, se["delete"] = se.remove, se.setIn = Bt.setIn, se.deleteIn = se.removeIn = Bt.removeIn, se.update = Bt.update, se.updateIn = Bt.updateIn, se.mergeIn = Bt.mergeIn, se.mergeDeepIn = Bt.mergeDeepIn, se.withMutations = Bt.withMutations, se.asMutable = Bt.asMutable, se.asImmutable = Bt.asImmutable, se.wasAltered = Bt.wasAltered, ue.prototype.removeBefore = function (t, e, n) {
      if (n === e ? 1 << e : 0 === this.array.length) return this;
      var r = n >>> e & 31;
      if (r >= this.array.length) return new ue([], t);
      var i,
          o = 0 === r;

      if (e > 0) {
        var a = this.array[r];
        if ((i = a && a.removeBefore(t, e - 5, n)) === a && o) return this;
      }

      if (o && !i) return this;
      var s = ye(this, t);
      if (!o) for (var u = 0; u < r; u++) {
        s.array[u] = void 0;
      }
      return i && (s.array[r] = i), s;
    }, ue.prototype.removeAfter = function (t, e, n) {
      if (n === (e ? 1 << e : 0) || 0 === this.array.length) return this;
      var r,
          i = n - 1 >>> e & 31;
      if (i >= this.array.length) return this;

      if (e > 0) {
        var o = this.array[i];
        if ((r = o && o.removeAfter(t, e - 5, n)) === o && i === this.array.length - 1) return this;
      }

      var a = ye(this, t);
      return a.array.splice(i + 1), r && (a.array[i] = r), a;
    };
    var ce,
        le,
        fe = {};

    function pe(t, e) {
      var n = t._origin,
          r = t._capacity,
          i = be(r),
          o = t._tail;
      return function t(a, s, u) {
        return 0 === s ? function (t, a) {
          var s = a === i ? o && o.array : t && t.array,
              u = a > n ? 0 : n - a,
              c = r - a;
          return c > 32 && (c = 32), function () {
            if (u === c) return fe;
            var t = e ? --c : u++;
            return s && s[t];
          };
        }(a, u) : function (i, o, a) {
          var s,
              u = i && i.array,
              c = a > n ? 0 : n - a >> o,
              l = 1 + (r - a >> o);
          return l > 32 && (l = 32), function () {
            for (;;) {
              if (s) {
                var n = s();
                if (n !== fe) return n;
                s = null;
              }

              if (c === l) return fe;
              var r = e ? --l : c++;
              s = t(u && u[r], o - 5, a + (r << o));
            }
          };
        }(a, s, u);
      }(t._root, t._level, 0);
    }

    function he(t, e, n, r, i, o, a) {
      var s = Object.create(se);
      return s.size = e - t, s._origin = t, s._capacity = e, s._level = n, s._root = r, s._tail = i, s.__ownerID = o, s.__hash = a, s.__altered = !1, s;
    }

    function de() {
      return ce || (ce = he(0, 0, 5));
    }

    function ge(t, e, n, r, i, o) {
      var a,
          s = r >>> n & 31,
          u = t && s < t.array.length;
      if (!u && void 0 === i) return t;

      if (n > 0) {
        var c = t && t.array[s],
            l = ge(c, e, n - 5, r, i, o);
        return l === c ? t : ((a = ye(t, e)).array[s] = l, a);
      }

      return u && t.array[s] === i ? t : (_(o), a = ye(t, e), void 0 === i && s === a.array.length - 1 ? a.array.pop() : a.array[s] = i, a);
    }

    function ye(t, e) {
      return e && t && e === t.ownerID ? t : new ue(t ? t.array.slice() : [], e);
    }

    function ve(t, e) {
      if (e >= be(t._capacity)) return t._tail;

      if (e < 1 << t._level + 5) {
        for (var n = t._root, r = t._level; n && r > 0;) {
          n = n.array[e >>> r & 31], r -= 5;
        }

        return n;
      }
    }

    function me(t, e, n) {
      void 0 !== e && (e |= 0), void 0 !== n && (n |= 0);
      var r = t.__ownerID || new b(),
          i = t._origin,
          o = t._capacity,
          a = i + e,
          s = void 0 === n ? o : n < 0 ? o + n : i + n;
      if (a === i && s === o) return t;
      if (a >= s) return t.clear();

      for (var u = t._level, c = t._root, l = 0; a + l < 0;) {
        c = new ue(c && c.array.length ? [void 0, c] : [], r), l += 1 << (u += 5);
      }

      l && (a += l, i += l, s += l, o += l);

      for (var f = be(o), p = be(s); p >= 1 << u + 5;) {
        c = new ue(c && c.array.length ? [c] : [], r), u += 5;
      }

      var h = t._tail,
          d = p < f ? ve(t, s - 1) : p > f ? new ue([], r) : h;

      if (h && p > f && a < o && h.array.length) {
        for (var g = c = ye(c, r), y = u; y > 5; y -= 5) {
          var v = f >>> y & 31;
          g = g.array[v] = ye(g.array[v], r);
        }

        g.array[f >>> 5 & 31] = h;
      }

      if (s < o && (d = d && d.removeAfter(r, 0, s)), a >= p) a -= p, s -= p, u = 5, c = null, d = d && d.removeBefore(r, 0, a);else if (a > i || p < f) {
        for (l = 0; c;) {
          var m = a >>> u & 31;
          if (m !== p >>> u & 31) break;
          m && (l += (1 << u) * m), u -= 5, c = c.array[m];
        }

        c && a > i && (c = c.removeBefore(r, u, a - l)), c && p < f && (c = c.removeAfter(r, u, p - l)), l && (a -= l, s -= l);
      }
      return t.__ownerID ? (t.size = s - a, t._origin = a, t._capacity = s, t._level = u, t._root = c, t._tail = d, t.__hash = void 0, t.__altered = !0, t) : he(a, s, u, c, d);
    }

    function _e(t, e, n) {
      for (var r = [], o = 0, s = 0; s < n.length; s++) {
        var u = n[s],
            c = i(u);
        c.size > o && (o = c.size), a(u) || (c = c.map(function (t) {
          return rt(t);
        })), r.push(c);
      }

      return o > t.size && (t = t.setSize(o)), Zt(t, e, r);
    }

    function be(t) {
      return t < 32 ? 0 : t - 1 >>> 5 << 5;
    }

    function we(t) {
      return null == t ? Ee() : Se(t) ? t : Ee().withMutations(function (e) {
        var n = r(t);
        Dt(n.size), n.forEach(function (t, n) {
          return e.set(n, t);
        });
      });
    }

    function Se(t) {
      return Kt(t) && l(t);
    }

    function xe(t, e, n, r) {
      var i = Object.create(we.prototype);
      return i.size = t ? t.size : 0, i._map = t, i._list = e, i.__ownerID = n, i.__hash = r, i;
    }

    function Ee() {
      return le || (le = xe(Ht(), de()));
    }

    function ke(t, e, n) {
      var r,
          i,
          o = t._map,
          a = t._list,
          s = o.get(e),
          u = void 0 !== s;

      if (n === g) {
        if (!u) return t;
        a.size >= 32 && a.size >= 2 * o.size ? (r = (i = a.filter(function (t, e) {
          return void 0 !== t && s !== e;
        })).toKeyedSeq().map(function (t) {
          return t[0];
        }).flip().toMap(), t.__ownerID && (r.__ownerID = i.__ownerID = t.__ownerID)) : (r = o.remove(e), i = s === a.size - 1 ? a.pop() : a.set(s, void 0));
      } else if (u) {
        if (n === a.get(s)[1]) return t;
        r = o, i = a.set(s, [e, n]);
      } else r = o.set(e, a.size), i = a.set(a.size, [e, n]);

      return t.__ownerID ? (t.size = r.size, t._map = r, t._list = i, t.__hash = void 0, t) : xe(r, i);
    }

    function Ce(t, e) {
      this._iter = t, this._useKeys = e, this.size = t.size;
    }

    function Oe(t) {
      this._iter = t, this.size = t.size;
    }

    function Te(t) {
      this._iter = t, this.size = t.size;
    }

    function De(t) {
      this._iter = t, this.size = t.size;
    }

    function Me(t) {
      var e = Ve(t);
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
      }, e.cacheResult = Ge, e.__iterateUncached = function (e, n) {
        var r = this;
        return t.__iterate(function (t, n) {
          return !1 !== e(n, t, r);
        }, n);
      }, e.__iteratorUncached = function (e, n) {
        if (2 === e) {
          var r = t.__iterator(e, n);

          return new B(function () {
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

    function Ke(t, e, n) {
      var r = Ve(t);
      return r.size = t.size, r.has = function (e) {
        return t.has(e);
      }, r.get = function (r, i) {
        var o = t.get(r, g);
        return o === g ? i : e.call(n, o, r, t);
      }, r.__iterateUncached = function (r, i) {
        var o = this;
        return t.__iterate(function (t, i, a) {
          return !1 !== r(e.call(n, t, i, a), i, o);
        }, i);
      }, r.__iteratorUncached = function (r, i) {
        var o = t.__iterator(2, i);

        return new B(function () {
          var i = o.next();
          if (i.done) return i;
          var a = i.value,
              s = a[0];
          return L(r, s, e.call(n, a[1], s, t), i);
        });
      }, r;
    }

    function Ae(t, e) {
      var n = Ve(t);
      return n._iter = t, n.size = t.size, n.reverse = function () {
        return t;
      }, t.flip && (n.flip = function () {
        var e = Me(t);
        return e.reverse = function () {
          return t.flip();
        }, e;
      }), n.get = function (n, r) {
        return t.get(e ? n : -1 - n, r);
      }, n.has = function (n) {
        return t.has(e ? n : -1 - n);
      }, n.includes = function (e) {
        return t.includes(e);
      }, n.cacheResult = Ge, n.__iterate = function (e, n) {
        var r = this;
        return t.__iterate(function (t, n) {
          return e(t, n, r);
        }, !n);
      }, n.__iterator = function (e, n) {
        return t.__iterator(e, !n);
      }, n;
    }

    function Ie(t, e, n, r) {
      var i = Ve(t);
      return r && (i.has = function (r) {
        var i = t.get(r, g);
        return i !== g && !!e.call(n, i, r, t);
      }, i.get = function (r, i) {
        var o = t.get(r, g);
        return o !== g && e.call(n, o, r, t) ? o : i;
      }), i.__iterateUncached = function (i, o) {
        var a = this,
            s = 0;
        return t.__iterate(function (t, o, u) {
          if (e.call(n, t, o, u)) return s++, i(t, r ? o : s - 1, a);
        }, o), s;
      }, i.__iteratorUncached = function (i, o) {
        var a = t.__iterator(2, o),
            s = 0;

        return new B(function () {
          for (;;) {
            var o = a.next();
            if (o.done) return o;
            var u = o.value,
                c = u[0],
                l = u[1];
            if (e.call(n, l, c, t)) return L(i, r ? c : s++, l, o);
          }
        });
      }, i;
    }

    function Be(t, e, n, r) {
      var i = t.size;
      if (void 0 !== e && (e |= 0), void 0 !== n && (n |= 0), k(e, n, i)) return t;
      var o = C(e, i),
          a = O(n, i);
      if (o != o || a != a) return Be(t.toSeq().cacheResult(), e, n, r);
      var s,
          u = a - o;
      u == u && (s = u < 0 ? 0 : u);
      var c = Ve(t);
      return c.size = 0 === s ? s : t.size && s || void 0, !r && Y(t) && s >= 0 && (c.get = function (e, n) {
        return (e = x(this, e)) >= 0 && e < s ? t.get(e + o, n) : n;
      }), c.__iterateUncached = function (e, n) {
        var i = this;
        if (0 === s) return 0;
        if (n) return this.cacheResult().__iterate(e, n);
        var a = 0,
            u = !0,
            c = 0;
        return t.__iterate(function (t, n) {
          if (!u || !(u = a++ < o)) return c++, !1 !== e(t, r ? n : c - 1, i) && c !== s;
        }), c;
      }, c.__iteratorUncached = function (e, n) {
        if (0 !== s && n) return this.cacheResult().__iterator(e, n);

        var i = 0 !== s && t.__iterator(e, n),
            a = 0,
            u = 0;

        return new B(function () {
          for (; a++ < o;) {
            i.next();
          }

          if (++u > s) return {
            value: void 0,
            done: !0
          };
          var t = i.next();
          return r || 1 === e ? t : L(e, u - 1, 0 === e ? void 0 : t.value[1], t);
        });
      }, c;
    }

    function Le(t, e, n, r) {
      var i = Ve(t);
      return i.__iterateUncached = function (i, o) {
        var a = this;
        if (o) return this.cacheResult().__iterate(i, o);
        var s = !0,
            u = 0;
        return t.__iterate(function (t, o, c) {
          if (!s || !(s = e.call(n, t, o, c))) return u++, i(t, r ? o : u - 1, a);
        }), u;
      }, i.__iteratorUncached = function (i, o) {
        var a = this;
        if (o) return this.cacheResult().__iterator(i, o);

        var s = t.__iterator(2, o),
            u = !0,
            c = 0;

        return new B(function () {
          var t, o, l;

          do {
            if ((t = s.next()).done) return r || 1 === i ? t : L(i, c++, 0 === i ? void 0 : t.value[1], t);
            var f = t.value;
            o = f[0], l = f[1], u && (u = e.call(n, l, o, a));
          } while (u);

          return 2 === i ? t : L(i, o, l, t);
        });
      }, i;
    }

    function Re(t, e) {
      var n = s(t),
          i = [t].concat(e).map(function (t) {
        return a(t) ? n && (t = r(t)) : t = n ? Z(t) : Q(Array.isArray(t) ? t : [t]), t;
      }).filter(function (t) {
        return 0 !== t.size;
      });
      if (0 === i.length) return t;

      if (1 === i.length) {
        var o = i[0];
        if (o === t || n && s(o) || u(t) && u(o)) return o;
      }

      var c = new V(i);
      return n ? c = c.toKeyedSeq() : u(t) || (c = c.toSetSeq()), (c = c.flatten(!0)).size = i.reduce(function (t, e) {
        if (void 0 !== t) {
          var n = e.size;
          if (void 0 !== n) return t + n;
        }
      }, 0), c;
    }

    function Ne(t, e, n) {
      var r = Ve(t);
      return r.__iterateUncached = function (r, i) {
        var o = 0,
            s = !1;
        return function t(u, c) {
          var l = this;

          u.__iterate(function (i, u) {
            return (!e || c < e) && a(i) ? t(i, c + 1) : !1 === r(i, n ? u : o++, l) && (s = !0), !s;
          }, i);
        }(t, 0), o;
      }, r.__iteratorUncached = function (r, i) {
        var o = t.__iterator(r, i),
            s = [],
            u = 0;

        return new B(function () {
          for (; o;) {
            var t = o.next();

            if (!1 === t.done) {
              var c = t.value;
              if (2 === r && (c = c[1]), e && !(s.length < e) || !a(c)) return n ? t : L(r, u++, c, t);
              s.push(o), o = c.__iterator(r, i);
            } else o = s.pop();
          }

          return {
            value: void 0,
            done: !0
          };
        });
      }, r;
    }

    function Fe(t, e, n) {
      e || (e = Je);
      var r = s(t),
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
      }), r ? q(o) : u(t) ? H(o) : W(o);
    }

    function ze(t, e, n) {
      if (e || (e = Je), n) {
        var r = t.toSeq().map(function (e, r) {
          return [e, n(e, r, t)];
        }).reduce(function (t, n) {
          return Pe(e, t[1], n[1]) ? n : t;
        });
        return r && r[0];
      }

      return t.reduce(function (t, n) {
        return Pe(e, t, n) ? n : t;
      });
    }

    function Pe(t, e, n) {
      var r = t(n, e);
      return 0 === r && n !== e && (null == n || n != n) || r > 0;
    }

    function je(t, e, r) {
      var i = Ve(t);
      return i.size = new V(r).map(function (t) {
        return t.size;
      }).min(), i.__iterate = function (t, e) {
        for (var n, r = this.__iterator(1, e), i = 0; !(n = r.next()).done && !1 !== t(n.value, i++, this);) {
          ;
        }

        return i;
      }, i.__iteratorUncached = function (t, i) {
        var o = r.map(function (t) {
          return t = n(t), z(i ? t.reverse() : t);
        }),
            a = 0,
            s = !1;
        return new B(function () {
          var n;
          return s || (n = o.map(function (t) {
            return t.next();
          }), s = n.some(function (t) {
            return t.done;
          })), s ? {
            value: void 0,
            done: !0
          } : L(t, a++, e.apply(null, n.map(function (t) {
            return t.value;
          })));
        });
      }, i;
    }

    function Ue(t, e) {
      return Y(t) ? e : t.constructor(e);
    }

    function qe(t) {
      if (t !== Object(t)) throw new TypeError("Expected [K, V] tuple: " + t);
    }

    function He(t) {
      return Dt(t.size), S(t);
    }

    function We(t) {
      return s(t) ? r : u(t) ? i : o;
    }

    function Ve(t) {
      return Object.create((s(t) ? q : u(t) ? H : W).prototype);
    }

    function Ge() {
      return this._iter.cacheResult ? (this._iter.cacheResult(), this.size = this._iter.size, this) : U.prototype.cacheResult.call(this);
    }

    function Je(t, e) {
      return t > e ? 1 : t < e ? -1 : 0;
    }

    function Xe(t) {
      var e = z(t);

      if (!e) {
        if (!j(t)) throw new TypeError("Expected iterable or array-like: " + t);
        e = z(n(t));
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
          var a = Object.keys(t);
          !function (t, e) {
            try {
              e.forEach(tn.bind(void 0, t));
            } catch (t) {}
          }(i, a), i.size = a.length, i._name = e, i._keys = a, i._defaultValues = t;
        }

        this._map = Mt(o);
      },
          i = r.prototype = Object.create($e);

      return i.constructor = r, r;
    }

    e(we, Mt), we.of = function () {
      return this(arguments);
    }, we.prototype.toString = function () {
      return this.__toString("OrderedMap {", "}");
    }, we.prototype.get = function (t, e) {
      var n = this._map.get(t);

      return void 0 !== n ? this._list.get(n)[1] : e;
    }, we.prototype.clear = function () {
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._map.clear(), this._list.clear(), this) : Ee();
    }, we.prototype.set = function (t, e) {
      return ke(this, t, e);
    }, we.prototype.remove = function (t) {
      return ke(this, t, g);
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

      return t ? xe(e, n, t, this.__hash) : (this.__ownerID = t, this._map = e, this._list = n, this);
    }, we.isOrderedMap = Se, we.prototype[d] = !0, we.prototype["delete"] = we.prototype.remove, e(Ce, q), Ce.prototype.get = function (t, e) {
      return this._iter.get(t, e);
    }, Ce.prototype.has = function (t) {
      return this._iter.has(t);
    }, Ce.prototype.valueSeq = function () {
      return this._iter.valueSeq();
    }, Ce.prototype.reverse = function () {
      var t = this,
          e = Ae(this, !0);
      return this._useKeys || (e.valueSeq = function () {
        return t._iter.toSeq().reverse();
      }), e;
    }, Ce.prototype.map = function (t, e) {
      var n = this,
          r = Ke(this, t, e);
      return this._useKeys || (r.valueSeq = function () {
        return n._iter.toSeq().map(t, e);
      }), r;
    }, Ce.prototype.__iterate = function (t, e) {
      var n,
          r = this;
      return this._iter.__iterate(this._useKeys ? function (e, n) {
        return t(e, n, r);
      } : (n = e ? He(this) : 0, function (i) {
        return t(i, e ? --n : n++, r);
      }), e);
    }, Ce.prototype.__iterator = function (t, e) {
      if (this._useKeys) return this._iter.__iterator(t, e);

      var n = this._iter.__iterator(1, e),
          r = e ? He(this) : 0;

      return new B(function () {
        var i = n.next();
        return i.done ? i : L(t, e ? --r : r++, i.value, i);
      });
    }, Ce.prototype[d] = !0, e(Oe, H), Oe.prototype.includes = function (t) {
      return this._iter.includes(t);
    }, Oe.prototype.__iterate = function (t, e) {
      var n = this,
          r = 0;
      return this._iter.__iterate(function (e) {
        return t(e, r++, n);
      }, e);
    }, Oe.prototype.__iterator = function (t, e) {
      var n = this._iter.__iterator(1, e),
          r = 0;

      return new B(function () {
        var e = n.next();
        return e.done ? e : L(t, r++, e.value, e);
      });
    }, e(Te, W), Te.prototype.has = function (t) {
      return this._iter.includes(t);
    }, Te.prototype.__iterate = function (t, e) {
      var n = this;
      return this._iter.__iterate(function (e) {
        return t(e, e, n);
      }, e);
    }, Te.prototype.__iterator = function (t, e) {
      var n = this._iter.__iterator(1, e);

      return new B(function () {
        var e = n.next();
        return e.done ? e : L(t, e.value, e.value, e);
      });
    }, e(De, q), De.prototype.entrySeq = function () {
      return this._iter.toSeq();
    }, De.prototype.__iterate = function (t, e) {
      var n = this;
      return this._iter.__iterate(function (e) {
        if (e) {
          qe(e);
          var r = a(e);
          return t(r ? e.get(1) : e[1], r ? e.get(0) : e[0], n);
        }
      }, e);
    }, De.prototype.__iterator = function (t, e) {
      var n = this._iter.__iterator(1, e);

      return new B(function () {
        for (;;) {
          var e = n.next();
          if (e.done) return e;
          var r = e.value;

          if (r) {
            qe(r);
            var i = a(r);
            return L(t, i ? r.get(0) : r[0], i ? r.get(1) : r[1], e);
          }
        }
      });
    }, Oe.prototype.cacheResult = Ce.prototype.cacheResult = Te.prototype.cacheResult = De.prototype.cacheResult = Ge, e(Ye, pt), Ye.prototype.toString = function () {
      return this.__toString(Qe(this) + " {", "}");
    }, Ye.prototype.has = function (t) {
      return this._defaultValues.hasOwnProperty(t);
    }, Ye.prototype.get = function (t, e) {
      if (!this.has(t)) return e;
      var n = this._defaultValues[t];
      return this._map ? this._map.get(t, n) : n;
    }, Ye.prototype.clear = function () {
      if (this.__ownerID) return this._map && this._map.clear(), this;
      var t = this.constructor;
      return t._empty || (t._empty = Ze(this, Ht()));
    }, Ye.prototype.set = function (t, e) {
      if (!this.has(t)) throw new Error('Cannot set unknown key "' + t + '" on ' + Qe(this));

      var n = this._map && this._map.set(t, e);

      return this.__ownerID || n === this._map ? this : Ze(this, n);
    }, Ye.prototype.remove = function (t) {
      if (!this.has(t)) return this;

      var e = this._map && this._map.remove(t);

      return this.__ownerID || e === this._map ? this : Ze(this, e);
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

      return t ? Ze(this, e, t) : (this.__ownerID = t, this._map = e, this);
    };
    var $e = Ye.prototype;

    function Ze(t, e, n) {
      var r = Object.create(Object.getPrototypeOf(t));
      return r._map = e, r.__ownerID = n, r;
    }

    function Qe(t) {
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
      return null == t ? cn() : nn(t) && !l(t) ? t : cn().withMutations(function (e) {
        var n = o(t);
        Dt(n.size), n.forEach(function (t) {
          return e.add(t);
        });
      });
    }

    function nn(t) {
      return !(!t || !t[on]);
    }

    $e["delete"] = $e.remove, $e.deleteIn = $e.removeIn = Bt.removeIn, $e.merge = Bt.merge, $e.mergeWith = Bt.mergeWith, $e.mergeIn = Bt.mergeIn, $e.mergeDeep = Bt.mergeDeep, $e.mergeDeepWith = Bt.mergeDeepWith, $e.mergeDeepIn = Bt.mergeDeepIn, $e.setIn = Bt.setIn, $e.update = Bt.update, $e.updateIn = Bt.updateIn, $e.withMutations = Bt.withMutations, $e.asMutable = Bt.asMutable, $e.asImmutable = Bt.asImmutable, e(en, dt), en.of = function () {
      return this(arguments);
    }, en.fromKeys = function (t) {
      return this(r(t).keySeq());
    }, en.prototype.toString = function () {
      return this.__toString("Set {", "}");
    }, en.prototype.has = function (t) {
      return this._map.has(t);
    }, en.prototype.add = function (t) {
      return sn(this, this._map.set(t, !0));
    }, en.prototype.remove = function (t) {
      return sn(this, this._map.remove(t));
    }, en.prototype.clear = function () {
      return sn(this, this._map.clear());
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
      return ln(Fe(this, t));
    }, en.prototype.sortBy = function (t, e) {
      return ln(Fe(this, e, t));
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
        an = en.prototype;

    function sn(t, e) {
      return t.__ownerID ? (t.size = e.size, t._map = e, t) : e === t._map ? t : 0 === e.size ? t.__empty() : t.__make(e);
    }

    function un(t, e) {
      var n = Object.create(an);
      return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
    }

    function cn() {
      return rn || (rn = un(Ht()));
    }

    function ln(t) {
      return null == t ? gn() : fn(t) ? t : gn().withMutations(function (e) {
        var n = o(t);
        Dt(n.size), n.forEach(function (t) {
          return e.add(t);
        });
      });
    }

    function fn(t) {
      return nn(t) && l(t);
    }

    an[on] = !0, an["delete"] = an.remove, an.mergeDeep = an.merge, an.mergeDeepWith = an.mergeWith, an.withMutations = Bt.withMutations, an.asMutable = Bt.asMutable, an.asImmutable = Bt.asImmutable, an.__empty = cn, an.__make = un, e(ln, en), ln.of = function () {
      return this(arguments);
    }, ln.fromKeys = function (t) {
      return this(r(t).keySeq());
    }, ln.prototype.toString = function () {
      return this.__toString("OrderedSet {", "}");
    }, ln.isOrderedSet = fn;
    var pn,
        hn = ln.prototype;

    function dn(t, e) {
      var n = Object.create(hn);
      return n.size = t ? t.size : 0, n._map = t, n.__ownerID = e, n;
    }

    function gn() {
      return pn || (pn = dn(Ee()));
    }

    function yn(t) {
      return null == t ? xn() : vn(t) ? t : xn().unshiftAll(t);
    }

    function vn(t) {
      return !(!t || !t[bn]);
    }

    hn[d] = !0, hn.__empty = gn, hn.__make = dn, e(yn, ht), yn.of = function () {
      return this(arguments);
    }, yn.prototype.toString = function () {
      return this.__toString("Stack [", "]");
    }, yn.prototype.get = function (t, e) {
      var n = this._head;

      for (t = x(this, t); n && t--;) {
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
      Dt(t.size);
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
      return 0 === this.size ? this : this.__ownerID ? (this.size = 0, this._head = void 0, this.__hash = void 0, this.__altered = !0, this) : xn();
    }, yn.prototype.slice = function (t, e) {
      if (k(t, e, this.size)) return this;
      var n = C(t, this.size);
      if (O(e, this.size) !== this.size) return ht.prototype.slice.call(this, t, e);

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
      return new B(function () {
        if (r) {
          var e = r.value;
          return r = r.next, L(t, n++, e);
        }

        return {
          value: void 0,
          done: !0
        };
      });
    }, yn.isStack = vn;
    var mn,
        bn = "@@__IMMUTABLE_STACK__@@",
        wn = yn.prototype;

    function Sn(t, e, n, r) {
      var i = Object.create(wn);
      return i.size = t, i._head = e, i.__ownerID = n, i.__hash = r, i.__altered = !1, i;
    }

    function xn() {
      return mn || (mn = Sn(0));
    }

    function En(t, e) {
      var n = function n(_n) {
        t.prototype[_n] = e[_n];
      };

      return Object.keys(e).forEach(n), Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(e).forEach(n), t;
    }

    wn[bn] = !0, wn.withMutations = Bt.withMutations, wn.asMutable = Bt.asMutable, wn.asImmutable = Bt.asImmutable, wn.wasAltered = Bt.wasAltered, n.Iterator = B, En(n, {
      toArray: function toArray() {
        Dt(this.size);
        var t = new Array(this.size || 0);
        return this.valueSeq().__iterate(function (e, n) {
          t[n] = e;
        }), t;
      },
      toIndexedSeq: function toIndexedSeq() {
        return new Oe(this);
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
        return new Ce(this, !0);
      },
      toMap: function toMap() {
        return Mt(this.toKeyedSeq());
      },
      toObject: function toObject() {
        Dt(this.size);
        var t = {};
        return this.__iterate(function (e, n) {
          t[n] = e;
        }), t;
      },
      toOrderedMap: function toOrderedMap() {
        return we(this.toKeyedSeq());
      },
      toOrderedSet: function toOrderedSet() {
        return ln(s(this) ? this.valueSeq() : this);
      },
      toSet: function toSet() {
        return en(s(this) ? this.valueSeq() : this);
      },
      toSetSeq: function toSetSeq() {
        return new Te(this);
      },
      toSeq: function toSeq() {
        return u(this) ? this.toIndexedSeq() : s(this) ? this.toKeyedSeq() : this.toSetSeq();
      },
      toStack: function toStack() {
        return yn(s(this) ? this.valueSeq() : this);
      },
      toList: function toList() {
        return ie(s(this) ? this.valueSeq() : this);
      },
      toString: function toString() {
        return "[Iterable]";
      },
      __toString: function __toString(t, e) {
        return 0 === this.size ? t + e : t + " " + this.toSeq().map(this.__toStringMapper).join(", ") + " " + e;
      },
      concat: function concat() {
        var e = t.call(arguments, 0);
        return Ue(this, Re(this, e));
      },
      includes: function includes(t) {
        return this.some(function (e) {
          return at(e, t);
        });
      },
      entries: function entries() {
        return this.__iterator(2);
      },
      every: function every(t, e) {
        Dt(this.size);
        var n = !0;
        return this.__iterate(function (r, i, o) {
          if (!t.call(e, r, i, o)) return n = !1, !1;
        }), n;
      },
      filter: function filter(t, e) {
        return Ue(this, Ie(this, t, e, !0));
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
        return Dt(this.size), this.__iterate(e ? t.bind(e) : t);
      },
      join: function join(t) {
        Dt(this.size), t = void 0 !== t ? "" + t : ",";
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
        return Ue(this, Ke(this, t, e));
      },
      reduce: function reduce(t, e, n) {
        var r, i;
        return Dt(this.size), arguments.length < 2 ? i = !0 : r = e, this.__iterate(function (e, o, a) {
          i ? (i = !1, r = e) : r = t.call(n, r, e, o, a);
        }), r;
      },
      reduceRight: function reduceRight(t, e, n) {
        var r = this.toKeyedSeq().reverse();
        return r.reduce.apply(r, arguments);
      },
      reverse: function reverse() {
        return Ue(this, Ae(this, !0));
      },
      slice: function slice(t, e) {
        return Ue(this, Be(this, t, e, !0));
      },
      some: function some(t, e) {
        return !this.every(Dn(t), e);
      },
      sort: function sort(t) {
        return Ue(this, Fe(this, t));
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
          var r = Mt().asMutable();
          return t.__iterate(function (i, o) {
            r.update(e.call(n, i, o, t), 0, function (t) {
              return t + 1;
            });
          }), r.asImmutable();
        }(this, t, e);
      },
      equals: function equals(t) {
        return st(this, t);
      },
      entrySeq: function entrySeq() {
        var t = this;
        if (t._cache) return new V(t._cache);
        var e = t.toSeq().map(Tn).toIndexedSeq();
        return e.fromEntrySeq = function () {
          return t.toSeq();
        }, e;
      },
      filterNot: function filterNot(t, e) {
        return this.filter(Dn(t), e);
      },
      findLast: function findLast(t, e, n) {
        return this.toKeyedSeq().reverse().find(t, e, n);
      },
      first: function first() {
        return this.find(E);
      },
      flatMap: function flatMap(t, e) {
        return Ue(this, function (t, e, n) {
          var r = We(t);
          return t.toSeq().map(function (i, o) {
            return r(e.call(n, i, o, t));
          }).flatten(!0);
        }(this, t, e));
      },
      flatten: function flatten(t) {
        return Ue(this, Ne(this, t, !0));
      },
      fromEntrySeq: function fromEntrySeq() {
        return new De(this);
      },
      get: function get(t, e) {
        return this.find(function (e, n) {
          return at(n, t);
        }, void 0, e);
      },
      getIn: function getIn(t, e) {
        for (var n, r = this, i = Xe(t); !(n = i.next()).done;) {
          var o = n.value;
          if ((r = r && r.get ? r.get(o, g) : g) === g) return e;
        }

        return r;
      },
      groupBy: function groupBy(t, e) {
        return function (t, e, n) {
          var r = s(t),
              i = (l(t) ? we() : Mt()).asMutable();

          t.__iterate(function (o, a) {
            i.update(e.call(n, o, a, t), function (t) {
              return (t = t || []).push(r ? [a, o] : o), t;
            });
          });

          var o = We(t);
          return i.map(function (e) {
            return Ue(t, o(e));
          });
        }(this, t, e);
      },
      has: function has(t) {
        return this.get(t, g) !== g;
      },
      hasIn: function hasIn(t) {
        return this.getIn(t, g) !== g;
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
        return this.toSeq().map(On).toIndexedSeq();
      },
      last: function last() {
        return this.toSeq().reverse().first();
      },
      max: function max(t) {
        return ze(this, t);
      },
      maxBy: function maxBy(t, e) {
        return ze(this, e, t);
      },
      min: function min(t) {
        return ze(this, t ? Mn(t) : In);
      },
      minBy: function minBy(t, e) {
        return ze(this, e ? Mn(e) : In, t);
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
        return Ue(this, Le(this, t, e, !0));
      },
      skipUntil: function skipUntil(t, e) {
        return this.skipWhile(Dn(t), e);
      },
      sortBy: function sortBy(t, e) {
        return Ue(this, Fe(this, e, t));
      },
      take: function take(t) {
        return this.slice(0, Math.max(0, t));
      },
      takeLast: function takeLast(t) {
        return Ue(this, this.toSeq().reverse().take(t).reverse());
      },
      takeWhile: function takeWhile(t, e) {
        return Ue(this, function (t, e, n) {
          var r = Ve(t);
          return r.__iterateUncached = function (r, i) {
            var o = this;
            if (i) return this.cacheResult().__iterate(r, i);
            var a = 0;
            return t.__iterate(function (t, i, s) {
              return e.call(n, t, i, s) && ++a && r(t, i, o);
            }), a;
          }, r.__iteratorUncached = function (r, i) {
            var o = this;
            if (i) return this.cacheResult().__iterator(r, i);

            var a = t.__iterator(2, i),
                s = !0;

            return new B(function () {
              if (!s) return {
                value: void 0,
                done: !0
              };
              var t = a.next();
              if (t.done) return t;
              var i = t.value,
                  u = i[0],
                  c = i[1];
              return e.call(n, c, u, o) ? 2 === r ? t : L(r, u, c, t) : (s = !1, {
                value: void 0,
                done: !0
              });
            });
          }, r;
        }(this, t, e));
      },
      takeUntil: function takeUntil(t, e) {
        return this.takeWhile(Dn(t), e);
      },
      valueSeq: function valueSeq() {
        return this.toIndexedSeq();
      },
      hashCode: function hashCode() {
        return this.__hash || (this.__hash = function (t) {
          if (t.size === 1 / 0) return 0;
          var e = l(t),
              n = s(t),
              r = e ? 1 : 0;
          return function (t, e) {
            return e = gt(e, 3432918353), e = gt(e << 15 | e >>> -15, 461845907), e = gt(e << 13 | e >>> -13, 5), e = gt((e = (e + 3864292196 | 0) ^ t) ^ e >>> 16, 2246822507), yt((e = gt(e ^ e >>> 13, 3266489909)) ^ e >>> 16);
          }(t.__iterate(n ? e ? function (t, e) {
            r = 31 * r + Bn(vt(t), vt(e)) | 0;
          } : function (t, e) {
            r = r + Bn(vt(t), vt(e)) | 0;
          } : e ? function (t) {
            r = 31 * r + vt(t) | 0;
          } : function (t) {
            r = r + vt(t) | 0;
          }), r);
        }(this));
      }
    });
    var kn = n.prototype;
    kn[f] = !0, kn[I] = kn.values, kn.__toJS = kn.toArray, kn.__toStringMapper = Kn, kn.inspect = kn.toSource = function () {
      return this.toString();
    }, kn.chain = kn.flatMap, kn.contains = kn.includes, function () {
      try {
        Object.defineProperty(kn, "length", {
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
        return Ue(this, Me(this));
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
          return at(e, t);
        });
      },
      lastKeyOf: function lastKeyOf(t) {
        return this.findLastKey(function (e) {
          return at(e, t);
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
    var Cn = r.prototype;

    function On(t, e) {
      return e;
    }

    function Tn(t, e) {
      return [e, t];
    }

    function Dn(t) {
      return function () {
        return !t.apply(this, arguments);
      };
    }

    function Mn(t) {
      return function () {
        return -t.apply(this, arguments);
      };
    }

    function Kn(t) {
      return "string" == typeof t ? JSON.stringify(t) : t;
    }

    function An() {
      return w(arguments);
    }

    function In(t, e) {
      return t < e ? 1 : t > e ? -1 : 0;
    }

    function Bn(t, e) {
      return t ^ e + 2654435769 + (t << 6) + (t >> 2) | 0;
    }

    return Cn[p] = !0, Cn[I] = kn.entries, Cn.__toJS = kn.toObject, Cn.__toStringMapper = function (t, e) {
      return JSON.stringify(e) + ": " + Kn(t);
    }, En(i, {
      toKeyedSeq: function toKeyedSeq() {
        return new Ce(this, !1);
      },
      filter: function filter(t, e) {
        return Ue(this, Ie(this, t, e, !1));
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
        return Ue(this, Ae(this, !1));
      },
      slice: function slice(t, e) {
        return Ue(this, Be(this, t, e, !1));
      },
      splice: function splice(t, e) {
        var n = arguments.length;
        if (e = Math.max(0 | e, 0), 0 === n || 2 === n && !e) return this;
        t = C(t, t < 0 ? this.count() : this.size);
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
        return Ue(this, Ne(this, t, !1));
      },
      get: function get(t, e) {
        return (t = x(this, t)) < 0 || this.size === 1 / 0 || void 0 !== this.size && t > this.size ? e : this.find(function (e, n) {
          return n === t;
        }, void 0, e);
      },
      has: function has(t) {
        return (t = x(this, t)) >= 0 && (void 0 !== this.size ? this.size === 1 / 0 || t < this.size : -1 !== this.indexOf(t));
      },
      interpose: function interpose(t) {
        return Ue(this, function (t, e) {
          var n = Ve(t);
          return n.size = t.size && 2 * t.size - 1, n.__iterateUncached = function (n, r) {
            var i = this,
                o = 0;
            return t.__iterate(function (t, r) {
              return (!o || !1 !== n(e, o++, i)) && !1 !== n(t, o++, i);
            }, r), o;
          }, n.__iteratorUncached = function (n, r) {
            var i,
                o = t.__iterator(1, r),
                a = 0;

            return new B(function () {
              return (!i || a % 2) && (i = o.next()).done ? i : a % 2 ? L(n, a++, e) : L(n, a++, i.value, i);
            });
          }, n;
        }(this, t));
      },
      interleave: function interleave() {
        var t = [this].concat(w(arguments)),
            e = je(this.toSeq(), H.of, t),
            n = e.flatten(!0);
        return e.size && (n.size = e.size * t.length), Ue(this, n);
      },
      last: function last() {
        return this.get(-1);
      },
      skipWhile: function skipWhile(t, e) {
        return Ue(this, Le(this, t, e, !1));
      },
      zip: function zip() {
        var t = [this].concat(w(arguments));
        return Ue(this, je(this, An, t));
      },
      zipWith: function zipWith(t) {
        var e = w(arguments);
        return e[0] = this, Ue(this, je(this, t, e));
      }
    }), i.prototype[h] = !0, i.prototype[d] = !0, En(o, {
      get: function get(t, e) {
        return this.has(t) ? t : e;
      },
      includes: function includes(t) {
        return this.has(t);
      },
      keySeq: function keySeq() {
        return this.valueSeq();
      }
    }), o.prototype.has = kn.includes, En(q, r.prototype), En(H, i.prototype), En(W, o.prototype), En(pt, r.prototype), En(ht, i.prototype), En(dt, o.prototype), {
      Iterable: n,
      Seq: U,
      Collection: ft,
      Map: Mt,
      OrderedMap: we,
      List: ie,
      Stack: yn,
      Set: en,
      OrderedSet: ln,
      Record: Ye,
      Range: lt,
      Repeat: ut,
      is: at,
      fromJS: rt
    };
  }();
},, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = n(268),
      o = n(183),
      a = n(600),
      s = n(20),
      u = n(98),
      c = s.OrderedSet,
      l = s.Record,
      f = s.Stack,
      p = l({
    allowUndo: !0,
    currentContent: null,
    decorator: null,
    directionMap: null,
    forceSelection: !1,
    inCompositionMode: !1,
    inlineStyleOverride: null,
    lastChangeType: null,
    nativelyRenderedContent: null,
    redoStack: f(),
    selection: null,
    treeMap: null,
    undoStack: f()
  }),
      h = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this._immutable = e;
    }

    return t.createEmpty = function (e) {
      return t.createWithContent(o.createFromText(""), e);
    }, t.createWithContent = function (e, n) {
      var r = e.getBlockMap().first().getKey();
      return t.create({
        currentContent: e,
        undoStack: f(),
        redoStack: f(),
        decorator: n || null,
        selection: u.createEmpty(r)
      });
    }, t.create = function (e) {
      var n = e.currentContent,
          i = e.decorator,
          o = r({}, e, {
        treeMap: g(n, i),
        directionMap: a.getDirectionMap(n)
      });
      return new t(new p(o));
    }, t.set = function (e, n) {
      return new t(e.getImmutable().withMutations(function (t) {
        var r = t.get("decorator"),
            o = r;
        null === n.decorator ? o = null : n.decorator && (o = n.decorator);
        var a = n.currentContent || e.getCurrentContent();

        if (o !== r) {
          var s,
              u = t.get("treeMap");
          return s = o && r ? function (t, e, n, r, o) {
            return n.merge(e.toSeq().filter(function (e) {
              return r.getDecorations(e, t) !== o.getDecorations(e, t);
            }).map(function (e) {
              return i.generate(t, e, r);
            }));
          }(a, a.getBlockMap(), u, o, r) : g(a, o), void t.merge({
            decorator: o,
            treeMap: s,
            nativelyRenderedContent: null
          });
        }

        a !== e.getCurrentContent() && t.set("treeMap", function (t, e, n, r) {
          var o = t.getCurrentContent().set("entityMap", n),
              a = o.getBlockMap();
          return t.getImmutable().get("treeMap").merge(e.toSeq().filter(function (t, e) {
            return t !== a.get(e);
          }).map(function (t) {
            return i.generate(o, t, r);
          }));
        }(e, a.getBlockMap(), a.getEntityMap(), o)), t.merge(n);
      }));
    }, t.prototype.toJS = function () {
      return this.getImmutable().toJS();
    }, t.prototype.getAllowUndo = function () {
      return this.getImmutable().get("allowUndo");
    }, t.prototype.getCurrentContent = function () {
      return this.getImmutable().get("currentContent");
    }, t.prototype.getUndoStack = function () {
      return this.getImmutable().get("undoStack");
    }, t.prototype.getRedoStack = function () {
      return this.getImmutable().get("redoStack");
    }, t.prototype.getSelection = function () {
      return this.getImmutable().get("selection");
    }, t.prototype.getDecorator = function () {
      return this.getImmutable().get("decorator");
    }, t.prototype.isInCompositionMode = function () {
      return this.getImmutable().get("inCompositionMode");
    }, t.prototype.mustForceSelection = function () {
      return this.getImmutable().get("forceSelection");
    }, t.prototype.getNativelyRenderedContent = function () {
      return this.getImmutable().get("nativelyRenderedContent");
    }, t.prototype.getLastChangeType = function () {
      return this.getImmutable().get("lastChangeType");
    }, t.prototype.getInlineStyleOverride = function () {
      return this.getImmutable().get("inlineStyleOverride");
    }, t.setInlineStyleOverride = function (e, n) {
      return t.set(e, {
        inlineStyleOverride: n
      });
    }, t.prototype.getCurrentInlineStyle = function () {
      var t = this.getInlineStyleOverride();
      if (null != t) return t;
      var e = this.getCurrentContent(),
          n = this.getSelection();
      return n.isCollapsed() ? function (t, e) {
        var n = e.getStartKey(),
            r = e.getStartOffset(),
            i = t.getBlockForKey(n);
        return r > 0 ? i.getInlineStyleAt(r - 1) : i.getLength() ? i.getInlineStyleAt(0) : y(t, n);
      }(e, n) : function (t, e) {
        var n = e.getStartKey(),
            r = e.getStartOffset(),
            i = t.getBlockForKey(n);
        return r < i.getLength() ? i.getInlineStyleAt(r) : r > 0 ? i.getInlineStyleAt(r - 1) : y(t, n);
      }(e, n);
    }, t.prototype.getBlockTree = function (t) {
      return this.getImmutable().getIn(["treeMap", t]);
    }, t.prototype.isSelectionAtStartOfContent = function () {
      var t = this.getCurrentContent().getBlockMap().first().getKey();
      return this.getSelection().hasEdgeWithin(t, 0, 0);
    }, t.prototype.isSelectionAtEndOfContent = function () {
      var t = this.getCurrentContent().getBlockMap().last(),
          e = t.getLength();
      return this.getSelection().hasEdgeWithin(t.getKey(), e, e);
    }, t.prototype.getDirectionMap = function () {
      return this.getImmutable().get("directionMap");
    }, t.acceptSelection = function (t, e) {
      return d(t, e, !1);
    }, t.forceSelection = function (t, e) {
      return e.getHasFocus() || (e = e.set("hasFocus", !0)), d(t, e, !0);
    }, t.moveSelectionToEnd = function (e) {
      var n = e.getCurrentContent().getLastBlock(),
          r = n.getKey(),
          i = n.getLength();
      return t.acceptSelection(e, new u({
        anchorKey: r,
        anchorOffset: i,
        focusKey: r,
        focusOffset: i,
        isBackward: !1
      }));
    }, t.moveFocusToEnd = function (e) {
      var n = t.moveSelectionToEnd(e);
      return t.forceSelection(n, n.getSelection());
    }, t.push = function (e, n, r) {
      if (e.getCurrentContent() === n) return e;
      var i = "insert-characters" !== r,
          o = a.getDirectionMap(n, e.getDirectionMap());
      if (!e.getAllowUndo()) return t.set(e, {
        currentContent: n,
        directionMap: o,
        lastChangeType: r,
        selection: n.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: null
      });
      var s = e.getSelection(),
          u = e.getCurrentContent(),
          c = e.getUndoStack(),
          l = n;
      s !== u.getSelectionAfter() || function (t, e) {
        return e !== t.getLastChangeType() || "insert-characters" !== e && "backspace-character" !== e && "delete-character" !== e;
      }(e, r) ? (c = c.push(u), l = l.set("selectionBefore", s)) : "insert-characters" !== r && "backspace-character" !== r && "delete-character" !== r || (l = l.set("selectionBefore", u.getSelectionBefore()));
      var p = e.getInlineStyleOverride();
      -1 === ["adjust-depth", "change-block-type", "split-block"].indexOf(r) && (p = null);
      var h = {
        currentContent: l,
        directionMap: o,
        undoStack: c,
        redoStack: f(),
        lastChangeType: r,
        selection: n.getSelectionAfter(),
        forceSelection: i,
        inlineStyleOverride: p
      };
      return t.set(e, h);
    }, t.undo = function (e) {
      if (!e.getAllowUndo()) return e;
      var n = e.getUndoStack(),
          r = n.peek();
      if (!r) return e;
      var i = e.getCurrentContent(),
          o = a.getDirectionMap(r, e.getDirectionMap());
      return t.set(e, {
        currentContent: r,
        directionMap: o,
        undoStack: n.shift(),
        redoStack: e.getRedoStack().push(i),
        forceSelection: !0,
        inlineStyleOverride: null,
        lastChangeType: "undo",
        nativelyRenderedContent: null,
        selection: i.getSelectionBefore()
      });
    }, t.redo = function (e) {
      if (!e.getAllowUndo()) return e;
      var n = e.getRedoStack(),
          r = n.peek();
      if (!r) return e;
      var i = e.getCurrentContent(),
          o = a.getDirectionMap(r, e.getDirectionMap());
      return t.set(e, {
        currentContent: r,
        directionMap: o,
        undoStack: e.getUndoStack().push(i),
        redoStack: n.shift(),
        forceSelection: !0,
        inlineStyleOverride: null,
        lastChangeType: "redo",
        nativelyRenderedContent: null,
        selection: r.getSelectionAfter()
      });
    }, t.prototype.getImmutable = function () {
      return this._immutable;
    }, t;
  }();

  function d(t, e, n) {
    return h.set(t, {
      selection: e,
      forceSelection: n,
      nativelyRenderedContent: null,
      inlineStyleOverride: null
    });
  }

  function g(t, e) {
    return t.getBlockMap().map(function (n) {
      return i.generate(t, n, e);
    }).toOrderedMap();
  }

  function y(t, e) {
    var n = t.getBlockMap().reverse().skipUntil(function (t, n) {
      return n === e;
    }).skip(1).skipUntil(function (t, e) {
      return t.getLength();
    }).first();
    return n ? n.getInlineStyleAt(n.getLength() - 1) : c();
  }

  t.exports = h;
},,, function (t, e) {
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
},,,,,,,,,,,,, function (t, e) {
  t.exports = window.ReactDOM;
},,,, function (t, e, n) {
  "use strict";

  function r(t) {
    return function () {
      return t;
    };
  }

  var i = function i() {};

  i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function () {
    return this;
  }, i.thatReturnsArgument = function (t) {
    return t;
  }, t.exports = i;
},,,, function (t, e, n) {
  "use strict";

  var r = n(47),
      i = n(589),
      o = n(68),
      a = n(20),
      s = n(590),
      u = n(592),
      c = n(141),
      l = n(595),
      f = n(596),
      p = n(19),
      h = n(597),
      d = n(265),
      g = n(598),
      y = n(599),
      v = a.OrderedSet,
      m = {
    replaceText: function replaceText(t, e, n, i, o) {
      var a = d(t, e),
          s = g(a, e),
          u = r.create({
        style: i || v(),
        entity: o || null
      });
      return f(s, s.getSelectionAfter(), n, u);
    },
    insertText: function insertText(t, e, n, r, i) {
      return e.isCollapsed() || p(!1), m.replaceText(t, e, n, r, i);
    },
    moveText: function moveText(t, e, n) {
      var r = c(t, e),
          i = m.removeRange(t, e, "backward");
      return m.replaceWithFragment(i, n, r);
    },
    replaceWithFragment: function replaceWithFragment(t, e, n) {
      var r = d(t, e),
          i = g(r, e);
      return l(i, i.getSelectionAfter(), n);
    },
    removeRange: function removeRange(t, e, n) {
      var r,
          i,
          a = void 0,
          s = void 0;
      e.getIsBackward() && (e = e.merge({
        anchorKey: e.getFocusKey(),
        anchorOffset: e.getFocusOffset(),
        focusKey: e.getAnchorKey(),
        focusOffset: e.getAnchorOffset(),
        isBackward: !1
      })), r = e.getAnchorKey(), i = e.getFocusKey(), a = t.getBlockForKey(r), s = t.getBlockForKey(i);
      var c = e.getStartOffset(),
          l = e.getEndOffset(),
          f = a.getEntityAt(c),
          p = s.getEntityAt(l - 1);

      if (r === i && f && f === p) {
        var h = u(t.getEntityMap(), a, s, e, n);
        return g(t, h);
      }

      var y = e;
      o.draft_segmented_entities_behavior && (y = u(t.getEntityMap(), a, s, e, n));
      var v = d(t, y);
      return g(v, y);
    },
    splitBlock: function splitBlock(t, e) {
      var n = d(t, e),
          r = g(n, e);
      return y(r, r.getSelectionAfter());
    },
    applyInlineStyle: function applyInlineStyle(t, e, n) {
      return i.add(t, e, n);
    },
    removeInlineStyle: function removeInlineStyle(t, e, n) {
      return i.remove(t, e, n);
    },
    setBlockType: function setBlockType(t, e, n) {
      return h(t, e, function (t) {
        return t.merge({
          type: n,
          depth: 0
        });
      });
    },
    setBlockData: function setBlockData(t, e, n) {
      return h(t, e, function (t) {
        return t.merge({
          data: n
        });
      });
    },
    mergeBlockData: function mergeBlockData(t, e, n) {
      return h(t, e, function (t) {
        return t.merge({
          data: t.getData().merge(n)
        });
      });
    },
    applyEntity: function applyEntity(t, e, n) {
      var r = d(t, e);
      return s(r, e, n);
    }
  };
  t.exports = m;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var o = n(20),
      a = o.Map,
      s = o.OrderedSet,
      u = o.Record,
      c = s(),
      l = {
    style: c,
    entity: null
  },
      f = function (t) {
    function e() {
      return r(this, e), i(this, t.apply(this, arguments));
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
    }(e, t), e.prototype.getStyle = function () {
      return this.get("style");
    }, e.prototype.getEntity = function () {
      return this.get("entity");
    }, e.prototype.hasStyle = function (t) {
      return this.getStyle().includes(t);
    }, e.applyStyle = function (t, n) {
      var r = t.set("style", t.getStyle().add(n));
      return e.create(r);
    }, e.removeStyle = function (t, n) {
      var r = t.set("style", t.getStyle().remove(n));
      return e.create(r);
    }, e.applyEntity = function (t, n) {
      var r = t.getEntity() === n ? t : t.set("entity", n);
      return e.create(r);
    }, e.create = function (t) {
      if (!t) return p;
      var n = a({
        style: c,
        entity: null
      }).merge(t),
          r = h.get(n);
      if (r) return r;
      var i = new e(n);
      return h = h.set(n, i), i;
    }, e;
  }(u(l)),
      p = new f(),
      h = a([[a(l), p]]);

  f.EMPTY = p, t.exports = f;
},, function (t, e, n) {
  "use strict";

  var r = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;

  function a(t) {
    if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(t);
  }

  t.exports = function () {
    try {
      if (!Object.assign) return !1;
      var t = new String("abc");
      if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;

      for (var e = {}, n = 0; n < 10; n++) {
        e["_" + String.fromCharCode(n)] = n;
      }

      if ("0123456789" !== Object.getOwnPropertyNames(e).map(function (t) {
        return e[t];
      }).join("")) return !1;
      var r = {};
      return "abcdefghijklmnopqrst".split("").forEach(function (t) {
        r[t] = t;
      }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
    } catch (t) {
      return !1;
    }
  }() ? Object.assign : function (t, e) {
    for (var n, s, u = a(t), c = 1; c < arguments.length; c++) {
      for (var l in n = Object(arguments[c])) {
        i.call(n, l) && (u[l] = n[l]);
      }

      if (r) {
        s = r(n);

        for (var f = 0; f < s.length; f++) {
          o.call(n, s[f]) && (u[s[f]] = n[s[f]]);
        }
      }
    }

    return u;
  };
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var o = n(47),
      a = n(20),
      s = n(113),
      u = a.List,
      c = a.Map,
      l = a.OrderedSet,
      f = a.Record,
      p = a.Repeat,
      h = l(),
      d = {
    parent: null,
    characterList: u(),
    data: c(),
    depth: 0,
    key: "",
    text: "",
    type: "unstyled",
    children: u(),
    prevSibling: null,
    nextSibling: null
  },
      g = function g(t, e) {
    return t.getStyle() === e.getStyle();
  },
      y = function y(t, e) {
    return t.getEntity() === e.getEntity();
  },
      v = function v(t) {
    if (!t) return t;
    var e = t.characterList,
        n = t.text;
    return n && !e && (t.characterList = u(p(o.EMPTY, n.length))), t;
  },
      m = function (t) {
    function e() {
      var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
      return r(this, e), i(this, t.call(this, v(n)));
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
    }(e, t), e.prototype.getKey = function () {
      return this.get("key");
    }, e.prototype.getType = function () {
      return this.get("type");
    }, e.prototype.getText = function () {
      return this.get("text");
    }, e.prototype.getCharacterList = function () {
      return this.get("characterList");
    }, e.prototype.getLength = function () {
      return this.getText().length;
    }, e.prototype.getDepth = function () {
      return this.get("depth");
    }, e.prototype.getData = function () {
      return this.get("data");
    }, e.prototype.getInlineStyleAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getStyle() : h;
    }, e.prototype.getEntityAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getEntity() : null;
    }, e.prototype.getChildKeys = function () {
      return this.get("children");
    }, e.prototype.getParentKey = function () {
      return this.get("parent");
    }, e.prototype.getPrevSiblingKey = function () {
      return this.get("prevSibling");
    }, e.prototype.getNextSiblingKey = function () {
      return this.get("nextSibling");
    }, e.prototype.findStyleRanges = function (t, e) {
      s(this.getCharacterList(), g, t, e);
    }, e.prototype.findEntityRanges = function (t, e) {
      s(this.getCharacterList(), y, t, e);
    }, e;
  }(f(d));

  t.exports = m;
},,,, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    if (null != t) return t;
    throw new Error("Got unexpected null or undefined");
  };
},, function (t, e, n) {
  "use strict";

  var r = n(610),
      i = n(613),
      o = n(614),
      a = n(615);

  function s(t, e, n, r) {
    if (t === n) return !0;
    if (!n.startsWith(t)) return !1;
    var o = n.slice(t.length);
    return !!e && (o = r ? r(o) : o, i.contains(o, e));
  }

  function u(t) {
    return "Windows" === r.platformName ? t.replace(/^\s*NT/, "") : t;
  }

  var c = {
    isBrowser: function isBrowser(t) {
      return s(r.browserName, r.browserFullVersion, t);
    },
    isBrowserArchitecture: function isBrowserArchitecture(t) {
      return s(r.browserArchitecture, null, t);
    },
    isDevice: function isDevice(t) {
      return s(r.deviceName, null, t);
    },
    isEngine: function isEngine(t) {
      return s(r.engineName, r.engineVersion, t);
    },
    isPlatform: function isPlatform(t) {
      return s(r.platformName, r.platformFullVersion, t, u);
    },
    isPlatformArchitecture: function isPlatformArchitecture(t) {
      return s(r.platformArchitecture, null, t);
    }
  };
  t.exports = o(c, a);
},, function (t, e, n) {
  "use strict";

  var r = {},
      i = Math.pow(2, 24);

  t.exports = function () {
    for (var t = void 0; void 0 === t || r.hasOwnProperty(t) || !isNaN(+t);) {
      t = Math.floor(Math.random() * i).toString(32);
    }

    return r[t] = !0, t;
  };
},,,,,,,,,, function (t, e, n) {
  "use strict";

  var r = n(588);
  t.exports = r;
},,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var r = n(47),
      i = n(20),
      o = n(113),
      a = i.List,
      s = i.Map,
      u = i.OrderedSet,
      c = i.Record,
      l = i.Repeat,
      f = u(),
      p = function (t) {
    function e(n) {
      return function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, e), function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
      }(this, t.call(this, function (t) {
        if (!t) return t;
        var e = t.characterList,
            n = t.text;
        return n && !e && (t.characterList = a(l(r.EMPTY, n.length))), t;
      }(n)));
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
    }(e, t), e.prototype.getKey = function () {
      return this.get("key");
    }, e.prototype.getType = function () {
      return this.get("type");
    }, e.prototype.getText = function () {
      return this.get("text");
    }, e.prototype.getCharacterList = function () {
      return this.get("characterList");
    }, e.prototype.getLength = function () {
      return this.getText().length;
    }, e.prototype.getDepth = function () {
      return this.get("depth");
    }, e.prototype.getData = function () {
      return this.get("data");
    }, e.prototype.getInlineStyleAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getStyle() : f;
    }, e.prototype.getEntityAt = function (t) {
      var e = this.getCharacterList().get(t);
      return e ? e.getEntity() : null;
    }, e.prototype.findStyleRanges = function (t, e) {
      o(this.getCharacterList(), h, t, e);
    }, e.prototype.findEntityRanges = function (t, e) {
      o(this.getCharacterList(), d, t, e);
    }, e;
  }(c({
    key: "",
    type: "unstyled",
    text: "",
    characterList: a(),
    depth: 0,
    data: s()
  }));

  function h(t, e) {
    return t.getStyle() === e.getStyle();
  }

  function d(t, e) {
    return t.getEntity() === e.getEntity();
  }

  t.exports = p;
}, function (t, e, n) {
  "use strict";

  var r = n(19),
      i = /[\uD800-\uDFFF]/;

  function o(t) {
    return 55296 <= t && t <= 57343;
  }

  function a(t) {
    return i.test(t);
  }

  function s(t, e) {
    return 1 + o(t.charCodeAt(e));
  }

  function u(t, e, n) {
    if (e = e || 0, n = void 0 === n ? 1 / 0 : n || 0, !a(t)) return t.substr(e, n);
    var r = t.length;
    if (r <= 0 || e > r || n <= 0) return "";
    var i = 0;

    if (e > 0) {
      for (; e > 0 && i < r; e--) {
        i += s(t, i);
      }

      if (i >= r) return "";
    } else if (e < 0) {
      for (i = r; e < 0 && 0 < i; e++) {
        i -= s(t, i - 1);
      }

      i < 0 && (i = 0);
    }

    var o = r;
    if (n < r) for (o = i; n > 0 && o < r; n--) {
      o += s(t, o);
    }
    return t.substring(i, o);
  }

  var c = {
    getCodePoints: function getCodePoints(t) {
      for (var e = [], n = 0; n < t.length; n += s(t, n)) {
        e.push(t.codePointAt(n));
      }

      return e;
    },
    getUTF16Length: s,
    hasSurrogateUnit: a,
    isCodeUnitInSurrogateRange: o,
    isSurrogatePair: function isSurrogatePair(t, e) {
      if (0 <= e && e < t.length || r(!1), e + 1 === t.length) return !1;
      var n = t.charCodeAt(e),
          i = t.charCodeAt(e + 1);
      return 55296 <= n && n <= 56319 && 56320 <= i && i <= 57343;
    },
    strlen: function strlen(t) {
      if (!a(t)) return t.length;

      for (var e = 0, n = 0; n < t.length; n += s(t, n)) {
        e++;
      }

      return e;
    },
    substring: function substring(t, e, n) {
      (e = e || 0) < 0 && (e = 0), (n = void 0 === n ? 1 / 0 : n || 0) < 0 && (n = 0);
      var r = Math.abs(n - e);
      return u(t, e = e < n ? e : n, r);
    },
    substr: u
  };
  t.exports = c;
},,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var o = function (t) {
    function e() {
      return r(this, e), i(this, t.apply(this, arguments));
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
    }(e, t), e.prototype.serialize = function () {
      return "Anchor: " + this.getAnchorKey() + ":" + this.getAnchorOffset() + ", Focus: " + this.getFocusKey() + ":" + this.getFocusOffset() + ", Is Backward: " + String(this.getIsBackward()) + ", Has Focus: " + String(this.getHasFocus());
    }, e.prototype.getAnchorKey = function () {
      return this.get("anchorKey");
    }, e.prototype.getAnchorOffset = function () {
      return this.get("anchorOffset");
    }, e.prototype.getFocusKey = function () {
      return this.get("focusKey");
    }, e.prototype.getFocusOffset = function () {
      return this.get("focusOffset");
    }, e.prototype.getIsBackward = function () {
      return this.get("isBackward");
    }, e.prototype.getHasFocus = function () {
      return this.get("hasFocus");
    }, e.prototype.hasEdgeWithin = function (t, e, n) {
      var r = this.getAnchorKey(),
          i = this.getFocusKey();

      if (r === i && r === t) {
        var o = this.getStartOffset();
        return e <= this.getEndOffset() && o <= n;
      }

      if (t !== r && t !== i) return !1;
      var a = t === r ? this.getAnchorOffset() : this.getFocusOffset();
      return e <= a && n >= a;
    }, e.prototype.isCollapsed = function () {
      return this.getAnchorKey() === this.getFocusKey() && this.getAnchorOffset() === this.getFocusOffset();
    }, e.prototype.getStartKey = function () {
      return this.getIsBackward() ? this.getFocusKey() : this.getAnchorKey();
    }, e.prototype.getStartOffset = function () {
      return this.getIsBackward() ? this.getFocusOffset() : this.getAnchorOffset();
    }, e.prototype.getEndKey = function () {
      return this.getIsBackward() ? this.getAnchorKey() : this.getFocusKey();
    }, e.prototype.getEndOffset = function () {
      return this.getIsBackward() ? this.getAnchorOffset() : this.getFocusOffset();
    }, e.createEmpty = function (t) {
      return new e({
        anchorKey: t,
        anchorOffset: 0,
        focusKey: t,
        focusOffset: 0,
        isBackward: !1,
        hasFocus: !1
      });
    }, e;
  }((0, n(20).Record)({
    anchorKey: "",
    anchorOffset: 0,
    focusKey: "",
    focusOffset: 0,
    isBackward: !1,
    hasFocus: !1
  }));

  t.exports = o;
}, function (t, e, n) {
  "use strict";

  function r(t) {
    return t.replace(/\//g, "-");
  }

  t.exports = function (t) {
    return "object" == _typeof(t) ? Object.keys(t).filter(function (e) {
      return t[e];
    }).map(r).join(" ") : Array.prototype.map.call(arguments, r).join(" ");
  };
},,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var r = n(20).OrderedMap,
      i = {
    createFromArray: function createFromArray(t) {
      return r(t.map(function (t) {
        return [t.getKey(), t];
      }));
    }
  };
  t.exports = i;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e, n, r) {
    if (t.size) {
      var i = 0;
      t.reduce(function (t, o, a) {
        return e(t, o) || (n(t) && r(i, a), i = a), o;
      }), n(t.last()) && r(i, t.count());
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    return "handled" === t || !0 === t;
  };
}, function (t, e) {
  var n,
      r,
      i = t.exports = {};

  function o() {
    throw new Error("setTimeout has not been defined");
  }

  function a() {
    throw new Error("clearTimeout has not been defined");
  }

  function s(t) {
    if (n === setTimeout) return setTimeout(t, 0);
    if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);

    try {
      return n(t, 0);
    } catch (e) {
      try {
        return n.call(null, t, 0);
      } catch (e) {
        return n.call(this, t, 0);
      }
    }
  }

  !function () {
    try {
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (t) {
      n = o;
    }

    try {
      r = "function" == typeof clearTimeout ? clearTimeout : a;
    } catch (t) {
      r = a;
    }
  }();
  var u,
      c = [],
      l = !1,
      f = -1;

  function p() {
    l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && h());
  }

  function h() {
    if (!l) {
      var t = s(p);
      l = !0;

      for (var e = c.length; e;) {
        for (u = c, c = []; ++f < e;) {
          u && u[f].run();
        }

        f = -1, e = c.length;
      }

      u = null, l = !1, function (t) {
        if (r === clearTimeout) return clearTimeout(t);
        if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);

        try {
          r(t);
        } catch (e) {
          try {
            return r.call(null, t);
          } catch (e) {
            return r.call(this, t);
          }
        }
      }(t);
    }
  }

  function d(t, e) {
    this.fun = t, this.array = e;
  }

  function g() {}

  i.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) {
      e[n - 1] = arguments[n];
    }
    c.push(new d(t, e)), 1 !== c.length || l || s(h);
  }, d.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = g, i.addListener = g, i.once = g, i.off = g, i.removeListener = g, i.removeAllListeners = g, i.emit = g, i.prependListener = g, i.prependOnceListener = g, i.listeners = function (t) {
    return [];
  }, i.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function () {
    return "/";
  }, i.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function () {
    return 0;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(46);

  t.exports = function (t, e, n) {
    var i = t.getSelection(),
        o = t.getCurrentContent(),
        a = i;

    if (i.isCollapsed()) {
      if ("forward" === n) {
        if (t.isSelectionAtEndOfContent()) return o;
      } else if (t.isSelectionAtStartOfContent()) return o;

      if ((a = e(t)) === i) return o;
    }

    return r.removeRange(o, a, n);
  };
},,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var r = n(264),
      i = n(265);

  t.exports = function (t, e) {
    var n = e.getStartKey(),
        o = e.getStartOffset(),
        a = e.getEndKey(),
        s = e.getEndOffset(),
        u = i(t, e).getBlockMap(),
        c = u.keySeq(),
        l = c.indexOf(n),
        f = c.indexOf(a) + 1;
    return r(u.slice(l, f).map(function (t, e) {
      var r = t.getText(),
          i = t.getCharacterList();
      return n === a ? t.merge({
        text: r.slice(o, s),
        characterList: i.slice(o, s)
      }) : e === n ? t.merge({
        text: r.slice(o),
        characterList: i.slice(o)
      }) : e === a ? t.merge({
        text: r.slice(0, s),
        characterList: i.slice(0, s)
      }) : t;
    }));
  };
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = n(269),
      o = n(20),
      a = n(19),
      s = (0, o.Map)(),
      u = 0;

  function c(t, e) {
    console.warn("WARNING: " + t + ' will be deprecated soon!\nPlease use "' + e + '" instead.');
  }

  var l = {
    getLastCreatedEntityKey: function getLastCreatedEntityKey() {
      return c("DraftEntity.getLastCreatedEntityKey", "contentState.getLastCreatedEntityKey"), l.__getLastCreatedEntityKey();
    },
    create: function create(t, e, n) {
      return c("DraftEntity.create", "contentState.createEntity"), l.__create(t, e, n);
    },
    add: function add(t) {
      return c("DraftEntity.add", "contentState.addEntity"), l.__add(t);
    },
    get: function get(t) {
      return c("DraftEntity.get", "contentState.getEntity"), l.__get(t);
    },
    mergeData: function mergeData(t, e) {
      return c("DraftEntity.mergeData", "contentState.mergeEntityData"), l.__mergeData(t, e);
    },
    replaceData: function replaceData(t, e) {
      return c("DraftEntity.replaceData", "contentState.replaceEntityData"), l.__replaceData(t, e);
    },
    __getLastCreatedEntityKey: function __getLastCreatedEntityKey() {
      return "" + u;
    },
    __create: function __create(t, e, n) {
      return l.__add(new i({
        type: t,
        mutability: e,
        data: n || {}
      }));
    },
    __add: function __add(t) {
      var e = "" + ++u;
      return s = s.set(e, t), e;
    },
    __get: function __get(t) {
      var e = s.get(t);
      return e || a(!1), e;
    },
    __mergeData: function __mergeData(t, e) {
      var n = l.__get(t),
          i = r({}, n.getData(), e),
          o = n.set("data", i);

      return s = s.set(t, o), o;
    },
    __replaceData: function __replaceData(t, e) {
      var n = l.__get(t).set("data", e);

      return s = s.set(t, n), n;
    }
  };
  t.exports = l;
}, function (t, e, n) {
  "use strict";

  var r = {
    encode: function encode(t, e, n) {
      return t + "-" + e + "-" + n;
    },
    decode: function decode(t) {
      var e = t.split("-"),
          n = e[0],
          r = e[1],
          i = e[2];
      return {
        blockKey: n,
        decoratorKey: parseInt(r, 10),
        leafKey: parseInt(i, 10)
      };
    }
  };
  t.exports = r;
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var o = n(112),
      a = n(47),
      s = n(82),
      u = n(50),
      c = n(142),
      l = n(68),
      f = n(20),
      p = n(98),
      h = n(58),
      d = n(184),
      g = f.List,
      y = f.Record,
      v = f.Repeat,
      m = l.draft_tree_data_support ? u : s,
      _ = function (t) {
    function e() {
      return r(this, e), i(this, t.apply(this, arguments));
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
    }(e, t), e.prototype.getEntityMap = function () {
      return c;
    }, e.prototype.getBlockMap = function () {
      return this.get("blockMap");
    }, e.prototype.getSelectionBefore = function () {
      return this.get("selectionBefore");
    }, e.prototype.getSelectionAfter = function () {
      return this.get("selectionAfter");
    }, e.prototype.getBlockForKey = function (t) {
      return this.getBlockMap().get(t);
    }, e.prototype.getKeyBefore = function (t) {
      return this.getBlockMap().reverse().keySeq().skipUntil(function (e) {
        return e === t;
      }).skip(1).first();
    }, e.prototype.getKeyAfter = function (t) {
      return this.getBlockMap().keySeq().skipUntil(function (e) {
        return e === t;
      }).skip(1).first();
    }, e.prototype.getBlockAfter = function (t) {
      return this.getBlockMap().skipUntil(function (e, n) {
        return n === t;
      }).skip(1).first();
    }, e.prototype.getBlockBefore = function (t) {
      return this.getBlockMap().reverse().skipUntil(function (e, n) {
        return n === t;
      }).skip(1).first();
    }, e.prototype.getBlocksAsArray = function () {
      return this.getBlockMap().toArray();
    }, e.prototype.getFirstBlock = function () {
      return this.getBlockMap().first();
    }, e.prototype.getLastBlock = function () {
      return this.getBlockMap().last();
    }, e.prototype.getPlainText = function (t) {
      return this.getBlockMap().map(function (t) {
        return t ? t.getText() : "";
      }).join(t || "\n");
    }, e.prototype.getLastCreatedEntityKey = function () {
      return c.__getLastCreatedEntityKey();
    }, e.prototype.hasText = function () {
      var t = this.getBlockMap();
      return t.size > 1 || t.first().getLength() > 0;
    }, e.prototype.createEntity = function (t, e, n) {
      return c.__create(t, e, n), this;
    }, e.prototype.mergeEntityData = function (t, e) {
      return c.__mergeData(t, e), this;
    }, e.prototype.replaceEntityData = function (t, e) {
      return c.__replaceData(t, e), this;
    }, e.prototype.addEntity = function (t) {
      return c.__add(t), this;
    }, e.prototype.getEntity = function (t) {
      return c.__get(t);
    }, e.createFromBlockArray = function (t, n) {
      var r = Array.isArray(t) ? t : t.contentBlocks,
          i = o.createFromArray(r),
          a = i.isEmpty() ? new p() : p.createEmpty(i.first().getKey());
      return new e({
        blockMap: i,
        entityMap: n || c,
        selectionBefore: a,
        selectionAfter: a
      });
    }, e.createFromText = function (t) {
      var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /\r\n?|\n/g,
          r = t.split(n),
          i = r.map(function (t) {
        return t = d(t), new m({
          key: h(),
          text: t,
          type: "unstyled",
          characterList: g(v(a.EMPTY, t.length))
        });
      });
      return e.createFromBlockArray(i);
    }, e;
  }(y({
    entityMap: null,
    blockMap: null,
    selectionBefore: null,
    selectionAfter: null
  }));

  t.exports = _;
}, function (t, e, n) {
  "use strict";

  var r = new RegExp("\r", "g");

  t.exports = function (t) {
    return t.replace(r, "");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(19),
      i = null;

  function o(t) {
    return "LTR" === t || "RTL" === t;
  }

  function a(t) {
    return o(t) || r(!1), "LTR" === t ? "ltr" : "rtl";
  }

  function s(t) {
    i = t;
  }

  var u = {
    NEUTRAL: "NEUTRAL",
    LTR: "LTR",
    RTL: "RTL",
    isStrong: o,
    getHTMLDir: a,
    getHTMLDirIfDifferent: function getHTMLDirIfDifferent(t, e) {
      return o(t) || r(!1), o(e) || r(!1), t === e ? null : a(t);
    },
    setGlobalDir: s,
    initGlobalDir: function initGlobalDir() {
      s("LTR");
    },
    getGlobalDir: function getGlobalDir() {
      return i || this.initGlobalDir(), i || r(!1), i;
    }
  };
  t.exports = u;
}, function (t, e, n) {
  "use strict";

  var r = n(20).Map,
      i = n(3),
      o = n(99),
      a = r({
    "header-one": {
      element: "h1"
    },
    "header-two": {
      element: "h2"
    },
    "header-three": {
      element: "h3"
    },
    "header-four": {
      element: "h4"
    },
    "header-five": {
      element: "h5"
    },
    "header-six": {
      element: "h6"
    },
    "unordered-list-item": {
      element: "li",
      wrapper: i.createElement("ul", {
        className: o("public/DraftStyleDefault/ul")
      })
    },
    "ordered-list-item": {
      element: "li",
      wrapper: i.createElement("ol", {
        className: o("public/DraftStyleDefault/ol")
      })
    },
    blockquote: {
      element: "blockquote"
    },
    atomic: {
      element: "figure"
    },
    "code-block": {
      element: "pre",
      wrapper: i.createElement("pre", {
        className: o("public/DraftStyleDefault/pre")
      })
    },
    unstyled: {
      element: "div",
      aliasedElements: ["p"]
    }
  });
  t.exports = a;
}, function (t, e, n) {
  "use strict";

  t.exports = {
    BACKSPACE: 8,
    TAB: 9,
    RETURN: 13,
    ALT: 18,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    DELETE: 46,
    COMMA: 188,
    PERIOD: 190,
    A: 65,
    Z: 90,
    ZERO: 48,
    NUMPAD_0: 96,
    NUMPAD_9: 105
  };
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    return e && "MUTABLE" === t.__get(e).getMutability() ? e : null;
  }

  t.exports = function (t, e) {
    var n;

    if (e.isCollapsed()) {
      var i = e.getAnchorKey(),
          o = e.getAnchorOffset();
      return o > 0 ? (n = t.getBlockForKey(i).getEntityAt(o - 1)) !== t.getBlockForKey(i).getEntityAt(o) ? null : r(t.getEntityMap(), n) : null;
    }

    var a = e.getStartKey(),
        s = e.getStartOffset(),
        u = t.getBlockForKey(a);
    return n = s === u.getLength() ? null : u.getEntityAt(s), r(t.getEntityMap(), n);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(618);

  t.exports = function t(e, n) {
    return !(!e || !n) && (e === n || !r(e) && (r(n) ? t(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))));
  };
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    var n = i.get(t, e);
    return "auto" === n || "scroll" === n;
  }

  var i = {
    get: n(620),
    getScrollParent: function getScrollParent(t) {
      if (!t) return null;

      for (var e = t.ownerDocument; t && t !== e.body;) {
        if (r(t, "overflow") || r(t, "overflowY") || r(t, "overflowX")) return t;
        t = t.parentNode;
      }

      return e.defaultView || e.parentWindow;
    }
  };
  t.exports = i;
}, function (t, e, n) {
  "use strict";

  var r = n(625),
      i = n(626);

  t.exports = function (t) {
    var e = r(t.ownerDocument || t.document);
    t.Window && t instanceof t.Window && (t = e);
    var n = i(t),
        o = t === e ? t.ownerDocument.documentElement : t,
        a = t.scrollWidth - o.clientWidth,
        s = t.scrollHeight - o.clientHeight;
    return n.x = Math.max(0, Math.min(n.x, a)), n.y = Math.max(0, Math.min(n.y, s)), n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(277);

  t.exports = function (t) {
    for (var e = t; e && e !== document.documentElement;) {
      var n = r(e);
      if (null != n) return n;
      e = e.parentNode;
    }

    return null;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(56).isPlatform("Mac OS X"),
      i = {
    isCtrlKeyCommand: function isCtrlKeyCommand(t) {
      return !!t.ctrlKey && !t.altKey;
    },
    isOptionKeyCommand: function isOptionKeyCommand(t) {
      return r && t.altKey;
    },
    hasCommandModifier: function hasCommandModifier(t) {
      return r ? !!t.metaKey && !t.altKey : i.isCtrlKeyCommand(t);
    }
  };
  t.exports = i;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e) {
    var n = t.getSelection(),
        r = t.getCurrentContent(),
        i = n.getStartKey(),
        o = n.getStartOffset(),
        a = i,
        s = 0;

    if (e > o) {
      var u = r.getKeyBefore(i);
      null == u ? a = i : (a = u, s = r.getBlockForKey(u).getText().length);
    } else s = o - e;

    return n.merge({
      focusKey: a,
      focusOffset: s,
      isBackward: !0
    });
  };
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var r = n(50),
      i = n(20),
      o = n(58),
      a = i.OrderedMap;

  t.exports = function (t) {
    return t.first() instanceof r ? function (t) {
      var e = {},
          n = void 0;
      return a(t.withMutations(function (t) {
        t.forEach(function (r, i) {
          var a = r.getKey(),
              s = r.getNextSiblingKey(),
              u = r.getPrevSiblingKey(),
              c = r.getChildKeys(),
              l = r.getParentKey(),
              f = o();

          if (e[a] = f, s && (t.get(s) ? t.setIn([s, "prevSibling"], f) : t.setIn([a, "nextSibling"], null)), u && (t.get(u) ? t.setIn([u, "nextSibling"], f) : t.setIn([a, "prevSibling"], null)), l && t.get(l)) {
            var p = t.get(l).getChildKeys();
            t.setIn([l, "children"], p.set(p.indexOf(r.getKey()), f));
          } else t.setIn([a, "parent"], null), n && (t.setIn([n.getKey(), "nextSibling"], f), t.setIn([a, "prevSibling"], e[n.getKey()])), n = t.get(a);

          c.forEach(function (e) {
            t.get(e) ? t.setIn([e, "parent"], f) : t.setIn([a, "children"], r.getChildKeys().filter(function (t) {
              return t !== e;
            }));
          });
        });
      }).toArray().map(function (t) {
        return [e[t.getKey()], t.set("key", e[t.getKey()])];
      }));
    }(t) : function (t) {
      return a(t.toArray().map(function (t) {
        var e = o();
        return [e, t.set("key", e)];
      }));
    }(t);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(47),
      i = n(113),
      o = n(19);

  function a(t, e, n) {
    var a = e.getCharacterList(),
        s = n > 0 ? a.get(n - 1) : void 0,
        u = n < a.count() ? a.get(n) : void 0,
        c = s ? s.getEntity() : void 0,
        l = u ? u.getEntity() : void 0;

    if (l && l === c && "MUTABLE" !== t.__get(l).getMutability()) {
      for (var f, p = function (t, e, n) {
        var r;
        return i(t, function (t, e) {
          return t.getEntity() === e.getEntity();
        }, function (t) {
          return t.getEntity() === e;
        }, function (t, e) {
          t <= n && e >= n && (r = {
            start: t,
            end: e
          });
        }), "object" != _typeof(r) && o(!1), r;
      }(a, l, n), h = p.start, d = p.end; h < d;) {
        f = a.get(h), a = a.set(h, r.applyEntity(f, null)), h++;
      }

      return e.set("characterList", a);
    }

    return e;
  }

  t.exports = function (t, e) {
    var n = t.getBlockMap(),
        r = t.getEntityMap(),
        i = {},
        o = e.getStartKey(),
        s = e.getStartOffset(),
        u = n.get(o),
        c = a(r, u, s);
    c !== u && (i[o] = c);
    var l = e.getEndKey(),
        f = e.getEndOffset(),
        p = n.get(l);
    o === l && (p = c);
    var h = a(r, p, f);
    return h !== p && (i[l] = h), Object.keys(i).length ? t.merge({
      blockMap: n.merge(i),
      selectionAfter: e
    }) : t.set("selectionAfter", e);
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e, n) {
    if (n === t.count()) e.forEach(function (e) {
      t = t.push(e);
    });else if (0 === n) e.reverse().forEach(function (e) {
      t = t.unshift(e);
    });else {
      var r = t.slice(0, n),
          i = t.slice(n);
      t = r.concat(e, i).toList();
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(50);

  t.exports = function (t, e) {
    if (!(t instanceof r)) return null;
    var n = t.getNextSiblingKey();
    if (n) return n;
    var i = t.getParentKey();
    if (!i) return null;

    for (var o = e.get(i); o && !o.getNextSiblingKey();) {
      var a = o.getParentKey();
      o = a ? e.get(a) : null;
    }

    return o ? o.getNextSiblingKey() : null;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(20),
      i = n(42),
      o = n(113),
      a = r.List,
      s = r.Repeat,
      u = r.Record,
      c = i.thatReturnsTrue,
      l = u({
    start: null,
    end: null
  }),
      f = u({
    start: null,
    end: null,
    decoratorKey: null,
    leaves: null
  }),
      p = {
    generate: function generate(t, e, n) {
      var r = e.getLength();
      if (!r) return a.of(new f({
        start: 0,
        end: 0,
        decoratorKey: null,
        leaves: a.of(new l({
          start: 0,
          end: 0
        }))
      }));
      var i = [],
          u = n ? n.getDecorations(e, t) : a(s(null, r)),
          p = e.getCharacterList();
      return o(u, h, c, function (t, e) {
        var n, r, s, d;
        i.push(new f({
          start: t,
          end: e,
          decoratorKey: u.get(t),
          leaves: (n = p.slice(t, e).toList(), r = t, s = [], d = n.map(function (t) {
            return t.getStyle();
          }).toList(), o(d, h, c, function (t, e) {
            s.push(new l({
              start: t + r,
              end: e + r
            }));
          }), a(s))
        }));
      }), a(i);
    },
    getFingerprint: function getFingerprint(t) {
      return t.map(function (t) {
        var e = t.get("decoratorKey");
        return (null !== e ? e + "." + (t.get("end") - t.get("start")) : "") + "." + t.get("leaves").size;
      }).join("-");
    }
  };

  function h(t, e) {
    return t === e;
  }

  t.exports = p;
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var o = function (t) {
    function e() {
      return r(this, e), i(this, t.apply(this, arguments));
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
    }(e, t), e.prototype.getType = function () {
      return this.get("type");
    }, e.prototype.getMutability = function () {
      return this.get("mutability");
    }, e.prototype.getData = function () {
      return this.get("data");
    }, e;
  }((0, n(20).Record)({
    type: "TOKEN",
    mutability: "IMMUTABLE",
    data: Object
  }));

  t.exports = o;
}, function (t, e, n) {
  "use strict";

  var r = n(185),
      i = n(19),
      o = "֐־׀׃׆׈-׏א-ת׫-ׯװ-ײ׳-״׵-׿߀-߉ߊ-ߪߴ-ߵߺ߻-߿ࠀ-ࠕࠚࠤࠨ࠮-࠯࠰-࠾࠿ࡀ-ࡘ࡜-࡝࡞࡟-࢟‏יִײַ-ﬨשׁ-זּ﬷טּ-לּ﬽מּ﬿נּ-סּ﭂ףּ-פּ﭅צּ-ﭏ",
      a = "؈؋؍؛؜؝؞-؟ؠ-ؿـف-ي٭ٮ-ٯٱ-ۓ۔ەۥ-ۦۮ-ۯۺ-ۼ۽-۾ۿ܀-܍܎܏ܐܒ-ܯ݋-݌ݍ-ޥޱ޲-޿ࢠ-ࢲࢳ-ࣣﭐ-ﮱ﮲-﯁﯂-﯒ﯓ-ﴽ﵀-﵏ﵐ-ﶏ﶐-﶑ﶒ-ﷇ﷈-﷏ﷰ-ﷻ﷼﷾-﷿ﹰ-ﹴ﹵ﹶ-ﻼ﻽-﻾",
      s = new RegExp("[A-Za-zªµºÀ-ÖØ-öø-ƺƻƼ-ƿǀ-ǃǄ-ʓʔʕ-ʯʰ-ʸʻ-ˁː-ˑˠ-ˤˮͰ-ͳͶ-ͷͺͻ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҂Ҋ-ԯԱ-Ֆՙ՚-՟ա-և։ःऄ-हऻऽा-ीॉ-ौॎ-ॏॐक़-ॡ।-॥०-९॰ॱॲ-ঀং-ঃঅ-ঌএ-ঐও-নপ-রলশ-হঽা-ীে-ৈো-ৌৎৗড়-ঢ়য়-ৡ০-৯ৰ-ৱ৴-৹৺ਃਅ-ਊਏ-ਐਓ-ਨਪ-ਰਲ-ਲ਼ਵ-ਸ਼ਸ-ਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલ-ળવ-હઽા-ીૉો-ૌૐૠ-ૡ૦-૯૰ଂ-ଃଅ-ଌଏ-ଐଓ-ନପ-ରଲ-ଳଵ-ହଽାୀେ-ୈୋ-ୌୗଡ଼-ଢ଼ୟ-ୡ୦-୯୰ୱ୲-୷ஃஅ-ஊஎ-ஐஒ-கங-சஜஞ-டண-தந-பம-ஹா-ிு-ூெ-ைொ-ௌௐௗ௦-௯௰-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౙౠ-ౡ౦-౯౿ಂ-ಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽಾಿೀ-ೄೆೇ-ೈೊ-ೋೕ-ೖೞೠ-ೡ೦-೯ೱ-ೲം-ഃഅ-ഌഎ-ഐഒ-ഺഽാ-ീെ-ൈൊ-ൌൎൗൠ-ൡ൦-൯൰-൵൹ൺ-ൿං-ඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-ෳ෴ก-ะา-ำเ-ๅๆ๏๐-๙๚-๛ກ-ຂຄງ-ຈຊຍດ-ທນ-ຟມ-ຣລວສ-ຫອ-ະາ-ຳຽເ-ໄໆ໐-໙ໜ-ໟༀ༁-༃༄-༒༓༔༕-༗༚-༟༠-༩༪-༳༴༶༸༾-༿ཀ-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿏࿐-࿔࿕-࿘࿙-࿚က-ဪါ-ာေးျ-ြဿ၀-၉၊-၏ၐ-ၕၖ-ၗၚ-ၝၡၢ-ၤၥ-ၦၧ-ၭၮ-ၰၵ-ႁႃ-ႄႇ-ႌႎႏ႐-႙ႚ-ႜ႞-႟Ⴀ-ჅჇჍა-ჺ჻ჼჽ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፨፩-፼ᎀ-ᎏᎠ-Ᏼᐁ-ᙬ᙭-᙮ᙯ-ᙿᚁ-ᚚᚠ-ᛪ᛫-᛭ᛮ-ᛰᛱ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵-᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះ-ៈ។-៖ៗ៘-៚ៜ០-៩᠐-᠙ᠠ-ᡂᡃᡄ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰ-ᤱᤳ-ᤸ᥆-᥏ᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧀᧁ-ᧇᧈ-ᧉ᧐-᧙᧚ᨀ-ᨖᨙ-ᨚ᨞-᨟ᨠ-ᩔᩕᩗᩡᩣ-ᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪦ᪧ᪨-᪭ᬄᬅ-ᬳᬵᬻᬽ-ᭁᭃ-᭄ᭅ-ᭋ᭐-᭙᭚-᭠᭡-᭪᭴-᭼ᮂᮃ-ᮠᮡᮦ-ᮧ᮪ᮮ-ᮯ᮰-᮹ᮺ-ᯥᯧᯪ-ᯬᯮ᯲-᯳᯼-᯿ᰀ-ᰣᰤ-ᰫᰴ-ᰵ᰻-᰿᱀-᱉ᱍ-ᱏ᱐-᱙ᱚ-ᱷᱸ-ᱽ᱾-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳱᳲ-ᳳᳵ-ᳶᴀ-ᴫᴬ-ᵪᵫ-ᵷᵸᵹ-ᶚᶛ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℴℵ-ℸℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↂↃ-ↄↅ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⱻⱼ-ⱽⱾ-ⳤⳫ-ⳮⳲ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々〆〇〡-〩〮-〯〱-〵〸-〺〻〼ぁ-ゖゝ-ゞゟァ-ヺー-ヾヿㄅ-ㄭㄱ-ㆎ㆐-㆑㆒-㆕㆖-㆟ㆠ-ㆺㇰ-ㇿ㈀-㈜㈠-㈩㈪-㉇㉈-㉏㉠-㉻㉿㊀-㊉㊊-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿌ꀀ-ꀔꀕꀖ-ꒌꓐ-ꓷꓸ-ꓽ꓾-꓿ꔀ-ꘋꘌꘐ-ꘟ꘠-꘩ꘪ-ꘫꙀ-ꙭꙮꚀ-ꚛꚜ-ꚝꚠ-ꛥꛦ-ꛯ꛲-꛷Ꜣ-ꝯꝰꝱ-ꞇ꞉-꞊Ꞌ-ꞎꞐ-ꞭꞰ-Ʇꟷꟸ-ꟹꟺꟻ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꠣ-ꠤꠧ꠰-꠵꠶-꠷ꡀ-ꡳꢀ-ꢁꢂ-ꢳꢴ-ꣃ꣎-꣏꣐-꣙ꣲ-ꣷ꣸-꣺ꣻ꤀-꤉ꤊ-ꤥ꤮-꤯ꤰ-ꥆꥒ-꥓꥟ꥠ-ꥼꦃꦄ-ꦲꦴ-ꦵꦺ-ꦻꦽ-꧀꧁-꧍ꧏ꧐-꧙꧞-꧟ꧠ-ꧤꧦꧧ-ꧯ꧰-꧹ꧺ-ꧾꨀ-ꨨꨯ-ꨰꨳ-ꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-꩟ꩠ-ꩯꩰꩱ-ꩶ꩷-꩹ꩺꩻꩽꩾ-ꪯꪱꪵ-ꪶꪹ-ꪽꫀꫂꫛ-ꫜꫝ꫞-꫟ꫠ-ꫪꫫꫮ-ꫯ꫰-꫱ꫲꫳ-ꫴꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚ꭛ꭜ-ꭟꭤ-ꭥꯀ-ꯢꯣ-ꯤꯦ-ꯧꯩ-ꯪ꯫꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-豈-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ｯｰｱ-ﾝﾞ-ﾟﾠ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ" + o + a + "]"),
      u = new RegExp("[" + o + a + "]");

  function c(t) {
    var e = s.exec(t);
    return null == e ? null : e[0];
  }

  function l(t) {
    var e = c(t);
    return null == e ? r.NEUTRAL : u.exec(e) ? r.RTL : r.LTR;
  }

  function f(t, e) {
    if (e = e || r.NEUTRAL, !t.length) return e;
    var n = l(t);
    return n === r.NEUTRAL ? e : n;
  }

  function p(t, e) {
    return e || (e = r.getGlobalDir()), r.isStrong(e) || i(!1), f(t, e);
  }

  var h = {
    firstStrongChar: c,
    firstStrongCharDir: l,
    resolveBlockDir: f,
    getDirection: p,
    isDirectionLTR: function isDirectionLTR(t, e) {
      return p(t, e) === r.LTR;
    },
    isDirectionRTL: function isDirectionRTL(t, e) {
      return p(t, e) === r.RTL;
    }
  };
  t.exports = h;
}, function (t, e, n) {
  "use strict";

  t.exports = {
    BOLD: {
      fontWeight: "bold"
    },
    CODE: {
      fontFamily: "monospace",
      wordWrap: "break-word"
    },
    ITALIC: {
      fontStyle: "italic"
    },
    STRIKETHROUGH: {
      textDecoration: "line-through"
    },
    UNDERLINE: {
      textDecoration: "underline"
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    var e = t.getSelection(),
        n = e.getAnchorKey(),
        r = t.getBlockTree(n),
        i = e.getStartOffset(),
        o = !1;
    return r.some(function (t) {
      return i === t.get("start") ? (o = !0, !0) : i < t.get("end") && t.get("leaves").some(function (t) {
        var e = t.get("start");
        return i === e && (o = !0, !0);
      });
    }), o;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  };

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var a = n(608),
      s = n(143),
      u = n(3),
      c = n(38),
      l = n(275),
      f = n(190),
      p = n(270),
      h = n(185),
      d = n(99),
      g = n(623),
      y = n(191),
      v = n(627),
      m = n(19),
      _ = n(54),
      b = function b(t, e) {
    return t.getAnchorKey() === e || t.getFocusKey() === e;
  },
      w = function (t) {
    function e() {
      return i(this, e), o(this, t.apply(this, arguments));
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
    }(e, t), e.prototype.shouldComponentUpdate = function (t) {
      return this.props.block !== t.block || this.props.tree !== t.tree || this.props.direction !== t.direction || b(t.selection, t.block.getKey()) && t.forceSelection;
    }, e.prototype.componentDidMount = function () {
      var t = this.props.selection,
          e = t.getEndKey();

      if (t.getHasFocus() && e === this.props.block.getKey()) {
        var n = c.findDOMNode(this),
            r = f.getScrollParent(n),
            i = y(r),
            o = void 0;

        if (r === window) {
          var a = g(n);
          (o = a.y + a.height - v().height) > 0 && window.scrollTo(i.x, i.y + o + 10);
        } else n instanceof HTMLElement || m(!1), (o = n.offsetHeight + n.offsetTop - (r.offsetHeight + i.y)) > 0 && l.setTop(r, l.getTop(r) + o + 10);
      }
    }, e.prototype._renderChildren = function () {
      var t = this,
          e = this.props.block,
          n = e.getKey(),
          i = e.getText(),
          o = this.props.tree.size - 1,
          c = b(this.props.selection, n);
      return this.props.tree.map(function (l, f) {
        var d = l.get("leaves"),
            g = d.size - 1,
            y = d.map(function (r, l) {
          var p = s.encode(n, f, l),
              h = r.get("start"),
              d = r.get("end");
          return u.createElement(a, {
            key: p,
            offsetKey: p,
            block: e,
            start: h,
            selection: c ? t.props.selection : null,
            forceSelection: t.props.forceSelection,
            text: i.slice(h, d),
            styleSet: e.getInlineStyleAt(h),
            customStyleMap: t.props.customStyleMap,
            customStyleFn: t.props.customStyleFn,
            isLast: f === o && l === g
          });
        }).toArray(),
            v = l.get("decoratorKey");
        if (null == v) return y;
        if (!t.props.decorator) return y;

        var m = _(t.props.decorator),
            b = m.getComponentForKey(v);

        if (!b) return y;
        var w = m.getPropsForKey(v),
            S = s.encode(n, f, 0),
            x = i.slice(d.first().get("start"), d.last().get("end")),
            E = h.getHTMLDirIfDifferent(p.getDirection(x), t.props.direction);
        return u.createElement(b, r({}, w, {
          contentState: t.props.contentState,
          decoratedText: x,
          dir: E,
          key: S,
          entityKey: e.getEntityAt(l.get("start")),
          offsetKey: S
        }), y);
      }).toArray();
    }, e.prototype.render = function () {
      var t = this.props,
          e = t.direction,
          n = t.offsetKey,
          r = d({
        "public/DraftStyleDefault/block": !0,
        "public/DraftStyleDefault/ltr": "LTR" === e,
        "public/DraftStyleDefault/rtl": "RTL" === e
      });
      return u.createElement("div", {
        "data-offset-key": n,
        className: r
      }, this._renderChildren());
    }, e;
  }(u.Component);

  t.exports = w;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    if (void 0 === (t = t || ("undefined" != typeof document ? document : void 0))) return null;

    try {
      return t.activeElement || t.body;
    } catch (e) {
      return t.body;
    }
  };
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    return !!e && (t === e.documentElement || t === e.body);
  }

  var i = {
    getTop: function getTop(t) {
      var e = t.ownerDocument;
      return r(t, e) ? e.body.scrollTop || e.documentElement.scrollTop : t.scrollTop;
    },
    setTop: function setTop(t, e) {
      var n = t.ownerDocument;
      r(t, n) ? n.body.scrollTop = n.documentElement.scrollTop = e : t.scrollTop = e;
    },
    getLeft: function getLeft(t) {
      var e = t.ownerDocument;
      return r(t, e) ? e.body.scrollLeft || e.documentElement.scrollLeft : t.scrollLeft;
    },
    setLeft: function setLeft(t, e) {
      var n = t.ownerDocument;
      r(t, n) ? n.body.scrollLeft = n.documentElement.scrollLeft = e : t.scrollLeft = e;
    }
  };
  t.exports = i;
}, function (t, e, n) {
  "use strict";

  var r = n(630),
      i = n(631),
      o = n(42),
      a = new RegExp("\r\n", "g"),
      s = {
    "text/rtf": 1,
    "text/html": 1
  };

  function u(t) {
    if ("file" == t.kind) return t.getAsFile();
  }

  var c = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.data = e, this.types = e.types ? i(e.types) : [];
    }

    return t.prototype.isRichText = function () {
      return !(!this.getHTML() || !this.getText()) || !this.isImage() && this.types.some(function (t) {
        return s[t];
      });
    }, t.prototype.getText = function () {
      var t;
      return this.data.getData && (this.types.length ? -1 != this.types.indexOf("text/plain") && (t = this.data.getData("text/plain")) : t = this.data.getData("Text")), t ? t.replace(a, "\n") : null;
    }, t.prototype.getHTML = function () {
      if (this.data.getData) {
        if (!this.types.length) return this.data.getData("Text");
        if (-1 != this.types.indexOf("text/html")) return this.data.getData("text/html");
      }
    }, t.prototype.isLink = function () {
      return this.types.some(function (t) {
        return -1 != t.indexOf("Url") || -1 != t.indexOf("text/uri-list") || t.indexOf("text/x-moz-url");
      });
    }, t.prototype.getLink = function () {
      return this.data.getData ? -1 != this.types.indexOf("text/x-moz-url") ? this.data.getData("text/x-moz-url").split("\n")[0] : -1 != this.types.indexOf("text/uri-list") ? this.data.getData("text/uri-list") : this.data.getData("url") : null;
    }, t.prototype.isImage = function () {
      if (this.types.some(function (t) {
        return -1 != t.indexOf("application/x-moz-file");
      })) return !0;

      for (var t = this.getFiles(), e = 0; e < t.length; e++) {
        var n = t[e].type;
        if (!r.isImage(n)) return !1;
      }

      return !0;
    }, t.prototype.getCount = function () {
      return this.data.hasOwnProperty("items") ? this.data.items.length : this.data.hasOwnProperty("mozItemCount") ? this.data.mozItemCount : this.data.files ? this.data.files.length : null;
    }, t.prototype.getFiles = function () {
      return this.data.items ? Array.prototype.slice.call(this.data.items).map(u).filter(o.thatReturnsArgument) : this.data.files ? Array.prototype.slice.call(this.data.files) : [];
    }, t.prototype.hasFiles = function () {
      return this.getFiles().length > 0;
    }, t;
  }();

  t.exports = c;
}, function (t, e, n) {
  "use strict";

  t.exports = function t(e) {
    if (e instanceof Element) {
      var n = e.getAttribute("data-offset-key");
      if (n) return n;

      for (var r = 0; r < e.childNodes.length; r++) {
        var i = t(e.childNodes[r]);
        if (i) return i;
      }
    }

    return null;
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(19),
        i = /\.textClipping$/,
        o = {
      "text/plain": !0,
      "text/html": !0,
      "text/rtf": !0
    };

    t.exports = function (t, n) {
      var a = 0,
          s = [];
      t.forEach(function (u) {
        !function (t, n) {
          if (!e.FileReader || t.type && !(t.type in o)) n("");else {
            if ("" === t.type) {
              var a = "";
              return i.test(t.name) && (a = t.name.replace(i, "")), void n(a);
            }

            var s = new FileReader();
            s.onload = function () {
              var t = s.result;
              "string" != typeof t && r(!1), n(t);
            }, s.onerror = function () {
              n("");
            }, s.readAsText(t);
          }
        }(u, function (e) {
          a++, e && s.push(e.slice(0, 5e3)), a == t.length && n(s.join("\r"));
        });
      });
    };
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  var r = n(143),
      i = n(54);

  t.exports = function (t, e, n, o, a) {
    var s = i(t.getSelection()),
        u = r.decode(e),
        c = u.blockKey,
        l = t.getBlockTree(c).getIn([u.decoratorKey, "leaves", u.leafKey]),
        f = r.decode(o),
        p = f.blockKey,
        h = t.getBlockTree(p).getIn([f.decoratorKey, "leaves", f.leafKey]),
        d = l.get("start"),
        g = h.get("start"),
        y = l ? d + n : null,
        v = h ? g + a : null;
    if (s.getAnchorKey() === c && s.getAnchorOffset() === y && s.getFocusKey() === p && s.getFocusOffset() === v) return s;
    var m = !1;

    if (c === p) {
      var _ = l.get("end"),
          b = h.get("end");

      m = g === d && b === _ ? a < n : g < d;
    } else m = t.getCurrentContent().getBlockMap().keySeq().skipUntil(function (t) {
      return t === c || t === p;
    }).first() === p;

    return s.merge({
      anchorKey: c,
      anchorOffset: y,
      focusKey: p,
      focusOffset: v,
      isBackward: m
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(141);

  t.exports = function (t) {
    var e = t.getSelection();
    return e.isCollapsed() ? null : r(t.getCurrentContent(), e);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(56),
      i = n(19),
      o = r.isBrowser("Chrome") ? function (t) {
    for (var e = t.cloneRange(), n = [], r = t.endContainer; null != r; r = r.parentNode) {
      var o = r === t.commonAncestorContainer;
      o ? e.setStart(t.startContainer, t.startOffset) : e.setStart(e.endContainer, 0);
      var a,
          s = Array.from(e.getClientRects());
      if (n.push(s), o) return n.reverse(), (a = []).concat.apply(a, n);
      e.setEndBefore(r);
    }

    i(!1);
  } : function (t) {
    return Array.from(t.getClientRects());
  };
  t.exports = o;
}, function (t, e, n) {
  "use strict";

  var r = n(192),
      i = n(277),
      o = n(279),
      a = n(19),
      s = n(54);

  function u(t, e, n) {
    var o = e,
        u = r(o);

    if (null != u || t && (t === o || t.firstChild === o) || a(!1), t === o && ((o = o.firstChild) instanceof Element && "true" === o.getAttribute("data-contents") || a(!1), n > 0 && (n = o.childNodes.length)), 0 === n) {
      var l = null;
      if (null != u) l = u;else {
        var f = function (t) {
          for (; t.firstChild && (t.firstChild instanceof Element && "true" === t.firstChild.getAttribute("data-blocks") || i(t.firstChild));) {
            t = t.firstChild;
          }

          return t;
        }(o);

        l = s(i(f));
      }
      return {
        key: l,
        offset: 0
      };
    }

    var p = o.childNodes[n - 1],
        h = null,
        d = null;

    if (i(p)) {
      var g = function (t) {
        for (; t.lastChild && (t.lastChild instanceof Element && "true" === t.lastChild.getAttribute("data-blocks") || i(t.lastChild));) {
          t = t.lastChild;
        }

        return t;
      }(p);

      h = s(i(g)), d = c(g);
    } else h = s(u), d = c(p);

    return {
      key: h,
      offset: d
    };
  }

  function c(t) {
    var e = t.textContent;
    return "\n" === e ? 0 : e.length;
  }

  t.exports = function (t, e, n, i, a, c) {
    var l = n.nodeType === Node.TEXT_NODE,
        f = a.nodeType === Node.TEXT_NODE;
    if (l && f) return {
      selectionState: o(t, s(r(n)), i, s(r(a)), c),
      needsRecovery: !1
    };
    var p = null,
        h = null,
        d = !0;
    return l ? (p = {
      key: s(r(n)),
      offset: i
    }, h = u(e, a, c)) : f ? (h = {
      key: s(r(a)),
      offset: c
    }, p = u(e, n, i)) : (p = u(e, n, i), h = u(e, a, c), n === a && i === c && (d = !!n.firstChild && "BR" !== n.firstChild.nodeName)), {
      selectionState: o(t, p.key, p.offset, h.key, h.offset),
      needsRecovery: d
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = "\\s|(?![_])" + n(649).getPunctuation(),
      i = new RegExp("^(?:" + r + ")*(?:['‘’]|(?!" + r + ").)*(?:(?!" + r + ").)"),
      o = new RegExp("(?:(?!" + r + ").)(?:['‘’]|(?!" + r + ").)*(?:" + r + ")*$");

  function a(t, e) {
    var n = e ? o.exec(t) : i.exec(t);
    return n ? n[0] : t;
  }

  var s = {
    getBackward: function getBackward(t) {
      return a(t, !0);
    },
    getForward: function getForward(t) {
      return a(t, !1);
    }
  };
  t.exports = s;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e) {
    var n,
        r = t.getSelection(),
        i = r.getStartKey(),
        o = r.getStartOffset(),
        a = t.getCurrentContent(),
        s = i;
    return e > a.getBlockForKey(i).getText().length - o ? (s = a.getKeyAfter(i), n = 0) : n = o + e, r.merge({
      focusKey: s,
      focusOffset: n
    });
  };
}, function (t, e, n) {
  "use strict";

  var r,
      i = o || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      o = n(49);

  function a(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  var s = n(47),
      u = n(82),
      c = n(50),
      l = n(186),
      f = n(142),
      p = n(68),
      h = n(20),
      d = n(20).Set,
      g = n(660),
      y = n(99),
      v = n(58),
      m = n(286),
      _ = n(19),
      b = n(184),
      w = p.draft_tree_data_support,
      S = h.List,
      x = h.OrderedSet,
      E = new RegExp("\r", "g"),
      k = new RegExp("\n", "g"),
      C = new RegExp("&nbsp;", "g"),
      O = new RegExp("&#13;?", "g"),
      T = new RegExp("&#8203;?", "g"),
      D = ["bold", "bolder", "500", "600", "700", "800", "900"],
      M = ["light", "lighter", "100", "200", "300", "400"],
      K = {
    b: "BOLD",
    code: "CODE",
    del: "STRIKETHROUGH",
    em: "ITALIC",
    i: "ITALIC",
    s: "STRIKETHROUGH",
    strike: "STRIKETHROUGH",
    strong: "BOLD",
    u: "UNDERLINE"
  },
      A = (a(r = {}, y("public/DraftStyleDefault/depth0"), 0), a(r, y("public/DraftStyleDefault/depth1"), 1), a(r, y("public/DraftStyleDefault/depth2"), 2), a(r, y("public/DraftStyleDefault/depth3"), 3), a(r, y("public/DraftStyleDefault/depth4"), 4), r),
      I = ["className", "href", "rel", "target", "title"],
      B = ["alt", "className", "height", "src", "width"],
      L = void 0,
      R = {
    text: "",
    inlines: [],
    entities: [],
    blocks: []
  },
      N = {
    children: S(),
    depth: 0,
    key: "",
    type: ""
  },
      F = function F(t, e) {
    return "li" === t ? "ol" === e ? "ordered-list-item" : "unordered-list-item" : null;
  },
      z = function z(t, e, n) {
    var r = n.filter(function (e) {
      return e.element === t || e.wrapper === t || e.aliasedElements && e.aliasedElements.some(function (e) {
        return e === t;
      });
    }).keySeq().toSet().toArray().sort();

    switch (r.length) {
      case 0:
        return "unstyled";

      case 1:
        return r[0];

      default:
        return function (t, e, n) {
          for (var r = 0; r < n.length; r++) {
            var i = n[r](t, e);
            if (i) return i;
          }

          return null;
        }(t, e, [F]) || "unstyled";
    }
  },
      P = function P(t, e, n) {
    var r = t.text.slice(-1),
        i = e.text.slice(0, 1);

    if ("\r" !== r || "\r" !== i || n || (t.text = t.text.slice(0, -1), t.inlines.pop(), t.entities.pop(), t.blocks.pop()), "\r" === r) {
      if (" " === e.text || "\n" === e.text) return t;
      " " !== i && "\n" !== i || (e.text = e.text.slice(1), e.inlines.shift(), e.entities.shift());
    }

    return {
      text: t.text + e.text,
      inlines: t.inlines.concat(e.inlines),
      entities: t.entities.concat(e.entities),
      blocks: t.blocks.concat(e.blocks)
    };
  },
      j = function j(t) {
    t instanceof HTMLAnchorElement || _(!1);
    var e = t.protocol;
    return "http:" === e || "https:" === e || "mailto:" === e;
  },
      U = function U(t) {
    var e = new Array(1);
    return t && (e[0] = t), i({}, R, {
      text: " ",
      inlines: [x()],
      entities: e
    });
  },
      q = function q() {
    return i({}, R, {
      text: "\n",
      inlines: [x()],
      entities: new Array(1)
    });
  },
      H = function H() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return i({}, N, t);
  },
      W = function W(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
    return {
      text: "\r",
      inlines: [x()],
      entities: new Array(1),
      blocks: [H({
        parent: n,
        key: v(),
        type: t,
        depth: Math.max(0, Math.min(4, e))
      })]
    };
  },
      V = function V(t, e, n, r) {
    t = t.trim().replace(E, "").replace(C, " ").replace(O, "").replace(T, "");

    var o = function (t) {
      var e = t.get("unstyled").element,
          n = d([]);
      return t.forEach(function (t) {
        t.aliasedElements && t.aliasedElements.forEach(function (t) {
          n = n.add(t);
        }), n = n.add(t.element);
      }), n.filter(function (t) {
        return t && t !== e;
      }).toArray().sort();
    }(n),
        a = e(t);

    if (!a) return null;
    L = null;

    var s = function (t, e) {
      return e.some(function (e) {
        return -1 !== t.indexOf("<" + e);
      });
    }(t, o) ? o : ["div"],
        u = function t(e, n, r, o, a, s, u, c, l, p) {
      var h = L,
          d = n.nodeName.toLowerCase(),
          y = e,
          v = "unstyled",
          m = !1,
          _ = a && z(a, o, c),
          b = i({}, R),
          S = void 0;

      if ("#text" === d) {
        var x = n.textContent,
            E = x.trim();

        if (o && "" === E && n.parentElement) {
          var C = n.parentElement.nodeName.toLowerCase();
          if ("ol" === C || "ul" === C) return {
            chunk: i({}, R),
            entityMap: e
          };
        }

        return "" === E && "pre" !== a ? {
          chunk: U(l),
          entityMap: e
        } : ("pre" !== a && (x = x.replace(k, " ")), L = d, {
          chunk: {
            text: x,
            inlines: Array(x.length).fill(r),
            entities: Array(x.length).fill(l),
            blocks: []
          },
          entityMap: e
        });
      }

      if (L = d, "br" === d) return "br" !== h || a && "unstyled" !== _ ? {
        chunk: q(),
        entityMap: e
      } : {
        chunk: W("unstyled", u, p),
        entityMap: e
      };

      if ("img" === d && n instanceof HTMLImageElement && n.attributes.getNamedItem("src") && n.attributes.getNamedItem("src").value) {
        var O = n,
            T = {};
        B.forEach(function (t) {
          var e = O.getAttribute(t);
          e && (T[t] = e);
        }), n.textContent = "📷", l = f.__create("IMAGE", "MUTABLE", T || {});
      }

      r = function (t, e, n) {
        var r = K[t];
        if (r) n = n.add(r).toOrderedSet();else if (e instanceof HTMLElement) {
          var i = e;
          n = n.withMutations(function (t) {
            var e = i.style.fontWeight,
                n = i.style.fontStyle,
                r = i.style.textDecoration;
            D.indexOf(e) >= 0 ? t.add("BOLD") : M.indexOf(e) >= 0 && t.remove("BOLD"), "italic" === n ? t.add("ITALIC") : "normal" === n && t.remove("ITALIC"), "underline" === r && t.add("UNDERLINE"), "line-through" === r && t.add("STRIKETHROUGH"), "none" === r && (t.remove("UNDERLINE"), t.remove("STRIKETHROUGH"));
          }).toOrderedSet();
        }
        return n;
      }(d, n, r), "ul" !== d && "ol" !== d || (o && (u += 1), o = d), !w && "li" === d && n instanceof HTMLElement && (u = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Object.keys(A).some(function (n) {
          t.classList.contains(n) && (e = A[n]);
        }), e;
      }(n, u));
      var N = z(d, o, c),
          F = o && "li" === a && "li" === d,
          H = (!a || w) && -1 !== s.indexOf(d);
      (F || H) && (S = (b = W(N, u, p)).blocks[0].key, a = d, m = !w), F && (v = "ul" === o ? "unordered-list-item" : "ordered-list-item");
      var V = n.firstChild;
      null != V && (d = V.nodeName.toLowerCase());

      for (var G = null; V;) {
        V instanceof HTMLAnchorElement && V.href && j(V) ? function () {
          var t = V,
              e = {};
          I.forEach(function (n) {
            var r = t.getAttribute(n);
            r && (e[n] = r);
          }), e.url = new g(t.href).toString(), G = f.__create("LINK", "MUTABLE", e || {});
        }() : G = void 0;
        var J = t(y, V, r, o, a, s, u, c, G || l, w ? S : null),
            X = J.chunk;
        y = J.entityMap, b = P(b, X, w);
        var Y = V.nextSibling;
        !p && Y && s.indexOf(d) >= 0 && a && (b = P(b, q())), Y && (d = Y.nodeName.toLowerCase()), V = Y;
      }

      return m && (b = P(b, W(v, u, p))), {
        chunk: b,
        entityMap: y
      };
    }(r, a, x(), "ul", null, s, -1, n),
        c = u.chunk,
        l = u.entityMap;

    return 0 === c.text.indexOf("\r") && (c = {
      text: c.text.slice(1),
      inlines: c.inlines.slice(1),
      entities: c.entities.slice(1),
      blocks: c.blocks
    }), "\r" === c.text.slice(-1) && (c.text = c.text.slice(0, -1), c.inlines = c.inlines.slice(0, -1), c.entities = c.entities.slice(0, -1), c.blocks.pop()), 0 === c.blocks.length && c.blocks.push(i({}, R, {
      type: "unstyled",
      depth: 0
    })), c.text.split("\r").length === c.blocks.length + 1 && c.blocks.unshift({
      type: "unstyled",
      depth: 0
    }), {
      chunk: c,
      entityMap: l
    };
  },
      G = function G(t) {
    if (!t || !t.text || !Array.isArray(t.blocks)) return null;
    var e = 0,
        n = t.blocks,
        r = t.inlines,
        i = t.entities,
        o = w ? c : u;
    return t.text.split("\r").reduce(function (t, a, u) {
      a = b(a);
      var l = n[u],
          f = e + a.length,
          p = r.slice(e, f),
          h = i.slice(e, f),
          d = S(p.map(function (t, e) {
        var n = {
          style: t,
          entity: null
        };
        return h[e] && (n.entity = h[e]), s.create(n);
      }));
      e = f + 1;

      var g = l.depth,
          y = l.type,
          m = l.parent,
          _ = l.key || v(),
          w = null;

      if (m) {
        var x = t.cacheRef[m],
            E = t.contentBlocks[x];

        if (E.getChildKeys().isEmpty() && E.getText()) {
          var k = E.getCharacterList(),
              C = E.getText();
          w = v();
          var O = new c({
            key: w,
            text: C,
            characterList: k,
            parent: m,
            nextSibling: _
          });
          t.contentBlocks.push(O), E = E.withMutations(function (t) {
            t.set("characterList", S()).set("text", "").set("children", E.children.push(O.getKey()));
          });
        }

        t.contentBlocks[x] = E.set("children", E.children.push(_));
      }

      var T = new o({
        key: _,
        parent: m,
        type: y,
        depth: g,
        text: a,
        characterList: d,
        prevSibling: w || (0 === u || n[u - 1].parent !== m ? null : n[u - 1].key),
        nextSibling: u === n.length - 1 || n[u + 1].parent !== m ? null : n[u + 1].key
      });
      return t.contentBlocks.push(T), t.cacheRef[T.key] = u, t;
    }, {
      cacheRef: {},
      contentBlocks: []
    }).contentBlocks;
  };

  t.exports = function (t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l,
        r = V(t, e, n, f);
    if (null == r) return null;
    var i = r.chunk,
        o = r.entityMap,
        a = G(i);
    return {
      contentBlocks: a,
      entityMap: o
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = n(56),
      i = n(19),
      o = r.isBrowser("IE <= 9");

  t.exports = function (t) {
    var e,
        n = null;
    return !o && document.implementation && document.implementation.createHTMLDocument && ((e = document.implementation.createHTMLDocument("foo")).documentElement || i(!1), e.documentElement.innerHTML = t, n = e.getElementsByTagName("body")[0]), n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(46),
      i = n(22),
      o = (n(98), n(661)),
      a = n(54),
      s = {
    currentBlockContainsLink: function currentBlockContainsLink(t) {
      var e = t.getSelection(),
          n = t.getCurrentContent(),
          r = n.getEntityMap();
      return n.getBlockForKey(e.getAnchorKey()).getCharacterList().slice(e.getStartOffset(), e.getEndOffset()).some(function (t) {
        var e = t.getEntity();
        return !!e && "LINK" === r.__get(e).getType();
      });
    },
    getCurrentBlockType: function getCurrentBlockType(t) {
      var e = t.getSelection();
      return t.getCurrentContent().getBlockForKey(e.getStartKey()).getType();
    },
    getDataObjectForLinkURL: function getDataObjectForLinkURL(t) {
      return {
        url: t.toString()
      };
    },
    handleKeyCommand: function handleKeyCommand(t, e) {
      switch (e) {
        case "bold":
          return s.toggleInlineStyle(t, "BOLD");

        case "italic":
          return s.toggleInlineStyle(t, "ITALIC");

        case "underline":
          return s.toggleInlineStyle(t, "UNDERLINE");

        case "code":
          return s.toggleCode(t);

        case "backspace":
        case "backspace-word":
        case "backspace-to-start-of-line":
          return s.onBackspace(t);

        case "delete":
        case "delete-word":
        case "delete-to-end-of-block":
          return s.onDelete(t);

        default:
          return null;
      }
    },
    insertSoftNewline: function insertSoftNewline(t) {
      var e = r.insertText(t.getCurrentContent(), t.getSelection(), "\n", t.getCurrentInlineStyle(), null),
          n = i.push(t, e, "insert-characters");
      return i.forceSelection(n, e.getSelectionAfter());
    },
    onBackspace: function onBackspace(t) {
      var e = t.getSelection();
      if (!e.isCollapsed() || e.getAnchorOffset() || e.getFocusOffset()) return null;
      var n = t.getCurrentContent(),
          r = e.getStartKey(),
          o = n.getBlockBefore(r);

      if (o && "atomic" === o.getType()) {
        var a = n.getBlockMap()["delete"](o.getKey()),
            u = n.merge({
          blockMap: a,
          selectionAfter: e
        });
        if (u !== n) return i.push(t, u, "remove-range");
      }

      var c = s.tryToRemoveBlockStyle(t);
      return c ? i.push(t, c, "change-block-type") : null;
    },
    onDelete: function onDelete(t) {
      var e = t.getSelection();
      if (!e.isCollapsed()) return null;
      var n = t.getCurrentContent(),
          o = e.getStartKey(),
          a = n.getBlockForKey(o).getLength();
      if (e.getStartOffset() < a) return null;
      var s = n.getBlockAfter(o);
      if (!s || "atomic" !== s.getType()) return null;
      var u = e.merge({
        focusKey: s.getKey(),
        focusOffset: s.getLength()
      }),
          c = r.removeRange(n, u, "forward");
      return c !== n ? i.push(t, c, "remove-range") : null;
    },
    onTab: function onTab(t, e, n) {
      var r = e.getSelection(),
          a = r.getAnchorKey();
      if (a !== r.getFocusKey()) return e;
      var s = e.getCurrentContent(),
          u = s.getBlockForKey(a),
          c = u.getType();
      if ("unordered-list-item" !== c && "ordered-list-item" !== c) return e;
      t.preventDefault();
      var l = s.getBlockBefore(a);
      if (!l) return e;
      var f = l.getType();
      if ("unordered-list-item" !== f && "ordered-list-item" !== f) return e;
      var p = u.getDepth();
      if (!t.shiftKey && p === n) return e;
      n = Math.min(l.getDepth() + 1, n);
      var h = o(s, r, t.shiftKey ? -1 : 1, n);
      return i.push(e, h, "adjust-depth");
    },
    toggleBlockType: function toggleBlockType(t, e) {
      var n = t.getSelection(),
          o = n.getStartKey(),
          s = n.getEndKey(),
          u = t.getCurrentContent(),
          c = n;

      if (o !== s && 0 === n.getEndOffset()) {
        var l = a(u.getBlockBefore(s));
        s = l.getKey(), c = c.merge({
          anchorKey: o,
          anchorOffset: n.getStartOffset(),
          focusKey: s,
          focusOffset: l.getLength(),
          isBackward: !1
        });
      }

      if (u.getBlockMap().skipWhile(function (t, e) {
        return e !== o;
      }).reverse().skipWhile(function (t, e) {
        return e !== s;
      }).some(function (t) {
        return "atomic" === t.getType();
      })) return t;
      var f = u.getBlockForKey(o).getType() === e ? "unstyled" : e;
      return i.push(t, r.setBlockType(u, c, f), "change-block-type");
    },
    toggleCode: function toggleCode(t) {
      var e = t.getSelection(),
          n = e.getAnchorKey(),
          r = e.getFocusKey();
      return e.isCollapsed() || n !== r ? s.toggleBlockType(t, "code-block") : s.toggleInlineStyle(t, "CODE");
    },
    toggleInlineStyle: function toggleInlineStyle(t, e) {
      var n = t.getSelection(),
          o = t.getCurrentInlineStyle();
      if (n.isCollapsed()) return i.setInlineStyleOverride(t, o.has(e) ? o.remove(e) : o.add(e));
      var a,
          s = t.getCurrentContent();
      return a = o.has(e) ? r.removeInlineStyle(s, n, e) : r.applyInlineStyle(s, n, e), i.push(t, a, "change-inline-style");
    },
    toggleLink: function toggleLink(t, e, n) {
      var o = r.applyEntity(t.getCurrentContent(), e, n);
      return i.push(t, o, "apply-entity");
    },
    tryToRemoveBlockStyle: function tryToRemoveBlockStyle(t) {
      var e = t.getSelection(),
          n = e.getAnchorOffset();

      if (e.isCollapsed() && 0 === n) {
        var i = e.getAnchorKey(),
            o = t.getCurrentContent(),
            a = o.getBlockForKey(i),
            s = o.getFirstBlock();
        if (a.getLength() > 0 && a !== s) return null;
        var u = a.getType(),
            c = o.getBlockBefore(i);
        if ("code-block" === u && c && "code-block" === c.getType() && 0 !== c.getLength()) return null;
        if ("unstyled" !== u) return r.setBlockType(o, e, "unstyled");
      }

      return null;
    }
  };
  t.exports = s;
}, function (t, e, n) {
  "use strict";

  var r = n(193),
      i = n(187),
      o = n(56),
      a = o.isPlatform("Mac OS X"),
      s = o.isPlatform("Windows"),
      u = a && o.isBrowser("Firefox < 29"),
      c = r.hasCommandModifier,
      l = r.isCtrlKeyCommand;

  function f(t) {
    return a && t.altKey || l(t);
  }

  t.exports = function (t) {
    switch (t.keyCode) {
      case 66:
        return c(t) ? "bold" : null;

      case 68:
        return l(t) ? "delete" : null;

      case 72:
        return l(t) ? "backspace" : null;

      case 73:
        return c(t) ? "italic" : null;

      case 74:
        return c(t) ? "code" : null;

      case 75:
        return !s && l(t) ? "secondary-cut" : null;

      case 77:
      case 79:
        return l(t) ? "split-block" : null;

      case 84:
        return a && l(t) ? "transpose-characters" : null;

      case 85:
        return c(t) ? "underline" : null;

      case 87:
        return a && l(t) ? "backspace-word" : null;

      case 89:
        return l(t) ? s ? "redo" : "secondary-paste" : null;

      case 90:
        return function (t) {
          return c(t) ? t.shiftKey ? "redo" : "undo" : null;
        }(t) || null;

      case i.RETURN:
        return "split-block";

      case i.DELETE:
        return function (t) {
          return s && t.shiftKey ? null : f(t) ? "delete-word" : "delete";
        }(t);

      case i.BACKSPACE:
        return function (t) {
          return c(t) && a ? "backspace-to-start-of-line" : f(t) ? "backspace-word" : "backspace";
        }(t);

      case i.LEFT:
        return u && c(t) ? "move-selection-to-start-of-block" : null;

      case i.RIGHT:
        return u && c(t) ? "move-selection-to-end-of-block" : null;

      default:
        return null;
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = {
    stringify: function stringify(t) {
      return "_" + String(t);
    },
    unstringify: function unstringify(t) {
      return t.slice(1);
    }
  };
  t.exports = r;
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var r = n(587),
      i = n(112),
      o = n(47),
      a = n(603),
      s = n(82),
      u = n(183),
      c = n(186),
      l = n(271),
      f = n(604),
      p = n(273),
      h = n(142),
      d = n(46),
      g = n(269),
      y = n(22),
      v = n(193),
      m = n(287),
      _ = n(98),
      b = n(666),
      w = {
    Editor: f,
    EditorBlock: p,
    EditorState: y,
    CompositeDecorator: a,
    Entity: h,
    EntityInstance: g,
    BlockMapBuilder: i,
    CharacterMetadata: o,
    ContentBlock: s,
    ContentState: u,
    SelectionState: _,
    AtomicBlockUtils: r,
    KeyBindingUtil: v,
    Modifier: d,
    RichUtils: m,
    DefaultDraftBlockRenderMap: c,
    DefaultDraftInlineStyle: l,
    convertFromHTML: n(285),
    convertFromRaw: n(669),
    convertToRaw: b,
    genKey: n(58),
    getDefaultKeyBinding: n(288),
    getVisibleSelectionRect: n(674)
  };

  t.exports = w;
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = n(112),
      o = n(47),
      a = n(82),
      s = n(50),
      u = n(68),
      c = n(46),
      l = n(22),
      f = n(20),
      p = (n(98), n(58)),
      h = n(602),
      d = u.draft_tree_data_support,
      g = d ? s : a,
      y = f.List,
      v = f.Repeat,
      m = {
    insertAtomicBlock: function insertAtomicBlock(t, e, n) {
      var a = t.getCurrentContent(),
          s = t.getSelection(),
          u = c.removeRange(a, s, "backward"),
          f = u.getSelectionAfter(),
          h = c.splitBlock(u, f),
          m = h.getSelectionAfter(),
          _ = c.setBlockType(h, m, "atomic"),
          b = o.create({
        entity: e
      }),
          w = {
        key: p(),
        type: "atomic",
        text: n,
        characterList: y(v(b, n.length))
      },
          S = {
        key: p(),
        type: "unstyled"
      };

      d && (w = r({}, w, {
        nextSibling: S.key
      }), S = r({}, S, {
        prevSibling: w.key
      }));
      var x = [new g(w), new g(S)],
          E = i.createFromArray(x),
          k = c.replaceWithFragment(_, m, E),
          C = k.merge({
        selectionBefore: s,
        selectionAfter: k.getSelectionAfter().set("hasFocus", !0)
      });
      return l.push(t, C, "insert-fragment");
    },
    moveAtomicBlock: function moveAtomicBlock(t, e, n, r) {
      var i = t.getCurrentContent(),
          o = t.getSelection(),
          a = void 0;

      if ("before" === r || "after" === r) {
        var s = i.getBlockForKey("before" === r ? n.getStartKey() : n.getEndKey());
        a = h(i, e, s, r);
      } else {
        var u = c.removeRange(i, n, "backward"),
            f = u.getSelectionAfter(),
            p = u.getBlockForKey(f.getFocusKey());
        if (0 === f.getStartOffset()) a = h(u, e, p, "before");else if (f.getEndOffset() === p.getLength()) a = h(u, e, p, "after");else {
          var d = c.splitBlock(u, f),
              g = d.getSelectionAfter(),
              y = d.getBlockForKey(g.getFocusKey());
          a = h(d, e, y, "before");
        }
      }

      var v = a.merge({
        selectionBefore: o,
        selectionAfter: a.getSelectionAfter().set("hasFocus", !0)
      });
      return l.push(t, v, "move-block");
    }
  };

  t.exports = m;
}, function (t, e, n) {
  "use strict";

  t.exports = {
    draft_killswitch_allow_nontextnodes: !1,
    draft_segmented_entities_behavior: !1,
    draft_handlebeforeinput_composed_text: !1,
    draft_tree_data_support: !1
  };
}, function (t, e, n) {
  "use strict";

  var r = n(47),
      i = n(20).Map,
      o = {
    add: function add(t, e, n) {
      return a(t, e, n, !0);
    },
    remove: function remove(t, e, n) {
      return a(t, e, n, !1);
    }
  };

  function a(t, e, n, o) {
    var a = t.getBlockMap(),
        s = e.getStartKey(),
        u = e.getStartOffset(),
        c = e.getEndKey(),
        l = e.getEndOffset(),
        f = a.skipUntil(function (t, e) {
      return e === s;
    }).takeUntil(function (t, e) {
      return e === c;
    }).concat(i([[c, a.get(c)]])).map(function (t, e) {
      var i, a;
      s === c ? (i = u, a = l) : (i = e === s ? u : 0, a = e === c ? l : t.getLength());

      for (var f, p = t.getCharacterList(); i < a;) {
        f = p.get(i), p = p.set(i, o ? r.applyStyle(f, n) : r.removeStyle(f, n)), i++;
      }

      return t.set("characterList", p);
    });
    return t.merge({
      blockMap: a.merge(f),
      selectionBefore: e,
      selectionAfter: e
    });
  }

  t.exports = o;
}, function (t, e, n) {
  "use strict";

  var r = n(20),
      i = n(591);

  t.exports = function (t, e, n) {
    var o = t.getBlockMap(),
        a = e.getStartKey(),
        s = e.getStartOffset(),
        u = e.getEndKey(),
        c = e.getEndOffset(),
        l = o.skipUntil(function (t, e) {
      return e === a;
    }).takeUntil(function (t, e) {
      return e === u;
    }).toOrderedMap().merge(r.OrderedMap([[u, o.get(u)]])).map(function (t, e) {
      var r = e === a ? s : 0,
          o = e === u ? c : t.getLength();
      return i(t, r, o, n);
    });
    return t.merge({
      blockMap: o.merge(l),
      selectionBefore: e,
      selectionAfter: e
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(47);

  t.exports = function (t, e, n, i) {
    for (var o = t.getCharacterList(); e < n;) {
      o = o.set(e, r.applyEntity(o.get(e), i)), e++;
    }

    return t.set("characterList", o);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(593),
      i = n(594),
      o = n(19);

  function a(t, e, n, a, s, u, c) {
    var l = n.getStartOffset(),
        f = n.getEndOffset(),
        p = t.__get(s).getMutability(),
        h = c ? l : f;

    if ("MUTABLE" === p) return n;
    var d = i(e, s).filter(function (t) {
      return h <= t.end && h >= t.start;
    });
    1 != d.length && o(!1);
    var g = d[0];
    if ("IMMUTABLE" === p) return n.merge({
      anchorOffset: g.start,
      focusOffset: g.end,
      isBackward: !1
    });
    u || (c ? f = g.end : l = g.start);
    var y = r.getRemovalRange(l, f, e.getText().slice(g.start, g.end), g.start, a);
    return n.merge({
      anchorOffset: y.start,
      focusOffset: y.end,
      isBackward: !1
    });
  }

  t.exports = function (t, e, n, r, i) {
    var o = r.getStartOffset(),
        s = r.getEndOffset(),
        u = e.getEntityAt(o),
        c = n.getEntityAt(s - 1);
    if (!u && !c) return r;
    var l = r;
    if (u && u === c) l = a(t, e, l, i, u, !0, !0);else if (u && c) {
      var f = a(t, e, l, i, u, !1, !0),
          p = a(t, n, l, i, c, !1, !1);
      l = l.merge({
        anchorOffset: f.getAnchorOffset(),
        focusOffset: p.getFocusOffset(),
        isBackward: !1
      });
    } else if (u) {
      var h = a(t, e, l, i, u, !1, !0);
      l = l.merge({
        anchorOffset: h.getStartOffset(),
        isBackward: !1
      });
    } else if (c) {
      var d = a(t, n, l, i, c, !1, !1);
      l = l.merge({
        focusOffset: d.getEndOffset(),
        isBackward: !1
      });
    }
    return l;
  };
}, function (t, e, n) {
  "use strict";

  t.exports = {
    getRemovalRange: function getRemovalRange(t, e, n, r, i) {
      var o = n.split(" ");
      o = o.map(function (t, e) {
        if ("forward" === i) {
          if (e > 0) return " " + t;
        } else if (e < o.length - 1) return t + " ";

        return t;
      });

      for (var a, s = r, u = null, c = null, l = 0; l < o.length; l++) {
        if (t < (a = s + o[l].length) && s < e) null !== u || (u = s), c = a;else if (null !== u) break;
        s = a;
      }

      var f = r + n.length,
          p = u === r,
          h = c === f;
      return (!p && h || p && !h) && ("forward" === i ? c !== f && c++ : u !== r && u--), {
        start: u,
        end: c
      };
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(19);

  t.exports = function (t, e) {
    var n = [];
    return t.findEntityRanges(function (t) {
      return t.getEntity() === e;
    }, function (t, e) {
      n.push({
        start: t,
        end: e
      });
    }), n.length || r(!1), n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(112),
      i = n(50),
      o = n(20),
      a = n(266),
      s = n(19),
      u = n(264),
      c = o.List;

  t.exports = function (t, e, n) {
    e.isCollapsed() || s(!1);
    var o = t.getBlockMap(),
        l = u(n),
        f = e.getStartKey(),
        p = e.getStartOffset(),
        h = o.get(f);
    return h instanceof i && (h.getChildKeys().isEmpty() || s(!1)), 1 === l.size ? function (t, e, n, r, i, o) {
      var s = n.get(i),
          u = s.getText(),
          c = s.getCharacterList(),
          l = i,
          f = o + r.getText().length,
          p = s.merge({
        text: u.slice(0, o) + r.getText() + u.slice(o),
        characterList: a(c, r.getCharacterList(), o),
        data: r.getData()
      });
      return t.merge({
        blockMap: n.set(i, p),
        selectionBefore: e,
        selectionAfter: e.merge({
          anchorKey: l,
          anchorOffset: f,
          focusKey: l,
          focusOffset: f,
          isBackward: !1
        })
      });
    }(t, e, o, l.first(), f, p) : function (t, e, n, o, a, s) {
      var u = n.first() instanceof i,
          l = [],
          f = o.size,
          p = n.get(a),
          h = o.first(),
          d = o.last(),
          g = d.getLength(),
          y = d.getKey(),
          v = u && (!p.getChildKeys().isEmpty() || !h.getChildKeys().isEmpty());
      n.forEach(function (t, e) {
        e === a ? (v ? l.push(t) : l.push(function (t, e, n) {
          var r = t.getText(),
              i = t.getCharacterList(),
              o = r.slice(0, e),
              a = i.slice(0, e),
              s = n.first();
          return t.merge({
            text: o + s.getText(),
            characterList: a.concat(s.getCharacterList()),
            type: o ? t.getType() : s.getType(),
            data: s.getData()
          });
        }(t, s, o)), o.slice(v ? 0 : 1, f - 1).forEach(function (t) {
          return l.push(t);
        }), l.push(function (t, e, n) {
          var r = t.getText(),
              i = t.getCharacterList(),
              o = r.length,
              a = r.slice(e, o),
              s = i.slice(e, o),
              u = n.last();
          return u.merge({
            text: u.getText() + a,
            characterList: u.getCharacterList().concat(s),
            data: u.getData()
          });
        }(t, s, o))) : l.push(t);
      });
      var m = r.createFromArray(l);
      return u && (m = function (t, e, n, r) {
        return t.withMutations(function (e) {
          var i = n.getKey(),
              o = r.getKey(),
              a = n.getNextSiblingKey(),
              s = n.getParentKey(),
              u = function (t, e) {
            var n = t.getKey(),
                r = t,
                i = [];

            for (e.get(n) && i.push(n); r && r.getNextSiblingKey();) {
              var o = r.getNextSiblingKey();
              if (!o) break;
              i.push(o), r = e.get(o);
            }

            return i;
          }(r, t),
              l = u[u.length - 1];

          if (e.get(o) ? (e.setIn([i, "nextSibling"], o), e.setIn([o, "prevSibling"], i)) : (e.setIn([i, "nextSibling"], r.getNextSiblingKey()), e.setIn([r.getNextSiblingKey(), "prevSibling"], i)), e.setIn([l, "nextSibling"], a), a && e.setIn([a, "prevSibling"], l), u.forEach(function (t) {
            return e.setIn([t, "parent"], s);
          }), s) {
            var f = t.get(s).getChildKeys(),
                p = f.indexOf(i) + 1,
                h = f.toArray();
            h.splice.apply(h, [p, 0].concat(u)), e.setIn([s, "children"], c(h));
          }
        });
      }(m, 0, p, h)), t.merge({
        blockMap: m,
        selectionBefore: e,
        selectionAfter: e.merge({
          anchorKey: y,
          anchorOffset: g,
          focusKey: y,
          focusOffset: g,
          isBackward: !1
        })
      });
    }(t, e, o, l, f, p);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(20),
      i = n(266),
      o = n(19),
      a = r.Repeat;

  t.exports = function (t, e, n, r) {
    e.isCollapsed() || o(!1);
    var s = n.length;
    if (!s) return t;
    var u = t.getBlockMap(),
        c = e.getStartKey(),
        l = e.getStartOffset(),
        f = u.get(c),
        p = f.getText(),
        h = f.merge({
      text: p.slice(0, l) + n + p.slice(l, f.getLength()),
      characterList: i(f.getCharacterList(), a(r, s).toList(), l)
    }),
        d = l + s;
    return t.merge({
      blockMap: u.set(c, h),
      selectionAfter: e.merge({
        anchorOffset: d,
        focusOffset: d
      })
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(20).Map;

  t.exports = function (t, e, n) {
    var i = e.getStartKey(),
        o = e.getEndKey(),
        a = t.getBlockMap(),
        s = a.toSeq().skipUntil(function (t, e) {
      return e === i;
    }).takeUntil(function (t, e) {
      return e === o;
    }).concat(r([[o, a.get(o)]])).map(n);
    return t.merge({
      blockMap: a.merge(s),
      selectionBefore: e,
      selectionAfter: e
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(50),
      i = n(20),
      o = n(267),
      a = (i.List, i.Map),
      s = function s(t, e, n) {
    if (t) {
      var r = e.get(t);
      r && e.set(t, n(r));
    }
  },
      u = function u(t, e) {
    var n = [];
    if (!t) return n;

    for (var r = e.get(t); r && r.getParentKey();) {
      var i = r.getParentKey();
      i && n.push(i), r = i ? e.get(i) : null;
    }

    return n;
  },
      c = function c(t, e, n) {
    if (!t) return null;

    for (var r = n.get(t.getKey()).getNextSiblingKey(); r && !e.get(r);) {
      r = n.get(r).getNextSiblingKey() || null;
    }

    return r;
  },
      l = function l(t, e, n) {
    if (!t) return null;

    for (var r = n.get(t.getKey()).getPrevSiblingKey(); r && !e.get(r);) {
      r = n.get(r).getPrevSiblingKey() || null;
    }

    return r;
  };

  t.exports = function (t, e) {
    if (e.isCollapsed()) return t;
    var n = t.getBlockMap(),
        i = e.getStartKey(),
        f = e.getStartOffset(),
        p = e.getEndKey(),
        h = e.getEndOffset(),
        d = n.get(i),
        g = n.get(p),
        y = d instanceof r,
        v = [];

    if (y) {
      var m = g.getChildKeys(),
          _ = u(p, n);

      g.getNextSiblingKey() && (v = v.concat(_)), m.isEmpty() || (v = v.concat(_.concat([p]))), v = v.concat(u(o(g, n), n));
    }

    var b;
    b = d === g ? function (t, e, n) {
      if (0 === e) for (; e < n;) {
        t = t.shift(), e++;
      } else if (n === t.count()) for (; n > e;) {
        t = t.pop(), n--;
      } else {
        var r = t.slice(0, e),
            i = t.slice(n);
        t = r.concat(i).toList();
      }
      return t;
    }(d.getCharacterList(), f, h) : d.getCharacterList().slice(0, f).concat(g.getCharacterList().slice(h));
    var w = d.merge({
      text: d.getText().slice(0, f) + g.getText().slice(h),
      characterList: b
    }),
        S = n.toSeq().skipUntil(function (t, e) {
      return e === i;
    }).takeUntil(function (t, e) {
      return e === p;
    }).filter(function (t, e) {
      return -1 === v.indexOf(e);
    }).concat(a([[p, null]])).map(function (t, e) {
      return e === i ? w : null;
    }),
        x = n.merge(S).filter(function (t) {
      return !!t;
    });
    return y && (x = function (t, e, n, r) {
      return t.withMutations(function (t) {
        s(e.getKey(), t, function (n) {
          return n.merge({
            nextSibling: c(e, t, r),
            prevSibling: l(e, t, r)
          });
        }), s(n.getKey(), t, function (e) {
          return e.merge({
            nextSibling: c(n, t, r),
            prevSibling: l(n, t, r)
          });
        }), u(e.getKey(), r).forEach(function (e) {
          return s(e, t, function (e) {
            return e.merge({
              children: e.getChildKeys().filter(function (e) {
                return t.get(e);
              }),
              nextSibling: c(e, t, r),
              prevSibling: l(e, t, r)
            });
          });
        }), s(e.getNextSiblingKey(), t, function (t) {
          return t.merge({
            prevSibling: e.getPrevSiblingKey()
          });
        }), s(e.getPrevSiblingKey(), t, function (n) {
          return n.merge({
            nextSibling: c(e, t, r)
          });
        }), s(n.getNextSiblingKey(), t, function (e) {
          return e.merge({
            prevSibling: l(n, t, r)
          });
        }), s(n.getPrevSiblingKey(), t, function (t) {
          return t.merge({
            nextSibling: n.getNextSiblingKey()
          });
        }), u(n.getKey(), r).forEach(function (e) {
          s(e, t, function (e) {
            return e.merge({
              children: e.getChildKeys().filter(function (e) {
                return t.get(e);
              }),
              nextSibling: c(e, t, r),
              prevSibling: l(e, t, r)
            });
          });
        }), function (t, e) {
          var n = [];
          if (!t) return n;

          for (var r = o(t, e); r && e.get(r);) {
            var i = e.get(r);
            n.push(r), r = i.getParentKey() ? o(i, e) : null;
          }

          return n;
        }(n, r).forEach(function (e) {
          return s(e, t, function (e) {
            return e.merge({
              nextSibling: c(e, t, r),
              prevSibling: l(e, t, r)
            });
          });
        });
      });
    }(x, d, g, n)), t.merge({
      blockMap: x,
      selectionBefore: e,
      selectionAfter: e.merge({
        anchorKey: i,
        anchorOffset: f,
        focusKey: i,
        focusOffset: f,
        isBackward: !1
      })
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(50),
      i = n(20),
      o = n(58),
      a = n(19),
      s = i.List,
      u = i.Map,
      c = function c(t, e, n) {
    if (t) {
      var r = e.get(t);
      r && e.set(t, n(r));
    }
  };

  t.exports = function (t, e) {
    e.isCollapsed() || a(!1);

    var n = e.getAnchorKey(),
        i = e.getAnchorOffset(),
        l = t.getBlockMap(),
        f = l.get(n),
        p = f.getText(),
        h = f.getCharacterList(),
        d = o(),
        g = f instanceof r,
        y = f.merge({
      text: p.slice(0, i),
      characterList: h.slice(0, i)
    }),
        v = y.merge({
      key: d,
      text: p.slice(i),
      characterList: h.slice(i),
      data: u()
    }),
        m = l.toSeq().takeUntil(function (t) {
      return t === f;
    }),
        _ = l.toSeq().skipUntil(function (t) {
      return t === f;
    }).rest(),
        b = m.concat([[n, y], [d, v]], _).toOrderedMap();

    return g && (f.getChildKeys().isEmpty() || a(!1), b = function (t, e, n) {
      return t.withMutations(function (t) {
        var r = e.getKey(),
            i = n.getKey();
        c(e.getParentKey(), t, function (t) {
          var e = t.getChildKeys(),
              n = e.indexOf(r) + 1,
              o = e.toArray();
          return o.splice(n, 0, i), t.merge({
            children: s(o)
          });
        }), c(e.getNextSiblingKey(), t, function (t) {
          return t.merge({
            prevSibling: i
          });
        }), c(r, t, function (t) {
          return t.merge({
            nextSibling: i
          });
        }), c(i, t, function (t) {
          return t.merge({
            prevSibling: r
          });
        });
      });
    }(b, y, v)), t.merge({
      blockMap: b,
      selectionBefore: e,
      selectionAfter: e.merge({
        anchorKey: d,
        anchorOffset: 0,
        focusKey: d,
        focusOffset: 0,
        isBackward: !1
      })
    });
  };
}, function (t, e, n) {
  "use strict";

  var r,
      i = n(20),
      o = n(601),
      a = n(54),
      s = i.OrderedMap,
      u = {
    getDirectionMap: function getDirectionMap(t, e) {
      r ? r.reset() : r = new o();
      var n = t.getBlockMap(),
          u = n.valueSeq().map(function (t) {
        return a(r).getDirection(t.getText());
      }),
          c = s(n.keySeq().zip(u));
      return null != e && i.is(e, c) ? e : c;
    }
  };
  t.exports = u;
}, function (t, e, n) {
  "use strict";

  var r = n(270),
      i = n(185),
      o = n(19),
      a = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), e ? i.isStrong(e) || o(!1) : e = i.getGlobalDir(), this._defaultDir = e, this.reset();
    }

    return t.prototype.reset = function () {
      this._lastDir = this._defaultDir;
    }, t.prototype.getDirection = function (t) {
      return this._lastDir = r.getDirection(t, this._lastDir), this._lastDir;
    }, t;
  }();

  t.exports = a;
}, function (t, e, n) {
  "use strict";

  var r = n(50),
      i = n(20),
      o = n(267),
      a = n(19),
      s = i.OrderedMap,
      u = i.List,
      c = function c(t, e, n) {
    if (t) {
      var r = e.get(t);
      r && e.set(t, n(r));
    }
  },
      l = function l(t, e, n, r, i) {
    if (!i) return t;
    var o = "after" === r,
        a = e.getKey(),
        s = n.getKey(),
        l = e.getParentKey(),
        f = e.getNextSiblingKey(),
        p = e.getPrevSiblingKey(),
        h = n.getParentKey(),
        d = o ? n.getNextSiblingKey() : s,
        g = o ? s : n.getPrevSiblingKey();
    return t.withMutations(function (t) {
      c(l, t, function (t) {
        var e = t.getChildKeys();
        return t.merge({
          children: e["delete"](e.indexOf(a))
        });
      }), c(p, t, function (t) {
        return t.merge({
          nextSibling: f
        });
      }), c(f, t, function (t) {
        return t.merge({
          prevSibling: p
        });
      }), c(d, t, function (t) {
        return t.merge({
          prevSibling: a
        });
      }), c(g, t, function (t) {
        return t.merge({
          nextSibling: a
        });
      }), c(h, t, function (t) {
        var e = t.getChildKeys(),
            n = e.indexOf(s),
            r = o ? n + 1 : 0 !== n ? n - 1 : 0,
            i = e.toArray();
        return i.splice(r, 0, a), t.merge({
          children: u(i)
        });
      }), c(a, t, function (t) {
        return t.merge({
          nextSibling: d,
          prevSibling: g,
          parent: h
        });
      });
    });
  };

  t.exports = function (t, e, n, i) {
    "replace" === i && a(!1);
    var u = n.getKey(),
        c = e.getKey();
    c === u && a(!1);
    var f = t.getBlockMap(),
        p = e instanceof r,
        h = [e],
        d = f["delete"](c);
    p && (h = [], d = f.withMutations(function (t) {
      var n = e.getNextSiblingKey(),
          r = o(e, t);
      t.toSeq().skipUntil(function (t) {
        return t.getKey() === c;
      }).takeWhile(function (t) {
        var e = t.getKey(),
            i = e === c,
            o = n && e !== n,
            a = !n && t.getParentKey() && (!r || e !== r);
        return !!(i || o || a);
      }).forEach(function (e) {
        h.push(e), t["delete"](e.getKey());
      });
    }));
    var g = d.toSeq().takeUntil(function (t) {
      return t === n;
    }),
        y = d.toSeq().skipUntil(function (t) {
      return t === n;
    }).skip(1),
        v = h.map(function (t) {
      return [t.getKey(), t];
    }),
        m = s();

    if ("before" === i) {
      var _ = t.getBlockBefore(u);

      _ && _.getKey() === e.getKey() && a(!1), m = g.concat([].concat(v, [[u, n]]), y).toOrderedMap();
    } else if ("after" === i) {
      var b = t.getBlockAfter(u);
      b && b.getKey() === c && a(!1), m = g.concat([[u, n]].concat(v), y).toOrderedMap();
    }

    return t.merge({
      blockMap: l(m, e, n, i, p),
      selectionBefore: t.getSelectionAfter(),
      selectionAfter: t.getSelectionAfter().merge({
        anchorKey: c,
        focusKey: c
      })
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(20).List,
      i = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this._decorators = e.slice();
    }

    return t.prototype.getDecorations = function (t, e) {
      var n = Array(t.getText().length).fill(null);
      return this._decorators.forEach(function (r, i) {
        var o = 0;
        (0, r.strategy)(t, function (t, e) {
          (function (t, e, n) {
            for (var r = e; r < n; r++) {
              if (null != t[r]) return !1;
            }

            return !0;
          })(n, t, e) && (function (t, e, n, r) {
            for (var i = e; i < n; i++) {
              t[i] = r;
            }
          }(n, t, e, i + "." + o), o++);
        }, e);
      }), r(n);
    }, t.prototype.getComponentForKey = function (t) {
      var e = parseInt(t.split(".")[0], 10);
      return this._decorators[e].component;
    }, t.prototype.getPropsForKey = function (t) {
      var e = parseInt(t.split(".")[0], 10);
      return this._decorators[e].props;
    }, t;
  }();

  t.exports = i;
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = n(186),
      o = n(271),
      a = n(605),
      s = n(606),
      u = n(629),
      c = n(632),
      l = n(665),
      f = n(22),
      p = n(3),
      h = n(38),
      d = n(275),
      g = n(190),
      y = n(56),
      v = n(99),
      m = n(42),
      _ = n(58),
      b = n(288),
      w = n(191),
      S = n(19),
      x = n(54),
      E = y.isBrowser("IE"),
      k = !E,
      C = {
    edit: c,
    composite: a,
    drag: u,
    cut: null,
    render: null
  },
      O = function (t) {
    function e(n) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, e);

      var r = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
      }(this, t.call(this, n));

      return r.focus = function (t) {
        var e = r.props.editorState,
            n = e.getSelection().getHasFocus(),
            i = h.findDOMNode(r.editor);

        if (i) {
          var o = g.getScrollParent(i),
              a = t || w(o),
              s = a.x,
              u = a.y;
          i instanceof HTMLElement || S(!1), i.focus(), o === window ? window.scrollTo(s, u) : d.setTop(o, u), n || r.update(f.forceSelection(e, e.getSelection()));
        }
      }, r.blur = function () {
        var t = h.findDOMNode(r.editor);
        t instanceof HTMLElement || S(!1), t.blur();
      }, r.setMode = function (t) {
        r._handler = C[t];
      }, r.exitCurrentMode = function () {
        r.setMode("edit");
      }, r.restoreEditorDOM = function (t) {
        r.setState({
          contentsKey: r.state.contentsKey + 1
        }, function () {
          r.focus(t);
        });
      }, r.setClipboard = function (t) {
        r._clipboard = t;
      }, r.getClipboard = function () {
        return r._clipboard;
      }, r.update = function (t) {
        r._latestEditorState = t, r.props.onChange(t);
      }, r.onDragEnter = function () {
        r._dragCount++;
      }, r.onDragLeave = function () {
        r._dragCount--, 0 === r._dragCount && r.exitCurrentMode();
      }, r._blockSelectEvents = !1, r._clipboard = null, r._handler = null, r._dragCount = 0, r._editorKey = n.editorKey || _(), r._placeholderAccessibilityID = "placeholder-" + r._editorKey, r._latestEditorState = n.editorState, r._latestCommittedEditorState = n.editorState, r._onBeforeInput = r._buildHandler("onBeforeInput"), r._onBlur = r._buildHandler("onBlur"), r._onCharacterData = r._buildHandler("onCharacterData"), r._onCompositionEnd = r._buildHandler("onCompositionEnd"), r._onCompositionStart = r._buildHandler("onCompositionStart"), r._onCopy = r._buildHandler("onCopy"), r._onCut = r._buildHandler("onCut"), r._onDragEnd = r._buildHandler("onDragEnd"), r._onDragOver = r._buildHandler("onDragOver"), r._onDragStart = r._buildHandler("onDragStart"), r._onDrop = r._buildHandler("onDrop"), r._onInput = r._buildHandler("onInput"), r._onFocus = r._buildHandler("onFocus"), r._onKeyDown = r._buildHandler("onKeyDown"), r._onKeyPress = r._buildHandler("onKeyPress"), r._onKeyUp = r._buildHandler("onKeyUp"), r._onMouseDown = r._buildHandler("onMouseDown"), r._onMouseUp = r._buildHandler("onMouseUp"), r._onPaste = r._buildHandler("onPaste"), r._onSelect = r._buildHandler("onSelect"), r.getEditorKey = function () {
        return r._editorKey;
      }, r.state = {
        contentsKey: 0
      }, r;
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
    }(e, t), e.prototype._buildHandler = function (t) {
      var e = this;
      return function (n) {
        if (!e.props.readOnly) {
          var r = e._handler && e._handler[t];
          r && r(e, n);
        }
      };
    }, e.prototype._showPlaceholder = function () {
      return !!this.props.placeholder && !this.props.editorState.isInCompositionMode() && !this.props.editorState.getCurrentContent().hasText();
    }, e.prototype._renderPlaceholder = function () {
      if (this._showPlaceholder()) {
        var t = {
          text: x(this.props.placeholder),
          editorState: this.props.editorState,
          textAlignment: this.props.textAlignment,
          accessibilityID: this._placeholderAccessibilityID
        };
        return p.createElement(l, t);
      }

      return null;
    }, e.prototype.render = function () {
      var t = this,
          e = this.props,
          n = e.blockRenderMap,
          i = e.blockRendererFn,
          a = e.blockStyleFn,
          u = e.customStyleFn,
          c = e.customStyleMap,
          l = e.editorState,
          f = e.readOnly,
          h = e.textAlignment,
          d = e.textDirectionality,
          g = v({
        "DraftEditor/root": !0,
        "DraftEditor/alignLeft": "left" === h,
        "DraftEditor/alignRight": "right" === h,
        "DraftEditor/alignCenter": "center" === h
      }),
          y = this.props.role || "textbox",
          m = "combobox" === y ? !!this.props.ariaExpanded : null,
          _ = {
        blockRenderMap: n,
        blockRendererFn: i,
        blockStyleFn: a,
        customStyleMap: r({}, o, c),
        customStyleFn: u,
        editorKey: this._editorKey,
        editorState: l,
        key: "contents" + this.state.contentsKey,
        textDirectionality: d
      };
      return p.createElement("div", {
        className: g
      }, this._renderPlaceholder(), p.createElement("div", {
        className: v("DraftEditor/editorContainer"),
        ref: function ref(e) {
          return t.editorContainer = e;
        }
      }, p.createElement("div", {
        "aria-activedescendant": f ? null : this.props.ariaActiveDescendantID,
        "aria-autocomplete": f ? null : this.props.ariaAutoComplete,
        "aria-controls": f ? null : this.props.ariaControls,
        "aria-describedby": this.props.ariaDescribedBy || this._placeholderAccessibilityID,
        "aria-expanded": f ? null : m,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-multiline": this.props.ariaMultiline,
        autoCapitalize: this.props.autoCapitalize,
        autoComplete: this.props.autoComplete,
        autoCorrect: this.props.autoCorrect,
        className: v({
          notranslate: !f,
          "public/DraftEditor/content": !0
        }),
        contentEditable: !f,
        "data-testid": this.props.webDriverTestID,
        onBeforeInput: this._onBeforeInput,
        onBlur: this._onBlur,
        onCompositionEnd: this._onCompositionEnd,
        onCompositionStart: this._onCompositionStart,
        onCopy: this._onCopy,
        onCut: this._onCut,
        onDragEnd: this._onDragEnd,
        onDragEnter: this.onDragEnter,
        onDragLeave: this.onDragLeave,
        onDragOver: this._onDragOver,
        onDragStart: this._onDragStart,
        onDrop: this._onDrop,
        onFocus: this._onFocus,
        onInput: this._onInput,
        onKeyDown: this._onKeyDown,
        onKeyPress: this._onKeyPress,
        onKeyUp: this._onKeyUp,
        onMouseUp: this._onMouseUp,
        onPaste: this._onPaste,
        onSelect: this._onSelect,
        ref: function ref(e) {
          return t.editor = e;
        },
        role: f ? null : y,
        spellCheck: k && this.props.spellCheck,
        style: {
          outline: "none",
          userSelect: "text",
          WebkitUserSelect: "text",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word"
        },
        suppressContentEditableWarning: !0,
        tabIndex: this.props.tabIndex
      }, p.createElement(s, _))));
    }, e.prototype.componentDidMount = function () {
      this.setMode("edit"), E && document.execCommand("AutoUrlDetect", !1, !1);
    }, e.prototype.componentWillUpdate = function (t) {
      this._blockSelectEvents = !0, this._latestEditorState = t.editorState;
    }, e.prototype.componentDidUpdate = function () {
      this._blockSelectEvents = !1, this._latestCommittedEditorState = this.props.editorState;
    }, e;
  }(p.Component);

  O.defaultProps = {
    blockRenderMap: i,
    blockRendererFn: m.thatReturnsNull,
    blockStyleFn: m.thatReturns(""),
    keyBindingFn: b,
    readOnly: !1,
    spellCheck: !1,
    stripPastedStyles: !1
  }, t.exports = O;
}, function (t, e, n) {
  "use strict";

  var r = n(68),
      i = n(46),
      o = n(22),
      a = n(187),
      s = n(188),
      u = n(114),
      c = n(272),
      l = !1,
      f = !1,
      p = "",
      h = {
    onBeforeInput: function onBeforeInput(t, e) {
      p = (p || "") + e.data;
    },
    onCompositionStart: function onCompositionStart(t) {
      f = !0;
    },
    onCompositionEnd: function onCompositionEnd(t) {
      l = !1, f = !1, setTimeout(function () {
        l || h.resolveComposition(t);
      }, 20);
    },
    onKeyDown: function onKeyDown(t, e) {
      if (!f) return h.resolveComposition(t), void t._onKeyDown(e);
      e.which !== a.RIGHT && e.which !== a.LEFT || e.preventDefault();
    },
    onKeyPress: function onKeyPress(t, e) {
      e.which === a.RETURN && e.preventDefault();
    },
    resolveComposition: function resolveComposition(t) {
      if (!f) {
        l = !0;
        var e = p;
        p = "";
        var n = o.set(t._latestEditorState, {
          inCompositionMode: !1
        }),
            a = n.getCurrentInlineStyle(),
            h = s(n.getCurrentContent(), n.getSelection()),
            d = !e || c(n) || a.size > 0 || null !== h;

        if (d && t.restoreEditorDOM(), t.exitCurrentMode(), e) {
          if (r.draft_handlebeforeinput_composed_text && t.props.handleBeforeInput && u(t.props.handleBeforeInput(e, n))) return;
          var g = i.replaceText(n.getCurrentContent(), n.getSelection(), e, a, h);
          t.update(o.push(n, g, "insert-characters"));
        } else d && t.update(o.set(n, {
          nativelyRenderedContent: null,
          forceSelection: !0
        }));
      }
    }
  };
  t.exports = h;
}, function (t, e, n) {
  "use strict";

  var r = n(607);
  t.exports = r;
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  };

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var a = n(273),
      s = n(143),
      u = (n(22), n(3)),
      c = n(99),
      l = n(628),
      f = n(54),
      p = function p(t, e, n, r) {
    return c({
      "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === t,
      "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === t,
      "public/DraftStyleDefault/reset": n,
      "public/DraftStyleDefault/depth0": 0 === e,
      "public/DraftStyleDefault/depth1": 1 === e,
      "public/DraftStyleDefault/depth2": 2 === e,
      "public/DraftStyleDefault/depth3": 3 === e,
      "public/DraftStyleDefault/depth4": 4 === e,
      "public/DraftStyleDefault/listLTR": "LTR" === r,
      "public/DraftStyleDefault/listRTL": "RTL" === r
    });
  },
      h = function (t) {
    function e() {
      return i(this, e), o(this, t.apply(this, arguments));
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
    }(e, t), e.prototype.shouldComponentUpdate = function (t) {
      var e = this.props.editorState,
          n = t.editorState;
      if (e.getDirectionMap() !== n.getDirectionMap()) return !0;
      if (e.getSelection().getHasFocus() !== n.getSelection().getHasFocus()) return !0;
      var r = n.getNativelyRenderedContent(),
          i = e.isInCompositionMode(),
          o = n.isInCompositionMode();
      if (e === n || null !== r && n.getCurrentContent() === r || i && o) return !1;
      var a = e.getCurrentContent(),
          s = n.getCurrentContent(),
          u = e.getDecorator(),
          c = n.getDecorator();
      return i !== o || a !== s || u !== c || n.mustForceSelection();
    }, e.prototype.render = function () {
      for (var t = this.props, e = t.blockRenderMap, n = t.blockRendererFn, i = t.blockStyleFn, o = t.customStyleMap, c = t.customStyleFn, h = t.editorState, d = t.editorKey, g = t.textDirectionality, y = h.getCurrentContent(), v = h.getSelection(), m = h.mustForceSelection(), _ = h.getDecorator(), b = f(h.getDirectionMap()), w = y.getBlocksAsArray(), S = [], x = null, E = null, k = 0; k < w.length; k++) {
        var C = w[k],
            O = C.getKey(),
            T = C.getType(),
            D = n(C),
            M = void 0,
            K = void 0,
            A = void 0;
        D && (M = D.component, K = D.props, A = D.editable);
        var I = g || b.get(O),
            B = s.encode(O, 0, 0),
            L = {
          contentState: y,
          block: C,
          blockProps: K,
          blockStyleFn: i,
          customStyleMap: o,
          customStyleFn: c,
          decorator: _,
          direction: I,
          forceSelection: m,
          key: O,
          offsetKey: B,
          selection: v,
          tree: h.getBlockTree(O)
        },
            R = e.get(T) || e.get("unstyled"),
            N = R.wrapper,
            F = R.element || e.get("unstyled").element,
            z = C.getDepth(),
            P = "";
        i && (P = i(C)), "li" === F && (P = l(P, p(T, z, E !== N || null === x || z > x, I)));
        var j = M || a,
            U = {
          className: P,
          "data-block": !0,
          "data-editor": d,
          "data-offset-key": B,
          key: O
        };
        void 0 !== A && (U = r({}, U, {
          contentEditable: A,
          suppressContentEditableWarning: !0
        }));
        var q = u.createElement(F, U, u.createElement(j, L));
        S.push({
          block: q,
          wrapperTemplate: N,
          key: O,
          offsetKey: B
        }), x = N ? C.getDepth() : null, E = N;
      }

      for (var H = [], W = 0; W < S.length;) {
        var V = S[W];

        if (V.wrapperTemplate) {
          var G = [];

          do {
            G.push(S[W].block), W++;
          } while (W < S.length && S[W].wrapperTemplate === V.wrapperTemplate);

          var J = u.cloneElement(V.wrapperTemplate, {
            key: V.key + "-wrap",
            "data-offset-key": V.offsetKey
          }, G);
          H.push(J);
        } else H.push(V.block), W++;
      }

      return u.createElement("div", {
        "data-contents": "true"
      }, H);
    }, e;
  }(u.Component);

  t.exports = h;
}, function (t, e, n) {
  "use strict";

  var r = n(49);

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function o(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var a = n(609),
      s = n(3),
      u = n(38),
      c = n(19),
      l = n(616),
      f = function (t) {
    function e() {
      return i(this, e), o(this, t.apply(this, arguments));
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
    }(e, t), e.prototype._setSelection = function () {
      var t = this.props.selection;

      if (null != t && t.getHasFocus()) {
        var e = this.props,
            n = e.block,
            r = e.start,
            i = e.text,
            o = n.getKey(),
            a = r + i.length;

        if (t.hasEdgeWithin(o, r, a)) {
          var s = u.findDOMNode(this);
          s || c(!1);
          var f = s.firstChild;
          f || c(!1);
          var p = void 0;
          f.nodeType === Node.TEXT_NODE ? p = f : "BR" === f.tagName ? p = s : (p = f.firstChild) || c(!1), l(t, p, o, r, a);
        }
      }
    }, e.prototype.shouldComponentUpdate = function (t) {
      var e = u.findDOMNode(this.leaf);
      return e || c(!1), e.textContent !== t.text || t.styleSet !== this.props.styleSet || t.forceSelection;
    }, e.prototype.componentDidUpdate = function () {
      this._setSelection();
    }, e.prototype.componentDidMount = function () {
      this._setSelection();
    }, e.prototype.render = function () {
      var t = this,
          e = this.props.block,
          n = this.props.text;
      n.endsWith("\n") && this.props.isLast && (n += "\n");
      var i = this.props,
          o = i.customStyleMap,
          u = i.customStyleFn,
          c = i.offsetKey,
          l = i.styleSet,
          f = l.reduce(function (t, e) {
        var n = {},
            i = o[e];
        return void 0 !== i && t.textDecoration !== i.textDecoration && (n.textDecoration = [t.textDecoration, i.textDecoration].join(" ").trim()), r(t, i, n);
      }, {});

      if (u) {
        var p = u(l, e);
        f = r(f, p);
      }

      return s.createElement("span", {
        "data-offset-key": c,
        ref: function ref(e) {
          return t.leaf = e;
        },
        style: f
      }, s.createElement(a, null, n));
    }, e;
  }(s.Component);

  t.exports = f;
}, function (t, e, n) {
  "use strict";

  var r = n(3),
      i = n(38),
      o = n(56),
      a = n(19),
      s = o.isBrowser("IE <= 11"),
      u = s ? r.createElement("span", {
    key: "A",
    "data-text": "true"
  }, "\n") : r.createElement("br", {
    key: "A",
    "data-text": "true"
  }),
      c = s ? r.createElement("span", {
    key: "B",
    "data-text": "true"
  }, "\n") : r.createElement("br", {
    key: "B",
    "data-text": "true"
  }),
      l = function (t) {
    function e(n) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, e);

      var r = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
      }(this, t.call(this, n));

      return r._forceFlag = !1, r;
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
    }(e, t), e.prototype.shouldComponentUpdate = function (t) {
      var e = i.findDOMNode(this),
          n = "" === t.children;
      return e instanceof Element || a(!1), n ? !function (t) {
        return s ? "\n" === t.textContent : "BR" === t.tagName;
      }(e) : e.textContent !== t.children;
    }, e.prototype.componentDidMount = function () {
      this._forceFlag = !this._forceFlag;
    }, e.prototype.componentDidUpdate = function () {
      this._forceFlag = !this._forceFlag;
    }, e.prototype.render = function () {
      return "" === this.props.children ? this._forceFlag ? u : c : r.createElement("span", {
        key: this._forceFlag ? "A" : "B",
        "data-text": "true"
      }, this.props.children);
    }, e;
  }(r.Component);

  t.exports = l;
}, function (t, e, n) {
  "use strict";

  var r,
      i = "Unknown",
      o = new (n(611))().getResult(),
      a = function (t) {
    if (!t) return {
      major: "",
      minor: ""
    };
    var e = t.split(".");
    return {
      major: e[0],
      minor: e[1]
    };
  }(o.browser.version),
      s = {
    browserArchitecture: o.cpu.architecture || i,
    browserFullVersion: o.browser.version || i,
    browserMinorVersion: a.minor || i,
    browserName: o.browser.name || i,
    browserVersion: o.browser.major || i,
    deviceName: o.device.model || i,
    engineName: o.engine.name || i,
    engineVersion: o.engine.version || i,
    platformArchitecture: o.cpu.architecture || i,
    platformName: (r = o.os.name, {
      "Mac OS": "Mac OS X"
    }[r] || r || i),
    platformVersion: o.os.version || i,
    platformFullVersion: o.os.version || i
  };

  t.exports = s;
}, function (t, e, n) {
  var r;
  !function (i, o) {
    "use strict";

    var a = "model",
        s = "name",
        u = "type",
        c = "vendor",
        l = "version",
        f = "mobile",
        p = "tablet",
        h = {
      extend: function extend(t, e) {
        var n = {};

        for (var r in t) {
          e[r] && e[r].length % 2 == 0 ? n[r] = e[r].concat(t[r]) : n[r] = t[r];
        }

        return n;
      },
      has: function has(t, e) {
        return "string" == typeof t && -1 !== e.toLowerCase().indexOf(t.toLowerCase());
      },
      lowerize: function lowerize(t) {
        return t.toLowerCase();
      },
      major: function major(t) {
        return "string" == typeof t ? t.replace(/[^\d\.]/g, "").split(".")[0] : void 0;
      },
      trim: function trim(t) {
        return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
    },
        d = {
      rgx: function rgx(t, e) {
        for (var n, r, i, o, a, s, u = 0; u < e.length && !a;) {
          var c = e[u],
              l = e[u + 1];

          for (n = r = 0; n < c.length && !a;) {
            if (a = c[n++].exec(t)) for (i = 0; i < l.length; i++) {
              s = a[++r], "object" == _typeof(o = l[i]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 == o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
            }
          }

          u += 2;
        }
      },
      str: function str(t, e) {
        for (var n in e) {
          if ("object" == _typeof(e[n]) && e[n].length > 0) {
            for (var r = 0; r < e[n].length; r++) {
              if (h.has(e[n][r], t)) return "?" === n ? void 0 : n;
            }
          } else if (h.has(e[n], t)) return "?" === n ? void 0 : n;
        }

        return t;
      }
    },
        g = {
      browser: {
        oldsafari: {
          version: {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
          }
        }
      },
      device: {
        amazon: {
          model: {
            "Fire Phone": ["SD", "KF"]
          }
        },
        sprint: {
          model: {
            "Evo Shift 4G": "7373KT"
          },
          vendor: {
            HTC: "APA",
            Sprint: "Sprint"
          }
        }
      },
      os: {
        windows: {
          version: {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          }
        }
      }
    },
        y = {
      browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [s, l], [/(opios)[\/\s]+([\w\.]+)/i], [[s, "Opera Mini"], l], [/\s(opr)\/([\w\.]+)/i], [[s, "Opera"], l], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [s, l], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[s, "IE"], l], [/(edge|edgios|edgea)\/((\d+)?[\w\.]+)/i], [[s, "Edge"], l], [/(yabrowser)\/([\w\.]+)/i], [[s, "Yandex"], l], [/(puffin)\/([\w\.]+)/i], [[s, "Puffin"], l], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[s, "UCBrowser"], l], [/(comodo_dragon)\/([\w\.]+)/i], [[s, /_/g, " "], l], [/(micromessenger)\/([\w\.]+)/i], [[s, "WeChat"], l], [/(qqbrowserlite)\/([\w\.]+)/i], [s, l], [/(QQ)\/([\d\.]+)/i], [s, l], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [s, l], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [s, l], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [s, l], [/(MetaSr)[\/\s]?([\w\.]+)/i], [s], [/(LBBROWSER)/i], [s], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [l, [s, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [l, [s, "Facebook"]], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [l, [s, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[s, /(.+)/, "$1 WebView"], l], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[s, /(.+(?:g|us))(.+)/, "$1 $2"], l], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [l, [s, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [s, l], [/(dolfin)\/([\w\.]+)/i], [[s, "Dolphin"], l], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[s, "Chrome"], l], [/(coast)\/([\w\.]+)/i], [[s, "Opera Coast"], l], [/fxios\/([\w\.-]+)/i], [l, [s, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [l, [s, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [l, s], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[s, "GSA"], l], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [s, [l, d.str, g.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [s, l], [/(navigator|netscape)\/([\w\.-]+)/i], [[s, "Netscape"], l], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [s, l]],
      cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", h.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", h.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", h.lowerize]]],
      device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [a, c, [u, p]], [/applecoremedia\/[\w\.]+ \((ipad)/], [a, [c, "Apple"], [u, p]], [/(apple\s{0,1}tv)/i], [[a, "Apple TV"], [c, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [c, a, [u, p]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [a, [c, "Amazon"], [u, p]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[a, d.str, g.device.amazon.model], [c, "Amazon"], [u, f]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [a, c, [u, f]], [/\((ip[honed|\s\w*]+);/i], [a, [c, "Apple"], [u, f]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [c, a, [u, f]], [/\(bb10;\s(\w+)/i], [a, [c, "BlackBerry"], [u, f]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [a, [c, "Asus"], [u, p]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[c, "Sony"], [a, "Xperia Tablet"], [u, p]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [a, [c, "Sony"], [u, f]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [c, a, [u, "console"]], [/android.+;\s(shield)\sbuild/i], [a, [c, "Nvidia"], [u, "console"]], [/(playstation\s[34portablevi]+)/i], [a, [c, "Sony"], [u, "console"]], [/(sprint\s(\w+))/i], [[c, d.str, g.device.sprint.vendor], [a, d.str, g.device.sprint.model], [u, f]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [c, a, [u, p]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [c, [a, /_/g, " "], [u, f]], [/(nexus\s9)/i], [a, [c, "HTC"], [u, p]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [a, [c, "Huawei"], [u, f]], [/(microsoft);\s(lumia[\s\w]+)/i], [c, a, [u, f]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [a, [c, "Microsoft"], [u, "console"]], [/(kin\.[onetw]{3})/i], [[a, /\./g, " "], [c, "Microsoft"], [u, f]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [a, [c, "Motorola"], [u, f]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [a, [c, "Motorola"], [u, p]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[c, h.trim], [a, h.trim], [u, "smarttv"]], [/hbbtv.+maple;(\d+)/i], [[a, /^/, "SmartTV"], [c, "Samsung"], [u, "smarttv"]], [/\(dtv[\);].+(aquos)/i], [a, [c, "Sharp"], [u, "smarttv"]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[c, "Samsung"], a, [u, p]], [/smart-tv.+(samsung)/i], [c, [u, "smarttv"], a], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[c, "Samsung"], a, [u, f]], [/sie-(\w*)/i], [a, [c, "Siemens"], [u, f]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[c, "Nokia"], a, [u, f]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [a, [c, "Acer"], [u, p]], [/android.+([vl]k\-?\d{3})\s+build/i], [a, [c, "LG"], [u, p]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[c, "LG"], a, [u, p]], [/(lg) netcast\.tv/i], [c, a, [u, "smarttv"]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [a, [c, "LG"], [u, f]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [a, [c, "Lenovo"], [u, p]], [/linux;.+((jolla));/i], [c, a, [u, f]], [/((pebble))app\/[\d\.]+\s/i], [c, a, [u, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [c, a, [u, f]], [/crkey/i], [[a, "Chromecast"], [c, "Google"]], [/android.+;\s(glass)\s\d/i], [a, [c, "Google"], [u, "wearable"]], [/android.+;\s(pixel c)\s/i], [a, [c, "Google"], [u, p]], [/android.+;\s(pixel xl|pixel)\s/i], [a, [c, "Google"], [u, f]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [c, "Xiaomi"], [u, f]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[a, /_/g, " "], [c, "Xiaomi"], [u, p]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [a, [c, "Meizu"], [u, p]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [a, [c, "OnePlus"], [u, f]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [a, [c, "RCA"], [u, p]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [a, [c, "Dell"], [u, p]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [a, [c, "Verizon"], [u, p]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[c, "Barnes & Noble"], a, [u, p]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [a, [c, "NuVision"], [u, p]], [/android.+;\s(k88)\sbuild/i], [a, [c, "ZTE"], [u, p]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [a, [c, "Swiss"], [u, f]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [a, [c, "Swiss"], [u, p]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [a, [c, "Zeki"], [u, p]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[c, "Dragon Touch"], a, [u, p]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [a, [c, "Insignia"], [u, p]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [a, [c, "NextBook"], [u, p]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[c, "Voice"], a, [u, f]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[c, "LvTel"], a, [u, f]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [a, [c, "Envizen"], [u, p]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [c, a, [u, p]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [a, [c, "MachSpeed"], [u, p]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [c, a, [u, p]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [a, [c, "Rotor"], [u, p]], [/android.+(KS(.+))\s+build/i], [a, [c, "Amazon"], [u, p]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [c, a, [u, p]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[u, h.lowerize], c, a], [/(android[\w\.\s\-]{0,9});.+build/i], [a, [c, "Generic"]]],
      engine: [[/windows.+\sedge\/([\w\.]+)/i], [l, [s, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [s, l], [/rv\:([\w\.]{1,9}).+(gecko)/i], [l, s]],
      os: [[/microsoft\s(windows)\s(vista|xp)/i], [s, l], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [s, [l, d.str, g.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[s, "Windows"], [l, d.str, g.os.windows.version]], [/\((bb)(10);/i], [[s, "BlackBerry"], l], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [s, l], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[s, "Symbian"], l], [/\((series40);/i], [s], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[s, "Firefox OS"], l], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [s, l], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[s, "Chromium OS"], l], [/(sunos)\s?([\w\.\d]*)/i], [[s, "Solaris"], l], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [s, l], [/(haiku)\s(\w+)/i], [s, l], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[l, /_/g, "."], [s, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[s, "Mac OS"], [l, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]*)/i], [s, l]]
    },
        v = function v(t, e) {
      if ("object" == _typeof(t) && (e = t, t = void 0), !(this instanceof v)) return new v(t, e).getResult();
      var n = t || (i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
          r = e ? h.extend(y, e) : y;
      return this.getBrowser = function () {
        var t = {
          name: void 0,
          version: void 0
        };
        return d.rgx.call(t, n, r.browser), t.major = h.major(t.version), t;
      }, this.getCPU = function () {
        var t = {
          architecture: void 0
        };
        return d.rgx.call(t, n, r.cpu), t;
      }, this.getDevice = function () {
        var t = {
          vendor: void 0,
          model: void 0,
          type: void 0
        };
        return d.rgx.call(t, n, r.device), t;
      }, this.getEngine = function () {
        var t = {
          name: void 0,
          version: void 0
        };
        return d.rgx.call(t, n, r.engine), t;
      }, this.getOS = function () {
        var t = {
          name: void 0,
          version: void 0
        };
        return d.rgx.call(t, n, r.os), t;
      }, this.getResult = function () {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      }, this.getUA = function () {
        return n;
      }, this.setUA = function (t) {
        return n = t, this;
      }, this;
    };

    v.VERSION = "0.7.18", v.BROWSER = {
      NAME: s,
      MAJOR: "major",
      VERSION: l
    }, v.CPU = {
      ARCHITECTURE: "architecture"
    }, v.DEVICE = {
      MODEL: a,
      VENDOR: c,
      TYPE: u,
      CONSOLE: "console",
      MOBILE: f,
      SMARTTV: "smarttv",
      TABLET: p,
      WEARABLE: "wearable",
      EMBEDDED: "embedded"
    }, v.ENGINE = {
      NAME: s,
      VERSION: l
    }, v.OS = {
      NAME: s,
      VERSION: l
    }, void 0 !== e ? (void 0 !== t && t.exports && (e = t.exports = v), e.UAParser = v) : n(612) ? void 0 === (r = function () {
      return v;
    }.call(e, n, e, t)) || (t.exports = r) : i && (i.UAParser = v);
    var m = i && (i.jQuery || i.Zepto);

    if (void 0 !== m) {
      var _ = new v();

      m.ua = _.getResult(), m.ua.get = function () {
        return _.getUA();
      }, m.ua.set = function (t) {
        _.setUA(t);

        var e = _.getResult();

        for (var n in e) {
          m.ua[n] = e[n];
        }
      };
    }
  }("object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) ? window : this);
}, function (t, e) {
  (function (e) {
    t.exports = e;
  }).call(this, {});
}, function (t, e, n) {
  "use strict";

  var r = n(19),
      i = /\./,
      o = /\|\|/,
      a = /\s+\-\s+/,
      s = /^(<=|<|=|>=|~>|~|>|)?\s*(.+)/,
      u = /^(\d*)(.*)/;

  function c(t, e) {
    if ("" === (t = t.trim())) return !0;
    var n,
        r = e.split(i),
        o = p(t),
        a = o.modifier,
        s = o.rangeComponents;

    switch (a) {
      case "<":
        return l(r, s);

      case "<=":
        return -1 === (n = m(r, s)) || 0 === n;

      case ">=":
        return f(r, s);

      case ">":
        return function (t, e) {
          return 1 === m(t, e);
        }(r, s);

      case "~":
      case "~>":
        return function (t, e) {
          var n = e.slice(),
              r = e.slice();
          r.length > 1 && r.pop();
          var i = r.length - 1,
              o = parseInt(r[i], 10);
          return h(o) && (r[i] = o + 1 + ""), f(t, n) && l(t, r);
        }(r, s);

      default:
        return function (t, e) {
          return 0 === m(t, e);
        }(r, s);
    }
  }

  function l(t, e) {
    return -1 === m(t, e);
  }

  function f(t, e) {
    var n = m(t, e);
    return 1 === n || 0 === n;
  }

  function p(t) {
    var e = t.split(i),
        n = e[0].match(s);
    return n || r(!1), {
      modifier: n[1],
      rangeComponents: [n[2]].concat(e.slice(1))
    };
  }

  function h(t) {
    return !isNaN(t) && isFinite(t);
  }

  function d(t) {
    return !p(t).modifier;
  }

  function g(t, e) {
    for (var n = t.length; n < e; n++) {
      t[n] = "0";
    }
  }

  function y(t, e) {
    var n = t.match(u)[1],
        r = e.match(u)[1],
        i = parseInt(n, 10),
        o = parseInt(r, 10);
    return h(i) && h(o) && i !== o ? v(i, o) : v(t, e);
  }

  function v(t, e) {
    return _typeof(t) != _typeof(e) && r(!1), t > e ? 1 : t < e ? -1 : 0;
  }

  function m(t, e) {
    for (var n = function (t, e) {
      g(t = t.slice(), (e = e.slice()).length);

      for (var n = 0; n < e.length; n++) {
        var r = e[n].match(/^[x*]$/i);
        if (r && (e[n] = t[n] = "0", "*" === r[0] && n === e.length - 1)) for (var i = n; i < t.length; i++) {
          t[i] = "0";
        }
      }

      return g(e, t.length), [t, e];
    }(t, e), r = n[0], i = n[1], o = 0; o < i.length; o++) {
      var a = y(r[o], i[o]);
      if (a) return a;
    }

    return 0;
  }

  var _ = {
    contains: function contains(t, e) {
      return function (t, e) {
        var n = t.split(o);
        return n.length > 1 ? n.some(function (t) {
          return _.contains(t, e);
        }) : function (t, e) {
          var n = t.split(a);
          if (n.length > 0 && n.length <= 2 || r(!1), 1 === n.length) return c(n[0], e);
          var i = n[0],
              o = n[1];
          return d(i) && d(o) || r(!1), c(">=" + i, e) && c("<=" + o, e);
        }(t = n[0].trim(), e);
      }(t.trim(), e.trim());
    }
  };
  t.exports = _;
}, function (t, e, n) {
  "use strict";

  var r = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, n) {
    if (!t) return null;
    var i = {};

    for (var o in t) {
      r.call(t, o) && (i[o] = e.call(n, t[o], o, t));
    }

    return i;
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    var e = {};
    return function (n) {
      return e.hasOwnProperty(n) || (e[n] = t.call(this, n)), e[n];
    };
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(617),
        i = n(189),
        o = n(274),
        a = n(19);

    function s(t, e) {
      if (!t) return "[empty]";

      var n = function t(e, n) {
        var r = void 0 !== n ? n(e) : [];

        if (e.nodeType === Node.TEXT_NODE) {
          var i = e.textContent.length;
          return document.createTextNode("[text " + i + (r.length ? " | " + r.join(", ") : "") + "]");
        }

        var o = e.cloneNode();
        1 === o.nodeType && r.length && o.setAttribute("data-labels", r.join(", "));

        for (var a = e.childNodes, s = 0; s < a.length; s++) {
          o.appendChild(t(a[s], n));
        }

        return o;
      }(t, e);

      return n.nodeType === Node.TEXT_NODE ? n.textContent : (n instanceof Element || a(!1), n.outerHTML);
    }

    function u(t, e) {
      for (var n = t; n;) {
        if (n instanceof Element && n.hasAttribute("contenteditable")) return s(n, e);
        n = n.parentNode;
      }

      return "Could not find contentEditable parent of node";
    }

    function c(t) {
      return null === t.nodeValue ? t.childNodes.length : t.nodeValue.length;
    }

    function l(t, e, n, a) {
      var s = o();

      if (t.extend && i(s, e)) {
        n > c(e) && r.logSelectionStateFailure({
          anonymizedDom: u(e),
          extraParams: JSON.stringify({
            offset: n
          }),
          selectionState: JSON.stringify(a.toJS())
        });
        var l = e === t.focusNode;

        try {
          t.extend(e, n);
        } catch (i) {
          throw r.logSelectionStateFailure({
            anonymizedDom: u(e, function (e) {
              var n = [];
              return e === s && n.push("active element"), e === t.anchorNode && n.push("selection anchor node"), e === t.focusNode && n.push("selection focus node"), n;
            }),
            extraParams: JSON.stringify({
              activeElementName: s ? s.nodeName : null,
              nodeIsFocus: e === t.focusNode,
              nodeWasFocus: l,
              selectionRangeCount: t.rangeCount,
              selectionAnchorNodeName: t.anchorNode ? t.anchorNode.nodeName : null,
              selectionAnchorOffset: t.anchorOffset,
              selectionFocusNodeName: t.focusNode ? t.focusNode.nodeName : null,
              selectionFocusOffset: t.focusOffset,
              message: i ? "" + i : null,
              offset: n
            }, null, 2),
            selectionState: JSON.stringify(a.toJS(), null, 2)
          }), i;
        }
      } else {
        var f = t.getRangeAt(0);
        f.setEnd(e, n), t.addRange(f.cloneRange());
      }
    }

    function f(t, e, n, i) {
      var o = document.createRange();
      n > c(e) && r.logSelectionStateFailure({
        anonymizedDom: u(e),
        extraParams: JSON.stringify({
          offset: n
        }),
        selectionState: JSON.stringify(i.toJS())
      }), o.setStart(e, n), t.addRange(o);
    }

    t.exports = function (t, n, r, o, a) {
      if (i(document.documentElement, n)) {
        var s = e.getSelection(),
            u = t.getAnchorKey(),
            c = t.getAnchorOffset(),
            p = t.getFocusKey(),
            h = t.getFocusOffset(),
            d = t.getIsBackward();

        if (!s.extend && d) {
          var g = u,
              y = c;
          u = p, c = h, p = g, h = y, d = !1;
        }

        var v = u === r && o <= c && a >= c,
            m = p === r && o <= h && a >= h;
        if (v && m) return s.removeAllRanges(), f(s, n, c - o, t), void l(s, n, h - o, t);

        if (d) {
          if (m && (s.removeAllRanges(), f(s, n, h - o, t)), v) {
            var _ = s.focusNode,
                b = s.focusOffset;
            s.removeAllRanges(), f(s, n, c - o, t), l(s, _, b, t);
          }
        } else v && (s.removeAllRanges(), f(s, n, c - o, t)), m && l(s, n, h - o, t);
      }
    };
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  t.exports = {
    logSelectionStateFailure: function logSelectionStateFailure() {
      return null;
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(619);

  t.exports = function (t) {
    return r(t) && 3 == t.nodeType;
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    var e = (t ? t.ownerDocument || t : document).defaultView || window;
    return !(!t || !("function" == typeof e.Node ? t instanceof e.Node : "object" == _typeof(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName));
  };
}, function (t, e, n) {
  "use strict";

  var r = n(621),
      i = n(622);

  function o(t) {
    return null == t ? t : String(t);
  }

  t.exports = function (t, e) {
    var n = void 0;
    if (window.getComputedStyle && (n = window.getComputedStyle(t, null))) return o(n.getPropertyValue(i(e)));

    if (document.defaultView && document.defaultView.getComputedStyle) {
      if (n = document.defaultView.getComputedStyle(t, null)) return o(n.getPropertyValue(i(e)));
      if ("display" === e) return "none";
    }

    return t.currentStyle ? o("float" === e ? t.currentStyle.cssFloat || t.currentStyle.styleFloat : t.currentStyle[r(e)]) : o(t.style && t.style[r(e)]);
  };
}, function (t, e, n) {
  "use strict";

  var r = /-(.)/g;

  t.exports = function (t) {
    return t.replace(r, function (t, e) {
      return e.toUpperCase();
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = /([A-Z])/g;

  t.exports = function (t) {
    return t.replace(r, "-$1").toLowerCase();
  };
}, function (t, e, n) {
  "use strict";

  var r = n(624);

  t.exports = function (t) {
    var e = r(t);
    return {
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = n(189);

  t.exports = function (t) {
    var e = t.ownerDocument.documentElement;
    if (!("getBoundingClientRect" in t) || !r(e, t)) return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    var n = t.getBoundingClientRect();
    return {
      left: Math.round(n.left) - e.clientLeft,
      right: Math.round(n.right) - e.clientLeft,
      top: Math.round(n.top) - e.clientTop,
      bottom: Math.round(n.bottom) - e.clientTop
    };
  };
}, function (t, e, n) {
  "use strict";

  var r = "undefined" != typeof navigator && navigator.userAgent.indexOf("AppleWebKit") > -1;

  t.exports = function (t) {
    return (t = t || document).scrollingElement ? t.scrollingElement : r || "CSS1Compat" !== t.compatMode ? t.body : t.documentElement;
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    return t.Window && t instanceof t.Window ? {
      x: t.pageXOffset || t.document.documentElement.scrollLeft,
      y: t.pageYOffset || t.document.documentElement.scrollTop
    } : {
      x: t.scrollLeft,
      y: t.scrollTop
    };
  };
}, function (t, e, n) {
  "use strict";

  function r() {
    var t = void 0;
    return document.documentElement && (t = document.documentElement.clientWidth), !t && document.body && (t = document.body.clientWidth), t || 0;
  }

  function i() {
    var t = void 0;
    return document.documentElement && (t = document.documentElement.clientHeight), !t && document.body && (t = document.body.clientHeight), t || 0;
  }

  function o() {
    return {
      width: window.innerWidth || r(),
      height: window.innerHeight || i()
    };
  }

  o.withoutScrollbars = function () {
    return {
      width: r(),
      height: i()
    };
  }, t.exports = o;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    t || (t = "");
    var e = void 0,
        n = arguments.length;
    if (n > 1) for (var r = 1; r < n; r++) {
      (e = arguments[r]) && (t = (t ? t + " " : "") + e);
    }
    return t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(276),
      i = n(46),
      o = n(22),
      a = n(192),
      s = n(278),
      u = n(279),
      c = n(114),
      l = n(54),
      f = {
    onDragEnd: function onDragEnd(t) {
      t.exitCurrentMode();
    },
    onDrop: function onDrop(t, e) {
      var n = new r(e.nativeEvent.dataTransfer),
          f = t._latestEditorState,
          h = function (t, e) {
        var n = null,
            r = null;

        if ("function" == typeof document.caretRangeFromPoint) {
          var i = document.caretRangeFromPoint(t.x, t.y);
          n = i.startContainer, r = i.startOffset;
        } else {
          if (!t.rangeParent) return null;
          n = t.rangeParent, r = t.rangeOffset;
        }

        n = l(n), r = l(r);
        var o = l(a(n));
        return u(e, o, r, o, r);
      }(e.nativeEvent, f);

      if (e.preventDefault(), t.exitCurrentMode(), null != h) {
        var d = n.getFiles();

        if (d.length > 0) {
          if (t.props.handleDroppedFiles && c(t.props.handleDroppedFiles(h, d))) return;
          s(d, function (e) {
            e && t.update(p(f, h, e));
          });
        } else {
          var g = t._internalDrag ? "internal" : "external";
          t.props.handleDrop && c(t.props.handleDrop(h, n, g)) || (t._internalDrag ? t.update(function (t, e) {
            var n = i.moveText(t.getCurrentContent(), t.getSelection(), e);
            return o.push(t, n, "insert-fragment");
          }(f, h)) : t.update(p(f, h, n.getText())));
        }
      }
    }
  };

  function p(t, e, n) {
    var r = i.insertText(t.getCurrentContent(), e, n, t.getCurrentInlineStyle());
    return o.push(t, r, "insert-fragment");
  }

  t.exports = f;
}, function (t, e, n) {
  "use strict";

  var r = {
    isImage: function isImage(t) {
      return "image" === i(t)[0];
    },
    isJpeg: function isJpeg(t) {
      var e = i(t);
      return r.isImage(t) && ("jpeg" === e[1] || "pjpeg" === e[1]);
    }
  };

  function i(t) {
    return t.split("/");
  }

  t.exports = r;
}, function (t, e, n) {
  "use strict";

  var r = n(19);

  t.exports = function (t) {
    return function (t) {
      return !!t && ("object" == _typeof(t) || "function" == typeof t) && "length" in t && !("setInterval" in t) && "number" != typeof t.nodeType && (Array.isArray(t) || "callee" in t || "item" in t);
    }(t) ? Array.isArray(t) ? t.slice() : function (t) {
      var e = t.length;
      if ((Array.isArray(t) || "object" != _typeof(t) && "function" != typeof t) && r(!1), "number" != typeof e && r(!1), 0 === e || e - 1 in t || r(!1), "function" == typeof t.callee && r(!1), t.hasOwnProperty) try {
        return Array.prototype.slice.call(t);
      } catch (t) {}

      for (var n = Array(e), i = 0; i < e; i++) {
        n[i] = t[i];
      }

      return n;
    }(t) : [t];
  };
}, function (t, e, n) {
  "use strict";

  var r = {
    onBeforeInput: n(633),
    onBlur: n(636),
    onCompositionStart: n(637),
    onCopy: n(638),
    onCut: n(639),
    onDragOver: n(640),
    onDragStart: n(641),
    onFocus: n(642),
    onInput: n(643),
    onKeyDown: n(644),
    onPaste: n(658),
    onSelect: n(663)
  };
  t.exports = r;
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(268),
        i = n(46),
        o = n(22),
        a = n(56),
        s = n(188),
        u = n(114),
        c = n(272),
        l = n(54),
        f = n(634),
        p = a.isBrowser("Firefox");

    function h(t, e, n, r) {
      var a = i.replaceText(t.getCurrentContent(), t.getSelection(), e, n, r);
      return o.push(t, a, "insert-characters");
    }

    t.exports = function (t, n) {
      void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
      var i = t._latestEditorState,
          a = n.data;
      if (a) if (t.props.handleBeforeInput && u(t.props.handleBeforeInput(a, i))) n.preventDefault();else {
        var d = i.getSelection(),
            g = d.getStartOffset(),
            y = d.getEndOffset(),
            v = d.getAnchorKey();
        if (!d.isCollapsed()) return n.preventDefault(), void (a === i.getCurrentContent().getPlainText().slice(g, y) ? t.update(o.forceSelection(i, d.merge({
          focusOffset: y
        }))) : t.update(h(i, a, i.getCurrentInlineStyle(), s(i.getCurrentContent(), i.getSelection()))));

        var m,
            _ = h(i, a, i.getCurrentInlineStyle(), s(i.getCurrentContent(), i.getSelection())),
            b = !1;

        if (b || (b = c(t._latestCommittedEditorState)), !b) {
          var w = e.getSelection();

          if (w.anchorNode && w.anchorNode.nodeType === Node.TEXT_NODE) {
            var S = w.anchorNode.parentNode;
            b = "SPAN" === S.nodeName && S.firstChild.nodeType === Node.TEXT_NODE && -1 !== S.firstChild.nodeValue.indexOf("\t");
          }
        }

        if (b || (b = r.getFingerprint(i.getBlockTree(v)) !== r.getFingerprint(_.getBlockTree(v))), b || (m = a, b = p && ("'" == m || "/" == m)), b || (b = l(_.getDirectionMap()).get(v) !== l(i.getDirectionMap()).get(v)), b) return n.preventDefault(), void t.update(_);
        _ = o.set(_, {
          nativelyRenderedContent: _.getCurrentContent()
        }), t._pendingStateFromBeforeInput = _, f(function () {
          void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
        });
      }
    };
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  (function (e) {
    n(635), t.exports = e.setImmediate;
  }).call(this, n(25));
}, function (t, e, n) {
  (function (t, e) {
    !function (t, n) {
      "use strict";

      if (!t.setImmediate) {
        var r,
            i,
            o,
            a,
            s,
            u = 1,
            c = {},
            l = !1,
            f = t.document,
            p = Object.getPrototypeOf && Object.getPrototypeOf(t);
        p = p && p.setTimeout ? p : t, "[object process]" === {}.toString.call(t.process) ? r = function r(t) {
          e.nextTick(function () {
            d(t);
          });
        } : function () {
          if (t.postMessage && !t.importScripts) {
            var e = !0,
                n = t.onmessage;
            return t.onmessage = function () {
              e = !1;
            }, t.postMessage("", "*"), t.onmessage = n, e;
          }
        }() ? (a = "setImmediate$" + Math.random() + "$", s = function s(e) {
          e.source === t && "string" == typeof e.data && 0 === e.data.indexOf(a) && d(+e.data.slice(a.length));
        }, t.addEventListener ? t.addEventListener("message", s, !1) : t.attachEvent("onmessage", s), r = function r(e) {
          t.postMessage(a + e, "*");
        }) : t.MessageChannel ? ((o = new MessageChannel()).port1.onmessage = function (t) {
          d(t.data);
        }, r = function r(t) {
          o.port2.postMessage(t);
        }) : f && "onreadystatechange" in f.createElement("script") ? (i = f.documentElement, r = function r(t) {
          var e = f.createElement("script");
          e.onreadystatechange = function () {
            d(t), e.onreadystatechange = null, i.removeChild(e), e = null;
          }, i.appendChild(e);
        }) : r = function r(t) {
          setTimeout(d, 0, t);
        }, p.setImmediate = function (t) {
          "function" != typeof t && (t = new Function("" + t));

          for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) {
            e[n] = arguments[n + 1];
          }

          var i = {
            callback: t,
            args: e
          };
          return c[u] = i, r(u), u++;
        }, p.clearImmediate = h;
      }

      function h(t) {
        delete c[t];
      }

      function d(t) {
        if (l) setTimeout(d, 0, t);else {
          var e = c[t];

          if (e) {
            l = !0;

            try {
              !function (t) {
                var e = t.callback,
                    n = t.args;

                switch (n.length) {
                  case 0:
                    e();
                    break;

                  case 1:
                    e(n[0]);
                    break;

                  case 2:
                    e(n[0], n[1]);
                    break;

                  case 3:
                    e(n[0], n[1], n[2]);
                    break;

                  default:
                    e.apply(void 0, n);
                }
              }(e);
            } finally {
              h(t), l = !1;
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === t ? this : t : self);
  }).call(this, n(25), n(115));
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(22),
        i = n(189),
        o = n(274);

    t.exports = function (t, n) {
      if (o() === document.body) {
        var a = e.getSelection(),
            s = t.editor;
        1 === a.rangeCount && i(s, a.anchorNode) && i(s, a.focusNode) && a.removeAllRanges();
      }

      var u = t._latestEditorState,
          c = u.getSelection();

      if (c.getHasFocus()) {
        var l = c.set("hasFocus", !1);
        t.props.onBlur && t.props.onBlur(n), t.update(r.acceptSelection(u, l));
      }
    };
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  var r = n(22);

  t.exports = function (t, e) {
    t.setMode("composite"), t.update(r.set(t._latestEditorState, {
      inCompositionMode: !0
    })), t._onCompositionStart(e);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(280);

  t.exports = function (t, e) {
    t._latestEditorState.getSelection().isCollapsed() ? e.preventDefault() : t.setClipboard(r(t._latestEditorState));
  };
}, function (t, e, n) {
  "use strict";

  var r = n(46),
      i = n(22),
      o = n(190),
      a = n(280),
      s = n(191);

  t.exports = function (t, e) {
    var n = t._latestEditorState,
        u = n.getSelection(),
        c = e.target,
        l = void 0;
    if (u.isCollapsed()) e.preventDefault();else {
      c instanceof Node && (l = s(o.getScrollParent(c)));
      var f = a(n);
      t.setClipboard(f), t.setMode("cut"), setTimeout(function () {
        t.restoreEditorDOM(l), t.exitCurrentMode(), t.update(function (t) {
          var e = r.removeRange(t.getCurrentContent(), t.getSelection(), "forward");
          return i.push(t, e, "remove-range");
        }(n));
      }, 0);
    }
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e) {
    t._internalDrag = !1, t.setMode("drag"), e.preventDefault();
  };
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    t._internalDrag = !0, t.setMode("drag");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(22),
      i = n(56);

  t.exports = function (t, e) {
    var n = t._latestEditorState,
        o = n.getSelection();

    if (!o.getHasFocus()) {
      var a = o.set("hasFocus", !0);
      t.props.onFocus && t.props.onFocus(e), i.isBrowser("Chrome < 60.0.3081.0") ? t.update(r.forceSelection(n, a)) : t.update(r.acceptSelection(n, a));
    }
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(68),
        i = n(46),
        o = n(143),
        a = n(22),
        s = n(56),
        u = n(192),
        c = n(54),
        l = s.isEngine("Gecko");

    t.exports = function (t) {
      void 0 !== t._pendingStateFromBeforeInput && (t.update(t._pendingStateFromBeforeInput), t._pendingStateFromBeforeInput = void 0);
      var n = e.getSelection(),
          s = n.anchorNode,
          f = n.isCollapsed,
          p = s.nodeType !== Node.TEXT_NODE,
          h = s.nodeType !== Node.TEXT_NODE && s.nodeType !== Node.ELEMENT_NODE;

      if (r.draft_killswitch_allow_nontextnodes) {
        if (p) return;
      } else if (h) return;

      if (s.nodeType === Node.TEXT_NODE && (null !== s.previousSibling || null !== s.nextSibling)) {
        var d = s.parentNode;
        s.nodeValue = d.textContent;

        for (var g = d.firstChild; null !== g; g = g.nextSibling) {
          g !== s && d.removeChild(g);
        }
      }

      var y = s.textContent,
          v = t._latestEditorState,
          m = c(u(s)),
          _ = o.decode(m),
          b = _.blockKey,
          w = _.decoratorKey,
          S = _.leafKey,
          x = v.getBlockTree(b).getIn([w, "leaves", S]),
          E = x.start,
          k = x.end,
          C = v.getCurrentContent(),
          O = C.getBlockForKey(b),
          T = O.getText().slice(E, k);

      if (y.endsWith("\n\n") && (y = y.slice(0, -1)), y !== T) {
        var D,
            M,
            K,
            A,
            I = v.getSelection(),
            B = I.merge({
          anchorOffset: E,
          focusOffset: k,
          isBackward: !1
        }),
            L = O.getEntityAt(E),
            R = L && C.getEntity(L),
            N = "MUTABLE" === (R && R.getMutability()),
            F = N ? "spellcheck-change" : "apply-entity",
            z = i.replaceText(C, B, y, O.getInlineStyleAt(E), N ? O.getEntityAt(E) : null);
        if (l) D = n.anchorOffset, M = n.focusOffset, A = (K = E + Math.min(D, M)) + Math.abs(D - M), D = K, M = A;else {
          var P = y.length - T.length;
          K = I.getStartOffset(), A = I.getEndOffset(), D = f ? A + P : K, M = A + P;
        }
        var j = z.merge({
          selectionBefore: C.getSelectionAfter(),
          selectionAfter: I.merge({
            anchorOffset: D,
            focusOffset: M
          })
        });
        t.update(a.push(v, j, F));
      }
    };
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  var r = n(46),
      i = n(22),
      o = n(193),
      a = n(187),
      s = n(645),
      u = n(56),
      c = n(114),
      l = n(646),
      f = n(648),
      p = n(650),
      h = n(651),
      d = n(652),
      g = n(653),
      y = n(654),
      v = n(655),
      m = n(656),
      _ = n(657),
      b = o.isOptionKeyCommand,
      w = u.isBrowser("Chrome");

  t.exports = function (t, e) {
    var n = e.which,
        o = t._latestEditorState;

    switch (n) {
      case a.RETURN:
        if (e.preventDefault(), t.props.handleReturn && c(t.props.handleReturn(e, o))) return;
        break;

      case a.ESC:
        return e.preventDefault(), void (t.props.onEscape && t.props.onEscape(e));

      case a.TAB:
        return void (t.props.onTab && t.props.onTab(e));

      case a.UP:
        return void (t.props.onUpArrow && t.props.onUpArrow(e));

      case a.RIGHT:
        return void (t.props.onRightArrow && t.props.onRightArrow(e));

      case a.DOWN:
        return void (t.props.onDownArrow && t.props.onDownArrow(e));

      case a.LEFT:
        return void (t.props.onLeftArrow && t.props.onLeftArrow(e));

      case a.SPACE:
        if (w && b(e)) {
          e.preventDefault();
          var u = r.replaceText(o.getCurrentContent(), o.getSelection(), " ");
          return void t.update(i.push(o, u, "insert-characters"));
        }

    }

    var S = t.props.keyBindingFn(e);
    if (S) if ("undo" !== S) {
      if (e.preventDefault(), !t.props.handleKeyCommand || !c(t.props.handleKeyCommand(S, o))) {
        var x = function (t, e) {
          switch (t) {
            case "redo":
              return i.redo(e);

            case "delete":
              return v(e);

            case "delete-word":
              return p(e);

            case "backspace":
              return y(e);

            case "backspace-word":
              return f(e);

            case "backspace-to-start-of-line":
              return l(e);

            case "split-block":
              return h(e);

            case "transpose-characters":
              return m(e);

            case "move-selection-to-start-of-block":
              return g(e);

            case "move-selection-to-end-of-block":
              return d(e);

            case "secondary-cut":
              return s.cut(e);

            case "secondary-paste":
              return s.paste(e);

            default:
              return e;
          }
        }(S, o);

        x !== o && t.update(x);
      }
    } else _(e, o, t.update);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(46),
      i = n(22),
      o = n(141),
      a = n(54),
      s = null,
      u = {
    cut: function cut(t) {
      var e = t.getCurrentContent(),
          n = t.getSelection(),
          u = null;

      if (n.isCollapsed()) {
        var c = n.getAnchorKey(),
            l = e.getBlockForKey(c).getLength();
        if (l === n.getAnchorOffset()) return t;
        u = n.set("focusOffset", l);
      } else u = n;

      u = a(u), s = o(e, u);
      var f = r.removeRange(e, u, "forward");
      return f === e ? t : i.push(t, f, "remove-range");
    },
    paste: function paste(t) {
      if (!s) return t;
      var e = r.replaceWithFragment(t.getCurrentContent(), t.getSelection(), s);
      return i.push(t, e, "insert-fragment");
    }
  };
  t.exports = u;
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(22),
        i = n(647),
        o = n(282),
        a = n(194),
        s = n(116);

    t.exports = function (t) {
      var n = s(t, function (t) {
        var n = t.getSelection();
        if (n.isCollapsed() && 0 === n.getAnchorOffset()) return a(t, 1);
        var r = e.getSelection().getRangeAt(0);
        return r = i(r), o(t, null, r.endContainer, r.endOffset, r.startContainer, r.startOffset).selectionState;
      }, "backward");
      return n === t.getCurrentContent() ? t : r.push(t, n, "remove-range");
    };
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  var r = n(83),
      i = n(281),
      o = n(19);

  function a(t, e) {
    for (var n = 1 / 0, r = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0; a < t.length; a++) {
      var s = t[a];
      0 !== s.width && 1 !== s.width && (n = Math.min(n, s.top), r = Math.min(r, s.bottom), i = Math.max(i, s.top), o = Math.max(o, s.bottom));
    }

    return i <= r && i - n < e && o - r < e;
  }

  function s(t) {
    switch (t.nodeType) {
      case Node.DOCUMENT_TYPE_NODE:
        return 0;

      case Node.TEXT_NODE:
      case Node.PROCESSING_INSTRUCTION_NODE:
      case Node.COMMENT_NODE:
        return t.length;

      default:
        return t.childNodes.length;
    }
  }

  t.exports = function (t) {
    t.collapsed || o(!1);
    var e = (t = t.cloneRange()).startContainer;
    1 !== e.nodeType && (e = e.parentNode);

    var n = function (t) {
      var e = getComputedStyle(t),
          n = document.createElement("div");
      n.style.fontFamily = e.fontFamily, n.style.fontSize = e.fontSize, n.style.fontStyle = e.fontStyle, n.style.fontWeight = e.fontWeight, n.style.lineHeight = e.lineHeight, n.style.position = "absolute", n.textContent = "M";
      var r = document.body;
      r || o(!1), r.appendChild(n);
      var i = n.getBoundingClientRect();
      return r.removeChild(n), i.height;
    }(e),
        u = t.endContainer,
        c = t.endOffset;

    for (t.setStart(t.startContainer, 0); a(i(t), n) && (u = t.startContainer, c = t.startOffset, u.parentNode || o(!1), t.setStartBefore(u), 1 !== u.nodeType || "inline" === getComputedStyle(u).display);) {
      ;
    }

    for (var l = u, f = c - 1;;) {
      for (var p = l.nodeValue, h = f; h >= 0; h--) {
        if (!(null != p && h > 0 && r.isSurrogatePair(p, h - 1))) {
          if (t.setStart(l, h), !a(i(t), n)) break;
          u = l, c = h;
        }
      }

      if (-1 === h || 0 === l.childNodes.length) break;
      f = s(l = l.childNodes[h]);
    }

    return t.setStart(u, c), t;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(283),
      i = n(22),
      o = n(194),
      a = n(116);

  t.exports = function (t) {
    var e = a(t, function (t) {
      var e = t.getSelection(),
          n = e.getStartOffset();
      if (0 === n) return o(t, 1);
      var i = e.getStartKey(),
          a = t.getCurrentContent().getBlockForKey(i).getText().slice(0, n),
          s = r.getBackward(a);
      return o(t, s.length || 1);
    }, "backward");
    return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
  };
}, function (t, e, n) {
  "use strict";

  t.exports = {
    getPunctuation: function getPunctuation() {
      return "[.,+*?$|#{}()'\\^\\-\\[\\]\\\\\\/!@%\"~=<>_:;・、。〈-】〔-〟：-？！-／［-｀｛-･⸮؟٪-٬؛،؍﴾﴿᠁।၊။‐-‧‰-⁞¡-±´-¸º»¿]";
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(283),
      i = n(22),
      o = n(284),
      a = n(116);

  t.exports = function (t) {
    var e = a(t, function (t) {
      var e = t.getSelection(),
          n = e.getStartOffset(),
          i = e.getStartKey(),
          a = t.getCurrentContent().getBlockForKey(i).getText().slice(n),
          s = r.getForward(a);
      return o(t, s.length || 1);
    }, "forward");
    return e === t.getCurrentContent() ? t : i.push(t, e, "remove-range");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(46),
      i = n(22);

  t.exports = function (t) {
    var e = r.splitBlock(t.getCurrentContent(), t.getSelection());
    return i.push(t, e, "split-block");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(22);

  t.exports = function (t) {
    var e = t.getSelection(),
        n = e.getEndKey(),
        i = t.getCurrentContent().getBlockForKey(n).getLength();
    return r.set(t, {
      selection: e.merge({
        anchorKey: n,
        anchorOffset: i,
        focusKey: n,
        focusOffset: i,
        isBackward: !1
      }),
      forceSelection: !0
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(22);

  t.exports = function (t) {
    var e = t.getSelection(),
        n = e.getStartKey();
    return r.set(t, {
      selection: e.merge({
        anchorKey: n,
        anchorOffset: 0,
        focusKey: n,
        focusOffset: 0,
        isBackward: !1
      }),
      forceSelection: !0
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(22),
      i = n(83),
      o = n(194),
      a = n(116);

  t.exports = function (t) {
    var e = a(t, function (t) {
      var e = t.getSelection(),
          n = t.getCurrentContent(),
          r = e.getAnchorKey(),
          a = e.getAnchorOffset(),
          s = n.getBlockForKey(r).getText()[a - 1];
      return o(t, s ? i.getUTF16Length(s, 0) : 1);
    }, "backward");
    if (e === t.getCurrentContent()) return t;
    var n = t.getSelection();
    return r.push(t, e.set("selectionBefore", n), n.isCollapsed() ? "backspace-character" : "remove-range");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(22),
      i = n(83),
      o = n(284),
      a = n(116);

  t.exports = function (t) {
    var e = a(t, function (t) {
      var e = t.getSelection(),
          n = t.getCurrentContent(),
          r = e.getAnchorKey(),
          a = e.getAnchorOffset(),
          s = n.getBlockForKey(r).getText()[a];
      return o(t, s ? i.getUTF16Length(s, 0) : 1);
    }, "forward");
    if (e === t.getCurrentContent()) return t;
    var n = t.getSelection();
    return r.push(t, e.set("selectionBefore", n), n.isCollapsed() ? "delete-character" : "remove-range");
  };
}, function (t, e, n) {
  "use strict";

  var r = n(46),
      i = n(22),
      o = n(141);

  t.exports = function (t) {
    var e = t.getSelection();
    if (!e.isCollapsed()) return t;
    var n = e.getAnchorOffset();
    if (0 === n) return t;
    var a,
        s,
        u = e.getAnchorKey(),
        c = t.getCurrentContent(),
        l = c.getBlockForKey(u).getLength();
    if (l <= 1) return t;
    n === l ? (a = e.set("anchorOffset", n - 1), s = e) : s = (a = e.set("focusOffset", n + 1)).set("anchorOffset", n + 1);
    var f = o(c, a),
        p = r.removeRange(c, a, "backward"),
        h = p.getSelectionAfter(),
        d = h.getAnchorOffset() - 1,
        g = h.merge({
      anchorOffset: d,
      focusOffset: d
    }),
        y = r.replaceWithFragment(p, g, f),
        v = i.push(t, y, "insert-fragment");
    return i.acceptSelection(v, s);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(22);

  t.exports = function (t, e, n) {
    var i = r.undo(e);
    if ("spellcheck-change" !== e.getLastChangeType()) t.preventDefault(), e.getNativelyRenderedContent() ? (n(r.set(e, {
      nativelyRenderedContent: null
    })), setTimeout(function () {
      n(i);
    }, 0)) : n(i);else {
      var o = i.getCurrentContent();
      n(r.set(i, {
        nativelyRenderedContent: o
      }));
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(112),
      i = n(47),
      o = n(276),
      a = n(46),
      s = n(659),
      u = n(22),
      c = n(287),
      l = n(188),
      f = n(278),
      p = n(114),
      h = n(662);

  function d(t, e, n) {
    var r = a.replaceWithFragment(t.getCurrentContent(), t.getSelection(), e);
    return u.push(t, r.set("entityMap", n), "insert-fragment");
  }

  t.exports = function (t, e) {
    e.preventDefault();
    var n = new o(e.clipboardData);

    if (!n.isRichText()) {
      var g = n.getFiles(),
          y = n.getText();

      if (g.length > 0) {
        if (t.props.handlePastedFiles && p(t.props.handlePastedFiles(g))) return;
        return void f(g, function (e) {
          if (e = e || y) {
            var n = t._latestEditorState,
                o = h(e),
                f = i.create({
              style: n.getCurrentInlineStyle(),
              entity: l(n.getCurrentContent(), n.getSelection())
            }),
                p = c.getCurrentBlockType(n),
                d = s.processText(o, f, p),
                g = r.createFromArray(d),
                v = a.replaceWithFragment(n.getCurrentContent(), n.getSelection(), g);
            t.update(u.push(n, v, "insert-fragment"));
          }
        });
      }
    }

    var v = [],
        m = n.getText(),
        _ = n.getHTML(),
        b = t._latestEditorState;

    if (!t.props.handlePastedText || !p(t.props.handlePastedText(m, _, b))) {
      if (m && (v = h(m)), !t.props.stripPastedStyles) {
        var w = t.getClipboard();

        if (n.isRichText() && w) {
          if (-1 !== _.indexOf(t.getEditorKey()) || 1 === v.length && 1 === w.size && w.first().getText() === m) return void t.update(d(t._latestEditorState, w));
        } else if (w && n.types.includes("com.apple.webarchive") && !n.types.includes("text/html") && function (t, e) {
          return t.length === e.size && e.valueSeq().every(function (e, n) {
            return e.getText() === t[n];
          });
        }(v, w)) return void t.update(d(t._latestEditorState, w));

        if (_) {
          var S = s.processHTML(_, t.props.blockRenderMap);

          if (S) {
            var x = S.contentBlocks,
                E = S.entityMap;

            if (x) {
              var k = r.createFromArray(x);
              return void t.update(d(t._latestEditorState, k, E));
            }
          }
        }

        t.setClipboard(null);
      }

      if (v.length) {
        var C = i.create({
          style: b.getCurrentInlineStyle(),
          entity: l(b.getCurrentContent(), b.getSelection())
        }),
            O = c.getCurrentBlockType(b),
            T = s.processText(v, C, O),
            D = r.createFromArray(T);
        t.update(d(t._latestEditorState, D));
      }
    }
  };
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = (n(47), n(82)),
      o = n(50),
      a = n(68),
      s = n(20),
      u = n(285),
      c = n(58),
      l = n(286),
      f = n(184),
      p = s.List,
      h = s.Repeat,
      d = a.draft_tree_data_support,
      g = d ? o : i,
      y = {
    processHTML: function processHTML(t, e) {
      return u(t, l, e);
    },
    processText: function processText(t, e, n) {
      return t.reduce(function (t, i, o) {
        i = f(i);
        var a = c(),
            s = {
          key: a,
          type: n,
          text: i,
          characterList: p(h(e, i.length))
        };

        if (d && 0 !== o) {
          var u = o - 1,
              l = t[u] = t[u].merge({
            nextSibling: a
          });
          s = r({}, s, {
            prevSibling: l.getKey()
          });
        }

        return t.push(new g(s)), t;
      }, []);
    }
  };

  t.exports = y;
}, function (t, e, n) {
  "use strict";

  var r = function () {
    function t(e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this._uri = e;
    }

    return t.prototype.toString = function () {
      return this._uri;
    }, t;
  }();

  t.exports = r;
}, function (t, e, n) {
  "use strict";

  t.exports = function (t, e, n, r) {
    var i = e.getStartKey(),
        o = e.getEndKey(),
        a = t.getBlockMap(),
        s = a.toSeq().skipUntil(function (t, e) {
      return e === i;
    }).takeUntil(function (t, e) {
      return e === o;
    }).concat([[o, a.get(o)]]).map(function (t) {
      var e = t.getDepth() + n;
      return e = Math.max(0, Math.min(e, r)), t.set("depth", e);
    });
    return a = a.merge(s), t.merge({
      blockMap: a,
      selectionBefore: e,
      selectionAfter: e
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = /\r\n?|\n/g;

  t.exports = function (t) {
    return t.split(r);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(22),
      i = n(38),
      o = n(664),
      a = n(19);

  t.exports = function (t) {
    if (!t._blockSelectEvents && t._latestEditorState === t.props.editorState) {
      var e = t.props.editorState,
          n = i.findDOMNode(t.editorContainer);
      n || a(!1), n.firstChild instanceof HTMLElement || a(!1);
      var s = o(e, n.firstChild),
          u = s.selectionState;
      u !== e.getSelection() && (e = s.needsRecovery ? r.forceSelection(e, u) : r.acceptSelection(e, u), t.update(e));
    }
  };
}, function (t, e, n) {
  "use strict";

  (function (e) {
    var r = n(282);

    t.exports = function (t, n) {
      var i = e.getSelection();
      return 0 === i.rangeCount ? {
        selectionState: t.getSelection().set("hasFocus", !1),
        needsRecovery: !1
      } : r(t, n, i.anchorNode, i.anchorOffset, i.focusNode, i.focusOffset);
    };
  }).call(this, n(25));
}, function (t, e, n) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
  }

  var o = n(3),
      a = n(99),
      s = function (t) {
    function e() {
      return r(this, e), i(this, t.apply(this, arguments));
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
    }(e, t), e.prototype.shouldComponentUpdate = function (t) {
      return this.props.text !== t.text || this.props.editorState.getSelection().getHasFocus() !== t.editorState.getSelection().getHasFocus();
    }, e.prototype.render = function () {
      var t = this.props.editorState.getSelection().getHasFocus(),
          e = a({
        "public/DraftEditorPlaceholder/root": !0,
        "public/DraftEditorPlaceholder/hasFocus": t
      });
      return o.createElement("div", {
        className: e
      }, o.createElement("div", {
        className: a("public/DraftEditorPlaceholder/inner"),
        id: this.props.accessibilityID,
        style: {
          whiteSpace: "pre-wrap"
        }
      }, this.props.text));
    }, e;
  }(o.Component);

  t.exports = s;
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = n(82),
      o = n(50),
      a = n(289),
      s = n(667),
      u = n(668),
      c = n(19),
      l = function l(t, e) {
    return {
      key: t.getKey(),
      text: t.getText(),
      type: t.getType(),
      depth: t.getDepth(),
      inlineStyleRanges: u(t),
      entityRanges: s(t, e),
      data: t.getData().toObject()
    };
  };

  t.exports = function (t) {
    var e = {
      entityMap: {},
      blocks: []
    };
    return function (t, e) {
      var n = e.blocks,
          r = e.entityMap,
          i = {};
      return Object.keys(r).forEach(function (e, n) {
        var r = t.getEntity(a.unstringify(e));
        i[n] = {
          type: r.getType(),
          mutability: r.getMutability(),
          data: r.getData()
        };
      }), {
        blocks: n,
        entityMap: i
      };
    }(t, e = function (t, e) {
      var n = e.entityMap,
          s = [],
          u = {},
          f = {},
          p = 0;
      return t.getBlockMap().forEach(function (t) {
        t.findEntityRanges(function (t) {
          return null !== t.getEntity();
        }, function (e) {
          var r = t.getEntityAt(e),
              i = a.stringify(r);
          f[i] || (f[i] = r, n[i] = "" + p, p++);
        }), function (t, e, n, a) {
          if (t instanceof i) n.push(l(t, e));else {
            t instanceof o || c(!1);
            var s = t.getParentKey(),
                u = a[t.getKey()] = r({}, l(t, e), {
              children: []
            });
            s ? a[s].children.push(u) : n.push(u);
          }
        }(t, n, s, u);
      }), {
        blocks: s,
        entityMap: n
      };
    }(t, e));
  };
}, function (t, e, n) {
  "use strict";

  var r = n(289),
      i = n(83).strlen;

  t.exports = function (t, e) {
    var n = [];
    return t.findEntityRanges(function (t) {
      return !!t.getEntity();
    }, function (o, a) {
      var s = t.getText(),
          u = t.getEntityAt(o);
      n.push({
        offset: i(s.slice(0, o)),
        length: i(s.slice(o, a)),
        key: Number(e[r.stringify(u)])
      });
    }), n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(83),
      i = n(113),
      o = function o(t, e) {
    return t === e;
  },
      a = function a(t) {
    return !!t;
  },
      s = [];

  t.exports = function (t) {
    var e = t.getCharacterList().map(function (t) {
      return t.getStyle();
    }).toList(),
        n = e.flatten().toSet().map(function (n) {
      return function (t, e, n) {
        var s = [],
            u = e.map(function (t) {
          return t.has(n);
        }).toList();
        return i(u, o, a, function (e, i) {
          var o = t.getText();
          s.push({
            offset: r.strlen(o.slice(0, e)),
            length: r.strlen(o.slice(e, i)),
            style: n
          });
        }), s;
      }(t, e, n);
    });
    return Array.prototype.concat.apply(s, n.toJS());
  };
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = n(82),
      o = n(50),
      a = n(183),
      s = n(142),
      u = n(68),
      c = n(670),
      l = n(20),
      f = n(98),
      p = n(671),
      h = n(672),
      d = n(673),
      g = n(58),
      y = n(19),
      v = u.draft_tree_data_support,
      m = l.List,
      _ = l.Map,
      b = l.OrderedMap,
      w = function w(t, e) {
    var n = t.key,
        r = t.type,
        i = t.data;
    return {
      text: t.text,
      depth: t.depth || 0,
      type: r || "unstyled",
      key: n || g(),
      data: _(i),
      characterList: S(t, e)
    };
  },
      S = function S(t, e) {
    var n = t.text,
        i = t.entityRanges,
        o = t.inlineStyleRanges,
        a = i || [];
    return p(d(n, o || []), h(n, a.filter(function (t) {
      return e.hasOwnProperty(t.key);
    }).map(function (t) {
      return r({}, t, {
        key: e[t.key]
      });
    })));
  },
      x = function x(t) {
    return r({}, t, {
      key: t.key || g()
    });
  },
      E = function E(t, e, n) {
    var i = e.map(function (t) {
      return r({}, t, {
        parentRef: n
      });
    });
    return t.concat(i.reverse());
  };

  t.exports = function (t) {
    Array.isArray(t.blocks) || y(!1);

    var e = function (t) {
      var e = t.entityMap,
          n = {};
      return Object.keys(e).forEach(function (t) {
        var r = e[t],
            i = r.type,
            o = r.mutability,
            a = r.data;
        n[t] = s.__create(i, o, a || {});
      }), n;
    }(t),
        n = function (t, e) {
      var n = Array.isArray(t.blocks[0].children),
          a = v && !n ? c.fromRawStateToRawTreeState(t).blocks : t.blocks;
      return v ? function (t, e) {
        return t.map(x).reduce(function (n, i, a) {
          Array.isArray(i.children) || y(!1);
          var s = i.children.map(x),
              u = new o(r({}, w(i, e), {
            prevSibling: 0 === a ? null : t[a - 1].key,
            nextSibling: a === t.length - 1 ? null : t[a + 1].key,
            children: m(s.map(function (t) {
              return t.key;
            }))
          }));
          n = n.set(u.getKey(), u);

          for (var c = E([], s, u); c.length > 0;) {
            var l = c.pop(),
                f = l.parentRef,
                p = f.getChildKeys(),
                h = p.indexOf(l.key),
                d = Array.isArray(l.children);

            if (!d) {
              d || y(!1);
              break;
            }

            var g = l.children.map(x),
                v = new o(r({}, w(l, e), {
              parent: f.getKey(),
              children: m(g.map(function (t) {
                return t.key;
              })),
              prevSibling: 0 === h ? null : p.get(h - 1),
              nextSibling: h === p.size - 1 ? null : p.get(h + 1)
            }));
            n = n.set(v.getKey(), v), c = E(c, g, v);
          }

          return n;
        }, b());
      }(a, e) : function (t, e) {
        return b(t.map(function (t) {
          var n = new i(w(t, e));
          return [n.getKey(), n];
        }));
      }(n ? c.fromRawTreeStateToRawState(t).blocks : a, e);
    }(t, e),
        u = n.isEmpty() ? new f() : f.createEmpty(n.first().getKey());

    return new a({
      blockMap: n,
      entityMap: e,
      selectionBefore: u,
      selectionAfter: u
    });
  };
}, function (t, e, n) {
  "use strict";

  var r = n(49) || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var r in n) {
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
    }

    return t;
  },
      i = n(19),
      o = function o(t) {
    if (!t || !t.type) return !1;
    var e = t.type;
    return "unordered-list-item" === e || "ordered-list-item" === e;
  },
      a = {
    fromRawTreeStateToRawState: function fromRawTreeStateToRawState(t) {
      var e = t.blocks,
          n = [];
      return Array.isArray(e) || i(!1), Array.isArray(e) && e.length ? (function (t, e) {
        for (var a = [].concat(t).reverse(); a.length;) {
          var s = a.pop();
          l = void 0, l = r({}, c = s), o(c) && (l.depth = l.depth || 0, function (t) {
            Array.isArray(t.children) && (t.children = t.children.map(function (e) {
              return e.type === t.type ? r({}, e, {
                depth: (t.depth || 0) + 1
              }) : e;
            }));
          }(c)), delete l.children, n.push(l);
          var u = s.children;
          Array.isArray(u) || i(!1), a = a.concat([].concat(u.reverse()));
        }

        var c, l;
      }(e), t.blocks = n, r({}, t, {
        blocks: n
      })) : t;
    },
    fromRawStateToRawTreeState: function fromRawStateToRawTreeState(t) {
      var e = {},
          n = [];
      return t.blocks.forEach(function (t) {
        var a = o(t),
            s = t.depth || 0,
            u = r({}, t, {
          children: []
        });
        if (!a) return e = {}, void n.push(u);

        if (e[s] = u, s > 0) {
          var c = e[s - 1];
          return c || i(!1), void c.children.push(u);
        }

        n.push(u);
      }), r({}, t, {
        blocks: n
      });
    }
  };

  t.exports = a;
}, function (t, e, n) {
  "use strict";

  var r = n(47),
      i = n(20).List;

  t.exports = function (t, e) {
    var n = t.map(function (t, n) {
      var i = e[n];
      return r.create({
        style: t,
        entity: i
      });
    });
    return i(n);
  };
}, function (t, e, n) {
  "use strict";

  var r = n(83).substr;

  t.exports = function (t, e) {
    var n = Array(t.length).fill(null);
    return e && e.forEach(function (e) {
      for (var i = r(t, 0, e.offset).length, o = i + r(t, e.offset, e.length).length, a = i; a < o; a++) {
        n[a] = e.key;
      }
    }), n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(20).OrderedSet,
      i = n(83).substr,
      o = r();

  t.exports = function (t, e) {
    var n = Array(t.length).fill(o);
    return e && e.forEach(function (e) {
      for (var r = i(t, 0, e.offset).length, o = r + i(t, e.offset, e.length).length; r < o;) {
        n[r] = n[r].add(e.style), r++;
      }
    }), n;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(675);

  t.exports = function (t) {
    var e = t.getSelection();
    if (!e.rangeCount) return null;
    var n = e.getRangeAt(0),
        i = r(n),
        o = i.top,
        a = i.right,
        s = i.bottom,
        u = i.left;
    return 0 === o && 0 === a && 0 === s && 0 === u ? null : i;
  };
}, function (t, e, n) {
  "use strict";

  var r = n(281);

  t.exports = function (t) {
    var e = r(t),
        n = 0,
        i = 0,
        o = 0,
        a = 0;

    if (e.length) {
      if (e.length > 1 && 0 === e[0].width) {
        var s = e[1];
        n = s.top, i = s.right, o = s.bottom, a = s.left;
      } else {
        var u = e[0];
        n = u.top, i = u.right, o = u.bottom, a = u.left;
      }

      for (var c = 1; c < e.length; c++) {
        var l = e[c];
        0 !== l.height && 0 !== l.width && (n = Math.min(n, l.top), i = Math.max(i, l.right), o = Math.max(o, l.bottom), a = Math.min(a, l.left));
      }
    }

    return {
      top: n,
      right: i,
      bottom: o,
      left: a,
      width: i - a,
      height: o - n
    };
  };
}]);