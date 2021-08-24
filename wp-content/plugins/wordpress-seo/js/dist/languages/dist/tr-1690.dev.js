"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (e) {
  var i = {};

  function r(t) {
    if (i[t]) return i[t].exports;
    var a = i[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
  }

  return r.m = e, r.c = i, r.d = function (e, i, t) {
    r.o(e, i) || Object.defineProperty(e, i, {
      enumerable: !0,
      get: t
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, i) {
    if (1 & i && (e = r(e)), 8 & i) return e;
    if (4 & i && "object" == _typeof(e) && e && e.__esModule) return e;
    var t = Object.create(null);
    if (r.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & i && "string" != typeof e) for (var a in e) {
      r.d(t, a, function (i) {
        return e[i];
      }.bind(null, a));
    }
    return t;
  }, r.n = function (e) {
    var i = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return r.d(i, "a", i), i;
  }, r.o = function (e, i) {
    return Object.prototype.hasOwnProperty.call(e, i);
  }, r.p = "", r(r.s = 44);
}({
  0: function _(e, i) {
    e.exports = window.yoast.analysis;
  },
  1: function _(e, i) {
    function r(i) {
      return e.exports = r = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(i);
    }

    e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  10: function _(e, i, r) {
    var t = r(29);

    function a(i, r, s) {
      return "undefined" != typeof Reflect && Reflect.get ? (e.exports = a = Reflect.get, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = a = function a(e, i, r) {
        var a = t(e, i);

        if (a) {
          var s = Object.getOwnPropertyDescriptor(a, i);
          return s.get ? s.get.call(r) : s.value;
        }
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), a(i, r, s || i);
    }

    e.exports = a, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  2: function _(e, i) {
    e.exports = window.lodash;
  },
  29: function _(e, i, r) {
    var t = r(1);
    e.exports = function (e, i) {
      for (; !Object.prototype.hasOwnProperty.call(e, i) && null !== (e = t(e));) {
        ;
      }

      return e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  3: function _(e, i) {
    e.exports = function (e, i) {
      if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  4: function _(e, i, r) {
    var t = r(8);
    e.exports = function (e, i) {
      if ("function" != typeof i && null !== i) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(i && i.prototype, {
        constructor: {
          value: e,
          writable: !0,
          configurable: !0
        }
      }), i && t(e, i);
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  44: function _(e, i, r) {
    "use strict";

    r.r(i), r.d(i, "default", function () {
      return T;
    });

    var t = r(3),
        a = r.n(t),
        s = r(4),
        n = r.n(s),
        o = r(5),
        h = r.n(o),
        l = r(1),
        u = r.n(l),
        c = r(0),
        k = ["bunlar", "şunlar", "onlar”, “burası", "orası", "şurası", "burayı", "orayı", "şurayı”, “buraya", "oraya", "şuraya”, “burada", "orada", "şurada”, “buradan", "oradan", "şuradan", "bu", "şu", "o", "bir", "íki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on"],
        m = ["fakat", "halbuki", "hatta", "üstelik", "ancak", "oysa", "sonuçta", "yalnız", "çünkü", "oysaki", "kısacası", "özetle", "böylelikle", "ama", "lakin", "ayrıca", "açıkcası", "yani", "sonucunda", "böylece", "kısaca", "veya", "veyahut", "zira", "öyleyse", "sonrasında", "ardından", "vakıa", "gerçi", "karşın", "tümüyle", "bütünüyle", "tamamıyla", "genelde", "diğer", "başka", "önce", "öncesinde", "sonra", "yanısıra", "ama", "muhakkak", "kesinlikle", "şüphesiz", "elbet", "elbette", "kuşkusuz", "başlıca", "bilakis", "aksine", "tersine", "devamında", "özellikle", "bilhassa", "nihayet", "nihayetinde", "neticede", "ayrıyeten", "dahası", "çoğunlukla", "genellikle", "genelde", "dolayısıyla", "gelgelelim", "aslında", "doğrusu", "mamafih", "binaenaleyh", "evvelce", "önceden", "şöylelikle", "örneğin", "mesela", "nitekim", "mademki", "şimdi", "halihazırda", "i̇laveten", "aynen", "nazaran", "nedeniyle", "yüzünden", "umumiyetle", "ekseriye", "amacıyla", "gayesiyle", "velhasıl", "ezcümle", "özetlersek", "etraflıca", "tafsilatlı", "genişçe", "bilfiil", "filhakika", "evvela", "i̇lkin", "en önce", "birincisi", "i̇kincisi", "üçüncüsü", "sonuncusu", "tıpkı", "topyekun", "hem", "ne", "kah", "ister", "ya", "gerek", "ha"],
        _ = m.concat(["o halde", "bundan böyle", "demek ki", "ne yazık ki", "görüldüğü gibi", "i̇lk olarak", "son olarak", "ne var ki", "buna rağmen", "yine de", "başka bir deyişle", "açıklamak gerekirse", "özetlemek gerekirse", "kısaca söylemek gerekirse", "görüldüğü gibi", "ve bunun gibi", "halbu ki", "buna göre", "ona göre", "ek olarak", "her ne kadar", "velev ki", "olmakla beraber", "bile olsa", "i̇le beaber", "i̇le birlikte", "her şeye rağmen", "bütün yanlarıyla", "bütün yönleriyle", "ele alacak olursak", "baştan sona", "diğer bir", "başka bir", "daha önce", "daha sonra", "bundan başka", "bunun yanında", "bunun yanı sıra", "bununla birlikte", "buna ilaveten", "bunun dışında", "elbette ki", "muhakkak ki", "belli başlı", "karşılaştırmak gerekirse", "karşılaştırmalı olarak", "aynı zamanda", "sonuç olarak", "diğer taraftan", "diğer bir taraftan", "buna karşılık", "tam tersine", "buna bağlı olarak", "buna parelel olarak", "i̇kinci olarak", "üçüncü olarak", "aynı derecede", "eşit olarak", "başta olmak üzere", "en sonunda", "açık bir şekilde", "ana hatlarıyla", "genel itibariyle", "genel anlamda", "genel olarak", "bunun için", "bu nedenle", "bundan dolayı", "bu sebeple", "dolayısı ile", "her halükarda", "aynı biçimde", "aynı şekilde", "bu esnada", "bu arada", "hal böyleyken", "bağlı kalmaksızın", "açık olarak", "belli ki", "ayrıntılı olarak", "bundan önce", "sözün kısası", "az ve öz bir şekilde", "tüm ayrıntılarıyla", "bu şekilde", "o yüzden", "bu sayede", "buradan hareketle", "buna mukabil", "en önemlisi", "her şeyden önce", "esas olarak", "hepsinden önce", "hepsinden öte", "hepsinden ötesi", "her şeyin üzerinde", "her şeyin ötesinde", "hepsinden önemlisi", "asıl önemlisi", "her şeyi hesaba katarak", "bütün olarak", "her şey göz önüne alındığında", "pararel olarak", "diğer bir nokta", "diğer açıdan", "öyle ya da böyle", "doğrusunu söylemek gerekirse", "i̇şin doğrusu", "aslına bakılırsa", "gerçek şu ki", "hattı zatında", "aslına bakıldığında", "aslına bakarsak", "i̇şin aslı", "sonuç itibariyle", "örnek olarak", "örneleyecek olursak", "görülebileceği gibi", "görülebileceği üzere", "görüldüğü üzere", "söylendiği gibi", "söylenildiği gibi", "söylediği gibi", "söylediğim gibi", "olduğu kadar", "önceden belirtildiği gibi", "önceden söylendiği gibi", "yukarıda gösterildiği gibi", "eninde sonunda", "önünde sonunda", "şu anda", "bu sırada", "bununla beraber", "bu noktada", "bunun ışığında", "bunların ışığında", "aşikar olarak", "aynı sebeple", "bir de", "doğru da olsa", "doğru bile olsa", "öyle bile olsa", "öyle de olsa", "i̇le ilgili", "olsa bile", "eğer ki", "olsa dahi", "ondan dolayı", "o sebepten dolayı", "bu yüzden", "onun için", "esas itibarıyla", "aynı sebepten dolayı", "bu amaçla", "zaman zaman", "arada sırada", "dönem dönem", "arada bir", "diyelim ki", "farz edelim ki", "farz edersek", "kısaca söylecek olursak", "tek kelimeyle", "birkaç kelimeyle", "sözün özü", "en nihayetinde", "uzun uzadıya", "her iki durumda da", "özü itibariyle", "amacı ile", "olması için", "başka bir ifadeyle", "diğer bir deyişle", "i̇lk önce", "bir yandan", "bir taraftan", "hatırlatmak gerekirse", "bu bağlamda", "gel gelelim", "her şey hesaba katılırsa", "bütüne bakıldığında", "belirtildiği gibi", "bir başka ifadeyle", "lafı toparlamak gerekirse", "bu düşünceyle", "bu maksatla", "bu doğrultuda", "bu niyetle", "hem de", "ne de", "ya da", "gerekse de"]),
        d = [].concat(["bir"], ["i̇ki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz", "on", "on bir", "on i̇ki", "on üç", "on dört", "on beş", "on altı", "on yedi", "on sekiz", "on dokuz", "yirmi", "yirmi bir", "yirmi i̇ki", "yirmi üç", "yirmi dört", "yirmi beş", "yirmi altı", "yirmi yedi", "yirmi sekiz", "yirmi dokuz", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan", "yüz", "bin", "milyon", "milyar"], ["birinci", "i̇kinci", "üçüncü", "dördüncü", "beşinci", "altıncı", "yedinci", "sekizinci", "dokuzuncu", "onuncu"], ["tam", "yarım", "çeyrek", "üçte biri", "üçte ikisi", "tamamı", "yarısı", "çeyreği", "üçte biri", "üçte ikisi"], ["ben", "sen", "o", "biz", "siz", "onlar", "beni", "seni", "onu", "bizi", "sizi", "onları", "bizleri", "sizleri", "bana", "sana", "ona", "bize", "size", "onlara", "bizlere", "sizlere", "bende", "sende", "onda", "bizde", "sizde", "onlarda", "bizlerde", "sizlerde", "benden", "senden", "ondan", "bizden", "sizden", "onlardan", "bizlerden", "sizlerden", "benim", "senin", "onun", "bizim", "sizin", "onların", "bizlerin", "sizlerin", "bu", "şu", "o", "öteki", "beriki", "bura", "şura", "ora", "burası", "şurası", "orası", "böylesi", "şöylesi", "öylesi", "bunlar", "şunlar", "onlar", "ötekiler", "berikiler", "buralar", "şuralar", "oralar", "birbiri", "birbirimiz", "birbiriniz", "birbirleri", "birbirimizi", "birbirinizi", "birbirlerini", "birbirimize", "birbirinize", "birbirlerine", "birbirimizde", "birbirinizde", "birbirlerinde", "birbirimizden", "birbirinizden", "birbirlerinden", "birbirimizle", "birbirinizle", "birbirleriyle"], ["kim", "kimi", "kime", "kimde", "kimden", "kimin", "kiminle", "ne", "neyi", "neyde", "neyden", "neyle", "ne için", "niçin", "niye", "ne diye", "nere", "nereyi", "nereye", "nerede", "nereden", "neresi", "neden", "hangi", "hangisi", "kaç", "kaçı", "kaçıncı", "kaçta", "nasıl", "ne kadar", "ne zaman", "mı", "hangi", "hangisi", "kimler", "kimleri", "kimlere", "kimlerde", "kimlerden", "neler", "neleri", "nelere", "nelerde", "nelerden", "hangiler", "hangileri", "hangilere"], ["hepsi", "bazısı", "çoğu", "birçoğu", "birazı", "hepsi", "bütünü", "yeteri kadarı", "birkaçı", "biri", "her ikisi", "i̇kisinden biri", "hiç biri", "diğeri", "tümü", "bir kısmı", "pek çoğu", "her biri", "bazı", "çok", "çoğu", "birçok", "biraz", "bütün", "yeteri kadar", "birkaç", "bir", "her iki", "hiç bir", "diğer", "tüm", "bir kısım", "pek çok", "her bir"], ["kendi", "kendim", "kendimi", "kendime", "kendimde", "kendimden", "kendin", "kendini", "kendine", "kendinde", "kendinden", "kendisi", "kendiyle", "kendileri", "kendilerine", "kendilerinde", "kendilerinden", "kendileriyle"], ["kimi", "kimse", "biri", "birisi", "başkası", "bazısı", "bir çoğu", "bir takımı", "birkaçı", "birazı", "herkes", "hepsi", "hepimiz", "hiçbiri", "herhangi biri", "her biri", "şey", "falan", "filan", "falanca", "öteberi", "tümü", "bütünü", "kimileri", "kimseler", "birileri", "başkaları", "bazıları", "bir çokları", "herkesler"], ["i̇çin", "gibi", "kadar", "ancak", "yalnız", "i̇le", "sadece", "sanki", "değil", "üzere", "dair", "karşın", "rağmen", "özgü", "doğru", "dek", "değin", "ait", "beri", "başka", "itibaren", "dolayı", "ötürü", "adeta", "sırf", "diye", "tek", "karşı"], ["ve", "i̇le", "veya", "ya da", "yahut", "veyahut", "ama", "fakat", "lakin", "yalnız", "ancak", "oysa", "oysaki", "halbu ki", "ne var ki", "çünkü", "zira", "de", "da", "ki", "meğer", "madem", "mademki", "demek", "demek ki", "üstelik", "hatta", "yani", "hem...hem", "hem de", "ne", "kah", "i̇ster", "ister", "açıkcası", "bile", "ya", "da", "ise", "öyleyse", "kim bilir", "gerek", "gerekse de", "ta ki", "zati"], ["demek", "dedim", "dedin", "dedi", "dedik", "dediniz", "dediler", "der", "söylemek", "söyledim", "söyledin", "söyledi", "söyledik", "söylediniz", "söylediler", "söyler", "söylerler", "sormak", "sordum", "sordun", "sordu", "sorduk", "sordunuz", "sordular", "sorar", "sorarlar", "belirtmek", "belirttim", "belirttin", "belirtti", "belirttik", "belirttiniz", "belirttiler", "belirtir", "belirtirler", "açıklamak", "açıkladım", "açıkladın", "açıkladı", "açıkladık", "açıkladınız", "açıkladılar", "açıklar", "açıklarlar", "düşünmek", "düşündüm", "düşündün", "düşündü", "düşündük", "düşündünüz", "düşündüler", "düşünür", "düşünürler", "konuşmak", "konuşdum", "konuştun", "konuştu", "konuştuk", "konuştunuz", "konuştular", "konuşur", "konuşurlar", "bildirmek", "bildirdim", "bildirdin", "bildirdi", "bildirdik", "bildirdiniz", "bildirdiler", "birdirir", "bildirirler", "ele", "almak", "aldım", "aldın", "aldı", "aldık", "aldınız", "aldılar", "önermek", "önerdim", "önerdin", "önerdi", "önerdik", "önerdiniz", "önerdiler", "önerir", "önerirler", "anlamak", "anladım", "anladın", "anladı", "anladık", "anladınız", "anladılar", "anlar", "anlarlar"], ["en", "daha", "pek çok", "en çok", "fazla", "epey", "epeyce", "bayağı", "oldukça", "pek", "gayet", "fazlaca", "fevkalede", "tamamen", "fena halde", "fena şekilde", "gerçekten", "zerre kadar", "biraz", "son derece", "deli gibi", "en", "çok", "azıcık"], ["etmek", "olmak", "yapmak", "kalmak", "gelmek", "kalmak", "bulunmak", "demek", "dilemek", "söylemek", "durmak", "eylemek", "yazmak", "durmak", "vermek", "kabul", "teşekkür", "memnun", "seyir", "zan", "bilmek"], ["yeni", "eski", "önceki", "i̇yi", "büyük", "küçük", "kolay", "zor", "hızlı", "yavaş", "yüksek", "alçak", "kısa", "uzun", "i̇nce", "kalın", "gerçek", "yalan", "yanlış", "basit", "zor", "aynı", "farklı", "belli", "belirsiz", "modern", "geleneksel", "muhtemel", "yaygın", "genç", "yaşlı", "zamansız", "acı", "tatlı", "tuzlu", "sıcak", "soğuk", "kalabalık", "sakin", "yalnız", "dar", "geniş", "siyah", "beyaz", "mavi", "kırmızı", "sarı", "temiz", "kirli", "muhteşem", "nazik", "kibar", "akıllı", "zeki", "gizli", "açık", "kapalı", "dikkatli", "gürültülü", "sevinçli", "eski", "önce", "i̇yi", "büyük", "küçük", "kolay", "zor", "hızlı", "yavaş", "yüksek", "alçak", "kısa", "uzun", "i̇nce", "kalın", "gerçek", "yanlış", "basit", "zor", "aynı", "farklı", "belli", "belirsiz", "modern", "geleneksel", "muhtemel", "yaygın", "nadir", "genç", "yaşlı", "zamansız", "acı", "tatlı", "tuzlu", "sıcak", "soğuk", "kalabalık", "sakin", "yalnız", "dar", "geniş", "siyah", "beyaz", "mavi", "kırmızı", "sarı", "temiz", "kirli", "muhteşem", "nazik", "kibar", "akıllı", "zeki", "gizli", "açık", "kapalı", "dikkatle", "gürültülü", "uzun", "sevinçle", "aşağı", "yukarı", "sağa", "sola", "i̇çeri dışarı", "bugün", "yarın", "haftaya", "seneye", "ne zaman", "nereye", "neden", "niye", "ne kadar", "nasıl", "ne"], ["ey", "hey", "bre", "hişt", "şşt", "ah", "ahh", "ee", "vay", "i̇mdat", "hah", "ay", "aa", "aaa", "hay allah", "aman", "aman dikkat", "vah", "ya", "yaa", "ooo", "of", "tüh", "peh", "aman", "haydi", "sakın", "yuh"], ["çay kaşığı", "çay k.", "yemek kaşığı", "yemek k.", "tatlı kaşığı", "tatlı k.", "çay bardağı", "çay b.", "su bardağı", "su b.", "kahve fincanı", "kahve f.", "tepeleme", "tepeleme kaşık", "tepeleme bardak", "gr", "ml", "kg", "mg", "cl", "oz", "çeyrek", "tam", "yarım", "üçte biri", "üçte ikisi", "parmak"], ["saniye", "saniyeler", "dakika", "dakikalar", "saat", "saatler", "gün", "günler", "hafta", "haftalar", "ay", "aylar", "yıl", "yıllar", "bugün", "yarın", "dün", "sabah", "öğlen", "akşam", "gece", "gündüz"], ["şey", "şeyler", "olasılık", "çeşit", "kişi"], ["hapşu", "hapşırık", "hapşurmak", "horr", "horultu", "horlamak", "şırıl", "şırıltı", "şırıldamak", "hışır", "hışırtı", "hışırdamak", "gıcır", "gıcırtı", "gıcırdamak", "çatır", "çatırtı", "çatırdamak", "pat", "patlamak", "vın", "vınlamak", "zırr", "zırıltı", "zırlamak", "tık", "tıkırtı", "tıkırdamak", "çıt", "çıtırtı", "çıtırdamak", "fokur", "fokurtu", "fokurdamak", "kıt", "kıtırtı", "kıtırdamak", "patırtı"], ["bayan", "bay", "hanımefendi", "hanfendi", "hanım", "beyefendi", "beyfendi", "bey", "sayın", "profesör", "prof.", "doktor", "dr."], m),
        f = [["hem", "hem de"], ["ne", "ne de"], ["ya", "ya da"], ["gerek", "gerekse de"]],
        b = {
      recommendedWordCount: 15,
      slightlyTooMany: 20,
      farTooMany: 25
    },
        y = r(2),
        $ = r(7),
        v = r.n($),
        p = r(10),
        g = r.n(p);

    function j(e) {
      var i = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }();

      return function () {
        var r,
            t = u()(e);

        if (i) {
          var a = u()(this).constructor;
          r = Reflect.construct(t, arguments, a);
        } else r = t.apply(this, arguments);

        return h()(this, r);
      };
    }

    var w = function () {
      function e() {
        a()(this, e);
      }

      return v()(e, [{
        key: "b",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$b") ? this._$esjava$b : this._$esjava$b = "";
        },
        set: function set(e) {
          this._$esjava$b = e;
        }
      }, {
        key: "length$esjava$0",
        value: function value() {
          return this.b.length;
        }
      }, {
        key: "replace$esjava$3",
        value: function value(e, i, r) {
          if (0 === e && i === this.b.length) this.b = r;else {
            var t = this.b.substring(0, e),
                a = this.b.substring(i);
            this.b = t + r + a;
          }
        }
      }, {
        key: "substring$esjava$2",
        value: function value(e, i) {
          return this.b.substring(e, i);
        }
      }, {
        key: "charAt$esjava$1",
        value: function value(e) {
          return this.b.charCodeAt(e);
        }
      }, {
        key: "subSequence$esjava$2",
        value: function value(e, i) {
          throw new Error("NotImpl: CharSequence::subSequence");
        }
      }, {
        key: "toString$esjava$0",
        value: function value() {
          return this.b;
        }
      }, {
        key: "length",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 0:
              return this.length$esjava$0.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "length", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "replace",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 3:
              return this.replace$esjava$3.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "replace", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "substring",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.substring$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "substring", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "charAt",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 1:
              return this.charAt$esjava$1.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "charAt", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "subSequence",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.subSequence$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "subSequence", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "toString",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 0:
              return this.toString$esjava$0.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "toString", this)).call.apply(i, [this].concat(t));
        }
      }]), e;
    }(),
        z = function () {
      function e(i, r, t, s, n) {
        a()(this, e), this.s_size = i.length, this.s = e.toCharArray$esjava$1(i), this.substring_i = r, this.result = t, this.methodobject = n, this.method = s ? n[s] : null;
      }

      return v()(e, [{
        key: "s_size",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$s_size") ? this._$esjava$s_size : this._$esjava$s_size = 0;
        },
        set: function set(e) {
          this._$esjava$s_size = e;
        }
      }, {
        key: "s",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$s") ? this._$esjava$s : this._$esjava$s = null;
        },
        set: function set(e) {
          this._$esjava$s = e;
        }
      }, {
        key: "substring_i",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$substring_i") ? this._$esjava$substring_i : this._$esjava$substring_i = 0;
        },
        set: function set(e) {
          this._$esjava$substring_i = e;
        }
      }, {
        key: "result",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$result") ? this._$esjava$result : this._$esjava$result = 0;
        },
        set: function set(e) {
          this._$esjava$result = e;
        }
      }, {
        key: "method",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$method") ? this._$esjava$method : this._$esjava$method = null;
        },
        set: function set(e) {
          this._$esjava$method = e;
        }
      }, {
        key: "methodobject",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$methodobject") ? this._$esjava$methodobject : this._$esjava$methodobject = null;
        },
        set: function set(e) {
          this._$esjava$methodobject = e;
        }
      }], [{
        key: "toCharArray$esjava$1",
        value: function value(e) {
          for (var i = e.length, r = new Array(i), t = 0; t < i; t++) {
            r[t] = e.charCodeAt(t);
          }

          return r;
        }
      }]), e;
    }(),
        x = function (e) {
      n()(r, e);
      var i = j(r);

      function r(e) {
        var t;
        return a()(this, r), t = i.call(this), r.morphologyData = e.externalStemmer, t;
      }

      return v()(r, [{
        key: "B_continue_stemming_noun_suffixes",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$B_continue_stemming_noun_suffixes") ? this._$esjava$B_continue_stemming_noun_suffixes : this._$esjava$B_continue_stemming_noun_suffixes = !1;
        },
        set: function set(e) {
          this._$esjava$B_continue_stemming_noun_suffixes = e;
        }
      }, {
        key: "I_strlen",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$I_strlen") ? this._$esjava$I_strlen : this._$esjava$I_strlen = 0;
        },
        set: function set(e) {
          this._$esjava$I_strlen = e;
        }
      }, {
        key: "r_check_vowel_harmony$esjava$0",
        value: function value() {
          var e, i, t, a, s, n, o, h, l, u, c;
          e = this.limit - this.cursor;

          e: for (;;) {
            i = this.limit - this.cursor;

            i: do {
              if (!this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break i;
              this.cursor = this.limit - i;
              break e;
            } while (0);

            if (this.cursor = this.limit - i, this.cursor <= this.limit_backward) return !1;
            this.cursor--;
          }

          e: do {
            t = this.limit - this.cursor;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "a")) break i;

              r: for (;;) {
                a = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel1, 97, 305)) break t;
                  this.cursor = this.limit - a;
                  break r;
                } while (0);

                if (this.cursor = this.limit - a, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "e")) break i;

              r: for (;;) {
                s = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel2, 101, 252)) break t;
                  this.cursor = this.limit - s;
                  break r;
                } while (0);

                if (this.cursor = this.limit - s, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "ı")) break i;

              r: for (;;) {
                n = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel3, 97, 305)) break t;
                  this.cursor = this.limit - n;
                  break r;
                } while (0);

                if (this.cursor = this.limit - n, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "i")) break i;

              r: for (;;) {
                o = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel4, 101, 105)) break t;
                  this.cursor = this.limit - o;
                  break r;
                } while (0);

                if (this.cursor = this.limit - o, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "o")) break i;

              r: for (;;) {
                h = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel5, 111, 117)) break t;
                  this.cursor = this.limit - h;
                  break r;
                } while (0);

                if (this.cursor = this.limit - h, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "ö")) break i;

              r: for (;;) {
                l = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel6, 246, 252)) break t;
                  this.cursor = this.limit - l;
                  break r;
                } while (0);

                if (this.cursor = this.limit - l, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "u")) break i;

              r: for (;;) {
                u = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel5, 111, 117)) break t;
                  this.cursor = this.limit - u;
                  break r;
                } while (0);

                if (this.cursor = this.limit - u, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              break e;
            } while (0);

            if (this.cursor = this.limit - t, !this.eq_s_b$esjava$2(1, "ü")) return !1;

            i: for (;;) {
              c = this.limit - this.cursor;

              r: do {
                if (!this.in_grouping_b$esjava$3(r.g_vowel6, 246, 252)) break r;
                this.cursor = this.limit - c;
                break i;
              } while (0);

              if (this.cursor = this.limit - c, this.cursor <= this.limit_backward) return !1;
              this.cursor--;
            }
          } while (0);

          return this.cursor = this.limit - e, !0;
        }
      }, {
        key: "r_mark_suffix_with_optional_n_consonant$esjava$0",
        value: function value() {
          var e, i, t, a, s, n, o;

          e: do {
            e = this.limit - this.cursor;

            i: do {
              if (i = this.limit - this.cursor, !this.eq_s_b$esjava$2(1, "n")) break i;
              if (this.cursor = this.limit - i, this.cursor <= this.limit_backward) break i;
              if (this.cursor--, t = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break i;
              this.cursor = this.limit - t;
              break e;
            } while (0);

            this.cursor = this.limit - e, a = this.limit - this.cursor;

            i: do {
              if (s = this.limit - this.cursor, !this.eq_s_b$esjava$2(1, "n")) break i;
              return this.cursor = this.limit - s, !1;
            } while (0);

            if (this.cursor = this.limit - a, n = this.limit - this.cursor, this.cursor <= this.limit_backward) return !1;
            if (this.cursor--, o = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) return !1;
            this.cursor = this.limit - o, this.cursor = this.limit - n;
          } while (0);

          return !0;
        }
      }, {
        key: "r_mark_suffix_with_optional_s_consonant$esjava$0",
        value: function value() {
          var e, i, t, a, s, n, o;

          e: do {
            e = this.limit - this.cursor;

            i: do {
              if (i = this.limit - this.cursor, !this.eq_s_b$esjava$2(1, "s")) break i;
              if (this.cursor = this.limit - i, this.cursor <= this.limit_backward) break i;
              if (this.cursor--, t = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break i;
              this.cursor = this.limit - t;
              break e;
            } while (0);

            this.cursor = this.limit - e, a = this.limit - this.cursor;

            i: do {
              if (s = this.limit - this.cursor, !this.eq_s_b$esjava$2(1, "s")) break i;
              return this.cursor = this.limit - s, !1;
            } while (0);

            if (this.cursor = this.limit - a, n = this.limit - this.cursor, this.cursor <= this.limit_backward) return !1;
            if (this.cursor--, o = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) return !1;
            this.cursor = this.limit - o, this.cursor = this.limit - n;
          } while (0);

          return !0;
        }
      }, {
        key: "r_mark_suffix_with_optional_y_consonant$esjava$0",
        value: function value() {
          var e, i, t, a, s, n, o;

          e: do {
            e = this.limit - this.cursor;

            i: do {
              if (i = this.limit - this.cursor, !this.eq_s_b$esjava$2(1, "y")) break i;
              if (this.cursor = this.limit - i, this.cursor <= this.limit_backward) break i;
              if (this.cursor--, t = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break i;
              this.cursor = this.limit - t;
              break e;
            } while (0);

            this.cursor = this.limit - e, a = this.limit - this.cursor;

            i: do {
              if (s = this.limit - this.cursor, !this.eq_s_b$esjava$2(1, "y")) break i;
              return this.cursor = this.limit - s, !1;
            } while (0);

            if (this.cursor = this.limit - a, n = this.limit - this.cursor, this.cursor <= this.limit_backward) return !1;
            if (this.cursor--, o = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) return !1;
            this.cursor = this.limit - o, this.cursor = this.limit - n;
          } while (0);

          return !0;
        }
      }, {
        key: "r_mark_suffix_with_optional_U_vowel$esjava$0",
        value: function value() {
          var e, i, t, a, s, n, o;

          e: do {
            e = this.limit - this.cursor;

            i: do {
              if (i = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_U, 105, 305)) break i;
              if (this.cursor = this.limit - i, this.cursor <= this.limit_backward) break i;
              if (this.cursor--, t = this.limit - this.cursor, !this.out_grouping_b$esjava$3(r.g_vowel, 97, 305)) break i;
              this.cursor = this.limit - t;
              break e;
            } while (0);

            this.cursor = this.limit - e, a = this.limit - this.cursor;

            i: do {
              if (s = this.limit - this.cursor, !this.in_grouping_b$esjava$3(r.g_U, 105, 305)) break i;
              return this.cursor = this.limit - s, !1;
            } while (0);

            if (this.cursor = this.limit - a, n = this.limit - this.cursor, this.cursor <= this.limit_backward) return !1;
            if (this.cursor--, o = this.limit - this.cursor, !this.out_grouping_b$esjava$3(r.g_vowel, 97, 305)) return !1;
            this.cursor = this.limit - o, this.cursor = this.limit - n;
          } while (0);

          return !0;
        }
      }, {
        key: "r_mark_possessives$esjava$0",
        value: function value() {
          return 0 !== this.find_among_b$esjava$2(r.a_0, 10) && !!this.r_mark_suffix_with_optional_U_vowel$esjava$0();
        }
      }, {
        key: "r_mark_sU$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && !!this.in_grouping_b$esjava$3(r.g_U, 105, 305) && !!this.r_mark_suffix_with_optional_s_consonant$esjava$0();
        }
      }, {
        key: "r_mark_lArI$esjava$0",
        value: function value() {
          return 0 !== this.find_among_b$esjava$2(r.a_1, 2);
        }
      }, {
        key: "r_mark_yU$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && !!this.in_grouping_b$esjava$3(r.g_U, 105, 305) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_nU$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_2, 4);
        }
      }, {
        key: "r_mark_nUn$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_3, 4) && !!this.r_mark_suffix_with_optional_n_consonant$esjava$0();
        }
      }, {
        key: "r_mark_yA$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_4, 2) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_nA$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_5, 2);
        }
      }, {
        key: "r_mark_DA$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_6, 4);
        }
      }, {
        key: "r_mark_ndA$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_7, 2);
        }
      }, {
        key: "r_mark_DAn$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_8, 4);
        }
      }, {
        key: "r_mark_ndAn$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_9, 2);
        }
      }, {
        key: "r_mark_ylA$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_10, 2) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_ki$esjava$0",
        value: function value() {
          return !!this.eq_s_b$esjava$2(2, "ki");
        }
      }, {
        key: "r_mark_ncA$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_11, 2) && !!this.r_mark_suffix_with_optional_n_consonant$esjava$0();
        }
      }, {
        key: "r_mark_yUm$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_12, 4) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_sUn$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_13, 4);
        }
      }, {
        key: "r_mark_yUz$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_14, 4) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_sUnUz$esjava$0",
        value: function value() {
          return 0 !== this.find_among_b$esjava$2(r.a_15, 4);
        }
      }, {
        key: "r_mark_lAr$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_16, 2);
        }
      }, {
        key: "r_mark_nUz$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_17, 4);
        }
      }, {
        key: "r_mark_DUr$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_18, 8);
        }
      }, {
        key: "r_mark_cAsInA$esjava$0",
        value: function value() {
          return 0 !== this.find_among_b$esjava$2(r.a_19, 2);
        }
      }, {
        key: "r_mark_yDU$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_20, 32) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_ysA$esjava$0",
        value: function value() {
          return 0 !== this.find_among_b$esjava$2(r.a_21, 8) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_ymUs_$esjava$0",
        value: function value() {
          return !!this.r_check_vowel_harmony$esjava$0() && 0 !== this.find_among_b$esjava$2(r.a_22, 4) && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_mark_yken$esjava$0",
        value: function value() {
          return !!this.eq_s_b$esjava$2(3, "ken") && !!this.r_mark_suffix_with_optional_y_consonant$esjava$0();
        }
      }, {
        key: "r_stem_nominal_verb_suffixes$esjava$0",
        value: function value() {
          var e, i, r, t, a, s, n, o, h, l;
          this.ket = this.cursor, this.B_continue_stemming_noun_suffixes = !0;

          e: do {
            e = this.limit - this.cursor;

            i: do {
              r: do {
                i = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_ymUs_$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - i;

                t: do {
                  if (!this.r_mark_yDU$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - i;

                t: do {
                  if (!this.r_mark_ysA$esjava$0()) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - i, !this.r_mark_yken$esjava$0()) break i;
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (!this.r_mark_cAsInA$esjava$0()) break i;

              r: do {
                r = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_sUnUz$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - r;

                t: do {
                  if (!this.r_mark_lAr$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - r;

                t: do {
                  if (!this.r_mark_yUm$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - r;

                t: do {
                  if (!this.r_mark_sUn$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - r;

                t: do {
                  if (!this.r_mark_yUz$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - r;
              } while (0);

              if (!this.r_mark_ymUs_$esjava$0()) break i;
              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (!this.r_mark_lAr$esjava$0()) break i;
              this.bra = this.cursor, this.slice_del$esjava$0(), t = this.limit - this.cursor;

              r: do {
                this.ket = this.cursor;

                t: do {
                  a = this.limit - this.cursor;

                  a: do {
                    if (!this.r_mark_DUr$esjava$0()) break a;
                    break t;
                  } while (0);

                  this.cursor = this.limit - a;

                  a: do {
                    if (!this.r_mark_yDU$esjava$0()) break a;
                    break t;
                  } while (0);

                  this.cursor = this.limit - a;

                  a: do {
                    if (!this.r_mark_ysA$esjava$0()) break a;
                    break t;
                  } while (0);

                  if (this.cursor = this.limit - a, !this.r_mark_ymUs_$esjava$0()) {
                    this.cursor = this.limit - t;
                    break r;
                  }
                } while (0);
              } while (0);

              this.B_continue_stemming_noun_suffixes = !1;
              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (!this.r_mark_nUz$esjava$0()) break i;

              r: do {
                s = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_yDU$esjava$0()) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - s, !this.r_mark_ysA$esjava$0()) break i;
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              r: do {
                n = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_sUnUz$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - n;

                t: do {
                  if (!this.r_mark_yUz$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - n;

                t: do {
                  if (!this.r_mark_sUn$esjava$0()) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - n, !this.r_mark_yUm$esjava$0()) break i;
              } while (0);

              this.bra = this.cursor, this.slice_del$esjava$0(), o = this.limit - this.cursor;

              r: do {
                if (this.ket = this.cursor, !this.r_mark_ymUs_$esjava$0()) {
                  this.cursor = this.limit - o;
                  break r;
                }
              } while (0);

              break e;
            } while (0);

            if (this.cursor = this.limit - e, !this.r_mark_DUr$esjava$0()) return !1;
            this.bra = this.cursor, this.slice_del$esjava$0(), h = this.limit - this.cursor;

            i: do {
              this.ket = this.cursor;

              r: do {
                l = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_sUnUz$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - l;

                t: do {
                  if (!this.r_mark_lAr$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - l;

                t: do {
                  if (!this.r_mark_yUm$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - l;

                t: do {
                  if (!this.r_mark_sUn$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - l;

                t: do {
                  if (!this.r_mark_yUz$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - l;
              } while (0);

              if (!this.r_mark_ymUs_$esjava$0()) {
                this.cursor = this.limit - h;
                break i;
              }
            } while (0);
          } while (0);

          return this.bra = this.cursor, this.slice_del$esjava$0(), !0;
        }
      }, {
        key: "r_stem_suffix_chain_before_ki$esjava$0",
        value: function value() {
          var e, i, r, t, a, s, n, o, h, l, u;
          if (this.ket = this.cursor, !this.r_mark_ki$esjava$0()) return !1;

          e: do {
            e = this.limit - this.cursor;

            i: do {
              if (!this.r_mark_DA$esjava$0()) break i;
              this.bra = this.cursor, this.slice_del$esjava$0(), i = this.limit - this.cursor;

              r: do {
                this.ket = this.cursor;

                t: do {
                  r = this.limit - this.cursor;

                  a: do {
                    if (!this.r_mark_lAr$esjava$0()) break a;
                    this.bra = this.cursor, this.slice_del$esjava$0(), t = this.limit - this.cursor;

                    s: do {
                      if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - t;
                        break s;
                      }
                    } while (0);

                    break t;
                  } while (0);

                  if (this.cursor = this.limit - r, !this.r_mark_possessives$esjava$0()) {
                    this.cursor = this.limit - i;
                    break r;
                  }

                  this.bra = this.cursor, this.slice_del$esjava$0(), a = this.limit - this.cursor;

                  a: do {
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                      this.cursor = this.limit - a;
                      break a;
                    }

                    if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                      this.cursor = this.limit - a;
                      break a;
                    }
                  } while (0);
                } while (0);
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (!this.r_mark_nUn$esjava$0()) break i;
              this.bra = this.cursor, this.slice_del$esjava$0(), s = this.limit - this.cursor;

              r: do {
                this.ket = this.cursor;

                t: do {
                  n = this.limit - this.cursor;

                  a: do {
                    if (!this.r_mark_lArI$esjava$0()) break a;
                    this.bra = this.cursor, this.slice_del$esjava$0();
                    break t;
                  } while (0);

                  this.cursor = this.limit - n;

                  a: do {
                    this.ket = this.cursor;

                    s: do {
                      o = this.limit - this.cursor;

                      n: do {
                        if (!this.r_mark_possessives$esjava$0()) break n;
                        break s;
                      } while (0);

                      if (this.cursor = this.limit - o, !this.r_mark_sU$esjava$0()) break a;
                    } while (0);

                    this.bra = this.cursor, this.slice_del$esjava$0(), h = this.limit - this.cursor;

                    s: do {
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                        this.cursor = this.limit - h;
                        break s;
                      }

                      if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - h;
                        break s;
                      }
                    } while (0);

                    break t;
                  } while (0);

                  if (this.cursor = this.limit - n, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                    this.cursor = this.limit - s;
                    break r;
                  }
                } while (0);
              } while (0);

              break e;
            } while (0);

            if (this.cursor = this.limit - e, !this.r_mark_ndA$esjava$0()) return !1;

            i: do {
              l = this.limit - this.cursor;

              r: do {
                if (!this.r_mark_lArI$esjava$0()) break r;
                this.bra = this.cursor, this.slice_del$esjava$0();
                break i;
              } while (0);

              this.cursor = this.limit - l;

              r: do {
                if (!this.r_mark_sU$esjava$0()) break r;
                this.bra = this.cursor, this.slice_del$esjava$0(), u = this.limit - this.cursor;

                t: do {
                  if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                    this.cursor = this.limit - u;
                    break t;
                  }

                  if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                    this.cursor = this.limit - u;
                    break t;
                  }
                } while (0);

                break i;
              } while (0);

              if (this.cursor = this.limit - l, !this.r_stem_suffix_chain_before_ki$esjava$0()) return !1;
            } while (0);
          } while (0);

          return !0;
        }
      }, {
        key: "r_stem_noun_suffixes$esjava$0",
        value: function value() {
          var e, i, r, t, a, s, n, o, h, l, u, c, k, m, _, d, f, b, y, $, v, p, g, j, w, z, x;

          e: do {
            e = this.limit - this.cursor;

            i: do {
              if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) break i;
              this.bra = this.cursor, this.slice_del$esjava$0(), i = this.limit - this.cursor;

              r: do {
                if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                  this.cursor = this.limit - i;
                  break r;
                }
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (this.ket = this.cursor, !this.r_mark_ncA$esjava$0()) break i;
              this.bra = this.cursor, this.slice_del$esjava$0(), r = this.limit - this.cursor;

              r: do {
                t: do {
                  t = this.limit - this.cursor;

                  a: do {
                    if (this.ket = this.cursor, !this.r_mark_lArI$esjava$0()) break a;
                    this.bra = this.cursor, this.slice_del$esjava$0();
                    break t;
                  } while (0);

                  this.cursor = this.limit - t;

                  a: do {
                    this.ket = this.cursor;

                    s: do {
                      a = this.limit - this.cursor;

                      n: do {
                        if (!this.r_mark_possessives$esjava$0()) break n;
                        break s;
                      } while (0);

                      if (this.cursor = this.limit - a, !this.r_mark_sU$esjava$0()) break a;
                    } while (0);

                    this.bra = this.cursor, this.slice_del$esjava$0(), s = this.limit - this.cursor;

                    s: do {
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                        this.cursor = this.limit - s;
                        break s;
                      }

                      if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - s;
                        break s;
                      }
                    } while (0);

                    break t;
                  } while (0);

                  if (this.cursor = this.limit - t, this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                    this.cursor = this.limit - r;
                    break r;
                  }

                  if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                    this.cursor = this.limit - r;
                    break r;
                  }
                } while (0);
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              this.ket = this.cursor;

              r: do {
                n = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_ndA$esjava$0()) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - n, !this.r_mark_nA$esjava$0()) break i;
              } while (0);

              r: do {
                o = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_lArI$esjava$0()) break t;
                  this.bra = this.cursor, this.slice_del$esjava$0();
                  break r;
                } while (0);

                this.cursor = this.limit - o;

                t: do {
                  if (!this.r_mark_sU$esjava$0()) break t;
                  this.bra = this.cursor, this.slice_del$esjava$0(), h = this.limit - this.cursor;

                  a: do {
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                      this.cursor = this.limit - h;
                      break a;
                    }

                    if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                      this.cursor = this.limit - h;
                      break a;
                    }
                  } while (0);

                  break r;
                } while (0);

                if (this.cursor = this.limit - o, !this.r_stem_suffix_chain_before_ki$esjava$0()) break i;
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              this.ket = this.cursor;

              r: do {
                l = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_ndAn$esjava$0()) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - l, !this.r_mark_nU$esjava$0()) break i;
              } while (0);

              r: do {
                u = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_sU$esjava$0()) break t;
                  this.bra = this.cursor, this.slice_del$esjava$0(), c = this.limit - this.cursor;

                  a: do {
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                      this.cursor = this.limit - c;
                      break a;
                    }

                    if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                      this.cursor = this.limit - c;
                      break a;
                    }
                  } while (0);

                  break r;
                } while (0);

                if (this.cursor = this.limit - u, !this.r_mark_lArI$esjava$0()) break i;
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (this.ket = this.cursor, !this.r_mark_DAn$esjava$0()) break i;
              this.bra = this.cursor, this.slice_del$esjava$0(), k = this.limit - this.cursor;

              r: do {
                this.ket = this.cursor;

                t: do {
                  m = this.limit - this.cursor;

                  a: do {
                    if (!this.r_mark_possessives$esjava$0()) break a;
                    this.bra = this.cursor, this.slice_del$esjava$0(), _ = this.limit - this.cursor;

                    s: do {
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                        this.cursor = this.limit - _;
                        break s;
                      }

                      if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - _;
                        break s;
                      }
                    } while (0);

                    break t;
                  } while (0);

                  this.cursor = this.limit - m;

                  a: do {
                    if (!this.r_mark_lAr$esjava$0()) break a;
                    this.bra = this.cursor, this.slice_del$esjava$0(), d = this.limit - this.cursor;

                    s: do {
                      if (!this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - d;
                        break s;
                      }
                    } while (0);

                    break t;
                  } while (0);

                  if (this.cursor = this.limit - m, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                    this.cursor = this.limit - k;
                    break r;
                  }
                } while (0);
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              this.ket = this.cursor;

              r: do {
                f = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_nUn$esjava$0()) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - f, !this.r_mark_ylA$esjava$0()) break i;
              } while (0);

              this.bra = this.cursor, this.slice_del$esjava$0(), b = this.limit - this.cursor;

              r: do {
                t: do {
                  y = this.limit - this.cursor;

                  a: do {
                    if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) break a;
                    if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) break a;
                    break t;
                  } while (0);

                  this.cursor = this.limit - y;

                  a: do {
                    this.ket = this.cursor;

                    s: do {
                      $ = this.limit - this.cursor;

                      n: do {
                        if (!this.r_mark_possessives$esjava$0()) break n;
                        break s;
                      } while (0);

                      if (this.cursor = this.limit - $, !this.r_mark_sU$esjava$0()) break a;
                    } while (0);

                    this.bra = this.cursor, this.slice_del$esjava$0(), v = this.limit - this.cursor;

                    s: do {
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                        this.cursor = this.limit - v;
                        break s;
                      }

                      if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                        this.cursor = this.limit - v;
                        break s;
                      }
                    } while (0);

                    break t;
                  } while (0);

                  if (this.cursor = this.limit - y, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                    this.cursor = this.limit - b;
                    break r;
                  }
                } while (0);
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (this.ket = this.cursor, !this.r_mark_lArI$esjava$0()) break i;
              this.bra = this.cursor, this.slice_del$esjava$0();
              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              if (!this.r_stem_suffix_chain_before_ki$esjava$0()) break i;
              break e;
            } while (0);

            this.cursor = this.limit - e;

            i: do {
              this.ket = this.cursor;

              r: do {
                p = this.limit - this.cursor;

                t: do {
                  if (!this.r_mark_DA$esjava$0()) break t;
                  break r;
                } while (0);

                this.cursor = this.limit - p;

                t: do {
                  if (!this.r_mark_yU$esjava$0()) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - p, !this.r_mark_yA$esjava$0()) break i;
              } while (0);

              this.bra = this.cursor, this.slice_del$esjava$0(), g = this.limit - this.cursor;

              r: do {
                this.ket = this.cursor;

                t: do {
                  j = this.limit - this.cursor;

                  a: do {
                    if (!this.r_mark_possessives$esjava$0()) break a;
                    this.bra = this.cursor, this.slice_del$esjava$0(), w = this.limit - this.cursor;

                    s: do {
                      if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                        this.cursor = this.limit - w;
                        break s;
                      }
                    } while (0);

                    break t;
                  } while (0);

                  if (this.cursor = this.limit - j, !this.r_mark_lAr$esjava$0()) {
                    this.cursor = this.limit - g;
                    break r;
                  }
                } while (0);

                if (this.bra = this.cursor, this.slice_del$esjava$0(), this.ket = this.cursor, !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                  this.cursor = this.limit - g;
                  break r;
                }
              } while (0);

              break e;
            } while (0);

            this.cursor = this.limit - e, this.ket = this.cursor;

            i: do {
              z = this.limit - this.cursor;

              r: do {
                if (!this.r_mark_possessives$esjava$0()) break r;
                break i;
              } while (0);

              if (this.cursor = this.limit - z, !this.r_mark_sU$esjava$0()) return !1;
            } while (0);

            this.bra = this.cursor, this.slice_del$esjava$0(), x = this.limit - this.cursor;

            i: do {
              if (this.ket = this.cursor, !this.r_mark_lAr$esjava$0()) {
                this.cursor = this.limit - x;
                break i;
              }

              if (this.bra = this.cursor, this.slice_del$esjava$0(), !this.r_stem_suffix_chain_before_ki$esjava$0()) {
                this.cursor = this.limit - x;
                break i;
              }
            } while (0);
          } while (0);

          return !0;
        }
      }, {
        key: "r_post_process_last_consonants$esjava$0",
        value: function value() {
          var e;
          if (this.ket = this.cursor, 0 === (e = this.find_among_b$esjava$2(r.a_23, 4))) return !1;

          switch (this.bra = this.cursor, e) {
            case 0:
              return !1;

            case 1:
              this.slice_from$esjava$1("p");
              break;

            case 2:
              this.slice_from$esjava$1("ç");
              break;

            case 3:
              this.slice_from$esjava$1("t");
              break;

            case 4:
              this.slice_from$esjava$1("k");
          }

          return !0;
        }
      }, {
        key: "r_append_U_to_stems_ending_with_d_or_g$esjava$0",
        value: function value() {
          var e, i, t, a, s, n, o, h, l, u, c, k, m, _, d;

          e = this.limit - this.cursor;

          e: do {
            i = this.limit - this.cursor;

            i: do {
              if (!this.eq_s_b$esjava$2(1, "d")) break i;
              break e;
            } while (0);

            if (this.cursor = this.limit - i, !this.eq_s_b$esjava$2(1, "g")) return !1;
          } while (0);

          this.cursor = this.limit - e;

          e: do {
            t = this.limit - this.cursor;

            i: do {
              a = this.limit - this.cursor;

              r: for (;;) {
                s = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break t;
                  this.cursor = this.limit - s;
                  break r;
                } while (0);

                if (this.cursor = this.limit - s, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              r: do {
                n = this.limit - this.cursor;

                t: do {
                  if (!this.eq_s_b$esjava$2(1, "a")) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - n, !this.eq_s_b$esjava$2(1, "ı")) break i;
              } while (0);

              this.cursor = this.limit - a;
              var f = this.cursor;
              this.insert$esjava$3(this.cursor, this.cursor, "ı"), this.cursor = f;
              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              o = this.limit - this.cursor;

              r: for (;;) {
                h = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break t;
                  this.cursor = this.limit - h;
                  break r;
                } while (0);

                if (this.cursor = this.limit - h, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              r: do {
                l = this.limit - this.cursor;

                t: do {
                  if (!this.eq_s_b$esjava$2(1, "e")) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - l, !this.eq_s_b$esjava$2(1, "i")) break i;
              } while (0);

              this.cursor = this.limit - o;
              var b = this.cursor;
              this.insert$esjava$3(this.cursor, this.cursor, "i"), this.cursor = b;
              break e;
            } while (0);

            this.cursor = this.limit - t;

            i: do {
              u = this.limit - this.cursor;

              r: for (;;) {
                c = this.limit - this.cursor;

                t: do {
                  if (!this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break t;
                  this.cursor = this.limit - c;
                  break r;
                } while (0);

                if (this.cursor = this.limit - c, this.cursor <= this.limit_backward) break i;
                this.cursor--;
              }

              r: do {
                k = this.limit - this.cursor;

                t: do {
                  if (!this.eq_s_b$esjava$2(1, "o")) break t;
                  break r;
                } while (0);

                if (this.cursor = this.limit - k, !this.eq_s_b$esjava$2(1, "u")) break i;
              } while (0);

              this.cursor = this.limit - u;
              var y = this.cursor;
              this.insert$esjava$3(this.cursor, this.cursor, "u"), this.cursor = y;
              break e;
            } while (0);

            this.cursor = this.limit - t, m = this.limit - this.cursor;

            i: for (;;) {
              _ = this.limit - this.cursor;

              r: do {
                if (!this.in_grouping_b$esjava$3(r.g_vowel, 97, 305)) break r;
                this.cursor = this.limit - _;
                break i;
              } while (0);

              if (this.cursor = this.limit - _, this.cursor <= this.limit_backward) return !1;
              this.cursor--;
            }

            i: do {
              d = this.limit - this.cursor;

              r: do {
                if (!this.eq_s_b$esjava$2(1, "ö")) break r;
                break i;
              } while (0);

              if (this.cursor = this.limit - d, !this.eq_s_b$esjava$2(1, "ü")) return !1;
            } while (0);

            this.cursor = this.limit - m;
            var $ = this.cursor;
            this.insert$esjava$3(this.cursor, this.cursor, "ü"), this.cursor = $;
          } while (0);

          return !0;
        }
      }, {
        key: "r_more_than_one_syllable_word$esjava$0",
        value: function value() {
          var e, i;
          e = this.cursor;
          var t = 2;

          e: for (;;) {
            i = this.cursor;

            i: do {
              r: for (;;) {
                t: do {
                  if (!this.in_grouping$esjava$3(r.g_vowel, 97, 305)) break t;
                  break r;
                } while (0);

                if (this.cursor >= this.limit) break i;
                this.cursor++;
              }

              t--;
              continue e;
            } while (0);

            this.cursor = i;
            break e;
          }

          return !(t > 0 || (this.cursor = e, 0));
        }
      }, {
        key: "r_is_reserved_word$esjava$0",
        value: function value() {
          var e, i, r;

          e: do {
            e = this.cursor;

            i: do {
              i = this.cursor;

              r: for (;;) {
                t: do {
                  if (!this.eq_s$esjava$2(2, "ad")) break t;
                  break r;
                } while (0);

                if (this.cursor >= this.limit) break i;
                this.cursor++;
              }

              if (this.I_strlen = 2, this.I_strlen !== this.limit) break i;
              this.cursor = i;
              break e;
            } while (0);

            this.cursor = e, r = this.cursor;

            i: for (;;) {
              r: do {
                if (!this.eq_s$esjava$2(5, "soyad")) break r;
                break i;
              } while (0);

              if (this.cursor >= this.limit) return !1;
              this.cursor++;
            }

            if (this.I_strlen = 5, this.I_strlen !== this.limit) return !1;
            this.cursor = r;
          } while (0);

          return !0;
        }
      }, {
        key: "r_postlude$esjava$0",
        value: function value() {
          var e, i, r;
          e = this.cursor;

          e: do {
            if (!this.r_is_reserved_word$esjava$0()) break e;
            return !1;
          } while (0);

          this.cursor = e, this.limit_backward = this.cursor, this.cursor = this.limit, i = this.limit - this.cursor;

          e: do {
            if (!this.r_append_U_to_stems_ending_with_d_or_g$esjava$0()) break e;
          } while (0);

          this.cursor = this.limit - i, r = this.limit - this.cursor;

          e: do {
            if (!this.r_post_process_last_consonants$esjava$0()) break e;
          } while (0);

          return this.cursor = this.limit - r, this.cursor = this.limit_backward, !0;
        }
      }, {
        key: "stem$esjava$0",
        value: function value() {
          var e, i;
          if (!this.r_more_than_one_syllable_word$esjava$0()) return !1;
          this.limit_backward = this.cursor, this.cursor = this.limit, e = this.limit - this.cursor;

          e: do {
            if (!this.r_stem_nominal_verb_suffixes$esjava$0()) break e;
          } while (0);

          if (this.cursor = this.limit - e, !this.B_continue_stemming_noun_suffixes) return !1;
          i = this.limit - this.cursor;

          e: do {
            if (!this.r_stem_noun_suffixes$esjava$0()) break e;
          } while (0);

          return this.cursor = this.limit - i, this.cursor = this.limit_backward, !!this.r_postlude$esjava$0();
        }
      }, {
        key: "stem",
        value: function value() {
          for (var e, i = arguments.length, t = new Array(i), a = 0; a < i; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 0:
              return this.stem$esjava$0.apply(this, t);
          }

          return (e = g()(u()(r.prototype), "stem", this)).call.apply(e, [this].concat(t));
        }
      }], [{
        key: "methodObject",
        get: function get() {
          return delete r.methodObject, r.methodObject = null;
        }
      }, {
        key: "a_0",
        get: function get() {
          return delete r.a_0, r.a_0 = [new z(r.morphologyData.a_0.SuffixM, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixN, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixMiz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixNiz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixMuz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixNuz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixMuzDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixNuzDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixMizUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_0.SuffixNizUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_1",
        get: function get() {
          return delete r.a_1, r.a_1 = [new z(r.morphologyData.a_1.SuffixLeri, -1, -1, "", r.methodObject), new z(r.morphologyData.a_1.SuffixLariUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_2",
        get: function get() {
          return delete r.a_2, r.a_2 = [new z(r.morphologyData.a_2.SuffixNi, -1, -1, "", r.methodObject), new z(r.morphologyData.a_2.SuffixNu, -1, -1, "", r.methodObject), new z(r.morphologyData.a_2.SuffixNuDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_2.SuffixNiUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_3",
        get: function get() {
          return delete r.a_3, r.a_3 = [new z(r.morphologyData.a_3.SuffixInDotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_3.SuffixUn, -1, -1, "", r.methodObject), new z(r.morphologyData.a_3.SuffixUnDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_3.SuffixInUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_4",
        get: function get() {
          return delete r.a_4, r.a_4 = [new z(r.morphologyData.a_4.SuffixA, -1, -1, "", r.methodObject), new z(r.morphologyData.a_4.SuffixE, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_5",
        get: function get() {
          return delete r.a_5, r.a_5 = [new z(r.morphologyData.a_5.SuffixNa, -1, -1, "", r.methodObject), new z(r.morphologyData.a_5.SuffixNe, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_6",
        get: function get() {
          return delete r.a_6, r.a_6 = [new z(r.morphologyData.a_6.SuffixDa, -1, -1, "", r.methodObject), new z(r.morphologyData.a_6.SuffixTa, -1, -1, "", r.methodObject), new z(r.morphologyData.a_6.SuffixDe, -1, -1, "", r.methodObject), new z(r.morphologyData.a_6.SuffixTe, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_7",
        get: function get() {
          return delete r.a_7, r.a_7 = [new z(r.morphologyData.a_7.SuffixNda, -1, -1, "", r.methodObject), new z(r.morphologyData.a_7.SuffixNde, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_8",
        get: function get() {
          return delete r.a_8, r.a_8 = [new z(r.morphologyData.a_8.SuffixDan, -1, -1, "", r.methodObject), new z(r.morphologyData.a_8.SuffixTan, -1, -1, "", r.methodObject), new z(r.morphologyData.a_8.SuffixDen, -1, -1, "", r.methodObject), new z(r.morphologyData.a_8.SuffixTen, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_9",
        get: function get() {
          return delete r.a_9, r.a_9 = [new z(r.morphologyData.a_9.SuffixNdan, -1, -1, "", r.methodObject), new z(r.morphologyData.a_9.SuffixNden, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_10",
        get: function get() {
          return delete r.a_10, r.a_10 = [new z(r.morphologyData.a_10.SuffixLa, -1, -1, "", r.methodObject), new z(r.morphologyData.a_10.SuffixLe, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_11",
        get: function get() {
          return delete r.a_11, r.a_11 = [new z(r.morphologyData.a_11.SuffixCa, -1, -1, "", r.methodObject), new z(r.morphologyData.a_11.SuffixCe, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_12",
        get: function get() {
          return delete r.a_12, r.a_12 = [new z(r.morphologyData.a_12.SuffixImDotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_12.SuffixUm, -1, -1, "", r.methodObject), new z(r.morphologyData.a_12.SuffixUmDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_12.SuffixImUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_13",
        get: function get() {
          return delete r.a_13, r.a_13 = [new z(r.morphologyData.a_13.SuffixSin, -1, -1, "", r.methodObject), new z(r.morphologyData.a_13.SuffixSun, -1, -1, "", r.methodObject), new z(r.morphologyData.a_13.SuffixSunDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_13.SuffixSinUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_14",
        get: function get() {
          return delete r.a_14, r.a_14 = [new z(r.morphologyData.a_14.SuffixIzDotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_14.SuffixUz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_14.SuffixUzDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_14.SuffixIzUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_15",
        get: function get() {
          return delete r.a_15, r.a_15 = [new z(r.morphologyData.a_15.SuffixSiniz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_15.SuffixSunuz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_15.SuffixSunuzDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_15.SuffixSinizUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_16",
        get: function get() {
          return delete r.a_16, r.a_16 = [new z(r.morphologyData.a_16.SuffixLar, -1, -1, "", r.methodObject), new z(r.morphologyData.a_16.SuffixLer, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_17",
        get: function get() {
          return delete r.a_17, r.a_17 = [new z(r.morphologyData.a_17.SuffixNiz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_17.SuffixNuz, -1, -1, "", r.methodObject), new z(r.morphologyData.a_17.SuffixNuzDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_17.SuffixNizUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_18",
        get: function get() {
          return delete r.a_18, r.a_18 = [new z(r.morphologyData.a_18.SuffixDir, -1, -1, "", r.methodObject), new z(r.morphologyData.a_18.SuffixTir, -1, -1, "", r.methodObject), new z(r.morphologyData.a_18.SuffixDur, -1, -1, "", r.methodObject), new z(r.morphologyData.a_18.SuffixTur, -1, -1, "", r.methodObject), new z(r.morphologyData.a_18.SuffixDurDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_18.SuffixTurDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_18.SuffixDirUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_18.SuffixTirUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_19",
        get: function get() {
          return delete r.a_19, r.a_19 = [new z(r.morphologyData.a_19.SuffixCasinaUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_19.SuffixCesine, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_20",
        get: function get() {
          return delete r.a_20, r.a_20 = [new z(r.morphologyData.a_20.SuffixDi, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTi, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDik, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTik, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDuk, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTuk, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDukDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTukDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDikUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTikUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDim, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTim, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDum, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTum, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDumDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTumDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDimUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTimUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDin, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTin, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDun, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTun, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDunDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTunDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDinUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTinUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDu, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTu, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDuDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTuDieresis, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixDiUndotted, -1, -1, "", r.methodObject), new z(r.morphologyData.a_20.SuffixTiUndotted, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_21",
        get: function get() {
          return delete r.a_21, r.a_21 = [new z(r.morphologyData.a_21.SuffixSa, -1, -1, "", r.methodObject), new z(r.morphologyData.a_21.SuffixSe, -1, -1, "", r.methodObject), new z(r.morphologyData.a_21.SuffixSak, -1, -1, "", r.methodObject), new z(r.morphologyData.a_21.SuffixSek, -1, -1, "", r.methodObject), new z(r.morphologyData.a_21.SuffixSam, -1, -1, "", r.methodObject), new z(r.morphologyData.a_21.SuffixSem, -1, -1, "", r.methodObject), new z(r.morphologyData.a_21.SuffixSan, -1, -1, "", r.methodObject), new z(r.morphologyData.a_21.SuffixSen, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_22",
        get: function get() {
          return delete r.a_22, r.a_22 = [new z(r.morphologyData.a_22.SuffixMisCedilla, -1, -1, "", r.methodObject), new z(r.morphologyData.a_22.SuffixMusCedilla, -1, -1, "", r.methodObject), new z(r.morphologyData.a_22.SuffixMusDieresisCedilla, -1, -1, "", r.methodObject), new z(r.morphologyData.a_22.SuffixMisUndottedCedilla, -1, -1, "", r.methodObject)];
        }
      }, {
        key: "a_23",
        get: function get() {
          return delete r.a_23, r.a_23 = [new z(r.morphologyData.a_23.SuffixB, -1, 1, "", r.methodObject), new z(r.morphologyData.a_23.SuffixC, -1, 2, "", r.methodObject), new z(r.morphologyData.a_23.SuffixD, -1, 3, "", r.methodObject), new z(r.morphologyData.a_23.SuffixGSoft, -1, 4, "", r.methodObject)];
        }
      }, {
        key: "g_vowel",
        get: function get() {
          return delete r.g_vowel, r.g_vowel = [17, 65, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 8, 0, 0, 0, 0, 0, 0, 1];
        }
      }, {
        key: "g_U",
        get: function get() {
          return delete r.g_U, r.g_U = [1, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1];
        }
      }, {
        key: "g_vowel1",
        get: function get() {
          return delete r.g_vowel1, r.g_vowel1 = [1, 64, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        }
      }, {
        key: "g_vowel2",
        get: function get() {
          return delete r.g_vowel2, r.g_vowel2 = [17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130];
        }
      }, {
        key: "g_vowel3",
        get: function get() {
          return delete r.g_vowel3, r.g_vowel3 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];
        }
      }, {
        key: "g_vowel4",
        get: function get() {
          return delete r.g_vowel4, r.g_vowel4 = [17];
        }
      }, {
        key: "g_vowel5",
        get: function get() {
          return delete r.g_vowel5, r.g_vowel5 = [65];
        }
      }, {
        key: "g_vowel6",
        get: function get() {
          return delete r.g_vowel6, r.g_vowel6 = [65];
        }
      }]), r;
    }(function (e) {
      n()(r, e);
      var i = j(r);

      function r() {
        return a()(this, r), i.apply(this, arguments);
      }

      return v()(r, [{
        key: "stem$esjava$0",
        value: function value() {
          throw "NotImpl < stem$esjava$0 >";
        }
      }, {
        key: "stem",
        value: function value() {
          for (var e, i = arguments.length, t = new Array(i), a = 0; a < i; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 0:
              return this.stem$esjava$0.apply(this, t);
          }

          return (e = g()(u()(r.prototype), "stem", this)).call.apply(e, [this].concat(t));
        }
      }]), r;
    }(function () {
      function e() {
        a()(this, e), this.current = new w(), this.setCurrent$esjava$1("");
      }

      return v()(e, [{
        key: "setCurrent$esjava$1",
        value: function value(e) {
          this.current.replace(0, this.current.length(), e), this.cursor = 0, this.limit = this.current.length(), this.limit_backward = 0, this.bra = this.cursor, this.ket = this.limit;
        }
      }, {
        key: "getCurrent$esjava$0",
        value: function value() {
          var e = this.current.toString();
          return this.current = new w(), e;
        }
      }, {
        key: "current",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$current") ? this._$esjava$current : this._$esjava$current = null;
        },
        set: function set(e) {
          this._$esjava$current = e;
        }
      }, {
        key: "cursor",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$cursor") ? this._$esjava$cursor : this._$esjava$cursor = 0;
        },
        set: function set(e) {
          this._$esjava$cursor = e;
        }
      }, {
        key: "limit",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$limit") ? this._$esjava$limit : this._$esjava$limit = 0;
        },
        set: function set(e) {
          this._$esjava$limit = e;
        }
      }, {
        key: "limit_backward",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$limit_backward") ? this._$esjava$limit_backward : this._$esjava$limit_backward = 0;
        },
        set: function set(e) {
          this._$esjava$limit_backward = e;
        }
      }, {
        key: "bra",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$bra") ? this._$esjava$bra : this._$esjava$bra = 0;
        },
        set: function set(e) {
          this._$esjava$bra = e;
        }
      }, {
        key: "ket",
        get: function get() {
          return Object.prototype.hasOwnProperty.call(this, "_$esjava$ket") ? this._$esjava$ket : this._$esjava$ket = 0;
        },
        set: function set(e) {
          this._$esjava$ket = e;
        }
      }, {
        key: "copy_from$esjava$1",
        value: function value(e) {
          this.current = e.current, this.cursor = e.cursor, this.limit = e.limit, this.limit_backward = e.limit_backward, this.bra = e.bra, this.ket = e.ket;
        }
      }, {
        key: "in_grouping$esjava$3",
        value: function value(e, i, r) {
          if (this.cursor >= this.limit) return !1;
          var t = this.current.charAt(this.cursor);
          return !(t > r || t < i || 0 == (e[(t -= i) >> 3] & 1 << (7 & t)) || (this.cursor++, 0));
        }
      }, {
        key: "in_grouping_b$esjava$3",
        value: function value(e, i, r) {
          if (this.cursor <= this.limit_backward) return !1;
          var t = this.current.charAt(this.cursor - 1);
          return !(t > r || t < i || 0 == (e[(t -= i) >> 3] & 1 << (7 & t)) || (this.cursor--, 0));
        }
      }, {
        key: "out_grouping$esjava$3",
        value: function value(e, i, r) {
          if (this.cursor >= this.limit) return !1;
          var t = this.current.charAt(this.cursor);
          return (t > r || t < i || 0 == (e[(t -= i) >> 3] & 1 << (7 & t))) && (this.cursor++, !0);
        }
      }, {
        key: "out_grouping_b$esjava$3",
        value: function value(e, i, r) {
          if (this.cursor <= this.limit_backward) return !1;
          var t = this.current.charAt(this.cursor - 1);
          return (t > r || t < i || 0 == (e[(t -= i) >> 3] & 1 << (7 & t))) && (this.cursor--, !0);
        }
      }, {
        key: "in_range$esjava$2",
        value: function value(e, i) {
          if (this.cursor >= this.limit) return !1;
          var r = this.current.charAt(this.cursor);
          return !(r > i || r < e || (this.cursor++, 0));
        }
      }, {
        key: "in_range_b$esjava$2",
        value: function value(e, i) {
          if (this.cursor <= this.limit_backward) return !1;
          var r = this.current.charAt(this.cursor - 1);
          return !(r > i || r < e || (this.cursor--, 0));
        }
      }, {
        key: "out_range$esjava$2",
        value: function value(e, i) {
          if (this.cursor >= this.limit) return !1;
          var r = this.current.charAt(this.cursor);
          return (r > i || r < e) && (this.cursor++, !0);
        }
      }, {
        key: "out_range_b$esjava$2",
        value: function value(e, i) {
          if (this.cursor <= this.limit_backward) return !1;
          var r = this.current.charAt(this.cursor - 1);
          return (r > i || r < e) && (this.cursor--, !0);
        }
      }, {
        key: "eq_s$esjava$2",
        value: function value(e, i) {
          if (this.limit - this.cursor < e) return !1;
          var r;

          for (r = 0; r !== e; r++) {
            if (this.current.charAt(this.cursor + r) !== i.charCodeAt(r)) return !1;
          }

          return this.cursor += e, !0;
        }
      }, {
        key: "eq_s_b$esjava$2",
        value: function value(e, i) {
          if (this.cursor - this.limit_backward < e) return !1;
          var r;

          for (r = 0; r !== e; r++) {
            if (this.current.charAt(this.cursor - e + r) !== i.charCodeAt(r)) return !1;
          }

          return this.cursor -= e, !0;
        }
      }, {
        key: "eq_v$esjava$1",
        value: function value(e) {
          return this.eq_s$esjava$2(e.length(), e.toString());
        }
      }, {
        key: "eq_v_b$esjava$1",
        value: function value(e) {
          return this.eq_s_b$esjava$2(e.length(), e.toString());
        }
      }, {
        key: "find_among$esjava$2",
        value: function value(e, i) {
          for (var r = 0, t = i, a = this.cursor, s = this.limit, n = 0, o = 0, h = !1;;) {
            var l = r + (t - r >> 1),
                u = 0,
                c = n < o ? n : o,
                k = e[l],
                m = void 0;

            for (m = c; m < k.s_size; m++) {
              if (a + c === s) {
                u = -1;
                break;
              }

              if (0 != (u = this.current.charAt(a + c) - k.s[m])) break;
              c++;
            }

            if (u < 0 ? (t = l, o = c) : (r = l, n = c), t - r <= 1) {
              if (r > 0) break;
              if (t === r) break;
              if (h) break;
              h = !0;
            }
          }

          for (;;) {
            var _ = e[r];

            if (n >= _.s_size) {
              if (this.cursor = a + _.s_size, null === _.method) return _.result;
              var d;
              if (d = _.method.call(_.methodobject), this.cursor = a + _.s_size, d) return _.result;
            }

            if ((r = _.substring_i) < 0) return 0;
          }
        }
      }, {
        key: "find_among_b$esjava$2",
        value: function value(e, i) {
          for (var r = 0, t = i, a = this.cursor, s = this.limit_backward, n = 0, o = 0, h = !1;;) {
            var l = r + (t - r >> 1),
                u = 0,
                c = n < o ? n : o,
                k = e[l],
                m = void 0;

            for (m = k.s_size - 1 - c; m >= 0; m--) {
              if (a - c === s) {
                u = -1;
                break;
              }

              if (0 != (u = this.current.charAt(a - 1 - c) - k.s[m])) break;
              c++;
            }

            if (u < 0 ? (t = l, o = c) : (r = l, n = c), t - r <= 1) {
              if (r > 0) break;
              if (t === r) break;
              if (h) break;
              h = !0;
            }
          }

          for (;;) {
            var _ = e[r];

            if (n >= _.s_size) {
              if (this.cursor = a - _.s_size, null === _.method) return _.result;
              var d;
              if (d = _.method.call(_.methodobject), this.cursor = a - _.s_size, d) return _.result;
            }

            if ((r = _.substring_i) < 0) return 0;
          }
        }
      }, {
        key: "replace_s$esjava$3",
        value: function value(e, i, r) {
          var t = r.length - (i - e);
          return this.current.replace(e, i, r), this.limit += t, this.cursor >= i ? this.cursor += t : this.cursor > e && (this.cursor = e), t;
        }
      }, {
        key: "slice_check$esjava$0",
        value: function value() {
          if (this.bra < 0 || this.bra > this.ket || this.ket > this.limit || this.limit > this.current.length()) throw new Error("Snowball: faulty slice operation");
        }
      }, {
        key: "slice_from$esjava$1",
        value: function value(e) {
          this.slice_check$esjava$0(), this.replace_s$esjava$3(this.bra, this.ket, e);
        }
      }, {
        key: "slice_del$esjava$0",
        value: function value() {
          this.slice_from$esjava$1("");
        }
      }, {
        key: "insert$esjava$3",
        value: function value(e, i, r) {
          var t = this.replace_s$esjava$3(e, i, r);
          e <= this.bra && (this.bra += t), e <= this.ket && (this.ket += t);
        }
      }, {
        key: "slice_to$esjava$1",
        value: function value(e) {
          return this.slice_check$esjava$0(), e.replace(0, e.length(), this.current.substring(this.bra, this.ket)), e;
        }
      }, {
        key: "setCurrent",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 1:
              return this.setCurrent$esjava$1.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "setCurrent", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "getCurrent",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 0:
              return this.getCurrent$esjava$0.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "getCurrent", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "copy_from",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 1:
              return this.copy_from$esjava$1.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "copy_from", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "in_grouping",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 3:
              return this.in_grouping$esjava$3.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "in_grouping", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "in_grouping_b",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 3:
              return this.in_grouping_b$esjava$3.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "in_grouping_b", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "out_grouping",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 3:
              return this.out_grouping$esjava$3.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "out_grouping", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "out_grouping_b",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 3:
              return this.out_grouping_b$esjava$3.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "out_grouping_b", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "in_range",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.in_range$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "in_range", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "in_range_b",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.in_range_b$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "in_range_b", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "out_range",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.out_range$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "out_range", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "out_range_b",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.out_range_b$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "out_range_b", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "eq_s",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.eq_s$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "eq_s", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "eq_s_b",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.eq_s_b$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "eq_s_b", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "eq_v",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 1:
              return this.eq_v$esjava$1.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "eq_v", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "eq_v_b",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 1:
              return this.eq_v_b$esjava$1.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "eq_v_b", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "find_among",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.find_among$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "find_among", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "find_among_b",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 2:
              return this.find_among_b$esjava$2.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "find_among_b", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "replace_s",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 3:
              return this.replace_s$esjava$3.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "replace_s", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "slice_check",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 0:
              return this.slice_check$esjava$0.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "slice_check", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "slice_from",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 1:
              return this.slice_from$esjava$1.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "slice_from", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "slice_del",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 0:
              return this.slice_del$esjava$0.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "slice_del", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "insert",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 3:
              return this.insert$esjava$3.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "insert", this)).call.apply(i, [this].concat(t));
        }
      }, {
        key: "slice_to",
        value: function value() {
          for (var i, r = arguments.length, t = new Array(r), a = 0; a < r; a++) {
            t[a] = arguments[a];
          }

          switch (t.length) {
            case 1:
              return this.slice_to$esjava$1.apply(this, t);
          }

          return (i = g()(u()(e.prototype), "slice_to", this)).call.apply(i, [this].concat(t));
        }
      }]), e;
    }())),
        D = c.languageProcessing.baseStemmer;

    function O(e) {
      var i = Object(y.get)(e.getData("morphology"), "tr", !1);
      return i ? function (e) {
        return function (e, i) {
          e = e.toLowerCase();
          var r = new x(i);
          return r.setCurrent(e), r.stem(), r.getCurrent();
        }(e, i);
      } : D;
    }

    var S = ["nmak", "nmek", "nir", "nır", "nür", "nur", "nıyor", "niyor", "ndı", "ndi", "ndu", "ndü", "nmış", "nmiş", "nmuş", "nmüş", "necek", "nacak", "nmıştı", "nmişti", "nmuştu", "nmüştü", "nıyordu", "niyordu", "nuyordu", "nüyordu", "necekti", "nacaktı", "nsa", "nse", "nmalı", "nmeli", "nmaz", "nmez", "anmak", "enmek", "ınmak", "inmek", "unmak", "ünmek", "anır", "enir", "ınır", "inir", "unur", "ünür", "anıyor", "eniyor", "ınıyor", "iniyor", "unuyor", "ünüyor", "andı", "endi", "ındı", "indi", "undu", "ündü", "anmış", "enmiş", "ınmış", "inmiş", "unmuş", "ünmüş", "anacak", "enecek", "ınacak", "inecek", "unacak", "ünecek", "ınmıştı", "inmişti", "unmuştu", "ünmüştü", "ınıyordu", "iniyordu", "unuyordu", "ünüyordu", "necekti", "nacaktı", "ansa", "ense", "ınsa", "inse", "unsa", "ünse", "anmalı", "enmeli", "ınmalı", "inmeli", "unmalı", "ünmeli", "anmaz", "enmez", "ınmaz", "inmez", "unmaz", "ünmez", "ılmak", "ilmek", "ulmak", "ülmek", "ılır", "ilir", "ulur", "ülür", "ılınıyor", "iliniyor", "ulunuyor", "ülüyor", "ıldı", "ildi", "uldu", "üldü", "ılmış", "ilmiş", "ulmuş", "ülmül", "ılacak", "ilecek", "ulacak", "ülecek", "ılmıştı", "ilmişti", "ulmuştu", "ülmüştü", "ılıyordu", "iliyordu", "uluyordu", "ülüyordu", "necekti", "nacaktı", "ılsa", "ilse", "ulsa", "ülse", "ılmalı", "ilmeli", "ulmalı", "ülmeli", "ılmaz", "ilmez", "ulmaz", "ülmez"],
        A = ["kullanmak", "ulanmak", "bağlanmak", "alınmak", "boşanmak", "kaçınmak", "hazırlanmak", "olunmak", "sığınmak", "taşınmak", "arlanmak", "sakınmak", "zanmak", "tırmanmak", "i̇nanmak", "arınmak", "kullanmak", "isınmak", "yıkanmak", "öğrenmek", "öğrenmek", "düşünmek", "renmek", "düşünmek", "ünmek", "dönmek", "değinmek", "eğlenmek", "lenmek", "öğünmek", "deyinmek", "örenmek", "görünmek", "öğrenmek", "güvenmek", "beğenmek", "sünmek", "geçinmek", "tükenmek", "kabullenmek", "öğrenmek", "kabullenmek", "sinir", "peynir", "münir", "alınır", "kazanır", "yorumlanır", "kullanır", "uygulanır", "dayanır", "sağlanır", "i̇nanır", "özenir", "elenir", "öğrenir", "tersinir", "yaşanır", "toplanır", "tanır", "senir", "rastlanır", "renir", "münir", "kaynaklanır", "bağlanır", "hazırlanır", "güvenir", "enir", "söylenir", "başlanır", "davranır", "kapanır", "oynanır", "uzanır", "tanımlanır", "tanınır", "souvenir", "öğrenir", "taşınır", "konteyner", "uyanır", "beğenir", "hesaplanır", "sanır", "saklanır", "yakalanır", "aranır", "algılanır", "hoşlanır", "karşılanır", "tamamlanır", "münir", "yayınlanır", "yıkanır", "tekrarlanır", "atanır", "bir", "karasenir", "i̇ndüklenir", "zorlanır", "avenir", "erdenir", "kas-sinir", "utanır", "üstenir", "katlanır", "beyazpeynir", "şekillenir", "sonuçlanır", "doğranır", "narin", "faydalanır", "kilinir", "hızlanır", "yararlanır", "kutlanır", "saptanır", "nedendir", "kalınır", "ayarlanır", "kıskanır", "hastalanır", "suvenir", "yapılabilinir", "canlanır", "ekillenir", "hacklenir", "haşlanır", "sonuçlanır", "resetlenir", "beğenir", "açıklanır", "programming-sinir", "i̇sindir", "odaklanır", "pionir", "çalınır", "peynir", "tutuklanır", "sınır", "taşımalık", "anır", "kanır", "adanır", "lanır", "ültanır", "rastlanır", "haktanır", "güneysınır", "i̇nanır", "açılır-kapanır", "sağlanır", "tanrı tanır", "bağlanır", "tanır", "yansır", "kullanır", "açıklanır", "dizaynır", "düşünür", "görünür", "siyanür", "dünür", "düşünür", "ünür", "çürür", "ömür", "nür", "öğünür", "onur", "aynur", "i̇lknur", "ayşenur", "öznur", "konur", "binnur", "alinur", "gülnur", "hükmolunur", "atanur", "rıza nur", "yurdanur", "şennur", "fatmanur", "şennur", "zinnur", "adanur", "semanur", "elanur", "düşünür", "baykonur", "edanur", "göknur", "günnur", "beyzanur", "görünür", "nisanur", "saynur", "mecnur", "lunur", "stem", "cemalnur", "i̇lknur", "aynur", "elnur", "addolunur", "ayşenur", "birnur", "sedanur", "alanur", "esmanur", "elifnur", "şahnur", "aydanur", "senanur", "ecenur", "havvanur", "bozunur", "bennur", "en-nur", "tennur", "konur", "reddolunur", "sondur", "olunur", "şeymanur", "şerefnur", "fernur", "stem", "ceynur", "zeynur", "gökçenur", "mervenur", "ernur", "sonunur", "biyobozunur", "şemsinur", "haşrolunur", "incinur", "lanıyor", "kulanıyor", "nıyor", "rastlanıyor", "kullanıyor", "kaynaklanıyor", "kazanıyor", "yaşanıyor", "alınıyor", "i̇nanıyor", "tanıyor", "hazırlanıyor", "dayanıyor", "söyleniyor", "sanıyor", "uygulanıyor", "yanıyor", "eleniyor", "davranıyor", "aranıyor", "öğreniyor", "sağlanıyor", "kapanıyor", "zorlanıyor", "tanınıyor", "kombinleniyor", "yayınlanıyor", "oynanıyor", "beğeniyor", "uyanıyor", "planlanıyor", "toplanıyor", "reniyor", "niyor", "öğreniyor", "bağlanıyor", "uzanıyor", "algılanıyor", "söyleniyor", "tanımlanıyor", "vurgulanıyor", "karşılanıyor", "kınıyor", "saklanıyor", "başlanıyor", "yükleniyor", "sıralanıyor", "alındı", "kendi", "pazubandı", "nındı", "irgandı", "yapsındı", "yarabandı", "açıklandı", "bağlandı", "kendi", "efendi", "beyefendi", "hanımefendi", "i̇kindi", "hocaefendi", "hindi", "bindi", "gandi", "nakşibendi", "selendi", "beyefendi", "bondi", "alindi", "kazandı", "veliefendi", "hanendi", "hacklendi", "burundi", "kullandı", "i̇vrindi", "başlandı", "yasandı", "lendi", "yayınlandı", "andı", "merkezefendi", "demirhindi", "vivendi", "grandi", "ögrendi", "aczmendi", "mundi", "kapandı", "hanendi", "kandil", "i̇nsandı", "çinhindi", "randi", "yandı", "şimdi", "semerkant", "açıklandı", "ravalpindi", "tamamlandı", "kadınefendi", "landi", "brendi", "beğendi", "gecekondu", "hindu", "soundu", "katmandu", "kundu", "olsundu", "poundu", "katmandu", "duşundu", "emrolundu", "vahyolundu", "hindu", "lundu", "candu", "roundu", "göründü", "paundu", "fırdöndü", "düşündü", "fondü", "üründü", "gündöndü", "mumsöndü", "kendü", "i̇nanmış", "ınmış", "i̇spatlanmış", "nınmış", "bağlanmış", "hazırlanmış", "lenmiş", "hacklenmiş", "öğrenmiş", "i̇ndüklenmiş", "sinterlenmiş", "begenmiş", "alinmiş", "kombinlenmiş", "lânetlenmiş", "editlenmiş", "yenmiş", "temperlenmiş", "beyenmiş", "kazanmiş", "olsunmuş", "emrolunmuş", "lunmuş", "yunmuş", "özüdönmüş", "söylenecek", "düşünecek", "öğrenecek", "lenecek", "düşünecek", "düzenlenecek", "öğrenecek", "renecek", "nacak", "alınacak", "lanacak", "kazanmıştı", "lenmişti", "emrolunmuştu", "i̇nanıyordu", "kullanıyordu", "tanıyordu", "dayanıyordu", "görünüyordu", "düşünüyordu", "nuyordu", "düşünüyordu", "ünüyordu", "fransa", "floransa", "lufthansa", "prensa", "yakınsa", "konsa", "hansa", "sansa", "mensa", "türkiye-fransa", "türbülansa", "ofansa", "hiltonsa", "almanya-fransa", "yünsa", "jinsa", "ınsa", "nınsa", "winsa", "hünsa", "extensa", "demansa", "fıransa", "advansa", "tnsa", "ingiltere-fransa", "ambiyansa", "ünsa", "rönesansa", "cheonsa", "malpensa", "densa", "finanse", "ense", "lanse", "adsense", "response", "defense", "sübvanse", "pense", "intense", "expense", "alphonse", "kompanse", "mumkunse", "odense", "fluminense", "ninse", "offense", "intellisense", "nonsense", "anse", "pfsense", "immense", "gorunse", "hernedense", "danse", "mightyadsense", "hisense", "hortense", "adriaanse", "süspanse", "önmeli", "ögrenmeli", "taşınmaz", "kuşkonmaz", "sınmaz", "alınmaz", "taşınmaz", "lanmaz", "osanmaz", "hoşlanmaz", "sönmez", "dönmez", "bölünmez", "ersönmez", "dönmez", "görünmez", "üşenmez", "sönmez", "görünmez", "yinmez", "sönmez", "kullanmak", "bağlanmak", "boşanmak", "hazırlanmak", "öğrenmek", "öğrenmek", "renmek", "eğlenmek", "lenmek", "örenmek", "öğrenmek", "sığınmak", "değinmek", "deyinmek", "düşünmek", "erişilebilir", "güvenilir", "aktarabilecek"],
        U = ["sevi", "giyi", "gezi", "ayrı", "tıka", "ayrı", "sarı", "övü", "boşa", "besle", "kırı", "soyu", "yıka", "süsle", "içle", "besle", "tara", "çeki", "çözü", "hazırla", "üzü", "yıkı", "yıka", "kovu", "sıkı", "söyle", "kaçı", "kapa", "kası", "koru", "sarsı", "sığı", "kurula", "yakı", "yoru", "taşı", "uza", "takı", "yala", "atı", "iyileş", "sinirle", "dövü"],
        q = c.languageProcessing.getWords;

    function P(e) {
      var i = q(e).filter(function (e) {
        return e.length > 5;
      });
      return (i = function (e) {
        return e.filter(function (e) {
          return U.some(function (i) {
            return S.some(function (r) {
              return !new RegExp("^" + i + r + "$").test(e);
            });
          });
        });
      }(i = i.filter(function (e) {
        return !A.includes(e);
      }))).some(function (e) {
        return S.some(function (i) {
          return e.endsWith(i);
        });
      });
    }

    var T = function (e) {
      n()(s, e);
      var i,
          r,
          t = (i = s, r = function () {
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
            t = u()(i);

        if (r) {
          var a = u()(this).constructor;
          e = Reflect.construct(t, arguments, a);
        } else e = t.apply(this, arguments);

        return h()(this, e);
      });

      function s(e) {
        var i;
        return a()(this, s), delete (i = t.call(this, e)).defaultResearches.getFleschReadingScore, Object.assign(i.config, {
          language: "tr",
          passiveConstructionType: "morphological",
          firstWordExceptions: k,
          functionWords: d,
          transitionWords: _,
          twoPartTransitionWords: f,
          sentenceLength: b
        }), Object.assign(i.helpers, {
          getStemmer: O,
          isPassiveSentence: P
        }), i;
      }

      return s;
    }(c.languageProcessing.AbstractResearcher);
  },
  5: function _(e, i, r) {
    var t = r(6)["default"],
        a = r(9);
    e.exports = function (e, i) {
      return !i || "object" !== t(i) && "function" != typeof i ? a(e) : i;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  6: function _(e, i) {
    function r(i) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (e.exports = r = function r(e) {
        return _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0) : (e.exports = r = function r(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0), r(i);
    }

    e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  7: function _(e, i) {
    function r(e, i) {
      for (var r = 0; r < i.length; r++) {
        var t = i[r];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(e, t.key, t);
      }
    }

    e.exports = function (e, i, t) {
      return i && r(e.prototype, i), t && r(e, t), e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  8: function _(e, i) {
    function r(i, t) {
      return e.exports = r = Object.setPrototypeOf || function (e, i) {
        return e.__proto__ = i, e;
      }, e.exports["default"] = e.exports, e.exports.__esModule = !0, r(i, t);
    }

    e.exports = r, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  },
  9: function _(e, i) {
    e.exports = function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }, e.exports["default"] = e.exports, e.exports.__esModule = !0;
  }
});