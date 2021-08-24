"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var a = {};

  function n(l) {
    if (a[l]) return a[l].exports;
    var k = a[l] = {
      i: l,
      l: !1,
      exports: {}
    };
    return e[l].call(k.exports, k, k.exports, n), k.l = !0, k.exports;
  }

  return n.m = e, n.c = a, n.d = function (e, a, l) {
    n.o(e, a) || Object.defineProperty(e, a, {
      enumerable: !0,
      get: l
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, a) {
    if (1 & a && (e = n(e)), 8 & a) return e;
    if (4 & a && "object" == _typeof(e) && e && e.__esModule) return e;
    var l = Object.create(null);
    if (n.r(l), Object.defineProperty(l, "default", {
      enumerable: !0,
      value: e
    }), 2 & a && "string" != typeof e) for (var k in e) {
      n.d(l, k, function (a) {
        return e[a];
      }.bind(null, k));
    }
    return l;
  }, n.n = function (e) {
    var a = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(a, "a", a), a;
  }, n.o = function (e, a) {
    return Object.prototype.hasOwnProperty.call(e, a);
  }, n.p = "", n(n.s = 33);
}({
  0: function _(e, a) {
    e.exports = window.yoast.analysis;
  },
  1: function _(e, a) {
    function n(a) {
      return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(a);
    }

    e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  2: function _(e, a) {
    e.exports = window.lodash;
  },
  3: function _(e, a) {
    e.exports = function (e, a) {
      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  33: function _(e, a, n) {
    "use strict";

    n.r(a), n.d(a, "default", function () {
      return J;
    });

    var l = n(3),
        k = n.n(l),
        t = n(4),
        r = n.n(t),
        i = n(5),
        m = n.n(i),
        o = n(1),
        y = n.n(o),
        s = n(0),
        g = ["ahányszor", "ahelyett", "ahogy", "ahol", "ahonnan", "ahová", "akár", "akárcsak", "akkor", "alapvetően", "alighogy", "ám", "ámbár", "ámde", "ameddig", "amennyiben", "amennyire", "amennyiszer", "amíg", "amikor", "amikorra", "aminthogy", "amióta", "amire", "annálfogva", "annyira", "avagy", "azaz", "azazhogy", "azért", "azonban", "azonkívül", "azután", "bár", "befejezésül", "bizony", "csakhogy", "de", "dehát", "dehogy", "egybehangzóan", "egyidejűleg", "egyöntetűen", "egyöntetűleg", "ekképpen", "ellenben", "először", "előzőleg", "elsősorban", "ennélfogva", "eredményeképp", "eredményeképpen", "és", "eszerint", "ezért", "feltétlenül", "főként", "főleg", "függetlenül", "ha", "habár", "hanem", "hányszor", "harmadjára", "harmadszor", "hasonlóan", "hasonlóképpen", "hát", "hirtelen", "hirtelenjében", "hisz", "hiszen", "hogy", "hogyha", "hol", "holott", "honnan", "hová", "így", "illetőleg", "illetve", "immár", "is", "jóllehet", "kár", "kétségtelenül", "kifejezetten", "kiváltképp", "következésképpen", "legalábbis", "legfőképp", "maga", "máskülönben", "másodsorban", "másodszor", "meg", "mégis", "megkérdőjelezhetetlenül", "megkérdőjelezhetően", "mégpedig", "mégsem", "mennél", "mennyiszer", "merre", "mert", "merthogy", "midőn", "mielőtt", "míg", "mihelyt", "miként", "miképp", "mikor", "mikorra", "mindamellett", "mindazáltal", "mindazonáltal", "mindenekelőtt", "minél", "mint", "mintha", "minthogy", "mióta", "mire", "miután", "mivel", "mivelhogy", "nahát", "nehogy", "noha", "nos", "nyilvánvalóan", "óh", "összefoglalva", "összehasonlításképp", "összehasonlításképpen", "pedig", "például", "plusz", "s", "sajna", "satöbbi", "se", "sem", "sőt", "szintén", "tagadhatatlanul", "tehát", "továbbá", "tudniillik", "úgy", "ugyan", "ugyanis", "úgyhogy", "vagy", "vagyis", "valamennyi", "valamint", "valóban", "végezetül", "végül", "végülis", "viszont", "amerről", "hiába", "miközben", "egyszersmind", "csakugyan", "különben", "mialatt", "mintegy", "miszerint", "nemde", "ugye", "vajon", "semmint", "hacsak", "úgymint", "mintsem"],
        z = g.concat(["a továbbiakban", "abba, hogy", "abban, hogy", "abból, hogy", "addig, amíg", "addig, hogy", "addig, míg", "afelé, hogy", "ahelyett, hogy", "ahhoz, hogy", "ahogy fent látható", "ahogy írtam", "ahogy megmutattam", "ahogy megjegyeztem", "akként, hogy", "akkorra, hogy", "amiatt, hogy", "amellett, hogy", "amint azt megjegyeztük", "amint csak", "amint láthatjuk", "anélkül, hogy", "annak érdekében, hogy", "annak okáért", "annyi, hogy", "annyi, mint", "annyira, hogy", "annyira, mint", "arra, hogy", "arról, hogy", "attól fogva, hogy", "attól, hogy", "avégett, hogy", "avégre, hogy", "az ellen, hogy", "az első dolog", "az első dolog, amit meg kell jegyezni", "az iránt, hogy", "azelőtt, hogy", "azért, hogy", "azonos módon", "azok után, hogy", "azon, hogy", "azonkívül, hogy", "azóta, hogy", "azt követően", "aztán pedig", "azután, hogy", "azzal a feltétellel, hogy", "azzal, hogy", "bár igaz lehet", "ebből a célból", "ebből az okból", "előbb vagy utóbb", "ennek eredményeként", "ennek folytán", "ennek megfelelően", "éppen ellenkezőleg", "éppen úgy", "erre a célra", "ezen felül", "fenntartás nélkül", "ha egyébként", "ha egyszer", "ha különben", "ha ugyan", "hasonló módon", "hogy sem", "hogy sem mint", "hol hol", "holott pedig", "időről időre", "igaz, hogy", "így tehát", "ilyen körülmények között", "késedelem nélkül", "kétség nélkül", "más szóval", "más szavakkal", "másképpen fogalmazva", "még akkor is", "még ha", "mert különben", "mert tény, hogy", "mind mind", "mindaddig, amíg", "mindezek után", "mint sem hogy", "nem is beszélve", "nem különben", "nem úgy, mint", "oda, hogy", "oly módon, hogy", "sem hogy", "szem előtt tartva", "tény, hogy", "úgy, hogy", "úgy, mint", "ugyanazon okból", "ugyanolyan okból", "olybá tűnik", "egyszer s mindenkorra", "akkor, amikor", "azóta, mióta", "attól kezdve, mióta", "attól kezdve, hogy", "akkorra, amikorra", "akkor, ha", "azóta, amióta", "akkorra, amikorra", "addigra, amikorra", "akkor, hogyha", "akkor, ha", "úgy-ahogy", "mintsem hogy"]),
        v = [].concat(["a", "az", "egy"], ["egy", "kettő", "három", "négy", "öt", "hat", "hét", "nyolc", "kilenc", "tíz", "tizenegy", "tizenkettő", "tizenhárom", "tizennégy", "tizenöt", "tizenhat", "tizenhét", "tizennyolc", "tizenkilenc", "húsz", "száz", "ezer", "tízezer", "százezer", "millió", "félmillió", "egymillió"], ["első", "második", "harmadik", "negyedik", "ötödik", "hatodik", "hetedik", "nyolcadik", "kilencedik", "tizedik", "tizenegyedik", "tizenkettedik", "tizenharmadik", "tizennegyedik", "tizenötödik", "tizenhatodik", "tizenhetedik", "tizennyolcadik", "tizenkilencedik", "huszadik", "századik", "ezredik", "tízezredik", "százezredik", "milliomodik", "egymilliomodik"], ["én", "engem", "enyém", "nekem", "velem", "értem", "bennem", "belém", "belőlem", "nálam", "hozzám", "tőlem", "rajtam", "rám", "rólam", "te", "téged", "tiéd", "neked", "veled", "érted", "benned", "beléd", "belőled", "nálad", "hozzád", "tőled", "rajtad", "rád", "rólad", "ő", "őt", "övé", "neki", "vele", "érte", "benne", "bele", "belé", "nála", "hozzá", "tőle", "rajta", "rá", "róla", "mi", "minket", "mienk", "nekünk", "velünk", "értünk", "bennünk", "belénk", "nálunk", "hozzánk", "tőlünk", "rajtunk", "ránk", "rólunk", "ti", "titeket", "tiétek", "nektek", "veletek", "értetek", "bennetek", "belétek", "nálatok", "hozzátok", "tőletek", "rajtatok", "rátok", "rólatok", "ők", "őket", "övék", "nekik", "velük", "értük", "bennük", "beléjük", "náluk", "hozzájuk", "tőlük", "rajtuk", "rájuk", "róluk", "Ön", "Önt", "Öné", "Önnek", "Önnel", "Önért", "Önben", "Önbe", "Ön", "Önt", "Öné", "Önnek", "Önnel", "Önért", "Önben", "Önbe", "Önből", "Önnél", "Önhöz", "Öntől", "Önön", "Önre", "Önről", "Önök", "Önöket", "Önöké", "Önöknek", "Önökkel", "Önökért", "Önökben", "Önökbe", "Önökből", "Önöknél", "Önökhöz", "Önöktől", "Önökön", "Önökre", "Önökről", "ez", "emez", "ugyanez", "ezt", "emezt", "ugyanezt", "ezé", "emezé", "ugyanezé", "ennek", "emennek", "ugyanennek", "ezzel", "emezzel", "ugyanezzel", "ezért", "emezért", "ugyanezért", "ebben", "emebben", "ugyanebben", "ebbe", "emebbe", "ugyanebbe", "ebből", "emebből", "ugyanebből", "ennél", "emennél", "ugyanennél", "ehhez", "emehhez", "ugyanehhez", "ettől", "emettől", "ugyanettől", "ezen", "emezen", "ugyanezen", "erre", "emerre", "ugyanerre", "erről", "emerről", "ugyanerről", "eddig", "emeddig", "ugyaneddig", "ekkor", "emekkor", "ugyanekkor", "ezzé", "emezzé", "ugyanezzé", "ekként", "emekként", "ugyanekként", "az", "amaz", "ugyanaz", "azt", "amazt", "ugyanazt", "azé", "amazé", "ugyanazé", "annak", "amannak", "ugyanannak", "azzal", "amazzal", "ugyanazzal", "azért", "amazért", "ugyanazért", "abban", "amabban", "ugyanabban", "abba", "amabba", "ugyanabba", "abból", "amabból", "ugyanabból", "annál", "amannál", "ugyanannál", "ahhoz", "amahhoz", "ugyanahhoz", "attól", "amattól", "ugyanattól", "azon", "amazon", "ugyanazon", "arra", "amarra", "ugyanarra", "arról", "amarról", "ugyanarról", "addig", "amaddig", "ugyanaddig", "akkor", "amakkor", "ugyanakkor", "azzá", "amazzá", "ugyanazzá", "akként", "amakként", "ugyanakként", "ilyen", "emilyen", "ugyanilyen", "ilyet", "emilyet", "ugyanilyet", "ilyennek", "emilyennek", "ugyanilyennek", "ilyennel", "emilyennel", "ugyanilyennel", "ilyenért", "emilyenért", "ugyanilyenért", "ilyenben", "emilyenben", "ugyanilyenben", "ilyenbe", "emilyenbe", "ugyanilyenbe", "ilyenből", "emilyenből", "ugyanilyenből", "ilyennél", "emilyennél", "ugyanilyennél", "ilyenhez", "emilyenhez", "ugyanilyenhez", "ilyentől", "emilyentől", "ugyanilyentől", "ilyenen", "emilyenen", "ugyanilyenen", "ilyenre", "emilyenre", "ugyanilyenre", "ilyenről", "emilyenről", "ugyanilyenről", "ilyenkor", "emilyenkor", "ugyanilyenkor", "ilyenné", "emilyenné", "ugyanilyenné", "olyan", "amolyan", "ugyanolyan", "olyat", "amolyat", "ugyanolyat", "olyannak", "amolyannak", "ugyanolyannak", "olyannal", "amolyannal", "ugyanolyannal", "olyanért", "amolyanért", "ugyanolyanért", "olyanban", "amolyanban", "ugyanolyanban", "olyanba", "amolyanba", "ugyanolyanba", "olyanból", "amolyanból", "ugyanolyanból", "olyannál", "amolyannál", "ugyanolyannál", "olyanhoz", "amolyanhoz", "ugyanolyanhoz", "olyantól", "amolyantól", "ugyanolyantól", "olyanon", "amolyanon", "ugyanolyanon", "olyanra", "amolyanra", "ugyanolyanra", "olyanról", "amolyanról", "ugyanolyanról", "olyankor", "amolyankor", "ugyanolyankor", "olyanná", "amolyanná", "ugyanolyanná", "ennyi", "emennyi", "ugyanennyi", "ennyit", "emennyit", "ugyanennyit", "ennyinek", "emennyinek", "ugyanennyinek", "ennyivel", "emennyivel", "ugyanennyivel", "ennyiért", "emennyiért", "ugyanennyiért", "ennyiben", "emennyiben", "ugyanennyiben", "ennyibe", "emennyibe", "ugyanennyibe", "ennyiből", "emennyiből", "ugyanennyiből", "ennyinél", "emennyinél", "ugyanennyinél", "ennyihez", "emennyihez", "ugyanennyihez", "ennyitől", "emennyitől", "ugyanennyitől", "ennyin", "emennyin", "ugyanennyin", "ennyire", "emennyire", "ugyenennyire", "ennyiről", "emennyiről", "ugyanennyiről", "ennyivé", "emennyivé", "ugyanennyivé", "annyi", "amannyi", "ugyanannyi", "annyit", "amannyit", "ugyanannyit", "annyinak", "amannyinak", "ugyanannyinak", "annyival", "amannyival", "ugyanannyival", "annyiért", "amannyiért", "ugyanannyiért", "annyiban", "amannyiban", "ugyanannyiban", "annyiba", "amannyiba", "ugyanannyiba", "annyiból", "amannyiból", "ugyanannyiból", "annyinál", "amannyinál", "ugyanannyinál", "annyihoz", "amannyihoz", "ugyanannyihoz", "annyitól", "amannyitól", "ugyananyitól", "annyin", "amannyin", "ugyanannyin", "annyira", "amannyira", "ugyanannyira", "annyiról", "amannyiról", "ugyanannyiról", "annyivá", "amannyivá", "ugyanannyivá", "így", "emígy", "ugyanígy", "úgy", "amúgy", "ugyanúgy", "itt", "ott", "ugyanitt", "ogyanott", "ide", "oda", "ugyanide", "ugyanoda", "amoda", "emide", "innen", "onnan", "ugyaninnen", "ogyanonnan", "amonnan", "eminnen", "eddig", "addig", "ezután", "azután", "ezelőtt", "azelőtt", "ugyaneddig", "ugyanaddig", "emeddig", "amaddig", "ekkora", "ekkorát", "ekkorának", "ekkorával", "ekkoráért", "ekkorában", "ekkorába", "ekkorából", "ekkoránál", "ekkorához", "ekkorától", "ekkorán", "ekkorára", "ekkoráról", "ekkorává", "akkora", "akkorát", "akkorának", "akkorával", "akkoráért", "akkorában", "akkorába", "akkorából", "akkoránál", "akkorához", "akkorától", "akkorán", "akkorára", "akkoráról", "akkorává", "ekképpen", "akképpen", "ezek", "emezek", "ugyanezek", "ezeket", "emezeket", "ugyanezeket", "ezeké", "emezeké", "ugyanezeké", "ezeknek", "emezeknek", "ugyanezeknek", "ezekkel", "emezekkel", "ugyanezekkel", "ezekért", "emezekért", "ugyanezekért", "ezekben", "emezekben", "ugyanezekben", "ezekbe", "emezekbe", "ugyanezekbe", "ezekből", "emezekből", "ugyanezekből", "ezeknél", "emezeknél", "ugyanezeknél", "ezekhez", "emezekhez", "ugyanezekhez", "ezektől", "emezektől", "ugyanezektől", "ezekre", "emezekre", "ugyanezekre", "ezekről", "emezekről", "ugyanezekről", "ezekig", "emezekig", "ugyanezekig", "ezekké", "emezekké", "ugyanezekké", "ezekként", "emezekként", "ugyanezekként", "azok", "amazok", "ugyanazok", "azokat", "amazokat", "ugyanazokat", "azoké", "amazoké", "ugyanazoké", "azoknak", "amazoknak", "ugyanazoknak", "azokkal", "amazokkal", "ugyanazokkal", "azokért", "amazokért", "ugyanazokért", "azokban", "amazokban", "ugyanazokban", "azokba", "amazokba", "ugyanazokba", "azokból", "amazokból", "ugyanazokból", "azoknál", "amazoknál", "ugyanazoknál", "azokhoz", "amazokhoz", "ugyanazokhoz", "azoktól", "amazoktól", "ugyanazoktól", "azokra", "amazokra", "ugyanazokra", "azokról", "amazokról", "ugyanazokról", "azokig", "amazokig", "ugyanazokig", "azokká", "amazokká", "ugyanazokká", "ilyenek", "emilyenek", "ugyanilyenek", "ilyeneket", "emilyeneket", "ugyanilyeneket", "ilyeneknek", "emilyeneknek", "ugyanilyeneknek", "ilyenekkel", "emilyenekkel", "ugyanilyenekkel", "ilyenekért", "emilyenekért", "ugyanilyenekért", "ilyenekben", "emilyenekben", "ugyanilyenekben", "ilyenekbe", "emilyenekbe", "ugyanilyenekbe", "ilyenekből", "emilyenekből", "ugyanilyenekből", "ilyeneknél", "emilyeneknél", "ugyanilyeneknél", "ilyenekhez", "emilyenekhez", "ugyanilyenekhez", "ilyenektől", "emilyenektől", "ugyanilyenektől", "ilyeneken", "emilyeneken", "ugyanilyeneken", "ilyenekre", "emilyenekre", "ugyanilyenekre", "ilyenekről", "emilyenekről", "ugyanilyenekről", "ilyenekké", "emilyenekké", "ugyanilyenekké", "olyanok", "amolyanok", "ugyanolyanok", "olyanokat", "amolyanokat", "ugyanolyanokat", "olyanoknak", "amolyanoknak", "ugyanolyanoknak", "olyanokkal", "amolyanokkal", "ugyanolyanokkal", "olyanokért", "amolyanokért", "ugyanolyanokért", "olyanokban", "amolyanokban", "ugyanolyanokban", "olyanokba", "amolyanokba", "ugyanolyanokba", "olyanokból", "amolyanokból", "ugyanolyanokból", "olyanoknál", "amolyanoknál", "ugyanolyanoknál", "olyanokhoz", "amolyanokhoz", "ugyanolyanokhoz", "olyanoktól", "amolyanoktól", "ugyanolyanoktól", "olyanokon", "amolyanokon", "ugyanolyanokon", "olyanokra", "amolyanokra", "ugyanolyanokra", "olyanokról", "amolyanokról", "ugyanolyanokról", "olyanokká", "amolyanokká", "ugyanolyanokká", "aki", "akit", "akié", "akinek", "akivel", "akiért", "akiben", "akibe", "akiből", "akinél", "akihez", "akitől", "akin", "akire", "akiről", "akivé", "ami", "amit", "amié", "aminek", "amivel", "amiért", "amiben", "amibe", "amiből", "aminél", "amihez", "amitől", "amin", "amire", "amiről", "amivé", "amilyen", "amilyet", "amilyennek", "amilyennel", "amilyenért", "amilyenben", "amilyenbe", "amilyenből", "amilyennél", "amilyenhez", "amilyentől", "amilyenen", "amilyenre", "amilyenről", "amilyenné", "amekkora", "amekkorát", "amekkorának", "amekkorával", "amekkoráért", "amekkorában", "amekkorába", "amekkorából", "amekkoránál", "amekkorához", "amekkorától", "amekkorán", "amekkorára", "amekkoráról", "amekkorává", "amely", "amelyet", "amelynek", "amellyel", "amelyért", "amelyben", "amelybe", "amelyből", "amelynél", "amelyhez", "amelytől", "amelyen", "amelyre", "amelyről", "amellyé", "ahány", "ahányat", "ahánynak", "ahánnyal", "ahányért", "ahányban", "ahányba", "ahányból", "ahánynál", "ahányhoz", "ahánytól", "ahányan", "ahányra", "ahányról", "ahánnyá", "amennyi", "amennyit", "amennyinek", "amennyivel", "amennyiért", "amennyiben", "amennyibe", "amennyiből", "amennyinél", "amennyihez", "amennyitől", "amennyin", "amennyire", "amennyiről", "amennyivé", "ahányadik", "ahányadikat", "ahányadiknak", "ahányadika", "ahányadikért", "ahányadikban", "ahányadikba", "ahányadikból", "ahányadiknál", "ahányadikhoz", "ahányadiktól", "ahányadikon", "ahányadikra", "ahányadikról", "ahányadikká", "ahová", "ahonnan", "ahonnantól", "amerre", "amerről", "ahogy", "ahogyan", "amiért", "amikor", "amikortól", "amikorra", "akik", "akiket", "akiké", "akiknek", "akikkel", "akikért", "akikben", "akikbe", "akikból", "akiknél", "akikhez", "akiktől", "akiken", "akikre", "akikről", "akikké", "amik", "amiket", "amiké", "amiknek", "amikkel", "amikért", "amikben", "amikbe", "amikból", "amiknél", "amikhez", "amiktől", "amiken", "amikre", "amikről", "amikké", "amilyenek", "amilyeneket", "amilyeneknek", "amilyenekkel", "amilyenekért", "amilyenekben", "amilyenekbe", "amilyenekből", "amilyeneknél", "amilyenekhez", "amilyenektől", "amilyeneken", "amilyenekre", "amilyenekről", "amekkorák", "amekkorákat", "amekkoráknak", "amekkorákkal", "amekkorákért", "amekkorákban", "amekkorákba", "amekkorákból", "amekkoráknál", "amekkorákhoz", "amekkoráktól", "amekkorákon", "amekkorákra", "amekkorákról", "amekkorákká", "amelyek", "amelyeket", "amelyeknek", "amelyekkel", "amelyekért", "amelyekben", "amelyekbe", "amelyekből", "amelyeknél", "amelyekhez", "amelyektől", "amelyeken", "amelyekre", "amelyekről", "ahányak", "ahányakat", "ahányaknak", "ahányakkal", "ahányakért", "ahányakban", "ahányakba", "ahányakból", "ahányaknál", "ahányakhoz", "ahányaktól", "ahányakon", "ahányakra", "ahányakról", "ahányakká", "amennyik", "amennyiket", "amennyiknek", "amennyikkel", "amennyikért", "amennyikben", "amennyikbe", "amennyikből", "amennyiknél", "amennyikhez", "amennyiktől", "amennyiken", "amennyikre", "amennyikről", "amennyikké", "ahányadikak", "ahányadikat", "ahányadiknak", "ahányadikkal", "ahányadikért", "ahányadikban", "ahányadikba", "ahányadikból", "ahányadiknál", "ahányadikhoz", "ahányadiktól", "ahányadikon", "ahányadikra", "ahányadikról", "ahányadikká", "amikért", "egymás", "egymást", "egymásé", "egymásnak", "egymással", "egymásért", "egymásban", "egymásba", "egymásból", "egymásnál", "egymáshoz", "egymástól", "egymáson", "egymásra", "egymásról", "egymássá"], ["ki", "kit", "kié", "kinek", "kivel", "kiért", "kiben", "kibe", "kiből", "kinél", "kihez", "kitől", "kin", "kire", "kiről", "kicsoda", "kicsodát", "kicsodának", "kicsodával", "kicsodáért", "kicsodában", "kicsodába", "kicsodából", "kicsodánál", "kicsodához", "kicsodától", "kicsodán", "kicsodára", "kicsodáról", "mi", "mit", "minek", "mivel", "miért", "miben", "mibe", "miből", "minél", "mihez", "mitől", "min", "mire", "miről", "micsoda", "micsodát", "micsodának", "micsodával", "micsodáért", "micsodában", "micsodába", "micsodából", "micsodánál", "micsodához", "micsodától", "micsodán", "micsodára", "micsodáról", "milyen", "milyet", "milyennek", "milyennel", "milyenért", "milyenben", "milyenbe", "milyenből", "milyennél", "milyenhez", "milyentől", "milyenen", "milyenre", "milyenről", "mekkora", "mekkorát", "mekkorának", "mekkorával", "mekkoráért", "mekkorában", "mekkorába", "mekkorából", "mekkoránál", "mekkorához", "mekkorától", "mekkorán", "mekkorára", "mekkoráról", "miféle", "mifélét", "mifélének", "mifélével", "miféléért", "mifélében", "mifélébe", "miféléből", "mifélénél", "miféléhez", "mifélétől", "mifélén", "mifélére", "miféléről", "melyik", "melyiket", "melyiknek", "melyikkel", "melyikért", "melyikben", "melyikbe", "melyikből", "melyiknél", "melyikhez", "melyiktől", "melyiken", "melyikre", "melyikről", "hány", "hányat", "hánynak", "hánnyal", "hányért", "hányban", "hányba", "hányból", "hánynál", "hányhoz", "hánytól", "hányon", "hányra", "hányról", "mennyi", "mennyit", "mennyinek", "mennyivel", "mennyiért", "mennyiben", "mennyibe", "mennyiből", "mennyinél", "mennyihez", "mennyitől", "mennyin", "mennyire", "mennyiről", "hányadik", "hányadikat", "hányadiknak", "hányadikkal", "hányadikért", "hányadikban", "hányadikba", "hányadikból", "hányadiknál", "hányadikhoz", "hányadiktól", "hányadikon", "hányadikra", "hányadikról", "hol", "hová", "honnan", "honnantól", "honnanról", "merre", "mettől", "merről", "meddig", "meddigtől", "meddigről", "mióta", "hogyan", "miként", "kik", "kiket", "kiknek", "kikkel", "kikért", "kikben", "kikbe", "kikből", "kiknél", "kikhez", "kiktől", "kiken", "kikre", "kikről", "kicsodák", "kicsodákat", "kicsodáknak", "kicsodákkal", "kicsodákért", "kicsodákban", "kicsodákba", "kicsodákból", "kicsodáknál", "kicsodákhoz", "kicsodáktól", "kicsodákon", "kicsodákra", "kicsodáról", "mik", "miket", "miknek", "mikkel", "mikért", "mikben", "mikbe", "mikből", "miknél", "mikhez", "miktől", "miken", "mikre", "mikről", "micsodák", "micsodákat", "micsodáknak", "micsodákkal", "micsodákért", "micsodákban", "micsodákba", "micsodákból", "micsodáknál", "micsodákhoz", "micsodáktól", "micsodákon", "micsodákra", "micsodákról", "milyenek", "milyeneket", "milyeneknek", "milyenekkel", "milyenekért", "milyenekben", "milyenekbe", "milyenekből", "milyeneknél", "milyenekhez", "milyenektől", "milyeneken", "milyenekre", "milyenekről", "mekkorák", "mekkorákat", "mekkoráknak", "mekkorákkal", "mekkorákért", "mekkorákban", "mekkorákba", "mekkorákból", "mekkoráknál", "mekkorákhoz", "mekkoráktól", "mekkorákon", "mekkorákra", "mekkorákról", "mifélék", "miféléket", "miféléknek", "mifélékkel", "mifélékért", "mifélékben", "mifélékbe", "mifélékből", "miféléknél", "mifélékhez", "miféléktől", "miféléken", "mifélékre", "mifélékről", "melyikek", "melyikeket", "melyikeknek", "melyikekkel", "melyikekért", "melyikekben", "melyikekbe", "melyikekből", "melyikeknél", "melyikekhez", "melyikektől", "melyikeken", "melyikekre", "melyikekről", "hányak", "hányakat", "hányaknak", "hányakkal", "hányakért", "hányakban", "hányakba", "hányakból", "hányaknál", "hányakhoz", "hányaktól", "hányakon", "hányakra", "hányakról", "mennyik", "mennyiket", "mennyiknek", "mennyikkel", "mennyikért", "mennyikben", "mennyikbe", "mennyikből", "mennyiknél", "mennyikhez", "mennyiktől", "mennyiken", "mennyikre", "mennyikről", "hányadikak", "hányadikakat", "hányadikaknak", "hányadikakkal", "hányadikakért", "hányadikakban", "hányadikakba", "hányadikakból", "hányadikaknál", "hányadikakhoz", "hányadikaktól", "hányadikakon", "hányadikakra", "hányadikakról"], ["sok", "kevés", "elég", "jónéhány", "néhány", "rengeteg", "töredék", "temérdek", "tengernyi", "számtalan", "számos", "elegendő", "kevéske", "egy csomó", "egy rakás", "egy halom"], ["magam", "magamat", "magamé", "magamnak", "magammal", "magamért", "magamban", "magamba", "magamból", "magamnál", "magamhoz", "magamtól", "magamon", "magamra", "magamról", "magammá", "magad", "magadat", "magadé", "magadnak", "magaddal", "magadért", "magadban", "magadba", "magadból", "magadnál", "magadhoz", "magadtól", "magadon", "magadra", "magadról", "magaddá", "maga", "magát", "magáé", "magának", "magával", "magáért", "magában", "magába", "magából", "magánál", "magához", "magától", "magán", "magára", "magáról", "magává", "magunk", "magunkat", "magunké", "magunknak", "magunkkal", "magunkért", "magunkban", "magunkba", "magunkból", "magunknál", "magunkhoz", "magunktól", "magunkon", "magunkra", "magunkról", "magunkká", "magatok", "magatokat", "magatoké", "magatoknak", "magatokkal", "magatokért", "magatokban", "magatokba", "magatokból", "magatoknál", "magatokhoz", "magatoktól", "magatokon", "magatokra", "magatokról", "magatokká", "maguk", "magukat", "maguké", "maguknak", "magukkal", "magukért", "magukban", "magukba", "magukból", "maguknál", "magukhoz", "maguktól", "magukon", "magukra", "magukról", "magukká"], ["valaki", "valakit", "valakié", "valakinek", "valakivel", "valakiért", "valakiben", "valakibe", "valakiből", "valakinél", "valakihez", "valakitől", "valakin", "valakire", "valakiről", "valakivé", "valami", "valamit", "valamié", "valaminek", "valamivel", "valamiért", "valamiben", "valamibe", "valamiből", "valaminél", "valamihez", "valamitől", "valamin", "valamire", "valamiről", "valamivé", "valamilyen", "valamilyet", "valamilyennek", "valamilyennel", "valamilyenért", "valamilyenben", "valamilyenbe", "valamilyenből", "valamilyennél", "valamilyenhez", "valamilyentől", "valamilyenen", "valamilyenre", "valamilyenről", "valaminő", "valamelyes", "valamelyest", "valamekkora", "valamekkorát", "valamekkorának", "valamekkorával", "valamekkoráért", "valamekkorában", "valamekkorába", "valamekkorából", "valamekkoránál", "valamekkorához", "valamekkorától", "valamekkorán", "valamekkorára", "valamekkoráról", "valamekkorává", "valamely", "valamelyet", "valamelynek", "valamellyel", "valamelyért", "valamelyben", "valamelybe", "valamelyből", "valamelynél", "valamelyhez", "valamelytől", "valamelyen", "valamelyre", "valamelyről", "valamellyé", "valamelyik", "valamelyiket", "valemelyiknek", "valamelyikkel", "valamelyikért", "valamelyikben", "valamelyikbe", "valamelyikből", "valamelyiknél", "valamelyikhez", "valamelyiktől", "valamelyiken", "valamelyikre", "valamelyikről", "valamelyikké", "valamiféle", "valamifélét", "valamifélének", "valamifélével", "valamiféléért", "valamifélében", "valamifélébe", "valamiféléből", "valamifélénél", "valamiféléhez", "valamifélétől", "valamifélén", "valamifélére", "valamiféléről", "valamennyi", "valamennyit", "valamennyié", "valamennyinek", "valamennyivel", "valamennyiért", "valamennyiben", "valamennyibe", "valamennyiből", "valamennyinél", "valamennyihez", "valamennyitől", "valamennyin", "valamennyire", "valamennyiről", "valamennyivé", "valahány", "valahányat", "valahánynak", "valahánnyal", "valahányért", "valahányban", "valahányba", "valahányból", "valahánynál", "valahányhoz", "valahánytól", "valahányon", "valahányra", "valahányról", "valahánnyá", "némely", "némelyet", "némelynek", "némelynél", "némelyért", "némelyben", "némelybe", "némelyből", "némelynél", "némelyhez", "némelytől", "némelyen", "némelyre", "némelyről", "némi", "némelyik", "némelyiket", "némelyiknek", "némelyikkel", "némelyikért", "némelyikben", "némelyikbe", "némelyikből", "némelyiknél", "némelyikhez", "némelyiktől", "némelyiken", "némelyikre", "némelyikről", "néminemű", "néhány", "néhányat", "néhánynak", "néhánnyal", "néhányért", "néhányban", "néhányba", "néhányból", "néhánynál", "néhányhoz", "néhánytól", "néhányon", "néhányra", "néhányról", "valahol", "valahová", "valamerre", "valahonnan", "valamikor", "valaha", "valaha", "valahogyan", "valamiképpen", "valamiért", "néhol", "néha", "némelykor", "némiképpen", "némileg", "mindenki", "mindenféle", "mindegyik", "mindahány", "mindenhol", "mindenütt", "mindenhová", "mindenhonnan", "mindenkor", "mindenhogyan", "mindenképpen", "bárki", "bármi", "bármelyik", "bármilyen", "bármennyi", "bárhol", "bárhová", "bárhonnan", "bármikor", "bármeddig", "bárhogyan", "akárki", "akármi", "akármelyik", "akármilyen", "akármennyi", "akárhány", "akárhol", "akárhová", "akárhonnan", "akármikor", "akárhogyan", "senki", "semmi", "semmilyen", "semennyi", "sehány", "sehol", "sehová", "sehonnan", "semmikor", "sehogy", "semmiképp", "valakik", "valakiket", "valakiké", "valakiknek", "valakikkel", "valakikért", "valakikben", "valakikbe", "valakikből", "valakiknél", "valakikhez", "valakiktől", "valakiken", "valakikre", "valakikről", "valakikké", "valamik", "valamiket", "valamiké", "valamiknek", "valamikkel", "valamikért", "valamikben", "valamikbe", "valamikből", "valamiknél", "valamikhez", "valamiktől", "valamiken", "valamikre", "valamikről", "valamikké", "valamilyenek", "valamilyeneket", "valamilyeneknek", "valamilyenekkel", "valamilyenekért", "valamilyenekben", "valamilyenekbe", "valamilyenekből", "valamilyeneknél", "valamilyenekhez", "valamilyenektől", "valamilyeneken", "valamilyenekre", "valamilyenekről", "valamilyenekké", "valaminők", "valamekkorák", "valamekkorákat", "valamekkoráknak", "valamekkorákkal", "valamekkorákért", "valamekkorákban", "valamekkorákba", "valamekkorákból", "valamekkoráknál", "valamekkorákhoz", "valamekkoráktól", "valamekkorákon", "valamekkorákra", "valamekkorákról", "valamelyek", "valamelyeket", "valamelyeknek", "valamelyekkel", "valamelyekért", "valamelyekben", "valamelyekbe", "valamelyekből", "valamelyeknél", "valamelyekhez", "valamelyektől", "valamelyeken", "valamelyekre", "valamelyekről", "valamelyekké", "valamelyikek", "valamelyikeket", "valamelyikeknek", "valamelyikekkel", "valamelyikekért", "valamelyikekben", "valamelyikekbe", "valamelyikekből", "valamelyikeknél", "valamelyikekhez", "valamelyikektől", "valamelyikeken", "valamelyikekre", "valamelyikekről", "valamifélék", "valamiféléket", "valamiféléknek", "valamifélékkel", "valamifélékért", "valamifélékben", "valamifélékbe", "valamifélékből", "valamiféléknél", "valamifélékhez", "valamiféléktől", "valamiféléken", "valamifélékre", "valamifélékről", "valamennyik", "valamennyiket", "valamennyiknek", "valamennyikkel", "valamennyikért", "valamennyikben", "valamennyikbe", "valamennyikből", "valamennyiknél", "valamennyikhez", "valamennyiktől", "valamennyiken", "valamennyikre", "valamennyikről", "valahányak", "valahányakat", "valahányaknak", "valahányakkal", "valahányakért", "valahányakban", "valahányakba", "valahányakból", "valahányaknál", "valahányakhoz", "valahányaktól", "valahányakon", "valahányakra", "valahányakról", "némelyek", "némelyeket", "némelyeknek", "némelyekkel", "némelyekért", "némelyekben", "némelyekbe", "némelyekből", "némelyeknél", "némelyekhez", "némelyektől", "némelyeken", "némelyekre", "némelyekről", "némelyikek", "némelyikeket", "némelyikeknek", "némelyikekkel", "némelyikekért", "némelyikekben", "némelyikekbe", "némelyikekből", "némelyikeknél", "némelyikekhez", "némelyikektől", "némelyikeken", "némelyikekre", "némelyikekről", "néhányak", "néhányakat", "néhányaknak", "néhányakkal", "néhányakért", "néhányakban", "néhányakba", "néhányakból", "néhányaknál", "néhányakhoz", "néhányaktól", "néhányakon", "néhányakra", "néhányakról"], ["előtt", "elé", "elől", "alatt", "alá", "alól", "túl", "alatt", "belül", "előtt", "fogva", "hosszat", "múlva", "óta", "tájt", "ellen", "helyett", "iránt", "miatt", "nélkül", "részére", "számára", "végett", "között"], ["és", "s", "se", "sem", "vagy", "is", "de"], ["mond", "bejelent", "megerősít", "kijelent", "javasol", "említ", "tájékoztat", "értesít", "kérdez", "beszél", "megkérdez", "állít", "elmagyaráz", "magyaráz", "gondol", "hisz", "megtárgyal", "tárgyal", "vitat", "megvitat", "ért", "megért", "elmond", "elmesél", "tud", "megtud", "megbeszél", "megmond", "megmagyaráz"], ["alig", "kissé", "különösen", "nagyon", "teljesen", "túl", "túlságosan", "kevésbé", "nagyrészt", "kicsit", "picit", "szörnyen", "borzasztóan", "iszonyatosan", "irtó", "irtózatosan", "komolyan", "súlyosan", "könnyedén", "nehezen"], ["fog", "volna", "akar", "bír", "kell", "kíván", "látszik", "lehet", "tud", "szabad", "tetszik", "méltóztatik", "szokott"], ["nagy", "kicsi", "gyors", "lassú", "jó", "rossz", "drága", "olcsó", "vastag", "vékony", "keskeny", "széles", "puha", "hangos", "halk", "intelligens", "buta", "nedves", "száraz", "nehéz", "könnyű", "kemény", "lágy", "sekély", "mély", "gyönge", "erős", "gazdag", "szegény", "fiatal", "öreg", "hosszú", "rövid", "magas", "alacsony", "bőkezű", "fukar", "igaz", "hamis", "gyönyörű", "csúnya", "új", "régi", "boldog", "szomorú", "idős", "gyenge", "biztonságos", "veszélyes", "korán", "későn", "világos", "sötét", "nyitva", "zárva", "szoros", "laza", "teli", "üres", "sok", "kevés", "élő", "halott", "meleg", "hideg", "érdekes", "unalmas", "szerencsés", "szerencsétlen", "fontos", "lényegtelen", "messze", "közel", "tiszta", "piszkos", "kedves", "gonosz", "kellemes", "kellemetlen", "kiváló", "borzalmas", "normális", "szép", "nagyon", "kicsit", "gyorsan", "lassan", "jól", "rosszul", "drágán", "olcsón", "hangosan", "halkan", "nehezen", "könnyen", "gyengén", "erősen", "gazdagon", "fiatalon", "öreg", "hosszan", "röviden", "magasan", "alacsonyan", "bőkezűen", "gyönyörűen", "csúnyán", "boldogan", "szomorúan", "gyengéden", "biztonságosan", "veszélyesen", "világosan", "szorosan", "lazán", "sokan", "kevesen", "élve", "melegen", "hidegen", "érdekesen", "unalmasan", "szerencsésen", "szerencsétlenül", "tisztán", "piszkosan", "kedvesen", "gonoszan", "kellemesen", "kellemetlenül", "kiválóan", "borzalmasan", "normálisan", "szépen"], ["ó", "óh", "jaj", "a kutyafáját", "a fenébe", "a csudába", "a francba", "atyaég", "atyavilág", "azta", "aztamindenit", "juj", "juhú", "éljen", "jé", "hű", "hú", "ajjaj", "pszt", "csitt", "hess", "hé", "ej", "ejnye", "na", "nicsak", "nocsak", "natessék", "nahát", "rajta", "hajrá", "juhú", "teringettét", "nosza", "uccu", "csitt", "kuss", "dirr", "durr"], ["liter", "l", "deciliter", "dl", "milliliter", "gramm", "g", "dekagramm", "dkg", "kilogramm", "kg", "milligramm", "mg", "tucat", "centiliter", "cl", "méter", "m", "deciméter", "dm", "centiméter", "cm", "milliméter", "mm", "evőkanál", "ek.", "mokkáskanál", "mk.", "kávéskanál", "kk.", "gyermekkanál", "gyk.", "kávéscsésze", "kcs.", "teáscsésze", "tcs.", "csésze", "csé.", "bögre", "bgr.", "mélytányér", "ujjnyi", "csomag", "gerezd", "csokor"], ["másodperc", "perc", "óra", "nap", "hét", "hónap", "év", "évtized", "évszázad", "évezred", "ma", "holnap", "tegnap", "jövő héten", "jövő hónapban", "jövő évben", "múlt héten", "múlt hónapban", "múlt évben", "tavaly", "jövőre", "reggel", "délben", "este", "éjszaka", "hajnalban", "délután", "délelőtt"], ["dolog", "izé", "valami", "személy", "ember", "alkalom", "eset", "ügy", "tárgy", "valamicsoda", "téma", "ötlet"], ["stb.", "fél", "harmad", "negyed", "ötöd", "hatod", "heted", "nyolcad", "kilenced", "tized", "egyharmad", "egynegyed", "egyötöd", "egyhatod", "egyheted", "egynyolcad", "egykilenced", "egytized", "század", "ezred"], g),
        h = [["nemcsak", "hanem", "is"], ["ahogy", "akkor"], ["ahogy", "azonnal"], ["ahogy", "azután"], ["ahogy", "máris"], ["ahogy", "nyomban"], ["ahogy", "tüstént"], ["akkor", "amikor"], ["akkor", "ha"], ["akkor", "hogy"], ["akkor", "hogyha"], ["akkor", "mikor"], ["akkorra", "amikorra"], ["akkorra", "mikorra"], ["akkorra", "mire"], ["akkortól", "amikor"], ["akkortól", "mikor"], ["alighogy", "máris"], ["alighogy", "nyomban"], ["alighogy", "tüstént"], ["addig", "ameddig"], ["ameddig", "addig"], ["abba", "hogy"], ["abban", "hogy"], ["abból", "hogy"], ["addig", "amíg"], ["addig", "hogy"], ["addig", "míg"], ["afelé", "hogy"], ["ahelyett", "hogy"], ["ahhoz", "hogy"], ["akként", "hogy"], ["akkorra", "hogy"], ["amiatt", "hogy"], ["amellett", "hogy"], ["anélkül", "hogy"], ["annyi", "hogy"], ["annyi", "mint"], ["annyira", "hogy"], ["annyira", "mint"], ["arra", "hogy"], ["arról", "hogy"], ["attól fogva", "hogy"], ["attól", "hogy"], ["avégett", "hogy"], ["avégre", "hogy"], ["az ellen", "hogy"], ["az iránt", "hogy"], ["azelőtt", "hogy"], ["azért", "hogy"], ["azon", "hogy"], ["azonkívül", "hogy"], ["azóta", "hogy"], ["azután", "hogy"], ["azzal", "hogy"], ["hol", "hol"], ["igaz", "hogy"], ["mind", "mind"], ["nem úgy", "mint"], ["oly módon", "hogy"], ["inkább", "semhogy"], ["úgy", "hogy"], ["úgy", "mint"], ["vagy", "vagy"], ["se", "se"], ["sem", "sem"], ["is", "is"], ["akár", "akár"], ["is", "meg"], ["nem", "hanem"], ["egyrészt", "másrészt"], ["minél", "annál"], ["amíg", "addig"], ["amíg", "addigra"], ["amikor", "akkor"], ["akkor", "amikor"], ["amikor", "aközben"], ["amikor", "azalatt"], ["addigra", "amikorra"], ["amikorra", "addigra"], ["amikorra", "akkorra"], ["amint", "akkor"], ["amint", "azonnal"], ["amint", "máris"], ["amint", "nyomban"], ["amint", "tüstént"], ["amióta", "attól kezdve"], ["azóta", "amióta"], ["amióta", "azóta"], ["amire", "addig"], ["amire", "addigra"], ["azóta", "hogy"], ["ha", "akkor"], ["hogyha", "akkor"], ["is", "is"], ["azalatt", "mialatt"], ["mialatt", "azalatt"], ["mielőtt", "azelőtt"], ["azelőtt", "mielőtt"], ["mihelyt", "azonnal"], ["mihelyt", "máris"], ["mihelyt", "nyomban"], ["mihelyt", "tüstént"], ["mikor", "akkor"], ["mikor", "aközben"], ["mikor", "azalatt"], ["mikor", "azután"], ["mikorra", "addigra"], ["akkorra", "mikorra"], ["mikorra", "akkorra"], ["miközben", "azalatt"], ["mióta", "attól kezdve"], ["mire", "addigra"], ["miután", "azután"], ["attól kezdve", "mióta"], ["mióta", "azóta"], ["azóta", "mióta"], ["mire", "addig"], ["addigra", "mire"], ["azután", "miután"], ["nemcsak", "hanem"], ["sem", "sem"], ["vagy", "vagy"]],
        d = ["az", "a", "egy", "nulla", "egy", "kettő", "kettő", "három", "négy", "öt", "hat", "hét", "nyolc", "kilenc", "tíz", "száz", "ezer", "és", "se", "sem", "vagy", "de", "aztán", "ezután", "azután", "majd", "ezek után", "nagyon", "kicsit", "nagy", "kevés", "sok", "sokan", "kevesen", "jól", "ez", "ezek", "az", "azok", "néhány", "aki", "ami", "én", "mi", "ő", "ők", "engem", "nekem", "velem", "nálam", "hozzám", "tőlem", "rajtam", "rám", "rólam", "téged", "neked", "veled", "érted", "nálad", "hozzád", "tőled", "rólad", "őt", "neki", "vele", "érte", "nála", "hozzá", "tőle", "rajta", "rá", "róla", "minket", "nekünk", "velünk", "értünk", "nálunk", "hozzánk", "tőlünk", "rólunk", "titeket", "nektek", "veletek", "értetek", "nálatok", "hozzátok", "tőletek", "rajtatok", "rátok", "rólatok", "őket", "nekik", "velük", "értük", "bennük", "náluk", "hozzájuk", "tőlük", "rajtuk", "rájuk", "róluk", "azonban", "ám", "ha", "szerintem", "míg", "bár", "habár", "hát", "ha", "amennyiben", "mivel", "azonban", "amíg", "azért", "ezért", "mi", "mit", "miért", "meddig", "mikor", "hány", "mennyi", "ki", "kit", "merre", "hogy", "hogyan", "miként", "hol", "honnan", "hová", "mivel", "milyen", "ó", "óh", "jaj", "kék", "zöld", "fekete", "sárga", "piros", "szürke", "ne", "nem", "hát", "nos"],
        b = ["a", "ahogy", "ahol", "aki", "akik", "akkor", "alatt", "által", "általában", "amely", "amelyek", "amelyekben", "amelyeket", "amelyet", "amelynek", "ami", "amit", "amolyan", "amíg", "amikor", "át", "abban", "ahhoz", "annak", "arra", "arról", "az", "azok", "azon", "azt", "azzal", "azért", "aztán", "azután", "azonban", "bár", "be", "belül", "benne", "cikk", "cikkek", "cikkeket", "csak", "de", "e", "eddig", "egész", "egy", "egyes", "egyetlen", "egyéb", "egyik", "egyre", "ekkor", "el", "elég", "ellen", "elé", "először", "előtt", "első", "én", "éppen", "ebben", "ehhez", "emilyen", "ennek", "erre", "ez", "ezt", "ezek", "ezen", "ezzel", "ezért", "és", "fel", "felé", "hanem", "hiszen", "hogy", "hogyan", "igen", "így", "illetve", "ill.", "ill", "ilyen", "ilyenkor", "ismét", "itt", "jó", "jól", "jobban", "kell", "kellett", "keresztül", "keressünk", "ki", "kívül", "között", "közül", "legalább", "lehet", "lehetett", "legyen", "lenne", "lenni", "lesz", "lett", "maga", "magát", "majd", "majd", "már", "más", "másik", "meg", "még", "mellett", "mert", "mely", "melyek", "mi", "mit", "míg", "miért", "milyen", "mikor", "minden", "mindent", "mindenki", "mindig", "mint", "mintha", "mivel", "most", "nagy", "nagyobb", "nagyon", "ne", "néha", "nekem", "neki", "nem", "néhány", "nélkül", "nincs", "olyan", "ott", "össze", "ő", "ők", "őket", "pedig", "persze", "rá", "s", "saját", "sem", "semmi", "sok", "sokat", "sokkal", "számára", "szemben", "szerint", "szinte", "talán", "tehát", "teljes", "tovább", "továbbá", "több", "úgy", "ugyanis", "új", "újabb", "újra", "után", "utána", "utolsó", "vagy", "vagyis", "valaki", "valami", "valamint", "való", "vissza", "viszont"],
        u = n(2),
        f = function f(e, a) {
      var n = function (e, a) {
        var n = e.externalStemmer.vowels,
            l = new RegExp(n);
        return a.search(l);
      }(e, a);

      return 0 === n ? function (e, a) {
        var n = new RegExp(e.externalStemmer.digraphs),
            l = new RegExp(e.externalStemmer.consonants),
            k = a.search(n),
            t = a.search(l);
        return k === t ? k + 1 : t;
      }(e, a) + 1 : n + 1;
    };

    var c = s.languageProcessing.baseStemmer;

    function p(e) {
      var a = Object(u.get)(e.getData("morphology"), "hu", !1);
      return a ? function (e) {
        return function (e, a) {
          return function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));
            return k >= l ? e.substring(0, k) : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e);
            return e.search(new RegExp(a.suffixes11a)) >= l ? e.slice(0, -2) + "a" : e.search(new RegExp(a.suffixes11b)) >= l ? e.slice(0, -2) + "e" : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));
            return k >= l ? e.substring(0, k) + "a" : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a.suffixes9a));
            if (k >= l) return e.substring(0, k) + "a";
            var t = e.search(new RegExp(a.suffixes9b));
            return t >= l ? e.substring(0, t) + "e" : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));
            return k >= l ? e.substring(0, k) : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));
            return k >= l ? e.substring(0, k) : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));
            return k >= l ? e.substring(0, k) : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e);

            if (e.search(new RegExp(a)) >= l) {
              var k = e.slice(0, -1),
                  t = new RegExp(n.externalStemmer.doubleConsonants);
              return -1 !== k.search(t) && (k = k.slice(0, -1)), k;
            }

            return e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));
            return k >= l ? e.substring(0, k) : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));
            return k >= l ? e.substring(0, k) + "a" : e;
          }(function (e, a, n) {
            if (e.length < 3) return e;
            var l = f(n, e),
                k = e.search(new RegExp(a));

            if (k >= l) {
              var t = e.substring(0, k);
              return t.endsWith("á") ? t.replace(/á$/i, "a") : t.endsWith("é") ? t.replace(/é$/i, "e") : t;
            }

            return e;
          }(function (e, a) {
            if (e.length < 3) return e;
            var n = f(a, e);

            if (e.search(new RegExp(a.externalStemmer.suffixes1)) >= n) {
              var l = e.slice(0, -2),
                  k = new RegExp(a.externalStemmer.doubleConsonants);
              -1 !== l.search(k) && (l = l.slice(0, -1));
              var t = new RegExp(a.externalStemmer.tripleDoubleConsonants);
              if (-1 !== l.search(t) && (l = l.slice(0, -2) + l.charAt(l.length - 1)), l.length !== e.slice(0, -2).length) return l;
            }

            return e;
          }(e, a), a.externalStemmer.suffixes2, a), a.externalStemmer.suffixes3, a), a.externalStemmer.suffixes4, a), a.externalStemmer.suffixes5, a), a.externalStemmer.suffixes6, a), a.externalStemmer.suffixes7, a), a.externalStemmer.suffixes8, a), a.externalStemmer.suffixes9, a), a.externalStemmer.suffixes10, a), a.externalStemmer.suffixes11, a), a.externalStemmer.suffixes12, a);
        }(e, a);
      } : c;
    }

    var j = n(7),
        x = n.n(j),
        w = ["megvételre", "megrendezésre", "képzésre", "kifejezésre", "következtetésre", "fejlesztésre", "bevezetésre", "kezelésre", "ellenőrzésre", "elhelyezésre", "értékesítésre", "cselekvésre", "beépítésre", "intézkedésre", "kifizetésre", "működésre", "értékelésre", "egyeztetésre", "rögzítésre", "megjelenésre", "meghirdetésre", "fizetésre", "megbeszélésre", "bejelentésre", "bekezdésre", "közreműködésre", "teljesítésre", "elküldésre", "kivitelezésre", "kihirdetésre", "korszerűsítésre", "előterjesztésre", "üzemeltetésre", "szerződéskötésre", "visszafizetésre", "befektetésre", "minősítésre", "telepítésre", "megfigyelésre", "berendezésre", "megerősítésre", "megtekintésre", "feltüntetésre", "megkülönböztetésre", "befizetésre", "megszüntetésre", "kinevezésre", "előkészítésre", "felmentésre", "megszervezésre", "gyógykezelésre", "mérlegelésre", "végkielégítésre", "engedélyezésre", "kihelyezésre", "megsemmisítésre", "előrelépésre", "tenyésztésre", "elnevezésre", "befejezésre", "ismétlésre", "egyesülésre", "közvetítésre", "lekérdezésre", "szervezésre", "csökkentésre", "területfejlesztésre", "költségtérítésre", "felfüggesztésre", "frissítésre", "vámfizetésre", "kifejlesztésre", "elhelyezkedésre", "teremtésre", "megjelölésre", "töltésre", "kiegyenlítésre", "kifejtésre", "megépítésre", "átszervezésre", "termesztésre", "felemelkedésre", "átépítésre", "áremelésre", "áthelyezésre", "újjáépítésre", "megbecsülésre", "átültetésre", "visszaigénylésre", "feljegyzésre", "törlesztésre", "helyettesítésre", "követelésre", "érvelésre", "elkülönítésre", "átképzésre", "kiértékelésre", "térítésre", "továbbfejlesztésre", "ösztönzésre", "szerkesztésre", "megítélésre", "letöltésre", "selejtezésre", "segélyezésre", "érintkezésre", "emelkedésre", "megküldésre", "erősítésre", "felderítésre", "védésre", "elbeszélgetésre", "megemlítésre", "felépítésre", "megfejtésre", "mentesítésre", "előfizetésre", "megtervezésre", "szakképesítésre", "hitelesítésre", "megnevezésre", "érvényesítésre", "számonkérésre", "terjeszkedésre", "beterjesztésre", "összevetésre", "jogsértésre", "véglegesítésre", "kiküldetésre", "megörökítésre", "kivégzésre", "költözésre", "megtérülésre", "kézbesítésre", "közmegegyezésre", "idézésre", "kirekesztésre", "visszaesésre", "beszerelésre", "beültetésre", "kiterjesztésre", "kifüggesztésre", "leépítésre", "megismerkedésre", "végzésre", "részletfizetésre", "megfizetésre", "kiürítésre", "ízesítésre", "méregtelenítésre", "rendszerezésre", "felterjesztésre", "szemléltetésre", "megtermékenyítésre", "lekötésre", "kiegyezésre", "előrejelzésre", "ellenvetésre", "növelésre", "képesítésre", "beszedésre", "ellenjegyzésre", "áttelepítésre", "egységesítésre", "akadálymentesítésre", "előtörlesztésre", "azonosításra", "aktiválásra", "hasznosításra", "foglalkoztatásra", "finanszírozásra", "megfinanszírozásra", "benyújtásra", "pontosításra", "forgalmazásra", "beszállításra", "felzárkózásra", "továbbításra", "differenciálásra", "folyósításra", "kiszállításra", "átcsoportosításra", "kártalanításra", "továbbgondolásra", "felzárkóztatásra", "megválaszolásra", "átállásra", "számlázásra", "fotózásra", "megvásárlásra", "felszámításra", "kiszámlázásra", "lehívásra", "leszámlázásra", "továbbjutásra", "szaporításra", "raktározásra", "kinyomtatásra", "reklámozásra", "újrahasznosításra", "archiválásra", "elővásárlásra", "visszautalásra", "létrehozásra", "tanúsításra", "ártalmatlanításra", "adományozásra", "kisorsolásra", "utalványozásra", "átgondolásra", "azonosulásra", "postázásra", "televíziózásra", "átsorolásra", "finomításra", "privatizálásra", "dokumentálásra", "beiskolázásra", "digitalizálásra", "újragondolásra", "aktualizálásra", "delegálásra", "pályáztatásra", "voksolásra", "felhordásra", "moderálásra", "áthaladásra", "gyámolításra", "lajstromozásra", "sokszorosításra", "elsajátításra", "szigorításra", "klónozásra", "elhatárolódásra", "elbontásra", "kiaknázásra", "befolyásolásra", "renoválásra", "kivárásra", "feliratozásra", "akkreditálásra", "parkosításra", "szakosodásra", "legyártásra", "továbbgondolkodásra", "magánosításra", "összehangolásra", "megvilágosodásra", "titkosításra", "integrálásra", "visszaadásra", "rangsorolásra", "kilábalásra", "szponzorálásra", "szankcionálásra", "modernizálásra", "leltározásra", "koordinálásra", "apostolkodásra", "definiálásra", "komposztálásra", "elvándorlásra", "átváltásra", "kódolásra", "naplózásra", "adagolásra", "megtámadásra", "exportálásra", "betáplálásra", "kompenzálásra", "kapaszkodásra", "áthallgatásra", "dedikálásra", "beindításra", "kimunkálásra", "hamisításra", "megigazulásra", "újratárgyalásra", "visszaszállításra", "megalapításra", "szabványosításra", "tartósításra", "meditálásra", "palackozásra", "bírságolásra", "listázásra", "liberalizálásra", "iskoláztatásra", "auditálásra", "monitorozásra", "visszapótlásra", "sugalmazásra", "kipostázásra", "előrejutásra", "gyarapításra", "visszaosztásra", "konzerválásra", "adóztatásra", "decentralizálásra", "diagnosztizálásra", "harmonizálásra", "konszolidálásra", "átszállításra", "realizálásra", "beazonosításra", "szelektálásra", "újraszabályozásra", "kihúzásra", "optimalizálásra", "bevizsgálásra", "kiválogatásra", "leosztásra", "szállítmányozásra", "torzításra", "visszaigazolásra", "visszaszolgáltatásra", "rehabilitálásra", "továbbtartásra", "darabolásra", "felhasználásra", "bemutatásra", "ellátásra", "felújításra", "kialakításra", "átadásra", "kiállításra", "feldolgozásra", "módosításra", "változásra", "kiosztásra", "beavatkozásra", "megvalósításra", "megállapodásra", "jóváhagyásra", "szabályozásra", "változtatásra", "elszámolásra", "felhívásra", "meghallgatásra", "elbírálásra", "végrehajtásra", "lemondásra", "elhatározásra", "kiírásra", "megfogalmazásra", "népszavazásra", "kiválasztásra", "hozzájárulásra", "bemutatkozásra", "felszólalásra", "elutasításra", "megvitatásra", "levonásra", "átutalásra", "kizárásra", "előállításra", "bizonyításra", "kárpótlásra", "nyomtatásra", "felállításra", "beszámításra", "pótlásra", "publikálásra", "megbízásra", "felbontásra", "megválasztásra", "kibocsátásra", "kivizsgálásra", "lebontásra", "feltárásra", "felosztásra", "visszavonásra", "elosztásra", "felvásárlásra", "megbocsátásra", "szétosztásra", "megújításra", "megnyitásra", "korlátozásra", "bérbeadásra", "eltiltásra", "elbocsátásra", "meghosszabbításra", "bebocsátásra", "levágásra", "restaurálásra", "felajánlásra", "kivágásra", "kormányalakításra", "megmunkálásra", "osztályozásra", "sorozatgyártásra", "betakarításra", "leszámolásra"],
        R = s.languageProcessing.getWords,
        S = ["éva", "szava", "moszkva", "alternatíva", "normatíva", "java", "jelszava", "direktíva", "perspektíva", "dráva", "lova", "kurva", "szilva", "páva", "kollektíva", "lárva", "szarva", "tava", "láva", "díva", "ponyva", "hava", "offenzíva", "előszava", "borotva", "színe-java", "hamva", "káva", "legjava", "mályva", "murva", "olíva", "híre-hamva", "pelyva", "címszava", "dudva", "sava", "csóva", "golyva", "árva", "fénycsóva", "utószava", "antikva", "közjava", "aktíva", "hadiárva", "morotva", "gyomorsava", "villanyborotva", "alapszava", "szerva", "odva", "naiva", "szupernova", "félárva", "harangszava", "szlalomozva", "halastava", "vezényszava", "falova", "defenzíva", "lángcsóva", "varázsszava", "végszava", "hadova", "dzsuva", "pányva", "sátorponyva", "parancsszava", "vezérszava", "falva", "durva", "gyáva", "tétova", "zagyva", "mogorva", "morva", "híva", "báva", "hova", "fordítva", "ahova", "felváltva", "valahova", "kurva", "sehova", "kisvártatva", "játszva", "hivatva", "mindenhova", "tova", "bárhova", "lopva", "idestova", "elragadtatva", "lélekszakadva", "fejcsóválva", "akárhova", "fogcsikorgatva", "tárva-nyitva", "hagyatva", "szájtátva", "készakarva", "karonfogva", "szívdobogva", "lélegzet-visszafojtva", "szívszorongva", "orozva", "fogvacogva", "szívszakadva", "fogvicsorítva", "bélapátfalva", "albertfalva", "éve", "neve", "könyve", "szíve", "teve", "elve", "műve", "kedve", "terve", "nyelve", "szerve", "medve", "híve", "alapelve", "törvénykönyve", "életműve", "irányelve", "kézikönyve", "felhasználóneve", "jegyzőkönyve", "diáknyelve", "leve", "ismérve", "tanterve", "hírneve", "objektíve", "íve", "emlékműve", "anyanyelve", "beceneve", "forgatókönyve", "féléve", "orgonaműve", "tankönyve", "alapköve", "jókedve", "évkönyve", "járműve", "köve", "keresztneve", "ráckeve", "munkaterve", "vezetékneve", "remekműve", "túrkeve", "töve", "öve", "futóműve", "heve", "sarokköve", "életéve", "vendégkönyve", "negyedéve", "jegesmedve", "csöve", "szócsöve", "keve", "üdve", "nedve", "gyűjtőneve", "fedőneve", "mérföldköve", "kéve", "ütemterve", "próbaköve", "gépjárműve", "domborműve", "ékköve", "rokonszenve", "érzékszerve", "kollektíve", "életkedve", "örve", "sérve", "verseskönyve", "füve", "építőköve", "ellenszenve", "álneve", "tanulmányterve", "szakácskönyve", "erőműve", "sarkköve", "barnamedve", "hajtóműve", "mesterműve", "színműve", "törzskönyve", "utóneve", "családneve", "formanyelve", "távcsöve", "tanéve", "mosómedve", "talpköve", "szövegkönyve", "sírköve", "keserve", "boltíve", "márkaneve", "munkakedve", "kérdőíve", "rosszkedve", "emlékkönyve", "gúnyneve", "szakkönyve", "pályaműve", "olvasókönyve", "előneve", "csúcsszerve", "személyneve", "atomerőműve", "útikönyve", "cséve", "telefonkönyve", "képeskönyve", "szabálykönyve", "nyakörve", "cseppköve", "látószerve", "mozgásszerve", "daloskönyve", "halászleve", "heresérve", "jogelve", "köldöksérve", "utcaneve", "eleve", "közvetve", "elvétve", "relatíve", "karöltve", "együttvéve", "vállvetve"];

    var _ = function (e) {
      r()(t, e);
      var a,
          n,
          l = (a = t, n = function () {
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
            l = y()(a);

        if (n) {
          var k = y()(this).constructor;
          e = Reflect.construct(l, arguments, k);
        } else e = l.apply(this, arguments);

        return m()(this, e);
      });

      function t(e, a) {
        var n;
        return k()(this, t), (n = l.call(this, e, a))._participles = function (e) {
          var a = R(e),
              n = new RegExp("(ve|va|ódni|ődni)$");
          return a.filter(function (e) {
            return n.test(e) || w.includes(e);
          });
        }(n.getClauseText()), n.checkParticiples(), n;
      }

      return x()(t, [{
        key: "checkParticiples",
        value: function value() {
          var e = this.getParticiples().filter(function (e) {
            return !S.includes(e);
          });
          this.setPassive(e.length > 0);
        }
      }]), t;
    }(s.languageProcessing.values.Clause),
        P = ["kerülök", "kerülsz", "kerül", "kerülünk", "kerültök", "kerülnek", "kerüljek", "kerülj", "kerüljön", "kerüljünk", "kerüljetek", "kerüljenek", "kerülnék", "kerülnél", "kerülne", "kerülnénk", "kerülnétek", "kerülnének", "kerültem", "kerültél", "került", "kerültünk", "kerültetek", "kerültek", "kerültem volna", "kerültél volna", "került volna", "kerültünk volna", "kerültetek vola", "kerültek volna", "fogok kerülni", "fogsz kerülni", "fog kerülni", "fogunk kerülni", "fogtok kerülni", "fognak kerülni"],
        E = ["vagyok", "vagy", "van", "vagyunk", "vagytok", "vannak", "legyek", "legyél", "legyen", "legyünk", "legyetek", "legyenek", "lennék", "lennél", "lenne", "lennénk", "lennétek", "lennének", "leszek", "leszel", "lesz", "leszünk", "lesztek", "lesznek", "voltam", "voltál", "volt", "voltunk", "voltatok", "voltak", "lettem volna", "lettél volna", "lett volna", "lettünk volna", "lettetek volna", "lettek volna"],
        O = ["fogok", "fogsz", "fog", "fogunk", "fogtok", "fognak"],
        M = {
      auxiliaries1: P,
      auxiliaries2: E,
      auxiliaries3: O,
      allAuxiliaries: [].concat(P, E, O)
    },
        W = s.languageProcessing.getClausesSplitOnStopWords,
        C = s.languageProcessing.createRegexFromArray,
        T = {
      Clause: _,
      regexes: {
        auxiliaryRegex: C(M.allAuxiliaries),
        stopwordRegex: C(b)
      }
    };

    function A(e) {
      return W(e, T);
    }

    var B = ["ábrázol", "ad", "adományoz", "ajándékoz", "akadályoz", "alakít", "alapít", "álcáz", "áldoz", "alkalmaz", "alkot", "állít", "arat", "ás", "automatizál", "azonosít", "befolyásol", "bírál", "bizonyít", "bocsát", "bont", "bonyolít", "csatol", "definiál", "deklarál", "digitalizál", "dob", "dokumentál", "dolgoz", "finanszíroz", "fogalmaz", "foglal", "foglalkoztat", "fogyaszt", "fojt", "fokoz", "fontol", "fordít", "forgalmaz", "garantál", "gyakorl", "gyárt", "gyógyít", "hagy", "hajt", "hálál", "hallgat", "hamisít", "hárít", "használ", "határoz", "hidal", "hoz", "igazít", "igazol", "illusztrál", "importál", "indít", "ír", "irányít", "istáz", "javasol", "javít", "jutalmaz", "kattint", "kínál", "kombinál", "kompenzál", "komponál", "kritizál", "kutat", "lapoz", "listáz", "locsol", "magyaráz", "másol", "moderál", "mond", "motivál", "mozgósít", "mulaszt", "mutat", "nyomtat", "nyújt", "olvas", "oszt", "parancsol", "postáz", "pótl", "próbál", "produkál", "ragaszt", "rak", "ráz", "regisztrál", "reklámoz", "rombol", "ront", "ruház", "sajátít", "sorol", "strukturál", "sugárz", "szabályoz", "szakít", "szállít", "számít", "számláz", "számol", "szavaz", "szimbolizál", "szólít", "szorít", "talál", "támogat", "tanít", "tárol", "tart", "taszít", "távolít", "tilt", "tisztít", "továbbít", "tudósít", "tulajdonít", "újít", "utal", "utasít", "válaszol", "választ", "válogat", "vált", "változtat", "varázsol", "világít", "világosít", "vitat", "vizsgál", "von"],
        V = ["beszél", "böngész", "bővít", "címz", "cserél", "derít", "díszít", "dönt", "egészít", "egyeztet", "egyszerűsít", "elégít", "emel", "említ", "engedélyez", "enyhít", "épít", "érint", "erősít", "ért", "értékel", "értelmez", "érzékeltet", "ev", "fedez", "fejleszt", "fejt", "fektet", "felejt", "feltev", "figyel", "fizet", "győz", "gyűjt", "hegeszt", "helyettesít", "helyez", "hirdet", "idéz", "igényl", "illeszt", "intéz", "ismer", "ítél", "ízesít", "jegyz", "jelenít", "jelent", "jelentkez", "jelöl", "kényszerít", "képvisel", "kérdez", "kerekít", "keresztel", "készít", "késztet", "kezel", "kivitelez", "kölcsönz", "köt", "követ", "közl", "közvetít", "küld", "különít", "küszöböl", "melegít", "mellékl", "mér", "nevez", "néz", "nyel", "nyer", "örökít", "őrz", "összegz", "összesít", "rendel", "rendez", "rögzít", "semmisít", "sürget", "szed", "szeg", "szennyez", "szerel", "szerkeszt", "szervez", "szigetel", "színez", "tekint", "telepít", "teljesít", "tenyészt", "teremt", "térít", "terjeszt", "tervez", "testesít", "tesztel", "tev", "tölt", "tömörít", "törl", "üldöz", "ültet", "végz", "veszélyeztet", "vet", "vetít", "vev", "vezet"],
        $ = {
      odikVerbStems1: B,
      odikVerbStems2: V,
      all: B.concat(V)
    },
        D = ["ódom", "ódsz", "ódik", "ódunk", "ódtok", "ódnak", "ódtam", "ódtál", "ódott", "ódtunk", "ódtatok", "ódtak", "ódjak", "ódj", "ódjon", "ódjunk", "ódjatok", "ódjanak", "ódnék", "ódnál", "ódna", "ódnánk", "ódnátok", "ódnának"],
        F = ["ődöm", "ődsz", "ődik", "ődünk", "ődtök", "ődnek", "ődtem", "ődtél", "ődött", "ődtünk", "ődtetek", "ődtek", "ődjek", "ődj", "ődjön", "ődjünk", "ődjetek", "ődjenek", "ődnék", "ődnél", "ődne", "dnénk", "ődnétek", "ődnének"],
        q = ["abba", "agyon", "alul", "alá", "alább", "által", "át", "be", "bele", "belé", "benn", "egybe", "együtt", "el", "ellen", "elő", "előre", "észre", "fel", "föl", "félbe", "félre", "felül", "fölül", "fenn", "fönn", "hátra", "haza", "helyre", "hozzá", "ide", "jóvá", "keresztül", "ketté", "ki", "kölcsön", "körül", "körbe", "közbe", "közre", "közzé", "külön", "le", "létre", "meg", "mellé", "neki", "oda", "össze", "rá", "rajta", "széjjel", "szembe", "szerte", "szét", "tele", "teli", "tova", "tovább", "tönkre", "utol", "túl", "újjá", "újra", "utána", "végbe", "végig", "vissza"],
        G = s.languageProcessing.getWords,
        H = function H(e, a, n, l) {
      return a.some(function (a) {
        return l.some(function (l) {
          var k = a + l;

          if (e.endsWith(k)) {
            var t = e.slice(0, e.indexOf(k));
            return "" === t || n.includes(t);
          }
        });
      });
    };

    function I(e) {
      var a = G(e),
          n = $.odikVerbStems1,
          l = $.odikVerbStems2;
      return a.some(function (e) {
        return H(e, n, q, D) || H(e, l, q, F);
      });
    }

    var J = function (e) {
      r()(t, e);
      var a,
          n,
          l = (a = t, n = function () {
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
            l = y()(a);

        if (n) {
          var k = y()(this).constructor;
          e = Reflect.construct(l, arguments, k);
        } else e = l.apply(this, arguments);

        return m()(this, e);
      });

      function t(e) {
        var a;
        return k()(this, t), delete (a = l.call(this, e)).defaultResearches.getFleschReadingScore, Object.assign(a.config, {
          language: "hu",
          passiveConstructionType: "morphologicalAndPeriphrastic",
          functionWords: v,
          transitionWords: z,
          twoPartTransitionWords: h,
          firstWordExceptions: d,
          stopWords: b
        }), Object.assign(a.helpers, {
          getStemmer: p,
          getClauses: A,
          isPassiveSentence: I
        }), a;
      }

      return t;
    }(s.languageProcessing.AbstractResearcher);
  },
  4: function _(e, a, n) {
    var l = n(8);
    e.exports = function (e, a) {
      if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(a && a.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), a && l(e, a);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  5: function _(e, a, n) {
    var l = n(6)["default"],
        k = n(9);
    e.exports = function (e, a) {
      return !a || "object" !== l(a) && "function" != typeof a ? k(e) : a;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  6: function _(e, a) {
    function n(a) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = n = function n(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = n = function n(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), n(a);
    }

    e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  7: function _(e, a) {
    function n(e, a) {
      for (var n = 0; n < a.length; n++) {
        var l = a[n];
        l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
      }
    }

    e.exports = function (e, a, l) {
      return a && n(e.prototype, a), l && n(e, l), e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  8: function _(e, a) {
    function n(a, l) {
      return e.exports = n = Object.setPrototypeOf || function (e, a) {
        return e.__proto__ = a, e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, n(a, l);
    }

    e.exports = n, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  9: function _(e, a) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  }
});