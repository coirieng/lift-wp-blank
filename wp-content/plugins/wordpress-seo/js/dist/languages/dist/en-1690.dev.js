"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var d = {};

  function n(t) {
    if (d[t]) return d[t].exports;
    var i = d[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  return n.m = e, n.c = d, n.d = function (e, d, t) {
    n.o(e, d) || Object.defineProperty(e, d, {
      enumerable: !0,
      get: t
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, d) {
    if (1 & d && (e = n(e)), 8 & d) return e;
    if (4 & d && "object" == _typeof(e) && e && e.__esModule) return e;
    var t = Object.create(null);
    if (n.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & d && "string" != typeof e) for (var i in e) {
      n.d(t, i, function (d) {
        return e[d];
      }.bind(null, i));
    }
    return t;
  }, n.n = function (e) {
    var d = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(d, "a", d), d;
  }, n.o = function (e, d) {
    return Object.prototype.hasOwnProperty.call(e, d);
  }, n.p = "", n(n.s = 30);
}([function (e, d) {
  e.exports = window.yoast.analysis;
}, function (e, d) {
  function n(d) {
    return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(d);
  }

  e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, d) {
  e.exports = window.lodash;
}, function (e, d) {
  e.exports = function (e, d) {
    if (!(e instanceof d)) throw new TypeError("Cannot call a class as a function");
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, d, n) {
  var t = n(8);
  e.exports = function (e, d) {
    if ("function" != typeof d && null !== d) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(d && d.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), d && t(e, d);
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, d, n) {
  var t = n(6)["default"],
      i = n(9);
  e.exports = function (e, d) {
    return !d || "object" !== t(d) && "function" != typeof d ? i(e) : d;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, d) {
  function n(d) {
    return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = n = function n(e) {
      return _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = n = function n(e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0), n(d);
  }

  e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, d) {
  function n(e, d) {
    for (var n = 0; n < d.length; n++) {
      var t = d[n];
      t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
    }
  }

  e.exports = function (e, d, t) {
    return d && n(e.prototype, d), t && n(e, t), e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, d) {
  function n(d, t) {
    return e.exports = n = Object.setPrototypeOf || function (e, d) {
      return e.__proto__ = d, e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(d, t);
  }

  e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
}, function (e, d) {
  e.exports = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
},,,,,,,,,,,,, function (e) {
  e.exports = JSON.parse('{"vowels":"aeiouy","deviations":{"vowels":[{"fragments":["cial","tia","cius","giu","ion","[^bdnprv]iou","sia$","[^aeiuot]{2,}ed$","[aeiouy][^aeiuoyts]{1,}e$","[a-z]ely$","[cgy]ed$","rved$","[aeiouy][dt]es?$","eau","ieu","oeu","[aeiouy][^aeiouydt]e[sd]?$","[aeouy]rse$","^eye"],"countModifier":-1},{"fragments":["ia","iu","ii","io","[aeio][aeiou]{2}","[aeiou]ing","[^aeiou]ying","ui[aeou]"],"countModifier":1},{"fragments":["^ree[jmnpqrsx]","^reele","^reeva","riet","dien","[aeiouym][bdp]le$","uei","uou","^mc","ism$","[^l]lien","^coa[dglx].","[^gqauieo]ua[^auieo]","dn\'t$","uity$","ie(r|st)","[aeiouw]y[aeiou]","[^ao]ire[ds]","[^ao]ire$"],"countModifier":1},{"fragments":["eoa","eoo","ioa","ioe","ioo"],"countModifier":1}],"words":{"full":[{"word":"business","syllables":2},{"word":"coheiress","syllables":3},{"word":"colonel","syllables":2},{"word":"heiress","syllables":2},{"word":"i.e","syllables":2},{"word":"shoreline","syllables":2},{"word":"simile","syllables":3},{"word":"unheired","syllables":2},{"word":"wednesday","syllables":2}],"fragments":{"global":[{"word":"coyote","syllables":3},{"word":"graveyard","syllables":2},{"word":"lawyer","syllables":2}]}}}}');
},,,,,,,, function (e, d, n) {
  "use strict";

  n.r(d), n.d(d, "default", function () {
    return $e;
  });
  var t = n(3),
      i = n.n(t),
      r = n(4),
      a = n.n(r),
      o = n(5),
      u = n.n(o),
      s = n(1),
      l = n.n(s),
      c = n(0),
      h = ["the", "a", "an", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "this", "that", "these", "those"],
      p = ["am", "is", "are", "was", "were", "been", "get", "gets", "got", "gotten", "be", "she's", "he's", "it's", "i'm", "we're", "they're", "you're", "isn't", "weren't", "wasn't", "that's", "aren't"],
      f = ["being", "getting", "having", "what's"],
      m = p.concat(f),
      g = ["accordingly", "additionally", "afterward", "afterwards", "albeit", "also", "although", "altogether", "another", "basically", "because", "before", "besides", "but", "certainly", "chiefly", "comparatively", "concurrently", "consequently", "contrarily", "conversely", "correspondingly", "despite", "doubtedly", "during", "e.g.", "earlier", "emphatically", "equally", "especially", "eventually", "evidently", "explicitly", "finally", "firstly", "following", "formerly", "forthwith", "fourthly", "further", "furthermore", "generally", "hence", "henceforth", "however", "i.e.", "identically", "indeed", "initially", "instead", "last", "lastly", "later", "lest", "likewise", "markedly", "meanwhile", "moreover", "nevertheless", "nonetheless", "nor", "notwithstanding", "obviously", "occasionally", "otherwise", "overall", "particularly", "presently", "previously", "rather", "regardless", "secondly", "shortly", "significantly", "similarly", "simultaneously", "since", "so", "soon", "specifically", "still", "straightaway", "subsequently", "surely", "surprisingly", "than", "then", "thereafter", "therefore", "thereupon", "thirdly", "though", "thus", "till", "undeniably", "undoubtedly", "unless", "unlike", "unquestionably", "until", "when", "whenever", "whereas", "while"],
      b = g.concat(["above all", "after all", "after that", "all in all", "all of a sudden", "all things considered", "analogous to", "although this may be true", "analogous to", "another key point", "as a matter of fact", "as a result", "as an illustration", "as can be seen", "as has been noted", "as I have noted", "as I have said", "as I have shown", "as long as", "as much as", "as opposed to", "as shown above", "as soon as", "as well as", "at any rate", "at first", "at last", "at least", "at length", "at the present time", "at the same time", "at this instant", "at this point", "at this time", "balanced against", "being that", "by all means", "by and large", "by comparison", "by the same token", "by the time", "compared to", "be that as it may", "coupled with", "different from", "due to", "equally important", "even if", "even more", "even so", "even though", "first thing to remember", "for example", "for fear that", "for instance", "for one thing", "for that reason", "for the most part", "for the purpose of", "for the same reason", "for this purpose", "for this reason", "from time to time", "given that", "given these points", "important to realize", "in a word", "in addition", "in another case", "in any case", "in any event", "in brief", "in case", "in conclusion", "in contrast", "in detail", "in due time", "in effect", "in either case", "in essence", "in fact", "in general", "in light of", "in like fashion", "in like manner", "in order that", "in order to", "in other words", "in particular", "in reality", "in short", "in similar fashion", "in spite of", "in sum", "in summary", "in that case", "in the event that", "in the final analysis", "in the first place", "in the fourth place", "in the hope that", "in the light of", "in the long run", "in the meantime", "in the same fashion", "in the same way", "in the second place", "in the third place", "in this case", "in this situation", "in time", "in truth", "in view of", "inasmuch as", "most compelling evidence", "most important", "must be remembered", "not only", "not to mention", "note that", "now that", "of course", "on account of", "on balance", "on condition that", "on one hand", "on the condition that", "on the contrary", "on the negative side", "on the other hand", "on the positive side", "on the whole", "on this occasion", "once", "once in a while", "only if", "owing to", "point often overlooked", "prior to", "provided that", "seeing that", "so as to", "so far", "so long as", "so that", "sooner or later", "such as", "summing up", "take the case of", "that is", "that is to say", "then again", "this time", "to be sure", "to begin with", "to clarify", "to conclude", "to demonstrate", "to emphasize", "to enumerate", "to explain", "to illustrate", "to list", "to point out", "to put it another way", "to put it differently", "to repeat", "to rephrase it", "to say nothing of", "to sum up", "to summarize", "to that end", "to the end that", "to this end", "together with", "under those circumstances", "until now", "up against", "up to the present time", "vis a vis", "what's more", "while it may be true", "while this may be true", "with attention to", "with the result that", "with this in mind", "with this intention", "with this purpose in mind", "without a doubt", "without delay", "without doubt", "without reservation"]),
      w = ["the", "an", "a"],
      v = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "hundred", "hundreds", "thousand", "thousands", "million", "millions", "billion", "billions"],
      y = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth", "thirteenth", "fourteenth", "fifteenth", "sixteenth", "seventeenth", "eighteenth", "nineteenth", "twentieth"],
      z = ["i", "you", "he", "she", "it", "we", "they"],
      k = ["me", "him", "us", "them"],
      x = ["this", "that", "these", "those"],
      j = ["my", "your", "his", "her", "its", "their", "our", "mine", "yours", "hers", "theirs", "ours"],
      q = ["all", "some", "many", "lot", "lots", "ton", "tons", "bit", "no", "every", "enough", "little", "much", "more", "most", "plenty", "several", "few", "fewer", "kind", "kinds"],
      P = ["myself", "yourself", "himself", "herself", "itself", "oneself", "ourselves", "yourselves", "themselves"],
      O = ["none", "nobody", "everyone", "everybody", "someone", "somebody", "anyone", "anybody", "nothing", "everything", "something", "anything", "each", "other", "whatever", "whichever", "whoever", "whomever", "whomsoever", "whosoever", "others", "neither", "both", "either", "any", "such"],
      _ = ["which", "what", "whose"],
      R = ["who", "whom"],
      E = ["where", "how", "why", "whether", "wherever", "whyever", "wheresoever", "whensoever", "howsoever", "whysoever", "whatsoever", "whereso", "whomso", "whenso", "howso", "whyso", "whoso", "whatso"],
      L = ["therefor", "therein", "hereby", "hereto", "wherein", "therewith", "herewith", "wherewith", "thereby"],
      W = ["there", "here", "whither", "thither", "hither", "whence", "thence"],
      M = ["always", "once", "twice", "thrice"],
      F = ["can", "cannot", "can't", "could", "couldn't", "could've", "dare", "dares", "dared", "do", "don't", "does", "doesn't", "did", "didn't", "done", "have", "haven't", "had", "hadn't", "has", "hasn't", "i've", "you've", "we've", "they've", "i'd", "you'd", "he'd", "she'd", "it'd", "we'd", "they'd", "would", "wouldn't", "would've", "may", "might", "must", "need", "needn't", "needs", "ought", "shall", "shalln't", "shan't", "should", "shouldn't", "will", "won't", "i'll", "you'll", "he'll", "she'll", "it'll", "we'll", "they'll", "there's", "there're", "there'll", "here's", "here're", "there'll"],
      S = ["appear", "appears", "appeared", "become", "becomes", "became", "come", "comes", "came", "keep", "keeps", "kept", "remain", "remains", "remained", "stay", "stays", "stayed", "turn", "turns", "turned"],
      $ = ["doing", "daring", "having", "appearing", "becoming", "coming", "keeping", "remaining", "staying", "saying", "asking", "stating", "seeming", "letting", "making", "setting", "showing", "putting", "adding", "going", "using", "trying", "containing"],
      T = ["in", "from", "with", "under", "throughout", "atop", "for", "on", "of", "to", "aboard", "about", "above", "abreast", "absent", "across", "adjacent", "after", "against", "along", "alongside", "amid", "mid", "among", "apropos", "apud", "around", "as", "astride", "at", "ontop", "afore", "tofore", "behind", "ahind", "below", "ablow", "beneath", "neath", "beside", "between", "atween", "beyond", "ayond", "by", "chez", "circa", "spite", "down", "except", "into", "less", "like", "minus", "near", "nearer", "nearest", "anear", "notwithstanding", "off", "onto", "opposite", "out", "outen", "over", "past", "per", "pre", "qua", "sans", "sauf", "sithence", "through", "thru", "truout", "toward", "underneath", "up", "upon", "upside", "versus", "via", "vis-à-vis", "without", "ago", "apart", "aside", "aslant", "away", "withal", "towards", "amidst", "amongst", "midst", "whilst"],
      I = ["back", "within", "forward", "backward", "ahead"],
      C = ["and", "or", "and/or", "yet"],
      B = ["sooner", "just", "only"],
      H = ["if", "even"],
      A = ["say", "says", "said", "claimed", "ask", "asks", "asked", "stated", "explain", "explains", "explained", "think", "thinks", "talks", "talked", "announces", "announced", "tells", "told", "discusses", "discussed", "suggests", "suggested", "understands", "understood"],
      N = ["highly", "very", "really", "extremely", "absolutely", "completely", "totally", "utterly", "quite", "somewhat", "seriously", "fairly", "fully", "amazingly"],
      U = ["seem", "seems", "seemed", "let", "let's", "lets", "make", "makes", "made", "want", "showed", "shown", "go", "goes", "went", "gone", "take", "takes", "took", "taken", "put", "puts", "use", "used", "try", "tries", "tried", "mean", "means", "meant", "called", "based", "add", "adds", "added", "contain", "contains", "contained", "consist", "consists", "consisted", "ensure", "ensures", "ensured"],
      V = ["new", "newer", "newest", "old", "older", "oldest", "previous", "good", "well", "better", "best", "big", "bigger", "biggest", "easy", "easier", "easiest", "fast", "faster", "fastest", "far", "hard", "harder", "hardest", "least", "own", "large", "larger", "largest", "long", "longer", "longest", "low", "lower", "lowest", "high", "higher", "highest", "regular", "simple", "simpler", "simplest", "small", "smaller", "smallest", "tiny", "tinier", "tiniest", "short", "shorter", "shortest", "main", "actual", "nice", "nicer", "nicest", "real", "same", "able", "certain", "usual", "so-called", "mainly", "mostly", "recent", "anymore", "complete", "lately", "possible", "commonly", "constantly", "continually", "directly", "easily", "nearly", "slightly", "somewhere", "estimated", "latest", "different", "similar", "widely", "bad", "worse", "worst", "great", "specific", "available", "average", "awful", "awesome", "basic", "beautiful", "busy", "current", "entire", "everywhere", "important", "major", "multiple", "normal", "necessary", "obvious", "partly", "special", "last", "early", "earlier", "earliest", "young", "younger", "youngest", ""],
      D = ["oh", "wow", "tut-tut", "tsk-tsk", "ugh", "whew", "phew", "yeah", "yea", "shh", "oops", "ouch", "aha", "yikes"],
      J = ["tbs", "tbsp", "spk", "lb", "qt", "pk", "bu", "oz", "pt", "mod", "doz", "hr", "f.g", "ml", "dl", "cl", "l", "mg", "g", "kg", "quart"],
      G = ["thing", "things", "way", "ways", "matter", "case", "likelihood", "ones", "piece", "pieces", "stuff", "times", "part", "parts", "percent", "instance", "instances", "aspect", "aspects", "item", "items", "idea", "theme", "person", "instance", "instances", "detail", "details", "factor", "factors", "difference", "differences"],
      K = ["not", "yes", "sure", "top", "bottom", "ok", "okay", "amen", "aka", "etc", "etcetera", "sorry", "please"],
      Q = ([].concat(y, $, V), [].concat(w, T, C, x, N, q, j), [].concat(g, M, z, k, P, D, v, p, F, S, A, U, O, B, H, _, R, E, W, K, I, L, J, ["seconds", "minute", "minutes", "hour", "hours", "day", "days", "week", "weeks", "month", "months", "year", "years", "today", "tomorrow", "yesterday"], G), [].concat(w, T, x, j, y, $, q)),
      X = [].concat(F, S, A, U),
      Y = [].concat(w, v, y, x, j, P, z, k, q, O, $, ["one's", "nobody's", "everyone's", "everybody's", "someone's", "somebody's", "anyone's", "anybody's", "nothing's", "everything's", "something's", "anything's", "whoever's", "others'", "other's", "another's", "neither's", "either's"], _, R, E, L, W, M, I, p, f, F, S, T, C, B, H, A, g, ["again", "definitely", "eternally", "expressively", "instead", "expressly", "immediately", "including", "instantly", "namely", "naturally", "next", "notably", "now", "nowadays", "ordinarily", "positively", "truly", "ultimately", "uniquely", "usually", "almost", "maybe", "probably", "granted", "initially", "too", "actually", "already", "e.g", "i.e", "often", "regularly", "simply", "optionally", "perhaps", "sometimes", "likely", "never", "ever", "else", "inasmuch", "provided", "currently", "incidentally", "elsewhere", "particular", "recently", "relatively", "f.i", "clearly", "apparently"], N, U, D, V, J, G, K, ["ms", "mss", "mrs", "mr", "dr", "prof"], ["jr", "sr"]),
      Z = ["to", "which", "who", "whom", "that", "whose", "after", "although", "as", "because", "before", "even if", "even though", "if", "in order that", "inasmuch", "lest", "once", "provided", "since", "so that", "than", "though", "till", "unless", "until", "when", "whenever", "where", "whereas", "wherever", "whether", "while", "why", "by the time", "supposing", "no matter", "how", "what", "won't", "do", "does", "–", "and", "but", "or"],
      ee = [["both", "and"], ["if", "then"], ["not only", "but also"], ["neither", "nor"], ["either", "or"], ["not", "but"], ["whether", "or"], ["no sooner", "than"]],
      de = n(22),
      ne = n(7),
      te = n.n(ne),
      ie = n(2),
      re = ["ablebodied", "abovementioned", "absentminded", "accoladed", "accompanied", "acculturized", "accursed", "acerated", "acerbated", "acetylized", "achromatised", "achromatized", "acidified", "acned", "actualised", "adrenalised", "adulated", "adversed", "aestheticised", "affectioned", "affined", "affricated", "aforementioned", "agerelated", "aggrieved", "airbed", "aircooled", "airspeed", "alcoholized", "alcoved", "alkalised", "allianced", "aluminized", "alveolated", "ambered", "ammonified", "amplified", "anagrammatised", "anagrammatized", "anathematised", "aniseed", "ankled", "annualized", "anonymised", "anthologized", "antlered", "anucleated", "anviled", "anvilshaped", "apostrophised", "apostrophized", "appliqued", "apprized", "arbitrated", "armored", "articled", "ashamed", "assented", "atomised", "atrophied", "auricled", "auriculated", "aurified", "autopsied", "axled", "babied", "backhoed", "badmannered", "badtempered", "balustered", "baned", "barcoded", "bareboned", "barefooted", "barelegged", "barnacled", "based", "bayoneted", "beadyeyed", "beaked", "beaned", "beatified", "beautified", "beavered", "bed", "bedamned", "bedecked", "behoved", "belated", "bellbottomed", "bellshaped", "benighted", "bequeathed", "berried", "bespectacled", "bewhiskered", "bighearted", "bigmouthed", "bigoted", "bindweed", "binucleated", "biopsied", "bioturbed", "biped", "bipinnated", "birdfeed", "birdseed", "bisegmented", "bitterhearted", "blabbermouthed", "blackhearted", "bladed", "blankminded", "blearyeyed", "bleed", "blissed", "blobbed", "blondhaired", "bloodied", "bloodred", "bloodshed", "blueblooded", "boatshaped", "bobsled", "bodied", "boldhearted", "boogied", "boosed", "bosomed", "bottlefed", "bottlefeed", "bottlenecked", "bouldered", "bowlegged", "bowlshaped", "brandied", "bravehearted", "breastfed", "breastfeed", "breed", "brighteyed", "brindled", "broadhearted", "broadleaved", "broadminded", "brokenhearted", "broomed", "broomweed", "buccaned", "buckskinned", "bucktoothed", "buddied", "buffaloed", "bugeyed", "bugleweed", "bugweed", "bulletined", "bunked", "busied", "butterfingered", "cabbed", "caddied", "cairned", "calcified", "canalized", "candied", "cannulated", "canoed", "canopied", "canvased", "caped", "capsulated", "cassocked", "castellated", "catabolised", "catheterised", "caudated", "cellmediated", "cellulosed", "certified", "chagrined", "chambered", "chested", "chevroned", "chickenfeed", "chickenhearted", "chickweed", "chilblained", "childbed", "chinned", "chromatographed", "ciliated", "cindered", "cingulated", "circumstanced", "cisgendered", "citrullinated", "clappered", "clarified", "classified", "clawshaped", "claysized", "cleanhearted", "clearminded", "clearsighted", "cliched", "clodded", "cloistered", "closefisted", "closehearted", "closelipped", "closemouthed", "closeted", "cloudseed", "clubfooted", "clubshaped", "clued", "cockeyed", "codified", "coed", "coevolved", "coffined", "coiffed", "coinfected", "coldblooded", "coldhearted", "collateralised", "colonialised", "colorcoded", "colorised", "colourised", "columned", "commoditized", "compactified", "companioned", "complexioned", "conceited", "concerned", "concussed", "coneshaped", "congested", "contented", "convexed", "coralled", "corymbed", "cottonseed", "countrified", "countrybred", "courtmartialled", "coved", "coveralled", "cowshed", "cozied", "cragged", "crayoned", "credentialed", "creed", "crenulated", "crescentshaped", "cressweed", "crewed", "cricked", "crispated", "crossbarred", "crossbed", "crossbred", "crossbreed", "crossclassified", "crosseyed", "crossfertilised", "crossfertilized", "crossindexed", "crosslegged", "crossshaped", "crossstratified", "crossstriated", "crotched", "crucified", "cruelhearted", "crutched", "cubeshaped", "cubified", "cuckolded", "cucumbershaped", "cumbered", "cuminseed", "cupshaped", "curated", "curded", "curfewed", "curlicued", "curlycued", "curried", "curtsied", "cyclized", "cylindershaped", "damed", "dandified", "dangered", "darkhearted", "daybed", "daylighted", "deacidified", "deacylated", "deadhearted", "deadlined", "deaminized", "deathbed", "decalcified", "decertified", "deckbed", "declassified", "declutched", "decolourated", "decreed", "deed", "deeprooted", "deepseated", "defensed", "defied", "deflexed", "deglamorised", "degunkified", "dehumidified", "deified", "deled", "delegitimised", "demoded", "demystified", "denasalized", "denazified", "denied", "denitrified", "denticulated", "deseed", "desexualised", "desposited", "detoxified", "deuced", "devitrified", "dewlapped", "dezincified", "diagonalised", "dialogued", "died", "digitated", "dignified", "dilled", "dimwitted", "diphthonged", "disaffected", "disaggregated", "disarrayed", "discalced", "discolorated", "discolourated", "discshaped", "diseased", "disembodied", "disencumbered", "disfranchised", "diskshaped", "disproportionated", "disproportioned", "disqualified", "distempered", "districted", "diversified", "diverticulated", "divested", "divvied", "dizzied", "dogged", "dogsbodied", "dogsled", "domeshaped", "domiciled", "dormered", "doublebarrelled", "doublestranded", "doublewalled", "downhearted", "duckbilled", "eared", "echeloned", "eddied", "edified", "eggshaped", "elasticated", "electrified", "elegized", "embed", "embodied", "emceed", "empaneled", "empanelled", "emptyhearted", "emulsified", "engined", "ennobled", "envied", "enzymecatalysed", "enzymecatalyzed", "epitomised", "epoxidized", "epoxied", "etherised", "etherized", "evilhearted", "evilminded", "exceed", "excited", "exemplified", "exponentiated", "expurgated", "extravasated", "extraverted", "extroverted", "fabled", "facelifted", "facsimiled", "fainthearted", "falcated", "falsehearted", "falsified", "famed", "fancified", "fanged", "fanshaped", "fantasied", "farsighted", "fated", "fatted", "fazed", "featherbed", "fed", "federalized", "feeblehearted", "feebleminded", "feeblewitted", "feed", "fendered", "fenestrated", "ferried", "fevered", "fibered", "fibred", "ficklehearted", "fiercehearted", "figged", "filigreed", "filterfeed", "fireweed", "firmhearted", "fissured", "flanged", "flanneled", "flannelled", "flatbed", "flatfooted", "flatted", "flawed", "flaxenhaired", "flaxseed", "flaxweed", "flighted", "floodgenerated", "flowerbed", "fluidised", "fluidized", "flurried", "fobbed", "fonded", "forcefeed", "foreshortened", "foresighted", "forkshaped", "formfeed", "fortified", "fortressed", "foulmouthed", "foureyed", "foxtailed", "fractionalised", "fractionalized", "frankhearted", "freed", "freehearted", "freespirited", "frenzied", "friezed", "frontiered", "fructified", "frumped", "fullblooded", "fullbodied", "fullfledged", "fullhearted", "funnelshaped", "furnaced", "gaitered", "galleried", "gangliated", "ganglionated", "gangrened", "gargoyled", "gasified", "gaunted", "gauntleted", "gauzed", "gavelled", "gelatinised", "gemmed", "genderized", "gentled", "gentlehearted", "gerrymandered", "gladhearted", "glamored", "globed", "gloried", "glorified", "glycosylated", "goateed", "gobletshaped", "godspeed", "goodhearted", "goodhumored", "goodhumoured", "goodnatured", "goodtempered", "goosed", "goosenecked", "goutweed", "grainfed", "grammaticalized", "grapeseed", "gratified", "graved", "gravelbed", "grayhaired", "greathearted", "greed", "greenweed", "grommeted", "groundspeed", "groved", "gruffed", "guiled", "gulled", "gumshoed", "gunkholed", "gussied", "guyed", "gyrostabilized", "hackneyed", "hagged", "haired", "halfcivilized", "halfhearted", "halfwitted", "haloed", "handballed", "handfed", "handfeed", "hardcoded", "hardhearted", "hardnosed", "hared", "harelipped", "hasted", "hatred", "haunched", "hawkeyed", "hayseed", "hayweed", "hearsed", "hearted", "heartshaped", "heavenlyminded", "heavyfooted", "heavyhearted", "heed", "heired", "heisted", "helicoptered", "helmed", "helmeted", "hemagglutinated", "hemolyzed", "hempseed", "hempweed", "heparinised", "heparinized", "herbed", "highheeled", "highminded", "highpriced", "highspeed", "highspirited", "hilled", "hipped", "hispanicised", "hocked", "hoed", "hogweed", "holstered", "homaged", "hoodooed", "hoofed", "hooknosed", "hooved", "horned", "horrified", "horseshoed", "horseweed", "hotbed", "hotblooded", "hothearted", "hotted", "hottempered", "hued", "humansized", "humidified", "humped", "hundred", "hutched", "hyperinflated", "hyperpigmented", "hyperstimulated", "hypertrophied", "hyphened", "hypophysectomised", "hypophysectomized", "hypopigmented", "hypostatised", "hysterectomized", "iconified", "iconised", "iconized", "ideologised", "illbred", "illconceived", "illdefined", "illdisposed", "illequipped", "illfated", "illfavored", "illfavoured", "illflavored", "illfurnished", "illhumored", "illhumoured", "illimited", "illmannered", "illnatured", "illomened", "illproportioned", "illqualified", "illscented", "illtempered", "illumed", "illusioned", "imbed", "imbossed", "imbued", "immatured", "impassioned", "impenetrated", "imperfected", "imperialised", "imperturbed", "impowered", "imputed", "inarticulated", "inbred", "inbreed", "incapsulated", "incased", "incrustated", "incrusted", "indebted", "indeed", "indemnified", "indentured", "indigested", "indisposed", "inexperienced", "infrared", "intensified", "intentioned", "interbedded", "interbred", "interbreed", "interluded", "introverted", "inured", "inventoried", "iodinated", "iodised", "irked", "ironfisted", "ironweed", "itchweed", "ivied", "ivyweed", "jagged", "jellified", "jerseyed", "jetlagged", "jetpropelled", "jeweled", "jewelled", "jewelweed", "jiggered", "jimmyweed", "jimsonweed", "jointweed", "joyweed", "jungled", "juried", "justiceweed", "justified", "karstified", "kerchiefed", "kettleshaped", "kibbled", "kidneyshaped", "kimonoed", "kindhearted", "kindred", "kingsized", "kirtled", "knacked", "knapweed", "kneed", "knobbed", "knobweed", "knopweed", "knotweed", "lakebed", "lakeweed", "lamed", "lamellated", "lanceshaped", "lanceted", "landbased", "lapeled", "lapelled", "largehearted", "lariated", "lased", "latticed", "lauded", "lavaged", "lavendered", "lawned", "led", "lefteyed", "legitimatised", "legitimatized", "leisured", "lensshaped", "leveed", "levied", "lichened", "lichenized", "lidded", "lifesized", "lightfingered", "lightfooted", "lighthearted", "lightminded", "lightspeed", "lignified", "likeminded", "lilylivered", "limbed", "linearised", "linearized", "linefeed", "linseed", "lionhearted", "liquefied", "liquified", "lithified", "liveried", "lobbied", "located", "locoweed", "longarmed", "longhaired", "longhorned", "longlegged", "longnecked", "longsighted", "longwinded", "lopsided", "loudmouthed", "louvered", "louvred", "lowbred", "lowpriced", "lowspirited", "lozenged", "lunated", "lyrated", "lysinated", "maced", "macroaggregated", "macrodissected", "maculated", "madweed", "magnified", "maidenweed", "maladapted", "maladjusted", "malnourished", "malrotated", "maned", "mannered", "manuevered", "manyhued", "manyshaped", "manysided", "masted", "mealymouthed", "meanspirited", "membered", "membraned", "metaled", "metalized", "metallised", "metallized", "metamerized", "metathesized", "meted", "methylated", "mettled", "microbrecciated", "microminiaturized", "microstratified", "middleaged", "midsized", "miffed", "mildhearted", "milkweed", "miniskirted", "misactivated", "misaligned", "mischiefed", "misclassified", "misdeed", "misdemeaned", "mismannered", "misnomered", "misproportioned", "miswired", "mitred", "mitted", "mittened", "moneyed", "monocled", "mononucleated", "monospaced", "monotoned", "monounsaturated", "mortified", "moseyed", "motorised", "motorized", "moussed", "moustached", "muddied", "mugweed", "multiarmed", "multibarreled", "multibladed", "multicelled", "multichambered", "multichanneled", "multichannelled", "multicoated", "multidirected", "multiengined", "multifaceted", "multilaminated", "multilaned", "multilayered", "multilobed", "multilobulated", "multinucleated", "multipronged", "multisegmented", "multisided", "multispeed", "multistemmed", "multistoried", "multitalented", "multitoned", "multitowered", "multivalued", "mummied", "mummified", "mustached", "mustachioed", "mutinied", "myelinated", "mystified", "mythicised", "naked", "narcotised", "narrowminded", "natured", "neaped", "nearsighted", "necrosed", "nectared", "need", "needleshaped", "newfangled", "newlywed", "nibbed", "nimblewitted", "nippled", "nixed", "nobled", "noduled", "noised", "nonaccented", "nonactivated", "nonadsorbed", "nonadulterated", "nonaerated", "nonaffiliated", "nonaliased", "nonalienated", "nonaligned", "nonarchived", "nonarmored", "nonassociated", "nonattenuated", "nonblackened", "nonbreastfed", "nonbrecciated", "nonbuffered", "nonbuttered", "noncarbonated", "noncarbonized", "noncatalogued", "noncatalyzed", "noncategorized", "noncertified", "nonchlorinated", "nonciliated", "noncircumcised", "noncivilized", "nonclassified", "noncoated", "noncodified", "noncoerced", "noncommercialized", "noncommissioned", "noncompacted", "noncompiled", "noncomplicated", "noncomposed", "noncomputed", "noncomputerized", "nonconcerted", "nonconditioned", "nonconfirmed", "noncongested", "nonconjugated", "noncooled", "noncorrugated", "noncoupled", "noncreated", "noncrowded", "noncultured", "noncurated", "noncushioned", "nondecoded", "nondecomposed", "nondedicated", "nondeferred", "nondeflated", "nondegenerated", "nondegraded", "nondelegated", "nondelimited", "nondelineated", "nondemarcated", "nondeodorized", "nondeployed", "nonderivatized", "nonderived", "nondetached", "nondetailed", "nondifferentiated", "nondigested", "nondigitized", "nondilapidated", "nondilated", "nondimensionalised", "nondimensionalized", "nondirected", "nondisabled", "nondisciplined", "nondispersed", "nondisputed", "nondisqualified", "nondisrupted", "nondisseminated", "nondissipated", "nondissolved", "nondistressed", "nondistributed", "nondiversified", "nondiverted", "nondocumented", "nondomesticated", "nondoped", "nondrafted", "nondrugged", "nondubbed", "nonducted", "nonearthed", "noneclipsed", "nonedged", "nonedited", "nonelasticized", "nonelectrified", "nonelectroplated", "nonelectroporated", "nonelevated", "noneliminated", "nonelongated", "nonembedded", "nonembodied", "nonemphasized", "nonencapsulated", "nonencoded", "nonencrypted", "nonendangered", "nonengraved", "nonenlarged", "nonenriched", "nonentangled", "nonentrenched", "nonepithelized", "nonequilibrated", "nonestablished", "nonetched", "nonethoxylated", "nonethylated", "nonetiolated", "nonexaggerated", "nonexcavated", "nonexhausted", "nonexperienced", "nonexpired", "nonfabricated", "nonfalsified", "nonfeathered", "nonfeatured", "nonfed", "nonfederated", "nonfeed", "nonfenestrated", "nonfertilized", "nonfilamented", "nonfinanced", "nonfinished", "nonfinned", "nonfissured", "nonflagellated", "nonflagged", "nonflared", "nonflavored", "nonfluidized", "nonfluorinated", "nonfluted", "nonforested", "nonformalized", "nonformatted", "nonfragmented", "nonfragranced", "nonfranchised", "nonfreckled", "nonfueled", "nonfumigated", "nonfunctionalized", "nonfunded", "nongalvanized", "nongated", "nongelatinized", "nongendered", "nongeneralized", "nongenerated", "nongifted", "nonglazed", "nonglucosated", "nonglucosylated", "nonglycerinated", "nongraded", "nongrounded", "nonhalogenated", "nonhandicapped", "nonhospitalised", "nonhospitalized", "nonhydrated", "nonincorporated", "nonindexed", "noninfected", "noninfested", "noninitialized", "noninitiated", "noninoculated", "noninseminated", "noninstitutionalized", "noninsured", "nonintensified", "noninterlaced", "noninterpreted", "nonintroverted", "noninvestigated", "noninvolved", "nonirrigated", "nonisolated", "nonisomerized", "nonissued", "nonitalicized", "nonitemized", "noniterated", "nonjaded", "nonlabelled", "nonlaminated", "nonlateralized", "nonlayered", "nonlegalized", "nonlegislated", "nonlesioned", "nonlexicalized", "nonliberated", "nonlichenized", "nonlighted", "nonlignified", "nonlimited", "nonlinearized", "nonlinked", "nonlobed", "nonlobotomized", "nonlocalized", "nonlysed", "nonmachined", "nonmalnourished", "nonmandated", "nonmarginalized", "nonmassaged", "nonmatriculated", "nonmatted", "nonmatured", "nonmechanized", "nonmedicated", "nonmedullated", "nonmentioned", "nonmetabolized", "nonmetallized", "nonmetastasized", "nonmetered", "nonmethoxylated", "nonmilled", "nonmineralized", "nonmirrored", "nonmodeled", "nonmoderated", "nonmodified", "nonmonetized", "nonmonitored", "nonmortgaged", "nonmotorized", "nonmottled", "nonmounted", "nonmultithreaded", "nonmutilated", "nonmyelinated", "nonnormalized", "nonnucleated", "nonobjectified", "nonobligated", "nonoccupied", "nonoiled", "nonopinionated", "nonoxygenated", "nonpaginated", "nonpaired", "nonparalyzed", "nonparameterized", "nonparasitized", "nonpasteurized", "nonpatterned", "nonphased", "nonphosphatized", "nonphosphorized", "nonpierced", "nonpigmented", "nonpiloted", "nonpipelined", "nonpitted", "nonplussed", "nonpuffed", "nonrandomized", "nonrated", "nonrefined", "nonregistered", "nonregulated", "nonrelated", "nonretarded", "nonsacred", "nonsalaried", "nonsanctioned", "nonsaturated", "nonscented", "nonscheduled", "nonseasoned", "nonsecluded", "nonsegmented", "nonsegregated", "nonselected", "nonsolidified", "nonspecialized", "nonspored", "nonstandardised", "nonstandardized", "nonstratified", "nonstressed", "nonstriated", "nonstriped", "nonstructured", "nonstylised", "nonstylized", "nonsubmerged", "nonsubscripted", "nonsubsidised", "nonsubsidized", "nonsubstituted", "nonsyndicated", "nonsynthesised", "nontabulated", "nontalented", "nonthreaded", "nontinted", "nontolerated", "nontranslated", "nontunnelled", "nonunified", "nonunionised", "nonupholstered", "nonutilised", "nonutilized", "nonvalued", "nonvaried", "nonverbalized", "nonvitrified", "nonvolatilised", "nonvolatilized", "normed", "nosebleed", "notated", "notified", "nuanced", "nullified", "numerated", "oarweed", "objectified", "obliqued", "obtunded", "occupied", "octupled", "odored", "oilseed", "oinked", "oldfashioned", "onesided", "oophorectomized", "opaqued", "openhearted", "openminded", "openmouthed", "opiated", "opinionated", "oracled", "oreweed", "ossified", "outbreed", "outmoded", "outrigged", "outriggered", "outsized", "outskated", "outspeed", "outtopped", "outtrumped", "outvoiced", "outweed", "ovated", "overadorned", "overaged", "overalled", "overassured", "overbred", "overbreed", "overcomplicated", "overdamped", "overdetailed", "overdiversified", "overdyed", "overequipped", "overfatigued", "overfed", "overfeed", "overindebted", "overintensified", "overinventoried", "overmagnified", "overmodified", "overpreoccupied", "overprivileged", "overproportionated", "overqualified", "overseed", "oversexed", "oversimplified", "oversized", "oversophisticated", "overstudied", "oversulfated", "ovicelled", "ovoidshaped", "ozonated", "pacified", "packeted", "palatalized", "paled", "palsied", "paned", "panicled", "parabled", "parallelepiped", "parallelized", "parallelopiped", "parenthesised", "parodied", "parqueted", "passioned", "paunched", "pauperised", "pedigreed", "pedimented", "pedunculated", "pegged", "peglegged", "penanced", "pencilshaped", "permineralized", "personified", "petrified", "photodissociated", "photoduplicated", "photoed", "photoinduced", "photolysed", "photolyzed", "pied", "pigeoned", "pigtailed", "pigweed", "pilastered", "pillared", "pilloried", "pimpled", "pinealectomised", "pinealectomized", "pinfeathered", "pinnacled", "pinstriped", "pixellated", "pixilated", "pixillated", "plainclothed", "plantarflexed", "pled", "plumaged", "pocked", "pokeweed", "polychlorinated", "polyunsaturated", "ponytailed", "pooched", "poorspirited", "popeyed", "poppyseed", "porcelainized", "porched", "poshed", "pottered", "poxed", "preachified", "precertified", "preclassified", "preconized", "preinoculated", "premed", "prenotified", "preoccupied", "preposed", "prequalified", "preshaped", "presignified", "prespecified", "prettified", "pried", "principled", "proceed", "prophesied", "propounded", "prosed", "protonated", "proudhearted", "proxied", "pulpified", "pumpkinseed", "puppied", "purebred", "pured", "pureed", "purified", "pustuled", "putrefied", "pyjamaed", "quadruped", "qualified", "quantified", "quantised", "quantized", "quarried", "queried", "questoned", "quicktempered", "quickwitted", "quiesced", "quietened", "quizzified", "racemed", "radiosensitised", "ragweed", "raindrenched", "ramped", "rapeseed", "rarefied", "rarified", "ratified", "razoredged", "reaccelerated", "reaccompanied", "reachieved", "reacknowledged", "readdicted", "readied", "reamplified", "reannealed", "reassociated", "rebadged", "rebiopsied", "recabled", "recategorised", "receipted", "recentred", "recertified", "rechoreographed", "reclarified", "reclassified", "reconferred", "recrystalized", "rectified", "recursed", "red", "redblooded", "redefied", "redenied", "rednecked", "redshifted", "redweed", "redyed", "reed", "reembodied", "reenlighted", "refeed", "refereed", "reflexed", "refortified", "refronted", "refuged", "reglorified", "reimpregnated", "reinitialized", "rejustified", "related", "reliquefied", "remedied", "remodified", "remonetized", "remythologized", "renotified", "renullified", "renumerated", "reoccupied", "repacified", "repurified", "reputed", "requalified", "rescinded", "reseed", "reshoed", "resolidified", "resorbed", "respecified", "restudied", "retabulated", "reticulated", "retinted", "retreed", "retroacted", "reunified", "reverified", "revested", "revivified", "rewed", "ridgepoled", "riffled", "rightminded", "rigidified", "rinded", "riped", "rited", "ritualised", "riverbed", "rivered", "roached", "roadbed", "robotised", "robotized", "romanized", "rosetted", "rosined", "roughhearted", "rubied", "ruddied", "runcinated", "russeted", "sabled", "sabred", "sabretoothed", "sacheted", "sacred", "saddlebred", "sainted", "salaried", "samoyed", "sanctified", "satellited", "savvied", "sawtoothed", "scandalled", "scarified", "scarped", "sceptred", "scissored", "screed", "screwshaped", "scrupled", "sculked", "scurried", "scuttled", "seabed", "seaweed", "seed", "seedbed", "selfassured", "selforganized", "semicivilized", "semidetached", "semidisassembled", "semidomesticated", "semipetrified", "semipronated", "semirefined", "semivitrified", "sentineled", "sepaled", "sepalled", "sequinned", "sexed", "shagged", "shaggycoated", "shaggyhaired", "shaled", "shammed", "sharpangled", "sharpclawed", "sharpcornered", "sharpeared", "sharpedged", "sharpeyed", "sharpflavored", "sharplimbed", "sharpnosed", "sharpsighted", "sharptailed", "sharptongued", "sharptoothed", "sharpwitted", "sharpworded", "shed", "shellbed", "shieldshaped", "shimmied", "shinned", "shirted", "shirtsleeved", "shoed", "shortbeaked", "shortbilled", "shortbodied", "shorthaired", "shortlegged", "shortlimbed", "shortnecked", "shortnosed", "shortsighted", "shortsleeved", "shortsnouted", "shortstaffed", "shorttailed", "shorttempered", "shorttoed", "shorttongued", "shortwinded", "shortwinged", "shotted", "shred", "shrewsized", "shrined", "shrinkproofed", "sickbed", "sickleshaped", "sickleweed", "signalised", "signified", "silicified", "siliconized", "silkweed", "siltsized", "silvertongued", "simpleminded", "simplified", "singlebarreled", "singlebarrelled", "singlebed", "singlebladed", "singlebreasted", "singlecelled", "singlefooted", "singlelayered", "singleminded", "singleseeded", "singleshelled", "singlestranded", "singlevalued", "sissified", "sistered", "sixgilled", "sixmembered", "sixsided", "sixstoried", "skulled", "slickered", "slipcased", "slowpaced", "slowwitted", "slurried", "smallminded", "smoothened", "smoothtongued", "snaggletoothed", "snouted", "snowballed", "snowcapped", "snowshed", "snowshoed", "snubnosed", "so-called", "sofabed", "softhearted", "sogged", "soled", "solidified", "soliped", "sorbed", "souled", "spearshaped", "specified", "spectacled", "sped", "speeched", "speechified", "speed", "spied", "spiffied", "spindleshaped", "spiritualised", "spirted", "splayfooted", "spoonfed", "spoonfeed", "spoonshaped", "spreadeagled", "squarejawed", "squareshaped", "squareshouldered", "squaretoed", "squeegeed", "staled", "starshaped", "starspangled", "starstudded", "statechartered", "statesponsored", "statued", "steadied", "steampowered", "steed", "steelhearted", "steepled", "sterned", "stiffnecked", "stilettoed", "stimied", "stinkweed", "stirrupshaped", "stockinged", "storeyed", "storied", "stouthearted", "straitlaced", "stratified", "strawberryflavored", "streambed", "stressinduced", "stretchered", "strictured", "strongbodied", "strongboned", "strongflavored", "stronghearted", "stronglimbed", "strongminded", "strongscented", "strongwilled", "stubbled", "studied", "stultified", "stupefied", "styed", "stymied", "subclassified", "subcommissioned", "subminiaturised", "subsaturated", "subulated", "suburbanised", "suburbanized", "suburbed", "succeed", "sueded", "sugarrelated", "sulfurized", "sunbed", "superhardened", "superinfected", "supersimplified", "surefooted", "sweetscented", "swifted", "swordshaped", "syllabified", "syphilized", "tabularized", "talented", "tarpapered", "tautomerized", "teated", "teed", "teenaged", "teetotaled", "tenderhearted", "tentacled", "tenured", "termed", "ternated", "testbed", "testified", "theatricalised", "theatricalized", "themed", "thicketed", "thickskinned", "thickwalled", "thighed", "thimbled", "thimblewitted", "thonged", "thoroughbred", "thralled", "threated", "throated", "throughbred", "thyroidectomised", "thyroidectomized", "tiaraed", "ticktocked", "tidied", "tightassed", "tightfisted", "tightlipped", "timehonoured", "tindered", "tined", "tinselled", "tippytoed", "tiptoed", "titled", "toed", "tomahawked", "tonged", "toolshed", "toothplated", "toplighted", "torchlighted", "toughhearted", "traditionalized", "trajected", "tranced", "transgendered", "transliterated", "translocated", "transmogrified", "treadled", "treed", "treelined", "tressed", "trialled", "triangled", "trifoliated", "trifoliolated", "trilobed", "trucklebed", "truehearted", "trumpetshaped", "trumpetweed", "tuberculated", "tumbleweed", "tunnelshaped", "turbaned", "turreted", "turtlenecked", "tuskshaped", "tweed", "twigged", "typified", "ulcered", "ultracivilised", "ultracivilized", "ultracooled", "ultradignified", "ultradispersed", "ultrafiltered", "ultrared", "ultrasimplified", "ultrasophisticated", "unabandoned", "unabashed", "unabbreviated", "unabetted", "unabolished", "unaborted", "unabraded", "unabridged", "unabsolved", "unabsorbed", "unaccelerated", "unaccented", "unaccentuated", "unacclimatised", "unacclimatized", "unaccompanied", "unaccomplished", "unaccosted", "unaccredited", "unaccrued", "unaccumulated", "unaccustomed", "unacidulated", "unacquainted", "unacquitted", "unactivated", "unactuated", "unadapted", "unaddicted", "unadjourned", "unadjudicated", "unadjusted", "unadmonished", "unadopted", "unadored", "unadorned", "unadsorbed", "unadulterated", "unadvertised", "unaerated", "unaffiliated", "unaggregated", "unagitated", "unaimed", "unaired", "unaliased", "unalienated", "unaligned", "unallocated", "unalloyed", "unalphabetized", "unamassed", "unamortized", "unamplified", "unanaesthetised", "unanaesthetized", "unaneled", "unanesthetised", "unanesthetized", "unangered", "unannealed", "unannexed", "unannihilated", "unannotated", "unanointed", "unanticipated", "unappareled", "unappendaged", "unapportioned", "unapprenticed", "unapproached", "unappropriated", "unarbitrated", "unarched", "unarchived", "unarmored", "unarmoured", "unarticulated", "unascertained", "unashamed", "unaspirated", "unassembled", "unasserted", "unassessed", "unassociated", "unassorted", "unassuaged", "unastonished", "unastounded", "unatoned", "unattained", "unattainted", "unattenuated", "unattributed", "unauctioned", "unaudited", "unauthenticated", "unautographed", "unaverted", "unawaked", "unawakened", "unawarded", "unawed", "unbaffled", "unbaited", "unbalconied", "unbanded", "unbanished", "unbaptised", "unbaptized", "unbarreled", "unbarrelled", "unbattered", "unbeaded", "unbearded", "unbeneficed", "unbesotted", "unbetrayed", "unbetrothed", "unbiased", "unbiassed", "unbigoted", "unbilled", "unblackened", "unblanketed", "unblasphemed", "unblazoned", "unblistered", "unblockaded", "unbloodied", "unbodied", "unbonded", "unbothered", "unbounded", "unbracketed", "unbranded", "unbreaded", "unbrewed", "unbridged", "unbridled", "unbroached", "unbudgeted", "unbuffed", "unbuffered", "unburnished", "unbutchered", "unbuttered", "uncached", "uncaked", "uncalcified", "uncalibrated", "uncamouflaged", "uncamphorated", "uncanceled", "uncancelled", "uncapitalized", "uncarbonated", "uncarpeted", "uncased", "uncashed", "uncastrated", "uncatalogued", "uncatalysed", "uncatalyzed", "uncategorised", "uncatered", "uncaulked", "uncelebrated", "uncensored", "uncensured", "uncertified", "unchambered", "unchanneled", "unchannelled", "unchaperoned", "uncharacterized", "uncharted", "unchartered", "unchastened", "unchastised", "unchelated", "uncherished", "unchilled", "unchristened", "unchronicled", "uncircumcised", "uncircumscribed", "uncited", "uncivilised", "uncivilized", "unclarified", "unclassed", "unclassified", "uncleaved", "unclimbed", "unclustered", "uncluttered", "uncoagulated", "uncoded", "uncodified", "uncoerced", "uncoined", "uncollapsed", "uncollated", "uncolonised", "uncolonized", "uncolumned", "uncombined", "uncommented", "uncommercialised", "uncommercialized", "uncommissioned", "uncommitted", "uncompacted", "uncompartmentalized", "uncompartmented", "uncompensated", "uncompiled", "uncomplicated", "uncompounded", "uncomprehened", "uncomputed", "unconcealed", "unconceded", "unconcluded", "uncondensed", "unconditioned", "unconfined", "unconfirmed", "uncongested", "unconglomerated", "uncongratulated", "unconjugated", "unconquered", "unconsecrated", "unconsoled", "unconsolidated", "unconstipated", "unconstricted", "unconstructed", "unconsumed", "uncontacted", "uncontracted", "uncontradicted", "uncontrived", "unconverted", "unconveyed", "unconvicted", "uncooked", "uncooled", "uncoordinated", "uncopyrighted", "uncored", "uncorrelated", "uncorroborated", "uncosted", "uncounseled", "uncounselled", "uncounterfeited", "uncoveted", "uncrafted", "uncramped", "uncrannied", "uncrazed", "uncreamed", "uncreased", "uncreated", "uncredentialled", "uncredited", "uncrested", "uncrevassed", "uncrippled", "uncriticised", "uncriticized", "uncropped", "uncrosslinked", "uncrowded", "uncrucified", "uncrumbled", "uncrystalized", "uncrystallised", "uncrystallized", "uncubed", "uncuddled", "uncued", "unculled", "uncultivated", "uncultured", "uncupped", "uncurated", "uncurbed", "uncurried", "uncurtained", "uncushioned", "undamped", "undampened", "undappled", "undarkened", "undated", "undaubed", "undazzled", "undeadened", "undeafened", "undebated", "undebunked", "undeceased", "undecimalized", "undeciphered", "undecked", "undeclared", "undecomposed", "undeconstructed", "undedicated", "undefeated", "undeferred", "undefied", "undefined", "undeflected", "undefrauded", "undefrayed", "undegassed", "undejected", "undelegated", "undeleted", "undelimited", "undelineated", "undemented", "undemolished", "undemonstrated", "undenatured", "undenied", "undented", "undeodorized", "undepicted", "undeputized", "underaged", "underarmed", "underassessed", "underbred", "underbudgeted", "undercapitalised", "undercapitalized", "underdiagnosed", "underdocumented", "underequipped", "underexploited", "underexplored", "underfed", "underfeed", "underfurnished", "undergoverned", "undergrazed", "underinflated", "underinsured", "underinvested", "underived", "undermaintained", "undermentioned", "undermotivated", "underperceived", "underpowered", "underprivileged", "underqualified", "underrehearsed", "underresourced", "underripened", "undersaturated", "undersexed", "undersized", "underspecified", "understaffed", "understocked", "understressed", "understudied", "underutilised", "underventilated", "undescaled", "undesignated", "undetached", "undetailed", "undetained", "undeteriorated", "undeterred", "undetonated", "undevised", "undevoted", "undevoured", "undiagnosed", "undialed", "undialysed", "undialyzed", "undiapered", "undiffracted", "undigested", "undignified", "undiluted", "undiminished", "undimmed", "undipped", "undirected", "undisciplined", "undiscouraged", "undiscussed", "undisfigured", "undisguised", "undisinfected", "undismayed", "undisposed", "undisproved", "undisputed", "undisrupted", "undissembled", "undissipated", "undissociated", "undissolved", "undistilled", "undistorted", "undistracted", "undistributed", "undisturbed", "undiversified", "undiverted", "undivulged", "undoctored", "undocumented", "undomesticated", "undosed", "undramatised", "undrilled", "undrugged", "undubbed", "unduplicated", "uneclipsed", "unedged", "unedited", "unejaculated", "unejected", "unelaborated", "unelapsed", "unelected", "unelectrified", "unelevated", "unelongated", "unelucidated", "unemaciated", "unemancipated", "unemasculated", "unembalmed", "unembed", "unembellished", "unembodied", "unemboldened", "unemerged", "unenacted", "unencoded", "unencrypted", "unencumbered", "unendangered", "unendorsed", "unenergized", "unenfranchised", "unengraved", "unenhanced", "unenlarged", "unenlivened", "unenraptured", "unenriched", "unentangled", "unentitled", "unentombed", "unentranced", "unentwined", "unenumerated", "unenveloped", "unenvied", "unequaled", "unequalised", "unequalized", "unequalled", "unequipped", "unerased", "unerected", "uneroded", "unerupted", "unescorted", "unestablished", "unevaluated", "unexaggerated", "unexampled", "unexcavated", "unexceeded", "unexcelled", "unexecuted", "unexerted", "unexhausted", "unexpensed", "unexperienced", "unexpired", "unexploited", "unexplored", "unexposed", "unexpurgated", "unextinguished", "unfabricated", "unfaceted", "unfanned", "unfashioned", "unfathered", "unfathomed", "unfattened", "unfavored", "unfavoured", "unfazed", "unfeathered", "unfed", "unfeigned", "unfermented", "unfertilised", "unfertilized", "unfilleted", "unfiltered", "unfinished", "unflavored", "unflavoured", "unflawed", "unfledged", "unfleshed", "unflurried", "unflushed", "unflustered", "unfluted", "unfocussed", "unforested", "unformatted", "unformulated", "unfortified", "unfractionated", "unfractured", "unfragmented", "unfrequented", "unfretted", "unfrosted", "unfueled", "unfunded", "unfurnished", "ungarbed", "ungarmented", "ungarnished", "ungeared", "ungerminated", "ungifted", "unglazed", "ungoverned", "ungraded", "ungrasped", "ungratified", "ungroomed", "ungrounded", "ungrouped", "ungummed", "ungusseted", "unhabituated", "unhampered", "unhandicapped", "unhardened", "unharvested", "unhasped", "unhatched", "unheralded", "unhindered", "unhomogenised", "unhomogenized", "unhonored", "unhonoured", "unhooded", "unhusked", "unhyphenated", "unified", "unillustrated", "unimpacted", "unimpaired", "unimpassioned", "unimpeached", "unimpelled", "unimplemented", "unimpregnated", "unimprisoned", "unimpugned", "unincorporated", "unincubated", "unincumbered", "unindemnified", "unindexed", "unindicted", "unindorsed", "uninduced", "unindustrialised", "unindustrialized", "uninebriated", "uninfected", "uninflated", "uninflected", "uninhabited", "uninhibited", "uninitialised", "uninitialized", "uninitiated", "uninoculated", "uninseminated", "uninsulated", "uninsured", "uninterpreted", "unintimidated", "unintoxicated", "unintroverted", "uninucleated", "uninverted", "uninvested", "uninvolved", "unissued", "unjaundiced", "unjointed", "unjustified", "unkeyed", "unkindled", "unlabelled", "unlacquered", "unlamented", "unlaminated", "unlarded", "unlaureled", "unlaurelled", "unleaded", "unleavened", "unled", "unlettered", "unlicenced", "unlighted", "unlimbered", "unlimited", "unlined", "unlipped", "unliquidated", "unlithified", "unlittered", "unliveried", "unlobed", "unlocalised", "unlocalized", "unlocated", "unlogged", "unlubricated", "unmagnified", "unmailed", "unmaimed", "unmaintained", "unmalted", "unmangled", "unmanifested", "unmanipulated", "unmannered", "unmanufactured", "unmapped", "unmarred", "unmastered", "unmatriculated", "unmechanised", "unmechanized", "unmediated", "unmedicated", "unmentioned", "unmerged", "unmerited", "unmetabolised", "unmetabolized", "unmetamorphosed", "unmethylated", "unmineralized", "unmitigated", "unmoderated", "unmodernised", "unmodernized", "unmodified", "unmodulated", "unmolded", "unmolested", "unmonitored", "unmortgaged", "unmotivated", "unmotorised", "unmotorized", "unmounted", "unmutated", "unmutilated", "unmyelinated", "unnaturalised", "unnaturalized", "unnotched", "unnourished", "unobligated", "unobstructed", "unoccupied", "unoiled", "unopposed", "unoptimised", "unordained", "unorganised", "unorganized", "unoriented", "unoriginated", "unornamented", "unoxidized", "unoxygenated", "unpacified", "unpackaged", "unpaired", "unparalleled", "unparallelled", "unparasitized", "unpardoned", "unparodied", "unpartitioned", "unpasteurised", "unpasteurized", "unpatented", "unpaved", "unpedigreed", "unpenetrated", "unpenned", "unperfected", "unperjured", "unpersonalised", "unpersuaded", "unperturbed", "unperverted", "unpestered", "unphosphorylated", "unphotographed", "unpigmented", "unpiloted", "unpledged", "unploughed", "unplumbed", "unpoised", "unpolarized", "unpoliced", "unpolled", "unpopulated", "unposed", "unpowered", "unprecedented", "unpredicted", "unprejudiced", "unpremeditated", "unprescribed", "unpressurised", "unpressurized", "unpriced", "unprimed", "unprincipled", "unprivileged", "unprized", "unprocessed", "unprofaned", "unprofessed", "unprohibited", "unprompted", "unpronounced", "unproposed", "unprospected", "unproved", "unpruned", "unpublicised", "unpublicized", "unpublished", "unpuckered", "unpunctuated", "unpurified", "unqualified", "unquantified", "unquenched", "unquoted", "unranked", "unrated", "unratified", "unrebuked", "unreckoned", "unrecompensed", "unreconciled", "unreconstructed", "unrectified", "unredeemed", "unrefined", "unrefreshed", "unrefrigerated", "unregarded", "unregimented", "unregistered", "unregulated", "unrehearsed", "unrelated", "unrelieved", "unrelinquished", "unrenewed", "unrented", "unrepealed", "unreplicated", "unreprimanded", "unrequited", "unrespected", "unrestricted", "unretained", "unretarded", "unrevised", "unrevived", "unrevoked", "unrifled", "unripened", "unrivaled", "unrivalled", "unroasted", "unroofed", "unrounded", "unruffled", "unsalaried", "unsalted", "unsanctified", "unsanctioned", "unsanded", "unsaponified", "unsated", "unsatiated", "unsatisfied", "unsaturated", "unscaled", "unscarred", "unscathed", "unscented", "unscheduled", "unschooled", "unscreened", "unscripted", "unseamed", "unseared", "unseasoned", "unseeded", "unsegmented", "unsegregated", "unselected", "unserviced", "unsexed", "unshamed", "unshaped", "unsharpened", "unsheared", "unshielded", "unshifted", "unshirted", "unshoed", "unshuttered", "unsifted", "unsighted", "unsilenced", "unsimplified", "unsized", "unskewed", "unskinned", "unslaked", "unsliced", "unsloped", "unsmoothed", "unsoiled", "unsoldered", "unsolicited", "unsolved", "unsophisticated", "unsorted", "unsourced", "unsoured", "unspaced", "unspanned", "unspecialised", "unspecialized", "unspecified", "unspiced", "unstaged", "unstandardised", "unstandardized", "unstapled", "unstarched", "unstarred", "unstated", "unsteadied", "unstemmed", "unsterilised", "unsterilized", "unstickered", "unstiffened", "unstifled", "unstigmatised", "unstigmatized", "unstilted", "unstippled", "unstipulated", "unstirred", "unstocked", "unstoked", "unstoppered", "unstratified", "unstressed", "unstriped", "unstructured", "unstudied", "unstumped", "unsubdued", "unsubmitted", "unsubsidised", "unsubsidized", "unsubstantiated", "unsubstituted", "unsugared", "unsummarized", "unsupervised", "unsuprised", "unsurveyed", "unswayed", "unsweetened", "unsyllabled", "unsymmetrized", "unsynchronised", "unsynchronized", "unsyncopated", "unsyndicated", "unsynthesized", "unsystematized", "untagged", "untainted", "untalented", "untanned", "untaped", "untapered", "untargeted", "untarnished", "untattooed", "untelevised", "untempered", "untenanted", "unterminated", "untextured", "unthickened", "unthinned", "unthrashed", "unthreaded", "unthrottled", "unticketed", "untiled", "untilled", "untilted", "untimbered", "untinged", "untinned", "untinted", "untitled", "untoasted", "untoggled", "untoothed", "untopped", "untoughened", "untracked", "untrammeled", "untrammelled", "untranscribed", "untransduced", "untransferred", "untranslated", "untransmitted", "untraumatized", "untraversed", "untufted", "untuned", "untutored", "unupgraded", "unupholstered", "unutilised", "unutilized", "unuttered", "unvaccinated", "unvacuumed", "unvalidated", "unvalued", "unvandalized", "unvaned", "unvanquished", "unvapourised", "unvapourized", "unvaried", "unvariegated", "unvarnished", "unvented", "unventilated", "unverbalised", "unverbalized", "unverified", "unversed", "unvetted", "unvictimized", "unviolated", "unvitrified", "unvocalized", "unvoiced", "unwaged", "unwarped", "unwarranted", "unwaxed", "unweakened", "unweaned", "unwearied", "unweathered", "unwebbed", "unwed", "unwedded", "unweeded", "unweighted", "unwelded", "unwinterized", "unwired", "unwitnessed", "unwonted", "unwooded", "unworshipped", "unwounded", "unzoned", "uprated", "uprighted", "upsized", "upswelled", "vacuolated", "valanced", "valueoriented", "varied", "vascularised", "vascularized", "vasectomised", "vaunted", "vectorised", "vectorized", "vegged", "verdured", "verified", "vermiculated", "vernacularized", "versified", "verticillated", "vesiculated", "vied", "vilified", "virtualised", "vitrified", "vivified", "volumed", "vulcanised", "wabbled", "wafered", "waisted", "walleyed", "wared", "warmblooded", "warmhearted", "warted", "waterbased", "waterbed", "watercooled", "watersaturated", "watershed", "wavegenerated", "waxweed", "weakhearted", "weakkneed", "weakminded", "wearied", "weatherised", "weatherstriped", "webfooted", "wedgeshaped", "weed", "weeviled", "welladapted", "welladjusted", "wellbred", "wellconducted", "welldefined", "welldisposed", "welldocumented", "wellequipped", "wellestablished", "wellfavored", "wellfed", "wellgrounded", "wellintentioned", "wellmannered", "wellminded", "wellorganised", "wellrounded", "wellshaped", "wellstructured", "whinged", "whinnied", "whiplashed", "whiskered", "wholehearted", "whorled", "widebased", "wideeyed", "widemeshed", "widemouthed", "widenecked", "widespaced", "wilded", "wildered", "wildeyed", "willinghearted", "windspeed", "winterfed", "winterfeed", "winterised", "wirehaired", "wised", "witchweed", "woaded", "wombed", "wooded", "woodshed", "wooled", "woolled", "woollyhaired", "woollystemmed", "woolyhaired", "woolyminded", "wormholed", "wormshaped", "wrappered", "wretched", "wronghearted", "ycleped", "yolked", "zincified", "zinckified", "zinkified", "zombified"],
      ae = ["arisen", "awoken", "reawoken", "babysat", "backslid", "backslidden", "beat", "beaten", "become", "begun", "bent", "unbent", "bet", "bid", "outbid", "rebid", "underbid", "overbid", "bidden", "bitten", "blown", "bought", "overbought", "bound", "unbound", "rebound", "broadcast", "rebroadcast", "broken", "brought", "browbeat", "browbeaten", "built", "prebuilt", "rebuilt", "overbuilt", "burnt", "burst", "bust", "cast", "miscast", "recast", "caught", "chosen", "clung", "come", "overcome", "cost", "crept", "cut", "undercut", "recut", "daydreamt", "dealt", "misdealt", "redealt", "disproven", "done", "predone", "outdone", "misdone", "redone", "overdone", "undone", "drawn", "outdrawn", "redrawn", "overdrawn", "dreamt", "driven", "outdriven", "drunk", "outdrunk", "overdrunk", "dug", "dwelt", "eaten", "overeaten", "fallen", "felt", "fit", "refit", "retrofit", "flown", "outflown", "flung", "forbidden", "forecast", "foregone", "foreseen", "foretold", "forgiven", "forgotten", "forsaken", "fought", "outfought", "found", "frostbitten", "frozen", "unfrozen", "given", "gone", "undergone", "gotten", "ground", "reground", "grown", "outgrown", "regrown", "had", "handwritten", "heard", "reheard", "misheard", "overheard", "held", "hewn", "hidden", "unhidden", "hit", "hung", "rehung", "overhung", "unhung", "hurt", "inlaid", "input", "interwound", "interwoven", "jerry-built", "kept", "knelt", "knit", "reknit", "unknit", "known", "laid", "mislaid", "relaid", "overlaid", "lain", "underlain", "leant", "leapt", "outleapt", "learnt", "unlearnt", "relearnt", "mislearnt", "left", "lent", "let", "lip-read", "lit", "relit", "lost", "made", "premade", "remade", "meant", "met", "mown", "offset", "paid", "prepaid", "repaid", "overpaid", "partaken", "proofread", "proven", "put", "quick-frozen", "quit", "read", "misread", "reread", "retread", "rewaken", "rid", "ridden", "outridden", "overridden", "risen", "roughcast", "run", "outrun", "rerun", "overrun", "rung", "said", "sand-cast", "sat", "outsat", "sawn", "seen", "overseen", "sent", "resent", "set", "preset", "reset", "misset", "sewn", "resewn", "oversewn", "unsewn", "shaken", "shat", "shaven", "shit", "shone", "outshone", "shorn", "shot", "outshot", "overshot", "shown", "shrunk", "preshrunk", "shut", "sight-read", "slain", "slept", "outslept", "overslept", "slid", "slit", "slung", "unslung", "slunk", "smelt", "outsmelt", "snuck", "sold", "undersold", "presold", "outsold", "resold", "oversold", "sought", "sown", "spat", "spelt", "misspelt", "spent", "underspent", "outspent", "misspent", "overspent", "spilt", "overspilt", "spit", "split", "spoilt", "spoken", "outspoken", "misspoken", "overspoken", "spread", "sprung", "spun", "unspun", "stolen", "stood", "understood", "misunderstood", "strewn", "stricken", "stridden", "striven", "struck", "strung", "unstrung", "stuck", "unstuck", "stung", "stunk", "sublet", "sunburnt", "sung", "outsung", "sunk", "sweat", "swept", "swollen", "sworn", "outsworn", "swum", "outswum", "swung", "taken", "undertaken", "mistaken", "retaken", "overtaken", "taught", "mistaught", "retaught", "telecast", "test-driven", "test-flown", "thought", "outthought", "rethought", "overthought", "thrown", "outthrown", "overthrown", "thrust", "told", "retold", "torn", "retorn", "trod", "trodden", "typecast", "typeset", "upheld", "upset", "waylaid", "wept", "wet", "rewet", "withdrawn", "withheld", "withstood", "woken", "won", "rewon", "worn", "reworn", "wound", "rewound", "overwound", "unwound", "woven", "rewoven", "unwoven", "written", "typewritten", "underwritten", "outwritten", "miswritten", "rewritten", "overwritten", "wrung"],
      oe = c.languageProcessing.matchRegularParticiples,
      ue = c.languageProcessing.getWords;

  var se = c.languageProcessing.precedenceException,
      le = c.languageProcessing.directPrecedenceException,
      ce = function (e) {
    a()(r, e);
    var d,
        n,
        t = (d = r, n = function () {
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
          t = l()(d);

      if (n) {
        var i = l()(this).constructor;
        e = Reflect.construct(t, arguments, i);
      } else e = t.apply(this, arguments);

      return u()(this, e);
    });

    function r(e, d) {
      var n;
      return i()(this, r), (n = t.call(this, e, d))._participles = function (e) {
        var d = ue(e),
            n = [];
        return Object(ie.forEach)(d, function (e) {
          (0 !== oe(e, [/\w+ed($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi]).length || Object(ie.includes)(ae, e)) && n.push(e);
        }), n;
      }(n.getClauseText()), n.checkParticiples(), n;
    }

    return te()(r, [{
      key: "checkParticiples",
      value: function value() {
        var e = this,
            d = this.getClauseText(),
            n = this.getParticiples().filter(function (n) {
          return !(Object(ie.includes)(re, n) || e.hasRidException(n) || le(d, n, Q) || se(d, n, X));
        });
        this.setPassive(n.length > 0);
      }
    }, {
      key: "hasRidException",
      value: function value(e) {
        return "rid" === e && !Object(ie.isEmpty)(Object(ie.intersection)(["get", "gets", "getting", "got", "gotten"], this.getAuxiliaries()));
      }
    }]), r;
  }(c.languageProcessing.values.Clause),
      he = function he(e) {
    return (e = (e = e.replace(/\s{2,}/g, " ")).replace(/\s\./g, ".")).replace(/^\s+|\s+$/g, "");
  },
      pe = [" ", "\\n", "\\r", "\\t", " ", "۔", "؟", "،", "؛", " ", ".", ",", "'", "(", ")", '"', "+", "-", ";", "!", "?", ":", "/", "»", "«", "‹", "›", "<", ">", "”", "“", "〝", "〞", "〟", "‟", "„"],
      fe = function fe(e) {
    return Object(ie.includes)(pe, e);
  };

  var me = c.languageProcessing.createRegexFromArray,
      ge = c.languageProcessing.getClauses,
      be = function be(e, d) {
    var n = [];
    return Object(ie.forEach)(e, function (e) {
      (function (e, d) {
        e = e.toLocaleLowerCase(), d = d.toLocaleLowerCase();

        var n = function (e) {
          var d,
              n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
          return "(^|" + (d = "id_ID" === i ? "[ \\u00a0 \\n\\r\\t.,()\u201D\u201C\u301D\u301E\u301F\u201F\u201E\"+;!\xA1?\xBF:/\xBB\xAB\u2039\u203A" + t + "<>" : "[ \\u00a0\\u06d4\\u061f\\u060C\\u061B \\n\\r\\t.,()\u201D\u201C\u301D\u301E\u301F\u201F\u201E\"+\\-;!\xA1?\xBF:/\xBB\xAB\u2039\u203A" + t + "<>") + "'‘’‛`])" + e + (n ? "($|((?=" + d + "]))|((['‘’‛`])(" + d + "])))" : "($|(" + d + "])|((['‘’‛`])(" + d + "])))");
        }(Object(ie.escapeRegExp)(e)),
            t = d.search(new RegExp(n, "ig"));

        if (-1 === t) return !1;
        t > 0 && (t += 1);
        var i = t + e.length,
            r = fe(d[t - 1]) || 0 === t,
            a = fe(d[i]) || i === d.length;
        return r && a;
      })(e = he(e), d) && (n = n.concat(function (e, d) {
        for (var n, t = 0, i = e.length, r = []; (n = d.indexOf(e, t)) > -1;) {
          var a = fe(d[n - 1]) || 0 === n,
              o = fe(d[n + i]) || d.length === n + i;
          a && o && r.push({
            index: n,
            match: e
          }), t = n + i;
        }

        return r;
      }(e, d)));
    }), n;
  },
      we = {
    Clause: ce,
    stopwords: Z,
    auxiliaries: m,
    ingExclusions: ["king", "cling", "ring", "being", "thing", "something", "anything"],
    regexes: {
      auxiliaryRegex: me(m),
      stopCharacterRegex: /([:,]|('ll)|('ve))(?=[ \n\r\t'"+\-»«‹›<>])/gi,
      verbEndingInIngRegex: /\w+ing(?=$|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/gi
    },
    otherStopWordIndices: []
  };

  function ve(e) {
    return we.otherStopWordIndices = function (e) {
      var d = e.match(we.regexes.verbEndingInIngRegex) || [];
      return d = d.filter(function (e) {
        return !Object(ie.includes)(we.ingExclusions, he(e));
      }), be(d, e);
    }(e), ge(e, we);
  }

  var ye = c.languageProcessing.buildFormRule,
      ze = c.languageProcessing.createRulesFromArrays,
      ke = function ke(e, d, n) {
    return function (t) {
      var i = t.length;
      return !(i < d || t.substring(i - e.length, i) !== e || n.includes(t));
    };
  },
      xe = c.languageProcessing.buildFormRule,
      je = c.languageProcessing.createRulesFromArrays,
      qe = /([aeiouy])/g,
      Pe = function Pe(e) {
    return (e.match(qe) || []).length > 1 && e.length > 4 && "ing" === e.substring(e.length - 3, e.length);
  },
      Oe = c.languageProcessing.buildFormRule,
      _e = c.languageProcessing.createRulesFromArrays;

  function Re(e, d) {
    for (var n = 0; n < d.length; n++) {
      for (var t = d[n], i = 0; i < t.length; i++) {
        if (t[i] === e) return t[0];
      }
    }

    return null;
  }

  function Ee(e, d) {
    var n = d.verbs.regexVerb,
        t = Oe(e, _e(d.nouns.regexNoun.singularize));
    if (!Object(ie.isUndefined)(t)) return Pe(t) ? Oe(t, _e(n.ingFormToInfinitive)) : t;
    var i = d.adjectives.regexAdjective,
        r = Oe(e, _e(i.icallyToBase));
    if (!Object(ie.isUndefined)(r)) return r;

    var a = [],
        o = function (e, d) {
      var n = je(d.sFormToInfinitive),
          t = je(d.ingFormToInfinitive),
          i = je(d.edFormToInfinitive);
      return function (e) {
        return e.length > 3 && "s" === e[e.length - 1];
      }(e) ? {
        infinitive: xe(e, n),
        guessedForm: "s"
      } : Pe(e) ? {
        infinitive: xe(e, t),
        guessedForm: "ing"
      } : function (e) {
        var d = (e.match(qe) || []).length;
        return (d > 1 || 1 === d && "e" !== e.substring(e.length - 3, e.length - 2)) && "ed" === e.substring(e.length - 2, e.length);
      }(e) ? {
        infinitive: xe(e, i) || e,
        guessedForm: "ed"
      } : {
        infinitive: e,
        guessedForm: "inf"
      };
    }(e, n).infinitive;

    a.push(o);

    var u,
        s,
        l,
        c = function (e, d, n) {
      if (ke("er", 4, n.erExceptions)(e)) {
        var t = ze(d.comparativeToBase);
        return {
          base: ye(e, t) || e,
          guessedForm: "er"
        };
      }

      if (ke("est", 5, n.estExceptions)(e)) {
        var i = ze(d.superlativeToBase);
        return {
          base: ye(e, i) || e,
          guessedForm: "est"
        };
      }

      if (ke("ly", 5, n.lyExceptions)(e)) {
        var r = ze(d.adverbToBase);
        return {
          base: ye(e, r),
          guessedForm: "ly"
        };
      }

      return {
        base: e,
        guessedForm: "base"
      };
    }(e, i, d.adjectives.stopAdjectives).base;

    return a.push(c), u = a, s = Object(ie.flatten)(u), l = s.pop(), s.forEach(function (e) {
      var d = e.length - l.length;
      0 === d ? e.localeCompare(l) < 0 && (l = e) : d < 0 && (l = e);
    }), l;
  }

  var Le = function Le(e, d) {
    var n,
        t,
        i = d.nouns,
        r = Oe(e, _e(i.regexNoun.possessiveToBase));
    return Object(ie.isUndefined)(r) ? (n = e, t = Re(e, i.irregularNouns) || Re(e, d.adjectives.irregularAdjectives) || function (e, d) {
      var n = function (e, d, n) {
        var t;

        if (d.forEach(function (d) {
          d.forEach(function (n) {
            n === e && (t = d);
          });
        }), Object(ie.isUndefined)(t)) {
          var i = function (e, d) {
            for (var n in d) {
              d.hasOwnProperty && (d[n] = new RegExp(d[n], "i"));
            }

            return !0 === d.sevenLetterHyphenPrefixes.test(e) ? {
              normalizedWord: e.replace(d.sevenLetterHyphenPrefixes, ""),
              prefix: e.substring(0, 8)
            } : !0 === d.sevenLetterPrefixes.test(e) ? {
              normalizedWord: e.replace(d.sevenLetterPrefixes, ""),
              prefix: e.substring(0, 7)
            } : !0 === d.fiveLetterHyphenPrefixes.test(e) ? {
              normalizedWord: e.replace(d.fiveLetterHyphenPrefixes, ""),
              prefix: e.substring(0, 6)
            } : !0 === d.fiveLetterPrefixes.test(e) ? {
              normalizedWord: e.replace(d.fiveLetterPrefixes, ""),
              prefix: e.substring(0, 5)
            } : !0 === d.fourLetterHyphenPrefixes.test(e) ? {
              normalizedWord: e.replace(d.fourLetterHyphenPrefixes, ""),
              prefix: e.substring(0, 5)
            } : !0 === d.fourLetterPrefixes.test(e) ? {
              normalizedWord: e.replace(d.fourLetterPrefixes, ""),
              prefix: e.substring(0, 4)
            } : !0 === d.threeLetterHyphenPrefixes.test(e) ? {
              normalizedWord: e.replace(d.threeLetterHyphenPrefixes, ""),
              prefix: e.substring(0, 4)
            } : !0 === d.threeLetterPrefixes.test(e) ? {
              normalizedWord: e.replace(d.threeLetterPrefixes, ""),
              prefix: e.substring(0, 3)
            } : !0 === d.twoLetterHyphenPrefixes.test(e) ? {
              normalizedWord: e.replace(d.twoLetterHyphenPrefixes, ""),
              prefix: e.substring(0, 3)
            } : !0 === d.twoLetterPrefixes.test(e) ? {
              normalizedWord: e.replace(d.twoLetterPrefixes, ""),
              prefix: e.substring(0, 2)
            } : !0 === d.oneLetterPrefixes.test(e) ? {
              normalizedWord: e.replace(d.oneLetterPrefixes, ""),
              prefix: e.substring(0, 1)
            } : void 0;
          }(e, n);

          Object(ie.isUndefined)(i) || d.forEach(function (e) {
            e.forEach(function (d) {
              d === i.normalizedWord && (t = e.map(function (e) {
                return i.prefix.concat(e);
              }));
            });
          });
        }

        return t;
      }(e, d.irregularVerbs, d.regexVerb.verbPrefixes);

      return Object(ie.isUndefined)(n) ? null : n[0];
    }(e, d.verbs)) : (n = r, t = Re(r, i.irregularNouns)), t || Ee(n, d);
  },
      We = c.languageProcessing.baseStemmer;

  function Me(e) {
    var d = Object(ie.get)(e.getData("morphology"), "en", !1);
    return d ? function (e) {
      return Le(e, d);
    } : We;
  }

  var Fe = c.helpers.formatNumber;

  function Se(e) {
    var d = 206.835 - 1.015 * e.averageWordsPerSentence - e.numberOfSyllables / e.numberOfWords * 84.6;
    return Fe(d);
  }

  var $e = function (e) {
    a()(r, e);
    var d,
        n,
        t = (d = r, n = function () {
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
          t = l()(d);

      if (n) {
        var i = l()(this).constructor;
        e = Reflect.construct(t, arguments, i);
      } else e = t.apply(this, arguments);

      return u()(this, e);
    });

    function r(e) {
      var d;
      return i()(this, r), d = t.call(this, e), Object.assign(d.config, {
        language: "en",
        passiveConstructionType: "periphrastic",
        firstWordExceptions: h,
        functionWords: Y,
        stopWords: Z,
        transitionWords: b,
        twoPartTransitionWords: ee,
        syllables: de
      }), Object.assign(d.helpers, {
        getClauses: ve,
        getStemmer: Me,
        fleschReadingScore: Se
      }), d;
    }

    return r;
  }(c.languageProcessing.AbstractResearcher);
}]);