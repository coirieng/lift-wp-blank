"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var t = {};

  function r(s) {
    if (t[s]) return t[s].exports;
    var n = t[s] = {
      i: s,
      l: !1,
      exports: {}
    };
    return e[s].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, s) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: s
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
    var s = Object.create(null);
    if (r.r(s), Object.defineProperty(s, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      r.d(s, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return s;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 32);
}([function (e, t) {
  e.exports = window.yoast.analysis;
}, function (e, t) {
  function r(t) {
    return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(t);
  }

  e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  e.exports = window.lodash;
}, function (e, t) {
  e.exports = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t, r) {
  var s = r(8);
  e.exports = function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && s(e, t);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t, r) {
  var s = r(6)["default"],
      n = r(9);
  e.exports = function (e, t) {
    return !t || "object" !== s(t) && "function" != typeof t ? n(e) : t;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  function r(t) {
    return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = r = function r(e) {
      return _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = r = function r(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0), r(t);
  }

  e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  function r(e, t) {
    for (var r = 0; r < t.length; r++) {
      var s = t[r];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  e.exports = function (e, t, s) {
    return t && r(e.prototype, t), s && r(e, s), e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  function r(t, s) {
    return e.exports = r = Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = t, e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(t, s);
  }

  e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, t) {
  e.exports = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},,,,,,,,,,,, function (e) {
  e.exports = JSON.parse('{"vowels":"aeiouyäöüáéâàèîêâûôœ","deviations":{"vowels":[{"fragments":["ouil","deaux","deau$","oard","äthiop","euil","veau","eau$","ueue","lienisch","ance$","ence$","time$","once$","ziat","guette","ête","ôte$","[hp]omme$","[qdscn]ue$","aire$","ture$","êpe$","[^q]ui$","tiche$","vice$","oile$","zial","cruis","leas","coa[ct]","[^i]deal","[fw]eat","[lsx]ed$"],"countModifier":-1},{"fragments":["aau","a[äöüo]","äue","äeu","aei","aue","aeu","ael","ai[aeo]","saik","aismus","ä[aeoi]","auä","éa","e[äaoö]","ei[eo]","ee[aeiou]","eu[aäe]","eum$","eü","o[aäöü]","poet","oo[eo]","oie","oei[^l]","oeu[^f]","öa","[fgrz]ieu","mieun","tieur","ieum","i[aiuü]","[^l]iä","[^s]chien","io[bcdfhjkmpqtuvwx]","[bdhmprv]ion","[lr]ior","[^g]io[gs]","[dr]ioz","elioz","zioni","bio[lnorz]","iö[^s]","ie[ei]","rier$","öi[eg]","[^r]öisch","[^gqv]u[aeéioöuü]","quie$","quie[^s]","uäu","^us-","^it-","üe","naiv","aisch$","aische$","aische[nrs]$","[lst]ien","dien$","gois","[^g]rient","[aeiou]y[aeiou]","byi","yä","[a-z]y[ao]","yau","koor","scient","eriel","[dg]oing"],"countModifier":1},{"fragments":["eauü","ioi","ioo","ioa","iii","oai","eueu"],"countModifier":1}],"words":{"full":[{"word":"beach","syllables":1},{"word":"beat","syllables":1},{"word":"beau","syllables":1},{"word":"beaune","syllables":1},{"word":"belle","syllables":1},{"word":"bouche","syllables":1},{"word":"brake","syllables":1},{"word":"cache","syllables":1},{"word":"chaiselongue","syllables":2},{"word":"choke","syllables":1},{"word":"cordiale","syllables":3},{"word":"core","syllables":1},{"word":"dope","syllables":1},{"word":"eat","syllables":1},{"word":"eye","syllables":1},{"word":"fake","syllables":1},{"word":"fame","syllables":1},{"word":"fatigue","syllables":2},{"word":"femme","syllables":1},{"word":"force","syllables":1},{"word":"game","syllables":1},{"word":"games","syllables":1},{"word":"gate","syllables":1},{"word":"grande","syllables":1},{"word":"ice","syllables":1},{"word":"ion","syllables":2},{"word":"joke","syllables":1},{"word":"jupe","syllables":1},{"word":"maisch","syllables":1},{"word":"maische","syllables":2},{"word":"move","syllables":1},{"word":"native","syllables":2},{"word":"nice","syllables":1},{"word":"one","syllables":1},{"word":"pipe","syllables":1},{"word":"prime","syllables":1},{"word":"rate","syllables":1},{"word":"rhythm","syllables":2},{"word":"ride","syllables":1},{"word":"rides","syllables":1},{"word":"rien","syllables":2},{"word":"save","syllables":1},{"word":"science","syllables":2},{"word":"siècle","syllables":1},{"word":"site","syllables":1},{"word":"suite","syllables":1},{"word":"take","syllables":1},{"word":"taupe","syllables":1},{"word":"universe","syllables":3},{"word":"vogue","syllables":1},{"word":"wave","syllables":1},{"word":"zion","syllables":2}],"fragments":{"global":[{"word":"abreaktion","syllables":4},{"word":"adware","syllables":2},{"word":"affaire","syllables":3},{"word":"aiguière","syllables":2},{"word":"anisette","syllables":3},{"word":"appeal","syllables":2},{"word":"backstage","syllables":2},{"word":"bankrate","syllables":2},{"word":"baseball","syllables":2},{"word":"basejump","syllables":2},{"word":"beachcomber","syllables":3},{"word":"beachvolleyball","syllables":4},{"word":"beagle","syllables":2},{"word":"beamer","syllables":2},{"word":"beamer","syllables":2},{"word":"béarnaise","syllables":3},{"word":"beaufort","syllables":2},{"word":"beaujolais","syllables":3},{"word":"beauté","syllables":2},{"word":"beauty","syllables":2},{"word":"belgier","syllables":3},{"word":"bestien","syllables":2},{"word":"biskuit","syllables":2},{"word":"bleach","syllables":1},{"word":"blue","syllables":1},{"word":"board","syllables":1},{"word":"boat","syllables":1},{"word":"bodysuit","syllables":3},{"word":"bordelaise","syllables":3},{"word":"break","syllables":1},{"word":"build","syllables":1},{"word":"bureau","syllables":2},{"word":"business","syllables":2},{"word":"cabrio","syllables":3},{"word":"cabriolet","syllables":4},{"word":"cachesexe","syllables":2},{"word":"camaieu","syllables":3},{"word":"canyon","syllables":2},{"word":"case","syllables":1},{"word":"catsuit","syllables":2},{"word":"centime","syllables":3},{"word":"chaise","syllables":2},{"word":"champion","syllables":2},{"word":"championat","syllables":3},{"word":"chapiteau","syllables":3},{"word":"chateau","syllables":2},{"word":"château","syllables":2},{"word":"cheat","syllables":1},{"word":"cheese","syllables":1},{"word":"chihuahua","syllables":3},{"word":"choice","syllables":1},{"word":"circonflexe","syllables":3},{"word":"clean","syllables":1},{"word":"cloche","syllables":1},{"word":"close","syllables":1},{"word":"clothes","syllables":1},{"word":"commerce","syllables":2},{"word":"crime","syllables":1},{"word":"crossrate","syllables":2},{"word":"cuisine","syllables":2},{"word":"culotte","syllables":2},{"word":"death","syllables":1},{"word":"defense","syllables":2},{"word":"détente","syllables":2},{"word":"dread","syllables":1},{"word":"dream","syllables":1},{"word":"dresscode","syllables":2},{"word":"dungeon","syllables":2},{"word":"easy","syllables":2},{"word":"engagement","syllables":3},{"word":"entente","syllables":2},{"word":"eye-catcher","syllables":3},{"word":"eyecatcher","syllables":3},{"word":"eyeliner","syllables":3},{"word":"eyeword","syllables":2},{"word":"fashion","syllables":2},{"word":"feature","syllables":2},{"word":"ferien","syllables":3},{"word":"fineliner","syllables":3},{"word":"fisheye","syllables":2},{"word":"flake","syllables":1},{"word":"flambeau","syllables":2},{"word":"flatrate","syllables":2},{"word":"fleece","syllables":1},{"word":"fraîche","syllables":1},{"word":"freak","syllables":1},{"word":"frites","syllables":1},{"word":"future","syllables":2},{"word":"gaelic","syllables":2},{"word":"game-show","syllables":2},{"word":"gameboy","syllables":2},{"word":"gamepad","syllables":2},{"word":"gameplay","syllables":2},{"word":"gameport","syllables":2},{"word":"gameshow","syllables":2},{"word":"garigue","syllables":2},{"word":"garrigue","syllables":2},{"word":"gatefold","syllables":2},{"word":"gateway","syllables":2},{"word":"geflashed","syllables":2},{"word":"georgier","syllables":4},{"word":"goal","syllables":1},{"word":"grapefruit","syllables":2},{"word":"great","syllables":1},{"word":"groupware","syllables":2},{"word":"gueule","syllables":1},{"word":"guide","syllables":1},{"word":"guilloche","syllables":2},{"word":"gynäzeen","syllables":4},{"word":"gynözeen","syllables":4},{"word":"haircare","syllables":2},{"word":"hardcore","syllables":2},{"word":"hardware","syllables":2},{"word":"head","syllables":1},{"word":"hearing","syllables":2},{"word":"heart","syllables":1},{"word":"heavy","syllables":2},{"word":"hedge","syllables":1},{"word":"heroin","syllables":3},{"word":"inclusive","syllables":3},{"word":"initiative","syllables":4},{"word":"inside","syllables":2},{"word":"jaguar","syllables":3},{"word":"jalousette","syllables":3},{"word":"jeans","syllables":1},{"word":"jeunesse","syllables":2},{"word":"juice","syllables":1},{"word":"jukebox","syllables":2},{"word":"jumpsuit","syllables":2},{"word":"kanarien","syllables":4},{"word":"kapriole","syllables":4},{"word":"karosserielinie","syllables":6},{"word":"konopeen","syllables":4},{"word":"lacrosse","syllables":2},{"word":"laplace","syllables":2},{"word":"late-","syllables":1},{"word":"lead","syllables":1},{"word":"league","syllables":1},{"word":"learn","syllables":1},{"word":"légière","syllables":2},{"word":"lizenziat","syllables":4},{"word":"load","syllables":1},{"word":"lotterielos","syllables":4},{"word":"lounge","syllables":1},{"word":"lyzeen","syllables":3},{"word":"madame","syllables":2},{"word":"mademoiselle","syllables":3},{"word":"magier","syllables":3},{"word":"make-up","syllables":2},{"word":"malware","syllables":2},{"word":"management","syllables":3},{"word":"manteau","syllables":2},{"word":"mausoleen","syllables":4},{"word":"mauve","syllables":1},{"word":"medien","syllables":3},{"word":"mesdames","syllables":2},{"word":"mesopotamien","syllables":6},{"word":"milliarde","syllables":3},{"word":"missile","syllables":2},{"word":"miszellaneen","syllables":5},{"word":"mousse","syllables":1},{"word":"mousseline","syllables":3},{"word":"museen","syllables":3},{"word":"musette","syllables":2},{"word":"nahuatl","syllables":2},{"word":"noisette","syllables":2},{"word":"notebook","syllables":2},{"word":"nuance","syllables":3},{"word":"nuklease","syllables":4},{"word":"odeen","syllables":3},{"word":"offline","syllables":2},{"word":"offside","syllables":2},{"word":"oleaster","syllables":4},{"word":"on-stage","syllables":2},{"word":"online","syllables":2},{"word":"orpheen","syllables":3},{"word":"parforceritt","syllables":3},{"word":"patiens","syllables":2},{"word":"patient","syllables":2},{"word":"peace","syllables":1},{"word":"peace","syllables":1},{"word":"peanuts","syllables":2},{"word":"people","syllables":2},{"word":"perineen","syllables":4},{"word":"peritoneen","syllables":5},{"word":"picture","syllables":2},{"word":"piece","syllables":1},{"word":"pipeline","syllables":2},{"word":"plateau","syllables":2},{"word":"poesie","syllables":3},{"word":"poleposition","syllables":4},{"word":"portemanteau","syllables":3},{"word":"portemonnaie","syllables":3},{"word":"primerate","syllables":2},{"word":"primerate","syllables":2},{"word":"primetime","syllables":2},{"word":"protease","syllables":4},{"word":"protein","syllables":3},{"word":"prytaneen","syllables":4},{"word":"quotient","syllables":2},{"word":"radio","syllables":3},{"word":"reader","syllables":2},{"word":"ready","syllables":2},{"word":"reallife","syllables":2},{"word":"repeat","syllables":2},{"word":"retake","syllables":2},{"word":"rigole","syllables":2},{"word":"risolle","syllables":2},{"word":"road","syllables":1},{"word":"roaming","syllables":2},{"word":"roquefort","syllables":2},{"word":"safe","syllables":1},{"word":"savonette","syllables":3},{"word":"sciencefiction","syllables":3},{"word":"search","syllables":1},{"word":"selfmade","syllables":2},{"word":"septime","syllables":3},{"word":"serapeen","syllables":4},{"word":"service","syllables":2},{"word":"serviette","syllables":2},{"word":"share","syllables":1},{"word":"shave","syllables":1},{"word":"shore","syllables":1},{"word":"sidebar","syllables":2},{"word":"sideboard","syllables":2},{"word":"sidekick","syllables":2},{"word":"silhouette","syllables":3},{"word":"sitemap","syllables":2},{"word":"slide","syllables":1},{"word":"sneak","syllables":1},{"word":"soap","syllables":1},{"word":"softcore","syllables":2},{"word":"software","syllables":2},{"word":"soutanelle","syllables":3},{"word":"speak","syllables":1},{"word":"special","syllables":2},{"word":"spracheinstellung","syllables":5},{"word":"spyware","syllables":2},{"word":"square","syllables":1},{"word":"stagediving","syllables":3},{"word":"stakeholder","syllables":3},{"word":"statement","syllables":2},{"word":"steady","syllables":2},{"word":"steak","syllables":1},{"word":"stealth","syllables":1},{"word":"steam","syllables":1},{"word":"stoned","syllables":1},{"word":"stracciatella","syllables":4},{"word":"stream","syllables":1},{"word":"stride","syllables":1},{"word":"strike","syllables":1},{"word":"suitcase","syllables":2},{"word":"sweepstake","syllables":2},{"word":"t-bone","syllables":2},{"word":"t-shirt","syllables":1},{"word":"tailgate","syllables":2},{"word":"take-off","syllables":2},{"word":"take-over","syllables":3},{"word":"takeaway","syllables":3},{"word":"takeoff","syllables":2},{"word":"takeover","syllables":3},{"word":"throat","syllables":1},{"word":"time-out","syllables":2},{"word":"timelag","syllables":2},{"word":"timeline","syllables":2},{"word":"timesharing","syllables":3},{"word":"toast","syllables":1},{"word":"traubenmaische","syllables":4},{"word":"tristesse","syllables":2},{"word":"usenet","syllables":2},{"word":"varietät","syllables":4},{"word":"varieté","syllables":4},{"word":"vinaigrette","syllables":3},{"word":"vintage","syllables":2},{"word":"violett","syllables":3},{"word":"voice","syllables":1},{"word":"wakeboard","syllables":2},{"word":"washed","syllables":1},{"word":"waveboard","syllables":2},{"word":"wear","syllables":1},{"word":"wear","syllables":1},{"word":"website","syllables":2},{"word":"white","syllables":1},{"word":"widescreen","syllables":2},{"word":"wire","syllables":1},{"word":"yacht","syllables":1},{"word":"yorkshire","syllables":2},{"word":"éprouvette","syllables":3,"notFollowedBy":["n"]},{"word":"galette","syllables":2,"notFollowedBy":["n"]},{"word":"gigue","syllables":1,"notFollowedBy":["n"]},{"word":"groove","syllables":1,"notFollowedBy":["n"]},{"word":"morgue","syllables":1,"notFollowedBy":["n"]},{"word":"paillette","syllables":2,"notFollowedBy":["n"]},{"word":"raclette","syllables":2,"notFollowedBy":["n"]},{"word":"roulette","syllables":2,"notFollowedBy":["n"]},{"word":"spike","syllables":1,"notFollowedBy":["n"]},{"word":"style","syllables":1,"notFollowedBy":["n"]},{"word":"tablette","syllables":2,"notFollowedBy":["n"]},{"word":"grunge","syllables":1,"notFollowedBy":["r"]},{"word":"size","syllables":1,"notFollowedBy":["r"]},{"word":"value","syllables":1,"notFollowedBy":["r"]},{"word":"quiche","syllables":1,"notFollowedBy":["s"]},{"word":"house","syllables":1,"notFollowedBy":["n","s"]},{"word":"sauce","syllables":1,"notFollowedBy":["n","s"]},{"word":"space","syllables":1,"notFollowedBy":["n","s"]},{"word":"airline","syllables":2,"notFollowedBy":["n","r"]},{"word":"autosave","syllables":3,"notFollowedBy":["n","r"]},{"word":"bagpipe","syllables":2,"notFollowedBy":["n","r"]},{"word":"bike","syllables":1,"notFollowedBy":["n","r"]},{"word":"dance","syllables":1,"notFollowedBy":["n","r"]},{"word":"deadline","syllables":2,"notFollowedBy":["n","r"]},{"word":"halfpipe","syllables":2,"notFollowedBy":["n","r"]},{"word":"headline","syllables":2,"notFollowedBy":["n","r"]},{"word":"home","syllables":1,"notFollowedBy":["n","r"]},{"word":"hornpipe","syllables":2,"notFollowedBy":["n","r"]},{"word":"hotline","syllables":2,"notFollowedBy":["n","r"]},{"word":"infoline","syllables":3,"notFollowedBy":["n","r"]},{"word":"inline","syllables":2,"notFollowedBy":["n","r"]},{"word":"kite","syllables":1,"notFollowedBy":["n","r"]},{"word":"rollerblade","syllables":1,"notFollowedBy":["n","r"]},{"word":"score","syllables":1,"notFollowedBy":["n","r"]},{"word":"skyline","syllables":2,"notFollowedBy":["n","r"]},{"word":"slackline","syllables":2,"notFollowedBy":["n","r"]},{"word":"slice","syllables":1,"notFollowedBy":["n","r","s"]},{"word":"snooze","syllables":1,"notFollowedBy":["n","r"]},{"word":"storyline","syllables":3,"notFollowedBy":["n","r"]},{"word":"office","syllables":2,"notFollowedBy":["s","r"]},{"word":"space","syllables":1,"notFollowedBy":["n","s","r"]},{"word":"tease","syllables":1,"notFollowedBy":["n","s","r"]},{"word":"cache","syllables":1,"notFollowedBy":["t"]}],"atBeginningOrEnd":[{"word":"case","syllables":1},{"word":"life","syllables":1},{"word":"teak","syllables":1},{"word":"team","syllables":1},{"word":"creme","syllables":1,"notFollowedBy":["n","r"]},{"word":"crème","syllables":1,"notFollowedBy":["n","r"]},{"word":"drive","syllables":1,"notFollowedBy":["n","r"]},{"word":"skate","syllables":1,"notFollowedBy":["n","r"]},{"word":"update","syllables":2,"notFollowedBy":["n","r"]},{"word":"upgrade","syllables":2,"notFollowedBy":["n","r"]}],"atBeginning":[{"word":"anion","syllables":3},{"word":"facelift","syllables":2},{"word":"jiu","syllables":1},{"word":"pace","syllables":1},{"word":"shake","syllables":1},{"word":"tea","syllables":1},{"word":"trade","syllables":1},{"word":"deal","syllables":1}],"atEnd":[{"word":"face","syllables":1},{"word":"file","syllables":1},{"word":"mousse","syllables":1},{"word":"plate","syllables":1},{"word":"tape","syllables":1},{"word":"byte","syllables":1,"alsoFollowedBy":["s"]},{"word":"cape","syllables":1,"alsoFollowedBy":["s"]},{"word":"five","syllables":1,"alsoFollowedBy":["s"]},{"word":"hype","syllables":1,"alsoFollowedBy":["s"]},{"word":"leak","syllables":1,"alsoFollowedBy":["s"]},{"word":"like","syllables":1,"alsoFollowedBy":["s"]},{"word":"make","syllables":1,"alsoFollowedBy":["s"]},{"word":"phone","syllables":1,"alsoFollowedBy":["s"]},{"word":"rave","syllables":1,"alsoFollowedBy":["s"]},{"word":"regime","syllables":2,"alsoFollowedBy":["s"]},{"word":"statue","syllables":2,"alsoFollowedBy":["s"]},{"word":"store","syllables":1,"alsoFollowedBy":["s"]},{"word":"wave","syllables":1,"alsoFollowedBy":["s"]},{"word":"date","syllables":1,"notFollowedBy":["n"]},{"word":"image","syllables":2,"notFollowedBy":["s"]}]}}}}');
},,,,,,,,,,, function (e, t, r) {
  "use strict";

  r.r(t), r.d(t, "default", function () {
    return Qe;
  });

  var s = r(3),
      n = r.n(s),
      l = r(4),
      a = r.n(l),
      b = r(5),
      i = r.n(b),
      u = r(1),
      g = r.n(u),
      h = r(0),
      o = ["das", "dem", "den", "der", "des", "die", "ein", "eine", "einem", "einen", "einer", "eines", "eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "denen", "deren", "derer", "dessen", "diese", "diesem", "diesen", "dieser", "dieses", "jene", "jenem", "jenen", "jener", "jenes", "welch", "welcher", "welches"],
      c = ["bekommst", "bekommt", "bekamst", "bekommest", "bekommet", "bekämest", "bekämst", "bekämet", "bekämt", "gekriegt", "gehörst", "gehört", "gehörtest", "gehörtet", "gehörest", "gehöret", "erhältst", "erhält", "erhaltet", "erhielt", "erhieltest", "erhieltst", "erhieltet", "erhaltest"],
      d = ["werde", "wirst", "wird", "werden", "werdet", "wurde", "ward", "wurdest", "wardst", "wurden", "wurdet", "worden", "werdest", "würde", "würdest", "würden", "würdet", "bekomme", "bekommen", "bekam", "bekamen", "bekäme", "bekämen", "kriege", "kriegst", "kriegt", "kriegen", "kriegte", "kriegtest", "kriegten", "kriegtet", "kriegest", "krieget", "gehöre", "gehören", "gehörte", "gehörten", "erhalte", "erhalten", "erhielten", "erhielte"],
      w = ["werden", "bekommen", "kriegen", "gehören", "erhalten"],
      f = {
    participleLike: c,
    otherAuxiliaries: d.concat(w),
    filteredAuxiliaries: c.concat(d),
    infinitiveAuxiliaries: w,
    all: c.concat(d, w)
  },
      m = ["aber", "abschließend", "abschliessend", "alldieweil", "allerdings", "also", "anderenteils", "andererseits", "andernteils", "anfaenglich", "anfänglich", "anfangs", "angenommen", "anschliessend", "anschließend", "aufgrund", "ausgenommen", "ausserdem", "außerdem", "beispielsweise", "bevor", "beziehungsweise", "bspw", "bzw", "d.h", "da", "dabei", "dadurch", "dafuer", "dafür", "dagegen", "daher", "dahingegen", "danach", "dann", "darauf", "darum", "dass", "davor", "dazu", "dementgegen", "dementsprechend", "demgegenüber", "demgegenueber", "demgemaess", "demgemäß", "demzufolge", "denn", "dennoch", "dergestalt", "derweil", "desto", "deshalb", "desungeachtet", "deswegen", "doch", "dort", "drittens", "ebenfalls", "ebenso", "endlich", "ehe", "einerseits", "einesteils", "entsprechend", "entweder", "erst", "erstens", "falls", "ferner", "folgerichtig", "folglich", "fürderhin", "fuerderhin", "genauso", "hierdurch", "hierzu", "hingegen", "immerhin", "indem", "indes", "indessen", "infolge", "infolgedessen", "insofern", "insoweit", "inzwischen", "jedenfalls", "jedoch", "kurzum", "m.a.w", "mitnichten", "mitunter", "möglicherweise", "moeglicherweise", "nachdem", "nebenher", "nichtsdestotrotz", "nichtsdestoweniger", "ob", "obenrein", "obgleich", "obschon", "obwohl", "obzwar", "ohnehin", "richtigerweise", "schliesslich", "schließlich", "seit", "seitdem", "sobald", "sodass", "so dass", "sofern", "sogar", "solang", "solange", "somit", "sondern", "sooft", "soviel", "soweit", "sowie", "sowohl", "statt", "stattdessen", "trotz", "trotzdem", "überdies", "übrigens", "ueberdies", "uebrigens", "ungeachtet", "vielmehr", "vorausgesetzt", "vorher", "waehrend", "während", "währenddessen", "waehrenddessen", "weder", "wegen", "weil", "weiter", "weiterhin", "wenn", "wenngleich", "wennschon", "wennzwar", "weshalb", "widrigenfalls", "wiewohl", "wobei", "wohingegen", "z.b", "zudem", "zuerst", "zufolge", "zuletzt", "zumal", "zuvor", "zwar", "zweitens"],
      y = m.concat(["abgesehen von", "abgesehen davon", "als dass", "als ob", "als wenn", "anders ausgedrückt", "anders ausgedrueckt", "anders formuliert", "anders gefasst", "anders gefragt", "anders gesagt", "anders gesprochen", "anstatt dass", "auch wenn", "auf grund", "auf jeden fall", "aus diesem grund", "ausser dass", "außer dass", "ausser wenn", "außer wenn", "besser ausgedrückt", "besser ausgedrueckt", "besser formuliert", "besser gesagt", "besser gesprochen", "bloss dass", "bloß dass", "darüber hinaus", "das heisst", "das heißt", "des weiteren", "dessen ungeachtet", "ebenso wie", "genauso wie", "geschweige denn", "im fall", "im falle", "im folgenden", "im gegensatz dazu", "im gegenteil", "im grunde genommen", "in diesem sinne", "je nachdem", "kurz gesagt", "mit anderen worten", "ohne dass", "so dass", "umso mehr als", "umso weniger als", "umso mehr, als", "umso weniger, als", "unbeschadet dessen", "und zwar", "ungeachtet dessen", "unter dem strich", "zum beispiel", "zunächts einmal"]),
      p = f.filteredAuxiliaries,
      k = f.infinitiveAuxiliaries,
      z = ["das", "dem", "den", "der", "des", "die", "ein", "eine", "einem", "einen", "einer", "eines"],
      v = ["eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "zwoelf", "dreizehn", "vierzehn", "fünfzehn", "fuenfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig", "hundert", "einhundert", "zweihundert", "dreihundert", "vierhundert", "fünfhundert", "fuenfhundert", "sechshundert", "siebenhundert", "achthundert", "neunhundert", "tausend", "million", "milliarde", "billion", "billiarde"],
      j = ["erste", "erster", "ersten", "erstem", "erstes", "zweite", "zweites", "zweiter", "zweitem", "zweiten", "dritte", "dritter", "drittes", "dritten", "drittem", "vierter", "vierten", "viertem", "viertes", "vierte", "fünfte", "fünfter", "fünftes", "fünften", "fünftem", "fuenfte", "fuenfter", "fuenftem", "fuenften", "fuenftes", "sechste", "sechster", "sechstes", "sechsten", "sechstem", "siebte", "siebter", "siebten", "siebtem", "siebtes", "achte", "achter", "achten", "achtem", "achtes", "neunte", "neunter", "neuntes", "neunten", "neuntem", "zehnte", "zehnter", "zehnten", "zehntem", "zehntes", "elfte", "elfter", "elftes", "elften", "elftem", "zwölfte", "zwölfter", "zwölften", "zwölftem", "zwölftes", "zwoelfte", "zwoelfter", "zwoelften", "zwoelftem", "zwoelftes", "dreizehnte", "dreizehnter", "dreizehntes", "dreizehnten", "dreizehntem", "vierzehnte", "vierzehnter", "vierzehntes", "vierzehnten", "vierzehntem", "fünfzehnte", "fünfzehnten", "fünfzehntem", "fünfzehnter", "fünfzehntes", "fuenfzehnte", "fuenfzehnten", "fuenfzehntem", "fuenfzehnter", "fuenfzehntes", "sechzehnte", "sechzehnter", "sechzehnten", "sechzehntes", "sechzehntem", "siebzehnte", "siebzehnter", "siebzehntes", "siebzehntem", "siebzehnten", "achtzehnter", "achtzehnten", "achtzehntem", "achtzehntes", "achtzehnte", "nehnzehnte", "nehnzehnter", "nehnzehntem", "nehnzehnten", "nehnzehntes", "zwanzigste", "zwanzigster", "zwanzigstem", "zwanzigsten", "zwanzigstes"],
      x = ["ich", "du", "er", "sie", "es", "wir", "ihr"],
      B = ["mich", "dich", "ihn", "uns", "euch"],
      F = ["denen", "deren", "derer", "dessen", "diese", "diesem", "diesen", "dieser", "dieses", "jene", "jenem", "jenen", "jener", "jenes", "welch", "welcher", "welches", "derjenige", "desjenigen", "demjenigen", "denjenigen", "diejenige", "derjenigen", "dasjenige", "diejenigen"],
      S = ["mein", "meine", "meinem", "meiner", "meines", "meinen", "dein", "deine", "deinem", "deiner", "deines", "deinen", "sein", "seine", "seinem", "seiner", "seines", "ihre", "ihrem", "ihren", "ihrer", "ihres", "unser", "unsere", "unserem", "unseren", "unserer", "unseres", "euer", "eure", "eurem", "euren", "eurer", "eures", "einanders"],
      $ = ["manche", "manch", "viele", "viel", "vieler", "vielen", "vielem", "all", "alle", "aller", "alles", "allen", "allem", "allerlei", "solcherlei", "einige", "etliche", "wenige", "weniger", "wenigen", "wenigem", "weniges", "wenig", "wenigerer", "wenigeren", "wenigerem", "wenigere", "wenigeres", "wenig", "bisschen", "paar", "kein", "keines", "keinem", "keinen", "keine", "mehr", "genug", "mehrere", "mehrerer", "mehreren", "mehrerem", "mehreres", "verschiedene", "verschiedener", "verschiedenen", "verschiedenem", "verschiedenes", "verschiedne", "verschiedner", "verschiednen", "verschiednem", "verschiednes", "art", "arten", "sorte", "sorten"],
      O = ["sich"],
      _ = ["einander"],
      q = ["andere", "anderer", "anderem", "anderen", "anderes", "andren", "andern", "andrem", "anderm", "andre", "andrer", "andres", "beide", "beides", "beidem", "beider", "beiden", "etwas", "irgendetwas", "irgendein", "irgendeinen", "irgendeinem", "irgendeines", "irgendeine", "irgendeiner", "irgendwas", "irgendwessen", "irgendwer", "irgendwen", "irgendwem", "irgendwelche", "irgendwelcher", "irgendwelchem", "irgendwelchen", "irgendwelches", "irgendjemand", "irgendjemanden", "irgendjemandem", "irgendjemandes", "irgendwie", "wer", "wen", "wem", "wessen", "was", "welchen", "welchem", "welche", "jeder", "jedes", "jedem", "jeden", "jede", "jedweder", "jedweden", "jedwedem", "jedwedes", "jedwede", "jeglicher", "jeglichen", "jeglichem", "jegliches", "jegliche", "jedermann", "jedermanns", "jemand", "jemanden", "jemandem", "jemands", "jemandes", "man", "meinesgleichen", "sämtlich", "saemtlich", "sämtlicher", "saemtlicher", "sämtlichen", "saemtlichen", "sämtlichem", "saemtlichem", "sämtliches", "saemtliches", "sämtliche", "saemtliche", "solche", "solcher", "solchen", "solchem", "solches", "niemand", "niemanden", "niemandem", "niemandes", "niemands", "nichts", "zweiter"],
      E = ["warum", "wie", "wo", "woher", "wohin", "wann"],
      P = ["dahinter", "damit", "daneben", "daran", "daraus", "darin", "darunter", "darüber", "darueber", "davon", "dazwischen", "hieran", "hierauf", "hieraus", "hierbei", "hierfuer", "hierfür", "hiergegen", "hierhinter", "hierin", "hiermit", "hiernach", "hierum", "hierunter", "hierueber", "hierüber", "hiervor", "hierzwischen", "hierneben", "hiervon", "wodurch", "wofür", "wofuer", "wogegen", "wohinter", "womit", "wonach", "woneben", "woran", "worauf", "woraus", "worin", "worum", "worunter", "worüber", "worueber", "wovon", "wovor", "wozu", "wozwischen"],
      M = ["hier", "dorthin", "hierher", "dorther"],
      W = ["allenfalls", "keinesfalls", "anderenfalls", "andernfalls", "andrenfalls", "äußerstenfalls", "bejahendenfalls", "bestenfalls", "eintretendenfalls", "entgegengesetztenfalls", "erforderlichenfalls", "gegebenenfalls", "geringstenfalls", "gleichfalls", "günstigenfalls", "günstigstenfalls", "höchstenfalls", "möglichenfalls", "notfalls", "nötigenfalls", "notwendigenfalls", "schlimmstenfalls", "vorkommendenfalls", "zutreffendenfalls", "keineswegs", "durchwegs", "geradenwegs", "geradeswegs", "geradewegs", "gradenwegs", "halbwegs", "mittwegs", "unterwegs"],
      A = ["habe", "hast", "hat", "habt", "habest", "habet", "hatte", "hattest", "hatten", "hätte", "haette", "hättest", "haettest", "hätten", "haetten", "haettet", "hättet", "hab", "bin", "bist", "ist", "sind", "sei", "seiest", "seien", "seiet", "war", "warst", "waren", "wart", "wäre", "waere", "wärest", "waerest", "wärst", "waerst", "wären", "waeren", "wäret", "waeret", "wärt", "waert", "seid", "darf", "darfst", "dürft", "duerft", "dürfe", "duerfe", "dürfest", "duerfest", "dürfet", "duerfet", "durfte", "durftest", "durften", "durftet", "dürfte", "duerfte", "dürftest", "duerftest", "dürften", "duerften", "dürftet", "duerftet", "kann", "kannst", "könnt", "koennt", "könne", "koenne", "könnest", "koennest", "könnet", "koennet", "konnte", "konntest", "konnten", "konntet", "könnte", "koennte", "könntest", "koenntest", "könnten", "koennten", "könntet", "koenntet", "mag", "magst", "mögt", "moegt", "möge", "moege", "mögest", "moegest", "möget", "moeget", "mochte", "mochtest", "mochten", "mochtet", "möchte", "moechte", "möchtest", "moechtest", "möchten", "moechten", "möchtet", "moechtet", "muss", "muß", "musst", "mußt", "müsst", "muesst", "müßt", "mueßt", "müsse", "muesse", "müssest", "muessest", "müsset", "muesset", "musste", "mußte", "musstest", "mußtest", "mussten", "mußten", "musstet", "mußtet", "müsste", "muesste", "müßte", "mueßte", "müsstest", "muesstest", "müßtest", "mueßtest", "müssten", "muessten", "müßten", "mueßten", "müsstet", "muesstet", "müßtet", "mueßtet", "soll", "sollst", "sollt", "solle", "sollest", "sollet", "sollte", "solltest", "sollten", "solltet", "will", "willst", "wollt", "wolle", "wollest", "wollet", "wollte", "wolltest", "wollten", "wolltet", "lasse", "lässt", "laesst", "läßt", "laeßt", "lasst", "laßt", "lassest", "lasset", "ließ", "ließest", "ließt", "ließen", "ließe", "ließet", "liess", "liessest", "liesst", "liessen", "liesse", "liesset"],
      R = ["haben", "dürfen", "duerfen", "können", "koennen", "mögen", "moegen", "müssen", "muessen", "sollen", "wollen", "lassen"],
      I = ["bleibe", "bleibst", "bleibt", "bleibest", "bleibet", "blieb", "bliebst", "bliebt", "blieben", "bliebe", "bliebest", "bliebet", "heiße", "heißt", "heißest", "heißet", "heisse", "heisst", "heissest", "heisset", "hieß", "hießest", "hießt", "hießen", "hieße", "hießet", "hiess", "hiessest", "hiesst", "hiessen", "hiesse", "hiesset", "giltst", "gilt", "geltet", "gelte", "geltest", "galt", "galtest", "galtst", "galten", "galtet", "gälte", "gaelte", "gölte", "goelte", "gältest", "gaeltest", "göltest", "goeltest", "gälten", "gaelten", "gölten", "goelten", "gältet", "gaeltet", "göltet", "goeltet", "aussehe", "aussiehst", "aussieht", "ausseht", "aussehest", "aussehet", "aussah", "aussahst", "aussahen", "aussaht", "aussähe", "aussaehe", "aussähest", "aussaehest", "aussähst", "aussaehst", "aussähet", "aussaehet", "aussäht", "aussaeht", "aussähen", "aussaehen", "scheine", "scheinst", "scheint", "scheinest", "scheinet", "schien", "schienst", "schienen", "schient", "schiene", "schienest", "schienet", "erscheine", "erscheinst", "erscheint", "erscheinest", "erscheinet", "erschien", "erschienst", "erschienen", "erschient", "erschiene", "erschienest", "erschienet"],
      C = ["bleiben", "heißen", "heissen", "gelten", "aussehen", "scheinen", "erscheinen"],
      U = ["a", "à", "ab", "abseits", "abzüglich", "abzueglich", "als", "am", "an", "angelegentlich", "angesichts", "anhand", "anlässlich", "anlaesslich", "ans", "anstatt", "anstelle", "auf", "aufs", "aufseiten", "aus", "ausgangs", "ausschließlich", "ausschliesslich", "außerhalb", "ausserhalb", "ausweislich", "bar", "behufs", "bei", "beidseits", "beiderseits", "beim", "betreffs", "bezüglich", "bezueglich", "binnen", "bis", "contra", "dank", "diesseits", "durch", "einbezüglich", "einbezueglich", "eingangs", "eingedenk", "einschließlich", "einschliesslich", "entgegen", "entlang", "exklusive", "fern", "fernab", "fuer", "für", "fuers", "fürs", "gegen", "gegenüber", "gegenueber", "gelegentlich", "gemäß", "gemaeß", "gen", "getreu", "gleich", "halber", "hinsichtlich", "hinter", "hinterm", "hinters", "im", "in", "inklusive", "inmitten", "innerhalb", "innert", "ins", "je", "jenseits", "kontra", "kraft", "längs", "laengs", "längsseits", "laengsseits", "laut", "links", "mangels", "minus", "mit", "mithilfe", "mitsamt", "mittels", "nach", "nächst", "naechst", "nah", "namens", "neben", "nebst", "nördlich", "noerdlich", "nordöstlich", "nordoestlich", "nordwestlich", "oberhalb", "ohne", "östlich", "oestlich", "per", "plus", "pro", "quer", "rechts", "rücksichtlich", "ruecksichtlich", "samt", "seitens", "seitlich", "seitwärts", "seitwaerts", "südlich", "suedlich", "südöstlich", "suedoestlich", "südwestlich", "suedwestlich", "über", "ueber", "überm", "ueberm", "übern", "uebern", "übers", "uebers", "um", "ums", "unbeschadet", "unerachtet", "unfern", "unter", "unterhalb", "unterm", "untern", "unters", "unweit", "vermittels", "vermittelst", "vermöge", "vermoege", "via", "vom", "von", "vonseiten", "vor", "vorbehaltlich", "wegen", "wider", "zeit", "zu", "zugunsten", "zulieb", "zuliebe", "zum", "zur", "zusätzlich", "zusaetzlich", "zuungunsten", "zuwider", "zuzüglich", "zuzueglich", "zwecks", "zwischen"],
      T = ["und", "oder", "umso"],
      H = ["auch", "noch", "nur"],
      V = ["nun", "so", "gleichwohl"],
      G = ["sage", "sagst", "sagt", "sagest", "saget", "sagte", "sagtest", "sagten", "sagtet", "gesagt", "fragst", "fragt", "fragest", "fraget", "fragte", "fragtest", "fragten", "fragtet", "gefragt", "erkläre", "erklärst", "erklärt", "erklaere", "erklaerst", "erklaert", "erklärte", "erklärtest", "erklärtet", "erklärten", "erklaerte", "erklaertest", "erklaertet", "erklaerten", "denke", "denkst", "denkt", "denkest", "denket", "dachte", "dachtest", "dachten", "dachtet", "dächte", "dächtest", "dächten", "dächtet", "daechte", "daechtest", "daechten", "daechtet", "finde", "findest", "findet", "gefunden"],
      L = ["sagen", "erklären", "erklaeren", "denken", "finden"],
      N = ["sehr", "recht", "überaus", "ueberaus", "ungemein", "weitaus", "einigermaßen", "einigermassen", "ganz", "schwer", "tierisch", "ungleich", "ziemlich", "übelst", "uebelst", "stark", "volkommen", "durchaus", "gar"],
      Z = ["geschienen", "meinst", "meint", "meinest", "meinet", "meinte", "meintest", "meinten", "meintet", "gemeint", "stehe", "stehst", "steht", "gehe", "gehst", "geht", "gegangen", "ging", "gingst", "gingen", "gingt"],
      Y = ["tun", "machen", "stehen", "wissen", "gehen", "kommen"],
      D = ["einerlei", "egal", "neu", "neue", "neuer", "neuen", "neues", "neuem", "neuerer", "neueren", "neuerem", "neueres", "neuere", "neuester", "neuster", "neuesten", "neusten", "neuestem", "neustem", "neuestes", "neustes", "neueste", "neuste", "alt", "alter", "alten", "altem", "altes", "alte", "ältere", "älteren", "älterer", "älteres", "ältester", "ältesten", "ältestem", "ältestes", "älteste", "aeltere", "aelteren", "aelterer", "aelteres", "aeltester", "aeltesten", "aeltestem", "aeltestes", "aelteste", "gut", "guter", "gutem", "guten", "gutes", "gute", "besser", "besserer", "besseren", "besserem", "besseres", "bester", "besten", "bestem", "bestes", "beste", "größte", "grösste", "groß", "großer", "großen", "großem", "großes", "große", "großerer", "großerem", "großeren", "großeres", "großere", "großter", "großten", "großtem", "großtes", "großte", "gross", "grosser", "grossen", "grossem", "grosses", "grosse", "grosserer", "grosserem", "grosseren", "grosseres", "grossere", "grosster", "grossten", "grosstem", "grosstes", "grosste", "einfacher", "einfachen", "einfachem", "einfaches", "einfache", "einfacherer", "einfacheren", "einfacherem", "einfacheres", "einfachere", "einfachste", "einfachster", "einfachsten", "einfachstes", "einfachstem", "schnell", "schneller", "schnellen", "schnellem", "schnelles", "schnelle", "schnellere", "schnellerer", "schnelleren", "schnelleres", "schnellerem", "schnellster", "schnellste", "schnellsten", "schnellstem", "schnellstes", "weit", "weiten", "weitem", "weites", "weiterer", "weiteren", "weiterem", "weiteres", "weitere", "weitester", "weitesten", "weitestem", "weitestes", "weiteste", "eigen", "eigener", "eigenen", "eigenes", "eigenem", "eigene", "eigenerer", "eignerer", "eigeneren", "eigneren", "eigenerem", "eignerem", "eigeneres", "eigneres", "eigenere", "eignere", "eigenster", "eigensten", "eigenstem", "eigenstes", "eigenste", "wenigster", "wenigsten", "wenigstem", "wenigstes", "wenigste", "minderer", "minderen", "minderem", "mindere", "minderes", "mindester", "mindesten", "mindestes", "mindestem", "mindeste", "lang", "langer", "langen", "langem", "langes", "längerer", "längeren", "längerem", "längeres", "längere", "längster", "längsten", "längstem", "längstes", "längste", "laengerer", "laengeren", "laengerem", "laengeres", "laengere", "laengster", "laengsten", "laengstem", "laengstes", "laengste", "tief", "tiefer", "tiefen", "tiefem", "tiefes", "tiefe", "tieferer", "tieferen", "tieferem", "tieferes", "tiefere", "tiefster", "tiefsten", "tiefstem", "tiefste", "tiefstes", "hoch", "hoher", "hohen", "hohem", "hohes", "hohe", "höher", "höherer", "höhere", "höheren", "höherem", "höheres", "hoeherer", "hoehere", "hoeheren", "hoeherem", "hoeheres", "höchster", "höchste", "höchsten", "höchstem", "höchstes", "hoechster", "hoechste", "hoechsten", "hoechstem", "hoechstes", "regulär", "regulärer", "regulären", "regulärem", "reguläres", "reguläre", "regulaer", "regulaerer", "regulaeren", "regulaerem", "regulaeres", "regulaere", "regulärerer", "reguläreren", "regulärerem", "reguläreres", "regulärere", "regulaererer", "regulaereren", "regulaererem", "regulaereres", "regulaerere", "regulärster", "regulärsten", "regulärstem", "regulärstes", "regulärste", "regulaerster", "regulaersten", "regulaerstem", "regulaerstes", "regulaerste", "normal", "normaler", "normalen", "normalem", "normales", "normale", "normalerer", "normaleren", "normalerem", "normaleres", "normalere", "normalster", "normalsten", "normalstem", "normalstes", "normalste", "klein", "kleiner", "kleinen", "kleinem", "kleines", "kleine", "kleinerer", "kleineres", "kleineren", "kleinerem", "kleinere", "kleinster", "kleinsten", "kleinstem", "kleinstes", "kleinste", "winzig", "winziger", "winzigen", "winzigem", "winziges", "winzigerer", "winzigeren", "winzigerem", "winzigeres", "winzigere", "winzigster", "winzigsten", "winzigstem", "winzigste", "winzigstes", "sogenannt", "sogenannter", "sogenannten", "sogenanntem", "sogenanntes", "sogenannte", "kurz", "kurzer", "kurzen", "kurzem", "kurzes", "kurze", "kürzerer", "kürzeres", "kürzeren", "kürzerem", "kürzere", "kuerzerer", "kuerzeres", "kuerzeren", "kuerzerem", "kuerzere", "kürzester", "kürzesten", "kürzestem", "kürzestes", "kürzeste", "kuerzester", "kuerzesten", "kuerzestem", "kuerzestes", "kuerzeste", "wirklicher", "wirklichen", "wirklichem", "wirkliches", "wirkliche", "wirklicherer", "wirklicheren", "wirklicherem", "wirklicheres", "wirklichere", "wirklichster", "wirklichsten", "wirklichstes", "wirklichstem", "wirklichste", "eigentlicher", "eigentlichen", "eigentlichem", "eigentliches", "eigentliche", "schön", "schöner", "schönen", "schönem", "schönes", "schöne", "schönerer", "schöneren", "schönerem", "schöneres", "schönere", "schönster", "schönsten", "schönstem", "schönstes", "schönste", "real", "realer", "realen", "realem", "reales", "realerer", "realeren", "realerem", "realeres", "realere", "realster", "realsten", "realstem", "realstes", "realste", "derselbe", "denselben", "demselben", "desselben", "dasselbe", "dieselbe", "derselben", "dieselben", "gleicher", "gleichen", "gleichem", "gleiches", "gleiche", "gleicherer", "gleicheren", "gleicherem", "gleicheres", "gleichere", "gleichster", "gleichsten", "gleichstem", "gleichstes", "gleichste", "bestimmter", "bestimmten", "bestimmtem", "bestimmtes", "bestimmte", "bestimmtere", "bestimmterer", "bestimmterem", "bestimmteren", "bestimmteres", "bestimmtester", "bestimmtesten", "bestimmtestem", "bestimmtestes", "bestimmteste", "überwiegend", "ueberwiegend", "zumeist", "meistens", "meisten", "meiste", "meistem", "meistes", "großenteils", "grossenteils", "meistenteils", "weithin", "ständig", "staendig", "laufend", "dauernd", "andauernd", "immerfort", "irgendwo", "irgendwann", "ähnlicher", "ähnlichen", "ähnlichem", "ähnliches", "ähnliche", "ähnlich", "ähnlicherer", "ähnlicheren", "ähnlicherem", "ähnlicheres", "ähnlichere", "ähnlichster", "ähnlichsten", "ähnlichstem", "ähnlichstes", "ähnlichste", "schlecht", "schlechter", "schlechten", "schlechtem", "schlechtes", "schlechte", "schlechterer", "schlechteren", "schlechterem", "schlechteres", "schlechtere", "schlechtester", "schlechtesten", "schlechtestem", "schlechtestes", "schlechteste", "schlimm", "schlimmer", "schlimmen", "schlimmem", "schlimmes", "schlimme", "schlimmerer", "schlimmeren", "schlimmerem", "schlimmeres", "schlimmere", "schlimmster", "schlimmsten", "schlimmstem", "schlimmstes", "schlimmste", "toll", "toller", "tollen", "tollem", "tolles", "tolle", "tollerer", "tolleren", "tollerem", "tollere", "tolleres", "tollster", "tollsten", "tollstem", "tollstes", "tollste", "super", "mögliche", "möglicher", "mögliches", "möglichen", "möglichem", "möglich", "moegliche", "moeglicher", "moegliches", "moeglichen", "moeglichem", "moeglich", "nächsten", "nächster", "nächstem", "nächste", "nächstes", "naechsten", "voll", "voller", "vollen", "vollem", "volle", "volles", "vollerer", "volleren", "vollerem", "vollere", "volleres", "vollster", "vollsten", "vollstem", "vollste", "vollstes", "außen", "ganzer", "ganzen", "ganzem", "ganze", "ganzes", "gern", "gerne", "oben", "unten", "zurück", "zurueck", "nicht", "eher", "ehere", "eherem", "eheren", "eheres", "eheste", "ehestem", "ehensten", "ehesten"],
      J = ["ach", "aha", "oh", "au", "bäh", "baeh", "igitt", "huch", "hurra", "hoppla", "nanu", "oha", "olala", "pfui", "tja", "uups", "wow", "grr", "äh", "aeh", "ähm", "aehm", "öhm", "oehm", "hm", "mei", "mhm", "okay", "richtig", "eijeijeijei"],
      K = ["g", "el", "tl", "wg", "be", "bd", "cl", "dl", "dag", "do", "gl", "gr", "kg", "kl", "cb", "ccm", "l", "ms", "mg", "ml", "mi", "pk", "pr", "pp", "sc", "sp", "st", "sk", "ta", "tr", "cm", "mass"],
      Q = ["sekunde", "sekunden", "minute", "minuten", "stunde", "stunden", "uhr", "tag", "tages", "tags", "tage", "tagen", "woche", "wochen", "monat", "monate", "monates", "monats", "monaten", "jahr", "jahres", "jahrs", "jahre", "jahren", "morgens", "mittags", "abends", "nachts", "heute", "gestern", "morgen", "vorgestern", "übermorgen", "uebermorgen"],
      X = ["ding", "dinge", "dinges", "dinger", "dingern", "dingen", "sache", "sachen", "weise", "weisen", "wahrscheinlichkeit", "zeug", "zeuge", "zeuges", "zeugen", "mal", "einmal", "teil", "teile", "teiles", "teilen", "prozent", "prozents", "prozentes", "prozente", "prozenten", "beispiel", "beispiele", "beispieles", "beispiels", "beispielen", "aspekt", "aspekte", "aspektes", "aspekts", "aspekten", "idee", "ideen", "ahnung", "ahnungen", "thema", "themas", "themata", "themen", "fall", "falle", "falles", "fälle", "fällen", "faelle", "faellen", "mensch", "menschen", "leute"],
      ee = ["nix", "nixe", "nixes", "nixen", "usw.", "amen", "ja", "nein", "euro"],
      te = ([].concat(R, k, Y, C, L), [].concat(j, D), [].concat(z, U, T, F, N, $), [].concat(m, W, x, B, ["mir", "dir", "ihm", "ihnen"], O, J, v, I, G, A, p, Z, q, H, V, E, M, ee, P, K, Q, X, _, S), [].concat(z, v, j, F, S, O, _, x, B, $, q, E, P, M, W, p, k, A, R, I, C, U, T, H, V, G, L, m, ["etwa", "absolut", "unbedingt", "wieder", "definitiv", "bestimmt", "immer", "äußerst", "aeußerst", "höchst", "hoechst", "sofort", "augenblicklich", "umgehend", "direkt", "unmittelbar", "nämlich", "naemlich", "natürlich", "natuerlich", "besonders", "hauptsächlich", "hauptsaechlich", "jetzt", "eben", "heutzutage", "eindeutig", "wirklich", "echt", "wahrhaft", "ehrlich", "aufrichtig", "wahrheitsgemäß", "letztlich", "einmalig", "unübertrefflich", "normalerweise", "gewöhnlich", "gewoehnlich", "üblicherweise", "ueblicherweise", "sonst", "fast", "nahezu", "beinahe", "knapp", "annähernd", "annaehernd", "geradezu", "bald", "vielleicht", "wahrscheinlich", "wohl", "voraussichtlich", "zugegeben", "ursprünglich", "insgesamt", "tatsächlich", "eigentlich", "wahrhaftig", "bereits", "schon", "oft", "häufig", "haeufig", "regelmäßig", "regelmaeßig", "gleichmäßig", "gleichmaeßig", "einfach", "lediglich", "bloß", "bloss", "halt", "wahlweise", "eventuell", "manchmal", "teilweise", "nie", "niemals", "nimmer", "jemals", "allzeit", "irgendeinmal", "anders", "momentan", "gegenwärtig", "gegenwaertig", "nebenbei", "anderswo", "woanders", "anderswohin", "anderorts", "insbesondere", "namentlich", "sonderlich", "ausdrücklich", "ausdruecklich", "vollends", "kürzlich", "kuerzlich", "jüngst", "juengst", "unlängst", "unlaengst", "neuerdings", "neulich", "letztens", "neuerlich", "verhältnismäßig", "verhaeltnismaessig", "deutlich", "klar", "offenbar", "anscheinend", "genau", "u.a", "damals", "zumindest"], N, Z, Y, J, D, K, X, ee, Q, ["fr", "hr", "dr", "prof"], ["jr", "jun", "sen", "sr"])),
      re = [":", "aber", "als", "bevor", "bis", "da", "damit", "daß", "dass", "denn", "doch", "ehe", "falls", "gleichwohl", "indem", "indes", "indessen", "insofern", "insoweit", "nachdem", "nun", "ob", "obgleich", "obschon", "obwohl", "obzwar", "oder", "seitdem", "sobald", "sodass", "sofern", "solange", "sondern", "sooft", "soviel", "soweit", "sowie", "trotz", "und", "ungeachtet", "waehrend", "während", "weil", "welche", "welchem", "welchen", "welcher", "welches", "wem", "wen", "wenn", "wenngleich", "wennschon", "wer", "wes", "wessen", "wie", "wiewohl", "wohingegen", "zumal"],
      se = [["anstatt", "dass"], ["bald", "bald"], ["dadurch", "dass"], ["dessen ungeachtet", "dass"], ["entweder", "oder"], ["einerseits", "andererseits"], ["erst", "wenn"], ["je", "desto"], ["je", "umso"], ["umso", "umso"], ["mal", "mal"], ["nicht nur", "sondern auch"], ["ob", "oder"], ["ohne", "dass"], ["so", "dass"], ["sowohl", "als auch"], ["sowohl", "wie auch"], ["teils", "teils"], ["unbeschadet dessen", "dass"], ["weder", "noch"], ["wenn", "auch"], ["wenn", "schon"], ["nicht weil", "sondern"]],
      ne = r(21),
      le = r(7),
      ae = r.n(le),
      be = r(2),
      ie = /^((ge)\S+t($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>]))/gi,
      ue = /^(((be|ent|er|her|ver|zer|über|ueber)\S+([^s]t|sst))($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>]))/gi,
      ge = /(ab|an|auf|aus|vor|wieder|zurück)(ge)\S+t($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi,
      he = /((ab|an|auf|aus|vor|wieder|zurück)(be|ent|er|her|ver|zer|über|ueber)\S+([^s]t|sst))($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi,
      oe = /\S+iert($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi,
      ce = function ce(e) {
    return e.match(ie) || [];
  },
      de = function de(e) {
    return e.match(ue) || [];
  },
      we = function we(e) {
    return e.match(ge) || [];
  },
      fe = function fe(e) {
    return e.match(he) || [];
  },
      me = function me(e) {
    return e.match(oe) || [];
  },
      ye = function ye() {
    return {
      verbsBeginningWithGe: ce,
      verbsBeginningWithErVerEntBeZerHerUber: de,
      verbsWithGeInMiddle: we,
      verbsWithErVerEntBeZerHerUberInMiddle: fe,
      verbsEndingWithIert: me
    };
  },
      pe = ["angefangen", "aufgerissen", "ausgesehen", "befohlen", "befunden", "begonnen", "bekommen", "bewiesen", "beworben", "empfohlen", "empfunden", "entschieden", "erschrocken", "erwogen", "gebacken", "gebeten", "gebissen", "geblasen", "geblieben", "gebogen", "geboren", "geborgen", "geboten", "gebraten", "gebrochen", "gebunden", "gediehen", "gedroschen", "gedrungen", "gefahren", "gefallen", "gefangen", "geflogen", "geflohen", "geflossen", "gefressen", "gefroren", "gefunden", "gegangen", "gegeben", "gegessen", "geglichen", "geglitten", "gelungen", "gegolten", "gegoren", "gegossen", "gegraben", "gegriffen", "gehalten", "gehangen", "gehauen", "geheissen", "geheißen", "gehoben", "geholfen", "geklungen", "gekniffen", "gekommen", "gekrochen", "geladen", "gelassen", "gelaufen", "gelegen", "gelesen", "geliehen", "gelitten", "gelogen", "gelungen", "gemessen", "gemieden", "genesen", "genommen", "genossen", "gepfiffen", "gepriesen", "gequollen", "geraten", "gerieben", "gerissen", "geritten", "gerochen", "geronnen", "gerufen", "gerungen", "geschaffen", "geschehen", "geschieden", "geschienen", "geschlafen", "geschlagen", "geschlichen", "geschliffen", "geschlossen", "geschlungen", "geschmissen", "geschmolzen", "geschnitten", "geschoben", "gescholten", "geschoren", "geschossen", "geschrieben", "geschrien", "geschritten", "geschunden", "geschwiegen", "geschwollen", "geschwommen", "geschworen", "geschwunden", "geschwungen", "gesehen", "gesessen", "gesoffen", "gesonnen", "gespien", "gesponnen", "gesprochen", "gesprossen", "gesprungen", "gestanden", "gestiegen", "gestochen", "gestohlen", "gestorben", "gestoßen", "gestossen", "gestrichen", "gestritten", "gesungen", "gesunken", "getan", "getragen", "getreten", "getrieben", "getroffen", "getrogen", "getrunken", "gewachsen", "gewaschen", "gewichen", "gewiesen", "gewoben", "gewogen", "gewonnen", "geworben", "geworfen", "gewrungen", "gezogen", "gezwungen", "misslungen", "überbacken", "ueberbacken", "überbehalten", "ueberbehalten", "überbekommen", "ueberbekommen", "überbelegen", "ueberbelegen", "überbezahlen", "ueberbezahlen", "überboten", "ueberboten", "übergebunden", "uebergebunden", "überbunden", "ueberbunden", "überblasen", "ueberblasen", "überbraten", "ueberbraten", "übergebraten", "uebergebraten", "überbremst", "ueberbremst", "übergeblieben", "uebergeblieben", "übereinandergelegen", "uebereinandergelegen", "übereinandergeschlagen", "uebereinandergeschlagen", "übereinandergesessen", "uebereinandergesessen", "übereinandergestanden", "uebereinandergestanden", "übereingefallen", "uebereingefallen", "übereingekommen", "uebereingekommen", "übereingetroffen", "uebereingetroffen", "übergefallen", "uebergefallen", "übergessen", "uebergessen", "überfahren", "ueberfahren", "übergefahren", "uebergefahren", "überfallen", "ueberfallen", "überfangen", "ueberfangen", "überflogen", "ueberflogen", "überflossen", "ueberflossen", "übergeflossen", "uebergeflossen", "überfressen", "ueberfressen", "überfroren", "ueberfroren", "übergegeben", "uebergegeben", "übergeben", "uebergeben", "übergegangen", "uebergegangen", "übergangen", "uebergangen", "übergangen", "uebergangen", "übergossen", "uebergossen", "übergriffen", "uebergriffen", "übergegriffen", "uebergegriffen", "übergehalten", "uebergehalten", "überhandgenommen", "ueberhandgenommen", "überhangen", "ueberhangen", "übergehangen", "uebergehangen", "übergehoben", "uebergehoben", "überhoben", "ueberhoben", "überkommen", "ueberkommen", "übergekommen", "uebergekommen", "überladen", "ueberladen", "übergeladen", "uebergeladen", "überlassen", "ueberlassen", "übergelassen", "uebergelassen", "überlaufen", "ueberlaufen", "übergelaufen", "uebergelaufen", "überlesen", "ueberlesen", "übergelegen", "uebergelegen", "übergenommen", "uebergenommen", "übernommen", "uebernommen", "übergequollen", "uebergequollen", "überrissen", "ueberrissen", "überritten", "ueberritten", "übergeschossen", "uebergeschossen", "überschlafen", "ueberschlafen", "überschlagen", "ueberschlagen", "übergeschlagen", "uebergeschlagen", "übergeschlossen", "uebergeschlossen", "überschnitten", "ueberschnitten", "überschrieben", "ueberschrieben", "überschrieen", "ueberschrieen", "überschrien", "ueberschrien", "überschritten", "ueberschritten", "überschwungen", "ueberschwungen", "übergesehen", "uebergesehen", "übersehen", "uebersehen", "übergesotten", "uebergesotten", "übergesotten", "uebergesotten", "übersponnen", "uebersponnen", "übersprochen", "uebersprochen", "übersprungen", "uebersprungen", "übergesprungen", "uebergesprungen", "überstochen", "ueberstochen", "übergestochen", "uebergestochen", "überstanden", "ueberstanden", "übergestanden", "uebergestanden", "überstiegen", "ueberstiegen", "übergestiegen", "uebergestiegen", "übergestrichen", "uebergestrichen", "überstrichen", "ueberstrichen", "übertragen", "uebertragen", "übertroffen", "uebertroffen", "übertrieben", "uebertrieben", "übertreten", "uebertreten", "übergetreten", "uebergetreten", "überwachsen", "ueberwachsen", "überwiesen", "ueberwiesen", "überworfen", "ueberworfen", "übergeworfen", "uebergeworfen", "überwogen", "ueberwogen", "überwunden", "ueberwunden", "überzogen", "ueberzogen", "übergezogen", "uebergezogen", "verdorben", "vergessen", "verglichen", "verloren", "verstanden", "verschwunden", "vorgeschlagen"],
      ke = h.languageProcessing.getWords,
      ze = ye(),
      ve = ze.verbsBeginningWithErVerEntBeZerHerUber,
      je = ze.verbsBeginningWithGe,
      xe = ze.verbsWithGeInMiddle,
      Be = ze.verbsWithErVerEntBeZerHerUberInMiddle,
      Fe = ze.verbsEndingWithIert,
      Se = ["geht", "gämsbart", "gemsbart", "geäst", "gebarungsbericht", "geähnelt", "geartet", "gebäudetrakt", "gebet", "gebiet", "gebietsrepräsentant", "gebildbrot", "gebirgsart", "gebirgsgrat", "gebirgskurort", "gebirgsluft", "gebirgsschlucht", "geblüt", "geblütsrecht", "gebohntkraut", "gebot", "gebrauchsgut", "gebrauchstext", "gebrauchsverlust", "gebrauchtgerät", "gebrauchtwagengeschäft", "gebrauchtwagenmarkt", "geburt", "geburtsakt", "geburtsgeschwulst", "geburtsgewicht", "geburtsort", "geburtsrecht", "geburtsstadt", "geburtstagsfest", "geckenart", "gedächtniskonzert", "gedächtniskunst", "gedächtnisverlust", "gedankenarmut", "gedankenexperiment", "gedankenflucht", "gedankengut", "gedankenschritt", "gedankenwelt", "gedenkkonzert", "gedicht", "geest", "gefahrengebiet", "gefahrenmoment", "gefahrenpunkt", "gefahrgut", "gefahrguttransport", "gefährt", "gefälligkeitsakzept", "gefallsucht", "gefangenenanstalt", "gefangenentransport", "gefängnisarzt", "gefängniskluft", "gefäßnaht", "gefecht", "gefechtsabschnitt", "gefechtsbereit", "gefechtsgebiet", "gefechtsgewicht", "gefechtshut", "gefechtsmast", "gefechtsmast", "geflecht", "geflügelaufzucht", "geflügelleberwurst", "geflügelmarkt", "geflügelmast", "geflügelpest", "geflügelsalat", "geflügelwurst", "geflügelzucht", "gefolgsleute", "gefrett", "gefriergerät", "gefriergut", "gefrierobst", "gefrierpunkt", "gefrierschnitt", "gefühlsarmut", "gefühlswelt", "gegenangebot", "gegenansicht", "gegenargument", "gegengeschäft", "gegengewalt", "gegengewicht", "gegenkandidat", "gegenkompliment", "gegenkonzept", "gegenlicht", "gegenmacht", "gegenpapst", "gegenpart", "gegensatzwort", "gegenstandpunkt", "gegenstandsgebiet", "gegenwart", "gegenwartskunst", "gegenwelt", "gegenwort", "gehaart", "gehandicapt", "gehandikapt", "geheimagent", "geheimbericht", "geheimdokument", "geheimfavorit", "geheimkontakt", "geheimkult", "geheimnisverrat", "geheimpolizist", "geheimrat", "geheimrezept", "geheimtext", "gehirnakrobat", "gehirngeschwulst", "gehirnhaut", "gehirnsandgeschwulst", "gehirntot", "gehirntrust", "gehöft", "gehörlosensport", "geigenkonzert", "geißbart", "geißblatt", "geißhirte", "geißhirt", "geist", "geisterfahrt", "geisterstadt", "geisterwelt", "geistesarmut", "geistesart", "geistesfürst", "geistesgegenwart", "geistesgestört", "geistesprodukt", "geistestat", "geistesverwandt", "geisteswelt", "geklüft", "geländefahrt", "geländeritt", "geländesport", "gelangweilt", "gelaut", "geläut", "gelblicht", "gelbrost", "gelbsucht", "gelbwurst", "gelcoat", "geldausgabeautomat", "geldautomat", "geldgeschäft", "geldheirat", "geldinstitut", "geldmarkt", "geldsurrogat", "geldtransport", "geldverlust", "gelehrtenstreit", "gelehrtenwelt", "geleit", "geleitboot", "geleitwort", "gelenkgicht", "gelenkwassersucht", "geleucht", "geltungssucht", "gelüst", "gemächt", "gemeindeamt", "gemeindebürgerrecht", "gemeindegut", "gemeindekirchenrat", "gemeindepräsident", "gemeinderat", "gemeingeist", "gemeingut", "gemeinschaftsgeist", "gemeinschaftsprojekt", "gemeinschaftsunterkunft", "gemengesaat", "gemüseart", "gemüsebeet", "gemüsegeschäft", "gemüsemarkt", "gemüsesaft", "gemüsesalat", "gemüsezucht", "gemüt", "gemütsarmut", "gemütsart", "gemütsathlet", "gemütskalt", "genausogut", "genausooft", "genausoweit", "gendefekt", "generalagent", "generalarzt", "generalat", "generalbassinstrument", "generalbaßinstrument", "generalbundesanwalt", "generalgouvernement", "generalintendant", "generalist", "generalkonsulat", "generalleutnant", "generaloberst", "generalresident", "generalsekretariat", "generalstaaten", "generalstaatsanwalt", "generalsuperintendent", "generalüberholt", "generalvikariat", "generalvollmacht", "generationenkonflikt", "generativist", "genist", "genitivattribut", "genitivobjekt", "genmanipuliert", "gennesaret", "genotzüchtigt", "gent", "genuasamt", "genussgift", "genußgift", "genusssucht", "genuss-sucht", "genußsucht", "genverändert", "geobiont", "geodät", "geografieunterricht", "geographieunterricht", "geokrat", "geophyt", "gepäckfracht", "geradeausfahrt", "geradesogut", "gefälligst", "gerant", "gerät", "gerätewart", "geräuschlaut", "gerbextrakt", "gericht", "gerichtsarzt", "gerichtsort", "gerichtspräsident", "germanisiert", "germanist", "germanistikstudent", "gerodelt", "geröllschicht", "geröllschutt", "geront", "gerontokrat", "gerstenbrot", "gerstensaft", "gerstenschrot", "gerücht", "gerüst", "gesamtansicht", "gesamtaspekt", "gesamtdurchschnitt", "gesamtgewicht", "gesamtgut", "gesamt", "gesamtklassement", "gesamtunterricht", "gesandtschaftsrat", "gesangskunst", "gesangspart", "gesangssolist", "gesangsunterricht", "gesangunterricht", "geschäft", "geschäftsaufsicht", "geschäftsbericht", "geschäftsgeist", "geschäftswelt", "geschenkpaket", "geschichtsunterricht", "geschicklichkeitstest", "geschicklichkeitstest", "geschlecht", "geschlechtsakt", "geschlechtslust", "geschlechtsprodukt", "geschlechtswort", "geschmackstest", "geschwindigkeitslimit", "geschworenengericht", "geschwulst", "gesellschaftsfahrt", "gesellschaftsschicht", "gesetzblatt", "gesetzespaket", "gesetzestext", "gesicht", "gesichtshaut", "gesichtspunkt", "gesichtsschnitt", "gesichtsverlust", "gespenst", "gespensterfurcht", "gespinst", "gespött", "gesprächstherapeut", "gestalt", "gestaltungselement", "gesteinsart", "gesteinschutt", "gesteinsschicht", "gestüt", "gestüthengst", "verantwortungsbewusst", "verantwortungsbewußt", "getast", "getränkeabholmarkt", "getränkeautomat", "getränkemarkt", "getreideart", "getreideaussaat", "getreideexport", "getreideimport", "getreideprodukt", "getreideschnitt", "getreidevorrat", "gewährfrist", "gewalt", "gewaltakt", "gewaltbereit", "gewalttat", "gesprächsbereit", "gewaltverbot", "gewaltverzicht", "gewässerbett", "gewässerwart", "gewebeschicht", "gewebsrest", "gewicht", "gewichtsprozent", "gewichtsverlust", "gewerbeamt", "gewerbearzt", "gewerbeaufsicht", "gewerbeaufsichtsamt", "gewerbegebiet", "gewerberecht", "gewerbsunzucht", "gewerkschaft", "gewerkschaftsjournalist", "gewindestift", "gewinnsucht", "gewinst", "gewissensangst", "gewissenskonflikt", "gewitterfront", "gewitterluft", "gewohnheitsrecht", "gewürzextrakt", "gewürzkraut", "gezücht", "erbbaurecht", "erbfolgerecht", "erbfolgestreit", "erbgut", "erbhofrecht", "erblast", "erbpacht", "erbrecht", "erbschaftsstreit", "erbsenkraut", "erbbedingt", "erbberechtigt", "erblasst", "erblaßt", "erbswurst", "erbverzicht", "erbwort", "erbzinsgut", "erdbebengebiet", "erdbeerjogurt", "erdbeerjoghurt", "erdbeeryoghurt", "erdbeerkompott", "erdbeerrot", "erdbeersaft", "erdbeersekt", "erdengut", "erdenlust", "erdfrucht", "erdgeist", "erdkundeunterricht", "erdlicht", "erdmittelpunkt", "erdnussfett", "erdölprodukt", "erdölproduzent", "erdsatellit", "erdschicht", "erdsicht", "erdtrabant", "erdverhaftet", "eremit", "erfahrungsbericht", "erfahrungshorizont", "erfahrungswelt", "erfindergeist", "erfolgsaussicht", "erfolgsorientiert", "erfolgsrezept", "erfolgsverwöhnt", "erfüllungsort", "erfurt", "ergänzungsheft", "ergänzungssport", "ergänzungstest", "ergostat", "ergotherapeut", "erholungsgebiet", "erholungsort", "erkundungsfahrt", "erlaucht", "erläuterungstext", "erlebnisbericht", "erlebnisorientiert", "erlebniswelt", "ernährungsamt", "ernst", "ernstgemeint", "ernteaussicht", "erntedankfest", "erntefest", "erntemonat", "ernteresultat", "eroberungsabsicht", "eroberungsgeist", "eroberungslust", "eroberungssucht", "eröffnungskonzert", "ersatzgeschwächt", "ersatzgut", "ersatzkandidat", "ersatzobjekt", "ersatzpräparat", "ersatzreservist", "ersatztorwart", "erscheinungsfest", "erscheinungsort", "erscheinungswelt", "erschließungsgebiet", "erst", "erstbundesligist", "erstfahrt", "erstgebot", "erstgeburt", "erstgeburtsrecht", "erstklassbillett", "erstklaßbillett", "erstkommunikant", "erstkonsument", "erstligist", "erstplatziert", "erstplaciert", "erstplaziert", "erstrecht", "ertragsaussicht", "erwartungsangst", "erwartungshorizont", "erwerbseinkünfte", "erythrit", "erythroblast", "erythrozyt", "erzählertalent", "erzählgut", "erzählkunst", "erzähltalent", "erzamt", "erzdemokrat", "erzeugungsschlacht", "erzfaschist", "erziehungsanstalt", "erziehungsberechtigt", "erziehungsinstitut", "erzkommunist", "erzprotestant", "veranlassungswort", "veranschaulicht", "veranschlagt", "verantwortungsbewusst", "verantwortungsbewußt", "veräußerungsverbot", "verbalist", "verbalkontrakt", "verbändestaat", "verbannungsort", "verbildlicht", "verbindungspunkt", "verbindungsstudent", "verbraucherkredit", "verbrauchermarkt", "verbrauchsgut", "verbrechernest", "verbrechersyndikat", "verbrecherwelt", "verbreitungsgebiet", "verbrennungsprodukt", "verdachtsmoment", "verdampfungsgerät", "verdauungstrakt", "verdikt", "veredelungsprodukt", "verehrerpost", "vereinspräsident", "vereinsrecht", "vereinssport", "verfahrensrecht", "verfassungsfahrt", "verfassungsgericht", "verfassungsrecht", "verfassungsstaat", "verfolgungsrecht", "verfremdungseffekt", "verfügungsgewalt", "verfügungsrecht", "verfügungsberechtigt", "verführungskunst", "vergegenständlicht", "vergegenwärtigt", "vergeltungsakt", "vergenossenschaftlicht", "vergissmeinnicht", "vergißmeinnicht", "vergleichsmonat", "vergleichsobjekt", "vergleichspunkt", "vergnügungsetablissement", "vergnügungsfahrt", "vergnügungssucht", "vergrößerungsgerät", "verhaltensgestört", "verhältniswahlrecht", "verhältniswort", "verhandlungsangebot", "verhandlungsbereit", "versandbereit", "verteidigungsbereit", "verhandlungsmandat", "verhandlungsort", "verhandlungspunkt", "verhöramt", "verist", "verjährungsfrist", "verkaufsagent", "verkaufsangebot", "verkaufsargument", "verkaufsautomat", "verkaufsfront", "verkaufshit", "verkaufsobjekt", "verkaufsorientiert", "verkaufspunkt", "verkehrsamt", "verkehrsdelikt", "verkehrsinfarkt", "verkehrsknotenpunkt", "verkehrslicht", "verkehrsnachricht", "verkehrspolizist", "verkehrsrecht", "verkehrsunterricht", "verkehrsverbot", "verklarungsbericht", "verknüpfungspunkt", "verkündungsblatt", "verlagsanstalt", "verlagsprospekt", "verlagsrecht", "verlagsrepräsentant", "verlagssignet", "verlust", "verlustgeschäft", "verlust", "verlustgeschäft", "verlustpunkt", "vermessungsamt", "vermittlungsamt", "vermögensrecht", "vermont", "vermummungsverbot", "verneinungswort", "vernichtungswut", "vernunft", "vernunftheirat", "verordnungsblatt", "verpackungsflut", "verpflichtungsgeschäft", "verrat", "versammlungsort", "versammlungsrecht", "versandgeschäft", "versandgut", "versart", "verschlusslaut", "verschnitt", "verschwendungssucht", "versehrtensport", "versicherungsagent", "versicherungsanstalt", "versicherungsrecht", "verskunst", "versöhnungsfest", "versorgungsamt", "versorgungsberechtigt", "versorgungsgebiet", "versorgungsgut", "versorgungsstaat", "verstakt", "verständigungsbereit", "verstellungskunst", "verstürznaht", "versuchsanstalt", "versuchsobjekt", "versuchsprojekt", "vertebrat", "verteidigungsbudget", "verteidigungsetat", "verteidigungspakt", "verteilungskonflikt", "verteilungszahlwort", "vertikalschnitt", "vertikutiergerät", "vertragsgerecht", "vertragspunkt", "vertragsrecht", "vertragsstaat", "vertragstext", "vertragswerkstatt", "vertrauensanwalt", "vertrauensarzt", "vertrauensverlust", "vertriebsrecht", "vervielfältigungsrecht", "vervielfältigungszahlwort", "verwaltungsakt", "verwaltungsgericht", "verwaltungsrat", "verwaltungsrecht", "verwundetentransport", "verzicht", "verzweiflungsakt", "verzweiflungstat", "entbindungsanstalt", "entdeckungsfahrt", "entenbrust", "entenfett", "entertainment", "enthusiast", "entlastungsmoment", "entlüftungsschacht", "entnazifizierungsgericht", "entoblast", "entoparasit", "entrechat", "entrefilet", "entrepot", "entscheidungsfurcht", "entscheidungsgewalt", "entscheidungsrecht", "entscheidungsschlacht", "entstehungsort", "entsteht", "entwässerungsschacht", "entwicklungsabschnitt", "entwicklungsinstitut", "entwicklungsprojekt", "entwicklungsschritt", "entziehungsanstalt", "zerat", "zerebrallaut", "zerfallsprodukt", "zergliederungskunst", "zerit", "zermatt", "zersetzungsprodukt", "zerstörungslust", "zerstörungswut", "zertifikat", "zerussit", "zervelat", "zervelatwurst", "beamtenrecht", "beamtenschicht", "beamtenstaat", "beat", "beatmungsgerät", "beaufort", "becherfrucht", "beckengurt", "becquereleffekt", "bedarfsgut", "bedenkfrist", "bedienungselement", "bedienungsgerät", "bedienungskomfort", "bedingtgut", "bedürfnisanstalt", "beeinflusst", "beeinflußt", "beerdigungsanstalt", "beerdigungsinstitut", "beerenfrucht", "beerenobst", "beerensaft", "beet", "befasst", "befaßt", "befehlsgewalt", "beförderungsentgelt", "beförderungsrecht", "begabungstest", "begegnungsort", "begleitinstrument", "begleittext", "begleitwort", "begnadigungsrecht", "begräbt", "begrenzungslicht", "begriffswelt", "begriffswort", "begrüßungswort", "behaviorist", "behebungsfrist", "behelfsausfahrt", "behelfsunterkunft", "behindertengerecht", "behindertensport", "behindertentransport", "behmlot", "beiblatt", "beiboot", "beignet", "beiheft", "beikost", "beilast", "beileidswort", "beinamputiert", "beinhaut", "beirat", "beirut", "beistandskredit", "beistandspakt", "beitritt", "beitrittsabsicht", "beitrittsgebiet", "beiwacht", "beiwort", "beizgerät", "bekehrungswut", "bekennergeist", "bekennermut", "bekleidungsamt", "bekommen", "belegarzt", "belegbett", "belegfrist", "belehrungssucht", "belemnit", "belesprit", "beleuchtungseffekt", "beleuchtungsgerät", "belfast", "belkantist", "belcantist", "belletrist", "bellizist", "belt", "benedikt", "benediktenkraut", "benefiziant", "benefiziat", "benefizkonzert", "beneluxstaat", "bentonit", "benzindunst", "beratungspunkt", "bereit", "bereicherungsabsicht", "bereitschaftsarzt", "bergamt", "bergeslast", "bergfahrt", "bergfest", "berggeist", "berggrat", "bergluft", "bergpredigt", "bergsport", "berg-und-Tal-Fahrt", "bergwacht", "bergwelt", "bericht", "berichtsmonat", "beritt", "bermudashort", "bernbiet", "berserkerwut", "berufsaussicht", "berufssoldat", "berufssport", "berufsstart", "berufstracht", "berufsverbot", "berufungsfrist", "berufungsgericht", "berufungsrecht", "berührungsangst", "berührungspunkt", "besanmast", "besatzungsgebiet", "besatzungsmacht", "besatzungsrecht", "besatzungssoldat", "besatzungsstatut", "beschaffungsamt", "beschäftigungstherapeut", "beschlächt", "beschlussrecht", "beschlußrecht", "beschmet", "beschneidungsfest", "beschlächt", "beschlussrecht", "beschlußrecht", "beschmet", "beschneidungsfest", "beschwerdefrist", "beschwerderecht", "beschwörungskunst", "beseitigungsanstalt", "besetzungsgebiet", "besetzungsmacht", "besetzungsstatut", "besichtigungsfahrt", "besitzrecht", "besoldungsrecht", "besprechungspunkt", "besserungsanstalt", "bestattungsinstitut", "bestimmungsort", "bestimmungswort", "bestinformiert", "bestqualifiziert", "bestrahlungsgerät", "bestrenommiert", "bestsituiert", "bestverkauft", "besucherrat", "besuchsrecht", "betpult", "betracht", "betreibungsamt", "betriebsarzt", "betriebsfest", "betriebsrat", "betriebswirt", "bett", "bettelmusikant", "bettelvogt", "bettstatt", "bettwurst", "beulenpest", "beutegut", "beutekunst", "beuterecht", "bevölkerungsschicht", "bewahranstalt", "bewährungsfrist", "bewegungsarmut", "beweislast", "bewußt", "bewusst", "beziehungsgeflecht", "bezirksamt", "bezirksarzt", "bezirksgericht", "bezirkskabinett", "bezirksschulrat", "bezirksstadt", "bezugspunkt", "bezugsrecht", "heraklit", "herat", "herbalist", "herbst", "herbstmonat", "herbstpunkt", "herdbuchzucht", "herdeninstinkt", "herfahrt", "heringsfilet", "heringssalat", "herkuleskraut", "herkunft", "herkunftsort", "hermaphrodit", "heroenkult", "heroinsucht", "heroldsamt", "heroldskunst", "herostrat", "herrenabfahrt", "herrenbrot", "herrendienst", "herrenfest", "herrenhut", "herrenrecht", "herrenschnitt", "herrenwelt", "herrgott", "herrnhut", "herrschaftsgebiet", "herrschaftsgewalt", "herrschaftsinstrument", "herrschergeschlecht", "herrscherkult", "herrschsucht", "herstellungsart", "herzacht", "herzangst", "herzblatt", "herzblut", "herzensangst", "herzensgut", "herzenslust", "herzenstrost", "herzgeliebt", "herzinfarkt", "herzinnenhaut", "herzklappendefekt", "herzogshut", "herzlichst", "herzpatient", "herzpunkt", "herzspezialist", "überbackt", "ueberbackt", "überbacktet", "ueberbacktet", "überbietet", "ueberbietet", "überbot", "ueberbot", "überbotet", "ueberbotet", "überbindet", "ueberbindet", "überbandet", "ueberbandet", "überbläst", "ueberblaest", "überbliest", "ueberbliest", "überbrät", "ueberbraet", "überbratet", "ueberbratet", "überbriet", "ueberbriet", "überbrietet", "ueberbrietet", "überbringt", "ueberbringt", "überbrachtet", "ueberbrachtet", "überbrücktet", "ueberbruecktet", "überbrühtet", "ueberbrühtet", "überbrülltet", "ueberbruelltet", "überbuchtet", "ueberbuchtet", "überbürdetet", "ueberbuerdetet", "überdecktet", "ueberdecktet", "überdehntet", "ueberdehntet", "überdenkt", "ueberdenkt", "überdachtet", "ueberdachtet", "überdosiertet", "ueberdosiertet", "überdrehtet", "ueberdrehtet", "überdrucktet", "ueberdrucktet", "überdüngtet", "ueberdüngtet", "übereignetet", "uebereignetet", "übereiltet", "uebereiltet", "übererfülltet", "uebererfuelltet", "überißt", "ueberisst", "ueberißt", "überisst", "überesst", "ueberesst", "übereßt", "uebereßt", "überaßt", "ueberaßt", "überesset", "ueberesset", "überäßet", "ueberaesset", "überfährt", "ueberfaehrt", "überfahrt", "ueberfahrt", "überfuhrt", "ueberfuhrt", "überfällt", "ueberfaellt", "überfallet", "ueberfallet", "überfielt", "ueberfielt", "überfielet", "ueberfielet", "überfängt", "ueberfaengt", "überfingt", "ueberfingt", "überfinget", "ueberfinget", "überfärbet", "ueberfaerbet", "überfettetet", "ueberfettetet", "überfirnisset", "ueberfirnisset", "überfirnißtet", "ueberfirnisstet", "überfischet", "ueberfischet", "überfischtet", "ueberfischtet", "überflanktet", "ueberflanktet", "überflanktet", "ueberflanktet", "überfliegt", "ueberfliegt", "überflieget", "ueberflieget", "überflöget", "ueberflöget", "überflösset", "ueberfloesset", "überflosst", "ueberflosst", "überfloßt", "ueberflosst", "überfließt", "ueberfliesst", "überflutetet", "ueberflutetet", "überformet", "ueberformet", "überformtet", "ueberformtet", "überfrachtetet", "ueberfrachtetet", "überfracht", "ueberfracht", "überfraget", "ueberfraget", "überfragtet", "ueberfragtet", "überfremdetet", "ueberfremdetet", "überfrisst", "ueberfrisst", "überfrißt", "ueberfrißt", "überfresst", "ueberfresst", "überfreßt", "ueberfreßt", "überfresset", "ueberfresset", "überfraßt", "ueberfraßt", "ueberfrasst", "überfräßet", "ueberfraesset", "überfriert", "ueberfriert", "überfrieret", "ueberfrieret", "überfrort", "ueberfrort", "überfröret", "ueberfroeret", "überfrört", "ueberfroert", "überführet", "ueberfuehret", "überführtet", "ueberfuehrtet", "überfüllet", "ueberfuellet", "übergibt", "uebergibt", "übergebt", "uebergebt", "übergebet", "uebergebet", "übergabt", "uebergabt", "übergäbet", "uebergaebet", "übergäbt", "uebergaebt", "übergeht", "uebergeht", "übergehet", "uebergehet", "übergingt", "uebergingt", "übergewichtetet", "uebergewichtetet", "übergießet", "uebergiesset", "übergießt", "uebergiesst", "übergösset", "uebergoesset", "übergosst", "uebergosst", "uebergoßt", "übergipset", "uebergipset", "übergipstet", "uebergipstet", "übergipset", "uebergipset", "übergipstet", "uebergipstet", "überglänzet", "ueberglaenzet", "überglänztet", "ueberglaenztet", "überglaset", "ueberglaset", "überglastet", "ueberglastet", "überglühet", "uebergluehet", "überglühtet", "uebergluehtet", "übergoldetet", "uebergoldetet", "übergraset", "uebergraset", "übergrastet", "uebergrastet", "übergrätschet", "uebergraetschet", "übergrätschtet", "uebergraetschtet", "übergreift", "uebergreift", "übergreifet", "uebergreifet", "übergrifft", "uebergrifft", "übergriffet", "uebergriffet", "übergreift", "uebergreift", "übergreifet", "uebergreifet", "übergriffet", "uebergriffet", "übergrifft", "uebergrifft", "übergrünet", "uebergruenet", "übergrüntet", "uebergruentet", "überhat", "ueberhat", "überhabt", "ueberhabt", "überhabet", "ueberhabet", "überhattet", "ueberhattet", "überhättet", "ueberhaettet", "überhält", "ueberhaelt", "überhaltet", "ueberhaltet", "überhielt", "ueberhielt", "überhieltet", "ueberhieltet", "überhändiget", "ueberhaendiget", "überhändigtet", "ueberhaendigtet", "überhängt", "ueberhaengt", "überhänget", "ueberhaenget", "überhingt", "ueberhingt", "überhinget", "ueberhinget", "überhängt", "ueberhaengt", "überhänget", "ueberhaenget", "überhängtet", "ueberhaengtet", "überhänget", "ueberhaenget", "überhängtet", "ueberhaengtet", "überhängt", "ueberhaengt", "überhänget", "ueberhaenget", "überhingt", "ueberhingt", "überhinget", "ueberhinget", "überhastetet", "ueberhastetet", "überhäufet", "ueberhaeufet", "überhäuftet", "ueberhaeuftet", "überhebt", "ueberhebt", "überhebet", "ueberhebet", "überhobt", "ueberhobt", "überhöbet", "ueberhoebet", "überhebt", "ueberhebt", "überhebet", "ueberhebet", "überhobt", "ueberhobt", "überheiztet", "ueberheiztet", "überheizet", "ueberheizet", "überhöhet", "ueberhoehet", "überhöhtet", "ueberhoehtet", "überhitzet", "ueberhitzet", "überhitztet", "ueberhitztet", "überholet", "ueberholet", "überholtet", "ueberholtet", "überhöret", "ueberhoeret", "überhörtet", "ueberhoertet", "überinterpretieret", "ueberinterpretieret", "überinterpretiertet", "ueberinterpretiertet", "überinterpretieret", "ueberinterpretieret", "überinterpretiertet", "ueberinterpretiertet", "überklebet", "ueberklebet", "überklebtet", "ueberklebtet", "überkleidetet", "ueberkleidetet", "überkochet", "ueberkochet", "überkochtet", "ueberkochtet", "überkommet", "ueberkommet", "überkamt", "ueberkamt", "überkämet", "ueberkaemet", "überkämt", "ueberkaemt", "überkompensieret", "ueberkompensieret", "überkompensiertet", "ueberkompensiertet", "überkreuzet", "ueberkreuzet", "überkreuztet", "ueberkreuztet", "überkronet", "ueberkronet", "überkrontet", "ueberkrontet", "überkrustetet", "ueberkrustetet", "überladet", "ueberladet", "überludet", "ueberludet", "überlüdet", "ueberluedet", "überlappet", "ueberlappet", "überlapptet", "ueberlapptet", "überlasset", "ueberlasset", "überlaßt", "ueberlaßt", "ueberlasst", "ueberlasst", "überlässt", "ueberlaesst", "überließt", "ueberließt", "ueberliesst", "überließet", "ueberließet", "ueberliesset", "überlastet", "ueberlastet", "überlastetet", "ueberlastetet", "überläuft", "ueberlaeuft", "überlaufet", "ueberlaufet", "überlieft", "ueberlieft", "überliefet", "ueberliefet", "überlebet", "ueberlebet", "überlebtet", "ueberlebtet", "überleget", "ueberleget", "überlegtet", "ueberlegtet", "überlegt", "ueberlegt", "überleget", "ueberleget", "überlegtet", "ueberlegtet", "überleitet", "ueberleitet", "überleitetet", "ueberleitetet", "überleset", "ueberleset", "überlast", "ueberlast", "überläset", "ueberlaeset", "überliegt", "ueberliegt", "überlieget", "ueberlieget", "überlagt", "ueberlagt", "überläget", "ueberlaeget", "überlägt", "ueberlaegt", "überlistetet", "ueberlistetet", "übermachet", "uebermachet", "übermachtet", "uebermachtet", "übermalet", "uebermalet", "übermaltet", "uebermaltet", "übermalet", "uebermalet", "übermaltet", "uebermaltet", "übermannet", "uebermannet", "übermanntet", "uebermanntet", "übermarchtet", "uebermarchtet", "übermarchet", "uebermarchet", "übermästetet", "uebermaestetet", "übermüdetet", "uebermuedetet", "übernächtiget", "uebernaechtiget", "übernächtigtet", "uebernaechtigtet", "übernimmt", "uebernimmt", "übernehmt", "uebernehmt", "übernehmet", "uebernehmet", "übernahmt", "uebernahmt", "übernähmet", "uebernaehmet", "übernähmt", "uebernaehmt", "übernutzet", "uebernutzet", "übernutztet", "uebernutztet", "überpflanzt", "ueberpflanzt", "überpflanzet", "ueberpflanzet", "überpflanztet", "ueberpflanztet", "überplanet", "ueberplanet", "überplantet", "ueberplantet", "überprüfet", "ueberpruefet", "überprüftet", "ueberprueftet", "überquillt", "ueberquillt", "überquellt", "ueberquellt", "überquellet", "ueberquellet", "überquollt", "ueberquollt", "überquöllet", "ueberquoellet", "ueberquöllt", "ueberquoellt", "überqueret", "ueberqueret", "überquertet", "ueberquertet", "überraget", "ueberraget", "überragtet", "ueberragtet", "überragt", "ueberragt", "überraget", "ueberraget", "überragtet", "ueberragtet", "überraschet", "ueberraschet", "überraschtet", "ueberraschtet", "überreagieret", "ueberreagieret", "überreagiertet", "ueberreagiertet", "überrechnetet", "ueberrechnetet", "überredetet", "ueberredetet", "überreglementieret", "ueberreglementieret", "überreglementiertet", "ueberreglementiertet", "überregulieret", "ueberregulieret", "überreguliertet", "ueberreguliertet", "überreichet", "ueberreichet", "überreichtet", "ueberreichtet", "überreißet", "ueberreisset", "überrisset", "ueberrisset", "überreitet", "ueberreitet", "überrittet", "ueberrittet", "überreizet", "ueberreizet", "überreiztet", "ueberreiztet", "überrennet", "ueberrennet", "überrenntet", "ueberrenntet", "überrollet", "ueberrollet", "überrolltet", "ueberrolltet", "überrundetet", "ueberrundetet", "übersäet", "uebersaeet", "übersätet", "uebersaetet", "übersättiget", "uebersaettiget", "uebersaettigtet", "übersättigtet", "überschattetet", "ueberschattetet", "überschätzet", "ueberschaetzet", "überschätztet", "ueberschaetztet", "überschauet", "ueberschauet", "überschautet", "ueberschautet", "überschäumt", "ueberschaeumt", "überschäumet", "ueberschaeumet", "überschäumtet", "ueberschaeumtet", "überschießt", "ueberschießt", "ueberschiesst", "überschießet", "ueberschiesset", "ueberschießet", "überschosst", "ueberschosst", "überschosst", "ueberschosst", "überschoßt", "ueberschoßt", "überschösset", "ueberschoesset", "überschlafet", "ueberschlafet", "überschliefet", "ueberschliefet", "überschlieft", "ueberschlieft", "überschlaget", "ueberschlaget", "überschlüget", "ueberschlueget", "überschlügt", "ueberschluegt", "überschlägt", "ueberschlaegt", "überschlagt", "ueberschlagt", "überschlaget", "ueberschlaget", "überschlugt", "ueberschlugt", "überschlüget", "ueberschlueget", "überschlügt", "ueberschluegt", "überschlägt", "ueberschlaegt", "überschlagt", "ueberschlagt", "überschlaget", "ueberschlaget", "überschlugt", "ueberschlugt", "überschlüget", "ueberschlueget", "ueberschluegt", "überschlügt", "überschließt", "ueberschließt", "ueberschliesst", "überschließet", "ueberschliesset", "überschlosst", "ueberschlosst", "überschloßt", "ueberschlosst", "überschlösset", "ueberschloesset", "überschmieret", "ueberschmieret", "überschmiertet", "ueberschmiertet", "überschminket", "ueberschminket", "überschminktet", "ueberschminktet", "überschnappt", "ueberschnappt", "überschnappet", "ueberschnappet", "überschnapptet", "ueberschnapptet", "überschneidet", "ueberschneidet", "überschnittet", "ueberschnittet", "überschneiet", "ueberschneiet", "überschneitet", "ueberschneitet", "überschreibet", "ueberschreibet", "überschriebet", "ueberschriebet", "überschriebt", "ueberschriebt", "überschreiet", "ueberschreiet", "überschrieet", "ueberschrieet", "überschriet", "ueberschriet", "überschriet", "ueberschriet", "überschreitet", "ueberschreitet", "überschritt", "ueberschritt", "überschrittet", "ueberschrittet", "überschuldetet", "ueberschuldetet", "überschüttet", "ueberschüttet", "überschüttetet", "ueberschüttetet", "überschüttetet", "ueberschuettetet", "überschwappt", "ueberschwappt", "überschwappet", "ueberschwappet", "überschwapptet", "ueberschwapptet", "überschwemmet", "ueberschwemmet", "überschwemmtet", "ueberschwemmtet", "überschwinget", "ueberschwinget", "überschwangt", "ueberschwangt", "überschwänget", "ueberschwaenget", "überschwängt", "ueberschwaengt", "übersieht", "uebersieht", "überseht", "ueberseht", "übersehet", "uebersehet", "übersaht", "uebersaht", "übersähet", "uebersaehet", "übersäht", "uebersaeht", "übersähet", "uebersaehet", "übersäht", "uebersaeht", "übersandtet", "uebersandtet", "übersendetet", "uebersendetet", "übersensibilisieret", "uebersensibilisieret", "übersensibilisiertet", "uebersensibilisiertet", "übersetzt", "uebersetzt", "übersetzet", "uebersetzet", "übersetztet", "uebersetztet", "übersetzet", "uebersetzet", "übersetztet", "uebersetztet", "übersiedet", "uebersiedet", "übersiedetet", "uebersiedetet", "übersott", "uebersott", "übersottet", "uebersottet", "übersöttet", "uebersoettet", "übersiedet", "uebersiedet", "übersiedetet", "uebersiedetet", "übersott", "uebersott", "übersottet", "uebersottet", "übersöttet", "uebersoettet", "überspannet", "ueberspannet", "überspanntet", "ueberspanntet", "überspielet", "ueberspielet", "überspieltet", "ueberspieltet", "überspinnet", "ueberspinnet", "überspännet", "ueberspaennet", "überspännt", "ueberspaennt", "überspönnet", "ueberspoennet", "überspönnt", "ueberspoennt", "überspitzet", "ueberspitzet", "überspitztet", "ueberspitztet", "übersprechet", "uebersprechet", "überspracht", "ueberspracht", "übersprächet", "ueberspraechet", "übersprächt", "ueberspraecht", "überspringt", "ueberspringt", "überspringet", "ueberspringet", "überspränget", "ueberspraenget", "übersprängt", "ueberspraengt", "überspringt", "ueberspringt", "überspringet", "ueberspringet", "übersprangt", "uebersprangt", "überspränget", "ueberspraenget", "übersprängt", "ueberspraengt", "übersprühet", "ueberspruehet", "übersprühtet", "ueberspruehtet", "übersprühet", "ueberspruehet", "übersprühtet", "ueberspruehtet", "überspület", "ueberspuelet", "überspültet", "überspueltet", "übersticht", "uebersticht", "überstecht", "ueberstecht", "überstechet", "ueberstechet", "überstacht", "ueberstacht", "überstächet", "ueberstaechet", "überstächt", "ueberstaecht", "übersticht", "uebersticht", "überstecht", "ueberstecht", "überstechet", "ueberstechet", "überstacht", "ueberstacht", "überstächet", "ueberstaechet", "überstächt", "ueberstaecht", "überstehet", "ueberstehet", "überstandet", "überstandet", "überständet", "überstaendet", "überstündet", "überstuendet", "übersteht", "uebersteht", "überstehet", "ueberstehet", "überstandet", "ueberstandet", "überständet", "ueberstaendet", "überstündet", "ueberstuendet", "übersteiget", "uebersteiget", "überstieget", "ueberstieget", "überstiegt", "ueberstiegt", "übersteigt", "uebersteigt", "übersteiget", "uebersteiget", "überstiegt", "ueberstiegt", "überstieget", "ueberstieget", "überstellet", "ueberstellet", "überstilisieret", "ueberstilisieret", "überstimmet", "ueberstimmet", "überstimmtet", "ueberstimmtet", "überstrahlet", "ueberstrahlet", "überstrahltet", "ueberstrahltet", "überstrapazieret", "ueberstrapazieret", "überstrapaziertet", "ueberstrapaziertet", "überstreicht", "ueberstreicht", "überstreichet", "ueberstreichet", "überstricht", "ueberstricht", "überstrichet", "ueberstrichet", "überstreichet", "ueberstreichet", "überstrichet", "ueberstrichet", "überstricht", "ueberstricht", "überstreift", "ueberstreift", "überstreifet", "ueberstreifet", "überstreiftet", "ueberstreiftet", "überstreuet", "ueberstreuet", "überstreutet", "ueberstreutet", "überströmet", "ueberstroemet", "überströmtet", "überstroemtet", "überstülpt", "überstuelpt", "ueberstuelpet", "überstülpet", "überstülptet", "ueberstuelptet", "überstürzet", "ueberstuerzet", "überstürztet", "ueberstuerztet", "übertäubet", "uebertaeubet", "übertäubtet", "uebertaeubtet", "übertauchet", "uebertauchet", "übertauchtet", "uebertauchtet", "übertippet", "uebertippet", "übertipptet", "uebertipptet", "übertönet", "uebertoenet", "übertöntet", "uebertoentet", "übertouret", "uebertouret", "übertourtet", "uebertourtet", "überträgt", "uebertraegt", "übertragt", "uebertragt", "übertraget", "uebertraget", "übertrugt", "uebertrugt", "übertrüget", "uebertrueget", "übertrügt", "uebertruegt", "übertrainieret", "uebertrainieret", "übertrainiertet", "uebertrainiertet", "übertreffet", "uebertreffet", "übertraft", "uebertraft", "überträfet", "uebertraefet", "überträft", "uebertraeft", "übertreibt", "uebertreibt", "übertreibet", "uebertreibet", "übertriebet", "uebertriebet", "übertriebt", "uebertriebt", "übertritt", "uebertritt", "übertretet", "uebertretet", "übertrat", "uebertrat", "übertratet", "uebertratet", "überträtet", "uebertraetet", "übertritt", "uebertritt", "übertretet", "uebertretet", "übertrat", "uebertrat", "übertratet", "uebertratet", "überträtet", "uebertraetet", "übertrumpfet", "uebertrumpfet", "übertrumpftet", "uebertrumpftet", "übertünchet", "uebertuenchet", "übertünchtet", "überversorget", "ueberversorget", "überversorgtet", "ueberversorgtet", "übervorteilet", "uebervorteilet", "übervorteiltet", "uebervorteiltet", "überwachet", "ueberwachet", "überwachtet", "ueberwachtet", "überwachset", "ueberwachset", "überwüchset", "ueberwuechset", "überwallt", "ueberwallt", "überwallet", "ueberwallet", "überwalltet", "ueberwalltet", "überwallet", "ueberwallet", "überwalltet", "ueberwalltet", "überwältiget", "ueberwaeltiget", "überwältigtet", "ueberwaeltigtet", "überwalzet", "ueberwalzet", "überwalztet", "ueberwalztet", "überwälzet", "ueberwaelzet", "überwälztet", "ueberwaelztet", "überwechtetet", "ueberwechtetet", "überwächtetet", "ueberwaechtetet", "überwehet", "ueberwehet", "überwehtet", "ueberwehtet", "überweidetet", "ueberweidetet", "überweist", "ueberweist", "überweiset", "ueberweiset", "überwiest", "ueberwiest", "überwieset", "ueberwieset", "überweißet", "ueberweisset", "überweißtet", "ueberweisstet", "überwirft", "ueberwirft", "überwerft", "ueberwerft", "überwerfet", "ueberwerfet", "überwarft", "ueberwarft", "überwürfet", "ueberwuerfet", "überwürft", "ueberwuerft", "überwirft", "ueberwirft", "überwerft", "ueberwerft", "überwerfet", "ueberwerfet", "überwarft", "ueberwarft", "überwürfet", "ueberwuerfet", "überwürft", "ueberwuerft", "überwertetet", "ueberwertetet", "überwiegt", "ueberwiegt", "überwieget", "ueberwieget", "überwogt", "ueberwogt", "überwöget", "ueberwoeget", "überwögt", "ueberwoegt", "überwindet", "ueberwindet", "überwandet", "ueberwandet", "überwändet", "ueberwaendet", "überwölbet", "ueberwoelbet", "überwölbtet", "ueberwoelbtet", "ueberwuerzet", "ueberwuerzet", "überwürztet", "ueberwuerztet", "überzahlet", "ueberzahlet", "überzahltet", "ueberzahltet", "überzahltet", "ueberzahltet", "überzeichnetet", "ueberzeichnetet", "überzeuget", "ueberzeuget", "überzeugtet", "ueberzeugtet", "überzieht", "ueberzieht", "überziehet", "ueberziehet", "überzogt", "ueberzogt", "überzöget", "ueberzoeget", "überzögt", "ueberzoegt", "überzüchtetet", "ueberzuechtetet", "überangebot", "ueberangebot", "überbrückungskredit", "ueberbrückungskredit", "übereinkunft", "uebereinkunft", "überfahrt", "ueberfahrt", "überflugverbot", "ueberflugverbot", "überflutungsgebiet", "ueberflutungsgebiet", "überfracht", "ueberfracht", "überfrucht", "ueberfrucht", "übergangslaut", "uebergangslaut", "übergebot", "uebergebot", "übergewicht", "uebergewicht", "überhangmandat", "ueberhangmandat", "überhangsrecht", "ueberhangsrecht", "überholverbot", "ueberholverbot", "überladenheit", "ueberladenheit", "überlandfahrt", "ueberlandfahrt", "überlast", "ueberlast", "überlegenheit", "ueberlegenheit", "übermacht", "uebermacht", "übermaßverbot", "uebermassverbot", "übermut", "uebermut", "überraschungseffekt", "ueberraschungseffekt", "überraschungsgast", "ueberraschungsgast", "überraschungsmoment", "ueberraschungsmoment", "überredungskunst", "ueberredungskunst", "überreiztheit", "ueberreiztheit", "überrest", "ueberrest", "überschicht", "ueberschicht", "überschnitt", "ueberschnitt", "überschrift", "ueberschrift", "überschwemmungsgebiet", "ueberschwemmungsgebiet", "überseegebiet", "ueberseegebiet", "überseegeschäft", "ueberseegeschaeft", "übersicht", "uebersicht", "überspanntheit", "ueberspanntheit", "überspitztheit", "ueberspitztheit", "übertragungsrecht", "uebertragungsrecht", "übertriebenheit", "uebertriebenheit", "übertritt", "uebertritt", "überwachungsdienst", "ueberwachungsdienst", "überwachungsstaat", "ueberwachungsstaat", "überwelt", "ueberwelt", "überwinterungsgebiet", "ueberwinterungsgebiet", "überzeugtheit", "ueberzeugtheit", "überzeugungstat", "ueberzeugungstat", "überziehungskredit", "ueberziehungskredit"];

  var $e = h.languageProcessing.indices,
      Oe = h.languageProcessing.values,
      _e = $e.getIndicesByWord,
      qe = $e.getIndicesByWordList,
      Ee = Oe.Clause,
      Pe = f.participleLike,
      Me = /\S+(apparat|arbeit|dienst|haft|halt|keit|kraft|not|pflicht|schaft|schrift|tät|wert|zeit)($|[ \n\r\t.,'()"+-;!?:/»«‹›<>])/gi,
      We = function (e) {
    a()(l, e);
    var t,
        r,
        s = (t = l, r = function () {
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
          s = g()(t);

      if (r) {
        var n = g()(this).constructor;
        e = Reflect.construct(s, arguments, n);
      } else e = s.apply(this, arguments);

      return i()(this, e);
    });

    function l(e, t) {
      var r;
      return n()(this, l), (r = s.call(this, e, t))._participles = function (e) {
        var t = ke(e),
            r = [];
        return Object(be.forEach)(t, function (e) {
          (0 !== je(e).length || 0 !== xe(e).length || 0 !== ve(e).length || 0 !== Be(e).length || 0 !== Fe(e).length || pe.includes(e)) && r.push(e);
        }), r;
      }(r.getClauseText()), r.checkParticiples(), r;
    }

    return ae()(l, [{
      key: "checkParticiples",
      value: function value() {
        var e = this,
            t = this.getParticiples().filter(function (t) {
          return !(e.hasNounSuffix(t) || Object(be.includes)(Se, t) || e.hasHabenSeinException(t) || Object(be.includes)(Pe, t));
        });
        this.setPassive(t.length > 0);
      }
    }, {
      key: "hasNounSuffix",
      value: function value(e) {
        return null !== e.match(Me);
      }
    }, {
      key: "hasHabenSeinException",
      value: function value(e) {
        var t = _e(e, this.getClauseText()),
            r = qe(["haben", "sein"], this.getClauseText());

        if (0 === t.length || 0 === r.length) return !1;
        r = Object(be.map)(r, "index");
        var s = t[0];
        return Object(be.includes)(r, s.index + s.match.length + 1);
      }
    }]), l;
  }(Ee),
      Ae = h.languageProcessing.getClausesSplitOnStopWords,
      Re = h.languageProcessing.createRegexFromArray,
      Ie = {
    Clause: We,
    regexes: {
      auxiliaryRegex: Re(f.all),
      stopwordRegex: Re(re)
    }
  };

  function Ce(e) {
    return Ae(e, Ie);
  }

  function Ue(e, t) {
    var r;

    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (e) {
          if ("string" == typeof e) return Te(e, void 0);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Te(e, void 0) : void 0;
        }
      }(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);

        var s = 0,
            n = function n() {};

        return {
          s: n,
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
          f: n
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var l,
        a = !0,
        b = !1;
    return {
      s: function s() {
        r = e[Symbol.iterator]();
      },
      n: function n() {
        var e = r.next();
        return a = e.done, e;
      },
      e: function e(_e3) {
        b = !0, l = _e3;
      },
      f: function f() {
        try {
          a || null == r["return"] || r["return"]();
        } finally {
          if (b) throw l;
        }
      }
    };
  }

  function Te(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var r = 0, s = new Array(t); r < t; r++) {
      s[r] = e[r];
    }

    return s;
  }

  var He = function He(e, t, r, s, n) {
    var l,
        a = Ue(t);

    try {
      for (a.s(); !(l = a.n()).done;) {
        var b = l.value;

        if (new RegExp("^" + b + r).test(e)) {
          var i = e.slice(b.length - e.length);
          return b + i.slice(s, i.length - n);
        }
      }
    } catch (e) {
      a.e(e);
    } finally {
      a.f();
    }

    return null;
  };

  var Ve = function Ve(e) {
    var t = e.search(/(em|ern|er)$/g),
        r = e.search(/(e|en|es)$/g),
        s = e.search(/([bdfghklmnrt]s)$/g);
    -1 !== s && s++;
    var n = "",
        l = 1e4;
    return -1 !== t ? {
      index1: l = t,
      optionUsed1: n = "a"
    } : -1 !== r ? {
      index1: l = r,
      optionUsed1: n = "b"
    } : -1 !== s ? {
      index1: l = s,
      optionUsed1: n = "c"
    } : {
      index1: l,
      optionUsed1: n
    };
  };

  function Ge(e, t) {
    var r;

    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (r = function (e, t) {
        if (e) {
          if ("string" == typeof e) return Le(e, void 0);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Le(e, void 0) : void 0;
        }
      }(e)) || t && e && "number" == typeof e.length) {
        r && (e = r);

        var s = 0,
            n = function n() {};

        return {
          s: n,
          n: function n() {
            return s >= e.length ? {
              done: !0
            } : {
              done: !1,
              value: e[s++]
            };
          },
          e: function e(_e4) {
            throw _e4;
          },
          f: n
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var l,
        a = !0,
        b = !1;
    return {
      s: function s() {
        r = e[Symbol.iterator]();
      },
      n: function n() {
        var e = r.next();
        return a = e.done, e;
      },
      e: function e(_e5) {
        b = !0, l = _e5;
      },
      f: function f() {
        try {
          a || null == r["return"] || r["return"]();
        } finally {
          if (b) throw l;
        }
      }
    };
  }

  function Le(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var r = 0, s = new Array(t); r < t; r++) {
      s[r] = e[r];
    }

    return s;
  }

  var Ne = h.languageProcessing.flattenSortLength;

  function Ze(e, t) {
    var r = t.verbs,
        s = function (e, t) {
      var r = function (e, t) {
        var r = e.veryIrregularVerbs.find(function (e) {
          return e.forms.includes(t);
        });
        return r ? r.stem : null;
      }(e, t);

      if (r) return r;

      var s = function (e) {
        var t = e.search(/[aeiouyäöü][^aeiouyäöü]/);
        return -1 !== t && (t += 2), -1 !== t && t < 3 && (t = 3), t;
      }(t = (t = (t = (t = t.replace(/([aeiouyäöü])u([aeiouyäöü])/g, "$1U$2")).replace(/([aeiouyäöü])y([aeiouyäöü])/g, "$1Y$2")).replace(/([aeiouyäöü])i([aeiouyäöü])/g, "$1I$2")).replace(/([aeiouyäöü])e([aeiouyäöü])/g, "$1E$2")),
          n = function (e) {
        var t = e.search(/(en|er|est)$/g),
            r = e.search(/(.{3}[bdfghklmnt]st)$/g);
        -1 !== r && (r += 4);
        var s = 1e4;
        return -1 !== t ? s = t : -1 !== r && (s = r), s;
      }(t = function (e, t, r, s) {
        return 1e4 !== t && -1 !== s && t >= s && (e = e.substring(0, t), "b" === r && -1 !== e.search(/niss$/) && (e = e.substring(0, e.length - 1))), e;
      }(t, Ve(t).index1, Ve(t).optionUsed1, s));

      return (t = (t = (t = (t = function (e, t, r) {
        return 1e4 !== t && -1 !== r && t >= r && (e = e.substring(0, t)), e;
      }(t, n, s)).replace(/U/g, "u")).replace(/Y/g, "y")).replace(/I/g, "i")).replace(/E/g, "e");
    }(r, e);

    return function (e, t) {
      var r,
          s = Ge(e.exceptionStems);

      try {
        for (s.s(); !(r = s.n()).done;) {
          var n = r.value,
              l = n.find(function (e) {
            return t.endsWith(e);
          });
          if (l) return t.slice(0, t.length - l.length) + n[0];
        }
      } catch (e) {
        s.e(e);
      } finally {
        s.f();
      }

      return null;
    }(t.nouns, s) || function (e, t) {
      for (var r = e.exceptions, s = 0, n = Object.keys(r); s < n.length; s++) {
        var l,
            a = Ge(r[n[s]]);

        try {
          for (a.s(); !(l = a.n()).done;) {
            var b = l.value;
            if (b.includes(t)) return b[0];
          }
        } catch (e) {
          a.e(e);
        } finally {
          a.f();
        }
      }

      return null;
    }(t.adjectives, s) || function (e, t) {
      var r = t,
          s = e.strongAndIrregularVerbs.stems,
          n = Ne(e.prefixes).find(function (e) {
        return t.startsWith(e);
      });

      if (n) {
        var l = r.slice(n.length, r.length);
        l.length > 2 ? r = l : n = null;
      }

      var a,
          b = Ge(s);

      try {
        for (b.s(); !(a = b.n()).done;) {
          var i = a.value,
              u = i.stems;
          if ((u = Object(be.flatten)(Object.values(u))).includes(r)) return n ? n + i.stems.present : i.stems.present;
        }
      } catch (e) {
        b.e(e);
      } finally {
        b.f();
      }

      return null;
    }(r, s) || function (e, t) {
      if (ye().length > 0 || Se.includes(t)) return "";

      var r = function (e, t) {
        var r = new RegExp("^" + e.participleStemmingClasses[1].regex);
        return new RegExp("^" + e.participleStemmingClasses[0].regex).test(t) ? t.slice(2, t.length - 2) : r.test(t) ? t.slice(2, t.length - 1) : null;
      }(e, t);

      return r || (r = function (e, t) {
        var r,
            s = e.prefixes.separableOrInseparable,
            n = Ue(e.participleStemmingClasses);

        try {
          for (n.s(); !(r = n.n()).done;) {
            var l = r.value,
                a = l.regex,
                b = l.startStem,
                i = l.endStem,
                u = l.separable ? e.prefixes.separable : e.prefixes.inseparable,
                g = He(t, u, a, b, i);
            if (g) return g;
            if (g = He(t, s, a, b, i)) return g;
          }
        } catch (e) {
          n.e(e);
        } finally {
          n.f();
        }

        return null;
      }(e, t)) || null;
    }(r, e) || s;
  }

  var Ye = h.languageProcessing.baseStemmer;

  function De(e) {
    var t = Object(be.get)(e.getData("morphology"), "de", !1);
    return t ? function (e) {
      return Ze(e, t);
    } : Ye;
  }

  var Je = h.helpers.formatNumber;

  function Ke(e) {
    var t = 180 - e.averageWordsPerSentence - 58.5 * e.numberOfSyllables / e.numberOfWords;
    return Je(t);
  }

  var Qe = function (e) {
    a()(l, e);
    var t,
        r,
        s = (t = l, r = function () {
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
          s = g()(t);

      if (r) {
        var n = g()(this).constructor;
        e = Reflect.construct(s, arguments, n);
      } else e = s.apply(this, arguments);

      return i()(this, e);
    });

    function l(e) {
      var t;
      return n()(this, l), t = s.call(this, e), Object.assign(t.config, {
        language: "de",
        passiveConstructionType: "periphrastic",
        firstWordExceptions: o,
        functionWords: te,
        stopWords: re,
        transitionWords: y,
        twoPartTransitionWords: se,
        syllables: ne
      }), Object.assign(t.helpers, {
        getClauses: Ce,
        getStemmer: De,
        fleschReadingScore: Ke
      }), t;
    }

    return l;
  }(h.languageProcessing.AbstractResearcher);
}]);