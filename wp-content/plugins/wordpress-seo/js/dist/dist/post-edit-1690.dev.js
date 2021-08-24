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
  }, n.p = "", n(n.s = 351);
}([function (e, t) {
  e.exports = window.wp.element;
}, function (e, t) {
  e.exports = window.yoast.propTypes;
}, function (e, t) {
  e.exports = window.lodash;
}, function (e, t) {
  e.exports = window.wp.i18n;
}, function (e, t) {
  e.exports = window.wp.data;
}, function (e, t) {
  e.exports = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  };
},, function (e, t) {
  function n(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  e.exports = function (e, t, r) {
    return t && n(e.prototype, t), r && n(e, r), e;
  };
}, function (e, t) {
  function n(t) {
    return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, n(t);
  }

  e.exports = n;
}, function (e, t) {
  e.exports = window.yoast.helpers;
}, function (e, t) {
  e.exports = function (e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  };
}, function (e, t) {
  e.exports = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  };
}, function (e, t) {
  e.exports = window.yoast.styledComponents;
}, function (e, t, n) {
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
}, function (e, t, n) {
  var r = n(34),
      i = n(11);

  e.exports = function (e, t) {
    return !t || "object" !== r(t) && "function" != typeof t ? i(e) : t;
  };
}, function (e, t) {
  e.exports = function (e, t) {
    return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
      raw: {
        value: Object.freeze(t)
      }
    }));
  };
},, function (e, t, n) {
  "use strict";

  n.d(t, "d", function () {
    return i;
  }), n.d(t, "e", function () {
    return o;
  }), n.d(t, "f", function () {
    return a;
  }), n.d(t, "c", function () {
    return s;
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
    return f;
  }), n.d(t, "m", function () {
    return g;
  }), n.d(t, "i", function () {
    return h;
  }), n.d(t, "h", function () {
    return m;
  });
  var r = n(9),
      i = "SNIPPET_EDITOR_SWITCH_MODE",
      o = "SNIPPET_EDITOR_UPDATE_DATA",
      a = "SNIPPET_EDITOR_UPDATE_REPLACEMENT_VARIABLE",
      s = "SNIPPET_EDITOR_REMOVE_REPLACEMENT_VARIABLE",
      c = "SNIPPET_EDITOR_REFRESH",
      u = "SNIPPET_EDITOR_UPDATE_WORDS_TO_HIGHLIGHT",
      l = "LOAD_SNIPPET_EDITOR_DATA";

  function d(e) {
    return {
      type: i,
      mode: e
    };
  }

  function p(e) {
    return {
      type: o,
      data: e
    };
  }

  function f(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
        i = "string" == typeof t ? Object(r.decodeHTML)(t) : t;
    return {
      type: a,
      name: e,
      value: i,
      label: n
    };
  }

  function g(e) {
    return {
      type: u,
      wordsToHighlight: e
    };
  }

  function h(e) {
    return {
      type: s,
      name: e
    };
  }

  function m() {
    return {
      type: c,
      time: new Date().getMilliseconds()
    };
  }
}, function (e, t) {
  e.exports = window.wp.components;
}, function (e, t) {
  e.exports = window.wp.compose;
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  });
  var r = n(2);

  function i() {
    return Object(r.get)(window, "wpseoScriptData.metabox", {
      intl: {},
      isRtl: !1
    });
  }
}, function (e, t) {
  e.exports = window.jQuery;
}, function (e, t) {
  e.exports = window.yoast.components;
}, function (e, t) {
  e.exports = window.yoast.analysis;
},, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "SET_ACTIVE_MARKER", function () {
    return o.a;
  }), n.d(t, "setActiveMarker", function () {
    return o.b;
  }), n.d(t, "SET_NO_INDEX", function () {
    return a.f;
  }), n.d(t, "SET_NO_FOLLOW", function () {
    return a.e;
  }), n.d(t, "SET_ADVANCED", function () {
    return a.b;
  }), n.d(t, "SET_BREADCRUMBS_TITLE", function () {
    return a.c;
  }), n.d(t, "SET_CANONICAL_URL", function () {
    return a.d;
  }), n.d(t, "LOAD_ADVANCED_SETTINGS", function () {
    return a.a;
  }), n.d(t, "setNoIndex", function () {
    return a.l;
  }), n.d(t, "setNoFollow", function () {
    return a.k;
  }), n.d(t, "setAdvanced", function () {
    return a.h;
  }), n.d(t, "setBreadcrumbsTitle", function () {
    return a.i;
  }), n.d(t, "setCanonical", function () {
    return a.j;
  }), n.d(t, "loadAdvancedSettingsData", function () {
    return a.g;
  }), n.d(t, "UPDATE_SNIPPET_DATA", function () {
    return s;
  }), n.d(t, "RUN_ANALYSIS", function () {
    return c;
  }), n.d(t, "updateAnalysisData", function () {
    return u;
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
    return h;
  }), n.d(t, "setEditorDataContent", function () {
    return m;
  }), n.d(t, "setEditorDataTitle", function () {
    return b;
  }), n.d(t, "setEditorDataExcerpt", function () {
    return y;
  }), n.d(t, "setEditorDataImageUrl", function () {
    return w;
  }), n.d(t, "OPEN_EDITOR_MODAL", function () {
    return O;
  }), n.d(t, "CLOSE_EDITOR_MODAL", function () {
    return v;
  }), n.d(t, "openEditorModal", function () {
    return _;
  }), n.d(t, "closeEditorModal", function () {
    return E;
  }), n.d(t, "SET_ESTIMATED_READING_TIME", function () {
    return S.b;
  }), n.d(t, "LOAD_ESTIMATED_READING_TIME", function () {
    return S.a;
  }), n.d(t, "setEstimatedReadingTime", function () {
    return S.d;
  }), n.d(t, "loadEstimatedReadingTime", function () {
    return S.c;
  }), n.d(t, "LOAD_FOCUS_KEYWORD", function () {
    return j.a;
  }), n.d(t, "SET_FOCUS_KEYWORD", function () {
    return j.b;
  }), n.d(t, "loadFocusKeyword", function () {
    return j.c;
  }), n.d(t, "setFocusKeyword", function () {
    return j.d;
  }), n.d(t, "SET_MARKER_STATUS", function () {
    return T.a;
  }), n.d(t, "setMarkerStatus", function () {
    return T.b;
  }), n.d(t, "SET_MARKER_PAUSE_STATUS", function () {
    return k.a;
  }), n.d(t, "setMarkerPauseStatus", function () {
    return k.b;
  }), n.d(t, "DISMISS_ALERT", function () {
    return x.a;
  }), n.d(t, "DISMISS_ALERT_SUCCESS", function () {
    return x.b;
  }), n.d(t, "dismissAlert", function () {
    return x.c;
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
    return R;
  }), n.d(t, "MODAL_OPEN_NO_KEYPHRASE", function () {
    return I;
  }), n.d(t, "setSEMrushDismissModal", function () {
    return C;
  }), n.d(t, "setSEMrushOpenModal", function () {
    return M;
  }), n.d(t, "setSEMrushNoKeyphraseMessage", function () {
    return N;
  }), n.d(t, "CHANGE_COUNTRY", function () {
    return L.a;
  }), n.d(t, "SET_REQUEST_SUCCEEDED", function () {
    return L.g;
  }), n.d(t, "SET_REQUEST_FAILED", function () {
    return L.e;
  }), n.d(t, "SET_REQUEST_LIMIT_REACHED", function () {
    return L.f;
  }), n.d(t, "NEW_REQUEST", function () {
    return L.b;
  }), n.d(t, "NO_DATA_FOUND", function () {
    return L.c;
  }), n.d(t, "SET_LOGIN_STATUS", function () {
    return L.d;
  }), n.d(t, "setSEMrushNewRequest", function () {
    return L.j;
  }), n.d(t, "setSEMrushRequestSucceeded", function () {
    return L.m;
  }), n.d(t, "setSEMrushRequestFailed", function () {
    return L.l;
  }), n.d(t, "setSEMrushSetRequestLimitReached", function () {
    return L.n;
  }), n.d(t, "setSEMrushChangeCountry", function () {
    return L.h;
  }), n.d(t, "setSEMrushNoResultsFound", function () {
    return L.k;
  }), n.d(t, "setSEMrushLoginStatus", function () {
    return L.i;
  }), n.d(t, "SET_SETTINGS", function () {
    return U.b;
  }), n.d(t, "SET_CONTENT_IMAGE", function () {
    return U.a;
  }), n.d(t, "setSettings", function () {
    return U.d;
  }), n.d(t, "setContentImage", function () {
    return U.c;
  }), n.d(t, "SET_SHOPPING_DATA", function () {
    return F.a;
  }), n.d(t, "setShoppingData", function () {
    return F.b;
  }), n.d(t, "SWITCH_MODE", function () {
    return B.d;
  }), n.d(t, "UPDATE_DATA", function () {
    return B.e;
  }), n.d(t, "UPDATE_REPLACEMENT_VARIABLE", function () {
    return B.f;
  }), n.d(t, "REMOVE_REPLACEMENT_VARIABLE", function () {
    return B.c;
  }), n.d(t, "REFRESH", function () {
    return B.b;
  }), n.d(t, "UPDATE_WORDS_TO_HIGHLIGHT", function () {
    return B.g;
  }), n.d(t, "LOAD_SNIPPET_EDITOR_DATA", function () {
    return B.a;
  }), n.d(t, "switchMode", function () {
    return B.j;
  }), n.d(t, "updateData", function () {
    return B.k;
  }), n.d(t, "updateReplacementVariable", function () {
    return B.l;
  }), n.d(t, "updateWordsToHighlight", function () {
    return B.m;
  }), n.d(t, "removeReplacementVariable", function () {
    return B.i;
  }), n.d(t, "refreshSnippetEditor", function () {
    return B.h;
  }), n.d(t, "SET_TWITTER_TITLE", function () {
    return Y.e;
  }), n.d(t, "SET_TWITTER_DESCRIPTION", function () {
    return Y.c;
  }), n.d(t, "SET_TWITTER_IMAGE", function () {
    return Y.d;
  }), n.d(t, "CLEAR_TWITTER_IMAGE", function () {
    return Y.a;
  }), n.d(t, "LOAD_TWITTER_PREVIEW", function () {
    return Y.b;
  }), n.d(t, "setTwitterPreviewTitle", function () {
    return Y.j;
  }), n.d(t, "setTwitterPreviewDescription", function () {
    return Y.h;
  }), n.d(t, "setTwitterPreviewImage", function () {
    return Y.i;
  }), n.d(t, "clearTwitterPreviewImage", function () {
    return Y.f;
  }), n.d(t, "loadTwitterPreviewData", function () {
    return Y.g;
  }), n.d(t, "SET_FACEBOOK_TITLE", function () {
    return K.e;
  }), n.d(t, "SET_FACEBOOK_DESCRIPTION", function () {
    return K.c;
  }), n.d(t, "SET_FACEBOOK_IMAGE", function () {
    return K.d;
  }), n.d(t, "CLEAR_FACEBOOK_IMAGE", function () {
    return K.a;
  }), n.d(t, "LOAD_FACEBOOK_PREVIEW", function () {
    return K.b;
  }), n.d(t, "setFacebookPreviewTitle", function () {
    return K.j;
  }), n.d(t, "setFacebookPreviewDescription", function () {
    return K.h;
  }), n.d(t, "setFacebookPreviewImage", function () {
    return K.i;
  }), n.d(t, "clearFacebookPreviewImage", function () {
    return K.f;
  }), n.d(t, "loadFacebookPreviewData", function () {
    return K.g;
  }), n.d(t, "SET_WARNING_MESSAGE", function () {
    return V.a;
  }), n.d(t, "setWarningMessage", function () {
    return V.b;
  }), n.d(t, "setOverallReadabilityScore", function () {
    return q;
  }), n.d(t, "setOverallSeoScore", function () {
    return W;
  }), n.d(t, "setReadabilityResults", function () {
    return r.setReadabilityResults;
  }), n.d(t, "setSeoResultsForKeyword", function () {
    return r.setSeoResultsForKeyword;
  });
  var r = n(22),
      i = n(29),
      o = n(74),
      a = n(44),
      s = "SNIPPET_EDITOR_UPDATE_ANALYSIS_DATA",
      c = "RUN_ANALYSIS";

  function u(e) {
    return {
      type: s,
      data: e
    };
  }

  function l() {
    return {
      type: c,
      timestamp: Date.now()
    };
  }

  var d = n(59),
      p = "SET_EDITOR_DATA_CONTENT",
      f = "SET_EDITOR_DATA_TITLE",
      g = "SET_EDITOR_DATA_EXCERPT",
      h = "SET_EDITOR_DATA_IMAGE_URL";

  function m(e) {
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

  function w(e) {
    return {
      type: h,
      imageUrl: e
    };
  }

  var O = "OPEN_MODAL",
      v = "CLOSE_MODAL";

  function _(e) {
    return {
      type: O,
      modalKey: e
    };
  }

  function E() {
    return {
      type: v
    };
  }

  var S = n(67),
      j = n(60),
      T = n(45),
      k = n(75),
      x = n(69),
      P = n(76),
      D = n(56),
      A = "MODAL_DISMISS",
      R = "MODAL_OPEN",
      I = "MODAL_OPEN_NO_KEYPHRASE";

  function C() {
    return {
      type: A
    };
  }

  function M(e) {
    return {
      type: R,
      location: e
    };
  }

  function N() {
    return {
      type: I
    };
  }

  var L = n(41),
      U = n(43),
      F = n(77),
      B = n(17),
      Y = n(48),
      K = n(49),
      V = n(78),
      q = function q(e) {
    return i.a.readabilityScore = e, Object(r.setOverallReadabilityScore)(e);
  },
      W = function W(e, t) {
    return i.a.seoScore = e, Object(r.setOverallSeoScore)(e, t);
  };
}, function (e, t) {
  e.exports = window.regeneratorRuntime;
}, function (e, t) {
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
},, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return s;
  });

  var r = n(5),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      s = function () {
    function e() {
      i()(this, e);
    }

    return a()(e, null, [{
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
}, function (e, t, n) {
  var r = n(87),
      i = n(88),
      o = n(89);

  e.exports = function (e) {
    return r(e) || i(e) || o();
  };
}, function (e, t, n) {
  "use strict";

  var r = n(2),
      i = {
    source: "wpseoScriptData.analysis.plugins.replaceVars",
    scope: [],
    aliases: []
  },
      o = function o(e, t, n) {
    this.placeholder = e, this.replacement = t, this.options = Object(r.defaults)(n, i);
  };

  o.prototype.getPlaceholder = function (e) {
    return (e = e || !1) && this.hasAlias() ? this.placeholder + "|" + this.getAliases().join("|") : this.placeholder;
  }, o.prototype.setSource = function (e) {
    this.options.source = e;
  }, o.prototype.hasScope = function () {
    return !Object(r.isEmpty)(this.options.scope);
  }, o.prototype.addScope = function (e) {
    this.hasScope() || (this.options.scope = []), this.options.scope.push(e);
  }, o.prototype.inScope = function (e) {
    return !this.hasScope() || Object(r.indexOf)(this.options.scope, e) > -1;
  }, o.prototype.hasAlias = function () {
    return !Object(r.isEmpty)(this.options.aliases);
  }, o.prototype.addAlias = function (e) {
    this.hasAlias() || (this.options.aliases = []), this.options.aliases.push(e);
  }, o.prototype.getAliases = function () {
    return this.options.aliases;
  }, t.a = o;
},, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return s;
  });

  var r = n(5),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      s = function () {
    function e() {
      i()(this, e);
    }

    return a()(e, null, [{
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
}, function (e, t) {
  function n(t) {
    return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? e.exports = n = function n(e) {
      return _typeof(e);
    } : e.exports = n = function n(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, n(t);
  }

  e.exports = n;
},,,, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "tmceId", function () {
    return c;
  }), n.d(t, "termsTmceId", function () {
    return u;
  }), n.d(t, "setStore", function () {
    return l;
  }), n.d(t, "isTinyMCELoaded", function () {
    return d;
  }), n.d(t, "isTinyMCEAvailable", function () {
    return p;
  }), n.d(t, "getContentTinyMce", function () {
    return f;
  }), n.d(t, "addEventHandler", function () {
    return g;
  }), n.d(t, "disableMarkerButtons", function () {
    return h;
  }), n.d(t, "enableMarkerButtons", function () {
    return m;
  }), n.d(t, "isTextViewActive", function () {
    return b;
  }), n.d(t, "wpTextViewOnInitCheck", function () {
    return y;
  }), n.d(t, "tinyMceEventBinder", function () {
    return w;
  });
  var r,
      i = n(2),
      o = n(93),
      a = n(123),
      s = n(45),
      c = "content",
      u = "description";

  function l(e) {
    r = e;
  }

  function d() {
    return "undefined" != typeof tinyMCE && void 0 !== tinyMCE.editors && 0 !== tinyMCE.editors.length;
  }

  function p(e) {
    if (!d()) return !1;
    var t = tinyMCE.get(e);
    return null !== t && !t.isHidden();
  }

  function f(e) {
    var t, n, r;
    return n = !1 === p(e) || 0 == (t = e, null !== document.getElementById(t + "_ifr")) ? function (e) {
      return document.getElementById(e) && document.getElementById(e).value || "";
    }(e) : tinyMCE.get(e).getContent(), r = new RegExp("&amp;", "g"), n.replace(r, "&");
  }

  function g(e, t, n) {
    "undefined" != typeof tinyMCE && "function" == typeof tinyMCE.on && tinyMCE.on("addEditor", function (r) {
      var o = r.editor;
      o.id === e && Object(i.forEach)(t, function (e) {
        o.on(e, n);
      });
    });
  }

  function h() {
    Object(i.isUndefined)(r) || r.dispatch(Object(s.b)("disabled"));
  }

  function m() {
    Object(i.isUndefined)(r) || r.dispatch(Object(s.b)("enabled"));
  }

  function b() {
    var e = document.getElementById("wp-content-wrap");
    return !!e && e.classList.contains("html-active");
  }

  function y() {
    b() && (h(), d() && tinyMCE.on("AddEditor", function () {
      m();
    }));
  }

  function w(e, t) {
    g(t, ["input", "change", "cut", "paste"], e), g(t, ["hide"], h);
    var n = ["show"];
    new a.a().isPageBuilderActive() || n.push("init"), g(t, n, m), g("content", ["focus"], function (e) {
      var t = e.target;
      Object(o.a)(t) && (Object(o.b)(t), YoastSEO.app.disableMarkers());
    });
  }
},, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "nonReplaceVars", function () {
    return p;
  }), n.d(t, "fillReplacementVariables", function () {
    return f;
  }), n.d(t, "handlePrefixes", function () {
    return g;
  }), n.d(t, "createLabelFromName", function () {
    return h;
  }), n.d(t, "pushNewReplaceVar", function () {
    return m;
  }), n.d(t, "replaceSpaces", function () {
    return b;
  }), n.d(t, "prepareCustomFieldForDispatch", function () {
    return y;
  }), n.d(t, "prepareCustomTaxonomyForDispatch", function () {
    return w;
  }), n.d(t, "mapCustomTaxonomies", function () {
    return O;
  }), n.d(t, "mapCustomFields", function () {
    return v;
  }), n.d(t, "excerptFromContent", function () {
    return _;
  }), n.d(t, "applyReplaceUsingPlugin", function () {
    return E;
  });
  var r = n(10),
      i = n.n(r),
      o = n(2),
      a = n(79),
      s = n(17);

  function c(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }

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

  function l(e) {
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

  var d = n(9).strings.stripHTMLTags,
      p = ["slug", "content", "contentImage", "snippetPreviewImageURL"];

  function f(e, t) {
    Object(o.forEach)(e, function (e, n) {
      p.includes(n) || t.dispatch(Object(s.l)(n, e));
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

  function h(e) {
    return c(e = g(e));
  }

  function m(e, t) {
    return e.push({
      name: t.name,
      label: t.label || h(t.name),
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
      label: c(e + " (custom field)")
    };
  }

  function w(e) {
    var t = b(e);
    return {
      name: "ct_" + t,
      label: c(e + " (custom taxonomy)"),
      descriptionName: "ct_desc_" + t,
      descriptionLabel: c(e + " description (custom taxonomy)")
    };
  }

  function O(e, t) {
    return e.custom_taxonomies ? (Object(o.forEach)(e.custom_taxonomies, function (e, n) {
      var r = w(n),
          i = r.name,
          o = r.label,
          a = r.descriptionName,
          c = r.descriptionLabel;
      t.dispatch(Object(s.l)(i, e.name, o)), t.dispatch(Object(s.l)(a, e.description, c));
    }), Object(o.omit)(l({}, e), "custom_taxonomies")) : e;
  }

  function v(e, t) {
    return e.custom_fields ? (Object(o.forEach)(e.custom_fields, function (e, n) {
      var r = y(n),
          i = r.name,
          o = r.label;
      t.dispatch(Object(s.l)(i, e, o));
    }), Object(o.omit)(l({}, e), "custom_fields")) : e;
  }

  function _(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 156;
    return (e = (e = Object(a.stripTags)(e)).trim()).length <= t ? e : (e = e.substring(0, t)).substring(0, e.lastIndexOf(" "));
  }

  var E = function E(e) {
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
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return r;
  }), n.d(t, "g", function () {
    return i;
  }), n.d(t, "e", function () {
    return o;
  }), n.d(t, "f", function () {
    return a;
  }), n.d(t, "b", function () {
    return s;
  }), n.d(t, "c", function () {
    return c;
  }), n.d(t, "d", function () {
    return u;
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
    return h;
  }), n.d(t, "i", function () {
    return m;
  });
  var r = "CHANGE_COUNTRY",
      i = "SET_REQUEST_SUCCEEDED",
      o = "SET_REQUEST_FAILED",
      a = "SET_LIMIT_REACHED",
      s = "NEW_REQUEST",
      c = "NO_DATA_FOUND",
      u = "SET_LOGIN_STATUS";

  function l(e, t) {
    return {
      type: s,
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
      type: o,
      response: e
    };
  }

  function f() {
    return {
      type: a
    };
  }

  function g(e) {
    return {
      type: r,
      countryCode: e
    };
  }

  function h() {
    return {
      type: c
    };
  }

  function m(e) {
    return {
      type: u,
      loginStatus: e
    };
  }
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  });
  var r = n(3),
      i = n(23),
      o = n(2);

  function a(e) {
    return Object(o.isNil)(e) || (e /= 10), function (e) {
      switch (e) {
        case "feedback":
          return {
            className: "na",
            screenReaderText: Object(r.__)("Feedback", "wordpress-seo"),
            screenReaderReadabilityText: ""
          };

        case "bad":
          return {
            className: "bad",
            screenReaderText: Object(r.__)("Needs improvement", "wordpress-seo"),
            screenReaderReadabilityText: Object(r.__)("Needs improvement", "wordpress-seo")
          };

        case "ok":
          return {
            className: "ok",
            screenReaderText: Object(r.__)("OK SEO score", "wordpress-seo"),
            screenReaderReadabilityText: Object(r.__)("OK", "wordpress-seo")
          };

        case "good":
          return {
            className: "good",
            screenReaderText: Object(r.__)("Good SEO score", "wordpress-seo"),
            screenReaderReadabilityText: Object(r.__)("Good", "wordpress-seo")
          };

        default:
          return {
            className: "loading",
            screenReaderText: "",
            screenReaderReadabilityText: ""
          };
      }
    }(i.interpreters.scoreToRating(e));
  }
}, function (e, t, n) {
  "use strict";

  n.d(t, "b", function () {
    return r;
  }), n.d(t, "a", function () {
    return i;
  }), n.d(t, "d", function () {
    return o;
  }), n.d(t, "c", function () {
    return a;
  });

  var r = "SET_SETTINGS",
      i = "SET_CONTENT_IMAGE",
      o = function o(e) {
    return {
      type: r,
      settings: e
    };
  },
      a = function a(e) {
    return {
      type: i,
      src: e
    };
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "f", function () {
    return c;
  }), n.d(t, "e", function () {
    return u;
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
    return h;
  }), n.d(t, "h", function () {
    return m;
  }), n.d(t, "i", function () {
    return b;
  }), n.d(t, "j", function () {
    return y;
  }), n.d(t, "g", function () {
    return w;
  });

  var r = n(5),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      s = function () {
    function e() {
      i()(this, e);
    }

    return a()(e, null, [{
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
      c = "SET_NO_INDEX",
      u = "SET_NO_FOLLOW",
      l = "SET_ADVANCED",
      d = "SET_BREADCRUMBS_TITLE",
      p = "SET_CANONICAL_URL",
      f = "LOAD_ADVANCED_SETTINGS",
      g = function g(e) {
    return s.noIndex = e, {
      type: c,
      value: e
    };
  },
      h = function h(e) {
    return s.noFollow = e, {
      type: u,
      value: e
    };
  },
      m = function m(e) {
    return s.advanced = e.join(","), {
      type: l,
      value: e
    };
  },
      b = function b(e) {
    return s.breadcrumbsTitle = e, {
      type: d,
      value: e
    };
  },
      y = function y(e) {
    return s.canonical = e, {
      type: p,
      value: e
    };
  },
      w = function w() {
    return {
      type: f,
      settings: {
        noIndex: s.noIndex,
        noFollow: s.noFollow,
        advanced: s.advanced.split(","),
        breadcrumbsTitle: s.breadcrumbsTitle,
        canonical: s.canonical,
        isLoading: !1
      }
    };
  };
}, function (e, t, n) {
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
},,, function (e, t, n) {
  "use strict";

  n.d(t, "e", function () {
    return u;
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
    return h;
  }), n.d(t, "i", function () {
    return m;
  }), n.d(t, "f", function () {
    return b;
  }), n.d(t, "g", function () {
    return y;
  });

  var r = n(4),
      i = n(5),
      o = n.n(i),
      a = n(7),
      s = n.n(a),
      c = function () {
    function e() {
      o()(this, e);
    }

    return s()(e, null, [{
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
      u = "SET_TWITTER_TITLE",
      l = "SET_TWITTER_DESCRIPTION",
      d = "SET_TWITTER_IMAGE",
      p = "CLEAR_TWITTER_IMAGE",
      f = "LOAD_TWITTER_PREVIEW",
      g = function g(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim() ? c.title = "" : c.title = e, {
      type: u,
      title: e
    };
  },
      h = function h(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialDescriptionTemplate().trim() ? c.description = "" : c.description = e, {
      type: l,
      description: e
    };
  },
      m = function m(e) {
    return c.imageId = e.id, c.imageUrl = e.url, {
      type: d,
      image: e
    };
  },
      b = function b() {
    return c.imageId = "", c.imageUrl = "", {
      type: p
    };
  },
      y = function y() {
    var e = Object(r.select)("yoast-seo/editor"),
        t = e.getSocialDescriptionTemplate,
        n = e.getSocialTitleTemplate;
    return {
      type: f,
      imageId: c.imageId,
      imageUrl: c.imageUrl,
      description: c.description || t(),
      title: c.title || n()
    };
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "e", function () {
    return u;
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
    return h;
  }), n.d(t, "i", function () {
    return m;
  }), n.d(t, "f", function () {
    return b;
  }), n.d(t, "g", function () {
    return y;
  });

  var r = n(4),
      i = n(5),
      o = n.n(i),
      a = n(7),
      s = n.n(a),
      c = function () {
    function e() {
      o()(this, e);
    }

    return s()(e, null, [{
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
      u = "SET_FACEBOOK_TITLE",
      l = "SET_FACEBOOK_DESCRIPTION",
      d = "SET_FACEBOOK_IMAGE",
      p = "CLEAR_FACEBOOK_IMAGE",
      f = "LOAD_FACEBOOK_PREVIEW",
      g = function g(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim() ? c.title = "" : c.title = e, {
      type: u,
      title: e
    };
  },
      h = function h(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialDescriptionTemplate().trim() ? c.description = "" : c.description = e, {
      type: l,
      description: e
    };
  },
      m = function m(e) {
    return c.imageUrl = e.url, c.imageId = e.id, {
      type: d,
      image: e
    };
  },
      b = function b() {
    return c.imageId = "", c.imageUrl = "", {
      type: p
    };
  },
      y = function y() {
    var e = Object(r.select)("yoast-seo/editor"),
        t = e.getSocialDescriptionTemplate,
        n = e.getSocialTitleTemplate;
    return {
      type: f,
      imageId: c.imageId,
      imageUrl: c.imageUrl,
      description: c.description || t(),
      title: c.title || n()
    };
  };
},,, function (e, t) {
  e.exports = window.wp.url;
},,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(20),
      i = n(2);

  function o() {
    var e = Object(r.a)();
    return 1 === Object(i.get)(e, "keywordAnalysisActive", 0);
  }
}, function (e, t, n) {
  "use strict";

  n.d(t, "d", function () {
    return i;
  }), n.d(t, "c", function () {
    return o;
  }), n.d(t, "b", function () {
    return a;
  }), n.d(t, "a", function () {
    return s;
  }), n.d(t, "h", function () {
    return c;
  }), n.d(t, "g", function () {
    return u;
  }), n.d(t, "f", function () {
    return l;
  }), n.d(t, "e", function () {
    return d;
  });

  var r = n(33),
      i = "SET_PAGE_TYPE",
      o = "SET_ARTICLE_TYPE",
      a = "GET_SCHEMA_PAGE_DATA",
      s = "GET_SCHEMA_ARTICLE_DATA",
      c = function c(e) {
    return r.a.pageType = e, {
      type: i,
      pageType: e
    };
  },
      u = function u(e) {
    return r.a.articleType = e, {
      type: o,
      articleType: e
    };
  },
      l = function l() {
    return {
      type: a,
      pageType: r.a.pageType,
      defaultPageType: r.a.defaultPageType
    };
  },
      d = function d() {
    return {
      type: s,
      articleType: r.a.articleType,
      defaultArticleType: r.a.defaultArticleType
    };
  };
},,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  }), n.d(t, "c", function () {
    return o;
  }), n.d(t, "b", function () {
    return a;
  }), n.d(t, "d", function () {
    return s;
  }), n.d(t, "e", function () {
    return c;
  }), n.d(t, "f", function () {
    return u;
  });

  var r = n(29),
      i = "".concat("WPSEO_", "LOAD_CORNERSTONE_CONTENT"),
      o = "".concat("WPSEO_", "TOGGLE_CORNERSTONE_CONTENT"),
      a = "".concat("WPSEO_", "SET_CORNERSTONE_CONTENT"),
      s = function s() {
    return {
      type: a,
      isCornerstone: r.a.isCornerstone
    };
  },
      c = function c(e) {
    return r.a.isCornerstone = e, {
      type: a,
      isCornerstone: e
    };
  },
      u = function u() {
    return r.a.isCornerstone = !r.a.isCornerstone, {
      type: o
    };
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return i;
  }), n.d(t, "b", function () {
    return o;
  }), n.d(t, "c", function () {
    return a;
  }), n.d(t, "d", function () {
    return s;
  });

  var r = n(29),
      i = "".concat("WPSEO_", "LOAD_FOCUS_KEYWORD"),
      o = "".concat("WPSEO_", "SET_FOCUS_KEYWORD"),
      a = function a() {
    return {
      type: i,
      keyword: r.a.keyphrase
    };
  },
      s = function s(e) {
    return r.a.keyphrase = e, {
      type: o,
      keyword: e
    };
  };
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "setTextdomainL10n", function () {
    return o;
  }), n.d(t, "setYoastComponentsL10n", function () {
    return a;
  }), n.d(t, "setWordPressSeoL10n", function () {
    return s;
  });
  var r = n(3),
      i = n(2);

  function o(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "wpseoYoastJSL10n",
        n = Object(i.get)(window, [t, e, "locale_data", e], !1);
    !1 === n ? Object(r.setLocaleData)({
      "": {}
    }, e) : Object(r.setLocaleData)(n, e);
  }

  function a() {
    o("yoast-components");
  }

  function s() {
    o("wordpress-seo");
  }
},, function (e, t) {
  e.exports = window.wp.hooks;
}, function (e, t) {
  e.exports = window.wp.apiFetch;
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(20),
      i = n(2);

  function o() {
    var e = Object(r.a)();
    return 1 === Object(i.get)(e, "contentAnalysisActive", 0);
  }
}, function (e, t) {
  e.exports = window.wp.richText;
}, function (e, t, n) {
  "use strict";

  n.d(t, "b", function () {
    return c;
  }), n.d(t, "a", function () {
    return u;
  }), n.d(t, "d", function () {
    return l;
  }), n.d(t, "c", function () {
    return d;
  });

  var r = n(5),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      s = function () {
    function e() {
      i()(this, e);
    }

    return a()(e, null, [{
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
      c = "SET_ESTIMATED_READING_TIME",
      u = "LOAD_ESTIMATED_READING_TIME";

  function l(e) {
    return s.estimatedReadingTime = e, {
      type: c,
      estimatedReadingTime: e
    };
  }

  function d() {
    return {
      type: u,
      estimatedReadingTime: s.estimatedReadingTime
    };
  }
},, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  }), n.d(t, "b", function () {
    return s;
  }), n.d(t, "c", function () {
    return c;
  });
  var r = n(26),
      i = n.n(r),
      o = i.a.mark(c),
      a = "DISMISS_ALERT",
      s = "DISMISS_ALERT_SUCCESS";

  function c(e) {
    return i.a.wrap(function (t) {
      for (;;) {
        switch (t.prev = t.next) {
          case 0:
            return t.next = 2, {
              type: a,
              alertKey: e
            };

          case 2:
            return t.abrupt("return", {
              type: s,
              alertKey: e
            });

          case 3:
          case "end":
            return t.stop();
        }
      }
    }, o);
  }
}, function (e, t) {
  function n(t, r) {
    return e.exports = n = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    }, n(t, r);
  }

  e.exports = n;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    var t,
        n = document.getElementById("yoast-measurement-element");
    return n || ((t = document.createElement("div")).id = "yoast-measurement-element", t.style.position = "absolute", t.style.left = "-9999em", t.style.top = 0, t.style.height = 0, t.style.overflow = "hidden", t.style.fontFamily = "arial, sans-serif", t.style.fontSize = "18px", t.style.fontWeight = "400", document.body.appendChild(t), n = t), n.innerHTML = e, n.offsetWidth;
  }

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
  "use strict";

  function r() {}

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "getNoIndex", function () {
    return i;
  }), n.d(t, "getNoFollow", function () {
    return o;
  }), n.d(t, "getAdvanced", function () {
    return a;
  }), n.d(t, "getBreadcrumbsTitle", function () {
    return s;
  }), n.d(t, "getCanonical", function () {
    return c;
  }), n.d(t, "getIsLoading", function () {
    return u;
  }), n.d(t, "getSeoTitle", function () {
    return q;
  }), n.d(t, "getDescription", function () {
    return W;
  }), n.d(t, "getPermalink", function () {
    return z;
  }), n.d(t, "getAnalysisTimestamp", function () {
    return $;
  }), n.d(t, "getAnalysisData", function () {
    return G;
  }), n.d(t, "isCornerstoneContent", function () {
    return H;
  }), n.d(t, "getEditorContext", function () {
    return d;
  }), n.d(t, "getPostOrPageString", function () {
    return p;
  }), n.d(t, "getIsBlockEditor", function () {
    return f;
  }), n.d(t, "getIsElementorEditor", function () {
    return g;
  }), n.d(t, "getEditorType", function () {
    return h;
  }), n.d(t, "getContentLocale", function () {
    return m;
  }), n.d(t, "getEditorDataContent", function () {
    return w;
  }), n.d(t, "getEditorDataTitle", function () {
    return O;
  }), n.d(t, "getEditorDataExcerpt", function () {
    return v;
  }), n.d(t, "getEditorDataExcerptWithFallback", function () {
    return _;
  }), n.d(t, "getEditorDataImageUrl", function () {
    return E;
  }), n.d(t, "getEditorDataImageFallback", function () {
    return S;
  }), n.d(t, "getIsModalOpen", function () {
    return Q;
  }), n.d(t, "getEstimatedReadingTime", function () {
    return Z;
  }), n.d(t, "getFacebookTitle", function () {
    return X;
  }), n.d(t, "getFacebookDescription", function () {
    return J;
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
    return oe;
  }), n.d(t, "getSeoTitleTemplate", function () {
    return ae;
  }), n.d(t, "getSeoTitleTemplateNoFallback", function () {
    return se;
  }), n.d(t, "getSocialTitleTemplate", function () {
    return ce;
  }), n.d(t, "getSeoDescriptionTemplate", function () {
    return ue;
  }), n.d(t, "getSocialDescriptionTemplate", function () {
    return le;
  }), n.d(t, "getReplacedExcerpt", function () {
    return de;
  }), n.d(t, "getFocusKeyphrase", function () {
    return j;
  }), n.d(t, "getActiveMarker", function () {
    return pe;
  }), n.d(t, "getMarkerPauseStatus", function () {
    return fe;
  }), n.d(t, "isMarkingAvailable", function () {
    return ge;
  }), n.d(t, "getMarksButtonStatus", function () {
    return he;
  }), n.d(t, "isAlertDismissed", function () {
    return me;
  }), n.d(t, "getPreferences", function () {
    return be;
  }), n.d(t, "getIsKeywordAnalysisActive", function () {
    return ye;
  }), n.d(t, "getPrimaryTaxonomyId", function () {
    return we;
  }), n.d(t, "getSeoResults", function () {
    return _e;
  }), n.d(t, "getResultsForKeyword", function () {
    return Ee;
  }), n.d(t, "getReadabilityResults", function () {
    return Se;
  }), n.d(t, "getResultsForFocusKeyword", function () {
    return je;
  }), n.d(t, "getResultById", function () {
    return Te;
  }), n.d(t, "getMarkButtonStatus", function () {
    return ke;
  }), n.d(t, "getDefaultPageType", function () {
    return xe;
  }), n.d(t, "getPageType", function () {
    return Pe;
  }), n.d(t, "getDefaultArticleType", function () {
    return De;
  }), n.d(t, "getArticleType", function () {
    return Ae;
  }), n.d(t, "getSEMrushModalOpen", function () {
    return Re;
  }), n.d(t, "getSEMrushNoKeyphraseMessage", function () {
    return Ie;
  }), n.d(t, "getSEMrushIsRequestPending", function () {
    return Ce;
  }), n.d(t, "getSEMrushRequestIsSuccess", function () {
    return Me;
  }), n.d(t, "getSEMrushRequestResponse", function () {
    return Ne;
  }), n.d(t, "getSEMrushRequestLimitReached", function () {
    return Le;
  }), n.d(t, "getSEMrushRequestKeyphrase", function () {
    return Ue;
  }), n.d(t, "getSEMrushSelectedCountry", function () {
    return Fe;
  }), n.d(t, "getSEMrushRequestHasData", function () {
    return Be;
  }), n.d(t, "getSEMrushLoginStatus", function () {
    return Ye;
  }), n.d(t, "getAuthorName", function () {
    return T;
  }), n.d(t, "getSiteName", function () {
    return k;
  }), n.d(t, "getBaseUrlFromSettings", function () {
    return x;
  }), n.d(t, "getDateFromSettings", function () {
    return P;
  }), n.d(t, "getRecommendedReplaceVars", function () {
    return D;
  }), n.d(t, "getSiteIconUrlFromSettings", function () {
    return A;
  }), n.d(t, "getShoppingData", function () {
    return Ke;
  }), n.d(t, "getReplaceVars", function () {
    return R;
  }), n.d(t, "getSnippetEditorTemplates", function () {
    return I;
  }), n.d(t, "getSnippetEditorMode", function () {
    return C;
  }), n.d(t, "getSnippetEditorTitle", function () {
    return M;
  }), n.d(t, "getSnippetEditorTitleWithTemplate", function () {
    return N;
  }), n.d(t, "getSnippetEditorDescription", function () {
    return L;
  }), n.d(t, "getSnippetEditorDescriptionWithTemplate", function () {
    return U;
  }), n.d(t, "getSnippetEditorSlug", function () {
    return F;
  }), n.d(t, "getSnippetEditorData", function () {
    return B;
  }), n.d(t, "getSnippetEditorWordsToHighlight", function () {
    return Y;
  }), n.d(t, "getSnippetEditorIsLoading", function () {
    return K;
  }), n.d(t, "getSnippetEditorPreviewImageUrl", function () {
    return V;
  }), n.d(t, "getTwitterTitle", function () {
    return Ve;
  }), n.d(t, "getTwitterDescription", function () {
    return qe;
  }), n.d(t, "getTwitterImageUrl", function () {
    return We;
  }), n.d(t, "getTwitterImageType", function () {
    return ze;
  }), n.d(t, "getTwitterImageSrc", function () {
    return $e;
  }), n.d(t, "getTwitterWarnings", function () {
    return Ge;
  }), n.d(t, "getWarningMessage", function () {
    return He;
  });

  var r = n(2),
      i = function i(e) {
    return Object(r.get)(e, "advancedSettings.noIndex", "");
  },
      o = function o(e) {
    return Object(r.get)(e, "advancedSettings.noFollow", "");
  },
      a = function a(e) {
    return Object(r.get)(e, "advancedSettings.advanced", "");
  },
      s = function s(e) {
    return Object(r.get)(e, "advancedSettings.breadcrumbsTitle", "summary");
  },
      c = function c(e) {
    return Object(r.get)(e, "advancedSettings.canonical", "");
  },
      u = function u(e) {
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

  function h(e) {
    return g(e) ? "elementorEditor" : f(e) ? "blockEditor" : "classicEditor";
  }

  function m(e) {
    return Object(r.get)(e, "editorContext.contentLocale", "en_US");
  }

  var b = n(63),
      y = n(40),
      w = function w(e) {
    return Object(r.get)(e, "editorData.content", "");
  },
      O = function O(e) {
    return Object(r.get)(e, "editorData.title", "");
  },
      v = function v(e) {
    return Object(r.get)(e, "editorData.excerpt");
  },
      _ = function _(e) {
    var t = Object(r.get)(e, "editorData.excerpt", "");
    return "" === t && (t = Object(y.excerptFromContent)(Object(r.get)(e, "editorData.content", ""))), t;
  },
      E = function E(e) {
    return Object(r.get)(e, "editorData.imageUrl", "");
  },
      S = function S(e) {
    var t = [{
      featuredOrFirstImage: Object(r.get)(e, "editorData.imageUrl", "")
    }, {
      socialImage: Object(r.get)(window, "wpseoScriptData.metabox.social_image_template", "")
    }, {
      siteWideImage: Object(r.get)(window.wpseoScriptData, "metabox.showSocial.facebook") && Object(r.get)(e, "settings.socialPreviews.sitewideImage", "")
    }];
    Object(b.applyFilters)("yoast.socials.imageFallback", t);

    for (var n = 0, i = t; n < i.length; n++) {
      var o = i[n];
      if (Object.values(o)[0]) return Object.values(o)[0];
    }

    return "";
  };

  function j(e) {
    return e.focusKeyword;
  }

  var T = function T(e) {
    return Object(r.get)(e, "settings.socialPreviews.authorName", "");
  },
      k = function k(e) {
    return Object(r.get)(e, "settings.socialPreviews.siteName", "");
  },
      x = function x(e) {
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
      R = function R(e) {
    return Object(r.get)(e, "snippetEditor.replacementVariables", []);
  },
      I = function I(e) {
    return Object(r.get)(e, "snippetEditor.templates", {
      title: "",
      description: ""
    });
  },
      C = function C(e) {
    return Object(r.get)(e, "snippetEditor.mode", "mobile");
  },
      M = function M(e) {
    return Object(r.get)(e, "snippetEditor.data.title", "");
  },
      N = function N(e) {
    return Object(r.get)(e, "snippetEditor.data.title", "") || I(e).title;
  },
      L = function L(e) {
    return Object(r.get)(e, "snippetEditor.data.description", "");
  },
      U = function U(e) {
    return L(e) || I(e).description;
  },
      F = function F(e) {
    return Object(r.get)(e, "snippetEditor.data.slug", "");
  },
      B = function B(e) {
    return Object(r.get)(e, "snippetEditor.data", {
      title: M(e),
      description: L(e),
      slug: F(e)
    });
  },
      Y = function Y(e) {
    return Object(r.get)(e, "snippetEditor.wordsToHighlight", []);
  },
      K = function K(e) {
    return Object(r.get)(e, "snippetEditor.isLoading", !0);
  },
      V = function V(e) {
    return Object(r.get)(e, "snippetEditor.data.snippetPreviewImageURL", "");
  },
      q = function q(e) {
    return Object(r.get)(e, "analysisData.snippet.title", "");
  },
      W = function W(e) {
    return Object(r.get)(e, "analysisData.snippet.description", "");
  },
      z = function z(e) {
    return Object(r.get)(e, "analysisData.snippet.url", "");
  },
      $ = function $(e) {
    return parseInt(Object(r.get)(e, "analysisData.timestamp", 0), 10);
  },
      G = function G(e) {
    var t = q(e) || M(e),
        n = F(e);
    return {
      text: w(e),
      title: t,
      keyword: j(e),
      description: W(e) || L(e),
      locale: m(e),
      titleWidth: Object(l.a)(t),
      url: n,
      permalink: x(e) + n
    };
  };

  function H(e) {
    return e.isCornerstone;
  }

  var Q = function Q(e, t) {
    return Object(r.get)(e, "editorModals.openedModal", "") === t;
  };

  function Z(e) {
    return Object(r.get)(e, "estimatedReadingTime.estimatedReadingTime", 0) || 0;
  }

  var X = function X(e) {
    return Object(r.get)(e, "facebookEditor.title", "");
  },
      J = function J(e) {
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
      var o = i[n];
      if (Object.values(o)[0]) return Object.values(o)[0];
    }

    return "";
  },
      oe = function oe() {
    var e = Object(r.get)(window, "wpseoScriptData.metabox.base_url", "");
    return "" === e ? "" : (e = new URL(e)).host;
  },
      ae = function ae() {
    return Object(r.get)(window, "wpseoScriptData.metabox.title_template", "");
  },
      se = function se() {
    return Object(r.get)(window, "wpseoScriptData.metabox.title_template_no_fallback", "");
  },
      ce = function ce() {
    return Object(r.get)(window, "wpseoScriptData.metabox.social_title_template", "");
  },
      ue = function ue() {
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

  function he(e) {
    return e.marksButtonStatus;
  }

  function me(e, t) {
    return !0 === e.dismissedAlerts[t];
  }

  function be(e) {
    return e.preferences;
  }

  function ye(e) {
    return Object(r.get)(e, "preferences.isKeywordAnalysisActive", !1);
  }

  function we(e, t) {
    return e.primaryTaxonomies[t];
  }

  var Oe = n(30),
      ve = n.n(Oe);

  function _e(e) {
    var t = Object(r.get)(e, "analysis.seo", {});
    return Object(r.isEmpty)(t) ? {
      results: [],
      overallScore: null
    } : t;
  }

  function Ee(e, t) {
    var n = _e(e);

    return Object(r.get)(n, t, {});
  }

  function Se(e) {
    var t = Object(r.get)(e, "analysis.readability", {});
    return Object(r.isEmpty)(t) ? {
      results: [],
      overallScore: null
    } : t;
  }

  function je(e) {
    return Ee(e, e.focusKeyword);
  }

  function Te(e, t) {
    var n = je(e).results || [],
        r = Se(e).results || [];
    return [].concat(ve()(n), ve()(r)).find(function (e) {
      return e._identifier === t;
    });
  }

  function ke(e) {
    return e.marksButtonStatus;
  }

  var xe = function xe(e) {
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

  function Re(e) {
    return e.SEMrushModal.whichModalOpen;
  }

  function Ie(e) {
    return e.SEMrushModal.displayNoKeyphraseMessage;
  }

  function Ce(e) {
    return e.SEMrushRequest.isRequestPending;
  }

  function Me(e) {
    return e.SEMrushRequest.isSuccess;
  }

  function Ne(e) {
    return e.SEMrushRequest.response;
  }

  function Le(e) {
    return e.SEMrushRequest.limitReached;
  }

  function Ue(e) {
    return e.SEMrushRequest.keyphrase;
  }

  function Fe(e) {
    return e.SEMrushRequest.countryCode;
  }

  function Be(e) {
    return e.SEMrushRequest.hasData;
  }

  function Ye(e) {
    return e.SEMrushRequest.isLoggedIn;
  }

  var Ke = function Ke(e) {
    return Object(r.get)(e, "shoppingData", {});
  },
      Ve = function Ve(e) {
    return Object(r.get)(e, "twitterEditor.title", "");
  },
      qe = function qe(e) {
    return Object(r.get)(e, "twitterEditor.description", "");
  },
      We = function We(e) {
    return Object(r.get)(e, "twitterEditor.image.url", "");
  },
      ze = function ze(e) {
    return Object(r.get)(e, "settings.socialPreviews.twitterCardType", "summary");
  },
      $e = function $e(e) {
    return Object(r.get)(e, "twitterEditor.image.src", "");
  },
      Ge = function Ge(e) {
    return Object(r.get)(e, "twitterEditor.warnings", []);
  };

  function He(e) {
    return Object(r.get)(e, "warning.message", []);
  }
}, function (e, t, n) {
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
}, function (e, t, n) {
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
}, function (e, t, n) {
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
}, function (e, t, n) {
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
}, function (e, t, n) {
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
}, function (e, t) {
  e.exports = window.wp.sanitize;
}, function (e, t) {
  var n,
      r,
      i = "",
      o = function o(e) {
    e = e || "polite";
    var t = document.createElement("div");
    return t.id = "a11y-speak-" + e, t.className = "a11y-speak-region", t.setAttribute("style", "clip: rect(1px, 1px, 1px, 1px); position: absolute; height: 1px; width: 1px; overflow: hidden; word-wrap: normal;"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions text"), t.setAttribute("aria-atomic", "true"), document.querySelector("body").appendChild(t), t;
  };

  !function (e) {
    if ("complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll) return e();
    document.addEventListener("DOMContentLoaded", e);
  }(function () {
    n = document.getElementById("a11y-speak-polite"), r = document.getElementById("a11y-speak-assertive"), null === n && (n = o("polite")), null === r && (r = o("assertive"));
  }), e.exports = function (e, t) {
    !function () {
      for (var e = document.querySelectorAll(".a11y-speak-region"), t = 0; t < e.length; t++) {
        e[t].textContent = "";
      }
    }(), e = e.replace(/<[^<>]+>/g, " "), i === e && (e += " "), i = e, r && "assertive" === t ? r.textContent = e : n && (n.textContent = e);
  };
},, function (e, t, n) {
  "use strict";

  function r() {
    return window.wpseoScriptData && "1" === window.wpseoScriptData.isBlockEditor;
  }

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t) {
  e.exports = window.yoast.featureFlag;
},,, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "sortResultsByIdentifier", function () {
    return s;
  }), n.d(t, "default", function () {
    return c;
  }), n.d(t, "initializationDone", function () {
    return u;
  });
  var r = n(22),
      i = n(17),
      o = n(72),
      a = !1;

  function s(e) {
    return e.sort(function (e, t) {
      return e._identifier.localeCompare(t._identifier);
    });
  }

  function c(e, t, n, c, u) {
    var l = t();
    a && e.analyze(l).then(function (e) {
      var t = e.result,
          o = t.seo,
          a = t.readability;

      if (o) {
        var d = o[""];
        d.results.forEach(function (e) {
          e.getMarker = function () {
            return function () {
              return n(l, e.marks);
            };
          };
        }), d.results = s(d.results), c.dispatch(Object(r.setSeoResultsForKeyword)(l.getKeyword(), d.results)), c.dispatch(Object(r.setOverallSeoScore)(d.score, l.getKeyword())), c.dispatch(Object(i.h)()), u.saveScores(d.score, l.getKeyword());
      }

      a && (a.results.forEach(function (e) {
        e.getMarker = function () {
          return function () {
            return n(l, e.marks);
          };
        };
      }), a.results = s(a.results), c.dispatch(Object(r.setReadabilityResults)(a.results)), c.dispatch(Object(r.setOverallReadabilityScore)(a.score)), c.dispatch(Object(i.h)()), u.saveContentScore(a.score));
    })["catch"](o.a);
  }

  function u() {
    a = !0;
  }
}, function (e, t) {
  e.exports = function (e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = new Array(e.length); t < e.length; t++) {
        n[t] = e[t];
      }

      return n;
    }
  };
}, function (e, t) {
  e.exports = function (e) {
    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
  };
}, function (e, t) {
  e.exports = function () {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  };
},, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(2),
      i = n(20);

  function o() {
    var e = Object(i.a)();
    return Object(r.get)(e, "contentLocale", "en_US");
  }
},, function (e, t, n) {
  "use strict";

  n.d(t, "c", function () {
    return a;
  }), n.d(t, "a", function () {
    return s;
  }), n.d(t, "b", function () {
    return c;
  });
  var r = n(23),
      i = n(2);

  function o(e, t, n) {
    var o = e.dom,
        a = e.getContent();
    a = r.markers.removeMarks(a), Object(i.forEach)(n, function (e) {
      a = e.applyWithReplace(a);
    }), e.setContent(a), function (e) {
      var t = e.getContent();
      t = t.replace(new RegExp("&lt;yoastmark.+?&gt;", "g"), "").replace(new RegExp("&lt;/yoastmark&gt;", "g"), ""), e.setContent(t);
    }(e);
    var s = o.select("yoastmark");
    Object(i.forEach)(s, function (e) {
      e.setAttribute("data-mce-bogus", "1");
    });
  }

  function a(e) {
    return window.test = e, o.bind(null, e);
  }

  function s(e) {
    return -1 !== e.getContent({
      format: "raw"
    }).indexOf("<yoastmark");
  }

  function c(e) {
    a(e)(null, []);
  }
},,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(2),
      i = n(20);

  function o() {
    var e = Object(i.a)(),
        t = Object(r.get)(e, "translations", {
      domain: "js-text-analysis",
      locale_data: {
        "js-text-analysis": {
          "": {}
        }
      }
    });
    return "wordpress-seo" !== t.domain || Object(r.isUndefined)(t.locale_data["wordpress-seo"]) || (t.domain = "js-text-analysis", t.locale_data["js-text-analysis"] = t.locale_data["wordpress-seo"], t.locale_data["js-text-analysis"][""].domain = "js-text-analysis", delete t.locale_data["wordpress-seo"]), t;
  }
},,,,,,, function (e, t, n) {
  "use strict";

  n.r(t), n.d(t, "refreshDelay", function () {
    return r;
  });
  var r = 500;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    jQuery(".adminbar-seo-score").attr("class", "wpseo-score-icon adminbar-seo-score " + e.className).find(".adminbar-seo-score-text").text(e.screenReaderText);
  }

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
  "use strict";

  var r = n(10),
      i = n.n(r),
      o = n(2);

  function a(e, t) {
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
      t % 2 ? a(Object(n), !0).forEach(function (t) {
        i()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  t.a = {
    getDataFromCollector: function getDataFromCollector(e) {
      return {
        title: e.getSnippetTitle(),
        slug: e.getSnippetCite(),
        description: e.getSnippetMeta()
      };
    },
    getDataFromStore: function getDataFromStore(e) {
      var t = e.getState().snippetEditor.data;
      return {
        title: t.title,
        slug: t.slug,
        description: t.description
      };
    },
    getTemplatesFromL10n: function getTemplatesFromL10n(e) {
      var t = {};
      if (Object(o.isUndefined)(e)) return t;
      t.title = e.title_template;
      var n = e.metadesc_template;
      return Object(o.isEmpty)(n) || (t.description = n), t;
    },
    getDataWithTemplates: function getDataWithTemplates(e, t) {
      var n = s({}, e);
      return Object(o.forEach)(t, function (t, r) {
        Object(o.has)(e, r) && "" === e[r] && (n[r] = t);
      }), n;
    },
    getDataWithoutTemplates: function getDataWithoutTemplates(e, t) {
      var n = s({}, e);
      return Object(o.forEach)(t, function (t, r) {
        Object(o.has)(e, r) && e[r].trim() === t && (n[r] = "");
      }), n;
    }
  };
},, function (e, t, n) {
  "use strict";

  n.d(t, "b", function () {
    return m;
  }), n.d(t, "a", function () {
    return O;
  }), n.d(t, "c", function () {
    return v;
  });
  var r = n(10),
      i = n.n(r),
      o = n(2),
      a = (n(179), n(66)),
      s = n(4);

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

  var l = "<yoastmark class='yoast-text-mark'>",
      d = [],
      p = {
    "core/quote": [{
      key: "value",
      multilineTag: "p"
    }, {
      key: "citation"
    }],
    "core/paragraph": [{
      key: "content"
    }],
    "core/list": [{
      key: "values",
      multilineTag: "li",
      multilineWrapperTag: ["ul", "ol"]
    }],
    "core/heading": [{
      key: "content"
    }]
  },
      f = {
    singleH1: {
      "core/heading": [{
        key: "content",
        filter: function filter(e) {
          return 1 === e.level;
        }
      }]
    }
  };

  function g() {
    var e = d.shift();
    e && (Object(s.dispatch)("core/annotations").__experimentalAddAnnotation(e), h());
  }

  function h() {
    Object(o.isFunction)(window.requestIdleCallback) ? window.requestIdleCallback(g, {
      timeout: 1e3
    }) : setTimeout(g, 150);
  }

  function m() {
    return Object(s.select)("core/block-editor") && Object(o.isFunction)(Object(s.select)("core/block-editor").getBlocks) && Object(s.select)("core/annotations") && Object(o.isFunction)(Object(s.dispatch)("core/annotations").__experimentalAddAnnotation);
  }

  function b(e) {
    var t = Object(s.select)("yoast-seo/editor").getActiveMarker(),
        n = f[t] || p;
    return n.hasOwnProperty(e) ? n[e] : [];
  }

  function y(e, t, n) {
    var r = e.key,
        i = t.attributes,
        s = i[r];
    if (e.filter && !e.filter(i)) return [];
    var c = Object(a.create)({
      html: s,
      multilineTag: e.multilineTag,
      multilineWrapperTag: e.multilineWrapperTag
    }).text;
    return Object(o.flatMap)(n, function (e) {
      var n = function (e, t) {
        var n = t.getOriginal().replace(/(<([^>]+)>)/gi, ""),
            r = t.getMarked().replace(/(<(?!\/?yoastmark)[^>]+>)/gi, ""),
            i = function (e, t) {
          var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
              r = [];
          if (0 === e.length) return r;
          var i,
              o = 0;

          for (n || (t = t.toLowerCase(), e = e.toLowerCase()); (i = e.indexOf(t, o)) > -1;) {
            r.push(i), o = i + t.length;
          }

          return r;
        }(e, n);

        if (0 === i.length) return [];

        var o = function (e) {
          for (var t = e.indexOf(l), n = null, r = []; t >= 0;) {
            if ((n = (e = e.replace(l, "")).indexOf("</yoastmark>")) < t) return [];
            e = e.replace("</yoastmark>", ""), r.push({
              startOffset: t,
              endOffset: n
            }), t = e.indexOf(l), n = null;
          }

          return r;
        }(r),
            a = [];

        return o.forEach(function (e) {
          i.forEach(function (r) {
            var i = r + e.startOffset,
                o = r + e.endOffset;
            0 === e.startOffset && e.endOffset === t.getOriginal().length && (o = r + n.length), a.push({
              startOffset: i,
              endOffset: o
            });
          });
        }), a;
      }(c, e);

      return n ? n.map(function (e) {
        return u(u({}, e), {}, {
          block: t.clientId,
          richTextIdentifier: r
        });
      }) : [];
    });
  }

  function w(e) {
    d = e.map(function (e) {
      return {
        blockClientId: e.block,
        source: "yoast",
        richTextIdentifier: e.richTextIdentifier,
        range: {
          start: e.startOffset,
          end: e.endOffset
        }
      };
    });
  }

  function O(e, t) {
    if (d = [], Object(s.dispatch)("core/annotations").__experimentalRemoveAnnotationsBySource("yoast"), 0 !== t.length) {
      var n = Object(s.select)("core/block-editor").getBlocks();
      w(Object(o.flatMap)(n, function (e) {
        return Object(o.flatMap)(b(e.name), function (n) {
          return y(n, e, t);
        });
      })), h();
    }
  }

  function v() {
    var e = Object(s.select)("core/editor").getSelectedBlock(),
        t = Object(s.select)("yoast-seo/editor").getActiveMarker();

    if (e && t) {
      var n;
      n = e.clientId, Object(s.select)("core/annotations").__experimentalGetAnnotations().filter(function (e) {
        return e.blockClientId === n && "yoast" === e.source;
      }).forEach(function (e) {
        Object(s.dispatch)("core/annotations").__experimentalRemoveAnnotation(e.id);
      });
      var r = Object(s.select)("yoast-seo/editor").getResultById(t);

      if (void 0 !== r) {
        var i = r.marks;
        w(Object(o.flatMap)(b(e.name), function (t) {
          return y(t, e, i);
        })), h();
      }
    }
  }
}, function (e, t, n) {
  "use strict";

  function r(e) {
    var t = jQuery(".yst-traffic-light"),
        n = t.closest(".wpseo-meta-section-link"),
        r = jQuery("#wpseo-traffic-light-desc"),
        i = e.className || "na";
    t.attr("class", "yst-traffic-light " + i), n.attr("aria-describedby", "wpseo-traffic-light-desc"), r.length > 0 ? r.text(e.screenReaderText) : n.closest("li").append("<span id='wpseo-traffic-light-desc' class='screen-reader-text'>" + e.screenReaderText + "</span>");
  }

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
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
},,, function (e, t, n) {
  "use strict";

  var r = n(10),
      i = n.n(r),
      o = n(2),
      a = n(69);

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

  function c(e) {
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

  var u = Object(o.get)(window, "wpseoScriptData.dismissedAlerts", {});

  t.a = function () {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return t.type === a.b && t.alertKey ? c(c({}, e), {}, i()({}, t.alertKey, !0)) : e;
  };
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return c;
  });
  var r = n(10),
      i = n.n(r),
      o = n(43);

  function a(e, t) {
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
      t % 2 ? a(Object(n), !0).forEach(function (t) {
        i()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  function c() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0;

    switch (t.type) {
      case o.b:
        return s(s({}, e), t.settings);

      case o.a:
        var n = Object.assign({}, e.socialPreviews, {
          contentImage: t.src
        });
        return s(s({}, e), {}, {
          socialPreviews: s({}, n)
        });

      default:
        return e;
    }
  }
},, function (e, t, n) {
  "use strict";

  var r = n(10),
      i = n.n(r),
      o = n(3),
      a = n(17),
      s = n(40);

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
        label: Object(o.__)("Date", "wordpress-seo"),
        value: ""
      }, {
        name: "id",
        label: Object(o.__)("ID", "wordpress-seo"),
        value: ""
      }, {
        name: "page",
        label: Object(o.__)("Page", "wordpress-seo"),
        value: ""
      }, {
        name: "searchphrase",
        label: Object(o.__)("Search phrase", "wordpress-seo"),
        value: ""
      }, {
        name: "sitedesc",
        label: Object(o.__)("Tagline", "wordpress-seo"),
        value: ""
      }, {
        name: "sitename",
        label: Object(o.__)("Site title", "wordpress-seo"),
        value: ""
      }, {
        name: "category",
        label: Object(o.__)("Category", "wordpress-seo"),
        value: ""
      }, {
        name: "focuskw",
        label: Object(o.__)("Focus keyphrase", "wordpress-seo"),
        value: ""
      }, {
        name: "title",
        label: Object(o.__)("Title", "wordpress-seo"),
        value: ""
      }, {
        name: "parent_title",
        label: Object(o.__)("Parent title", "wordpress-seo"),
        value: ""
      }, {
        name: "excerpt",
        label: Object(o.__)("Excerpt", "wordpress-seo"),
        value: ""
      }, {
        name: "primary_category",
        label: Object(o.__)("Primary category", "wordpress-seo"),
        value: ""
      }, {
        name: "sep",
        label: Object(o.__)("Separator", "wordpress-seo"),
        value: ""
      }, {
        name: "excerpt_only",
        label: Object(o.__)("Excerpt only", "wordpress-seo"),
        value: ""
      }, {
        name: "category_description",
        label: Object(o.__)("Category description", "wordpress-seo"),
        value: ""
      }, {
        name: "tag_description",
        label: Object(o.__)("Tag description", "wordpress-seo"),
        value: ""
      }, {
        name: "term_description",
        label: Object(o.__)("Term description", "wordpress-seo"),
        value: ""
      }, {
        name: "currentyear",
        label: Object(o.__)("Current year", "wordpress-seo"),
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
      case a.d:
        return u(u({}, e), {}, {
          mode: t.mode
        });

      case a.e:
        return u(u({}, e), {}, {
          data: u(u({}, e.data), t.data)
        });

      case a.f:
        var n = !0,
            r = e.replacementVariables.map(function (e) {
          return e.name === t.name ? (n = !1, {
            name: t.name,
            label: t.label || e.label,
            value: t.value
          }) : e;
        });
        return n && (r = Object(s.pushNewReplaceVar)(r, t)), u(u({}, e), {}, {
          replacementVariables: r
        });

      case a.c:
        return u(u({}, e), {}, {
          replacementVariables: e.replacementVariables.filter(function (e) {
            return e.name !== t.name;
          })
        });

      case a.b:
        return u(u({}, e), {}, {
          uniqueRefreshValue: t.time
        });

      case a.g:
        return u(u({}, e), {}, {
          wordsToHighlight: t.wordsToHighlight
        });

      case a.a:
        return u(u({}, e), {}, {
          data: u(u({}, e.data), {}, {
            title: t.data.title,
            description: t.data.description,
            slug: t.data.slug
          }),
          templates: u(u({}, e.templates), {}, {
            title: t.templates.title,
            description: t.templates.description
          }),
          isLoading: !1
        });
    }

    return e;
  };
},, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return d;
  }), n.d(t, "b", function () {
    return p;
  });
  var r = n(2),
      i = n(23),
      o = n(91);

  function a() {
    return Object(r.get)(window, ["wpseoAdminL10n", "default_query_params"], {});
  }

  var s = n(97),
      c = n(65),
      u = n(55),
      l = n(83);

  function d() {
    var e = Object(r.get)(window, ["wpseoScriptData", "analysis", "worker", "url"], "analysis-worker.js"),
        t = Object(i.createWorker)(e);
    return t.postMessage({
      dependencies: Object(r.get)(window, ["wpseoScriptData", "analysis", "worker", "dependencies"], [])
    }), new i.AnalysisWorkerWrapper(t);
  }

  function p() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = {
      locale: Object(o.a)(),
      contentAnalysisActive: Object(c.a)(),
      keywordAnalysisActive: Object(u.a)(),
      defaultQueryParams: a(),
      logLevel: Object(r.get)(window, ["wpseoScriptData", "analysis", "worker", "log_level"], "ERROR"),
      enabledFeatures: Object(l.enabledFeatures)()
    };
    t = Object(r.merge)(t, e);
    var n = Object(s.a)();
    return Object(r.isUndefined)(n) || Object(r.isUndefined)(n.domain) || (t.translations = n), t;
  }
},,, function (e, t) {
  e.exports = window.wp.isShallowEqual;
},, function (e, t, n) {
  "use strict";

  var r = n(5),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      s = n(2),
      c = function () {
    function e() {
      i()(this, e);
    }

    return a()(e, [{
      key: "listen",
      value: function value(e) {
        this.classicEditorContainer = document.getElementById("et_pb_main_editor_wrap"), this.classicEditorContainer && new MutationObserver(function (t) {
          Object(s.forEach)(t, function (t) {
            "attributes" === t.type && "class" === t.attributeName && (t.target.classList.contains("et_pb_hidden") ? e.classicEditorHidden() : e.classicEditorShown());
          });
        }).observe(this.classicEditorContainer, {
          attributes: !0
        });
      }
    }], [{
      key: "isActive",
      value: function value() {
        return !!document.getElementById("et_pb_main_editor_wrap");
      }
    }, {
      key: "isTinyMCEHidden",
      value: function value() {
        var e = document.getElementById("et_pb_main_editor_wrap");
        return !!e && e.classList.contains("et_pb_hidden");
      }
    }]), e;
  }(),
      u = function () {
    function e() {
      i()(this, e);
    }

    return a()(e, null, [{
      key: "isActive",
      value: function value() {
        return !!window.VCV_I18N;
      }
    }]), e;
  }(),
      l = {
    classicEditorHidden: s.noop,
    classicEditorShown: s.noop,
    pageBuilderLoaded: s.noop
  },
      d = function () {
    function e() {
      i()(this, e), this.determineActivePageBuilders();
    }

    return a()(e, [{
      key: "determineActivePageBuilders",
      value: function value() {
        c.isActive() && (this.diviActive = !0), u.isActive() && (this.vcActive = !0);
      }
    }, {
      key: "isPageBuilderActive",
      value: function value() {
        return this.diviActive || this.vcActive;
      }
    }, {
      key: "listen",
      value: function value(e) {
        this.callbacks = Object(s.defaults)(e, l), this.diviActive && new c().listen(e);
      }
    }, {
      key: "isClassicEditorHidden",
      value: function value() {
        return !(!this.diviActive || !c.isTinyMCEHidden());
      }
    }]), e;
  }();

  t.a = d;
},,,,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return l;
  });

  var r = n(34),
      i = n.n(r),
      o = n(5),
      a = n.n(o),
      s = n(7),
      c = n.n(s),
      u = n(2),
      l = function () {
    function e(t) {
      a()(this, e), this.refresh = t, this.loaded = !1, this.preloadThreshold = 3e3, this.plugins = {}, this.modifications = {}, this._registerPlugin = this._registerPlugin.bind(this), this._ready = this._ready.bind(this), this._reloaded = this._reloaded.bind(this), this._registerModification = this._registerModification.bind(this), this._registerAssessment = this._registerAssessment.bind(this), this._applyModifications = this._applyModifications.bind(this), setTimeout(this._pollLoadingPlugins.bind(this), 1500);
    }

    return c()(e, [{
      key: "_registerPlugin",
      value: function value(e, t) {
        return Object(u.isString)(e) ? Object(u.isUndefined)(t) || Object(u.isObject)(t) ? !1 === this._validateUniqueness(e) ? (console.error("Failed to register plugin. Plugin with name " + e + " already exists"), !1) : (this.plugins[e] = t, !0) : (console.error("Failed to register plugin " + e + ". Expected parameters `options` to be a object."), !1) : (console.error("Failed to register plugin. Expected parameter `pluginName` to be a string."), !1);
      }
    }, {
      key: "_ready",
      value: function value(e) {
        return Object(u.isString)(e) ? Object(u.isUndefined)(this.plugins[e]) ? (console.error("Failed to modify status for plugin " + e + ". The plugin was not properly registered."), !1) : (this.plugins[e].status = "ready", !0) : (console.error("Failed to modify status for plugin " + e + ". Expected parameter `pluginName` to be a string."), !1);
      }
    }, {
      key: "_reloaded",
      value: function value(e) {
        return Object(u.isString)(e) ? Object(u.isUndefined)(this.plugins[e]) ? (console.error("Failed to reload Content Analysis for plugin " + e + ". The plugin was not properly registered."), !1) : (this.refresh(), !0) : (console.error("Failed to reload Content Analysis for " + e + ". Expected parameter `pluginName` to be a string."), !1);
      }
    }, {
      key: "_registerModification",
      value: function value(e, t, n, r) {
        if (!Object(u.isString)(e)) return console.error("Failed to register modification for plugin " + n + ". Expected parameter `modification` to be a string."), !1;
        if (!Object(u.isFunction)(t)) return console.error("Failed to register modification for plugin " + n + ". Expected parameter `callable` to be a function."), !1;
        if (!Object(u.isString)(n)) return console.error("Failed to register modification for plugin " + n + ". Expected parameter `pluginName` to be a string."), !1;
        if (!1 === this._validateOrigin(n)) return console.error("Failed to register modification for plugin " + n + ". The integration has not finished loading yet."), !1;
        var i = {
          callable: t,
          origin: n,
          priority: Object(u.isNumber)(r) ? r : 10
        };
        return Object(u.isUndefined)(this.modifications[e]) && (this.modifications[e] = []), this.modifications[e].push(i), !0;
      }
    }, {
      key: "_registerAssessment",
      value: function value(e, t, n, r) {
        return Object(u.isString)(t) ? Object(u.isObject)(n) ? Object(u.isString)(r) ? (t = r + "-" + t, e.addAssessment(t, n), !0) : (console.error("Failed to register assessment for plugin " + r + ". Expected parameter `pluginName` to be a string."), !1) : (console.error("Failed to register assessment for plugin " + r + ". Expected parameter `assessment` to be a function."), !1) : (console.error("Failed to register test for plugin " + r + ". Expected parameter `name` to be a string."), !1);
      }
    }, {
      key: "_applyModifications",
      value: function value(e, t, n) {
        var r = this.modifications[e];
        return !Object(u.isArray)(r) || r.length < 1 || ((r = this._stripIllegalModifications(r)).sort(function (e, t) {
          return e.priority - t.priority;
        }), Object(u.forEach)(r, function (r) {
          var o = r.callable(t, n);
          i()(o) === i()(t) ? t = o : console.error("Modification with name " + e + " performed by plugin with name " + r.origin + " was ignored because the data that was returned by it was of a different type than the data we had passed it.");
        })), t;
      }
    }, {
      key: "_pollLoadingPlugins",
      value: function value(e) {
        e = Object(u.isUndefined)(e) ? 0 : e, !0 === this._allReady() ? (this.loaded = !0, this.refresh()) : e >= this.preloadThreshold ? (this._pollTimeExceeded(), this.loaded = !0, this.refresh()) : (e += 50, setTimeout(this._pollLoadingPlugins.bind(this, e), 50));
      }
    }, {
      key: "_allReady",
      value: function value() {
        return Object(u.reduce)(this.plugins, function (e, t) {
          return e && "ready" === t.status;
        }, !0);
      }
    }, {
      key: "_pollTimeExceeded",
      value: function value() {
        Object(u.forEach)(this.plugins, function (e, t) {
          Object(u.isUndefined)(e.options) || "ready" === e.options.status || (console.error("Error: Plugin " + t + ". did not finish loading in time."), delete this.plugins[t]);
        });
      }
    }, {
      key: "_stripIllegalModifications",
      value: function value(e) {
        var t = this;
        return Object(u.forEach)(e, function (n, r) {
          !1 === t._validateOrigin(n.origin) && delete e[r];
        }), e;
      }
    }, {
      key: "_validateOrigin",
      value: function value(e) {
        return "ready" === this.plugins[e].status;
      }
    }, {
      key: "_validateUniqueness",
      value: function value(e) {
        return Object(u.isUndefined)(this.plugins[e]);
      }
    }]), e;
  }();
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = n(110);
  n.d(t, "DISMISS_ALERT", function () {
    return r.DISMISS_ALERT;
  });
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return o;
  });
  var r = n(2),
      i = jQuery;

  function o(e, t, n, r) {
    this._scriptUrl = r, this._options = {
      usedKeywords: t.keyword_usage,
      searchUrl: t.search_url,
      postUrl: t.post_edit_url
    }, this._keywordUsage = t.keyword_usage, this._postID = i("#post_ID, [name=tag_ID]").val(), this._taxonomy = i("[name=taxonomy]").val() || "", this._ajaxAction = e, this._refreshAnalysis = n, this._initialized = !1;
  }

  o.prototype.init = function () {
    var e = this,
        t = window.YoastSEO.analysis.worker;
    this.requestKeywordUsage = Object(r.debounce)(this.requestKeywordUsage.bind(this), 500), t.loadScript(this._scriptUrl).then(function () {
      t.sendMessage("initialize", e._options, "used-keywords-assessment");
    }).then(function () {
      e._initialized = !0, Object(r.isEqual)(e._options.usedKeywords, e._keywordUsage) ? e._refreshAnalysis() : t.sendMessage("updateKeywordUsage", e._keywordUsage, "used-keywords-assessment").then(function () {
        return e._refreshAnalysis();
      });
    })["catch"](function (e) {
      return console.error(e);
    });
  }, o.prototype.setKeyword = function (e) {
    Object(r.has)(this._keywordUsage, e) || this.requestKeywordUsage(e);
  }, o.prototype.requestKeywordUsage = function (e) {
    i.post(ajaxurl, {
      action: this._ajaxAction,
      post_id: this._postID,
      keyword: e,
      taxonomy: this._taxonomy
    }, this.updateKeywordUsage.bind(this, e), "json");
  }, o.prototype.updateKeywordUsage = function (e, t) {
    var n = this,
        i = window.YoastSEO.analysis.worker;
    t && Object(r.isArray)(t) && (this._keywordUsage[e] = t, this._initialized && i.sendMessage("updateKeywordUsage", this._keywordUsage, "used-keywords-assessment").then(function () {
      return n._refreshAnalysis();
    }));
  };
}, function (e, t, n) {
  "use strict";

  function r(e) {
    e(document).ready(function (e) {
      void 0 !== wp.media && e(".wpseo_image_upload_button").each(function (t, n) {
        var r,
            i,
            o = ((i = (r = e(r = n)).data("target")) && "" !== i || (i = e(r).attr("id").replace(/_button$/, "")), i),
            a = function (t) {
          return (t = e(t)).data("target-id");
        }(n),
            s = e("#" + o),
            c = e("#" + a),
            u = wp.media.frames.file_frame = wp.media({
          title: wpseoScriptData.media.choose_image,
          button: {
            text: wpseoScriptData.media.choose_image
          },
          multiple: !1,
          library: {
            type: "image"
          }
        });

        u.on("select", function () {
          var e = u.state().get("selection").first().toJSON();
          s.val(e.url), c.val(e.id);
        });
        var l = e(n);
        l.click(function (e) {
          e.preventDefault(), u.open();
        }), l.siblings(".wpseo_image_remove_button").on("click", function (e) {
          e.preventDefault(), s.val(""), c.val("");
        });
      });
    });
  }

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  });
  var r = n(80),
      i = n.n(r),
      o = n(2);

  function a(e) {
    function t(t) {
      var n = !1,
          r = "",
          o = [],
          a = ["userid", "name", "user_description"],
          s = ["date"],
          c = ["title", "parent_title", "excerpt", "excerpt_only", "caption", "focuskw", "pt_single", "pt_plural", "modified", "id"],
          u = ["term404", "searchphrase"],
          l = ["term_title", "term_description"],
          d = ["category", "category_description", "tag", "tag_description"];
      t.hasClass("posttype-template") ? o = o.concat(u, l) : t.hasClass("homepage-template") ? o = o.concat(a, s, c, u, l, d) : t.hasClass("taxonomy-template") ? o = o.concat(a, s, c, u) : t.hasClass("author-template") ? o = o.concat(c, s, u, l, d) : t.hasClass("date-template") ? o = o.concat(a, c, u, l, d) : t.hasClass("search-template") ? o = o.concat(a, s, c, l, d, ["term404"]) : t.hasClass("error404-template") && (o = o.concat(a, s, c, l, d, ["searchphrase"])), e.each(o, function (o, a) {
        if (r = t.attr("id") + "-" + a + "-warning", -1 !== t.val().search("%%" + a + "%%")) {
          t.addClass("wpseo-variable-warning-element");
          var s = wpseoAdminGlobalL10n.variable_warning.replace("%s", "%%" + a + "%%");
          e("#" + r).length ? e("#" + r).html(s) : t.after(' <div id="' + r + '" class="wpseo-variable-warning">' + s + "</div>"), i()(wpseoAdminGlobalL10n.variable_warning.replace("%s", a), "assertive"), n = !0;
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

    function a(t) {
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
      var s = e("#noindex-author-wpseo-off"),
          c = e("#noindex-author-wpseo-on");
      s.is(":checked") || a(!1), c.change(function () {
        e(i).is(":checked") || a(!1);
      }), s.change(function () {
        e(i).is(":checked") || a(!0);
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
      var u,
          l = e("#opengraph"),
          d = e("#wpseo-opengraph-settings");
      l.length && d.length && (d.toggle(l[0].checked), l.change(function (e) {
        d.toggle(e.target.checked);
      })), n(), -1 !== (u = window.location.hash.replace("#top#", "")).search("#top") && (u = window.location.hash.replace("#top%23", "")), "" !== u && "#" !== u.charAt(0) || (u = e(".wpseotab").attr("id")), e("#" + u).addClass("active"), e("#" + u + "-tab").addClass("nav-tab-active").click(), e("#twitter_card_type").select2({
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
          e(window).on("resize scroll", Object(o.debounce)(i, 100)), e(window).on("yoast-seo-tab-change", i);
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
}, function (e, t, n) {
  "use strict";

  var r = n(74),
      i = n(10),
      o = n.n(i),
      a = n(44);

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

  function c(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? s(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var u = {
    noIndex: "",
    noFollow: "",
    advanced: [],
    breadcrumbsTitle: "",
    canonical: "",
    isLoading: !0
  },
      l = n(22),
      d = n(25);

  function p(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function f(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? p(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var g = {
    snippet: {},
    timestamp: 0
  },
      h = n(113),
      m = n(2);

  function b() {
    return {
      contentLocale: Object(m.get)(window, "wpseoScriptData.metabox.contentLocale", ""),
      isBlockEditor: "1" === Object(m.get)(window, "wpseoScriptData.isBlockEditor", "0"),
      isElementorEditor: "1" === Object(m.get)(window, "wpseoScriptData.isElementorEditor", "0"),
      isPost: Object(m.get)(window, "wpseoScriptData", {}).hasOwnProperty("isPost"),
      isTerm: Object(m.get)(window, "wpseoScriptData", {}).hasOwnProperty("isTerm"),
      noIndex: "1" === Object(m.get)(window, "wpseoAdminL10n.noIndex", "0"),
      postTypeNameSingular: Object(m.get)(window, "wpseoAdminL10n.postTypeNameSingular", ""),
      postTypeNamePlural: Object(m.get)(window, "wpseoAdminL10n.postTypeNamePlural", "")
    };
  }

  function y(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? y(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var O = {
    content: "",
    excerpt: "",
    imageUrl: "",
    slug: "",
    title: ""
  };

  function v(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function _(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? v(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var E = {
    openedModal: ""
  },
      S = n(67);

  function j(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function T(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? j(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var k = {
    estimatedReadingTime: 0
  },
      x = n(49);

  function P(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function D(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? P(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : P(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var A = {
    title: "",
    description: "",
    warnings: [],
    image: {
      url: "",
      id: ""
    }
  },
      R = n(60),
      I = n(59),
      C = n(75);

  function M(e, t) {
    return t.isMarkerPaused;
  }

  var N = n(45),
      L = n(65),
      U = n(55),
      F = n(20),
      B = function B() {
    var e = Object(F.a)();
    return Object(m.get)(e, "wordFormRecognitionActive", !1);
  };

  function Y() {
    var e = Object(F.a)();
    return 1 === Object(m.get)(e, "semrushIntegrationActive", 0);
  }

  function K() {
    var e = Object(F.a)();
    return 1 === Object(m.get)(e, "zapierIntegrationActive", 0);
  }

  function V() {
    var e = Object(F.a)();
    return 1 === Object(m.get)(e, "zapierConnectedStatus", 0);
  }

  function q() {
    var e,
        t = !!window.wpseoAdminL10n.displayAdvancedTab;
    return {
      isContentAnalysisActive: Object(L.a)(),
      isKeywordAnalysisActive: Object(U.a)(),
      isWordFormRecognitionActive: Object(m.isUndefined)(window.wpseoPremiumMetaboxData) && B(),
      isCornerstoneActive: (e = Object(F.a)(), 1 === Object(m.get)(e, "cornerstoneActive", 0)),
      isBreadcrumbsDisabled: !!window.wpseoAdminL10n.isBreadcrumbsDisabled,
      isPrivateBlog: !!window.wpseoAdminL10n.isPrivateBlog,
      isSEMrushIntegrationActive: Y(),
      shouldUpsell: Object(m.isUndefined)(window.wpseoPremiumMetaboxData),
      displayAdvancedTab: t,
      displaySchemaSettings: t && !!window.wpseoScriptData.isPost,
      displaySchemaSettingsFooter: window.wpseoScriptData.metabox.schema.displayFooter,
      displayFacebook: window.wpseoScriptData.metabox.showSocial.facebook,
      displayTwitter: window.wpseoScriptData.metabox.showSocial.twitter,
      isZapierIntegrationActive: K(),
      isZapierConnected: V()
    };
  }

  var W = n(76);

  function z(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function $(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? z(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : z(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var G = {},
      H = n(56);

  function Q(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Q(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Q(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var X = {
    pageType: "",
    defaultPageType: "",
    articleType: "",
    defaultArticleType: ""
  },
      J = {
    whichModalOpen: "none",
    displayNoKeyphraseMessage: !1
  },
      ee = n(41);

  function te(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function ne(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? te(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var re = {
    isRequestPending: !1,
    keyphrase: "",
    countryCode: "us",
    isSuccess: !1,
    response: null,
    limitReached: !1,
    hasData: !0,
    isLoggedIn: !1
  },
      ie = n(114),
      oe = n(77);

  function ae(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function se(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ae(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ae(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var ce = {},
      ue = n(116),
      le = n(48);

  function de(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function pe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? de(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var fe = {
    title: "",
    description: "",
    warnings: [],
    image: {
      url: "",
      id: ""
    }
  },
      ge = n(78);

  function he(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function me(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? he(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var be = {
    message: []
  };
  t.a = {
    activeMarker: function activeMarker() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case r.a:
          return t.activeMarker;

        default:
          return e;
      }
    },
    advancedSettings: function advancedSettings() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case a.a:
          return c(c({}, e), t.settings);

        case a.f:
          return c(c({}, e), {}, {
            noIndex: t.value
          });

        case a.e:
          return c(c({}, e), {}, {
            noFollow: t.value
          });

        case a.b:
          return c(c({}, e), {}, {
            advanced: t.value
          });

        case a.d:
          return c(c({}, e), {}, {
            canonical: t.value
          });

        case a.c:
          return c(c({}, e), {}, {
            breadcrumbsTitle: t.value
          });

        default:
          return e;
      }
    },
    analysis: l.analysis,
    analysisData: function analysisData() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case d.UPDATE_SNIPPET_DATA:
          return f(f({}, e), {}, {
            snippet: t.data
          });

        case d.RUN_ANALYSIS:
          return f(f({}, e), {}, {
            timestamp: t.timestamp
          });
      }

      return e;
    },
    dismissedAlerts: h.a,
    editorContext: function editorContext() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b();
      return e;
    },
    editorData: function editorData() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case d.SET_EDITOR_DATA_CONTENT:
          return w(w({}, e), {}, {
            content: t.content
          });

        case d.SET_EDITOR_DATA_EXCERPT:
          return w(w({}, e), {}, {
            excerpt: t.excerpt
          });

        case d.SET_EDITOR_DATA_IMAGE_URL:
          return w(w({}, e), {}, {
            imageUrl: t.imageUrl
          });

        case d.SET_EDITOR_DATA_SLUG:
          return w(w({}, e), {}, {
            slug: t.slug
          });

        case d.SET_EDITOR_DATA_TITLE:
          return w(w({}, e), {}, {
            title: t.title
          });
      }

      return e;
    },
    editorModals: function editorModals() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case d.OPEN_EDITOR_MODAL:
          return _(_({}, e), {}, {
            openedModal: t.modalKey
          });

        case d.CLOSE_EDITOR_MODAL:
          return _(_({}, e), {}, {
            openedModal: ""
          });
      }

      return e;
    },
    estimatedReadingTime: function estimatedReadingTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case S.a:
        case S.b:
          return T(T({}, e), {}, {
            estimatedReadingTime: t.estimatedReadingTime
          });

        default:
          return e;
      }
    },
    facebookEditor: function facebookEditor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case x.b:
          return D(D({}, e), {}, {
            title: t.title,
            description: t.description,
            image: {
              id: t.id,
              url: t.imageUrl
            }
          });

        case x.e:
          return D(D({}, e), {}, {
            title: t.title
          });

        case x.c:
          return D(D({}, e), {}, {
            description: t.description
          });

        case x.d:
          return D(D({}, e), {}, {
            warnings: t.image.warnings,
            image: {
              id: t.image.id,
              url: t.image.url
            }
          });

        case x.a:
          return D(D({}, e), {}, {
            image: {
              url: "",
              id: ""
            },
            warnings: []
          });

        default:
          return e;
      }
    },
    focusKeyword: function focusKeyword() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case R.a:
        case R.b:
          return t.keyword;

        default:
          return e;
      }
    },
    isCornerstone: function isCornerstone() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case I.c:
          return !e;

        case I.b:
          return t.isCornerstone;

        default:
          return e;
      }
    },
    isMarkerPaused: function isMarkerPaused() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case C.a:
          return M(0, t);

        default:
          return e;
      }
    },
    marksButtonStatus: function marksButtonStatus() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "disabled",
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case N.a:
          return t.marksButtonStatus;

        default:
          return e;
      }
    },
    preferences: function preferences() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q();
      return e;
    },
    primaryTaxonomies: function primaryTaxonomies() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : G,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case W.a:
          return $($({}, e), {}, o()({}, t.taxonomy, t.termId));

        default:
          return e;
      }
    },
    schemaTab: function schemaTab() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : X,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case H.d:
          return Z(Z({}, e), {}, {
            pageType: t.pageType
          });

        case H.c:
          return Z(Z({}, e), {}, {
            articleType: t.articleType
          });

        case H.b:
          return Z(Z({}, e), {}, {
            pageType: t.pageType,
            defaultPageType: t.defaultPageType
          });

        case H.a:
          return Z(Z({}, e), {}, {
            articleType: t.articleType,
            defaultArticleType: t.defaultArticleType
          });

        default:
          return e;
      }
    },
    SEMrushModal: function SEMrushModal() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case d.MODAL_OPEN_NO_KEYPHRASE:
          return {
            whichModalOpen: "none",
            displayNoKeyphraseMessage: !0
          };

        case d.MODAL_OPEN:
          return {
            whichModalOpen: t.location,
            displayNoKeyphraseMessage: !1
          };

        case d.MODAL_DISMISS:
          return {
            whichModalOpen: "none",
            displayNoKeyphraseMessage: !1
          };
      }

      return e;
    },
    SEMrushRequest: function SEMrushRequest() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : re,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case ee.b:
          return ne(ne({}, e), {}, {
            isRequestPending: !0,
            keyphrase: t.keyphrase,
            countryCode: t.countryCode,
            isSuccess: !1,
            response: null
          });

        case ee.g:
          return ne(ne({}, e), {}, {
            isRequestPending: !1,
            isSuccess: !0,
            response: t.response,
            hasData: !0
          });

        case ee.e:
          return ne(ne({}, e), {}, {
            isRequestPending: !1,
            isSuccess: !1,
            response: t.response,
            hasData: !1
          });

        case ee.f:
          return ne(ne({}, e), {}, {
            isRequestPending: !1,
            limitReached: !0,
            hasData: !1
          });

        case ee.a:
          return ne(ne({}, e), {}, {
            countryCode: t.countryCode
          });

        case ee.c:
          return ne(ne({}, e), {}, {
            isSuccess: !0,
            isRequestPending: !1,
            hasData: !1,
            response: null
          });

        case ee.d:
          return ne(ne({}, e), {}, {
            isLoggedIn: t.loginStatus
          });

        default:
          return e;
      }
    },
    settings: ie.a,
    shoppingData: function shoppingData() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
          t = arguments.length > 1 ? arguments[1] : void 0;

      if (t.type === oe.a) {
        var n = Object(m.pick)(t.shoppingData, ["rating", "reviewCount", "availability", "price"]);
        return se(se({}, e), n);
      }

      return e;
    },
    snippetEditor: ue.a,
    twitterEditor: function twitterEditor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fe,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case le.b:
          return pe(pe({}, e), {}, {
            title: t.title,
            description: t.description,
            image: {
              id: t.id,
              url: t.imageUrl
            }
          });

        case le.e:
          return pe(pe({}, e), {}, {
            title: t.title
          });

        case le.c:
          return pe(pe({}, e), {}, {
            description: t.description
          });

        case le.d:
          return pe(pe({}, e), {}, {
            image: {
              id: t.image.id,
              url: t.image.url
            },
            warnings: t.image.warnings
          });

        case le.a:
          return pe(pe({}, e), {}, {
            image: {
              url: "",
              id: ""
            },
            warnings: []
          });

        default:
          return e;
      }
    },
    warning: function warning() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case ge.a:
          return me(me({}, e), {}, {
            message: t.message
          });

        default:
          return e;
      }
    }
  };
},,,,,,,,, function (e, t, n) {
  "use strict";

  var r = n(31),
      i = n(2),
      o = n(166),
      a = n(17),
      s = n(82),
      c = ["content", "title", "snippet_title", "snippet_meta", "primary_category", "data_page_title", "data_meta_desc", "excerpt"],
      u = {},
      l = {},
      d = function d(e, t) {
    this._app = e, this._app.registerPlugin("replaceVariablePlugin", {
      status: "ready"
    }), this._store = t, this.replaceVariables = this.replaceVariables.bind(this), this.registerReplacements(), this.registerModifications(), this.registerEvents(), this.subscribeToGutenberg();
  };

  d.prototype.registerReplacements = function () {
    this.addReplacement(new r.a("%%currentdate%%", "currentdate")), this.addReplacement(new r.a("%%currentday%%", "currentday")), this.addReplacement(new r.a("%%currentmonth%%", "currentmonth")), this.addReplacement(new r.a("%%currenttime%%", "currenttime")), this.addReplacement(new r.a("%%currentyear%%", "currentyear")), this.addReplacement(new r.a("%%date%%", "date")), this.addReplacement(new r.a("%%userid%%", "userid")), this.addReplacement(new r.a("%%id%%", "id")), this.addReplacement(new r.a("%%page%%", "page")), this.addReplacement(new r.a("%%searchphrase%%", "searchphrase")), this.addReplacement(new r.a("%%sitedesc%%", "sitedesc")), this.addReplacement(new r.a("%%sitename%%", "sitename")), this.addReplacement(new r.a("%%category%%", "category")), this.addReplacement(new r.a("%%focuskw%%", "keyword", {
      source: "app",
      aliases: ["%%keyword%%"]
    })), this.addReplacement(new r.a("%%term_description%%", "text", {
      source: "app",
      scope: ["term", "category", "tag"],
      aliases: ["%%tag_description%%", "%%category_description%%"]
    })), this.addReplacement(new r.a("%%term_title%%", "term_title", {
      scope: ["term"]
    })), this.addReplacement(new r.a("%%term_hierarchy%%", "term_hierarchy", {
      scope: ["term"]
    })), this.addReplacement(new r.a("%%title%%", "title", {
      source: "app",
      scope: ["post", "term", "page"]
    })), this.addReplacement(new r.a("%%parent_title%%", "title", {
      source: "app",
      scope: ["page", "category"]
    })), this.addReplacement(new r.a("%%excerpt%%", "excerpt", {
      source: "app",
      scope: ["post"],
      aliases: ["%%excerpt_only%%"]
    })), this.addReplacement(new r.a("%%primary_category%%", "primaryCategory", {
      source: "app",
      scope: ["post"]
    })), this.addReplacement(new r.a("%%sep%%(\\s*%%sep%%)*", "sep"));
  }, d.prototype.registerEvents = function () {
    var e = wpseoScriptData.analysis.plugins.replaceVars.scope;
    "post" === e && jQuery(".categorydiv").each(this.bindTaxonomyEvents.bind(this)), "post" !== e && "page" !== e || jQuery("#postcustomstuff > #list-table").each(this.bindFieldEvents.bind(this));
  }, d.prototype.subscribeToGutenberg = function () {
    var e = this;

    if (Object(s.a)()) {
      var t = {
        0: ""
      },
          n = null,
          r = wp.data;
      r.subscribe(function () {
        var a = r.select("core/editor").getEditedPostAttribute("parent");
        if (void 0 !== a && n !== a) return n = a, a < 1 ? (e._currentParentPageTitle = "", void e.declareReloaded()) : Object(i.isUndefined)(t[a]) ? void o.loadPromise.done(function () {
          new o.models.Page({
            id: a
          }).fetch().then(function (n) {
            e._currentParentPageTitle = n.title.rendered, t[a] = e._currentParentPageTitle, e.declareReloaded();
          }).fail(function () {
            e._currentParentPageTitle = "", e.declareReloaded();
          });
        }) : (e._currentParentPageTitle = t[a], void e.declareReloaded());
      });
    }
  }, d.prototype.addReplacement = function (e) {
    u[e.placeholder] = e;
  }, d.prototype.removeReplacement = function (e) {
    delete u[e.getPlaceholder()];
  }, d.prototype.registerModifications = function () {
    var e = this.replaceVariables.bind(this);
    Object(i.forEach)(c, function (t) {
      this._app.registerModification(t, e, "replaceVariablePlugin", 10);
    }.bind(this));
  }, d.prototype.replaceVariables = function (e) {
    return Object(i.isUndefined)(e) || (e = this.parentReplace(e), e = this.replaceCustomTaxonomy(e), e = this.replaceByStore(e), e = this.replacePlaceholders(e)), e;
  }, d.prototype.replaceByStore = function (e) {
    var t = this._store.getState().snippetEditor.replacementVariables;

    return Object(i.forEach)(t, function (t) {
      "" !== t.value && (e = e.replace("%%" + t.name + "%%", t.value));
    }), e;
  }, d.prototype.getReplacementSource = function (e) {
    return "app" === e.source ? this._app.rawData : "direct" === e.source ? "direct" : wpseoScriptData.analysis.plugins.replaceVars.replace_vars;
  }, d.prototype.getReplacement = function (e) {
    var t = this.getReplacementSource(e.options);
    return !1 === e.inScope(wpseoScriptData.analysis.plugins.replaceVars.scope) ? "" : "direct" === t ? e.replacement : t[e.replacement] || "";
  }, d.prototype.replacePlaceholders = function (e) {
    return Object(i.forEach)(u, function (t) {
      e = e.replace(new RegExp(t.getPlaceholder(!0), "g"), this.getReplacement(t));
    }.bind(this)), e;
  }, d.prototype.declareReloaded = function () {
    this._app.pluginReloaded("replaceVariablePlugin"), this._store.dispatch(Object(a.h)());
  }, d.prototype.getCategoryName = function (e) {
    var t = e.parent("label").clone();
    return t.children().remove(), t.text().trim();
  }, d.prototype.parseTaxonomies = function (e, t) {
    Object(i.isUndefined)(l[t]) && (l[t] = {});
    var n = [];
    Object(i.forEach)(e, function (e) {
      var r = (e = jQuery(e)).val(),
          i = this.getCategoryName(e),
          o = e.prop("checked");
      l[t][r] = {
        label: i,
        checked: o
      }, o && -1 === n.indexOf(i) && n.push(i);
    }.bind(this)), "category" !== t && (t = "ct_" + t), this._store.dispatch(Object(a.l)(t, n.join(", ")));
  }, d.prototype.getAvailableTaxonomies = function (e) {
    var t = jQuery(e).find("input[type=checkbox]"),
        n = jQuery(e).attr("id").replace("taxonomy-", "");
    t.length > 0 && this.parseTaxonomies(t, n), this.declareReloaded();
  }, d.prototype.bindTaxonomyEvents = function (e, t) {
    (t = jQuery(t)).on("wpListAddEnd", ".categorychecklist", this.getAvailableTaxonomies.bind(this, t)), t.on("change", "input[type=checkbox]", this.getAvailableTaxonomies.bind(this, t)), this.getAvailableTaxonomies(t);
  }, d.prototype.replaceCustomTaxonomy = function (e) {
    return Object(i.forEach)(l, function (t, n) {
      var r = "%%ct_" + n + "%%";
      "category" === n && (r = "%%" + n + "%%"), e = e.replace(r, this.getTaxonomyReplaceVar(n));
    }.bind(this)), e;
  }, d.prototype.getTaxonomyReplaceVar = function (e) {
    var t = [],
        n = l[e];
    return !0 === Object(i.isUndefined)(n) ? "" : (Object(i.forEach)(n, function (e) {
      !1 !== e.checked && t.push(e.label);
    }), jQuery.unique(t).join(", "));
  }, d.prototype.parseFields = function (e) {
    jQuery(e).each(function (e, t) {
      var n = jQuery("#" + t.id + "-key").val(),
          i = jQuery("#" + t.id + "-value").val(),
          o = "cf_" + this.sanitizeCustomFieldNames(n),
          s = n + " (custom field)";
      this._store.dispatch(Object(a.l)(o, i, s)), this.addReplacement(new r.a("%%".concat(o, "%%"), i, {
        source: "direct"
      }));
    }.bind(this));
  }, d.prototype.removeFields = function (e) {
    jQuery(e).each(function (e, t) {
      var n = jQuery("#" + t.id + "-key").val();
      this.removeReplacement("%%cf_" + this.sanitizeCustomFieldNames(n) + "%%");
    }.bind(this));
  }, d.prototype.sanitizeCustomFieldNames = function (e) {
    return e.replace(/\s/g, "_");
  }, d.prototype.getAvailableFields = function (e) {
    this.removeCustomFields();
    var t = jQuery(e).find("#the-list > tr:visible[id]");
    t.length > 0 && this.parseFields(t), this.declareReloaded();
  }, d.prototype.bindFieldEvents = function (e, t) {
    var n = (t = jQuery(t)).find("#the-list");
    n.on("wpListDelEnd.wpseoCustomFields", this.getAvailableFields.bind(this, t)), n.on("wpListAddEnd.wpseoCustomFields", this.getAvailableFields.bind(this, t)), n.on("input.wpseoCustomFields", ".textarea", this.getAvailableFields.bind(this, t)), n.on("click.wpseoCustomFields", ".button + .updatemeta", this.getAvailableFields.bind(this, t)), this.getAvailableFields(t);
  }, d.prototype.removeCustomFields = function () {
    var e = Object(i.filter)(u, function (e, t) {
      return t.indexOf("%%cf_") > -1;
    });
    Object(i.forEach)(e, function (e) {
      this._store.dispatch(Object(a.i)(Object(i.trim)(e.placeholder, "%%"))), this.removeReplacement(e);
    }.bind(this));
  }, d.prototype.parentReplace = function (e) {
    var t = jQuery("#parent_id, #parent").eq(0);
    return this.hasParentTitle(t) && (e = e.replace(/%%parent_title%%/, this.getParentTitleReplacement(t))), Object(s.a)() && !Object(i.isUndefined)(this._currentParentPageTitle) && (e = e.replace(/%%parent_title%%/, this._currentParentPageTitle)), e;
  }, d.prototype.hasParentTitle = function (e) {
    return !Object(i.isUndefined)(e) && !Object(i.isUndefined)(e.prop("options"));
  }, d.prototype.getParentTitleReplacement = function (e) {
    var t = e.find("option:selected").text();
    return t === wpseoScriptData.analysis.plugins.replaceVars.no_parent_text ? "" : t;
  }, d.ReplaceVar = r.a, t.a = d;
}, function (e, t) {
  e.exports = window.wp.api;
}, function (e, t, n) {
  "use strict";

  var r = n(23),
      i = n(17),
      o = n(2);

  t.a = function (e, t, n) {
    e("morphology", new r.Paper("", {
      keyword: n
    })).then(function (e) {
      var n = e.result.keyphraseForms;
      t.dispatch(Object(i.m)(Object(o.uniq)(Object(o.flatten)(n))));
    })["catch"](function () {
      t.dispatch(Object(i.m)([]));
    });
  };
},,,,,,,,,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return l;
  });
  var r = n(2),
      i = n(4),
      o = n(38),
      a = n(93),
      s = n(108),
      c = null;

  function u(e, t) {
    o.isTinyMCEAvailable(o.tmceId) && (null === c && (c = Object(a.c)(tinyMCE.get(o.tmceId))), c(e, t)), Object(s.b)() && Object(s.a)(e, t);
  }

  function l() {
    return Object(i.select)("yoast-seo/editor").isMarkingAvailable() ? u : r.noop;
  }
}, function (e, t) {
  e.exports = window.wp.annotations;
},,,,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return d;
  });
  var r = n(4),
      i = n(2),
      o = n(23);

  function a(e) {
    window.YoastSEO.analysis.worker.runResearch("readingTime", new o.Paper(e, {})).then(function (e) {
      Object(r.dispatch)("yoast-seo/editor").setEstimatedReadingTime(e.result);
    });
  }

  var s = Object(i.debounce)(a, 1500, {
    maxWait: 3e3
  }),
      c = "";

  function u() {
    var e = Object(r.select)("core/editor").getEditedPostAttribute("content");
    c !== e && (c = e, a(e));
  }

  function l() {
    var e = Object(r.select)("yoast-seo/editor").getEditorDataContent();
    c !== e && (c = e, a(e));
  }

  function d() {
    var e, t;
    !1 !== Object(i.get)(window, "wpseoScriptData.analysis.estimatedReadingTimeEnabled", !1) && (Object(r.dispatch)("yoast-seo/editor").loadEstimatedReadingTime(), "1" === window.wpseoScriptData.isElementorEditor ? Object(r.subscribe)(Object(i.debounce)(l, 1500, {
      maxWait: 3e3
    })) : "1" === window.wpseoScriptData.isBlockEditor ? Object(r.subscribe)(Object(i.debounce)(u, 1500, {
      maxWait: 3e3
    })) : (e = ["input", "change", "cut", "paste"], t = "1" === Object(i.get)(window, "wpseoScriptData.isPost", "0") ? "content" : "description", jQuery(document).on("tinymce-editor-init", function (n, r) {
      r.id === t && e.forEach(function (e) {
        r.on(e, function () {
          s(r.getContent());
        });
      });
    })));
  }
}, function (e, t) {
  e.exports = window.wp.domReady;
}, function (e, t, n) {
  "use strict";

  function r(e) {
    function t(e) {
      e && (e.focus(), e.click());
    }

    function n() {
      var t = e("#wpseo-meta-section-addons .wpseo_tablink");

      if (1 === t.length && t.replaceWith("<span class='" + t[0].className + "'>" + t.text() + "</span>"), e(".wpseo-metabox-tabs-div").length > 0 && e(".wpseo-metabox-tabs").on("click", "a.wpseo_tablink", function (t) {
        t.preventDefault(), e(".wpseo-meta-section.active .wpseo-metabox-tabs li").removeClass("active"), e(".wpseo-meta-section.active .wpseotab").removeClass("active");
        var n = e(e(this).attr("href"));
        n.addClass("active"), e(this).parent("li").addClass("active"), e(this).hasClass("scroll") && e("html, body").animate({
          scrollTop: e(n).offset().top
        }, 500);
      }), e(".wpseo-meta-section").length > 0) {
        var n = e(".wpseo-meta-section-link");
        e(".wpseo-metabox-menu li").filter(function () {
          return "#wpseo-meta-section-content" === e(this).find(".wpseo-meta-section-link").attr("href");
        }).addClass("active").find("[role='tab']").addClass("yoast-active-tab"), e("#wpseo-meta-section-content, .wpseo-meta-section-react").addClass("active"), n.on("click", function (t) {
          var r = e(this).attr("href"),
              i = e(r);
          t.preventDefault(), e(".wpseo-metabox-menu li").removeClass("active").find("[role='tab']").removeClass("yoast-active-tab"), e(".wpseo-meta-section").removeClass("active"), e(".wpseo-meta-section-react.active").removeClass("active"), "#wpseo-meta-section-content" === r && e(".wpseo-meta-section-react").addClass("active"), i.addClass("active"), e(this).parent("li").addClass("active").find("[role='tab']").addClass("yoast-active-tab"), this && (function (e) {
            e.attr({
              "aria-selected": "false",
              tabIndex: "-1"
            });
          }(n), this.removeAttribute("tabindex"), this.setAttribute("aria-selected", "true"));
        });
      }

      e(".wpseo-metabox-tabs").show();
    }

    var r, i, o;
    window.wpseoInitTabs = n, window.wpseo_init_tabs = n, e(".wpseo-meta-section").each(function (t, n) {
      e(n).find(".wpseo-metabox-tabs li:first").addClass("active"), e(n).find(".wpseotab:first").addClass("active");
    }), window.wpseo_init_tabs(), r = e(".yoast-aria-tabs"), i = r.find("[role='tab']"), o = r.attr("aria-orientation") || "horizontal", i.attr({
      "aria-selected": !1,
      tabIndex: "-1"
    }), i.filter(".yoast-active-tab").removeAttr("tabindex").attr("aria-selected", "true"), i.on("keydown", function (n) {
      -1 !== [32, 35, 36, 37, 38, 39, 40].indexOf(n.which) && ("horizontal" === o && -1 !== [38, 40].indexOf(n.which) || "vertical" === o && -1 !== [37, 39].indexOf(n.which) || function (n, r) {
        var i = n.which,
            o = r.index(e(n.target));

        switch (i) {
          case 32:
            n.preventDefault(), t(r[o]);
            break;

          case 35:
            n.preventDefault(), t(r[r.length - 1]);
            break;

          case 36:
            n.preventDefault(), t(r[0]);
            break;

          case 37:
          case 38:
            n.preventDefault(), t(r[o - 1 < 0 ? r.length - 1 : o - 1]);
            break;

          case 39:
          case 40:
            n.preventDefault(), t(r[o + 1 === r.length ? 0 : o + 1]);
        }
      }(n, i));
    });
  }

  n.d(t, "a", function () {
    return r;
  });
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return s;
  });
  var r = n(2),
      i = n(71),
      o = n(91),
      a = n(23);

  function s(e, t, n, s, c) {
    var u = Object(r.cloneDeep)(t.getState());
    Object(r.merge)(u, n.getData());
    var l = e.getData(),
        d = null;
    c && (d = (d = c.getBlocks()).map(function (e) {
      return function e(t) {
        var n = {
          attributes: {}
        };
        return ["level", "content", "alt"].forEach(function (e) {
          t.attributes[e] && (n.attributes[e] = t.attributes[e]);
        }), n.name = t.name, n.clientId = t.clientId, n.innerBlocks = t.innerBlocks.map(function (t) {
          return e(t);
        }), n;
      }(e);
    }));
    var p = {
      text: l.content,
      keyword: u.focusKeyword,
      synonyms: u.synonyms,
      description: u.analysisData.snippet.description || u.snippetEditor.data.description,
      title: u.analysisData.snippet.title || u.snippetEditor.data.title,
      url: u.snippetEditor.data.slug,
      permalink: u.settings.snippetEditor.baseUrl + u.snippetEditor.data.slug,
      wpBlocks: d
    };
    return s.loaded && (p.title = s._applyModifications("data_page_title", p.title), p.title = s._applyModifications("title", p.title), p.description = s._applyModifications("data_meta_desc", p.description), p.text = s._applyModifications("content", p.text), p.wpBlocks = s._applyModifications("wpBlocks", p.wpBlocks)), p.titleWidth = Object(i.a)(p.title), p.locale = Object(o.a)(), a.Paper.parse(p);
  }
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return c;
  });

  var r = n(5),
      i = n.n(r),
      o = n(7),
      a = n.n(o),
      s = n(2),
      c = function () {
    function e() {
      i()(this, e), this._callbacks = [], this.register = this.register.bind(this);
    }

    return a()(e, [{
      key: "register",
      value: function value(e) {
        Object(s.isFunction)(e) && this._callbacks.push(e);
      }
    }, {
      key: "getData",
      value: function value() {
        var e = {};
        return this._callbacks.forEach(function (t) {
          e = Object(s.merge)(e, t());
        }), e;
      }
    }]), e;
  }();
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return a;
  });
  var r = n(2),
      i = n(20),
      o = n(153);

  function a(e, t, n) {
    var a = Object(i.a)();

    if (a.previouslyUsedKeywordActive) {
      var s = Object(r.get)(window, ["wpseoScriptData", "analysis", "worker", "keywords_assessment_url"], "used-keywords-assessment.js"),
          c = new o.a(t, a, e, s);
      c.init();
      var u = {};
      n.subscribe(function () {
        var e = n.getState() || {};
        e.focusKeyword !== u.focusKeyword && (u = e, c.setKeyword(e.focusKeyword));
      });
    }
  }
}, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return u;
  });
  var r = n(2),
      i = n(4),
      o = n(156),
      a = n(73),
      s = n(25),
      c = n(152);

  function u() {
    var e = Object(i.registerStore)("yoast-seo/editor", {
      reducer: Object(i.combineReducers)(o.a),
      selectors: a,
      actions: Object(r.pickBy)(s, function (e) {
        return "function" == typeof e;
      }),
      controls: c
    });
    return function (e) {
      e.dispatch(s.setSettings({
        socialPreviews: {
          sitewideImage: window.wpseoScriptData.metabox.sitewide_social_image,
          authorName: window.wpseoScriptData.metabox.author_name,
          siteName: window.wpseoScriptData.metabox.site_name,
          contentImage: window.wpseoScriptData.metabox.first_content_image,
          twitterCardType: window.wpseoScriptData.metabox.twitterCardType
        },
        snippetEditor: {
          baseUrl: window.wpseoScriptData.metabox.base_url,
          date: window.wpseoScriptData.metabox.metaDescriptionDate,
          recommendedReplacementVariables: window.wpseoScriptData.analysis.plugins.replaceVars.recommended_replace_vars,
          siteIconUrl: window.wpseoScriptData.metabox.siteIconUrl
        }
      })), e.dispatch(s.setSEMrushChangeCountry(window.wpseoScriptData.metabox.countryCode)), e.dispatch(s.setSEMrushLoginStatus(window.wpseoScriptData.metabox.SEMrushLoginStatus));
    }(e), e;
  }
},,,,,,,,,,,,,, function (e, t) {
  var n;

  n = function () {
    return this;
  }();

  try {
    n = n || new Function("return this")();
  } catch (e) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (n = window);
  }

  e.exports = n;
},,,,,,,,,,,,,,,,,,,,,, function (e, t) {
  e.exports = window.yoast.jed;
},,,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
  (function (t) {
    !function (t) {
      "use strict";

      var n = {
        newline: /^\n+/,
        code: /^( {4}[^\n]+\n*)+/,
        fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
        hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
        heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
        blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
        list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
        html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
        def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
        nptable: m,
        table: m,
        lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
        _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
        text: /^[^\n]+/
      };

      function r(e) {
        this.tokens = [], this.tokens.links = Object.create(null), this.options = e || _.defaults, this.rules = n.normal, this.options.pedantic ? this.rules = n.pedantic : this.options.gfm && (this.rules = n.gfm);
      }

      n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/, n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, n.def = p(n.def).replace("label", n._label).replace("title", n._title).getRegex(), n.bullet = /(?:[*+-]|\d{1,9}\.)/, n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/, n.item = p(n.item, "gm").replace(/bull/g, n.bullet).getRegex(), n.list = p(n.list).replace(/bull/g, n.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + n.def.source + ")").getRegex(), n._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", n._comment = /<!--(?!-?>)[\s\S]*?-->/, n.html = p(n.html, "i").replace("comment", n._comment).replace("tag", n._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), n.paragraph = p(n._paragraph).replace("hr", n.hr).replace("heading", " {0,3}#{1,6} +").replace("|lheading", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag", n._tag).getRegex(), n.blockquote = p(n.blockquote).replace("paragraph", n.paragraph).getRegex(), n.normal = b({}, n), n.gfm = b({}, n.normal, {
        nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
        table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
      }), n.pedantic = b({}, n.normal, {
        html: p("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", n._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
        def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
        heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
        fences: m,
        paragraph: p(n.normal._paragraph).replace("hr", n.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", n.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
      }), r.rules = n, r.lex = function (e, t) {
        return new r(t).lex(e);
      }, r.prototype.lex = function (e) {
        return e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n"), this.token(e, !0);
      }, r.prototype.token = function (e, t) {
        var r, i, o, a, s, c, u, d, p, f, g, h, m, b, O, v;

        for (e = e.replace(/^ +$/gm, ""); e;) {
          if ((o = this.rules.newline.exec(e)) && (e = e.substring(o[0].length), o[0].length > 1 && this.tokens.push({
            type: "space"
          })), o = this.rules.code.exec(e)) {
            var _ = this.tokens[this.tokens.length - 1];
            e = e.substring(o[0].length), _ && "paragraph" === _.type ? _.text += "\n" + o[0].trimRight() : (o = o[0].replace(/^ {4}/gm, ""), this.tokens.push({
              type: "code",
              codeBlockStyle: "indented",
              text: this.options.pedantic ? o : w(o, "\n")
            }));
          } else if (o = this.rules.fences.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "code",
            lang: o[2] ? o[2].trim() : o[2],
            text: o[3] || ""
          });else if (o = this.rules.heading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "heading",
            depth: o[1].length,
            text: o[2]
          });else if ((o = this.rules.nptable.exec(e)) && (c = {
            type: "table",
            header: y(o[1].replace(/^ *| *\| *$/g, "")),
            align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            cells: o[3] ? o[3].replace(/\n$/, "").split("\n") : []
          }).header.length === c.align.length) {
            for (e = e.substring(o[0].length), g = 0; g < c.align.length; g++) {
              /^ *-+: *$/.test(c.align[g]) ? c.align[g] = "right" : /^ *:-+: *$/.test(c.align[g]) ? c.align[g] = "center" : /^ *:-+ *$/.test(c.align[g]) ? c.align[g] = "left" : c.align[g] = null;
            }

            for (g = 0; g < c.cells.length; g++) {
              c.cells[g] = y(c.cells[g], c.header.length);
            }

            this.tokens.push(c);
          } else if (o = this.rules.hr.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "hr"
          });else if (o = this.rules.blockquote.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "blockquote_start"
          }), o = o[0].replace(/^ *> ?/gm, ""), this.token(o, t), this.tokens.push({
            type: "blockquote_end"
          });else if (o = this.rules.list.exec(e)) {
            for (e = e.substring(o[0].length), u = {
              type: "list_start",
              ordered: b = (a = o[2]).length > 1,
              start: b ? +a : "",
              loose: !1
            }, this.tokens.push(u), d = [], r = !1, m = (o = o[0].match(this.rules.item)).length, g = 0; g < m; g++) {
              f = (c = o[g]).length, ~(c = c.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ") && (f -= c.length, c = this.options.pedantic ? c.replace(/^ {1,4}/gm, "") : c.replace(new RegExp("^ {1," + f + "}", "gm"), "")), g !== m - 1 && (s = n.bullet.exec(o[g + 1])[0], (a.length > 1 ? 1 === s.length : s.length > 1 || this.options.smartLists && s !== a) && (e = o.slice(g + 1).join("\n") + e, g = m - 1)), i = r || /\n\n(?!\s*$)/.test(c), g !== m - 1 && (r = "\n" === c.charAt(c.length - 1), i || (i = r)), i && (u.loose = !0), v = void 0, (O = /^\[[ xX]\] /.test(c)) && (v = " " !== c[1], c = c.replace(/^\[[ xX]\] +/, "")), p = {
                type: "list_item_start",
                task: O,
                checked: v,
                loose: i
              }, d.push(p), this.tokens.push(p), this.token(c, !1), this.tokens.push({
                type: "list_item_end"
              });
            }

            if (u.loose) for (m = d.length, g = 0; g < m; g++) {
              d[g].loose = !0;
            }
            this.tokens.push({
              type: "list_end"
            });
          } else if (o = this.rules.html.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: this.options.sanitize ? "paragraph" : "html",
            pre: !this.options.sanitizer && ("pre" === o[1] || "script" === o[1] || "style" === o[1]),
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(o[0]) : l(o[0]) : o[0]
          });else if (t && (o = this.rules.def.exec(e))) e = e.substring(o[0].length), o[3] && (o[3] = o[3].substring(1, o[3].length - 1)), h = o[1].toLowerCase().replace(/\s+/g, " "), this.tokens.links[h] || (this.tokens.links[h] = {
            href: o[2],
            title: o[3]
          });else if ((o = this.rules.table.exec(e)) && (c = {
            type: "table",
            header: y(o[1].replace(/^ *| *\| *$/g, "")),
            align: o[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            cells: o[3] ? o[3].replace(/\n$/, "").split("\n") : []
          }).header.length === c.align.length) {
            for (e = e.substring(o[0].length), g = 0; g < c.align.length; g++) {
              /^ *-+: *$/.test(c.align[g]) ? c.align[g] = "right" : /^ *:-+: *$/.test(c.align[g]) ? c.align[g] = "center" : /^ *:-+ *$/.test(c.align[g]) ? c.align[g] = "left" : c.align[g] = null;
            }

            for (g = 0; g < c.cells.length; g++) {
              c.cells[g] = y(c.cells[g].replace(/^ *\| *| *\| *$/g, ""), c.header.length);
            }

            this.tokens.push(c);
          } else if (o = this.rules.lheading.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "heading",
            depth: "=" === o[2].charAt(0) ? 1 : 2,
            text: o[1]
          });else if (t && (o = this.rules.paragraph.exec(e))) e = e.substring(o[0].length), this.tokens.push({
            type: "paragraph",
            text: "\n" === o[1].charAt(o[1].length - 1) ? o[1].slice(0, -1) : o[1]
          });else if (o = this.rules.text.exec(e)) e = e.substring(o[0].length), this.tokens.push({
            type: "text",
            text: o[0]
          });else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
        }

        return this.tokens;
      };
      var i = {
        escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
        autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
        url: m,
        tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
        link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
        reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
        nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
        strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
        em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
        code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
        br: /^( {2,}|\\)\n(?!\s*$)/,
        del: m,
        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
      };

      function o(e, t) {
        if (this.options = t || _.defaults, this.links = e, this.rules = i.normal, this.renderer = this.options.renderer || new a(), this.renderer.options = this.options, !this.links) throw new Error("Tokens array requires a `links` property.");
        this.options.pedantic ? this.rules = i.pedantic : this.options.gfm && (this.options.breaks ? this.rules = i.breaks : this.rules = i.gfm);
      }

      function a(e) {
        this.options = e || _.defaults;
      }

      function s() {}

      function c(e) {
        this.tokens = [], this.token = null, this.options = e || _.defaults, this.options.renderer = this.options.renderer || new a(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.slugger = new u();
      }

      function u() {
        this.seen = {};
      }

      function l(e, t) {
        if (t) {
          if (l.escapeTest.test(e)) return e.replace(l.escapeReplace, function (e) {
            return l.replacements[e];
          });
        } else if (l.escapeTestNoEncode.test(e)) return e.replace(l.escapeReplaceNoEncode, function (e) {
          return l.replacements[e];
        });

        return e;
      }

      function d(e) {
        return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, function (e, t) {
          return "colon" === (t = t.toLowerCase()) ? ":" : "#" === t.charAt(0) ? "x" === t.charAt(1) ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : "";
        });
      }

      function p(e, t) {
        return e = e.source || e, t = t || "", {
          replace: function replace(t, n) {
            return n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1"), e = e.replace(t, n), this;
          },
          getRegex: function getRegex() {
            return new RegExp(e, t);
          }
        };
      }

      function f(e, t, n) {
        if (e) {
          try {
            var r = decodeURIComponent(d(n)).replace(/[^\w:]/g, "").toLowerCase();
          } catch (e) {
            return null;
          }

          if (0 === r.indexOf("javascript:") || 0 === r.indexOf("vbscript:") || 0 === r.indexOf("data:")) return null;
        }

        t && !h.test(n) && (n = function (e, t) {
          return g[" " + e] || (/^[^:]+:\/*[^/]*$/.test(e) ? g[" " + e] = e + "/" : g[" " + e] = w(e, "/", !0)), e = g[" " + e], "//" === t.slice(0, 2) ? e.replace(/:[\s\S]*/, ":") + t : "/" === t.charAt(0) ? e.replace(/(:\/*[^/]*)[\s\S]*/, "$1") + t : e + t;
        }(t, n));

        try {
          n = encodeURI(n).replace(/%25/g, "%");
        } catch (e) {
          return null;
        }

        return n;
      }

      i._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~", i.em = p(i.em).replace(/punctuation/g, i._punctuation).getRegex(), i._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, i._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, i._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, i.autolink = p(i.autolink).replace("scheme", i._scheme).replace("email", i._email).getRegex(), i._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, i.tag = p(i.tag).replace("comment", n._comment).replace("attribute", i._attribute).getRegex(), i._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, i._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/, i._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, i.link = p(i.link).replace("label", i._label).replace("href", i._href).replace("title", i._title).getRegex(), i.reflink = p(i.reflink).replace("label", i._label).getRegex(), i.normal = b({}, i), i.pedantic = b({}, i.normal, {
        strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
        link: p(/^!?\[(label)\]\((.*?)\)/).replace("label", i._label).getRegex(),
        reflink: p(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", i._label).getRegex()
      }), i.gfm = b({}, i.normal, {
        escape: p(i.escape).replace("])", "~|])").getRegex(),
        _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
        url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
        _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
        del: /^~+(?=\S)([\s\S]*?\S)~+/,
        text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
      }), i.gfm.url = p(i.gfm.url, "i").replace("email", i.gfm._extended_email).getRegex(), i.breaks = b({}, i.gfm, {
        br: p(i.br).replace("{2,}", "*").getRegex(),
        text: p(i.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
      }), o.rules = i, o.output = function (e, t, n) {
        return new o(t, n).output(e);
      }, o.prototype.output = function (e) {
        for (var t, n, r, i, a, s, c = ""; e;) {
          if (a = this.rules.escape.exec(e)) e = e.substring(a[0].length), c += l(a[1]);else if (a = this.rules.tag.exec(e)) !this.inLink && /^<a /i.test(a[0]) ? this.inLink = !0 : this.inLink && /^<\/a>/i.test(a[0]) && (this.inLink = !1), !this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0]) ? this.inRawBlock = !0 : this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0]) && (this.inRawBlock = !1), e = e.substring(a[0].length), c += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : l(a[0]) : a[0];else if (a = this.rules.link.exec(e)) {
            var u = O(a[2], "()");

            if (u > -1) {
              var d = 4 + a[1].length + u;
              a[2] = a[2].substring(0, u), a[0] = a[0].substring(0, d).trim(), a[3] = "";
            }

            e = e.substring(a[0].length), this.inLink = !0, r = a[2], this.options.pedantic ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) ? (r = t[1], i = t[3]) : i = "" : i = a[3] ? a[3].slice(1, -1) : "", r = r.trim().replace(/^<([\s\S]*)>$/, "$1"), c += this.outputLink(a, {
              href: o.escapes(r),
              title: o.escapes(i)
            }), this.inLink = !1;
          } else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
            if (e = e.substring(a[0].length), t = (a[2] || a[1]).replace(/\s+/g, " "), !(t = this.links[t.toLowerCase()]) || !t.href) {
              c += a[0].charAt(0), e = a[0].substring(1) + e;
              continue;
            }

            this.inLink = !0, c += this.outputLink(a, t), this.inLink = !1;
          } else if (a = this.rules.strong.exec(e)) e = e.substring(a[0].length), c += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));else if (a = this.rules.em.exec(e)) e = e.substring(a[0].length), c += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));else if (a = this.rules.code.exec(e)) e = e.substring(a[0].length), c += this.renderer.codespan(l(a[2].trim(), !0));else if (a = this.rules.br.exec(e)) e = e.substring(a[0].length), c += this.renderer.br();else if (a = this.rules.del.exec(e)) e = e.substring(a[0].length), c += this.renderer.del(this.output(a[1]));else if (a = this.rules.autolink.exec(e)) e = e.substring(a[0].length), r = "@" === a[2] ? "mailto:" + (n = l(this.mangle(a[1]))) : n = l(a[1]), c += this.renderer.link(r, null, n);else if (this.inLink || !(a = this.rules.url.exec(e))) {
            if (a = this.rules.text.exec(e)) e = e.substring(a[0].length), this.inRawBlock ? c += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : l(a[0]) : a[0]) : c += this.renderer.text(l(this.smartypants(a[0])));else if (e) throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
          } else {
            if ("@" === a[2]) r = "mailto:" + (n = l(a[0]));else {
              do {
                s = a[0], a[0] = this.rules._backpedal.exec(a[0])[0];
              } while (s !== a[0]);

              n = l(a[0]), r = "www." === a[1] ? "http://" + n : n;
            }
            e = e.substring(a[0].length), c += this.renderer.link(r, null, n);
          }
        }

        return c;
      }, o.escapes = function (e) {
        return e ? e.replace(o.rules._escapes, "$1") : e;
      }, o.prototype.outputLink = function (e, t) {
        var n = t.href,
            r = t.title ? l(t.title) : null;
        return "!" !== e[0].charAt(0) ? this.renderer.link(n, r, this.output(e[1])) : this.renderer.image(n, r, l(e[1]));
      }, o.prototype.smartypants = function (e) {
        return this.options.smartypants ? e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…") : e;
      }, o.prototype.mangle = function (e) {
        if (!this.options.mangle) return e;

        for (var t, n = "", r = e.length, i = 0; i < r; i++) {
          t = e.charCodeAt(i), Math.random() > .5 && (t = "x" + t.toString(16)), n += "&#" + t + ";";
        }

        return n;
      }, a.prototype.code = function (e, t, n) {
        var r = (t || "").match(/\S*/)[0];

        if (this.options.highlight) {
          var i = this.options.highlight(e, r);
          null != i && i !== e && (n = !0, e = i);
        }

        return r ? '<pre><code class="' + this.options.langPrefix + l(r, !0) + '">' + (n ? e : l(e, !0)) + "</code></pre>\n" : "<pre><code>" + (n ? e : l(e, !0)) + "</code></pre>";
      }, a.prototype.blockquote = function (e) {
        return "<blockquote>\n" + e + "</blockquote>\n";
      }, a.prototype.html = function (e) {
        return e;
      }, a.prototype.heading = function (e, t, n, r) {
        return this.options.headerIds ? "<h" + t + ' id="' + this.options.headerPrefix + r.slug(n) + '">' + e + "</h" + t + ">\n" : "<h" + t + ">" + e + "</h" + t + ">\n";
      }, a.prototype.hr = function () {
        return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
      }, a.prototype.list = function (e, t, n) {
        var r = t ? "ol" : "ul";
        return "<" + r + (t && 1 !== n ? ' start="' + n + '"' : "") + ">\n" + e + "</" + r + ">\n";
      }, a.prototype.listitem = function (e) {
        return "<li>" + e + "</li>\n";
      }, a.prototype.checkbox = function (e) {
        return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }, a.prototype.paragraph = function (e) {
        return "<p>" + e + "</p>\n";
      }, a.prototype.table = function (e, t) {
        return t && (t = "<tbody>" + t + "</tbody>"), "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n";
      }, a.prototype.tablerow = function (e) {
        return "<tr>\n" + e + "</tr>\n";
      }, a.prototype.tablecell = function (e, t) {
        var n = t.header ? "th" : "td";
        return (t.align ? "<" + n + ' align="' + t.align + '">' : "<" + n + ">") + e + "</" + n + ">\n";
      }, a.prototype.strong = function (e) {
        return "<strong>" + e + "</strong>";
      }, a.prototype.em = function (e) {
        return "<em>" + e + "</em>";
      }, a.prototype.codespan = function (e) {
        return "<code>" + e + "</code>";
      }, a.prototype.br = function () {
        return this.options.xhtml ? "<br/>" : "<br>";
      }, a.prototype.del = function (e) {
        return "<del>" + e + "</del>";
      }, a.prototype.link = function (e, t, n) {
        if (null === (e = f(this.options.sanitize, this.options.baseUrl, e))) return n;
        var r = '<a href="' + l(e) + '"';
        return t && (r += ' title="' + t + '"'), r + ">" + n + "</a>";
      }, a.prototype.image = function (e, t, n) {
        if (null === (e = f(this.options.sanitize, this.options.baseUrl, e))) return n;
        var r = '<img src="' + e + '" alt="' + n + '"';
        return t && (r += ' title="' + t + '"'), r + (this.options.xhtml ? "/>" : ">");
      }, a.prototype.text = function (e) {
        return e;
      }, s.prototype.strong = s.prototype.em = s.prototype.codespan = s.prototype.del = s.prototype.text = function (e) {
        return e;
      }, s.prototype.link = s.prototype.image = function (e, t, n) {
        return "" + n;
      }, s.prototype.br = function () {
        return "";
      }, c.parse = function (e, t) {
        return new c(t).parse(e);
      }, c.prototype.parse = function (e) {
        this.inline = new o(e.links, this.options), this.inlineText = new o(e.links, b({}, this.options, {
          renderer: new s()
        })), this.tokens = e.reverse();

        for (var t = ""; this.next();) {
          t += this.tok();
        }

        return t;
      }, c.prototype.next = function () {
        return this.token = this.tokens.pop(), this.token;
      }, c.prototype.peek = function () {
        return this.tokens[this.tokens.length - 1] || 0;
      }, c.prototype.parseText = function () {
        for (var e = this.token.text; "text" === this.peek().type;) {
          e += "\n" + this.next().text;
        }

        return this.inline.output(e);
      }, c.prototype.tok = function () {
        switch (this.token.type) {
          case "space":
            return "";

          case "hr":
            return this.renderer.hr();

          case "heading":
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, d(this.inlineText.output(this.token.text)), this.slugger);

          case "code":
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);

          case "table":
            var e,
                t,
                n,
                r,
                i = "",
                o = "";

            for (n = "", e = 0; e < this.token.header.length; e++) {
              n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                header: !0,
                align: this.token.align[e]
              });
            }

            for (i += this.renderer.tablerow(n), e = 0; e < this.token.cells.length; e++) {
              for (t = this.token.cells[e], n = "", r = 0; r < t.length; r++) {
                n += this.renderer.tablecell(this.inline.output(t[r]), {
                  header: !1,
                  align: this.token.align[r]
                });
              }

              o += this.renderer.tablerow(n);
            }

            return this.renderer.table(i, o);

          case "blockquote_start":
            for (o = ""; "blockquote_end" !== this.next().type;) {
              o += this.tok();
            }

            return this.renderer.blockquote(o);

          case "list_start":
            o = "";

            for (var a = this.token.ordered, s = this.token.start; "list_end" !== this.next().type;) {
              o += this.tok();
            }

            return this.renderer.list(o, a, s);

          case "list_item_start":
            o = "";
            var c = this.token.loose,
                u = this.token.checked,
                l = this.token.task;

            for (this.token.task && (o += this.renderer.checkbox(u)); "list_item_end" !== this.next().type;) {
              o += c || "text" !== this.token.type ? this.tok() : this.parseText();
            }

            return this.renderer.listitem(o, l, u);

          case "html":
            return this.renderer.html(this.token.text);

          case "paragraph":
            return this.renderer.paragraph(this.inline.output(this.token.text));

          case "text":
            return this.renderer.paragraph(this.parseText());

          default:
            var p = 'Token with "' + this.token.type + '" type was not found.';
            if (!this.options.silent) throw new Error(p);
            console.log(p);
        }
      }, u.prototype.slug = function (e) {
        var t = e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");

        if (this.seen.hasOwnProperty(t)) {
          var n = t;

          do {
            this.seen[n]++, t = n + "-" + this.seen[n];
          } while (this.seen.hasOwnProperty(t));
        }

        return this.seen[t] = 0, t;
      }, l.escapeTest = /[&<>"']/, l.escapeReplace = /[&<>"']/g, l.replacements = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, l.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/, l.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
      var g = {},
          h = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

      function m() {}

      function b(e) {
        for (var t, n, r = 1; r < arguments.length; r++) {
          for (n in t = arguments[r]) {
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
        }

        return e;
      }

      function y(e, t) {
        var n = e.replace(/\|/g, function (e, t, n) {
          for (var r = !1, i = t; --i >= 0 && "\\" === n[i];) {
            r = !r;
          }

          return r ? "|" : " |";
        }).split(/ \|/),
            r = 0;
        if (n.length > t) n.splice(t);else for (; n.length < t;) {
          n.push("");
        }

        for (; r < n.length; r++) {
          n[r] = n[r].trim().replace(/\\\|/g, "|");
        }

        return n;
      }

      function w(e, t, n) {
        if (0 === e.length) return "";

        for (var r = 0; r < e.length;) {
          var i = e.charAt(e.length - r - 1);

          if (i !== t || n) {
            if (i === t || !n) break;
            r++;
          } else r++;
        }

        return e.substr(0, e.length - r);
      }

      function O(e, t) {
        if (-1 === e.indexOf(t[1])) return -1;

        for (var n = 0, r = 0; r < e.length; r++) {
          if ("\\" === e[r]) r++;else if (e[r] === t[0]) n++;else if (e[r] === t[1] && --n < 0) return r;
        }

        return -1;
      }

      function v(e) {
        e && e.sanitize && !e.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
      }

      function _(e, t, n) {
        if (null == e) throw new Error("marked(): input parameter is undefined or null");
        if ("string" != typeof e) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected");

        if (n || "function" == typeof t) {
          n || (n = t, t = null), v(t = b({}, _.defaults, t || {}));
          var i,
              o,
              a = t.highlight,
              s = 0;

          try {
            i = r.lex(e, t);
          } catch (e) {
            return n(e);
          }

          o = i.length;

          var u = function u(e) {
            if (e) return t.highlight = a, n(e);
            var r;

            try {
              r = c.parse(i, t);
            } catch (t) {
              e = t;
            }

            return t.highlight = a, e ? n(e) : n(null, r);
          };

          if (!a || a.length < 3) return u();
          if (delete t.highlight, !o) return u();

          for (; s < i.length; s++) {
            !function (e) {
              "code" !== e.type ? --o || u() : a(e.text, e.lang, function (t, n) {
                return t ? u(t) : null == n || n === e.text ? --o || u() : (e.text = n, e.escaped = !0, void (--o || u()));
              });
            }(i[s]);
          }
        } else try {
          return t && (t = b({}, _.defaults, t)), v(t), c.parse(r.lex(e, t), t);
        } catch (e) {
          if (e.message += "\nPlease report this to https://github.com/markedjs/marked.", (t || _.defaults).silent) return "<p>An error occurred:</p><pre>" + l(e.message + "", !0) + "</pre>";
          throw e;
        }
      }

      m.exec = m, _.options = _.setOptions = function (e) {
        return b(_.defaults, e), _;
      }, _.getDefaults = function () {
        return {
          baseUrl: null,
          breaks: !1,
          gfm: !0,
          headerIds: !0,
          headerPrefix: "",
          highlight: null,
          langPrefix: "language-",
          mangle: !0,
          pedantic: !1,
          renderer: new a(),
          sanitize: !1,
          sanitizer: null,
          silent: !1,
          smartLists: !1,
          smartypants: !1,
          xhtml: !1
        };
      }, _.defaults = _.getDefaults(), _.Parser = c, _.parser = c.parse, _.Renderer = a, _.TextRenderer = s, _.Lexer = r, _.lexer = r.lex, _.InlineLexer = o, _.inlineLexer = o.output, _.Slugger = u, _.parse = _, e.exports = _;
    }(this || "undefined" != typeof window && window);
  }).call(this, n(205));
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
  "use strict";

  n.r(t);
  var r = {};
  n.r(r), n.d(r, "updateScore", function () {
    return ve;
  }), n.d(r, "initialize", function () {
    return Se;
  });

  var i,
      o = n(186),
      a = n.n(o),
      s = n(21),
      c = n.n(s),
      u = n(187),
      l = n(27),
      d = n.n(l),
      p = n(5),
      f = n.n(p),
      g = n(7),
      h = n.n(g),
      m = n(13),
      b = n.n(m),
      y = n(14),
      w = n.n(y),
      O = n(8),
      v = n.n(O),
      E = n(0),
      S = n(4),
      j = n(2),
      T = n(15),
      k = n.n(T),
      x = n(1),
      P = n.n(x),
      D = n(3),
      A = n(18),
      R = n(12),
      I = n.n(R),
      C = n(19),
      M = n(11),
      N = n.n(M),
      L = n(64),
      U = n.n(L),
      F = n(52),
      B = I.a.div(i || (i = k()(["\n\tpadding-top: 6px;\n"]))),
      Y = function Y(e) {
    var t = e.value,
        n = e.id,
        r = e.terms,
        i = e.onChange;
    return Object(E.createElement)(B, null, Object(E.createElement)("select", {
      className: "components-select-control__input",
      id: n,
      value: t,
      onChange: function onChange(e) {
        i(parseInt(e.target.value, 10));
      }
    }, r.map(function (e) {
      return Object(E.createElement)("option", {
        key: e.id,
        value: e.id
      }, Object(j.unescape)(e.name));
    })));
  };

  Y.propTypes = {
    terms: P.a.arrayOf(P.a.shape({
      id: P.a.string.isRequired,
      name: P.a.string.isRequired
    })),
    onChange: P.a.func.isRequired,
    id: P.a.string,
    value: P.a.string
  };
  var K,
      V = Y;

  var q = I.a.div(K || (K = k()(["\n\tpadding-top: 16px;\n"]))),
      W = function (e) {
    b()(i, e);
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
          r = v()(t);

      if (n) {
        var i = v()(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);

      return w()(this, e);
    });

    function i(e) {
      var t;
      f()(this, i), (t = r.call(this, e)).onChange = t.onChange.bind(N()(t)), t.updateReplacementVariable = t.updateReplacementVariable.bind(N()(t));
      var n = e.taxonomy,
          o = n.fieldId,
          a = n.name;
      return t.input = document.getElementById(o), e.setPrimaryTaxonomyId(a, parseInt(t.input.value, 10)), t.state = {
        selectedTerms: [],
        terms: []
      }, t;
    }

    return h()(i, [{
      key: "componentDidMount",
      value: function value() {
        this.fetchTerms();
      }
    }, {
      key: "componentDidUpdate",
      value: function value(e, t) {
        if (e.selectedTermIds.length < this.props.selectedTermIds.length) {
          var n = Object(j.difference)(this.props.selectedTermIds, e.selectedTermIds)[0];
          if (!this.termIsAvailable(n)) return void this.fetchTerms();
        }

        e.selectedTermIds !== this.props.selectedTermIds && this.updateSelectedTerms(this.state.terms, this.props.selectedTermIds), t.selectedTerms !== this.state.selectedTerms && this.handleSelectedTermsChange();
      }
    }, {
      key: "handleSelectedTermsChange",
      value: function value() {
        var e = this.state.selectedTerms,
            t = this.props.primaryTaxonomyId;
        e.find(function (e) {
          return e.id === t;
        }) || this.onChange(e.length ? e[0].id : -1);
      }
    }, {
      key: "termIsAvailable",
      value: function value(e) {
        return !!this.state.terms.find(function (t) {
          return t.id === e;
        });
      }
    }, {
      key: "fetchTerms",
      value: function value() {
        var e = this,
            t = this.props.taxonomy;
        t && (this.fetchRequest = U()({
          path: Object(F.addQueryArgs)("/wp/v2/".concat(t.restBase), {
            per_page: -1,
            orderby: "count",
            order: "desc",
            _fields: "id,name"
          })
        }), this.fetchRequest.then(function (t) {
          var n = e.state;
          e.setState({
            terms: t,
            selectedTerms: e.getSelectedTerms(t, e.props.selectedTermIds)
          }, function () {
            0 === n.terms.length && e.state.terms.length > 0 && e.updateReplacementVariable(e.props.primaryTaxonomyId);
          });
        }));
      }
    }, {
      key: "getSelectedTerms",
      value: function value(e, t) {
        return e.filter(function (e) {
          return t.includes(e.id);
        });
      }
    }, {
      key: "updateSelectedTerms",
      value: function value(e, t) {
        var n = this.getSelectedTerms(e, t);
        this.setState({
          selectedTerms: n
        });
      }
    }, {
      key: "onChange",
      value: function value(e) {
        var t = this.props.taxonomy.name;
        this.updateReplacementVariable(e), this.props.setPrimaryTaxonomyId(t, e), this.input.value = -1 === e ? "" : e;
      }
    }, {
      key: "updateReplacementVariable",
      value: function value(e) {
        if ("category" === this.props.taxonomy.name) {
          var t = this.state.selectedTerms.find(function (t) {
            return t.id === e;
          });
          this.props.updateReplacementVariable("primary_".concat(this.props.taxonomy.name), t ? t.name : "");
        }
      }
    }, {
      key: "render",
      value: function value() {
        var e = this.props,
            t = e.primaryTaxonomyId,
            n = e.taxonomy;
        if (this.state.selectedTerms.length < 2) return null;
        var r = "yoast-primary-".concat(n.name, "-picker");
        return Object(E.createElement)(q, {
          className: "components-base-control__field"
        }, Object(E.createElement)("label", {
          htmlFor: r,
          className: "components-base-control__label"
        }, Object(D.sprintf)(
        /* translators: %s expands to the taxonomy name. */
        Object(D.__)("Select the primary %s", "wordpress-seo"), n.singularLabel.toLowerCase())), Object(E.createElement)(V, {
          value: t,
          onChange: this.onChange,
          id: r,
          terms: this.state.selectedTerms
        }));
      }
    }]), i;
  }(E.Component);

  W.propTypes = {
    selectedTermIds: P.a.arrayOf(P.a.number),
    primaryTaxonomyId: P.a.number,
    setPrimaryTaxonomyId: P.a.func,
    updateReplacementVariable: P.a.func,
    receiveEntityRecords: P.a.func,
    taxonomy: P.a.shape({
      name: P.a.string,
      fieldId: P.a.string,
      restBase: P.a.string,
      singularLabel: P.a.string
    })
  };
  var z,
      $ = W,
      G = Object(C.compose)([Object(S.withSelect)(function (e, t) {
    var n = e("core/editor"),
        r = e("yoast-seo/editor"),
        i = t.taxonomy;
    return {
      selectedTermIds: n.getEditedPostAttribute(i.restBase) || [],
      primaryTaxonomyId: r.getPrimaryTaxonomyId(i.name)
    };
  }), Object(S.withDispatch)(function (e) {
    var t = e("yoast-seo/editor");
    return {
      setPrimaryTaxonomyId: t.setPrimaryTaxonomyId,
      updateReplacementVariable: t.updateReplacementVariable
    };
  })])($);

  var H = null,
      Q = null,
      Z = I.a.div(z || (z = k()(["\n\tmargin: 16px 0 8px;\n"]))),
      X = function (e) {
    b()(i, e);
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
          r = v()(t);

      if (n) {
        var i = v()(this).constructor;
        e = Reflect.construct(r, arguments, i);
      } else e = r.apply(this, arguments);

      return w()(this, e);
    });

    function i() {
      var e;
      return f()(this, i), e = r.call(this), H && Q || (H = Object(j.get)(window.wpseoPrimaryCategoryL10n, "taxonomies", {}), Q = Object(j.values)(H).map(function (e) {
        return e.name;
      })), e.state = {
        exceptionCaught: !1,
        error: null
      }, e;
    }

    return h()(i, [{
      key: "componentDidCatch",
      value: function value(e) {
        this.setState({
          exceptionCaught: !0,
          error: e
        });
      }
    }, {
      key: "taxonomyHasPrimaryTermSupport",
      value: function value() {
        return Q.includes(this.props.slug);
      }
    }, {
      key: "render",
      value: function value() {
        var e = this.props,
            t = e.slug,
            n = e.OriginalComponent;

        if (this.state.exceptionCaught) {
          var r = Object(j.get)(this.state, "error.stack");
          return Object(E.createElement)(E.Fragment, null, Object(E.createElement)(n, this.props), Object(E.createElement)(Z, null, Object(D.sprintf)(
          /* translators: %s expands to Yoast SEO. */
          Object(D.__)("An error occurred loading the %s primary taxonomy picker.", "wordpress-seo"), "Yoast SEO")), r && Object(E.createElement)(A.ClipboardButton, {
            isLarge: !0,
            text: r
          }, Object(D.__)("Copy error", "wordpress-seo")));
        }

        return this.taxonomyHasPrimaryTermSupport() ? Object(E.createElement)(E.Fragment, null, Object(E.createElement)(n, this.props), Object(E.createElement)(G, {
          taxonomy: H[t]
        })) : Object(E.createElement)(n, this.props);
      }
    }]), i;
  }(E.Component);

  X.propTypes = {
    OriginalComponent: P.a.func.isRequired,
    slug: P.a.string.isRequired
  };
  var J = X,
      ee = n(82);

  function te(e) {
    var t,
        n,
        r = wpseoPrimaryCategoryL10n.taxonomies;

    function i(t) {
      return e("#yoast-wpseo-primary-" + t).val();
    }

    function o(t, n) {
      e("#yoast-wpseo-primary-" + t).val(n).trigger("change");
      var r = Object(S.dispatch)("yoast-seo/editor");

      if (r) {
        var i = parseInt(n, 10);
        r.setPrimaryTaxonomyId(t, i), "category" === t && r.updateReplacementVariable("primary_category", function (t) {
          var n = e("#category-all").find("#category-".concat(t, " > label"));
          if (0 === n.length) return "";
          var r = n.clone();
          return r.children().remove(), e.trim(r.text());
        }(i));
      }
    }

    function a(o) {
      var a, s, c;
      a = e("#" + o + 'checklist input[type="checkbox"]:checked');
      var u = e("#" + o + "checklist li");
      u.removeClass("wpseo-term-unchecked wpseo-primary-term wpseo-non-primary-term"), e(".wpseo-primary-category-label").remove(), u.addClass("wpseo-term-unchecked"), a.length <= 1 || a.each(function (a, u) {
        u = e(u), (s = u.closest("li")).removeClass("wpseo-term-unchecked"), 1 !== e(u).closest("li").children(".wpseo-make-primary-term").length && function (n, i) {
          var o, a;
          o = e(i).closest("label"), a = t({
            taxonomy: r[n],
            term: o.text()
          }), o.after(a);
        }(o, u), u.val() === i(o) ? (s.addClass("wpseo-primary-term"), (c = u.closest("label")).find(".wpseo-primary-category-label").remove(), c.append(n({
          taxonomy: r[o]
        }))) : s.addClass("wpseo-non-primary-term");
      });
    }

    function s(t) {
      o(t, e("#" + t + 'checklist input[type="checkbox"]:checked:first').val()), a(t);
    }

    function c(e) {
      "" === i(e) && s(e);
    }

    e.fn.initYstSEOPrimaryCategory = function () {
      return this.each(function (t, n) {
        var r,
            u = e("#" + n.name + "div");
        a(n.name), u.on("click", 'input[type="checkbox"]', (r = n.name, function () {
          !1 === e(this).prop("checked") && e(this).val() === i(r) && s(r), c(r), a(r);
        })), u.on("wpListAddEnd", "#" + n.name + "checklist", function (e) {
          return function () {
            c(e), a(e);
          };
        }(n.name)), u.on("click", ".wpseo-make-primary-term", function (t) {
          return function (n) {
            var r;
            r = e(n.currentTarget).siblings("label").find("input"), o(t, r.val()), a(t), r.focus();
          };
        }(n.name));
      });
    }, t = wp.template("primary-term-ui"), n = wp.template("primary-term-screen-reader"), e(_.values(r)).initYstSEOPrimaryCategory(), Object(ee.a)() && Object(j.get)(window, "wp.hooks.addFilter", j.noop)("editor.PostTaxonomyType", "yoast-seo", function (e) {
      return function (t) {
        b()(o, t);
        var n,
            r,
            i = (n = o, r = function () {
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
              t = v()(n);

          if (r) {
            var i = v()(this).constructor;
            e = Reflect.construct(t, arguments, i);
          } else e = t.apply(this, arguments);

          return w()(this, e);
        });

        function o() {
          return f()(this, o), i.apply(this, arguments);
        }

        return h()(o, [{
          key: "render",
          value: function value() {
            return Object(E.createElement)(J, d()({
              OriginalComponent: e
            }, this.props));
          }
        }]), o;
      }(E.Component);
    });
  }

  var ne = n(23),
      re = n(22),
      ie = n(121),
      oe = n(165),
      ae = n(34),
      se = n.n(ae),
      ce = new RegExp("\\[[^<>&/\\[\\]\0- =]+?( [^\\]]+?)?\\]", "g"),
      ue = new RegExp("\\[/[^<>&/\\[\\]\0- =]+?\\]", "g"),
      le = function le(e) {
    var t = e.registerPlugin,
        n = e.registerModification,
        r = e.pluginReady,
        i = e.pluginReloaded;
    this._registerModification = n, this._pluginReady = r, this._pluginReloaded = i, t("YoastShortcodePlugin", {
      status: "loading"
    }), this.bindElementEvents();
    var o = "(" + wpseoScriptData.analysis.plugins.shortcodes.wpseo_shortcode_tags.join("|") + ")";
    this.keywordRegex = new RegExp(o, "g"), this.closingTagRegex = new RegExp("\\[\\/" + o + "\\]", "g"), this.nonCaptureRegex = new RegExp("\\[" + o + "[^\\]]*?\\]", "g"), this.parsedShortcodes = [], this.loadShortcodes(this.declareReady.bind(this));
  };

  le.prototype.declareReady = function () {
    this._pluginReady("YoastShortcodePlugin"), this.registerModifications();
  }, le.prototype.declareReloaded = function () {
    this._pluginReloaded("YoastShortcodePlugin");
  }, le.prototype.registerModifications = function () {
    this._registerModification("content", this.replaceShortcodes.bind(this), "YoastShortcodePlugin");
  }, le.prototype.removeUnknownShortCodes = function (e) {
    return (e = e.replace(ce, "")).replace(ue, "");
  }, le.prototype.replaceShortcodes = function (e) {
    var t = this.parsedShortcodes;
    if ("string" == typeof e && t.length > 0) for (var n = 0; n < t.length; n++) {
      e = e.replace(t[n].shortcode, t[n].output);
    }
    return this.removeUnknownShortCodes(e);
  }, le.prototype.loadShortcodes = function (e) {
    var t = this.getUnparsedShortcodes(this.getShortcodes(this.getContentTinyMCE()));
    if (!(t.length > 0)) return e();
    this.parseShortcodes(t, e);
  }, le.prototype.bindElementEvents = function () {
    var e = document.getElementById("content") || !1,
        t = _.debounce(this.loadShortcodes.bind(this, this.declareReloaded.bind(this)), 500);

    e && (e.addEventListener("keyup", t), e.addEventListener("change", t)), "undefined" != typeof tinyMCE && "function" == typeof tinyMCE.on && tinyMCE.on("addEditor", function (e) {
      e.editor.on("change", t), e.editor.on("keyup", t);
    });
  }, le.prototype.getContentTinyMCE = function () {
    var e = document.getElementById("content") && document.getElementById("content").value || "";
    return "undefined" != typeof tinyMCE && void 0 !== tinyMCE.editors && 0 !== tinyMCE.editors.length && (e = tinyMCE.get("content") && tinyMCE.get("content").getContent() || ""), e;
  }, le.prototype.getUnparsedShortcodes = function (e) {
    if ("object" !== se()(e)) return console.error("Failed to get unparsed shortcodes. Expected parameter to be an array, instead received " + se()(e)), !1;

    for (var t = [], n = 0; n < e.length; n++) {
      var r = e[n];
      -1 === t.indexOf(r) && this.isUnparsedShortcode(r) && t.push(r);
    }

    return t;
  }, le.prototype.isUnparsedShortcode = function (e) {
    for (var t = !1, n = 0; n < this.parsedShortcodes.length; n++) {
      this.parsedShortcodes[n].shortcode === e && (t = !0);
    }

    return !1 === t;
  }, le.prototype.getShortcodes = function (e) {
    if ("string" != typeof e) return console.error("Failed to get shortcodes. Expected parameter to be a string, instead received" + se()(e)), !1;

    for (var t = this.matchCapturingShortcodes(e), n = 0; n < t.length; n++) {
      e = e.replace(t[n], "");
    }

    var r = this.matchNonCapturingShortcodes(e);
    return t.concat(r);
  }, le.prototype.matchCapturingShortcodes = function (e) {
    for (var t = [], n = (e.match(this.closingTagRegex) || []).join(" ").match(this.keywordRegex) || [], r = 0; r < n.length; r++) {
      var i = n[r],
          o = "\\[" + i + "[^\\]]*?\\].*?\\[\\/" + i + "\\]",
          a = e.match(new RegExp(o, "g")) || [];
      t = t.concat(a);
    }

    return t;
  }, le.prototype.matchNonCapturingShortcodes = function (e) {
    return e.match(this.nonCaptureRegex) || [];
  }, le.prototype.parseShortcodes = function (e, t) {
    return "function" != typeof t ? (console.error("Failed to parse shortcodes. Expected parameter to be a function, instead received " + se()(t)), !1) : "object" === se()(e) && e.length > 0 ? void jQuery.post(ajaxurl, {
      action: "wpseo_filter_shortcodes",
      _wpnonce: wpseoScriptData.analysis.plugins.shortcodes.wpseo_filter_shortcodes_nonce,
      data: e
    }, function (e) {
      this.saveParsedShortcodes(e, t);
    }.bind(this)) : t();
  }, le.prototype.saveParsedShortcodes = function (e, t) {
    e = JSON.parse(e);

    for (var n = 0; n < e.length; n++) {
      this.parsedShortcodes.push(e[n]);
    }

    t();
  };

  var de = le,
      pe = n(254),
      fe = n.n(pe),
      ge = function () {
    function e(t, n) {
      f()(this, e), this._registerPlugin = t, this._registerModification = n;
    }

    return h()(e, [{
      key: "register",
      value: function value() {
        this._registerPlugin("YoastMarkdownPlugin", {
          status: "ready"
        }), this._registerModification("content", this.parseMarkdown.bind(this), "YoastMarkdownPlugin", 1);
      }
    }, {
      key: "parseMarkdown",
      value: function value(e) {
        return fe()(e);
      }
    }]), e;
  }(),
      he = n(38),
      me = n(123),
      be = n(151),
      ye = n(167),
      we = jQuery;

  function Oe(e, t) {
    return wpseoScriptData.metabox.publish_box.labels[e][t] || "";
  }

  function ve(e, t) {
    var n = we("#" + e + "-score"),
        r = "image yoast-logo svg " + t;
    n.children(".image").attr("class", r);
    var i = Oe(e, t);
    n.children(".score-text").html(i);
  }

  function _e(e, t) {
    var n = we("<div />", {
      "class": "misc-pub-section yoast yoast-seo-score " + e + "-score",
      id: e + "-score"
    }),
        r = we("<span />", {
      "class": "score-text",
      html: Oe(e, t)
    }),
        i = we("<span>").attr("class", "image yoast-logo svg na");
    n.append(i).append(r), we("#yoast-seo-publishbox-section").prepend(n);
  }

  function Ee(e) {
    var t = we("#wpadminbar"),
        n = we(e);

    if (t && n) {
      var r = "fixed" === t.css("position") ? t.height() : 0;
      we([document.documentElement, document.body]).animate({
        scrollTop: n.offset().top - r
      }, 1e3), n.focus(), 0 === n.parent().siblings().length && n.click();
    }
  }

  function Se() {
    wpseoScriptData.metabox.keywordAnalysisActive && _e("keyword", "na"), wpseoScriptData.metabox.contentAnalysisActive && _e("content", "na"), we("#content-score").on("click", "[href='#yoast-readability-analysis-collapsible-metabox']", function (e) {
      e.preventDefault(), document.querySelector("#wpseo-meta-tab-readability").click(), Ee("#wpseo-meta-section-readability");
    }), we("#keyword-score").on("click", "[href='#yoast-seo-analysis-collapsible-metabox']", function (e) {
      e.preventDefault(), Ee("#yoast-seo-analysis-collapsible-metabox");
    });
  }

  String.prototype.ucfirst = function () {
    return this.charAt(0).toUpperCase() + this.substr(1);
  };

  var je = n(109),
      Te = n(105),
      ke = n(118),
      xe = n(86),
      Pe = n(188),
      De = n(10),
      Ae = n.n(De),
      Re = n(71),
      Ie = n(227),
      Ce = n.n(Ie),
      Me = n(97),
      Ne = n(42),
      Le = n(55);

  function Ue(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function Fe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ue(Object(n), !0).forEach(function (t) {
        Ae()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ue(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var Be,
      Ye,
      Ke = he.tmceId,
      Ve = jQuery,
      qe = (Be = Object(Me.a)(), Ye = new Ce.a(Be), Object(j.isEmpty)(Be) && (Ye = new Ce.a({
    domain: "js-text-analysis",
    locale_data: {
      "js-text-analysis": {
        "": {}
      }
    }
  })), Ye),
      We = function We(e) {
    "object" === ("undefined" == typeof CKEDITOR ? "undefined" : se()(CKEDITOR)) && console.warn("YoastSEO currently doesn't support ckEditor. The content analysis currently only works with the HTML editor or TinyMCE."), this._data = e.data, this._store = e.store;
  };

  We.prototype.getData = function () {
    var e = this._data.getData(),
        t = this._store.getState(),
        n = {
      keyword: Object(Le.a)() ? this.getKeyword() : "",
      meta: this.getMeta(),
      text: e.content,
      title: e.title,
      url: e.slug,
      excerpt: e.excerpt,
      snippetTitle: this.getSnippetTitle(),
      snippetMeta: this.getSnippetMeta(),
      snippetCite: this.getSnippetCite(),
      primaryCategory: this.getPrimaryCategory(),
      searchUrl: this.getSearchUrl(),
      postUrl: this.getPostUrl(),
      permalink: this.getPermalink(),
      titleWidth: Object(Re.a)(this.getSnippetTitle())
    },
        r = {
      metaTitle: Object(j.get)(t, ["analysisData", "snippet", "title"], this.getSnippetTitle()),
      url: Object(j.get)(t, ["snippetEditor", "data", "slug"], e.slug),
      meta: this.getMetaDescForAnalysis(t)
    };

    return Fe(Fe({}, n), r);
  }, We.prototype.getKeyword = function () {
    return document.getElementById("yoast_wpseo_focuskw") && document.getElementById("yoast_wpseo_focuskw").value || "";
  }, We.prototype.getMetaDescForAnalysis = function (e) {
    var t = Object(j.get)(e, ["analysisData", "snippet", "description"], this.getSnippetMeta());
    return "" !== wpseoScriptData.metabox.metaDescriptionDate && (t = wpseoScriptData.metabox.metaDescriptionDate + " - " + t), t;
  }, We.prototype.getMeta = function () {
    return document.getElementById("yoast_wpseo_metadesc") && document.getElementById("yoast_wpseo_metadesc").value || "";
  }, We.prototype.getText = function () {
    return ne.markers.removeMarks(he.getContentTinyMce(Ke));
  }, We.prototype.getTitle = function () {
    return document.getElementById("title") && document.getElementById("title").value || "";
  }, We.prototype.getUrl = function () {
    var e = Object(S.select)("core/editor");
    if (e) return e.getCurrentPostAttribute("slug");
    var t = "",
        n = Ve("#new-post-slug");
    return 0 < n.length ? t = n.val() : null !== document.getElementById("editable-post-name-full") && (t = document.getElementById("editable-post-name-full").textContent), t;
  }, We.prototype.getExcerpt = function () {
    var e = "";
    return null !== document.getElementById("excerpt") && (e = document.getElementById("excerpt") && document.getElementById("excerpt").value || ""), e;
  }, We.prototype.getSnippetTitle = function () {
    return document.getElementById("yoast_wpseo_title") && document.getElementById("yoast_wpseo_title").value || "";
  }, We.prototype.getSnippetMeta = function () {
    return document.getElementById("yoast_wpseo_metadesc") && document.getElementById("yoast_wpseo_metadesc").value || "";
  }, We.prototype.getSnippetCite = function () {
    return this.getUrl() || "";
  }, We.prototype.getPrimaryCategory = function () {
    var e = "",
        t = Ve("#category-all").find("ul.categorychecklist"),
        n = t.find("li input:checked");
    if (1 === n.length) return this.getCategoryName(n.parent());
    var r = t.find(".wpseo-primary-term > label");
    return r.length ? e = this.getCategoryName(r) : e;
  }, We.prototype.getSearchUrl = function () {
    return wpseoScriptData.metabox.search_url;
  }, We.prototype.getPostUrl = function () {
    return wpseoScriptData.metabox.post_edit_url;
  }, We.prototype.getPermalink = function () {
    var e = this.getUrl();
    return wpseoScriptData.metabox.base_url + e;
  }, We.prototype.getCategoryName = function (e) {
    var t = e.clone();
    return t.children().remove(), Ve.trim(t.text());
  }, We.prototype.setDataFromSnippet = function (e, t) {
    switch (t) {
      case "snippet_meta":
        document.getElementById("yoast_wpseo_metadesc").value = e;
        break;

      case "snippet_cite":
        if (this.leavePostNameUntouched) return void (this.leavePostNameUntouched = !1);
        null !== document.getElementById("post_name") && (document.getElementById("post_name").value = e), null !== document.getElementById("editable-post-name") && null !== document.getElementById("editable-post-name-full") && (document.getElementById("editable-post-name").textContent = e, document.getElementById("editable-post-name-full").textContent = e);
        break;

      case "snippet_title":
        document.getElementById("yoast_wpseo_title").value = e;
    }
  }, We.prototype.saveSnippetData = function (e) {
    this.setDataFromSnippet(e.title, "snippet_title"), this.setDataFromSnippet(e.urlPath, "snippet_cite"), this.setDataFromSnippet(e.metaDesc, "snippet_meta");
  }, We.prototype.bindElementEvents = function (e) {
    this.inputElementEventBinder(e), this.changeElementEventBinder(e);
  }, We.prototype.changeElementEventBinder = function (e) {
    for (var t = ["#yoast-wpseo-primary-category", '.categorychecklist input[name="post_category[]"]'], n = 0; n < t.length; n++) {
      Ve(t[n]).on("change", e);
    }
  }, We.prototype.inputElementEventBinder = function (e) {
    for (var t = ["excerpt", "content", "title"], n = 0; n < t.length; n++) {
      null !== document.getElementById(t[n]) && document.getElementById(t[n]).addEventListener("input", e);
    }

    he.tinyMceEventBinder(e, Ke);
  }, We.prototype.saveScores = function (e, t) {
    var n = Object(Ne.a)(e);
    ve("content", n.className), document.getElementById("yoast_wpseo_linkdex").value = e, "" === t && (n.className = "na", n.screenReaderText = qe.dgettext("js-text-analysis", "Enter a focus keyphrase to calculate the SEO score")), Object(je.a)(n), Object(Te.a)(n), ve("keyword", n.className), jQuery(window).trigger("YoastSEO:numericScore", e);
  }, We.prototype.saveContentScore = function (e) {
    var t = Object(Ne.a)(e);
    ve("content", t.className), Object(Le.a)() || (Object(je.a)(t), Object(Te.a)(t)), Ve("#yoast_wpseo_content_score").val(e);
  };
  var ze = We,
      $e = n(65),
      Ge = n(106),
      He = n(189),
      Qe = n(178),
      Ze = n(104),
      Xe = n(72),
      Je = n(190),
      et = n(60),
      tt = n(45),
      nt = n(17),
      rt = n(61),
      it = n(59);

  function ot(e, t, n) {
    if ("undefined" != typeof wpseoScriptData) {
      var i,
          o,
          a,
          s,
          c,
          u = new He.a();
      jQuery(document).on("ajaxComplete", function (e, n, r) {
        if ("/admin-ajax.php" === r.url.substr(0 - "/admin-ajax.php".length) && "string" == typeof r.data && -1 !== r.data.indexOf("action=sample-permalink")) {
          s.leavePostNameUntouched = !0;
          var i = {
            slug: l(n)
          };
          t.dispatch(Object(nt.k)(i));
        }
      }), function () {
        var c, l, h, m;

        if (i = e("#wpseo_meta"), he.setStore(t), he.wpTextViewOnInitCheck(), (c = new me.a()).isClassicEditorHidden() && he.disableMarkerButtons(), c.vcActive ? he.disableMarkerButtons() : c.listen({
          classicEditorHidden: function classicEditorHidden() {
            he.disableMarkerButtons();
          },
          classicEditorShown: function classicEditorShown() {
            he.isTextViewActive() || he.enableMarkerButtons();
          }
        }), 0 !== i.length) {
          s = function (e) {
            var n = new ze({
              data: e,
              store: t
            });
            return n.leavePostNameUntouched = !1, n;
          }(n), Se();

          var b = function (t) {
            !function (e) {
              (void 0 === window.tinyMCE || Object(ee.a)() || "1" !== wpseoScriptData.metabox.show_markers) && e.dispatch(Object(tt.b)("disabled"));
            }(t);
            var n,
                r = {
              elementTarget: [he.tmceId, "yoast_wpseo_focuskw_text_input", "yoast_wpseo_metadesc", "excerpt", "editable-post-name", "editable-post-name-full"],
              targets: (n = {}, Object(Le.a)() && (n.output = "does-not-really-exist-but-it-needs-something"), Object($e.a)() && (n.contentOutput = "also-does-not-really-exist-but-it-needs-something"), n),
              callbacks: {
                getData: s.getData.bind(s)
              },
              locale: wpseoScriptData.metabox.contentLocale,
              marker: Object(Qe.a)(t),
              contentAnalysisActive: Object($e.a)(),
              keywordAnalysisActive: Object(Le.a)(),
              hasSnippetPreview: !1,
              debouncedRefresh: !1,
              researcher: new window.yoast.Researcher["default"]()
            };
            Object(Le.a)() && (t.dispatch(Object(et.d)(e("#yoast_wpseo_focuskw").val())), r.callbacks.saveScores = s.saveScores.bind(s), r.callbacks.updatedKeywordsResults = function (e) {
              var n = t.getState().focusKeyword;
              t.dispatch(Object(re.setSeoResultsForKeyword)(n, e)), t.dispatch(Object(nt.h)());
            }), Object($e.a)() && (r.callbacks.saveContentScore = s.saveContentScore.bind(s), r.callbacks.updatedContentResults = function (e) {
              t.dispatch(Object(re.setReadabilityResults)(e)), t.dispatch(Object(nt.h)());
            }), o = e("#title");
            var i = Object(Me.a)();
            return Object(j.isUndefined)(i) || Object(j.isUndefined)(i.domain) || (r.translations = i), r;
          }(t);

          a = new ne.App(b), window.YoastSEO = window.YoastSEO || {}, window.YoastSEO.app = a, window.YoastSEO.store = t, window.YoastSEO.analysis = {}, window.YoastSEO.analysis.worker = Object(ke.a)(), window.YoastSEO.analysis.collectData = function () {
            return Object(Pe.a)(n, t, u, a.pluggable, Object(S.select)("core/block-editor"));
          }, window.YoastSEO.analysis.applyMarks = function (e, t) {
            return Object(Qe.a)()(e, t);
          }, window.YoastSEO.app.refresh = Object(j.debounce)(function () {
            return Object(xe["default"])(window.YoastSEO.analysis.worker, window.YoastSEO.analysis.collectData, window.YoastSEO.analysis.applyMarks, t, s);
          }, Ze.refreshDelay), window.YoastSEO.app.registerCustomDataCallback = u.register, window.YoastSEO.app.pluggable = new be.a(window.YoastSEO.app.refresh), window.YoastSEO.app.registerPlugin = window.YoastSEO.app.pluggable._registerPlugin, window.YoastSEO.app.pluginReady = window.YoastSEO.app.pluggable._ready, window.YoastSEO.app.pluginReloaded = window.YoastSEO.app.pluggable._reloaded, window.YoastSEO.app.registerModification = window.YoastSEO.app.pluggable._registerModification, window.YoastSEO.app.registerAssessment = function (e, t, n) {
            if (!Object(j.isUndefined)(a.seoAssessor)) return window.YoastSEO.app.pluggable._registerAssessment(a.defaultSeoAssessor, e, t, n) && window.YoastSEO.app.pluggable._registerAssessment(a.cornerStoneSeoAssessor, e, t, n);
          }, window.YoastSEO.app.changeAssessorOptions = function (e) {
            window.YoastSEO.analysis.worker.initialize(e)["catch"](Xe.a), window.YoastSEO.app.refresh();
          }, Object(Je.a)(a.refresh, "get_focus_keyword_usage", t), t.subscribe(p.bind(null, t, a.refresh)), window.YoastSEO.analyzerArgs = b, window.YoastSEO.wp = {}, window.YoastSEO.wp.replaceVarsPlugin = new oe.a(a, t), window.YoastSEO.wp.shortcodePlugin = new de({
            registerPlugin: a.registerPlugin,
            registerModification: a.registerModification,
            pluginReady: a.pluginReady,
            pluginReloaded: a.pluginReloaded
          }), wpseoScriptData.metabox.markdownEnabled && new ge(a.registerPlugin, a.registerModification).register(), window.YoastSEO.wp._tinyMCEHelper = he, Object(Le.a)() && (l = r, h = e("#yoast_wpseo_linkdex").val(), m = Object(Ne.a)(h), Object(je.a)(m), Object(Te.a)(m), l.updateScore("keyword", m.className)), Object($e.a)() && function (t) {
            var n = e("#yoast_wpseo_content_score").val(),
                r = Object(Ne.a)(n);
            Object(Te.a)(r), t.updateScore("content", r.className);
          }(r), window.YoastSEO.analysis.worker.initialize(Object(ke.b)()).then(function () {
            jQuery(window).trigger("YoastSEO:ready");
          })["catch"](Xe.a), s.bindElementEvents(Object(j.debounce)(function () {
            return Object(xe["default"])(window.YoastSEO.analysis.worker, window.YoastSEO.analysis.collectData, window.YoastSEO.analysis.applyMarks, t, s);
          }, Ze.refreshDelay)), d(a);
          var y = a.initAssessorPresenters.bind(a);
          a.initAssessorPresenters = function () {
            y(), d(a);
          }, n.setRefresh && n.setRefresh(a.refresh);
          var w = Ge.a.getDataFromCollector(s),
              O = Ge.a.getTemplatesFromL10n(wpseoScriptData.metabox);
          w = Ge.a.getDataWithTemplates(w, O), t.dispatch(Object(nt.k)(w)), t.dispatch(Object(it.e)("1" === document.getElementById("yoast_wpseo_is_cornerstone").value));
          var v = t.getState().focusKeyword;
          Object(ye.a)(window.YoastSEO.analysis.worker.runResearch, t, v);

          var _ = Object(j.debounce)(function () {
            a.refresh();
          }, 50),
              E = null;

          if (t.subscribe(function () {
            var n = t.getState().focusKeyword;
            v !== n && (v = n, Object(ye.a)(window.YoastSEO.analysis.worker.runResearch, t, v), e("#yoast_wpseo_focuskw").val(v), _());
            var r = Ge.a.getDataFromStore(t),
                i = Ge.a.getDataWithoutTemplates(r, O);
            w.title !== r.title && s.setDataFromSnippet(i.title, "snippet_title"), w.slug !== r.slug && s.setDataFromSnippet(i.slug, "snippet_cite"), w.description !== r.description && s.setDataFromSnippet(i.description, "snippet_meta");
            var o = t.getState();
            E !== o.isCornerstone && (E = o.isCornerstone, document.getElementById("yoast_wpseo_is_cornerstone").value = o.isCornerstone, a.changeAssessorOptions({
              useCornerstone: o.isCornerstone
            })), w.title = r.title, w.slug = r.slug, w.description = r.description;
          }), Object(ee.a)()) {
            var T = g();
            f(T, t), Object(S.subscribe)(function () {
              var e = g();
              e !== T && f(T = e, t);
            });
          }

          Object(xe.initializationDone)(), window.YoastSEO.app.refresh();
        }
      }();
    }

    function l(e) {
      return "" === e.responseText ? o.val() : jQuery("<div>" + e.responseText + "</div>").find("#editable-post-name-full").text();
    }

    function d(e) {
      Object(j.isUndefined)(e.seoAssessorPresenter) || (e.seoAssessorPresenter.render = function () {}), Object(j.isUndefined)(e.contentAssessorPresenter) || (e.contentAssessorPresenter.render = function () {}, e.contentAssessorPresenter.renderIndividualRatings = function () {});
    }

    function p(e, t) {
      var n = c || "";
      c = e.getState().analysisData.snippet, !Object(ie.isShallowEqualObjects)(n, c) && t();
    }

    function f(e, t) {
      "visual" !== e ? t.dispatch(Object(tt.b)("disabled")) : t.dispatch(Object(tt.b)("enabled"));
    }

    function g() {
      return Object(S.select)("core/edit-post").getEditorMode();
    }
  }

  Object(rt.setYoastComponentsL10n)(), Object(rt.setWordPressSeoL10n)(), window.YoastReplaceVarPlugin = oe.a, window.YoastShortcodePlugin = de;
  var at = n(80),
      st = n.n(at);
  var ct = n(154),
      ut = n(155),
      lt = n(191),
      dt = n(185);
  window.wpseoPostScraperL10n = window.wpseoScriptData.metabox, window.wpseoShortcodePluginL10n = window.wpseoScriptData.analysis.plugins.shortcodes, window.YoastSEO = window.YoastSEO || {}, a()(function () {
    Object(u.a)(c.a), "undefined" != typeof wpseoPrimaryCategoryL10n && te(c.a);
    var e = Object(lt.a)();
    window.yoast.initEditorIntegration(e);
    var t = new window.yoast.EditorData(function () {}, e);
    t.initialize(window.wpseoScriptData.analysis.plugins.replaceVars.replace_vars), ot(c.a, e, t), window.wpseoScriptData && void 0 !== window.wpseoScriptData.featuredImage && function (e) {
      var t,
          n,
          r,
          i = function i(e) {
        this._app = e, this.featuredImage = null, this.pluginName = "addFeaturedImagePlugin", this.registerPlugin(), this.registerModifications();
      };

      function o() {
        e("#yst_opengraph_image_warning").remove(), n.removeClass("yoast-opengraph-image-notice");
      }

      i.prototype.setFeaturedImage = function (e) {
        this.featuredImage = e, this._app.pluginReloaded(this.pluginName);
      }, i.prototype.removeFeaturedImage = function () {
        this.setFeaturedImage(null);
      }, i.prototype.registerPlugin = function () {
        this._app.registerPlugin(this.pluginName, {
          status: "ready"
        });
      }, i.prototype.registerModifications = function () {
        this._app.registerModification("content", this.addImageToContent.bind(this), this.pluginName, 10);
      }, i.prototype.addImageToContent = function (e) {
        return null !== this.featuredImage && (e += this.featuredImage), e;
      };
      var a,
          s,
          c = wp.media.featuredImage.frame();
      "undefined" != typeof YoastSEO && (t = new i(YoastSEO.app), n = e("#postimagediv"), r = n.find(".hndle"), c.on("select", function () {
        var i, a, s;
        !function (t) {
          var i = t.state().get("selection").first().toJSON();
          i.width < 200 || i.height < 200 ? 0 === e("#yst_opengraph_image_warning").length && (e('<div id="yst_opengraph_image_warning" class="notice notice-error notice-alt"><p>' + wpseoScriptData.featuredImage.featured_image_notice + "</p></div>").insertAfter(r), n.addClass("yoast-opengraph-image-notice"), st()(wpseoScriptData.featuredImage.featured_image_notice, "assertive")) : o();
        }(c), s = (a = c.state().get("selection").first()).get("alt"), i = '<img src="' + a.get("url") + '" width="' + a.get("width") + '" height="' + a.get("height") + '" alt="' + s + '"/>', t.setFeaturedImage(i);
      }), n.on("click", "#remove-post-thumbnail", function () {
        t.removeFeaturedImage(), o();
      }), void 0 !== e("#set-post-thumbnail > img").prop("src") && t.setFeaturedImage(e("#set-post-thumbnail ").html()), Object(ee.a)() && Object(S.subscribe)(function () {
        var e = Object(S.select)("core/editor").getEditedPostAttribute("featured_media");

        if (function (e) {
          return "number" == typeof e && e > 0;
        }(e) && void 0 !== (a = Object(S.select)("core").getMedia(e)) && a !== s) {
          s = a;
          var n = '<img src="'.concat(a.source_url, '" alt="').concat(a.alt_text, '" >');
          t.setFeaturedImage(n);
        }
      }));
    }(c.a), Object(ct.a)(c.a), Object(ut.a)(c.a), Object(dt.a)();
  });
}]);