"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var r = {};

  function n(t) {
    if (r[t]) return r[t].exports;
    var o = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = e, n.c = r, n.d = function (e, r, t) {
    n.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, r) {
    if (1 & r && (e = n(e)), 8 & r) return e;
    if (4 & r && "object" == _typeof(e) && e && e.__esModule) return e;
    var t = Object.create(null);
    if (n.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var o in e) {
      n.d(t, o, function (r) {
        return e[r];
      }.bind(null, o));
    }
    return t;
  }, n.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(r, "a", r), r;
  }, n.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, n.p = "", n(n.s = 31);
}([function (e, r) {
  e.exports = window.yoast.analysis;
}, function (e, r) {
  function n(r) {
    return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(r);
  }

  e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, r) {
  e.exports = window.lodash;
}, function (e, r) {
  e.exports = function (e, r) {
    if (!(e instanceof r)) throw new TypeError("Cannot call a class as a function");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, r, n) {
  var t = n(8);
  e.exports = function (e, r) {
    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(r && r.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), r && t(e, r);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, r, n) {
  var t = n(6)["default"],
      o = n(9);
  e.exports = function (e, r) {
    return !r || "object" !== t(r) && "function" != typeof r ? o(e) : r;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, r) {
  function n(r) {
    return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = n = function n(e) {
      return _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = n = function n(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0), n(r);
  }

  e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, r) {
  function n(e, r) {
    for (var n = 0; n < r.length; n++) {
      var t = r[n];
      t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
    }
  }

  e.exports = function (e, r, t) {
    return r && n(e.prototype, r), t && n(e, t), e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, r) {
  function n(r, t) {
    return e.exports = n = Object.setPrototypeOf || function (e, r) {
      return e.__proto__ = r, e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(r, t);
  }

  e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, r) {
  e.exports = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},,,,,,,,,,,,,,,,, function (e) {
  e.exports = JSON.parse('{"vowels":"aáäâeéëêiíïîoóöôuúüûy","deviations":{"vowels":[{"fragments":["ue$","dge$","[tcp]iënt","ace$","[br]each","[ainpr]tiaal","[io]tiaan","gua[yc]","[^i]deal","tive$","load","[^e]coke","[^s]core$"],"countModifier":-1},{"fragments":["aä","aeu","aie","ao","ë","eo","eú","ieau","ea$","ea[^u]","ei[ej]","eu[iu]","ï","iei","ienne","[^l]ieu[^w]","[^l]ieu$","i[auiy]","stion","[^cstx]io","^sion","riè","oö","oa","oeing","oie","[eu]ü","[^q]u[aeèo]","uie","[bhnpr]ieel","[bhnpr]iël"],"countModifier":1},{"fragments":["[aeolu]y[aeéèoóu]"],"countModifier":1}],"words":{"full":[{"word":"bye","syllables":1},{"word":"core","syllables":1},{"word":"cure","syllables":1},{"word":"dei","syllables":2},{"word":"dope","syllables":1},{"word":"dude","syllables":1},{"word":"fake","syllables":1},{"word":"fame","syllables":1},{"word":"five","syllables":1},{"word":"hole","syllables":1},{"word":"least","syllables":1},{"word":"lone","syllables":1},{"word":"minute","syllables":2},{"word":"move","syllables":1},{"word":"nice","syllables":1},{"word":"one","syllables":1},{"word":"state","syllables":1},{"word":"surplace","syllables":2},{"word":"take","syllables":1},{"word":"trade","syllables":1},{"word":"wide","syllables":1}],"fragments":{"global":[{"word":"adieu","syllables":2},{"word":"airline","syllables":2},{"word":"airmiles","syllables":2},{"word":"alien","syllables":3},{"word":"ambient","syllables":3},{"word":"announcement","syllables":3},{"word":"appearance","syllables":3},{"word":"appeasement","syllables":3},{"word":"atheneum","syllables":4},{"word":"awesome","syllables":2},{"word":"baccalaurei","syllables":5},{"word":"baccalaureus","syllables":5},{"word":"baseball","syllables":3},{"word":"basejump","syllables":2},{"word":"banlieue","syllables":3},{"word":"bapao","syllables":2},{"word":"barbecue","syllables":3},{"word":"beamer","syllables":2},{"word":"beanie","syllables":2},{"word":"beat","syllables":1},{"word":"belle","syllables":2},{"word":"bête","syllables":1},{"word":"bingewatch","syllables":2},{"word":"blocnote","syllables":2},{"word":"blue","syllables":1},{"word":"board","syllables":1},{"word":"break","syllables":1},{"word":"broad","syllables":1},{"word":"bulls-eye","syllables":2},{"word":"business","syllables":2},{"word":"byebye","syllables":2},{"word":"cacao","syllables":2},{"word":"caesar","syllables":2},{"word":"camaieu","syllables":3},{"word":"caoutchouc","syllables":2},{"word":"carbolineum","syllables":5},{"word":"catchphrase","syllables":1},{"word":"carrier","syllables":3},{"word":"cheat","syllables":1},{"word":"cheese","syllables":1},{"word":"circonflexe","syllables":3},{"word":"clean","syllables":1},{"word":"cloak","syllables":1},{"word":"cobuying","syllables":3},{"word":"comeback","syllables":2},{"word":"comfortzone","syllables":3},{"word":"communiqué","syllables":4},{"word":"conopeum","syllables":4},{"word":"console","syllables":2},{"word":"corporate","syllables":3},{"word":"coûte","syllables":1},{"word":"creamer","syllables":2},{"word":"crime","syllables":1},{"word":"cruesli","syllables":2},{"word":"deadline","syllables":2},{"word":"deautoriseren","syllables":6},{"word":"deuce","syllables":1},{"word":"deum","syllables":2},{"word":"dirndl","syllables":2},{"word":"dread","syllables":2},{"word":"dreamteam","syllables":2},{"word":"drone","syllables":1},{"word":"enquête","syllables":3},{"word":"escape","syllables":2},{"word":"exposure","syllables":3},{"word":"extranei","syllables":4},{"word":"extraneus","syllables":4},{"word":"eyecatcher","syllables":3},{"word":"eyeliner","syllables":3},{"word":"eyeopener","syllables":4},{"word":"eyetracker","syllables":3},{"word":"eyetracking","syllables":3},{"word":"fairtrade","syllables":2},{"word":"fauteuil","syllables":2},{"word":"feature","syllables":2},{"word":"feuilletee","syllables":3},{"word":"feuilleton","syllables":3},{"word":"fisheye","syllables":2},{"word":"fineliner","syllables":3},{"word":"finetunen","syllables":3},{"word":"forehand","syllables":2},{"word":"freak","syllables":1},{"word":"fusioneren","syllables":4},{"word":"gayparade","syllables":3},{"word":"gaypride","syllables":2},{"word":"goal","syllables":1},{"word":"grapefruit","syllables":2},{"word":"gruyère","syllables":3},{"word":"guele","syllables":1},{"word":"guerrilla","syllables":3},{"word":"guest","syllables":1},{"word":"hardware","syllables":2},{"word":"haute","syllables":1},{"word":"healing","syllables":2},{"word":"heater","syllables":2},{"word":"heavy","syllables":2},{"word":"hoax","syllables":1},{"word":"hotline","syllables":2},{"word":"idee-fixe","syllables":3},{"word":"inclusive","syllables":3},{"word":"inline","syllables":2},{"word":"intake","syllables":2},{"word":"intensive","syllables":3},{"word":"jeans","syllables":1},{"word":"Jones","syllables":1},{"word":"jubileum","syllables":4},{"word":"kalfsribeye","syllables":3},{"word":"kraaiennest","syllables":3},{"word":"lastminute","syllables":3},{"word":"learning","syllables":2},{"word":"league","syllables":1},{"word":"line-up","syllables":2},{"word":"linoleum","syllables":4},{"word":"load","syllables":1},{"word":"loafer","syllables":2},{"word":"longread","syllables":2},{"word":"lookalike","syllables":3},{"word":"louis","syllables":3},{"word":"lyceum","syllables":3},{"word":"magazine","syllables":3},{"word":"mainstream","syllables":2},{"word":"make-over","syllables":3},{"word":"make-up","syllables":2},{"word":"malware","syllables":2},{"word":"marmoleum","syllables":4},{"word":"mausoleum","syllables":4},{"word":"medeauteur","syllables":4},{"word":"midlifecrisis","syllables":4},{"word":"migraineaura","syllables":5},{"word":"milkshake","syllables":2},{"word":"millefeuille","syllables":4},{"word":"mixed","syllables":1},{"word":"muesli","syllables":2},{"word":"museum","syllables":3},{"word":"must-have","syllables":2},{"word":"must-read","syllables":2},{"word":"notebook","syllables":2},{"word":"nonsense","syllables":2},{"word":"nowhere","syllables":2},{"word":"nurture","syllables":2},{"word":"offline","syllables":2},{"word":"oneliner","syllables":3},{"word":"onesie","syllables":2},{"word":"online","syllables":2},{"word":"opinion","syllables":3},{"word":"paella","syllables":3},{"word":"pacemaker","syllables":3},{"word":"panache","syllables":2},{"word":"papegaaienneus","syllables":5},{"word":"passe-partout","syllables":3},{"word":"peanuts","syllables":2},{"word":"perigeum","syllables":4},{"word":"perineum","syllables":4},{"word":"perpetuum","syllables":4},{"word":"petroleum","syllables":4},{"word":"phone","syllables":3},{"word":"picture","syllables":2},{"word":"placemat","syllables":2},{"word":"porte-manteau","syllables":3},{"word":"portefeuille","syllables":4},{"word":"presse-papier","syllables":3},{"word":"primetime","syllables":2},{"word":"queen","syllables":1},{"word":"questionnaire","syllables":3},{"word":"queue","syllables":1},{"word":"reader","syllables":2},{"word":"reality","syllables":3},{"word":"reallife","syllables":2},{"word":"remake","syllables":2},{"word":"repeat","syllables":2},{"word":"repertoire","syllables":3},{"word":"research","syllables":2},{"word":"reverence","syllables":3},{"word":"ribeye","syllables":2},{"word":"ringtone","syllables":3},{"word":"road","syllables":1},{"word":"roaming","syllables":2},{"word":"sciencefiction","syllables":4},{"word":"selfmade","syllables":2},{"word":"sidekick","syllables":2},{"word":"sightseeing","syllables":3},{"word":"skyline","syllables":2},{"word":"smile","syllables":1},{"word":"sneaky","syllables":2},{"word":"software","syllables":2},{"word":"sparerib","syllables":2},{"word":"speaker","syllables":2},{"word":"spread","syllables":1},{"word":"statement","syllables":2},{"word":"steak","syllables":1},{"word":"steeplechase","syllables":3},{"word":"stonewash","syllables":2},{"word":"store","syllables":1},{"word":"streaken","syllables":2},{"word":"stream","syllables":1},{"word":"streetware","syllables":1},{"word":"supersoaker","syllables":4},{"word":"surprise-party","syllables":4},{"word":"sweater","syllables":2},{"word":"teaser","syllables":2},{"word":"tenue","syllables":2},{"word":"template","syllables":2},{"word":"timeline","syllables":2},{"word":"tissue","syllables":2},{"word":"toast","syllables":1},{"word":"tête-à-tête","syllables":3},{"word":"typecast","syllables":2},{"word":"unique","syllables":2},{"word":"ureum","syllables":3},{"word":"vibe","syllables":1},{"word":"vieux","syllables":1},{"word":"ville","syllables":1},{"word":"vintage","syllables":2},{"word":"wandelyup","syllables":3},{"word":"wiseguy","syllables":2},{"word":"wake-up-call","syllables":3},{"word":"webcare","syllables":2},{"word":"winegum","syllables":2},{"word":"base","syllables":1,"notFollowedBy":["e","n","r"]},{"word":"game","syllables":1,"notFollowedBy":["n","l","r"]},{"word":"style","syllables":1,"notFollowedBy":["n","s"]},{"word":"douche","syllables":1,"notFollowedBy":["n","s"]},{"word":"space","syllables":1,"notFollowedBy":["n","s"]},{"word":"striptease","syllables":2,"notFollowedBy":["n","s"]},{"word":"jive","syllables":1,"notFollowedBy":["n","r"]},{"word":"keynote","syllables":2,"notFollowedBy":["n","r"]},{"word":"mountainbike","syllables":3,"notFollowedBy":["n","r"]},{"word":"face","syllables":1,"notFollowedBy":["n","t"]},{"word":"challenge","syllables":2,"notFollowedBy":["n","r","s"]},{"word":"cruise","syllables":1,"notFollowedBy":["n","r","s"]},{"word":"house","syllables":1,"notFollowedBy":["n","r","s"]},{"word":"dance","syllables":1,"notFollowedBy":["n","r","s"]},{"word":"franchise","syllables":2,"notFollowedBy":["n","r","s"]},{"word":"freelance","syllables":2,"notFollowedBy":["n","r","s"]},{"word":"lease","syllables":1,"notFollowedBy":["n","r","s"]},{"word":"linedance","syllables":2,"notFollowedBy":["n","r","s"]},{"word":"lounge","syllables":1,"notFollowedBy":["n","r","s"]},{"word":"merchandise","syllables":3,"notFollowedBy":["n","r","s"]},{"word":"performance","syllables":3,"notFollowedBy":["n","r","s"]},{"word":"release","syllables":2,"notFollowedBy":["n","r","s"]},{"word":"resource","syllables":2,"notFollowedBy":["n","r","s"]},{"word":"cache","syllables":1,"notFollowedBy":["c","l","n","t","x"]},{"word":"office","syllables":2,"notFollowedBy":["r","s"]},{"word":"close","syllables":1,"notFollowedBy":["r","t"]}],"atBeginningOrEnd":[{"word":"byte","syllables":1},{"word":"cake","syllables":1},{"word":"care","syllables":1},{"word":"coach","syllables":1},{"word":"coat","syllables":1},{"word":"earl","syllables":1},{"word":"foam","syllables":1},{"word":"gate","syllables":1},{"word":"head","syllables":1},{"word":"home","syllables":1},{"word":"live","syllables":1},{"word":"safe","syllables":1},{"word":"site","syllables":1},{"word":"soap","syllables":1},{"word":"teak","syllables":1},{"word":"team","syllables":1},{"word":"wave","syllables":1},{"word":"brace","syllables":1,"notFollowedBy":["s"]},{"word":"case","syllables":1,"notFollowedBy":["s"]},{"word":"fleece","syllables":1,"notFollowedBy":["s"]},{"word":"service","syllables":2,"notFollowedBy":["s"]},{"word":"voice","syllables":1,"notFollowedBy":["s"]},{"word":"kite","syllables":1,"notFollowedBy":["n","r"]},{"word":"skate","syllables":1,"notFollowedBy":["n","r"]},{"word":"race","syllables":1,"notFollowedBy":["n","r","s"]}],"atBeginning":[{"word":"coke","syllables":1},{"word":"deal","syllables":1},{"word":"image","syllables":2,"notFollowedBy":["s"]}],"atEnd":[{"word":"force","syllables":1},{"word":"tea","syllables":1},{"word":"time","syllables":1},{"word":"date","syllables":1,"alsoFollowedBy":["s"]},{"word":"hype","syllables":1,"alsoFollowedBy":["s"]},{"word":"quote","syllables":1,"alsoFollowedBy":["s"]},{"word":"tape","syllables":1,"alsoFollowedBy":["s"]},{"word":"upgrade","syllables":2,"alsoFollowedBy":["s"]}]}}}}');
},,,,, function (e, r, n) {
  "use strict";

  n.r(r), n.d(r, "default", function () {
    return dr;
  });
  var t = n(3),
      o = n.n(t),
      a = n(4),
      d = n.n(a),
      l = n(5),
      i = n.n(l),
      s = n(1),
      g = n.n(s),
      b = n(0),
      u = ["de", "het", "een", "één", "eén", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "dit", "dat", "die", "deze"],
      v = ["aangezien", "al", "aldus", "allereerst", "als", "alsook", "anderzijds", "bijgevolg", "bijvoorbeeld", "bovendien", "concluderend", "daardoor", "daarentegen", "daarmee", "daarna", "daarnaast", "daarom", "daartoe", "daarvoor", "dadelijk", "dan", "desondanks", "dienovereenkomstig", "dientegevolge", "doch", "doordat", "dus", "echter", "eerst", "evenals", "eveneens", "evenzeer", "hierom", "hoewel", "immers", "indien", "integendeel", "intussen", "kortom", "later", "maar", "mits", "nadat", "namelijk", "net als", "niettemin", "noch", "ofschoon", "omdat", "ondanks", "ondertussen", "ook", "opdat", "resumerend", "samengevat", "samenvattend", "tegenwoordig", "teneinde", "tenzij", "terwijl", "tevens", "toch", "toen", "uiteindelijk", "vanwege", "vervolgens", "voorafgaand", "vooralsnog", "voordat", "voorts", "vroeger", "waardoor", "waarmee", "waaronder", "wanneer", "want", "zoals", "zodat", "zodoende", "zodra"],
      c = v.concat(["aan de andere kant", "aan de ene kant", "aangenomen dat", "al met al", "alles afwegend", "alles bij elkaar", "alles in aanmerking nemend", "als gevolg van", "anders gezegd", "daar staat tegenover", "daarbij komt", "daaruit volgt", "dat betekent", "dat blijkt uit", "de oorzaak daarvan is", "de oorzaak hiervan is", "door middel van", "een voorbeeld hiervan", "een voorbeeld van", "gesteld dat", "hetzelfde als", "hieruit kunnen we afleiden", "hieruit volgt", "hoe het ook zij", "in de derde plaats", "in de eerste plaats", "in de tweede plaats", "in één woord", "in het bijzonder", "in het geval dat", "in plaats van", "in tegenstelling tot", "in vergelijking met", "maar ook", "met als doel", "met andere woorden", "met behulp van", "met de bedoeling", "neem nou", "net als", "om kort te gaan", "onder andere", "op dezelfde wijze", "stel dat", "te danken aan", "te wijten aan", "ten derde", "ten eerste", "ten gevolge van", "ten slotte", "ten tweede", "ter conclusie", "ter illustratie", "ter verduidelijking", "tot nog toe", "tot slot", "vandaar dat", "vergeleken met", "voor het geval dat"]),
      h = ["de", "het", "een", "der", "des", "den"],
      m = ["eén", "één", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien", "twintig", "honderd", "honderden", "duizend", "duizenden", "miljoen", "miljoenen", "biljoen", "biljoenen"],
      w = ["eerste", "tweede", "derde", "vierde", "vijfde", "zesde", "zevende", "achtste", "negende", "tiende", "elfde", "twaalfde", "dertiende", "veertiende", "vijftiende", "zestiende", "zeventiende", "achttiende", "negentiende", "twinstigste"],
      p = ["ik", "je", "jij", "hij", "ze", "we", "wij", "jullie", "zij", "u", "ge", "gij", "men"],
      k = ["mij", "jou", "hem", "haar", "hen", "hun", "uw"],
      f = ["dit", "dat", "deze", "die", "zelf"],
      y = ["mijn", "mijne", "jouw", "jouwe", "zijne", "hare", "ons", "onze", "hunne", "uwe", "elkaars", "elkanders"],
      j = ["alle", "sommige", "sommigen", "weinig", "weinige", "weinigen", "veel", "vele", "velen", "geen", "beetje", "elke", "elk", "genoeg", "meer", "meest", "meeste", "meesten", "paar", "zoveel", "enkele", "enkelen", "zoveelste", "hoeveelste", "laatste", "laatsten", "iedere", "allemaal", "zekere", "ander", "andere", "gene", "enig", "enige", "verscheidene", "verschillende", "voldoende", "allerlei", "allerhande", "enerlei", "enerhande", "beiderlei", "beiderhande", "tweeërlei", "tweeërhande", "drieërlei", "drieërhande", "velerlei", "velerhande", "menigerlei", "menigerhande", "enigerlei", "enigerhande", "generlei", "generhande"],
      z = ["mezelf", "mijzelf", "jezelf", "jouzelf", "zichzelf", "haarzelf", "hemzelf", "onszelf", "julliezelf", "henzelf", "hunzelf", "uzelf", "zich"],
      x = ["mekaar", "elkaar", "elkander", "mekander"],
      S = ["iedereen", "ieder", "eenieder", "alleman", "allen", "alles", "iemand", "niemand", "iets", "niets", "menigeen"],
      P = ["ieders", "aller", "iedereens", "eenieders"],
      E = ["welke", "welk", "wat", "wie", "wiens", "wier"],
      O = ["hoe", "waarom", "waar", "hoezo", "hoeveel"],
      M = ["daaraan", "daarachter", "daaraf", "daarbij", "daarbinnen", "daarboven", "daarbuiten", "daardoorheen", "daarheen", "daarin", "daarjegens", "daarmede", "daarnaar", "daarnaartoe", "daaromtrent", "daaronder", "daarop", "daarover", "daaroverheen", "daarrond", "daartegen", "daartussen", "daartussenuit", "daaruit", "daarvan", "daarvandaan", "eraan", "erachter", "erachteraan", "eraf", "erbij", "erbinnen", "erboven", "erbuiten", "erdoor", "erdoorheen", "erheen", "erin", "erjegens", "ermede", "ermee", "erna", "ernaar", "ernaartoe", "ernaast", "erom", "eromtrent", "eronder", "eronderdoor", "erop", "eropaf", "eropuit", "erover", "eroverheen", "errond", "ertegen", "ertegenaan", "ertoe", "ertussen", "ertussenuit", "eruit", "ervan", "ervandaan", "ervandoor", "ervoor", "hieraan", "hierachter", "hieraf", "hierbij", "hierbinnen", "hierboven", "hierbuiten", "hierdoor", "hierdoorheen", "hierheen", "hierin", "hierjegens", "hierlangs", "hiermede", "hiermee", "hierna", "hiernaar", "hiernaartoe", "hiernaast", "hieromheen", "hieromtrent", "hieronder", "hierop", "hierover", "hieroverheen", "hierrond", "hiertegen", "hiertoe", "hiertussen", "hiertussenuit", "hieruit", "hiervan", "hiervandaan", "hiervoor", "vandaan", "waaraan", "waarachter", "waaraf", "waarbij", "waarboven", "waarbuiten", "waardoorheen", "waarheen", "waarin", "waarjegens", "waarmede", "waarna", "waarnaar", "waarnaartoe", "waarnaast", "waarop", "waarover", "waaroverheen", "waarrond", "waartegen", "waartegenin", "waartoe", "waartussen", "waartussenuit", "waaruit", "waarvan", "waarvandaan", "waarvoor"],
      F = ["daar", "hier", "ginder", "daarginds", "ginds", "ver", "veraf", "ergens", "nergens", "overal", "dichtbij", "kortbij"],
      B = ["word", "wordt", "werd", "werden", "ben", "bent", "is", "was", "waren"],
      A = ["worden", "zijn"],
      W = ["heb", "hebt", "heeft", "hadden", "had", "kun", "kan", "kunt", "kon", "konden", "mag", "mocht", "mochten", "dien", "dient", "diende", "dienden", "moet", "moest", "moesten", "ga", "gaat", "ging", "gingen"],
      I = ["hebben", "kunnen", "mogen", "dienen", "moeten", "gaan"],
      T = ["blijkt", "blijk", "bleek", "bleken", "gebleken", "dunkt", "dunk", "dunkte", "dunkten", "gedunkt", "heet", "heette", "heetten", "geheten", "lijkt", "lijk", "geleken", "leek", "leken", "schijn", "schijnt", "scheen", "schenen", "toescheen", "toeschijnt", "toeschijn", "toeschenen"],
      _ = ["blijken", "dunken", "heten", "lijken", "schijnen", "toeschijnen"],
      R = ["à", "aan", "aangaande", "achter", "behalve", "behoudens", "beneden", "benevens", "benoorden", "benoordoosten", "benoordwesten", "beoosten", "betreffende", "bewesten", "bezijden", "bezuiden", "bezuidoosten", "bezuidwesten", "bij", "binnen", "blijkens", "boven", "bovenaan", "buiten", "circa", "conform", "contra", "cum", "dankzij", "door", "gedurende", "gezien", "in", "ingevolge", "inzake", "jegens", "krachtens", "langs", "luidens", "met", "middels", "na", "naar", "naast", "nabij", "namens", "nevens", "niettegenstaande", "nopens", "om", "omstreeks", "omtrent", "onder", "onderaan", "ongeacht", "onverminderd", "op", "over", "overeenkomstig", "per", "plus", "post", "richting", "rond", "rondom", "spijts", "staande", "te", "tegen", "tegenover", "ten", "ter", "tijdens", "tot", "tussen", "uit", "van", "vanaf", "vanuit", "versus", "via", "vis-à-vis", "volgens", "voor", "voorbij", "wegens", "zijdens", "zonder"],
      V = ["af", "heen", "mee", "toe", "achterop", "onderin", "voorin", "bovenop", "buitenop", "achteraan", "onderop", "binnenin", "tevoren"],
      C = ["en", "alsmede", "of", "ofwel", "en/of"],
      D = ["zowel", "evenmin", "zomin", "hetzij"],
      N = ["vermits", "dewijl", "dorodien", "naardien", "nademaal", "overmits", "wijl", "eer", "eerdat", "aleer", "vooraleer", "alvorens", "totdat", "zolang", "sinds", "sedert", "ingeval", "tenware", "alhoewel", "hoezeer", "uitgezonderd", "zoverre", "zover", "naargelang", "naarmate", "alsof"],
      L = ["zegt", "zei", "vraagt", "vroeg", "denkt", "dacht", "stelt", "pleit", "pleitte"],
      H = ["zeer", "erg", "redelijk", "flink", "tikkeltje", "bijzonder", "ernstig", "enigszins", "zo", "tamelijk", "nogal", "behoorlijk", "zwaar", "heel", "hele", "reuze", "buitengewoon", "ontzettend", "vreselijk"],
      $ = ["laat", "liet", "lieten", "kom", "komt", "kwam", "kwamen", "maakt", "maak", "maakte", "maakten", "doe", "doet", "deed", "deden", "vindt", "vind", "vond", "vonden"],
      q = ["laten", "komen", "maken", "doen", "vinden"],
      U = ["nieuw", "nieuwe", "nieuwer", "nieuwere", "nieuwst", "nieuwste", "oud", "oude", "ouder", "oudere", "oudst", "oudste", "vorig", "vorige", "goed", "goede", "beter", "betere", "best", "beste", "groot", "grote", "groter", "grotere", "grootst", "grootste", "makkelijk", "makkelijke", "makkelijker", "makkelijkere", "makkelijkst", "makkelijste", "gemakkelijk", "gemakkelijke", "gemakkelijker", "gemakkelijkere", "gemakkelijkst", "gemakkelijste", "simpel", "simpele", "simpeler", "simpelere", "simpelst", "simpelste", "snel", "snelle", "sneller", "snellere", "snelst", "snelste", "verre", "verder", "verdere", "verst", "verste", "lang", "lange", "langer", "langere", "langst", "langste", "hard", "harde", "harder", "hardere", "hardst", "hardste", "minder", "mindere", "minst", "minste", "eigen", "laag", "lage", "lager", "lagere", "laagst", "laagste", "hoog", "hoge", "hoger", "hogere", "hoogst", "hoogste", "klein", "kleine", "kleiner", "kleinere", "kleinst", "kleinste", "kort", "korte", "korter", "kortere", "kortst", "kortste", "herhaaldelijke", "directe", "ongeveer", "slecht", "slechte", "slechter", "slechtere", "slechtst", "slechtste", "zulke", "zulk", "zo'n", "zulks", "er", "extreem", "extreme", "bijbehorende", "bijbehorend", "niet"],
      G = ["oh", "wauw", "hèhè", "hè", "hé", "au", "ai", "jaja", "welja", "jawel", "ssst", "heremijntijd", "hemeltjelief", "aha", "foei", "hmm", "nou", "nee", "tja", "nja", "okido", "ho", "halt", "komaan", "komop", "verrek", "nietwaar", "brr", "oef", "ach", "och", "bah", "enfin", "afijn", "haha", "hihi", "hatsjie", "hatsjoe", "hm", "tring", "vroem", "boem", "hopla"],
      J = ["ml", "cl", "dl", "l", "tl", "el", "mg", "g", "gr", "kg", "ca", "theel", "min", "sec", "uur"],
      Y = ["ding", "dingen", "manier", "manieren", "item", "items", "keer", "maal", "procent", "geval", "aspect", "persoon", "personen", "deel"],
      K = ["wel", "ja", "neen", "oké", "oke", "okee", "ok", "zoiets", "€", "euro"],
      Q = ([].concat(A, I, _, q), [].concat(w, U), [].concat(h, R, C, f, H, j), [].concat(v, p, k, z, G, m, B, W, T, L, $, S, D, N, O, E, F, K, V, M, J, ["seconde", "secondes", "seconden", "minuut", "minuten", "uur", "uren", "dag", "dagen", "week", "weken", "maand", "maanden", "jaar", "jaren", "vandaag", "morgen", "overmorgen", "gisteren", "eergisteren", "'s", "morgens", "avonds", "middags", "nachts"], Y, x, y), [].concat(h, O, m, y, z, P, T, _, R)),
      X = [].concat(h, m, w, f, y, z, x, p, k, j, S, P, E, O, M, F, V, B, A, W, I, T, _, R, C, D, N, L, v, ["absoluut", "zeker", "ongetwijfeld", "sowieso", "onmiddelijk", "meteen", "inclusief", "direct", "ogenblikkelijk", "terstond", "natuurlijk", "vanzelfsprekend", "gewoonlijk", "normaliter", "doorgaans", "werkelijk", "daadwerkelijk", "inderdaad", "waarachtig", "oprecht", "bijna", "meestal", "misschien", "waarschijnlijk", "wellicht", "mogelijk", "vermoedelijk", "allicht", "aannemelijk", "oorspronkelijk", "aanvankelijk", "initieel", "eigenlijk", "feitelijk", "wezenlijk", "juist", "reeds", "alvast", "bijv.", "vaak", "dikwijls", "veelal", "geregeld", "menigmaal", "regelmatig", "veelvuldig", "eenvoudigweg", "simpelweg", "louter", "kortweg", "stomweg", "domweg", "zomaar", "eventueel", "mogelijkerwijs", "eens", "weleens", "nooit", "ooit", "anders", "momenteel", "thans", "incidenteel", "trouwens", "elders", "volgend", "recent", "onlangs", "recentelijk", "laatst", "zojuist", "relatief", "duidelijk", "overduidelijk", "klaarblijkelijk", "nadrukkelijk", "ogenschijnlijk", "kennelijk", "schijnbaar", "alweer", "continu", "herhaaldelijk", "nog", "steeds", "nu"], H, $, q, G, U, J, Y, K, ["mevr", "dhr", "mr", "dr", "prof"], ["jr", "sr"]),
      Z = ["alhoewel", "als", "dan", "doordat", "hoewel", "hoezeer", "indien", "mits", "naargelang", "naarmate", "nadat", "ofschoon", "omdat", "opdat", "tenzij", "toen", "voordat", "voorzover", "wanneer", "zoals", "zodat", "zodra", "zolang", "wie", "wiens", "wier", "welke", "welk"],
      ee = [["aan de ene kant", "aan de andere kant"], ["enerzijds", "anderzijds"], ["natuurlijk", "maar"], ["niet alleen", "maar ook"], ["noch", "noch"], ["zowel", "als"]],
      re = n(26),
      ne = n(7),
      te = n.n(ne),
      oe = n(2),
      ae = ["gebraad", "gemoed", "gebed", "gebied", "gebod", "gebodsbord", "geboorte-eiland", "geboortestad", "gebruikspaard", "gedachtewereld", "gedenkblad", "gedenknaald", "gedichtenwedstrijd", "gedoogakkoord", "gedoogbeleid", "geduld", "geestenwereld", "geesteskind", "geestestoestand", "geesteswereld", "gehandicaptenbeleid", "gehoorafstand", "gehoorsafstand", "geitenbaard", "geitenhuid", "geld", "geldhond", "geldvoorraad", "geleidehond", "gelijkekansenbeleid", "geloofsdaad", "geloofsinhoud", "geluidswand", "gelukskind", "gemeenschapsraad", "gemeentebeleid", "gemeenteraad", "gemeenteraadslid", "gemoedstoestand", "genadeverbond", "genderbeleid", "geneesmiddelenbeleid", "generaalsbewind", "geslachtsdaad", "gespreksavond", "gespreksflard", "getijdengebied", "gevangenisbeleid", "gevangeniswereld", "gevechtsafstand", "gevelwand", "gevoelstoestand", "gevoelswereld", "gewelddaad", "geweldigaard", "geweldverbod", "gezelschapshond", "gezichtsafstand", "gezichtshuid", "gezinsbeleid", "gezinsbond", "gezinshoofd", "gezinslid", "gezinspaard", "gezinstoestand", "gezondheidsbeleid", "gezondheidstoestand", "gezondheidszorgbeleid", "gecentreerd", "geserreerd", "gepolitoerd", "gebocheld", "gebrild", "gegleufd", "gekarteld", "gemeubeld", "gesausd", "geaccidenteerd", "geaccrediteerd", "geacheveerd", "geaderd", "geaggregeerd", "geagiteerd", "geallieerd", "geanimeerd", "geanticipeerd", "gearticuleerd", "geassorteerd", "gebenedijd", "gebiedend", "geblaseerd", "geblindeerd", "geborneerd", "gebronzeerd", "gebrouilleerd", "gebruind", "gecharmeerd", "gechromeerd", "geciviliseerd", "geclausuleerd", "gecoiffeerd", "geconditioneerd", "geconstipeerd", "gecontinueerd", "gecoöpteerd", "gecrispeerd", "gecultiveerd", "gedecideerd", "gedecolleteerd", "gedegouteerd", "gedemilitariseerd", "gedemodeerd", "gedesillusioneerd", "gedesinteresseerd", "gedetailleerd", "gediplomeerd", "gedisciplineerd", "gedisponeerd", "gedistingeerd", "gedomicilieerd", "gedoteerd", "gedupeerd", "geëigend", "geestdodend", "geestverruimend", "geëxalteerd", "geëxponeerd", "gefigureerd", "gefingeerd", "geflatteerd", "geforceerd", "gefumeerd", "gegeerd", "gegeneerd", "gegradueerd", "gegriepeerd", "gehaaid", "gehandschoend", "gehavend", "gehomologeerd", "gehorend", "geïllustreerd", "geïmponeerd", "geïmproviseerd", "geïncrimineerd", "geïrriteerd", "geklasseerd", "gekmakend", "gekuifd", "gekwalificeerd", "gelardeerd", "geldend", "geldverslindend", "geleed", "geleidend", "gelieerd", "geliefkoosd", "gelijkluidend", "gelinieerd", "geluiddempend", "geluidswerend", "geluidwerend", "gemarineerd", "gematteerd", "gemiddeld", "geoccupeerd", "geoutilleerd", "geparaffineerd", "geparfumeerd", "gepatenteerd", "gepermitteerd", "geplafonneerd", "geplisseerd", "gepredisponeerd", "geprefabriceerd", "gepreoccupeerd", "geproportioneerd", "geraffineerd", "gerandomiseerd", "gereformeerd", "gereglementeerd", "geresigneerd", "geresponsabiliseerd", "gerimpeld", "geringschattend", "geruchtmakend", "geruststellend", "gesatureerd", "gesauteerd", "geschakeerd", "gesepareerd", "geseponeerd", "gesofisticeerd", "gesoigneerd", "gespeend", "gespikkeld", "gestresseerd", "geurenblind", "gevergeerd", "geverseerd", "gezaghebbend", "gezagsondermijnend", "gezichtsbepalend", "gezinsvervangend", "gezwind", "geit", "gedragstherapeut", "geveltoerist", "gezant", "gerant", "gerst", "gerstenat", "geut", "gebarenkunst", "gebedsbijeenkomst", "gebekvecht", "gebiedsagent", "gebit", "geboorterecht", "gebruikersovereenkomst", "gebruiksrecht", "gebruiksvoorschrift", "gedragsvoorschrift", "geest", "geestdrift", "geesteskracht", "geestesproduct", "geestkracht", "gefluit", "gehandicaptensport", "geheimhoudingsplicht", "geheimschrift", "geheugenkunst", "gehoorapparaat", "geitenteelt", "gekloot", "geldautomaat", "geldingskracht", "geldingszucht", "geldkist", "geldmarkt", "geldmarkttekort", "geldpot", "geldsoort", "geldtekort", "geldtransport", "gelduitgifteautomaat", "geldzucht", "gelegenheidsargument", "geloofsgenoot", "geluidseffect", "geluidsoverlast", "geluidspoort", "gemaksproduct", "gemakzucht", "gemberpot", "gemeenschapsrecht", "gemeenteadvocaat", "gemeenteraadsbesluit", "gemeenterecht", "gemeentewet", "gemeentewiet", "gemoedsrust", "geneeskracht", "geneeskundestudent", "geneeskunst", "geneesmiddelenfabrikant", "geneesmiddelenmarkt", "generatieconflict", "generatiegenoot", "generatiepact", "generatiestudent", "genetkat", "genocidewet", "genot", "genotsproduct", "genotzucht", "gent", "geodeet", "geologiedocent", "gereedschapskist", "gerucht", "geruchtencircuit", "geschiedenisdocent", "geschiedenisstudent", "geschiet", "geschrift", "gespreksgenoot", "gesprekspunt", "getijdenkracht", "gevangenispoort", "gevecht", "gevechtskracht", "gevechtssport", "gevellijst", "gevelornament", "gewest", "gewetensangst", "gewetensconflict", "gewicht", "gewinzucht", "gewondentransport", "gewoonterecht", "gewricht", "gezagsapparaat", "gezinsbudget", "gezinsrapport", "gezondheidseffect", "gezondheidsklacht", "gezondheidsproduct", "gezondheidsrecht", "gezondheidswet", "gezondheidswinst", "gerokt", "gevlekt", "gebuikt", "gesaust", "gebiedsgericht", "geel-zwart", "gehandicapt", "gereformeerd-vrijgemaakt", "gestuikt", "geëtst", "bed", "bediendevakbond", "bedrijfsbeleid", "bedrijfsblad", "bedrijfspand", "bedrijfswereld", "bedrijvenbond", "beekdonderpad", "beeld", "beginselakkoord", "begintoestand", "begripsinhoud", "begrotingsakkoord", "begrotingsbeleid", "behandelaanbod", "beheerraad", "beheersgebied", "behoud", "beiaard", "bejaardenbeleid", "bekerwedstrijd", "belastinggebied", "belastinggeld", "belastingschuld", "beleggingsbeleid", "beleggingspand", "beleid", "beleidsdaad", "beleidsgebied", "belevingswereld", "belplafond", "beltegoed", "bemanningslid", "Bemiddelingsraad", "bendehoofd", "bendelid", "benedenstad", "benefietwedstrijd", "benoemingenbeleid", "benuttingsgraad", "berberpaard", "beregeningsverbod", "bergeend", "berggebied", "bergland", "bergpaard", "bergpad", "bergwand", "beroepsarbeid", "beroepsverbod", "beroepswereld", "beschermingsbeleid", "beschermingsgebied", "beslissingswedstrijd", "besparingsbeleid", "bestand", "bestandsakkoord", "besteleend", "besturenbond", "bestuursakkoord", "bestuursbeleid", "bestuurshoofd", "bestuurslid", "beukenblad", "beursmaand", "beursrecord", "beurswaakhond", "beurswereld", "beveiligingsbeleid", "bevolkingsbeleid", "bewind", "bewustzijnsinhoud", "bewustzijnstoestand", "bezuinigingsbeleid", "beenhard", "bebrild", "beangstigend", "bebaard", "bedeesd", "bederfwerend", "bedreigend", "bedrijvend", "bedroevend", "beduidend", "beduusd", "bedwelmend", "beeldbepalend", "beeldend", "beeldvormend", "beeldvullend", "begeleidend", "begerenswaard", "begrijpend", "behartenswaard", "behartigenswaard", "behoudend", "bejaard", "beklagenswaard", "beklemmend", "belanghebbend", "belangstellend", "belangwekkend", "belastingbesparend", "belastingbetalend", "beledigend", "beleerd", "beleidsadviserend", "belendend", "belerend", "bemoedigend", "benauwend", "benijdenswaard", "bepalend", "beperkend", "beregoed", "berekenend", "beroemd", "beroepsblind", "beschaamd", "beschamend", "beschouwend", "beschrijvend", "besdragend", "beslissend", "bestaand", "bestverkopend", "beteuterd", "betoverend", "betraand", "betreffend", "betreurenswaard", "bevelend", "bevelhebbend", "bevestigend", "bevoegd", "bevredigend", "bevreemdend", "bevriend", "bewonderenswaard", "bewustzijnsverruimend", "bezwarend", "beest", "berggeit", "betaalkracht", "beerput", "bergamot", "beschuit", "beademingsapparaat", "beddenfabrikant", "bedeltocht", "bedevaart", "bedevaartstocht", "bediendecontract", "bedieningsfout", "bedilzucht", "bedoeïenentent", "bedrijfsadvocaat", "bedrijfsfeest", "bedrijfsfysiotherapeut", "bedrijfsmanagement", "bedrijfsopbrengst", "bedrijfsrestaurant", "bedrijfsresultaat", "bedrijfssport", "bedrijfswinst", "bedrijvenmarkt", "bedrust", "beeldhouwkunst", "beeldmoment", "beeldrecht", "beeldsnijkunst", "beestenmarkt", "beet", "begeleidwonenproject", "beginnersfout", "beginpunt", "begrippenapparaat", "begrotingsdebat", "begrotingsrecht", "begrotingstekort", "behaagzucht", "behandelingsresultaat", "behoudzucht", "bejaardenpaspoort", "bekerplant", "bekerwinst", "beklagrecht", "beklemrecht", "belangenconflict", "belastingafdracht", "belastingbiljet", "belastingconsulent", "belastingdienst", "belastingexpert", "belastingopbrengst", "belastingplicht", "belastingrecht", "belastingspecialist", "belastingwet", "beleggersmarkt", "beleggingsexpert", "beleggingsmarkt", "beleggingsopbrengst", "beleggingsproduct", "beleggingsresultaat", "beleidsaspect", "beleidsdebat", "beleidsfout", "beleidsresultaat", "beleidsspecialist", "belevingsrestaurant", "belgicist", "belminuut", "beltegoedkaart", "bemoeizucht", "benefiet", "benefietconcert", "benoemingsbesluit", "benzinelucht", "benzinemarkt", "benzinetekort", "beoordelingsfout", "beoordelingsrapport", "berghut", "bergklimaat", "berglucht", "bergrit", "bergsport", "bergtijdrit", "bergtocht", "berichtendienst", "berkenhout", "bermmonument", "bermrecreant", "bermsloot", "bermtoerist", "beroepsdiplomaat", "beroepsernst", "beroepsfout", "beroepsgenoot", "beroepsjournalist", "beroepskracht", "beroepsrecht", "beroepssoldaat", "beroepssport", "berufsverbot", "beschermingsbesluit", "beschikkingsrecht", "beslismoment", "beslissingsrecht", "besluit", "bestaansrecht", "bestandsformaat", "bestelbiljet", "bestelkaart", "bestuursapparaat", "bestuursassistent", "bestuursbesluit", "bestuursconflict", "bestuurskracht", "bestuurskundedocent", "bestuursmandaat", "bestuursprocesrecht", "bestuursrecht", "betaalautomaat", "betaaldienst", "betaalkaart", "betaalopdracht", "betalingsbalanstekort", "betalingsopdracht", "bètastudent", "beterschapskaart", "betrouwbaarheidsrit", "beukenhout", "beursapparaat", "beursklimaat", "beurskrant", "beursmarkt", "beursstudent", "beurt", "beverrat", "bevoegdheidsconflict", "bevrijdingsconcert", "bevrijdingsfeest", "bewaarplicht", "bewegingsapparaat", "bewegingsdocent", "bewegingskunst", "bewijskracht", "bewijsrecht", "bewustwordingsproject", "bezemkast", "bezit", "bezitsrecht", "bezoekrecht", "bezuinigingsdrift", "bezuinigingsopdracht", "bezwaarschrift", "beroepsgericht", "bedompt", "bedrijfsgericht", "beginselvast", "beleidsgericht", "bewolkt", "bezweet", "verbeterblad", "verband", "verbeeldingswereld", "verbod", "verbodsbord", "verbond", "verdwaalarmband", "verdwijnwoord", "verenigingsblad", "verenigingslid", "verfhuid", "vergismoord", "vergunningenbeleid", "verhalenpad", "verhalenwedstrijd", "verkeersaanbod", "verkeersbeleid", "verkeersbord", "verkiezingsavond", "verkleinwoord", "verkoopbeleid", "verkoopverbod", "vernieuwingsbeleid", "verpleeghuisbed", "verraad", "verschijningsverbod", "verstand", "vertoningsverbod", "vertrekbeleid", "vervalmaand", "vervoerbeleid", "vervoersaanbod", "vervoersbeleid", "vervoersbond", "vervoersverbod", "vervolgingsbeleid", "verwijderingsbeleid", "verzamelbeleid", "verzekeringswereld", "verzetsdaad", "verzetsheld", "verzuimbeleid", "verdragend", "verkeersremmend", "verbazend", "verbazingwekkend", "verbijsterend", "verblindend", "verbluffend", "verbouwereerd", "verdaagd", "verdedigend", "verdovend", "vereend", "verfrissend", "vergelijkend", "verhalend", "verheffend", "verheugend", "verkikkerd", "verklarend", "verkwikkend", "verkwistend", "verlammend", "verlangend", "verliesgevend", "verlieslatend", "verlieslijdend", "verlokkend", "verlossend", "vermeend", "vermeldenswaard", "vermeldingswaard", "vermoeiend", "vermogend", "vernederend", "vernietigend", "verontrustend", "verpletterend", "verrassend", "verscheurend", "verschillend", "verslaafd", "verspringend", "verstikkend", "verstrekkend", "verstrooid", "vertederend", "vertrouwenwekkend", "vertwijfeld", "vervelend", "verwaand", "verwarrend", "verwoestend", "verzachtend", "verziend", "verzoenend", "verwant", "verantwoordingsplicht", "verbandkist", "verbeeldingskracht", "verbintenissenrecht", "verblijfsrecht", "verbrandingsproduct", "verbroederingsfeest", "verdedigingsfout", "verdragsrecht", "verdriet", "verdringingseffect", "veredelingsproduct", "verenigingsrecht", "verffabrikant", "verfpot", "verfrest", "vergiet", "vergoedingslimiet", "vergrotingsapparaat", "vergunningplicht", "verhaalsrecht", "verhuiskist", "verhuurboot", "verjaardagsfeest", "verjaardagsgast", "verjaardagstaart", "verjaarfeest", "verjaringsfeest", "verkeersagent", "verkeersinfarct", "verkeersmanagement", "verkeersmarkt", "verkeersoverlast", "verkeerswet", "verkenningstocht", "verkiezingsbijeenkomst", "verkiezingsbiljet", "verkiezingsdebat", "verkiezingsinkt", "verkiezingsresultaat", "verkiezingswinst", "verkleedkist", "verkoopapparaat", "verkoopargument", "verkoopopbrengst", "verkoopopdracht", "verkooprecht", "verkoopresultaat", "verkopersmarkt", "verlatingsangst", "verlovingsfeest", "verminderingskaart", "vermogensrecht", "vermogenstekort", "vermogenswinst", "vernielzucht", "vernietigingskracht", "vernieuwingsdebat", "vernieuwingsproject", "veroveringstocht", "veroveringszucht", "verpleegassistent", "verrassingseffect", "verrassingsfeest", "verrijkingsmarkt", "verruimingskandidaat", "verschoningsrecht", "verschot", "versproduct", "versterfrecht", "vertaalfout", "vertaalproject", "vertaalrecht", "vertebraat", "vertegenwoordigingsrecht", "vervangingsmarkt", "vervoersmanagement", "vervoersmarkt", "vervolgbijeenkomst", "vervolgingsapparaat", "vervolgopdracht", "vervolgproject", "vervreemdingseffect", "verwijt", "verzakingsrecht", "verzamelkrant", "verzekeringsagent", "verzekeringsmarkt", "verzekeringsproduct", "verzekeringsrecht", "verzekeringsresultaat", "verzetskrant", "verzoeningsbijeenkomst", "verzorgingsproduct", "slingerpad", "avondgebed", "bibbergeld", "dageraad", "drinkgeld", "kalfsgebraad", "leefgeld", "ochtendgebed", "ongelukskind", "vluggerd", "voltigeerpaard", "voltigepaard", "aandachtsgebied", "aanlijngebod", "aardbevingsgebied", "abonnementsgeld", "achtergrondgeluid", "achterstandsgebied", "actiegebied", "afzetgebied", "akkerbouwgebied", "alpengebied", "amazonegebied", "ambtsgebied", "ambtsgewaad", "antigeluid", "aspergebed", "autonomiegebied", "baggereiland", "bangerd", "bijgeluid", "bijstandsgeld", "binnenduingebied", "blindengeleidehond", "blowgebodsbord", "boezemgebied", "bongerd", "bosgebied", "bridgeavond", "bridgebond", "bridgewedstrijd", "broedgebied", "brongebied", "budgetbeleid", "burgerbewind", "centrumgebied", "collegelid", "computergebied", "concentratiegebied", "conceptregeerakkoord", "concessiegebied", "conflictgebied", "contactgeluid", "crisisgebied", "cultuurgebied", "dankgebed", "deelgebied", "deelnemingenbeleid", "deltagebied", "deskundigheidsgebied", "dierengeluid", "doelgebied", "doodsgewaad", "doorgangsgebied", "dopgeld", "douanegebied", "drempelgeld", "driekoningenavond", "duinengebied", "duingebied", "eigendomsvoorbehoud", "energiegebied", "engerd", "eurogebied", "feestgewaad", "filmgebied", "foerageergebied", "formuliergebed", "frequentiegebied", "frontgebied", "functioneringsgebied", "gangenpaard", "gitaargeluid", "gitaargeweld", "golfgebied", "golflengtegebied", "graangebied", "grachtengebied", "grensgebied", "groeigebied", "groengebied", "groepsgeluid", "groepsgeweld", "grondgebied", "grondwaterbeschermingsgebied", "haflingerpaard", "handelsgebied", "havengebied", "heidegebied", "helikoptergeld", "herkomstgebied", "herwaarderingsgebied", "hogedrukgebied", "hogeronderwijsbeleid", "hongersnood", "hoogveengebied", "ICT-gebied", "immigratiegebied", "inburgeringsbeleid", "indicatiegebied", "industriegebied", "ingeland", "inkomgeld", "interessegebied", "jachtgebied", "jagershond", "jongerenbeleid", "jongerenblad", "kantorengebied", "kassengebied", "keelgeluid", "kennisgebied", "kerngebied", "kernwinkelgebied", "kijkgeld", "kindergeld", "kleigebied", "kloostergewaad", "knipooggeweld", "kogelwond", "koorgebed", "krapgeldbeleid", "krijgsgeweld", "krimpgebied", "kruisgebed", "kunstgebied", "kustgebied", "kwelgebied", "lagedrukgebied", "landbouwgebied", "langeafstandspaard", "langebaanwedstrijd", "langetermijnbeleid", "leefgebied", "leergebied", "leerstofgebied", "legerpaard", "legervoorraad", "levensgebied", "lidgeld", "logeerbed", "luchtvaartgebied", "luistergeld", "machtsgebied", "managementbeleid", "mandaatgebied", "manegepaard", "marktgebied", "mededelingenblad", "mededelingenbord", "mediageweld", "merengebied", "middaggebed", "middengebied", "mijngebied", "milieubeschermingsgebied", "milieugebied", "misgewaad", "missiegebied", "modegebied", "moerasgebied", "morgengebed", "Morgenland", "morgenstond", "moslimgebied", "motorgeluid", "muilkorfgebod", "nachtgewaad", "nagelbed", "natuurbeschermingsgebied", "natuurgebied", "natuurgeweld", "natuurontwikkelingsgebied", "NAVO-gebied", "NAVO-grondgebied", "nederzettingenbeleid", "neerslaggebied", "negerkind", "no-gogebied", "noodgebied", "noordpoolgebied", "Noordzeegebied", "oceaangebied", "octrooigebied", "oefengebied", "oerwoudgeluid", "oliegebied", "omgevingsbeleid", "omgevingsgeluid", "onderwijsgebied", "onderzoeksgebied", "onrustgebied", "ontwikkelingsgebied", "oorlogsgebied", "oorlogsgeweld", "oorsprongsgebied", "operatiegebied", "opleidingenaanbod", "opmarsgebied", "overgangsgebied", "overlastgebied", "overstromingsgebied", "overwinteringsgebied", "paaigebied", "partnergeweld", "ploegenwedstrijd", "poldergebied", "politiegeweld", "potpoldergebied", "presentiegeld", "priestergewaad", "regeerakkoord", "regelafstand", "regenboogkind", "regenboogzebrapad", "regenwoud", "regeringsaanbod", "regeringsbeleid", "regeringsraad", "regeringsstad", "reizigersaanbod", "richtingenstrijd", "roggebrood", "rouwgewaad", "rugzakgeld", "rustgebied", "rustgeld", "sabotagedaad", "samenwerkingsgebied", "schandegeld", "Schengenakkoord", "schietgebed", "schoolgeld", "servicegeweld", "slangenhuid", "sleutelgeld", "slotgebed", "smeekgebed", "smeergeldstad", "spaargeld", "spanningsgebied", "spiegelbeeld", "spiegelwand", "sportgebied", "spraakgeluid", "stemgeluid", "stiltegebied", "stoelgeld", "stormgeweld", "straatgeluid", "straatgeweld", "strafschopgebied", "supportersgeweld", "taalgebied", "tegelpad", "tegelwand", "tegenbod", "tegengeluid", "tegengeweld", "tegenspoed", "tegenwind", "televisiegeweld", "tussengebied", "uitgaansgeweld", "uitgeefbeleid", "uitgeversverbond", "uitgeverswereld", "ultrageluid", "vaargebied", "vagebond", "vakantiegeld", "veertigurengebed", "vegetariërsbond", "vingerhoed", "vliegtuiggeluid", "vluchtelingenbeleid", "voetbalgeweld", "vogelgeluid", "vogelwereld", "volksgezondheidsbeleid", "voorzieningenaanbod", "vormgevingsbeleid", "vredesgeluid", "vreemdelingenbeleid", "vrijdaggebed", "vrijgezellenavond", "vrijwilligersbeleid", "vuurwapengeweld", "wapengeweld", "waterbergingsgebied", "watergebied", "watergeweld", "werkgelegenheidsbeleid", "werkgeversaanbod", "werkgeversbond", "werkgeversverbond", "wetgevingsbeleid", "wiegenkind", "wijngebied", "wintersportgebied", "wisselgeld", "woestijngebied", "zakgeld", "zangersbond", "zeegebied", "zeehavengebied", "ziektegeld", "zigeunerkind", "zigeunerpaard", "zondegeld", "zorgenkind", "zwangerschapsmaand", "zwijggeld", "agent", "afgezant", "dirigent", "echtgenoot", "morgendienst", "apologeet", "budgetsupermarkt", "burgerdienst", "changement", "dorpsgenoot", "huisgenoot", "krankzinnigengesticht", "muggenbeet", "nagerecht", "omgevingsportret", "politieagent", "tijgerkat", "tussengerecht", "vogelmijt", "voorgerecht", "wegenwacht", "wegenzout", "wijkagent", "wisselagent", "zeegezicht", "zorgbudget", "aankoopbudget", "aardappelgerecht", "accountmanagement", "achterhoedegevecht", "adoptieagent", "advertentiebudget", "afspiegelingskabinet", "agendahedonist", "algemenebijstandswet", "amandelgeest", "ambtenarengerecht", "apengezicht", "arbeidsgerecht", "aspergerobot", "aspergeteelt", "assetmanagement", "baggerboot", "baggermarkt", "baggeropdracht", "baggerproject", "baggerschuit", "baggervloot", "balkanvergeet-mij-niet", "barricadegevecht", "bijgerecht", "boemerangeffect", "bouwmanagement", "bovengebit", "branchegenoot", "bridgejournalist", "bridgesport", "budget", "budgetrecht", "budgettekort", "bugnugget", "burgemeestersambt", "burgemeesterspost", "burgerdocent", "burgerplicht", "burgerpot", "burgerpresident", "burgerrecht", "burgerschapsrecht", "buurtagent", "buurtgenoot", "capaciteitsmanagement", "casemanagement", "celgenoot", "chef-dirigent", "CIA-agent", "clubgenoot", "coalitiegenoot", "collectiemanagement", "collegebesluit", "collegekaart", "collegestudent", "competentiemanagement", "crisismanagement", "defensiebudget", "depannagedienst", "deskundigenrapport", "disgenoot", "dopingexpert", "draagvleugelboot", "dreigement", "driekoningenfeest", "dubbelagent", "dwerggeit", "eerstgeboorterecht", "eigendomsrecht", "elftalgenoot", "enkelgewricht", "etalageruit", "ex-agent", "ex-echtgenoot", "exploitatiebudget", "FBI-agent", "fractiegenoot", "gadget", "garagepoort", "glogetuigschrift", "groentegerecht", "groentenugget", "grondgevecht", "halfgeleiderfabrikant", "halsgerecht", "halsgewricht", "hamburgerrestaurant", "hamburgertent", "handelsagent", "handgewricht", "hanengevecht", "hengelsport", "hersengadget", "heupgewricht", "hogeschooldocent", "hogeschoolstudent", "hokjesgeest", "hondengevecht", "hoofdagent", "hoofdgerecht", "horlogekast", "hotelmanagement", "huishoudbudget", "hulpagent", "huwelijksvermogensrecht", "inburgeringsplicht", "inburgeringstraject", "informatiemanagement", "ingenieursdienst", "ingenieursstudent", "inlichtingenrapport", "interim-management", "internetevangelist", "investeringsbudget", "inzagerecht", "jaarbudget", "jongerenkrant", "jongerenpaspoort", "kaakgewricht", "kaasgerecht", "kaasnugget", "kalfsgehakt", "kamergenoot", "kant-en-klaargerecht", "kantongerecht", "kennismanagement", "kipnugget", "klasgenoot", "kniegewricht", "kogelgewricht", "kooigevecht", "kredietmanagement", "kroegentocht", "kruidnagelsigaret", "kunstbudget", "kunstgeschiedenisdocent", "kunstgeschiedenisstudent", "kunstmanagement", "kussengevecht", "kwaliteitsmanagement", "kwelgeest", "lamsgehakt", "langetermijneffect", "leeftijdgenoot", "leeftijdsgenoot", "legercommandant", "legerdienst", "legerkrant", "legerpredikant", "legertent", "lievelingsgerecht", "logeergast", "lotgenotencontact", "loungerestaurant", "low budget", "lozingenbesluit", "luchtagent", "luchtgevecht", "lunchgerecht", "macrobudget", "management", "managementfout", "melkgeit", "mens-erger-je-niet", "mergelgrot", "milieumanagement", "miljoenenbudget", "mobiliteitsbudget", "moddergevecht", "monumentenbudget", "morgenlicht", "morgenpost", "motoragent", "muggenbult", "narcotica-agent", "NAVO-bondgenoot", "negerhut", "nepagent", "nugget", "ondergebit", "onderwijsbudget", "onderwijsmanagement", "onderzoeksbudget", "onderzoeksgerecht", "on-en-minvermogenkaart", "ongevallenwet", "onteigeningswet", "orgelconcert", "orgeldocent", "orgelkast", "overheidsbudget", "overheidsmanagement", "overnamegevecht", "overnemingsgevecht", "paardengebit", "passagebiljet", "pastagerecht", "persagent", "personeelsbudget", "personeelsmanagement", "plaggenhut", "ploegentijdrit", "pluimgewicht", "politiebudget", "polsgewricht", "postzegelformaat", "prestigeproject", "prins-regent", "procesmanagement", "productiebudget", "projectmanagement", "pseudovogelpest", "publiciteitsagent", "raffinageproduct", "reclamebudget", "reegeit", "regeerambt", "regelzucht", "regenboogtricot", "regenput", "regent", "regentaat", "regenwaterput", "regeringsapparaat", "regeringsbesluit", "regeringsbudget", "regeringskrant", "regeringsrapport", "regeringssoldaat", "reisagent", "reisbudget", "restauratiebudget", "rijksbudget", "rijstgerecht", "risicomanagement", "röntgenapparaat", "ruggenmergsvocht", "rundergehakt", "scharniergewricht", "scheidsgerecht", "schijngevecht", "schimmengevecht", "schoolagent", "schoolbegeleidingsdienst", "schoolgenoot", "schoolwijkagent", "schoudergewricht", "sergeant", "slangenbeet", "slangenhout", "slingerplant", "slowfoodgerecht", "soortgenoot", "spiegelgevecht", "spiegelkast", "spiegelruit", "spiegelschrift", "spiegeltent", "spinazienugget", "sportmanagement", "spronggewricht", "stagedocent", "stageopdracht", "stagerapport", "stierengevecht", "straatgevecht", "streekgerecht", "stressmanagement", "studentenbudget", "subsidiebudget", "taalgenoot", "tafelgenoot", "tafelgenot", "teamgeest", "tegenargument", "tegeneffect", "tegenkracht", "tentoonstellingsbudget", "tijdgeest", "tijdgenoot", "tijdmanagement", "tijdsgewricht", "tijgerpunt", "timemanagement", "titanengevecht", "titelgevecht", "topdirigent", "topmanagement", "totaalbudget", "totaalgewicht", "tweegevecht", "tweevingertest", "twintigeurobiljet", "undercoveragent", "urgentierecht", "veiligheidsagent", "veiligheidsarrangement", "veiligheidsmanagement", "vijftigeurobiljet", "vingerplant", "visgerecht", "visnugget", "vleesgerecht", "vleugelboot", "vliegenkast", "vliegerfeest", "vluchtelingenrecht", "vluchtelingentransport", "VN-gezant", "vogelmarkt", "vogeltjesmarkt", "vogelvangst", "vogelvlucht", "volksgericht", "voorlichtingsbudget", "vrachtwagenfabrikant", "vrachtwagenmarkt", "vragersmarkt", "vredegerecht", "vreemdelingenangst", "vreemdelingenbesluit", "vreemdelingendebat", "vreemdelingenrecht", "vreemdelingenstemrecht", "vuistgevecht", "vuurgevecht", "watergeest", "watergevecht", "watermanagement", "wegenbouwproject", "wereldtitelgevecht", "werkgelegenheidseffect", "werkgelegenheidsproject", "werkingsbudget", "wervelgewricht", "wetenschapsbudget", "wetgevingsproject", "wintergerst", "wintergezicht", "wrevelagent", "zadelgewricht", "zagevent", "zanger-componist", "zanger-gitarist", "zangerscast", "zangvogelsport", "zeegevecht", "zegelrecht", "zegetocht", "zelfmanagement", "ziekenhuisbudget", "zwangerschapstest", "goedgevuld", "aangebrand", "welgevuld", "afgeborsteld", "donkergekleurd", "goedgevormd", "welgevormd", "allesverzengend", "bontgekleurd", "doorgewinterd", "goedgehumeurd", "goedgeluimd", "goedgezind", "haatdragend", "kegeldragend", "lichtgekleurd", "nagelbijtend", "ongekleurd", "ongemanierd", "ongeverfd", "rentedragend", "risicodragend", "roodgekleurd", "slechtgehumeurd", "slechtgezind", "vruchtdragend", "welgemanierd", "welgezind", "welopgevoed", "woldragend", "zaaddragend", "zorgdragend", "aanbodgestuurd", "aangehuwd", "aangetekend", "aangetrouwd", "aanliggend", "aanmatigend", "aanvoegend", "achtereenvolgend", "achterliggend", "afgewend", "allesdoordringend", "allesvernietigend", "alleszeggend", "almogend", "alvermogend", "angstaanjagend", "bijstandsgerechtigd", "bloeddrukverhogend", "bloeddrukverlagend", "bloemdragend", "braakliggend", "brandvertragend", "breedgerand", "brildragend", "cholesterolverlagend", "christelijk-gereformeerd", "computergestuurd", "diepliggend", "doodgemoedereerd", "doordringend", "doorslaggevend", "dreigend", "drempelverlagend", "dringend", "dwingend", "eerstvolgend", "eierleggend", "Engelssprekend", "ergerniswekkend", "felgekleurd", "godtergend", "goedgekleed", "goedgemanierd", "goudgerand", "grensverleggend", "handenwringend", "hemeltergend", "hiernavolgend", "hogergenoemd", "hoogdringend", "hoopgevend", "indringend", "ingebeeld", "ingekankerd", "ingekeerd", "ingenaaid", "ingewikkeld", "ingeworteld", "intrigerend", "knoldragend", "kogelwerend", "laaggeletterd", "leidinggevend", "levensbedreigend", "levensbeëindigend", "levensverlengend", "lichtgevend", "lichtgewond", "liggend", "losliggend", "maatgevend", "meedogend", "minvermogend", "moedgevend", "naastliggend", "navolgend", "neerbuigend", "niet-geleidend", "nietszeggend", "normgevend", "oergezond", "omliggend", "onaangediend", "onbevredigend", "ondergewaardeerd", "onderliggend", "ondeugend", "ongeaccepteerd", "ongeanimeerd", "ongearticuleerd", "ongeautoriseerd", "ongecensureerd", "ongeciviliseerd", "ongeclausuleerd", "ongecompliceerd", "ongeconcentreerd", "ongeconditioneerd", "ongecontroleerd", "ongecoördineerd", "ongecorrigeerd", "ongecultiveerd", "ongedateerd", "ongedefinieerd", "ongedifferentieerd", "ongediplomeerd", "ongedisciplineerd", "ongedoubleerd", "ongeëmancipeerd", "ongeëmotioneerd", "ongeforceerd", "ongefrankeerd", "ongefundeerd", "ongegeneerd", "ongehavend", "ongehonoreerd", "ongeïdentificeerd", "ongeïnformeerd", "ongeïnspireerd", "ongeïnteresseerd", "ongekend", "ongekwalificeerd", "ongeleerd", "ongelimiteerd", "ongelinieerd", "ongematteerd", "ongemeend", "ongemeubileerd", "ongemonteerd", "ongemotiveerd", "ongemotoriseerd", "ongenuanceerd", "ongeoefend", "ongeopend", "ongeordend", "ongeorganiseerd", "ongepaneerd", "ongepermitteerd", "ongeprepareerd", "ongepubliceerd", "ongeraffineerd", "ongerealiseerd", "ongeregistreerd", "ongereglementeerd", "ongereguleerd", "ongesigneerd", "ongespecificeerd", "ongestoffeerd", "ongestructureerd", "ongestudeerd", "ongesubsidieerd", "ongevaccineerd", "ongewapend", "onsamenhangend", "onuitgenodigd", "onuitgevoerd", "onvermogend", "onwelgezind", "opeenvolgend", "opvliegend", "opvolgend", "orthodox-gereformeerd", "overtuigend", "overwegend", "overweldigend", "plaatsvervangend", "prangend", "raadgevend", "redengevend", "rentegevend", "rolbevestigend", "roodgeverfd", "rustgevend", "samenhangend", "schermdragend", "schrikaanjagend", "slechtgekleed", "sneldrogend", "statusverhogend", "stilzwijgend", "supergezond", "tegemoetkomend", "tergend", "toegevend", "toonaangevend", "tussenliggend", "uitdagend", "uitgekiend", "uitgeregend", "uitgerekend", "uitnodigend", "vakoverstijgend", "veelzeggend", "vigerend", "vleesvervangend", "vliegend", "volgend", "voorbijgestreefd", "vraaggestuurd", "vreesaanjagend", "Wajonggerechtigd", "waterbergend", "watergekoeld", "welgekend", "welgemeend", "werkgelegenheidsbevorderend", "wetgevend", "winstgevend", "witgehandschoend", "witgepleisterd", "witgeschilderd", "witgeverfd", "zelfcorrigerend", "zelfdragend", "zelfreinigend", "zelfvernietigend", "zelfverzorgend", "zieltogend", "zingevend", "zoetgeurend", "zogenaamd", "zogenoemd", "zwaargehavend", "zwaargewapend", "zwaargewond", "zwaarwegend", "zwartgeverfd", "zwijgend", "doelgericht", "ontwikkelingsgericht", "zwartgerokt", "arbeidsmarktgericht", "functiegericht", "goedgemutst", "kindgericht", "aanbodgericht", "aangedampt", "actiegericht", "arbeidsongeschikt", "brongericht", "buurtgericht", "cliëntgericht", "competentiegericht", "consumentgericht", "divergent", "doelgroepgericht", "doodongerust", "effectgericht", "ervaringsgericht", "exportgericht", "groepsgericht", "ingemaakt", "ingeroest", "innovatiegericht", "intelligent", "klantgericht", "kortgerokt", "maatschappijgericht", "marktgericht", "mensgericht", "nagelvast", "natuurgericht", "niet-gericht", "ongekuist", "ongericht", "onuitgebracht", "onuitgepakt", "onuitgewerkt", "oplossingsgericht", "persoonsgericht", "praktijkgericht", "prestatiegericht", "probleemgericht", "procesgericht", "productgericht", "publieksgericht", "resultaatgericht", "roodgelakt", "taakgericht", "themagericht", "toekomstgericht", "toepassingsgericht", "vakgericht", "voortgezet", "vraaggericht", "wijkgericht", "witgekalkt", "witgelakt", "zelfgemaakt", "zwartgelakt", "morgennacht", "negenduizend", "negenentwintigduizend", "negenhonderd", "negenhonderdduizend", "negentienduizend", "negentienhonderd", "negentigduizend", "morgenochtend", "desgevallend", "morgenavond", "zogezegd", "nergensland", "ontbijtbord", "onthaalbeleid", "onthaalkind", "ontmoedigingsbeleid", "ontmoetingsavond", "ontwapeningsakkoord", "ontwerpakkoord", "ontwerplandbouwakkoord", "ontwerpwedstrijd", "ontwikkelingsbeleid", "ontwikkelingshulpbeleid", "ontwikkelingsland", "ontbeend", "ontbrekend", "onthullend", "onthutsend", "ontkennend", "ontluisterend", "ontoereikend", "ontslagnemend", "ontsmettend", "ontspannend", "ontstekingsremmend", "ontstellend", "ontwapenend", "ontwijkend", "ontwikkeld", "ontzagwekkend", "ontzettend", "ontbijt", "onthardingszout", "ontzet", "ontbijtbuffet", "ontbindingsrecht", "ontdekkingstocht", "onterecht", "ontkoppelingsbesluit", "ontmijningsdienst", "ontslagbesluit", "ontslagdecreet", "ontslagrecht", "ontvangst", "ontwerpbesluit", "ontwerpfout", "ontwerpgrondwet", "ontwerpopdracht", "ontwerprapport", "ontwerpwet", "ontwikkelingspot", "ontwikkelingsproject", "herdershond", "herenakkoord", "herenblad", "herfstavond", "herfstblad", "herfstdraad", "herfstmaand", "herfstochtend", "herfstwind", "herkeuringsraad", "heroïnehond", "herseninhoud", "herstelbeleid", "hervormingsbeleid", "herfst", "hermafrodiet", "hert", "heraut", "herfstlucht", "heraanplant", "herdenkingsbijeenkomst", "herdenkingsconcert", "herdenkingsfeest", "heremietkreeft", "herfstnacht", "herfsttint", "herinneringskunst", "herkomst", "heroïnespuit", "heroïnetransport", "heroïnevangst", "herroepingsrecht", "hersenkracht", "hersenvlucht", "hersenvocht", "hersteldienst", "herstelrecht", "hervormingsproject", "erwt", "ernst", "erbovenuit", "ereambt", "eregast", "erepunt", "erfenisrecht", "erfrecht", "ergotherapeut", "ernaast", "eronderuit", "eropuit", "ertussenuit", "eruit", "ervanuit", "erytrocyt", "eredivisiewedstrijd", "erelid", "erfgoedbeleid", "erkenningsbeleid", "errond", "ervaringswereld", "gebaart", "gebeurt", "gebiedt", "gebood", "gedenkt", "gedraagt", "geeuwt", "gehoorzamt", "geilt", "geldt", "geelt", "gelooft", "geneest", "geniet", "genoot", "gerust", "geurt", "geeft", "besnuffelt", "bedeelt", "bedelt", "bekeert", "beugelt", "beamt", "beantwoordt", "beargumenteert", "beatblogt", "becijfert", "becommentariërt", "beconcurreert", "bedaart", "bedelft", "bedenkt", "bederft", "bedient", "bediscussiërt", "bedoelt", "bedraagt", "bedreigt", "bedriegt", "bedrijft", "bedroeft", "bedwingt", "beëindigt", "beeldbelt", "beetneemt", "beft", "begaat", "begeleidt", "begeert", "begeeft", "begint", "begraaft", "begrijpt", "begroeit", "behaalt", "behandelt", "behangt", "beheert", "behoedt", "behoeft", "behoort", "behoudt", "beïnvloedt", "bekent", "bekeurt", "bekijkt", "beklaagt", "bekleedt", "beklemt", "beklimt", "bekomt", "bekritiseert", "bekroont", "belandt", "beledigt", "belegt", "belemmert", "beleeft", "belt", "beloont", "belooft", "belparkeert", "beluistert", "bemeesteert", "bemeubelt", "bemoedigt", "bemoeit", "benadert", "benauwt", "beneemt", "bengelt", "benieuwt", "benoemt", "beogt", "beoordeelt", "bepaalt", "bepoteelt", "bereidt", "berekent", "berooft", "beschaamt", "beschaaft", "beschermt", "beschildert", "beschouwt", "beschrijft", "beschuldigt", "beslaat", "besloot", "besnijdt", "bespaart", "bespeurt", "bespioneert", "bespreekt", "bespringt", "bestaat", "bestempelt", "bestrijdt", "bestreed", "bestudeert", "bestuurt", "beswaffeelt", "betekent", "betert", "betont", "betonneert", "betovert", "betreedt", "betreft", "betrekt", "betreurt", "betwijfelt", "beult", "bevalt", "beeft", "bevindt", "bevoordeliigt", "bevordert", "bevraagt", "bevriest", "bewapent", "beweert", "bewijst", "bewondert", "bewoont", "bewonersparkeert", "bezaait", "bezeert", "beziet", "bezat", "bezoekt", "bezorgt", "bezuinigt", "bezweert", "verlaat", "verliet", "verschaalt", "verspringt", "vertelt", "veraangenaamt", "verabsoluteert", "verachtvoudiigt", "veradeemt", "verafgoodt", "verafschuwt", "veralgemeent", "verandert", "verankert", "verantwoordt", "verarmt", "verbabbelt", "verbaliseert", "verbant", "verbaast", "verbeeldt", "verbeidt", "verbergt", "verbetert", "verbeuzelt", "verbiedt", "verbood", "verbijstert", "verbindt", "verblijft", "verblindt", "verbouwt", "verbrandt", "verbreekt", "verdappert", "verdedigt", "verdeelt", "verdenkt", "verdient", "verdort", "verdooft", "verdraait", "verdraagt", "verdrijft", "verdringt", "verdrinkt", "verdroogt", "verdubbelt", "verdwaalt", "verdwijnt", "vereenvoudigt", "vet", "verenigt", "vereert", "vergaat", "vergadeert", "vergelijkt", "vergt", "vergeet", "vergat", "vergeeft", "vergiftigt", "vergoedt", "vergrendelt", "verhaalt", "verhangt", "verheldert", "verheugt", "verhindert", "verhoogt", "verhongert", "verhoudt", "verhuist", "verhuurt", "verifiërt", "verjaagt", "verkent", "verkeert", "verkiest", "verklaart", "verkleedt", "verkleint", "verkleurt", "verknoeit", "verkoopt", "verkreukelt", "verkrijgt", "verlaagt", "verlamt", "verlangt", "verleidt", "verleent", "verlengt", "verliest", "verloocheent", "verloopt", "verlooft", "verluiert", "verlummelt", "vermagert", "vermaalt", "vermangelt", "vermeldt", "vermengt", "vermenigvuldigt", "vermijdt", "vermindert", "vermoedt", "vermoeit", "vermolmt", "vermomt", "vermoordt", "vernauwt", "verneemt", "vernevelt", "vernielt", "vernietigt", "vernieuwt", "vernikkelt", "vernoemt", "vernummert", "veronaangenaamt", "veronachtzaamt", "veronderstelt", "verontheiliigt", "verontreinigt", "verontschuldigt", "veroordeelt", "veroorlooft", "verootmoediigt", "veropenbaart", "verordonneert", "verovert", "verpandt", "verpaupert", "verpietert", "verplegt", "verplettert", "verpulvert", "verraadt", "verried", "verrechtvaardiigt", "verregeent", "verreist", "verrekeent", "verrijdt", "verrijst", "verroert", "verrolt", "verronselt", "verruigt", "verruilt", "verruuwt", "verscheurt", "verschijnt", "verschilt", "verschimmelt", "verschoont", "verschraalt", "verschrijft", "verschroeit", "verschrompelt", "verschuilt", "versiert", "versimpelt", "versjachert", "versjouwt", "verslaat", "verslechtert", "versleutelt", "verslijt", "versleet", "verslindt", "verslond", "versluiert", "versluist", "versmaadt", "versmalt", "versmoort", "versnelt", "versnijdt", "versnippert", "versobert", "versoepelt", "versombert", "verspeelt", "verspeent", "verspert", "verspiedt", "verspilt", "verspint", "versplintert", "verspreidt", "verstaat", "verstond", "verstaalt", "verstart", "verstelt", "versteent", "versterft", "versteviigt", "verstijft", "verstilt", "verstomt", "verstoort", "verstoot", "verstiet", "verstouwt", "verstramt", "verstrengt", "verstrijkt", "verstrooit", "verstuift", "verstuurt", "verstuuwt", "versuikert", "versukkelt", "vertaalt", "vertedert", "vertegenwoordigt", "vertekeent", "verteert", "vertienvoudiigt", "vertilt", "vertimmert", "vertint", "vertoeft", "vertoont", "vertoornt", "vertraagt", "vertreedt", "vertroebelt", "vertroetelt", "vertrouwt", "vertwijfelt", "vervaagt", "vervaalt", "vervalt", "vervangt", "vervelt", "verft", "verveent", "verviervoudiigt", "vervijfvoudiigt", "vervliegt", "vervloeit", "vervluchtiigt", "vervoedeert", "vervoegt", "vervoert", "vervolgt", "vervollediigt", "vervordert", "vervormt", "vervreemdt", "vervroegt", "vervuilt", "vervult", "verwaait", "verwaardiigt", "verwaarloost", "verwarmt", "verwart", "verwaseemt", "verwatert", "verwedt", "verwelkoomt", "verweert", "verwerpt", "verwerft", "verweeft", "verwijdt", "verwijdert", "verwijlt", "verwijft", "verwikkelt", "verwildert", "verwint", "verwintert", "verwisselt", "verwittiigt", "verwondt", "verwondert", "verwoont", "verwoordt", "verwringt", "verwurgt", "verzaagt", "verzandt", "verzegelt", "verzegt", "verzeilt", "verzekert", "verzelfstandiigt", "verzendt", "verzengt", "verzesvoudiigt", "verzilvert", "verzinnebeeldt", "verzint", "verzoekt", "verzoent", "verzoolt", "verzuilt", "verzuurt", "verzusteert", "verzwagert", "verzwaart", "verzwelgt", "verzwendelt", "verzweert", "verzwijgt", "ontbiedt", "ontbood", "ontbeet", "ontbindt", "ontbolstert", "ontbraamt", "ontbreekt", "ontcijfert", "ontdoet", "ontdeed", "ontdooit", "ontdubbelt", "onteert", "onterft", "ontgaat", "ontgeldt", "ontglijdt", "ontgloeit", "ontgraaft", "ontgrendelt", "ontgroeit", "ontgroent", "onthaalt", "onthalst", "onthardt", "onthaart", "ontheft", "ontheiligt", "onthoofdt", "onthoudt", "onthield", "onthult", "ontkent", "ontketeent", "ontkiemt", "ontkleurt", "ontkoomt", "ontkoppelt", "ontlaadt", "ontleent", "ontleert", "ontloopt", "ontluist", "ontmengt", "ontmijnt", "ontmoedigt", "ontmythologiseert", "ontneemt", "ontradicaliseert", "ontroert", "ontrommeelt", "ontruimt", "ontslaat", "ontspant", "ontspult", "ontstaat", "ontstond", "ontsteekt", "ontvangt", "ontvoert", "ontvolgt", "ontvoogdt", "ontvriendt", "ontvriest", "ontwerpt", "ontwijkt", "ontwikkelt", "ontzwavelt", "herdenkt", "herdacht", "ergert", "ekent", "eruitzit", "ervaart", "erft"],
      de = ["aaneengedraaid", "aaneengeschakeld", "aanschouwd", "aanvaard", "achtergebleven", "achtergelaten", "achterhaald", "achteromgekeken", "achteropgekomen", "achteruitgegaan", "achtervolgd", "ademgehaald", "bedolven", "bedongen", "bedorven", "bedragen", "bedreven", "bedrogen", "bedropen", "bedwongen", "beetgenomen", "begeven", "begonnen", "begraven", "begrepen", "behangen", "behouden", "bekeken", "beklommen", "bekomen", "bekropen", "beleden", "belezen", "benomen", "beraden", "beschenen", "beschoten", "beschreven", "beslagen", "beslopen", "besloten", "besneden", "besproken", "besprongen", "bestegen", "bestolen", "bestorven", "bestreden", "bestreken", "betreden", "betroffen", "betrokken", "bevallen", "bevochten", "bevolen", "bevonden", "bevroren", "bewezen", "bewogen", "bezeten", "bezien", "beziggehouden", "bezonnen", "bezweken", "bezworen", "bijeengehouden", "bijeengeroepen", "blootgelegd", "blootgesteld", "bovengehaald", "brandgesticht", "buitengesloten", "buitgemaakt", "deelgenomen", "dichtgebonden", "dichtgedaan", "diepgevroren", "doodgegaan", "doorbladerd", "doorboord", "doorbroken", "doordacht", "doordrongen", "doorgrond", "doorkruist", "doorlopen", "doorsneden", "doorstaan", "doorverteld", "doorzien", "doorzocht", "drooggelegd", "dwarsgezeten", "ervaren", "flauwgevallen", "gebakken", "gebannen", "gebarsten", "gebeden", "gebersten", "gebeten", "geblazen", "gebleken", "gebleven", "geblonken", "geboden", "gebogen", "gebonden", "geboren", "geborgen", "geborsten", "gebraden", "gebroken", "gebrouwen", "gedaan", "gedoken", "gedolven", "gedongen", "gedragen", "gedreten", "gedreven", "gedrongen", "gedronken", "gedropen", "gedwongen", "gefloten", "gegeten", "gegeven", "gegleden", "geglommen", "gegolden", "gegoten", "gegraven", "gegrepen", "gehangen", "gehesen", "geheven", "geholpen", "gehouden", "gehouwen", "gekeken", "geklommen", "geklonken", "gekloven", "geknepen", "gekomen", "gekorven", "gekozen", "gekregen", "gekresen", "gekreten", "gekrompen", "gekrooien", "gekropen", "gekunnen", "gekweten", "gelachen", "geladen", "gelaten", "geleden", "gelegen", "geleken", "gelezen", "gelogen", "geloken", "gelopen", "gemalen", "gemeden", "gemeten", "gemoeten", "gemogen", "gemolken", "genegen", "genezen", "genomen", "genoten", "geprezen", "geraden", "gereden", "geregen", "gereten", "gerezen", "geroepen", "geroken", "geschapen", "gescheiden", "geschenen", "gescheten", "gescholden", "gescholen", "geschonden", "geschonken", "geschoren", "geschoten", "geschoven", "geschreden", "geschreven", "geschrokken", "geslagen", "geslapen", "geslepen", "gesleten", "geslonken", "geslopen", "gesloten", "gesmeten", "gesmolten", "gesneden", "gesnoten", "gesnoven", "gespannen", "gespeten", "gespleten", "gesponnen", "gespoten", "gesproken", "gesprongen", "gesproten", "gestegen", "gestoken", "gestolen", "gestonken", "gestoten", "gestoven", "gestreden", "gestreken", "getreden", "getroffen", "getrokken", "gevallen", "gevangen", "gevangengenomen", "gevaren", "gevezen", "gevlochten", "gevloden", "gevlogen", "gevloten", "gevochten", "gevonden", "gevouwen", "gevreten", "gevroren", "gewassen", "geweken", "geweten", "geweven", "gewezen", "gewogen", "gewonden", "gewonnen", "geworden", "geworpen", "geworven", "gewoven", "gewreten", "gewreven", "gewrongen", "gezegen", "gezeken", "gezeten", "gezien", "gezoden", "gezogen", "gezonden", "gezongen", "gezonken", "gezonnen", "gezopen", "gezouten", "gezwegen", "gezwolgen", "gezwollen", "gezwommen", "gezwonden", "gezworen", "gezworven", "hardgelopen", "herladen", "hernomen", "herwonnen", "herzien", "huisgehouden", "kennisgemaakt", "klaargekomen", "kortgesloten", "kwaadgesproken", "kwijtgeraakt", "kwijtgescholden", "langsgekomen", "leeggelopen", "leeggemaakt", "lesgegeven", "liefgehad", "lipgelezen", "meebetaald", "misbruikt", "misleid", "mislukt", "misprezen", "nabewerkt", "nedergedaald", "omarmd", "omfloerst", "omhelsd", "omkleed", "omklemd", "ommuurd", "omringd", "omschreven", "omsingeld", "omsloten", "omvat", "omvergeworpen", "omwikkeld", "omwonden", "omzeild", "omzoomd", "omzworven", "onderbouwd", "onderbroken", "onderdrukt", "ondergaan", "ondergraven", "onderhandeld", "onderhouden", "onderkend", "ondermijnd", "ondernomen", "onderscheiden", "onderschept", "ondersteund", "onderstreept", "ondertekend", "onderverdeeld", "ondervonden", "ondervraagd", "onderwezen", "onderworpen", "onderzocht", "ontbeten", "ontboden", "ontbonden", "ontbroken", "ontdoken", "ontgonnen", "onthouden", "ontkomen", "ontladen", "ontloken", "ontlopen", "ontnomen", "ontraden", "ontslagen", "ontsloten", "ontspannen", "ontsprongen", "ontsproten", "ontstoken", "onttrokken", "ontvangen", "ontweken", "schoongemaakt", "schoongewassen", "stilgestaan", "tandengepoetst", "tegemoetgekomen", "teleurgesteld", "teloorgegaan", "terechtgekomen", "terechtgesteld", "teweeggebracht", "thuisbezorgd", "thuisgekomen", "toebehoord", "toevertrouwd", "tussengekomen", "tussengeworpen", "uitbesteed", "uitbetaald", "uitvergroot", "uitverkocht", "valsgespeeld", "verbannen", "verbleven", "verboden", "verbogen", "verbonden", "verborgen", "verbroken", "verdragen", "verdreven", "verdrongen", "verdronken", "verdroten", "verdwenen", "vergeleken", "vergeten", "vergeven", "vergleden", "vergolden", "vergoten", "vergrepen", "verhangen", "verheven", "verholpen", "verhouden", "verkozen", "verkregen", "verladen", "verlaten", "verlopen", "verloren", "vermeden", "vermogen", "vernomen", "verraden", "verrezen", "verscheiden", "verschenen", "verscholen", "verschoten", "verschoven", "verschreven", "verschrokken", "verslagen", "verslapen", "versleten", "verslonden", "versmolten", "verstoten", "verstreken", "vertrokken", "vervallen", "vervangen", "vervlogen", "verweten", "verweven", "verwezen", "verworpen", "verworven", "verwrongen", "verzonden", "verzonken", "verzonnen", "verzopen", "verzouten", "verzwonden", "volbracht", "voldaan", "voleindigd", "volhard", "volmaakt", "volstaan", "voltooid", "voltrokken", "voorbehouden", "voorkomen", "voorspeld", "voorzien", "wederhaald", "weergalmd", "weerhouden", "weerkaatst", "weerlegd", "weerstaan"],
      le = b.languageProcessing.getWords,
      ie = b.languageProcessing.matchRegularParticiples;

  var se = b.languageProcessing.directPrecedenceException,
      ge = function (e) {
    d()(a, e);
    var r,
        n,
        t = (r = a, n = function () {
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
          t = g()(r);

      if (n) {
        var o = g()(this).constructor;
        e = Reflect.construct(t, arguments, o);
      } else e = t.apply(this, arguments);

      return i()(this, e);
    });

    function a(e, r) {
      var n;
      return o()(this, a), (n = t.call(this, e, r))._participles = function (e) {
        var r = le(e),
            n = [/^(ge|be|ont|ver|her|er)\S+([dt])($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi, /^(aan|af|bij|binnen|los|mee|na|neer|om|onder|samen|terug|tegen|toe|uit|vast)(ge)\S+([dtn])($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi];
        return r.filter(function (e) {
          return 0 !== ie(e, n).length || Object(oe.includes)(de, e);
        });
      }(n.getClauseText()), n.checkParticiples(), n;
    }

    return te()(a, [{
      key: "checkParticiples",
      value: function value() {
        var e = this,
            r = this.getParticiples().filter(function (r) {
          return !Object(oe.includes)(ae, r) && !e.hasNonParticipleEnding(r) && !se(e.getClauseText(), r, Q);
        });
        this.setPassive(r.length > 0);
      }
    }, {
      key: "hasNonParticipleEnding",
      value: function value(e) {
        return /\S+(heid|teit|tijd)($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi.test(e);
      }
    }]), a;
  }(b.languageProcessing.values.Clause),
      be = b.languageProcessing.getClausesSplitOnStopWords,
      ue = b.languageProcessing.createRegexFromArray,
      ve = {
    Clause: ge,
    regexes: {
      auxiliaryRegex: ue(["word", "wordt", "worden", "werd", "werden", "wordend"]),
      stopwordRegex: ue(Z)
    }
  };

  function ce(e) {
    return be(e, ve);
  }

  var he = b.languageProcessing.exceptionListHelpers,
      me = he.checkIfWordEndingIsOnExceptionList,
      we = he.checkIfWordIsOnListThatCanHavePrefix;

  function pe(e, r) {
    var n = r.find(function (r) {
      return -1 !== e.search(new RegExp(r[0]));
    });
    return void 0 !== n && (e = e.replace(new RegExp(n[0]), n[1])), e;
  }

  function ke(e, r, n) {
    var t = we(e, r.getVowelDoubling, n),
        o = function (e, r, n) {
      if (me(e, r.endingMatch) || we(e, r.verbs, n) || r.exactMatch.includes(e)) return !0;
    }(e, r.noVowelDoubling, n),
        a = function (e) {
      return e.charAt(e.length - 4) !== e.charAt(e.length - 3);
    }(e),
        d = function (e, r) {
      return -1 === e.search(new RegExp(r));
    }(e, r.noVowelDoubling.rule);

    return t || !o && a && d;
  }

  var fe = function fe(e, r, n, t) {
    var o = function (e, r, n) {
      for (var t = 0, o = Object.entries(r); t < o.length; t++) {
        var a = o[t],
            d = a[1].suffixes.find(function (r) {
          return new RegExp(r).exec(e);
        });

        if (d) {
          var l = new RegExp(d).exec(e),
              i = l[l.length - 1],
              s = e.lastIndexOf(i);
          if (-1 !== n && s >= n) return {
            suffixIndex: s,
            stemModification: a[1].stemModification
          };
        }
      }
    }(e, r, n);

    return void 0 !== o && (e = function (e, r, n, t, o) {
      return "hedenToHeid" === t ? pe(e, o.regularStemmer.stemModifications.hedenToHeid) : (e = e.substring(0, n), "changeIedtoId" === t ? pe(e, o.regularStemmer.stemModifications.iedToId) : "changeInktoIng" === t && e.endsWith("ink") ? pe(e, o.regularStemmer.stemModifications.inkToIng) : "vowelDoubling" === t && ke(e, o.regularStemmer.stemModifications.exceptionsStemModifications, o.pastParticipleStemmer.compoundVerbsPrefixes) ? pe(e, o.regularStemmer.stemModifications.doubleVowel) : e);
    }(e, 0, o.suffixIndex, o.stemModification, t)), e;
  };

  var ye = b.languageProcessing.regexHelpers,
      je = ye.searchAndReplaceWithRegex,
      ze = ye.doesWordMatchRegex,
      xe = b.languageProcessing.exceptionListHelpers,
      Se = xe.checkIfWordEndingIsOnExceptionList,
      Pe = xe.checkIfWordIsOnListThatCanHavePrefix,
      Ee = function Ee(e, r, n) {
    if (ze(n, r[0])) {
      var t = n.replace(new RegExp(r[0]), r[1]);
      return ke(t, e.regularStemmer.stemModifications.exceptionsStemModifications, e.pastParticipleStemmer.compoundVerbsPrefixes) && je(t, e.regularStemmer.stemModifications.doubleVowel) || t;
    }

    return null;
  };

  function Oe(e, r) {
    return Se(r, e.ambiguousTAndDEndings.wordsTShouldBeStemmed) ? r.slice(0, -1) : ze(r, e.ambiguousTAndDEndings.tOrDArePartOfStem.tEnding) ? r : function (e, r) {
      var n = r.ambiguousTAndDEndings.tOrDArePartOfStem,
          t = je(e, n.firstTOrDPartOfStem);
      if (t) return t;
      if (n.verbsDenShouldBeStemmed.includes(e)) return e.slice(0, -3);
      if (Se(e, n.wordsStemOnlyEnEnding.endingMatch) || Pe(e, n.wordsStemOnlyEnEnding.verbs, r.pastParticipleStemmer.compoundVerbsPrefixes) || ze(e, n.denEnding)) return ke(t = e.slice(0, -2), r.regularStemmer.stemModifications.exceptionsStemModifications, r.pastParticipleStemmer.compoundVerbsPrefixes) && je(t, r.regularStemmer.stemModifications.doubleVowel) || t;
      var o = n.deEnding;
      if (t = Ee(r, o, e)) return t;
      var a = n.teAndTenEndings;
      return (t = Ee(r, a, e)) || null;
    }(r, e) || null;
  }

  var Me = b.languageProcessing.flattenSortLength,
      Fe = function Fe(e, r) {
    var n = e.stemExceptions.stemmingExceptionStemsWithFullForms,
        t = function (e, r, n) {
      var t = Me(n).find(function (r) {
        return e.startsWith(r);
      });
      "string" == typeof t && (e = e.slice(t.length));

      for (var o = 0; o < r.length; o++) {
        for (var a = Object(oe.flatten)(r[o]), d = 0; d < a.length; d++) {
          if (a.includes(e)) return "string" == typeof t ? t + a[0] : a[0];
        }
      }

      return null;
    }(r, n.verbs, e.pastParticipleStemmer.compoundVerbsPrefixes);

    return t || ((t = function (e, r) {
      for (var n = 0; n < r.length; n++) {
        for (var t = Object(oe.flatten)(r[n]), o = 0; o < t.length; o++) {
          if (e.endsWith(t[o])) {
            var a = e.slice(0, -t[o].length);
            return 1 === a.length ? null : a.length > 1 ? a + t[0] : t[0];
          }
        }
      }

      return null;
    }(r, n.endingMatch)) ? t : (t = function (e, r) {
      for (var n = 0; n < r.length; n++) {
        for (var t = Object(oe.flatten)(r[n]), o = 0; o < t.length; o++) {
          if (t.includes(e)) return t[0];
        }
      }

      return null;
    }(r, n.exactMatch)) || null);
  };

  function Be(e, r) {
    var _n;

    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (_n = function (e, r) {
        if (e) {
          if ("string" == typeof e) return Ae(e, void 0);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ae(e, void 0) : void 0;
        }
      }(e)) || r && e && "number" == typeof e.length) {
        _n && (e = _n);

        var t = 0,
            o = function o() {};

        return {
          s: o,
          n: function n() {
            return t >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[t++]
            };
          },
          e: function e(_e2) {
            throw _e2;
          },
          f: o
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var a,
        d = !0,
        l = !1;
    return {
      s: function s() {
        _n = e[Symbol.iterator]();
      },
      n: function n() {
        var e = _n.next();

        return d = e.done, e;
      },
      e: function e(_e3) {
        l = !0, a = _e3;
      },
      f: function f() {
        try {
          d || null == _n["return"] || _n["return"]();
        } finally {
          if (l) throw a;
        }
      }
    };
  }

  function Ae(e, r) {
    (null == r || r > e.length) && (r = e.length);

    for (var n = 0, t = new Array(r); n < r; n++) {
      t[n] = e[n];
    }

    return t;
  }

  var We = b.languageProcessing.regexHelpers.doesWordMatchRegex,
      Ie = function Ie(e, r) {
    return e.includes(r) ? r.slice(0, -1) : null;
  },
      Te = function Te(e, r) {
    return e.endsWith("t") ? !!r.ambiguousTAndDEndings.wordsTShouldBeStemmed.includes(e) || !We(e, r.ambiguousTAndDEndings.tOrDArePartOfStem.tEnding) && !r.stemExceptions.wordsNotToBeStemmedExceptions.verbs.includes(e) : !r.pastParticipleStemmer.doNotStemD.includes(e);
  },
      _e = function _e(e, r, n, t, o) {
    var a,
        d = Be(t);

    try {
      for (d.s(); !(a = d.n()).done;) {
        var l = a.value;

        if (new RegExp("^" + l + o).test(r)) {
          var i = r.slice(l.length - r.length);

          if (n) {
            var s = Ie(e.pastParticipleStemmer.doNotStemGe, i);
            if (s) return l + s;
            i = i.slice(2);
          }

          return i.startsWith("ë") && (i = "e" + i.slice(1)), Te(i, e) ? l + i.slice(0, -1) : l + i;
        }
      }
    } catch (e) {
      d.e(e);
    } finally {
      d.f();
    }

    return null;
  };

  function Re(e, r) {
    if (r.endsWith("heid") || r.endsWith("teit") || r.endsWith("tijd") || ae.includes(r)) return "";
    if (function (e, r) {
      return e.includes(r);
    }(e.pastParticipleStemmer.inseparableCompoundVerbsNotToBeStemmed, r)) return r;

    var n = function (e, r) {
      if (new RegExp("^" + e.pastParticipleStemmer.participleStemmingClasses[0].regex).test(r)) {
        var n = Ie(e.pastParticipleStemmer.doNotStemGe, r);
        if (n) return n;
        var t = r.slice(2);
        return t.startsWith("ë") && (t = "e" + t.slice(1)), Te(t, e) ? t.slice(0, -1) : t;
      }

      return null;
    }(e, r);

    return n || ((n = Ie(e.pastParticipleStemmer.inseparableCompoundVerbs, r)) || (n = function (e, r, n, t) {
      return e.map(function (e) {
        return t.startsWith(e);
      }).some(function (e) {
        return !0 === e;
      }) && t.endsWith("end") && !r.includes(t) ? pe(t.slice(0, -3), n) : null;
    }(e.pastParticipleStemmer.compoundVerbsPrefixes.inseparable, e.pastParticipleStemmer.pastParticiplesEndingOnEnd, e.regularStemmer.stemModifications.finalChanges, r)) ? n : (n = function (e, r) {
      var n,
          t = Be(e.pastParticipleStemmer.participleStemmingClasses);

      try {
        for (t.s(); !(n = t.n()).done;) {
          var o = n.value,
              a = o.regex,
              d = o.separable,
              l = d ? e.pastParticipleStemmer.compoundVerbsPrefixes.separable : e.pastParticipleStemmer.compoundVerbsPrefixes.inseparable,
              i = _e(e, r, d, l, a);

          if (i) return i;
        }
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }

      return null;
    }(e, r)) || null);
  }

  function Ve(e, r) {
    var _n2;

    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (_n2 = function (e, r) {
        if (e) {
          if ("string" == typeof e) return Ce(e, void 0);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ce(e, void 0) : void 0;
        }
      }(e)) || r && e && "number" == typeof e.length) {
        _n2 && (e = _n2);

        var t = 0,
            o = function o() {};

        return {
          s: o,
          n: function n() {
            return t >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[t++]
            };
          },
          e: function e(_e4) {
            throw _e4;
          },
          f: o
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var a,
        d = !0,
        l = !1;
    return {
      s: function s() {
        _n2 = e[Symbol.iterator]();
      },
      n: function n() {
        var e = _n2.next();

        return d = e.done, e;
      },
      e: function e(_e5) {
        l = !0, a = _e5;
      },
      f: function f() {
        try {
          d || null == _n2["return"] || _n2["return"]();
        } finally {
          if (l) throw a;
        }
      }
    };
  }

  function Ce(e, r) {
    (null == r || r > e.length) && (r = e.length);

    for (var n = 0, t = new Array(r); n < r; n++) {
      t[n] = e[n];
    }

    return t;
  }

  var De = b.languageProcessing.exceptionListHelpers,
      Ne = De.checkIfWordEndingIsOnExceptionList,
      Le = De.checkIfWordIsOnListThatCanHavePrefix,
      He = b.languageProcessing.stemHelpers,
      $e = He.removeSuffixFromFullForm,
      qe = He.removeSuffixesFromFullForm,
      Ue = b.languageProcessing.exceptionListHelpers,
      Ge = Ue.checkIfWordEndingIsOnExceptionList,
      Je = Ue.checkIfWordIsOnListThatCanHavePrefix;

  function Ye(e, r, n) {
    return function (e, r, n) {
      var t = e.stemExceptions.wordsNotToBeStemmedExceptions,
          o = e.stemExceptions.removeSuffixesFromFullForms[1].forms,
          a = e.ambiguousTAndDEndings.tOrDArePartOfStem.doNotStemTOrD;
      if (Re(e, n) || Oe(e, n) || Je(n, t.verbs, e.pastParticipleStemmer.compoundVerbsPrefixes) || Ge(n, t.endingMatch) || t.exactMatch.includes(n) || o.includes(r) || Fe(e, n) || r.endsWith("heid") || Ge(r, a)) return !0;
    }(e, r, n) ? null : r.slice(0, -1);
  }

  function Ke(e, r) {
    var _n3;

    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (_n3 = function (e, r) {
        if (e) {
          if ("string" == typeof e) return Qe(e, void 0);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Qe(e, void 0) : void 0;
        }
      }(e)) || r && e && "number" == typeof e.length) {
        _n3 && (e = _n3);

        var t = 0,
            o = function o() {};

        return {
          s: o,
          n: function n() {
            return t >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[t++]
            };
          },
          e: function e(_e6) {
            throw _e6;
          },
          f: o
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var a,
        d = !0,
        l = !1;
    return {
      s: function s() {
        _n3 = e[Symbol.iterator]();
      },
      n: function n() {
        var e = _n3.next();

        return d = e.done, e;
      },
      e: function e(_e7) {
        l = !0, a = _e7;
      },
      f: function f() {
        try {
          d || null == _n3["return"] || _n3["return"]();
        } finally {
          if (l) throw a;
        }
      }
    };
  }

  function Qe(e, r) {
    (null == r || r > e.length) && (r = e.length);

    for (var n = 0, t = new Array(r); n < r; n++) {
      t[n] = e[n];
    }

    return t;
  }

  var Xe = b.languageProcessing.flattenSortLength,
      Ze = b.languageProcessing.exceptionListHelpers.checkExceptionListWithTwoStems,
      er = function er(e, r) {
    for (var n = 0, t = Object.keys(e); n < t.length; n++) {
      var o,
          a = Ke(e[t[n]]);

      try {
        for (a.s(); !(o = a.n()).done;) {
          var d = o.value,
              l = Object(oe.flatten)(Object.values(d));
          if (l.includes(r)) return l[0];
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
  };

  function rr(e, r) {
    var n = function (e, r) {
      var n = Fe(r, e);
      if (n) return n;
      if (n = Re(r, e)) return n;
      var t = r.stemExceptions.wordsNotToBeStemmedExceptions;
      if (Le(e, t.verbs, r.pastParticipleStemmer.compoundVerbsPrefixes) || Ne(e, t.endingMatch) || t.exactMatch.includes(e)) return e;
      var o,
          a = Ve(r.ambiguousTAndDEndings.otherTAndDEndings);

      try {
        for (a.s(); !(o = a.n()).done;) {
          var d = o.value;
          if (e.endsWith(d) && (n = Oe(r, e))) return n;
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }

      return (n = function (e, r) {
        var n = function (e, r) {
          var n,
              t = Ve(e.stemExceptions.removeSuffixesFromFullForms);

          try {
            for (t.s(); !(n = t.n()).done;) {
              var o = n.value,
                  a = qe(o.forms, o.suffixes, r);
              if (a) return a;
            }
          } catch (e) {
            t.e(e);
          } finally {
            t.f();
          }

          var d,
              l = Ve(e.stemExceptions.removeSuffixFromFullForms);

          try {
            for (l.s(); !(d = l.n()).done;) {
              var i = d.value,
                  s = $e(i.forms, i.suffix, r);
              if (s) return s;
            }
          } catch (e) {
            l.e(e);
          } finally {
            l.f();
          }
        }(r, e);

        return n ? ke(n, r.regularStemmer.stemModifications.exceptionsStemModifications, r.pastParticipleStemmer.compoundVerbsPrefixes) ? (n = pe(n, r.regularStemmer.stemModifications.doubleVowel), pe(n, r.regularStemmer.stemModifications.finalChanges)) : pe(n, r.regularStemmer.stemModifications.finalChanges) : null;
      }(e, r)) || function (e, r) {
        var n = function (e) {
          var r = e.search(/[aeiouyèäüëïöáéíóú][^aeiouyèäüëïöáéíóú]/);
          return -1 !== r && (r += 2), -1 !== r && r < 3 && (r = 3), r;
        }(e = pe(e, r.regularStemmer.stemModifications.IAndYToUppercase));

        return pe(e = function (e, r, n, t) {
          for (var o = 0, a = Object.entries(r); o < a.length; o++) {
            var d = a[o];
            e = fe(e, d[1], n, t);
          }

          return e;
        }(e, r.regularStemmer.suffixes, n, r), r.regularStemmer.stemModifications.finalChanges);
      }(e, r);
    }(e, r),
        t = Ze(r.stemExceptions.stemmingExceptionsWithMultipleStems.stemmingExceptionsWithTwoStems, n);

    if (t) return t;
    if (t = function (e, r) {
      var n = Xe(e.pastParticipleStemmer.compoundVerbsPrefixes).find(function (e) {
        return r.startsWith(e);
      }),
          t = "";
      e.stemExceptions.stemmingExceptionsWithMultipleStems.strongAndIrregularVerbs.doNotStemPrefix.find(function (e) {
        return r.endsWith(e);
      }) ? n = null : n && ((t = r.slice(n.length, r.length)).length > 2 ? r = t : n = null);

      for (var o = e.stemExceptions.stemmingExceptionsWithMultipleStems.strongAndIrregularVerbs.strongVerbStems, a = [o.irregularStrongVerbs, o.regularStrongVerbs, o.bothRegularAndIrregularStrongVerbs], d = 0; d < a.length; d++) {
        if (er(a[d], r)) return n ? n + er(a[d], r) : er(a[d], r);
      }
    }(r, n)) return t;
    var o,
        a = Ke(r.ambiguousTAndDEndings.tAndDEndings);

    try {
      for (a.s(); !(o = a.n()).done;) {
        var d = o.value;

        if (n.endsWith(d)) {
          var l = Ye(r, n, e);
          if (l) return l;
        }
      }
    } catch (e) {
      a.e(e);
    } finally {
      a.f();
    }

    return n;
  }

  var nr = b.languageProcessing.baseStemmer;

  function tr(e) {
    var r = Object(oe.get)(e.getData("morphology"), "nl", !1);
    return r ? function (e) {
      return rr(e, r);
    } : nr;
  }

  var or = b.helpers.formatNumber;

  function ar(e) {
    var r = 206.84 - .77 * e.syllablesPer100Words - .93 * e.averageWordsPerSentence;
    return or(r);
  }

  var dr = function (e) {
    d()(a, e);
    var r,
        n,
        t = (r = a, n = function () {
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
          t = g()(r);

      if (n) {
        var o = g()(this).constructor;
        e = Reflect.construct(t, arguments, o);
      } else e = t.apply(this, arguments);

      return i()(this, e);
    });

    function a(e) {
      var r;
      return o()(this, a), r = t.call(this, e), Object.assign(r.config, {
        language: "nl",
        passiveConstructionType: "periphrastic",
        firstWordExceptions: u,
        functionWords: X,
        stopWords: Z,
        transitionWords: c,
        twoPartTransitionWords: ee,
        syllables: re
      }), Object.assign(r.helpers, {
        getClauses: ce,
        getStemmer: tr,
        fleschReadingScore: ar
      }), r;
    }

    return a;
  }(b.languageProcessing.AbstractResearcher);
}]);