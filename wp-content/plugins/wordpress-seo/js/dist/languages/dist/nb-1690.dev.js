"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var t = {};

  function r(d) {
    if (t[d]) return t[d].exports;
    var s = t[d] = {
      i: d,
      l: !1,
      exports: {}
    };
    return e[d].call(s.exports, s, s.exports, r), s.l = !0, s.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, d) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: d
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
    var d = Object.create(null);
    if (r.r(d), Object.defineProperty(d, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      r.d(d, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return d;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 41);
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
  2: function _(e, t) {
    e.exports = window.lodash;
  },
  3: function _(e, t) {
    e.exports = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  4: function _(e, t, r) {
    var d = r(8);
    e.exports = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), t && d(e, t);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  41: function _(e, t, r) {
    "use strict";

    r.r(t), r.d(t, "default", function () {
      return q;
    });

    var d = r(3),
        s = r.n(d),
        n = r(4),
        l = r.n(n),
        i = r(5),
        o = r.n(i),
        a = r(1),
        k = r.n(a),
        g = r(0),
        f = ["ei", "et", "en", "ett", "to", "tre", "fire", "fem", "seks", "sju", "syv", "åtte", "ni", "ti", "denne", "dette", "disse", "den", "det", "de"],
        p = ["også", "fortsatt", "derimot", "derfor", "faktisk", "endelig", "likevel", "følgelig", "likeså", "dessuten", "selvsagt", "deretter", "men", "for", "fordi", "mens", "bare", "da", "dog", "enn", "ettersom", "før", "hvorpå", "inntil", "når", "omennskjønt", "samt", "som", "uaktet", "pga.", "uansett", "foruten", "siden", "m.a.o", "attpåtil", "derved", "følgelig", "forøvrig", "iallfall", "imidlertid", "især", "likefullt", "likeledes", "likeså", "likevel", "omsider", "samstundes", "samtidig", "sikkert", "således", "såleis", "særs", "ellers", "enda", "dersom", "skjønt", "samme", "eansett", "etterpå", "generelt", "herav", "imens"],
        v = p.concat(["på den andre siden", "for øyeblikket", "i stedet", "i mellomtiden", "til slutt", "i tillegg", "i tilfelle", "med mindre", "om enn", "om to strakser", "selv om", "på grunn av", "med hensyn til", "for eksempel", "en gang", "fremfor alt", "i alle fall", "i et nøtteskall", "i hvert fall", "i mellomtiden", "med andre ord", "til dømes", "for øvrig", "i ettertid", "så langt", "på tross av", "til tross for", "til tross for at ", "for at", "slik at", "i løpet av", "så at", "slik som", "så lenge", "så ofte", "så snart", "etter hvert som", "så fremt", "så sant", "i fall", "for så vidt som", "fordi om", "enda om", "trass i at", "hvor så", "hva enn", "hvor enn", "sånn at", "som om", "så som", "rett og slett ", "på samme måte", "etter hvert", "av dette følger", "i mellomtiden", "i dette tilfellet", "i motsetning til", "som et resultat", "like viktig", "på grunn av det", "på den positive siden", "på den negative siden", "tvert imot", "kort oppsummert", "i begge tilfeller"]),
        m = ["tror", "fortelle", "fortell", "fortalte", "tenkte", "tenk"],
        u = ["ha", "har", "hadde", "gjør", "gjøre", "gjorde", "kaller", "kalte", "kalle", "kalla", "virker", "virka", "virke", "virka", "går", "gikk", "gå", "leges", "lages", "legges", "lages", "består", "bestod", "bestå", "bestått", "bety", "betyr"],
        b = [].concat(u, m),
        y = [].concat(["ei", "et"], ["null", "en", "ett", "ene", "to", "tre", "fire", "fem", "seks", "syv", "åtte", "ni", "ti", "elleve", "tolv", "tretten", "fjorten", "femten", "seksten", "sytten", "atten", "nitten", "tjue", "tyve", "tjueen", "enogtyve", "tretti", "tredve", "førti", "førr", "femti", "seksti", "sytti", "åtti", "nitti", "hundre", "hundreogen", "etthundreogen", "tohundre", "tusen", "tusenogen", "million", "millioner", "milliard", "milliarder"], ["nullte", "første", "først", "sekund", "tredje", "fjerde", "femte", "sjette", "syvende", "åttende", "niende", "tiende", "ellevte", "tolvte", "trettende", "fjortende", "femtende", "sekstende", "syttende", "åttende", "nittende", "tjuende", "tjueførst", "tjueførste", "trettiende", "førtiende", "femtiende", "sekstiende", "syttiende", "åttiende", "nittiende", "hundrede", "hundreogfemtiende", "to hundrede", "tusende", "millionte", "millardte"], ["jeg", "du", "den", "det", "vi", "de", "han", "hun", "dere", "henne", "oss", "meg", "deg", "ham", "dem", "min", "din", "deres", "vår", "deres", "ditt", "mitt", "våre", "vårt", "hans", "hennes", "dens", "dets", "egen", "egne", "mi", "di", "sin", "si", "sitt", "sine", "mine", "dine", "denne", "dette", "disse", "slik", "slikt", "slike", "sånn", "sånt", "sånne", "samme", "hverandre", "hvert", "som"], ["hvem", "hvordan", "hvorfor", "hvor", "hva", "hvilken", "hvilket", "hvilke"], ["mange", "mye", "mang en", "mangt et", "hele", "mer", "ingen", "ingenting", "ikke noen", "ikke noe", "alle", "all", "alt", "allting", "noen", "noe", "flere", "hver", "hvert", "annenhver", "ammethvert", "begge", "sov", "mest", "fleste", "få", "fæst", "færrest", "flere", "flest"], ["seg", "selv"], ["ingenting", "annen", "annet", "andre"], ["sånn", "ved", "mot", "ned", "enn", "over", "inn", "i", "sa", "opp", "der", "fra", "din", "nei", "mellom", "di", "oppe", "av", "med", "til", "å", "på", "du", "uten", "én", "under", "hos", "inne", "gjennom", "unna", "del", "nede", "til", "over", "under", "etter", "kun", "blant", "for", "mellom", "blant"], ["eller", "hvis", "ja", "et", "som", "i", "og", "både", "men", "mens", "enten", "verken", "at", "om", "da", "når", "før", "idet", "etter at", "siden", "innen", "med det samme", "til", "inntil", "hver gang", "etter hvert som", "så lenge", "så lenge som", "så ofte", "så ofte som", "så snart", "så snart som", "etter", "etterpå", "foran", "tidligere", "fordi", "ettersom", "derfor", "dersom", "hvis", "så fremt", "så sant", "i fall", "i tilfelle", "med mindre", "uten at", "bare", "for så vidt som", "uten at", "uten å", "enda", "fordi om", "enda om", "skjønt", "om enn", "hva så", "trass i at", "hvor så", "samme", "selv om", "hva enn", "til tross for at", "hvor enn", "uansett", "for at", "så", "så at", "slik at", "sånn at", "for at, så", "slik som", "så som", "som om", "enn", "dess", "jo", "desto"], m, ["virkelig", "akkurat", "visst"], u, ["helt", "andre", "litt", "lenge", "siste", "fint", "annet", "stor", "stort", "store", "neste", "lenger", "annen", "nye", "alene", "flott", "gammel", "gammelt", "gamle", "klart", "liten", "langt", "gamle", "dårlig", "hyggelig", "gode", "sånt", "nytt", "best", "lang", "små", "lot", "større", "vakker", "vakkert", "vakre", "ny", "bra", "bedre", "grei", "greit", "greie", "høyt", "største", "størst", "slikt", "liten", "lita", "lite", "små", "mindre", "minst", "kort", "glad", "dårlig", "ille", "ond", "vond", "verre", "verst", "eldre", "eldst", "lang", "lengre", "lengst", "nær", "næmerere", "nærere", "nærmest", "nærest", "tung", "tyngre", "tyngst", "ung", "yngre", "yngst", "pen", "alltid", "godt", "sammen", "tilbake", "etter", "igjen", "bare", "så", "veldig", "bedre", "samme", "far", "eneste", "enig", "borte", "snart", "rundt", "beste", "bort", "vekk", "nesten", "ganske", "senere", "videre", "straks", "svært", "neste", "bak", "bakre", "bakerst", "borte", "bortre", "bortest", "fremme", "fremre", "fremst", "foran", "forrest", "inne", "indre", "innerst", "midt", "midtre", "midterst", "nede", "nedre", "nederst", "nord", "nordre", "nordligst", "øvre", "øverst", "sør", "søndre", "sørligst", "vest", "vestre", "vestligst", "øst", "østre", "østligst", "ute", "ytre", "ytterst", "underst", "langt", "fram", "her", "der", "nok", "aldri", "ut", "ned", "nede", "bort", "innom", "ingensteds", "sjelden", "sjeldnere", "sjeldnest", "raskt", "raskere", "raskest", "gjerne", "heller", "helst", "dårligere", "dårligst", "vondt", "vondere", "vondest", "meget", "øverst", "enda", "neppe", "nokså", "nesten", "helt", "bitende", "aller", "ganske", "aldeles", "derfra", "herfra", "utenlands", "noensteds", "oppå", "hjemme", "hit", "dit", "vekk", "fram", "fort", "hyggelig", "hvorledes", "sånn", "således", "slik", "pent", "morsomt", "akkurat", "alt", "ofte", "nettopp", "bestandig", "noen gang", "noen ganger", "fremdeles", "ennå", "da", "sjeldent"], ["hei", "fy", "au", "hurra", "uff", "takk", "hm", "fanden", "pokker", "fillern", "åh", "isj", "hallo", "æsj"], ["g"], ["år", "året", "går", "dag", "nå", "tid", "tiden", "morgen", "dager", "minutt", "minutter", "dagen", "uke", "uker", "måneder", "stund", "timer", "time", "morges", "ettermiddag", "tidlig", "fjor", "kveld", "natt", "fogårs", "vinter", "sommer", "vår", "høst"], ["ting", "tingene"], ["ok", "okay", "ja", "jo", "jaså", "nei", "ikke", "unnskyld", "beklager", "herr", "altså", "grader", "grad", "kr", "en halvdel", "en halv", "to halve", "en tredel", "tredjedel", "to tredeler", "tredjedeler", "en firedel", "fjerdedel", "kvart", "en trettendedel", "en fjortendedel", "en promille", "en tusendel", "halvannen", "en og en halv"], b, p),
        h = ["dette", "at", "disse", "på", "unntatt", "for", "fra", "i", "om", "ovenfor", "på tvers", "etter", "mot", "blant", "rundt", "som", "på", "før", "bak", "nedenfor", "under", "siden", "mellom", "utover", "men", "av", "når", "da", "som", "fordi ", "ikke", "og"],
        j = [["både", "og"], ["enten", "eller"], ["verken", "eller"], ["jo", "dess"], ["dess", "dess"], ["jo", "desto"], ["ikke bare", "men"], ["ikke bare", "også"]],
        c = r(2),
        x = function x(e) {
      var t = e.search(/[aeiouyøåæ][^aeiouyøåæ]/);
      return -1 !== t && (t += 2), -1 !== t && t < 3 && (t = 3), t;
    },
        _ = function _(e, t, r) {
      var d = e.search(new RegExp(r.externalStemmer.regexSuffixes1a));

      if (d >= t && -1 !== t) {
        var s = e.substring(0, d);
        return /ert$/i.test(s) && (s = s.slice(0, -1)), s;
      }

      var n = e.search(/s$/),
          l = e.search(new RegExp(r.externalStemmer.regexSuffixes1b));
      return n >= t && -1 !== l && -1 !== t ? e.slice(0, -1) : e;
    },
        w = function w(e, t, r) {
      return e.search(new RegExp(r.externalStemmer.regexSuffixes2)) >= t && -1 !== t && (e = e.slice(0, -1)), e;
    },
        O = function O(e, t, r) {
      var d = e.search(new RegExp(r.externalStemmer.regexSuffixes3));
      return d >= t && -1 !== t && (e = e.substring(0, d)), e;
    },
        P = g.languageProcessing.baseStemmer;

    function R(e) {
      var t = Object(c.get)(e.getData("morphology"), "nb", !1);
      return t ? function (e) {
        return function (e, t) {
          for (var r = 0, d = [_, w, O]; r < d.length; r++) {
            e = (0, d[r])(e, x(e), t);
          }

          return e;
        }(e, t);
      } : P;
    }

    var S = r(7),
        M = r.n(S),
        E = ["villet", "bruket", "finnet", "legget", "viset", "vitet", "ligget", "ønsket", "holdet", "spillet", "laget", "velget", "tenket", "menet", "trenget", "begynnet", "kjennet", "kjøpet", "startet", "finnest", "leset", "følget", "jobbet", "gjeldet", "sendet", "fortellet", "skremt", "prøvd", "sittet", "høret", "hjelpet", "bygget", "klaret", "kjøret", "føret", "snakket", "øket", "tilbyt", "skapet", "håpet", "vinnet", "møtet", "delet", "følet", "utviklet", "betydd", "kallet", "bidrat", "læret", "selget", "spiset", "opplevet", "fortsettet", "passet", "drivet", "krevet", "fungeret", "levet", "leveret", "virket", "betalet", "forståt", "deltat", "benyttet", "søket", "endret", "spørret", "vurderet", "stillet", "handlet", "inkluderet", "åpnet", "reiset", "inneholdet", "bestemmet", "anbefalet", "trekket", "ventet", "samlet", "flyttet", "nevnet", "gjennomføret", "husket", "luret", "lurt", "sikret", "begynt", "beståt", "reduseret", "slippet", "hentet", "regnet", "svaret", "knyttet", "utføret", "hetet", "merket", "baseret", "trenet", "fallet", "meldet", "ledet", "fyllet", "produseret", "dekket", "endet", "mistet", "gledet", "unngåt", "sørget", "behandlet", "vokset", "mottat", "registreret", "beskrivet", "arrangeret", "forsøket", "etableret", "påvirket", "skjønnet", "fjernet", "fødet", "sjekket", "forklaret", "treffet", "stoppet", "bestillet", "oppnåt", "plasseret", "avsluttet", "henget", "løpet", "forventet", "sluttet", "presenteret", "elsket", "slitet", "kostet", "planlegget", "bæret", "besøket", "glemmet", "støttet", "byttet", "kastet", "testet", "nytet", "oppdaget", "oppståt", "tapet", "brytet", "løset", "styret", "fornøyet", "innebæret", "rettet", "representeret", "tilpasset", "publiseret", "omfattet", "utsettet", "sammenlignet", "tillatet", "sovet", "dannet", "hevdet", "tjenet", "inviteret", "forsvinnet", "manglet", "drepet", "utgjøret", "skillet", "beskyttet", "stemmet", "varieret", "drikket", "opprettet", "inngåt", "forbedret", "ødelegget", "satset", "dukket", "målet", "lastet", "foreslåt", "diskuteret", "ringet", "studeret", "interesseret", "styrket", "begrenset", "varet", "koblet", "skadet", "forlatet", "forlatt", "lovet", "foretat", "skaffet", "foregåt", "godkjennet", "koset", "sparet", "hørest", "hindret", "vedtat", "bringet", "bekreftet", "oppdateret", "anset", "synget", "fokuseret", "forårsaket", "spret", "erstattet", "skytet", "serveret", "kombineret", "kjempet", "latet", "antat", "blandet", "byt", "snut", "preget", "fordelet", "ansettet", "takket", "faret", "utvidet", "skyldest", "minnet", "trykket", "lanseret", "kontaktet", "beholdet", "letet", "forberedet", "festet", "innføret", "undersøket", "brennet", "malet", "medføret", "beveget", "stikket", "skiftet", "hoppet", "involveret", "egnet", "overtat", "monteret", "tålet", "avgjøret", "lykkest", "plukket", "beregnet", "utgit", "peket", "håndteret", "tegnet", "langet", "uttalet", "lagret", "følest", "installeret", "feiret", "opprettholdet", "oppfordret", "reageret", "kontrolleret", "understreket", "havnet", "vasket", "befinnet", "fullføret", "leket", "lidet", "defineret", "omtalet", "løftet", "oppgit", "rammet", "samarbeidet", "fanget", "typet", "opplyset", "strekket", "dreiet", "stenget", "utarbeidet", "fremmet", "overføret", "pleiet", "oppfyllet", "inspireret", "engasjeret", "utnyttet", "oppføret", "organiseret", "smaket", "reddet", "scoret", "hendet", "bekymret", "kuttet", "påpeket", "rekket", "forandret", "aksepteret", "ordnet", "nektet", "presset", "passeret", "savnet", "nærmet", "pakket", "smilet", "møtest", "rapporteret", "dømmet", "oppfattet", "tilhøret", "stiget", "tildelet", "talet", "tydet", "greiet", "markeret", "ivaretat", "fortjenet", "vennet", "leiet", "lånet", "eksisteret", "dokumenteret", "klikket", "vendet", "tvinget", "kommenteret", "innrømmet", "forholdet", "landet", "våknet", "funket", "formidlet", "identifiseret", "tellet", "utstyret", "gratuleret", "formet", "angripet", "overrasket", "foreligget", "hevet", "tørret", "foretrekket", "garanteret", "justeret", "prioriteret", "lyttet", "gjentat", "imponeret", "resulteret", "skjulet", "trengest", "rivet", "trivest", "lukket", "uttrykket", "overlevet", "klaget", "informeret", "tilbringet", "postet", "giftet", "designet", "avsløret", "varslet", "fremståt", "blogget", "innset", "stolet", "opereret", "forsvaret", "forutsettet", "gripet", "ryddet", "utdannet", "skrut", "veiet", "krysset", "utfordret", "gjennomgåt", "reguleret", "støtet", "senket", "lignet", "bevaret", "angit", "utforsket", "tørket", "syklet", "forsterket", "tolket", "slappet", "investeret", "fikset", "berøret", "beviset", "ropet", "koket", "forblit", "opptret", "vekket", "fastsettet", "strikket", "fryktet", "blåset", "avholdet", "drømmet", "syt", "forekommet", "forbyt", "pratet", "observeret", "taklet", "påståt", "konkurreret", "anet", "rennet", "rit", "signeret", "forhindret", "ankommet", "konkluderet", "sporet", "stiftet", "relateret", "forbindet", "avtalet", "varmet", "bitet", "påføret", "bindet", "fellet", "kvalifiseret", "refereret", "utformet", "avviset", "klippet", "overbeviset", "blat", "plaget", "øvet", "orket", "behøvet", "godtat", "beklaget", "henviset", "kommuniseret", "integreret", "seilet", "betraktet", "danset", "giddet", "synket", "lettet", "tilrettelegget", "finansieret", "stimuleret", "bedret", "forebygget", "avhenget", "skuffet", "tilsit", "rullet", "lestt", "analyseret", "hilset", "bosettet", "stjelet", "tilsvaret", "introduseret", "dyrket", "aktiveret", "gravet", "tret", "disset", "farget", "anvendet", "inntat", "oversettet", "hatet", "konsentreret", "utløset", "reflekteret", "grunnlegget", "pustet", "opplevest", "kritiseret", "anerkjennet", "avdekket", "svekket", "slettet", "gjenståt", "hvilet", "redigeret", "kåret", "steket", "røret", "låset", "advaret", "risikeret", "renset", "gråtet", "knuset", "rykket", "underviset", "skjæret", "motiveret", "luktet", "domineret", "fisket", "biståt", "seest", "åpenbaret", "tilføret", "tilknyttet", "påviset", "besluttet", "kartlegget", "filmet", "ytet", "pågåt", "kikket", "gjemmet", "annonseret", "logget", "omhandlet", "returneret", "røyket", "pålegget", "tipset", "tippet", "plantet", "fremstillet", "puttet", "irriteret", "tennet", "stanset", "utøvet", "indikeret", "noteret", "tiltrekket", "fryset", "pyntet", "klatret", "lyset", "oppgraderet", "pusset", "slenget", "fraktet", "fristet", "stammet", "skremmet", "antydet", "utnevnet", "videreføret", "forsket", "vandret", "tilsettet", "oppsøket", "fattet", "svinget", "forhandlet", "skrevet", "lønnet", "stryket", "suget", "viet", "digget", "siktet", "huset", "repareret", "erfaret", "praktiseret", "badet", "forlenget", "baket", "straffet", "realiseret", "stresset", "skrytet", "intervjuet", "flytet", "bekjempet", "illustreret", "bøyet", "droppet", "iverksettet", "ladet", "mistenket", "sovnet", "forpliktet", "tømmet", "fremhevet", "dempet", "tvilet", "begåt", "orienteret", "overvåket", "fastslåt", "banket", "løsnet", "tilfredsstillet", "kopieret", "etterfølget", "rommet", "argumenteret", "angret", "kulet", "drøftet", "sparket", "begrunnet", "betegnet", "flyktet", "erklæret", "oppsummeret", "forelsket", "respekteret", "lydet", "låtet", "avklaret", "isoleret", "smittet", "anslåt", "hellet", "priset", "smøret", "genereret", "oppbevaret", "innledet", "utelukket", "belyset", "omgit", "vektlegget", "listet", "overlatet", "tittet", "dritet", "debuteret", "roet", "konstrueret", "administreret", "gjengit", "ryket", "nomineret", "svømmet", "smeltet", "offentliggjøret", "etterlatet", "skinnet", "smellet", "skriket", "forvaltet", "presteret", "spesialiseret", "siget", "forsikret", "dateret", "klemmet", "forstyrret", "toppet", "skyvet", "linket", "matchet", "ridet", "videreutviklet", "fremgåt", "avgit", "fornyet", "limet", "raset", "spat", "balanseret", "frigjøret", "siteret", "forestillet", "konstateret", "jaktet", "grunnet", "veiledet", "gjenopprettet", "angåt", "besvaret", "sammenliknet", "innhentet", "ristet", "rengjøret", "litet", "kompliseret", "utredet", "nyttet", "arresteret", "moret", "betjenet", "booket", "demonstreret", "strømmet", "anmeldet", "dekoreret", "mestret", "vedlikeholdet", "springet", "erkjennet", "oppholdet", "avviklet", "fotograferet", "parkeret", "vitnet", "sviktet", "rekrutteret", "importeret", "elimineret", "oppmuntret", "belønnet", "blokkeret", "presiseret", "markedsføret", "kjennetegnet", "høstet", "kjennest", "lokaliseret", "våget", "overset", "innstillet", "utmerket", "gjenspeilet", "henvendet", "lokket", "sukket", "utstedet", "innehat", "utbetalet", "rangeret", "avbrytet", "evalueret", "jaget", "hivet", "sprekket", "døpet", "omsettet", "sorteret", "slåsst", "karakteriseret", "fremføret", "rundet", "bemerket", "underlegget", "korresponderet", "verdsettet", "konverteret", "formuleret", "forfølget", "utbret", "disponeret", "avanseret", "strammet", "implementeret", "opparbeidet", "kysset", "korrigeret", "blomstret", "innvilget", "ofret", "knekket", "filet", "matet", "forsinket", "forenet", "reserveret", "spennet", "tilsendet", "transporteret", "vannet", "stavet", "belastet", "forenklet", "skreddersyt", "etterlyset", "skyldet", "spåt", "dyttet", "timet", "rotet", "nedlegget", "dettet", "kvittet", "innredet", "kortet", "motsettet", "lindret", "bremset", "frelset", "foret", "gjenkjennet", "opphevet", "sniket", "tallet", "absorberet", "lekket", "doblet", "distribueret", "synliggjøret", "feilet", "forsynet", "bearbeidet", "ignoreret", "unnet", "forkynnet", "tråkket", "assosieret", "tilegnet", "utviset", "nedsettet", "diagnostiseret", "framståt", "heiet", "planet", "anget", "evnet", "herjet", "sklit", "misforståt", "forbeholdet", "begeistret", "avsettet", "fyret", "oset", "kompenseret", "overstiget", "tilset", "oppkallet", "krypet", "brettet", "bevilget", "skildret", "forvandlet", "minsket", "rømmet", "klassifiseret", "anlegget", "lyvet", "sprenget", "overnattet", "innfrit", "spørrest", "maktet", "forverret", "turet", "stellet", "klargjøret", "arvet", "hemmet", "ledest", "skyllet", "nøyet", "pumpet", "tillegget", "hyllet", "tillet", "behersket", "skjerpet", "berømmet", "vernet", "forankret", "luftet", "svelget", "innkallet", "kunngjøret", "luket", "opphøret", "headet", "vekslet", "fratat", "suppleret", "innlemmet", "trillet", "lenket", "boret", "avlyset", "sponset", "driftet", "medvirket", "motvirket", "ferdigstillet", "grenset", "sprettet", "gjestet", "regisseret", "protesteret", "anklaget", "gjettet", "etterspørret", "duket", "stemplet", "koordineret", "avtat", "oppnevnet", "omkommet", "overholdet", "printet", "misbruket", "forlanget", "dedikeret", "roset", "unnskyldet", "utdelet", "såret", "sertifiseret", "oppløset", "provoseret", "forvirret", "øset", "begravet", "overgåt", "påtat", "helbredet", "stirret", "erobret", "spekuleret", "skiltet", "mobbet", "rustet", "nikket", "gruet", "bommet", "innlegget", "utpeket", "surfet", "kranglet", "tilgit", "utdypet", "sammensettet", "hakket", "fremkommet", "strevet", "igangsettet", "hersket", "brekket", "bristet", "bydet", "draget", "flyget", "fnyset", "fyket", "glippet", "grinet", "gyset", "gytet", "gyvet", "hogget", "hugget", "klinget", "klypet", "klyvet", "knipet", "kommet", "kvedet", "kvekket", "kveppet", "latet", " lyget", "lyvet", "nyset", "pipet", "ridet", "settet", "skitet", "skjelvet", "skridet", "skrivet", "skvettet", "slippet", "smyget", "snytet", "spinnet", "stridet", "supet", "sverget", "sverjet", "ljuget", "sviket", "svinnet", "sleppet", "tigget", "viket", "villt", "brukt", "finnt", "leggt", "vist", "vitt", "liggt", "ønskt", "holdt", "spillt", "lagt", "velgt", "tenkt", "ment", "trengt", "begynnt", "kjennt", "kjøpt", "startt", "finnes", "lest", "følgt", "jobbt", "gjeldt", "sendt", "fortellt", "sitt", "hørt", "hjelpt", "byggt", "klart", "kjørt", "ført", "snakkt", "økt", "tilby", "skapt", "håpt", "vinnt", "møtt", "delt", "følt", "utviklt", "bety", "kallt", "bidra", "lært", "selgt", "spist", "opplevt", "fortsett", "passt", "drivt", "krevt", "fungert", "levt", "levert", "virkt", "betalt", "forstå", "delta", "benytt", "søkt", "endrt", "spørrt", "vurdert", "stillt", "handlt", "inkludert", "åpnt", "reist", "inneholdt", "bestemmt", "anbefalt", "trekkt", "ventt", "samlt", "flytt", "nevnt", "gjennomført", "huskt", "lurt", "sikrt", "bestå", "redusert", "slippt", "hentt", "regnt", "svart", "knytt", "utført", "hett", "merkt", "basert", "trent", "fallt", "meldt", "ledt", "fyllt", "produsert", "dekkt", "endt", "mistt", "gledt", "unngå", "sørgt", "behandlt", "vokst", "motta", "registrert", "beskrivt", "arrangert", "forsøkt", "etablert", "påvirkt", "skjønnt", "fjernt", "født", "sjekkt", "forklart", "trefft", "stoppt", "bestillt", "oppnå", "plassert", "avslutt", "hengt", "løpt", "forventt", "slutt", "presentert", "elskt", "slitt", "kostt", "planleggt", "bært", "besøkt", "glemmt", "støtt", "bytt", "kastt", "testt", "nytt", "oppdagt", "oppstå", "tapt", "brytt", "løst", "styrt", "fornøyt", "innebært", "rett", "representert", "tilpasst", "publisert", "omfatt", "utsett", "sammenlignt", "tillatt", "sovt", "dannt", "hevdt", "tjent", "invitert", "forsvinnt", "manglt", "drept", "utgjørt", "skillt", "beskytt", "stemmt", "variert", "drikkt", "opprett", "inngå", "forbedrt", "ødeleggt", "satst", "dukkt", "målt", "lastt", "foreslå", "diskutert", "ringt", "studert", "interessert", "styrkt", "begrenst", "vart", "koblt", "skadt", "forlatt", "lovt", "foreta", "skafft", "foregå", "godkjennt", "kost", "spart", "høres", "hindrt", "vedta", "bringt", "bekreftt", "oppdatert", "anst", "syngt", "fokusert", "forårsakt", "sprt", "erstatt", "skytt", "servert", "kombinert", "kjempt", "latt", "anta", "blandt", "by", "snu", "pregt", "fordelt", "ansett", "takkt", "fart", "utvidt", "skyldes", "minnt", "trykkt", "lansert", "kontaktt", "beholdt", "lett", "forberedt", "festt", "innført", "undersøkt", "brennt", "malt", "medført", "bevegt", "stikkt", "skiftt", "hoppt", "involvert", "egnt", "overta", "montert", "tålt", "avgjørt", "lykkes", "plukkt", "beregnt", "utgi", "pekt", "håndtert", "tegnt", "langt", "uttalt", "lagrt", "føles", "installert", "feirt", "opprettholdt", "oppfordrt", "reagert", "kontrollert", "understrekt", "havnt", "vaskt", "befinnt", "fullført", "lekt", "lidt", "definert", "omtalt", "løftt", "oppgi", "rammt", "samarbeidt", "fangt", "typt", "opplyst", "strekkt", "dreit", "stengt", "utarbeidt", "fremmt", "overført", "pleit", "oppfyllt", "inspirert", "engasjert", "utnytt", "oppført", "organisert", "smakt", "reddt", "scort", "hendt", "bekymrt", "kutt", "påpekt", "rekkt", "forandrt", "akseptert", "ordnt", "nektt", "presst", "passert", "savnt", "nærmt", "pakkt", "smilt", "møtes", "rapportert", "dømmt", "oppfatt", "tilhørt", "stigt", "tildelt", "talt", "tydt", "greit", "markert", "ivareta", "fortjent", "vennt", "leit", "lånt", "eksistert", "dokumentert", "klikkt", "vendt", "tvingt", "kommentert", "innrømmt", "forholdt", "landt", "våknt", "funkt", "formidlt", "identifisert", "tellt", "utstyrt", "gratulert", "formt", "angript", "overraskt", "foreliggt", "hevt", "tørrt", "foretrekkt", "garantert", "justert", "prioritert", "lytt", "gjenta", "imponert", "resultert", "skjult", "trenges", "rivt", "trives", "lukkt", "uttrykkt", "overlevt", "klagt", "informert", "tilbringt", "postt", "giftt", "designt", "avslørt", "varslt", "fremstå", "bloggt", "innst", "stolt", "operert", "forsvart", "forutsett", "gript", "ryddt", "utdannt", "skru", "veit", "krysst", "utfordrt", "gjennomgå", "regulert", "støtt", "senkt", "lignt", "bevart", "angi", "utforskt", "tørkt", "syklt", "forsterkt", "tolkt", "slappt", "investert", "fikst", "berørt", "bevist", "ropt", "kokt", "forbli", "opptrt", "vekkt", "fastsett", "strikkt", "fryktt", "blåst", "avholdt", "drømmt", "sy", "forekommt", "forby", "pratt", "observert", "taklt", "påstå", "konkurrert", "ant", "rennt", "ri", "signert", "forhindrt", "ankommt", "konkludert", "sport", "stiftt", "relatert", "forbindt", "avtalt", "varmt", "bitt", "påført", "bindt", "fellt", "kvalifisert", "referert", "utformt", "avvist", "klippt", "overbevist", "bla", "plagt", "øvt", "orkt", "behøvt", "godta", "beklagt", "henvist", "kommunisert", "integrert", "seilt", "betraktt", "danst", "giddt", "synkt", "lett", "tilretteleggt", "finansiert", "stimulert", "bedrt", "forebyggt", "avhengt", "skufft", "tilsi", "rullt", "lest", "analysert", "hilst", "bosett", "stjelt", "tilsvart", "introdusert", "dyrkt", "aktivert", "gravt", "trt", "disst", "fargt", "anvendt", "innta", "oversett", "hatt", "konsentrert", "utløst", "reflektert", "grunnleggt", "pustt", "oppleves", "kritisert", "anerkjennt", "avdekkt", "svekkt", "slett", "gjenstå", "hvilt", "redigert", "kårt", "stekt", "rørt", "låst", "advart", "risikert", "renst", "grått", "knust", "rykkt", "undervist", "skjært", "motivert", "luktt", "dominert", "fiskt", "bistå", "sees", "åpenbart", "tilført", "tilknytt", "påvist", "beslutt", "kartleggt", "filmt", "ytt", "pågå", "kikkt", "gjemmt", "annonsert", "loggt", "omhandlt", "returnert", "røykt", "påleggt", "tipst", "tippt", "plantt", "fremstillt", "putt", "irritert", "tennt", "stanst", "utøvt", "indikert", "notert", "tiltrekkt", "fryst", "pyntt", "klatrt", "lyst", "oppgradert", "pusst", "slengt", "fraktt", "fristt", "stammt", "skremmt", "antydt", "utnevnt", "videreført", "forskt", "vandrt", "tilsett", "oppsøkt", "fatt", "svingt", "forhandlt", "skrevt", "lønnt", "strykt", "sugt", "vit", "diggt", "siktt", "hust", "reparert", "erfart", "praktisert", "badt", "forlengt", "bakt", "strafft", "realisert", "stresst", "skrytt", "intervjut", "flytt", "bekjempt", "illustrert", "bøyt", "droppt", "iverksett", "ladt", "mistenkt", "sovnt", "forpliktt", "tømmt", "fremhevt", "dempt", "tvilt", "begå", "orientert", "overvåkt", "fastslå", "bankt", "løsnt", "tilfredsstillt", "kopiert", "etterfølgt", "rommt", "argumentert", "angrt", "kult", "drøftt", "sparkt", "begrunnt", "betegnt", "flyktt", "erklært", "oppsummert", "forelskt", "respektert", "lydt", "lått", "avklart", "isolert", "smitt", "anslå", "hellt", "prist", "smørt", "generert", "oppbevart", "innledt", "utelukkt", "belyst", "omgi", "vektleggt", "listt", "overlatt", "titt", "dritt", "debutert", "rot", "konstruert", "administrert", "gjengi", "rykt", "nominert", "svømmt", "smeltt", "offentliggjørt", "etterlatt", "skinnt", "smellt", "skrikt", "forvaltt", "prestert", "spesialisert", "sigt", "forsikrt", "datert", "klemmt", "forstyrrt", "toppt", "skyvt", "linkt", "matcht", "ridt", "videreutviklt", "fremgå", "avgi", "fornyt", "limt", "rast", "spa", "balansert", "frigjørt", "sitert", "forestillt", "konstatert", "jaktt", "grunnt", "veiledt", "gjenopprett", "angå", "besvart", "sammenliknt", "innhentt", "ristt", "rengjørt", "litt", "komplisert", "utredt", "nytt", "arrestert", "mort", "betjent", "bookt", "demonstrert", "strømmt", "anmeldt", "dekorert", "mestrt", "vedlikeholdt", "springt", "erkjennt", "oppholdt", "avviklt", "fotografert", "parkert", "vitnt", "sviktt", "rekruttert", "importert", "eliminert", "oppmuntrt", "belønnt", "blokkert", "presisert", "markedsført", "kjennetegnt", "høstt", "kjennes", "lokalisert", "vågt", "overst", "innstillt", "utmerkt", "gjenspeilt", "henvendt", "lokkt", "sukkt", "utstedt", "inneha", "utbetalt", "rangert", "avbrytt", "evaluert", "jagt", "hivt", "sprekkt", "døpt", "omsett", "sortert", "slåss", "karakterisert", "fremført", "rundt", "bemerkt", "underleggt", "korrespondert", "verdsett", "konvertert", "formulert", "forfølgt", "utbrt", "disponert", "avansert", "strammt", "implementert", "opparbeidt", "kysst", "korrigert", "blomstrt", "innvilgt", "ofrt", "knekkt", "filt", "matt", "forsinkt", "forent", "reservert", "spennt", "tilsendt", "transportert", "vannt", "stavt", "belastt", "forenklt", "skreddersy", "etterlyst", "skyldt", "spå", "dytt", "timt", "rott", "nedleggt", "dett", "kvitt", "innredt", "kortt", "motsett", "lindrt", "bremst", "frelst", "fort", "gjenkjennt", "opphevt", "snikt", "tallt", "absorbert", "lekkt", "doblt", "distribuert", "synliggjørt", "feilt", "forsynt", "bearbeidt", "ignorert", "unnt", "forkynnt", "tråkkt", "assosiert", "tilegnt", "utvist", "nedsett", "diagnostisert", "framstå", "heit", "plant", "angt", "evnt", "herjt", "skli", "misforstå", "forbeholdt", "begeistrt", "avsett", "fyrt", "ost", "kompensert", "overstigt", "tilst", "oppkallt", "krypt", "brett", "bevilgt", "skildrt", "forvandlt", "minskt", "rømmt", "klassifisert", "anleggt", "lyvt", "sprengt", "overnatt", "innfri", "spørres", "maktt", "forverrt", "turt", "stellt", "klargjørt", "arvt", "hemmt", "ledes", "skyllt", "nøyt", "pumpt", "tilleggt", "hyllt", "tillt", "beherskt", "skjerpt", "berømmt", "vernt", "forankrt", "luftt", "svelgt", "innkallt", "kunngjørt", "lukt", "opphørt", "headt", "vekslt", "frata", "supplert", "innlemmt", "trillt", "lenkt", "bort", "avlyst", "sponst", "driftt", "medvirkt", "motvirkt", "ferdigstillt", "grenst", "sprett", "gjestt", "regissert", "protestert", "anklagt", "gjett", "etterspørrt", "dukt", "stemplt", "koordinert", "avta", "oppnevnt", "omkommt", "overholdt", "printt", "misbrukt", "forlangt", "dedikert", "rost", "unnskyldt", "utdelt", "sårt", "sertifisert", "oppløst", "provosert", "forvirrt", "øst", "begravt", "overgå", "påta", "helbredt", "stirrt", "erobrt", "spekulert", "skiltt", "mobbt", "rustt", "nikkt", "grut", "bommt", "innleggt", "utpekt", "surft", "kranglt", "tilgi", "utdypt", "sammensett", "hakkt", "fremkommt", "strevt", "igangsett", "herskt", "brekkt", "bristt", "bydt", "dragt", "flygt", "fnyst", "fykt", "glippt", "grint", "gyst", "gytt", "gyvt", "hoggt", "huggt", "klingt", "klypt", "klyvt", "knipt", "kommt", "kvedt", "kvekkt", "kveppt", "latt", " lygt", "lyvt", "nyst", "pipt", "ridt", "sett", "skitt", "skjelvt", "skridt", "skrivt", "skvett", "slippt", "smygt", "snytt", "spinnt", "stridt", "supt", "svergt", "sverjt", "ljugt", "svikt", "svinnt", "sleppt", "tiggt", "vikt", "bedt", "betydd", "bundet", "bitt", "blitt", "brekket", "brent", "brutt", "bydd", "budt", "båret", "dettet", "dradd", "dratt", "drukket", "dritet", "dritt", "drevet", "ett", "falt", "funnet", "flydd", "fløyet", "flydd", "fløyet", "flytt", "forsvunnet", "fortalt", "frosset", "fått", "fulgt", "gitt", "giddet", "gjeldet", "gjeldt", "gjort", "kvalt", "glidd", "gravd", "gravet", "grint", "grepet", "grått", "gått", "hatt", "hett", "hivd", "hjulpet", "hogget", "hogd", "holdt", "klypt", "kløpet", "knekket", "knekt", "kommet", "krøpet", "latt", "latt", "ledd", "lagt", "ligget", "lydd", "lydt", "løyet", "løpet", "løpt", "nyst", "nytt", "pepet", "rekket", "rekkt", "rent", "ridd", "revet", "røket", "sett", "solgt", "satt", "sagt", "sittet", "skitt", "skjelvet", "skåret", "sklidd", "skreket", "skrevet", "skrytt", "skutt", "skyvd", "skjøvet", "slengt", "sluppet", "slitt", "slått", "smelt", "snytt", "sovet", "sprukket", "sprettet", "sprunget", "spurt", "stukket", "stjålet", "strukket", "strøket", "stått", "likt", "sverga", "sverget", "svoret", "svidd", "sveket", "svunnet", "sunget", "sunket", "tatt", "truffet", "trukket", "tvunget", "tort", "turt", "valgt", "vikt", "vunnet", "visst", "vridd", "vært", "villed", "bruked", "finned", "legged", "vised", "vited", "ligged", "ønsked", "holded", "spilled", "laged", "velged", "tenked", "mened", "trenged", "begynned", "kjenned", "kjøped", "started", "finnesd", "lesed", "følged", "jobbed", "gjelded", "sended", "fortelled", "sitted", "høred", "hjelped", "bygged", "klared", "kjøred", "føred", "snakked", "øked", "tilbyd", "skaped", "håped", "vinned", "møted", "deled", "føled", "utvikled", "betyd", "kalled", "bidrad", "læred", "selged", "spised", "oppleved", "fortsetted", "passed", "drived", "kreved", "fungered", "leved", "levered", "virked", "betaled", "forståd", "deltad", "benytted", "søked", "endred", "spørred", "vurdered", "stilled", "handled", "inkludered", "åpned", "reised", "inneholded", "bestemmed", "anbefaled", "trekked", "vented", "samled", "flytted", "nevned", "gjennomføred", "husked", "lured", "sikred", "beståd", "redusered", "slipped", "hented", "regned", "svared", "knytted", "utføred", "heted", "merked", "basered", "trened", "falled", "melded", "leded", "fylled", "produsered", "dekked", "ended", "misted", "gleded", "unngåd", "sørged", "behandled", "voksed", "mottad", "registrered", "beskrived", "arrangered", "forsøked", "etablered", "påvirked", "skjønned", "fjerned", "føded", "sjekked", "forklared", "treffed", "stopped", "bestilled", "oppnåd", "plassered", "avslutted", "henged", "løped", "forvented", "slutted", "presentered", "elsked", "slited", "kosted", "planlegged", "bæred", "besøked", "glemmed", "støtted", "bytted", "kasted", "tested", "nyted", "oppdaged", "oppståd", "taped", "bryted", "løsed", "styred", "fornøyed", "innebæred", "retted", "representered", "tilpassed", "publisered", "omfatted", "utsetted", "sammenligned", "tillated", "soved", "danned", "hevded", "tjened", "invitered", "forsvinned", "mangled", "dreped", "utgjøred", "skilled", "beskytted", "stemmed", "variered", "drikked", "oppretted", "inngåd", "forbedred", "ødelegged", "satsed", "dukked", "måled", "lasted", "foreslåd", "diskutered", "ringed", "studered", "interessered", "styrked", "begrensed", "vared", "kobled", "skaded", "forlated", "loved", "foretad", "skaffed", "foregåd", "godkjenned", "kosed", "spared", "høresd", "hindred", "vedtad", "bringed", "bekrefted", "oppdatered", "ansed", "synged", "fokusered", "forårsaked", "spred", "erstatted", "skyted", "servered", "kombinered", "kjemped", "lated", "antad", "blanded", "byd", "snud", "preged", "fordeled", "ansetted", "takked", "fared", "utvided", "skyldesd", "minned", "trykked", "lansered", "kontakted", "beholded", "leted", "forbereded", "fested", "innføred", "undersøked", "brenned", "maled", "medføred", "beveged", "stikked", "skifted", "hopped", "involvered", "egned", "overtad", "montered", "tåled", "avgjøred", "lykkesd", "plukked", "beregned", "utgid", "peked", "håndtered", "tegned", "langed", "uttaled", "lagred", "følesd", "installered", "feired", "opprettholded", "oppfordred", "reagered", "kontrollered", "understreked", "havned", "vasked", "befinned", "fullføred", "leked", "lided", "definered", "omtaled", "løfted", "oppgid", "rammed", "samarbeided", "fanged", "typed", "opplysed", "strekked", "dreied", "stenged", "utarbeided", "fremmed", "overføred", "pleied", "oppfylled", "inspirered", "engasjered", "utnytted", "oppføred", "organisered", "smaked", "redded", "scored", "hended", "bekymred", "kutted", "påpeked", "rekked", "forandred", "akseptered", "ordned", "nekted", "pressed", "passered", "savned", "nærmed", "pakked", "smiled", "møtesd", "rapportered", "dømmed", "oppfatted", "tilhøred", "stiged", "tildeled", "taled", "tyded", "greied", "markered", "ivaretad", "fortjened", "venned", "leied", "låned", "eksistered", "dokumentered", "klikked", "vended", "tvinged", "kommentered", "innrømmed", "forholded", "landed", "våkned", "funked", "formidled", "identifisered", "telled", "utstyred", "gratulered", "formed", "angriped", "overrasked", "foreligged", "heved", "tørred", "foretrekked", "garantered", "justered", "prioritered", "lytted", "gjentad", "imponered", "resultered", "skjuled", "trengesd", "rived", "trivesd", "lukked", "uttrykked", "overleved", "klaged", "informered", "tilbringed", "posted", "gifted", "designed", "avsløred", "varsled", "fremståd", "blogged", "innsed", "stoled", "operered", "forsvared", "forutsetted", "griped", "rydded", "utdanned", "skrud", "veied", "kryssed", "utfordred", "gjennomgåd", "regulered", "støted", "senked", "ligned", "bevared", "angid", "utforsked", "tørked", "sykled", "forsterked", "tolked", "slapped", "investered", "fiksed", "berøred", "bevised", "roped", "koked", "forblid", "opptred", "vekked", "fastsetted", "strikked", "frykted", "blåsed", "avholded", "drømmed", "syd", "forekommed", "forbyd", "prated", "observered", "takled", "påståd", "konkurrered", "aned", "renned", "rid", "signered", "forhindred", "ankommed", "konkludered", "spored", "stifted", "relatered", "forbinded", "avtaled", "varmed", "bited", "påføred", "binded", "felled", "kvalifisered", "referered", "utformed", "avvised", "klipped", "overbevised", "blad", "plaged", "øved", "orked", "behøved", "godtad", "beklaged", "henvised", "kommunisered", "integrered", "seiled", "betrakted", "dansed", "gidded", "synked", "letted", "tilrettelegged", "finansiered", "stimulered", "bedred", "forebygged", "avhenged", "skuffed", "tilsid", "rulled", "lestd", "analysered", "hilsed", "bosetted", "stjeled", "tilsvared", "introdusered", "dyrked", "aktivered", "graved", "tred", "dissed", "farged", "anvended", "inntad", "oversetted", "hated", "konsentrered", "utløsed", "reflektered", "grunnlegged", "pusted", "opplevesd", "kritisered", "anerkjenned", "avdekked", "svekked", "sletted", "gjenståd", "hviled", "redigered", "kåred", "steked", "røred", "låsed", "advared", "risikered", "rensed", "gråted", "knused", "rykked", "undervised", "skjæred", "motivered", "lukted", "dominered", "fisked", "biståd", "seesd", "åpenbared", "tilføred", "tilknytted", "påvised", "beslutted", "kartlegged", "filmed", "yted", "pågåd", "kikked", "gjemmed", "annonsered", "logged", "omhandled", "returnered", "røyked", "pålegged", "tipsed", "tipped", "planted", "fremstilled", "putted", "irritered", "tenned", "stansed", "utøved", "indikered", "notered", "tiltrekked", "frysed", "pynted", "klatred", "lysed", "oppgradered", "pussed", "slenged", "frakted", "fristed", "stammed", "skremmed", "antyded", "utnevned", "videreføred", "forsked", "vandred", "tilsetted", "oppsøked", "fatted", "svinged", "forhandled", "skreved", "lønned", "stryked", "suged", "vied", "digged", "sikted", "hused", "reparered", "erfared", "praktisered", "baded", "forlenged", "baked", "straffed", "realisered", "stressed", "skryted", "intervjued", "flyted", "bekjemped", "illustrered", "bøyed", "dropped", "iverksetted", "laded", "mistenked", "sovned", "forplikted", "tømmed", "fremheved", "demped", "tviled", "begåd", "orientered", "overvåked", "fastslåd", "banked", "løsned", "tilfredsstilled", "kopiered", "etterfølged", "rommed", "argumentered", "angred", "kuled", "drøfted", "sparked", "begrunned", "betegned", "flykted", "erklæred", "oppsummered", "forelsked", "respektered", "lyded", "låted", "avklared", "isolered", "smitted", "anslåd", "helled", "prised", "smøred", "generered", "oppbevared", "innleded", "utelukked", "belysed", "omgid", "vektlegged", "listed", "overlated", "titted", "drited", "debutered", "roed", "konstruered", "administrered", "gjengid", "ryked", "nominered", "svømmed", "smelted", "offentliggjøred", "etterlated", "skinned", "smelled", "skriked", "forvalted", "prestered", "spesialisered", "siged", "forsikred", "datered", "klemmed", "forstyrred", "topped", "skyved", "linked", "matched", "rided", "videreutvikled", "fremgåd", "avgid", "fornyed", "limed", "rased", "spad", "balansered", "frigjøred", "sitered", "forestilled", "konstatered", "jakted", "grunned", "veileded", "gjenoppretted", "angåd", "besvared", "sammenlikned", "innhented", "risted", "rengjøred", "lited", "komplisered", "utreded", "nytted", "arrestered", "mored", "betjened", "booked", "demonstrered", "strømmed", "anmelded", "dekorered", "mestred", "vedlikeholded", "springed", "erkjenned", "oppholded", "avvikled", "fotografered", "parkered", "vitned", "svikted", "rekruttered", "importered", "eliminered", "oppmuntred", "belønned", "blokkered", "presisered", "markedsføred", "kjennetegned", "høsted", "kjennesd", "lokalisered", "våged", "oversed", "innstilled", "utmerked", "gjenspeiled", "henvended", "lokked", "sukked", "utsteded", "innehad", "utbetaled", "rangered", "avbryted", "evaluered", "jaged", "hived", "sprekked", "døped", "omsetted", "sortered", "slåssd", "karakterisered", "fremføred", "runded", "bemerked", "underlegged", "korrespondered", "verdsetted", "konvertered", "formulered", "forfølged", "utbred", "disponered", "avansered", "strammed", "implementered", "opparbeided", "kyssed", "korrigered", "blomstred", "innvilged", "ofred", "knekked", "filed", "mated", "forsinked", "forened", "reservered", "spenned", "tilsended", "transportered", "vanned", "staved", "belasted", "forenkled", "skreddersyd", "etterlysed", "skylded", "spåd", "dytted", "timed", "roted", "nedlegged", "detted", "kvitted", "innreded", "korted", "motsetted", "lindred", "bremsed", "frelsed", "fored", "gjenkjenned", "oppheved", "sniked", "talled", "absorbered", "lekked", "dobled", "distribuered", "synliggjøred", "feiled", "forsyned", "bearbeided", "ignorered", "unned", "forkynned", "tråkked", "assosiered", "tilegned", "utvised", "nedsetted", "diagnostisered", "framståd", "heied", "planed", "anged", "evned", "herjed", "sklid", "misforståd", "forbeholded", "begeistred", "avsetted", "fyred", "osed", "kompensered", "overstiged", "tilsed", "oppkalled", "kryped", "bretted", "bevilged", "skildred", "forvandled", "minsked", "rømmed", "klassifisered", "anlegged", "lyved", "sprenged", "overnatted", "innfrid", "spørresd", "makted", "forverred", "tured", "stelled", "klargjøred", "arved", "hemmed", "ledesd", "skylled", "nøyed", "pumped", "tillegged", "hylled", "tilled", "behersked", "skjerped", "berømmed", "verned", "forankred", "lufted", "svelged", "innkalled", "kunngjøred", "luked", "opphøred", "headed", "veksled", "fratad", "supplered", "innlemmed", "trilled", "lenked", "bored", "avlysed", "sponsed", "drifted", "medvirked", "motvirked", "ferdigstilled", "grensed", "spretted", "gjested", "regissered", "protestered", "anklaged", "gjetted", "etterspørred", "duked", "stempled", "koordinered", "avtad", "oppnevned", "omkommed", "overholded", "printed", "misbruked", "forlanged", "dedikered", "rosed", "unnskylded", "utdeled", "såred", "sertifisered", "oppløsed", "provosered", "forvirred", "øsed", "begraved", "overgåd", "påtad", "helbreded", "stirred", "erobred", "spekulered", "skilted", "mobbed", "rusted", "nikked", "grued", "bommed", "innlegged", "utpeked", "surfed", "krangled", "tilgid", "utdyped", "sammensetted", "hakked", "fremkommed", "streved", "igangsetted", "hersked", "brekked", "bristed", "byded", "draged", "flyged", "fnysed", "fyked", "glipped", "grined", "gysed", "gyted", "gyved", "hogged", "hugged", "klinged", "klyped", "klyved", "kniped", "kommed", "kveded", "kvekked", "kvepped", "lated", "lyged", "lyved", "nysed", "piped", "rided", "setted", "skited", "skjelved", "skrided", "skrived", "skvetted", "slipped", "smyged", "snyted", "spinned", "strided", "suped", "sverged", "sverjed", "ljuged", "sviked", "svinned", "slepped", "tigged", "viked", "kunngjort"],
        C = g.languageProcessing.getWords;

    var T = g.languageProcessing.precedenceException,
        W = function (e) {
      l()(n, e);
      var t,
          r,
          d = (t = n, r = function () {
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
            d = k()(t);

        if (r) {
          var s = k()(this).constructor;
          e = Reflect.construct(d, arguments, s);
        } else e = d.apply(this, arguments);

        return o()(this, e);
      });

      function n(e, t) {
        var r;
        return s()(this, n), (r = d.call(this, e, t))._participles = function (e) {
          var t = C(e),
              r = [];
          return Object(c.forEach)(t, function (e) {
            Object(c.includes)(E, e) && r.push(e);
          }), r;
        }(r.getClauseText()), r.checkParticiples(), r;
      }

      return M()(n, [{
        key: "checkParticiples",
        value: function value() {
          var e = this.getClauseText(),
              t = this.getParticiples().filter(function (t) {
            return !T(e, t, b);
          });
          this.setPassive(t.length > 0);
        }
      }]), n;
    }(g.languageProcessing.values.Clause),
        B = ["bli", "blir", "ble ", "blei", "blitt", "bli", "blivende", "blis", "er"],
        A = g.languageProcessing.createRegexFromArray,
        F = g.languageProcessing.getClauses,
        $ = {
      Clause: W,
      stopwords: h,
      auxiliaries: B,
      regexes: {
        auxiliaryRegex: A(B),
        stopwordRegex: A(h),
        stopCharacterRegex: /([:,])(?=[ \n\r\t'"+\-»«‹›<>])/gi
      }
    };

    function D(e) {
      return F(e, $);
    }

    var q = function (e) {
      l()(n, e);
      var t,
          r,
          d = (t = n, r = function () {
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
            d = k()(t);

        if (r) {
          var s = k()(this).constructor;
          e = Reflect.construct(d, arguments, s);
        } else e = d.apply(this, arguments);

        return o()(this, e);
      });

      function n(e) {
        var t;
        return s()(this, n), delete (t = d.call(this, e)).defaultResearches.getFleschReadingScore, Object.assign(t.config, {
          language: "nb",
          passiveConstructionType: "periphrastic",
          functionWords: y,
          firstWordExceptions: f,
          transitionWords: v,
          twoPartTransitionWords: j,
          stopWords: h
        }), Object.assign(t.helpers, {
          getStemmer: R,
          getClauses: D
        }), t;
      }

      return n;
    }(g.languageProcessing.AbstractResearcher);
  },
  5: function _(e, t, r) {
    var d = r(6)["default"],
        s = r(9);
    e.exports = function (e, t) {
      return !t || "object" !== d(t) && "function" != typeof t ? s(e) : t;
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
  7: function _(e, t) {
    function r(e, t) {
      for (var r = 0; r < t.length; r++) {
        var d = t[r];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(e, d.key, d);
      }
    }

    e.exports = function (e, t, d) {
      return t && r(e.prototype, t), d && r(e, d), e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  8: function _(e, t) {
    function r(t, d) {
      return e.exports = r = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(t, d);
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