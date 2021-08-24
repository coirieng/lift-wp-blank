"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.Researcher = function (a) {
  var e = {};

  function n(i) {
    if (e[i]) return e[i].exports;
    var t = e[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return a[i].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
  }

  return n.m = a, n.c = e, n.d = function (a, e, i) {
    n.o(a, e) || Object.defineProperty(a, e, {
      enumerable: !0,
      get: i
    });
  }, n.r = function (a) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(a, "__esModule", {
      value: !0
    });
  }, n.t = function (a, e) {
    if (1 & e && (a = n(a)), 8 & e) return a;
    if (4 & e && "object" == _typeof(a) && a && a.__esModule) return a;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: a
    }), 2 & e && "string" != typeof a) for (var t in a) {
      n.d(i, t, function (e) {
        return a[e];
      }.bind(null, t));
    }
    return i;
  }, n.n = function (a) {
    var e = a && a.__esModule ? function () {
      return a["default"];
    } : function () {
      return a;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (a, e) {
    return Object.prototype.hasOwnProperty.call(a, e);
  }, n.p = "", n(n.s = 46);
}({
  0: function _(a, e) {
    a.exports = window.yoast.analysis;
  },
  1: function _(a, e) {
    function n(e) {
      return a.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (a) {
        return a.__proto__ || Object.getPrototypeOf(a);
      }, a.exports["default"] = a.exports, a.exports.__esModule = !0, n(e);
    }

    a.exports = n, a.exports["default"] = a.exports, a.exports.__esModule = !0;
  },
  2: function _(a, e) {
    a.exports = window.lodash;
  },
  3: function _(a, e) {
    a.exports = function (a, e) {
      if (!(a instanceof e)) throw new TypeError("Cannot call a class as a function");
    }, a.exports["default"] = a.exports, a.exports.__esModule = !0;
  },
  4: function _(a, e, n) {
    var i = n(8);
    a.exports = function (a, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
      a.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: a,
          writable: !0,
          configurable: !0
        }
      }), e && i(a, e);
    }, a.exports["default"] = a.exports, a.exports.__esModule = !0;
  },
  46: function _(a, e, n) {
    "use strict";

    n.r(e), n.d(e, "default", function () {
      return ga;
    });
    var i = n(3),
        t = n.n(i),
        s = n(4),
        r = n.n(s),
        u = n(5),
        l = n.n(u),
        d = n(1),
        o = n.n(d),
        k = n(0),
        m = ["sebuah", "seorang", "sang", "si", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "seratus", "seribu", "sejuta", "semiliar", "setriliun", "ini", "itu", "hal", "ia"],
        g = ["adakalanya", "agak", "agar", "akhirnya", "alhasil", "andaikan", "bahkan", "bahwasannya", "berikut", "betapapun", "biarpun", "biasanya", "contohnya", "dahulunya", "diantaranya", "dikarenakan", "disebabkan", "dulunya", "faktanya", "hasilnya", "intinya", "jadi", "jua", "juga", "kadang-kadang", "kapanpun", "karena", "karenanya", "kedua", "kelak", "kemudian", "kesimpulannya", "khususnya", "langsung", "lantaran", "maka", "makanya", "masih", "memang", "meski", "meskipun", "misalnya", "mulanya", "nantinya", "nyatanya", "pendeknya", "pertama", "ringkasnya", "rupanya", "seakan-akan", "sebaliknya", "sebelum", "sebetulnya", "sedangkan", "segera", "sehingga", "sekali-sekali", "sekalipun", "sekiranya", "selagi", "selain", "selama", "selanjutnya", "semasa", "semasih", "semenjak", "sementara", "semula", "sepanjang", "serasa", "seraya", "seringkali", "sesungguhnya", "setelahnya", "seterusnya", "setidak-tidaknya", "setidaknya", "sewaktu-waktu", "sewaktu", "tadinya", "tentunya", "terakhir", "terdahulu", "terlebih", "ternyata", "terpenting", "terutama", "terutamanya", "tetapi", "umpamanya", "umumnya", "utamanya", "walau", "walaupun", "yaitu", "yakni", "akibatnya", "hingga", "kadang", "kendatipun", "ketiga", "lainnya", "manakala", "namun", "pastinya", "pertama-tama", "sampai-sampai", "sebaliknya", "sebelumnya", "sebetulnya", "sesekali"],
        p = g.concat(["agar supaya", "akan tetapi", "apa lagi", "asal saja", "bagaimanapun juga", "bahkan jika", "bahkan lebih", "begitu juga", "berbeda dari", "biarpun begitu", "biarpun demikian", "bilamana saja", "cepat atau lambat", "dalam hal ini", "dalam jangka panjang", "dalam kasus ini", "dalam kasus lain", "dalam kedua kasus", "dalam kenyataannya", "dalam pandangan", "dalam situasi ini", "dalam situasi seperti itu", "dan lagi", "dari awal", "dari pada", "dari waktu ke waktu", "demikian juga", "demikian pula", "dengan serentak", "dengan cara yang sama", "dengan jelas", "dengan kata lain", "dengan ketentuan", "dengan nyata", "dengan panjang lebar", "dengan pemikiran ini", "dengan syarat bahwa", "dengan terang", "di pihak lain", "di sisi lain", "dibandingkan dengan", "disebabkan oleh", "ditambah dengan", "hanya jika", "harus diingat", "hasil dari", "hingga kini", "kalau tidak", "kalau-kalau", "kali ini", "kapan saja", "karena alasan itulah", "karena alasan tersebut", "kecuali kalau", "kendatipun begitu", "kendatipun demikian", "lebih jauh", "lebih lanjut", "maka dari itu", "meskipun demikian", "oleh karena itu", "oleh karenanya", "oleh sebab itu", "pada akhirnya", "pada awalnya", "pada dasarnya", "pada intinya", "pada kenyataannya", "pada kesempatan ini", "pada mulanya", "pada saat ini", "pada saat", "pada situasi ini", "pada umumnya", "pada waktu yang sama", "pada waktunya", "paling tidak", "pendek kata", "penting untuk disadari", "poin penting lainnya", "saat ini", "sama halnya", "sama pentingnya", "sama sekali", "sampai sekarang", "sebab itu", "sebagai akibatnya", "sebagai contoh", "sebagai gambaran", "sebagai gantinya", "sebagai hasilnya", "sebagai tambahan", "sebelum itu", "secara bersamaan", "secara eksplisit", "secara keseluruhan", "secara keseluruhan", "secara khusus", "secara menyeluruh", "secara signifikan", "secara singkat", "secara umum", "sejalan dengan ini", "sejalan dengan itu", "sejauh ini", "sekali lagi", "sekalipun begitu", "sekalipun demikian", "sementara itu", "seperti yang bisa dilihat", "seperti yang sudah saya katakan", "seperti yang sudah saya tunjukkan", "sesudah itu", "setelah ini", "setelah itu", "tak pelak lagi", "tanpa menunda-nunda lagi", "tentu saja", "terutama sekali", "tidak perlu dipertanyakan lagi", "tidak sama", "tidak seperti", "untuk alasan ini", "untuk alasan yang sama", "untuk memperjelas", "untuk menekankan", "untuk menyimpulkan", "untuk satu hal", "untuk sebagian besar", "untuk selanjutnya", "untuk tujuan ini", "walaupun demikian", "yang lain", "yang terakhir", "yang terpenting", "begitu pula", "berbeda dengan", "betapapun juga", "dalam hal itu", "di samping itu", "hal pertama yang perlu diingat", "kadang kala", "karena itu", "lagi pula", "lambat laun", "mengingat bahwa", "meskipun begitu", "pada umumnya", "pada waktu", "saat ini juga", "sampai saat ini", "sebagian besar", "secara terperinci", "selain itu", "seperti yang sudah dijelaskan", "seperti yang tertera di", "tak seperti", "tanpa memperhatikan", "tentu saja", "untuk memastikan", "untuk menggambarkan", "walaupun begitu"]),
        b = ["si", "sang", "kaum", "sri", "hang", "dang", "para"],
        h = ["nol", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "seratus", "seribu", "sejuta", "semiliar", "setriliun"],
        y = ["kesatu", "pertama", "kedua", "ketiga", "keempat", "kelima", "keenam", "ketujuh", "kedelapan", "kesembilan", "kesepuluh", "kesebelas", "keseratus", "keseribu"],
        c = ["aku", "saya", "engkau", "kau", "kamu", "anda", "kita", "kami", "kalian", "ia", "dia", "beliau", "mereka", "dikau", "daku", "beta", "sayalah", "engkaulah", "kaulah", "kamulah", "andalah", "kitalah", "kamilah", "kalianlah", "dialah", "kamu-kamu", "saya-saya", "mereka-mereka", "beliau-beliau", "anda-anda", "mereka-merekalah", "beliau-beliaulah", "kamu-kamulah", "anda-andalah"],
        f = ["yang"],
        j = ["ini", "itu", "tersebut", "tadi", "inilah", "itulah"],
        v = ["milikku", "milikmu", "miliknya", "punyanya", "punyaku", "punyamu", "kepunyaannya", "kepunyaanmu", "kepunyaanku"],
        x = ["belasan", "puluhan", "ribuan", "miliaran", "triliunan", "setengah", "seperdua", "sepertiga", "seperempat", "seperlima", "seperenam", "sepertujuh", "seperdelapan", "sepersembilan", "sepersepuluh", "sedikit", "setiap", "banyak", "semua", "lebih", "kurang", "sebagian", "cukup", "beberapa", "berpuluh-puluh", "beratus-ratus", "beribu-ribu", "berjuta-juta", "ratusan", "paling", "tiap-tiap"],
        S = ["diriku", "dirinya", "dirimu"],
        w = ["lain", "lainnya", "seseorang", "sesuatu", "siapa-siapa", "apa-apa", "semuanya", "segalanya", "seluruhnya", "keduanya", "ketiganya", "ketiga-tiganya", "kedua-duanya", "dua-duanya", "tiga-tiganya", "masing-masing", "apapun", "siapapun", "manapun", "sedemikian", "demikian"],
        P = ["apa", "manakah", "mana", "apanya", "inikah", "itukah", "manalagi"],
        _ = ["siapa", "siapakah", "kamukah", "andakah", "sayakah", "akukah", "diakah", "merekakah", "engkaukah", "kamikah", "kitakah", "beliaukah", "iakah", "dirinyakah", "dirikukah", "siapatah", "siapalah", "siapanya"],
        W = ["bagaimana", "mengapa", "kenapa", "kapan", "berapa", "kapankah", "berapakah", "bagaimanakah", "apakah", "kapanpun", "apatah", "apalah", "berapatah", "berapalah", "mengapakah", "mengapatah", "mengapalah", "kenapakah", "kenapatah", "kenapalah", "kapantah", "kapanlah", "manatah", "mananya", "manalah", "bagaimanatah", "bagaimanalah", "bilamana", "bilamanakah", "bilamanatah", "bilamananya", "bilamanalah", "keberapa", "mampukah", "beginikah", "begitukah"],
        O = ["selalu", "sekali", "berkali-kali"],
        N = ["dapat", "dapatkah", "bisa", "bisakah", "boleh", "bolehkah", "akan", "akankah", "bukan", "dapatlah", "bisatah", "bisanya", "bisalah", "bolehtah", "bolehnya", "bolehlah", "akantah", "akannya", "akanlah", "harus", "haruskah", "harustah", "harusnya", "haruslah", "bukankah", "bukantah", "bukannya", "bukanlah", "mungkin", "mungkinkah", "mungkintah", "mungkinlah", "belum", "belumkah", "belumlah", "sudah", "sudahkah", "sudahlah", "takkan", "masih", "masihkah", "pernah", "pernahkah"],
        R = ["adalah", "ialah", "merupakan", "ada", "berada"],
        M = ["antara", "seantero", "bagai", "bagaikan", "bagi", "buat", "dari", "demi", "dengan", "di", "terhadap", "menjelang", "ke", "kecuali", "sekeliling", "mengenai", "sekitar", "melalui", "selama", "lepas", "lewat", "oleh", "selewat", "pada", "sepanjang", "per", "seputar", "bersama", "sejak", "semenjak", "seperti", "serta", "tentang", "menuju", "menurut", "untuk", "tanpa", "adapun", "antar", "diantara", "silam", "lalu", "selaku", "melalui", "sebagai", "bahwasanya"],
        A = ["atas", "bawah", "dalam", "luar", "depan", "belakang", "sebelah", "samping"],
        B = ["dan", "atau", "lalu", "kemudian", "serta", "sedangkan", "sementara", "sambil", "seraya", "ataupun", "ataukah"],
        T = ["maupun", "bukan", "begitu", "baru", "hanya"],
        F = ["setelah", "sehabis", "sejak", "sampai", "ketika", "waktu", "tatkala", "saat", "kalau", "jika", "jikalau", "bila", "bilamana", "apabila", "asal", "asalkan", "seandainya", "andaikata", "sekiranya", "karena", "sebab", "lantaran", "gara-gara", "mentang-mentang", "kalau-kalau", "supaya", "agar", "guna", "sehingga", "hingga", "sampai", "sebelum", "sesudah", "meski", "meskipun", "kendati", "kendatipun", "walau", "walaupun", "sekalipun", "biarpun", "sungguhpun", "padahal", "seakan-akan", "seolah-olah", "daripada", "alih-alih", "melainkan", "apalagi", "bahwa", "saja"],
        E = ["kata", "bilang", "berkata", "mengeklaim", "bertanya", "menayakan", "menyatakan", "tanya", "klaim", "jelas", "jelaskan", "menjelaskan", "dijelaskan", "ditanya", "pikir", "berpikir", "berbicara", "membicarakan", "mengumumkan", "diumumkan", "dibicarakan", "mendiskusikan", "menyarankan", "disarankan", "mengerti"],
        I = ["sangat", "amat", "terlalu", "terlampau", "sungguh", "serba", "agak", "begitu", "demikian", "makin", "semakin", "kian", "tambah", "bertambah", "begini", "amatlah"],
        C = ["ada", "punya", "milik", "terlihat", "kelihatan", "mari", "marilah", "membuat", "dibuat", "menunjukkan", "ditunjukkan", "pergi", "ambil", "diambil", "meletkakkan", "letakkan", "ambilkan", "mencoba", "dicoba", "bermakna", "berarti", "terdiri", "memastikan", "dipastikan", "mengandung", "termasuk", "maknanya", "artinya", "ingin", "inginkan"],
        L = ["terbesar", "besar", "terkecil", "kecil", "terbaru", "baru", "tertua", "tua", "lalu", "semudah", "termudah", "mudah", "cepat", "jauh", "susah", "keras", "panjang", "rendah", "pendek", "tinggi", "biasa", "simpel", "kebanyakan", "baru-baru", "lagi", "selesai", "mungkin", "umum", "baik", "buruk", "bagus", "utama", "sama", "tertentu", "biasanya", "spesifik", "langsung", "dekat", "terbaru", "berbeda", "beda", "sibuk", "terkini", "penting", "terpenting", "sebesar", "sekecil", "setua", "termuda", "semuda", "muda", "tercepat", "secepat", "termudah", "semudah", "terjauh", "sejauh", "tersusah", "sesusah", "terkeras", "sekeras", "sepanjang", "terpanjang", "terpendek", "sependek", "terbiasa", "tersimpel", "sesimpel", "terbaik", "sebaik", "terburuk", "seburuk", "sebagus", "terbagus", "terutama", "terdekat", "sedekat", "tersibuk", "sepenting", "lambat", "terlambat", "luas", "terluas", "seluas", "keren", "tersedia", "cepat-cepat", "erat-erat", "betul-betul", "diam-diam", "keras-keras", "jauh-jauh", "secepat-cepatnya", "baik-baik", "sebaik-baiknya", "sekeras-kerasnya", "lekas-lekas", "selekas-lekasnya", "tinggi-tinggi", "setinggi-tingginya", "seberat-beratnya", "sejauh-jauhnya", "sedikit-dikitnya", "sekurang-kurangnya", "setidak-tidaknya", "sedapat-dapatnya", "seenak-enaknya", "seenaknya", "seadanya", "sekenanya", "selambat-lambatnya", "selebih-lebihnya", "sedikitnya", "sepenuhnya", "besar-besaran", "kecil-kecilan", "habis-habisan", "mati-matian", "terang-terangan", "terus-terusan", "untung-untungan", "kesekian", "berdua-dua", "bertiga-tiga", "berdua", "bertiga", "berempat", "berlima", "berenam", "bertujuh", "berdelapan", "bersembilan", "bersepuluh", "bersebelas", "berseratus", "berseribu", "berduaan", "agaknya", "sepenting-pentingnya", "sepanjang-panjangnya", "spesifik", "spesial", "semuda-mudanya", "setua-tuanya", "seburuk-buruknya", "seluas-luasnya", "terlebih", "selamanya", "selama-lamanya", "mampu", "begini", "beginilah", "begitu", "begitulah", "sebegini", "sebegitu", "semula", "pasti", "pastilah", "pastinya", "dini", "sedini", "sering", "seringnya", "jarang", "terbanyak"],
        U = ["bah", "cis", "ih", "idih", "sialan", "buset", "aduh", "waduh", "duh", "aduhai", "amboi", "asyik", "wah", "syukur", "alhamdulillah", "untung", "aduh", "aih", "aih", "lo", "duilah", "eh", "oh", "ah", "astaga", "astagfirullah", "masyaallah", "masa", "alamak", "gila", "ayo", "yuk", "mari", "hai", "he", "hai", "halo"],
        $ = ["sdm", "sdt", "gr", "kg", "cm", "mg", "ml", "l", "dl", "cl", "ons", "lbr", "cc", "bh", "ltr", "pon"],
        z = ["cara", "barang", "masalah", "bagian", "bagian-bagian", "aspek", "aspek-aspek", "ide", "item", "tema", "hal", "perkara", "faktor", "faktor-faktor", "detil", "perbedaan", "adanya", "beginian", "rupanya", "diri"],
        D = ["tidak", "iya", "tak", "tentu", "ok", "oke", "amin", "dll", "maaf", "tolong", "mohon", "jangan", "sebagainya", "hanya", "cuma", "jangankan", "janganlah", "tolonglah"],
        K = ([].concat(["lah", "pun", "dong", "kan", "sih", "toh", "nah", "lho", "kok", "ding"]), [].concat(y, ["sebuah", "seorang", "seekor", "sebiji", "selembar", "secarik", "sehelai", "sebutir", "sebatang", "sebidang", "sebentuk", "sebilah", "sekuntum", "sepatah", "sepucuk", "setangkai", "seutas", "sebelah", "segenggam", "segugus", "sepiring", "sejenis", "semacam", "sepotong", "setetes", "suatu"]), [].concat(b, B, j, I, v, ["bu", "pak", "bang", "nak", "kak", "dik"]), [].concat(O, c, S, U, h, N, R, E, C, w, T, F, P, _, W, ["putus-putusnya", "jemu-jemunya", "jera-jeranya", "puas-puasnya", "bosan-bosannya", "henti-hentinya", "berhenti-hentinya"], D, A, $, ["detik", "menit", "jam", "detik-detik", "menit-menit", "jam-jam", "hari", "hari-hari", "minggu", "minggu-minggu", "bulan", "bulan-bulan", "tahun", "tahun-tahun", "besok", "kemarin", "lusa", "malam-malam", "siang-siang", "subuh", "bedug", "keesokan"], z, L, f, M, x, g), [].concat(b, h, y, j, v, S, c, x, w, P, _, W, A, O, N, R, M, B, T, F, E, ["yakni", "yaitu", "artinya", "awalnya", "akhirnya", "makanya", "malahan", "malah", "memang", "nantinya", "nanti", "pula", "seketika", "sekarang", "benar-benar", "kadang", "justru", "tetapi", "tapi"], I, C, U, L, $, z, D, ["tuan", "nyonya", "nona", "bang", "pak", "bu", "bang", "kak", "prof", "gus", "ning", "kyai", "ustad", "ustadzah", "nyai", "raden", "tengku"], f, g)),
        q = [["baik", "maupun"], ["bukan", "melainkan"], ["bukan", "tetapi"], ["bukannya", "melainkan"], ["bukannya", "tetapi"], ["tidak", "melainkan"], ["tidak", "tetapi"], ["tidak hanya", "tetapi juga"], ["begitu", "sehingga"], ["begitu", "sampai"], ["demikian", "sehingga"], ["demikian", "sampai"], ["sedemikian", "sehingga"], ["sedemikian", "sampai"], ["meskipun", "namun"], ["biarpun", "namun"], ["bukan hanya", "melainkan juga"], ["sedemikian rupa", "sehingga"], ["sebaiknya", "daripada"], ["entah", "entah"], ["kalau", "maka"], ["apabila", "maka"], ["apa", "atau"], ["jangankan", "pun"], ["saja", "apalagi"], ["apakah", "atau"]],
        G = n(2),
        H = k.languageProcessing.buildFormRule,
        J = k.languageProcessing.createRulesFromArrays,
        Q = ["a", "e", "i", "o", "u"];

    function V(a) {
      for (var e, n = 0, i = 0; i < a.length; i++) {
        e = a[i], Q.includes(e) && n++;
      }

      return n;
    }

    function X(a, e, n, i) {
      if (n.includes(a)) return a;
      var t = i.stemming.doNotStemWords.doNotStemK;

      if (a.endsWith("kan")) {
        var s = a.substring(0, a.length - 2);
        t.includes(s) && (a = s);
      }

      var r = J(e);
      return H(a, r) || a;
    }

    function Y(a, e, n) {
      var i = a.slice(e);
      return n.some(function (a) {
        return i.startsWith(a);
      });
    }

    function Z(a, e) {
      (null == e || e > a.length) && (e = a.length);

      for (var n = 0, i = new Array(e); n < e; n++) {
        i[n] = a[n];
      }

      return i;
    }

    var aa = k.languageProcessing.flattenSortLength,
        ea = k.languageProcessing.buildFormRule,
        na = k.languageProcessing.createRulesFromArrays,
        ia = function ia(a, e) {
      var n = e.stemming.singleSyllableWords,
          i = e.stemming.singleSyllableWordsSuffixes,
          t = a;

      if (a = function (a, e) {
        return a.startsWith("di") && Y(a, 2, e.stemming.singleSyllableWords) ? a.substring(2, a.length) : /^[mp]enge/i.test(a) && Y(a, 5, e.stemming.singleSyllableWords) ? a.substring(5, a.length) : a;
      }(a, e), n.some(function (e) {
        return a.startsWith(e);
      }) && V(a) <= 3 && function (a, e) {
        var n,
            i = function (a, e) {
          var _n;

          if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) {
            if (Array.isArray(a) || (_n = function (a, e) {
              if (a) {
                if ("string" == typeof a) return Z(a, void 0);
                var n = Object.prototype.toString.call(a).slice(8, -1);
                return "Object" === n && a.constructor && (n = a.constructor.name), "Map" === n || "Set" === n ? Array.from(a) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Z(a, void 0) : void 0;
              }
            }(a)) || e && a && "number" == typeof a.length) {
              _n && (a = _n);

              var i = 0,
                  t = function t() {};

              return {
                s: t,
                n: function n() {
                  return i >= a.length ? {
                    done: !0
                  } : {
                    done: !1,
                    value: a[i++]
                  };
                },
                e: function e(a) {
                  throw a;
                },
                f: t
              };
            }

            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }

          var s,
              r = !0,
              u = !1;
          return {
            s: function s() {
              _n = a[Symbol.iterator]();
            },
            n: function n() {
              var a = _n.next();

              return r = a.done, a;
            },
            e: function e(a) {
              u = !0, s = a;
            },
            f: function f() {
              try {
                r || null == _n["return"] || _n["return"]();
              } finally {
                if (u) throw s;
              }
            }
          };
        }(e);

        try {
          for (i.s(); !(n = i.n()).done;) {
            var t = n.value;
            if (a.match(t)) return !0;
          }
        } catch (a) {
          i.e(a);
        } finally {
          i.f();
        }
      }(a, i)) {
        a = X(a, e.stemming.regexRules.removeParticle, e.stemming.doNotStemWords.doNotStemParticle, e), a = X(a, e.stemming.regexRules.removePronoun, e.stemming.doNotStemWords.doNotStemPronounSuffix, e);
        var s = X(a, e.stemming.regexRules.removeSuffixes, e.stemming.doNotStemWords.doNotStemSuffix, e);
        n.includes(s) && (a = s);
      }

      return (V(a) > 1 || 1 === a.length) && (a = t), a;
    },
        ta = function ta(a, e) {
      if ((a.startsWith("ber") || a.startsWith("per")) && Y(a, 3, e.stemming.beginningModification.rBeginning)) return a.replace(/^(ber|per)/i, "r");
      if (/^peng/i.test(a) && Y(a, 4, e.stemming.beginningModification.kBeginning)) return a.replace(/^peng/i, "k");
      var n = na(e.stemming.regexRules.removeSecondOrderPrefixes);
      return ea(a, n) || a;
    },
        sa = function sa(a, e) {
      var n = a.length,
          i = e.stemming.regexRules.removeSuffixes,
          t = e.stemming.doNotStemWords.doNotStemSuffix,
          s = aa(e.stemming.doNotStemWords.doNotStemPrefix.doNotStemFirstOrderPrefix),
          r = aa(e.stemming.doNotStemWords.doNotStemPrefix.doNotStemSecondOrderPrefix);
      return s.some(function (e) {
        return a.startsWith(e);
      }) || (a = function (a, e) {
        var n = function (a, e) {
          var n = e.stemming.beginningModification;
          if (/^[mp]en/i.test(a) && Y(a, 3, n.nBeginning)) return a.replace(/^[mp]en/i, "n");
          if (/^[mp]eng/i.test(a) && Y(a, 4, n.kBeginning)) return a.replace(/^[mp]eng/i, "k");

          if (/^[mp]em/i.test(a)) {
            if (Y(a, 3, n.pBeginning)) return a.replace(/^(mem|pem)/i, "p");
            if (Y(a, 3, n.mBeginning)) return a.replace(/^(mem|pem)/i, "m");
          }

          return function (a, e) {
            var n = a.stemming.doNotStemWords.doNotStemPrefix.doNotStemFirstOrderPrefix.doNotStemTer;
            if (e.startsWith("keter") && (e = e.substring(2, e.length)), e.startsWith("ter")) return n.some(function (a) {
              return e.startsWith(a);
            }) ? e : Y(e, 3, a.stemming.beginningModification.rBeginning) ? e.replace(/^ter/i, "r") : e.substring(3, e.length);
          }(e, a) || void 0;
        }(a, e);

        if (n) return n;
        var i = na(e.stemming.regexRules.removeFirstOrderPrefixes);
        return ea(a, i) || a;
      }(a, e)), n === a.length ? (r.some(function (e) {
        return a.startsWith(e);
      }) || (a = ta(a, e)), V(a) > 2 && (a = X(a, i, t, e))) : (n = a.length, V(a) > 2 && (a = X(a, i, t, e)), n === a.length || r.includes(a) || V(a) > 2 && (a = ta(a, e))), a;
    },
        ra = function ra(a, e) {
      a = ia(a, e);
      var n = e.stemming.doNotStemWords.doNotStemParticle,
          i = e.stemming.doNotStemWords.doNotStemPronounSuffix;
      if (V(a) <= 2) return a;
      var t = sa(a, e);
      return n.includes(t) || i.includes(t) ? t : (V(a = X(a, e.stemming.regexRules.removeParticle, n, e)) > 2 && (a = X(a, e.stemming.regexRules.removePronoun, i, e)), V(a) > 2 && (a = sa(a, e)), a);
    };

    var ua = k.languageProcessing.baseStemmer;

    function la(a) {
      var e = Object(G.get)(a.getData("morphology"), "id", !1);
      return e ? function (a) {
        return function (a, e) {
          return e.stemming.shouldNotBeStemmed.includes(a) ? a : function (a, e) {
            if (-1 === a.indexOf("-")) return null;
            var n = a.split("-");

            if (2 === n.length) {
              var i = n[0],
                  t = n[1];

              if (i = ra(i, e), t = ra(t, e), i.substr(1) === (t.startsWith("ng") || t.startsWith("ny") ? t.substr(2) : t.substr(1))) {
                var s = e.stemming.nonPluralReduplications;
                return s.includes(i) && s.includes(t) ? i + "-" + i : i;
              }
            }

            return null;
          }(a, e) || ra(a, e);
        }(a, e);
      } : ua;
    }

    var da = ["diskontinuitas", "diskualifikasi", "diskriminatif", "diskriminator", "digitalisasi", "disinformasi", "disintegrasi", "diskriminasi", "disorientasi", "distabilitas", "diktatorial", "disinfektan", "disinsentif", "diskrepansi", "distributor", "diagnostik", "dialketika", "diktatoris", "dinosaurus", "diplomatik", "diplomatis", "direktorat", "dirgantara", "disimilasi", "diskontinu", "diskulpasi", "disparitas", "dispensasi", "distilator", "distingtif", "distribusi", "diversitas", "diafragma", "diagnosis", "diakritik", "diakronis", "dialektal", "dialektik", "dialektis", "digenesis", "digitalis", "dilematik", "diminutif", "dinamisme", "dingklang", "diplomasi", "dirgahayu", "disertasi", "disfungsi", "diskredit", "diskursif", "disleksia", "dislokasi", "dismutasi", "disonansi", "disosiasi", "dispenser", "disposisi", "distilasi", "distingsi", "divestasi", "diabeter", "diagonal", "dialisis", "diameter", "diaspora", "difraksi", "digestif", "diglosia", "dikotomi", "diktator", "dilatasi", "dimorfik", "dinamika", "dioksida", "diopsida", "diplomat", "direktur", "disentri", "disensus", "disiplin", "diskotek", "diskresi", "dispersi", "disrupsi", "distansi", "distorsi", "diagram", "difabel", "digdaya", "digital", "digresi", "diletan", "dimensi", "dinamik", "dinamis", "dinamit", "dinasti", "dioksin", "diorama", "diploma", "diptera", "direksi", "dirigen", "disagio", "disiden", "disjoki", "diskoid", "diskusi", "disuasi", "dividen", "diadem", "diakon", "dialek", "dialog", "diaper", "diayah", "diesel", "dilasi", "dinamo", "diniah", "diorit", "diare", "diode", "didih", "didik", "didis", "digit", "dikau", "dikir", "diksi", "dikte", "dinas", "dipan", "dirah", "direk", "disko", "dinda", "difusi", "dilema", "dingin", "diniah", "diorit", "dirham", "disket", "diskon", "divisi", "diftong", "difteri", "dinding", "dingkis", "dingkit", "dioksin", "diorama", "diploma", "dirigen", "disiden", "displin", "disjoki", "diskusi", "distrik", "dividen", "digestif", "diglosia", "dikotomi", "dingklik", "dioksida", "diplomat", "direktur", "disentri", "diskresi", "disorder", "dispersi", "distansi", "disrupsi", "divergen", "dingklang", "diplomasi", "dirgahayu", "disertasi", "disfungsi", "disilabik", "diskredit", "disleksia", "dislokasi", "disosiasi", "dispenser", "disposisi", "distilasi", "dinosaurus", "diplomatik", "diplomatis", "dirgantara", "disimilasi", "diskontinu", "disparitas", "distilator", "distribusi", "divergensi", "diversitas", "disabilitas", "disinfektan", "diskrepansi", "disintegrasi", "diskriminasi", "diskriminatif", "diskontinuitas", "diskualifikasi"];

    function oa(a, e) {
      (null == e || e > a.length) && (e = a.length);

      for (var n = 0, i = new Array(e); n < e; n++) {
        i[n] = a[n];
      }

      return i;
    }

    var ka = k.languageProcessing.getWords;

    function ma(a) {
      var e = ka(a.toLowerCase()),
          n = e.filter(function (a) {
        return a.length > 4;
      });
      if (0 === (n = n.filter(function (a) {
        return a.startsWith("di");
      })).length) return !1;

      var i,
          t = function (a, e) {
        var _n2;

        if ("undefined" == typeof Symbol || null == a[Symbol.iterator]) {
          if (Array.isArray(a) || (_n2 = function (a, e) {
            if (a) {
              if ("string" == typeof a) return oa(a, void 0);
              var n = Object.prototype.toString.call(a).slice(8, -1);
              return "Object" === n && a.constructor && (n = a.constructor.name), "Map" === n || "Set" === n ? Array.from(a) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? oa(a, void 0) : void 0;
            }
          }(a)) || e && a && "number" == typeof a.length) {
            _n2 && (a = _n2);

            var i = 0,
                t = function t() {};

            return {
              s: t,
              n: function n() {
                return i >= a.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: a[i++]
                };
              },
              e: function e(a) {
                throw a;
              },
              f: t
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var s,
            r = !0,
            u = !1;
        return {
          s: function s() {
            _n2 = a[Symbol.iterator]();
          },
          n: function n() {
            var a = _n2.next();

            return r = a.done, a;
          },
          e: function e(a) {
            u = !0, s = a;
          },
          f: function f() {
            try {
              r || null == _n2["return"] || _n2["return"]();
            } finally {
              if (u) throw s;
            }
          }
        };
      }(da);

      try {
        var s = function s() {
          var a = i.value;
          n = n.filter(function (e) {
            return !e.startsWith(a);
          });
        };

        for (t.s(); !(i = t.n()).done;) {
          s();
        }
      } catch (a) {
        t.e(a);
      } finally {
        t.f();
      }

      return 0 !== (n = n.filter(function (a) {
        var n = !0,
            i = e.indexOf(a);
        return "untuk" === e[i - 1] && (n = !1), n;
      })).length;
    }

    var ga = function (a) {
      r()(s, a);
      var e,
          n,
          i = (e = s, n = function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (a) {
          return !1;
        }
      }(), function () {
        var a,
            i = o()(e);

        if (n) {
          var t = o()(this).constructor;
          a = Reflect.construct(i, arguments, t);
        } else a = i.apply(this, arguments);

        return l()(this, a);
      });

      function s(a) {
        var e;
        return t()(this, s), delete (e = i.call(this, a)).defaultResearches.getFleschReadingScore, Object.assign(e.config, {
          language: "id",
          passiveConstructionType: "morphological",
          firstWordExceptions: m,
          functionWords: K,
          transitionWords: p,
          twoPartTransitionWords: q
        }), Object.assign(e.helpers, {
          getStemmer: la,
          isPassiveSentence: ma
        }), e;
      }

      return s;
    }(k.languageProcessing.AbstractResearcher);
  },
  5: function _(a, e, n) {
    var i = n(6)["default"],
        t = n(9);
    a.exports = function (a, e) {
      return !e || "object" !== i(e) && "function" != typeof e ? t(a) : e;
    }, a.exports["default"] = a.exports, a.exports.__esModule = !0;
  },
  6: function _(a, e) {
    function n(e) {
      return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (a.exports = n = function n(a) {
        return _typeof(a);
      }, a.exports["default"] = a.exports, a.exports.__esModule = !0) : (a.exports = n = function n(a) {
        return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : _typeof(a);
      }, a.exports["default"] = a.exports, a.exports.__esModule = !0), n(e);
    }

    a.exports = n, a.exports["default"] = a.exports, a.exports.__esModule = !0;
  },
  8: function _(a, e) {
    function n(e, i) {
      return a.exports = n = Object.setPrototypeOf || function (a, e) {
        return a.__proto__ = e, a;
      }, a.exports["default"] = a.exports, a.exports.__esModule = !0, n(e, i);
    }

    a.exports = n, a.exports["default"] = a.exports, a.exports.__esModule = !0;
  },
  9: function _(a, e) {
    a.exports = function (a) {
      if (void 0 === a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return a;
    }, a.exports["default"] = a.exports, a.exports.__esModule = !0;
  }
});