"use strict";

!function () {
  "use strict";

  var t = tinymce.util.Tools.resolve("tinymce.PluginManager"),
      a = function a(t) {
    return /^[A-Za-z][A-Za-z0-9\-:._]*$/.test(t);
  },
      e = function e(t) {
    var e = t.selection.getNode();
    return "A" === e.tagName && "" === t.dom.getAttrib(e, "href") ? e.id || e.name : "";
  },
      i = function i(t, e) {
    var n = t.selection.getNode();
    "A" === n.tagName && "" === t.dom.getAttrib(n, "href") ? (n.removeAttribute("name"), n.id = e, t.undoManager.add()) : (t.focus(), t.selection.collapse(!0), t.execCommand("mceInsertContent", !1, t.dom.createHTML("a", {
      id: e
    })));
  },
      n = function n(r) {
    var t = e(r);
    r.windowManager.open({
      title: "Anchor",
      body: {
        type: "textbox",
        name: "id",
        size: 40,
        label: "Id",
        value: t
      },
      onsubmit: function onsubmit(t) {
        var e,
            n,
            o = t.data.id;
        e = r, (a(n = o) ? (i(e, n), 0) : (e.windowManager.alert("Id should start with a letter, followed only by letters, numbers, dashes, dots, colons or underscores."), 1)) && t.preventDefault();
      }
    });
  },
      o = function o(t) {
    t.addCommand("mceAnchor", function () {
      n(t);
    });
  },
      r = function r(o) {
    return function (t) {
      for (var e = 0; e < t.length; e++) {
        (n = t[e]).attr("href") || !n.attr("id") && !n.attr("name") || n.firstChild || t[e].attr("contenteditable", o);
      }

      var n;
    };
  },
      c = function c(t) {
    t.on("PreInit", function () {
      t.parser.addNodeFilter("a", r("false")), t.serializer.addNodeFilter("a", r(null));
    });
  },
      d = function d(t) {
    t.addButton("anchor", {
      icon: "anchor",
      tooltip: "Anchor",
      cmd: "mceAnchor",
      stateSelector: "a:not([href])"
    }), t.addMenuItem("anchor", {
      icon: "anchor",
      text: "Anchor",
      context: "insert",
      cmd: "mceAnchor"
    });
  };

  t.add("anchor", function (t) {
    c(t), o(t), d(t);
  });
}();