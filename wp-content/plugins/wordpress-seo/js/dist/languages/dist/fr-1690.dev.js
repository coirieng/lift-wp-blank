"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var i = {};

  function t(s) {
    if (i[s]) return i[s].exports;
    var r = i[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
  }

  return t.m = e, t.c = i, t.d = function (e, i, s) {
    t.o(e, i) || Object.defineProperty(e, i, {
      enumerable: !0,
      get: s
    });
  }, t.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, t.t = function (e, i) {
    if (1 & i && (e = t(e)), 8 & i) return e;
    if (4 & i && "object" == _typeof(e) && e && e.__esModule) return e;
    var s = Object.create(null);
    if (t.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & i && "string" != typeof e) for (var r in e) {
      t.d(s, r, function (i) {
        return e[i];
      }.bind(null, r));
    }
    return s;
  }, t.n = function (e) {
    var i = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return t.d(i, "a", i), i;
  }, t.o = function (e, i) {
    return Object.prototype.hasOwnProperty.call(e, i);
  }, t.p = "", t(t.s = 35);
}([function (e, i) {
  e.exports = window.yoast.analysis;
}, function (e, i) {
  function t(i) {
    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, t(i);
  }

  e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  e.exports = window.lodash;
}, function (e, i) {
  e.exports = function (e, i) {
    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i, t) {
  var s = t(8);
  e.exports = function (e, i) {
    if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(i && i.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), i && s(e, i);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i, t) {
  var s = t(6)["default"],
      r = t(9);
  e.exports = function (e, i) {
    return !i || "object" !== s(i) && "function" != typeof i ? r(e) : i;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  function t(i) {
    return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = t = function t(e) {
      return _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = t = function t(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0), t(i);
  }

  e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  function t(e, i) {
    for (var t = 0; t < i.length; t++) {
      var s = i[t];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  e.exports = function (e, i, s) {
    return i && t(e.prototype, i), s && t(e, s), e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  function t(i, s) {
    return e.exports = t = Object.setPrototypeOf || function (e, i) {
      return e.__proto__ = i, e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, t(i, s);
  }

  e.exports = t, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  e.exports = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},,, function (e, i) {
  e.exports = function (e, i) {
    (null == i || i > e.length) && (i = e.length);

    for (var t = 0, s = new Array(i); t < i; t++) {
      s[t] = e[t];
    }

    return s;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i, t) {
  var s = t(12);
  e.exports = function (e, i) {
    if (e) {
      if ("string" == typeof e) return s(e, i);
      var t = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, i) : void 0;
    }
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},,,, function (e, i, t) {
  var s = t(18),
      r = t(19),
      n = t(13),
      l = t(20);
  e.exports = function (e, i) {
    return s(e) || r(e, i) || n(e, i) || l();
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  e.exports = function (e) {
    if (Array.isArray(e)) return e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  e.exports = function (e, i) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
      var t = [],
          _n = !0,
          s = !1,
          r = void 0;

      try {
        for (var n, l = e[Symbol.iterator](); !(_n = (n = l.next()).done) && (t.push(n.value), !i || t.length !== i); _n = !0) {
          ;
        }
      } catch (e) {
        s = !0, r = e;
      } finally {
        try {
          _n || null == l["return"] || l["return"]();
        } finally {
          if (s) throw r;
        }
      }

      return t;
    }
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, i) {
  e.exports = function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},,,, function (e) {
  e.exports = JSON.parse('{"vowels":"aeiouyàâéèêëîïûüùôæœ","deviations":{"vowels":[{"fragments":["[ptf]aon(ne)?[s]?$"],"countModifier":-1},{"fragments":["aoul","[^eéiïou]e(s|nt)?$","[qg]ue(s|nt)?$"],"countModifier":-1},{"fragments":["o[ëaéèï]"],"countModifier":1},{"fragments":["a[eéèïüo]","é[aâèéiîuo]","ii[oe]","[aeéuo]y[aâeéèoui]","coe[^u]","zoo","coop","coord","poly[ae]","[bcd]ry[oa]","[bcdfgptv][rl](ou|u|i)[aéèouâ]","ouez","[blmnt]uio","uoia","ment$","yua","[bcdfgptv][rl](i|u|eu)e([ltz]|r[s]?$|n[^t])","[^aeiuyàâéèêëîïûüùôæœqg]uie[rz]$"],"countModifier":1}],"words":{"full":[{"word":"ok","syllables":2},{"word":"eyeliner","syllables":3},{"word":"coati","syllables":3},{"word":"que","syllables":1},{"word":"flouer","syllables":2},{"word":"relouer","syllables":3},{"word":"évaluons","syllables":4},{"word":"instituons","syllables":4},{"word":"atténuons","syllables":4},{"word":"remuons","syllables":3},{"word":"redestribuons","syllables":5},{"word":"suons","syllables":2},{"word":"reconstituons","syllables":5},{"word":"dent","syllables":1},{"word":"fréquent","syllables":2},{"word":"permanent","syllables":3},{"word":"mécontent","syllables":3},{"word":"grandiloquent","syllables":4},{"word":"continent","syllables":3},{"word":"occident","syllables":3},{"word":"référent","syllables":3},{"word":"indigent","syllables":3},{"word":"concurrent","syllables":3},{"word":"gent","syllables":1},{"word":"différent","syllables":3},{"word":"strident","syllables":2},{"word":"équivalent","syllables":4},{"word":"ardent","syllables":2},{"word":"impotent","syllables":3},{"word":"argent","syllables":2},{"word":"immanent","syllables":3},{"word":"indécent","syllables":3},{"word":"effluent","syllables":3},{"word":"agent","syllables":2},{"word":"dolent","syllables":2},{"word":"contingent","syllables":3},{"word":"impénitent","syllables":4},{"word":"adjacent","syllables":3},{"word":"incident","syllables":3},{"word":"content","syllables":2},{"word":"incontinent","syllables":4},{"word":"éloquent","syllables":3},{"word":"convent","syllables":2},{"word":"dissident","syllables":3},{"word":"innocent","syllables":3},{"word":"ventripotent","syllables":4},{"word":"convalescent","syllables":4},{"word":"accident","syllables":3},{"word":"récent","syllables":2},{"word":"absent","syllables":2},{"word":"décadent","syllables":3},{"word":"réticent","syllables":3},{"word":"évent","syllables":2},{"word":"souvent","syllables":2},{"word":"intelligent","syllables":3},{"word":"inhérent","syllables":3},{"word":"adolescent","syllables":4},{"word":"couvent","syllables":2},{"word":"cent","syllables":1},{"word":"urgent","syllables":2},{"word":"précédent","syllables":3},{"word":"imprudent","syllables":3},{"word":"torrent","syllables":2},{"word":"abstinent","syllables":3},{"word":"indifférent","syllables":4},{"word":"excédent","syllables":3},{"word":"déférent","syllables":3},{"word":"incandescent","syllables":4},{"word":"intermittent","syllables":4},{"word":"présent","syllables":3},{"word":"astringent","syllables":3},{"word":"trident","syllables":2},{"word":"impertinent","syllables":4},{"word":"détergent","syllables":3},{"word":"évident","syllables":3},{"word":"influent","syllables":3},{"word":"pertinent","syllables":3},{"word":"subséquent","syllables":3},{"word":"féculent","syllables":3},{"word":"déférent","syllables":3},{"word":"ambivalent","syllables":4},{"word":"omnipotent","syllables":4},{"word":"décent","syllables":2},{"word":"compétent","syllables":3},{"word":"adhérent","syllables":3},{"word":"afférent","syllables":3},{"word":"luminescent","syllables":4},{"word":"lent","syllables":1},{"word":"apparent","syllables":3},{"word":"effervescent","syllables":4},{"word":"parent","syllables":2},{"word":"pénitent","syllables":3},{"word":"fluorescent","syllables":3},{"word":"impudent","syllables":3},{"word":"diligent","syllables":3},{"word":"entregent","syllables":3},{"word":"flatulent","syllables":3},{"word":"serpent","syllables":2},{"word":"violent","syllables":2},{"word":"somnolent","syllables":3},{"word":"déliquescent","syllables":4},{"word":"proéminent","syllables":4},{"word":"résident","syllables":3},{"word":"putrescent","syllables":3},{"word":"talent","syllables":2},{"word":"spumescent","syllables":3},{"word":"tangent","syllables":2},{"word":"chiendent","syllables":2},{"word":"négligent","syllables":3},{"word":"antécédent","syllables":4},{"word":"régent","syllables":2},{"word":"polyvalent","syllables":4},{"word":"latent","syllables":2},{"word":"opulent","syllables":3},{"word":"arpent","syllables":2},{"word":"adent","syllables":2},{"word":"concupiscent","syllables":4},{"word":"sanguinolent","syllables":4},{"word":"opalescent","syllables":4},{"word":"prudent","syllables":2},{"word":"conséquent","syllables":3},{"word":"pourcent","syllables":2},{"word":"transparent","syllables":3},{"word":"sergent","syllables":2},{"word":"diligent","syllables":3},{"word":"inconséquent","syllables":4},{"word":"turbulent","syllables":3},{"word":"fervent","syllables":2},{"word":"truculent","syllables":3},{"word":"interférent","syllables":4},{"word":"confluent","syllables":3},{"word":"succulent","syllables":3},{"word":"purulent","syllables":3},{"word":"patent","syllables":2},{"word":"indulgent","syllables":3},{"word":"engoulevent","syllables":4},{"word":"auvent","syllables":2},{"word":"président","syllables":3},{"word":"confident","syllables":3},{"word":"incompétent","syllables":4},{"word":"accent","syllables":2},{"word":"arborescent","syllables":4},{"word":"contrevent","syllables":3},{"word":"cohérent","syllables":3},{"word":"relent","syllables":2},{"word":"insolent","syllables":3},{"word":"virulent","syllables":3},{"word":"rémanent","syllables":3},{"word":"vent","syllables":1},{"word":"turgescent","syllables":3},{"word":"incohérent","syllables":4},{"word":"malcontent","syllables":3},{"word":"lactescent","syllables":3},{"word":"inintelligent","syllables":5},{"word":"omniprésent","syllables":4},{"word":"récurrent","syllables":3},{"word":"covalent","syllables":3},{"word":"éminent","syllables":3},{"word":"onguent","syllables":2},{"word":"indolent","syllables":3},{"word":"event","syllables":2},{"word":"corpulent","syllables":3},{"word":"divergent","syllables":3},{"word":"excellent","syllables":3},{"word":"phosphorescent","syllables":4},{"word":"évanescent","syllables":4},{"word":"paravent","syllables":3},{"word":"avent","syllables":2},{"word":"iridescent","syllables":4},{"word":"prénomment","syllables":2},{"word":"consument","syllables":2},{"word":"dégomment","syllables":2},{"word":"enveniment","syllables":3},{"word":"proclament","syllables":2},{"word":"chôment","syllables":1},{"word":"infirment","syllables":2},{"word":"briment","syllables":1},{"word":"fument","syllables":1},{"word":"acclament","syllables":2},{"word":"referment","syllables":2},{"word":"impriment","syllables":2},{"word":"paument","syllables":1},{"word":"déciment","syllables":2},{"word":"accoutument","syllables":3},{"word":"essaiment","syllables":2},{"word":"ferment","syllables":1},{"word":"dépriment","syllables":2},{"word":"raniment","syllables":2},{"word":"programment","syllables":2},{"word":"fantasment","syllables":2},{"word":"animent","syllables":2},{"word":"affirment","syllables":2},{"word":"filment","syllables":1},{"word":"dament","syllables":1},{"word":"parsèment","syllables":3},{"word":"priment","syllables":1},{"word":"assomment","syllables":2},{"word":"rament","syllables":1},{"word":"pâment","syllables":1},{"word":"conforment","syllables":2},{"word":"embaument","syllables":2},{"word":"calment","syllables":1},{"word":"blasphèment","syllables":2},{"word":"désarment","syllables":2},{"word":"consomment","syllables":2},{"word":"griment","syllables":1},{"word":"abîment","syllables":2},{"word":"blâment","syllables":1},{"word":"endorment","syllables":2},{"word":"allument","syllables":2},{"word":"blâment","syllables":1},{"word":"confirment","syllables":2},{"word":"escriment","syllables":2},{"word":"trament","syllables":1},{"word":"hument","syllables":1},{"word":"surnomment","syllables":2},{"word":"écument","syllables":2},{"word":"triment","syllables":1},{"word":"estiment","syllables":2},{"word":"rallument","syllables":2},{"word":"enflamment","syllables":2},{"word":"riment","syllables":1},{"word":"plument","syllables":1},{"word":"suppriment","syllables":2},{"word":"gomment","syllables":1},{"word":"affament","syllables":2},{"word":"friment","syllables":1},{"word":"clament","syllables":1},{"word":"dorment","syllables":1},{"word":"dénomment","syllables":2},{"word":"entament","syllables":2},{"word":"arriment","syllables":2},{"word":"résument","syllables":2},{"word":"enrhument","syllables":2},{"word":"rendorment","syllables":2},{"word":"compriment","syllables":2},{"word":"aiment","syllables":1},{"word":"rythment","syllables":1},{"word":"périment","syllables":2},{"word":"réclament","syllables":2},{"word":"subliment","syllables":2},{"word":"brument","syllables":1},{"word":"embrument","syllables":2},{"word":"germent","syllables":1},{"word":"renferment","syllables":2},{"word":"sèment","syllables":1},{"word":"reforment","syllables":2},{"word":"liment","syllables":1},{"word":"cament","syllables":1},{"word":"parfument","syllables":2},{"word":"arment","syllables":1},{"word":"brament","syllables":1},{"word":"déforment","syllables":2},{"word":"assument","syllables":2},{"word":"crament","syllables":1},{"word":"exclament","syllables":2},{"word":"forment","syllables":1},{"word":"diffament","syllables":2},{"word":"somment","syllables":1},{"word":"oppriment","syllables":2},{"word":"miment","syllables":1},{"word":"enferment","syllables":2},{"word":"nomment","syllables":1},{"word":"reprogramment","syllables":3},{"word":"transforment","syllables":2},{"word":"expriment","syllables":2},{"word":"informent","syllables":2},{"word":"légitiment","syllables":3},{"word":"de","syllables":1},{"word":"le","syllables":1},{"word":"je","syllables":1},{"word":"te","syllables":1},{"word":"ce","syllables":1},{"word":"ne","syllables":1},{"word":"re","syllables":1},{"word":"me","syllables":1},{"word":"se","syllables":1},{"word":"ses","syllables":1},{"word":"mes","syllables":1},{"word":"mes","syllables":1},{"word":"ces","syllables":1},{"word":"des","syllables":1},{"word":"tes","syllables":1},{"word":"les","syllables":1},{"word":"oye","syllables":1},{"word":"es","syllables":1},{"word":"remerciâmes","syllables":4},{"word":"herniaires","syllables":3},{"word":"autopsiais","syllables":4},{"word":"août","syllables":1}],"fragments":{"global":[{"word":"business","syllables":2},{"word":"skate","syllables":1},{"word":"board","syllables":1},{"word":"coach","syllables":1},{"word":"roadster","syllables":2},{"word":"soap","syllables":1},{"word":"goal","syllables":1},{"word":"coaltar","syllables":2},{"word":"loader","syllables":2},{"word":"coat","syllables":1},{"word":"baseball","syllables":2},{"word":"foëne","syllables":1},{"word":"cacaoyer","syllables":4},{"word":"scoop","syllables":1},{"word":"zoom","syllables":1},{"word":"bazooka","syllables":3},{"word":"tatoueu","syllables":3},{"word":"cloueu","syllables":2},{"word":"déchouer","syllables":2},{"word":"écrouelles","syllables":3},{"word":"maestria","syllables":3},{"word":"maestro","syllables":3},{"word":"vitae","syllables":3},{"word":"paella","syllables":3},{"word":"vae","syllables":2},{"word":"thaï","syllables":1},{"word":"skaï","syllables":1},{"word":"masaï","syllables":2},{"word":"samouraï","syllables":3},{"word":"bonsaï","syllables":2},{"word":"bonzaï","syllables":2},{"word":"aïkido","syllables":3},{"word":"daïquiri","syllables":3},{"word":"pagaïe","syllables":2},{"word":"chiite","syllables":2},{"word":"pays","syllables":2},{"word":"antiaérien","syllables":5},{"word":"bleui","syllables":2},{"word":"remerciai","syllables":4},{"word":"monstrueu","syllables":3},{"word":"niakoué","syllables":3},{"word":"minoen","syllables":3},{"word":"groenlandais","syllables":4},{"word":"remerciant","syllables":4},{"word":"skiant","syllables":2},{"word":"ruade","syllables":2},{"word":"weltanschauung","syllables":4}],"atBeginning":[{"word":"roast","syllables":1},{"word":"taï","syllables":1}],"atEnd":[{"word":"écrouer","syllables":3},{"word":"clouer","syllables":2}]}}}}');
},,,,,,,,,,, function (e, i, t) {
  "use strict";

  t.r(i), t.d(i, "default", function () {
    return ke;
  });

  var s = t(3),
      r = t.n(s),
      n = t(4),
      l = t.n(n),
      a = t(5),
      o = t.n(a),
      u = t(1),
      c = t.n(u),
      d = t(0),
      p = ["le", "la", "les", "un", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "celui", "celle", "ceux", "celles", "celui-ci", "celle-là", "celui-là", "celle-ci"],
      m = ["ainsi", "alors", "aussi", "car", "cependant", "certainement", "certes", "conséquemment", "d'abord", "d'ailleurs", "d'après", "davantage", "désormais", "deuxièmement", "donc", "dorénavant", "effectivement", "également", "enfin", "ensuite", "entre-temps", "essentiellement", "excepté", "finalement", "globalement", "jusqu'ici", "là-dessus", "lorsque", "mais", "malgré", "néanmoins", "notamment", "partant", "plutôt", "pourtant", "précédemment", "premièrement", "probablement", "puis", "puisque", "quoique", "sauf", "selon", "semblablement", "sinon", "suivant", "toutefois", "troisièmement"],
      f = m.concat(["à cause de", "à ce jour", "à ce propos", "à ce sujet", "à cet égard", "à cette fin", "à compter de", "à condition que", "à défaut de", "à force de", "à juste titre", "à la lumière de", "à la suite de", "à l'aide de", "à l'appui de", "à l'encontre de", "à l'époque actuelle", "à l'exception de", "à l'exclusion de", "à l'heure actuelle", "à l'image de", "à l'instar de", "à l'inverse", "à l'inverse de", "à l'opposé", "à la condition que", "à mesure que", "à moins que", "à nouveau", "à partir de", "à première vue", "à savoir", "à seule fin que", "à supposer que", "à tel point que", "à tout prendre", "à vrai dire", "afin de", "afin d'attirer l'attention sur", "afin que", "ainsi donc", "ainsi que", "alors que", "antérieurement", "après cela", "après quoi", "après que", "après réflexion", "après tout", "attendu que", "au cas où", "au contraire", "au fond", "au fur et à mesure", "au lieu de", "au même temps", "au moment où", "au moyen de", "au point que", "au risque de", "au surplus", "au total", "aussi bien que", "aussitôt que", "autant que", "autrement dit", "avant que", "avant tout", "ayant fini", "bien que", "c'est à dire que", "c'est ainsi que", "c'est dans ce but que", "c'est dire", "c'est le cas de", "c'est pour cela que", "c'est la raison pour laquelle", "c'est pourquoi", "c'est qu'en effet", "c'est-à-dire", "ça confirme que", "ça montre que", "ça prouve que", "cela étant", "cela dit", "cependant que", "compte tenu", "comme l'illustre", "comme le souligne", "comme on pouvait s'y attendre", "comme quoi", "comme si", "commençons par examiner", "comparativement à", "conformément à", "contrairement à", "considérons par exemple", "d'autant plus", "d'autant que", "d'autre part", "d'ici là", "d'où", "d'un autre côté", "d'un côté", "d'une façon générale", "dans ce cas", "dans ces conditions", "dans cet esprit", "dans l'ensemble", "dans l'état actuel des choses", "dans l'éventualité où", "dans l'hypothèse où", "dans la mesure où", "dans le but de", "dans le cadre de", "dans le cas où", "dans les circonstances actuelles", "dans les grandes lignes", "dans un autre ordre d'idée", "dans un délai de", "de ce fait", "de cette façon", "de crainte que", "de façon à", "de façon à ce que", "de façon que", "de fait", "de l'autre côté", "de la même manière", "de la même façon que", "de manière que", "de même", "de même qu'à", "de même que", "de nos jours", "de peur que", "de prime abord", "de sorte que", "de surcroît", "de telle manière que", "de telle sorte que", "de toute évidence", "de toute façon", "de toute manière", "depuis que", "dès lors que", "dès maintenant", "dès qua", "dès que", "du fait que", "du moins", "du moment que", "du point de vue de", "du reste", "d'ici là", "d'ores et déjà", "en admettant que", "en attendant que", "en bref", "en cas de", "en cas que", "en ce cas", "en ce domaine", "en ce moment", "en ce qui a trait à", "en ce qui concerne", "en ce sens", "en cela", "en comparaison de", "en conclusion", "en conformité avec", "en conséquence", "en d'autres termes", "en définitive", "en dépit de", "en dernier lieu", "en deuxième lieu", "en effet", "en face de", "en fait", "en fin de compte", "en général", "en guise de conclusion", "en matière de", "en même temps que", "en outre", "en particulier", "en plus", "en premier lieu", "en principe", "en raison de", "en réalité", "en règle générale", "en résumé", "en revanche", "en second lieu", "en somme", "en sorte que", "en supposant que", "en tant que", "en terminant", "en théorie", "en tout cas", "en tout premier lieu", "en troisième lieu", "en un mot", "en vérité", "en vue que", "encore que", "encore une fois", "entre autres", "et même", "et puis", "étant donné qu'à", "étant donné que", "face à", "grâce à", "il est à noter que", "il est indéniable que", "il est question de", "il est vrai que", "il faut dire aussi que", "il faut reconnaître que", "il faut souligner que", "il ne faut pas oublier que", "il s'ensuit que", "il suffit de prendre pour exemple", "jusqu'ici", "il y a aussi", "jusqu'à ce que", "jusqu'à ce jour", "jusqu'à maintenant", "jusqu'à présent", "jusqu'au moment où", "jusqu'ici", "l'aspect le plus important de", "l'exemple le plus significatif", "jusqu'au moment où", "la preuve c'est que", "loin que", "mais en réalité", "malgré cela", "malgré tout", "même si", "mentionnons que", "mis à part le fait que", "notons que", "nul doute que", "ou bien", "outre cela", "où que", "par ailleurs", "par conséquent", "par contre", "par exception", "par exemple", "par la suite", "par l'entremise de", "par l'intermédiaire de", "par rapport à", "par suite", "par suite de", "par surcroît", "parce que", "pareillement", "partant de ce fait", "pas du tout", "pendant que", "plus précisément", "plus tard", "pour ainsi dire", "pour autant que", "pour ce qui est de", "pour ces motifs", "pour ces raisons", "pour cette raison", "pour commencer", "pour conclure", "pour le moment", "pour marquer la causalité", "pour l'instant", "pour peu que", "pour prendre un autre exemple", "pour que", "pour résumé", "pour terminer", "pour tout dire", "pour toutes ces raisons", "pourvu que", "prenons le cas de", "quand bien même que", "quand même", "quant à", "quel que soit", "qui plus est", "qui que", "quitte à", "quoi qu'il en soit", "quoi que", "quoiqu'il en soit", "sans délai", "sans doute", "sans parler de", "sans préjuger", "sans tarder", "sauf si", "selon que", "si bien que", "si ce n'est que", "si l'on songe que", "sitôt que", "somme toute", "sous cette réserve", "sous prétexte que", "sous réserve de", "sous réserve que", "suivant que", "supposé que", "sur le plan de", "tandis que", "tant et si bien que", "tant que", "tel que", "tellement que", "touchant à", "tout à fait", "tout bien pesé", "tout compte fait", "tout d'abord", "tout d'abord examinons", "tout d'abord il faut dire que", "tout de même", "tout en reconnaissant que", "une fois de plus", "vu que"]),
      b = ["le", "la", "les", "un", "une", "des", "aux", "du", "au", "d'un", "d'une", "l'un", "l'une"],
      v = ["deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix", "septante", "huitante", "octante", "nonante", "cent", "mille", "million", "milliard"],
      y = ["second", "secondes", "deuxième", "deuxièmes", "troisième", "troisièmes", "quatrième", "quatrièmes", "cinquième", "cinquièmes", "sixième", "sixièmes", "septième", "septièmes", "huitième", "huitièmes", "neuvième", "neuvièmes", "dixième", "dixièmes", "onzième", "onzièmes", "douzième", "douzièmes", "treizième", "treizièmes", "quatorzième", "quatorzièmes", "quinzième", "quinzièmes", "seizième", "seizièmes", "dix-septième", "dix-septièmes", "dix-huitième", "dix-huitièmes", "dix-neuvième", "dix-neuvièmes", "vingtième", "vingtièmes"],
      g = ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "qu'il", "qu'elle", "qu'ils", "qu'elles", "qu'on", "d'elle", "d'elles"],
      w = ["moi", "toi", "lui", "soi", "eux", "d'eux", "qu'eux"],
      h = ["me", "te"],
      x = ["celui", "celle", "ceux", "celles", "ce", "celui-ci", "celui-là", "celle-ci", "celle-là", "ceux-ci", "ceux-là", "celles-ci", "celles-là", "ceci", "cela", "ça", "cette", "cet", "ces"],
      q = ["mon", "ton", "son", "ma", "ta", "sa", "mes", "tes", "ses", "notre", "votre", "leur", "nos", "vos", "leurs"],
      j = ["beaucoup", "peu", "quelque", "quelques", "tous", "tout", "toute", "toutes", "plusieurs", "plein", "chaque", "suffisant", "suffisante", "suffisantes", "suffisants", "faible", "moins", "tant", "plus", "divers", "diverse", "diverses"],
      z = ["se"],
      S = ["aucun", "aucune", "autre", "autres", "d'autres", "certain", "certaine", "certaines", "certains", "chacun", "chacune", "même", "mêmes", "quelqu'un", "quelqu'une", "quelques'uns", "quelques'unes", "autrui", "nul", "personne", "quiconque", "rien", "d'aucunes", "d'aucuns", "nuls", "nules", "l'autre", "tel", "telle", "tels", "telles"],
      R = ["qui", "que", "lequel", "laquelle", "auquel", "auxquels", "auxquelles", "duquel", "desquels", "desquelles", "dont", "où", "quoi"],
      E = ["combien", "comment", "pourquoi", "d'où"],
      P = ["quel", "quels", "quelle"],
      _ = ["y", "n'y"],
      C = ["là", "ici", "d'ici", "voici"],
      O = ["a", "a-t-elle", "a-t-il", "a-t-on", "ai", "ai-je", "aie", "as", "as-tu", "aura", "aurai", "auraient", "aurais", "aurait", "auras", "aurez", "auriez", "aurons", "auront", "avaient", "avais", "avait", "avez", "avez-vous", "aviez", "avions", "avons", "avons-nous", "ayez", "ayons", "eu", "eûmes", "eurent", "eus", "eut", "eûtes", "j'ai", "j'aurai", "j'avais", "j'eus", "ont", "ont-elles", "ont-ils", "vais", "vas", "va", "allons", "allez", "vont", "vais-je", "vas-tu", "va-t-il", "va-t-elle", "va-t-on", "allons-nous", "allez-vous", "vont-elles", "vont-ils", "allé", "allés", "j'allai", "allai", "allas", "alla", "allâmes", "allâtes", "allèrent", "j'allais", "allais", "allait", "allions", "alliez", "allaient", "j'irai", "iras", "ira", "irons", "irez", "iront", "j'aille", "aille", "ailles", "aillent", "j'allasse", "allasse", "allasses", "allât", "allassions", "allassiez", "allassent", "j'irais", "irais", "irait", "irions", "iriez", "iraient", "allant", "viens", "vient", "venons", "venez", "viennent", "viens-je", "viens-de", "vient-il", "vient-elle", "vient-on", "venons-nous", "venez-vous", "viennent-elles", "viennent-ils", "vins", "vint", "vînmes", "vîntes", "vinrent", "venu", "venus", "venais", "venait", "venions", "veniez", "venaient", "viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront", "vienne", "viennes", "vinsse", "vinsses", "vînt", "vinssions", "vinssiez", "vinssent", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient", "venant", "dois", "doit", "devons", "devez", "doivent", "dois-je", "dois-tu", "doit-il", "doit-elle", "doit-on", "devons-nous", "devez-vous", "doivent-elles", "doivent-ils", "dus", "dut", "dûmes", "dûtes", "durent", "dû", "devais", "devait", "devions", "deviez", "devaient", "devrai", "devras", "devra", "devrons", "devrez", "devront", "doive", "doives", "dusse", "dusses", "dût", "dussions", "dussiez", "dussent", "devrais", "devrait", "devrions", "devriez", "devraient", "peux", "peut", "pouvons", "pouvez", "peuvent", "peux-je", "peux-tu", "peut-il", "peut-elle", "peut-on", "pouvons-nous", "pouvez-vous", "peuvent-ils", "peuvent-elles", "pus", "put", "pûmes", "pûtes", "purent", "pu", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient", "pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront", "puisse", "puisses", "puissions", "puissiez", "puissent", "pusse", "pusses", "pût", "pussions", "pussiez", "pussent", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient", "pouvant", "semble", "sembles", "semblons", "semblez", "semblent", "semble-je", "sembles-il", "sembles-elle", "sembles-on", "semblons-nous", "semblez-vous", "semblent-ils", "semblent-elles", "semblai", "semblas", "sembla", "semblâmes", "semblâtes", "semblèrent", "semblais", "semblait", "semblions", "sembliez", "semblaient", "semblerai", "sembleras", "semblera", "semblerons", "semblerez", "sembleront", "semblé", "semblasse", "semblasses", "semblât", "semblassions", "semblassiez", "semblassent", "semblerais", "semblerait", "semblerions", "sembleriez", "sembleraient", "parais", "paraît", "ait", "paraissons", "paraissez", "paraissent", "parais-je", "parais-tu", "paraît-il", "paraît-elle", "paraît-on", "ait-il", "ait-elle", "ait-on", "paraissons-nous", "paraissez-vous", "paraissent-ils", "paraissent-elles", "parus", "parut", "parûmes", "parûtes", "parurent", "paraissais", "paraissait", "paraissions", "paraissiez", "paraissaient", "paraîtrai", "paraîtras", "paraîtra", "paraîtrons", "paraîtrez", "paraîtront", "paru", "paraisse", "paraisses", "parusse", "parusses", "parût", "parussions", "parussiez", "parussent", "paraîtrais", "paraîtrait", "paraîtrions", "paraîtriez", "paraîtraient", "paraitrais", "paraitrait", "paraitrions", "paraitriez", "paraitraient", "paraissant", "mets", "met", "mettons", "mettez", "mettent", "mets-je", "mets-tu", "met-il", "met-elle", "met-on", "mettons-nous", "mettez-vous", "mettent-ils", "mettent-elles", "mis", "mit", "mîmes", "mîtes", "mirent", "mettais", "mettait", "mettions", "mettiez", "mettaient", "mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront", "mette", "mettes", "misse", "misses", "mît", "missions", "missiez", "missent", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient", "mettant", "finis", "finit", "finissons", "finissez", "finissent", "finis-je", "finis-tu", "finit-il", "finit-elle", "finit-on", "finissons-nous", "finissez-vous", "finissent-ils", "finissent-elles", "finîmes", "finîtes", "finirent", "finissais", "finissait", "finissions", "finissiez", "finissaient", "finirai", "finiras", "finira", "finirons", "finirez", "finiront", "fini", "finisse", "finisses", "finît", "finirais", "finirait", "finirions", "finiriez", "finiraient", "finissant", "n'a", "n'ai", "n'aie", "n'as", "n'aura", "n'aurai", "n'auraient", "n'aurais", "n'aurait", "n'auras", "n'aurez", "n'auriez", "n'aurons", "n'auront", "n'avaient", "n'avais", "n'avait", "n'avez", "n'avez-vous", "n'aviez", "n'avions", "n'avons", "n'avons-nous", "n'ayez", "n'ayons", "n'ont", "n'ont-elles", "n'ont-ils", "n'allons", "n'allez", "n'allais", "n'allait", "n'allions", "n'alliez", "n'allaient", "n'iras", "n'ira", "n'irons", "n'irez", "n'iront", "qu'a"],
      k = ["avoir", "aller", "venir", "devoir", "pouvoir", "sembler", "paraître", "paraitre", "mettre", "finir", "d'avoir", "d'aller", "n'avoir", "l'avoir"],
      W = ["suis", "es", "est", "est-ce", "n'est", "sommes", "êtes", "sont", "suis-je", "es-tu", "est-il", "est-elle", "est-on", "sommes-nous", "êtes-vous", "sont-ils", "sont-elles", "étais", "était", "étions", "étiez", "étaient", "serai", "seras", "sera", "serons", "serez", "seront", "serais", "serait", "serions", "seriez", "seraient", "sois", "soit", "soyons", "soyez", "soient", "été", "n'es", "n'est-ce", "n'êtes", "n'était", "n'étais", "n'étions", "n'étiez", "n'étaient", "qu'est"],
      M = ["être", "d'être"],
      A = ["à", "après", "d'après", "au-delà", "au-dessous", "au-dessus", "avant", "avec", "concernant", "chez", "contre", "dans", "de", "depuis", "derrière", "dès", "devant", "durant", "en", "entre", "envers", "environ", "hormis", "hors", "jusque", "jusqu'à", "jusqu'au", "jusqu'aux", "loin", "moyennant", "outre", "par", "parmi", "pendant", "pour", "près", "quant", "sans", "sous", "sur", "travers", "vers", "voilà"],
      T = ["et", "ni", "or", "ou"],
      I = ["non", "pas", "seulement", "sitôt", "aussitôt", "d'autre"],
      L = ["afin", "autant", "comme", "d'autant", "d'ici", "quand", "lors", "parce", "si", "tandis"],
      $ = ["dit", "disent", "dit-il", "dit-elle", "disent-ils", "disent-elles", "disait", "disait-il", "disait-elle", "disaient-ils", "disaient-elles", "dirent", "demande", "demandent", "demande-t-il", "demande-t-elle", "demandent-ils", "demandent-elles", "demandait", "demandaient", "demandait-il", "demandait-elle", "demandaient-ils", "demandaient-elles", "demanda", "demanda-t-il", "demanda-t-elle", "demandé", "pense", "pensent", "pense-t-il", "pense-t-elle", "pensent-ils", "pensent-elles", "pensait", "pensaient", "pensait-il", "pensait-elle", "pensaient-ils", "pensaient-elles", "pensa", "pensa-t-il", "pensa-t-elle", "pensé", "affirme", "affirme-t-il", "affirme-t-elle", "affirmé", "avoue", "avoue-t-il", "avoue-t-elle", "avoué", "concède", "concède-t-il", "concède-t-elle", "concédé", "confie", "confie-t-il", "confie-t-elle", "confié", "continue", "continue-t-il", "continue-t-elle", "continué", "déclame", "déclame-t-il", "déclame-t-elle", "déclamé", "déclare", "déclare-t-il", "déclare-t-elle", "déclaré", "déplore", "déplore-t-il", "déplore-t-elle", "déploré", "explique", "explique-t-il", "explique-t-elle", "expliqué", "lance", "lance-t-il", "lance-t-elle", "lancé", "narre", "narre-t-il", "narre-t-elle", "narré", "raconte", "raconte-t-il", "raconte-t-elle", "raconté", "rappelle", "rappelle-t-il", "rappelle-t-elle", "rappelé", "réagit", "réagit-il", "réagit-elle", "réagi", "répond", "répond-il", "répond-elle", "répondu", "rétorque", "rétorque-t-il", "rétorque-t-elle", "rétorqué", "souligne", "souligne-t-il", "souligne-t-elle", "souligné", "affirme-t-il", "affirme-t-elle", "ajoute-t-il", "ajoute-t-elle", "analyse-t-il", "analyse-t-elle", "avance-t-il", "avance-t-elle", "écrit-il", "écrit-elle", "indique-t-il", "indique-t-elle", "poursuit-il", "poursuit-elle", "précise-t-il", "précise-t-elle", "résume-t-il", "résume-t-elle", "souvient-il", "souvient-elle", "témoigne-t-il", "témoigne-t-elle"],
      B = ["dire", "penser", "demander", "concéder", "continuer", "confier", "déclamer", "déclarer", "déplorer", "expliquer", "lancer", "narrer", "raconter", "rappeler", "réagir", "répondre", "rétorquer", "souligner", "affirmer", "ajouter", "analyser", "avancer", "écrire", "indiquer", "poursuivre", "préciser", "résumer", "témoigner"],
      N = ["assez", "trop", "tellement", "presque", "très", "absolument", "extrêmement", "quasi", "quasiment", "fort"],
      V = ["fais", "fait", "faisons", "faites", "font", "fais-je", "fait-il", "fait-elle", "fait-on", "faisons-nous", "faites-vous", "font-ils", "font-elles", "fis", "fit", "fîmes", "fîtes", "firent", "faisais", "faisait", "faisions", "faisiez", "faisaient", "ferai", "feras", "fera", "ferons", "ferez", "feront", "veux", "veut", "voulons", "voulez", "veulent", "voulus", "voulut", "voulûmes", "voulûtes", "voulurent", "voulais", "voulait", "voulions", "vouliez", "voulaient", "voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront", "voulu", "veux-je", "veux-tu", "veut-il", "veut-elle", "veut-on", "voulons-nous", "voulez-vous", "veulent-ils", "veulent-elles", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient", "voulant"],
      D = ["faire", "vouloir"],
      F = ["nouveau", "nouvel", "nouvelle", "nouveaux", "nouvelles", "vieux", "vieil", "vieille", "vieilles", "beau", "bel", "belle", "belles", "bon", "bons", "bonne", "bonnes", "grand", "grande", "grands", "grandes", "haut", "hauts", "haute", "hautes", "petit", "petite", "petits", "petites", "meilleur", "meilleurs", "meilleure", "meilleures", "joli", "jolis", "jolie", "jolies", "gros", "grosse", "grosses", "mauvais", "mauvaise", "mauvaises", "dernier", "derniers", "dernière", "dernières"],
      U = ["ah", "ha", "oh", "ho", "bis", "plouf", "vlan", "ciel", "pouf", "paf", "crac", "hurrah", "allo", "stop", "bravo", "ô", "eh", "hé", "aïe", "oef", "ahi", "fi", "zest", "hem", "holà", "chut"],
      H = ["mg", "g", "kg", "ml", "dl", "cl", "l", "grammes", "gram", "once", "onces", "oz", "lbs", "càc", "cc", "càd", "càs", "càt", "cd", "cs", "ct"],
      J = ["minute", "minutes", "heure", "heures", "journée", "journées", "semaine", "semaines", "mois", "année", "années", "aujourd'hui", "demain", "hier", "après-demain", "avant-hier"],
      X = ["chose", "choses", "façon", "façons", "pièce", "pièces", "truc", "trucs", "fois", "cas", "aspect", "aspects", "objet", "objets", "idée", "idées", "thème", "thèmes", "sujet", "sujets", "personnes", "manière", "manières", "sorte", "sortes"],
      G = ["ne", "oui", "d'accord", "amen", "euro", "euros", "etc"],
      K = ([].concat(y, k, D, M, B, F), [].concat(b, A, T, x, N, j, q), [].concat(m, g, h, w, z, U, v, W, $, O, V, S, I, L, P, R, C, G, _, H, J, X), [].concat(b, A, w, h, q, z, S, E, P, v, y, V, $, D)),
      Q = [].concat(O, k),
      Y = [].concat(b, v, y, x, q, z, g, h, R, j, S, E, _, C, O, k, P, W, M, A, T, I, L, $, B, m, ["encore", "éternellement", "immédiatement", "compris", "comprenant", "inclus", "naturellement", "particulièrement", "notablement", "actuellement", "maintenant", "ordinairement", "généralement", "habituellement", "d'habitude", "vraiment", "finalement", "uniquement", "peut-être", "initialement", "déjà", "c.-à-d", "souvent", "fréquemment", "régulièrement", "simplement", "éventuellement", "quelquefois", "parfois", "probable", "plausible", "jamais", "toujours", "incidemment", "accidentellement", "récemment", "dernièrement", "relativement", "clairement", "évidemment", "apparemment", "pourvu"], N, V, D, U, ["antérieur", "antérieures", "antérieurs", "antérieure", "précédent", "précédents", "précédente", "précédentes", "facile", "faciles", "simple", "simples", "vite", "vites", "vitesse", "vitesses", "difficile", "difficiles", "propre", "propres", "long", "longe", "longs", "longes", "longue", "longues", "bas", "basse", "basses", "ordinaire", "ordinaires", "bref", "brefs", "brève", "brèves", "sûr", "sûrs", "sûre", "sûres", "sure", "sures", "surs", "habituel", "habituels", "habituelle", "habituelles", "soi-disant", "surtout", "récent", "récents", "récente", "récentes", "total", "totaux", "totale", "totales", "complet", "complets", "complète", "complètes", "possible", "possibles", "communément", "constamment", "facilement", "continuellement", "directement", "légèrement", "dernier", "derniers", "dernière", "dernières", "différent", "différents", "différente", "différentes", "similaire", "similaires", "pareil", "pareils", "pareille", "pareilles", "largement", "mal", "super", "bien", "pire", "pires", "suivants", "suivante", "suivantes", "prochain", "prochaine", "prochains", "prochaines", "proche", "proches", "fur"], F, H, X, G, J, ["mme", "mmes", "mlle", "mlles", "mm", "dr", "pr"], ["jr", "sr"], w),
      Z = ["et", "ou", "car", "or", "puisque", "puisqu'il", "puisqu'ils", "puisqu'elle", "puisqu'elles", "puisqu'un", "puisqu'une", "puisqu'on", "quand", "lorsque", "lorsqu'il", "lorsqu'elle", "lorsqu'ils", "lorsqu'elles", "lorsqu'on", "lorsqu'un", "lorsqu'une", "quoique", "quoiqu'il", "quoiqu'ils", "quoiqu'elle", "quoiqu'elles", "quoiqu'on", "quoiqu'un", "quoiqu'une", "qu'elle", "qu'il", "qu'ils", "qu'elles", "qu'on", "qu'un", "qu'une", "si", "s'ils", "s'il", "quand bien même", "pourquoi", "après", "avant", "afin de", "compte tenu de", "pour ne pas dire", "sinon", "une fois", "sitôt", "dont", "lequel", "laquelle", "lesquels", "lesquelles", "auquel", "auxquels", "auxquelles", "duquel", "desquels", "desquelles", "qui", "où", "d'où", ":", "allé", "entré", "resté", "retombé", "apparu", "réapparu", "devenu", "redevenu", "intervenu", "provenu", "resurvenu", "survenu", "allés", "entrés", "restés", "retombés", "apparus", "réapparus", "devenus", "redevenus", "intervenus", "provenus", "resurvenus", "survenus", "allée", "entrée", "restée", "retombée", "apparue", "réapparue", "devenue", "redevenue", "intervenue", "provenue", "resurvenue", "survenue", "allées", "entrées", "restées", "retombées", "apparues", "réapparues", "devenues", "redevenues", "intervenues", "provenues", "resurvenues", "survenues"],
      ee = [["à première vue", "mais à bien considérer les choses"], ["à première vue", "mais toute réflexion faite"], ["aussi", "que"], ["autant de", "que"], ["certes", "mais"], ["d'un côté", "de l'autre côté"], ["d'un côté", "de l'autre"], ["d'un côté", "d'un autre côté"], ["d'une part", "d'autre part"], ["d'une parte", "de l'autre parte"], ["moins de", "que"], ["non seulement", "mais aussi"], ["non seulement", "mais en outre"], ["non seulement", "mais encore"], ["plus de", "que"], ["quelque", "que"], ["si", "que"], ["soit", "soit"], ["tantôt", "tantôt"], ["tout d'abord", "ensuite"], ["tout", "que"]],
      ie = t(24),
      te = t(7),
      se = t.n(te),
      re = t(2),
      ne = ["abâtardi", "abattu", "abêti", "aboli", "abouti", "abruti", "abstenu", "abstrait", "accompli", "accouru", "accroupi", "accru", "accueilli", "adjoint", "adouci", "advenu", "affadi", "affaibli", "affermi", "agi", "agrandi", "aguerri", "ahuri", "aigri", "alangui", "alenti", "alourdi", "aluni", "amaigri", "amati", "amerri", "aminci", "amoindri", "amolli", "amorti", "anéanti", "apâli", "aperçu", "aplani", "appartenu", "appauvri", "appendu", "appesanti", "applaudi", "approfondi", "arrondi", "assagi", "assailli", "assaini", "asservi", "assombri", "assorti", "assoupi", "assoupli", "assourdi", "assouvi", "assujetti", "astreint", "attendri", "attendu", "atterri", "attiédi", "attrait", "autodétruit", "avachi", "aveuli", "avili", "banni", "barri", "bâti", "battu", "béni", "blanchi", "blêmi", "bleui", "blondi", "blotti", "bonni", "bouffi", "bouilli", "bruni", "bu", "calmi", "candi", "ceint", "chéri", "choisi", "circonscrit", "circonvenu", "combattu", "comparu", "compati", "conclu", "concouru", "condescendu", "conduit", "confit", "confondu", "conjoint", "connu", "consenti", "construit", "contenu", "contraint", "contredit", "contrefait", "contrevenu", "convaincu", "convenu", "converti", "coproduit", "correspondu", "couru", "cousu", "craint", "cramoisi", "crépi", "croupi", "cru", "cueilli", "cuit", "débattu", "décati", "déchu", "déconfit", "déconstruit", "décousu", "découvert", "décrépi", "décrit", "décru", "déçu", "dédit", "déduit", "défailli", "défendu", "défini", "défleuri", "défraîchi", "dégarni", "dégluti", "dégourdi", "démenti", "démoli", "démordu", "démuni", "départi", "dépeint", "dépendu", "dépéri", "déplu", "dépoli", "dépourvu", "désobéi", "desservi", "déteint", "détendu", "détenu", "détruit", "dévêtu", "discouru", "disjoint", "disparu", "distendu", "distrait", "dit", "diverti", "dormi", "durci", "ébahi", "ébaubi", "ébaudi", "éclairci", "éconduit", "écrit", "élargi", "élu", "embelli", "embouti", "émoulu", "empli", "empreint", "empuanti", "ému", "enchéri", "encouru", "endolori", "endormi", "enduit", "endurci", "enfoui", "enfreint", "enfui", "englouti", "engourdi", "enhardi", "enjoint", "enlaidi", "ennobli", "enorgueilli", "enrichi", "enseveli", "entendu", "entr'aperçu", "entraperçu", "entreclos", "entremis", "entretenu", "entrevu", "entrouvert", "envahi", "épanoui", "éperdu", "équarri", "équivalu", "estourbi", "établi", "éteint", "étendu", "étourdi", "étréci", "étreint", "eu", "évanoui", "exclu", "extrait", "faibli", "fait", "fallu", "farci", "feint", "fendu", "fini", "fléchi", "fleuri", "fondu", "forci", "foui", "fourbi", "fourni", "foutu", "fraîchi", "franchi", "frémi", "frit", "fui", "garanti", "garni", "gauchi", "gémi", "glapi", "grandi", "grossi", "guéri", "haï", "imparti", "induit", "infléchi", "inscrit", "instruit", "interdit", "interrompu", "interverti", "introduit", "inverti", "investi", "jailli", "jauni", "joint", "joui", "langui", "loti", "lu", "maintenu", "méconnu", "mécru", "médit", "menti", "minci", "moisi", "moiti", "molli", "mordu", "morfondu", "moulu", "mugi", "muni", "nanti", "noirci", "nourri", "nui", "obéi", "obscurci", "obtenu", "offert", "oint", "ouï", "ourdi", "ouvert", "pâli", "parcouru", "paru", "pâti", "peint", "pendu", "perçu", "péri", "perverti", "pétri", "plaint", "portrait", "pourfendu", "pourri", "poursuivi", "pourvu", "prédéfini", "prédit", "préétabli", "prémuni", "prescrit", "prétendu", "prévalu", "prévenu", "prévu", "produit", "promu", "proscrit", "pu", "puni", "rabattu", "rabougri", "radouci", "raffermi", "ragaillardi", "raidi", "rajeuni", "ralenti", "ramolli", "ranci", "ravi", "réadmis", "réagi", "réappris", "rebâti", "rebattu", "rebondi", "rebu", "reconnu", "reconstruit", "reconverti", "recouru", "recouvert", "recrépi", "récrit", "recru", "reçu", "recueilli", "recuit", "redécouvert", "redéfini", "redit", "réduit", "réécrit", "réélu", "réentendu", "refendu", "réfléchi", "refondu", "refoutu", "refroidi", "regarni", "régi", "réinscrit", "réintroduit", "réinvesti", "rejoint", "réjoui", "relu", "relui", "rembruni", "remordu", "rempli", "renchéri", "rendormi", "rendu", "rentrait", "répandu", "reparcouru", "réparti", "reparu", "repeint", "rependu", "repenti", "reperdu", "répondu", "reproduit", "résolu", "resplendi", "ressaisi", "resservi", "restreint", "resurgi", "rétabli", "retendu", "retenu", "retraduit", "retrait", "retranscrit", "rétréci", "réuni", "réussi", "revécu", "revendu", "reverdi", "reverni", "revêtu", "revu", "ri", "roidi", "rosi", "rôti", "rougi", "roussi", "rousti", "rouvert", "rugi", "saisi", "sali", "satisfait", "sauri", "secouru", "séduit", "senti", "serti", "servi", "sévi", "souffert", "souri", "sous-entendu", "sous-tendu", "souscrit", "soustrait", "soutenu", "souvenu", "su", "subi", "subvenu", "suffi", "suivi", "surenchéri", "surgi", "suri", "survécu", "suspendu", "tapi", "tari", "teint", "tendu", "tenu", "terni", "terri", "tiédi", "tondu", "tordu", "traduit", "trahi", "trait", "transcrit", "transi", "travesti", "tressailli", "uni", "vagi", "vaincu", "valu", "vécu", "vendu", "verdi", "verni", "vêtu", "vieilli", "vomi", "voulu", "vu"],
      le = ["absous", "absoute", "absoutes", "dissous", "dissoute", "dissoutes", "crû", "crus", "crue", "crues", "dû", "dus", "dues", "mû", "mus", "mue", "mues"],
      ae = ["repris", "démis", "omis", "dépris", "retransmis", "assis", "promis", "circoncis", "permis", "compris", "mépris", "inclus", "soumis", "rassis", "sursis", "enclos", "acquis", "compromis", "commis", "désappris", "appris", "conquis", "transmis", "remis", "surpris", "reconquis", "mis", "enquis", "pris", "admis", "clos", "émis", "entrepris", "épris", "requis"],
      oe = d.languageProcessing.getWords,
      ue = d.languageProcessing.matchRegularParticiples,
      ce = function ce(e, i, t) {
    var s = [];
    return Object(re.forEach)(i, function (i) {
      var r = new RegExp("^" + i + t + "?$", "ig"),
          n = e.match(r);
      n && s.push(n[0]);
    }), s;
  };

  var de = ["allé", "arrivé", "décédé", "demeuré", "entré", "été", "né", "resté", "retombé", "tombé", "achalandé", "aéroporté", "affilé", "affixé", "âgé", "aîné", "aisé", "aligoté", "alizé", "alliacé", "alluré", "alphabétisé", "alvéolé", "aminé", "ammoniaqué", "ampoulé", "archi-prouvé", "archi-usé", "asexué", "autoguidé", "autopropulsé", "aviné", "baleiné", "barbelé", "baryté", "bien-aimé", "bisexué", "bouqueté", "brioché", "burkinabé", "cagoulé", "calamistré", "cannelé", "carabiné", "carboné", "caréné", "carié", "carminé", "carné", "carpé", "censé", "cérusé", "charançonné", "chenillé", "chocolaté", "chtarbé", "citronné", "cofondé", "contrecollé", "côtelé", "courbaturé", "crawlé", "crossé", "crustacé", "cutané", "damasquiné", "damassé", "débellé", "décavé", "déguenillé", "demi-paralysé", "denté", "dépenaillé", "désenchanté", "désodé", "diapré", "ébranché", "écervelé", "effréné", "effronté", "éhonté", "embourgeoisé", "embroussaillé", "embruiné", "émerillonné", "encalminé", "encaustiqué", "encorné", "endiablé", "endiamanté", "enfoiré", "enfouraillé", "ensellé", "entrelardé", "éploré", "ergoté", "erroné", "étagé", "éthéré", "éversé", "éwé", "ex-associé", "exorbité", "expansé", "famé", "férié", "fibré", "filoguidé", "flammé", "fleurdelisé", "fliqué", "flûté", "forcené", "fortuné", "foulbé", "frelaté", "friqué", "futé", "gazonné", "gracieusé", "gradé", "granulé", "herminé", "hiérarchisé", "huppé", "hydrogéné", "igné", "illettré", "illimité", "imbriqué", "immaculé", "immérité", "immodéré", "immunodéprimé", "impayé", "impensé", "impollué", "imprononcé", "inaccoutumé", "inachevé", "inactivé", "inadapté", "inaltéré", "inanimé", "inapproprié", "inarticulé", "inavoué", "inchangé", "inconditionné", "inconsidéré", "inconsolé", "incontesté", "incontrôlé", "incréé", "indéfriché", "indéterminé", "indifférencié", "indiscipliné", "indiscuté", "indivisé", "indompté", "inébranlé", "inemployé", "inentamé", "inespéré", "inexpérimenté", "inexpliqué", "inexploité", "inexploré", "inexprimé", "infondé", "informulé", "infortuné", "inhabité", "inimité", "injustifié", "inné", "innommé", "inoccupé", "inopiné", "inorganisé", "inoublié", "insensé", "insoupçonné", "instantané", "insubordonné", "insurpassé", "intentionné", "interallié", "intouché", "inusité", "inutilisé", "invertébré", "inviolé", "iodé", "irraisonné", "irréalisé", "lacté", "lamé", "lamifié", "larvé", "laryngé", "léopardé", "lettré", "lié", "lifté", "losangé", "luné", "lunetté", "madré", "maillé", "malaisé", "malavisé", "maléficié", "malfamé", "malformé", "malintentionné", "mendé", "ménopausé", "mentholé", "mi-accablé", "mi-allongé", "mi-café", "mi-consterné", "mi-enterré", "mi-étonné", "mi-pincé", "mi-terrorisé", "miellé", "millimétré", "miraculé", "momentané", "monoclé", "monté", "mordoré", "mort-né", "névrosé", "nitré", "non-initié", "nouveau-né", "olé-olé", "ongulé", "paillé", "palé", "papilionacé", "paqueté", "paraffiné", "passé", "pasteurisé", "patenté", "paysagé", "pédonculé", "pestiféré", "platiné", "pocheté", "polychromé", "poplité", "potelé", "pourpré", "praliné", "précité", "prédigéré", "préencollé", "préfabriqué", "prématuré", "premier-né", "préprogrammé", "prostré", "protéiné", "pyramidé", "quadrilobé", "racé", "re-café", "re-rêvé", "re-vérifié", "rebarré", "redécoré", "relargué", "remonté", "rentré", "résiné", "ressuscité", "réticulé", "retourné", "revérifié", "revivifié", "rose-thé", "safrané", "satiné", "saumoné", "sébacé", "sensé", "sexué", "sigillé", "silicosé", "simultané", "sinistré", "soufré", "sous-cutané", "sous-développé", "sous-qualifié", "soussigné", "spiralé", "spontané", "stratifié", "sulfaté", "sulfuré", "sulfurisé", "suractivé", "suranné", "surbooké", "surbrodé", "surdéveloppé", "surdimensionné", "surdoué", "surentraîné", "suroxygéné", "surpeuplé", "surqualifié", "susmentionné", "susnommé", "systématisé", "tarabiscoté", "taupé", "thrombosé", "tiercé", "timoré", "tiqueté", "transcutané", "triphasé", "usagé", "usité", "vallonné", "vanillé", "vascularisé", "veinulé", "venté", "vergé", "vert-de-grisé", "vertébré", "vitaminé", "vulcanisé", "zélé"],
      pe = ["à-côté", "abbé", "absurdité", "accessibilité", "acerbité", "acidité", "acmé", "acné", "âcreté", "activité", "actualité", "acuité", "adaptabilité", "adiposité", "admissibilité", "adversité", "affabilité", "affectivité", "affidé", "affinité", "agilité", "agressivité", "alacrité", "alcalinité", "altérité", "amabilité", "ambiguïté", "amé", "aménité", "américanité", "amirauté", "amitié", "amoralité", "ancestralité", "ancienneté", "anfractuosité", "angulosité", "animalité", "animosité", "anormalité", "anti-acné", "anti-cité", "anti-criminalité", "anti-gravité", "anti-intimité", "anti-société", "antigravité", "antiquité", "anxiété", "aparté", "applicabilité", "âpreté", "archevêché", "aridité", "artificialité", "asexualité", "asociabilité", "aspérité", "assiduité", "astarté", "atrocité", "austérité", "authenticité", "autodafé", "autorité", "avé", "aveugle-né", "avidité", "ébriété", "effectivité", "efficacité", "égalité", "élasticité", "électricité", "élément-clé", "élémentarité", "éligibilité", "émotivité", "empaffé", "énormité", "entièreté", "entité", "enviandé", "épitomé", "équanimité", "équité", "étanchéité", "éternité", "ethnicité", "étrangéité", "étrangeté", "euromarché", "évêché", "éventualité", "ex-abbé", "ex-fiancé", "excentricité", "exclusivité", "exemplarité", "exhaustivité", "exiguïté", "extériorité", "externalité", "exterritorialité", "extrémité", "idée-clé", "identité", "illégalité", "illégitimité", "imbécillité", "immatérialité", "immaturité", "immédiateté", "immensité", "immobilité", "immoralité", "immortalité", "immuabilité", "immunité", "immutabilité", "impalpabilité", "impartialité", "impassibilité", "impeccabilité", "impécuniosité", "impénétrabilité", "imperméabilité", "impersonnalité", "impétuosité", "impiété", "implacabilité", "impopularité", "impossibilité", "impraticabilité", "imprévisibilité", "improbabilité", "impudicité", "impulsivité", "impunité", "impureté", "inaccessibilité", "inactivité", "inanité", "inauthenticité", "incapacité", "incommodité", "incommunicabilité", "incompatibilité", "incongruité", "incorruptibilité", "incrédibilité", "incrédulité", "incuriosité", "indemnité", "indestructibilité", "indignité", "indisponibilité", "individualité", "indivisibilité", "indocilité", "industrie-clé", "inefficacité", "inégalité", "inéligibilité", "inéluctabilité", "inévitabilité", "inexorabilité", "infaillibilité", "infécondité", "infériorité", "infertilité", "infidélité", "infinité", "infirmité", "inflammabilité", "inflexibilité", "ingéniosité", "ingénuité", "inhospitalité", "inhumanité", "inimitié", "iniquité", "innocuité", "inopportunité", "insalubrité", "insanité", "insécurité", "insensibilité", "inséparabilité", "insincérité", "insipidité", "insonorité", "instabilité", "instantanéité", "insularité", "intangibilité", "intégralité", "intégrité", "intelligibilité", "intemporalité", "intensité", "intentionnalité", "interactivité", "intériorité", "intimité", "intrépidité", "inusabilité", "inutilité", "invalidité", "inventivité", "invincibilité", "inviolabilité", "invisibilité", "invulnérabilité", "irrationalité", "irréalité", "irrecevabilité", "irrégularité", "irréligiosité", "irresponsabilité", "irréversibilité", "irrévocabilité", "irritabilité", "obésité", "objectivité", "obliquité", "obscénité", "obscurité", "obséquiosité", "officialité", "oiseau-clé", "oisiveté", "okoumé", "onctuosité", "opacité", "opiniâtreté", "opportunité", "oralité", "originalité", "ubiquité", "ukulélé", "unanimité", "unicité", "uniformité", "unilatéralité", "unité", "universalité", "université", "urbanité", "utilité", "yé-yé", "yéyé", "achillée", "almée", "aménorrhée", "année", "anti-nausée", "apnée", "apogée", "araignée", "arrière-pensée", "assiettée", "athénée", "auloffée", "aveugle-née", "avrillée", "azalée", "échauffourée", "écuellée", "élysée", "embardée", "empyrée", "épée", "épopée", "étuvée", "ex-allée", "ex-dulcinée", "ex-fiancée", "ex-lycée", "idée", "ipomée", "odyssée", "onomatopée", "orchidée", "orée", "orphée", "urée", "banalité", "bas-côté", "beaupré", "beauté", "bébé", "bédé", "bénédicité", "bénignité", "bestialité", "bien-fondé", "biodiversité", "bipolarité", "bisexualité", "blé", "bonté", "bout-rimé", "bovidé", "brièveté", "brutalité", "caducité", "café", "callosité", "camélidé", "canapé", "capacité", "capillarité", "captivité", "carte-clé", "caté", "catholicité", "causalité", "causticité", "cavité", "cécité", "célébrité", "célérité", "cérébralité", "cétacé", "charité", "chassé-croisé", "chasteté", "cherté", "chétivité", "chimpanzé", "chrétienté", "ciné", "cinéma-vérité", "circularité", "citoyenneté", "civilité", "clandé", "clandestinité", "clarté", "clé", "clergé", "co-propriété", "coaccusé", "cochonceté", "code-clé", "collectivité", "collégialité", "combativité", "comestibilité", "comité", "commodité", "communauté", "communicabilité", "compacité", "comparabilité", "compatibilité", "compétitivité", "complémentarité", "complexité", "complicité", "comptabilité", "comté", "concavité", "condé", "conductibilité", "conductivité", "confidentialité", "conformité", "confraternité", "congé", "conjugalité", "connectivité", "consanguinité", "constitutionnalité", "contiguïté", "continuité", "contrariété", "contre-gré", "contre-plaqué", "contre-vérité", "contreplaqué", "contrevérité", "convexité", "convivialité", "coopé", "copropriété", "cordialité", "coré", "coriacité", "corporalité", "côté", "créativité", "crédibilité", "crédulité", "crétacé", "criminalité", "cruauté", "crudité", "culpabilité", "cupidité", "curiosité", "cybercafé", "cyprinidé", "dangerosité", "daphné", "dé", "débotté", "décimalité", "décision-clé", "déclivité", "déductibilité", "défectuosité", "degré", "déité", "déloyauté", "demi-clarté", "demi-degré", "demi-liberté", "demi-obscurité", "demi-vérité", "dénatalité", "densité", "député", "dératé", "dernier-né", "désirabilité", "dextérité", "difficulté", "difformité", "dignité", "discontinuité", "disparité", "disponibilité", "diversité", "divinité", "docilité", "domesticité", "doyenné", "dualité", "duché", "duplicité", "durabilité", "dureté", "faculté", "faillibilité", "faisabilité", "familiarité", "fatalité", "fatuité", "fausseté", "fébrilité", "fécondité", "félidé", "félinité", "féminité", "féodalité", "fermeté", "férocité", "ferté", "fertilité", "festivité", "fétidité", "fiabilité", "fibrillé", "fidélité", "fierté", "finalité", "fiscalité", "fixité", "flaccidité", "flatuosité", "flexibilité", "flexuosité", "flottabilité", "fluidité", "fonctionnalité", "formalité", "fossé", "fragilité", "francité", "fraternité", "friabilité", "frigidité", "frilosité", "fringillidé", "frivolité", "frugalité", "fugacité", "furtivité", "futilité", "gaieté", "gaîté", "gallinacé", "gémellité", "généralité", "générosité", "génialité", "génitalité", "germanité", "gibbosité", "globalité", "godemiché", "gracieuseté", "gracilité", "grand-duché", "granité", "gratuité", "gravidité", "gré", "grossièreté", "habileté", "habitabilité", "haute-fidélité", "henné", "hérédité", "hétérogénéité", "hétérosexualité", "hilarité", "histocompatibilité", "historicité", "homme-clé", "homogénéité", "homosexualité", "honnêteté", "honorabilité", "horizontalité", "hospitalité", "hostilité", "humanité", "humidité", "humilité", "hyperacidité", "hyperactivité", "hypercoagulabilité", "hyperémotivité", "hypermarché", "hyperréactivité", "hypersensibilité", "jovialité", "joyeuseté", "jubé", "judaïcité", "judaïté", "judéité", "juvénilité", "karaoké", "karaté", "karité", "kiné", "koré", "lâcheté", "laïcité", "lamedé", "lascivité", "latéralité", "latinité", "laubé", "laxité", "lé", "légalité", "légèreté", "légitimité", "lèse-majesté", "létalité", "lettre-clé", "libéralité", "liberté", "licéité", "limpidité", "liquidité", "lisibilité", "littéralité", "lividité", "localité", "longanimité", "longévité", "loquacité", "loyauté", "lubricité", "lucidité", "luminosité", "macramé", "magnanimité", "majesté", "majorité", "mal-aimé", "mal-baisé", "malhonnêteté", "malignité", "malinké", "malléabilité", "malpropreté", "maniabilité", "manoeuvrabilité", "marginalité", "masculinité", "maskinongé", "massivité", "matérialité", "maternité", "matité", "maturité", "mauvaiseté", "méchanceté", "médiocrité", "médiumnité", "mémé", "mémorabilité", "mendicité", "mensualité", "mentalité", "merveillosité", "méticulosité", "mi-capacité", "mi-été", "mi-meublé", "mi-porté", "mi-réalité", "mi-résigné", "miché", "microgravité", "minorité", "mitoyenneté", "mixité", "mobilité", "mocheté", "modalité", "modernité", "modicité", "moment-clé", "mondanité", "monstruosité", "mont-de-piété", "monumentalité", "mooré", "moralité", "morbidité", "morosité", "mortalité", "mot-clé", "motilité", "motricité", "mousmé", "mucosité", "multiplicité", "multipropriété", "municipalité", "musicalité", "mutabilité", "mutité", "mutualité", "naïveté", "narghilé", "narguilé", "natalité", "nationalité", "nativité", "navigabilité", "nébulosité", "négativité", "néné", "nervosité", "nescafé", "netteté", "neutralité", "névé", "niakoué", "niébé", "nocivité", "non-conformité", "non-culpabilité", "nordicité", "normalité", "notabilité", "notoriété", "nouveauté", "nouvelleté", "nubilité", "nudité", "nue-propriété", "nullité", "nuptialité", "papauté", "papé", "parenté", "parité", "partialité", "particularité", "passiveté", "passivité", "pâté", "paternité", "pause-café", "pauses-café", "pauvreté", "pédé", "pédégé", "pénalité", "pépé", "pérennité", "perfectibilité", "périodicité", "perméabilité", "permissivité", "péroné", "perpétuité", "perplexité", "perré", "personnage-clé", "personnalité", "perspicacité", "perversité", "pèse-bébé", "petit-salé", "photosensibilité", "phrase-clé", "pilosité", "pisé", "pitié", "placidité", "plasticité", "plausibilité", "pluralité", "pluviosité", "point-clé", "poiré", "poire-vérité", "polarité", "polycopié", "polytonalité", "ponctualité", "pongé", "popularité", "porosité", "portabilité", "porte-bébé", "porte-clé", "position-clé", "positivité", "possessivité", "possibilité", "poste-clé", "postérité", "potentialité", "pousse-café", "pré", "pré-salé", "précarité", "préciosité", "précocité", "prématurité", "prévisibilité", "prévôté", "prieuré", "primauté", "principauté", "priorité", "privauté", "probabilité", "probité", "prodigalité", "productivité", "profitabilité", "prolixité", "promiscuité", "proportionnalité", "propreté", "propriété", "prospérité", "proximité", "psyché", "puberté", "publicité", "pudicité", "puérilité", "pugnacité", "puîné", "pureté", "pusillanimité", "qualité", "quantité", "quarté", "quasi-impossibilité", "quasi-impunité", "quasi-nudité", "quasi-totalité", "quasi-unanimité", "question-clé", "quinté", "quotidienneté", "quotité", "radioactivité", "raisiné", "rapacité", "raphé", "rapidité", "rareté", "rationalité", "raucité", "ré", "réactivité", "réalité", "récépissé", "réceptivité", "recevabilité", "réciprocité", "récré", "régularité", "relativité", "religiosité", "rentabilité", "reportage-vérité", "respectabilité", "responsabilité", "réversibilité", "rigidité", "risibilité", "rivalité", "romanité", "rotondité", "roulé-boulé", "royauté", "rugosité", "rusticité", "sagacité", "saint-honoré", "sainteté", "saké", "salacité", "saleté", "salinité", "salmonidé", "salubrité", "santé", "sapidité", "satiété", "sauveté", "scène-clé", "scientificité", "scissiparité", "scolarité", "scrupulosité", "sécurité", "sédentarité", "sélectivité", "semi-liberté", "séné", "sénevé", "sénilité", "sensibilité", "sensorialité", "sensualité", "sentimentalité", "septicité", "sérénité", "sergé", "séropositivité", "sérosité", "serviabilité", "servilité", "sévérité", "sexualité", "similarité", "simplicité", "simultanéité", "sincérité", "singularité", "sinuosité", "sobriété", "sociabilité", "société", "solennité", "solidarité", "solidité", "solubilité", "soluté", "solvabilité", "sommité", "somptuosité", "sonorité", "sordidité", "sororité", "soudaineté", "sous-comité", "sous-humanité", "souveraineté", "spasticité", "spécialité", "spécificité", "sphéricité", "spiritualité", "spontanéité", "sportivité", "spumosité", "stabilité", "sténopé", "stérilité", "stupidité", "suavité", "subjectivité", "sublimité", "subtilité", "succédané", "suggestibilité", "suggestivité", "superficialité", "superfluité", "supériorité", "supermarché", "supraconductivité", "suractivité", "surcapacité", "surdité", "sûreté", "surgé", "surhumanité", "surintensité", "surréalité", "susceptibilité", "suzeraineté", "synthé", "taboulé", "taciturnité", "tamouré", "tangibilité", "tarpé", "technicité", "télé", "témérité", "témoin-clé", "temporalité", "ténacité", "tendreté", "ténébrionidé", "ténuité", "territorialité", "tévé", "thé", "théâtralité", "tiaré", "timidité", "tollé", "tonalité", "tonicité", "totalité", "toxicité", "traçabilité", "tranquillité", "translucidité", "transsexualité", "trinité", "trivialité", "tsé-tsé", "tubérosité", "turbé", "vacuité", "vahiné", "validité", "vanité", "variabilité", "variété", "vassalité", "vastité", "velléité", "vélocité", "vénalité", "vénusté", "véracité", "verbosité", "vérité", "versatilité", "verticalité", "vétusté", "viabilité", "vicinalité", "vicomté", "viduité", "virginité", "virilité", "virtualité", "virtuosité", "viscosité", "visibilité", "vitalité", "vivacité", "volatilité", "volonté", "volubilité", "volupté", "voracité", "vulgarité", "vulnérabilité", "batée", "becquée", "billevesée", "bolée", "bondrée", "borée", "bouée", "bougainvillée", "brouettée", "buée", "caducée", "canne-épée", "casserolée", "cavée", "centaurée", "cépée", "céphalée", "charretée", "chaudronnée", "chicorée", "chorée", "cochlée", "cochonnée", "colée", "contre-allée", "contre-plongée", "corvée", "coryphée", "cucurbitacée", "cuillerée", "culée", "cylindrée", "demi-journée", "demi-volée", "denrée", "dernière-née", "diarrhée", "diatomée", "dionée", "dragée", "dulcinée", "dysménorrhée", "dyspnée", "fée", "feuillée", "flopée", "fournée", "fricassée", "friselée", "galathée", "galée", "giboulée", "giroflée", "gonorrhée", "goulée", "graminée", "guinée", "gynécée", "haquenée", "hottée", "hyménée", "hyperborée", "hypogée", "journée", "lance-fusée", "litée", "logorrhée", "lycée", "macchabée", "mainlevée", "maisonnée", "mal-aimée", "mal-baisée", "maréchaussée", "marée", "mausolée", "mélopée", "mi-effrontée", "mi-journée", "miellée", "mijaurée", "mosquée", "moteur-fusée", "muflée", "nausée", "nuée", "nuitée", "panacée", "pâtée", "peignée", "pelletée", "pépée", "périgée", "périnée", "pharmacopée", "pipée", "platée", "pochetée", "pochetée", "poignée", "poirée", "poisson-épée", "porte-épée", "potée", "poupée", "première-née", "prérentrée", "presse-purée", "prytanée", "purée", "quasi-fiancée", "ramée", "raz-de-marée", "resucée", "rétrofusée", "rez-de-chaussée", "risée", "ruchée", "scarabée", "séborrhée", "sigisbée", "simagrée", "singe-araignée", "soirée", "solanacée", "tablée", "tinée", "trachée", "trâlée", "transfusée", "travée", "trépanée", "trochée", "trophée", "vallée", "ventrée", "vesprée"],
      me = ["bé", "cré", "crédié", "é", "loucedé", "eussé", "hé", "malgré", "moitié-moitié", "ohé", "olé", "ollé", "sacrédié", "quasi-instantanée"];

  var fe = d.languageProcessing.precedenceException,
      be = d.languageProcessing.directPrecedenceException,
      ve = function (e) {
    l()(n, e);
    var i,
        t,
        s = (i = n, t = function () {
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
          s = c()(i);

      if (t) {
        var r = c()(this).constructor;
        e = Reflect.construct(s, arguments, r);
      } else e = s.apply(this, arguments);

      return o()(this, e);
    });

    function n(e, i) {
      var t;
      return r()(this, n), (t = s.call(this, e, i))._participles = function (e) {
        var i = oe(e),
            t = [];
        return Object(re.forEach)(i, function (e) {
          0 === ue(e, [/\S+(é|ée|és|ées)($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi]).length && 0 === function (e) {
            var i = [].concat(ce(e, ne, "(e|s|es)"));
            return i = i.concat(ce(e, ae, "(e|es)")), Object(re.includes)(le, e) && i.push(e), i;
          }(e).length || t.push(e);
        }), t;
      }(t.getClauseText()), t.checkParticiples(), t;
    }

    return se()(n, [{
      key: "checkParticiples",
      value: function value() {
        var e = this,
            i = this.getClauseText(),
            t = this.getParticiples().filter(function (t) {
          return !(t.startsWith("l'") || t.startsWith("d'") || Object(re.includes)(me, t) || e.isOnAdjectiveVerbExceptionList(t) || e.isOnNounExceptionList(t) || be(i, t, K) || fe(i, t, Q));
        });
        this.setPassive(t.length > 0);
      }
    }, {
      key: "isOnAdjectiveVerbExceptionList",
      value: function value(e) {
        return !!de.includes(e) || (e.endsWith("es") ? e = e.slice(0, -2) : (e.endsWith("e") || e.endsWith("s")) && (e = e.slice(0, -1)), de.includes(e));
      }
    }, {
      key: "isOnNounExceptionList",
      value: function value(e) {
        return !!pe.includes(e) || (e.endsWith("s") && (e = e.slice(0, -1)), pe.includes(e));
      }
    }]), n;
  }(d.languageProcessing.values.Clause),
      ye = ["être", "d'être", "suis", "es", "est", "sommes", "êtes", "sont", "n'est", "n'es", "n'êtes", "été", "j'étais", "étais", "était", "étions", "étiez", "étaient", "c'était", "n'étais", "n'était", "n'étions", "n'étiez", "n'étaient", "serai", "seras", "sera", "serons", "serez", "seront", "sois", "soit", "soyons", "soyez", "soient", "fusse", "fusses", "fût", "fussions", "fussiez", "fussent", "serais", "serait", "serions", "seriez", "seraient", "fus", "fut", "fûmes", "fûtes", "furent", "suis-je", "es-tu", "est-il", "est-elle", "est-on", "sommes-nous", "êtes-vous", "sont-ils", "sont-elles", "est-ce", "étais-je", "étais-tu", "était-il", "était-elle", "était-on", "était-ce", "étions-nous", "étiez-vous", "étaient-ils", "étaient-elles", "serai-je", "seras-tu", "sera-t-il", "sera-t-elle", "sera-t-on", "sera-ce", "serons-nous", "serez-vous", "seront-ils", "seront-elles", "serais-je", "serais-tu", "serait-il", "serait-elle", "serait-on", "serait-ce", "serions-nous", "seriez-vous", "seraient-ils", "seraient-elles", "fus-je", "fus-tu", "fut-il", "fut-elle", "fut-on", "fut-ce", "fûmes-nous", "fûtes-vous", "furent-ils", "furent-elles"],
      ge = d.languageProcessing.createRegexFromArray,
      we = d.languageProcessing.getClauses,
      he = {
    Clause: ve,
    stopwords: Z,
    auxiliaries: ye,
    regexes: {
      auxiliaryRegex: ge(ye),
      stopCharacterRegex: /(,)(?=[ \n\r\t'"+\-»«‹›<>])/gi,
      followingAuxiliaryExceptionRegex: ge(["le", "la", "les", "une", "l'un", "l'une"]),
      directPrecedenceExceptionRegex: ge(["se", "me", "te", "s'y", "m'y", "t'y", "nous nous", "vous vous"]),
      elisionAuxiliaryExceptionRegex: ge(["c'", "s'", "peut-"], !0)
    }
  };

  function xe(e) {
    return we(e, he);
  }

  var qe = t(17),
      je = t.n(qe);

  function ze(e, i) {
    var t;

    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (t = function (e, i) {
        if (e) {
          if ("string" == typeof e) return Se(e, void 0);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Se(e, void 0) : void 0;
        }
      }(e)) || i && e && "number" == typeof e.length) {
        t && (e = t);

        var s = 0,
            r = function r() {};

        return {
          s: r,
          n: function n() {
            return s >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[s++]
            };
          },
          e: function e(_e2) {
            throw _e2;
          },
          f: r
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var n,
        l = !0,
        a = !1;
    return {
      s: function s() {
        t = e[Symbol.iterator]();
      },
      n: function n() {
        var e = t.next();
        return l = e.done, e;
      },
      e: function e(_e3) {
        a = !0, n = _e3;
      },
      f: function f() {
        try {
          l || null == t["return"] || t["return"]();
        } finally {
          if (a) throw n;
        }
      }
    };
  }

  function Se(e, i) {
    (null == i || i > e.length) && (i = e.length);

    for (var t = 0, s = new Array(i); t < i; t++) {
      s[t] = e[t];
    }

    return s;
  }

  var Re = d.languageProcessing.exceptionListHelpers.checkIfWordEndingIsOnExceptionList,
      Ee = d.languageProcessing.regexHelpers.applyAllReplacements;
  var Pe = d.languageProcessing.baseStemmer;

  function _e(e) {
    var i = Object(re.get)(e.getData("morphology"), "fr", !1);
    return i ? function (e) {
      return function (e, i) {
        var t = e = e.toLowerCase(),
            s = function (e, i) {
          var t,
              s = ze(i.cannotTakeExtraSuffixS);

          try {
            for (s.s(); !(t = s.n()).done;) {
              var r = t.value;
              if (r[0] === e) return r[1];
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }

          e.endsWith("s") && (e = e.slice(0, -1));
          var n,
              l = ze(i.canTakeExtraSuffixS);

          try {
            for (l.s(); !(n = l.n()).done;) {
              var a = n.value;
              if (a[0] === e) return a[1];
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        }(e, i.shortWordsAndStems);

        if (s) return s;

        var r = function (e, i) {
          var t,
              s = ze(i);

          try {
            for (s.s(); !(t = s.n()).done;) {
              var r = t.value;
              if (r[1].includes(e)) return r[0];
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }

          return null;
        }(e, i.exceptionStemsWithFullForms);

        if (r) return r;
        if (e.endsWith("x") && i.pluralsWithXSuffix.includes(e)) return e.slice(0, -1);
        if (e.endsWith("s") && i.sShouldNotBeStemmed.includes(e)) return e;
        var n = i.nonVerbsOnEnt;
        if (e.endsWith("ent") && n.includes(e)) return e;
        if (e.endsWith("ents") && n.includes(e.slice(0, -1))) return e.slice(0, -1);
        var l = i.nonVerbsOnOns;
        if (e.endsWith("ons") && l.includes(e)) return e.slice(0, -1);

        var a = function (e, i) {
          var t;
          -1 !== e.search(new RegExp(i.rvRegex1)) || -1 !== e.search(new RegExp(i.rvRegex2)) ? t = 3 : -1 === (t = e.substring(1).search(new RegExp(i.rvRegex3))) ? t = e.length : t += 2;
          var s = new RegExp(i.r1Regex),
              r = e.search(s),
              n = "";
          -1 === r ? r = e.length : (r += 2, n = e.substring(r));
          var l = n.search(s);
          return -1 === l ? l = e.length : (l += 2, l += r), -1 !== r && r < 3 && (r = 3), [r, l, t];
        }(e = Ee(e, i.regularStemmer.preProcessingStepsRegexes), i.regularStemmer.rIntervals),
            o = je()(a, 3),
            u = o[0],
            c = o[1],
            d = o[2],
            p = e = function (e, i, t, s, r) {
          var n = e.search(new RegExp(i.standardSuffixes1)),
              l = e.search(new RegExp(i.standardSuffixes2)),
              a = e.search(new RegExp(i.standardSuffixes3[0])),
              o = e.search(new RegExp(i.standardSuffixes4[0])),
              u = e.search(new RegExp(i.standardSuffixes5[0])),
              c = e.search(new RegExp(i.standardSuffixes6)),
              d = e.search(new RegExp(i.standardSuffixes7)),
              p = e.search(new RegExp(i.standardSuffixes8)),
              m = e.search(new RegExp(i.standardSuffixes9[0])),
              f = e.search(new RegExp(i.standardSuffixes10[0])),
              b = e.search(new RegExp(i.standardSuffixes11[0])),
              v = e.search(new RegExp(i.standardSuffixes12)),
              y = e.search(new RegExp(i.standardSuffixes13[0])),
              g = e.search(new RegExp(i.standardSuffixes14[0])),
              w = e.search(new RegExp(i.standardSuffixes15));
          if (-1 !== n && n >= s) e = e.substring(0, n);else if (-1 !== l && l >= s) {
            var h = (e = e.substring(0, l)).search(new RegExp(i.suffixesPrecedingChar1[0]));
            e = -1 !== h && h >= s ? e.substring(0, h) : e.replace(new RegExp(i.suffixesPrecedingChar1[0]), i.suffixesPrecedingChar1[1]);
          } else if (-1 !== a && a >= s) e = e.slice(0, a) + i.standardSuffixes3[1];else if (-1 !== o && o >= s) e = e.slice(0, o) + i.standardSuffixes4[1];else if (-1 !== u && u >= s) e = e.slice(0, u) + i.standardSuffixes5[1];else if (-1 !== v && v >= t) e = e.substring(0, v + 1);else if (-1 !== c && c >= r) {
            var x = (e = e.substring(0, c)).search(new RegExp(i.suffixesPrecedingChar2[0])),
                q = e.search(new RegExp(i.suffixesPrecedingChar4[0])),
                j = e.search(new RegExp(i.suffixesPrecedingChar5[0])),
                z = e.search(new RegExp(i.suffixesPrecedingChar6[0]));

            if (x >= s) {
              var S = (e = e.slice(0, x) + i.suffixesPrecedingChar2[1]).search(new RegExp(i.suffixesPrecedingChar3[0]));
              S >= s && (e = e.slice(0, S) + i.suffixesPrecedingChar3[1]);
            } else -1 !== e.search(new RegExp(i.suffixesPrecedingChar4[0])) ? q >= s ? e = e.substring(0, q) : q >= t && (e = e.substring(0, q) + i.suffixesPrecedingChar4[1]) : j >= s ? e = e.slice(0, j) + i.suffixesPrecedingChar5[1] : z >= r && (e = e.slice(0, z) + i.suffixesPrecedingChar6[1]);
          } else if (-1 !== d && d >= s) {
            var R = (e = e.substring(0, d)).search(new RegExp(i.suffixesPrecedingChar7[0])),
                E = e.search(new RegExp(i.suffixesPrecedingChar1[0]));
            -1 !== R ? e = R >= s ? e.substring(0, R) : e.substring(0, R) + i.suffixesPrecedingChar7[1] : -1 !== E ? e = -1 !== E && E >= s ? e.substring(0, E) : e.substring(0, E) + i.suffixesPrecedingChar1[1] : e.search(new RegExp(i.suffixesPrecedingChar2[0])) >= s && (e = e.replace(new RegExp(i.suffixesPrecedingChar2[0]), i.suffixesPrecedingChar2[1]));
          } else if (-1 !== p && p >= s) (e = e.substring(0, p)).search(new RegExp(i.suffixesPrecedingChar3[0])) >= s && (e = (e = e.replace(new RegExp(i.suffixesPrecedingChar3[0]), i.suffixesPrecedingChar3[1])).search(new RegExp(i.suffixesPrecedingChar1[0])) >= s ? e.replace(new RegExp(i.suffixesPrecedingChar1[0]), "") : e.replace(new RegExp(i.suffixesPrecedingChar1[0]), i.suffixesPrecedingChar1[1]));else if (-1 !== m) e = e.replace(new RegExp(i.standardSuffixes9[0]), i.standardSuffixes9[1]);else if (f >= t) e = e.replace(new RegExp(i.standardSuffixes10[0]), i.standardSuffixes10[1]);else if (-1 !== b) {
            var P = e.search(new RegExp(i.standardSuffixes11[0]));
            P >= s ? e = e.substring(0, P) : P >= t && (e = e.substring(0, P) + i.standardSuffixes11[1]);
          } else -1 !== y && y >= r ? e = e.replace(new RegExp(i.standardSuffixes13[0]), i.standardSuffixes13[1]) : -1 !== g && g >= r ? e = e.replace(new RegExp(i.standardSuffixes14[0]), i.standardSuffixes14[1]) : -1 !== w && w >= r && (e = e.substring(0, w + 1));
          return e;
        }(e, i.regularStemmer.standardSuffixes, u, c, d),
            m = function (e, i, t, s) {
          var r = !1;

          if (i === e.toLowerCase() || Re(i, s.exceptions)) {
            r = !0;
            var n = new RegExp(s.suffixes[0]);
            e.search(n) >= t && (e = e.replace(n, s.suffixes[1]));
          }

          return {
            word: e,
            step2aDone: r
          };
        }(e, t, d, i.regularStemmer.verbSuffixesWithIBeginning);

        e = m.word;
        var f = m.step2aDone;
        if (n.includes(e) || (e = function (e, i, t, s, r, n) {
          var l = n.regularStemmer.otherVerbSuffixes;

          if (i && t === e) {
            var a = new RegExp(l[0]);
            if (e.search(a) >= s) return e.replace(a, "");

            for (var o = 1; o < l.length; o++) {
              var u = new RegExp(l[o]);
              if (e.search(u) >= r) return e.replace(u, "");
            }

            if (e.endsWith("ions")) return e;
            var c = new RegExp(n.regularStemmer.verbSuffixOns);
            e.search(c) >= r && (e = e.replace(c, ""));
          }

          return e;
        }(e, f, p, c, d, i)), t === e.toLowerCase()) e = function (e, i, t, s) {
          var r = s.residualSuffixes;
          e.search(new RegExp(r.residualSuffixes1[0])) >= i && (e = e.replace(new RegExp(r.residualSuffixes1[0]), r.residualSuffixes1[1]));
          var n = e.search(new RegExp(r.residualSuffix2));
          if (n >= t && e.search(new RegExp(r.residualSuffix3)) >= i) e = e.substring(0, n);else {
            var l = e.search(new RegExp(r.residualSuffixes4[0]));
            l >= i ? e = e.substring(0, l) + r.residualSuffixes4[1] : (l = e.search(new RegExp(r.residualSuffix5))) >= i ? e = e.substring(0, l) : (l = e.search(new RegExp(r.residualSuffix6[0]))) >= i && (e = e.substring(0, l) + r.residualSuffix6[1]);
          }
          return e;
        }(e, d, c, i.regularStemmer);else {
          var b = i.regularStemmer.yAndSoftCEndingAndReplacement.yEndingAndReplacement,
              v = i.regularStemmer.yAndSoftCEndingAndReplacement.softCEndingAndReplacement;
          e.endsWith(b[0]) ? e = e.slice(0, -1) + b[1] : e.endsWith(v[0]) && (e = e.slice(0, -1) + v[1]);
        }
        e = Ee(e, i.regularStemmer.finalConsonantUndoubling);
        var y = i.regularStemmer.unaccentERegex;
        return function (e, i) {
          var t,
              s = ze(i.adjectives);

          try {
            for (s.s(); !(t = s.n()).done;) {
              var r = t.value;
              if (r.includes(e)) return r[0];
            }
          } catch (e) {
            s.e(e);
          } finally {
            s.f();
          }

          var n,
              l = ze(i.verbs);

          try {
            for (l.s(); !(n = l.n()).done;) {
              var a = n.value;
              if (a.includes(e)) return a[0];
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        }(e = (e = e.replace(new RegExp(y[0]), y[1])).toLowerCase(), i.stemsThatBelongToOneWord) || e;
      }(e, i);
    } : Pe;
  }

  var Ce = d.helpers.formatNumber;

  function Oe(e) {
    var i = 207 - 1.015 * e.numberOfWords / e.numberOfSentences - 73.6 * e.numberOfSyllables / e.numberOfWords;
    return Ce(i);
  }

  var ke = function (e) {
    l()(n, e);
    var i,
        t,
        s = (i = n, t = function () {
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
          s = c()(i);

      if (t) {
        var r = c()(this).constructor;
        e = Reflect.construct(s, arguments, r);
      } else e = s.apply(this, arguments);

      return o()(this, e);
    });

    function n(e) {
      var i;
      return r()(this, n), i = s.call(this, e), Object.assign(i.config, {
        language: "fr",
        passiveConstructionType: "periphrastic",
        firstWordExceptions: p,
        functionWords: Y,
        stopWords: Z,
        transitionWords: f,
        twoPartTransitionWords: ee,
        syllables: ie
      }), Object.assign(i.helpers, {
        getClauses: xe,
        getStemmer: _e,
        fleschReadingScore: Oe
      }), i;
    }

    return n;
  }(d.languageProcessing.AbstractResearcher);
}]);