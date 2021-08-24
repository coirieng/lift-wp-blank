"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
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
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(r, i, function (t) {
        return e[t];
      }.bind(null, i));
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
  }, n.p = "", n(n.s = 349);
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
  102: function _(e, t) {
    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
          r,
          i = {},
          a = Object.keys(e);

      for (r = 0; r < a.length; r++) {
        n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      }

      return i;
    };
  },
  11: function _(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    };
  },
  110: function _(e, t, n) {
    "use strict";

    function r(e) {
      var t = e.alertKey;
      return new Promise(function (e) {
        return wpseoApi.post("alerts/dismiss", {
          key: t
        }, function () {
          return e();
        });
      });
    }

    n.r(t), n.d(t, "DISMISS_ALERT", function () {
      return r;
    });
  },
  112: function _(e, t, n) {
    "use strict";

    var r,
        i = n(15),
        a = n.n(i),
        o = n(0),
        c = n(1),
        u = n.n(c),
        s = n(12),
        l = n.n(s),
        d = n(6),
        p = n(9),
        f = l()(d.StyledSection)(r || (r = a()(["\n\t&", " {\n\t\tpadding: 0;\n\n\t\t& ", " {\n\t\t\t", ": 20px;\n\t\t\tmargin-left: ", ";\n\t\t}\n\t}\n"])), d.StyledSectionBase, d.StyledHeading, Object(p.getDirectionalStyle)("padding-left", "padding-right"), Object(p.getDirectionalStyle)("0", "20px")),
        g = function g(e) {
      var t = e.children,
          n = e.title,
          r = e.icon,
          i = e.hasPaperStyle,
          a = e.shoppingData;
      return Object(o.createElement)(f, {
        headingLevel: 3,
        headingText: n,
        headingIcon: r,
        headingIconColor: "#555",
        hasPaperStyle: i,
        shoppingData: a
      }, t);
    };

    g.propTypes = {
      children: u.a.element,
      title: u.a.string,
      icon: u.a.string,
      hasPaperStyle: u.a.bool,
      shoppingData: u.a.object
    }, g.defaultProps = {
      hasPaperStyle: !0,
      shoppingData: null
    }, t.a = g;
  },
  113: function _(e, t, n) {
    "use strict";

    var r = n(10),
        i = n.n(r),
        a = n(2),
        o = n(69);

    function c(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function u(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? c(Object(n), !0).forEach(function (t) {
          i()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var s = Object(a.get)(window, "wpseoScriptData.dismissedAlerts", {});

    t.a = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          t = arguments.length > 1 ? arguments[1] : void 0;
      return t.type === o.b && t.alertKey ? u(u({}, e), {}, i()({}, t.alertKey, !0)) : e;
    };
  },
  114: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return u;
    });
    var r = n(10),
        i = n.n(r),
        a = n(43);

    function o(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function c(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? o(Object(n), !0).forEach(function (t) {
          i()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function u() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case a.b:
          return c(c({}, e), t.settings);

        case a.a:
          var n = Object.assign({}, e.socialPreviews, {
            contentImage: t.src
          });
          return c(c({}, e), {}, {
            socialPreviews: c({}, n)
          });

        default:
          return e;
      }
    }
  },
  116: function _(e, t, n) {
    "use strict";

    var r = n(10),
        i = n.n(r),
        a = n(3),
        o = n(17),
        c = n(40);

    function u(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? u(Object(n), !0).forEach(function (t) {
          i()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function l() {
      return {
        mode: "mobile",
        data: {
          title: "",
          description: "",
          slug: ""
        },
        wordsToHighlight: [],
        replacementVariables: [{
          name: "date",
          label: Object(a.__)("Date", "wordpress-seo"),
          value: ""
        }, {
          name: "id",
          label: Object(a.__)("ID", "wordpress-seo"),
          value: ""
        }, {
          name: "page",
          label: Object(a.__)("Page", "wordpress-seo"),
          value: ""
        }, {
          name: "searchphrase",
          label: Object(a.__)("Search phrase", "wordpress-seo"),
          value: ""
        }, {
          name: "sitedesc",
          label: Object(a.__)("Tagline", "wordpress-seo"),
          value: ""
        }, {
          name: "sitename",
          label: Object(a.__)("Site title", "wordpress-seo"),
          value: ""
        }, {
          name: "category",
          label: Object(a.__)("Category", "wordpress-seo"),
          value: ""
        }, {
          name: "focuskw",
          label: Object(a.__)("Focus keyphrase", "wordpress-seo"),
          value: ""
        }, {
          name: "title",
          label: Object(a.__)("Title", "wordpress-seo"),
          value: ""
        }, {
          name: "parent_title",
          label: Object(a.__)("Parent title", "wordpress-seo"),
          value: ""
        }, {
          name: "excerpt",
          label: Object(a.__)("Excerpt", "wordpress-seo"),
          value: ""
        }, {
          name: "primary_category",
          label: Object(a.__)("Primary category", "wordpress-seo"),
          value: ""
        }, {
          name: "sep",
          label: Object(a.__)("Separator", "wordpress-seo"),
          value: ""
        }, {
          name: "excerpt_only",
          label: Object(a.__)("Excerpt only", "wordpress-seo"),
          value: ""
        }, {
          name: "category_description",
          label: Object(a.__)("Category description", "wordpress-seo"),
          value: ""
        }, {
          name: "tag_description",
          label: Object(a.__)("Tag description", "wordpress-seo"),
          value: ""
        }, {
          name: "term_description",
          label: Object(a.__)("Term description", "wordpress-seo"),
          value: ""
        }, {
          name: "currentyear",
          label: Object(a.__)("Current year", "wordpress-seo"),
          value: ""
        }],
        uniqueRefreshValue: "",
        templates: {
          title: "",
          description: ""
        },
        isLoading: !0
      };
    }

    t.a = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l(),
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case o.d:
          return s(s({}, e), {}, {
            mode: t.mode
          });

        case o.e:
          return s(s({}, e), {}, {
            data: s(s({}, e.data), t.data)
          });

        case o.f:
          var n = !0,
              r = e.replacementVariables.map(function (e) {
            return e.name === t.name ? (n = !1, {
              name: t.name,
              label: t.label || e.label,
              value: t.value
            }) : e;
          });
          return n && (r = Object(c.pushNewReplaceVar)(r, t)), s(s({}, e), {}, {
            replacementVariables: r
          });

        case o.c:
          return s(s({}, e), {}, {
            replacementVariables: e.replacementVariables.filter(function (e) {
              return e.name !== t.name;
            })
          });

        case o.b:
          return s(s({}, e), {}, {
            uniqueRefreshValue: t.time
          });

        case o.g:
          return s(s({}, e), {}, {
            wordsToHighlight: t.wordsToHighlight
          });

        case o.a:
          return s(s({}, e), {}, {
            data: s(s({}, e.data), {}, {
              title: t.data.title,
              description: t.data.description,
              slug: t.data.slug
            }),
            templates: s(s({}, e.templates), {}, {
              title: t.templates.title,
              description: t.templates.description
            }),
            isLoading: !1
          });
      }

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
  130: function _(e, t, n) {
    "use strict";

    var r = n(16),
        i = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
        a = n(94),
        o = n(131),
        c = n(132),
        u = "function" == typeof Symbol && Symbol.iterator;

    function s(e, t) {
      return e && "object" == _typeof(e) && null != e.key ? (n = e.key, r = {
        "=": "=0",
        ":": "=2"
      }, "$" + ("" + n).replace(/[=:]/g, function (e) {
        return r[e];
      })) : t.toString(36);
      var n, r;
    }

    var l = /\/+/g;

    function d(e) {
      return ("" + e).replace(l, "$&/");
    }

    var p,
        f,
        g = m,
        m = function m(e) {
      if (this.instancePool.length) {
        var t = this.instancePool.pop();
        return this.call(t, e), t;
      }

      return new this(e);
    };

    function h(e, t, n, r) {
      this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0;
    }

    function b(e, t, n) {
      var i,
          o,
          c = e.result,
          u = e.keyPrefix,
          s = e.func,
          l = e.context,
          p = s.call(l, t, e.count++);
      Array.isArray(p) ? y(p, c, n, a.thatReturnsArgument) : null != p && (r.isValidElement(p) && (i = p, o = u + (!p.key || t && t.key === p.key ? "" : d(p.key) + "/") + n, p = r.cloneElement(i, {
        key: o
      }, void 0 !== i.props ? i.props.children : void 0)), c.push(p));
    }

    function y(e, t, n, r, a) {
      var c = "";
      null != n && (c = d(n) + "/");
      var l = h.getPooled(t, c, r, a);
      !function (e, t, n) {
        null == e || function e(t, n, r, a) {
          var c,
              l = _typeof(t);

          if ("undefined" !== l && "boolean" !== l || (t = null), null === t || "string" === l || "number" === l || "object" === l && t.$$typeof === i) return r(a, t, "" === n ? "." + s(t, 0) : n), 1;
          var d = 0,
              p = "" === n ? "." : n + ":";
          if (Array.isArray(t)) for (var f = 0; f < t.length; f++) {
            d += e(c = t[f], p + s(c, f), r, a);
          } else {
            var g = function (e) {
              var t = e && (u && e[u] || e["@@iterator"]);
              if ("function" == typeof t) return t;
            }(t);

            if (g) for (var m, h = g.call(t), b = 0; !(m = h.next()).done;) {
              d += e(c = m.value, p + s(c, b++), r, a);
            } else if ("object" === l) {
              var y = "" + t;
              o(!1, "Objects are not valid as a React child (found: %s).%s", "[object Object]" === y ? "object with keys {" + Object.keys(t).join(", ") + "}" : y, "");
            }
          }
          return d;
        }(e, "", t, n);
      }(e, b, l), h.release(l);
    }

    h.prototype.destructor = function () {
      this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0;
    }, p = function p(e, t, n, r) {
      if (this.instancePool.length) {
        var i = this.instancePool.pop();
        return this.call(i, e, t, n, r), i;
      }

      return new this(e, t, n, r);
    }, (f = h).instancePool = [], f.getPooled = p || g, f.poolSize || (f.poolSize = 10), f.release = function (e) {
      o(e instanceof this, "Trying to release an instance into a pool of a different type."), e.destructor(), this.instancePool.length < this.poolSize && this.instancePool.push(e);
    }, e.exports = function (e) {
      if ("object" != _typeof(e) || !e || Array.isArray(e)) return c(!1, "React.addons.createFragment only accepts a single object. Got: %s", e), e;
      if (r.isValidElement(e)) return c(!1, "React.addons.createFragment does not accept a ReactElement without a wrapper object."), e;
      o(1 !== e.nodeType, "React.addons.createFragment(...): Encountered an invalid child; DOM elements are not valid children of React components.");
      var t = [];

      for (var n in e) {
        y(e[n], t, n, a.thatReturnsArgument);
      }

      return t;
    };
  },
  131: function _(e, t, n) {
    "use strict";

    e.exports = function (e, t, n, r, i, a, o, c) {
      if (!e) {
        var u;
        if (void 0 === t) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
          var s = [n, r, i, a, o, c],
              l = 0;
          (u = new Error(t.replace(/%s/g, function () {
            return s[l++];
          }))).name = "Invariant Violation";
        }
        throw u.framesToPop = 1, u;
      }
    };
  },
  132: function _(e, t, n) {
    "use strict";

    var r = n(94);
    e.exports = r;
  },
  133: function _(e, t, n) {
    "use strict";

    function r(e) {
      return e.match(/^\{\{\//) ? {
        type: "componentClose",
        value: e.replace(/\W/g, "")
      } : e.match(/\/\}\}$/) ? {
        type: "componentSelfClosing",
        value: e.replace(/\W/g, "")
      } : e.match(/^\{\{/) ? {
        type: "componentOpen",
        value: e.replace(/\W/g, "")
      } : {
        type: "string",
        value: e
      };
    }

    e.exports = function (e) {
      return e.split(/(\{\{\/?\s*\w+\s*\/?\}\})/g).map(r);
    };
  },
  14: function _(e, t, n) {
    var r = n(34),
        i = n(11);

    e.exports = function (e, t) {
      return !t || "object" !== r(t) && "function" != typeof t ? i(e) : t;
    };
  },
  141: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return T;
    });
    var r = n(0),
        i = n(1),
        a = n.n(i),
        o = n(5),
        c = n.n(o),
        u = n(7),
        s = n.n(u),
        l = n(11),
        d = n.n(l),
        p = n(13),
        f = n.n(p),
        g = n(14),
        m = n.n(g),
        h = n(8),
        b = n.n(h),
        y = n(6),
        E = n(9),
        v = n(90);

    var O = function (e) {
      f()(a, e);
      var t,
          n,
          i = (t = a, n = function () {
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
          var i = b()(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);

        return m()(this, e);
      });

      function a(e) {
        var t;
        return c()(this, a), (t = i.call(this, e)).hiddenField = document.getElementById(t.props.hiddenField), t.hiddenFieldImageId = document.getElementById(t.props.hiddenFieldImageId), t.state = {
          imageUrl: t.getInitialValue(),
          imageId: t.getInitialId(),
          warnings: []
        }, t.setMyImageUrl = t.setMyImageUrl.bind(d()(t)), t.setMyImageId = t.setMyImageId.bind(d()(t)), t.onClick = t.onClick.bind(d()(t)), t.removeImage = t.removeImage.bind(d()(t)), t.setWarnings = t.setWarnings.bind(d()(t)), t;
      }

      return s()(a, [{
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
          Object(v.a)(function (t) {
            e.props.hasImageValidation && e.setWarnings(Object(E.validateFacebookImage)(t)), e.setMyImageUrl(t.url), null !== e.hiddenFieldImageId && e.setMyImageId(t.id);
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
          return Object(r.createElement)(y.ImageSelect, {
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
      }]), a;
    }(r.Component);

    O.propTypes = {
      hiddenField: a.a.string.isRequired,
      hiddenFieldImageId: a.a.string,
      label: a.a.string,
      hasPreview: a.a.bool,
      selectImageButtonId: a.a.string,
      replaceImageButtonId: a.a.string,
      removeImageButtonId: a.a.string,
      hasNewBadge: a.a.bool,
      isDisabled: a.a.bool,
      hasPremiumBadge: a.a.bool,
      hasImageValidation: a.a.bool
    }, O.defaultProps = {
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

    var w = O,
        _ = n(36);

    function T(e) {
      var t = e.target,
          n = e.label,
          i = e.hasPreview,
          a = e.hiddenField,
          o = e.hiddenFieldImageId,
          c = e.selectImageButtonId,
          u = e.replaceImageButtonId,
          s = e.removeImageButtonId,
          l = e.hasNewBadge,
          d = e.isDisabled,
          p = e.hasPremiumBadge,
          f = e.hasImageValidation;
      return Object(r.createElement)(_.a, {
        target: t
      }, Object(r.createElement)(w, {
        label: n,
        hasPreview: i,
        hiddenField: a,
        hiddenFieldImageId: o,
        selectImageButtonId: c,
        replaceImageButtonId: u,
        removeImageButtonId: s,
        hasNewBadge: l,
        isDisabled: d,
        hasPremiumBadge: p,
        hasImageValidation: f
      }));
    }

    T.propTypes = {
      target: a.a.string.isRequired,
      label: a.a.string.isRequired,
      hasPreview: a.a.bool.isRequired,
      hiddenField: a.a.string.isRequired,
      hiddenFieldImageId: a.a.string,
      selectImageButtonId: a.a.string,
      replaceImageButtonId: a.a.string,
      removeImageButtonId: a.a.string,
      hasNewBadge: a.a.bool,
      isDisabled: a.a.bool,
      hasPremiumBadge: a.a.bool,
      hasImageValidation: a.a.bool
    }, T.defaultProps = {
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
  154: function _(e, t, n) {
    "use strict";

    function r(e) {
      e(document).ready(function (e) {
        void 0 !== wp.media && e(".wpseo_image_upload_button").each(function (t, n) {
          var r,
              i,
              a = ((i = (r = e(r = n)).data("target")) && "" !== i || (i = e(r).attr("id").replace(/_button$/, "")), i),
              o = function (t) {
            return (t = e(t)).data("target-id");
          }(n),
              c = e("#" + a),
              u = e("#" + o),
              s = wp.media.frames.file_frame = wp.media({
            title: wpseoScriptData.media.choose_image,
            button: {
              text: wpseoScriptData.media.choose_image
            },
            multiple: !1,
            library: {
              type: "image"
            }
          });

          s.on("select", function () {
            var e = s.state().get("selection").first().toJSON();
            c.val(e.url), u.val(e.id);
          });
          var l = e(n);
          l.click(function (e) {
            e.preventDefault(), s.open();
          }), l.siblings(".wpseo_image_remove_button").on("click", function (e) {
            e.preventDefault(), c.val(""), u.val("");
          });
        });
      });
    }

    n.d(t, "a", function () {
      return r;
    });
  },
  155: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });
    var r = n(80),
        i = n.n(r),
        a = n(2);

    function o(e) {
      function t(t) {
        var n = !1,
            r = "",
            a = [],
            o = ["userid", "name", "user_description"],
            c = ["date"],
            u = ["title", "parent_title", "excerpt", "excerpt_only", "caption", "focuskw", "pt_single", "pt_plural", "modified", "id"],
            s = ["term404", "searchphrase"],
            l = ["term_title", "term_description"],
            d = ["category", "category_description", "tag", "tag_description"];
        t.hasClass("posttype-template") ? a = a.concat(s, l) : t.hasClass("homepage-template") ? a = a.concat(o, c, u, s, l, d) : t.hasClass("taxonomy-template") ? a = a.concat(o, c, u, s) : t.hasClass("author-template") ? a = a.concat(u, c, s, l, d) : t.hasClass("date-template") ? a = a.concat(o, u, s, l, d) : t.hasClass("search-template") ? a = a.concat(o, c, u, l, d, ["term404"]) : t.hasClass("error404-template") && (a = a.concat(o, c, u, l, d, ["searchphrase"])), e.each(a, function (a, o) {
          if (r = t.attr("id") + "-" + o + "-warning", -1 !== t.val().search("%%" + o + "%%")) {
            t.addClass("wpseo-variable-warning-element");
            var c = wpseoAdminGlobalL10n.variable_warning.replace("%s", "%%" + o + "%%");
            e("#" + r).length ? e("#" + r).html(c) : t.after(' <div id="' + r + '" class="wpseo-variable-warning">' + c + "</div>"), i()(wpseoAdminGlobalL10n.variable_warning.replace("%s", o), "assertive"), n = !0;
          } else e("#" + r).length && e("#" + r).remove();
        }), !1 === n && t.removeClass("wpseo-variable-warning-element");
      }

      function n() {
        e("#copy-home-meta-description").on("click", function () {
          e("#open_graph_frontpage_desc").val(e("#meta_description").val());
        });
      }

      function r() {
        var t = e("#wpseo-conf");

        if (t.length) {
          var n = t.attr("action").split("#")[0];
          t.attr("action", n + window.location.hash);
        }
      }

      function o(t) {
        var n = e("#noindex-author-noposts-wpseo-container");
        t ? n.show() : n.hide();
      }

      e.fn._wpseoIsInViewport = function () {
        var t = e(this).offset().top,
            n = t + e(this).outerHeight(),
            r = e(window).scrollTop(),
            i = r + e(window).height();
        return t > r && n < i;
      }, e(window).on("hashchange", r), window.wpseoDetectWrongVariables = t, window.setWPOption = function (t, n, r, i) {
        e.post(ajaxurl, {
          action: "wpseo_set_option",
          option: t,
          newval: n,
          _wpnonce: i
        }, function (t) {
          t && e("#" + r).hide();
        });
      }, window.wpseoCopyHomeMeta = n, window.wpseoSetTabHash = r, e(document).ready(function () {
        var i = this;
        r(), e("#disable-author input[type='radio']").change(function () {
          e(this).is(":checked") && e("#author-archives-titles-metas-content").toggle("off" === e(this).val());
        }).change();
        var c = e("#noindex-author-wpseo-off"),
            u = e("#noindex-author-wpseo-on");
        c.is(":checked") || o(!1), u.change(function () {
          e(i).is(":checked") || o(!1);
        }), c.change(function () {
          e(i).is(":checked") || o(!0);
        }), e("#disable-date input[type='radio']").change(function () {
          e(this).is(":checked") && e("#date-archives-titles-metas-content").toggle("off" === e(this).val());
        }).change(), e("#disable-attachment input[type='radio']").change(function () {
          e(this).is(":checked") && e("#media_settings").toggle("off" === e(this).val());
        }).change(), e("#disable-post_format").change(function () {
          e("#post_format-titles-metas").toggle(e(this).is(":not(:checked)"));
        }).change(), e("#zapier_integration_active input[type='radio']").change(function () {
          e(this).is(":checked") && e("#zapier-connection").toggle("on" === e(this).val());
        }).change(), e("#wpseo-tabs").find("a").click(function () {
          e("#wpseo-tabs").find("a").removeClass("nav-tab-active"), e(".wpseotab").removeClass("active");
          var t = e(this).attr("id").replace("-tab", ""),
              n = e("#" + t);
          n.addClass("active"), e(this).addClass("nav-tab-active"), n.hasClass("nosave") ? e("#wpseo-submit-container").hide() : e("#wpseo-submit-container").show(), e(window).trigger("yoast-seo-tab-change");
        }), e("#company_or_person").change(function () {
          var t = e(this).val();
          "company" === t ? (e("#knowledge-graph-company").show(), e("#knowledge-graph-person").hide()) : "person" === t ? (e("#knowledge-graph-company").hide(), e("#knowledge-graph-person").show()) : (e("#knowledge-graph-company").hide(), e("#knowledge-graph-person").hide());
        }).change(), e(".template").on("input", function () {
          t(e(this));
        }), e(".switch-yoast-seo input").on("keydown", function (e) {
          "keydown" === e.type && 13 === e.which && e.preventDefault();
        }), e("body").on("click", "button.toggleable-container-trigger", function (t) {
          var n = e(t.currentTarget),
              r = n.parent().siblings(".toggleable-container");
          r.toggleClass("toggleable-container-hidden"), n.attr("aria-expanded", !r.hasClass("toggleable-container-hidden")).find("span").toggleClass("dashicons-arrow-up-alt2 dashicons-arrow-down-alt2");
        });
        var s,
            l = e("#opengraph"),
            d = e("#wpseo-opengraph-settings");
        l.length && d.length && (d.toggle(l[0].checked), l.change(function (e) {
          d.toggle(e.target.checked);
        })), n(), -1 !== (s = window.location.hash.replace("#top#", "")).search("#top") && (s = window.location.hash.replace("#top%23", "")), "" !== s && "#" !== s.charAt(0) || (s = e(".wpseotab").attr("id")), e("#" + s).addClass("active"), e("#" + s + "-tab").addClass("nav-tab-active").click(), e("#twitter_card_type").select2({
          width: "400px",
          language: wpseoScriptData.userLanguageCode
        }), e("#breadcrumbs select").select2({
          width: "400px",
          language: wpseoScriptData.userLanguageCode
        }), function () {
          if (e("#enable_xml_sitemap input[type=radio]").length) {
            var t = e("#yoast-seo-sitemaps-disabled-warning");
            e("#enable_xml_sitemap input[type=radio]").change(function () {
              "off" === this.value ? t.show() : t.hide();
            });
          }
        }(), function () {
          var t = e("#wpseo-submit-container-float"),
              n = e("#wpseo-submit-container-fixed");

          if (t.length && n.length) {
            e(window).on("resize scroll", Object(a.debounce)(i, 100)), e(window).on("yoast-seo-tab-change", i);
            var r = e(".wpseo-message");
            r.length && window.setTimeout(function () {
              r.fadeOut();
            }, 5e3), i();
          }

          function i() {
            t._wpseoIsInViewport() ? n.hide() : n.show();
          }
        }(), "undefined" != typeof ClipboardJS && new ClipboardJS("#copy-zapier-api-key").on("success", function (t) {
          t.clearSelection(), e(t.trigger).focus();
        });
      });
    }
  },
  16: function _(e, t) {
    e.exports = window.React;
  },
  17: function _(e, t, n) {
    "use strict";

    n.d(t, "d", function () {
      return i;
    }), n.d(t, "e", function () {
      return a;
    }), n.d(t, "f", function () {
      return o;
    }), n.d(t, "c", function () {
      return c;
    }), n.d(t, "b", function () {
      return u;
    }), n.d(t, "g", function () {
      return s;
    }), n.d(t, "a", function () {
      return l;
    }), n.d(t, "j", function () {
      return d;
    }), n.d(t, "k", function () {
      return p;
    }), n.d(t, "l", function () {
      return f;
    }), n.d(t, "m", function () {
      return g;
    }), n.d(t, "i", function () {
      return m;
    }), n.d(t, "h", function () {
      return h;
    });
    var r = n(9),
        i = "SNIPPET_EDITOR_SWITCH_MODE",
        a = "SNIPPET_EDITOR_UPDATE_DATA",
        o = "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
        c = "SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",
        u = "SNIPPET_EDITOR_REFRESH",
        s = "SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT",
        l = "LOAD_SNIPPET_EDITOR_DATA";

    function d(e) {
      return {
        type: i,
        mode: e
      };
    }

    function p(e) {
      return {
        type: a,
        data: e
      };
    }

    function f(e, t) {
      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          i = "string" == typeof t ? Object(r.decodeHTML)(t) : t;
      return {
        type: o,
        name: e,
        value: i,
        label: n
      };
    }

    function g(e) {
      return {
        type: s,
        wordsToHighlight: e
      };
    }

    function m(e) {
      return {
        type: c,
        name: e
      };
    }

    function h() {
      return {
        type: u,
        time: new Date().getMilliseconds()
      };
    }
  },
  177: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return N;
    });

    var r,
        i = n(10),
        a = n.n(i),
        o = n(5),
        c = n.n(o),
        u = n(7),
        s = n.n(u),
        l = n(11),
        d = n.n(l),
        p = n(13),
        f = n.n(p),
        g = n(14),
        m = n.n(g),
        h = n(8),
        b = n.n(h),
        y = n(15),
        E = n.n(y),
        v = n(0),
        O = n(183),
        w = n.n(O),
        _ = n(1),
        T = n.n(_),
        S = n(2),
        I = n(12),
        j = n(3),
        R = n(6),
        P = n(9);

    function D(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    var A = Object(I.createGlobalStyle)(r || (r = E()(["\n\t.yoast-person-selector-container {\n\t\tmax-width: 400px;\n\t\tmin-width: 250px;\n\t\tmargin: 7px 0;\n\n\t\t.yoast-person-selector {\n\t\t\t&__control {\n\t\t\t\tborder-radius: 0;\n\t\t\t\tbox-shadow: inset 0 1px 2px rgba(0,0,0,.07);\n\t\t\t\tmin-height: 28px;\n\t\t\t}\n\n\t\t\t&__input input {\n\t\t\t\tbox-shadow: none;\n\t\t\t\tmargin: 0;\n\t\t\t\tmin-height: 0;\n\t\t\t\tline-height: 1.4;\n\n\t\t\t\t&:focus {\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__menu {\n\t\t\t\tmargin: 0;\n\t\t\t\tborder-radius: 0;\n\t\t\t}\n\n\t\t\t&__menu-list {\n\t\t\t\tpadding: 0;\n\t\t\t}\n\n\t\t\t&__option--is-selected {\n\t\t\t\tbackground-color: #0085ba;\n\t\t\t}\n\n\t\t\t&__indicators {\n\t\t\t\tpadding: 0 10px;\n\t\t\t}\n\t\t}\n\t}\n"]))),
        k = {
      "X-WP-NONCE": wpApiSettings.nonce
    },
        C = wpApiSettings.root,
        x = function x() {
      return Object(v.createElement)(R.SvgIcon, {
        icon: "arrow-down",
        color: "#72777c",
        size: "10px"
      });
    },
        M = function (e) {
      f()(i, e);
      var t,
          n,
          r = (t = i, n = function () {
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
          var i = b()(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);

        return m()(this, e);
      });

      function i(e) {
        var t;
        return c()(this, i), (t = r.call(this, e)).state = {
          selectedOption: null,
          loading: !!t.props.value
        }, t.fetchUsers = Object(S.debounce)(t.fetchUsers, 500).bind(d()(t)), t.fetchUser = t.fetchUser.bind(d()(t)), t.mapUserToSelectOption = t.mapUserToSelectOption.bind(d()(t)), t.onChange = t.onChange.bind(d()(t)), t;
      }

      return s()(i, [{
        key: "render",
        value: function value() {
          return Object(v.createElement)(v.Fragment, null, Object(v.createElement)(A, null), Object(v.createElement)(w.a, {
            placeholder: Object(j.__)("Select a user...", "wordpress-seo"),
            isDisabled: this.state.loading,
            inputId: this.props.name,
            className: "yoast-person-selector-container",
            classNamePrefix: "yoast-person-selector",
            value: this.state.selectedOption,
            onChange: this.onChange,
            defaultOptions: !0,
            loadOptions: this.fetchUsers,
            components: {
              IndicatorSeparator: null,
              DropdownIndicator: x
            }
          }));
        }
      }, {
        key: "componentDidMount",
        value: function value() {
          this.props.value && this.fetchUser(this.props.value);
        }
      }, {
        key: "onChange",
        value: function value(e) {
          var t = this;
          this.setState({
            selectedOption: e,
            loading: !1
          }, function () {
            t.props.onChange(e.value, e.label);
          });
        }
      }, {
        key: "mapUserToSelectOption",
        value: function value(e) {
          return {
            value: e.id,
            label: e.name
          };
        }
      }, {
        key: "fetchUser",
        value: function value(e) {
          var t = this;
          Object(P.sendRequest)("".concat(C, "wp/v2/users/").concat(e), {
            method: "GET",
            headers: k
          }).then(function (e) {
            e ? t.onChange(t.mapUserToSelectOption(e)) : t.setState({
              loading: !1
            });
          })["catch"](function () {
            t.setState({
              loading: !1
            });
          });
        }
      }, {
        key: "fetchUsers",
        value: function value(e, t) {
          var n = this,
              r = {
            per_page: 10,
            search: e
          },
              a = i.addQueryParams("".concat(C, "wp/v2/users"), r);
          Object(P.sendRequest)(a, {
            method: "GET",
            headers: k
          }).then(function (e) {
            var r = e.map(n.mapUserToSelectOption);
            t(r);
          });
        }
      }], [{
        key: "addQueryParams",
        value: function value(e, t) {
          var n = e.split("?");
          e = n[0];

          var r = function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2 ? D(Object(n), !0).forEach(function (t) {
                a()(e, t, n[t]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
            }

            return e;
          }({}, t);

          2 === n.length && n[1].split("&").forEach(function (e) {
            var t = e.split("=");
            r[t[0]] = t[1];
          });
          var i = Object.keys(r).filter(function (e) {
            return !!r[e];
          }).map(function (e) {
            return "".concat(e, "=").concat(encodeURIComponent(r[e]));
          }).join("&");
          return "".concat(e, "?").concat(i);
        }
      }]), i;
    }(v.Component),
        N = {
      name: T.a.string.isRequired,
      value: T.a.number.isRequired,
      onChange: T.a.func.isRequired
    };

    M.propTypes = N, t.b = M;
  },
  183: function _(e, t) {
    e.exports = window.yoast.reactSelectAsync;
  },
  184: function _(e, t, n) {
    "use strict";

    var r = n(0),
        i = n(3),
        a = n(37),
        o = n.n(a),
        c = n(1),
        u = n.n(c),
        s = n(6),
        l = n(9),
        d = Object(l.makeOutboundLink)(),
        p = function p(e) {
      return Object(r.createElement)(s.Alert, {
        type: e.type
      }, [o()({
        mixedString: Object(i.sprintf)(e.message, "{{link}}", "{{/link}}"),
        components: {
          link: Object(r.createElement)(d, {
            href: e.link
          })
        }
      })]);
    };

    p.propTypes = {
      type: u.a.oneOf(["error", "info", "success", "warning"]),
      message: u.a.string.isRequired,
      link: u.a.string.isRequired
    }, p.defaultProps = {
      type: "warning"
    }, t.a = p;
  },
  2: function _(e, t) {
    e.exports = window.lodash;
  },
  21: function _(e, t) {
    e.exports = window.jQuery;
  },
  22: function _(e, t) {
    e.exports = window.yoast.components;
  },
  25: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "SET_ACTIVE_MARKER", function () {
      return a.a;
    }), n.d(t, "setActiveMarker", function () {
      return a.b;
    }), n.d(t, "SET_NO_INDEX", function () {
      return o.f;
    }), n.d(t, "SET_NO_FOLLOW", function () {
      return o.e;
    }), n.d(t, "SET_ADVANCED", function () {
      return o.b;
    }), n.d(t, "SET_BREADCRUMBS_TITLE", function () {
      return o.c;
    }), n.d(t, "SET_CANONICAL_URL", function () {
      return o.d;
    }), n.d(t, "LOAD_ADVANCED_SETTINGS", function () {
      return o.a;
    }), n.d(t, "setNoIndex", function () {
      return o.l;
    }), n.d(t, "setNoFollow", function () {
      return o.k;
    }), n.d(t, "setAdvanced", function () {
      return o.h;
    }), n.d(t, "setBreadcrumbsTitle", function () {
      return o.i;
    }), n.d(t, "setCanonical", function () {
      return o.j;
    }), n.d(t, "loadAdvancedSettingsData", function () {
      return o.g;
    }), n.d(t, "UPDATE_SNIPPET_DATA", function () {
      return c;
    }), n.d(t, "RUN_ANALYSIS", function () {
      return u;
    }), n.d(t, "updateAnalysisData", function () {
      return s;
    }), n.d(t, "runAnalysis", function () {
      return l;
    }), n.d(t, "LOAD_CORNERSTONE_CONTENT", function () {
      return d.a;
    }), n.d(t, "TOGGLE_CORNERSTONE_CONTENT", function () {
      return d.c;
    }), n.d(t, "SET_CORNERSTONE_CONTENT", function () {
      return d.b;
    }), n.d(t, "loadCornerstoneContent", function () {
      return d.d;
    }), n.d(t, "setCornerstoneContent", function () {
      return d.e;
    }), n.d(t, "toggleCornerstoneContent", function () {
      return d.f;
    }), n.d(t, "SET_EDITOR_DATA_CONTENT", function () {
      return p;
    }), n.d(t, "SET_EDITOR_DATA_TITLE", function () {
      return f;
    }), n.d(t, "SET_EDITOR_DATA_EXCERPT", function () {
      return g;
    }), n.d(t, "SET_EDITOR_DATA_IMAGE_URL", function () {
      return m;
    }), n.d(t, "setEditorDataContent", function () {
      return h;
    }), n.d(t, "setEditorDataTitle", function () {
      return b;
    }), n.d(t, "setEditorDataExcerpt", function () {
      return y;
    }), n.d(t, "setEditorDataImageUrl", function () {
      return E;
    }), n.d(t, "OPEN_EDITOR_MODAL", function () {
      return v;
    }), n.d(t, "CLOSE_EDITOR_MODAL", function () {
      return O;
    }), n.d(t, "openEditorModal", function () {
      return w;
    }), n.d(t, "closeEditorModal", function () {
      return _;
    }), n.d(t, "SET_ESTIMATED_READING_TIME", function () {
      return T.b;
    }), n.d(t, "LOAD_ESTIMATED_READING_TIME", function () {
      return T.a;
    }), n.d(t, "setEstimatedReadingTime", function () {
      return T.d;
    }), n.d(t, "loadEstimatedReadingTime", function () {
      return T.c;
    }), n.d(t, "LOAD_FOCUS_KEYWORD", function () {
      return S.a;
    }), n.d(t, "SET_FOCUS_KEYWORD", function () {
      return S.b;
    }), n.d(t, "loadFocusKeyword", function () {
      return S.c;
    }), n.d(t, "setFocusKeyword", function () {
      return S.d;
    }), n.d(t, "SET_MARKER_STATUS", function () {
      return I.a;
    }), n.d(t, "setMarkerStatus", function () {
      return I.b;
    }), n.d(t, "SET_MARKER_PAUSE_STATUS", function () {
      return j.a;
    }), n.d(t, "setMarkerPauseStatus", function () {
      return j.b;
    }), n.d(t, "DISMISS_ALERT", function () {
      return R.a;
    }), n.d(t, "DISMISS_ALERT_SUCCESS", function () {
      return R.b;
    }), n.d(t, "dismissAlert", function () {
      return R.c;
    }), n.d(t, "SET_PRIMARY_TAXONOMY", function () {
      return P.a;
    }), n.d(t, "setPrimaryTaxonomyId", function () {
      return P.b;
    }), n.d(t, "SET_PAGE_TYPE", function () {
      return D.d;
    }), n.d(t, "SET_ARTICLE_TYPE", function () {
      return D.c;
    }), n.d(t, "GET_SCHEMA_PAGE_DATA", function () {
      return D.b;
    }), n.d(t, "GET_SCHEMA_ARTICLE_DATA", function () {
      return D.a;
    }), n.d(t, "setPageType", function () {
      return D.h;
    }), n.d(t, "setArticleType", function () {
      return D.g;
    }), n.d(t, "getSchemaPageData", function () {
      return D.f;
    }), n.d(t, "getSchemaArticleData", function () {
      return D.e;
    }), n.d(t, "MODAL_DISMISS", function () {
      return A;
    }), n.d(t, "MODAL_OPEN", function () {
      return k;
    }), n.d(t, "MODAL_OPEN_NO_KEYPHRASE", function () {
      return C;
    }), n.d(t, "setSEMrushDismissModal", function () {
      return x;
    }), n.d(t, "setSEMrushOpenModal", function () {
      return M;
    }), n.d(t, "setSEMrushNoKeyphraseMessage", function () {
      return N;
    }), n.d(t, "CHANGE_COUNTRY", function () {
      return B.a;
    }), n.d(t, "SET_REQUEST_SUCCEEDED", function () {
      return B.g;
    }), n.d(t, "SET_REQUEST_FAILED", function () {
      return B.e;
    }), n.d(t, "SET_REQUEST_LIMIT_REACHED", function () {
      return B.f;
    }), n.d(t, "NEW_REQUEST", function () {
      return B.b;
    }), n.d(t, "NO_DATA_FOUND", function () {
      return B.c;
    }), n.d(t, "SET_LOGIN_STATUS", function () {
      return B.d;
    }), n.d(t, "setSEMrushNewRequest", function () {
      return B.j;
    }), n.d(t, "setSEMrushRequestSucceeded", function () {
      return B.m;
    }), n.d(t, "setSEMrushRequestFailed", function () {
      return B.l;
    }), n.d(t, "setSEMrushSetRequestLimitReached", function () {
      return B.n;
    }), n.d(t, "setSEMrushChangeCountry", function () {
      return B.h;
    }), n.d(t, "setSEMrushNoResultsFound", function () {
      return B.k;
    }), n.d(t, "setSEMrushLoginStatus", function () {
      return B.i;
    }), n.d(t, "SET_SETTINGS", function () {
      return F.b;
    }), n.d(t, "SET_CONTENT_IMAGE", function () {
      return F.a;
    }), n.d(t, "setSettings", function () {
      return F.d;
    }), n.d(t, "setContentImage", function () {
      return F.c;
    }), n.d(t, "SET_SHOPPING_DATA", function () {
      return L.a;
    }), n.d(t, "setShoppingData", function () {
      return L.b;
    }), n.d(t, "SWITCH_MODE", function () {
      return U.d;
    }), n.d(t, "UPDATE_DATA", function () {
      return U.e;
    }), n.d(t, "UPDATE_REPLACEMENT_VARIABLE", function () {
      return U.f;
    }), n.d(t, "REMOVE_REPLACEMENT_VARIABLE", function () {
      return U.c;
    }), n.d(t, "REFRESH", function () {
      return U.b;
    }), n.d(t, "UPDATE_WORDS_TO_HIGHLIGHT", function () {
      return U.g;
    }), n.d(t, "LOAD_SNIPPET_EDITOR_DATA", function () {
      return U.a;
    }), n.d(t, "switchMode", function () {
      return U.j;
    }), n.d(t, "updateData", function () {
      return U.k;
    }), n.d(t, "updateReplacementVariable", function () {
      return U.l;
    }), n.d(t, "updateWordsToHighlight", function () {
      return U.m;
    }), n.d(t, "removeReplacementVariable", function () {
      return U.i;
    }), n.d(t, "refreshSnippetEditor", function () {
      return U.h;
    }), n.d(t, "SET_TWITTER_TITLE", function () {
      return V.e;
    }), n.d(t, "SET_TWITTER_DESCRIPTION", function () {
      return V.c;
    }), n.d(t, "SET_TWITTER_IMAGE", function () {
      return V.d;
    }), n.d(t, "CLEAR_TWITTER_IMAGE", function () {
      return V.a;
    }), n.d(t, "LOAD_TWITTER_PREVIEW", function () {
      return V.b;
    }), n.d(t, "setTwitterPreviewTitle", function () {
      return V.j;
    }), n.d(t, "setTwitterPreviewDescription", function () {
      return V.h;
    }), n.d(t, "setTwitterPreviewImage", function () {
      return V.i;
    }), n.d(t, "clearTwitterPreviewImage", function () {
      return V.f;
    }), n.d(t, "loadTwitterPreviewData", function () {
      return V.g;
    }), n.d(t, "SET_FACEBOOK_TITLE", function () {
      return q.e;
    }), n.d(t, "SET_FACEBOOK_DESCRIPTION", function () {
      return q.c;
    }), n.d(t, "SET_FACEBOOK_IMAGE", function () {
      return q.d;
    }), n.d(t, "CLEAR_FACEBOOK_IMAGE", function () {
      return q.a;
    }), n.d(t, "LOAD_FACEBOOK_PREVIEW", function () {
      return q.b;
    }), n.d(t, "setFacebookPreviewTitle", function () {
      return q.j;
    }), n.d(t, "setFacebookPreviewDescription", function () {
      return q.h;
    }), n.d(t, "setFacebookPreviewImage", function () {
      return q.i;
    }), n.d(t, "clearFacebookPreviewImage", function () {
      return q.f;
    }), n.d(t, "loadFacebookPreviewData", function () {
      return q.g;
    }), n.d(t, "SET_WARNING_MESSAGE", function () {
      return z.a;
    }), n.d(t, "setWarningMessage", function () {
      return z.b;
    }), n.d(t, "setOverallReadabilityScore", function () {
      return W;
    }), n.d(t, "setOverallSeoScore", function () {
      return G;
    }), n.d(t, "setReadabilityResults", function () {
      return r.setReadabilityResults;
    }), n.d(t, "setSeoResultsForKeyword", function () {
      return r.setSeoResultsForKeyword;
    });
    var r = n(22),
        i = n(29),
        a = n(74),
        o = n(44),
        c = "SNIPPET_EDITOR_UPDATE_ANALYSIS_DATA",
        u = "RUN_ANALYSIS";

    function s(e) {
      return {
        type: c,
        data: e
      };
    }

    function l() {
      return {
        type: u,
        timestamp: Date.now()
      };
    }

    var d = n(59),
        p = "SET_EDITOR_DATA_CONTENT",
        f = "SET_EDITOR_DATA_TITLE",
        g = "SET_EDITOR_DATA_EXCERPT",
        m = "SET_EDITOR_DATA_IMAGE_URL";

    function h(e) {
      return {
        type: p,
        content: e
      };
    }

    function b(e) {
      return {
        type: f,
        title: e
      };
    }

    function y(e) {
      return {
        type: g,
        excerpt: e
      };
    }

    function E(e) {
      return {
        type: m,
        imageUrl: e
      };
    }

    var v = "OPEN_MODAL",
        O = "CLOSE_MODAL";

    function w(e) {
      return {
        type: v,
        modalKey: e
      };
    }

    function _() {
      return {
        type: O
      };
    }

    var T = n(67),
        S = n(60),
        I = n(45),
        j = n(75),
        R = n(69),
        P = n(76),
        D = n(56),
        A = "MODAL_DISMISS",
        k = "MODAL_OPEN",
        C = "MODAL_OPEN_NO_KEYPHRASE";

    function x() {
      return {
        type: A
      };
    }

    function M(e) {
      return {
        type: k,
        location: e
      };
    }

    function N() {
      return {
        type: C
      };
    }

    var B = n(41),
        F = n(43),
        L = n(77),
        U = n(17),
        V = n(48),
        q = n(49),
        z = n(78),
        W = function W(e) {
      return i.a.readabilityScore = e, Object(r.setOverallReadabilityScore)(e);
    },
        G = function G(e, t) {
      return i.a.seoScore = e, Object(r.setOverallSeoScore)(e, t);
    };
  },
  255: function _(e, t) {
    e.exports = window.lodash.map;
  },
  26: function _(e, t) {
    e.exports = window.regeneratorRuntime;
  },
  27: function _(e, t) {
    function n() {
      return e.exports = n = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }, n.apply(this, arguments);
    }

    e.exports = n;
  },
  29: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return c;
    });

    var r = n(5),
        i = n.n(r),
        a = n(7),
        o = n.n(a),
        c = function () {
      function e() {
        i()(this, e);
      }

      return o()(e, null, [{
        key: "keyphraseElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_focuskw" : "hidden_wpseo_focuskw");
        }
      }, {
        key: "isCornerstoneElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_is_cornerstone" : "hidden_wpseo_is_cornerstone");
        }
      }, {
        key: "seoScoreElement",
        get: function get() {
          return document.getElementById("yoast_wpseo_linkdex");
        }
      }, {
        key: "readabilityScoreElement",
        get: function get() {
          return document.getElementById("yoast_wpseo_content_score");
        }
      }, {
        key: "keyphrase",
        get: function get() {
          return e.keyphraseElement.value;
        },
        set: function set(t) {
          e.keyphraseElement.value = t;
        }
      }, {
        key: "isCornerstone",
        get: function get() {
          return "1" === e.isCornerstoneElement.value;
        },
        set: function set(t) {
          e.isCornerstoneElement.value = t ? "1" : "0";
        }
      }, {
        key: "seoScore",
        get: function get() {
          return e.seoScoreElement.value;
        },
        set: function set(t) {
          e.seoScoreElement.value = t;
        }
      }, {
        key: "readabilityScore",
        get: function get() {
          return e.readabilityScoreElement.value;
        },
        set: function set(t) {
          e.readabilityScoreElement.value = t;
        }
      }]), e;
    }();
  },
  3: function _(e, t) {
    e.exports = window.wp.i18n;
  },
  30: function _(e, t, n) {
    var r = n(87),
        i = n(88),
        a = n(89);

    e.exports = function (e) {
      return r(e) || i(e) || a();
    };
  },
  33: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return c;
    });

    var r = n(5),
        i = n.n(r),
        a = n(7),
        o = n.n(a),
        c = function () {
      function e() {
        i()(this, e);
      }

      return o()(e, null, [{
        key: "articleTypeInput",
        get: function get() {
          return document.getElementById("yoast_wpseo_schema_article_type");
        }
      }, {
        key: "defaultArticleType",
        get: function get() {
          return e.articleTypeInput.getAttribute("data-default");
        }
      }, {
        key: "articleType",
        get: function get() {
          return e.articleTypeInput.value;
        },
        set: function set(t) {
          e.articleTypeInput.value = t;
        }
      }, {
        key: "pageTypeInput",
        get: function get() {
          return document.getElementById("yoast_wpseo_schema_page_type");
        }
      }, {
        key: "defaultPageType",
        get: function get() {
          return e.pageTypeInput.getAttribute("data-default");
        }
      }, {
        key: "pageType",
        get: function get() {
          return e.pageTypeInput.value;
        },
        set: function set(t) {
          e.pageTypeInput.value = t;
        }
      }]), e;
    }();
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
  349: function _(e, t, n) {
    "use strict";

    n.r(t);
    var r = n(21),
        i = n.n(r),
        a = n(155),
        o = n(154),
        c = n(0),
        u = n(12),
        s = n.n(u),
        l = n(1),
        d = n.n(l),
        p = n(184),
        f = n(36);

    function g(e) {
      var t = e.target,
          n = e.message,
          r = e.link;
      return Object(c.createElement)(f.a, {
        target: t
      }, Object(c.createElement)(p.a, {
        message: n,
        link: r
      }));
    }

    g.propTypes = {
      target: d.a.string.isRequired,
      message: d.a.string.isRequired,
      link: d.a.string.isRequired
    };

    var m,
        h,
        b,
        y,
        E,
        v,
        O,
        w,
        _,
        T,
        S,
        I,
        j,
        R,
        P,
        D,
        A,
        k,
        C,
        x,
        M,
        N,
        B,
        F,
        L,
        U,
        V,
        q,
        z,
        W,
        G,
        H,
        K,
        Y,
        $,
        Q,
        X,
        J,
        Z,
        ee,
        te,
        ne,
        re,
        ie,
        ae = n(141),
        oe = n(15),
        ce = n.n(oe),
        ue = n(3),
        se = n(9),
        le = n(16);

    function de() {
      return (de = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];

          for (var r in n) {
            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }

        return e;
      }).apply(this, arguments);
    }

    var pe,
        fe,
        ge,
        me,
        he,
        be,
        ye = s.a.div(pe || (pe = ce()(['\n\tdisplay: flex;\n\tflex-direction: row;\n\tmax-width: 600px;\n\tmargin: 16px 0;\n\tpadding: 20px 28px;\n\tposition: relative;\n\tz-index: 1;\n\t&:before {\n\t\tcontent: "";\n\t\tbackground-image: url(', ");\n\t\tbackground-size: 100% 100%;\n\t\ttransform: ", ";\n\t\tposition: absolute;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tz-index: -1;\n\t}\n"])), function (e) {
      return e.backgroundUrl;
    }, Object(se.getDirectionalStyle)("", "scaleX(-1)")),
        Ee = s()(function (e) {
      return le.createElement("svg", de({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 152 176",
        "aria-hidden": "true"
      }, e), m || (m = le.createElement("path", {
        fill: "#af7e48",
        d: "M137.57 99.31c.61 0 7 5.83 7 5.83l.4 6c-1.49 1.68-3 1.2-5.43 4.22s-6.43-2.82-6.43-2.82l5.23-4.82z"
      })), h || (h = le.createElement("path", {
        fill: "#c69b65",
        d: "M142.49 96.4c1.12-.91 6.14 1.1 7.35 2.91s1.81 6 1.81 6a62.1 62.1 0 00-3.62 5.43c-.8 1.61-2.82 1-4-1.2s.6-4.43.6-4.43l-4.83-2.21zM140 82.62c-1.41 0-4 4.22-6.24 4.82s-9.65 3.22-9.65 3.22l3 5.43 11.07-1s3.41-5.23 3.82-7.65-.61-4.82-2-4.82z"
      })), b || (b = le.createElement("path", {
        fill: "#af7e48",
        d: "M58.79 34.92c2.15 3.14 3.37 6 4.94 5s2.89-5.73.74-8.87-5.18-4.83-6.74-3.76-1.1 4.48 1.06 7.63z"
      })), y || (y = le.createElement("path", {
        fill: "#181716",
        d: "M48.41 15.34s2.76-1 3.27-.26 6.78 6.28 8 11-.25 5.27-.5 4.52-9-12.55-9-12.55z"
      })), E || (E = le.createElement("path", {
        fill: "#c6d8ee",
        d: "M53.43 156.44c-1.25-.5-31.13.76-31.13-.25s-6-64.27-6-64.27c8.81-14.18 23.25-19.64 49.9-22.58l22.16 14 8.29 72.81z"
      })), v || (v = le.createElement("path", {
        fill: "#738498",
        d: "M33.08 136.37s6.58-.11 6.62-.13c-1.13 1.48-2.72 2-3.76 3.75 2 1.39 6.58-.71 9 .13-1.84-.13-8.68 3.43-10.51 3.41.93 5.09 9.86 4.65 13 2.89-1.42 1.77-2.11 6.05-2.78 8.26-2.84-2.13-19.16-3.16-25.55-7.78 2.28-4.75 4.72-9.84 6.63-14.8 2-5.12 7-5.34 9.68-10.06.46-.8-.42-11.17-.54-11.5 1.76 3.5 3.29 8.79 3 12.71.55-1.52 3-2.48 4.48-3 .83 3.56.56-7.25-9.27 16.12z"
      })), O || (O = le.createElement("path", {
        fill: "#c6d8ee",
        d: "M67.38 69c.5.5 17 2.17 22.63 4.53 11.46 4.82 5.73 22.92 17.16 27.13 3.8 1.41 19.58-2.51 19.58-2.51l3.77 15.85c-14.13 9.14-27.5 12.4-40.18 10.29L69.25 88.9z"
      })), w || (w = le.createElement("path", {
        fill: "#c69b65",
        d: "M60.46 56.51c.51 2 8.29 29.63 8.29 29.63L51.68 96.69 29.83 80.62 26.57 62z"
      })), _ || (_ = le.createElement("path", {
        fill: "#af7e48",
        d: "M28.93 67.13c-.79 2.68 7.27 6.66 9.47 7.53A61.27 61.27 0 0049 77.93c3.07.59 7.26 1.17 10.05-.5 4.16-2.5 4.07-9.45 2.71-13.53-3.21 2.21-7.61 1.82-11.44 2.16-7.17.63-14-.25-21.11-.14.08.69-.17 1.5-.08 2.19-.24-.05-.44-.18-.2-.98z"
      })), T || (T = le.createElement("path", {
        fill: "#c6d8ee",
        d: "M62.47 64.05s-2.76 8.53-3.26 12.8 4 16.07 3.77 15.32 9.79-5.28 9.79-5.28z"
      })), S || (S = le.createElement("path", {
        fill: "#c6d8ee",
        d: "M27.82 68.56c-2.26.51-1.5 1.76-2 5.28s.45 10.39.45 10.39l23.15 20L72 92.92l-14.51-4s-2.59-5.77-5.6-8.28-7.5 1.25-12.53-.76c-10.03-4.29-10.53-7.8-11.54-11.32z"
      })), I || (I = le.createElement("path", {
        fill: "#738498",
        d: "M57.5 88.9a93.54 93.54 0 0126.78 6.21l-1.61 1.18c-4.78-2.16-14.19-4.15-23.48-6.43-.33-.08-10.52 16.74-15.14 23.33-.43.61 10.26 10.25 22.53 29.56-15.09-21.12-24.22-27.93-24.34-27.95C41.36 114.6 58 89 57.5 88.9z"
      })), j || (j = le.createElement("path", {
        fill: "#565377",
        d: "M18.53 88.9l4.77-5a74.39 74.39 0 0130.39 26.36s24.15-16.67 24.6-17.32c1.82-2.63-13.89-25.12-15.57-23.6l4.52-.76c8.09 7.08 14 13.79 15.82 19.84C93.4 109.13 98.29 132 98.63 156.69L50.92 160H36.11c11.46-7 16.56-20.78 10.55-46.45C41 101.8 31.83 93.41 18.53 88.9z"
      })), R || (R = le.createElement("path", {
        fill: "#c69b65",
        d: "M48.66 13.08c.76.5 17.83 24.1 19.84 31.38s-5.78 23.6-7.5 25.36-7.28 2.76-10.55 3-18.38-.75-23-6-12.85-33.9-12.85-33.9l2.26-8.79z"
      })), P || (P = le.createElement("path", {
        fill: "#181716",
        d: "M29.53 54c-.75 2.14-2.27 2.27-4.26 1.83l-5.81-5.57-3.2-.58c-4.19-4.33-5.7-11.51-5-21 0 0 12.56-11.3 14.31-7.78s-3 13.56-3.26 17.07-.25 7.28-.25 7.28c-.16 1.38 5.09 5.49 7.47 8.75z"
      })), D || (D = le.createElement("path", {
        fill: "#c6d8ee",
        d: "M39.8 25c4.05-2.29 12.09-6.14 10.59-11.2C49.94 12.28 45 1.45 43.22.2S24.06 4 20 6.55 5.23 17.09 5.23 19.85 10.22 31.23 11 32s25.06-4.87 28.8-7z"
      })), A || (A = le.createElement("path", {
        fill: "#786857",
        d: "M98.88 168L45.4 154.69s55.74-63.78 56.49-63.53 48 .5 48 .5l1 3.27-44.69 69.3c-2.2 2.13-5.2 2.98-7.32 3.77z"
      })), k || (k = le.createElement("path", {
        fill: "#614d41",
        d: "M45.15 154.18s49.12 9.58 49.46 10.3c3.77.5 6.78-.25 8.79-2l46.95-71.06.5 3.52-45.19 71.56c-.65 2.78-6.38 4.36-11.55 2.68s-48-12.23-48-12.23z"
      })), C || (C = le.createElement("path", {
        fill: "#181716",
        d: "M43.64 69.57s6.7 6.76 11.47 6 6.09-.76 7.85-4c2.72-5.06.65-6.12-1.41-11.46L61 64.52l-2.47-2.62-.8 4.43-2.21-2.42-1 3.82-2.62-1.81v3.62l-4.22-1.81 1.41 3z"
      })), x || (x = le.createElement("path", {
        fill: "#edb059",
        d: "M141.63 95.18c0 7.28-11 12.52-23 11.43-11.16-1-19.3-4.1-19.3-11.38s9.42-15.65 20.63-15.65c.57 0 1.15 0 1.73.06.78 1.39 2.66 1.31 4.72.83 8.43 2.34 15.22 8.86 15.22 14.71z"
      })), M || (M = le.createElement("path", {
        fill: "#af7e48",
        d: "M120.15 85.22c-3.75 1.64-6 6.68-8 10.13.39-3.76.7-7.91 3.81-11.23a19.75 19.75 0 00-10.69.72c1.56-1.31 5.41-3.39 13.06-2.87a9.21 9.21 0 013.35-2.32c.88.75 3.32 1 4.92.76a4.46 4.46 0 00-3.11 2.26c4.17.66 9.54 4.09 11.19 7.9-3.46-2.86-8.68-5.71-14.53-5.35z"
      })), N || (N = le.createElement("path", {
        fill: "#edb059",
        d: "M125.54 116.56c0 8-12 13.68-25.19 12.48-12.19-1.1-21.08-4.47-21.08-12.42s10.29-17.11 22.53-17.11c.64 0 1.27 0 1.89.07.86 1.52 2.91 1.43 5.16.91 9.27 2.51 16.69 9.67 16.69 16.07z"
      })), B || (B = le.createElement("path", {
        fill: "#cf8c33",
        d: "M79.21 116.62a13.2 13.2 0 012.38-7.92 23.41 23.41 0 016-5.91 25.34 25.34 0 017.72-3.51 24.67 24.67 0 018.47-.83h.61l.29.52a1.15 1.15 0 00.51.49 2.37 2.37 0 00.93.21 9.72 9.72 0 002.49-.27l.28-.06.24.07a30.79 30.79 0 015.88 2.41 26.89 26.89 0 015.14 3.71 18.73 18.73 0 014 4.94 11.22 11.22 0 011.5 6h-.13a11.48 11.48 0 00-1.85-5.75 20 20 0 00-4-4.58 28.62 28.62 0 00-10.77-5.63h.06a10.68 10.68 0 01-2.82.34 3.61 3.61 0 01-1.4-.31 2.41 2.41 0 01-1.08-1l.1.07a25 25 0 00-8.08.72 25.69 25.69 0 00-7.45 3.22 22.49 22.49 0 00-6 5.46 13.41 13.41 0 00-2.81 7.51z"
      })), F || (F = le.createElement("path", {
        fill: "#af7e48",
        d: "M102.07 105.68c-4.09 1.79-6.58 7.3-8.72 11.06.43-4.1.77-8.63 4.16-12.27a21.71 21.71 0 00-11.68.79c1.71-1.43 5.92-3.7 14.27-3.14.56-.91 2.57-2.05 3.66-2.53 1 .82 3.63 1.1 5.37.83-1.85.59-2.62 1.11-3.39 2.47 4.56.72 10.43 4.47 12.23 8.64-3.81-3.13-9.49-6.24-15.9-5.85z"
      })), L || (L = le.createElement("path", {
        fill: "#edb059",
        d: "M106.78 143.09c0 8.75-13.24 15-27.7 13.73-13.41-1.21-23.18-4.92-23.18-13.66s11.31-18.81 24.78-18.81c.69 0 1.38 0 2.07.08.94 1.66 3.2 1.57 5.67 1 10.2 2.8 18.36 10.63 18.36 17.66z"
      })), U || (U = le.createElement("path", {
        fill: "#cf8c33",
        d: "M55.84 143.16a14.64 14.64 0 012.65-8.67A25.69 25.69 0 0165.1 128a27.89 27.89 0 018.46-3.83 27.12 27.12 0 019.28-.91l.61.06.29.52a1.35 1.35 0 00.61.57 2.68 2.68 0 001.07.25 10.48 10.48 0 002.76-.31l.28-.06.25.07a33.88 33.88 0 016.45 2.64 30.09 30.09 0 015.64 4.05 21 21 0 014.36 5.39 12.34 12.34 0 011.68 6.62h-.12a12.55 12.55 0 00-2-6.32 22.19 22.19 0 00-4.43-5 31.83 31.83 0 00-11.86-6.2h.06a11.89 11.89 0 01-3.09.38 3.92 3.92 0 01-1.54-.34 2.68 2.68 0 01-1.18-1.08l.1.06a27.44 27.44 0 00-8.89.8 28.7 28.7 0 00-8.2 3.54 24.88 24.88 0 00-6.6 6 14.84 14.84 0 00-3.09 8.26z"
      })), V || (V = le.createElement("path", {
        fill: "#af7e48",
        d: "M81 131.13c-4.5 2-7.24 8-9.59 12.16.47-4.51.85-9.49 4.57-13.48-3.52-.89-9.46-.61-12.84.86 1.88-1.57 6.51-4.07 15.7-3.45.61-1 2.82-2.25 4-2.78 1 .9 4 1.21 5.91.91-2 .65-2.88 1.21-3.73 2.72 5 .79 11.46 4.91 13.44 9.49-4.19-3.44-10.46-6.86-17.46-6.43z"
      })), q || (q = le.createElement("path", {
        fill: "#c6d8ee",
        d: "M50.5 153.36c-1.76-.76-19.41-6.71-19.41-6.71a4.65 4.65 0 00.5-3.77c-.75-1.75-3.26-1-3.26-1s7.5-11.47 7-21-19.06-28.96-19.06-28.96S6 108 4.47 114.26s.55 11.53.25 15.57c-1.5 20.34-9.29 25.16.43 32.69 9 7 39.75 10 39.75 10z"
      })), z || (z = le.createElement("path", {
        fill: "#c6d8ee",
        d: "M57.7 154.51l-11.55-4.34c-3.37.48-11.35 20.51-8.28 23.67.52.54 12.84 3.82 14.38 1.08 3.06-5.42 5.45-20.41 5.45-20.41z"
      })), W || (W = le.createElement("path", {
        fill: "#738498",
        d: "M50.74 173.92c1.79-2.79 2.4-6.58 3.21-9.78.54-2.11 1.58-6.19.21-8.24-3.03 1.45-5.83 17.9-3.42 18.02z"
      })), G || (G = le.createElement("path", {
        fill: "#c69b65",
        d: "M53.86 155.16a43.75 43.75 0 005.85 1.28c1.26 0 4-2.83 5.8-3.59a15.89 15.89 0 016.15-1.43c2.26 0 5 2.43 6.71 2.91s4.68-.88 7.2-1.4c4.16-.86 2 6-2.08 7a23.14 23.14 0 01-6.35.5s5.92 3 4.42 5l9 2.69c-4 2.51-3.51 3.84-6 4.59S79 170 79 170s-1 2.51-3 2.51-4.27-1.25-5.52-.75-1.26 2.51-3.27 2.51-5.52-2.51-5.52-2.51l-6-6-5-.25c-.59-2.94.87-7.24 3.17-10.35z"
      })), H || (H = le.createElement("path", {
        fill: "#fff",
        d: "M58.22 53.16a.57.57 0 00-.13-.63.57.57 0 00-.63-.11l-15.61 7a.34.34 0 00.14.65c3.33 0 11-.17 12.72-1.42 1.5-1.06 2.82-3.83 3.51-5.49zM40.83 41.59a4.77 4.77 0 00-6-2c-4 1.61-3 6.23-3 6.23 3.97-.27 7.31-1.3 9-4.23z"
      })), K || (K = le.createElement("path", {
        fill: "#181716",
        d: "M40.8 41.61a6 6 0 00-2.91-1.67 4.86 4.86 0 00-3 .46 4.47 4.47 0 00-2.21 2.06 9 9 0 00-.83 3.34h-.08a6.89 6.89 0 01.29-3.6 4.57 4.57 0 012.48-2.6 4.94 4.94 0 013.58-.32 5.15 5.15 0 012.78 2.27z"
      })), Y || (Y = le.createElement("path", {
        fill: "#fff",
        d: "M51.27 38.22s-1.19-4.48 2.23-5.48 5.29 2.18 5.29 2.18c-2.33 1.65-5.11 3.51-7.52 3.3z"
      })), $ || ($ = le.createElement("path", {
        fill: "#181716",
        d: "M51.23 38.23a5.1 5.1 0 01-.56-3.33 3.75 3.75 0 01.77-1.72 3.82 3.82 0 011.61-1.09 4.43 4.43 0 015.77 2.8h-.07a5.3 5.3 0 00-2.36-2 4.2 4.2 0 00-3.06 0 3 3 0 00-1.29.82 3.37 3.37 0 00-.72 1.36 6.5 6.5 0 000 3.13zm-14.97-6.86a1 1 0 01.78 0 1 1 0 01.55.56l.64 1.65a1 1 0 010 .78 1 1 0 01-.59.51 21.47 21.47 0 00-9.54 6.4.38.38 0 01-.3.11.34.34 0 01-.26-.17l-.62-1a1.12 1.12 0 010-1.17c1.84-2.98 4.89-5.53 9.34-7.67zM48 26.44a.75.75 0 00-.37.41.73.73 0 000 .56l.64 1.32a1.3 1.3 0 00.82.68 1.32 1.32 0 001.06-.16 15.4 15.4 0 017.14-2.11.4.4 0 00.35-.24.42.42 0 00-.05-.42l-.44-.58a2.31 2.31 0 00-1.46-.9A12.86 12.86 0 0048 26.44z"
      })), Q || (Q = le.createElement("circle", {
        cx: 35.93,
        cy: 42.52,
        r: 1.81,
        fill: "#181716"
      })), X || (X = le.createElement("circle", {
        cx: 53.63,
        cy: 35.28,
        r: 1.81,
        fill: "#181716"
      })), J || (J = le.createElement("circle", {
        cx: 36.44,
        cy: 41.52,
        r: .61,
        fill: "#fff"
      })), Z || (Z = le.createElement("circle", {
        cx: 54.1,
        cy: 34.31,
        r: .62,
        fill: "#fff"
      })), ee || (ee = le.createElement("path", {
        fill: "#738498",
        d: "M39.43 2.57c-.57 1.28-2.24 2-3.22 3.06A25.76 25.76 0 0129 10.5a43.61 43.61 0 01-18.65 4.95 32.42 32.42 0 007-2.82c3-1.5 4.64-4.45 7.81-5.74 2.68-1.08 5.22.3 7.66-.55a25.48 25.48 0 006.61-3.77z"
      })), te || (te = le.createElement("path", {
        fill: "#af7e48",
        d: "M46.06 49.83a2.21 2.21 0 00-.44 2.47c1.22 1.22 3.7-1 5.65-1.24.56-.07 6-.32 6.07-3.84.07-2.47-2.86-2.35-4.25-3.31-2.52-1.73-2.43-5.15-4.83-7.27 1.24 2.22 2.21 4.81 3.59 7 1.08 1.71 4 2.2 4 4.08s-3.71 2.89-5.93 2.16c-.84.95-4.38 2.5-3.86-.05z"
      })), ne || (ne = le.createElement("path", {
        fill: "#c69b65",
        d: "M23.76 54.27c1.72 3.4 2.73 6.13.07 7.48S15.42 60 13.7 56.57s-.84-7.15 2.13-7.31c4.09-.26 6.17 1.6 7.93 5.01z"
      })), re || (re = le.createElement("circle", {
        cx: 60.49,
        cy: 96.85,
        r: 3.02,
        fill: "#738498"
      })), ie || (ie = le.createElement("circle", {
        cx: 61.09,
        cy: 96.16,
        r: 2.34,
        fill: "#c6d8ee"
      })));
    })(fe || (fe = ce()(["\n\talign-self: center;\n\twidth: 100px;\n\tmargin: ", ";\n"])), Object(se.getDirectionalStyle)("0 20px 0 0", "0 0 0 20px")),
        ve = s.a.div(ge || (ge = ce()(["\n\talign-self: center;\n\tfont-size: 1em;\n"]))),
        Oe = s.a.h3(me || (me = ce()(["\n\t&& {\n\t\tfont-size: 1.15em;\n\t\tfont-weight: bold;\n\t\tmargin: 4px 0;\n\t}\n"]))),
        we = s.a.p(he || (he = ce()(["\n\tmargin: 4px 0;\n"]))),
        _e = s()(Object(se.makeOutboundLink)())(be || (be = ce()(["\n\tmargin: 4px 0;\n"]))),
        Te = function Te(e) {
      var t = e.url,
          n = e.backgroundUrl;
      return Object(c.createElement)(ye, {
        backgroundUrl: n
      }, Object(c.createElement)(Ee, null), Object(c.createElement)(ve, null, Object(c.createElement)(Oe, null, Object(ue.__)("Serving local customers?", "wordpress-seo")), Object(c.createElement)(we, null, Object(ue.sprintf)(
      /* translators: %s expands to Local SEO */
      Object(ue.__)("Truly optimize your site for a local audience with our %s plugin! Optimized address details, opening hours, store locator and pickup option!", "wordpress-seo"), "Local SEO")), Object(c.createElement)(_e, {
        href: t
      }, Object(ue.sprintf)(
      /* translators: %s expands to Local SEO */
      Object(ue.__)("Get the %s plugin now", "wordpress-seo"), "Local SEO"))));
    };

    Te.propTypes = {
      url: d.a.string.isRequired,
      backgroundUrl: d.a.string.isRequired
    };
    var Se = Te;

    function Ie(e) {
      var t = e.target,
          n = e.url,
          r = e.backgroundUrl;
      return Object(c.createElement)(f.a, {
        target: t
      }, Object(c.createElement)(Se, {
        url: n,
        backgroundUrl: r
      }));
    }

    Ie.propTypes = {
      target: d.a.string.isRequired,
      url: d.a.string.isRequired,
      backgroundUrl: d.a.string.isRequired
    };
    var je = n(5),
        Re = n.n(je),
        Pe = n(7),
        De = n.n(Pe),
        Ae = n(11),
        ke = n.n(Ae),
        Ce = n(13),
        xe = n.n(Ce),
        Me = n(14),
        Ne = n.n(Me),
        Be = n(8),
        Fe = n.n(Be),
        Le = n(6),
        Ue = n(37),
        Ve = n.n(Ue),
        qe = n(177);

    var ze = function (e) {
      xe()(i, e);
      var t,
          n,
          r = (t = i, n = function () {
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
            r = Fe()(t);

        if (n) {
          var i = Fe()(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);

        return Ne()(this, e);
      });

      function i(e) {
        var t;
        return Re()(this, i), (t = r.call(this, e)).element = document.getElementById("person_id"), t.state = {
          value: t.getInitialValue(),
          name: null
        }, t.onChange = t.onChange.bind(ke()(t)), t;
      }

      return De()(i, [{
        key: "getInitialValue",
        value: function value() {
          return parseInt(this.element.value, 10);
        }
      }, {
        key: "onChange",
        value: function value(e, t) {
          var n = this;
          this.setState({
            value: e,
            name: t
          }, function () {
            n.element.value = e;
          });
        }
      }, {
        key: "renderError",
        value: function value() {
          return this.state.value ? null : Object(c.createElement)(Le.Alert, {
            type: "warning"
          }, Object(ue.__)("Please select a user below to make your site's meta data complete.", "wordpress-seo"));
        }
      }, {
        key: "renderAuthorInfo",
        value: function value() {
          if (!this.state.value || !this.state.name) return null; // translators: %1$s expands to the user's name, %2$s expands to an opening anchor tag, %3$s expands to a closing anchor tag.

          var e = Object(ue.sprintf)(Object(ue.__)("You have selected the user %1$s as the person this site represents. Their user profile information will now be used in search results. %2$sUpdate their profile to make sure the information is correct.%3$s", "wordpress-seo"), "{{strong}}".concat(this.state.name, "{{/strong}}"), "{{authorEditLink}}", "{{/authorEditLink}}");
          return Ve()({
            mixedString: e,
            components: {
              user: this.state.name,
              strong: Object(c.createElement)("strong", null),
              authorEditLink: Object(c.createElement)("a", {
                href: wpseoScriptData.searchAppearance.userEditUrl.replace("{user_id}", this.state.value)
              })
            }
          });
        }
      }, {
        key: "render",
        value: function value() {
          return Object(c.createElement)(c.Fragment, null, this.renderError(), Object(c.createElement)("label", {
            htmlFor: "wpseo-person-selector-name"
          }, Object(ue.__)("Name", "wordpress-seo")), Object(c.createElement)(qe.b, {
            hasLabel: !1,
            name: "wpseo-person-selector-name",
            value: this.state.value,
            onChange: this.onChange
          }), Object(c.createElement)("p", null, this.renderAuthorInfo()));
        }
      }]), i;
    }(c.Component);

    function We(e) {
      var t = e.target;
      return Object(c.createElement)(f.a, {
        target: t
      }, Object(c.createElement)(ze, null));
    }

    We.propTypes = {
      target: d.a.string.isRequired
    };
    var Ge = n(30),
        He = n.n(Ge),
        Ke = n(4),
        Ye = n(58),
        $e = n(2),
        Qe = n(112),
        Xe = n(62);

    var Je = function (e) {
      xe()(i, e);
      var t,
          n,
          r = (t = i, n = function () {
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
            r = Fe()(t);

        if (n) {
          var i = Fe()(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);

        return Ne()(this, e);
      });

      function i() {
        return Re()(this, i), r.apply(this, arguments);
      }

      return De()(i, [{
        key: "render",
        value: function value() {
          var e = this.props,
              t = e.title,
              n = e.description,
              r = e.replacementVariables,
              i = e.recommendedReplacementVariables,
              a = e.titleTarget,
              o = e.descriptionTarget,
              u = e.labels,
              s = e.descriptionPlaceholder,
              l = e.hasNewBadge,
              d = e.isDisabled,
              p = e.hasPremiumBadge,
              f = s || Object(ue.__)("Modify your meta description by editing it right here", "wordpress-seo");
          return Object(c.createElement)(Qe.a, {
            hasPaperStyle: this.props.hasPaperStyle
          }, Object(c.createElement)(Ye.SettingsSnippetEditor, {
            descriptionEditorFieldPlaceholder: f,
            onChange: function onChange(e, r) {
              switch (e) {
                case "title":
                  t.onChange(r);
                  break;

                case "description":
                  n.onChange(r);
              }
            },
            replacementVariables: r,
            recommendedReplacementVariables: i,
            data: {
              title: t.value,
              description: n.value
            },
            hasPaperStyle: this.props.hasPaperStyle,
            fieldIds: {
              title: a + "-snippet-editor",
              description: o + "-snippet-editor"
            },
            labels: u,
            hasNewBadge: l,
            isDisabled: d,
            hasPremiumBadge: p
          }));
        }
      }]), i;
    }(c.Component);

    Je.propTypes = {
      replacementVariables: Ye.replacementVariablesShape,
      recommendedReplacementVariables: Ye.recommendedReplacementVariablesShape,
      title: Xe.b,
      description: Xe.b,
      postType: d.a.string,
      hasPaperStyle: d.a.bool,
      titleTarget: d.a.string.isRequired,
      descriptionTarget: d.a.string.isRequired,
      labels: d.a.shape({
        title: d.a.string,
        description: d.a.string
      }),
      descriptionPlaceholder: d.a.string,
      hasNewBadge: d.a.bool,
      isDisabled: d.a.bool,
      hasPremiumBadge: d.a.bool
    }, Je.defaultProps = {
      hasPaperStyle: !0,
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1
    };
    var Ze,
        et = Object(Xe.a)(function (e) {
      return [{
        name: "title",
        fieldId: e.titleTarget
      }, {
        name: "description",
        fieldId: e.descriptionTarget
      }];
    })(Je);

    function tt(e) {
      var t = e.target,
          n = e.replacementVariables,
          r = e.recommendedReplacementVariables,
          i = e.titleTarget,
          a = e.descriptionTarget,
          o = e.hasPaperStyle,
          u = e.labels,
          s = e.descriptionPlaceholder,
          l = e.hasNewBadge,
          d = e.isDisabled,
          p = e.hasPremiumBadge;
      return Object(c.createElement)(f.a, {
        target: t
      }, Object(c.createElement)(et, {
        replacementVariables: n,
        recommendedReplacementVariables: r,
        titleTarget: i,
        descriptionTarget: a,
        hasPaperStyle: o,
        labels: u,
        descriptionPlaceholder: s,
        hasNewBadge: l,
        isDisabled: d,
        hasPremiumBadge: p
      }));
    }

    tt.propTypes = {
      target: d.a.object.isRequired,
      replacementVariables: Ye.replacementVariablesShape,
      recommendedReplacementVariables: Ye.recommendedReplacementVariablesShape,
      titleTarget: d.a.string.isRequired,
      descriptionTarget: d.a.string.isRequired,
      hasPaperStyle: d.a.bool,
      labels: d.a.shape({
        title: d.a.string,
        description: d.a.string
      }),
      descriptionPlaceholder: d.a.string,
      hasNewBadge: d.a.bool,
      isDisabled: d.a.bool,
      hasPremiumBadge: d.a.bool
    }, tt.defaultProps = {
      hasNewBadge: !1,
      isDisabled: !1,
      hasPremiumBadge: !1
    };

    var nt = s.a.div(Ze || (Ze = ce()(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: space-between;\n\tmax-width: 640px;\n"]))),
        rt = function (e) {
      xe()(i, e);
      var t,
          n,
          r = (t = i, n = function () {
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
            r = Fe()(t);

        if (n) {
          var i = Fe()(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);

        return Ne()(this, e);
      });

      function i(e) {
        var t;
        return Re()(this, i), (t = r.call(this, e)).state = {
          isActive: !1,
          isHovered: !1
        }, t.focus = t.focus.bind(ke()(t)), t;
      }

      return De()(i, [{
        key: "focus",
        value: function value() {
          this.inputRef.focus();
        }
      }, {
        key: "render",
        value: function value() {
          var e = this,
              t = this.props,
              n = t.label,
              r = t.replacementVariables,
              i = t.recommendedReplacementVariables,
              a = t.field,
              o = t.fieldId;
          return Object(c.createElement)(nt, null, Object(c.createElement)(Ye.ReplacementVariableEditor, {
            type: "title",
            label: n,
            fieldId: o + "-snippet-editor",
            isActive: this.state.isActive,
            isHowvered: this.state.isHovered,
            content: a.value,
            onChange: a.onChange,
            onFocus: this.focus,
            replacementVariables: r,
            recommendedReplacementVariables: i,
            editorRef: function editorRef(t) {
              e.inputRef = t;
            }
          }));
        }
      }]), i;
    }(c.Component);

    rt.propTypes = {
      replacementVariables: Ye.replacementVariablesShape,
      recommendedReplacementVariables: Ye.recommendedReplacementVariablesShape,
      label: d.a.string.isRequired,
      fieldId: d.a.string.isRequired,
      field: Xe.b
    };
    var it = Object(Xe.a)(function (e) {
      return [{
        name: "field",
        fieldId: e.fieldId
      }];
    })(rt);

    function at(e) {
      var t = e.target,
          n = e.label,
          r = e.replacementVariables,
          i = e.recommendedReplacementVariables,
          a = e.fieldId;
      return Object(c.createElement)(f.a, {
        target: t
      }, Object(c.createElement)(it, {
        label: n,
        replacementVariables: r,
        recommendedReplacementVariables: i,
        fieldId: a
      }));
    }

    at.propTypes = {
      target: d.a.object.isRequired,
      label: d.a.string.isRequired,
      replacementVariables: Ye.replacementVariablesShape,
      recommendedReplacementVariables: Ye.recommendedReplacementVariablesShape,
      fieldId: d.a.string.isRequired
    };

    var ot = function (e) {
      xe()(i, e);
      var t,
          n,
          r = (t = i, n = function () {
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
            r = Fe()(t);

        if (n) {
          var i = Fe()(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);

        return Ne()(this, e);
      });

      function i(e) {
        return Re()(this, i), r.call(this, e);
      }

      return De()(i, [{
        key: "filterEditorSpecificReplaceVars",
        value: function value(e, t) {
          var n = wpseoScriptData.analysis.plugins.replaceVars,
              r = n.editor_specific_replace_vars,
              i = void 0 === r ? {} : r,
              a = n.shared_replace_vars,
              o = i[t] || [],
              c = [].concat(He()(a), He()(o));
          return e.filter(function (e) {
            return Object($e.includes)(c, e.name);
          });
        }
      }, {
        key: "renderEditors",
        value: function value() {
          var e = this;
          return Object($e.map)(this.props.editorElements, function (t) {
            var n = t.dataset,
                r = n.reactReplacevarTitleFieldId,
                i = n.reactReplacevarMetadescFieldId,
                a = n.reactReplacevarPageTypeRecommended,
                o = n.reactReplacevarPageTypeSpecific,
                u = n.reactReplacevarPaperStyle,
                s = n.reactReplacevarLabelTitle,
                l = n.reactReplacevarLabelDescription,
                d = n.reactReplacevarDescriptionPlaceholder,
                p = n.reactReplacevarHasNewBadge,
                f = n.reactReplacevarIsDisabled,
                g = n.reactReplacevarHasPremiumBadge,
                m = e.filterEditorSpecificReplaceVars(e.props.replacementVariables, o),
                h = {
              title: s,
              description: l
            };
            return Object(c.createElement)(tt, {
              key: r,
              target: t,
              replacementVariables: m,
              recommendedReplacementVariables: e.props.recommendedReplacementVariables[a],
              titleTarget: r,
              descriptionTarget: i,
              hasPaperStyle: "1" === u,
              labels: h,
              descriptionPlaceholder: d,
              hasNewBadge: "1" === p,
              isDisabled: "1" === f,
              hasPremiumBadge: "1" === g
            });
          });
        }
      }, {
        key: "renderSingleFields",
        value: function value() {
          var e = this;
          return Object($e.map)(this.props.singleFieldElements, function (t) {
            var n = t.dataset,
                r = n.reactReplacevarFieldId,
                i = n.reactReplacevarFieldLabel,
                a = n.reactReplacevarPageTypeRecommended,
                o = n.reactReplacevarPageTypeSpecific,
                u = e.filterEditorSpecificReplaceVars(e.props.replacementVariables, o);
            return Object(c.createElement)(at, {
              key: r,
              target: t,
              label: i,
              replacementVariables: u,
              recommendedReplacementVariables: e.props.recommendedReplacementVariables[a],
              fieldId: r
            });
          });
        }
      }, {
        key: "render",
        value: function value() {
          return Object(c.createElement)(c.Fragment, null, this.renderEditors(), this.renderSingleFields());
        }
      }]), i;
    }(c.Component);

    ot.propTypes = {
      replacementVariables: Ye.replacementVariablesShape,
      recommendedReplacementVariables: d.a.object,
      editorElements: d.a.object,
      singleFieldElements: d.a.object
    }, ot.defaultProps = {
      replacementVariables: [],
      recommendedReplacementVariables: {},
      editorElements: [],
      singleFieldElements: []
    };
    var ct = Object(Ke.withSelect)(function (e) {
      var t = e("yoast-seo/settings"),
          n = t.getReplaceVars,
          r = t.getRecommendedReplaceVars;
      return {
        replacementVariables: n(),
        recommendedReplacementVariables: r()
      };
    })(ot),
        ut = n(10),
        st = n.n(ut),
        lt = n(255),
        dt = n.n(lt),
        pt = n(85);

    function ft(e) {
      var t = e.target,
          n = e.postType,
          r = e.postTypeName,
          i = e.pageTypeFieldId,
          a = e.articleTypeFieldId,
          o = e.pageTypeOptions,
          u = e.articleTypeOptions;
      return Object(c.createElement)(f.a, {
        target: t
      }, Object(c.createElement)(pt.a, {
        postType: n,
        postTypeName: r,
        pageTypeFieldId: i,
        articleTypeFieldId: a,
        pageTypeOptions: o,
        articleTypeOptions: u
      }));
    }

    function gt(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    ft.propTypes = {
      target: d.a.object.isRequired,
      postType: d.a.string.isRequired,
      postTypeName: d.a.string.isRequired,
      pageTypeFieldId: d.a.string.isRequired,
      articleTypeFieldId: d.a.string,
      pageTypeOptions: pt.b.isRequired,
      articleTypeOptions: pt.b.isRequired
    }, ft.defaultProps = {
      articleTypeFieldId: ""
    };

    var mt = function mt(e, t) {
      var n = Object(ue.__)("default", "wordpress-seo");
      return e.map(function (e) {
        return e.value !== t ? function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? gt(Object(n), !0).forEach(function (t) {
              st()(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gt(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }

          return e;
        }({}, e) : {
          value: e.value,
          name: "".concat(e.name, " (").concat(n, ")")
        };
      });
    },
        ht = function ht(e) {
      return dt()(e.targets, function (e) {
        var t = e.getAttribute("data-schema-settings-post-type"),
            n = e.getAttribute("data-schema-settings-page-type-default"),
            r = e.getAttribute("data-schema-settings-article-type-default"),
            i = mt(window.wpseoScriptData.searchAppearance.schema.pageTypeOptions, n),
            a = mt(window.wpseoScriptData.searchAppearance.schema.articleTypeOptions, r);
        return Object(c.createElement)(ft, {
          key: t,
          target: e,
          postType: t,
          postTypeName: e.getAttribute("data-schema-settings-post-type-name"),
          pageTypeFieldId: e.getAttribute("data-schema-settings-page-type-field-id"),
          articleTypeFieldId: e.getAttribute("data-schema-settings-article-type-field-id"),
          pageTypeOptions: i,
          articleTypeOptions: a
        });
      });
    };

    ht.propTypes = {
      targets: d.a.object.isRequired
    };

    var bt,
        yt = ht,
        Et = n(61),
        vt = n(25),
        Ot = n(110),
        wt = n(113),
        _t = n(114),
        Tt = n(116),
        St = n(73);

    if (Object(a.a)(i.a), wpseoScriptData) {
      void 0 !== wpseoScriptData.media && Object(o.a)(i.a);
      var It = void 0 !== wpseoScriptData.searchAppearance;
      (It || void 0 !== wpseoScriptData.dismissedAlerts) && function (e) {
        var t = Object($e.get)(window, "wpseoScriptData.analysis.plugins.replaceVars.replace_vars", []),
            n = Object($e.get)(window, "wpseoScriptData.analysis.plugins.replaceVars.recommended_replace_vars", {});
        e.dispatch(Object(vt.setSettings)({
          snippetEditor: {
            recommendedReplacementVariables: n
          }
        })), t.forEach(function (t) {
          var n = t.name.replace(/ /g, "_");
          e.dispatch(Object(vt.updateReplacementVariable)(n, t.value, t.label));
        });
      }(Object(Ke.registerStore)("yoast-seo/settings", {
        reducer: Object(Ke.combineReducers)({
          dismissedAlerts: wt.a,
          settings: _t.a,
          snippetEditor: Tt.a
        }),
        selectors: {
          isAlertDismissed: St.isAlertDismissed,
          getReplaceVars: St.getReplaceVars,
          getRecommendedReplaceVars: St.getRecommendedReplaceVars
        },
        actions: {
          dismissAlert: vt.dismissAlert
        },
        controls: Ot
      })), It && function () {
        Object(Et.setYoastComponentsL10n)(), Object(Et.setWordPressSeoL10n)();
        var e = document.querySelectorAll("[data-react-replacevar-editor]"),
            t = document.querySelectorAll("[data-react-replacevar-field]"),
            n = Array.from(document.querySelectorAll("[data-react-image-portal]")),
            r = document.querySelectorAll("[data-schema-settings]"),
            i = document.createElement("div");
        document.body.appendChild(i);
        var a = {
          isRtl: wpseoScriptData.searchAppearance.isRtl
        },
            o = wpseoScriptData.searchAppearance,
            s = o.showLocalSEOUpsell,
            l = o.localSEOUpsellURL,
            d = o.brushstrokeBackgroundURL,
            p = o.knowledgeGraphCompanyInfoMissing;
        Object(c.render)(Object(c.createElement)(u.ThemeProvider, {
          theme: a
        }, Object(c.createElement)(c.Fragment, null, Object(c.createElement)(ct, {
          singleFieldElements: t,
          editorElements: e
        }), Object(c.createElement)(We, {
          target: "wpseo-person-selector"
        }), Object(c.createElement)(g, {
          target: "knowledge-graph-company-warning",
          message: p.message,
          link: p.URL
        }), Object(c.createElement)(ae.a, {
          label: Object(ue.__)("Organization logo", "wordpress-seo"),
          hasPreview: !0,
          target: "yoast-organization-image-select",
          hiddenField: "company_logo",
          hiddenFieldImageId: "company_logo_id",
          selectImageButtonId: "yoast-organization-image-select-button",
          replaceImageButtonId: "yoast-organization-image-replace-button",
          removeImageButtonId: "yoast-organization-image-remove-button"
        }), Object(c.createElement)(ae.a, {
          label: Object(ue.__)("Person logo / avatar", "wordpress-seo"),
          hasPreview: !0,
          target: "yoast-person-image-select",
          hiddenField: "person_logo",
          hiddenFieldImageId: "person_logo_id",
          selectImageButtonId: "yoast-person-image-select-button",
          replaceImageButtonId: "yoast-person-image-replace-button",
          removeImageButtonId: "yoast-person-image-remove-button"
        }), n.map(function (e) {
          return Object(c.createElement)(ae.a, {
            key: e.id,
            label: e.dataset.reactImagePortalLabel || Object(ue.__)("Social image", "wordpress-seo"),
            hasPreview: !0,
            target: e.id,
            hiddenField: e.dataset.reactImagePortalTargetImage,
            hiddenFieldImageId: e.dataset.reactImagePortalTargetImageId,
            selectImageButtonId: e.id + "-select-button",
            replaceImageButtonId: e.id + "-replace-button",
            removeImageButtonId: e.id + "-remove-button",
            hasNewBadge: "1" === e.dataset.reactImagePortalHasNewBadge,
            isDisabled: "1" === e.dataset.reactImagePortalIsDisabled,
            hasPremiumBadge: "1" === e.dataset.reactImagePortalHasPremiumBadge,
            hasImageValidation: "1" === e.dataset.reactImagePortalHasImageValidation
          });
        }), s && Object(c.createElement)(Ie, {
          target: "wpseo-local-seo-upsell",
          url: l,
          backgroundUrl: d
        }), Object(c.createElement)(yt, {
          targets: r
        }))), i);
      }(), void 0 !== wpseoScriptData.social && (bt = document.createElement("div"), document.body.appendChild(bt), Object(c.render)(Object(c.createElement)(c.Fragment, null, Object(c.createElement)(ae.a, {
        label: Object(ue.__)("Image", "wordpress-seo"),
        hasPreview: !0,
        target: "yoast-og-default-image-select",
        hiddenField: "og_default_image",
        hiddenFieldImageId: "og_default_image_id",
        selectImageButtonId: "yoast-og-default-image-select-button",
        replaceImageButtonId: "yoast-og-default-image-replace-button",
        removeImageButtonId: "yoast-og-default-image-remove-button",
        hasImageValidation: !0
      })), bt));
    }
  },
  36: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    });
    var r = n(0),
        i = n(1),
        a = n.n(i);

    function o(e) {
      var t = e.target,
          n = e.children,
          i = t;
      return "string" == typeof t && (i = document.getElementById(t)), i ? Object(r.createPortal)(n, i) : null;
    }

    o.propTypes = {
      target: a.a.oneOfType([a.a.string, a.a.object]).isRequired,
      children: a.a.node.isRequired
    };
  },
  37: function _(e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    },
        i = c(n(16)),
        a = c(n(130)),
        o = c(n(133));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }

    var u = void 0;

    t["default"] = function (e) {
      var t = e.mixedString,
          n = e.components,
          c = e.throwErrors;
      if (u = t, !n) return t;

      if ("object" !== (void 0 === n ? "undefined" : r(n))) {
        if (c) throw new Error("Interpolation Error: unable to process `" + t + "` because components is not an object");
        return t;
      }

      var s = (0, o["default"])(t);

      try {
        return function e(t, n) {
          var o,
              c,
              s,
              l,
              d,
              p,
              f,
              g,
              m = [],
              h = {};

          for (p = 0; p < t.length; p++) {
            if ("string" !== (d = t[p]).type) {
              if (!n.hasOwnProperty(d.value) || void 0 === n[d.value]) throw new Error("Invalid interpolation, missing component node: `" + d.value + "`");
              if ("object" !== r(n[d.value])) throw new Error("Invalid interpolation, component node must be a ReactElement or null: `" + d.value + "`", "\n> " + u);
              if ("componentClose" === d.type) throw new Error("Missing opening component token: `" + d.value + "`");

              if ("componentOpen" === d.type) {
                o = n[d.value], s = p;
                break;
              }

              m.push(n[d.value]);
            } else m.push(d.value);
          }

          return o && (l = function (e, t) {
            var n,
                r,
                i = t[e],
                a = 0;

            for (r = e + 1; r < t.length; r++) {
              if ((n = t[r]).value === i.value) {
                if ("componentOpen" === n.type) {
                  a++;
                  continue;
                }

                if ("componentClose" === n.type) {
                  if (0 === a) return r;
                  a--;
                }
              }
            }

            throw new Error("Missing closing component token `" + i.value + "`");
          }(s, t), f = e(t.slice(s + 1, l), n), c = i["default"].cloneElement(o, {}, f), m.push(c), l < t.length - 1 && (g = e(t.slice(l + 1), n), m = m.concat(g))), 1 === m.length ? m[0] : (m.forEach(function (e, t) {
            e && (h["interpolation-child-" + t] = e);
          }), (0, a["default"])(h));
        }(s, n);
      } catch (e) {
        if (c) throw new Error("Interpolation Error: unable to process `" + t + "` because of error `" + e.message + "`");
        return t;
      }
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
      return f;
    }), n.d(t, "handlePrefixes", function () {
      return g;
    }), n.d(t, "createLabelFromName", function () {
      return m;
    }), n.d(t, "pushNewReplaceVar", function () {
      return h;
    }), n.d(t, "replaceSpaces", function () {
      return b;
    }), n.d(t, "prepareCustomFieldForDispatch", function () {
      return y;
    }), n.d(t, "prepareCustomTaxonomyForDispatch", function () {
      return E;
    }), n.d(t, "mapCustomTaxonomies", function () {
      return v;
    }), n.d(t, "mapCustomFields", function () {
      return O;
    }), n.d(t, "excerptFromContent", function () {
      return w;
    }), n.d(t, "applyReplaceUsingPlugin", function () {
      return _;
    });
    var r = n(10),
        i = n.n(r),
        a = n(2),
        o = n(79),
        c = n(17);

    function u(e) {
      return e.charAt(0).toUpperCase() + e.slice(1);
    }

    function s(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function l(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? s(Object(n), !0).forEach(function (t) {
          i()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var d = n(9).strings.stripHTMLTags,
        p = ["slug", "content", "contentImage", "snippetPreviewImageURL"];

    function f(e, t) {
      Object(a.forEach)(e, function (e, n) {
        p.includes(n) || t.dispatch(Object(c.l)(n, e));
      });
    }

    function g(e) {
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

    function m(e) {
      return u(e = g(e));
    }

    function h(e, t) {
      return e.push({
        name: t.name,
        label: t.label || m(t.name),
        value: t.value
      }), e;
    }

    function b(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "_";
      return e.replace(/\s/g, t);
    }

    function y(e) {
      return {
        name: "cf_" + b(e),
        label: u(e + " (custom field)")
      };
    }

    function E(e) {
      var t = b(e);
      return {
        name: "ct_" + t,
        label: u(e + " (custom taxonomy)"),
        descriptionName: "ct_desc_" + t,
        descriptionLabel: u(e + " description (custom taxonomy)")
      };
    }

    function v(e, t) {
      return e.custom_taxonomies ? (Object(a.forEach)(e.custom_taxonomies, function (e, n) {
        var r = E(n),
            i = r.name,
            a = r.label,
            o = r.descriptionName,
            u = r.descriptionLabel;
        t.dispatch(Object(c.l)(i, e.name, a)), t.dispatch(Object(c.l)(o, e.description, u));
      }), Object(a.omit)(l({}, e), "custom_taxonomies")) : e;
    }

    function O(e, t) {
      return e.custom_fields ? (Object(a.forEach)(e.custom_fields, function (e, n) {
        var r = y(n),
            i = r.name,
            a = r.label;
        t.dispatch(Object(c.l)(i, e, a));
      }), Object(a.omit)(l({}, e), "custom_fields")) : e;
    }

    function w(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 156;
      return (e = (e = Object(o.stripTags)(e)).trim()).length <= t ? e : (e = e.substring(0, t)).substring(0, e.lastIndexOf(" "));
    }

    var _ = function _(e) {
      var t = Object(a.get)(window, ["YoastSEO", "app", "pluggable"], !1);
      if (!t || !Object(a.get)(window, ["YoastSEO", "app", "pluggable", "loaded"], !1)) return function (e) {
        var t = Object(a.get)(window, ["YoastSEO", "wp", "replaceVarsPlugin", "replaceVariables"], a.identity);
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
  41: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "g", function () {
      return i;
    }), n.d(t, "e", function () {
      return a;
    }), n.d(t, "f", function () {
      return o;
    }), n.d(t, "b", function () {
      return c;
    }), n.d(t, "c", function () {
      return u;
    }), n.d(t, "d", function () {
      return s;
    }), n.d(t, "j", function () {
      return l;
    }), n.d(t, "m", function () {
      return d;
    }), n.d(t, "l", function () {
      return p;
    }), n.d(t, "n", function () {
      return f;
    }), n.d(t, "h", function () {
      return g;
    }), n.d(t, "k", function () {
      return m;
    }), n.d(t, "i", function () {
      return h;
    });
    var r = "CHANGE_COUNTRY",
        i = "SET_REQUEST_SUCCEEDED",
        a = "SET_REQUEST_FAILED",
        o = "SET_LIMIT_REACHED",
        c = "NEW_REQUEST",
        u = "NO_DATA_FOUND",
        s = "SET_LOGIN_STATUS";

    function l(e, t) {
      return {
        type: c,
        countryCode: e,
        keyphrase: t
      };
    }

    function d(e) {
      return {
        type: i,
        response: e
      };
    }

    function p(e) {
      return {
        type: a,
        response: e
      };
    }

    function f() {
      return {
        type: o
      };
    }

    function g(e) {
      return {
        type: r,
        countryCode: e
      };
    }

    function m() {
      return {
        type: u
      };
    }

    function h(e) {
      return {
        type: s,
        loginStatus: e
      };
    }
  },
  43: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return r;
    }), n.d(t, "a", function () {
      return i;
    }), n.d(t, "d", function () {
      return a;
    }), n.d(t, "c", function () {
      return o;
    });

    var r = "SET_SETTINGS",
        i = "SET_CONTENT_IMAGE",
        a = function a(e) {
      return {
        type: r,
        settings: e
      };
    },
        o = function o(e) {
      return {
        type: i,
        src: e
      };
    };
  },
  44: function _(e, t, n) {
    "use strict";

    n.d(t, "f", function () {
      return u;
    }), n.d(t, "e", function () {
      return s;
    }), n.d(t, "b", function () {
      return l;
    }), n.d(t, "c", function () {
      return d;
    }), n.d(t, "d", function () {
      return p;
    }), n.d(t, "a", function () {
      return f;
    }), n.d(t, "l", function () {
      return g;
    }), n.d(t, "k", function () {
      return m;
    }), n.d(t, "h", function () {
      return h;
    }), n.d(t, "i", function () {
      return b;
    }), n.d(t, "j", function () {
      return y;
    }), n.d(t, "g", function () {
      return E;
    });

    var r = n(5),
        i = n.n(r),
        a = n(7),
        o = n.n(a),
        c = function () {
      function e() {
        i()(this, e);
      }

      return o()(e, null, [{
        key: "noIndexElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_meta-robots-noindex" : "hidden_wpseo_noindex");
        }
      }, {
        key: "noFollowElement",
        get: function get() {
          return document.getElementById("yoast_wpseo_meta-robots-nofollow");
        }
      }, {
        key: "advancedElement",
        get: function get() {
          return document.getElementById("yoast_wpseo_meta-robots-adv");
        }
      }, {
        key: "breadcrumbsTitleElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_bctitle" : "hidden_wpseo_bctitle");
        }
      }, {
        key: "canonicalElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_canonical" : "hidden_wpseo_canonical");
        }
      }, {
        key: "noIndex",
        get: function get() {
          return e.noIndexElement && e.noIndexElement.value || "";
        },
        set: function set(t) {
          e.noIndexElement.value = t;
        }
      }, {
        key: "noFollow",
        get: function get() {
          return e.noFollowElement && e.noFollowElement.value || "";
        },
        set: function set(t) {
          e.noFollowElement.value = t;
        }
      }, {
        key: "advanced",
        get: function get() {
          return e.advancedElement && e.advancedElement.value || "";
        },
        set: function set(t) {
          e.advancedElement.value = t;
        }
      }, {
        key: "breadcrumbsTitle",
        get: function get() {
          return e.breadcrumbsTitleElement && e.breadcrumbsTitleElement.value || "";
        },
        set: function set(t) {
          e.breadcrumbsTitleElement.value = t;
        }
      }, {
        key: "canonical",
        get: function get() {
          return e.canonicalElement && e.canonicalElement.value || "";
        },
        set: function set(t) {
          e.canonicalElement.value = t;
        }
      }]), e;
    }(),
        u = "SET_NO_INDEX",
        s = "SET_NO_FOLLOW",
        l = "SET_ADVANCED",
        d = "SET_BREADCRUMBS_TITLE",
        p = "SET_CANONICAL_URL",
        f = "LOAD_ADVANCED_SETTINGS",
        g = function g(e) {
      return c.noIndex = e, {
        type: u,
        value: e
      };
    },
        m = function m(e) {
      return c.noFollow = e, {
        type: s,
        value: e
      };
    },
        h = function h(e) {
      return c.advanced = e.join(","), {
        type: l,
        value: e
      };
    },
        b = function b(e) {
      return c.breadcrumbsTitle = e, {
        type: d,
        value: e
      };
    },
        y = function y(e) {
      return c.canonical = e, {
        type: p,
        value: e
      };
    },
        E = function E() {
      return {
        type: f,
        settings: {
          noIndex: c.noIndex,
          noFollow: c.noFollow,
          advanced: c.advanced.split(","),
          breadcrumbsTitle: c.breadcrumbsTitle,
          canonical: c.canonical,
          isLoading: !1
        }
      };
    };
  },
  45: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });

    var r = "WPSEO_SET_MARKER_STATUS",
        i = function i(e) {
      return {
        type: r,
        marksButtonStatus: e
      };
    };
  },
  46: function _(e, t, n) {
    var r = n(102);

    e.exports = function (e, t) {
      if (null == e) return {};
      var n,
          i,
          a = r(e, t);

      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);

        for (i = 0; i < o.length; i++) {
          n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
        }
      }

      return a;
    };
  },
  48: function _(e, t, n) {
    "use strict";

    n.d(t, "e", function () {
      return s;
    }), n.d(t, "c", function () {
      return l;
    }), n.d(t, "d", function () {
      return d;
    }), n.d(t, "a", function () {
      return p;
    }), n.d(t, "b", function () {
      return f;
    }), n.d(t, "j", function () {
      return g;
    }), n.d(t, "h", function () {
      return m;
    }), n.d(t, "i", function () {
      return h;
    }), n.d(t, "f", function () {
      return b;
    }), n.d(t, "g", function () {
      return y;
    });

    var r = n(4),
        i = n(5),
        a = n.n(i),
        o = n(7),
        c = n.n(o),
        u = function () {
      function e() {
        a()(this, e);
      }

      return c()(e, null, [{
        key: "titleElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_twitter-title" : "hidden_wpseo_twitter-title");
        }
      }, {
        key: "descriptionElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_twitter-description" : "hidden_wpseo_twitter-description");
        }
      }, {
        key: "imageIdElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_twitter-image-id" : "hidden_wpseo_twitter-image-id");
        }
      }, {
        key: "imageUrlElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_twitter-image" : "hidden_wpseo_twitter-image");
        }
      }, {
        key: "title",
        get: function get() {
          return e.titleElement.value;
        },
        set: function set(t) {
          e.titleElement.value = t;
        }
      }, {
        key: "description",
        get: function get() {
          return e.descriptionElement.value;
        },
        set: function set(t) {
          e.descriptionElement.value = t;
        }
      }, {
        key: "imageId",
        get: function get() {
          return e.imageIdElement.value;
        },
        set: function set(t) {
          e.imageIdElement.value = t;
        }
      }, {
        key: "imageUrl",
        get: function get() {
          return e.imageUrlElement.value;
        },
        set: function set(t) {
          e.imageUrlElement.value = t;
        }
      }]), e;
    }(),
        s = "SET_TWITTER_TITLE",
        l = "SET_TWITTER_DESCRIPTION",
        d = "SET_TWITTER_IMAGE",
        p = "CLEAR_TWITTER_IMAGE",
        f = "LOAD_TWITTER_PREVIEW",
        g = function g(e) {
      return e.trim() === Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim() ? u.title = "" : u.title = e, {
        type: s,
        title: e
      };
    },
        m = function m(e) {
      return e.trim() === Object(r.select)("yoast-seo/editor").getSocialDescriptionTemplate().trim() ? u.description = "" : u.description = e, {
        type: l,
        description: e
      };
    },
        h = function h(e) {
      return u.imageId = e.id, u.imageUrl = e.url, {
        type: d,
        image: e
      };
    },
        b = function b() {
      return u.imageId = "", u.imageUrl = "", {
        type: p
      };
    },
        y = function y() {
      var e = Object(r.select)("yoast-seo/editor"),
          t = e.getSocialDescriptionTemplate,
          n = e.getSocialTitleTemplate;
      return {
        type: f,
        imageId: u.imageId,
        imageUrl: u.imageUrl,
        description: u.description || t(),
        title: u.title || n()
      };
    };
  },
  49: function _(e, t, n) {
    "use strict";

    n.d(t, "e", function () {
      return s;
    }), n.d(t, "c", function () {
      return l;
    }), n.d(t, "d", function () {
      return d;
    }), n.d(t, "a", function () {
      return p;
    }), n.d(t, "b", function () {
      return f;
    }), n.d(t, "j", function () {
      return g;
    }), n.d(t, "h", function () {
      return m;
    }), n.d(t, "i", function () {
      return h;
    }), n.d(t, "f", function () {
      return b;
    }), n.d(t, "g", function () {
      return y;
    });

    var r = n(4),
        i = n(5),
        a = n.n(i),
        o = n(7),
        c = n.n(o),
        u = function () {
      function e() {
        a()(this, e);
      }

      return c()(e, null, [{
        key: "titleElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_opengraph-title" : "hidden_wpseo_opengraph-title");
        }
      }, {
        key: "descriptionElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_opengraph-description" : "hidden_wpseo_opengraph-description");
        }
      }, {
        key: "imageIdElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_opengraph-image-id" : "hidden_wpseo_opengraph-image-id");
        }
      }, {
        key: "imageUrlElement",
        get: function get() {
          return document.getElementById(window.wpseoScriptData.isPost ? "yoast_wpseo_opengraph-image" : "hidden_wpseo_opengraph-image");
        }
      }, {
        key: "title",
        get: function get() {
          return e.titleElement.value;
        },
        set: function set(t) {
          e.titleElement.value = t;
        }
      }, {
        key: "description",
        get: function get() {
          return e.descriptionElement.value;
        },
        set: function set(t) {
          e.descriptionElement.value = t;
        }
      }, {
        key: "imageId",
        get: function get() {
          return e.imageIdElement.value;
        },
        set: function set(t) {
          e.imageIdElement.value = t;
        }
      }, {
        key: "imageUrl",
        get: function get() {
          return e.imageUrlElement.value;
        },
        set: function set(t) {
          e.imageUrlElement.value = t;
        }
      }]), e;
    }(),
        s = "SET_FACEBOOK_TITLE",
        l = "SET_FACEBOOK_DESCRIPTION",
        d = "SET_FACEBOOK_IMAGE",
        p = "CLEAR_FACEBOOK_IMAGE",
        f = "LOAD_FACEBOOK_PREVIEW",
        g = function g(e) {
      return e.trim() === Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim() ? u.title = "" : u.title = e, {
        type: s,
        title: e
      };
    },
        m = function m(e) {
      return e.trim() === Object(r.select)("yoast-seo/editor").getSocialDescriptionTemplate().trim() ? u.description = "" : u.description = e, {
        type: l,
        description: e
      };
    },
        h = function h(e) {
      return u.imageUrl = e.url, u.imageId = e.id, {
        type: d,
        image: e
      };
    },
        b = function b() {
      return u.imageId = "", u.imageUrl = "", {
        type: p
      };
    },
        y = function y() {
      var e = Object(r.select)("yoast-seo/editor"),
          t = e.getSocialDescriptionTemplate,
          n = e.getSocialTitleTemplate;
      return {
        type: f,
        imageId: u.imageId,
        imageUrl: u.imageUrl,
        description: u.description || t(),
        title: u.title || n()
      };
    };
  },
  5: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  },
  56: function _(e, t, n) {
    "use strict";

    n.d(t, "d", function () {
      return i;
    }), n.d(t, "c", function () {
      return a;
    }), n.d(t, "b", function () {
      return o;
    }), n.d(t, "a", function () {
      return c;
    }), n.d(t, "h", function () {
      return u;
    }), n.d(t, "g", function () {
      return s;
    }), n.d(t, "f", function () {
      return l;
    }), n.d(t, "e", function () {
      return d;
    });

    var r = n(33),
        i = "SET_PAGE_TYPE",
        a = "SET_ARTICLE_TYPE",
        o = "GET_SCHEMA_PAGE_DATA",
        c = "GET_SCHEMA_ARTICLE_DATA",
        u = function u(e) {
      return r.a.pageType = e, {
        type: i,
        pageType: e
      };
    },
        s = function s(e) {
      return r.a.articleType = e, {
        type: a,
        articleType: e
      };
    },
        l = function l() {
      return {
        type: o,
        pageType: r.a.pageType,
        defaultPageType: r.a.defaultPageType
      };
    },
        d = function d() {
      return {
        type: c,
        articleType: r.a.articleType,
        defaultArticleType: r.a.defaultArticleType
      };
    };
  },
  58: function _(e, t) {
    e.exports = window.yoast.replacementVariableEditor;
  },
  59: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "c", function () {
      return a;
    }), n.d(t, "b", function () {
      return o;
    }), n.d(t, "d", function () {
      return c;
    }), n.d(t, "e", function () {
      return u;
    }), n.d(t, "f", function () {
      return s;
    });

    var r = n(29),
        i = "".concat("WPSEO_", "LOAD_CORNERSTONE_CONTENT"),
        a = "".concat("WPSEO_", "TOGGLE_CORNERSTONE_CONTENT"),
        o = "".concat("WPSEO_", "SET_CORNERSTONE_CONTENT"),
        c = function c() {
      return {
        type: o,
        isCornerstone: r.a.isCornerstone
      };
    },
        u = function u(e) {
      return r.a.isCornerstone = e, {
        type: o,
        isCornerstone: e
      };
    },
        s = function s() {
      return r.a.isCornerstone = !r.a.isCornerstone, {
        type: a
      };
    };
  },
  6: function _(e, t) {
    e.exports = window.yoast.componentsNew;
  },
  60: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return i;
    }), n.d(t, "b", function () {
      return a;
    }), n.d(t, "c", function () {
      return o;
    }), n.d(t, "d", function () {
      return c;
    });

    var r = n(29),
        i = "".concat("WPSEO_", "LOAD_FOCUS_KEYWORD"),
        a = "".concat("WPSEO_", "SET_FOCUS_KEYWORD"),
        o = function o() {
      return {
        type: i,
        keyword: r.a.keyphrase
      };
    },
        c = function c(e) {
      return r.a.keyphrase = e, {
        type: a,
        keyword: e
      };
    };
  },
  61: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "setTextdomainL10n", function () {
      return a;
    }), n.d(t, "setYoastComponentsL10n", function () {
      return o;
    }), n.d(t, "setWordPressSeoL10n", function () {
      return c;
    });
    var r = n(3),
        i = n(2);

    function a(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wpseoYoastJSL10n",
          n = Object(i.get)(window, [t, e, "locale_data", e], !1);
      !1 === n ? Object(r.setLocaleData)({
        "": {}
      }, e) : Object(r.setLocaleData)(n, e);
    }

    function o() {
      a("yoast-components");
    }

    function c() {
      a("wordpress-seo");
    }
  },
  62: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return I;
    });

    var r = n(27),
        i = n.n(r),
        a = n(46),
        o = n.n(a),
        c = n(10),
        u = n.n(c),
        s = n(5),
        l = n.n(s),
        d = n(7),
        p = n.n(d),
        f = n(11),
        g = n.n(f),
        m = n(13),
        h = n.n(m),
        b = n(14),
        y = n.n(b),
        E = n(8),
        v = n.n(E),
        O = n(0),
        w = n(1),
        _ = n.n(w);

    function T(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, r);
      }

      return n;
    }

    function S(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? T(Object(n), !0).forEach(function (t) {
          u()(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    var I = _.a.shape({
      value: _.a.string.isRequired,
      onChange: _.a.func.isRequired
    });

    t.a = function (e) {
      return function (t) {
        return function (n) {
          h()(s, n);
          var r,
              a,
              c = (r = s, a = function () {
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
                t = v()(r);

            if (a) {
              var n = v()(this).constructor;
              e = Reflect.construct(t, arguments, n);
            } else e = t.apply(this, arguments);

            return y()(this, e);
          });

          function s(t) {
            var n;
            l()(this, s), (n = c.call(this, t)).elements = {};
            var r = {};
            return n.fields = e(t), n.fields.forEach(function (e) {
              var t = e.name,
                  i = e.fieldId,
                  a = document.getElementById(i);
              a && (n.elements[t] = a, r[t] = {
                value: a.value,
                onChange: n.onChange.bind(g()(n), t)
              });
            }), n.state = r, n;
          }

          return p()(s, [{
            key: "onChange",
            value: function value(e, t) {
              var n = this;
              this.setState(S(S({}, this.state), {}, u()({}, e, S(S({}, this.state[e]), {}, {
                value: t
              }))), function () {
                n.elements[e] && (n.elements[e].value = t);
              });
            }
          }, {
            key: "render",
            value: function value() {
              var e = this.props,
                  n = e.children,
                  r = o()(e, ["children"]);
              return Object(O.createElement)(t, i()({}, r, this.state), n);
            }
          }], [{
            key: "propTypes",
            get: function get() {
              return {
                children: _.a.node
              };
            }
          }]), s;
        }(O.Component);
      };
    };
  },
  63: function _(e, t) {
    e.exports = window.wp.hooks;
  },
  67: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return u;
    }), n.d(t, "a", function () {
      return s;
    }), n.d(t, "d", function () {
      return l;
    }), n.d(t, "c", function () {
      return d;
    });

    var r = n(5),
        i = n.n(r),
        a = n(7),
        o = n.n(a),
        c = function () {
      function e() {
        i()(this, e);
      }

      return o()(e, null, [{
        key: "estimatedReadingTimeElement",
        get: function get() {
          return document.getElementById("yoast_wpseo_estimated-reading-time-minutes");
        }
      }, {
        key: "estimatedReadingTime",
        get: function get() {
          return e.estimatedReadingTimeElement && e.estimatedReadingTimeElement.value || "";
        },
        set: function set(t) {
          e.estimatedReadingTimeElement.value = t;
        }
      }]), e;
    }(),
        u = "SET_ESTIMATED_READING_TIME",
        s = "LOAD_ESTIMATED_READING_TIME";

    function l(e) {
      return c.estimatedReadingTime = e, {
        type: u,
        estimatedReadingTime: e
      };
    }

    function d() {
      return {
        type: s,
        estimatedReadingTime: c.estimatedReadingTime
      };
    }
  },
  69: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return o;
    }), n.d(t, "b", function () {
      return c;
    }), n.d(t, "c", function () {
      return u;
    });
    var r = n(26),
        i = n.n(r),
        a = i.a.mark(u),
        o = "DISMISS_ALERT",
        c = "DISMISS_ALERT_SUCCESS";

    function u(e) {
      return i.a.wrap(function (t) {
        for (;;) {
          switch (t.prev = t.next) {
            case 0:
              return t.next = 2, {
                type: o,
                alertKey: e
              };

            case 2:
              return t.abrupt("return", {
                type: c,
                alertKey: e
              });

            case 3:
            case "end":
              return t.stop();
          }
        }
      }, a);
    }
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
  71: function _(e, t, n) {
    "use strict";

    function r(e) {
      var t,
          n = document.getElementById("yoast-measurement-element");
      return n || ((t = document.createElement("div")).id = "yoast-measurement-element", t.style.position = "absolute", t.style.left = "-9999em", t.style.top = 0, t.style.height = 0, t.style.overflow = "hidden", t.style.fontFamily = "arial, sans-serif", t.style.fontSize = "18px", t.style.fontWeight = "400", document.body.appendChild(t), n = t), n.innerHTML = e, n.offsetWidth;
    }

    n.d(t, "a", function () {
      return r;
    });
  },
  73: function _(e, t, n) {
    "use strict";

    n.r(t), n.d(t, "getNoIndex", function () {
      return i;
    }), n.d(t, "getNoFollow", function () {
      return a;
    }), n.d(t, "getAdvanced", function () {
      return o;
    }), n.d(t, "getBreadcrumbsTitle", function () {
      return c;
    }), n.d(t, "getCanonical", function () {
      return u;
    }), n.d(t, "getIsLoading", function () {
      return s;
    }), n.d(t, "getSeoTitle", function () {
      return W;
    }), n.d(t, "getDescription", function () {
      return G;
    }), n.d(t, "getPermalink", function () {
      return H;
    }), n.d(t, "getAnalysisTimestamp", function () {
      return K;
    }), n.d(t, "getAnalysisData", function () {
      return Y;
    }), n.d(t, "isCornerstoneContent", function () {
      return $;
    }), n.d(t, "getEditorContext", function () {
      return d;
    }), n.d(t, "getPostOrPageString", function () {
      return p;
    }), n.d(t, "getIsBlockEditor", function () {
      return f;
    }), n.d(t, "getIsElementorEditor", function () {
      return g;
    }), n.d(t, "getEditorType", function () {
      return m;
    }), n.d(t, "getContentLocale", function () {
      return h;
    }), n.d(t, "getEditorDataContent", function () {
      return E;
    }), n.d(t, "getEditorDataTitle", function () {
      return v;
    }), n.d(t, "getEditorDataExcerpt", function () {
      return O;
    }), n.d(t, "getEditorDataExcerptWithFallback", function () {
      return w;
    }), n.d(t, "getEditorDataImageUrl", function () {
      return _;
    }), n.d(t, "getEditorDataImageFallback", function () {
      return T;
    }), n.d(t, "getIsModalOpen", function () {
      return Q;
    }), n.d(t, "getEstimatedReadingTime", function () {
      return X;
    }), n.d(t, "getFacebookTitle", function () {
      return J;
    }), n.d(t, "getFacebookDescription", function () {
      return Z;
    }), n.d(t, "getFacebookImageUrl", function () {
      return ee;
    }), n.d(t, "getFacebookImageSrc", function () {
      return te;
    }), n.d(t, "getFacebookWarnings", function () {
      return ne;
    }), n.d(t, "getContentImage", function () {
      return re;
    }), n.d(t, "getImageFallback", function () {
      return ie;
    }), n.d(t, "getSiteUrl", function () {
      return ae;
    }), n.d(t, "getSeoTitleTemplate", function () {
      return oe;
    }), n.d(t, "getSeoTitleTemplateNoFallback", function () {
      return ce;
    }), n.d(t, "getSocialTitleTemplate", function () {
      return ue;
    }), n.d(t, "getSeoDescriptionTemplate", function () {
      return se;
    }), n.d(t, "getSocialDescriptionTemplate", function () {
      return le;
    }), n.d(t, "getReplacedExcerpt", function () {
      return de;
    }), n.d(t, "getFocusKeyphrase", function () {
      return S;
    }), n.d(t, "getActiveMarker", function () {
      return pe;
    }), n.d(t, "getMarkerPauseStatus", function () {
      return fe;
    }), n.d(t, "isMarkingAvailable", function () {
      return ge;
    }), n.d(t, "getMarksButtonStatus", function () {
      return me;
    }), n.d(t, "isAlertDismissed", function () {
      return he;
    }), n.d(t, "getPreferences", function () {
      return be;
    }), n.d(t, "getIsKeywordAnalysisActive", function () {
      return ye;
    }), n.d(t, "getPrimaryTaxonomyId", function () {
      return Ee;
    }), n.d(t, "getSeoResults", function () {
      return we;
    }), n.d(t, "getResultsForKeyword", function () {
      return _e;
    }), n.d(t, "getReadabilityResults", function () {
      return Te;
    }), n.d(t, "getResultsForFocusKeyword", function () {
      return Se;
    }), n.d(t, "getResultById", function () {
      return Ie;
    }), n.d(t, "getMarkButtonStatus", function () {
      return je;
    }), n.d(t, "getDefaultPageType", function () {
      return Re;
    }), n.d(t, "getPageType", function () {
      return Pe;
    }), n.d(t, "getDefaultArticleType", function () {
      return De;
    }), n.d(t, "getArticleType", function () {
      return Ae;
    }), n.d(t, "getSEMrushModalOpen", function () {
      return ke;
    }), n.d(t, "getSEMrushNoKeyphraseMessage", function () {
      return Ce;
    }), n.d(t, "getSEMrushIsRequestPending", function () {
      return xe;
    }), n.d(t, "getSEMrushRequestIsSuccess", function () {
      return Me;
    }), n.d(t, "getSEMrushRequestResponse", function () {
      return Ne;
    }), n.d(t, "getSEMrushRequestLimitReached", function () {
      return Be;
    }), n.d(t, "getSEMrushRequestKeyphrase", function () {
      return Fe;
    }), n.d(t, "getSEMrushSelectedCountry", function () {
      return Le;
    }), n.d(t, "getSEMrushRequestHasData", function () {
      return Ue;
    }), n.d(t, "getSEMrushLoginStatus", function () {
      return Ve;
    }), n.d(t, "getAuthorName", function () {
      return I;
    }), n.d(t, "getSiteName", function () {
      return j;
    }), n.d(t, "getBaseUrlFromSettings", function () {
      return R;
    }), n.d(t, "getDateFromSettings", function () {
      return P;
    }), n.d(t, "getRecommendedReplaceVars", function () {
      return D;
    }), n.d(t, "getSiteIconUrlFromSettings", function () {
      return A;
    }), n.d(t, "getShoppingData", function () {
      return qe;
    }), n.d(t, "getReplaceVars", function () {
      return k;
    }), n.d(t, "getSnippetEditorTemplates", function () {
      return C;
    }), n.d(t, "getSnippetEditorMode", function () {
      return x;
    }), n.d(t, "getSnippetEditorTitle", function () {
      return M;
    }), n.d(t, "getSnippetEditorTitleWithTemplate", function () {
      return N;
    }), n.d(t, "getSnippetEditorDescription", function () {
      return B;
    }), n.d(t, "getSnippetEditorDescriptionWithTemplate", function () {
      return F;
    }), n.d(t, "getSnippetEditorSlug", function () {
      return L;
    }), n.d(t, "getSnippetEditorData", function () {
      return U;
    }), n.d(t, "getSnippetEditorWordsToHighlight", function () {
      return V;
    }), n.d(t, "getSnippetEditorIsLoading", function () {
      return q;
    }), n.d(t, "getSnippetEditorPreviewImageUrl", function () {
      return z;
    }), n.d(t, "getTwitterTitle", function () {
      return ze;
    }), n.d(t, "getTwitterDescription", function () {
      return We;
    }), n.d(t, "getTwitterImageUrl", function () {
      return Ge;
    }), n.d(t, "getTwitterImageType", function () {
      return He;
    }), n.d(t, "getTwitterImageSrc", function () {
      return Ke;
    }), n.d(t, "getTwitterWarnings", function () {
      return Ye;
    }), n.d(t, "getWarningMessage", function () {
      return $e;
    });

    var r = n(2),
        i = function i(e) {
      return Object(r.get)(e, "advancedSettings.noIndex", "");
    },
        a = function a(e) {
      return Object(r.get)(e, "advancedSettings.noFollow", "");
    },
        o = function o(e) {
      return Object(r.get)(e, "advancedSettings.advanced", "");
    },
        c = function c(e) {
      return Object(r.get)(e, "advancedSettings.breadcrumbsTitle", "summary");
    },
        u = function u(e) {
      return Object(r.get)(e, "advancedSettings.canonical", "");
    },
        s = function s(e) {
      return Object(r.get)(e, "advancedSettings.isLoading", !0);
    },
        l = n(71);

    function d(e) {
      return e.editorContext;
    }

    function p(e) {
      return "Page" === Object(r.get)(e, "editorContext.postTypeNameSingular") ? "page" : "post";
    }

    function f(e) {
      return Object(r.get)(e, "editorContext.isBlockEditor", !1);
    }

    function g(e) {
      return Object(r.get)(e, "editorContext.isElementorEditor", !1);
    }

    function m(e) {
      return g(e) ? "elementorEditor" : f(e) ? "blockEditor" : "classicEditor";
    }

    function h(e) {
      return Object(r.get)(e, "editorContext.contentLocale", "en_US");
    }

    var b = n(63),
        y = n(40),
        E = function E(e) {
      return Object(r.get)(e, "editorData.content", "");
    },
        v = function v(e) {
      return Object(r.get)(e, "editorData.title", "");
    },
        O = function O(e) {
      return Object(r.get)(e, "editorData.excerpt");
    },
        w = function w(e) {
      var t = Object(r.get)(e, "editorData.excerpt", "");
      return "" === t && (t = Object(y.excerptFromContent)(Object(r.get)(e, "editorData.content", ""))), t;
    },
        _ = function _(e) {
      return Object(r.get)(e, "editorData.imageUrl", "");
    },
        T = function T(e) {
      var t = [{
        featuredOrFirstImage: Object(r.get)(e, "editorData.imageUrl", "")
      }, {
        socialImage: Object(r.get)(window, "wpseoScriptData.metabox.social_image_template", "")
      }, {
        siteWideImage: Object(r.get)(window.wpseoScriptData, "metabox.showSocial.facebook") && Object(r.get)(e, "settings.socialPreviews.sitewideImage", "")
      }];
      Object(b.applyFilters)("yoast.socials.imageFallback", t);

      for (var n = 0, i = t; n < i.length; n++) {
        var a = i[n];
        if (Object.values(a)[0]) return Object.values(a)[0];
      }

      return "";
    };

    function S(e) {
      return e.focusKeyword;
    }

    var I = function I(e) {
      return Object(r.get)(e, "settings.socialPreviews.authorName", "");
    },
        j = function j(e) {
      return Object(r.get)(e, "settings.socialPreviews.siteName", "");
    },
        R = function R(e) {
      return Object(r.get)(e, "settings.snippetEditor.baseUrl", "");
    },
        P = function P(e) {
      return Object(r.get)(e, "settings.snippetEditor.date", "");
    },
        D = function D(e) {
      return Object(r.get)(e, "settings.snippetEditor.recommendedReplacementVariables", []);
    },
        A = function A(e) {
      return Object(r.get)(e, "settings.snippetEditor.siteIconUrl", "");
    },
        k = function k(e) {
      return Object(r.get)(e, "snippetEditor.replacementVariables", []);
    },
        C = function C(e) {
      return Object(r.get)(e, "snippetEditor.templates", {
        title: "",
        description: ""
      });
    },
        x = function x(e) {
      return Object(r.get)(e, "snippetEditor.mode", "mobile");
    },
        M = function M(e) {
      return Object(r.get)(e, "snippetEditor.data.title", "");
    },
        N = function N(e) {
      return Object(r.get)(e, "snippetEditor.data.title", "") || C(e).title;
    },
        B = function B(e) {
      return Object(r.get)(e, "snippetEditor.data.description", "");
    },
        F = function F(e) {
      return B(e) || C(e).description;
    },
        L = function L(e) {
      return Object(r.get)(e, "snippetEditor.data.slug", "");
    },
        U = function U(e) {
      return Object(r.get)(e, "snippetEditor.data", {
        title: M(e),
        description: B(e),
        slug: L(e)
      });
    },
        V = function V(e) {
      return Object(r.get)(e, "snippetEditor.wordsToHighlight", []);
    },
        q = function q(e) {
      return Object(r.get)(e, "snippetEditor.isLoading", !0);
    },
        z = function z(e) {
      return Object(r.get)(e, "snippetEditor.data.snippetPreviewImageURL", "");
    },
        W = function W(e) {
      return Object(r.get)(e, "analysisData.snippet.title", "");
    },
        G = function G(e) {
      return Object(r.get)(e, "analysisData.snippet.description", "");
    },
        H = function H(e) {
      return Object(r.get)(e, "analysisData.snippet.url", "");
    },
        K = function K(e) {
      return parseInt(Object(r.get)(e, "analysisData.timestamp", 0), 10);
    },
        Y = function Y(e) {
      var t = W(e) || M(e),
          n = L(e);
      return {
        text: E(e),
        title: t,
        keyword: S(e),
        description: G(e) || B(e),
        locale: h(e),
        titleWidth: Object(l.a)(t),
        url: n,
        permalink: R(e) + n
      };
    };

    function $(e) {
      return e.isCornerstone;
    }

    var Q = function Q(e, t) {
      return Object(r.get)(e, "editorModals.openedModal", "") === t;
    };

    function X(e) {
      return Object(r.get)(e, "estimatedReadingTime.estimatedReadingTime", 0) || 0;
    }

    var J = function J(e) {
      return Object(r.get)(e, "facebookEditor.title", "");
    },
        Z = function Z(e) {
      return Object(r.get)(e, "facebookEditor.description", "");
    },
        ee = function ee(e) {
      return Object(r.get)(e, "facebookEditor.image.url");
    },
        te = function te(e) {
      return Object(r.get)(e, "facebookEditor.image.src", "");
    },
        ne = function ne(e) {
      return Object(r.get)(e, "facebookEditor.warnings", []);
    },
        re = function re(e) {
      return Object(r.get)(e, "socialPreviews.contentImage", "");
    },
        ie = function ie(e) {
      var t = [{
        featuredImage: Object(r.get)(e, "snippetEditor.data.snippetPreviewImageURL", "")
      }, {
        contentImage: Object(r.get)(e, "settings.socialPreviews.contentImage", "")
      }, {
        socialImage: Object(r.get)(window, "wpseoScriptData.metabox.social_image_template", "")
      }, {
        siteWideImage: Object(r.get)(window, "wpseoScriptData.metabox.showSocial.facebook") && Object(r.get)(e, "settings.socialPreviews.sitewideImage", "")
      }];
      Object(b.applyFilters)("yoast.socials.imageFallback", t);

      for (var n = 0, i = t; n < i.length; n++) {
        var a = i[n];
        if (Object.values(a)[0]) return Object.values(a)[0];
      }

      return "";
    },
        ae = function ae() {
      var e = Object(r.get)(window, "wpseoScriptData.metabox.base_url", "");
      return "" === e ? "" : (e = new URL(e)).host;
    },
        oe = function oe() {
      return Object(r.get)(window, "wpseoScriptData.metabox.title_template", "");
    },
        ce = function ce() {
      return Object(r.get)(window, "wpseoScriptData.metabox.title_template_no_fallback", "");
    },
        ue = function ue() {
      return Object(r.get)(window, "wpseoScriptData.metabox.social_title_template", "");
    },
        se = function se() {
      return Object(r.get)(window, "wpseoScriptData.metabox.metadesc_template", "");
    },
        le = function le() {
      return Object(r.get)(window, "wpseoScriptData.metabox.social_description_template", "");
    },
        de = function de(e) {
      var t = "";
      return Object(r.get)(e, "snippetEditor.replacementVariables", []).forEach(function (e) {
        "excerpt" === e.name && (t = e.value);
      }), t;
    };

    function pe(e) {
      return e.activeMarker;
    }

    function fe(e) {
      return e.isMarkerPaused;
    }

    function ge(e) {
      return "enabled" === e.marksButtonStatus;
    }

    function me(e) {
      return e.marksButtonStatus;
    }

    function he(e, t) {
      return !0 === e.dismissedAlerts[t];
    }

    function be(e) {
      return e.preferences;
    }

    function ye(e) {
      return Object(r.get)(e, "preferences.isKeywordAnalysisActive", !1);
    }

    function Ee(e, t) {
      return e.primaryTaxonomies[t];
    }

    var ve = n(30),
        Oe = n.n(ve);

    function we(e) {
      var t = Object(r.get)(e, "analysis.seo", {});
      return Object(r.isEmpty)(t) ? {
        results: [],
        overallScore: null
      } : t;
    }

    function _e(e, t) {
      var n = we(e);
      return Object(r.get)(n, t, {});
    }

    function Te(e) {
      var t = Object(r.get)(e, "analysis.readability", {});
      return Object(r.isEmpty)(t) ? {
        results: [],
        overallScore: null
      } : t;
    }

    function Se(e) {
      return _e(e, e.focusKeyword);
    }

    function Ie(e, t) {
      var n = Se(e).results || [],
          r = Te(e).results || [];
      return [].concat(Oe()(n), Oe()(r)).find(function (e) {
        return e._identifier === t;
      });
    }

    function je(e) {
      return e.marksButtonStatus;
    }

    var Re = function Re(e) {
      return Object(r.get)(e, "schemaTab.defaultPageType", "");
    },
        Pe = function Pe(e) {
      return Object(r.get)(e, "schemaTab.pageType", "");
    },
        De = function De(e) {
      return Object(r.get)(e, "schemaTab.defaultArticleType", "");
    },
        Ae = function Ae(e) {
      return Object(r.get)(e, "schemaTab.articleType", "");
    };

    function ke(e) {
      return e.SEMrushModal.whichModalOpen;
    }

    function Ce(e) {
      return e.SEMrushModal.displayNoKeyphraseMessage;
    }

    function xe(e) {
      return e.SEMrushRequest.isRequestPending;
    }

    function Me(e) {
      return e.SEMrushRequest.isSuccess;
    }

    function Ne(e) {
      return e.SEMrushRequest.response;
    }

    function Be(e) {
      return e.SEMrushRequest.limitReached;
    }

    function Fe(e) {
      return e.SEMrushRequest.keyphrase;
    }

    function Le(e) {
      return e.SEMrushRequest.countryCode;
    }

    function Ue(e) {
      return e.SEMrushRequest.hasData;
    }

    function Ve(e) {
      return e.SEMrushRequest.isLoggedIn;
    }

    var qe = function qe(e) {
      return Object(r.get)(e, "shoppingData", {});
    },
        ze = function ze(e) {
      return Object(r.get)(e, "twitterEditor.title", "");
    },
        We = function We(e) {
      return Object(r.get)(e, "twitterEditor.description", "");
    },
        Ge = function Ge(e) {
      return Object(r.get)(e, "twitterEditor.image.url", "");
    },
        He = function He(e) {
      return Object(r.get)(e, "settings.socialPreviews.twitterCardType", "summary");
    },
        Ke = function Ke(e) {
      return Object(r.get)(e, "twitterEditor.image.src", "");
    },
        Ye = function Ye(e) {
      return Object(r.get)(e, "twitterEditor.warnings", []);
    };

    function $e(e) {
      return Object(r.get)(e, "warning.message", []);
    }
  },
  74: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });
    var r = "".concat("WPSEO_", "SET_ACTIVE_MARKER");

    function i(e) {
      return {
        type: r,
        activeMarker: e
      };
    }
  },
  75: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });
    var r = "".concat("WPSEO_", "SET_MARKER_PAUSE_STATUS");

    function i(e) {
      return {
        type: r,
        isMarkerPaused: e
      };
    }
  },
  76: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });

    var r = "".concat("WPSEO_", "SET_PRIMARY_TAXONOMY"),
        i = function i(e, t) {
      return {
        type: r,
        taxonomy: e,
        termId: t
      };
    };
  },
  77: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });
    var r = "SET_SHOPPING_DATA";

    function i(e) {
      return {
        type: r,
        shoppingData: e
      };
    }
  },
  78: function _(e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return i;
    });
    var r = "SET_WARNING_MESSAGE";

    function i(e) {
      return {
        type: r,
        message: e
      };
    }
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
  80: function _(e, t) {
    var n,
        r,
        i = "",
        a = function a(e) {
      e = e || "polite";
      var t = document.createElement("div");
      return t.id = "a11y-speak-" + e, t.className = "a11y-speak-region", t.setAttribute("style", "clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions text"), t.setAttribute("aria-atomic", "true"), document.querySelector("body").appendChild(t), t;
    };

    !function (e) {
      if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) return e();
      document.addEventListener("DOMContentLoaded", e);
    }(function () {
      n = document.getElementById("a11y-speak-polite"), r = document.getElementById("a11y-speak-assertive"), null === n && (n = a("polite")), null === r && (r = a("assertive"));
    }), e.exports = function (e, t) {
      !function () {
        for (var e = document.querySelectorAll(".a11y-speak-region"), t = 0; t < e.length; t++) {
          e[t].textContent = "";
        }
      }(), e = e.replace(/<[^<>]+>/g, " "), i === e && (e += " "), i = e, r && "assertive" === t ? r.textContent = e : n && (n.textContent = e);
    };
  },
  85: function _(e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return T;
    });
    var r = n(10),
        i = n.n(r),
        a = n(5),
        o = n.n(a),
        c = n(7),
        u = n.n(c),
        s = n(11),
        l = n.n(s),
        d = n(13),
        p = n.n(d),
        f = n(14),
        g = n.n(f),
        m = n(8),
        h = n.n(m),
        b = n(0),
        y = n(3),
        E = n(6),
        v = n(1),
        O = n.n(v),
        w = n(62);

    var _ = function (e) {
      p()(a, e);
      var t,
          n,
          r = (t = a, n = function () {
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
            r = h()(t);

        if (n) {
          var i = h()(this).constructor;
          e = Reflect.construct(r, arguments, i);
        } else e = r.apply(this, arguments);

        return g()(this, e);
      });

      function a(e) {
        var t;
        return o()(this, a), (t = r.call(this, e)).initialPageType = e.pageType.value, t.initialArticleType = e.articleType ? e.articleType.value : "None", t.state = {
          schema_page_type: t.initialPageType,
          schema_article_type: t.initialArticleType
        }, t.handleOptionFocus = t.handleOptionFocus.bind(l()(t)), t;
      }

      return u()(a, [{
        key: "shouldShowAlert",
        value: function value() {
          return this.state.schema_page_type !== this.initialPageType || this.state.schema_article_type !== this.initialArticleType;
        }
      }, {
        key: "handleOptionFocus",
        value: function value(e, t) {
          this.setState(i()({}, e, t));
        }
      }, {
        key: "render",
        value: function value() {
          return Object(b.createElement)(b.Fragment, null, Object(b.createElement)(E.FieldGroup, {
            label: Object(y.__)("Schema settings", "wordpress-seo"),
            linkTo: "https://yoa.st/404",
            linkText: Object(y.__)("Learn more about the schema settings", "wordpress-seo"),
            description: Object(y.sprintf)(
            /* translators: %1$s expands to an indexable object's name, e.g. Posts or Pages. */
            Object(y.__)("Choose how your %1$s should be described by default in your site's schema.org markup. You can change these settings for individual %1$s.", "wordpress-seo"), this.props.postTypeName)
          }), this.shouldShowAlert() && Object(b.createElement)(E.Alert, {
            type: "warning"
          }, Object(y.sprintf)(
          /* translators: %1$s expands to an indexable object's name, e.g. Posts or Pages. */
          Object(y._n)("Upon saving, this setting will apply to all of your %1$s. %1$s that are manually configured will be left untouched.", "Upon saving, these settings will apply to all of your %1$s. %1$s that are manually configured will be left untouched.", this.props.articleType ? 2 : 1, "wordpress-seo"), this.props.postTypeName)), Object(b.createElement)(E.Select, {
            id: "schema-page-type-".concat(this.props.postType),
            name: "schema_page_type",
            options: this.props.pageTypeOptions,
            label: Object(y.__)("Default Page type", "wordpress-seo"),
            onChange: this.props.pageType.onChange,
            selected: this.props.pageType.value,
            onOptionFocus: this.handleOptionFocus
          }), this.props.articleType && Object(b.createElement)(E.Select, {
            id: "schema-article-type-".concat(this.props.postType),
            name: "schema_article_type",
            options: this.props.articleTypeOptions,
            label: Object(y.__)("Default Article type", "wordpress-seo"),
            onChange: this.props.articleType.onChange,
            onOptionFocus: this.handleOptionFocus,
            selected: this.props.articleType.value
          }));
        }
      }]), a;
    }(b.Component),
        T = O.a.arrayOf(O.a.shape({
      name: O.a.string,
      value: O.a.string
    }));

    _.propTypes = {
      postType: O.a.string.isRequired,
      postTypeName: O.a.string.isRequired,
      pageType: w.b.isRequired,
      articleType: w.b,
      pageTypeOptions: T.isRequired,
      articleTypeOptions: T.isRequired
    }, _.defaultProps = {
      articleType: null
    }, t.a = Object(w.a)(function (e) {
      return [{
        name: "pageType",
        fieldId: e.pageTypeFieldId
      }, {
        name: "articleType",
        fieldId: e.articleTypeFieldId
      }];
    })(_);
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

    function r(e) {
      return function (e) {
        var t = null;
        return (t = window.wp.media()).on("select", function () {
          var n = t.state().get("selection").first(),
              r = {
            type: n.attributes.subtype,
            width: n.attributes.width,
            height: n.attributes.height,
            url: n.attributes.url,
            id: n.attributes.id
          };
          e(r);
        }), t;
      }(e).open();
    }

    n.d(t, "a", function () {
      return r;
    });
  },
  94: function _(e, t, n) {
    "use strict";

    function r(e) {
      return function () {
        return e;
      };
    }

    var i = function i() {};

    i.thatReturns = r, i.thatReturnsFalse = r(!1), i.thatReturnsTrue = r(!0), i.thatReturnsNull = r(null), i.thatReturnsThis = function () {
      return this;
    }, i.thatReturnsArgument = function (e) {
      return e;
    }, e.exports = i;
  }
});