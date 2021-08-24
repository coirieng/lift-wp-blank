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
  }, n.p = "", n(n.s = 356);
}([,, function (e, t) {
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
},, function (e, t) {
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
},,,,,,, function (e, t, n) {
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
    return d;
  }), n.d(t, "j", function () {
    return l;
  }), n.d(t, "k", function () {
    return p;
  }), n.d(t, "l", function () {
    return f;
  }), n.d(t, "m", function () {
    return g;
  }), n.d(t, "i", function () {
    return b;
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
      d = "LOAD_SNIPPET_EDITOR_DATA";

  function l(e) {
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

  function b(e) {
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
},,, function (e, t, n) {
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
    return d;
  }), n.d(t, "LOAD_CORNERSTONE_CONTENT", function () {
    return l.a;
  }), n.d(t, "TOGGLE_CORNERSTONE_CONTENT", function () {
    return l.c;
  }), n.d(t, "SET_CORNERSTONE_CONTENT", function () {
    return l.b;
  }), n.d(t, "loadCornerstoneContent", function () {
    return l.d;
  }), n.d(t, "setCornerstoneContent", function () {
    return l.e;
  }), n.d(t, "toggleCornerstoneContent", function () {
    return l.f;
  }), n.d(t, "SET_EDITOR_DATA_CONTENT", function () {
    return p;
  }), n.d(t, "SET_EDITOR_DATA_TITLE", function () {
    return f;
  }), n.d(t, "SET_EDITOR_DATA_EXCERPT", function () {
    return g;
  }), n.d(t, "SET_EDITOR_DATA_IMAGE_URL", function () {
    return b;
  }), n.d(t, "setEditorDataContent", function () {
    return m;
  }), n.d(t, "setEditorDataTitle", function () {
    return y;
  }), n.d(t, "setEditorDataExcerpt", function () {
    return w;
  }), n.d(t, "setEditorDataImageUrl", function () {
    return h;
  }), n.d(t, "OPEN_EDITOR_MODAL", function () {
    return O;
  }), n.d(t, "CLOSE_EDITOR_MODAL", function () {
    return v;
  }), n.d(t, "openEditorModal", function () {
    return E;
  }), n.d(t, "closeEditorModal", function () {
    return _;
  }), n.d(t, "SET_ESTIMATED_READING_TIME", function () {
    return j.b;
  }), n.d(t, "LOAD_ESTIMATED_READING_TIME", function () {
    return j.a;
  }), n.d(t, "setEstimatedReadingTime", function () {
    return j.d;
  }), n.d(t, "loadEstimatedReadingTime", function () {
    return j.c;
  }), n.d(t, "LOAD_FOCUS_KEYWORD", function () {
    return S.a;
  }), n.d(t, "SET_FOCUS_KEYWORD", function () {
    return S.b;
  }), n.d(t, "loadFocusKeyword", function () {
    return S.c;
  }), n.d(t, "setFocusKeyword", function () {
    return S.d;
  }), n.d(t, "SET_MARKER_STATUS", function () {
    return T.a;
  }), n.d(t, "setMarkerStatus", function () {
    return T.b;
  }), n.d(t, "SET_MARKER_PAUSE_STATUS", function () {
    return D.a;
  }), n.d(t, "setMarkerPauseStatus", function () {
    return D.b;
  }), n.d(t, "DISMISS_ALERT", function () {
    return P.a;
  }), n.d(t, "DISMISS_ALERT_SUCCESS", function () {
    return P.b;
  }), n.d(t, "dismissAlert", function () {
    return P.c;
  }), n.d(t, "SET_PRIMARY_TAXONOMY", function () {
    return A.a;
  }), n.d(t, "setPrimaryTaxonomyId", function () {
    return A.b;
  }), n.d(t, "SET_PAGE_TYPE", function () {
    return k.d;
  }), n.d(t, "SET_ARTICLE_TYPE", function () {
    return k.c;
  }), n.d(t, "GET_SCHEMA_PAGE_DATA", function () {
    return k.b;
  }), n.d(t, "GET_SCHEMA_ARTICLE_DATA", function () {
    return k.a;
  }), n.d(t, "setPageType", function () {
    return k.h;
  }), n.d(t, "setArticleType", function () {
    return k.g;
  }), n.d(t, "getSchemaPageData", function () {
    return k.f;
  }), n.d(t, "getSchemaArticleData", function () {
    return k.e;
  }), n.d(t, "MODAL_DISMISS", function () {
    return I;
  }), n.d(t, "MODAL_OPEN", function () {
    return R;
  }), n.d(t, "MODAL_OPEN_NO_KEYPHRASE", function () {
    return C;
  }), n.d(t, "setSEMrushDismissModal", function () {
    return x;
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
    return K.e;
  }), n.d(t, "SET_TWITTER_DESCRIPTION", function () {
    return K.c;
  }), n.d(t, "SET_TWITTER_IMAGE", function () {
    return K.d;
  }), n.d(t, "CLEAR_TWITTER_IMAGE", function () {
    return K.a;
  }), n.d(t, "LOAD_TWITTER_PREVIEW", function () {
    return K.b;
  }), n.d(t, "setTwitterPreviewTitle", function () {
    return K.j;
  }), n.d(t, "setTwitterPreviewDescription", function () {
    return K.h;
  }), n.d(t, "setTwitterPreviewImage", function () {
    return K.i;
  }), n.d(t, "clearTwitterPreviewImage", function () {
    return K.f;
  }), n.d(t, "loadTwitterPreviewData", function () {
    return K.g;
  }), n.d(t, "SET_FACEBOOK_TITLE", function () {
    return Y.e;
  }), n.d(t, "SET_FACEBOOK_DESCRIPTION", function () {
    return Y.c;
  }), n.d(t, "SET_FACEBOOK_IMAGE", function () {
    return Y.d;
  }), n.d(t, "CLEAR_FACEBOOK_IMAGE", function () {
    return Y.a;
  }), n.d(t, "LOAD_FACEBOOK_PREVIEW", function () {
    return Y.b;
  }), n.d(t, "setFacebookPreviewTitle", function () {
    return Y.j;
  }), n.d(t, "setFacebookPreviewDescription", function () {
    return Y.h;
  }), n.d(t, "setFacebookPreviewImage", function () {
    return Y.i;
  }), n.d(t, "clearFacebookPreviewImage", function () {
    return Y.f;
  }), n.d(t, "loadFacebookPreviewData", function () {
    return Y.g;
  }), n.d(t, "SET_WARNING_MESSAGE", function () {
    return W.a;
  }), n.d(t, "setWarningMessage", function () {
    return W.b;
  }), n.d(t, "setOverallReadabilityScore", function () {
    return V;
  }), n.d(t, "setOverallSeoScore", function () {
    return G;
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

  function d() {
    return {
      type: c,
      timestamp: Date.now()
    };
  }

  var l = n(59),
      p = "SET_EDITOR_DATA_CONTENT",
      f = "SET_EDITOR_DATA_TITLE",
      g = "SET_EDITOR_DATA_EXCERPT",
      b = "SET_EDITOR_DATA_IMAGE_URL";

  function m(e) {
    return {
      type: p,
      content: e
    };
  }

  function y(e) {
    return {
      type: f,
      title: e
    };
  }

  function w(e) {
    return {
      type: g,
      excerpt: e
    };
  }

  function h(e) {
    return {
      type: b,
      imageUrl: e
    };
  }

  var O = "OPEN_MODAL",
      v = "CLOSE_MODAL";

  function E(e) {
    return {
      type: O,
      modalKey: e
    };
  }

  function _() {
    return {
      type: v
    };
  }

  var j = n(67),
      S = n(60),
      T = n(45),
      D = n(75),
      P = n(69),
      A = n(76),
      k = n(56),
      I = "MODAL_DISMISS",
      R = "MODAL_OPEN",
      C = "MODAL_OPEN_NO_KEYPHRASE";

  function x() {
    return {
      type: I
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
      type: C
    };
  }

  var L = n(41),
      U = n(43),
      F = n(77),
      B = n(17),
      K = n(48),
      Y = n(49),
      W = n(78),
      V = function V(e) {
    return i.a.readabilityScore = e, Object(r.setOverallReadabilityScore)(e);
  },
      G = function G(e, t) {
    return i.a.seoScore = e, Object(r.setOverallSeoScore)(e, t);
  };
}, function (e, t) {
  e.exports = window.regeneratorRuntime;
},,, function (e, t, n) {
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
    return d;
  }), n.d(t, "isTinyMCELoaded", function () {
    return l;
  }), n.d(t, "isTinyMCEAvailable", function () {
    return p;
  }), n.d(t, "getContentTinyMce", function () {
    return f;
  }), n.d(t, "addEventHandler", function () {
    return g;
  }), n.d(t, "disableMarkerButtons", function () {
    return b;
  }), n.d(t, "enableMarkerButtons", function () {
    return m;
  }), n.d(t, "isTextViewActive", function () {
    return y;
  }), n.d(t, "wpTextViewOnInitCheck", function () {
    return w;
  }), n.d(t, "tinyMceEventBinder", function () {
    return h;
  });
  var r,
      i = n(2),
      o = n(93),
      a = n(123),
      s = n(45),
      c = "content",
      u = "description";

  function d(e) {
    r = e;
  }

  function l() {
    return "undefined" != typeof tinyMCE && void 0 !== tinyMCE.editors && 0 !== tinyMCE.editors.length;
  }

  function p(e) {
    if (!l()) return !1;
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

  function b() {
    Object(i.isUndefined)(r) || r.dispatch(Object(s.b)("disabled"));
  }

  function m() {
    Object(i.isUndefined)(r) || r.dispatch(Object(s.b)("enabled"));
  }

  function y() {
    var e = document.getElementById("wp-content-wrap");
    return !!e && e.classList.contains("html-active");
  }

  function w() {
    y() && (b(), l() && tinyMCE.on("AddEditor", function () {
      m();
    }));
  }

  function h(e, t) {
    g(t, ["input", "change", "cut", "paste"], e), g(t, ["hide"], b);
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
    return b;
  }), n.d(t, "pushNewReplaceVar", function () {
    return m;
  }), n.d(t, "replaceSpaces", function () {
    return y;
  }), n.d(t, "prepareCustomFieldForDispatch", function () {
    return w;
  }), n.d(t, "prepareCustomTaxonomyForDispatch", function () {
    return h;
  }), n.d(t, "mapCustomTaxonomies", function () {
    return O;
  }), n.d(t, "mapCustomFields", function () {
    return v;
  }), n.d(t, "excerptFromContent", function () {
    return E;
  }), n.d(t, "applyReplaceUsingPlugin", function () {
    return _;
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

  function d(e) {
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

  var l = n(9).strings.stripHTMLTags,
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

  function b(e) {
    return c(e = g(e));
  }

  function m(e, t) {
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

  function w(e) {
    return {
      name: "cf_" + y(e),
      label: c(e + " (custom field)")
    };
  }

  function h(e) {
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
      var r = h(n),
          i = r.name,
          o = r.label,
          a = r.descriptionName,
          c = r.descriptionLabel;
      t.dispatch(Object(s.l)(i, e.name, o)), t.dispatch(Object(s.l)(a, e.description, c));
    }), Object(o.omit)(d({}, e), "custom_taxonomies")) : e;
  }

  function v(e, t) {
    return e.custom_fields ? (Object(o.forEach)(e.custom_fields, function (e, n) {
      var r = w(n),
          i = r.name,
          o = r.label;
      t.dispatch(Object(s.l)(i, e, o));
    }), Object(o.omit)(d({}, e), "custom_fields")) : e;
  }

  function E(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 156;
    return (e = (e = Object(a.stripTags)(e)).trim()).length <= t ? e : (e = e.substring(0, t)).substring(0, e.lastIndexOf(" "));
  }

  var _ = function _(e) {
    var t = Object(o.get)(window, ["YoastSEO", "app", "pluggable"], !1);
    if (!t || !Object(o.get)(window, ["YoastSEO", "app", "pluggable", "loaded"], !1)) return function (e) {
      var t = Object(o.get)(window, ["YoastSEO", "wp", "replaceVarsPlugin", "replaceVariables"], o.identity);
      return {
        url: e.url,
        title: l(t(e.title)),
        description: l(t(e.description))
      };
    }(e);

    var n = t._applyModifications.bind(t);

    return {
      url: e.url,
      title: l(n("data_page_title", e.title)),
      description: l(n("data_meta_desc", e.description))
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
    return d;
  }), n.d(t, "m", function () {
    return l;
  }), n.d(t, "l", function () {
    return p;
  }), n.d(t, "n", function () {
    return f;
  }), n.d(t, "h", function () {
    return g;
  }), n.d(t, "k", function () {
    return b;
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

  function d(e, t) {
    return {
      type: s,
      countryCode: e,
      keyphrase: t
    };
  }

  function l(e) {
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

  function b() {
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
    return d;
  }), n.d(t, "c", function () {
    return l;
  }), n.d(t, "d", function () {
    return p;
  }), n.d(t, "a", function () {
    return f;
  }), n.d(t, "l", function () {
    return g;
  }), n.d(t, "k", function () {
    return b;
  }), n.d(t, "h", function () {
    return m;
  }), n.d(t, "i", function () {
    return y;
  }), n.d(t, "j", function () {
    return w;
  }), n.d(t, "g", function () {
    return h;
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
      d = "SET_ADVANCED",
      l = "SET_BREADCRUMBS_TITLE",
      p = "SET_CANONICAL_URL",
      f = "LOAD_ADVANCED_SETTINGS",
      g = function g(e) {
    return s.noIndex = e, {
      type: c,
      value: e
    };
  },
      b = function b(e) {
    return s.noFollow = e, {
      type: u,
      value: e
    };
  },
      m = function m(e) {
    return s.advanced = e.join(","), {
      type: d,
      value: e
    };
  },
      y = function y(e) {
    return s.breadcrumbsTitle = e, {
      type: l,
      value: e
    };
  },
      w = function w(e) {
    return s.canonical = e, {
      type: p,
      value: e
    };
  },
      h = function h() {
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
    return d;
  }), n.d(t, "d", function () {
    return l;
  }), n.d(t, "a", function () {
    return p;
  }), n.d(t, "b", function () {
    return f;
  }), n.d(t, "j", function () {
    return g;
  }), n.d(t, "h", function () {
    return b;
  }), n.d(t, "i", function () {
    return m;
  }), n.d(t, "f", function () {
    return y;
  }), n.d(t, "g", function () {
    return w;
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
      d = "SET_TWITTER_DESCRIPTION",
      l = "SET_TWITTER_IMAGE",
      p = "CLEAR_TWITTER_IMAGE",
      f = "LOAD_TWITTER_PREVIEW",
      g = function g(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim() ? c.title = "" : c.title = e, {
      type: u,
      title: e
    };
  },
      b = function b(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialDescriptionTemplate().trim() ? c.description = "" : c.description = e, {
      type: d,
      description: e
    };
  },
      m = function m(e) {
    return c.imageId = e.id, c.imageUrl = e.url, {
      type: l,
      image: e
    };
  },
      y = function y() {
    return c.imageId = "", c.imageUrl = "", {
      type: p
    };
  },
      w = function w() {
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
    return d;
  }), n.d(t, "d", function () {
    return l;
  }), n.d(t, "a", function () {
    return p;
  }), n.d(t, "b", function () {
    return f;
  }), n.d(t, "j", function () {
    return g;
  }), n.d(t, "h", function () {
    return b;
  }), n.d(t, "i", function () {
    return m;
  }), n.d(t, "f", function () {
    return y;
  }), n.d(t, "g", function () {
    return w;
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
      d = "SET_FACEBOOK_DESCRIPTION",
      l = "SET_FACEBOOK_IMAGE",
      p = "CLEAR_FACEBOOK_IMAGE",
      f = "LOAD_FACEBOOK_PREVIEW",
      g = function g(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialTitleTemplate().trim() ? c.title = "" : c.title = e, {
      type: u,
      title: e
    };
  },
      b = function b(e) {
    return e.trim() === Object(r.select)("yoast-seo/editor").getSocialDescriptionTemplate().trim() ? c.description = "" : c.description = e, {
      type: d,
      description: e
    };
  },
      m = function m(e) {
    return c.imageUrl = e.url, c.imageId = e.id, {
      type: l,
      image: e
    };
  },
      y = function y() {
    return c.imageId = "", c.imageUrl = "", {
      type: p
    };
  },
      w = function w() {
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
},,,,,, function (e, t, n) {
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
    return d;
  }), n.d(t, "e", function () {
    return l;
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
      d = function d() {
    return {
      type: a,
      pageType: r.a.pageType,
      defaultPageType: r.a.defaultPageType
    };
  },
      l = function l() {
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
},, function (e, t, n) {
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
    return d;
  }), n.d(t, "c", function () {
    return l;
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

  function d(e) {
    return s.estimatedReadingTime = e, {
      type: c,
      estimatedReadingTime: e
    };
  }

  function l() {
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
},, function (e, t, n) {
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
    return V;
  }), n.d(t, "getDescription", function () {
    return G;
  }), n.d(t, "getPermalink", function () {
    return H;
  }), n.d(t, "getAnalysisTimestamp", function () {
    return q;
  }), n.d(t, "getAnalysisData", function () {
    return Q;
  }), n.d(t, "isCornerstoneContent", function () {
    return z;
  }), n.d(t, "getEditorContext", function () {
    return l;
  }), n.d(t, "getPostOrPageString", function () {
    return p;
  }), n.d(t, "getIsBlockEditor", function () {
    return f;
  }), n.d(t, "getIsElementorEditor", function () {
    return g;
  }), n.d(t, "getEditorType", function () {
    return b;
  }), n.d(t, "getContentLocale", function () {
    return m;
  }), n.d(t, "getEditorDataContent", function () {
    return h;
  }), n.d(t, "getEditorDataTitle", function () {
    return O;
  }), n.d(t, "getEditorDataExcerpt", function () {
    return v;
  }), n.d(t, "getEditorDataExcerptWithFallback", function () {
    return E;
  }), n.d(t, "getEditorDataImageUrl", function () {
    return _;
  }), n.d(t, "getEditorDataImageFallback", function () {
    return j;
  }), n.d(t, "getIsModalOpen", function () {
    return X;
  }), n.d(t, "getEstimatedReadingTime", function () {
    return J;
  }), n.d(t, "getFacebookTitle", function () {
    return Z;
  }), n.d(t, "getFacebookDescription", function () {
    return $;
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
    return de;
  }), n.d(t, "getReplacedExcerpt", function () {
    return le;
  }), n.d(t, "getFocusKeyphrase", function () {
    return S;
  }), n.d(t, "getActiveMarker", function () {
    return pe;
  }), n.d(t, "getMarkerPauseStatus", function () {
    return fe;
  }), n.d(t, "isMarkingAvailable", function () {
    return ge;
  }), n.d(t, "getMarksButtonStatus", function () {
    return be;
  }), n.d(t, "isAlertDismissed", function () {
    return me;
  }), n.d(t, "getPreferences", function () {
    return ye;
  }), n.d(t, "getIsKeywordAnalysisActive", function () {
    return we;
  }), n.d(t, "getPrimaryTaxonomyId", function () {
    return he;
  }), n.d(t, "getSeoResults", function () {
    return Ee;
  }), n.d(t, "getResultsForKeyword", function () {
    return _e;
  }), n.d(t, "getReadabilityResults", function () {
    return je;
  }), n.d(t, "getResultsForFocusKeyword", function () {
    return Se;
  }), n.d(t, "getResultById", function () {
    return Te;
  }), n.d(t, "getMarkButtonStatus", function () {
    return De;
  }), n.d(t, "getDefaultPageType", function () {
    return Pe;
  }), n.d(t, "getPageType", function () {
    return Ae;
  }), n.d(t, "getDefaultArticleType", function () {
    return ke;
  }), n.d(t, "getArticleType", function () {
    return Ie;
  }), n.d(t, "getSEMrushModalOpen", function () {
    return Re;
  }), n.d(t, "getSEMrushNoKeyphraseMessage", function () {
    return Ce;
  }), n.d(t, "getSEMrushIsRequestPending", function () {
    return xe;
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
    return Ke;
  }), n.d(t, "getAuthorName", function () {
    return T;
  }), n.d(t, "getSiteName", function () {
    return D;
  }), n.d(t, "getBaseUrlFromSettings", function () {
    return P;
  }), n.d(t, "getDateFromSettings", function () {
    return A;
  }), n.d(t, "getRecommendedReplaceVars", function () {
    return k;
  }), n.d(t, "getSiteIconUrlFromSettings", function () {
    return I;
  }), n.d(t, "getShoppingData", function () {
    return Ye;
  }), n.d(t, "getReplaceVars", function () {
    return R;
  }), n.d(t, "getSnippetEditorTemplates", function () {
    return C;
  }), n.d(t, "getSnippetEditorMode", function () {
    return x;
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
    return K;
  }), n.d(t, "getSnippetEditorIsLoading", function () {
    return Y;
  }), n.d(t, "getSnippetEditorPreviewImageUrl", function () {
    return W;
  }), n.d(t, "getTwitterTitle", function () {
    return We;
  }), n.d(t, "getTwitterDescription", function () {
    return Ve;
  }), n.d(t, "getTwitterImageUrl", function () {
    return Ge;
  }), n.d(t, "getTwitterImageType", function () {
    return He;
  }), n.d(t, "getTwitterImageSrc", function () {
    return qe;
  }), n.d(t, "getTwitterWarnings", function () {
    return Qe;
  }), n.d(t, "getWarningMessage", function () {
    return ze;
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
      d = n(71);

  function l(e) {
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

  function b(e) {
    return g(e) ? "elementorEditor" : f(e) ? "blockEditor" : "classicEditor";
  }

  function m(e) {
    return Object(r.get)(e, "editorContext.contentLocale", "en_US");
  }

  var y = n(63),
      w = n(40),
      h = function h(e) {
    return Object(r.get)(e, "editorData.content", "");
  },
      O = function O(e) {
    return Object(r.get)(e, "editorData.title", "");
  },
      v = function v(e) {
    return Object(r.get)(e, "editorData.excerpt");
  },
      E = function E(e) {
    var t = Object(r.get)(e, "editorData.excerpt", "");
    return "" === t && (t = Object(w.excerptFromContent)(Object(r.get)(e, "editorData.content", ""))), t;
  },
      _ = function _(e) {
    return Object(r.get)(e, "editorData.imageUrl", "");
  },
      j = function j(e) {
    var t = [{
      featuredOrFirstImage: Object(r.get)(e, "editorData.imageUrl", "")
    }, {
      socialImage: Object(r.get)(window, "wpseoScriptData.metabox.social_image_template", "")
    }, {
      siteWideImage: Object(r.get)(window.wpseoScriptData, "metabox.showSocial.facebook") && Object(r.get)(e, "settings.socialPreviews.sitewideImage", "")
    }];
    Object(y.applyFilters)("yoast.socials.imageFallback", t);

    for (var n = 0, i = t; n < i.length; n++) {
      var o = i[n];
      if (Object.values(o)[0]) return Object.values(o)[0];
    }

    return "";
  };

  function S(e) {
    return e.focusKeyword;
  }

  var T = function T(e) {
    return Object(r.get)(e, "settings.socialPreviews.authorName", "");
  },
      D = function D(e) {
    return Object(r.get)(e, "settings.socialPreviews.siteName", "");
  },
      P = function P(e) {
    return Object(r.get)(e, "settings.snippetEditor.baseUrl", "");
  },
      A = function A(e) {
    return Object(r.get)(e, "settings.snippetEditor.date", "");
  },
      k = function k(e) {
    return Object(r.get)(e, "settings.snippetEditor.recommendedReplacementVariables", []);
  },
      I = function I(e) {
    return Object(r.get)(e, "settings.snippetEditor.siteIconUrl", "");
  },
      R = function R(e) {
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
      L = function L(e) {
    return Object(r.get)(e, "snippetEditor.data.description", "");
  },
      U = function U(e) {
    return L(e) || C(e).description;
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
      K = function K(e) {
    return Object(r.get)(e, "snippetEditor.wordsToHighlight", []);
  },
      Y = function Y(e) {
    return Object(r.get)(e, "snippetEditor.isLoading", !0);
  },
      W = function W(e) {
    return Object(r.get)(e, "snippetEditor.data.snippetPreviewImageURL", "");
  },
      V = function V(e) {
    return Object(r.get)(e, "analysisData.snippet.title", "");
  },
      G = function G(e) {
    return Object(r.get)(e, "analysisData.snippet.description", "");
  },
      H = function H(e) {
    return Object(r.get)(e, "analysisData.snippet.url", "");
  },
      q = function q(e) {
    return parseInt(Object(r.get)(e, "analysisData.timestamp", 0), 10);
  },
      Q = function Q(e) {
    var t = V(e) || M(e),
        n = F(e);
    return {
      text: h(e),
      title: t,
      keyword: S(e),
      description: G(e) || L(e),
      locale: m(e),
      titleWidth: Object(d.a)(t),
      url: n,
      permalink: P(e) + n
    };
  };

  function z(e) {
    return e.isCornerstone;
  }

  var X = function X(e, t) {
    return Object(r.get)(e, "editorModals.openedModal", "") === t;
  };

  function J(e) {
    return Object(r.get)(e, "estimatedReadingTime.estimatedReadingTime", 0) || 0;
  }

  var Z = function Z(e) {
    return Object(r.get)(e, "facebookEditor.title", "");
  },
      $ = function $(e) {
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
    Object(y.applyFilters)("yoast.socials.imageFallback", t);

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
      de = function de() {
    return Object(r.get)(window, "wpseoScriptData.metabox.social_description_template", "");
  },
      le = function le(e) {
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

  function be(e) {
    return e.marksButtonStatus;
  }

  function me(e, t) {
    return !0 === e.dismissedAlerts[t];
  }

  function ye(e) {
    return e.preferences;
  }

  function we(e) {
    return Object(r.get)(e, "preferences.isKeywordAnalysisActive", !1);
  }

  function he(e, t) {
    return e.primaryTaxonomies[t];
  }

  var Oe = n(30),
      ve = n.n(Oe);

  function Ee(e) {
    var t = Object(r.get)(e, "analysis.seo", {});
    return Object(r.isEmpty)(t) ? {
      results: [],
      overallScore: null
    } : t;
  }

  function _e(e, t) {
    var n = Ee(e);
    return Object(r.get)(n, t, {});
  }

  function je(e) {
    var t = Object(r.get)(e, "analysis.readability", {});
    return Object(r.isEmpty)(t) ? {
      results: [],
      overallScore: null
    } : t;
  }

  function Se(e) {
    return _e(e, e.focusKeyword);
  }

  function Te(e, t) {
    var n = Se(e).results || [],
        r = je(e).results || [];
    return [].concat(ve()(n), ve()(r)).find(function (e) {
      return e._identifier === t;
    });
  }

  function De(e) {
    return e.marksButtonStatus;
  }

  var Pe = function Pe(e) {
    return Object(r.get)(e, "schemaTab.defaultPageType", "");
  },
      Ae = function Ae(e) {
    return Object(r.get)(e, "schemaTab.pageType", "");
  },
      ke = function ke(e) {
    return Object(r.get)(e, "schemaTab.defaultArticleType", "");
  },
      Ie = function Ie(e) {
    return Object(r.get)(e, "schemaTab.articleType", "");
  };

  function Re(e) {
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

  function Ke(e) {
    return e.SEMrushRequest.isLoggedIn;
  }

  var Ye = function Ye(e) {
    return Object(r.get)(e, "shoppingData", {});
  },
      We = function We(e) {
    return Object(r.get)(e, "twitterEditor.title", "");
  },
      Ve = function Ve(e) {
    return Object(r.get)(e, "twitterEditor.description", "");
  },
      Ge = function Ge(e) {
    return Object(r.get)(e, "twitterEditor.image.url", "");
  },
      He = function He(e) {
    return Object(r.get)(e, "settings.socialPreviews.twitterCardType", "summary");
  },
      qe = function qe(e) {
    return Object(r.get)(e, "twitterEditor.image.src", "");
  },
      Qe = function Qe(e) {
    return Object(r.get)(e, "twitterEditor.warnings", []);
  };

  function ze(e) {
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
    var d = t();
    a && e.analyze(d).then(function (e) {
      var t = e.result,
          o = t.seo,
          a = t.readability;

      if (o) {
        var l = o[""];
        l.results.forEach(function (e) {
          e.getMarker = function () {
            return function () {
              return n(d, e.marks);
            };
          };
        }), l.results = s(l.results), c.dispatch(Object(r.setSeoResultsForKeyword)(d.getKeyword(), l.results)), c.dispatch(Object(r.setOverallSeoScore)(l.score, d.getKeyword())), c.dispatch(Object(i.h)()), u.saveScores(l.score, d.getKeyword());
      }

      a && (a.results.forEach(function (e) {
        e.getMarker = function () {
          return function () {
            return n(d, e.marks);
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

  var d = "<yoastmark class='yoast-text-mark'>",
      l = [],
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
    var e = l.shift();
    e && (Object(s.dispatch)("core/annotations").__experimentalAddAnnotation(e), b());
  }

  function b() {
    Object(o.isFunction)(window.requestIdleCallback) ? window.requestIdleCallback(g, {
      timeout: 1e3
    }) : setTimeout(g, 150);
  }

  function m() {
    return Object(s.select)("core/block-editor") && Object(o.isFunction)(Object(s.select)("core/block-editor").getBlocks) && Object(s.select)("core/annotations") && Object(o.isFunction)(Object(s.dispatch)("core/annotations").__experimentalAddAnnotation);
  }

  function y(e) {
    var t = Object(s.select)("yoast-seo/editor").getActiveMarker(),
        n = f[t] || p;
    return n.hasOwnProperty(e) ? n[e] : [];
  }

  function w(e, t, n) {
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
          for (var t = e.indexOf(d), n = null, r = []; t >= 0;) {
            if ((n = (e = e.replace(d, "")).indexOf("</yoastmark>")) < t) return [];
            e = e.replace("</yoastmark>", ""), r.push({
              startOffset: t,
              endOffset: n
            }), t = e.indexOf(d), n = null;
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

  function h(e) {
    l = e.map(function (e) {
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
    if (l = [], Object(s.dispatch)("core/annotations").__experimentalRemoveAnnotationsBySource("yoast"), 0 !== t.length) {
      var n = Object(s.select)("core/block-editor").getBlocks();
      h(Object(o.flatMap)(n, function (e) {
        return Object(o.flatMap)(y(e.name), function (n) {
          return w(n, e, t);
        });
      })), b();
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
        h(Object(o.flatMap)(y(e.name), function (t) {
          return w(t, e, i);
        })), b();
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

  function d() {
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
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d(),
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
    return l;
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
      d = n(83);

  function l() {
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
      enabledFeatures: Object(d.enabledFeatures)()
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
      d = {
    classicEditorHidden: s.noop,
    classicEditorShown: s.noop,
    pageBuilderLoaded: s.noop
  },
      l = function () {
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
        this.callbacks = Object(s.defaults)(e, d), this.diviActive && new c().listen(e);
      }
    }, {
      key: "isClassicEditorHidden",
      value: function value() {
        return !(!this.diviActive || !c.isTinyMCEHidden());
      }
    }]), e;
  }();

  t.a = l;
},,,,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
  "use strict";

  n.d(t, "a", function () {
    return d;
  });

  var r = n(34),
      i = n.n(r),
      o = n(5),
      a = n.n(o),
      s = n(7),
      c = n.n(s),
      u = n(2),
      d = function () {
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
        var d = e(n);
        d.click(function (e) {
          e.preventDefault(), u.open();
        }), d.siblings(".wpseo_image_remove_button").on("click", function (e) {
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
          d = ["term_title", "term_description"],
          l = ["category", "category_description", "tag", "tag_description"];
      t.hasClass("posttype-template") ? o = o.concat(u, d) : t.hasClass("homepage-template") ? o = o.concat(a, s, c, u, d, l) : t.hasClass("taxonomy-template") ? o = o.concat(a, s, c, u) : t.hasClass("author-template") ? o = o.concat(c, s, u, d, l) : t.hasClass("date-template") ? o = o.concat(a, c, u, d, l) : t.hasClass("search-template") ? o = o.concat(a, s, c, d, l, ["term404"]) : t.hasClass("error404-template") && (o = o.concat(a, s, c, d, l, ["searchphrase"])), e.each(o, function (o, a) {
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
          d = e("#opengraph"),
          l = e("#wpseo-opengraph-settings");
      d.length && l.length && (l.toggle(d[0].checked), d.change(function (e) {
        l.toggle(e.target.checked);
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
      d = n(22),
      l = n(25);

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
      b = n(113),
      m = n(2);

  function y() {
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

  function w(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? w(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach(function (t) {
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

  function E(e) {
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

  var _ = {
    openedModal: ""
  },
      j = n(67);

  function S(e, t) {
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
      t % 2 ? S(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var D = {
    estimatedReadingTime: 0
  },
      P = n(49);

  function A(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? A(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var I = {
    title: "",
    description: "",
    warnings: [],
    image: {
      url: "",
      id: ""
    }
  },
      R = n(60),
      C = n(59),
      x = n(75);

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

  function K() {
    var e = Object(F.a)();
    return 1 === Object(m.get)(e, "semrushIntegrationActive", 0);
  }

  function Y() {
    var e = Object(F.a)();
    return 1 === Object(m.get)(e, "zapierIntegrationActive", 0);
  }

  function W() {
    var e = Object(F.a)();
    return 1 === Object(m.get)(e, "zapierConnectedStatus", 0);
  }

  function V() {
    var e,
        t = !!window.wpseoAdminL10n.displayAdvancedTab;
    return {
      isContentAnalysisActive: Object(L.a)(),
      isKeywordAnalysisActive: Object(U.a)(),
      isWordFormRecognitionActive: Object(m.isUndefined)(window.wpseoPremiumMetaboxData) && B(),
      isCornerstoneActive: (e = Object(F.a)(), 1 === Object(m.get)(e, "cornerstoneActive", 0)),
      isBreadcrumbsDisabled: !!window.wpseoAdminL10n.isBreadcrumbsDisabled,
      isPrivateBlog: !!window.wpseoAdminL10n.isPrivateBlog,
      isSEMrushIntegrationActive: K(),
      shouldUpsell: Object(m.isUndefined)(window.wpseoPremiumMetaboxData),
      displayAdvancedTab: t,
      displaySchemaSettings: t && !!window.wpseoScriptData.isPost,
      displaySchemaSettingsFooter: window.wpseoScriptData.metabox.schema.displayFooter,
      displayFacebook: window.wpseoScriptData.metabox.showSocial.facebook,
      displayTwitter: window.wpseoScriptData.metabox.showSocial.twitter,
      isZapierIntegrationActive: Y(),
      isZapierConnected: W()
    };
  }

  var G = n(76);

  function H(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function q(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var Q = {},
      z = n(56);

  function X(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function J(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? X(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var Z = {
    pageType: "",
    defaultPageType: "",
    articleType: "",
    defaultArticleType: ""
  },
      $ = {
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
      de = n(48);

  function le(e, t) {
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
      t % 2 ? le(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach(function (t) {
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

  function be(e, t) {
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
      t % 2 ? be(Object(n), !0).forEach(function (t) {
        o()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var ye = {
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
    analysis: d.analysis,
    analysisData: function analysisData() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case l.UPDATE_SNIPPET_DATA:
          return f(f({}, e), {}, {
            snippet: t.data
          });

        case l.RUN_ANALYSIS:
          return f(f({}, e), {}, {
            timestamp: t.timestamp
          });
      }

      return e;
    },
    dismissedAlerts: b.a,
    editorContext: function editorContext() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y();
      return e;
    },
    editorData: function editorData() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case l.SET_EDITOR_DATA_CONTENT:
          return h(h({}, e), {}, {
            content: t.content
          });

        case l.SET_EDITOR_DATA_EXCERPT:
          return h(h({}, e), {}, {
            excerpt: t.excerpt
          });

        case l.SET_EDITOR_DATA_IMAGE_URL:
          return h(h({}, e), {}, {
            imageUrl: t.imageUrl
          });

        case l.SET_EDITOR_DATA_SLUG:
          return h(h({}, e), {}, {
            slug: t.slug
          });

        case l.SET_EDITOR_DATA_TITLE:
          return h(h({}, e), {}, {
            title: t.title
          });
      }

      return e;
    },
    editorModals: function editorModals() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case l.OPEN_EDITOR_MODAL:
          return E(E({}, e), {}, {
            openedModal: t.modalKey
          });

        case l.CLOSE_EDITOR_MODAL:
          return E(E({}, e), {}, {
            openedModal: ""
          });
      }

      return e;
    },
    estimatedReadingTime: function estimatedReadingTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case j.a:
        case j.b:
          return T(T({}, e), {}, {
            estimatedReadingTime: t.estimatedReadingTime
          });

        default:
          return e;
      }
    },
    facebookEditor: function facebookEditor() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case P.b:
          return k(k({}, e), {}, {
            title: t.title,
            description: t.description,
            image: {
              id: t.id,
              url: t.imageUrl
            }
          });

        case P.e:
          return k(k({}, e), {}, {
            title: t.title
          });

        case P.c:
          return k(k({}, e), {}, {
            description: t.description
          });

        case P.d:
          return k(k({}, e), {}, {
            warnings: t.image.warnings,
            image: {
              id: t.image.id,
              url: t.image.url
            }
          });

        case P.a:
          return k(k({}, e), {}, {
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
        case C.c:
          return !e;

        case C.b:
          return t.isCornerstone;

        default:
          return e;
      }
    },
    isMarkerPaused: function isMarkerPaused() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case x.a:
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
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V();
      return e;
    },
    primaryTaxonomies: function primaryTaxonomies() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Q,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case G.a:
          return q(q({}, e), {}, o()({}, t.taxonomy, t.termId));

        default:
          return e;
      }
    },
    schemaTab: function schemaTab() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case z.d:
          return J(J({}, e), {}, {
            pageType: t.pageType
          });

        case z.c:
          return J(J({}, e), {}, {
            articleType: t.articleType
          });

        case z.b:
          return J(J({}, e), {}, {
            pageType: t.pageType,
            defaultPageType: t.defaultPageType
          });

        case z.a:
          return J(J({}, e), {}, {
            articleType: t.articleType,
            defaultArticleType: t.defaultArticleType
          });

        default:
          return e;
      }
    },
    SEMrushModal: function SEMrushModal() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
          t = arguments.length > 1 ? arguments[1] : void 0;

      switch (t.type) {
        case l.MODAL_OPEN_NO_KEYPHRASE:
          return {
            whichModalOpen: "none",
            displayNoKeyphraseMessage: !0
          };

        case l.MODAL_OPEN:
          return {
            whichModalOpen: t.location,
            displayNoKeyphraseMessage: !1
          };

        case l.MODAL_DISMISS:
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
        case de.b:
          return pe(pe({}, e), {}, {
            title: t.title,
            description: t.description,
            image: {
              id: t.id,
              url: t.imageUrl
            }
          });

        case de.e:
          return pe(pe({}, e), {}, {
            title: t.title
          });

        case de.c:
          return pe(pe({}, e), {}, {
            description: t.description
          });

        case de.d:
          return pe(pe({}, e), {}, {
            image: {
              id: t.image.id,
              url: t.image.url
            },
            warnings: t.image.warnings
          });

        case de.a:
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
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ye,
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
      d = {},
      l = function l(e, t) {
    this._app = e, this._app.registerPlugin("replaceVariablePlugin", {
      status: "ready"
    }), this._store = t, this.replaceVariables = this.replaceVariables.bind(this), this.registerReplacements(), this.registerModifications(), this.registerEvents(), this.subscribeToGutenberg();
  };

  l.prototype.registerReplacements = function () {
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
  }, l.prototype.registerEvents = function () {
    var e = wpseoScriptData.analysis.plugins.replaceVars.scope;
    "post" === e && jQuery(".categorydiv").each(this.bindTaxonomyEvents.bind(this)), "post" !== e && "page" !== e || jQuery("#postcustomstuff > #list-table").each(this.bindFieldEvents.bind(this));
  }, l.prototype.subscribeToGutenberg = function () {
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
  }, l.prototype.addReplacement = function (e) {
    u[e.placeholder] = e;
  }, l.prototype.removeReplacement = function (e) {
    delete u[e.getPlaceholder()];
  }, l.prototype.registerModifications = function () {
    var e = this.replaceVariables.bind(this);
    Object(i.forEach)(c, function (t) {
      this._app.registerModification(t, e, "replaceVariablePlugin", 10);
    }.bind(this));
  }, l.prototype.replaceVariables = function (e) {
    return Object(i.isUndefined)(e) || (e = this.parentReplace(e), e = this.replaceCustomTaxonomy(e), e = this.replaceByStore(e), e = this.replacePlaceholders(e)), e;
  }, l.prototype.replaceByStore = function (e) {
    var t = this._store.getState().snippetEditor.replacementVariables;

    return Object(i.forEach)(t, function (t) {
      "" !== t.value && (e = e.replace("%%" + t.name + "%%", t.value));
    }), e;
  }, l.prototype.getReplacementSource = function (e) {
    return "app" === e.source ? this._app.rawData : "direct" === e.source ? "direct" : wpseoScriptData.analysis.plugins.replaceVars.replace_vars;
  }, l.prototype.getReplacement = function (e) {
    var t = this.getReplacementSource(e.options);
    return !1 === e.inScope(wpseoScriptData.analysis.plugins.replaceVars.scope) ? "" : "direct" === t ? e.replacement : t[e.replacement] || "";
  }, l.prototype.replacePlaceholders = function (e) {
    return Object(i.forEach)(u, function (t) {
      e = e.replace(new RegExp(t.getPlaceholder(!0), "g"), this.getReplacement(t));
    }.bind(this)), e;
  }, l.prototype.declareReloaded = function () {
    this._app.pluginReloaded("replaceVariablePlugin"), this._store.dispatch(Object(a.h)());
  }, l.prototype.getCategoryName = function (e) {
    var t = e.parent("label").clone();
    return t.children().remove(), t.text().trim();
  }, l.prototype.parseTaxonomies = function (e, t) {
    Object(i.isUndefined)(d[t]) && (d[t] = {});
    var n = [];
    Object(i.forEach)(e, function (e) {
      var r = (e = jQuery(e)).val(),
          i = this.getCategoryName(e),
          o = e.prop("checked");
      d[t][r] = {
        label: i,
        checked: o
      }, o && -1 === n.indexOf(i) && n.push(i);
    }.bind(this)), "category" !== t && (t = "ct_" + t), this._store.dispatch(Object(a.l)(t, n.join(", ")));
  }, l.prototype.getAvailableTaxonomies = function (e) {
    var t = jQuery(e).find("input[type=checkbox]"),
        n = jQuery(e).attr("id").replace("taxonomy-", "");
    t.length > 0 && this.parseTaxonomies(t, n), this.declareReloaded();
  }, l.prototype.bindTaxonomyEvents = function (e, t) {
    (t = jQuery(t)).on("wpListAddEnd", ".categorychecklist", this.getAvailableTaxonomies.bind(this, t)), t.on("change", "input[type=checkbox]", this.getAvailableTaxonomies.bind(this, t)), this.getAvailableTaxonomies(t);
  }, l.prototype.replaceCustomTaxonomy = function (e) {
    return Object(i.forEach)(d, function (t, n) {
      var r = "%%ct_" + n + "%%";
      "category" === n && (r = "%%" + n + "%%"), e = e.replace(r, this.getTaxonomyReplaceVar(n));
    }.bind(this)), e;
  }, l.prototype.getTaxonomyReplaceVar = function (e) {
    var t = [],
        n = d[e];
    return !0 === Object(i.isUndefined)(n) ? "" : (Object(i.forEach)(n, function (e) {
      !1 !== e.checked && t.push(e.label);
    }), jQuery.unique(t).join(", "));
  }, l.prototype.parseFields = function (e) {
    jQuery(e).each(function (e, t) {
      var n = jQuery("#" + t.id + "-key").val(),
          i = jQuery("#" + t.id + "-value").val(),
          o = "cf_" + this.sanitizeCustomFieldNames(n),
          s = n + " (custom field)";
      this._store.dispatch(Object(a.l)(o, i, s)), this.addReplacement(new r.a("%%".concat(o, "%%"), i, {
        source: "direct"
      }));
    }.bind(this));
  }, l.prototype.removeFields = function (e) {
    jQuery(e).each(function (e, t) {
      var n = jQuery("#" + t.id + "-key").val();
      this.removeReplacement("%%cf_" + this.sanitizeCustomFieldNames(n) + "%%");
    }.bind(this));
  }, l.prototype.sanitizeCustomFieldNames = function (e) {
    return e.replace(/\s/g, "_");
  }, l.prototype.getAvailableFields = function (e) {
    this.removeCustomFields();
    var t = jQuery(e).find("#the-list > tr:visible[id]");
    t.length > 0 && this.parseFields(t), this.declareReloaded();
  }, l.prototype.bindFieldEvents = function (e, t) {
    var n = (t = jQuery(t)).find("#the-list");
    n.on("wpListDelEnd.wpseoCustomFields", this.getAvailableFields.bind(this, t)), n.on("wpListAddEnd.wpseoCustomFields", this.getAvailableFields.bind(this, t)), n.on("input.wpseoCustomFields", ".textarea", this.getAvailableFields.bind(this, t)), n.on("click.wpseoCustomFields", ".button + .updatemeta", this.getAvailableFields.bind(this, t)), this.getAvailableFields(t);
  }, l.prototype.removeCustomFields = function () {
    var e = Object(i.filter)(u, function (e, t) {
      return t.indexOf("%%cf_") > -1;
    });
    Object(i.forEach)(e, function (e) {
      this._store.dispatch(Object(a.i)(Object(i.trim)(e.placeholder, "%%"))), this.removeReplacement(e);
    }.bind(this));
  }, l.prototype.parentReplace = function (e) {
    var t = jQuery("#parent_id, #parent").eq(0);
    return this.hasParentTitle(t) && (e = e.replace(/%%parent_title%%/, this.getParentTitleReplacement(t))), Object(s.a)() && !Object(i.isUndefined)(this._currentParentPageTitle) && (e = e.replace(/%%parent_title%%/, this._currentParentPageTitle)), e;
  }, l.prototype.hasParentTitle = function (e) {
    return !Object(i.isUndefined)(e) && !Object(i.isUndefined)(e.prop("options"));
  }, l.prototype.getParentTitleReplacement = function (e) {
    var t = e.find("option:selected").text();
    return t === wpseoScriptData.analysis.plugins.replaceVars.no_parent_text ? "" : t;
  }, l.ReplaceVar = r.a, t.a = l;
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
    return d;
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

  function d() {
    return Object(i.select)("yoast-seo/editor").isMarkingAvailable() ? u : r.noop;
  }
}, function (e, t) {
  e.exports = window.wp.annotations;
},,,,,,, function (e, t) {
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
    var d = e.getData(),
        l = null;
    c && (l = (l = c.getBlocks()).map(function (e) {
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
      text: d.content,
      keyword: u.focusKeyword,
      synonyms: u.synonyms,
      description: u.analysisData.snippet.description || u.snippetEditor.data.description,
      title: u.analysisData.snippet.title || u.snippetEditor.data.title,
      url: u.snippetEditor.data.slug,
      permalink: u.settings.snippetEditor.baseUrl + u.snippetEditor.data.slug,
      wpBlocks: l
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
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (e, t, n) {
  "use strict";

  n.r(t);

  var r = n(186),
      i = n.n(r),
      o = n(21),
      a = n.n(o),
      s = n(187),
      c = n(23),
      u = n(22),
      d = n(121),
      l = n(2),
      p = n(38),
      f = n(151),
      g = n(167),
      b = n(165),
      m = n(109),
      y = n(105),
      w = n(118),
      h = n(86),
      O = n(188),
      v = n(42),
      E = n(97),
      _ = n(55),
      j = n(65),
      S = n(106),
      T = n(10),
      D = n.n(T),
      P = n(34),
      A = n.n(P),
      k = n(71);

  function I(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function R(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? I(Object(n), !0).forEach(function (t) {
        D()(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  var C = jQuery,
      x = function x(e) {
    "object" === ("undefined" == typeof CKEDITOR ? "undefined" : A()(CKEDITOR)) && console.warn("YoastSEO currently doesn't support ckEditor. The content analysis currently only works with the HTML editor or TinyMCE."), this._store = e.store;
  };

  x.prototype.getData = function () {
    var e = {
      title: this.getTitle(),
      keyword: Object(_.a)() ? this.getKeyword() : "",
      text: this.getText(),
      meta: this.getMeta(),
      url: this.getUrl(),
      permalink: this.getPermalink(),
      snippetCite: this.getSnippetCite(),
      snippetTitle: this.getSnippetTitle(),
      snippetMeta: this.getSnippetMeta(),
      name: this.getName(),
      baseUrl: this.getBaseUrl(),
      pageTitle: this.getPageTitle(),
      titleWidth: Object(k.a)(this.getTitle())
    },
        t = this._store.getState(),
        n = {
      metaTitle: Object(l.get)(t, ["analysisData", "snippet", "title"], this.getSnippetTitle()),
      url: Object(l.get)(t, ["snippetEditor", "data", "slug"], this.getUrl()),
      meta: Object(l.get)(t, ["analysisData", "snippet", "description"], this.getSnippetMeta())
    };

    return R(R({}, e), n);
  }, x.prototype.getTitle = function () {
    return document.getElementById("hidden_wpseo_title").value;
  }, x.prototype.getKeyword = function () {
    var e, t;
    return "" === (t = (e = document.getElementById("hidden_wpseo_focuskw")).value) && (t = document.getElementById("name").value, e.placeholder = t), t;
  }, x.prototype.getText = function () {
    return p.getContentTinyMce(p.termsTmceId);
  }, x.prototype.getMeta = function () {
    var e = "",
        t = document.getElementById("hidden_wpseo_desc");
    return null !== t && (e = t.value), e;
  }, x.prototype.getUrl = function () {
    return document.getElementById("slug").value;
  }, x.prototype.getPermalink = function () {
    var e = this.getUrl();
    return this.getBaseUrl() + e + "/";
  }, x.prototype.getSnippetCite = function () {
    return this.getUrl();
  }, x.prototype.getSnippetTitle = function () {
    return document.getElementById("hidden_wpseo_title").value;
  }, x.prototype.getSnippetMeta = function () {
    var e = "",
        t = document.getElementById("hidden_wpseo_desc");
    return null !== t && (e = t.value), e;
  }, x.prototype.getName = function () {
    return document.getElementById("name").value;
  }, x.prototype.getBaseUrl = function () {
    return wpseoScriptData.metabox.base_url;
  }, x.prototype.getPageTitle = function () {
    return document.getElementById("hidden_wpseo_title").value;
  }, x.prototype.setDataFromSnippet = function (e, t) {
    switch (t) {
      case "snippet_meta":
        document.getElementById("hidden_wpseo_desc").value = e;
        break;

      case "snippet_cite":
        document.getElementById("slug").value = e;
        break;

      case "snippet_title":
        document.getElementById("hidden_wpseo_title").value = e;
    }
  }, x.prototype.saveSnippetData = function (e) {
    this.setDataFromSnippet(e.title, "snippet_title"), this.setDataFromSnippet(e.urlPath, "snippet_cite"), this.setDataFromSnippet(e.metaDesc, "snippet_meta");
  }, x.prototype.bindElementEvents = function (e) {
    this.inputElementEventBinder(e);
  }, x.prototype.inputElementEventBinder = function (e) {
    for (var t = ["name", p.termsTmceId, "slug", "wpseo_focuskw"], n = 0; n < t.length; n++) {
      null !== document.getElementById(t[n]) && document.getElementById(t[n]).addEventListener("input", e);
    }

    p.tinyMceEventBinder(e, p.termsTmceId);
  }, x.prototype.saveScores = function (e) {
    var t = Object(v.a)(e);
    document.getElementById("hidden_wpseo_linkdex").value = e, jQuery(window).trigger("YoastSEO:numericScore", e), Object(m.a)(t), Object(y.a)(t);
  }, x.prototype.saveContentScore = function (e) {
    var t = Object(v.a)(e);
    Object(_.a)() || (Object(m.a)(t), Object(y.a)(t)), C("#hidden_wpseo_content_score").val(e);
  }, x.prototype.initKeywordTabTemplate = function () {
    C(".wpseo-metabox-tabs").on("click", ".wpseo_tablink", function (e) {
      e.preventDefault();
    });
  };
  var M = x,
      N = n(189),
      L = n(178),
      U = n(104),
      F = n(72),
      B = n(17),
      K = n(61),
      Y = n(60),
      W = n(59),
      V = n(190);

  function G(e, t, n) {
    var r,
        i,
        o,
        a = new N.a();

    function s() {
      var e = {
        slug: i.val()
      };
      window.YoastSEO.store.dispatch(Object(B.k)(e));
    }

    function T(e) {
      Object(l.isUndefined)(e.seoAssessorPresenter) || (e.seoAssessorPresenter.render = function () {}), Object(l.isUndefined)(e.contentAssessorPresenter) || (e.contentAssessorPresenter.render = function () {}, e.contentAssessorPresenter.renderIndividualRatings = function () {});
    }

    function D(e, t) {
      var n = o || "";
      o = e.getState().analysisData.snippet, !Object(d.isShallowEqualObjects)(n, o) && t();
    }

    !function () {
      var o, d, P, A, k, I, R, C, x, N, K;
      A = jQuery(".term-description-wrap").find("td"), k = jQuery(".term-description-wrap").find("label"), I = A.find("textarea").val(), R = document.getElementById("wp-description-wrap"), C = A.find("p"), A.html(""), A.append(R).append(C), document.getElementById("description").value = I, k.replaceWith(k.html()), d = new M({
        store: t
      }), o = {
        elementTarget: [p.termsTmceId, "yoast_wpseo_focuskw", "yoast_wpseo_metadesc", "excerpt", "editable-post-name", "editable-post-name-full"],
        targets: (x = {}, Object(_.a)() && (x.output = "does-not-really-exist-but-it-needs-something"), Object(j.a)() && (x.contentOutput = "also-does-not-really-exist-but-it-needs-something"), x),
        callbacks: {
          getData: d.getData.bind(d)
        },
        locale: wpseoScriptData.metabox.contentLocale,
        contentAnalysisActive: Object(j.a)(),
        keywordAnalysisActive: Object(_.a)(),
        hasSnippetPreview: !1,
        debouncedRefresh: !1,
        researcher: new window.yoast.Researcher["default"]()
      }, Object(_.a)() && (t.dispatch(Object(Y.d)(d.getKeyword())), o.callbacks.saveScores = d.saveScores.bind(d), o.callbacks.updatedKeywordsResults = function (e) {
        var n = t.getState().focusKeyword;
        t.dispatch(Object(u.setSeoResultsForKeyword)(n, e)), t.dispatch(Object(B.h)());
      }), Object(j.a)() && (o.callbacks.saveContentScore = d.saveContentScore.bind(d), o.callbacks.updatedContentResults = function (e) {
        t.dispatch(Object(u.setReadabilityResults)(e)), t.dispatch(Object(B.h)());
      }), P = Object(E.a)(), Object(l.isUndefined)(P) || Object(l.isUndefined)(P.domain) || (o.translations = P), r = new c.App(o), window.YoastSEO = window.YoastSEO || {}, window.YoastSEO.app = r, window.YoastSEO.store = t, window.YoastSEO.analysis = {}, window.YoastSEO.analysis.worker = Object(w.a)(), window.YoastSEO.analysis.collectData = function () {
        return Object(O.a)(n, window.YoastSEO.store, a, window.YoastSEO.app.pluggable);
      }, window.YoastSEO.analysis.applyMarks = function (e, t) {
        return Object(L.a)()(e, t);
      }, window.YoastSEO.app.refresh = Object(l.debounce)(function () {
        return Object(h["default"])(window.YoastSEO.analysis.worker, window.YoastSEO.analysis.collectData, window.YoastSEO.analysis.applyMarks, window.YoastSEO.store, d);
      }, U.refreshDelay), window.YoastSEO.app.registerCustomDataCallback = a.register, window.YoastSEO.app.pluggable = new f.a(window.YoastSEO.app.refresh), window.YoastSEO.app.registerPlugin = window.YoastSEO.app.pluggable._registerPlugin, window.YoastSEO.app.pluginReady = window.YoastSEO.app.pluggable._ready, window.YoastSEO.app.pluginReloaded = window.YoastSEO.app.pluggable._reloaded, window.YoastSEO.app.registerModification = window.YoastSEO.app.pluggable._registerModification, window.YoastSEO.app.registerAssessment = function (e, t, n) {
        if (!Object(l.isUndefined)(r.seoAssessor)) return window.YoastSEO.app.pluggable._registerAssessment(r.defaultSeoAssessor, e, t, n) && window.YoastSEO.app.pluggable._registerAssessment(r.cornerStoneSeoAssessor, e, t, n);
      }, window.YoastSEO.app.changeAssessorOptions = function (e) {
        window.YoastSEO.analysis.worker.initialize(e)["catch"](F.a), window.YoastSEO.app.refresh();
      }, Object(V.a)(r.refresh, "get_term_keyword_usage", t), t.subscribe(D.bind(null, t, r.refresh)), Object(_.a)() && (r.seoAssessor = new c.TaxonomyAssessor(r.i18n, r.config.researcher), r.seoAssessorPresenter.assessor = r.seoAssessor), d.initKeywordTabTemplate(), window.YoastSEO.wp = {}, window.YoastSEO.wp.replaceVarsPlugin = new b.a(r, t), window.YoastSEO.analyzerArgs = o, (i = e("#slug")).on("change", s), d.bindElementEvents(Object(l.debounce)(function () {
        return Object(h["default"])(window.YoastSEO.analysis.worker, window.YoastSEO.analysis.collectData, window.YoastSEO.analysis.applyMarks, window.YoastSEO.store, d);
      }, U.refreshDelay)), Object(_.a)() && function (t) {
        var n = e("#hidden_wpseo_linkdex").val();
        t.initKeywordTabTemplate();
        var r = Object(v.a)(n);
        Object(m.a)(r), Object(y.a)(r);
      }(d), Object(j.a)() && (N = e("#hidden_wpseo_content_score").val(), K = Object(v.a)(N), Object(m.a)(K), Object(y.a)(K)), window.YoastSEO.analysis.worker.initialize(Object(w.b)({
        useTaxonomy: !0
      })).then(function () {
        jQuery(window).trigger("YoastSEO:ready");
      })["catch"](F.a), T(r);
      var G = r.initAssessorPresenters.bind(r);

      r.initAssessorPresenters = function () {
        G(), T(r);
      };

      var H,
          q,
          Q,
          z = S.a.getDataFromCollector(d);
      H = r, q = document.getElementById("hidden_wpseo_is_cornerstone"), Q = "1" === q.value, t.dispatch(Object(W.e)(Q)), H.changeAssessorOptions({
        useCornerstone: Q
      }), t.subscribe(function () {
        var e = t.getState();
        e.isCornerstone !== Q && (Q = e.isCornerstone, q.value = Q ? "1" : "0", H.changeAssessorOptions({
          useCornerstone: Q
        }));
      });
      var X = S.a.getTemplatesFromL10n(wpseoScriptData.metabox);
      z = S.a.getDataWithTemplates(z, X), t.dispatch(Object(B.k)(z));
      var J = t.getState().focusKeyword;
      Object(g.a)(window.YoastSEO.analysis.worker.runResearch, window.YoastSEO.store, J);
      var Z = Object(l.debounce)(function () {
        r.refresh();
      }, 50);
      t.subscribe(function () {
        var e = t.getState().focusKeyword;
        J !== e && (J = e, Object(g.a)(window.YoastSEO.analysis.worker.runResearch, window.YoastSEO.store, J), document.getElementById("hidden_wpseo_focuskw").value = J, Z());
        var n = S.a.getDataFromStore(t),
            r = S.a.getDataWithoutTemplates(n, X);
        z.title !== n.title && d.setDataFromSnippet(r.title, "snippet_title"), z.slug !== n.slug && d.setDataFromSnippet(r.slug, "snippet_cite"), z.description !== n.description && d.setDataFromSnippet(r.description, "snippet_meta"), z.title = n.title, z.slug = n.slug, z.description = n.description;
      }), Object(h.initializationDone)(), window.YoastSEO.app.refresh();
    }();
  }

  Object(K.setYoastComponentsL10n)(), Object(K.setWordPressSeoL10n)(), window.yoastHideMarkers = !0, window.YoastReplaceVarPlugin = b.a;
  var H = n(154),
      q = n(155),
      Q = n(191);
  i()(function () {
    window.wpseoTermScraperL10n = window.wpseoScriptData.metabox, Object(q.a)(a.a), Object(s.a)(a.a);
    var e = Object(Q.a)();
    window.yoast.initEditorIntegration(e);
    var t = new window.yoast.EditorData(function () {}, e, p.termsTmceId);
    t.initialize(window.wpseoScriptData.analysis.plugins.replaceVars.replace_vars), G(a.a, e, t), Object(H.a)(a.a);
  });
}]);