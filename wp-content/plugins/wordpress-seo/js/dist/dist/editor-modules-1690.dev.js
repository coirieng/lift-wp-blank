"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(a) {
    if (t[a]) return t[a].exports;
    var r = t[a] = {
      i: a,
      l: !1,
      exports: {}
    };
    return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, a) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: a
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
    var a = Object.create(null);
    if (n.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      n.d(a, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return a;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 355);
}({
  0: function _(e, t) {
    e.exports = window.wp.element;
  },
  1: function _(e, t) {
    e.exports = window.yoast.propTypes;
  },
  10: function _(e, t) {
    e.exports = function (e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    };
  },
  100: function _(e, t) {
    e.exports = function (e, t) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
        var n = [],
            _n = !0,
            a = !1,
            r = void 0;

        try {
          for (var o, s = e[Symbol.iterator](); !(_n = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); _n = !0) {
            ;
          }
        } catch (e) {
          a = !0, r = e;
        } finally {
          try {
            _n || null == s["return"] || s["return"]();
          } finally {
            if (a) throw r;
          }
        }

        return n;
      }
    };
  },
  101: function _(e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
  },
  102: function _(e, t) {
    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
          a,
          r = {},
          o = Object.keys(e);

      for (a = 0; a < o.length; a++) {
        n = o[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
      }

      return r;
    };
  },
  103: function _(e, t, n) {
    "use strict";

    var a = n(0),
        r = n(1),
        o = n.n(r),
        s = n(12),
        i = n(28),
        c = function c(e) {
      var t = e.theme,
          n = e.location,
          r = e.children;
      return Object(a.createElement)(i.LocationProvider, {
        value: n
      }, Object(a.createElement)(s.ThemeProvider, {
        theme: t
      }, r));
    };

    c.propTypes = {
      theme: o.a.object.isRequired,
      location: o.a.oneOf(["sidebar", "metabox", "modal"]).isRequired,
      children: o.a.element.isRequired
    }, t.a = c;
  },
  104: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "refreshDelay", function () {
      return a;
    });
    var a = 500;
  },
  11: function _(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    };
  },
  115: function _(e, t, n) {
    "use strict";

    var a = n(4),
        r = n(19),
        o = n(0),
        s = n(3),
        i = n(1),
        c = n.n(i),
        u = n(2),
        l = n(6),
        d = function d() {
      return Object(o.createElement)("p", {
        className: "yoast-related-keyphrases-modal__loading-message"
      }, Object(s.sprintf)(
      /* translators: %1$s expands to "Yoast SEO", %2$s expands to "Semrush". */
      Object(s.__)("Please wait while %1$s connects to %2$s to get related keyphrases...", "wordpress-seo"), "Yoast SEO", "Semrush"), " ", Object(o.createElement)(l.SvgIcon, {
        icon: "loading-spinner"
      }));
    },
        p = n(9),
        m = Object(p.makeOutboundLink)(),
        f = function f() {
      return Object(o.createElement)(o.Fragment, null, Object(o.createElement)("p", null, Object(s.sprintf)(
      /* translators: %s : Expands to "Semrush". */
      Object(s.__)("You've reached your request limit for today. Check back tomorrow or upgrade your plan over at %s.", "wordpress-seo"), "Semrush")), Object(o.createElement)(m, {
        href: window.wpseoAdminL10n["shortlinks.semrush.prices"],
        className: "yoast-button-upsell"
      }, Object(s.sprintf)(
      /* translators: %s : Expands to "Semrush". */
      Object(s.__)("Upgrade your %s plan", "wordpress-seo"), "Semrush"), Object(o.createElement)("span", {
        "aria-hidden": "true",
        className: "yoast-button-upsell__caret"
      })));
    },
        b = n(47),
        h = n.n(b),
        y = n(5),
        v = n.n(y),
        g = n(7),
        O = n.n(g),
        j = n(11),
        w = n.n(j),
        R = n(13),
        k = n.n(R),
        E = n(14),
        _ = n.n(E),
        I = n(8),
        T = n.n(I),
        S = n(26),
        x = n.n(S),
        C = n(64),
        P = n.n(C),
        N = n(52);

    var q = "yoast-semrush-country-selector",
        M = [{
      value: "us",
      name: "United States - US"
    }, {
      value: "uk",
      name: "United Kingdom - UK"
    }, {
      value: "ca",
      name: "Canada - CA"
    }, {
      value: "ru",
      name: "Russia - RU"
    }, {
      value: "de",
      name: "Germany - DE"
    }, {
      value: "fr",
      name: "France - FR"
    }, {
      value: "es",
      name: "Spain - ES"
    }, {
      value: "it",
      name: "Italy - IT"
    }, {
      value: "br",
      name: "Brazil - BR"
    }, {
      value: "au",
      name: "Australia - AU"
    }, {
      value: "ar",
      name: "Argentina - AR"
    }, {
      value: "be",
      name: "Belgium - BE"
    }, {
      value: "ch",
      name: "Switzerland - CH"
    }, {
      value: "dk",
      name: "Denmark - DK"
    }, {
      value: "fi",
      name: "Finland - FI"
    }, {
      value: "hk",
      name: "Hong Kong - HK"
    }, {
      value: "ie",
      name: "Ireland - IE"
    }, {
      value: "il",
      name: "Israel - IL"
    }, {
      value: "mx",
      name: "Mexico - MX"
    }, {
      value: "nl",
      name: "Netherlands - NL"
    }, {
      value: "no",
      name: "Norway - NO"
    }, {
      value: "pl",
      name: "Poland - PL"
    }, {
      value: "se",
      name: "Sweden - SE"
    }, {
      value: "sg",
      name: "Singapore - SG"
    }, {
      value: "tr",
      name: "Turkey - TR"
    }, {
      value: "jp",
      name: "Japan - JP"
    }, {
      value: "in",
      name: "India - IN"
    }, {
      value: "hu",
      name: "Hungary - HU"
    }, {
      value: "af",
      name: "Afghanistan - AF"
    }, {
      value: "al",
      name: "Albania - AL"
    }, {
      value: "dz",
      name: "Algeria - DZ"
    }, {
      value: "ao",
      name: "Angola - AO"
    }, {
      value: "am",
      name: "Armenia - AM"
    }, {
      value: "at",
      name: "Austria - AT"
    }, {
      value: "az",
      name: "Azerbaijan - AZ"
    }, {
      value: "bh",
      name: "Bahrain - BH"
    }, {
      value: "bd",
      name: "Bangladesh - BD"
    }, {
      value: "by",
      name: "Belarus - BY"
    }, {
      value: "bz",
      name: "Belize - BZ"
    }, {
      value: "bo",
      name: "Bolivia - BO"
    }, {
      value: "ba",
      name: "Bosnia and Herzegovina - BA"
    }, {
      value: "bw",
      name: "Botswana - BW"
    }, {
      value: "bn",
      name: "Brunei - BN"
    }, {
      value: "bg",
      name: "Bulgaria - BG"
    }, {
      value: "cv",
      name: "Cabo Verde - CV"
    }, {
      value: "kh",
      name: "Cambodia - KH"
    }, {
      value: "cm",
      name: "Cameroon - CM"
    }, {
      value: "cl",
      name: "Chile - CL"
    }, {
      value: "co",
      name: "Colombia - CO"
    }, {
      value: "cr",
      name: "Costa Rica - CR"
    }, {
      value: "hr",
      name: "Croatia - HR"
    }, {
      value: "cy",
      name: "Cyprus - CY"
    }, {
      value: "cz",
      name: "Czech Republic - CZ"
    }, {
      value: "cd",
      name: "Congo - CD"
    }, {
      value: "do",
      name: "Dominican Republic - DO"
    }, {
      value: "ec",
      name: "Ecuador - EC"
    }, {
      value: "eg",
      name: "Egypt - EG"
    }, {
      value: "sv",
      name: "El Salvador - SV"
    }, {
      value: "ee",
      name: "Estonia - EE"
    }, {
      value: "et",
      name: "Ethiopia - ET"
    }, {
      value: "ge",
      name: "Georgia - GE"
    }, {
      value: "gh",
      name: "Ghana - GH"
    }, {
      value: "gr",
      name: "Greece - GR"
    }, {
      value: "gt",
      name: "Guatemala - GT"
    }, {
      value: "gy",
      name: "Guyana - GY"
    }, {
      value: "ht",
      name: "Haiti - HT"
    }, {
      value: "hn",
      name: "Honduras - HN"
    }, {
      value: "is",
      name: "Iceland - IS"
    }, {
      value: "id",
      name: "Indonesia - ID"
    }, {
      value: "jm",
      name: "Jamaica - JM"
    }, {
      value: "jo",
      name: "Jordan - JO"
    }, {
      value: "kz",
      name: "Kazakhstan - KZ"
    }, {
      value: "kw",
      name: "Kuwait - KW"
    }, {
      value: "lv",
      name: "Latvia - LV"
    }, {
      value: "lb",
      name: "Lebanon - LB"
    }, {
      value: "lt",
      name: "Lithuania - LT"
    }, {
      value: "lu",
      name: "Luxembourg - LU"
    }, {
      value: "mg",
      name: "Madagascar - MG"
    }, {
      value: "my",
      name: "Malaysia - MY"
    }, {
      value: "mt",
      name: "Malta - MT"
    }, {
      value: "mu",
      name: "Mauritius - MU"
    }, {
      value: "md",
      name: "Moldova - MD"
    }, {
      value: "mn",
      name: "Mongolia - MN"
    }, {
      value: "me",
      name: "Montenegro - ME"
    }, {
      value: "ma",
      name: "Morocco - MA"
    }, {
      value: "mz",
      name: "Mozambique - MZ"
    }, {
      value: "na",
      name: "Namibia - NA"
    }, {
      value: "np",
      name: "Nepal - NP"
    }, {
      value: "nz",
      name: "New Zealand - NZ"
    }, {
      value: "ni",
      name: "Nicaragua - NI"
    }, {
      value: "ng",
      name: "Nigeria - NG"
    }, {
      value: "om",
      name: "Oman - OM"
    }, {
      value: "py",
      name: "Paraguay - PY"
    }, {
      value: "pe",
      name: "Peru - PE"
    }, {
      value: "ph",
      name: "Philippines - PH"
    }, {
      value: "pt",
      name: "Portugal - PT"
    }, {
      value: "ro",
      name: "Romania - RO"
    }, {
      value: "sa",
      name: "Saudi Arabia - SA"
    }, {
      value: "sn",
      name: "Senegal - SN"
    }, {
      value: "rs",
      name: "Serbia - RS"
    }, {
      value: "sk",
      name: "Slovakia - SK"
    }, {
      value: "si",
      name: "Slovenia - SI"
    }, {
      value: "za",
      name: "South Africa - ZA"
    }, {
      value: "kr",
      name: "South Korea - KR"
    }, {
      value: "lk",
      name: "Sri Lanka - LK"
    }, {
      value: "th",
      name: "Thailand - TH"
    }, {
      value: "bs",
      name: "Bahamas - BS"
    }, {
      value: "tt",
      name: "Trinidad and Tobago - TT"
    }, {
      value: "tn",
      name: "Tunisia - TN"
    }, {
      value: "ua",
      name: "Ukraine - UA"
    }, {
      value: "ae",
      name: "United Arab Emirates - AE"
    }, {
      value: "uy",
      name: "Uruguay - UY"
    }, {
      value: "ve",
      name: "Venezuela - VE"
    }, {
      value: "vn",
      name: "Vietnam - VN"
    }, {
      value: "zm",
      name: "Zambia - ZM"
    }, {
      value: "zw",
      name: "Zimbabwe - ZW"
    }, {
      value: "ly",
      name: "Libya - LY"
    }],
        D = function (e) {
      k()(c, e);
      var t,
          n,
          a,
          r,
          i = (a = c, r = function () {
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
            t = T()(a);

        if (r) {
          var n = T()(this).constructor;
          e = Reflect.construct(t, arguments, n);
        } else e = t.apply(this, arguments);

        return _()(this, e);
      });

      function c(e) {
        var t;
        return v()(this, c), (t = i.call(this, e)).relatedKeyphrasesRequest = t.relatedKeyphrasesRequest.bind(w()(t)), t.onChangeHandler = t.onChangeHandler.bind(w()(t)), t;
      }

      return O()(c, [{
        key: "componentDidMount",
        value: function value() {
          this.props.response && this.props.keyphrase === this.props.lastRequestKeyphrase || this.relatedKeyphrasesRequest();
        }
      }, {
        key: "storeCountryCode",
        value: function value(e) {
          P()({
            path: "yoast/v1/semrush/country_code",
            method: "POST",
            data: {
              country_code: e
            }
          });
        }
      }, {
        key: "relatedKeyphrasesRequest",
        value: (n = h()(x.a.mark(function e() {
          var t, n, a, r;
          return x.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return t = this.props, n = t.keyphrase, a = t.countryCode, (0, t.newRequest)(a, n), this.storeCountryCode(a), e.next = 5, this.doRequest(n, a);

                case 5:
                  if (200 !== (r = e.sent).status) {
                    e.next = 9;
                    break;
                  }

                  return this.handleSuccessResponse(r), e.abrupt("return");

                case 9:
                  this.handleFailedResponse(r);

                case 10:
                case "end":
                  return e.stop();
              }
            }
          }, e, this);
        })), function () {
          return n.apply(this, arguments);
        })
      }, {
        key: "handleSuccessResponse",
        value: function value(e) {
          var t = this.props,
              n = t.setNoResultsFound,
              a = t.setRequestSucceeded;
          0 !== e.results.rows.length ? a(e) : n();
        }
      }, {
        key: "handleFailedResponse",
        value: function value(e) {
          var t = this.props,
              n = t.setRequestLimitReached,
              a = t.setRequestFailed;
          "error" in e && (e.error.includes("TOTAL LIMIT EXCEEDED") ? n() : a(e));
        }
      }, {
        key: "doRequest",
        value: (t = h()(x.a.mark(function e(t, n) {
          return x.a.wrap(function (e) {
            for (;;) {
              switch (e.prev = e.next) {
                case 0:
                  return e.next = 2, P()({
                    path: Object(N.addQueryArgs)("/yoast/v1/semrush/related_keyphrases", {
                      keyphrase: t,
                      country_code: n
                    })
                  });

                case 2:
                  return e.abrupt("return", e.sent);

                case 3:
                case "end":
                  return e.stop();
              }
            }
          }, e);
        })), function (_x, e) {
          return t.apply(this, arguments);
        })
      }, {
        key: "onChangeHandler",
        value: function value(e) {
          this.props.setCountry(e);
        }
      }, {
        key: "render",
        value: function value() {
          return Object(o.createElement)("div", {
            id: q
          }, Object(o.createElement)(l.SingleSelect, {
            id: q + "-select",
            label: Object(s.__)("Show results for:", "wordpress-seo"),
            name: "semrush-country-code",
            options: M,
            selected: this.props.countryCode,
            onChange: this.onChangeHandler,
            wrapperClassName: "yoast-field-group yoast-field-group--inline"
          }), Object(o.createElement)(l.NewButton, {
            id: q + "-button",
            variant: "secondary",
            onClick: this.relatedKeyphrasesRequest
          }, Object(s.__)("Select country", "wordpress-seo")));
        }
      }]), c;
    }(o.Component);

    D.propTypes = {
      keyphrase: c.a.string,
      countryCode: c.a.string,
      response: c.a.object,
      lastRequestKeyphrase: c.a.string,
      setCountry: c.a.func.isRequired,
      newRequest: c.a.func.isRequired,
      setNoResultsFound: c.a.func.isRequired,
      setRequestSucceeded: c.a.func.isRequired,
      setRequestLimitReached: c.a.func.isRequired,
      setRequestFailed: c.a.func.isRequired
    }, D.defaultProps = {
      keyphrase: "",
      countryCode: "us",
      response: {},
      lastRequestKeyphrase: ""
    };

    var B = D,
        A = n(30),
        L = n.n(A),
        F = function F(e) {
      var t = e.data,
          n = e.mapChartDataToTableData,
          a = e.dataTableCaption,
          r = e.dataTableHeaderLabels,
          i = e.isDataTableVisuallyHidden;
      return t.length !== r.length ? Object(o.createElement)("p", null, Object(s.__)("The number of headers and header labels don't match.", "wordpress-seo")) : Object(o.createElement)("div", {
        className: i ? "screen-reader-text" : null
      }, Object(o.createElement)("table", null, Object(o.createElement)("caption", null, a), Object(o.createElement)("thead", null, Object(o.createElement)("tr", null, r.map(function (e, t) {
        return Object(o.createElement)("th", {
          key: t
        }, e);
      }))), Object(o.createElement)("tbody", null, Object(o.createElement)("tr", null, t.map(function (e, t) {
        return Object(o.createElement)("td", {
          key: t
        }, n(e.y));
      })))));
    };

    F.propTypes = {
      data: c.a.arrayOf(c.a.shape({
        x: c.a.number,
        y: c.a.number
      })).isRequired,
      mapChartDataToTableData: c.a.func,
      dataTableCaption: c.a.string.isRequired,
      dataTableHeaderLabels: c.a.array.isRequired,
      isDataTableVisuallyHidden: c.a.bool
    }, F.defaultProps = {
      mapChartDataToTableData: null,
      isDataTableVisuallyHidden: !0
    };

    var K = F,
        H = function H(e) {
      var t = e.data,
          n = e.width,
          a = e.height,
          r = e.fillColor,
          s = e.strokeColor,
          i = e.strokeWidth,
          c = e.className,
          u = e.mapChartDataToTableData,
          l = e.dataTableCaption,
          d = e.dataTableHeaderLabels,
          p = e.isDataTableVisuallyHidden,
          m = Math.max(1, Math.max.apply(Math, L()(t.map(function (e) {
        return e.x;
      })))),
          f = Math.max(1, Math.max.apply(Math, L()(t.map(function (e) {
        return e.y;
      })))),
          b = a - i,
          h = t.map(function (e) {
        var t = e.x / m * n,
            a = b - e.y / f * b + i;
        return "".concat(t, ",").concat(a);
      }).join(" "),
          y = "0,".concat(b + i, " ") + h + " ".concat(n, ",").concat(b + i);
      return Object(o.createElement)(o.Fragment, null, Object(o.createElement)("svg", {
        width: n,
        height: a,
        viewBox: "0 0 ".concat(n, " ").concat(a),
        className: c,
        role: "img",
        "aria-hidden": "true",
        focusable: "false"
      }, Object(o.createElement)("polygon", {
        fill: r,
        points: y
      }), Object(o.createElement)("polyline", {
        fill: "none",
        stroke: s,
        strokeWidth: i,
        strokeLinejoin: "round",
        strokeLinecap: "round",
        points: h
      })), u && Object(o.createElement)(K, {
        data: t,
        mapChartDataToTableData: u,
        dataTableCaption: l,
        dataTableHeaderLabels: d,
        isDataTableVisuallyHidden: p
      }));
    };

    H.propTypes = {
      data: c.a.arrayOf(c.a.shape({
        x: c.a.number,
        y: c.a.number
      })).isRequired,
      width: c.a.number.isRequired,
      height: c.a.number.isRequired,
      fillColor: c.a.string,
      strokeColor: c.a.string,
      strokeWidth: c.a.number,
      className: c.a.string,
      mapChartDataToTableData: c.a.func,
      dataTableCaption: c.a.string.isRequired,
      dataTableHeaderLabels: c.a.array.isRequired,
      isDataTableVisuallyHidden: c.a.bool
    }, H.defaultProps = {
      fillColor: null,
      strokeColor: "#000000",
      strokeWidth: 1,
      className: "",
      mapChartDataToTableData: null,
      isDataTableVisuallyHidden: !0
    };
    var V = H,
        U = n(54);

    var z = Object(p.makeOutboundLink)(),
        Y = function (e) {
      k()(r, e);
      var t,
          n,
          a = (t = r, n = function () {
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
            a = T()(t);

        if (n) {
          var r = T()(this).constructor;
          e = Reflect.construct(a, arguments, r);
        } else e = a.apply(this, arguments);

        return _()(this, e);
      });

      function r(e) {
        var t;
        return v()(this, r), (t = a.call(this, e)).transformTrendDataToChartPoints = t.transformTrendDataToChartPoints.bind(w()(t)), t.getAreaChartDataTableHeaderLabels = t.getAreaChartDataTableHeaderLabels.bind(w()(t)), t.mapAreaChartDataToTableData = t.mapAreaChartDataToTableData.bind(w()(t)), t;
      }

      return O()(r, [{
        key: "transformTrendDataToChartPoints",
        value: function value(e) {
          return e.split(",").map(function (e, t) {
            return {
              x: t,
              y: parseFloat(e)
            };
          });
        }
      }, {
        key: "getAreaChartDataTableHeaderLabels",
        value: function value() {
          return [Object(s.__)("Twelve months ago", "wordpress-seo"), Object(s.__)("Eleven months ago", "wordpress-seo"), Object(s.__)("Ten months ago", "wordpress-seo"), Object(s.__)("Nine months ago", "wordpress-seo"), Object(s.__)("Eight months ago", "wordpress-seo"), Object(s.__)("Seven months ago", "wordpress-seo"), Object(s.__)("Six months ago", "wordpress-seo"), Object(s.__)("Five months ago", "wordpress-seo"), Object(s.__)("Four months ago", "wordpress-seo"), Object(s.__)("Three months ago", "wordpress-seo"), Object(s.__)("Two months ago", "wordpress-seo"), Object(s.__)("Last month", "wordpress-seo")];
        }
      }, {
        key: "mapAreaChartDataToTableData",
        value: function value(e) {
          return Math.round(100 * e);
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = this.props,
              n = t.keyphrase,
              a = t.relatedKeyphrases,
              r = t.countryCode,
              i = t.data,
              c = t.renderAction,
              l = "https://www.semrush.com/analytics/keywordoverview/?q=" + encodeURIComponent(n) + "&db=" + encodeURIComponent(r);
          return i && !Object(u.isEmpty)(i.results) && Object(o.createElement)(o.Fragment, null, Object(o.createElement)("table", {
            className: "yoast yoast-table"
          }, Object(o.createElement)("thead", null, Object(o.createElement)("tr", null, Object(o.createElement)("th", {
            scope: "col",
            className: "yoast-table--primary"
          }, Object(s.__)("Related keyphrase", "wordpress-seo")), Object(o.createElement)("th", {
            scope: "col",
            abbr: Object(s.__)("Volume", "wordpress-seo")
          }, Object(s.__)("Volume", "wordpress-seo"), Object(o.createElement)(U.a, {
            href: window.wpseoAdminL10n["shortlinks.semrush.volume_help"],
            className: "dashicons"
          }, Object(o.createElement)("span", {
            className: "screen-reader-text"
          }, Object(s.__)("Learn more about the related keyphrases volume", "wordpress-seo")))), Object(o.createElement)("th", {
            scope: "col",
            abbr: Object(s.__)("Trend", "wordpress-seo")
          }, Object(s.__)("Trend", "wordpress-seo"), Object(o.createElement)(U.a, {
            href: window.wpseoAdminL10n["shortlinks.semrush.trend_help"],
            className: "dashicons"
          }, Object(o.createElement)("span", {
            className: "screen-reader-text"
          }, Object(s.__)("Learn more about the related keyphrases trend", "wordpress-seo")))), c && Object(o.createElement)("td", {
            className: "yoast-table--nobreak"
          }))), Object(o.createElement)("tbody", null, i.results.rows.map(function (t, n) {
            var r = t[0],
                i = e.transformTrendDataToChartPoints(t[2]),
                u = e.getAreaChartDataTableHeaderLabels();
            return Object(o.createElement)("tr", {
              key: n
            }, Object(o.createElement)("td", null, r), Object(o.createElement)("td", null, t[1]), Object(o.createElement)("td", {
              className: "yoast-table--nopadding"
            }, Object(o.createElement)(V, {
              width: 66,
              height: 24,
              data: i,
              strokeWidth: 1.8,
              strokeColor: "#498afc",
              fillColor: "#ade3fc",
              className: "yoast-related-keyphrases-modal__chart",
              mapChartDataToTableData: e.mapAreaChartDataToTableData,
              dataTableCaption: Object(s.__)("Keyphrase volume in the last 12 months on a scale from 0 to 100.", "wordpress-seo"),
              dataTableHeaderLabels: u
            })), c && Object(o.createElement)("td", {
              className: "yoast-table--nobreak"
            }, c(r, a)));
          }))), Object(o.createElement)("p", {
            style: {
              marginBottom: 0
            }
          }, Object(o.createElement)(z, {
            href: l
          }, Object(s.sprintf)(
          /* translators: %s expands to Semrush */
          Object(s.__)("Get more insights at %s", "wordpress-seo"), "Semrush"))));
        }
      }]), r;
    }(o.Component);

    Y.propTypes = {
      data: c.a.object,
      keyphrase: c.a.string,
      relatedKeyphrases: c.a.array,
      countryCode: c.a.string,
      renderAction: c.a.func
    }, Y.defaultProps = {
      data: {},
      keyphrase: "",
      relatedKeyphrases: [],
      countryCode: "us",
      renderAction: null
    };

    var G = Y,
        W = Object(p.makeOutboundLink)(),
        Z = function Z() {
      return Object(o.createElement)(l.Alert, {
        type: "info"
      }, Object(s.sprintf)(
      /* translators: %s: Expands to "Yoast SEO". */
      Object(s.__)("Would you like to be able to add these related keyphrases to the %s analysis so you can optimize your content even further?", "wordpress-seo"), "Yoast SEO") + " ", Object(o.createElement)(W, {
        href: window.wpseoAdminL10n["shortlinks.semrush.premium_landing_page"]
      }, Object(s.sprintf)(
      /* translators: %s: Expands to "Yoast SEO Premium". */
      Object(s.__)("Check out %s!", "wordpress-seo"), "Yoast SEO Premium")));
    },
        $ = function $() {
      return Object(o.createElement)(l.Alert, {
        type: "error"
      }, Object(s.__)("We've encountered a problem trying to get related keyphrases. Please try again later.", "wordpress-seo"));
    },
        J = function J() {
      return Object(o.createElement)(l.Alert, {
        type: "warning"
      }, Object(s.sprintf)(
      /* translators: %s: Expands to "Yoast SEO". */
      Object(s.__)("You've reached the maximum amount of 4 related keyphrases. You can change or remove related keyphrases in the %s metabox or sidebar.", "wordpress-seo"), "Yoast SEO"));
    },
        X = n(20);

    function Q(e) {
      var t = e.response,
          n = e.lastRequestKeyphrase,
          a = e.keyphrase,
          r = e.newRequest,
          i = e.setCountry,
          c = e.renderAction,
          l = e.countryCode,
          p = e.requestLimitReached,
          m = e.setRequestFailed,
          b = e.setNoResultsFound,
          h = e.relatedKeyphrases,
          y = e.setRequestSucceeded,
          v = e.setRequestLimitReached,
          g = Object(X.a)().isPremium;
      return Object(o.createElement)(o.Fragment, null, !p && Object(o.createElement)(o.Fragment, null, !g && Object(o.createElement)(Z, null), g && function (e) {
        return e && e.length >= 4;
      }(h) && Object(o.createElement)(J, null), Object(o.createElement)(B, {
        countryCode: l,
        setCountry: i,
        newRequest: r,
        keyphrase: a,
        setRequestFailed: m,
        setNoResultsFound: b,
        setRequestSucceeded: y,
        setRequestLimitReached: v,
        response: t,
        lastRequestKeyphrase: n
      })), function (e) {
        var t = e.isPending,
            n = e.requestLimitReached,
            a = e.isSuccess,
            r = e.response,
            i = e.requestHasData;
        return t ? Object(o.createElement)(d, null) : n ? Object(o.createElement)(f, null) : !a && function (e) {
          return !Object(u.isEmpty)(e) && "error" in e;
        }(r) ? Object(o.createElement)($, null) : i ? void 0 : Object(o.createElement)("p", null, Object(s.__)("Sorry, there's no data available for that keyphrase/country combination.", "wordpress-seo"));
      }(e), Object(o.createElement)(G, {
        keyphrase: a,
        relatedKeyphrases: h,
        countryCode: l,
        renderAction: c,
        data: t
      }));
    }

    Q.propTypes = {
      keyphrase: c.a.string,
      relatedKeyphrases: c.a.array,
      renderAction: c.a.func,
      requestLimitReached: c.a.bool,
      countryCode: c.a.string.isRequired,
      setCountry: c.a.func.isRequired,
      newRequest: c.a.func.isRequired,
      setRequestSucceeded: c.a.func.isRequired,
      setRequestLimitReached: c.a.func.isRequired,
      setRequestFailed: c.a.func.isRequired,
      setNoResultsFound: c.a.func.isRequired,
      response: c.a.object,
      lastRequestKeyphrase: c.a.string
    }, Q.defaultProps = {
      keyphrase: "",
      relatedKeyphrases: [],
      renderAction: null,
      requestLimitReached: !1,
      response: {},
      lastRequestKeyphrase: ""
    }, t.a = Object(r.compose)([Object(a.withSelect)(function (e) {
      var t = e("yoast-seo/editor"),
          n = t.getFocusKeyphrase,
          a = t.getSEMrushSelectedCountry,
          r = t.getSEMrushRequestLimitReached,
          o = t.getSEMrushRequestResponse,
          s = t.getSEMrushRequestIsSuccess,
          i = t.getSEMrushIsRequestPending,
          c = t.getSEMrushRequestHasData,
          u = t.getSEMrushRequestKeyphrase;
      return {
        keyphrase: n(),
        countryCode: a(),
        requestLimitReached: r(),
        response: o(),
        isSuccess: s(),
        isPending: i(),
        requestHasData: c(),
        lastRequestKeyphrase: u()
      };
    }), Object(a.withDispatch)(function (e) {
      var t = e("yoast-seo/editor"),
          n = t.setSEMrushChangeCountry,
          a = t.setSEMrushNewRequest,
          r = t.setSEMrushRequestSucceeded,
          o = t.setSEMrushRequestFailed,
          s = t.setSEMrushSetRequestLimitReached,
          i = t.setSEMrushNoResultsFound;
      return {
        setCountry: function setCountry(e) {
          n(e);
        },
        newRequest: function newRequest(e, t) {
          a(e, t);
        },
        setRequestSucceeded: function setRequestSucceeded(e) {
          r(e);
        },
        setRequestFailed: function setRequestFailed(e) {
          o(e);
        },
        setRequestLimitReached: function setRequestLimitReached() {
          s();
        },
        setNoResultsFound: function setNoResultsFound() {
          i();
        }
      };
    })])(Q);
  },
  12: function _(e, t) {
    e.exports = window.yoast.styledComponents;
  },
  13: function _(e, t, n) {
    var a = n(70);

    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && a(e, t);
    };
  },
  14: function _(e, t, n) {
    var a = n(34),
        r = n(11);

    e.exports = function (e, t) {
      return !t || "object" !== a(t) && "function" != typeof t ? r(e) : t;
    };
  },
  141: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return k;
    });
    var a = n(0),
        r = n(1),
        o = n.n(r),
        s = n(5),
        i = n.n(s),
        c = n(7),
        u = n.n(c),
        l = n(11),
        d = n.n(l),
        p = n(13),
        m = n.n(p),
        f = n(14),
        b = n.n(f),
        h = n(8),
        y = n.n(h),
        v = n(6),
        g = n(9),
        O = n(90);

    var j = function (e) {
      m()(o, e);
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
            a = y()(t);

        if (n) {
          var r = y()(this).constructor;
          e = Reflect.construct(a, arguments, r);
        } else e = a.apply(this, arguments);

        return b()(this, e);
      });

      function o(e) {
        var t;
        return i()(this, o), (t = r.call(this, e)).hiddenField = document.getElementById(t.props.hiddenField), t.hiddenFieldImageId = document.getElementById(t.props.hiddenFieldImageId), t.state = {
          imageUrl: t.getInitialValue(),
          imageId: t.getInitialId(),
          warnings: []
        }, t.setMyImageUrl = t.setMyImageUrl.bind(d()(t)), t.setMyImageId = t.setMyImageId.bind(d()(t)), t.onClick = t.onClick.bind(d()(t)), t.removeImage = t.removeImage.bind(d()(t)), t.setWarnings = t.setWarnings.bind(d()(t)), t;
      }

      return u()(o, [{
        key: "getInitialValue",
        value: function value() {
          return this.hiddenField.value;
        }
      }, {
        key: "getInitialId",
        value: function value() {
          if (null !== this.hiddenFieldImageId) return this.hiddenFieldImageId.value;
        }
      }, {
        key: "setMyImageUrl",
        value: function value(e) {
          var t = this;
          this.setState({
            imageUrl: e
          }, function () {
            t.hiddenField.value = e;
          });
        }
      }, {
        key: "setMyImageId",
        value: function value(e) {
          var t = this;
          this.setState({
            imageId: e
          }, function () {
            t.hiddenFieldImageId.value = e;
          });
        }
      }, {
        key: "onClick",
        value: function value() {
          var e = this;
          Object(O.a)(function (t) {
            e.props.hasImageValidation && e.setWarnings(Object(g.validateFacebookImage)(t)), e.setMyImageUrl(t.url), null !== e.hiddenFieldImageId && e.setMyImageId(t.id);
          });
        }
      }, {
        key: "removeImage",
        value: function value() {
          this.setMyImageUrl(""), null !== this.hiddenFieldImageId && this.setMyImageId("");
        }
      }, {
        key: "setWarnings",
        value: function value(e) {
          this.setState({
            warnings: e
          });
        }
      }, {
        key: "render",
        value: function value() {
          return Object(a.createElement)(v.ImageSelect, {
            label: this.props.label,
            hasPreview: this.props.hasPreview,
            imageUrl: this.state.imageUrl,
            imageId: this.state.imageId,
            onClick: this.onClick,
            onRemoveImageClick: this.removeImage,
            selectImageButtonId: this.props.selectImageButtonId,
            replaceImageButtonId: this.props.replaceImageButtonId,
            removeImageButtonId: this.props.removeImageButtonId,
            hasNewBadge: this.props.hasNewBadge,
            isDisabled: this.props.isDisabled,
            hasPremiumBadge: this.props.hasPremiumBadge,
            warnings: this.state.warnings
          });
        }
      }]), o;
    }(a.Component);

    j.propTypes = {
      hiddenField: o.a.string.isRequired,
      hiddenFieldImageId: o.a.string,
      label: o.a.string,
      hasPreview: o.a.bool,
      selectImageButtonId: o.a.string,
      replaceImageButtonId: o.a.string,
      removeImageButtonId: o.a.string,
      hasNewBadge: o.a.bool,
      isDisabled: o.a.bool,
      hasPremiumBadge: o.a.bool,
      hasImageValidation: o.a.bool
    }, j.defaultProps = {
      hiddenFieldImageId: "",
      label: "",
      hasPreview: !0,
      selectImageButtonId: "",
      replaceImageButtonId: "",
      removeImageButtonId: "",
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1,
      hasImageValidation: !1
    };
    var w = j,
        R = n(36);

    function k(e) {
      var t = e.target,
          n = e.label,
          r = e.hasPreview,
          o = e.hiddenField,
          s = e.hiddenFieldImageId,
          i = e.selectImageButtonId,
          c = e.replaceImageButtonId,
          u = e.removeImageButtonId,
          l = e.hasNewBadge,
          d = e.isDisabled,
          p = e.hasPremiumBadge,
          m = e.hasImageValidation;
      return Object(a.createElement)(R.a, {
        target: t
      }, Object(a.createElement)(w, {
        label: n,
        hasPreview: r,
        hiddenField: o,
        hiddenFieldImageId: s,
        selectImageButtonId: i,
        replaceImageButtonId: c,
        removeImageButtonId: u,
        hasNewBadge: l,
        isDisabled: d,
        hasPremiumBadge: p,
        hasImageValidation: m
      }));
    }

    k.propTypes = {
      target: o.a.string.isRequired,
      label: o.a.string.isRequired,
      hasPreview: o.a.bool.isRequired,
      hiddenField: o.a.string.isRequired,
      hiddenFieldImageId: o.a.string,
      selectImageButtonId: o.a.string,
      replaceImageButtonId: o.a.string,
      removeImageButtonId: o.a.string,
      hasNewBadge: o.a.bool,
      isDisabled: o.a.bool,
      hasPremiumBadge: o.a.bool,
      hasImageValidation: o.a.bool
    }, k.defaultProps = {
      hiddenFieldImageId: "",
      selectImageButtonId: "",
      replaceImageButtonId: "",
      removeImageButtonId: "",
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1,
      hasImageValidation: !1
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
  17: function _(e, t, n) {
    "use strict";

    n.d(t, "d", function () {
      return r;
    }), n.d(t, "e", function () {
      return o;
    }), n.d(t, "f", function () {
      return s;
    }), n.d(t, "c", function () {
      return i;
    }), n.d(t, "b", function () {
      return c;
    }), n.d(t, "g", function () {
      return u;
    }), n.d(t, "a", function () {
      return l;
    }), n.d(t, "j", function () {
      return d;
    }), n.d(t, "k", function () {
      return p;
    }), n.d(t, "l", function () {
      return m;
    }), n.d(t, "m", function () {
      return f;
    }), n.d(t, "i", function () {
      return b;
    }), n.d(t, "h", function () {
      return h;
    });
    var a = n(9),
        r = "SNIPPET_EDITOR_SWITCH_MODE",
        o = "SNIPPET_EDITOR_UPDATE_DATA",
        s = "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
        i = "SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",
        c = "SNIPPET_EDITOR_REFRESH",
        u = "SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT",
        l = "LOAD_SNIPPET_EDITOR_DATA";

    function d(e) {
      return {
        type: r,
        mode: e
      };
    }

    function p(e) {
      return {
        type: o,
        data: e
      };
    }

    function m(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = "string" == typeof t ? Object(a.decodeHTML)(t) : t;
      return {
        type: s,
        name: e,
        value: r,
        label: n
      };
    }

    function f(e) {
      return {
        type: u,
        wordsToHighlight: e
      };
    }

    function b(e) {
      return {
        type: i,
        name: e
      };
    }

    function h() {
      return {
        type: c,
        time: new Date().getMilliseconds()
      };
    }
  },
  176: function _(e, t, n) {
    "use strict";

    var a,
        r,
        o,
        s,
        i = n(34),
        c = n.n(i),
        u = n(30),
        l = n.n(u),
        d = n(39),
        p = n.n(d),
        m = n(0),
        f = /<(\/)?(\w+)\s*(\/)?>/g;

    function b(e, t, n, a, r) {
      return {
        element: e,
        tokenStart: t,
        tokenLength: n,
        prevOffset: a,
        leadingTextStart: r,
        children: []
      };
    }

    function h() {
      var e = a.length - r;
      0 !== e && o.push(a.substr(r, e));
    }

    function y(e) {
      var t = e.element,
          n = e.tokenStart,
          r = e.tokenLength,
          o = e.prevOffset,
          i = e.children,
          c = s[s.length - 1],
          u = a.substr(c.prevOffset, n - c.prevOffset);
      u && c.children.push(u), c.children.push(m.cloneElement.apply(void 0, [t, null].concat(l()(i)))), c.prevOffset = o || n + r;
    }

    function v(e) {
      var t = function () {
        var e = f.exec(a);
        if (null === e) return ["no-more-tokens"];
        var t = e.index,
            n = p()(e, 4),
            r = n[0],
            o = n[1],
            s = n[2],
            i = n[3],
            c = r.length;
        return i ? ["self-closed", s, t, c] : o ? ["closer", s, t, c] : ["opener", s, t, c];
      }(),
          n = p()(t, 4),
          i = n[0],
          c = n[1],
          u = n[2],
          d = n[3],
          v = s.length,
          g = u > r ? r : null;

      if (!e[c]) return h(), !1;

      switch (i) {
        case "no-more-tokens":
          if (0 !== v) {
            var O = s.pop(),
                j = O.leadingTextStart,
                w = O.tokenStart;
            o.push(a.substr(j, w));
          }

          return h(), !1;

        case "self-closed":
          return 0 === v ? (null !== g && o.push(a.substr(g, u - g)), o.push(e[c]), r = u + d, !0) : (y(b(e[c], u, d)), r = u + d, !0);

        case "opener":
          return s.push(b(e[c], u, d, u + d, g)), r = u + d, !0;

        case "closer":
          if (1 === v) return function (e) {
            var t = s.pop(),
                n = t.element,
                r = t.leadingTextStart,
                i = t.prevOffset,
                c = t.tokenStart,
                u = t.children,
                d = e ? a.substr(i, e - i) : a.substr(i);
            d && u.push(d), null !== r && o.push(a.substr(r, c - r)), o.push(m.cloneElement.apply(void 0, [n, null].concat(l()(u))));
          }(u), r = u + d, !0;
          var R = s.pop(),
              k = a.substr(R.prevOffset, u - R.prevOffset);
          R.children.push(k), R.prevOffset = u + d;
          var E = b(R.element, R.tokenStart, R.tokenLength, u + d);
          return E.children = R.children, y(E), r = u + d, !0;

        default:
          return h(), !1;
      }
    }

    t.a = function (e, t) {
      if (a = e, r = 0, o = [], s = [], f.lastIndex = 0, !function (e) {
        var t = "object" === c()(e),
            n = t && Object.values(e);
        return t && n.length && n.every(function (e) {
          return Object(m.isValidElement)(e);
        });
      }(t)) throw new TypeError("The conversionMap provided is not valid. It must be an object with values that are WPElements");

      do {} while (v(t));

      return m.createElement.apply(void 0, [m.Fragment, null].concat(l()(o)));
    };
  },
  18: function _(e, t) {
    e.exports = window.wp.components;
  },
  19: function _(e, t) {
    e.exports = window.wp.compose;
  },
  2: function _(e, t) {
    e.exports = window.lodash;
  },
  20: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    var a = n(2);

    function r() {
      return Object(a.get)(window, "wpseoScriptData.metabox", {
        intl: {},
        isRtl: !1
      });
    }
  },
  22: function _(e, t) {
    e.exports = window.yoast.components;
  },
  23: function _(e, t) {
    e.exports = window.yoast.analysis;
  },
  24: function _(e, t) {
    e.exports = window.yoast.styleGuide;
  },
  26: function _(e, t) {
    e.exports = window.regeneratorRuntime;
  },
  27: function _(e, t) {
    function n() {
      return e.exports = n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var a in n) {
            Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
          }
        }

        return e;
      }, n.apply(this, arguments);
    }

    e.exports = n;
  },
  28: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "LocationContext", function () {
      return r;
    }), n.d(t, "LocationProvider", function () {
      return o;
    }), n.d(t, "LocationConsumer", function () {
      return s;
    });
    var a = n(0),
        r = Object(a.createContext)("location"),
        o = r.Provider,
        s = r.Consumer;
  },
  3: function _(e, t) {
    e.exports = window.wp.i18n;
  },
  30: function _(e, t, n) {
    var a = n(87),
        r = n(88),
        o = n(89);

    e.exports = function (e) {
      return a(e) || r(e) || o();
    };
  },
  32: function _(e, t, n) {
    "use strict";

    var a = n(0),
        r = n(1),
        o = n.n(r),
        s = function s(e) {
      var t = e.children;
      return Object(a.createElement)("div", null, t);
    };

    s.propTypes = {
      renderPriority: o.a.number.isRequired,
      children: o.a.node.isRequired
    }, t.a = s;
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
  35: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "getIconForScore", function () {
      return i;
    }), n.d(t, "default", function () {
      return c;
    });
    var a = n(23),
        r = n(24);

    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = e.getIdentifier(),
          r = {
        score: e.score,
        rating: a.interpreters.scoreToRating(e.score),
        hasMarks: e.hasMarks(),
        marker: e.getMarker(),
        id: n,
        text: e.text,
        markerId: t.length > 0 ? "".concat(t, ":").concat(n) : n
      };
      return "ok" === r.rating && (r.rating = "OK"), r;
    }

    function s(e, t) {
      switch (e.rating) {
        case "error":
          t.errorsResults.push(e);
          break;

        case "feedback":
          t.considerationsResults.push(e);
          break;

        case "bad":
          t.problemsResults.push(e);
          break;

        case "OK":
          t.improvementsResults.push(e);
          break;

        case "good":
          t.goodResults.push(e);
      }

      return t;
    }

    function i(e) {
      var t = {
        icon: "seo-score-none",
        color: r.colors.$color_grey_disabled
      };

      switch (e) {
        case "loading":
          t = {
            icon: "loading-spinner",
            color: r.colors.$color_green_medium_light
          };
          break;

        case "good":
          t = {
            icon: "seo-score-good",
            color: r.colors.$color_green_medium
          };
          break;

        case "ok":
          t = {
            icon: "seo-score-ok",
            color: r.colors.$color_ok
          };
          break;

        case "bad":
          t = {
            icon: "seo-score-bad",
            color: r.colors.$color_red
          };
      }

      return t;
    }

    function c(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = {
        errorsResults: [],
        problemsResults: [],
        improvementsResults: [],
        goodResults: [],
        considerationsResults: []
      };
      if (!e) return n;

      for (var a = 0; a < e.length; a++) {
        var r = e[a];

        if (r.text) {
          var i = o(r, t);
          n = s(i, n);
        }
      }

      return n;
    }
  },
  355: function _(e, t, n) {
    "use strict";

    n.r(t);
    var a = {};
    n.r(a), n.d(a, "doAjaxRequest", function () {
      return T;
    });

    var r = n(20),
        o = n(91),
        s = n(42),
        i = n(104),
        c = n(86),
        u = n(54),
        l = n(103),
        d = n(61),
        p = n(46),
        m = n.n(p),
        f = n(0),
        b = n(1),
        h = n.n(b),
        y = n(35),
        v = n(51),
        g = n(115),
        O = n(50),
        j = n(81),
        w = n(176),
        R = n(82),
        k = n(40),
        E = n(28),
        _ = n(53),
        I = n(32);

    function T(e, t, n, a) {
      return new Promise(function (r, o) {
        jQuery.ajax({
          type: e,
          url: t,
          beforeSend: n ? function (e) {
            e.setRequestHeader("X-WP-Nonce", n);
          } : null,
          data: a,
          dataType: "json",
          success: r,
          error: o
        });
      });
    }

    var S = n(84),
        x = n(141),
        C = n(6),
        P = n(19),
        N = n(4),
        q = Object(P.compose)([Object(N.withSelect)(function (e, t) {
      return {
        isAlertDismissed: (0, e(t.store || "yoast-seo/editor").isAlertDismissed)(t.alertKey)
      };
    }), Object(N.withDispatch)(function (e, t) {
      var n = e(t.store || "yoast-seo/editor").dismissAlert;
      return {
        onDismissed: function onDismissed() {
          return n(t.alertKey);
        }
      };
    })])(C.Alert);
    window.yoast = window.yoast || {}, window.yoast.editorModules = {
      analysis: {
        getL10nObject: r.a,
        getContentLocale: o.a,
        getIndicatorForScore: s.a,
        constants: i,
        refreshAnalysis: c
      },
      components: {
        HelpLink: u.a,
        TopLevelProviders: l.a,
        higherorder: {
          withYoastSidebarPriority: function withYoastSidebarPriority(e) {
            var t = function t(_t) {
              _t.renderPriority;
              var n = m()(_t, ["renderPriority"]);
              return Object(f.createElement)(e, n);
            };

            return t.propTypes = {
              renderPriority: h.a.number
            }, t;
          }
        },
        contentAnalysis: {
          mapResults: y
        },
        contexts: {
          location: E
        },
        SidebarItem: I.a,
        SidebarCollapsible: O.a,
        MetaboxCollapsible: v.a,
        Modal: _.a,
        portals: {
          ImageSelectPortal: x.a
        }
      },
      containers: {
        EditorModal: S.a,
        PersistentDismissableAlert: q,
        Results: j.a,
        SEMrushRelatedKeyphrases: g.a
      },
      helpers: {
        ajaxHelper: a,
        createInterpolateElement: w.a,
        isBlockEditor: R.a,
        i18n: d,
        replacementVariableHelpers: k
      }
    };
  },
  36: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return s;
    });
    var a = n(0),
        r = n(1),
        o = n.n(r);

    function s(e) {
      var t = e.target,
          n = e.children,
          r = t;
      return "string" == typeof t && (r = document.getElementById(t)), r ? Object(a.createPortal)(n, r) : null;
    }

    s.propTypes = {
      target: o.a.oneOfType([o.a.string, o.a.object]).isRequired,
      children: o.a.node.isRequired
    };
  },
  39: function _(e, t, n) {
    var a = n(99),
        r = n(100),
        o = n(101);

    e.exports = function (e, t) {
      return a(e) || r(e, t) || o();
    };
  },
  4: function _(e, t) {
    e.exports = window.wp.data;
  },
  40: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "nonReplaceVars", function () {
      return p;
    }), n.d(t, "fillReplacementVariables", function () {
      return m;
    }), n.d(t, "handlePrefixes", function () {
      return f;
    }), n.d(t, "createLabelFromName", function () {
      return b;
    }), n.d(t, "pushNewReplaceVar", function () {
      return h;
    }), n.d(t, "replaceSpaces", function () {
      return y;
    }), n.d(t, "prepareCustomFieldForDispatch", function () {
      return v;
    }), n.d(t, "prepareCustomTaxonomyForDispatch", function () {
      return g;
    }), n.d(t, "mapCustomTaxonomies", function () {
      return O;
    }), n.d(t, "mapCustomFields", function () {
      return j;
    }), n.d(t, "excerptFromContent", function () {
      return w;
    }), n.d(t, "applyReplaceUsingPlugin", function () {
      return R;
    });
    var a = n(10),
        r = n.n(a),
        o = n(2),
        s = n(79),
        i = n(17);

    function c(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }

    function u(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t && (a = a.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, a);
      }

      return n;
    }

    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(n), !0).forEach(function (t) {
          r()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var d = n(9).strings.stripHTMLTags,
        p = ["slug", "content", "contentImage", "snippetPreviewImageURL"];

    function m(e, t) {
      Object(o.forEach)(e, function (e, n) {
        p.includes(n) || t.dispatch(Object(i.l)(n, e));
      });
    }

    function f(e) {
      if (!["ct_", "cf_", "pt_"].includes(e.substr(0, 3))) return e.replace(/_/g, " ");
      var t = e.slice(0, 3);

      switch (-1 !== (e = e.slice(3)).indexOf("desc_") && (e = e.slice(5) + " description"), t) {
        case "ct_":
          e += " (custom taxonomy)";
          break;

        case "cf_":
          e += " (custom field)";
          break;

        case "pt_":
          e = "Post type (" + (e = e.replace("single", "singular")) + ")";
      }

      return e;
    }

    function b(e) {
      return c(e = f(e));
    }

    function h(e, t) {
      return e.push({
        name: t.name,
        label: t.label || b(t.name),
        value: t.value
      }), e;
    }

    function y(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
      return e.replace(/\s/g, t);
    }

    function v(e) {
      return {
        name: "cf_" + y(e),
        label: c(e + " (custom field)")
      };
    }

    function g(e) {
      var t = y(e);
      return {
        name: "ct_" + t,
        label: c(e + " (custom taxonomy)"),
        descriptionName: "ct_desc_" + t,
        descriptionLabel: c(e + " description (custom taxonomy)")
      };
    }

    function O(e, t) {
      return e.custom_taxonomies ? (Object(o.forEach)(e.custom_taxonomies, function (e, n) {
        var a = g(n),
            r = a.name,
            o = a.label,
            s = a.descriptionName,
            c = a.descriptionLabel;
        t.dispatch(Object(i.l)(r, e.name, o)), t.dispatch(Object(i.l)(s, e.description, c));
      }), Object(o.omit)(l({}, e), "custom_taxonomies")) : e;
    }

    function j(e, t) {
      return e.custom_fields ? (Object(o.forEach)(e.custom_fields, function (e, n) {
        var a = v(n),
            r = a.name,
            o = a.label;
        t.dispatch(Object(i.l)(r, e, o));
      }), Object(o.omit)(l({}, e), "custom_fields")) : e;
    }

    function w(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 156;
      return (e = (e = Object(s.stripTags)(e)).trim()).length <= t ? e : (e = e.substring(0, t)).substring(0, e.lastIndexOf(" "));
    }

    var R = function R(e) {
      var t = Object(o.get)(window, ["YoastSEO", "app", "pluggable"], !1);
      if (!t || !Object(o.get)(window, ["YoastSEO", "app", "pluggable", "loaded"], !1)) return function (e) {
        var t = Object(o.get)(window, ["YoastSEO", "wp", "replaceVarsPlugin", "replaceVariables"], o.identity);
        return {
          url: e.url,
          title: d(t(e.title)),
          description: d(t(e.description))
        };
      }(e);

      var n = t._applyModifications.bind(t);

      return {
        url: e.url,
        title: d(n("data_page_title", e.title)),
        description: d(n("data_meta_desc", e.description))
      };
    };
  },
  42: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return s;
    });
    var a = n(3),
        r = n(23),
        o = n(2);

    function s(e) {
      return Object(o.isNil)(e) || (e /= 10), function (e) {
        switch (e) {
          case "feedback":
            return {
              className: "na",
              screenReaderText: Object(a.__)("Feedback", "wordpress-seo"),
              screenReaderReadabilityText: ""
            };

          case "bad":
            return {
              className: "bad",
              screenReaderText: Object(a.__)("Needs improvement", "wordpress-seo"),
              screenReaderReadabilityText: Object(a.__)("Needs improvement", "wordpress-seo")
            };

          case "ok":
            return {
              className: "ok",
              screenReaderText: Object(a.__)("OK SEO score", "wordpress-seo"),
              screenReaderReadabilityText: Object(a.__)("OK", "wordpress-seo")
            };

          case "good":
            return {
              className: "good",
              screenReaderText: Object(a.__)("Good SEO score", "wordpress-seo"),
              screenReaderReadabilityText: Object(a.__)("Good", "wordpress-seo")
            };

          default:
            return {
              className: "loading",
              screenReaderText: "",
              screenReaderReadabilityText: ""
            };
        }
      }(r.interpreters.scoreToRating(e));
    }
  },
  46: function _(e, t, n) {
    var a = n(102);

    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
          r,
          o = a(e, t);

      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);

        for (r = 0; r < s.length; r++) {
          n = s[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        }
      }

      return o;
    };
  },
  47: function _(e, t) {
    function n(e, t, n, a, r, o, s) {
      try {
        var i = e[o](s),
            c = i.value;
      } catch (e) {
        return void n(e);
      }

      i.done ? t(c) : Promise.resolve(c).then(a, r);
    }

    e.exports = function (e) {
      return function () {
        var t = this,
            a = arguments;
        return new Promise(function (r, o) {
          var s = e.apply(t, a);

          function i(e) {
            n(s, r, o, i, c, "next", e);
          }

          function c(e) {
            n(s, r, o, i, c, "throw", e);
          }

          i(void 0);
        });
      };
    };
  },
  5: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  },
  50: function _(e, t, n) {
    "use strict";

    var a = n(39),
        r = n.n(a),
        o = n(0),
        s = n(6),
        i = n(1),
        c = n.n(i),
        u = function u(e) {
      var t = Object(o.useState)(!1),
          n = r()(t, 2),
          a = n[0],
          i = n[1],
          c = e.prefixIcon;
      return Object(o.createElement)("div", {
        className: "yoast components-panel__body ".concat(a ? "is-opened" : "")
      }, Object(o.createElement)("h2", {
        className: "components-panel__body-title"
      }, Object(o.createElement)("button", {
        onClick: function onClick() {
          i(!a);
        },
        className: "components-button components-panel__body-toggle"
      }, Object(o.createElement)("span", {
        className: "yoast-icon-span",
        style: {
          fill: "".concat(c && c.color || "")
        }
      }, c && Object(o.createElement)(s.SvgIcon, {
        icon: c.icon,
        color: c.color,
        size: c.size
      })), Object(o.createElement)("span", {
        className: "yoast-title-container"
      }, Object(o.createElement)("div", {
        className: "yoast-title"
      }, e.title), Object(o.createElement)("div", {
        className: "yoast-subtitle"
      }, e.subTitle)), Object(o.createElement)("span", {
        className: "yoast-chevron",
        "aria-hidden": "true"
      }))), a && e.children);
    };

    t.a = u, u.propTypes = {
      title: c.a.string.isRequired,
      children: c.a.oneOfType([c.a.node, c.a.arrayOf(c.a.node)]).isRequired,
      prefixIcon: c.a.object,
      subTitle: c.a.string
    }, u.defaultProps = {
      prefixIcon: null,
      subTitle: ""
    };
  },
  51: function _(e, t, n) {
    "use strict";

    var a,
        r = n(27),
        o = n.n(r),
        s = n(15),
        i = n.n(s),
        c = n(0),
        u = n(6),
        l = n(12),
        d = n.n(l)()(u.Collapsible)(a || (a = i()(['\n\th2 > button {\n\t\tpadding-left: 24px;\n\t\tpadding-top: 16px;\n\n\t\t&:hover {\n\t\t\tbackground-color: #f0f0f0;\n\t\t}\n\t}\n\n\tdiv[class^="collapsible_content"] {\n\t\tpadding: 24px 0;\n\t\tmargin: 0 24px;\n\t\tborder-top: 1px solid rgba(0,0,0,0.2);\n\t}\n\n'])));

    t.a = function (e) {
      return Object(c.createElement)(d, o()({
        hasPadding: !0,
        hasSeparator: !0
      }, e));
    };
  },
  52: function _(e, t) {
    e.exports = window.wp.url;
  },
  53: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return d;
    });

    var a = n(27),
        r = n.n(a),
        o = n(46),
        s = n.n(o),
        i = n(0),
        c = n(1),
        u = n.n(c),
        l = n(18),
        d = "yoast yoast-gutenberg-modal",
        p = function p(e) {
      var t = e.title,
          n = e.className,
          a = e.showYoastIcon,
          o = e.additionalClassName,
          c = s()(e, ["title", "className", "showYoastIcon", "additionalClassName"]),
          u = a ? Object(i.createElement)("span", {
        className: "yoast-icon"
      }) : null;
      return Object(i.createElement)(l.Modal, r()({
        title: t,
        className: "".concat(n, " ").concat(o),
        icon: u
      }, c), e.children);
    };

    p.propTypes = {
      title: u.a.string,
      className: u.a.string,
      showYoastIcon: u.a.bool,
      children: u.a.oneOfType([u.a.node, u.a.arrayOf(u.a.node)]),
      additionalClassName: u.a.string
    }, p.defaultProps = {
      title: "Yoast SEO",
      className: d,
      showYoastIcon: !0,
      children: null,
      additionalClassName: ""
    }, t.a = p;
  },
  54: function _(e, t, n) {
    "use strict";

    var a,
        r = n(15),
        o = n.n(r),
        s = n(24),
        i = n(9),
        c = n(12),
        u = n.n(c),
        l = Object(i.makeOutboundLink)(u.a.a(a || (a = o()(["\n\tdisplay: inline-block;\n\tposition: relative;\n\toutline: none;\n\ttext-decoration: none;\n\tborder-radius: 100%;\n\twidth: 24px;\n\theight: 24px;\n\tmargin: -4px 0;\n\tvertical-align: middle;\n\n\tcolor: ", ";\n\t\n\t&:hover,\n\t&:focus {\n\t\tcolor: ", ";\t\n\t}\n\t\n\t// Overwrite the default blue active color for links.\n\t&:active {\n\t\tcolor: ", ';\t\n\t}\n\n\t&::before {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tpadding: 2px;\n\t\tcontent: "\f223";\n\t}\n'], ["\n\tdisplay: inline-block;\n\tposition: relative;\n\toutline: none;\n\ttext-decoration: none;\n\tborder-radius: 100%;\n\twidth: 24px;\n\theight: 24px;\n\tmargin: -4px 0;\n\tvertical-align: middle;\n\n\tcolor: ", ";\n\t\n\t&:hover,\n\t&:focus {\n\t\tcolor: ", ";\t\n\t}\n\t\n\t// Overwrite the default blue active color for links.\n\t&:active {\n\t\tcolor: ", ';\t\n\t}\n\n\t&::before {\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tpadding: 2px;\n\t\tcontent: "\\f223";\n\t}\n'])), s.colors.$color_help_text, s.colors.$color_snippet_focus, s.colors.$color_help_text));
    t.a = l;
  },
  6: function _(e, t) {
    e.exports = window.yoast.componentsNew;
  },
  61: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "setTextdomainL10n", function () {
      return o;
    }), n.d(t, "setYoastComponentsL10n", function () {
      return s;
    }), n.d(t, "setWordPressSeoL10n", function () {
      return i;
    });
    var a = n(3),
        r = n(2);

    function o(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wpseoYoastJSL10n",
          n = Object(r.get)(window, [t, e, "locale_data", e], !1);
      !1 === n ? Object(a.setLocaleData)({
        "": {}
      }, e) : Object(a.setLocaleData)(n, e);
    }

    function s() {
      o("yoast-components");
    }

    function i() {
      o("wordpress-seo");
    }
  },
  64: function _(e, t) {
    e.exports = window.wp.apiFetch;
  },
  7: function _(e, t) {
    function n(e, t) {
      for (var n = 0; n < t.length; n++) {
        var a = t[n];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
      }
    }

    e.exports = function (e, t, a) {
      return t && n(e.prototype, t), a && n(e, a), e;
    };
  },
  70: function _(e, t) {
    function n(t, a) {
      return e.exports = n = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, n(t, a);
    }

    e.exports = n;
  },
  72: function _(e, t, n) {
    "use strict";

    function a() {}

    n.d(t, "a", function () {
      return a;
    });
  },
  79: function _(e, t) {
    e.exports = window.wp.sanitize;
  },
  8: function _(e, t) {
    function n(t) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, n(t);
    }

    e.exports = n;
  },
  81: function _(e, t, n) {
    "use strict";

    var a = n(4),
        r = n(19),
        o = n(5),
        s = n.n(o),
        i = n(7),
        c = n.n(i),
        u = n(11),
        l = n.n(u),
        d = n(13),
        p = n.n(d),
        m = n(14),
        f = n.n(m),
        b = n(8),
        h = n.n(b),
        y = n(0),
        v = n(1),
        g = n.n(v),
        O = n(95),
        j = n(23),
        w = n(35);

    var R = function (e) {
      p()(r, e);
      var t,
          n,
          a = (t = r, n = function () {
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
            a = h()(t);

        if (n) {
          var r = h()(this).constructor;
          e = Reflect.construct(a, arguments, r);
        } else e = a.apply(this, arguments);

        return f()(this, e);
      });

      function r(e) {
        var t;
        s()(this, r);
        var n = (t = a.call(this, e)).props.results;
        return t.state = {
          mappedResults: {}
        }, null !== n && (t.state = {
          mappedResults: Object(w["default"])(n, t.props.keywordKey)
        }), t.handleMarkButtonClick = t.handleMarkButtonClick.bind(l()(t)), t;
      }

      return c()(r, [{
        key: "componentDidUpdate",
        value: function value(e) {
          null !== this.props.results && this.props.results !== e.results && this.setState({
            mappedResults: Object(w["default"])(this.props.results, this.props.keywordKey)
          });
        }
      }, {
        key: "handleMarkButtonClick",
        value: function value(e, t) {
          var n = this.props.keywordKey.length > 0 ? "".concat(this.props.keywordKey, ":").concat(e) : e;
          n === this.props.activeMarker ? (this.props.setActiveMarker(null), this.props.setMarkerPauseStatus(!1), this.removeMarkers()) : (this.props.setActiveMarker(n), t());
        }
      }, {
        key: "removeMarkers",
        value: function value() {
          window.YoastSEO.analysis.applyMarks(new j.Paper("", {}), []);
        }
      }, {
        key: "render",
        value: function value() {
          var e = this.state.mappedResults,
              t = e.errorsResults,
              n = e.improvementsResults,
              a = e.goodResults,
              r = e.considerationsResults,
              o = e.problemsResults;
          return Object(y.createElement)(y.Fragment, null, Object(y.createElement)(O.ContentAnalysis, {
            errorsResults: t,
            problemsResults: o,
            improvementsResults: n,
            considerationsResults: r,
            goodResults: a,
            activeMarker: this.props.activeMarker,
            onMarkButtonClick: this.handleMarkButtonClick,
            marksButtonClassName: this.props.marksButtonClassName,
            marksButtonStatus: this.props.marksButtonStatus,
            headingLevel: 3,
            keywordKey: this.props.keywordKey
          }));
        }
      }]), r;
    }(y.Component);

    R.propTypes = {
      results: g.a.array,
      marksButtonClassName: g.a.string,
      marksButtonStatus: g.a.string,
      setActiveMarker: g.a.func.isRequired,
      setMarkerPauseStatus: g.a.func.isRequired,
      activeMarker: g.a.string,
      keywordKey: g.a.string
    }, R.defaultProps = {
      results: null,
      marksButtonStatus: "enabled",
      marksButtonClassName: "",
      activeMarker: null,
      keywordKey: ""
    };
    var k = R;
    t.a = Object(r.compose)([Object(a.withSelect)(function (e) {
      return {
        activeMarker: (0, e("yoast-seo/editor").getActiveMarker)()
      };
    }), Object(a.withDispatch)(function (e) {
      var t = e("yoast-seo/editor");
      return {
        setActiveMarker: t.setActiveMarker,
        setMarkerPauseStatus: t.setMarkerPauseStatus
      };
    })])(k);
  },
  82: function _(e, t, n) {
    "use strict";

    function a() {
      return window.wpseoScriptData && "1" === window.wpseoScriptData.isBlockEditor;
    }

    n.d(t, "a", function () {
      return a;
    });
  },
  84: function _(e, t, n) {
    "use strict";

    var a = n(19),
        r = n(4),
        o = n(92);
    t.a = Object(a.compose)([Object(r.withSelect)(function (e, t) {
      var n = e("yoast-seo/editor"),
          a = n.getPostOrPageString,
          r = n.getIsModalOpen;
      return {
        postTypeName: a(),
        isOpen: r(t.id)
      };
    }), Object(r.withDispatch)(function (e, t) {
      var n = e("yoast-seo/editor"),
          a = n.openEditorModal;
      return {
        open: function open() {
          return a(t.id);
        },
        close: n.closeEditorModal
      };
    })])(o.a);
  },
  86: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "sortResultsByIdentifier", function () {
      return i;
    }), n.d(t, "default", function () {
      return c;
    }), n.d(t, "initializationDone", function () {
      return u;
    });
    var a = n(22),
        r = n(17),
        o = n(72),
        s = !1;

    function i(e) {
      return e.sort(function (e, t) {
        return e._identifier.localeCompare(t._identifier);
      });
    }

    function c(e, t, n, c, u) {
      var l = t();
      s && e.analyze(l).then(function (e) {
        var t = e.result,
            o = t.seo,
            s = t.readability;

        if (o) {
          var d = o[""];
          d.results.forEach(function (e) {
            e.getMarker = function () {
              return function () {
                return n(l, e.marks);
              };
            };
          }), d.results = i(d.results), c.dispatch(Object(a.setSeoResultsForKeyword)(l.getKeyword(), d.results)), c.dispatch(Object(a.setOverallSeoScore)(d.score, l.getKeyword())), c.dispatch(Object(r.h)()), u.saveScores(d.score, l.getKeyword());
        }

        s && (s.results.forEach(function (e) {
          e.getMarker = function () {
            return function () {
              return n(l, e.marks);
            };
          };
        }), s.results = i(s.results), c.dispatch(Object(a.setReadabilityResults)(s.results)), c.dispatch(Object(a.setOverallReadabilityScore)(s.score)), c.dispatch(Object(r.h)()), u.saveContentScore(s.score));
      })["catch"](o.a);
    }

    function u() {
      s = !0;
    }
  },
  87: function _(e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = new Array(e.length); t < e.length; t++) {
          n[t] = e[t];
        }

        return n;
      }
    };
  },
  88: function _(e, t) {
    e.exports = function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    };
  },
  89: function _(e, t) {
    e.exports = function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    };
  },
  9: function _(e, t) {
    e.exports = window.yoast.helpers;
  },
  90: function _(e, t, n) {
    "use strict";

    function a(e) {
      return function (e) {
        var t = null;
        return (t = window.wp.media()).on("select", function () {
          var n = t.state().get("selection").first(),
              a = {
            type: n.attributes.subtype,
            width: n.attributes.width,
            height: n.attributes.height,
            url: n.attributes.url,
            id: n.attributes.id
          };
          e(a);
        }), t;
      }(e).open();
    }

    n.d(t, "a", function () {
      return a;
    });
  },
  91: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });
    var a = n(2),
        r = n(20);

    function o() {
      var e = Object(r.a)();
      return Object(a.get)(e, "contentLocale", "en_US");
    }
  },
  92: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return p;
    });

    var a = n(0),
        r = n(3),
        o = n(53),
        s = n(1),
        i = n.n(s),
        c = n(6),
        u = function u(e) {
      return Object(a.createElement)("div", {
        className: "yoast components-panel__body"
      }, Object(a.createElement)("h2", {
        className: "components-panel__body-title"
      }, Object(a.createElement)("button", {
        id: e.id,
        onClick: e.onClick,
        className: "components-button components-panel__body-toggle"
      }, Object(a.createElement)("span", {
        className: "yoast-title-container"
      }, Object(a.createElement)("div", {
        className: "yoast-title"
      }, e.title), Object(a.createElement)("div", {
        className: "yoast-subtitle"
      }, e.subTitle)), e.suffixIcon && Object(a.createElement)(c.SvgIcon, {
        size: e.suffixIcon.size,
        icon: e.suffixIcon.icon
      }))));
    },
        l = u;

    u.propTypes = {
      onClick: i.a.func.isRequired,
      title: i.a.string.isRequired,
      id: i.a.string,
      subTitle: i.a.string,
      suffixIcon: i.a.object
    }, u.defaultProps = {
      id: "",
      suffixIcon: null,
      subTitle: ""
    };

    var d = n(28),
        p = function p(e) {
      return "blur" !== e.type || !(!e.relatedTarget || !e.relatedTarget.querySelector(".components-modal__screen-overlay"));
    },
        m = function m(e) {
      var t = e.id,
          n = e.postTypeName,
          s = e.children,
          i = e.title,
          c = e.isOpen,
          u = e.close,
          m = e.open,
          f = Object(a.useCallback)(function (e) {
        p(e) && u();
      }, [u]);
      return Object(a.createElement)(a.Fragment, null, c && Object(a.createElement)(d.LocationProvider, {
        value: "modal"
      }, Object(a.createElement)(o.a, {
        title: i,
        onRequestClose: f,
        additionalClassName: "yoast-collapsible-modal yoast-post-settings-modal"
      }, Object(a.createElement)("div", {
        className: "yoast-content-container"
      }, Object(a.createElement)("div", {
        className: "yoast-modal-content"
      }, s)), Object(a.createElement)("div", {
        className: "yoast-notice-container"
      }, Object(a.createElement)("hr", null), Object(a.createElement)("div", {
        className: "yoast-button-container"
      }, Object(a.createElement)("p", null,
      /* Translators: %s translates to the Post Label in singular form */
      Object(r.sprintf)(Object(r.__)("Make sure to save your %s for changes to take effect", "wordpress-seo"), n)), Object(a.createElement)("button", {
        className: "yoast-button yoast-button--primary yoast-button--post-settings-modal",
        type: "button",
        onClick: f
      },
      /* Translators: %s translates to the Post Label in singular form */
      Object(r.sprintf)(Object(r.__)("Return to your %s", "wordpress-seo"), n)))))), Object(a.createElement)(l, {
        id: t + "-open-button",
        title: i,
        suffixIcon: {
          size: "20px",
          icon: "pencil-square"
        },
        onClick: m
      }));
    };

    m.propTypes = {
      id: i.a.string.isRequired,
      postTypeName: i.a.string.isRequired,
      children: i.a.oneOfType([i.a.node, i.a.arrayOf(i.a.node)]).isRequired,
      title: i.a.string.isRequired,
      isOpen: i.a.bool.isRequired,
      open: i.a.func.isRequired,
      close: i.a.func.isRequired
    }, t.a = m;
  },
  95: function _(e, t) {
    e.exports = window.yoast.analysisReport;
  },
  99: function _(e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) return e;
    };
  }
});