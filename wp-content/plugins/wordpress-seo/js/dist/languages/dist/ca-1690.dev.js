"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var a = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      r.d(n, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 48);
}({
  0: function _(e, t) {
    e.exports = window.yoast.analysis;
  },
  1: function _(e, t) {
    function r(t) {
      return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(t);
    }

    e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  3: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  4: function _(e, t, r) {
    var n = r(8);
    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && n(e, t);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  48: function _(e, t, r) {
    "use strict";

    r.r(t), r.d(t, "default", function () {
      return y;
    });
    var n = r(3),
        a = r.n(n),
        o = r(4),
        s = r.n(o),
        u = r(5),
        l = r.n(u),
        i = r(1),
        c = r.n(i),
        p = r(0),
        d = ["abans", "així", "alhora", "aleshores", "altrament", "anteriorment", "breument", "bàsicament", "contràriament", "després", "doncs", "efectivament", "endemés", "especialment", "evidentment", "finalment", "fins a", "fins que", "generalment", "igualment", "malgrat", "mentre", "mentrestant", "parallelament", "paral·lelament", "però", "perquè", "quan", "primerament", "resumidament", "resumint", "segurament", "segons això", "sens dubte", "sinó", "sobretot", "també", "tanmateix"].concat(["a banda d'això", "a continuació", "a diferència de", "a fi de", "a fi que", "a força de", "a manera de resum", "a més", "a partir d'aquí", "a partir d'ara", "a tall d'exemple", "a tall de recapitulació", "a tall de resum", "al capdavall", "al contrari", "al mateix temps", "amb relació a", "tot plegat", "ara bé", "atès que", "com a conseqüència", "com a exemple", "com a resultat", "com a resum", "com que", "comptat i debatut", "considerant que", "convé destacar", "convé recalcar", "convé ressaltar que", "d'altra banda", "d’una banda", "d’una forma breu", "de la mateixa manera", "de manera parallela", "de manera paral·lela", "de manera que", "de tota manera", "degut a", "deixant de banda", "dit d'una altra manera", "donat que", "en a resum", "en lloc de", "en altres paraules", "en aquest sentit", "en canvi", "en conclusió", "en conjunt", "en conseqüència", "encara que", "en darrer lloc", "en darrer terme", "en definitiva", "en efecte", "en general", "en particular", "en pocs mots", "en poques paraules", "en primer lloc", "en relació amb", "en resum", "en segon lloc", "en síntesi", "en suma", "en tercer lloc", "en últim terme", "és a dir", "és més", "és per això que", "fins i tot", "gràcies a", "gràcies de", "igual com", "igual que", "ja que", "llevat que", "més aviat", "més tard", "més endavant", "no obstant", "o sia", "o sigui", "òbviament", "pel fet que", "pel general", "pel que", "per acabar", "per això", "per altra banda", "per aquest motiu", "per causa de", "per causa que", "per cert", "per començar", "per concloure", "per concretar", "per contra", "per exemple", "per illustrar", "per il·lustrar", "per l'altra part", "per l'altre cantó", "per la qual cosa", "per mitjà de", "per posar un exemple", "per raó de", "per raó que", "per tal de", "per tal que", "per tant", "per últim", "per un cantó", "per un costat", "per una altra banda", "per una part", "quant a", "recapitulant", "respecte de", "s'ha de tenir en compte que", "sempre que", "tal com s’ha dit", "tan bon punt", "tan aviat com", "tenint en compte que", "tot i", "tot seguit", "val a dir", "val la pena dir que", "vist que"]),
        f = [["ara", "ara"], ["ni", "ni"]],
        m = {
      recommendedWordCount: 25,
      slightlyTooMany: 25,
      farTooMany: 30
    },
        x = p.languageProcessing.baseStemmer;

    function b() {
      return x;
    }

    var y = function (e) {
      s()(o, e);
      var t,
          r,
          n = (t = o, r = function () {
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
            n = c()(t);

        if (r) {
          var a = c()(this).constructor;
          e = Reflect.construct(n, arguments, a);
        } else e = n.apply(this, arguments);

        return l()(this, e);
      });

      function o(e) {
        var t;
        return a()(this, o), delete (t = n.call(this, e)).defaultResearches.getFleschReadingScore, delete t.defaultResearches.getPassiveVoiceResult, delete t.defaultResearches.getSentenceBeginnings, delete t.defaultResearches.functionWordsInKeyphrase, Object.assign(t.config, {
          language: "ca",
          functionWords: [],
          transitionWords: d,
          twoPartTransitionWords: f,
          sentenceLength: m
        }), Object.assign(t.helpers, {
          getStemmer: b
        }), t;
      }

      return o;
    }(p.languageProcessing.AbstractResearcher);
  },
  5: function _(e, t, r) {
    var n = r(6)["default"],
        a = r(9);
    e.exports = function (e, t) {
      return !t || "object" !== n(t) && "function" != typeof t ? a(e) : t;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  6: function _(e, t) {
    function r(t) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = r = function r(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = r = function r(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), r(t);
    }

    e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  8: function _(e, t) {
    function r(t, n) {
      return e.exports = r = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(t, n);
    }

    e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  9: function _(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  }
});