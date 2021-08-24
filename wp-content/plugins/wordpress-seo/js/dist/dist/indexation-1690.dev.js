"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
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

  n.m = e, n.c = t, n.d = function (e, t, r) {
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
  }, n.p = "", n(n.s = 353);
}({
  0: function _(e, t) {
    e.exports = window.wp.element;
  },
  1: function _(e, t) {
    e.exports = window.yoast.propTypes;
  },
  11: function _(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    };
  },
  12: function _(e, t) {
    e.exports = window.yoast.styledComponents;
  },
  13: function _(e, t, n) {
    var r = n(70);

    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && r(e, t);
    };
  },
  14: function _(e, t, n) {
    var r = n(34),
        o = n(11);

    e.exports = function (e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? o(e) : t;
    };
  },
  15: function _(e, t) {
    e.exports = function (e, t) {
      return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
        raw: {
          value: Object.freeze(t)
        }
      }));
    };
  },
  202: function _(e, t, n) {
    var r = n(8),
        o = n(70),
        i = n(338),
        s = n(339);

    function a(t) {
      var n = "function" == typeof Map ? new Map() : void 0;
      return e.exports = a = function a(e) {
        if (null === e || !i(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

        if (void 0 !== n) {
          if (n.has(e)) return n.get(e);
          n.set(e, t);
        }

        function t() {
          return s(e, arguments, r(this).constructor);
        }

        return t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), o(t, e);
      }, a(t);
    }

    e.exports = a;
  },
  21: function _(e, t) {
    e.exports = window.jQuery;
  },
  24: function _(e, t) {
    e.exports = window.yoast.styleGuide;
  },
  26: function _(e, t) {
    e.exports = window.regeneratorRuntime;
  },
  3: function _(e, t) {
    e.exports = window.wp.i18n;
  },
  338: function _(e, t) {
    e.exports = function (e) {
      return -1 !== Function.toString.call(e).indexOf("[native code]");
    };
  },
  339: function _(e, t, n) {
    var r = n(70);

    function o() {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }

    function i(t, n, s) {
      return o() ? e.exports = i = Reflect.construct : e.exports = i = function i(e, t, n) {
        var o = [null];
        o.push.apply(o, t);
        var i = new (Function.bind.apply(e, o))();
        return n && r(i, n.prototype), i;
      }, i.apply(null, arguments);
    }

    e.exports = i;
  },
  34: function _(e, t) {
    function n(t) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? e.exports = n = function n(e) {
        return _typeof(e);
      } : e.exports = n = function n(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, n(t);
    }

    e.exports = n;
  },
  353: function _(e, t, n) {
    "use strict";

    n.r(t);

    var r = n(0),
        o = n(21),
        i = n.n(o),
        s = n(47),
        a = n.n(s),
        c = n(5),
        u = n.n(c),
        l = n(7),
        p = n.n(l),
        f = n(11),
        d = n.n(f),
        y = n(13),
        x = n.n(y),
        h = n(14),
        m = n.n(h),
        g = n(8),
        b = n.n(g),
        w = n(26),
        v = n.n(w),
        O = n(3),
        j = n(6),
        E = n(24),
        _ = n(1),
        S = n.n(_),
        k = n(15),
        I = n.n(k),
        P = n(202),
        R = n.n(P);

    var A,
        T,
        B = function (e) {
      x()(o, e);
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
            r = b()(t);

        if (n) {
          var o = b()(this).constructor;
          e = Reflect.construct(r, arguments, o);
        } else e = r.apply(this, arguments);

        return m()(this, e);
      });

      function o(e, t, n, i, s) {
        var a;
        return u()(this, o), (a = r.call(this, e)).name = "RequestError", a.url = t, a.method = n, a.statusCode = i, a.stackTrace = s, a;
      }

      return o;
    }(R()(Error)),
        q = n(12),
        C = n.n(q),
        D = C.a.div(A || (A = I()(["\n\tmargin-top: 8px;\n"]))),
        M = C.a.pre(T || (T = I()(["\n\toverflow-x: scroll;\n\tmax-width: 500px;\n\tborder: 1px solid;\n\tpadding: 16px;\n"])));

    function N(e) {
      var t = e.title,
          n = e.value;
      return n ? Object(r.createElement)("p", null, Object(r.createElement)("strong", null, t), Object(r.createElement)("br", null), n) : null;
    }

    function z(e) {
      var t = e.title,
          n = e.value;
      return n ? Object(r.createElement)("details", null, Object(r.createElement)("summary", null, t), Object(r.createElement)(M, null, n)) : null;
    }

    function F(e) {
      var t = e.message,
          n = e.error;
      return Object(r.createElement)(j.Alert, {
        type: "error"
      }, Object(r.createElement)("div", {
        dangerouslySetInnerHTML: {
          __html: t
        }
      }), Object(r.createElement)("details", null, Object(r.createElement)("summary", null, Object(O.__)("Error details", "wordpress-seo")), Object(r.createElement)(D, null, Object(r.createElement)(N, {
        title: Object(O.__)("Request URL", "wordpress-seo"),
        value: n.url
      }), Object(r.createElement)(N, {
        title: Object(O.__)("Request method", "wordpress-seo"),
        value: n.method
      }), Object(r.createElement)(N, {
        title: Object(O.__)("Status code", "wordpress-seo"),
        value: n.statusCode
      }), Object(r.createElement)(N, {
        title: Object(O.__)("Error message", "wordpress-seo"),
        value: n.message
      }), Object(r.createElement)(z, {
        title: Object(O.__)("Response", "wordpress-seo"),
        value: n.parseString
      }), Object(r.createElement)(z, {
        title: Object(O.__)("Error stack trace", "wordpress-seo"),
        value: n.stackTrace
      }))));
    }

    N.propTypes = {
      title: S.a.string.isRequired,
      value: S.a.any
    }, N.defaultProps = {
      value: ""
    }, z.propTypes = {
      title: S.a.string.isRequired,
      value: S.a.string
    }, z.defaultProps = {
      value: ""
    }, F.propTypes = {
      message: S.a.string.isRequired,
      error: S.a.oneOfType([S.a.instanceOf(Error), S.a.instanceOf(B)]).isRequired
    };

    var L = function (e) {
      x()(o, e);
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
            r = b()(t);

        if (n) {
          var o = b()(this).constructor;
          e = Reflect.construct(r, arguments, o);
        } else e = r.apply(this, arguments);

        return m()(this, e);
      });

      function o(e, t) {
        var n;
        return u()(this, o), (n = r.call(this, e)).name = "ParseError", n.parseString = t, n;
      }

      return o;
    }(R()(Error));

    var U = function (e) {
      x()(h, e);
      var t,
          n,
          o,
          i,
          s,
          c,
          l,
          f,
          y = (l = h, f = function () {
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
            t = b()(l);

        if (f) {
          var n = b()(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return m()(this, e);
      });

      function h(e) {
        var t;
        return u()(this, h), (t = y.call(this, e)).settings = yoastIndexingData, t.state = {
          state: "idle",
          processed: 0,
          error: null,
          amount: parseInt(t.settings.amount, 10),
          firstTime: "1" === t.settings.firstTime
        }, t.startIndexing = t.startIndexing.bind(d()(t)), t.stopIndexing = t.stopIndexing.bind(d()(t)), t;
      }

      return p()(h, [{
        key: "doIndexingRequest",
        value: (c = a()(v.a.mark(function e(t, n) {
          var r, o, i, s;
          return v.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, fetch(t, {
                    method: "POST",
                    headers: {
                      "X-WP-Nonce": n
                    }
                  });

                case 2:
                  return r = e.sent, e.next = 5, r.text();

                case 5:
                  o = e.sent, e.prev = 6, i = JSON.parse(o), e.next = 13;
                  break;

                case 10:
                  throw e.prev = 10, e.t0 = e["catch"](6), new L("Error parsing the response to JSON.", o);

                case 13:
                  if (r.ok) {
                    e.next = 16;
                    break;
                  }

                  throw s = i.data ? i.data.stackTrace : "", new B(i.message, t, "POST", r.status, s);

                case 16:
                  return e.abrupt("return", i);

                case 17:
                case "end":
                  return e.stop();
              }
            }
          }, e, null, [[6, 10]]);
        })), function (_x, e) {
          return c.apply(this, arguments);
        })
      }, {
        key: "doPreIndexingAction",
        value: (s = a()(v.a.mark(function e(t) {
          return v.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if ("function" != typeof this.props.preIndexingActions[t]) {
                    e.next = 3;
                    break;
                  }

                  return e.next = 3, this.props.preIndexingActions[t](this.settings);

                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e, this);
        })), function (e) {
          return s.apply(this, arguments);
        })
      }, {
        key: "doPostIndexingAction",
        value: (i = a()(v.a.mark(function e(t, n) {
          return v.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  if ("function" != typeof this.props.indexingActions[t]) {
                    e.next = 3;
                    break;
                  }

                  return e.next = 3, this.props.indexingActions[t](n.objects, this.settings);

                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e, this);
        })), function (e, t) {
          return i.apply(this, arguments);
        })
      }, {
        key: "doIndexing",
        value: (o = a()(v.a.mark(function e(t) {
          var n,
              r = this;
          return v.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  n = this.settings.restApi.root + this.settings.restApi.endpoints[t];

                case 1:
                  if (!this.isState("in_progress") || !1 === n) {
                    e.next = 11;
                    break;
                  }

                  return e.prev = 2, e.delegateYield(v.a.mark(function e() {
                    var o;
                    return v.a.wrap(function (e) {
                      for (;;) {
                        switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, r.doPreIndexingAction(t);

                          case 2:
                            return e.next = 4, r.doIndexingRequest(n, r.settings.restApi.nonce);

                          case 4:
                            return o = e.sent, e.next = 7, r.doPostIndexingAction(t, o);

                          case 7:
                            r.setState(function (e) {
                              return {
                                processed: e.processed + o.objects.length,
                                firstTime: !1
                              };
                            }), n = o.next_url;

                          case 9:
                          case "end":
                            return e.stop();
                        }
                      }
                    }, e);
                  })(), "t0", 4);

                case 4:
                  e.next = 9;
                  break;

                case 6:
                  e.prev = 6, e.t1 = e["catch"](2), this.setState({
                    state: "errored",
                    error: e.t1,
                    firstTime: !1
                  });

                case 9:
                  e.next = 1;
                  break;

                case 11:
                case "end":
                  return e.stop();
              }
            }
          }, e, this, [[2, 6]]);
        })), function (e) {
          return o.apply(this, arguments);
        })
      }, {
        key: "index",
        value: (n = a()(v.a.mark(function e() {
          var t, n, r;
          return v.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  t = 0, n = Object.keys(this.settings.restApi.endpoints);

                case 1:
                  if (!(t < n.length)) {
                    e.next = 8;
                    break;
                  }

                  return r = n[t], e.next = 5, this.doIndexing(r);

                case 5:
                  t++, e.next = 1;
                  break;

                case 8:
                  this.isState("errored") || this.isState("idle") || this.completeIndexing();

                case 9:
                case "end":
                  return e.stop();
              }
            }
          }, e, this);
        })), function () {
          return n.apply(this, arguments);
        })
      }, {
        key: "startIndexing",
        value: (t = a()(v.a.mark(function e() {
          return v.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  this.setState({
                    processed: 0,
                    state: "in_progress"
                  }, this.index);

                case 1:
                case "end":
                  return e.stop();
              }
            }
          }, e, this);
        })), function () {
          return t.apply(this, arguments);
        })
      }, {
        key: "completeIndexing",
        value: function value() {
          this.setState({
            state: "completed"
          });
        }
      }, {
        key: "stopIndexing",
        value: function value() {
          this.setState(function (e) {
            return {
              state: "idle",
              processed: 0,
              amount: e.amount - e.processed
            };
          });
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          var e, t;

          if (!this.settings.disabled && "true" === new URLSearchParams(window.location.search).get("start-indexation")) {
            var n = function (e, t) {
              var n = new URL(e);
              return n.searchParams["delete"]("start-indexation"), n.href;
            }(window.location.href);

            null, e = document.title, t = n, window.history.pushState(null, e, t), this.startIndexing();
          }
        }
      }, {
        key: "isState",
        value: function value(e) {
          return this.state.state === e;
        }
      }, {
        key: "renderFirstIndexationNotice",
        value: function value() {
          return Object(r.createElement)(j.Alert, {
            type: "info"
          }, Object(O.__)("This feature includes and replaces the Text Link Counter and Internal Linking Analysis", "wordpress-seo"));
        }
      }, {
        key: "renderStartButton",
        value: function value() {
          return Object(r.createElement)(j.NewButton, {
            variant: "primary",
            onClick: this.startIndexing
          }, Object(O.__)("Start SEO data optimization", "wordpress-seo"));
        }
      }, {
        key: "renderStopButton",
        value: function value() {
          return Object(r.createElement)(j.NewButton, {
            variant: "secondary",
            onClick: this.stopIndexing
          }, Object(O.__)("Stop SEO data optimization", "wordpress-seo"));
        }
      }, {
        key: "renderDisabledTool",
        value: function value() {
          return Object(r.createElement)(r.Fragment, null, Object(r.createElement)("p", null, Object(r.createElement)(j.NewButton, {
            variant: "secondary",
            disabled: !0
          }, Object(O.__)("Start SEO data optimization", "wordpress-seo"))), Object(r.createElement)(j.Alert, {
            type: "info"
          }, Object(O.__)("SEO data optimization is disabled for non-production environments.", "wordpress-seo")));
        }
      }, {
        key: "renderProgressBar",
        value: function value() {
          return Object(r.createElement)(r.Fragment, null, Object(r.createElement)(j.ProgressBar, {
            style: {
              height: "16px",
              margin: "8px 0"
            },
            progressColor: E.colors.$color_pink_dark,
            max: parseInt(this.state.amount, 10),
            value: this.state.processed
          }), Object(r.createElement)("p", {
            style: {
              color: E.colors.$palette_grey_text
            }
          }, Object(O.__)("Optimizing SEO data... This may take a while.", "wordpress-seo")));
        }
      }, {
        key: "renderErrorAlert",
        value: function value() {
          return Object(r.createElement)(F, {
            message: yoastIndexingData.errorMessage,
            error: this.state.error
          });
        }
      }, {
        key: "renderTool",
        value: function value() {
          return Object(r.createElement)(r.Fragment, null, this.isState("in_progress") && this.renderProgressBar(), this.isState("errored") && this.renderErrorAlert(), this.isState("idle") && this.state.firstTime && this.renderFirstIndexationNotice(), this.isState("in_progress") ? this.renderStopButton() : this.renderStartButton());
        }
      }, {
        key: "render",
        value: function value() {
          return this.settings.disabled ? this.renderDisabledTool() : this.isState("completed") || 0 === this.state.amount ? Object(r.createElement)(j.Alert, {
            type: "success"
          }, Object(O.__)("SEO data optimization complete", "wordpress-seo")) : this.renderTool();
        }
      }]), h;
    }(r.Component);

    U.propTypes = {
      indexingActions: S.a.object,
      preIndexingActions: S.a.object
    }, U.defaultProps = {
      indexingActions: {},
      preIndexingActions: {}
    };
    var J,
        $ = U,
        G = {},
        H = {};

    function Q() {
      J || (J = document.getElementById("yoast-seo-indexing-action")), J && Object(r.render)(Object(r.createElement)($, {
        preIndexingActions: G,
        indexingActions: H
      }), J);
    }

    window.yoast = window.yoast || {}, window.yoast.indexing = window.yoast.indexing || {}, window.yoast.indexing.registerPreIndexingAction = function (e, t) {
      G[e] = t, Q();
    }, window.yoast.indexing.registerIndexingAction = function (e, t) {
      H[e] = t, Q();
    }, window.yoast.indexation = window.yoast.indexing, window.yoast.indexation.registerPreIndexationAction = function (e, t) {
      console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerPreIndexingAction' instead."), window.yoast.indexing.registerPreIndexingAction(e, t);
    }, window.yoast.indexation.registerIndexationAction = function (e, t) {
      console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerIndexingAction' instead."), window.yoast.indexing.registerIndexingAction(e, t);
    }, i()(function () {
      Q();
    });
  },
  47: function _(e, t) {
    function n(e, t, n, r, o, i, s) {
      try {
        var a = e[i](s),
            c = a.value;
      } catch (e) {
        return void n(e);
      }

      a.done ? t(c) : Promise.resolve(c).then(r, o);
    }

    e.exports = function (e) {
      return function () {
        var t = this,
            r = arguments;
        return new Promise(function (o, i) {
          var s = e.apply(t, r);

          function a(e) {
            n(s, o, i, a, c, "next", e);
          }

          function c(e) {
            n(s, o, i, a, c, "throw", e);
          }

          a(void 0);
        });
      };
    };
  },
  5: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  },
  6: function _(e, t) {
    e.exports = window.yoast.componentsNew;
  },
  7: function _(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    e.exports = function (e, t, r) {
      return t && n(e.prototype, t), r && n(e, r), e;
    };
  },
  70: function _(e, t) {
    function n(t, r) {
      return e.exports = n = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, n(t, r);
    }

    e.exports = n;
  },
  8: function _(e, t) {
    function n(t) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, n(t);
    }

    e.exports = n;
  }
});