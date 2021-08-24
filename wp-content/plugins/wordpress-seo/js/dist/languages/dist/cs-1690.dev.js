"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
  }

  return i.m = e, i.c = t, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      i.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 39);
}({
  0: function _(e, t) {
    e.exports = window.yoast.analysis;
  },
  1: function _(e, t) {
    function i(t) {
      return e.exports = i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, i(t);
    }

    e.exports = i, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  2: function _(e, t) {
    e.exports = window.lodash;
  },
  3: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  39: function _(e, t, i) {
    "use strict";

    i.r(t), i.d(t, "default", function () {
      return R;
    });
    var n = i(3),
        o = i.n(n),
        s = i(4),
        r = i.n(s),
        u = i(5),
        a = i.n(u),
        f = i(1),
        d = i.n(f),
        l = i(0),
        c = ["ten", "nula", "jeden", "jedné", "jedna", "jedno", "dva", "dvě", "dvou", "tři", "čtyři", "pět", "šest", "sedm", "osm", "devět", "deset", "sto", "tisíc", "tento", "ta", "tato", "to", "toto", "ti", "tito", "kdo", "co"],
        v = ["protože", "když", "sbohem", "sotva", "kdo", "co", "kde", "odkud", "kdy", "odkdy", "ačkoli", "navzdory", "ačkoli", "když", "kde", "aby", "pořádku", "kdyby", "jak", "do", "že", "jako", "přesně", "jako", "než", "aby", "kdo", "kde", "kdo", "koho", "kde", "kolik", "odkud", "proč", "kolik", "nebo"],
        k = ["předtím", "vždyť", "definitely", "konečně", "jasné", "možné", "ale", "demzufolge", "však", "ačkoliv", "protože", "ovšem", "zkrátka", "potom", "stejně", "tím", "jinak", "zatímco", "když", "co", "kdežto", "ačkoli", "přestože", "čas", "chvíle", "chvilka", "avšak", "jenže", "nicméně", "přitom", "aniž", "a", "proto", "tedy", "teda", "totiž", "mimoto", "čímž", "což", "než", "nejenže", "také", "jenom", "přesto", "jak", "jelikož", "takže", "zda", "sice", "tudíž", "jakoby", "nýbrž", "neboli", "jen", "čili", "pak", "jenomže", "kdežto", "leč", "poněvadž", "třeba", "přece", "nežli", "zdali", "buďto", "totiž", "jenom", "leda", "pakliže", "třebaže", "jakože", "jakkoli", "nechť", "sotva", "kterak", "sic", "jakkoliv", "ledaže", "ježto", "třebas", "jakž", "pakli", "zdalipak", "takž", "jakže", "pokavaď", "jakby", "pokudž", "sotvaže", "pokad", "kdyžtě", "mezitímco", "buďsi", "byťsi", "pokadž", "tedyť", "buďže", "dle", "vzhledem", "místo", "vedle", "okolo", "uprostřed", "namísto", "navzdory", "krom", "poblíž", "blízko", "nedaleko", "začátkem", "naproti", "počátkem", "počínaje", "postupem", "vlivem", "vyjma", "následkem", "dík", "zpoza", "zásluhou", "nevyjímaje", "doprostřed", "zpod", "zespoda", "závěrem", "úvodem", "přese", "prostřed", "nepočítaje", "úměrně", "vprostřed", "navrch", "vevnitř", "zespodu", "poblíže", "počínajíc", "nadtoť", "zpozad", "vyjímaje", "začínaje", "zespod", "navrchu", "vyjímajíc", "navzdor", "dál", "veprostřed", "končíc", "začínajíc", "nepočítajíc", "zvíce", "vprostředku", "opodále", "podále", "naprostřed", "vlastně", "podle", "samozřejmě", "vždyť", "zatím", "dřív", "radši", "spíš", "poprvé", "nakonec", "navíc", "záleží", "zbytek", "kým", "jakmile", "skutečně", "tentokrát", "představit", "jménem"],
        m = k.concat(["a proto", "i když", "i přestože", "z tohoto důvodu", "kromě toho", "nějaký čas", "k tomu", "na jedné straně", "stručně řečeno", "jinými slovy", "důvod je", "důvodem je", "hlavně protože", "možným důvodem je", "a potom", "mimo to", "z uvedených důvodů", "z těchto důvodů", "důvod je jednoduchý", "teprve potom", "hlavní důvod proč", "nejdřív potom", "přesto však", "ale zároveň", "ale také", "během toho"]),
        b = [].concat([], ["nula", "jeden", "jedné", "jedna", "jedno", "dva", "dvě", "dvou", "tři", "čtyři", "pět", "šest", "sedm", "osm", "devět", "deset", "jedenáct", "dvanáct", "třináct", "čtrnáct", "patnáct", "šestnáct", "sedmnáct", "osmnáct", "devatenáct", "dvacet", "dvacet jedna", "dvacet dva", "dvacet tři", "třicet", "čtyřicet", "padesát", "šedesát", "sedmdesát", "osmdesát", "devadesát", "sto", "dvě stě", "tři sta", "čtyři sta", "pět set", "šest set", "sedm set", "osm set", "devět set", "tisíc", "dva tisíce", "jedenáct tisíc", "dvacet pět tisíc", "sto třicet osm tisíc", "milión", "dva milióny", "pět miliónů", "šest miliónů", "sedm miliónů", "miliarda"], ["první", "druhý", "druhé", "třetí", "čtvrtý", "pátý", "šestý", "sedmý", "osmý", "devátý", "desátý"], ["já", "ty", "on", "ona", "ono", "my", "mě", "mne", "mi", "mně", "vy", "oni", "ony", "tě", "ti", "tebe", "tobě", "jeho", "něho", "ho", "jej", "něj", "ji", "jí", "ní", "je", "ně", "jim", "nim", "jimi", "nimi", "jich", "nich", "jemu", "němu", "něm", "mém", "mým", "mých", "mou", "mými", "ním", "mu", "nás", "nám", "námi", "vás", "vám", "mnou", "námi", "tebou", "vámi", "našich", "tys", "naši", "můj", "má", "mé", "mí", "moje", "mého", "mojí", "mých", "mému", "moji", "tvůj", "tvoje", "tvá", "tvé", "tví", "tvoji", "tvého", "tvojí", "tvých", "tvojích", "tvému", "tvým", "tvou", "tvém", "tvých", "tvými", "jeho", "její", "náš", "naše", "váš", "vaše", "jejich", "vaší", "naší", "ten", "tento", "ta", "tato", "to", "toto", "ti", "tito", "tyto", "ty", "tato", "tohle", "toho", "abych", "těch", "tenhle", "abyste", "abychom", "tyhle", "tuhle", "tohoto", "čeho", "čemu", "téhle", "těmi", "této", "tomhle", "tou", "tahle", "žes", "tímhle", "těm", "těchto", "tomu", "tu", "ten", "tom", "tím", "který", "která", "které", "kterého", "kterému", "kterou", "kterém", "kterým", "kteří", "kterých", "kterými", "jenž", "jež", "jehož", "jejž", "něhož", "nějž", "jíž", "níž", "jemuž", "němuž", "jež", "něž", "němž", "jímž", "nímž", "již", "jichž", "nichž", "jimž", "nimž", "jimiž", "nimiž", "kdo", "co", "koho", "čeho", "komu", "čemu", "koho", "kom", "čem", "kým", "čím", "cože", "což", "koho", "jakou"], ["co", "čí", "čím", "jak", "jaký", "jaké", "kde", "kdo", "kdý", "kolik", "který", "jenž", "proč"], ["nějaký", "nějaká", "nějaké", "žádný", "nijaký", "lecjaký", "ledajaký", "ledasjaký", "kdejaký", "kdekterý", "všelijaký", "veškerý", "pár", "hodně", "celý", "tolik", "celou", "celé", "oba", "buď", "zbytek", "žádná", "nějakou", "spoustu", "několik"], ["se", "si", "sebe", "sobě", "sebou", "svůj", "svoje", "svá", "své", "svého", "svojí", "svému", "svoji", "svou", "svém", "svým", "sví", "svých", "svými"], ["někdo", "někoho", "někomu", "někom", "někým", "něco", "nic", "něčeho", "něčemu", "něco", "cokoli", "cokoliv", "něčem", "něčím", "některá", "některé", "některého", "některému", "některý", "některou", "některém", "některým", "někteří", "některých", "některými", "nějaká", "nějaké", "nějakého", "nějakému", "nějaký", "nějakou", "nějakém", "nějakým", "nějací", "nějakých", "nějakými", "něčí", "něčího", "něčímu", "něčím", "něčí", "ničí", "něčích", "něčími", "ledakdo", "ledaco", "ledajaký", "ledakterý", "kdokoliv", "kdokoli", "kohokoli", "komukoli", "kohokoli", "komkoli", "kýmkoli", "cokoli", "jakýkoli", "jakýkoliv", "kterýkoli", "číkoli", "kdos", "kdosi", "cosi", "kterýsi", "jakýsi", "nikdo", "čísi", "leckdo", "leckdos", "ledakdo", "ledaskdo", "kdekdo", "lecco", "leccos", "ledaco", "ledacos", "ledaco", "ledasco", "leckterý", "kdekdo", "kdečí", "kdeco", "lecčí", "ledačí", "ledasčí", "někde", "nikde", "kdekoliv", "kdekoli", "všude", "leckde", "ledaskde", "ledakde", "někudy", "kudysi", "nikudy", "kdekudy", "odněkud", "odkudsi", "odnikud", "odevšad", "kdesi", "všechen", "málokdo", "máloco", "málokterý", "zřídkakdo", "zřídkaco", "sotvakdo", "sotvaco", "sotva který", "každý", "každá", "každé", "každého", "každému", "každému", "každou", "každém", "každým", "každí", "každých", "každým", "každými", "všechen", "všechna", "všechno", "vše", "všeho", "vší", "všemu", "všechnu", "vším", "všichni", "všechny", "všech", "všem", "všemi", "takový", "takové ", "takového", "takovou", "cokoliv", "jiného", "jiný", "taková", "jiné", "odtud"], ["během", "bez", "blízko", "do", "od", "okolo", "kolem", "u", "vedle", "z", "ze", "k", "ke", "kvůli", "navzdor", "navzdory", "krom, vedle", "kromě, vedle", "místo", "namísto", "ohledně", "podél", "pomocí", "oproti", "naproti", "proti", "prostřednictvím", "s", "u", "vlivem", "vyjma", "využitím", "stran", "díky", "kvůli", "podle", "vůči", "na", "té", "o", "pro", "přes", "za", "po", "v", "ve", "mezi", "s", "se", "nad", "pod", "před", "mimo", "skrz", "při", "jako", "asi", "dokud", "ven", "běž", "odkud", "ode", "nahoře", "nahoru", "dovnitř", "dne", "beze", "napříč", "versus", "via", "vně", "dovnitř", "vpředu", "vůkol", "vespod", "opodál", "vepředu", "svrchu", "vnitř", "zprostřed", "naspodu", "zdéli", "okol", "podál", "naspod", "kontra", "vespodu", "zponad", "ponad", "nadtož", "kolkolem", "zdélí", "veskrz", "popod", "daleko", "vůkolem"], ["a", "i", "aby", "ale", "že", "protože", "neboť", "když", "až", "jestli", "jestliže", "pokud", "kdyby", "nebo", "anebo", "či", "proto", "který", "jenž", "aniž", "než", "tak", "takže", "kvůli", "kdybych", "ach", "zdá", "zatím", "během", "kdybyste", "jakožto", "jakož", "neb"], ["řekl", "říkala", "řekla", "řekne", "říkal", "říká", "podle", "neřekl", "říkat", "chtějí", "neviděl", "vypadáš", "mluvil", "rozumím", "znám", "cítím", "nemyslím", "víme", "nevěřím", "myslíte"], ["jasně", "velmi", "vůbec", "přesně", "určitě", "úplně", "samozřejmě", "docela", "skutečně", "rozhodně", "vážně", "spolu", "jistě", "naprosto", "velice", "hrozně", "strašně", "opravdu"], ["mělo", "přijít", "podívat", "dělej", "dá", "dala", "přijde", "stojí", "udělám", "mohlo", "nechte", "nemáme", "dám", "přišla", "dělal", "dejte"], ["dobře", "dobrý", "dobrá", "dobré", "dost", "dlouho", "dlouha", "nejlepší", "poslední", "rychle", "lepší", "vlastní", "ostatní", "velký", "starý", "líp", "malé", "špatný", "lépe", "hlavní", "právo", "úžasné", "pěkný", "stejné", "spousta", "skvělá", "dobrej", "horší", "novou", "stará", "nového", "nejdřív", "druhou", "naposledy", "hezký", "dlouhý", "dobrý", "malý", "těžký", "velký", "zlý", "delší", "lepší", "menší", "těžší", "větší", "horší", "nejdelší", "nejlepší", "nejmenší", "nejtěžší", "největší", "nejhorší", "pěkně", "všelijak", "nějak", "jaksi", "tak nějak", "ijak", "nikterak", "akkoli", "akkoliv", "kdejak", "už", "jen", "tady", "teď", "ještě", "možná", "nikdy", "ani", "taky", "pak", "trochu", "prostě", "víc", "jenom", "další", "právě", "zpátky", "vždycky", "pryč", "zase", "někdy", "také", "chvíli", "znovu", "snad", "třeba", "stále", "zrovna", "příliš", "nějak", "vždy", "skoro", "kolem", "později", "zpět", "najednou", "támhle", "někam", "hlavně", "často", "občas", "společně", "dokonce", "zde", "aspoň", "jediný", "pouze", "stačí", "mnohem", "zas", "nikam", "dávno", "již", "dvakrát", "vzhůru", "pomalu", "bohužel", "raději", "nejspíš", "náhodou", "okamžitě"], ["jo", "hej", "oh", "uh ", "hele", "fajn", "ok", "proboha", "ah", "okay"], [], ["den", "dnes", "čas", "ráno", "zítra", "dneska", "minut", "včera", "času", "dní", "dni", "dny", "hodinu", "hodin", "týdny", "měsíce", "roku", "měsíců"], ["věc", "věci", "můžeš", "člověk", "lidi", "člověka", "člověku", "člověče", "člověku", "člověkovi", "lidech", "lidem", "lidé", "lidí", "člověkem", "lidmi", "chlap", "místa"], ["atd.", "bůhvíkdo", "bůhvíjaký", "bůhvíčí", "nevímco", "nevímkdo a podobně", "si", "ne", "ně", "pan", "pane", "pana", "paní", "prosím", "pořádku", "líto", "chlape", "slečno", "mimochodem"], k),
        p = [["buď", "nebo"], ["buď", "anebo"], ["ani", "ani"], ["nejen", "ale i"], ["jak", "tak"], ["sice", "ale"], ["sice", "však"], ["jednak", "jednak"]],
        x = i(7),
        g = i.n(x),
        S = ["án", "ána", "áno", "áni", "ány", "ován", "ána", "áno", "áni", "ány", "en", "ena", "eno", "eni", "eny", "ěn", "ěna", "ěno", "ěni", "ěny", "et", "eta", "eto", "eti", "ety", "it", "ita", "ito", "iti", "ity", "at", "ata", "ato", "ati", "aty", "yt", "yta", "yto", "yti", "yty", "ut", "uta", "uto", "uti", "uty"],
        j = l.languageProcessing.getWords;

    var h = function (e) {
      r()(s, e);
      var t,
          i,
          n = (t = s, i = function () {
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
            n = d()(t);

        if (i) {
          var o = d()(this).constructor;
          e = Reflect.construct(n, arguments, o);
        } else e = n.apply(this, arguments);

        return a()(this, e);
      });

      function s(e, t) {
        var i;
        return o()(this, s), (i = n.call(this, e, t))._participles = function (e) {
          return j(e).filter(function (e) {
            return S.some(function (t) {
              return e.endsWith(t);
            });
          });
        }(i.getClauseText()), i.checkParticiples(), i;
      }

      return g()(s, [{
        key: "checkParticiples",
        value: function value() {
          this.setPassive(this.getParticiples().length > 0);
        }
      }]), s;
    }(l.languageProcessing.values.Clause),
        y = l.languageProcessing.getClausesSplitOnStopWords,
        z = l.languageProcessing.createRegexFromArray,
        A = {
      Clause: h,
      regexes: {
        auxiliaryRegex: z(["být", "byl", "byla", "bylo", "byli", "byly", "je", "jsem", "jsi", "jste", "jste", "jsme", "jste", "jsou", "budu", "budeš", "budete", "bude", "budeme", "budete", "budou", "nebyl", "nebyla", "nebylo", "nebyli", "nebily", "nebudu", "nebudeš", "nebudete", "nebude", "nebudeme", "nebudete", "nebudou"]),
        stopCharacterRegex: /([:,])(?=[ \n\r\t'"+\-»«‹›<>])/gi,
        stopwordRegex: z(v)
      }
    };

    function O(e) {
      return y(e, A);
    }

    var I = i(2);

    function _(e, t) {
      var i;

      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = function (e, t) {
          if (e) {
            if ("string" == typeof e) return E(e, void 0);
            var i = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? E(e, void 0) : void 0;
          }
        }(e)) || t && e && "number" == typeof e.length) {
          i && (e = i);

          var _n = 0,
              o = function o() {};

          return {
            s: o,
            n: function n() {
              return _n >= e.length ? {
                done: !0
              } : {
                done: !1,
                value: e[_n++]
              };
            },
            e: function e(_e) {
              throw _e;
            },
            f: o
          };
        }

        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      var s,
          r = !0,
          u = !1;
      return {
        s: function s() {
          i = e[Symbol.iterator]();
        },
        n: function n() {
          var e = i.next();
          return r = e.done, e;
        },
        e: function e(_e2) {
          u = !0, s = _e2;
        },
        f: function f() {
          try {
            r || null == i["return"] || i["return"]();
          } finally {
            if (u) throw s;
          }
        }
      };
    }

    function E(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var i = 0, n = new Array(t); i < t; i++) {
        n[i] = e[i];
      }

      return n;
    }

    var C = function C(e, t) {
      var i = t.externalStemmer.palataliseSuffixes,
          n = e.length;
      return e.substring(n - 2, n) === i.palataliseSuffixCi || e.substring(n - 2, n) === i.palataliseSuffixCe || e.substring(n - 2, n) === i.palataliseSuffixCiCaron || e.substring(n - 2, n) === i.palataliseSuffixCeCaron ? e.replace(e.substring(n - 2, n), i.palataliseSuffixK) : e.substring(n - 2, n) === i.palataliseSuffixZi || e.substring(n - 2, n) === i.palataliseSuffixZe || e.substring(n - 2, n) === i.palataliseSuffixZiCaron || e.substring(n - 2, n) === i.palataliseSuffixZeCaron ? e.replace(e.substring(n - 2, n), i.palataliseSuffixH) : e.substring(n - 3, n) === i.palataliseSuffixCte || e.substring(n - 3, n) === i.palataliseSuffixCti || e.substring(n - 3, n) === i.palataliseSuffixCtiAccented ? e.replace(e.substring(n - 3, n), i.palataliseSuffixCk) : e.substring(n - 3, n) === i.palataliseSuffixSte || e.substring(n - 3, n) === i.palataliseSuffixSti || e.substring(n - 3, n) === i.palataliseSuffixStiAccented ? e.replace(e.substring(n - 3, n), i.palataliseSuffixSk) : e.slice(0, -1);
    };

    var w = l.languageProcessing.baseStemmer;

    function P(e) {
      var t = Object(I.get)(e.getData("morphology"), "cs", !1);
      return t ? function (e) {
        return function (e, t) {
          return function (e, t) {
            var i,
                n = _(t.externalStemmer.stemsThatBelongToOneWord.nouns);

            try {
              for (n.s(); !(i = n.n()).done;) {
                var o = i.value;
                if (o.includes(e)) return o[0];
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }

            return e;
          }(e = function (e, t) {
            var i = t.externalStemmer.derivationalSuffixes,
                n = e.length;
            if (n > 8 && e.substring(n - 6, n) === i.derivationalSuffixObinec) return e.slice(0, -6);

            if (n > 7) {
              if (e.substring(n - 5, n) === i.derivationalSuffixIonar) return e = e.slice(0, -4), C(e, t);
              if (e.substring(n - 5, n) === i.derivationalSuffixOvisk || e.substring(n - 5, n) === i.derivationalSuffixOvstv || e.substring(n - 5, n) === i.derivationalSuffixOvist || e.substring(n - 5, n) === i.derivationalSuffixOvnik) return e.slice(0, -5);
            }

            if (n > 6) {
              if (e.substring(n - 4, n) === i.derivationalSuffixAsek || e.substring(n - 4, n) === i.derivationalSuffixLoun || e.substring(n - 4, n) === i.derivationalSuffixNost || e.substring(n - 4, n) === i.derivationalSuffixTeln || e.substring(n - 4, n) === i.derivationalSuffixOvec || e.substring(n - 5, n) === i.derivationalSuffixOvik || e.substring(n - 4, n) === i.derivationalSuffixOvtv || e.substring(n - 4, n) === i.derivationalSuffixOvin || e.substring(n - 4, n) === i.derivationalSuffixStin) return e.slice(0, -4);
              if (e.substring(n - 4, n) === i.derivationalSuffixEnic || e.substring(n - 4, n) === i.derivationalSuffixInec || e.substring(n - 4, n) === i.derivationalSuffixItel) return e = e.slice(0, -3), C(e, t);
            }

            if (n > 5) {
              if (e.substring(n - 3, n) === i.derivationalSuffixEnk || e.substring(n - 3, n) === i.derivationalSuffixIan || e.substring(n - 3, n) === i.derivationalSuffixIst || e.substring(n - 3, n) === i.derivationalSuffixIsk || e.substring(n - 3, n) === i.derivationalSuffixIstCaron || e.substring(n - 3, n) === i.derivationalSuffixItb || e.substring(n - 3, n) === i.derivationalSuffixIrn) return e = e.slice(0, -2), C(e, t);
              if (e.substring(n - 3, n) === i.derivationalSuffixArn || e.substring(n - 3, n) === i.derivationalSuffixOch || e.substring(n - 3, n) === i.derivationalSuffixOst || e.substring(n - 3, n) === i.derivationalSuffixOvn || e.substring(n - 3, n) === i.derivationalSuffixOun || e.substring(n - 3, n) === i.derivationalSuffixOut || e.substring(n - 3, n) === i.derivationalSuffixOus || e.substring(n - 3, n) === i.derivationalSuffixUsk || e.substring(n - 3, n) === i.derivationalSuffixKyn || e.substring(n - 3, n) === i.derivationalSuffixCan || e.substring(n - 3, n) === i.derivationalSuffixKar || e.substring(n - 3, n) === i.derivationalSuffixNer || e.substring(n - 3, n) === i.derivationalSuffixNik || e.substring(n - 3, n) === i.derivationalSuffixCtv || e.substring(n - 3, n) === i.derivationalSuffixStv) return e.slice(0, -3);
            }

            if (n > 4) {
              if (e.substring(n - 2, n) === i.derivationalSuffixAcAccented || e.substring(n - 2, n) === i.derivationalSuffixAc || e.substring(n - 2, n) === i.derivationalSuffixAnAccented || e.substring(n - 2, n) === i.derivationalSuffixAn || e.substring(n - 2, n) === i.derivationalSuffixAr || e.substring(n - 2, n) === i.derivationalSuffixAs) return e.slice(0, -2);
              if (e.substring(n - 2, n) === i.derivationalSuffixEc || e.substring(n - 2, n) === i.derivationalSuffixEn || e.substring(n - 2, n) === i.derivationalSuffixEnCaron || e.substring(n - 2, n) === i.derivationalSuffixEr || e.substring(n - 2, n) === i.derivationalSuffixIr || e.substring(n - 2, n) === i.derivationalSuffixIc || e.substring(n - 2, n) === i.derivationalSuffixIn || e.substring(n - 2, n) === i.derivationalSuffixInAccented || e.substring(n - 2, n) === i.derivationalSuffixIt || e.substring(n - 2, n) === i.derivationalSuffixIv) return e = e.slice(0, -1), C(e, t);
              if (e.substring(n - 2, n) === i.derivationalSuffixOb || e.substring(n - 2, n) === i.derivationalSuffixOt || e.substring(n - 2, n) === i.derivationalSuffixOv || e.substring(n - 2, n) === i.derivationalSuffixOn || e.substring(n - 2, n) === i.derivationalSuffixUl || e.substring(n - 2, n) === i.derivationalSuffixYn || e.substring(n - 2, n) === i.derivationalSuffixCk || e.substring(n - 2, n) === i.derivationalSuffixCn || e.substring(n - 2, n) === i.derivationalSuffixDl || e.substring(n - 2, n) === i.derivationalSuffixNk || e.substring(n - 2, n) === i.derivationalSuffixTv || e.substring(n - 2, n) === i.derivationalSuffixTk || e.substring(n - 2, n) === i.derivationalSuffixVk) return e.slice(0, -2);
            }

            return n > 3 && (e.charAt(e.length - 1) === i.derivationalSuffixC || e.charAt(e.length - 1) === i.derivationalSuffixCCaron || e.charAt(e.length - 1) === i.derivationalSuffixK || e.charAt(e.length - 1) === i.derivationalSuffixL || e.charAt(e.length - 1) === i.derivationalSuffixN || e.charAt(e.length - 1) === i.derivationalSuffixT) ? e.slice(0, -1) : e;
          }(e = function (e, t) {
            var i = t.externalStemmer.augmentativeSuffixes,
                n = e.length;
            return n > 6 && e.substring(n - 4, n) === i.augmentativeSuffixAjzn ? e.slice(0, -4) : n > 5 && e.substring(n - 3, n) === i.augmentativeSuffixIzn || e.substring(n - 3, n) === i.augmentativeSuffixIsk ? (e = e.slice(0, -2), C(e, t)) : e;
          }(e = function (e, t) {
            var i = t.externalStemmer.diminutiveSuffixes,
                n = e.length;
            if (n > 7 && e.substring(n - 5, n) === i.diminutiveSuffixOusek) return e.slice(0, -5);

            if (n > 6) {
              if (e.substring(n - 4, n) === i.diminutiveSuffixEcek || e.substring(n - 4, n) === i.diminutiveSuffixEcekAccented || e.substring(n - 4, n) === i.diminutiveSuffixIcek || e.substring(n - 4, n) === i.diminutiveSuffixIcekAccented || e.substring(n - 4, n) === i.diminutiveSuffixEnek || e.substring(n - 4, n) === i.diminutiveSuffixEnekAccented || e.substring(n - 4, n) === i.diminutiveSuffixInek || e.substring(n - 4, n) === i.diminutiveSuffixInekAccented) return e = e.slice(0, -3), C(e, t);
              if (e.substring(n - 4, n) === i.diminutiveSuffixAcekAccented || e.substring(n - 4, n) === i.diminutiveSuffixAcek || e.substring(n - 4, n) === i.diminutiveSuffixOcek || e.substring(n - 4, n) === i.diminutiveSuffixUcek || e.substring(n - 4, n) === i.diminutiveSuffixAnek || e.substring(n - 4, n) === i.diminutiveSuffixOnek || e.substring(n - 4, n) === i.diminutiveSuffixUnek || e.substring(n - 4, n) === i.diminutiveSuffixAnekAccented) return e.slice(0, -4);
            }

            if (n > 5) {
              if (e.substring(n - 3, n) === i.diminutiveSuffixEck || e.substring(n - 3, n) === i.diminutiveSuffixEckAccented || e.substring(n - 3, n) === i.diminutiveSuffixIck || e.substring(n - 3, n) === i.diminutiveSuffixIckAccented || e.substring(n - 3, n) === i.diminutiveSuffixEnk || e.substring(n - 3, n) === i.diminutiveSuffixEnkAccented || e.substring(n - 3, n) === i.diminutiveSuffixInk || e.substring(n - 3, n) === i.diminutiveSuffixInkAccented) return e = e.slice(0, -3), C(e, t);
              if (e.substring(n - 3, n) === i.diminutiveSuffixAckAccented || e.substring(n - 3, n) === i.diminutiveSuffixAck || e.substring(n - 3, n) === i.diminutiveSuffixOck || e.substring(n - 3, n) === i.diminutiveSuffixUck || e.substring(n - 3, n) === i.diminutiveSuffixAnk || e.substring(n - 3, n) === i.diminutiveSuffixOnk || e.substring(n - 3, n) === i.diminutiveSuffixUnk) return e.slice(0, -3);
              if (e.substring(n - 3, n) === i.diminutiveSuffixAtk || e.substring(n - 3, n) === i.diminutiveSuffixAnkAccented || e.substring(n - 3, n) === i.diminutiveSuffixUsk) return e.slice(0, -3);
            }

            if (n > 4) {
              if (e.substring(n - 2, n) === i.diminutiveSuffixEk || e.substring(n - 2, n) === i.diminutiveSuffixEkAccented || e.substring(n - 2, n) === i.diminutiveSuffixIkAccented || e.substring(n - 2, n) === i.diminutiveSuffixIk) return e = e.slice(0, -1), C(e, t);
              if (e.substring(n - 2, n) === i.diminutiveSuffixAkAccented || e.substring(n - 2, n) === i.diminutiveSuffixAk || e.substring(n - 2, n) === i.diminutiveSuffixOk || e.substring(n - 2, n) === i.diminutiveSuffixUk) return e.slice(0, -1);
            }

            return n > 3 && e.substring(n - 1, n) === i.diminutiveSuffixK ? e.slice(0, -1) : e;
          }(e = function (e, t) {
            var i = t.externalStemmer.comparativeSuffixes,
                n = e.length;
            return n > 5 && e.substring(n - 3, n) === i.comparativeSuffixesEjs || e.substring(n - 3, n) === i.comparativeSuffixesEjsCaron ? (e = e.slice(0, -2), C(e, t)) : e;
          }(e = function (e, t) {
            var i = t.externalStemmer.possessiveSuffixes,
                n = e.length;

            if (n > 5) {
              if (e.substring(n - 2, n) === i.possessiveSuffixOv) return e.slice(0, -2);
              if (e.substring(n - 2, n) === i.possessiveSuffixesUv) return e.slice(0, -2);
              if (e.substring(n - 2, n) === i.possessiveSuffixIn) return e = e.slice(0, -1), C(e, t);
            }

            return e;
          }(e = function (e, t) {
            var i = t.externalStemmer.caseSuffixes,
                n = e.length;
            if (n > 7 && e.substring(n - 5, n) === i.caseSuffixAtech) return e.slice(0, -5);

            if (n > 6) {
              if (e.substring(n - 4, n) === i.caseSuffixEtem) return e = e.slice(0, -3), C(e, t);
              if (e.substring(n - 4, n) === i.caseSuffixAtum) return e.slice(0, -4);
            }

            if (n > 5) {
              if (e.substring(n - 3, n) === i.caseSuffixEch || e.substring(n - 3, n) === i.caseSuffixIch || e.substring(n - 3, n) === i.caseSuffixIchAccented || e.substring(n - 3, n) === i.caseSuffixEho || e.substring(n - 3, n) === i.caseSuffixEmiCaron || e.substring(n - 3, n) === i.caseSuffixEmi || e.substring(n - 3, n) === i.caseSuffixEmuAccented || e.substring(n - 3, n) === i.caseSuffixEte || e.substring(n - 3, n) === i.caseSuffixEti || e.substring(n - 3, n) === i.caseSuffixIho || e.substring(n - 3, n) === i.caseSuffixIhoAccented || e.substring(n - 3, n) === i.caseSuffixImi || e.substring(n - 3, n) === i.caseSuffixImu) return e = e.slice(0, -2), C(e, t);
              if (e.substring(n - 3, n) === i.caseSuffixAchAccented || e.substring(n - 3, n) === i.caseSuffixAta || e.substring(n - 3, n) === i.caseSuffixAty || e.substring(n - 3, n) === i.caseSuffixYch || e.substring(n - 3, n) === i.caseSuffixAma || e.substring(n - 3, n) === i.caseSuffixAmi || e.substring(n - 3, n) === i.caseSuffixOve || e.substring(n - 3, n) === i.caseSuffixOvi || e.substring(n - 3, n) === i.caseSuffixYmi) return e.slice(0, -3);
            }

            if (n > 4) {
              if (e.substring(n - 2, n) === i.caseSuffixEm) return e = e.slice(0, -1), C(e, t);
              if (e.substring(n - 2, n) === i.caseSuffixEs || e.substring(n - 2, n) === i.caseSuffixEmAccented || e.substring(n - 2, n) === i.caseSuffixIm) return e = e.slice(0, -2), C(e, t);
              if (e.substring(n - 2, n) === i.caseSuffixUm || e.substring(n - 2, n) === i.caseSuffixAt || e.substring(n - 2, n) === i.caseSuffixAm || e.substring(n - 2, n) === i.caseSuffixOs || e.substring(n - 2, n) === i.caseSuffixUs || e.substring(n - 2, n) === i.caseSuffixYm || e.substring(n - 2, n) === i.caseSuffixMi || e.substring(n - 2, n) === i.caseSuffixOu) return e.slice(0, -2);
            }

            if (n > 3) {
              if (e.substring(n - 1, n) === i.caseSuffixE || e.substring(n - 1, n) === i.caseSuffixI || e.substring(n - 1, n) === i.caseSuffixIAccented || e.substring(n - 1, n) === i.caseSuffixECaron) return C(e, t);
              if (e.substring(n - 1, n) === i.caseSuffixU || e.substring(n - 1, n) === i.caseSuffixY || e.substring(n - 1, n) === i.caseSuffixURing || e.substring(n - 1, n) === i.caseSuffixA || e.substring(n - 1, n) === i.caseSuffixO || e.substring(n - 1, n) === i.caseSuffixAAccented || e.substring(n - 1, n) === i.caseSuffixEAccented || e.substring(n - 1, n) === i.caseSuffixYAccented) return e.slice(0, -1);
            }

            return e;
          }(e = function (e, t) {
            var i,
                n = _(t.externalStemmer.exceptionStemsWithFullForms);

            try {
              for (n.s(); !(i = n.n()).done;) {
                var o = i.value;
                if (o[1].includes(e)) return o[0];
              }
            } catch (e) {
              n.e(e);
            } finally {
              n.f();
            }

            return e;
          }(e = e.toLowerCase(), t), t), t), t), t), t), t), t);
        }(e, t);
      } : w;
    }

    var R = function (e) {
      r()(s, e);
      var t,
          i,
          n = (t = s, i = function () {
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
            n = d()(t);

        if (i) {
          var o = d()(this).constructor;
          e = Reflect.construct(n, arguments, o);
        } else e = n.apply(this, arguments);

        return a()(this, e);
      });

      function s(e) {
        var t;
        return o()(this, s), delete (t = n.call(this, e)).defaultResearches.getFleschReadingScore, Object.assign(t.config, {
          language: "cs",
          passiveConstructionType: "periphrastic",
          firstWordExceptions: c,
          stopWords: v,
          functionWords: b,
          transitionWords: m,
          twoPartTransitionWords: p
        }), Object.assign(t.helpers, {
          getClauses: O,
          getStemmer: P
        }), t;
      }

      return s;
    }(l.languageProcessing.AbstractResearcher);
  },
  4: function _(e, t, i) {
    var n = i(8);
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
  5: function _(e, t, i) {
    var n = i(6)["default"],
        o = i(9);
    e.exports = function (e, t) {
      return !t || "object" !== n(t) && "function" != typeof t ? o(e) : t;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  6: function _(e, t) {
    function i(t) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = i = function i(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = i = function i(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), i(t);
    }

    e.exports = i, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  7: function _(e, t) {
    function i(e, t) {
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
      }
    }

    e.exports = function (e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  8: function _(e, t) {
    function i(t, n) {
      return e.exports = i = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, i(t, n);
    }

    e.exports = i, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  9: function _(e, t) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  }
});