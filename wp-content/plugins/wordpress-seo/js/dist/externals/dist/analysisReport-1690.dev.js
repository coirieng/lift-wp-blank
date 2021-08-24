"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.analysisReport = function (t) {
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
  }, n.p = "", n(n.s = 746);
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
  121: function _(t, e) {
    t.exports = window.lodash.noop;
  },
  13: function _(t, e) {
    t.exports = window.yoast.componentsNew;
  },
  15: function _(t, e) {
    t.exports = function (t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
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
  3: function _(t, e) {
    t.exports = window.React;
  },
  37: function _(t, e) {
    function n(e, o) {
      return t.exports = n = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n(e, o);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  4: function _(t, e) {
    t.exports = window.yoast.styledComponents;
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
  6: function _(t, e) {
    t.exports = window.yoast.styleGuide;
  },
  7: function _(t, e) {
    function n(e) {
      return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, t.exports["default"] = t.exports, t.exports.__esModule = !0, n(e);
    }

    t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
  },
  746: function _(t, e, n) {
    "use strict";

    n.r(e), n.d(e, "ContentAnalysis", function () {
      return F;
    }), n.d(e, "AnalysisResult", function () {
      return R;
    }), n.d(e, "AnalysisList", function () {
      return j;
    }), n.d(e, "renderRatingToColor", function () {
      return w;
    }), n.d(e, "SiteSEOReport", function () {
      return V;
    });

    var o,
        r,
        s,
        a = n(5),
        i = n.n(a),
        u = n(1),
        l = n(10),
        c = n(3),
        p = n.n(c),
        d = n(4),
        f = n.n(d),
        m = n(0),
        b = n.n(m),
        x = n(121),
        y = n.n(x),
        g = n(6),
        h = n(13),
        _ = f.a.li(o || (o = i()(["\n\t// This is the height of the IconButtonToggle.\n\tmin-height: 24px;\n\tpadding: 0;\n\tdisplay: flex;\n\talign-items: flex-start;\n"]))),
        k = f()(h.SvgIcon)(r || (r = i()(["\n\tmargin: 3px 11px 0 0; // icon 13 + 11 right margin = 24 for the 8px grid.\n"]))),
        v = f.a.p(s || (s = i()(["\n\tmargin: 0 16px 0 0;\n\tflex: 1 1 auto;\n"]))),
        B = function B(t) {
      return Object(u.createElement)(_, null, Object(u.createElement)(k, {
        icon: "circle",
        color: t.bulletColor,
        size: "13px"
      }), Object(u.createElement)(v, {
        dangerouslySetInnerHTML: {
          __html: t.text
        }
      }), t.hasMarksButton && !function (t) {
        return "hidden" === t.marksButtonStatus;
      }(t) && Object(u.createElement)(h.IconButtonToggle, {
        marksButtonStatus: t.marksButtonStatus,
        className: t.marksButtonClassName,
        onClick: t.onButtonClick,
        id: t.buttonId,
        icon: "eye",
        pressed: t.pressed,
        ariaLabel: t.ariaLabel
      }));
    };

    B.propTypes = {
      text: b.a.string.isRequired,
      bulletColor: b.a.string.isRequired,
      hasMarksButton: b.a.bool.isRequired,
      buttonId: b.a.string.isRequired,
      pressed: b.a.bool.isRequired,
      ariaLabel: b.a.string.isRequired,
      onButtonClick: b.a.func.isRequired,
      marksButtonStatus: b.a.string,
      marksButtonClassName: b.a.string
    }, B.defaultProps = {
      marksButtonStatus: "enabled",
      marksButtonClassName: ""
    };
    var O,
        R = B,
        C = f.a.ul(O || (O = i()(["\n\tmargin: 8px 0;\n\tpadding: 0;\n\tlist-style: none;\n"])));

    function w(t) {
      switch (t) {
        case "good":
          return g.colors.$color_good;

        case "OK":
          return g.colors.$color_ok;

        case "bad":
          return g.colors.$color_bad;

        default:
          return g.colors.$color_score_icon;
      }
    }

    function j(t) {
      var e = t.results,
          n = t.marksButtonActivatedResult,
          o = t.marksButtonStatus,
          r = t.marksButtonClassName,
          s = t.onMarksButtonClick;
      return Object(u.createElement)(C, {
        role: "list"
      }, e.map(function (t) {
        var e,
            a = w(t.rating),
            i = t.markerId === n;
        return e = "disabled" === o ? Object(l.__)("Marks are disabled in current view", "yoast-components") : i ? Object(l.__)("Remove highlight from the text", "yoast-components") : Object(l.__)("Highlight this result in the text", "yoast-components"), Object(u.createElement)(R, {
          key: t.id,
          text: t.text,
          bulletColor: a,
          hasMarksButton: t.hasMarks,
          ariaLabel: e,
          pressed: i,
          buttonId: t.id,
          onButtonClick: function onButtonClick() {
            return s(t.id, t.marker);
          },
          marksButtonClassName: r,
          marksButtonStatus: o
        });
      }));
    }

    j.propTypes = {
      results: b.a.array.isRequired,
      marksButtonActivatedResult: b.a.string,
      marksButtonStatus: b.a.string,
      marksButtonClassName: b.a.string,
      onMarksButtonClick: b.a.func
    }, j.defaultProps = {
      marksButtonActivatedResult: "",
      marksButtonStatus: "enabled",
      marksButtonClassName: "",
      onMarksButtonClick: y.a
    };
    var M,
        S,
        N = n(8),
        E = n.n(N),
        I = n(9),
        P = n.n(I),
        A = n(11),
        T = n.n(A),
        q = n(12),
        L = n.n(q),
        z = n(7),
        $ = n.n(z);

    var H = f.a.div(M || (M = i()(["\n\twidth: 100%;\n\tbackground-color: white;\n\tborder-bottom: 1px solid transparent; // Avoid parent and child margin collapsing.\n"]))),
        G = f()(h.Collapsible)(S || (S = i()(["\n\tmargin-bottom: 8px;\n\n\tbutton:first-child svg {\n\t\tmargin: -2px 8px 0 -2px; // Compensate icon size set to 18px.\n\t}\n\n\t", " {\n\t\tpadding: 8px 0;\n\t\tcolor: ", "\n\t}\n"])), h.StyledIconsButton, g.colors.$color_blue),
        K = function (t) {
      T()(r, t);
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
            o = $()(e);

        if (n) {
          var r = $()(this).constructor;
          t = Reflect.construct(o, arguments, r);
        } else t = o.apply(this, arguments);

        return L()(this, t);
      });

      function r() {
        return E()(this, r), o.apply(this, arguments);
      }

      return P()(r, [{
        key: "renderCollapsible",
        value: function value(t, e, n) {
          return Object(u.createElement)(G, {
            initialIsOpen: !0,
            title: "".concat(t, " (").concat(n.length, ")"),
            prefixIcon: {
              icon: "angle-up",
              color: g.colors.$color_grey_dark,
              size: "18px"
            },
            prefixIconCollapsed: {
              icon: "angle-down",
              color: g.colors.$color_grey_dark,
              size: "18px"
            },
            suffixIcon: null,
            suffixIconCollapsed: null,
            headingProps: {
              level: e,
              fontSize: "13px",
              fontWeight: "bold"
            }
          }, Object(u.createElement)(j, {
            results: n,
            marksButtonActivatedResult: this.props.activeMarker,
            marksButtonStatus: this.props.marksButtonStatus,
            marksButtonClassName: this.props.marksButtonClassName,
            onMarksButtonClick: this.props.onMarkButtonClick
          }));
        }
      }, {
        key: "render",
        value: function value() {
          var t = this.props,
              e = t.problemsResults,
              n = t.improvementsResults,
              o = t.goodResults,
              r = t.considerationsResults,
              s = t.errorsResults,
              a = t.headingLevel,
              i = s.length,
              c = e.length,
              p = n.length,
              d = r.length,
              f = o.length;
          return Object(u.createElement)(H, null, i > 0 && this.renderCollapsible(Object(l.__)("Errors", "yoast-components"), a, s), c > 0 && this.renderCollapsible(Object(l.__)("Problems", "yoast-components"), a, e), p > 0 && this.renderCollapsible(Object(l.__)("Improvements", "yoast-components"), a, n), d > 0 && this.renderCollapsible(Object(l.__)("Considerations", "yoast-components"), a, r), f > 0 && this.renderCollapsible(Object(l.__)("Good results", "yoast-components"), a, o));
        }
      }]), r;
    }(p.a.Component);

    K.propTypes = {
      onMarkButtonClick: b.a.func,
      problemsResults: b.a.array,
      improvementsResults: b.a.array,
      goodResults: b.a.array,
      considerationsResults: b.a.array,
      errorsResults: b.a.array,
      headingLevel: b.a.number,
      marksButtonStatus: b.a.string,
      marksButtonClassName: b.a.string,
      activeMarker: b.a.string
    }, K.defaultProps = {
      onMarkButtonClick: function onMarkButtonClick() {},
      problemsResults: [],
      improvementsResults: [],
      goodResults: [],
      considerationsResults: [],
      errorsResults: [],
      headingLevel: 4,
      marksButtonStatus: "enabled",
      marksButtonClassName: "",
      activeMarker: ""
    };

    var W,
        D,
        F = K,
        J = f.a.div(W || (W = i()(["\n"]))),
        Q = f.a.p(D || (D = i()(["\n\tfont-size: 14px;\n"]))),
        U = function U(t) {
      return Object(u.createElement)(J, {
        className: t.className
      }, Object(u.createElement)(Q, {
        className: "".concat(t.className, "__text")
      }, t.seoAssessmentText), Object(u.createElement)(h.StackedProgressBar, {
        className: "progress",
        items: t.seoAssessmentItems,
        barHeight: t.barHeight
      }), Object(u.createElement)(h.ScoreAssessments, {
        className: "assessments",
        items: t.seoAssessmentItems
      }));
    };

    U.propTypes = {
      className: b.a.string,
      seoAssessmentText: b.a.string,
      seoAssessmentItems: b.a.arrayOf(b.a.shape({
        html: b.a.string.isRequired,
        value: b.a.number.isRequired,
        color: b.a.string.isRequired
      })),
      barHeight: b.a.string
    }, U.defaultProps = {
      className: "seo-assessment",
      seoAssessmentText: "SEO Assessment",
      seoAssessmentItems: null,
      barHeight: "24px"
    };
    var V = U;
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