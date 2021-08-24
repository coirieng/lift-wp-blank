"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function () {
  (function (n) {
    var A = this || (0, eval)("this"),
        w = A.document,
        R = A.navigator,
        v = A.jQuery,
        H = A.JSON;
    v || "undefined" === typeof jQuery || (v = jQuery);

    (function (n) {
      "function" === typeof define && define.amd ? define(["exports", "require"], n) : "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) ? n(module.exports || exports) : n(A.ko = {});
    })(function (S, T) {
      function K(a, c) {
        return null === a || _typeof(a) in W ? a === c : !1;
      }

      function X(b, c) {
        var d;
        return function () {
          d || (d = a.a.setTimeout(function () {
            d = n;
            b();
          }, c));
        };
      }

      function Y(b, c) {
        var d;
        return function () {
          clearTimeout(d);
          d = a.a.setTimeout(b, c);
        };
      }

      function Z(a, c) {
        c && "change" !== c ? "beforeChange" === c ? this.pc(a) : this.gb(a, c) : this.qc(a);
      }

      function aa(a, c) {
        null !== c && c.s && c.s();
      }

      function ba(a, c) {
        var d = this.qd,
            e = d[r];
        e.ra || (this.Qb && this.mb[c] ? (d.uc(c, a, this.mb[c]), this.mb[c] = null, --this.Qb) : e.I[c] || d.uc(c, a, e.J ? {
          da: a
        } : d.$c(a)), a.Ja && a.gd());
      }

      var a = "undefined" !== typeof S ? S : {};

      a.b = function (b, c) {
        for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) {
          e = e[d[f]];
        }

        e[d[d.length - 1]] = c;
      };

      a.L = function (a, c, d) {
        a[c] = d;
      };

      a.version = "3.5.1";
      a.b("version", a.version);
      a.options = {
        deferUpdates: !1,
        useOnlyNativeEvents: !1,
        foreachHidesDestroyed: !1
      };

      a.a = function () {
        function b(a, b) {
          for (var c in a) {
            f.call(a, c) && b(c, a[c]);
          }
        }

        function c(a, b) {
          if (b) for (var c in b) {
            f.call(b, c) && (a[c] = b[c]);
          }
          return a;
        }

        function d(a, b) {
          a.__proto__ = b;
          return a;
        }

        function e(b, c, d, e) {
          var l = b[c].match(q) || [];
          a.a.D(d.match(q), function (b) {
            a.a.Na(l, b, e);
          });
          b[c] = l.join(" ");
        }

        var f = Object.prototype.hasOwnProperty,
            g = {
          __proto__: []
        } instanceof Array,
            h = "function" === typeof Symbol,
            m = {},
            k = {};
        m[R && /Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
        m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
        b(m, function (a, b) {
          if (b.length) for (var c = 0, d = b.length; c < d; c++) {
            k[b[c]] = a;
          }
        });

        var l = {
          propertychange: !0
        },
            p = w && function () {
          for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) {
            ;
          }

          return 4 < a ? a : n;
        }(),
            q = /\S+/g,
            t;

        return {
          Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
          D: function D(a, b, c) {
            for (var d = 0, e = a.length; d < e; d++) {
              b.call(c, a[d], d, a);
            }
          },
          A: "function" == typeof Array.prototype.indexOf ? function (a, b) {
            return Array.prototype.indexOf.call(a, b);
          } : function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) {
              if (a[c] === b) return c;
            }

            return -1;
          },
          Lb: function Lb(a, b, c) {
            for (var d = 0, e = a.length; d < e; d++) {
              if (b.call(c, a[d], d, a)) return a[d];
            }

            return n;
          },
          Pa: function Pa(b, c) {
            var d = a.a.A(b, c);
            0 < d ? b.splice(d, 1) : 0 === d && b.shift();
          },
          wc: function wc(b) {
            var c = [];
            b && a.a.D(b, function (b) {
              0 > a.a.A(c, b) && c.push(b);
            });
            return c;
          },
          Mb: function Mb(a, b, c) {
            var d = [];
            if (a) for (var e = 0, l = a.length; e < l; e++) {
              d.push(b.call(c, a[e], e));
            }
            return d;
          },
          jb: function jb(a, b, c) {
            var d = [];
            if (a) for (var e = 0, l = a.length; e < l; e++) {
              b.call(c, a[e], e) && d.push(a[e]);
            }
            return d;
          },
          Nb: function Nb(a, b) {
            if (b instanceof Array) a.push.apply(a, b);else for (var c = 0, d = b.length; c < d; c++) {
              a.push(b[c]);
            }
            return a;
          },
          Na: function Na(b, c, d) {
            var e = a.a.A(a.a.bc(b), c);
            0 > e ? d && b.push(c) : d || b.splice(e, 1);
          },
          Ba: g,
          extend: c,
          setPrototypeOf: d,
          Ab: g ? d : c,
          P: b,
          Ga: function Ga(a, b, c) {
            if (!a) return a;
            var d = {},
                e;

            for (e in a) {
              f.call(a, e) && (d[e] = b.call(c, a[e], e, a));
            }

            return d;
          },
          Tb: function Tb(b) {
            for (; b.firstChild;) {
              a.removeNode(b.firstChild);
            }
          },
          Yb: function Yb(b) {
            b = a.a.la(b);

            for (var c = (b[0] && b[0].ownerDocument || w).createElement("div"), d = 0, e = b.length; d < e; d++) {
              c.appendChild(a.oa(b[d]));
            }

            return c;
          },
          Ca: function Ca(b, c) {
            for (var d = 0, e = b.length, l = []; d < e; d++) {
              var k = b[d].cloneNode(!0);
              l.push(c ? a.oa(k) : k);
            }

            return l;
          },
          va: function va(b, c) {
            a.a.Tb(b);
            if (c) for (var d = 0, e = c.length; d < e; d++) {
              b.appendChild(c[d]);
            }
          },
          Xc: function Xc(b, c) {
            var d = b.nodeType ? [b] : b;

            if (0 < d.length) {
              for (var e = d[0], l = e.parentNode, k = 0, f = c.length; k < f; k++) {
                l.insertBefore(c[k], e);
              }

              k = 0;

              for (f = d.length; k < f; k++) {
                a.removeNode(d[k]);
              }
            }
          },
          Ua: function Ua(a, b) {
            if (a.length) {
              for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) {
                a.splice(0, 1);
              }

              for (; 1 < a.length && a[a.length - 1].parentNode !== b;) {
                a.length--;
              }

              if (1 < a.length) {
                var c = a[0],
                    d = a[a.length - 1];

                for (a.length = 0; c !== d;) {
                  a.push(c), c = c.nextSibling;
                }

                a.push(d);
              }
            }

            return a;
          },
          Zc: function Zc(a, b) {
            7 > p ? a.setAttribute("selected", b) : a.selected = b;
          },
          Db: function Db(a) {
            return null === a || a === n ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
          },
          Ud: function Ud(a, b) {
            a = a || "";
            return b.length > a.length ? !1 : a.substring(0, b.length) === b;
          },
          vd: function vd(a, b) {
            if (a === b) return !0;
            if (11 === a.nodeType) return !1;
            if (b.contains) return b.contains(1 !== a.nodeType ? a.parentNode : a);
            if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);

            for (; a && a != b;) {
              a = a.parentNode;
            }

            return !!a;
          },
          Sb: function Sb(b) {
            return a.a.vd(b, b.ownerDocument.documentElement);
          },
          kd: function kd(b) {
            return !!a.a.Lb(b, a.a.Sb);
          },
          R: function R(a) {
            return a && a.tagName && a.tagName.toLowerCase();
          },
          Ac: function Ac(b) {
            return a.onError ? function () {
              try {
                return b.apply(this, arguments);
              } catch (c) {
                throw a.onError && a.onError(c), c;
              }
            } : b;
          },
          setTimeout: function (_setTimeout) {
            function setTimeout(_x, _x2) {
              return _setTimeout.apply(this, arguments);
            }

            setTimeout.toString = function () {
              return _setTimeout.toString();
            };

            return setTimeout;
          }(function (b, c) {
            return setTimeout(a.a.Ac(b), c);
          }),
          Gc: function Gc(b) {
            setTimeout(function () {
              a.onError && a.onError(b);
              throw b;
            }, 0);
          },
          B: function B(b, c, d) {
            var e = a.a.Ac(d);
            d = l[c];
            if (a.options.useOnlyNativeEvents || d || !v) {
              if (d || "function" != typeof b.addEventListener) {
                if ("undefined" != typeof b.attachEvent) {
                  var k = function k(a) {
                    e.call(b, a);
                  },
                      f = "on" + c;

                  b.attachEvent(f, k);
                  a.a.K.za(b, function () {
                    b.detachEvent(f, k);
                  });
                } else throw Error("Browser doesn't support addEventListener or attachEvent");
              } else b.addEventListener(c, e, !1);
            } else t || (t = "function" == typeof v(b).on ? "on" : "bind"), v(b)[t](c, e);
          },
          Fb: function Fb(b, c) {
            if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
            var d;
            "input" === a.a.R(b) && b.type && "click" == c.toLowerCase() ? (d = b.type, d = "checkbox" == d || "radio" == d) : d = !1;
            if (a.options.useOnlyNativeEvents || !v || d) {
              if ("function" == typeof w.createEvent) {
                if ("function" == typeof b.dispatchEvent) d = w.createEvent(k[c] || "HTMLEvents"), d.initEvent(c, !0, !0, A, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");
              } else if (d && b.click) b.click();else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);else throw Error("Browser doesn't support triggering events");
            } else v(b).trigger(c);
          },
          f: function f(b) {
            return a.O(b) ? b() : b;
          },
          bc: function bc(b) {
            return a.O(b) ? b.v() : b;
          },
          Eb: function Eb(b, c, d) {
            var l;
            c && ("object" === _typeof(b.classList) ? (l = b.classList[d ? "add" : "remove"], a.a.D(c.match(q), function (a) {
              l.call(b.classList, a);
            })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, d) : e(b, "className", c, d));
          },
          Bb: function Bb(b, c) {
            var d = a.a.f(c);
            if (null === d || d === n) d = "";
            var e = a.h.firstChild(b);
            !e || 3 != e.nodeType || a.h.nextSibling(e) ? a.h.va(b, [b.ownerDocument.createTextNode(d)]) : e.data = d;
            a.a.Ad(b);
          },
          Yc: function Yc(a, b) {
            a.name = b;
            if (7 >= p) try {
              var c = a.name.replace(/[&<>'"]/g, function (a) {
                return "&#" + a.charCodeAt(0) + ";";
              });
              a.mergeAttributes(w.createElement("<input name='" + c + "'/>"), !1);
            } catch (d) {}
          },
          Ad: function Ad(a) {
            9 <= p && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
          },
          wd: function wd(a) {
            if (p) {
              var b = a.style.width;
              a.style.width = 0;
              a.style.width = b;
            }
          },
          Pd: function Pd(b, c) {
            b = a.a.f(b);
            c = a.a.f(c);

            for (var d = [], e = b; e <= c; e++) {
              d.push(e);
            }

            return d;
          },
          la: function la(a) {
            for (var b = [], c = 0, d = a.length; c < d; c++) {
              b.push(a[c]);
            }

            return b;
          },
          Da: function Da(a) {
            return h ? Symbol(a) : a;
          },
          Zd: 6 === p,
          $d: 7 === p,
          W: p,
          Lc: function Lc(b, c) {
            for (var d = a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))), e = "string" == typeof c ? function (a) {
              return a.name === c;
            } : function (a) {
              return c.test(a.name);
            }, l = [], k = d.length - 1; 0 <= k; k--) {
              e(d[k]) && l.push(d[k]);
            }

            return l;
          },
          Nd: function Nd(b) {
            return "string" == typeof b && (b = a.a.Db(b)) ? H && H.parse ? H.parse(b) : new Function("return " + b)() : null;
          },
          hc: function hc(b, c, d) {
            if (!H || !H.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
            return H.stringify(a.a.f(b), c, d);
          },
          Od: function Od(c, d, e) {
            e = e || {};
            var l = e.params || {},
                k = e.includeFields || this.Jc,
                f = c;
            if ("object" == _typeof(c) && "form" === a.a.R(c)) for (var f = c.action, h = k.length - 1; 0 <= h; h--) {
              for (var g = a.a.Lc(c, k[h]), m = g.length - 1; 0 <= m; m--) {
                l[g[m].name] = g[m].value;
              }
            }
            d = a.a.f(d);
            var p = w.createElement("form");
            p.style.display = "none";
            p.action = f;
            p.method = "post";

            for (var q in d) {
              c = w.createElement("input"), c.type = "hidden", c.name = q, c.value = a.a.hc(a.a.f(d[q])), p.appendChild(c);
            }

            b(l, function (a, b) {
              var c = w.createElement("input");
              c.type = "hidden";
              c.name = a;
              c.value = b;
              p.appendChild(c);
            });
            w.body.appendChild(p);
            e.submitter ? e.submitter(p) : p.submit();
            setTimeout(function () {
              p.parentNode.removeChild(p);
            }, 0);
          }
        };
      }();

      a.b("utils", a.a);
      a.b("utils.arrayForEach", a.a.D);
      a.b("utils.arrayFirst", a.a.Lb);
      a.b("utils.arrayFilter", a.a.jb);
      a.b("utils.arrayGetDistinctValues", a.a.wc);
      a.b("utils.arrayIndexOf", a.a.A);
      a.b("utils.arrayMap", a.a.Mb);
      a.b("utils.arrayPushAll", a.a.Nb);
      a.b("utils.arrayRemoveItem", a.a.Pa);
      a.b("utils.cloneNodes", a.a.Ca);
      a.b("utils.createSymbolOrString", a.a.Da);
      a.b("utils.extend", a.a.extend);
      a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc);
      a.b("utils.getFormFields", a.a.Lc);
      a.b("utils.objectMap", a.a.Ga);
      a.b("utils.peekObservable", a.a.bc);
      a.b("utils.postJson", a.a.Od);
      a.b("utils.parseJson", a.a.Nd);
      a.b("utils.registerEventHandler", a.a.B);
      a.b("utils.stringifyJson", a.a.hc);
      a.b("utils.range", a.a.Pd);
      a.b("utils.toggleDomNodeCssClass", a.a.Eb);
      a.b("utils.triggerEvent", a.a.Fb);
      a.b("utils.unwrapObservable", a.a.f);
      a.b("utils.objectForEach", a.a.P);
      a.b("utils.addOrRemoveItem", a.a.Na);
      a.b("utils.setTextContent", a.a.Bb);
      a.b("unwrap", a.a.f);
      Function.prototype.bind || (Function.prototype.bind = function (a) {
        var c = this;
        if (1 === arguments.length) return function () {
          return c.apply(a, arguments);
        };
        var d = Array.prototype.slice.call(arguments, 1);
        return function () {
          var e = d.slice(0);
          e.push.apply(e, arguments);
          return c.apply(a, e);
        };
      });
      a.a.g = new function () {
        var b = 0,
            c = "__ko__" + new Date().getTime(),
            d = {},
            e,
            f;
        a.a.W ? (e = function e(a, _e) {
          var f = a[c];

          if (!f || "null" === f || !d[f]) {
            if (!_e) return n;
            f = a[c] = "ko" + b++;
            d[f] = {};
          }

          return d[f];
        }, f = function f(a) {
          var b = a[c];
          return b ? (delete d[b], a[c] = null, !0) : !1;
        }) : (e = function e(a, b) {
          var d = a[c];
          !d && b && (d = a[c] = {});
          return d;
        }, f = function f(a) {
          return a[c] ? (delete a[c], !0) : !1;
        });
        return {
          get: function get(a, b) {
            var c = e(a, !1);
            return c && c[b];
          },
          set: function set(a, b, c) {
            (a = e(a, c !== n)) && (a[b] = c);
          },
          Ub: function Ub(a, b, c) {
            a = e(a, !0);
            return a[b] || (a[b] = c);
          },
          clear: f,
          Z: function Z() {
            return b++ + c;
          }
        };
      }();
      a.b("utils.domData", a.a.g);
      a.b("utils.domData.clear", a.a.g.clear);
      a.a.K = new function () {
        function b(b, c) {
          var d = a.a.g.get(b, e);
          d === n && c && (d = [], a.a.g.set(b, e, d));
          return d;
        }

        function c(c) {
          var e = b(c, !1);
          if (e) for (var e = e.slice(0), k = 0; k < e.length; k++) {
            e[k](c);
          }
          a.a.g.clear(c);
          a.a.K.cleanExternalData(c);
          g[c.nodeType] && d(c.childNodes, !0);
        }

        function d(b, d) {
          for (var e = [], l, f = 0; f < b.length; f++) {
            if (!d || 8 === b[f].nodeType) if (c(e[e.length] = l = b[f]), b[f] !== l) for (; f-- && -1 == a.a.A(e, b[f]);) {
              ;
            }
          }
        }

        var e = a.a.g.Z(),
            f = {
          1: !0,
          8: !0,
          9: !0
        },
            g = {
          1: !0,
          9: !0
        };
        return {
          za: function za(a, c) {
            if ("function" != typeof c) throw Error("Callback must be a function");
            b(a, !0).push(c);
          },
          yb: function yb(c, d) {
            var f = b(c, !1);
            f && (a.a.Pa(f, d), 0 == f.length && a.a.g.set(c, e, n));
          },
          oa: function oa(b) {
            a.u.G(function () {
              f[b.nodeType] && (c(b), g[b.nodeType] && d(b.getElementsByTagName("*")));
            });
            return b;
          },
          removeNode: function removeNode(b) {
            a.oa(b);
            b.parentNode && b.parentNode.removeChild(b);
          },
          cleanExternalData: function cleanExternalData(a) {
            v && "function" == typeof v.cleanData && v.cleanData([a]);
          }
        };
      }();
      a.oa = a.a.K.oa;
      a.removeNode = a.a.K.removeNode;
      a.b("cleanNode", a.oa);
      a.b("removeNode", a.removeNode);
      a.b("utils.domNodeDisposal", a.a.K);
      a.b("utils.domNodeDisposal.addDisposeCallback", a.a.K.za);
      a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.K.yb);

      (function () {
        var b = [0, "", ""],
            c = [1, "<table>", "</table>"],
            d = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            e = [1, "<select multiple='multiple'>", "</select>"],
            f = {
          thead: c,
          tbody: c,
          tfoot: c,
          tr: [2, "<table><tbody>", "</tbody></table>"],
          td: d,
          th: d,
          option: e,
          optgroup: e
        },
            g = 8 >= a.a.W;

        a.a.ua = function (c, d) {
          var e;
          if (v) {
            if (v.parseHTML) e = v.parseHTML(c, d) || [];else {
              if ((e = v.clean([c], d)) && e[0]) {
                for (var l = e[0]; l.parentNode && 11 !== l.parentNode.nodeType;) {
                  l = l.parentNode;
                }

                l.parentNode && l.parentNode.removeChild(l);
              }
            }
          } else {
            (e = d) || (e = w);
            var l = e.parentWindow || e.defaultView || A,
                p = a.a.Db(c).toLowerCase(),
                q = e.createElement("div"),
                t;
            t = (p = p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[p[1]] || b;
            p = t[0];
            t = "ignored<div>" + t[1] + c + t[2] + "</div>";
            "function" == typeof l.innerShiv ? q.appendChild(l.innerShiv(t)) : (g && e.body.appendChild(q), q.innerHTML = t, g && q.parentNode.removeChild(q));

            for (; p--;) {
              q = q.lastChild;
            }

            e = a.a.la(q.lastChild.childNodes);
          }
          return e;
        };

        a.a.Md = function (b, c) {
          var d = a.a.ua(b, c);
          return d.length && d[0].parentElement || a.a.Yb(d);
        };

        a.a.fc = function (b, c) {
          a.a.Tb(b);
          c = a.a.f(c);
          if (null !== c && c !== n) if ("string" != typeof c && (c = c.toString()), v) v(b).html(c);else for (var d = a.a.ua(c, b.ownerDocument), e = 0; e < d.length; e++) {
            b.appendChild(d[e]);
          }
        };
      })();

      a.b("utils.parseHtmlFragment", a.a.ua);
      a.b("utils.setHtml", a.a.fc);

      a.aa = function () {
        function b(c, e) {
          if (c) if (8 == c.nodeType) {
            var f = a.aa.Uc(c.nodeValue);
            null != f && e.push({
              ud: c,
              Kd: f
            });
          } else if (1 == c.nodeType) for (var f = 0, g = c.childNodes, h = g.length; f < h; f++) {
            b(g[f], e);
          }
        }

        var c = {};
        return {
          Xb: function Xb(a) {
            if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");
            var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
            c[b] = a;
            return "\x3c!--[ko_memo:" + b + "]--\x3e";
          },
          bd: function bd(a, b) {
            var f = c[a];
            if (f === n) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");

            try {
              return f.apply(null, b || []), !0;
            } finally {
              delete c[a];
            }
          },
          cd: function cd(c, e) {
            var f = [];
            b(c, f);

            for (var g = 0, h = f.length; g < h; g++) {
              var m = f[g].ud,
                  k = [m];
              e && a.a.Nb(k, e);
              a.aa.bd(f[g].Kd, k);
              m.nodeValue = "";
              m.parentNode && m.parentNode.removeChild(m);
            }
          },
          Uc: function Uc(a) {
            return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
          }
        };
      }();

      a.b("memoization", a.aa);
      a.b("memoization.memoize", a.aa.Xb);
      a.b("memoization.unmemoize", a.aa.bd);
      a.b("memoization.parseMemoText", a.aa.Uc);
      a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd);

      a.na = function () {
        function b() {
          if (f) for (var b = f, c = 0, d; h < f;) {
            if (d = e[h++]) {
              if (h > b) {
                if (5E3 <= ++c) {
                  h = f;
                  a.a.Gc(Error("'Too much recursion' after processing " + c + " task groups."));
                  break;
                }

                b = f;
              }

              try {
                d();
              } catch (p) {
                a.a.Gc(p);
              }
            }
          }
        }

        function c() {
          b();
          h = f = e.length = 0;
        }

        var d,
            e = [],
            f = 0,
            g = 1,
            h = 0;
        A.MutationObserver ? d = function (a) {
          var b = w.createElement("div");
          new MutationObserver(a).observe(b, {
            attributes: !0
          });
          return function () {
            b.classList.toggle("foo");
          };
        }(c) : d = w && "onreadystatechange" in w.createElement("script") ? function (a) {
          var b = w.createElement("script");

          b.onreadystatechange = function () {
            b.onreadystatechange = null;
            w.documentElement.removeChild(b);
            b = null;
            a();
          };

          w.documentElement.appendChild(b);
        } : function (a) {
          setTimeout(a, 0);
        };
        return {
          scheduler: d,
          zb: function zb(b) {
            f || a.na.scheduler(c);
            e[f++] = b;
            return g++;
          },
          cancel: function cancel(a) {
            a = a - (g - f);
            a >= h && a < f && (e[a] = null);
          },
          resetForTesting: function resetForTesting() {
            var a = f - h;
            h = f = e.length = 0;
            return a;
          },
          Sd: b
        };
      }();

      a.b("tasks", a.na);
      a.b("tasks.schedule", a.na.zb);
      a.b("tasks.runEarly", a.na.Sd);
      a.Ta = {
        throttle: function throttle(b, c) {
          b.throttleEvaluation = c;
          var d = null;
          return a.$({
            read: b,
            write: function write(e) {
              clearTimeout(d);
              d = a.a.setTimeout(function () {
                b(e);
              }, c);
            }
          });
        },
        rateLimit: function rateLimit(a, c) {
          var d, e, f;
          "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
          a.Hb = !1;
          f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Y : X;
          a.ub(function (a) {
            return f(a, d, c);
          });
        },
        deferred: function deferred(b, c) {
          if (!0 !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
          b.Hb || (b.Hb = !0, b.ub(function (c) {
            var e,
                f = !1;
            return function () {
              if (!f) {
                a.na.cancel(e);
                e = a.na.zb(c);

                try {
                  f = !0, b.notifySubscribers(n, "dirty");
                } finally {
                  f = !1;
                }
              }
            };
          }));
        },
        notify: function notify(a, c) {
          a.equalityComparer = "always" == c ? null : K;
        }
      };
      var W = {
        undefined: 1,
        "boolean": 1,
        number: 1,
        string: 1
      };
      a.b("extenders", a.Ta);

      a.ic = function (b, c, d) {
        this.da = b;
        this.lc = c;
        this.mc = d;
        this.Ib = !1;
        this.fb = this.Jb = null;
        a.L(this, "dispose", this.s);
        a.L(this, "disposeWhenNodeIsRemoved", this.l);
      };

      a.ic.prototype.s = function () {
        this.Ib || (this.fb && a.a.K.yb(this.Jb, this.fb), this.Ib = !0, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null);
      };

      a.ic.prototype.l = function (b) {
        this.Jb = b;
        a.a.K.za(b, this.fb = this.s.bind(this));
      };

      a.T = function () {
        a.a.Ab(this, D);
        D.qb(this);
      };

      var D = {
        qb: function qb(a) {
          a.U = {
            change: []
          };
          a.sc = 1;
        },
        subscribe: function subscribe(b, c, d) {
          var e = this;
          d = d || "change";
          var f = new a.ic(e, c ? b.bind(c) : b, function () {
            a.a.Pa(e.U[d], f);
            e.hb && e.hb(d);
          });
          e.Qa && e.Qa(d);
          e.U[d] || (e.U[d] = []);
          e.U[d].push(f);
          return f;
        },
        notifySubscribers: function notifySubscribers(b, c) {
          c = c || "change";
          "change" === c && this.Gb();

          if (this.Wa(c)) {
            var d = "change" === c && this.ed || this.U[c].slice(0);

            try {
              a.u.xc();

              for (var e = 0, f; f = d[e]; ++e) {
                f.Ib || f.lc(b);
              }
            } finally {
              a.u.end();
            }
          }
        },
        ob: function ob() {
          return this.sc;
        },
        Dd: function Dd(a) {
          return this.ob() !== a;
        },
        Gb: function Gb() {
          ++this.sc;
        },
        ub: function ub(b) {
          var c = this,
              d = a.O(c),
              e,
              f,
              g,
              h,
              m;
          c.gb || (c.gb = c.notifySubscribers, c.notifySubscribers = Z);
          var k = b(function () {
            c.Ja = !1;
            d && h === c && (h = c.nc ? c.nc() : c());
            var a = f || m && c.sb(g, h);
            m = f = e = !1;
            a && c.gb(g = h);
          });

          c.qc = function (a, b) {
            b && c.Ja || (m = !b);
            c.ed = c.U.change.slice(0);
            c.Ja = e = !0;
            h = a;
            k();
          };

          c.pc = function (a) {
            e || (g = a, c.gb(a, "beforeChange"));
          };

          c.rc = function () {
            m = !0;
          };

          c.gd = function () {
            c.sb(g, c.v(!0)) && (f = !0);
          };
        },
        Wa: function Wa(a) {
          return this.U[a] && this.U[a].length;
        },
        Bd: function Bd(b) {
          if (b) return this.U[b] && this.U[b].length || 0;
          var c = 0;
          a.a.P(this.U, function (a, b) {
            "dirty" !== a && (c += b.length);
          });
          return c;
        },
        sb: function sb(a, c) {
          return !this.equalityComparer || !this.equalityComparer(a, c);
        },
        toString: function toString() {
          return "[object Object]";
        },
        extend: function extend(b) {
          var c = this;
          b && a.a.P(b, function (b, e) {
            var f = a.Ta[b];
            "function" == typeof f && (c = f(c, e) || c);
          });
          return c;
        }
      };
      a.L(D, "init", D.qb);
      a.L(D, "subscribe", D.subscribe);
      a.L(D, "extend", D.extend);
      a.L(D, "getSubscriptionsCount", D.Bd);
      a.a.Ba && a.a.setPrototypeOf(D, Function.prototype);
      a.T.fn = D;

      a.Qc = function (a) {
        return null != a && "function" == typeof a.subscribe && "function" == typeof a.notifySubscribers;
      };

      a.b("subscribable", a.T);
      a.b("isSubscribable", a.Qc);

      a.S = a.u = function () {
        function b(a) {
          d.push(e);
          e = a;
        }

        function c() {
          e = d.pop();
        }

        var d = [],
            e,
            f = 0;
        return {
          xc: b,
          end: c,
          cc: function cc(b) {
            if (e) {
              if (!a.Qc(b)) throw Error("Only subscribable things can act as dependencies");
              e.od.call(e.pd, b, b.fd || (b.fd = ++f));
            }
          },
          G: function G(a, d, e) {
            try {
              return b(), a.apply(d, e || []);
            } finally {
              c();
            }
          },
          qa: function qa() {
            if (e) return e.o.qa();
          },
          Va: function Va() {
            if (e) return e.o.Va();
          },
          Ya: function Ya() {
            if (e) return e.Ya;
          },
          o: function o() {
            if (e) return e.o;
          }
        };
      }();

      a.b("computedContext", a.S);
      a.b("computedContext.getDependenciesCount", a.S.qa);
      a.b("computedContext.getDependencies", a.S.Va);
      a.b("computedContext.isInitial", a.S.Ya);
      a.b("computedContext.registerDependency", a.S.cc);
      a.b("ignoreDependencies", a.Yd = a.u.G);
      var I = a.a.Da("_latestValue");

      a.ta = function (b) {
        function c() {
          if (0 < arguments.length) return c.sb(c[I], arguments[0]) && (c.ya(), c[I] = arguments[0], c.xa()), this;
          a.u.cc(c);
          return c[I];
        }

        c[I] = b;
        a.a.Ba || a.a.extend(c, a.T.fn);
        a.T.fn.qb(c);
        a.a.Ab(c, F);
        a.options.deferUpdates && a.Ta.deferred(c, !0);
        return c;
      };

      var F = {
        equalityComparer: K,
        v: function v() {
          return this[I];
        },
        xa: function xa() {
          this.notifySubscribers(this[I], "spectate");
          this.notifySubscribers(this[I]);
        },
        ya: function ya() {
          this.notifySubscribers(this[I], "beforeChange");
        }
      };
      a.a.Ba && a.a.setPrototypeOf(F, a.T.fn);
      var G = a.ta.Ma = "__ko_proto__";
      F[G] = a.ta;

      a.O = function (b) {
        if ((b = "function" == typeof b && b[G]) && b !== F[G] && b !== a.o.fn[G]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
        return !!b;
      };

      a.Za = function (b) {
        return "function" == typeof b && (b[G] === F[G] || b[G] === a.o.fn[G] && b.Nc);
      };

      a.b("observable", a.ta);
      a.b("isObservable", a.O);
      a.b("isWriteableObservable", a.Za);
      a.b("isWritableObservable", a.Za);
      a.b("observable.fn", F);
      a.L(F, "peek", F.v);
      a.L(F, "valueHasMutated", F.xa);
      a.L(F, "valueWillMutate", F.ya);

      a.Ha = function (b) {
        b = b || [];
        if ("object" != _typeof(b) || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
        b = a.ta(b);
        a.a.Ab(b, a.Ha.fn);
        return b.extend({
          trackArrayChanges: !0
        });
      };

      a.Ha.fn = {
        remove: function remove(b) {
          for (var c = this.v(), d = [], e = "function" != typeof b || a.O(b) ? function (a) {
            return a === b;
          } : b, f = 0; f < c.length; f++) {
            var g = c[f];

            if (e(g)) {
              0 === d.length && this.ya();
              if (c[f] !== g) throw Error("Array modified during remove; cannot remove item");
              d.push(g);
              c.splice(f, 1);
              f--;
            }
          }

          d.length && this.xa();
          return d;
        },
        removeAll: function removeAll(b) {
          if (b === n) {
            var c = this.v(),
                d = c.slice(0);
            this.ya();
            c.splice(0, c.length);
            this.xa();
            return d;
          }

          return b ? this.remove(function (c) {
            return 0 <= a.a.A(b, c);
          }) : [];
        },
        destroy: function destroy(b) {
          var c = this.v(),
              d = "function" != typeof b || a.O(b) ? function (a) {
            return a === b;
          } : b;
          this.ya();

          for (var e = c.length - 1; 0 <= e; e--) {
            var f = c[e];
            d(f) && (f._destroy = !0);
          }

          this.xa();
        },
        destroyAll: function destroyAll(b) {
          return b === n ? this.destroy(function () {
            return !0;
          }) : b ? this.destroy(function (c) {
            return 0 <= a.a.A(b, c);
          }) : [];
        },
        indexOf: function indexOf(b) {
          var c = this();
          return a.a.A(c, b);
        },
        replace: function replace(a, c) {
          var d = this.indexOf(a);
          0 <= d && (this.ya(), this.v()[d] = c, this.xa());
        },
        sorted: function sorted(a) {
          var c = this().slice(0);
          return a ? c.sort(a) : c.sort();
        },
        reversed: function reversed() {
          return this().slice(0).reverse();
        }
      };
      a.a.Ba && a.a.setPrototypeOf(a.Ha.fn, a.ta.fn);
      a.a.D("pop push reverse shift sort splice unshift".split(" "), function (b) {
        a.Ha.fn[b] = function () {
          var a = this.v();
          this.ya();
          this.zc(a, b, arguments);
          var d = a[b].apply(a, arguments);
          this.xa();
          return d === a ? this : d;
        };
      });
      a.a.D(["slice"], function (b) {
        a.Ha.fn[b] = function () {
          var a = this();
          return a[b].apply(a, arguments);
        };
      });

      a.Pc = function (b) {
        return a.O(b) && "function" == typeof b.remove && "function" == typeof b.push;
      };

      a.b("observableArray", a.Ha);
      a.b("isObservableArray", a.Pc);

      a.Ta.trackArrayChanges = function (b, c) {
        function d() {
          function c() {
            if (m) {
              var d = [].concat(b.v() || []),
                  e;

              if (b.Wa("arrayChange")) {
                if (!f || 1 < m) f = a.a.Pb(k, d, b.Ob);
                e = f;
              }

              k = d;
              f = null;
              m = 0;
              e && e.length && b.notifySubscribers(e, "arrayChange");
            }
          }

          e ? c() : (e = !0, h = b.subscribe(function () {
            ++m;
          }, null, "spectate"), k = [].concat(b.v() || []), f = null, g = b.subscribe(c));
        }

        b.Ob = {};
        c && "object" == _typeof(c) && a.a.extend(b.Ob, c);
        b.Ob.sparse = !0;

        if (!b.zc) {
          var e = !1,
              f = null,
              g,
              h,
              m = 0,
              k,
              l = b.Qa,
              p = b.hb;

          b.Qa = function (a) {
            l && l.call(b, a);
            "arrayChange" === a && d();
          };

          b.hb = function (a) {
            p && p.call(b, a);
            "arrayChange" !== a || b.Wa("arrayChange") || (g && g.s(), h && h.s(), h = g = null, e = !1, k = n);
          };

          b.zc = function (b, c, d) {
            function l(a, b, c) {
              return k[k.length] = {
                status: a,
                value: b,
                index: c
              };
            }

            if (e && !m) {
              var k = [],
                  p = b.length,
                  g = d.length,
                  h = 0;

              switch (c) {
                case "push":
                  h = p;

                case "unshift":
                  for (c = 0; c < g; c++) {
                    l("added", d[c], h + c);
                  }

                  break;

                case "pop":
                  h = p - 1;

                case "shift":
                  p && l("deleted", b[h], h);
                  break;

                case "splice":
                  c = Math.min(Math.max(0, 0 > d[0] ? p + d[0] : d[0]), p);

                  for (var p = 1 === g ? p : Math.min(c + (d[1] || 0), p), g = c + g - 2, h = Math.max(p, g), U = [], L = [], n = 2; c < h; ++c, ++n) {
                    c < p && L.push(l("deleted", b[c], c)), c < g && U.push(l("added", d[n], c));
                  }

                  a.a.Kc(L, U);
                  break;

                default:
                  return;
              }

              f = k;
            }
          };
        }
      };

      var r = a.a.Da("_state");

      a.o = a.$ = function (b, c, d) {
        function e() {
          if (0 < arguments.length) {
            if ("function" === typeof f) f.apply(g.nb, arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
            return this;
          }

          g.ra || a.u.cc(e);
          (g.ka || g.J && e.Xa()) && e.ha();
          return g.X;
        }

        "object" === _typeof(b) ? d = b : (d = d || {}, b && (d.read = b));
        if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
        var f = d.write,
            g = {
          X: n,
          sa: !0,
          ka: !0,
          rb: !1,
          jc: !1,
          ra: !1,
          wb: !1,
          J: !1,
          Wc: d.read,
          nb: c || d.owner,
          l: d.disposeWhenNodeIsRemoved || d.l || null,
          Sa: d.disposeWhen || d.Sa,
          Rb: null,
          I: {},
          V: 0,
          Ic: null
        };
        e[r] = g;
        e.Nc = "function" === typeof f;
        a.a.Ba || a.a.extend(e, a.T.fn);
        a.T.fn.qb(e);
        a.a.Ab(e, C);
        d.pure ? (g.wb = !0, g.J = !0, a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
        a.options.deferUpdates && a.Ta.deferred(e, !0);
        g.l && (g.jc = !0, g.l.nodeType || (g.l = null));
        g.J || d.deferEvaluation || e.ha();
        g.l && e.ja() && a.a.K.za(g.l, g.Rb = function () {
          e.s();
        });
        return e;
      };

      var C = {
        equalityComparer: K,
        qa: function qa() {
          return this[r].V;
        },
        Va: function Va() {
          var b = [];
          a.a.P(this[r].I, function (a, d) {
            b[d.Ka] = d.da;
          });
          return b;
        },
        Vb: function Vb(b) {
          if (!this[r].V) return !1;
          var c = this.Va();
          return -1 !== a.a.A(c, b) ? !0 : !!a.a.Lb(c, function (a) {
            return a.Vb && a.Vb(b);
          });
        },
        uc: function uc(a, c, d) {
          if (this[r].wb && c === this) throw Error("A 'pure' computed must not be called recursively");
          this[r].I[a] = d;
          d.Ka = this[r].V++;
          d.La = c.ob();
        },
        Xa: function Xa() {
          var a,
              c,
              d = this[r].I;

          for (a in d) {
            if (Object.prototype.hasOwnProperty.call(d, a) && (c = d[a], this.Ia && c.da.Ja || c.da.Dd(c.La))) return !0;
          }
        },
        Jd: function Jd() {
          this.Ia && !this[r].rb && this.Ia(!1);
        },
        ja: function ja() {
          var a = this[r];
          return a.ka || 0 < a.V;
        },
        Rd: function Rd() {
          this.Ja ? this[r].ka && (this[r].sa = !0) : this.Hc();
        },
        $c: function $c(a) {
          if (a.Hb) {
            var c = a.subscribe(this.Jd, this, "dirty"),
                d = a.subscribe(this.Rd, this);
            return {
              da: a,
              s: function s() {
                c.s();
                d.s();
              }
            };
          }

          return a.subscribe(this.Hc, this);
        },
        Hc: function Hc() {
          var b = this,
              c = b.throttleEvaluation;
          c && 0 <= c ? (clearTimeout(this[r].Ic), this[r].Ic = a.a.setTimeout(function () {
            b.ha(!0);
          }, c)) : b.Ia ? b.Ia(!0) : b.ha(!0);
        },
        ha: function ha(b) {
          var c = this[r],
              d = c.Sa,
              e = !1;

          if (!c.rb && !c.ra) {
            if (c.l && !a.a.Sb(c.l) || d && d()) {
              if (!c.jc) {
                this.s();
                return;
              }
            } else c.jc = !1;

            c.rb = !0;

            try {
              e = this.zd(b);
            } finally {
              c.rb = !1;
            }

            return e;
          }
        },
        zd: function zd(b) {
          var c = this[r],
              d = !1,
              e = c.wb ? n : !c.V,
              d = {
            qd: this,
            mb: c.I,
            Qb: c.V
          };
          a.u.xc({
            pd: d,
            od: ba,
            o: this,
            Ya: e
          });
          c.I = {};
          c.V = 0;
          var f = this.yd(c, d);
          c.V ? d = this.sb(c.X, f) : (this.s(), d = !0);
          d && (c.J ? this.Gb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.J && b && this.notifySubscribers(c.X), this.rc && this.rc());
          e && this.notifySubscribers(c.X, "awake");
          return d;
        },
        yd: function yd(b, c) {
          try {
            var d = b.Wc;
            return b.nb ? d.call(b.nb) : d();
          } finally {
            a.u.end(), c.Qb && !b.J && a.a.P(c.mb, aa), b.sa = b.ka = !1;
          }
        },
        v: function v(a) {
          var c = this[r];
          (c.ka && (a || !c.V) || c.J && this.Xa()) && this.ha();
          return c.X;
        },
        ub: function ub(b) {
          a.T.fn.ub.call(this, b);

          this.nc = function () {
            this[r].J || (this[r].sa ? this.ha() : this[r].ka = !1);
            return this[r].X;
          };

          this.Ia = function (a) {
            this.pc(this[r].X);
            this[r].ka = !0;
            a && (this[r].sa = !0);
            this.qc(this, !a);
          };
        },
        s: function s() {
          var b = this[r];
          !b.J && b.I && a.a.P(b.I, function (a, b) {
            b.s && b.s();
          });
          b.l && b.Rb && a.a.K.yb(b.l, b.Rb);
          b.I = n;
          b.V = 0;
          b.ra = !0;
          b.sa = !1;
          b.ka = !1;
          b.J = !1;
          b.l = n;
          b.Sa = n;
          b.Wc = n;
          this.Nc || (b.nb = n);
        }
      },
          da = {
        Qa: function Qa(b) {
          var c = this,
              d = c[r];

          if (!d.ra && d.J && "change" == b) {
            d.J = !1;
            if (d.sa || c.Xa()) d.I = null, d.V = 0, c.ha() && c.Gb();else {
              var e = [];
              a.a.P(d.I, function (a, b) {
                e[b.Ka] = a;
              });
              a.a.D(e, function (a, b) {
                var e = d.I[a],
                    m = c.$c(e.da);
                m.Ka = b;
                m.La = e.La;
                d.I[a] = m;
              });
              c.Xa() && c.ha() && c.Gb();
            }
            d.ra || c.notifySubscribers(d.X, "awake");
          }
        },
        hb: function hb(b) {
          var c = this[r];
          c.ra || "change" != b || this.Wa("change") || (a.a.P(c.I, function (a, b) {
            b.s && (c.I[a] = {
              da: b.da,
              Ka: b.Ka,
              La: b.La
            }, b.s());
          }), c.J = !0, this.notifySubscribers(n, "asleep"));
        },
        ob: function ob() {
          var b = this[r];
          b.J && (b.sa || this.Xa()) && this.ha();
          return a.T.fn.ob.call(this);
        }
      },
          ea = {
        Qa: function Qa(a) {
          "change" != a && "beforeChange" != a || this.v();
        }
      };
      a.a.Ba && a.a.setPrototypeOf(C, a.T.fn);
      var N = a.ta.Ma;
      C[N] = a.o;

      a.Oc = function (a) {
        return "function" == typeof a && a[N] === C[N];
      };

      a.Fd = function (b) {
        return a.Oc(b) && b[r] && b[r].wb;
      };

      a.b("computed", a.o);
      a.b("dependentObservable", a.o);
      a.b("isComputed", a.Oc);
      a.b("isPureComputed", a.Fd);
      a.b("computed.fn", C);
      a.L(C, "peek", C.v);
      a.L(C, "dispose", C.s);
      a.L(C, "isActive", C.ja);
      a.L(C, "getDependenciesCount", C.qa);
      a.L(C, "getDependencies", C.Va);

      a.xb = function (b, c) {
        if ("function" === typeof b) return a.o(b, c, {
          pure: !0
        });
        b = a.a.extend({}, b);
        b.pure = !0;
        return a.o(b, c);
      };

      a.b("pureComputed", a.xb);

      (function () {
        function b(a, f, g) {
          g = g || new d();
          a = f(a);
          if ("object" != _typeof(a) || null === a || a === n || a instanceof RegExp || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;
          var h = a instanceof Array ? [] : {};
          g.save(a, h);
          c(a, function (c) {
            var d = f(a[c]);

            switch (_typeof(d)) {
              case "boolean":
              case "number":
              case "string":
              case "function":
                h[c] = d;
                break;

              case "object":
              case "undefined":
                var l = g.get(d);
                h[c] = l !== n ? l : b(d, f, g);
            }
          });
          return h;
        }

        function c(a, b) {
          if (a instanceof Array) {
            for (var c = 0; c < a.length; c++) {
              b(c);
            }

            "function" == typeof a.toJSON && b("toJSON");
          } else for (c in a) {
            b(c);
          }
        }

        function d() {
          this.keys = [];
          this.values = [];
        }

        a.ad = function (c) {
          if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
          return b(c, function (b) {
            for (var c = 0; a.O(b) && 10 > c; c++) {
              b = b();
            }

            return b;
          });
        };

        a.toJSON = function (b, c, d) {
          b = a.ad(b);
          return a.a.hc(b, c, d);
        };

        d.prototype = {
          constructor: d,
          save: function save(b, c) {
            var d = a.a.A(this.keys, b);
            0 <= d ? this.values[d] = c : (this.keys.push(b), this.values.push(c));
          },
          get: function get(b) {
            b = a.a.A(this.keys, b);
            return 0 <= b ? this.values[b] : n;
          }
        };
      })();

      a.b("toJS", a.ad);
      a.b("toJSON", a.toJSON);

      a.Wd = function (b, c, d) {
        function e(c) {
          var e = a.xb(b, d).extend({
            ma: "always"
          }),
              h = e.subscribe(function (a) {
            a && (h.s(), c(a));
          });
          e.notifySubscribers(e.v());
          return h;
        }

        return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e);
      };

      a.b("when", a.Wd);

      (function () {
        a.w = {
          M: function M(b) {
            switch (a.a.R(b)) {
              case "option":
                return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.c.options.$b) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;

              case "select":
                return 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) : n;

              default:
                return b.value;
            }
          },
          cb: function cb(b, c, d) {
            switch (a.a.R(b)) {
              case "option":
                "string" === typeof c ? (a.a.g.set(b, a.c.options.$b, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.c.options.$b, c), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof c ? c : "");
                break;

              case "select":
                if ("" === c || null === c) c = n;

                for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) {
                  if (h = a.w.M(b.options[f]), h == c || "" === h && c === n) {
                    e = f;
                    break;
                  }
                }

                if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function () {
                  b.selectedIndex = e;
                }, 0);
                break;

              default:
                if (null === c || c === n) c = "";
                b.value = c;
            }
          }
        };
      })();

      a.b("selectExtensions", a.w);
      a.b("selectExtensions.readValue", a.w.M);
      a.b("selectExtensions.writeValue", a.w.cb);

      a.m = function () {
        function b(b) {
          b = a.a.Db(b);
          123 === b.charCodeAt(0) && (b = b.slice(1, -1));
          b += "\n,";
          var c = [],
              d = b.match(e),
              p,
              q = [],
              h = 0;

          if (1 < d.length) {
            for (var x = 0, B; B = d[x]; ++x) {
              var u = B.charCodeAt(0);

              if (44 === u) {
                if (0 >= h) {
                  c.push(p && q.length ? {
                    key: p,
                    value: q.join("")
                  } : {
                    unknown: p || q.join("")
                  });
                  p = h = 0;
                  q = [];
                  continue;
                }
              } else if (58 === u) {
                if (!h && !p && 1 === q.length) {
                  p = q.pop();
                  continue;
                }
              } else if (47 === u && 1 < B.length && (47 === B.charCodeAt(1) || 42 === B.charCodeAt(1))) continue;else 47 === u && x && 1 < B.length ? (u = d[x - 1].match(f)) && !g[u[0]] && (b = b.substr(b.indexOf(B) + 1), d = b.match(e), x = -1, B = "/") : 40 === u || 123 === u || 91 === u ? ++h : 41 === u || 125 === u || 93 === u ? --h : p || q.length || 34 !== u && 39 !== u || (B = B.slice(1, -1));

              q.push(B);
            }

            if (0 < h) throw Error("Unbalanced parentheses, braces, or brackets");
          }

          return c;
        }

        var c = ["true", "false", "null", "undefined"],
            d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
            e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"),
            f = /[\])"'A-Za-z0-9_$]+$/,
            g = {
          "in": 1,
          "return": 1,
          "typeof": 1
        },
            h = {};
        return {
          Ra: [],
          wa: h,
          ac: b,
          vb: function vb(e, f) {
            function l(b, e) {
              var f;

              if (!x) {
                var k = a.getBindingHandler(b);
                if (k && k.preprocess && !(e = k.preprocess(e, b, l))) return;
                if (k = h[b]) f = e, 0 <= a.a.A(c, f) ? f = !1 : (k = f.match(d), f = null === k ? !1 : k[1] ? "Object(" + k[1] + ")" + k[2] : f), k = f;
                k && q.push("'" + ("string" == typeof h[b] ? h[b] : b) + "':function(_z){" + f + "=_z}");
              }

              g && (e = "function(){return " + e + " }");
              p.push("'" + b + "':" + e);
            }

            f = f || {};
            var p = [],
                q = [],
                g = f.valueAccessors,
                x = f.bindingParams,
                B = "string" === typeof e ? b(e) : e;
            a.a.D(B, function (a) {
              l(a.key || a.unknown, a.value);
            });
            q.length && l("_ko_property_writers", "{" + q.join(",") + " }");
            return p.join(",");
          },
          Id: function Id(a, b) {
            for (var c = 0; c < a.length; c++) {
              if (a[c].key == b) return !0;
            }

            return !1;
          },
          eb: function eb(b, c, d, e, f) {
            if (b && a.O(b)) !a.Za(b) || f && b.v() === e || b(e);else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e);
          }
        };
      }();

      a.b("expressionRewriting", a.m);
      a.b("expressionRewriting.bindingRewriteValidators", a.m.Ra);
      a.b("expressionRewriting.parseObjectLiteral", a.m.ac);
      a.b("expressionRewriting.preProcessBindings", a.m.vb);
      a.b("expressionRewriting._twoWayBindings", a.m.wa);
      a.b("jsonExpressionRewriting", a.m);
      a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.vb);

      (function () {
        function b(a) {
          return 8 == a.nodeType && g.test(f ? a.text : a.nodeValue);
        }

        function c(a) {
          return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue);
        }

        function d(d, e) {
          for (var f = d, h = 1, g = []; f = f.nextSibling;) {
            if (c(f) && (a.a.g.set(f, k, !0), h--, 0 === h)) return g;
            g.push(f);
            b(f) && h++;
          }

          if (!e) throw Error("Cannot find closing comment tag to match: " + d.nodeValue);
          return null;
        }

        function e(a, b) {
          var c = d(a, b);
          return c ? 0 < c.length ? c[c.length - 1].nextSibling : a.nextSibling : null;
        }

        var f = w && "\x3c!--test--\x3e" === w.createComment("test").text,
            g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
            m = {
          ul: !0,
          ol: !0
        },
            k = "__ko_matchedEndComment__";
        a.h = {
          ea: {},
          childNodes: function childNodes(a) {
            return b(a) ? d(a) : a.childNodes;
          },
          Ea: function Ea(c) {
            if (b(c)) {
              c = a.h.childNodes(c);

              for (var d = 0, e = c.length; d < e; d++) {
                a.removeNode(c[d]);
              }
            } else a.a.Tb(c);
          },
          va: function va(c, d) {
            if (b(c)) {
              a.h.Ea(c);

              for (var e = c.nextSibling, f = 0, k = d.length; f < k; f++) {
                e.parentNode.insertBefore(d[f], e);
              }
            } else a.a.va(c, d);
          },
          Vc: function Vc(a, c) {
            var d;
            b(a) ? (d = a.nextSibling, a = a.parentNode) : d = a.firstChild;
            d ? c !== d && a.insertBefore(c, d) : a.appendChild(c);
          },
          Wb: function Wb(c, d, e) {
            e ? (e = e.nextSibling, b(c) && (c = c.parentNode), e ? d !== e && c.insertBefore(d, e) : c.appendChild(d)) : a.h.Vc(c, d);
          },
          firstChild: function firstChild(a) {
            if (b(a)) return !a.nextSibling || c(a.nextSibling) ? null : a.nextSibling;
            if (a.firstChild && c(a.firstChild)) throw Error("Found invalid end comment, as the first child of " + a);
            return a.firstChild;
          },
          nextSibling: function nextSibling(d) {
            b(d) && (d = e(d));

            if (d.nextSibling && c(d.nextSibling)) {
              var f = d.nextSibling;
              if (c(f) && !a.a.g.get(f, k)) throw Error("Found end comment without a matching opening comment, as child of " + d);
              return null;
            }

            return d.nextSibling;
          },
          Cd: b,
          Vd: function Vd(a) {
            return (a = (f ? a.text : a.nodeValue).match(g)) ? a[1] : null;
          },
          Sc: function Sc(d) {
            if (m[a.a.R(d)]) {
              var f = d.firstChild;

              if (f) {
                do {
                  if (1 === f.nodeType) {
                    var k;
                    k = f.firstChild;
                    var h = null;

                    if (k) {
                      do {
                        if (h) h.push(k);else if (b(k)) {
                          var g = e(k, !0);
                          g ? k = g : h = [k];
                        } else c(k) && (h = [k]);
                      } while (k = k.nextSibling);
                    }

                    if (k = h) for (h = f.nextSibling, g = 0; g < k.length; g++) {
                      h ? d.insertBefore(k[g], h) : d.appendChild(k[g]);
                    }
                  }
                } while (f = f.nextSibling);
              }
            }
          }
        };
      })();

      a.b("virtualElements", a.h);
      a.b("virtualElements.allowedBindings", a.h.ea);
      a.b("virtualElements.emptyNode", a.h.Ea);
      a.b("virtualElements.insertAfter", a.h.Wb);
      a.b("virtualElements.prepend", a.h.Vc);
      a.b("virtualElements.setDomNodeChildren", a.h.va);

      (function () {
        a.ga = function () {
          this.nd = {};
        };

        a.a.extend(a.ga.prototype, {
          nodeHasBindings: function nodeHasBindings(b) {
            switch (b.nodeType) {
              case 1:
                return null != b.getAttribute("data-bind") || a.j.getComponentNameForNode(b);

              case 8:
                return a.h.Cd(b);

              default:
                return !1;
            }
          },
          getBindings: function getBindings(b, c) {
            var d = this.getBindingsString(b, c),
                d = d ? this.parseBindingsString(d, c, b) : null;
            return a.j.tc(d, b, c, !1);
          },
          getBindingAccessors: function getBindingAccessors(b, c) {
            var d = this.getBindingsString(b, c),
                d = d ? this.parseBindingsString(d, c, b, {
              valueAccessors: !0
            }) : null;
            return a.j.tc(d, b, c, !0);
          },
          getBindingsString: function getBindingsString(b) {
            switch (b.nodeType) {
              case 1:
                return b.getAttribute("data-bind");

              case 8:
                return a.h.Vd(b);

              default:
                return null;
            }
          },
          parseBindingsString: function parseBindingsString(b, c, d, e) {
            try {
              var f = this.nd,
                  g = b + (e && e.valueAccessors || ""),
                  h;

              if (!(h = f[g])) {
                var m,
                    k = "with($context){with($data||{}){return{" + a.m.vb(b, e) + "}}}";
                m = new Function("$context", "$element", k);
                h = f[g] = m;
              }

              return h(c, d);
            } catch (l) {
              throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
            }
          }
        });
        a.ga.instance = new a.ga();
      })();

      a.b("bindingProvider", a.ga);

      (function () {
        function b(b) {
          var c = (b = a.a.g.get(b, z)) && b.N;
          c && (b.N = null, c.Tc());
        }

        function c(c, d, e) {
          this.node = c;
          this.yc = d;
          this.kb = [];
          this.H = !1;
          d.N || a.a.K.za(c, b);
          e && e.N && (e.N.kb.push(c), this.Kb = e);
        }

        function d(a) {
          return function () {
            return a;
          };
        }

        function e(a) {
          return a();
        }

        function f(b) {
          return a.a.Ga(a.u.G(b), function (a, c) {
            return function () {
              return b()[c];
            };
          });
        }

        function g(b, c, e) {
          return "function" === typeof b ? f(b.bind(null, c, e)) : a.a.Ga(b, d);
        }

        function h(a, b) {
          return f(this.getBindings.bind(this, a, b));
        }

        function m(b, c) {
          var d = a.h.firstChild(c);

          if (d) {
            var e,
                f = a.ga.instance,
                l = f.preprocessNode;

            if (l) {
              for (; e = d;) {
                d = a.h.nextSibling(e), l.call(f, e);
              }

              d = a.h.firstChild(c);
            }

            for (; e = d;) {
              d = a.h.nextSibling(e), k(b, e);
            }
          }

          a.i.ma(c, a.i.H);
        }

        function k(b, c) {
          var d = b,
              e = 1 === c.nodeType;
          e && a.h.Sc(c);
          if (e || a.ga.instance.nodeHasBindings(c)) d = p(c, null, b).bindingContextForDescendants;
          d && !u[a.a.R(c)] && m(d, c);
        }

        function l(b) {
          var c = [],
              d = {},
              e = [];
          a.a.P(b, function ca(f) {
            if (!d[f]) {
              var k = a.getBindingHandler(f);
              k && (k.after && (e.push(f), a.a.D(k.after, function (c) {
                if (b[c]) {
                  if (-1 !== a.a.A(e, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e.join(", "));
                  ca(c);
                }
              }), e.length--), c.push({
                key: f,
                Mc: k
              }));
              d[f] = !0;
            }
          });
          return c;
        }

        function p(b, c, d) {
          var f = a.a.g.Ub(b, z, {}),
              k = f.hd;

          if (!c) {
            if (k) throw Error("You cannot apply bindings multiple times to the same element.");
            f.hd = !0;
          }

          k || (f.context = d);
          f.Zb || (f.Zb = {});
          var g;
          if (c && "function" !== typeof c) g = c;else {
            var p = a.ga.instance,
                q = p.getBindingAccessors || h,
                m = a.$(function () {
              if (g = c ? c(d, b) : q.call(p, b, d)) {
                if (d[t]) d[t]();
                if (d[B]) d[B]();
              }

              return g;
            }, null, {
              l: b
            });
            g && m.ja() || (m = null);
          }
          var x = d,
              u;

          if (g) {
            var J = function J() {
              return a.a.Ga(m ? m() : g, e);
            },
                r = m ? function (a) {
              return function () {
                return e(m()[a]);
              };
            } : function (a) {
              return g[a];
            };

            J.get = function (a) {
              return g[a] && e(r(a));
            };

            J.has = function (a) {
              return a in g;
            };

            a.i.H in g && a.i.subscribe(b, a.i.H, function () {
              var c = (0, g[a.i.H])();

              if (c) {
                var d = a.h.childNodes(b);
                d.length && c(d, a.Ec(d[0]));
              }
            });
            a.i.pa in g && (x = a.i.Cb(b, d), a.i.subscribe(b, a.i.pa, function () {
              var c = (0, g[a.i.pa])();
              c && a.h.firstChild(b) && c(b);
            }));
            f = l(g);
            a.a.D(f, function (c) {
              var d = c.Mc.init,
                  e = c.Mc.update,
                  f = c.key;
              if (8 === b.nodeType && !a.h.ea[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements");

              try {
                "function" == typeof d && a.u.G(function () {
                  var a = d(b, r(f), J, x.$data, x);

                  if (a && a.controlsDescendantBindings) {
                    if (u !== n) throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                    u = f;
                  }
                }), "function" == typeof e && a.$(function () {
                  e(b, r(f), J, x.$data, x);
                }, null, {
                  l: b
                });
              } catch (k) {
                throw k.message = 'Unable to process binding "' + f + ": " + g[f] + '"\nMessage: ' + k.message, k;
              }
            });
          }

          f = u === n;
          return {
            shouldBindDescendants: f,
            bindingContextForDescendants: f && x
          };
        }

        function q(b, c) {
          return b && b instanceof a.fa ? b : new a.fa(b, n, n, c);
        }

        var t = a.a.Da("_subscribable"),
            x = a.a.Da("_ancestorBindingInfo"),
            B = a.a.Da("_dataDependency");
        a.c = {};
        var u = {
          script: !0,
          textarea: !0,
          template: !0
        };

        a.getBindingHandler = function (b) {
          return a.c[b];
        };

        var J = {};

        a.fa = function (b, c, d, e, f) {
          function k() {
            var b = p ? h() : h,
                f = a.a.f(b);
            c ? (a.a.extend(l, c), x in c && (l[x] = c[x])) : (l.$parents = [], l.$root = f, l.ko = a);
            l[t] = q;
            g ? f = l.$data : (l.$rawData = b, l.$data = f);
            d && (l[d] = f);
            e && e(l, c, f);
            if (c && c[t] && !a.S.o().Vb(c[t])) c[t]();
            m && (l[B] = m);
            return l.$data;
          }

          var l = this,
              g = b === J,
              h = g ? n : b,
              p = "function" == typeof h && !a.O(h),
              q,
              m = f && f.dataDependency;
          f && f.exportDependencies ? k() : (q = a.xb(k), q.v(), q.ja() ? q.equalityComparer = null : l[t] = n);
        };

        a.fa.prototype.createChildContext = function (b, c, d, e) {
          !e && c && "object" == _typeof(c) && (e = c, c = e.as, d = e.extend);

          if (c && e && e.noChildContext) {
            var f = "function" == typeof b && !a.O(b);
            return new a.fa(J, this, null, function (a) {
              d && d(a);
              a[c] = f ? b() : b;
            }, e);
          }

          return new a.fa(b, this, c, function (a, b) {
            a.$parentContext = b;
            a.$parent = b.$data;
            a.$parents = (b.$parents || []).slice(0);
            a.$parents.unshift(a.$parent);
            d && d(a);
          }, e);
        };

        a.fa.prototype.extend = function (b, c) {
          return new a.fa(J, this, null, function (c) {
            a.a.extend(c, "function" == typeof b ? b(c) : b);
          }, c);
        };

        var z = a.a.g.Z();

        c.prototype.Tc = function () {
          this.Kb && this.Kb.N && this.Kb.N.sd(this.node);
        };

        c.prototype.sd = function (b) {
          a.a.Pa(this.kb, b);
          !this.kb.length && this.H && this.Cc();
        };

        c.prototype.Cc = function () {
          this.H = !0;
          this.yc.N && !this.kb.length && (this.yc.N = null, a.a.K.yb(this.node, b), a.i.ma(this.node, a.i.pa), this.Tc());
        };

        a.i = {
          H: "childrenComplete",
          pa: "descendantsComplete",
          subscribe: function subscribe(b, c, d, e, f) {
            var k = a.a.g.Ub(b, z, {});
            k.Fa || (k.Fa = new a.T());
            f && f.notifyImmediately && k.Zb[c] && a.u.G(d, e, [b]);
            return k.Fa.subscribe(d, e, c);
          },
          ma: function ma(b, c) {
            var d = a.a.g.get(b, z);
            if (d && (d.Zb[c] = !0, d.Fa && d.Fa.notifySubscribers(b, c), c == a.i.H)) if (d.N) d.N.Cc();else if (d.N === n && d.Fa && d.Fa.Wa(a.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node");
          },
          Cb: function Cb(b, d) {
            var e = a.a.g.Ub(b, z, {});
            e.N || (e.N = new c(b, e, d[x]));
            return d[x] == e ? d : d.extend(function (a) {
              a[x] = e;
            });
          }
        };

        a.Td = function (b) {
          return (b = a.a.g.get(b, z)) && b.context;
        };

        a.ib = function (b, c, d) {
          1 === b.nodeType && a.h.Sc(b);
          return p(b, c, q(d));
        };

        a.ld = function (b, c, d) {
          d = q(d);
          return a.ib(b, g(c, d, b), d);
        };

        a.Oa = function (a, b) {
          1 !== b.nodeType && 8 !== b.nodeType || m(q(a), b);
        };

        a.vc = function (a, b, c) {
          !v && A.jQuery && (v = A.jQuery);

          if (2 > arguments.length) {
            if (b = w.body, !b) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
          } else if (!b || 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");

          k(q(a, c), b);
        };

        a.Dc = function (b) {
          return !b || 1 !== b.nodeType && 8 !== b.nodeType ? n : a.Td(b);
        };

        a.Ec = function (b) {
          return (b = a.Dc(b)) ? b.$data : n;
        };

        a.b("bindingHandlers", a.c);
        a.b("bindingEvent", a.i);
        a.b("bindingEvent.subscribe", a.i.subscribe);
        a.b("bindingEvent.startPossiblyAsyncContentBinding", a.i.Cb);
        a.b("applyBindings", a.vc);
        a.b("applyBindingsToDescendants", a.Oa);
        a.b("applyBindingAccessorsToNode", a.ib);
        a.b("applyBindingsToNode", a.ld);
        a.b("contextFor", a.Dc);
        a.b("dataFor", a.Ec);
      })();

      (function (b) {
        function c(c, e) {
          var k = Object.prototype.hasOwnProperty.call(f, c) ? f[c] : b,
              l;
          k ? k.subscribe(e) : (k = f[c] = new a.T(), k.subscribe(e), d(c, function (b, d) {
            var e = !(!d || !d.synchronous);
            g[c] = {
              definition: b,
              Gd: e
            };
            delete f[c];
            l || e ? k.notifySubscribers(b) : a.na.zb(function () {
              k.notifySubscribers(b);
            });
          }), l = !0);
        }

        function d(a, b) {
          e("getConfig", [a], function (c) {
            c ? e("loadComponent", [a, c], function (a) {
              b(a, c);
            }) : b(null, null);
          });
        }

        function e(c, d, f, l) {
          l || (l = a.j.loaders.slice(0));
          var g = l.shift();

          if (g) {
            var q = g[c];

            if (q) {
              var t = !1;
              if (q.apply(g, d.concat(function (a) {
                t ? f(null) : null !== a ? f(a) : e(c, d, f, l);
              })) !== b && (t = !0, !g.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
            } else e(c, d, f, l);
          } else f(null);
        }

        var f = {},
            g = {};
        a.j = {
          get: function get(d, e) {
            var f = Object.prototype.hasOwnProperty.call(g, d) ? g[d] : b;
            f ? f.Gd ? a.u.G(function () {
              e(f.definition);
            }) : a.na.zb(function () {
              e(f.definition);
            }) : c(d, e);
          },
          Bc: function Bc(a) {
            delete g[a];
          },
          oc: e
        };
        a.j.loaders = [];
        a.b("components", a.j);
        a.b("components.get", a.j.get);
        a.b("components.clearCachedDefinition", a.j.Bc);
      })();

      (function () {
        function b(b, c, d, e) {
          function g() {
            0 === --B && e(h);
          }

          var h = {},
              B = 2,
              u = d.template;
          d = d.viewModel;
          u ? f(c, u, function (c) {
            a.j.oc("loadTemplate", [b, c], function (a) {
              h.template = a;
              g();
            });
          }) : g();
          d ? f(c, d, function (c) {
            a.j.oc("loadViewModel", [b, c], function (a) {
              h[m] = a;
              g();
            });
          }) : g();
        }

        function c(a, b, d) {
          if ("function" === typeof b) d(function (a) {
            return new b(a);
          });else if ("function" === typeof b[m]) d(b[m]);else if ("instance" in b) {
            var e = b.instance;
            d(function () {
              return e;
            });
          } else "viewModel" in b ? c(a, b.viewModel, d) : a("Unknown viewModel value: " + b);
        }

        function d(b) {
          switch (a.a.R(b)) {
            case "script":
              return a.a.ua(b.text);

            case "textarea":
              return a.a.ua(b.value);

            case "template":
              if (e(b.content)) return a.a.Ca(b.content.childNodes);
          }

          return a.a.Ca(b.childNodes);
        }

        function e(a) {
          return A.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
        }

        function f(a, b, c) {
          "string" === typeof b.require ? T || A.require ? (T || A.require)([b.require], function (a) {
            a && "object" === _typeof(a) && a.Xd && a["default"] && (a = a["default"]);
            c(a);
          }) : a("Uses require, but no AMD loader is present") : c(b);
        }

        function g(a) {
          return function (b) {
            throw Error("Component '" + a + "': " + b);
          };
        }

        var h = {};

        a.j.register = function (b, c) {
          if (!c) throw Error("Invalid configuration for " + b);
          if (a.j.tb(b)) throw Error("Component " + b + " is already registered");
          h[b] = c;
        };

        a.j.tb = function (a) {
          return Object.prototype.hasOwnProperty.call(h, a);
        };

        a.j.unregister = function (b) {
          delete h[b];
          a.j.Bc(b);
        };

        a.j.Fc = {
          getConfig: function getConfig(b, c) {
            c(a.j.tb(b) ? h[b] : null);
          },
          loadComponent: function loadComponent(a, c, d) {
            var e = g(a);
            f(e, c, function (c) {
              b(a, e, c, d);
            });
          },
          loadTemplate: function loadTemplate(b, c, f) {
            b = g(b);
            if ("string" === typeof c) f(a.a.ua(c));else if (c instanceof Array) f(c);else if (e(c)) f(a.a.la(c.childNodes));else if (c.element) {
              if (c = c.element, A.HTMLElement ? c instanceof HTMLElement : c && c.tagName && 1 === c.nodeType) f(d(c));else if ("string" === typeof c) {
                var h = w.getElementById(c);
                h ? f(d(h)) : b("Cannot find element with ID " + c);
              } else b("Unknown element type: " + c);
            } else b("Unknown template value: " + c);
          },
          loadViewModel: function loadViewModel(a, b, d) {
            c(g(a), b, d);
          }
        };
        var m = "createViewModel";
        a.b("components.register", a.j.register);
        a.b("components.isRegistered", a.j.tb);
        a.b("components.unregister", a.j.unregister);
        a.b("components.defaultLoader", a.j.Fc);
        a.j.loaders.push(a.j.Fc);
        a.j.dd = h;
      })();

      (function () {
        function b(b, e) {
          var f = b.getAttribute("params");

          if (f) {
            var f = c.parseBindingsString(f, e, b, {
              valueAccessors: !0,
              bindingParams: !0
            }),
                f = a.a.Ga(f, function (c) {
              return a.o(c, null, {
                l: b
              });
            }),
                g = a.a.Ga(f, function (c) {
              var e = c.v();
              return c.ja() ? a.o({
                read: function read() {
                  return a.a.f(c());
                },
                write: a.Za(e) && function (a) {
                  c()(a);
                },
                l: b
              }) : e;
            });
            Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);
            return g;
          }

          return {
            $raw: {}
          };
        }

        a.j.getComponentNameForNode = function (b) {
          var c = a.a.R(b);
          if (a.j.tb(c) && (-1 != c.indexOf("-") || "[object HTMLUnknownElement]" == "" + b || 8 >= a.a.W && b.tagName === c)) return c;
        };

        a.j.tc = function (c, e, f, g) {
          if (1 === e.nodeType) {
            var h = a.j.getComponentNameForNode(e);

            if (h) {
              c = c || {};
              if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
              var m = {
                name: h,
                params: b(e, f)
              };
              c.component = g ? function () {
                return m;
              } : m;
            }
          }

          return c;
        };

        var c = new a.ga();
        9 > a.a.W && (a.j.register = function (a) {
          return function (b) {
            return a.apply(this, arguments);
          };
        }(a.j.register), w.createDocumentFragment = function (b) {
          return function () {
            var c = b(),
                f = a.j.dd,
                g;

            for (g in f) {
              ;
            }

            return c;
          };
        }(w.createDocumentFragment));
      })();

      (function () {
        function b(b, c, d) {
          c = c.template;
          if (!c) throw Error("Component '" + b + "' has no template");
          b = a.a.Ca(c);
          a.h.va(d, b);
        }

        function c(a, b, c) {
          var d = a.createViewModel;
          return d ? d.call(a, b, c) : b;
        }

        var d = 0;
        a.c.component = {
          init: function init(e, f, g, h, m) {
            function k() {
              var a = l && l.dispose;
              "function" === typeof a && a.call(l);
              q && q.s();
              p = l = q = null;
            }

            var l,
                p,
                q,
                t = a.a.la(a.h.childNodes(e));
            a.h.Ea(e);
            a.a.K.za(e, k);
            a.o(function () {
              var g = a.a.f(f()),
                  h,
                  u;
              "string" === typeof g ? h = g : (h = a.a.f(g.name), u = a.a.f(g.params));
              if (!h) throw Error("No component name specified");
              var n = a.i.Cb(e, m),
                  z = p = ++d;
              a.j.get(h, function (d) {
                if (p === z) {
                  k();
                  if (!d) throw Error("Unknown component '" + h + "'");
                  b(h, d, e);
                  var f = c(d, u, {
                    element: e,
                    templateNodes: t
                  });
                  d = n.createChildContext(f, {
                    extend: function extend(a) {
                      a.$component = f;
                      a.$componentTemplateNodes = t;
                    }
                  });
                  f && f.koDescendantsComplete && (q = a.i.subscribe(e, a.i.pa, f.koDescendantsComplete, f));
                  l = f;
                  a.Oa(d, e);
                }
              });
            }, null, {
              l: e
            });
            return {
              controlsDescendantBindings: !0
            };
          }
        };
        a.h.ea.component = !0;
      })();

      var V = {
        "class": "className",
        "for": "htmlFor"
      };
      a.c.attr = {
        update: function update(b, c) {
          var d = a.a.f(c()) || {};
          a.a.P(d, function (c, d) {
            d = a.a.f(d);
            var g = c.indexOf(":"),
                g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c.substr(0, g)),
                h = !1 === d || null === d || d === n;
            h ? g ? b.removeAttributeNS(g, c) : b.removeAttribute(c) : d = d.toString();
            8 >= a.a.W && c in V ? (c = V[c], h ? b.removeAttribute(c) : b[c] = d) : h || (g ? b.setAttributeNS(g, c, d) : b.setAttribute(c, d));
            "name" === c && a.a.Yc(b, h ? "" : d);
          });
        }
      };

      (function () {
        a.c.checked = {
          after: ["value", "attr"],
          init: function init(b, c, d) {
            function e() {
              var e = b.checked,
                  f = g();

              if (!a.S.Ya() && (e || !m && !a.S.qa())) {
                var k = a.u.G(c);

                if (l) {
                  var q = p ? k.v() : k,
                      z = t;
                  t = f;
                  z !== f ? e && (a.a.Na(q, f, !0), a.a.Na(q, z, !1)) : a.a.Na(q, f, e);
                  p && a.Za(k) && k(q);
                } else h && (f === n ? f = e : e || (f = n)), a.m.eb(k, d, "checked", f, !0);
              }
            }

            function f() {
              var d = a.a.f(c()),
                  e = g();
              l ? (b.checked = 0 <= a.a.A(d, e), t = e) : b.checked = h && e === n ? !!d : g() === d;
            }

            var g = a.xb(function () {
              if (d.has("checkedValue")) return a.a.f(d.get("checkedValue"));
              if (q) return d.has("value") ? a.a.f(d.get("value")) : b.value;
            }),
                h = "checkbox" == b.type,
                m = "radio" == b.type;

            if (h || m) {
              var k = c(),
                  l = h && a.a.f(k) instanceof Array,
                  p = !(l && k.push && k.splice),
                  q = m || l,
                  t = l ? g() : n;
              m && !b.name && a.c.uniqueName.init(b, function () {
                return !0;
              });
              a.o(e, null, {
                l: b
              });
              a.a.B(b, "click", e);
              a.o(f, null, {
                l: b
              });
              k = n;
            }
          }
        };
        a.m.wa.checked = !0;
        a.c.checkedValue = {
          update: function update(b, c) {
            b.value = a.a.f(c());
          }
        };
      })();

      a.c["class"] = {
        update: function update(b, c) {
          var d = a.a.Db(a.a.f(c()));
          a.a.Eb(b, b.__ko__cssValue, !1);
          b.__ko__cssValue = d;
          a.a.Eb(b, d, !0);
        }
      };
      a.c.css = {
        update: function update(b, c) {
          var d = a.a.f(c());
          null !== d && "object" == _typeof(d) ? a.a.P(d, function (c, d) {
            d = a.a.f(d);
            a.a.Eb(b, c, d);
          }) : a.c["class"].update(b, c);
        }
      };
      a.c.enable = {
        update: function update(b, c) {
          var d = a.a.f(c());
          d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = !0);
        }
      };
      a.c.disable = {
        update: function update(b, c) {
          a.c.enable.update(b, function () {
            return !a.a.f(c());
          });
        }
      };
      a.c.event = {
        init: function init(b, c, d, e, f) {
          var g = c() || {};
          a.a.P(g, function (g) {
            "string" == typeof g && a.a.B(b, g, function (b) {
              var k,
                  l = c()[g];

              if (l) {
                try {
                  var p = a.a.la(arguments);
                  e = f.$data;
                  p.unshift(e);
                  k = l.apply(e, p);
                } finally {
                  !0 !== k && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
                }

                !1 === d.get(g + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
              }
            });
          });
        }
      };
      a.c.foreach = {
        Rc: function Rc(b) {
          return function () {
            var c = b(),
                d = a.a.bc(c);
            if (!d || "number" == typeof d.length) return {
              foreach: c,
              templateEngine: a.ba.Ma
            };
            a.a.f(c);
            return {
              foreach: d.data,
              as: d.as,
              noChildContext: d.noChildContext,
              includeDestroyed: d.includeDestroyed,
              afterAdd: d.afterAdd,
              beforeRemove: d.beforeRemove,
              afterRender: d.afterRender,
              beforeMove: d.beforeMove,
              afterMove: d.afterMove,
              templateEngine: a.ba.Ma
            };
          };
        },
        init: function init(b, c) {
          return a.c.template.init(b, a.c.foreach.Rc(c));
        },
        update: function update(b, c, d, e, f) {
          return a.c.template.update(b, a.c.foreach.Rc(c), d, e, f);
        }
      };
      a.m.Ra.foreach = !1;
      a.h.ea.foreach = !0;
      a.c.hasfocus = {
        init: function init(b, c, d) {
          function e(e) {
            b.__ko_hasfocusUpdating = !0;
            var f = b.ownerDocument;

            if ("activeElement" in f) {
              var g;

              try {
                g = f.activeElement;
              } catch (l) {
                g = f.body;
              }

              e = g === b;
            }

            f = c();
            a.m.eb(f, d, "hasfocus", e, !0);
            b.__ko_hasfocusLastValue = e;
            b.__ko_hasfocusUpdating = !1;
          }

          var f = e.bind(null, !0),
              g = e.bind(null, !1);
          a.a.B(b, "focus", f);
          a.a.B(b, "focusin", f);
          a.a.B(b, "blur", g);
          a.a.B(b, "focusout", g);
          b.__ko_hasfocusLastValue = !1;
        },
        update: function update(b, c) {
          var d = !!a.a.f(c());
          b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.G(a.a.Fb, null, [b, d ? "focusin" : "focusout"]));
        }
      };
      a.m.wa.hasfocus = !0;
      a.c.hasFocus = a.c.hasfocus;
      a.m.wa.hasFocus = "hasfocus";
      a.c.html = {
        init: function init() {
          return {
            controlsDescendantBindings: !0
          };
        },
        update: function update(b, c) {
          a.a.fc(b, c());
        }
      };

      (function () {
        function b(b, d, e) {
          a.c[b] = {
            init: function init(b, c, h, m, k) {
              var l,
                  p,
                  q = {},
                  t,
                  x,
                  n;

              if (d) {
                m = h.get("as");
                var u = h.get("noChildContext");
                n = !(m && u);
                q = {
                  as: m,
                  noChildContext: u,
                  exportDependencies: n
                };
              }

              x = (t = "render" == h.get("completeOn")) || h.has(a.i.pa);
              a.o(function () {
                var h = a.a.f(c()),
                    m = !e !== !h,
                    u = !p,
                    r;

                if (n || m !== l) {
                  x && (k = a.i.Cb(b, k));

                  if (m) {
                    if (!d || n) q.dataDependency = a.S.o();
                    r = d ? k.createChildContext("function" == typeof h ? h : c, q) : a.S.qa() ? k.extend(null, q) : k;
                  }

                  u && a.S.qa() && (p = a.a.Ca(a.h.childNodes(b), !0));
                  m ? (u || a.h.va(b, a.a.Ca(p)), a.Oa(r, b)) : (a.h.Ea(b), t || a.i.ma(b, a.i.H));
                  l = m;
                }
              }, null, {
                l: b
              });
              return {
                controlsDescendantBindings: !0
              };
            }
          };
          a.m.Ra[b] = !1;
          a.h.ea[b] = !0;
        }

        b("if");
        b("ifnot", !1, !0);
        b("with", !0);
      })();

      a.c["let"] = {
        init: function init(b, c, d, e, f) {
          c = f.extend(c);
          a.Oa(c, b);
          return {
            controlsDescendantBindings: !0
          };
        }
      };
      a.h.ea["let"] = !0;
      var Q = {};
      a.c.options = {
        init: function init(b) {
          if ("select" !== a.a.R(b)) throw Error("options binding applies only to SELECT elements");

          for (; 0 < b.length;) {
            b.remove(0);
          }

          return {
            controlsDescendantBindings: !0
          };
        },
        update: function update(b, c, d) {
          function e() {
            return a.a.jb(b.options, function (a) {
              return a.selected;
            });
          }

          function f(a, b, c) {
            var d = _typeof(b);

            return "function" == d ? b(a) : "string" == d ? a[b] : c;
          }

          function g(c, d) {
            if (x && l) a.i.ma(b, a.i.H);else if (t.length) {
              var e = 0 <= a.a.A(t, a.w.M(d[0]));
              a.a.Zc(d[0], e);
              x && !e && a.u.G(a.a.Fb, null, [b, "change"]);
            }
          }

          var h = b.multiple,
              m = 0 != b.length && h ? b.scrollTop : null,
              k = a.a.f(c()),
              l = d.get("valueAllowUnset") && d.has("value"),
              p = d.get("optionsIncludeDestroyed");
          c = {};
          var q,
              t = [];
          l || (h ? t = a.a.Mb(e(), a.w.M) : 0 <= b.selectedIndex && t.push(a.w.M(b.options[b.selectedIndex])));
          k && ("undefined" == typeof k.length && (k = [k]), q = a.a.jb(k, function (b) {
            return p || b === n || null === b || !a.a.f(b._destroy);
          }), d.has("optionsCaption") && (k = a.a.f(d.get("optionsCaption")), null !== k && k !== n && q.unshift(Q)));
          var x = !1;

          c.beforeRemove = function (a) {
            b.removeChild(a);
          };

          k = g;
          d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k = function k(b, c) {
            g(0, c);
            a.u.G(d.get("optionsAfterRender"), null, [c[0], b !== Q ? b : n]);
          });
          a.a.ec(b, q, function (c, e, g) {
            g.length && (t = !l && g[0].selected ? [a.w.M(g[0])] : [], x = !0);
            e = b.ownerDocument.createElement("option");
            c === Q ? (a.a.Bb(e, d.get("optionsCaption")), a.w.cb(e, n)) : (g = f(c, d.get("optionsValue"), c), a.w.cb(e, a.a.f(g)), c = f(c, d.get("optionsText"), g), a.a.Bb(e, c));
            return [e];
          }, c, k);

          if (!l) {
            var B;
            h ? B = t.length && e().length < t.length : B = t.length && 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) !== t[0] : t.length || 0 <= b.selectedIndex;
            B && a.u.G(a.a.Fb, null, [b, "change"]);
          }

          (l || a.S.Ya()) && a.i.ma(b, a.i.H);
          a.a.wd(b);
          m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m);
        }
      };
      a.c.options.$b = a.a.g.Z();
      a.c.selectedOptions = {
        init: function init(b, c, d) {
          function e() {
            var e = c(),
                f = [];
            a.a.D(b.getElementsByTagName("option"), function (b) {
              b.selected && f.push(a.w.M(b));
            });
            a.m.eb(e, d, "selectedOptions", f);
          }

          function f() {
            var d = a.a.f(c()),
                e = b.scrollTop;
            d && "number" == typeof d.length && a.a.D(b.getElementsByTagName("option"), function (b) {
              var c = 0 <= a.a.A(d, a.w.M(b));
              b.selected != c && a.a.Zc(b, c);
            });
            b.scrollTop = e;
          }

          if ("select" != a.a.R(b)) throw Error("selectedOptions binding applies only to SELECT elements");
          var g;
          a.i.subscribe(b, a.i.H, function () {
            g ? e() : (a.a.B(b, "change", e), g = a.o(f, null, {
              l: b
            }));
          }, null, {
            notifyImmediately: !0
          });
        },
        update: function update() {}
      };
      a.m.wa.selectedOptions = !0;
      a.c.style = {
        update: function update(b, c) {
          var d = a.a.f(c() || {});
          a.a.P(d, function (c, d) {
            d = a.a.f(d);
            if (null === d || d === n || !1 === d) d = "";
            if (v) v(b).css(c, d);else if (/^--/.test(c)) b.style.setProperty(c, d);else {
              c = c.replace(/-(\w)/g, function (a, b) {
                return b.toUpperCase();
              });
              var g = b.style[c];
              b.style[c] = d;
              d === g || b.style[c] != g || isNaN(d) || (b.style[c] = d + "px");
            }
          });
        }
      };
      a.c.submit = {
        init: function init(b, c, d, e, f) {
          if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
          a.a.B(b, "submit", function (a) {
            var d,
                e = c();

            try {
              d = e.call(f.$data, b);
            } finally {
              !0 !== d && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
            }
          });
        }
      };
      a.c.text = {
        init: function init() {
          return {
            controlsDescendantBindings: !0
          };
        },
        update: function update(b, c) {
          a.a.Bb(b, c());
        }
      };
      a.h.ea.text = !0;

      (function () {
        if (A && A.navigator) {
          var b = function b(a) {
            if (a) return parseFloat(a[1]);
          },
              c = A.navigator.userAgent,
              d,
              e,
              f,
              g,
              h;

          (d = A.opera && A.opera.version && parseInt(A.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.W || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)));
        }

        if (8 <= g && 10 > g) var m = a.a.g.Z(),
            k = a.a.g.Z(),
            l = function l(b) {
          var c = this.activeElement;
          (c = c && a.a.g.get(c, k)) && c(b);
        },
            p = function p(b, c) {
          var d = b.ownerDocument;
          a.a.g.get(d, m) || (a.a.g.set(d, m, !0), a.a.B(d, "selectionchange", l));
          a.a.g.set(b, k, c);
        };
        a.c.textInput = {
          init: function init(b, c, k) {
            function l(c, d) {
              a.a.B(b, c, d);
            }

            function m() {
              var d = a.a.f(c());
              if (null === d || d === n) d = "";
              L !== n && d === L ? a.a.setTimeout(m, 4) : b.value !== d && (y = !0, b.value = d, y = !1, v = b.value);
            }

            function r() {
              w || (L = b.value, w = a.a.setTimeout(z, 4));
            }

            function z() {
              clearTimeout(w);
              L = w = n;
              var d = b.value;
              v !== d && (v = d, a.m.eb(c(), k, "textInput", d));
            }

            var v = b.value,
                w,
                L,
                A = 9 == a.a.W ? r : z,
                y = !1;
            g && l("keypress", z);
            11 > g && l("propertychange", function (a) {
              y || "value" !== a.propertyName || A(a);
            });
            8 == g && (l("keyup", z), l("keydown", z));
            p && (p(b, A), l("dragend", r));
            (!g || 9 <= g) && l("input", A);
            5 > e && "textarea" === a.a.R(b) ? (l("keydown", r), l("paste", r), l("cut", r)) : 11 > d ? l("keydown", r) : 4 > f ? (l("DOMAutoComplete", z), l("dragdrop", z), l("drop", z)) : h && "number" === b.type && l("keydown", r);
            l("change", z);
            l("blur", z);
            a.o(m, null, {
              l: b
            });
          }
        };
        a.m.wa.textInput = !0;
        a.c.textinput = {
          preprocess: function preprocess(a, b, c) {
            c("textInput", a);
          }
        };
      })();

      a.c.uniqueName = {
        init: function init(b, c) {
          if (c()) {
            var d = "ko_unique_" + ++a.c.uniqueName.rd;
            a.a.Yc(b, d);
          }
        }
      };
      a.c.uniqueName.rd = 0;
      a.c.using = {
        init: function init(b, c, d, e, f) {
          var g;
          d.has("as") && (g = {
            as: d.get("as"),
            noChildContext: d.get("noChildContext")
          });
          c = f.createChildContext(c, g);
          a.Oa(c, b);
          return {
            controlsDescendantBindings: !0
          };
        }
      };
      a.h.ea.using = !0;
      a.c.value = {
        init: function init(b, c, d) {
          var e = a.a.R(b),
              f = "input" == e;

          if (!f || "checkbox" != b.type && "radio" != b.type) {
            var g = [],
                h = d.get("valueUpdate"),
                m = !1,
                k = null;
            h && ("string" == typeof h ? g = [h] : g = a.a.wc(h), a.a.Pa(g, "change"));

            var l = function l() {
              k = null;
              m = !1;
              var e = c(),
                  f = a.w.M(b);
              a.m.eb(e, d, "value", f);
            };

            !a.a.W || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.A(g, "propertychange") || (a.a.B(b, "propertychange", function () {
              m = !0;
            }), a.a.B(b, "focus", function () {
              m = !1;
            }), a.a.B(b, "blur", function () {
              m && l();
            }));
            a.a.D(g, function (c) {
              var d = l;
              a.a.Ud(c, "after") && (d = function d() {
                k = a.w.M(b);
                a.a.setTimeout(l, 0);
              }, c = c.substring(5));
              a.a.B(b, c, d);
            });
            var p;
            p = f && "file" == b.type ? function () {
              var d = a.a.f(c());
              null === d || d === n || "" === d ? b.value = "" : a.u.G(l);
            } : function () {
              var f = a.a.f(c()),
                  g = a.w.M(b);
              if (null !== k && f === k) a.a.setTimeout(p, 0);else if (f !== g || g === n) "select" === e ? (g = d.get("valueAllowUnset"), a.w.cb(b, f, g), g || f === a.w.M(b) || a.u.G(l)) : a.w.cb(b, f);
            };

            if ("select" === e) {
              var q;
              a.i.subscribe(b, a.i.H, function () {
                q ? d.get("valueAllowUnset") ? p() : l() : (a.a.B(b, "change", l), q = a.o(p, null, {
                  l: b
                }));
              }, null, {
                notifyImmediately: !0
              });
            } else a.a.B(b, "change", l), a.o(p, null, {
              l: b
            });
          } else a.ib(b, {
            checkedValue: c
          });
        },
        update: function update() {}
      };
      a.m.wa.value = !0;
      a.c.visible = {
        update: function update(b, c) {
          var d = a.a.f(c()),
              e = "none" != b.style.display;
          d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
        }
      };
      a.c.hidden = {
        update: function update(b, c) {
          a.c.visible.update(b, function () {
            return !a.a.f(c());
          });
        }
      };

      (function (b) {
        a.c[b] = {
          init: function init(c, d, e, f, g) {
            return a.c.event.init.call(this, c, function () {
              var a = {};
              a[b] = d();
              return a;
            }, e, f, g);
          }
        };
      })("click");

      a.ca = function () {};

      a.ca.prototype.renderTemplateSource = function () {
        throw Error("Override renderTemplateSource");
      };

      a.ca.prototype.createJavaScriptEvaluatorBlock = function () {
        throw Error("Override createJavaScriptEvaluatorBlock");
      };

      a.ca.prototype.makeTemplateSource = function (b, c) {
        if ("string" == typeof b) {
          c = c || w;
          var d = c.getElementById(b);
          if (!d) throw Error("Cannot find template with ID " + b);
          return new a.C.F(d);
        }

        if (1 == b.nodeType || 8 == b.nodeType) return new a.C.ia(b);
        throw Error("Unknown template type: " + b);
      };

      a.ca.prototype.renderTemplate = function (a, c, d, e) {
        a = this.makeTemplateSource(a, e);
        return this.renderTemplateSource(a, c, d, e);
      };

      a.ca.prototype.isTemplateRewritten = function (a, c) {
        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, c).data("isRewritten");
      };

      a.ca.prototype.rewriteTemplate = function (a, c, d) {
        a = this.makeTemplateSource(a, d);
        c = c(a.text());
        a.text(c);
        a.data("isRewritten", !0);
      };

      a.b("templateEngine", a.ca);

      a.kc = function () {
        function b(b, c, d, h) {
          b = a.m.ac(b);

          for (var m = a.m.Ra, k = 0; k < b.length; k++) {
            var l = b[k].key;

            if (Object.prototype.hasOwnProperty.call(m, l)) {
              var p = m[l];

              if ("function" === typeof p) {
                if (l = p(b[k].value)) throw Error(l);
              } else if (!p) throw Error("This template engine does not support the '" + l + "' binding within its templates");
            }
          }

          d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.vb(b, {
            valueAccessors: !0
          }) + " } })()},'" + d.toLowerCase() + "')";
          return h.createJavaScriptEvaluatorBlock(d) + c;
        }

        var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
            d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
        return {
          xd: function xd(b, c, d) {
            c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
              return a.kc.Ld(b, c);
            }, d);
          },
          Ld: function Ld(a, f) {
            return a.replace(c, function (a, c, d, e, l) {
              return b(l, c, d, f);
            }).replace(d, function (a, c) {
              return b(c, "\x3c!-- ko --\x3e", "#comment", f);
            });
          },
          md: function md(b, c) {
            return a.aa.Xb(function (d, h) {
              var m = d.nextSibling;
              m && m.nodeName.toLowerCase() === c && a.ib(m, b, h);
            });
          }
        };
      }();

      a.b("__tr_ambtns", a.kc.md);

      (function () {
        a.C = {};

        a.C.F = function (b) {
          if (this.F = b) {
            var c = a.a.R(b);
            this.ab = "script" === c ? 1 : "textarea" === c ? 2 : "template" == c && b.content && 11 === b.content.nodeType ? 3 : 4;
          }
        };

        a.C.F.prototype.text = function () {
          var b = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
          if (0 == arguments.length) return this.F[b];
          var c = arguments[0];
          "innerHTML" === b ? a.a.fc(this.F, c) : this.F[b] = c;
        };

        var b = a.a.g.Z() + "_";

        a.C.F.prototype.data = function (c) {
          if (1 === arguments.length) return a.a.g.get(this.F, b + c);
          a.a.g.set(this.F, b + c, arguments[1]);
        };

        var c = a.a.g.Z();

        a.C.F.prototype.nodes = function () {
          var b = this.F;

          if (0 == arguments.length) {
            var e = a.a.g.get(b, c) || {},
                f = e.lb || (3 === this.ab ? b.content : 4 === this.ab ? b : n);

            if (!f || e.jd) {
              var g = this.text();
              g && g !== e.bb && (f = a.a.Md(g, b.ownerDocument), a.a.g.set(b, c, {
                lb: f,
                bb: g,
                jd: !0
              }));
            }

            return f;
          }

          e = arguments[0];
          this.ab !== n && this.text("");
          a.a.g.set(b, c, {
            lb: e
          });
        };

        a.C.ia = function (a) {
          this.F = a;
        };

        a.C.ia.prototype = new a.C.F();
        a.C.ia.prototype.constructor = a.C.ia;

        a.C.ia.prototype.text = function () {
          if (0 == arguments.length) {
            var b = a.a.g.get(this.F, c) || {};
            b.bb === n && b.lb && (b.bb = b.lb.innerHTML);
            return b.bb;
          }

          a.a.g.set(this.F, c, {
            bb: arguments[0]
          });
        };

        a.b("templateSources", a.C);
        a.b("templateSources.domElement", a.C.F);
        a.b("templateSources.anonymousTemplate", a.C.ia);
      })();

      (function () {
        function b(b, c, d) {
          var e;

          for (c = a.h.nextSibling(c); b && (e = b) !== c;) {
            b = a.h.nextSibling(e), d(e, b);
          }
        }

        function c(c, d) {
          if (c.length) {
            var e = c[0],
                f = c[c.length - 1],
                g = e.parentNode,
                h = a.ga.instance,
                m = h.preprocessNode;

            if (m) {
              b(e, f, function (a, b) {
                var c = a.previousSibling,
                    d = m.call(h, a);
                d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c));
              });
              c.length = 0;
              if (!e) return;
              e === f ? c.push(e) : (c.push(e, f), a.a.Ua(c, g));
            }

            b(e, f, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.vc(d, b);
            });
            b(e, f, function (b) {
              1 !== b.nodeType && 8 !== b.nodeType || a.aa.cd(b, [d]);
            });
            a.a.Ua(c, g);
          }
        }

        function d(a) {
          return a.nodeType ? a : 0 < a.length ? a[0] : null;
        }

        function e(b, e, f, h, m) {
          m = m || {};
          var n = (b && d(b) || f || {}).ownerDocument,
              B = m.templateEngine || g;
          a.kc.xd(f, B, n);
          f = B.renderTemplate(f, h, m, n);
          if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
          n = !1;

          switch (e) {
            case "replaceChildren":
              a.h.va(b, f);
              n = !0;
              break;

            case "replaceNode":
              a.a.Xc(b, f);
              n = !0;
              break;

            case "ignoreTargetNode":
              break;

            default:
              throw Error("Unknown renderMode: " + e);
          }

          n && (c(f, h), m.afterRender && a.u.G(m.afterRender, null, [f, h[m.as || "$data"]]), "replaceChildren" == e && a.i.ma(b, a.i.H));
          return f;
        }

        function f(b, c, d) {
          return a.O(b) ? b() : "function" === typeof b ? b(c, d) : b;
        }

        var g;

        a.gc = function (b) {
          if (b != n && !(b instanceof a.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
          g = b;
        };

        a.dc = function (b, c, h, m, t) {
          h = h || {};
          if ((h.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate");
          t = t || "replaceChildren";

          if (m) {
            var x = d(m);
            return a.$(function () {
              var g = c && c instanceof a.fa ? c : new a.fa(c, null, null, null, {
                exportDependencies: !0
              }),
                  n = f(b, g.$data, g),
                  g = e(m, t, n, g, h);
              "replaceNode" == t && (m = g, x = d(m));
            }, null, {
              Sa: function Sa() {
                return !x || !a.a.Sb(x);
              },
              l: x && "replaceNode" == t ? x.parentNode : x
            });
          }

          return a.aa.Xb(function (d) {
            a.dc(b, c, h, d, "replaceNode");
          });
        };

        a.Qd = function (b, d, g, h, m) {
          function x(b, c) {
            a.u.G(a.a.ec, null, [h, b, u, g, r, c]);
            a.i.ma(h, a.i.H);
          }

          function r(a, b) {
            c(b, v);
            g.afterRender && g.afterRender(b, a);
            v = null;
          }

          function u(a, c) {
            v = m.createChildContext(a, {
              as: z,
              noChildContext: g.noChildContext,
              extend: function extend(a) {
                a.$index = c;
                z && (a[z + "Index"] = c);
              }
            });
            var d = f(b, a, v);
            return e(h, "ignoreTargetNode", d, v, g);
          }

          var v,
              z = g.as,
              w = !1 === g.includeDestroyed || a.options.foreachHidesDestroyed && !g.includeDestroyed;
          if (w || g.beforeRemove || !a.Pc(d)) return a.$(function () {
            var b = a.a.f(d) || [];
            "undefined" == typeof b.length && (b = [b]);
            w && (b = a.a.jb(b, function (b) {
              return b === n || null === b || !a.a.f(b._destroy);
            }));
            x(b);
          }, null, {
            l: h
          });
          x(d.v());
          var A = d.subscribe(function (a) {
            x(d(), a);
          }, null, "arrayChange");
          A.l(h);
          return A;
        };

        var h = a.a.g.Z(),
            m = a.a.g.Z();
        a.c.template = {
          init: function init(b, c) {
            var d = a.a.f(c());
            if ("string" == typeof d || "name" in d) a.h.Ea(b);else if ("nodes" in d) {
              d = d.nodes || [];
              if (a.O(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
              var e = d[0] && d[0].parentNode;
              e && a.a.g.get(e, m) || (e = a.a.Yb(d), a.a.g.set(e, m, !0));
              new a.C.ia(b).nodes(e);
            } else if (d = a.h.childNodes(b), 0 < d.length) e = a.a.Yb(d), new a.C.ia(b).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");
            return {
              controlsDescendantBindings: !0
            };
          },
          update: function update(b, c, d, e, f) {
            var g = c();
            c = a.a.f(g);
            d = !0;
            e = null;
            "string" == typeof c ? c = {} : (g = "name" in c ? c.name : b, "if" in c && (d = a.a.f(c["if"])), d && "ifnot" in c && (d = !a.a.f(c.ifnot)), d && !g && (d = !1));
            "foreach" in c ? e = a.Qd(g, d && c.foreach || [], c, b, f) : d ? (d = f, "data" in c && (d = f.createChildContext(c.data, {
              as: c.as,
              noChildContext: c.noChildContext,
              exportDependencies: !0
            })), e = a.dc(g, d, c, b)) : a.h.Ea(b);
            f = e;
            (c = a.a.g.get(b, h)) && "function" == typeof c.s && c.s();
            a.a.g.set(b, h, !f || f.ja && !f.ja() ? n : f);
          }
        };

        a.m.Ra.template = function (b) {
          b = a.m.ac(b);
          return 1 == b.length && b[0].unknown || a.m.Id(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
        };

        a.h.ea.template = !0;
      })();

      a.b("setTemplateEngine", a.gc);
      a.b("renderTemplate", a.dc);

      a.a.Kc = function (a, c, d) {
        if (a.length && c.length) {
          var e, f, g, h, m;

          for (e = f = 0; (!d || e < d) && (h = a[f]); ++f) {
            for (g = 0; m = c[g]; ++g) {
              if (h.value === m.value) {
                h.moved = m.index;
                m.moved = h.index;
                c.splice(g, 1);
                e = g = 0;
                break;
              }
            }

            e += g;
          }
        }
      };

      a.a.Pb = function () {
        function b(b, d, e, f, g) {
          var h = Math.min,
              m = Math.max,
              k = [],
              l,
              p = b.length,
              q,
              n = d.length,
              r = n - p || 1,
              v = p + n + 1,
              u,
              w,
              z;

          for (l = 0; l <= p; l++) {
            for (w = u, k.push(u = []), z = h(n, l + r), q = m(0, l - 1); q <= z; q++) {
              u[q] = q ? l ? b[l - 1] === d[q - 1] ? w[q - 1] : h(w[q] || v, u[q - 1] || v) + 1 : q + 1 : l + 1;
            }
          }

          h = [];
          m = [];
          r = [];
          l = p;

          for (q = n; l || q;) {
            n = k[l][q] - 1, q && n === k[l][q - 1] ? m.push(h[h.length] = {
              status: e,
              value: d[--q],
              index: q
            }) : l && n === k[l - 1][q] ? r.push(h[h.length] = {
              status: f,
              value: b[--l],
              index: l
            }) : (--q, --l, g.sparse || h.push({
              status: "retained",
              value: d[q]
            }));
          }

          a.a.Kc(r, m, !g.dontLimitMoves && 10 * p);
          return h.reverse();
        }

        return function (a, d, e) {
          e = "boolean" === typeof e ? {
            dontLimitMoves: e
          } : e || {};
          a = a || [];
          d = d || [];
          return a.length < d.length ? b(a, d, "added", "deleted", e) : b(d, a, "deleted", "added", e);
        };
      }();

      a.b("utils.compareArrays", a.a.Pb);

      (function () {
        function b(b, c, d, h, m) {
          var k = [],
              l = a.$(function () {
            var l = c(d, m, a.a.Ua(k, b)) || [];
            0 < k.length && (a.a.Xc(k, l), h && a.u.G(h, null, [d, l, m]));
            k.length = 0;
            a.a.Nb(k, l);
          }, null, {
            l: b,
            Sa: function Sa() {
              return !a.a.kd(k);
            }
          });
          return {
            Y: k,
            $: l.ja() ? l : n
          };
        }

        var c = a.a.g.Z(),
            d = a.a.g.Z();

        a.a.ec = function (e, f, g, h, m, k) {
          function l(b) {
            y = {
              Aa: b,
              pb: a.ta(w++)
            };
            v.push(y);
            r || F.push(y);
          }

          function p(b) {
            y = t[b];
            w !== y.pb.v() && D.push(y);
            y.pb(w++);
            a.a.Ua(y.Y, e);
            v.push(y);
          }

          function q(b, c) {
            if (b) for (var d = 0, e = c.length; d < e; d++) {
              a.a.D(c[d].Y, function (a) {
                b(a, d, c[d].Aa);
              });
            }
          }

          f = f || [];
          "undefined" == typeof f.length && (f = [f]);
          h = h || {};
          var t = a.a.g.get(e, c),
              r = !t,
              v = [],
              u = 0,
              w = 0,
              z = [],
              A = [],
              C = [],
              D = [],
              F = [],
              y,
              I = 0;
          if (r) a.a.D(f, l);else {
            if (!k || t && t._countWaitingForRemove) {
              var E = a.a.Mb(t, function (a) {
                return a.Aa;
              });
              k = a.a.Pb(E, f, {
                dontLimitMoves: h.dontLimitMoves,
                sparse: !0
              });
            }

            for (var E = 0, G, H, K; G = k[E]; E++) {
              switch (H = G.moved, K = G.index, G.status) {
                case "deleted":
                  for (; u < K;) {
                    p(u++);
                  }

                  H === n && (y = t[u], y.$ && (y.$.s(), y.$ = n), a.a.Ua(y.Y, e).length && (h.beforeRemove && (v.push(y), I++, y.Aa === d ? y = null : C.push(y)), y && z.push.apply(z, y.Y)));
                  u++;
                  break;

                case "added":
                  for (; w < K;) {
                    p(u++);
                  }

                  H !== n ? (A.push(v.length), p(H)) : l(G.value);
              }
            }

            for (; w < f.length;) {
              p(u++);
            }

            v._countWaitingForRemove = I;
          }
          a.a.g.set(e, c, v);
          q(h.beforeMove, D);
          a.a.D(z, h.beforeRemove ? a.oa : a.removeNode);
          var M, O, P;

          try {
            P = e.ownerDocument.activeElement;
          } catch (N) {}

          if (A.length) for (; (E = A.shift()) != n;) {
            y = v[E];

            for (M = n; E;) {
              if ((O = v[--E].Y) && O.length) {
                M = O[O.length - 1];
                break;
              }
            }

            for (f = 0; u = y.Y[f]; M = u, f++) {
              a.h.Wb(e, u, M);
            }
          }

          for (E = 0; y = v[E]; E++) {
            y.Y || a.a.extend(y, b(e, g, y.Aa, m, y.pb));

            for (f = 0; u = y.Y[f]; M = u, f++) {
              a.h.Wb(e, u, M);
            }

            !y.Ed && m && (m(y.Aa, y.Y, y.pb), y.Ed = !0, M = y.Y[y.Y.length - 1]);
          }

          P && e.ownerDocument.activeElement != P && P.focus();
          q(h.beforeRemove, C);

          for (E = 0; E < C.length; ++E) {
            C[E].Aa = d;
          }

          q(h.afterMove, D);
          q(h.afterAdd, F);
        };
      })();

      a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.ec);

      a.ba = function () {
        this.allowTemplateRewriting = !1;
      };

      a.ba.prototype = new a.ca();
      a.ba.prototype.constructor = a.ba;

      a.ba.prototype.renderTemplateSource = function (b, c, d, e) {
        if (c = (9 > a.a.W ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(!0).childNodes);
        b = b.text();
        return a.a.ua(b, e);
      };

      a.ba.Ma = new a.ba();
      a.gc(a.ba.Ma);
      a.b("nativeTemplateEngine", a.ba);

      (function () {
        a.$a = function () {
          var a = this.Hd = function () {
            if (!v || !v.tmpl) return 0;

            try {
              if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
            } catch (a) {}

            return 1;
          }();

          this.renderTemplateSource = function (b, e, f, g) {
            g = g || w;
            f = f || {};
            if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
            var h = b.data("precompiled");
            h || (h = b.text() || "", h = v.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));
            b = [e.$data];
            e = v.extend({
              koBindingContext: e
            }, f.templateOptions);
            e = v.tmpl(h, b, e);
            e.appendTo(g.createElement("div"));
            v.fragments = {};
            return e;
          };

          this.createJavaScriptEvaluatorBlock = function (a) {
            return "{{ko_code ((function() { return " + a + " })()) }}";
          };

          this.addTemplate = function (a, b) {
            w.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>");
          };

          0 < a && (v.tmpl.tag.ko_code = {
            open: "__.push($1 || '');"
          }, v.tmpl.tag.ko_with = {
            open: "with($1) {",
            close: "} "
          });
        };

        a.$a.prototype = new a.ca();
        a.$a.prototype.constructor = a.$a;
        var b = new a.$a();
        0 < b.Hd && a.gc(b);
        a.b("jqueryTmplTemplateEngine", a.$a);
      })();
    });
  })();
})();