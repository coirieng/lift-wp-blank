"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.yoast = window.yoast || {}, window.yoast.schemaBlocks = function (t) {
  var e = {};

  function n(o) {
    if (e[o]) return e[o].exports;
    var r = e[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var r in t) {
      n.d(o, r, function (e) {
        return t[e];
      }.bind(null, r));
    }
    return o;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 239);
}([, function (t, e) {
  t.exports = window.wp.element;
}, function (t, e) {
  t.exports = window.lodash;
}, function (t, e) {
  t.exports = window.React;
},,,,,,, function (t, e) {
  t.exports = window.wp.i18n;
},,, function (t, e) {
  t.exports = window.yoast.componentsNew;
},,,,,,,,,, function (t, e) {
  function n(e) {
    return "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? (t.exports = n = function n(t) {
      return _typeof(t);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0) : (t.exports = n = function n(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    }, t.exports["default"] = t.exports, t.exports.__esModule = !0), n(e);
  }

  t.exports = n, t.exports["default"] = t.exports, t.exports.__esModule = !0;
},,,,,,,,, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.BlockValidationResult = e.BlockValidation = e.BlockPresence = void 0;
  var o = n(509);
  Object.defineProperty(e, "BlockValidation", {
    enumerable: !0,
    get: function get() {
      return o.BlockValidation;
    }
  });
  var r = n(134);
  Object.defineProperty(e, "BlockValidationResult", {
    enumerable: !0,
    get: function get() {
      return r.BlockValidationResult;
    }
  }), Object.defineProperty(e, "BlockPresence", {
    enumerable: !0,
    get: function get() {
      return r.BlockPresence;
    }
  });
}, function (t, e) {
  t.exports = window.wp.data;
}, function (t, e, n) {
  "use strict";

  var _o,
      r = this && this.__extends || (_o = function o(t, e) {
    return (_o = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(32),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.save = function (t, e, n) {
      return null;
    }, e.prototype.edit = function (t, e, n) {
      return null;
    }, e.prototype.sidebar = function (t, e) {
      return null;
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          required: !0 === this.options.required
        }, t)
      };
    }, e.prototype.validate = function (t) {
      return new s.BlockValidationResult(t.clientId, this.constructor.name, s.BlockValidation.Unknown, s.BlockPresence.Unknown);
    }, e;
  }(i(n(240))["default"]);

  e["default"] = a;
},,,,,,,,,, function (t, e, n) {
  "use strict";

  var o,
      r,
      i = this && this.__spreadArray || function (t, e) {
    for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) {
      t[r] = e[n];
    }

    return t;
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.ConsoleLogger = e.LogLevel = void 0, function (t) {
    t[t.NONE = 0] = "NONE", t[t.ERROR = 1] = "ERROR", t[t.WARNING = 2] = "WARNING", t[t.INFO = 3] = "INFO", t[t.DEBUG = 4] = "DEBUG";
  }(r = e.LogLevel || (e.LogLevel = {}));

  var s = ((o = {})[r.NONE] = "black", o[r.ERROR] = "red", o[r.WARNING] = "darkorange", o[r.INFO] = "blue", o[r.DEBUG] = "darkorchid", o),
      a = function () {
    function t(t) {
      void 0 === t && (t = r.NONE), this.level = r.NONE, this.setLogLevel(t);
    }

    return t.prototype.setLogLevel = function (t) {
      this.level = t;
    }, t.prototype.writeLog = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++) {
        e[n - 1] = arguments[n];
      }

      this.level >= t && t !== r.NONE && console.log.apply(console, i(["%c " + r[t] + ":", "color: " + s[t] + ";"], e));
    }, t.prototype.log = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      this.debug.apply(this, t);
    }, t.prototype.debug = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      this.writeLog.apply(this, i([r.DEBUG], t));
    }, t.prototype.info = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      this.writeLog.apply(this, i([r.INFO], t));
    }, t.prototype.warning = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      this.writeLog.apply(this, i([r.WARNING], t));
    }, t.prototype.error = function () {
      for (var t = [], e = 0; e < arguments.length; e++) {
        t[e] = arguments[e];
      }

      this.writeLog.apply(this, i([r.ERROR], t));
    }, t.prototype.startGroup = function (t, e) {
      void 0 === e && (e = r.DEBUG), this.level >= e && e !== r.NONE && console.groupCollapsed(t);
    }, t.prototype.endGroup = function () {
      console.groupEnd();
    }, t;
  }();

  e.ConsoleLogger = a;
  var u = new a(r.ERROR);
  e["default"] = u;
}, function (t, e) {
  t.exports = window.wp.components;
},,, function (t, e, n) {
  "use strict";

  var _o2,
      r = this && this.__extends || (_o2 = function o(t, e) {
    return (_o2 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o2(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(240)),
      a = n(32),
      u = n(134),
      c = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      return null;
    }, e.prototype.configuration = function () {
      return {};
    }, e.prototype.validate = function (t) {
      return new a.BlockValidationResult(t.clientId, t.name, a.BlockValidation.Valid, u.BlockPresence.Unknown);
    }, e;
  }(s["default"]);

  e["default"] = c;
},,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getHumanReadableBlockName = e.getBlockType = e.restoreBlock = e.removeBlock = e.getBlockByClientId = void 0;
  var o = n(33);

  function r(t) {
    return o.select("core/blocks").getBlockType(t);
  }

  e.getBlockByClientId = function (t) {
    return o.select("core/block-editor").getBlock(t);
  }, e.removeBlock = function (t) {
    o.dispatch("core/block-editor").removeBlock(t);
  }, e.restoreBlock = function (t, e) {
    o.dispatch("core/block-editor").replaceBlock(t, e);
  }, e.getBlockType = r, e.getHumanReadableBlockName = function (t) {
    var e = r(t) || null;
    if (e) return e.title;
    var n = t.lastIndexOf("/");
    return n < 0 || n === t.length - 1 ? t : t.substring(n + 1).toLocaleLowerCase();
  };
},,,,,,,,,,,, function (t, e) {
  t.exports = window.wp.blockEditor;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.registerBlockDefinition = e.getBlockDefinition = void 0;
  var o = {};
  e.getBlockDefinition = function (t) {
    return o[t];
  }, e.registerBlockDefinition = function (t, e) {
    o[t] = e;
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__createBinding || (Object.create ? function (t, e, n, o) {
    void 0 === o && (o = n), Object.defineProperty(t, o, {
      enumerable: !0,
      get: function get() {
        return e[n];
      }
    });
  } : function (t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n];
  }),
      r = this && this.__exportStar || function (t, e) {
    for (var n in t) {
      "default" === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n);
    }
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.YOAST_SCHEMA_BLOCKS_STORE_NAME = void 0, r(n(138), e), r(n(247), e), r(n(248), e), r(n(526), e), e.YOAST_SCHEMA_BLOCKS_STORE_NAME = "yoast-seo/schema-blocks";
},,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var o = this && this.__createBinding || (Object.create ? function (t, e, n, o) {
    void 0 === o && (o = n), Object.defineProperty(t, o, {
      enumerable: !0,
      get: function get() {
        return e[n];
      }
    });
  } : function (t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n];
  }),
      r = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    });
  } : function (t, e) {
    t["default"] = e;
  }),
      i = this && this.__importStar || function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) {
      "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && o(e, t, n);
    }
    return r(e, t), e;
  },
      s = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.BlockDefinitionRepository = e.BlockLeaf = e.BlockInstruction = e.BlockDefinition = void 0;
  var a = s(n(242));
  e.BlockDefinition = a["default"];
  var u = s(n(34));
  e.BlockInstruction = u["default"];
  var c = s(n(109));
  e.BlockLeaf = c["default"];
  var l = i(n(80));
  e.BlockDefinitionRepository = l;
}, function (t, e) {
  t.exports = window.wp.blocks;
}, function (t, e, n) {
  "use strict";

  var _o3,
      r = this && this.__extends || (_o3 = function o(t, e) {
    return (_o3 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o3(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(244)),
      a = n(1),
      u = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.renderChildren = function (t, e, n) {
      return t.map(function (t, o) {
        return a.createElement(a.Fragment, {
          key: o
        }, t[n](e, o));
      });
    }, e;
  }(s["default"]);

  e["default"] = u;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.createBlockEditProps = e.getParentIdOfType = e.getParent = e.getBlockSchemaId = e.getBlockId = e.getParentId = void 0;
  var o = n(33),
      r = n(67);

  function i(t) {
    return o.select("core/block-editor").getBlockRootClientId(t);
  }

  function s(t) {
    var e,
        n = [t.name.replace(/\//g, "-")],
        r = t.clientId;

    do {
      e = i(r);
      var s = o.select("core/block-editor").getBlockIndex(r, e);
      n.push(s.toString()), r = e;
    } while ("" !== e);

    return n.join("-");
  }

  e.getParentId = i, e.getBlockId = s, e.getBlockSchemaId = function (t) {
    return o.select("core/editor").getPermalink() + "#/schema/" + s(t);
  }, e.getParent = function (t) {
    var e = i(t);
    return e ? r.getBlockByClientId(e) : null;
  }, e.getParentIdOfType = function (t, e) {
    return o.select("core/block-editor").getBlockParentsByBlockName(t, e);
  }, e.createBlockEditProps = function (t, e) {
    return void 0 === e && (e = !1), {
      attributes: t.attributes,
      className: t.attributes.className || "",
      clientId: t.clientId,
      isSelected: e,
      setAttributes: o.dispatch("core/block-editor").updateBlockAttributes.bind(null, t.clientId)
    };
  };
}, function (t, e, n) {
  "use strict";

  var _o4,
      r = this && this.__extends || (_o4 = function o(t, e) {
    return (_o4 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o4(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e;
  }(i(n(244))["default"]);

  e["default"] = s;
},,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.BlockValidationResult = e.BlockPresence = void 0;
  var o,
      r = n(32),
      i = n(10),
      s = n(67);
  !function (t) {
    t.Required = "required", t.Recommended = "recommended", t.Optional = "optional", t.Unknown = "unknown";
  }(o = e.BlockPresence || (e.BlockPresence = {}));

  var a = function () {
    function t(t, e, n, o, r) {
      this.name = e, this.clientId = t, this.result = n, this.blockPresence = o, this.issues = [], this.message = r;
    }

    return t.MissingAttribute = function (e, n, a) {
      var u = r.BlockValidation.Unknown,
          c = "";

      switch (a) {
        case o.Required:
          u = r.BlockValidation.MissingRequiredAttribute, c = i.sprintf(
          /* Translators: %1$s expands to the block name. */
          i.__("The `%1$s` attribute is required but missing.", "yoast-schema-blocks"), s.getHumanReadableBlockName(n));
          break;

        case o.Recommended:
          u = r.BlockValidation.MissingRecommendedAttribute, c = i.sprintf(
          /* Translators: %1$s expands to the block name. */
          i.__("The `%1$s` attribute is recommended but missing.", "yoast-schema-blocks"), s.getHumanReadableBlockName(n));
      }

      return new t(e.clientId, n || e.name, u, a || o.Unknown, c);
    }, t.MissingBlock = function (e, n) {
      return n === o.Recommended ? t.MissingRecommendedBlock(e, n === o.Recommended) : new t(null, e, r.BlockValidation.MissingRequiredBlock, n || o.Unknown, i.sprintf(
      /* Translators: %1$s expands to the block name. */
      i.__("The `%1$s` block is required but missing.", "yoast-schema-blocks"), s.getHumanReadableBlockName(e)));
    }, t.MissingRecommendedBlock = function (e, n) {
      return new t(null, e, r.BlockValidation.MissingRecommendedBlock, n ? o.Recommended : o.Unknown, i.sprintf(
      /* Translators: %1$s expands to the block name. */
      i.__("The `%1$s` block is recommended but missing.", "yoast-schema-blocks"), s.getHumanReadableBlockName(e)));
    }, t.Valid = function (e, n, i) {
      return new t(e.clientId, n || e.name, r.BlockValidation.Valid, i || o.Unknown);
    }, t;
  }();

  e.BlockValidationResult = a;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.splitOnTag = e.stripAllTags = e.stripTags = void 0, e.stripTags = function (t, e) {
    void 0 === e && (e = []);
    var n = new DOMParser().parseFromString(t, "text/html");
    return function t(e, n) {
      e.forEach(function (e) {
        if (e.nodeType === Node.ELEMENT_NODE) {
          var o = e.nodeName.toLowerCase();
          "script" !== o && "style" !== o ? (t(e.childNodes, n), n.includes(o) || e.replaceWith.apply(e, Array.from(e.childNodes))) : e.remove();
        }
      });
    }(n.body.childNodes, e), n.body.innerHTML;
  }, e.stripAllTags = function (t) {
    return t.replace(/(<([^>]+)>)/g, "");
  }, e.splitOnTag = function (t, e) {
    return function t(e, n) {
      var o = [];
      return e.forEach(function (e) {
        e.nodeType === Node.ELEMENT_NODE && (e.nodeName.toLowerCase() !== n ? o = o.concat(t(e.childNodes, n)) : o.push(e.innerHTML));
      }), o;
    }(new DOMParser().parseFromString(t, "text/html").body.childNodes, e);
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = function t(e, n) {
    for (var o = 0, r = e; o < r.length; o++) {
      var i = r[o];
      n(i), i.innerBlocks && t(i.innerBlocks, n);
    }
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getAllBlocks = e.insertBlock = e.mapBlocksRecursively = e.getInnerblocksByName = e.filterBlocksRecursively = void 0;
  var r = n(33),
      i = o(n(136));

  function s(t, e) {
    var n = [];
    return i["default"](t.innerBlocks, function (t) {
      e(t) && n.push(t);
    }), n;
  }

  function a(t, e) {
    var n = [];
    return i["default"](t, function (t) {
      n.push(e(t));
    }), n;
  }

  e.getInnerblocksByName = function (t, e) {
    return s(t, function (t) {
      return e.includes(t.name);
    });
  }, e.filterBlocksRecursively = s, e.mapBlocksRecursively = a, e.getAllBlocks = function (t) {
    return a(t, function (t) {
      return t;
    });
  }, e.insertBlock = function (t, e, n) {
    r.dispatch("core/block-editor").insertBlock(t, n, e);
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__createBinding || (Object.create ? function (t, e, n, o) {
    void 0 === o && (o = n), Object.defineProperty(t, o, {
      enumerable: !0,
      get: function get() {
        return e[n];
      }
    });
  } : function (t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n];
  }),
      r = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    });
  } : function (t, e) {
    t["default"] = e;
  }),
      i = this && this.__importStar || function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) {
      "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && o(e, t, n);
    }
    return r(e, t), e;
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.schemaBlocksActions = e.ResetBlockValidationCommand = e.AddBlockValidationCommand = e.SchemaBlocksStoreActions = void 0;
  var s = i(n(522));
  e.schemaBlocksActions = s, e.SchemaBlocksStoreActions = {
    ADD_BLOCK_VALIDATION: "WPSEO_ADD_BLOCK_VALIDATION",
    RESET_BLOCK_VALIDATIONS: "WPSEO_CLEAR_BLOCK_VALIDATIONS"
  }, e.AddBlockValidationCommand = function (t) {
    return {
      type: e.SchemaBlocksStoreActions.ADD_BLOCK_VALIDATION,
      validation: t
    };
  }, e.ResetBlockValidationCommand = function () {
    return {
      type: e.SchemaBlocksStoreActions.RESET_BLOCK_VALIDATIONS
    };
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getPresence = void 0;
  var o = n(32);

  e.getPresence = function (t) {
    return t && "undefined" !== t.required ? !0 === t.required ? o.BlockPresence.Required : !1 === t.required ? o.BlockPresence.Recommended : void 0 : o.BlockPresence.Unknown;
  };
}, function (t, e, n) {
  "use strict";

  var _o5,
      r = this && this.__extends || (_o5 = function o(t, e) {
    return (_o5 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o5(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.schemaDefinitions = void 0;
  var s = i(n(243)),
      a = i(n(550));
  e.schemaDefinitions = {};

  var u = function (t) {
    function n() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(n, t), n.prototype.render = function (t) {
      return this.tree.render(t);
    }, n.prototype.register = function () {
      var t = this.configuration();
      e.schemaDefinitions[t.name] = this;
    }, n.prototype.onlyNested = function () {
      return !0 === this.configuration().onlyNested;
    }, n.prototype.separateInGraph = function () {
      return !0 === this.configuration().separateInGraph;
    }, n.separatorCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"], n.parser = a["default"], n;
  }(s["default"]);

  e["default"] = u;
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getValidationResultForClientId = e.getValidationResults = e.getInvalidInnerBlocks = e.getAllDescendantIssues = e.attributeNotEmpty = e.attributeExists = void 0;
  var r = o(n(518));
  e.attributeExists = r["default"];
  var i = o(n(519));
  e.attributeNotEmpty = i["default"];
  var s = o(n(520));
  e.getAllDescendantIssues = s["default"];
  var a = o(n(246));
  e.getInvalidInnerBlocks = a["default"];
  var u = n(521);
  Object.defineProperty(e, "getValidationResults", {
    enumerable: !0,
    get: function get() {
      return u.getValidationResults;
    }
  }), Object.defineProperty(e, "getValidationResultForClientId", {
    enumerable: !0,
    get: function get() {
      return u.getValidationResultForClientId;
    }
  });
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SchemaBlocksDefaultState = void 0, e.SchemaBlocksDefaultState = {
    validations: {}
  };
}, function (t, e, n) {
  "use strict";

  var _o6,
      r = this && this.__extends || (_o6 = function o(t, e) {
    return (_o6 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o6(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.renderable = function () {
      return !1 !== this.options.visible;
    }, e;
  }(i(n(34))["default"]);

  e["default"] = s;
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.LogLevel = e.BlockInstruction = e.SchemaAnalysis = e.attributeNotEmpty = e.attributeExists = e.BlockValidationResult = e.BlockPresence = void 0;
  var r = n(505),
      i = o(n(34));
  e.BlockInstruction = i["default"];
  var s = n(44);
  Object.defineProperty(e, "LogLevel", {
    enumerable: !0,
    get: function get() {
      return s.LogLevel;
    }
  });
  var a = n(32);
  Object.defineProperty(e, "BlockPresence", {
    enumerable: !0,
    get: function get() {
      return a.BlockPresence;
    }
  }), Object.defineProperty(e, "BlockValidationResult", {
    enumerable: !0,
    get: function get() {
      return a.BlockValidationResult;
    }
  });
  var u = n(175);
  Object.defineProperty(e, "attributeExists", {
    enumerable: !0,
    get: function get() {
      return u.attributeExists;
    }
  }), Object.defineProperty(e, "attributeNotEmpty", {
    enumerable: !0,
    get: function get() {
      return u.attributeNotEmpty;
    }
  });
  var c = n(259);
  Object.defineProperty(e, "SchemaAnalysis", {
    enumerable: !0,
    get: function get() {
      return c.SchemaAnalysis;
    }
  }), e["default"] = r.initialize;
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var r = o(n(44)),
      i = n(32),
      s = n(134),
      a = function () {
    function t(t, e) {
      this.id = t, this.options = e;
    }

    return t.prototype.configuration = function () {
      return {};
    }, t.prototype.renderable = function () {
      return !0;
    }, t.prototype.validate = function (t) {
      return new i.BlockValidationResult(t.clientId, t.name, i.BlockValidation.Unknown, s.BlockPresence.Unknown);
    }, t.register = function (t, e) {
      void 0 === this.registeredInstructions && (this.registeredInstructions = {}), this.registeredInstructions[t] = e;
    }, t.create = function (t, e, n) {
      void 0 === this.registeredInstructions && (this.registeredInstructions = {});
      var o = this.registeredInstructions[t];
      if (!o) throw r["default"].error("Invalid instruction: ", t), new Error("Invalid block instruction type: " + t);
      return new o(e, n);
    }, t;
  }();

  e["default"] = a;
}, function (t, e, n) {
  "use strict";

  var _o7,
      r = this && this.__extends || (_o7 = function o(t, e) {
    return (_o7 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o7(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  });

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = n(1),
      s = n(45),
      a = n(107),
      u = n(245),
      c = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.save = function (t) {
      var e = this.options,
          n = e.label,
          o = e.name,
          r = e.hideLabelFromVision,
          s = t.attributes[o],
          a = "span";
      return this.options.tag && (a = this.options.tag), i.createElement(a, {
        "data-id": o,
        "data-value": s
      }, !r && i.createElement("strong", null, n, ":"), this.label(s));
    }, e.prototype.validate = function (t) {
      return u.defaultValidate(t, this);
    }, e.prototype.label = function (t) {
      var e = this.options.options.find(function (e) {
        return e.value === t;
      });
      return e ? e.label : null;
    }, e.prototype.edit = function (t) {
      var e,
          n = this,
          o = this.options,
          r = o.label,
          a = o.options,
          u = o.hideLabelFromVision,
          c = o.className,
          l = o.defaultValue,
          f = t.attributes[this.options.name];
      f || t.setAttributes(((e = {})[this.options.name] = l || a[0].value, e));
      var p = i.useCallback(function (e) {
        var o;
        t.setAttributes(((o = {})[n.options.name] = e, o));
      }, [t]);
      return i.createElement(s.SelectControl, {
        className: [c, "yoast-schema-select"].join(" "),
        label: r,
        value: f,
        defaultValue: l,
        onChange: p,
        options: a,
        hideLabelFromVision: u
      });
    }, e;
  }(a.BlockInstruction);

  e["default"] = c, a.BlockInstruction.register("select", c);
}, function (t, e, n) {
  "use strict";

  var _o8,
      r = this && this.__extends || (_o8 = function o(t, e) {
    return (_o8 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o8(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(1),
      a = n(108),
      u = n(79),
      c = n(33),
      l = n(45),
      f = i(n(243)),
      p = i(n(512)),
      d = n(80),
      h = i(n(44)),
      _ = n(517),
      y = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.edit = function (t) {
      c.select("core/block-editor").isBlockSelected(t.clientId) && _.openGeneralSidebar("edit-post/block", !0);
      var e = this.sidebarElements(t),
          n = this.tree.children.map(function (e, n) {
        return e.edit(t, n);
      }).filter(function (t) {
        return null !== t;
      });

      if (e.length > 0) {
        var o = s.createElement(u.InspectorControls, {
          key: "sidebar-inspector-controls"
        }, s.createElement(l.PanelBody, null, e));
        n.unshift(o);
      }

      return 1 === n.length ? n[0] : s.createElement(s.Fragment, {
        key: t.clientId
      }, n.map(function (t, e) {
        return s.createElement(s.Fragment, {
          key: e
        }, t);
      }));
    }, e.prototype.save = function (t) {
      return this.tree.save(t);
    }, e.prototype.register = function () {
      var t = this,
          e = this.configuration(),
          n = e.name;
      delete e.name, e.edit = function (e) {
        return t.edit(e);
      }, e.save = function (e) {
        return t.save(e);
      }, h["default"].debug("registering block " + n), e.icon && "string" == typeof e.icon && e.icon.startsWith("<svg") && (e.icon = this.createBlockIcon(e)), a.registerBlockType(n, e), d.registerBlockDefinition(n, this);
    }, e.prototype.sidebarElements = function (t) {
      return Object.values(this.instructions).map(function (e, n) {
        return s.createElement(s.Fragment, {
          key: e.id
        }, e.sidebar(t, n));
      }).filter(function (t) {
        return null !== t;
      });
    }, e.prototype.createBlockIcon = function (t) {
      var e = s.createElement("span", {
        className: "yoast-schema-blocks-icon",
        dangerouslySetInnerHTML: {
          __html: t.icon
        }
      });
      return s.createElement(u.BlockIcon, {
        icon: e
      });
    }, e.separatorCharacters = ["b", "c", "d", "f", "g", "h", "k", "m", "z"], e.parser = p["default"], e;
  }(f["default"]);

  e["default"] = y;
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var r = n(32),
      i = n(2),
      s = o(n(44)),
      a = function () {
    function t(t, e, n, o) {
      void 0 === e && (e = ""), void 0 === n && (n = {}), void 0 === o && (o = null), this.separator = t, this.template = e, this.instructions = n, this.tree = o;
    }

    return t.prototype.customizer = function (t, e) {
      if (i.isArray(t)) return t.concat(e);
    }, t.prototype.configuration = function () {
      var t = this;
      return Object.values(this.instructions).reduce(function (e, n) {
        return i.mergeWith(e, n.configuration(), t.customizer);
      }, {});
    }, t.prototype.validate = function (t) {
      if (!t) return null;
      s["default"].startGroup("Validation results: " + t.name);
      var e = Object.values(this.instructions).map(function (e) {
        var n = e.validate(t);
        return s["default"].debug(e.constructor.name + " Instruction => " + r.BlockValidation[n.result]), n;
      }).filter(function (t) {
        return t.result !== r.BlockValidation.Skipped;
      });
      if (s["default"].endGroup(), e.length < 1) return r.BlockValidationResult.Valid(t, t.name);
      var n = i.maxBy(e, function (t) {
        return t.result;
      }),
          o = new r.BlockValidationResult(t.clientId, t.name, n.result, n.blockPresence);
      return o.issues = e, o;
    }, t;
  }();

  e["default"] = a;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  e["default"] = function () {};
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.defaultValidate = void 0;
  var o = n(2),
      r = n(175),
      i = n(32),
      s = n(139);

  e.defaultValidate = function (t, e) {
    var n = [],
        a = i.BlockPresence.Unknown;
    if (e.options && (a = s.getPresence(e.options), r.attributeExists(t, e.options.name) && r.attributeNotEmpty(t, e.options.name) || n.push(i.BlockValidationResult.MissingAttribute(t, e.constructor.name, a))), t.name.startsWith("core/") && !t.isValid && n.push(new i.BlockValidationResult(t.clientId, e.constructor.name, i.BlockValidation.Invalid, a)), n.length < 1) return i.BlockValidationResult.Valid(t, e.constructor.name, a);
    var u = o.maxBy(n, function (t) {
      return t.result;
    }),
        c = new i.BlockValidationResult(t.clientId, e.constructor.name, u.result, u.blockPresence);
    return c.issues = n, c;
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.validateInnerblockTree = e.findMissingBlocks = void 0;
  var r = n(80),
      i = n(32),
      s = o(n(136)),
      a = n(137),
      u = o(n(44)),
      c = n(134),
      l = n(67);

  function f(t, e, n) {
    return e.filter(function (e) {
      return !t.some(function (t) {
        return t.name === e.name;
      });
    }).map(function (t) {
      return i.BlockValidationResult.MissingBlock(l.getHumanReadableBlockName(t.name), n);
    });
  }

  function p(t) {
    var e = [];
    return s["default"](t.innerBlocks, function (t) {
      var n = r.getBlockDefinition(t.name);
      n ? e.push(n.validate(t)) : (u["default"].warning("Block definition for '" + t.name + "' is not registered."), e.push(new i.BlockValidationResult(t.clientId, t.name, i.BlockValidation.Unknown, c.BlockPresence.Unknown)));
    }), e;
  }

  e.findMissingBlocks = f, e.validateInnerblockTree = p, e["default"] = function (t, e, n) {
    void 0 === e && (e = []), void 0 === n && (n = []);
    var o = e.map(function (t) {
      return t.name;
    }),
        r = n.map(function (t) {
      return t.name;
    }),
        i = [],
        s = a.getInnerblocksByName(t, o);
    i.push.apply(i, f(s, e, c.BlockPresence.Required));
    var u = a.getInnerblocksByName(t, r);
    i.push.apply(i, f(u, n, c.BlockPresence.Recommended));
    var l = p(t);
    return i.push.apply(i, l), i;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.schemaBlocksReducer = void 0;
  var o = n(523);
  Object.defineProperty(e, "schemaBlocksReducer", {
    enumerable: !0,
    get: function get() {
      return o.schemaBlocksReducer;
    }
  });
}, function (t, e, n) {
  "use strict";

  var o = this && this.__createBinding || (Object.create ? function (t, e, n, o) {
    void 0 === o && (o = n), Object.defineProperty(t, o, {
      enumerable: !0,
      get: function get() {
        return e[n];
      }
    });
  } : function (t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n];
  }),
      r = this && this.__exportStar || function (t, e) {
    for (var n in t) {
      "default" === n || Object.prototype.hasOwnProperty.call(e, n) || o(e, t, n);
    }
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), r(n(524), e);
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.arrayOrObjectToOptions = void 0, e.arrayOrObjectToOptions = function (t) {
    var e = [];

    if (Array.isArray(t)) {
      for (var n = 0, o = t; n < o.length; n++) {
        var r = o[n];
        e.push({
          label: r,
          value: r
        });
      }

      return e;
    }

    for (var i = 0, s = Object.entries(t); i < s.length; i++) {
      var a = s[i],
          u = a[0];
      r = a[1], e.push({
        label: u,
        value: r
      });
    }

    return e;
  };
}, function (t, e, n) {
  "use strict";

  var _o9,
      r = this && this.__extends || (_o9 = function o(t, e) {
    return (_o9 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o9(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__assign || function () {
    return (i = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) {
        for (var r in e = arguments[n]) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  },
      s = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.Heading = void 0;

  var a = n(3),
      u = n(79),
      c = n(1),
      l = n(107),
      f = s(n(251)),
      p = s(n(529)),
      d = n(245),
      h = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: "string",
          source: "html",
          "default": this.options["default"],
          selector: "[data-id=" + this.options.name + "]",
          required: !0 === this.options.required
        }, t[this.options.name + "_level"] = {
          type: "number"
        }, t)
      };
    }, e.prototype.edit = function (t, e, n) {
      var o = this,
          r = this.getBaseAttributes(t, n);
      r.onChange = function (e) {
        var n;
        return t.setAttributes(((n = {})[o.options.name] = e, n));
      }, this.options.placeholder && (r.placeholder = this.options.placeholder);
      var s = this.getHeadingLevel(t),
          l = c.useCallback(function (e) {
        var n;
        t.setAttributes(((n = {})[o.options.name + "_level"] = e, n));
      }, [s]),
          f = c.createElement(u.BlockControls, null, c.createElement(p["default"], {
        selectedLevel: s,
        onChange: l
      }));
      return c.createElement(a.Fragment, null, f, c.createElement(u.RichText, i({}, r)));
    }, e.prototype.getHeadingLevel = function (t) {
      return t.attributes[this.options.name + "_level"] || this.options.defaultHeadingLevel || 2;
    }, e.prototype.getBaseAttributes = function (t, e) {
      return {
        tagName: "h" + this.getHeadingLevel(t),
        value: t.attributes[this.options.name] || this.options.value,
        className: this.options["class"],
        "data-id": this.options.name,
        key: e
      };
    }, e.prototype.validate = function (t) {
      return d.defaultValidate(t, this);
    }, e;
  }(f["default"]);

  e.Heading = h, l.BlockInstruction.register("heading", h);
}, function (t, e, n) {
  "use strict";

  var _o10,
      r = this && this.__extends || (_o10 = function o(t, e) {
    return (_o10 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o10(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  });

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = n(79),
      s = n(1),
      a = n(107),
      u = n(32),
      c = n(139),
      l = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.save = function (t, e, n) {
      return s.createElement(i.RichText.Content, this.getBaseAttributes(t, n));
    }, e.prototype.edit = function (t, e, n) {
      var o = this,
          r = this.getBaseAttributes(t, n);
      return r.onChange = function (e) {
        var n;
        return t.setAttributes(((n = {})[o.options.name] = e, n));
      }, this.options.placeholder && (r.placeholder = this.options.placeholder, r.keepPlaceholderOnFocus = this.options.keepPlaceholderOnFocus), s.createElement(i.RichText, r);
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: "string",
          source: "html",
          selector: "[data-id=" + this.options.name + "]",
          "default": this.options["default"],
          required: !0 === this.options.required
        }, t)
      };
    }, e.prototype.validate = function (t) {
      var e = c.getPresence(this.options),
          n = t.attributes[this.options.name];
      if (n && n.trim().length > 0) return u.BlockValidationResult.Valid(t, this.options.name, e);
      var o = e === u.BlockPresence.Required ? u.BlockValidation.MissingRequiredAttribute : u.BlockValidation.MissingRecommendedAttribute;
      return new u.BlockValidationResult(t.clientId, this.options.name, o, e);
    }, e;
  }(a.BlockInstruction);

  e["default"] = l;
}, function (t, e, n) {
  "use strict";

  var _o11,
      r = this && this.__extends || (_o11 = function o(t, e) {
    return (_o11 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o11(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(2),
      a = n(1),
      u = n(79),
      c = n(107),
      l = n(32),
      f = i(n(532)),
      p = i(n(246)),
      d = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.save = function (t, e, n) {
      return a.createElement(u.InnerBlocks.Content, {
        key: n
      });
    }, e.prototype.edit = function (t, e, n) {
      var o = {
        key: n
      };
      return this.options.requiredBlocks = this.options.requiredBlocks || [], this.options.recommendedBlocks = this.options.recommendedBlocks || [], this.options.appender ? o.renderAppender = this.renderAppender(t.clientId, this.options.appenderLabel) : o.renderAppender = !1, this.arrangeAllowedBlocks(o), this.options.template && (o.template = this.options.template), a.createElement(u.InnerBlocks, o);
    }, e.prototype.renderAppender = function (t, e) {
      return function () {
        return a.createElement(f["default"], {
          clientId: t,
          label: e
        });
      };
    }, e.prototype.arrangeAllowedBlocks = function (t) {
      t.allowedBlocks = ["yoast/warning-block"], this.options.allowedBlocks && (t.allowedBlocks = this.options.allowedBlocks.concat(t.allowedBlocks)), t.allowedBlocks = t.allowedBlocks.concat(this.options.requiredBlocks.map(function (t) {
        return t.name;
      })).concat(this.options.recommendedBlocks.map(function (t) {
        return t.name;
      }));
    }, e.prototype.validate = function (t) {
      var e = p["default"](t, this.options.requiredBlocks, this.options.recommendedBlocks);
      if (!e || e.length < 1) return l.BlockValidationResult.Valid(t, this.constructor.name);
      var n = s.maxBy(e, function (t) {
        return t.result;
      }),
          o = new l.BlockValidationResult(t.clientId, this.constructor.name, n.result, n.blockPresence);
      return o.issues = e, o;
    }, e;
  }(c.BlockInstruction);

  e["default"] = d, c.BlockInstruction.register("inner-blocks", d);
}, function (t, e) {
  t.exports = window.moment;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = n(1),
      r = n(537);

  e["default"] = function (t) {
    return o.createElement("div", {
      className: "yoast-block-label-with-help-link"
    }, o.createElement("div", {
      className: "yoast-block-sidebar-title"
    }, t.text, o.createElement("span", {
      className: "yoast-inline-icon"
    }, o.createElement(r.HelpLink, {
      URL: t.URL
    }))));
  };
}, function (t, e, n) {
  "use strict";

  var _o12,
      r = this && this.__extends || (_o12 = function o(t, e) {
    return (_o12 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o12(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = n(135),
      u = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      var e = this,
          n = t.attributes[this.options.name];
      return "string" != typeof n ? [] : a.splitOnTag(n, this.options.tag).map(function (t) {
        return a.stripTags(t, e.options.allowedTags);
      });
    }, e;
  }(s["default"]);

  e["default"] = u, s["default"].register("list", u);
}, function (t, e, n) {
  "use strict";

  var _o13,
      r = this && this.__extends || (_o13 = function o(t, e) {
    return (_o13 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o13(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.configuration = function () {
      return this.options;
    }, e.prototype.renderable = function () {
      return !1;
    }, e;
  }(s["default"]);

  e["default"] = a, s["default"].register("schema", a);
}, function (t, e) {
  t.exports = window.wp.hooks;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.isInvalidResult = e.isOkResult = e.isResultValidForSchema = e.isEmptyResult = e.isMissingResult = e.isValidResult = void 0;
  var o = n(32);
  e.isValidResult = function (t) {
    return t < 200;
  }, e.isMissingResult = function (t) {
    return [o.BlockValidation.MissingRecommendedBlock, o.BlockValidation.MissingRequiredBlock].includes(t);
  }, e.isEmptyResult = function (t) {
    return [o.BlockValidation.MissingRecommendedAttribute, o.BlockValidation.MissingRequiredAttribute, o.BlockValidation.MissingRecommendedVariation, o.BlockValidation.MissingRequiredVariation].includes(t);
  }, e.isResultValidForSchema = function (t) {
    return t < 300;
  }, e.isOkResult = function (t) {
    return t >= 200 && t < 300;
  }, e.isInvalidResult = function (t) {
    return t >= 300;
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.SchemaAnalysis = void 0;
  var r = n(33),
      i = n(1),
      s = n(10),
      a = n(13),
      u = n(45),
      c = o(n(577)),
      l = n(578),
      f = n(81),
      p = o(n(254));

  function d(t) {
    return i.createElement(i.Fragment, null, i.createElement("div", {
      className: "yoast-block-sidebar-warnings"
    }, i.createElement("div", {
      className: "yoast-block-sidebar-title"
    }, s.__("Analysis", "yoast-schema-blocks")), i.createElement("ul", {
      className: "yoast-block-sidebar-warnings"
    }, t.warnings.map(function (t) {
      return i.createElement(h, {
        warning: t,
        key: t.text
      });
    }))));
  }

  function h(t) {
    return i.createElement("li", {
      className: "yoast-block-sidebar-warning"
    }, i.createElement(a.SvgIcon, {
      icon: "circle",
      color: t.warning.color,
      size: "13px",
      className: "yoast-block-sidebar-warning-dot"
    }), t.warning.text);
  }

  e.SchemaAnalysis = function () {
    var t = r.useSelect(function (t) {
      var e = t(f.YOAST_SCHEMA_BLOCKS_STORE_NAME).getBlockNames();
      return t(f.YOAST_SCHEMA_BLOCKS_STORE_NAME).getValidationsForBlockNames(e);
    }, []),
        e = [],
        n = r.useSelect(function (t) {
      var e = t("yoast-seo/schema-blocks"),
          n = e.getRequiredBlockNames,
          o = e.getRecommendedBlockNames;
      return {
        requiredBlocks: n() || [],
        recommendedBlocks: o() || []
      };
    }),
        o = n.requiredBlocks,
        a = n.recommendedBlocks;
    t && (e = l.createAnalysisMessages(t));
    var h = i.useState(""),
        _ = h[0],
        y = h[1],
        v = i.useCallback(function (t) {
      y(t);
    }, [_]);
    return i.createElement("div", {
      key: "schema-analysis",
      className: "yoast-schema-analysis"
    }, i.createElement(p["default"], {
      text: s.__("JobPosting schema", "yoast-schema-blocks"),
      URL: "https://yoa.st/4dk"
    }), i.createElement(u.TextControl, {
      onChange: v,
      value: _,
      label: "Job title"
    }), i.createElement(d, {
      warnings: e
    }), i.createElement(c["default"], {
      heading: s.__("Required information", "yoast-schema-blocks"),
      blockNames: o
    }), i.createElement(c["default"], {
      heading: s.__("Recommended information", "yoast-schema-blocks"),
      blockNames: a
    }));
  };
},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,, function (t, e, n) {
  "use strict";

  var o = this && this.__createBinding || (Object.create ? function (t, e, n, o) {
    void 0 === o && (o = n), Object.defineProperty(t, o, {
      enumerable: !0,
      get: function get() {
        return e[n];
      }
    });
  } : function (t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n];
  }),
      r = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    });
  } : function (t, e) {
    t["default"] = e;
  }),
      i = this && this.__importStar || function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) {
      "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && o(e, t, n);
    }
    return r(e, t), e;
  },
      s = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.initialize = void 0, n(506);

  var a = n(108),
      u = n(45),
      c = n(1),
      l = n(562),
      f = n(81),
      p = n(563),
      d = n(565),
      h = s(n(569)),
      _ = s(n(570)),
      y = i(n(44)),
      v = s(n(575)),
      m = n(259);

  function g(t) {
    return t.split("\n").map(function (t) {
      return t.trim();
    }).join("");
  }

  e.initialize = function (t) {
    void 0 === t && (t = y.LogLevel.ERROR), y["default"].setLogLevel(t), f.initializeSchemaBlocksStore(), v["default"](["core/paragraph", "core/image", "core/heading", "core/separator", "yoast/warning-block"], ["yoast/job-posting"]), a.registerBlockType("yoast/warning-block", p.WarningBlock), jQuery('script[type="text/schema-template"]').each(function () {
      try {
        var t = g(this.innerHTML);
        d.processSchema(t).register();
      } catch (t) {
        y["default"].error("Failed to parse schema-template", t, this);
      }
    }), h["default"](), jQuery('script[type="text/block-template"]').each(function () {
      try {
        var t = g(this.innerHTML);
        d.processBlock(t).register();
      } catch (t) {
        y["default"].error("Failed to parse gutenberg-template", t, this);
      }
    }), l.registerPlugin("yoast-seo-schema-blocks-analysis", {
      render: function render() {
        return c.createElement(c.Fragment, null, ["sidebar", "metabox"].map(function (t) {
          return c.createElement(u.Fill, {
            key: t,
            name: ["yoast-schema-blocks-analysis", t].join("-")
          }, c.createElement(m.SchemaAnalysis, null));
        }));
      },
      icon: null
    }), _["default"]();
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n(507), n(545);
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n(508), n(510), n(511), n(527), n(250), n(531), n(252), n(533), n(241), n(534), n(535), n(536), n(538), n(539), n(540), n(541), n(542), n(544);
}, function (t, e, n) {
  "use strict";

  var _o14,
      r = this && this.__extends || (_o14 = function o(t, e) {
    return (_o14 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o14(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(34)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.configuration = function () {
      return Object.assign(this.options, {
        attributes: {
          "is-yoast-schema-block": {
            type: "object",
            "default": !0
          }
        }
      });
    }, e.prototype.renderable = function () {
      return !1;
    }, e;
  }(s["default"]);

  s["default"].register("block", a);
}, function (t, e, n) {
  "use strict";

  var o;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.BlockValidation = void 0, (o = e.BlockValidation || (e.BlockValidation = {}))[o.Valid = 100] = "Valid", o[o.Unknown = 101] = "Unknown", o[o.Skipped = 102] = "Skipped", o[o.OK = 200] = "OK", o[o.MissingRecommendedAttribute = 201] = "MissingRecommendedAttribute", o[o.MissingRecommendedBlock = 202] = "MissingRecommendedBlock", o[o.MissingRecommendedVariation = 203] = "MissingRecommendedVariation", o[o.Invalid = 300] = "Invalid", o[o.MissingRequiredAttribute = 301] = "MissingRequiredAttribute", o[o.MissingRequiredBlock = 302] = "MissingRequiredBlock", o[o.MissingRequiredVariation = 303] = "MissingRequiredVariation";
}, function (t, e, n) {
  "use strict";

  var _o15,
      r = this && this.__extends || (_o15 = function o(t, e) {
    return (_o15 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o15(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(34)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.edit = function (t) {
      return t.className;
    }, e.prototype.save = function (t) {
      return t.attributes.className ? t.attributes.className : "";
    }, e;
  }(s["default"]);

  e["default"] = a, s["default"].register("class-name", a);
}, function (t, e, n) {
  "use strict";

  var _o16,
      r = this && this.__extends || (_o16 = function o(t, e) {
    return (_o16 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o16(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(241)),
      a = i(n(34)),
      u = n(249),
      c = ["USD", "EUR", "GBP", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EGP", "ERN", "ETB", "FJD", "FKP", "GEL", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "IQD", "IRR", "ISK", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRY", "TTD", "TWD", "TZS", "UAH", "UGX", "USN", "UYI", "UYU", "UYW", "UZS", "VES", "VND", "VUV", "WST", "XAF", "XAG", "XAU", "XBA", "XBB", "XBC", "XBD", "XCD", "XDR", "XOF", "XPD", "XPF", "XPT", "XSU", "XTS", "XUA", "XXX", "YER", "ZAR", "ZMW", "ZWL"],
      l = function (t) {
    function e(e, n) {
      var o = t.call(this, e, n) || this;
      return o.options.options = u.arrayOrObjectToOptions(c), o;
    }

    return r(e, t), e;
  }(s["default"]);

  a["default"].register("currency-select", l);
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(2),
      i = o(n(513)),
      s = o(n(514)),
      a = o(n(515)),
      u = o(n(516));

  function c(t, e) {
    var n = e.separator,
        o = e.instructions;
    return t.split(n).map(function (t, e) {
      return e % 2 ? new i["default"](o[t]) : new s["default"](t);
    }).filter(function (t) {
      return !(t instanceof s["default"] && "" === t.value);
    });
  }

  e["default"] = function (t) {
    var e = new DOMParser().parseFromString(t.template, "text/html");
    return t.tree = new u["default"](function t(e, n) {
      var o = r.flatMap(e, function (e) {
        return function (e, n) {
          switch (e.nodeType) {
            case Node.TEXT_NODE:
              return c(e.nodeValue, n);

            case Node.ELEMENT_NODE:
              for (var o = new a["default"](e.nodeName.toLowerCase()), r = 0; r < e.attributes.length; r++) {
                var i = e.attributes[r];
                o.attributes[i.name] = c(i.value, n);
              }

              return o.children = t(e.childNodes, n), o.children && o.children.forEach(function (t) {
                t.parent = o;
              }), [o];
          }

          return [];
        }(e, n);
      });
      return 0 === o.length ? null : o;
    }(e.body.childNodes, t)), t;
  };
}, function (t, e, n) {
  "use strict";

  var _o17,
      r = this && this.__extends || (_o17 = function o(t, e) {
    return (_o17 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o17(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return void 0 === e && console.error("could not instantiate BlockInstructionLeaf with a null instruction"), n.instruction = e, n;
    }

    return r(e, t), e.prototype.save = function (t, e) {
      return this.instruction.save(t, this, e);
    }, e.prototype.edit = function (t, e) {
      return this.instruction.edit(t, this, e);
    }, e;
  }(i(n(109))["default"]);

  e["default"] = s;
}, function (t, e, n) {
  "use strict";

  var _o18,
      r = this && this.__extends || (_o18 = function o(t, e) {
    return (_o18 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o18(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.value = e, n;
    }

    return r(e, t), e.prototype.save = function () {
      return this.value;
    }, e.prototype.edit = function () {
      return this.value;
    }, e;
  }(i(n(109))["default"]);

  e["default"] = s;
}, function (t, e, n) {
  "use strict";

  var _o19,
      r = this && this.__extends || (_o19 = function o(t, e) {
    return (_o19 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o19(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(109)),
      a = n(1),
      u = {
    "class": "className",
    "for": "htmlFor"
  },
      c = function (t) {
    function e(e, n, o) {
      void 0 === n && (n = {}), void 0 === o && (o = []);
      var r = t.call(this) || this;
      return r.tag = e, r.attributes = n, r.children = o, r;
    }

    return r(e, t), e.prototype.save = function (t, e) {
      var n = {};

      for (var o in this.attributes) {
        Object.prototype.hasOwnProperty.call(n, o) || (n[u[o] || o] = this.attributes[o].map(function (e, n) {
          return e.save(t, n);
        }).join(""));
      }

      return n.key = e, a.createElement(this.tag, n, this.renderChildren(this.children, t, "save"));
    }, e.prototype.edit = function (t, e) {
      var n = {};

      for (var o in this.attributes) {
        Object.prototype.hasOwnProperty.call(n, o) || (n[u[o] || o] = this.attributes[o].map(function (e, n) {
          return e.edit(t, n);
        }).join(""));
      }

      return -1 !== ["button", "a"].indexOf(this.tag) && (n.onClick = function (t) {
        return t.preventDefault(), !1;
      }), n.key = e, a.createElement(this.tag, n, this.renderChildren(this.children, t, "edit"));
    }, e;
  }(s["default"]);

  e["default"] = c;
}, function (t, e, n) {
  "use strict";

  var _o20,
      r = this && this.__extends || (_o20 = function o(t, e) {
    return (_o20 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o20(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(109)),
      a = n(1),
      u = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.children = e, n;
    }

    return r(e, t), e.prototype.save = function (t) {
      return a.createElement(a.Fragment, null, this.renderChildren(this.children, t, "save"));
    }, e.prototype.edit = function (t) {
      return a.createElement(a.Fragment, null, this.renderChildren(this.children, t, "edit"));
    }, e;
  }(s["default"]);

  e["default"] = u;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.openGeneralSidebar = void 0;
  var o = n(33);

  e.openGeneralSidebar = function (t, e) {
    void 0 === t && (t = "yoast-seo/seo-sidebar"), void 0 === e && (e = !1);
    var n = !1 === o.select("core/edit-post").isEditorSidebarOpened();
    (e || n) && o.select("core/edit-post").getActiveGeneralSidebarName() !== t && o.dispatch("core/edit-post").openGeneralSidebar(t);
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t.attributes, e);
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = n(2),
      r = n(135);

  e["default"] = function (t, e) {
    var n = t.attributes[e];
    return "number" == typeof n || ("string" == typeof n && (n = (n = r.stripAllTags(n)).trim()), !o.isEmpty(n));
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e["default"] = function t(e) {
    if (!e) return [];
    var n = [e];
    return e.issues.forEach(function (e) {
      n = n.concat(t(e));
    }), n;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getValidationResultForClientId = e.getValidationResults = void 0;
  var o = n(33),
      r = n(81);

  function i() {
    var t = o.select(r.YOAST_SCHEMA_BLOCKS_STORE_NAME).getSchemaBlocksValidationResults();
    return t ? Object.values(t) : [];
  }

  e.getValidationResults = i, e.getValidationResultForClientId = function t(e, n) {
    n || (n = i());

    for (var o = 0, r = n; o < r.length; o++) {
      var s = r[o];
      if (s.clientId === e) return s;

      if (s.issues.length > 0) {
        var a = t(e, s.issues);
        if (a) return a;
      }
    }

    return null;
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.resetBlockValidation = e.addBlockValidation = void 0;
  var o = n(138);
  e.addBlockValidation = function (t) {
    return o.AddBlockValidationCommand(t);
  }, e.resetBlockValidation = function () {
    return o.ResetBlockValidationCommand();
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.schemaBlocksReducer = void 0;
  var o = n(138),
      r = n(176);

  e.schemaBlocksReducer = function (t, e) {
    switch (void 0 === t && (t = r.SchemaBlocksDefaultState), e.type) {
      case o.SchemaBlocksStoreActions.RESET_BLOCK_VALIDATIONS:
        return r.SchemaBlocksDefaultState;

      case o.SchemaBlocksStoreActions.ADD_BLOCK_VALIDATION:
        var n = Object.assign({}, t),
            i = e.validation;
        return n.validations = n.validations || {}, n.validations[i.name] = i, n;

      default:
        return t;
    }
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__spreadArray || function (t, e) {
    for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) {
      t[r] = e[n];
    }

    return t;
  },
      r = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getBlockNames = e.getRecommendedBlockNames = e.getRequiredBlockNames = e.getValidationsForBlockNames = e.getValidationResultForClientId = e.getSchemaBlocksValidationResults = void 0;
  var i = n(176),
      s = n(525),
      a = r(n(44));

  function u(t) {
    return t.validations || i.SchemaBlocksDefaultState.validations;
  }

  e.getSchemaBlocksValidationResults = u, e.getValidationResultForClientId = function (t, e) {
    var n = u(t);
    a["default"].debug("stored validations:", n);
    var o = Object.values(n);
    return s.recursivelyFind(o, function (t) {
      return t.clientId === e;
    });
  }, e.getValidationsForBlockNames = function (t, e) {
    var n = u(t);
    return Object.values(n).filter(function (t) {
      return e.includes(t.name);
    });
  }, e.getRequiredBlockNames = function () {
    return ["yoast/job-description", "yoast/job-location"];
  }, e.getRecommendedBlockNames = function () {
    return ["yoast/job-application-closing-date", "yoast/job-employment-type", "yoast/job-salary", "yoast/job-requirements", "yoast/job-benefits", "yoast/job-apply-button"];
  }, e.getBlockNames = function () {
    return o(o([], ["yoast/job-application-closing-date", "yoast/job-employment-type", "yoast/job-salary", "yoast/job-requirements", "yoast/job-benefits", "yoast/job-apply-button"]), ["yoast/job-description", "yoast/job-location"]);
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.recursivelyFind = void 0, e.recursivelyFind = function t(e, n) {
    for (var o = 0, r = e; o < r.length; o++) {
      var i = r[o];
      if (n(i)) return i;

      if (i.issues.length > 0) {
        var s = t(i.issues, n);
        if (s) return s;
      }
    }

    return null;
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__assign || function () {
    return (o = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) {
        for (var r in e = arguments[n]) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  },
      r = this && this.__createBinding || (Object.create ? function (t, e, n, o) {
    void 0 === o && (o = n), Object.defineProperty(t, o, {
      enumerable: !0,
      get: function get() {
        return e[n];
      }
    });
  } : function (t, e, n, o) {
    void 0 === o && (o = n), t[o] = e[n];
  }),
      i = this && this.__setModuleDefault || (Object.create ? function (t, e) {
    Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    });
  } : function (t, e) {
    t["default"] = e;
  }),
      s = this && this.__importStar || function (t) {
    if (t && t.__esModule) return t;
    var e = {};
    if (null != t) for (var n in t) {
      "default" !== n && Object.prototype.hasOwnProperty.call(t, n) && r(e, t, n);
    }
    return i(e, t), e;
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.initializeSchemaBlocksStore = void 0;
  var a = n(33),
      u = n(176),
      c = n(138),
      l = n(247),
      f = s(n(248)),
      p = n(81);

  e.initializeSchemaBlocksStore = function () {
    var t = {
      reducer: l.schemaBlocksReducer,
      selectors: o({}, f),
      actions: o({}, c.schemaBlocksActions),
      initialState: u.SchemaBlocksDefaultState
    };
    a.registerStore(p.YOAST_SCHEMA_BLOCKS_STORE_NAME, t);
  };
}, function (t, e, n) {
  "use strict";

  var _o21,
      r = this && this.__extends || (_o21 = function o(t, e) {
    return (_o21 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o21(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(45),
      a = n(1),
      u = n(528),
      c = n(10),
      l = i(n(34)),
      f = n(3),
      p = n(239),
      d = n(139),
      h = n(32),
      _ = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.edit = function (t) {
      var n = this,
          o = t.attributes,
          r = t.setAttributes,
          i = e.getDateFormat(),
          l = u.dateI18n(i, o[this.options.name], !1),
          p = a.useState(l),
          d = p[0],
          h = p[1],
          _ = c.__("Select a date", "yoast-schema-blocks");

      o[this.options.name] && (_ = u.format("Y-m-d", o[this.options.name]));
      var y = f.useCallback(function (t) {
        var e,
            o = t ? t.split("T")[0] : null;
        r(((e = {})[n.options.name] = o, e)), h(u.dateI18n(i, o, !1));
      }, [t, i, h]),
          v = f.useCallback(function (t) {
        return a.createElement("button", {
          onClick: t.onToggle,
          "aria-expanded": t.isOpen
        }, _);
      }, [d]),
          m = f.useCallback(function () {
        return a.createElement("div", {
          className: "yoast-block-date-picker"
        }, a.createElement(s.DateTimePicker, {
          currentDate: o[n.options.name] ? d : null,
          onChange: y
        }));
      }, [d, y]);
      return a.createElement(s.Dropdown, {
        className: "yoast-block-date-picker-container",
        position: "bottom center",
        renderToggle: v,
        renderContent: m
      });
    }, e.getDateFormat = function () {
      return u.__experimentalGetSettings().formats.date;
    }, e.prototype.save = function (t) {
      var n = t.attributes[this.options.name];
      if (!n) return null;
      var o = e.getDateFormat();
      return a.createElement("time", {
        dateTime: n
      }, u.dateI18n(o, n, !1));
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: "string"
        }, t)
      };
    }, e.prototype.validate = function (t) {
      var e = t.attributes[this.options.name],
          n = d.getPresence(this.options),
          o = h.BlockValidation.Unknown;
      return o = e && e.trim().length > 0 ? h.BlockValidation.Valid : n === h.BlockPresence.Required ? h.BlockValidation.MissingRequiredAttribute : h.BlockValidation.MissingRecommendedAttribute, new p.BlockValidationResult(t.clientId, this.constructor.name, o, n);
    }, e;
  }(l["default"]);

  e["default"] = _, l["default"].register("date", _);
}, function (t, e) {
  t.exports = window.wp.date;
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(45),
      i = n(10),
      s = n(3),
      a = o(n(530)),
      u = [1, 2, 3, 4, 5, 6],
      c = {
    className: "block-library-heading-level-dropdown",
    isAlternate: !0
  };

  e["default"] = function (t) {
    var e = t.selectedLevel,
        n = t.onChange,
        o = s.useCallback(function (t) {
      var n = t.onToggle,
          o = t.isOpen,
          u = s.useCallback(function (t) {
        o || "ArrowDown" !== t.key || (t.preventDefault(), t.stopPropagation(), n());
      }, [n]);
      return s.createElement(r.ToolbarButton, {
        "aria-expanded": o,
        "aria-haspopup": "true",
        icon: s.createElement(a["default"], {
          level: e
        }),
        label: i.__("Change heading level", "yoast-schema-blocks"),
        onClick: n,
        onKeyDown: u,
        showTooltip: !0,
        title: i.__("Change heading level", "yoast-schema-blocks")
      });
    }, []),
        l = s.useCallback(function () {
      return s.createElement(r.Toolbar, {
        className: "block-library-heading-level-toolbar",
        label: i.__("Change heading level", "yoast-schema-blocks")
      }, s.createElement(r.ToolbarGroup, {
        isCollapsed: !1,
        controls: u.map(function (t) {
          var o = t === e;
          return {
            icon: s.createElement(a["default"], {
              level: t
            }),
            title: i.sprintf( // translators: %s: heading level e.g: "1", "2", "3"
            i.__("Heading %d", "yoast-schema-blocks"), t),
            isActive: o,
            onClick: function onClick() {
              n(t);
            }
          };
        })
      }));
    }, []);
    return s.createElement(r.Dropdown, {
      popoverProps: c,
      renderToggle: o,
      renderContent: l
    });
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = n(45),
      r = n(3);

  e["default"] = function (t) {
    var e = t.level;
    return r.createElement(o.SVG, {
      width: "24",
      height: "24",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg"
    }, r.createElement(o.Path, {
      d: {
        1: "M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",
        2: "M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",
        3: "M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",
        4: "M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",
        5: "M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",
        6: "M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"
      }[e]
    }));
  };
}, function (t, e, n) {
  "use strict";

  var _o22,
      r = this && this.__extends || (_o22 = function o(t, e) {
    return (_o22 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o22(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(1),
      a = i(n(34)),
      u = n(110),
      c = n(67),
      l = i(n(44)),
      f = n(80),
      p = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.sidebar = function (t, e) {
      var n = [];
      this.options.parents && (n = u.getParentIdOfType(t.clientId, this.options.parents));
      var o = c.getBlockByClientId(t.clientId),
          r = [];
      return n.length > 0 && n.forEach(function (t) {
        var e = c.getBlockByClientId(t),
            n = f.getBlockDefinition(e.name);

        if (n) {
          l["default"].debug(o.name + " inherited sidebar from " + e.name + " definition");
          var i = u.createBlockEditProps(e);
          r.push.apply(r, n.sidebarElements(i));
        }
      }), s.createElement(s.Fragment, null, r);
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          parents: this.options.parents
        }, t)
      };
    }, e;
  }(a["default"]);

  e["default"] = p, a["default"].register("inherit-sidebar", p);
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = n(1),
      r = n(79);

  e["default"] = function (t) {
    var e = t.clientId,
        n = t.label;
    return o.createElement("div", {
      "data-root-client-id": e,
      className: "wp-block block-editor-default-block-appender"
    }, o.createElement("p", {
      className: "block-editor-default-block-appender__content yoast-schema-block-appender__content"
    }, n), o.createElement(r.Inserter, {
      rootClientId: e,
      position: "bottom right"
    }));
  };
}, function (t, e, n) {
  "use strict";

  var _o23,
      r = this && this.__extends || (_o23 = function o(t, e) {
    return (_o23 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o23(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(34)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.getBaseAttributes = function (t, e) {
      var n = {
        tagName: this.options.tag,
        value: t.attributes[this.options.name],
        className: this.options["class"],
        "data-id": this.options.name,
        key: e
      };
      return this.options.multiline && (n.multiline = this.options.multiline), n;
    }, e;
  }(i(n(251))["default"]);

  e["default"] = a, s["default"].register("rich-text", a);
}, function (t, e, n) {
  "use strict";

  var _o24,
      r = this && this.__extends || (_o24 = function o(t, e) {
    return (_o24 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o24(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(34)),
      a = n(45),
      u = n(1),
      c = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.sidebar = function (t) {
      var e = this,
          n = this.options,
          o = n.name,
          r = n.label,
          i = n.help,
          s = u.useCallback(function (n) {
        var o;
        t.setAttributes(((o = {})[e.options.name] = n, o));
      }, [t]);
      return u.createElement(a.CheckboxControl, {
        checked: t.attributes[o],
        label: r,
        onChange: s,
        help: i
      });
    }, e.prototype.save = function (t) {
      return t.attributes[this.options.name] && this.options.output ? this.options.output : null;
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: "boolean"
        }, t)
      };
    }, e;
  }(s["default"]);

  s["default"].register("sidebar-checkbox", c);
}, function (t, e, n) {
  "use strict";

  var _o25,
      r = this && this.__extends || (_o25 = function o(t, e) {
    return (_o25 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o25(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = i(n(253)),
      a = n(1),
      u = n(45),
      c = n(10),
      l = i(n(34));

  function f(t, e, n) {
    var o, r;
    n.isValid() && 0 !== n.asMinutes() ? t.setAttributes(((r = {})[e] = n.toISOString(), r)) : t.setAttributes(((o = {})[e] = null, o));
  }

  var p = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.sidebar = function (t, e) {
      var n = this,
          o = "",
          r = s["default"].duration(NaN);
      "string" == typeof t.attributes[this.options.name] ? r = s["default"].duration(t.attributes[this.options.name]) : "string" == typeof this.options["default"] && (r = s["default"].duration(this.options["default"])), "string" == typeof this.options.label && (o = this.options.label + " ");
      var i = Math.floor(r.asHours()),
          l = r.minutes(),
          p = {
        label: o + c.__("hours", "yoast-schema-blocks"),
        value: isNaN(i) || 0 === i ? "" : i,
        onChange: function onChange(e) {
          var o = s["default"].duration({
            hours: parseInt(e, 10),
            minutes: l || 0
          });
          f(t, n.options.name, o);
        },
        type: "number",
        key: "hours"
      },
          d = {
        label: o + c.__("minutes", "yoast-schema-blocks"),
        value: isNaN(l) || 0 === l ? "" : l,
        onChange: function onChange(e) {
          var o = s["default"].duration({
            hours: i || 0,
            minutes: parseInt(e, 10)
          });
          f(t, n.options.name, o);
        },
        type: "number",
        key: "minutes"
      };
      return this.options.help && (p.help = this.options.help, d.help = this.options.help), a.createElement(a.Fragment, {
        key: e
      }, [a.createElement(u.TextControl, p), a.createElement(u.TextControl, d)]);
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: "string",
          required: !0 === this.options.required
        }, t)
      };
    }, e.prototype.value = function (t) {
      var e = s["default"].duration(NaN);
      return "string" == typeof t.attributes[this.options.name] ? e = s["default"].duration(t.attributes[this.options.name]) : "string" == typeof this.options["default"] && (e = s["default"].duration(this.options["default"])), e.isValid() ? e.humanize() : "";
    }, e;
  }(i(n(177))["default"]);

  l["default"].register("sidebar-duration", p);
}, function (t, e, n) {
  "use strict";

  var _o26,
      r = this && this.__extends || (_o26 = function o(t, e) {
    return (_o26 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o26(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(1),
      a = n(45),
      u = i(n(34)),
      c = i(n(177)),
      l = i(n(254)),
      f = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.sidebar = function (t, e) {
      var n = this,
          o = {
        label: this.options.label,
        value: t.attributes[this.options.name],
        className: this.options.className,
        placeholder: this.options.placeholder,
        onChange: function onChange(e) {
          var o,
              r = "number" === n.options.type ? parseInt(e, 10) : e;
          t.setAttributes(((o = {})[n.options.name] = r, o));
        },
        key: e
      };
      return this.options.help && (o.help = this.options.help), this.options.type && (o.type = this.options.type), this.options.helpLink && (o.label = l["default"]({
        text: o.label,
        URL: this.options.helpLink
      })), s.createElement(a.TextControl, o);
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: "number" === this.options.type ? "number" : "string",
          required: !0 === this.options.required
        }, t)
      };
    }, e.prototype.value = function (t) {
      return t.attributes[this.options.name] || this.options["default"] || "";
    }, e;
  }(c["default"]);

  u["default"].register("sidebar-input", f);
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.HelpLink = void 0;
  var o = n(1);

  e.HelpLink = function (t) {
    return o.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-2 0 20 18",
      fill: "currentColor",
      height: "15",
      width: "22"
    }, o.createElement("a", {
      className: "yoast-question-mark-icon",
      href: t.URL,
      rel: "noopener noreferrer",
      target: "_blank"
    }, o.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113\n\t\t\t\t8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd"
    })));
  };
}, function (t, e, n) {
  "use strict";

  var _o27,
      r = this && this.__extends || (_o27 = function o(t, e) {
    return (_o27 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o27(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(1),
      a = n(45),
      u = i(n(34)),
      c = n(249),
      l = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.sidebar = function (t, e) {
      var n = this,
          o = {
        label: this.options.label,
        value: t.attributes[this.options.name],
        options: c.arrayOrObjectToOptions(this.options.options),
        onChange: function onChange(e) {
          var o;
          return t.setAttributes(((o = {})[n.options.name] = e, o));
        },
        key: e,
        multiple: this.options.multiple || !1
      };
      return s.createElement(a.SelectControl, o);
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: !0 === this.options.multiple ? "array" : "string",
          required: !0 === this.options.required
        }, t)
      };
    }, e.prototype.value = function (t) {
      return t.attributes[this.options.name] || c.arrayOrObjectToOptions(this.options.options)[0].value;
    }, e;
  }(i(n(177))["default"]);

  u["default"].register("sidebar-select", l);
}, function (t, e, n) {
  "use strict";

  var _o28,
      r = this && this.__extends || (_o28 = function o(t, e) {
    return (_o28 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o28(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(3),
      a = n(45),
      u = n(1),
      c = i(n(34)),
      l = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.edit = function (t) {
      var e = this,
          n = this.options,
          o = n.hideLabelFromVision,
          r = n.label,
          i = n.type,
          c = n.placeholder,
          l = t.attributes[this.options.name],
          f = s.useCallback(function (n) {
        var o;
        t.setAttributes(((o = {})[e.options.name] = n, o));
      }, [t]);
      return u.createElement(a.TextControl, {
        className: t.className,
        hideLabelFromVision: o,
        label: r,
        onChange: f,
        type: i,
        placeholder: c,
        value: l
      });
    }, e.prototype.save = function (t) {
      return t.attributes[this.options.name];
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {}, t[this.options.name] = {
          type: "string"
        }, t)
      };
    }, e;
  }(c["default"]);

  e["default"] = l, c["default"].register("text-input", l);
}, function (t, e, n) {
  "use strict";

  var _o29,
      r = this && this.__extends || (_o29 = function o(t, e) {
    return (_o29 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o29(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(10),
      a = n(250),
      u = n(32),
      c = i(n(34)),
      l = n(32),
      f = n(175),
      p = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.isCompleted = function (t) {
      return f.attributeExists(t, this.options.name) && f.attributeNotEmpty(t, this.options.name);
    }, e.prototype.validate = function (t) {
      return this.isCompleted(t) ? u.BlockValidationResult.Valid(t) : new u.BlockValidationResult(t.clientId, t.name, u.BlockValidation.MissingRequiredAttribute, l.BlockPresence.Required, s.sprintf(
      /* Translators: %s expands to the label of the title field in the block sidebar. */
      s.__("%s has been left empty.", "yoast-schema-blocks"), this.options.fieldName));
    }, e.prototype.renderable = function () {
      return !1;
    }, e;
  }(a.Heading);

  c["default"].register("title", p);
}, function (t, e, n) {
  "use strict";

  var _o30,
      r = this && this.__extends || (_o30 = function o(t, e) {
    return (_o30 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o30(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(34)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.configuration = function () {
      return {
        variations: [this.options]
      };
    }, e.prototype.renderable = function () {
      return !1;
    }, e;
  }(s["default"]);

  e["default"] = a, s["default"].register("variation", a);
}, function (t, e, n) {
  "use strict";

  var _o31,
      r = this && this.__extends || (_o31 = function o(t, e) {
    return (_o31 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o31(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__assign || function () {
    return (i = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) {
        for (var r in e = arguments[n]) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  },
      s = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.VariationPicker = void 0;

  var a = n(33),
      u = n(1),
      c = n(107),
      l = n(32),
      f = s(n(543)),
      p = n(110),
      d = n(139),
      h = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.edit = function (t, e, n) {
      return a.useSelect(function (e) {
        return e("core/block-editor").getBlock(t.clientId);
      }, [t.clientId]).innerBlocks.length > 0 ? null : u.createElement(f["default"], i({}, t, {
        key: "variation-picker-" + n
      }));
    }, e.prototype.validate = function (t) {
      var e = d.getPresence(this.options),
          n = p.getParent(t.clientId),
          o = n ? n.name : this.constructor.name;
      if (function (t) {
        return t.innerBlocks && t.innerBlocks.length > 0;
      }(t)) return l.BlockValidationResult.Valid(t, o, e);
      var r = e === l.BlockPresence.Required ? l.BlockValidation.MissingRequiredVariation : l.BlockValidation.MissingRecommendedVariation;
      return new l.BlockValidationResult(t.clientId, o, r, e);
    }, e;
  }(c.BlockInstruction);

  e.VariationPicker = h, c.BlockInstruction.register("variation-picker", h);
}, function (t, e, n) {
  "use strict";

  var o = this && this.__assign || function () {
    return (o = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) {
        for (var r in e = arguments[n]) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(33),
      i = n(79),
      s = n(108),
      a = n(2),
      u = n(1);

  e["default"] = function (t) {
    var e = t.clientId,
        n = t.name,
        c = t.setAttributes,
        l = r.useSelect(function (t) {
      var e = t("core/blocks"),
          o = e.getBlockVariations,
          r = e.getBlockType,
          i = e.getDefaultBlockVariation;
      return {
        blockType: r(n),
        defaultVariation: i(n, "block"),
        variations: o(n, "block")
      };
    }, [n]),
        f = l.blockType,
        p = l.defaultVariation,
        d = l.variations,
        h = r.useDispatch("core/block-editor").replaceInnerBlocks,
        _ = i.useBlockProps(),
        y = u.useCallback(function (t) {
      void 0 === t && (t = p), t.attributes && c(t.attributes), t.innerBlocks && h(e, function t(e) {
        return a.map(e, function (e) {
          var n = e.name,
              o = e.attributes,
              r = void 0 === o ? {} : o,
              i = e.innerBlocks,
              a = void 0 === i ? [] : i;
          return s.createBlock(n, r, t(a));
        });
      }(t.innerBlocks), !0);
    }, null);

    return u.createElement("div", o({}, _), u.createElement(i.__experimentalBlockVariationPicker, {
      icon: !1,
      label: a.get(f, ["title"]),
      variations: d.map(function (t) {
        return o(o({}, t), {
          icon: u.createElement("span", {
            dangerouslySetInnerHTML: {
              __html: t.icon
            }
          })
        });
      }),
      onSelect: y,
      allowSkip: !1
    }));
  };
}, function (t, e, n) {
  "use strict";

  var _o32,
      r = this && this.__extends || (_o32 = function o(t, e) {
    return (_o32 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o32(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(10),
      a = n(45),
      u = i(n(253)),
      c = n(3),
      l = i(n(34)),
      f = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.save = function (t) {
      var e = t.attributes.value || 0;
      /* translators: %d will be replaced with the number of minutes. */

      return c.createElement("p", {
        className: t.className
      }, s.sprintf(s.__("%d minutes", "yoast-schema-blocks"), e));
    }, e.prototype.edit = function (t) {
      var e = this,
          n = c.useCallback(function (n) {
        var o;
        void 0 === n && (n = "0"), n = Math.abs(n), t.setAttributes(((o = {
          value: Number(n).toString()
        })[e.options.name + "-iso8601-duration"] = e.convertToISOString(n), o));
      }, [t.attributes.value]);
      return c.createElement("div", {
        className: "yoast-schema-flex yoast-schema-duration"
      }, c.createElement(a.TextControl, {
        type: "number",
        min: 0,
        placeholder: "#",
        "aria-label": s.__("Cooking time", "yoast-schema-blocks"),
        className: "minutes-input",
        onChange: n,
        value: t.attributes.value
      }), c.createElement("p", null, " ", s.__("minutes", "yoast-schema-blocks")));
    }, e.prototype.configuration = function () {
      var t;
      return {
        attributes: (t = {
          value: {
            type: "string",
            "default": Number(0).toString()
          }
        }, t[this.options.name + "-iso8601-duration"] = {
          type: "string",
          "default": this.convertToISOString(0)
        }, t)
      };
    }, e.prototype.convertToISOString = function (t) {
      return u["default"].duration(t, "minutes").toISOString();
    }, e;
  }(l["default"]);

  e["default"] = f, l["default"].register("duration", f);
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), n(546), n(547), n(548), n(549), n(556), n(558), n(559), n(255), n(560), n(561), n(256);
}, function (t, e, n) {
  "use strict";

  var _o33,
      r = this && this.__extends || (_o33 = function o(t, e) {
    return (_o33 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o33(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      return t.attributes[this.options.name] || this.options["default"];
    }, e;
  }(s["default"]);

  e["default"] = a, s["default"].register("attribute", a);
}, function (t, e, n) {
  "use strict";

  var _o34,
      r = this && this.__extends || (_o34 = function o(t, e) {
    return (_o34 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o34(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = n(110),
      u = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      return a.getBlockSchemaId(t);
    }, e;
  }(s["default"]);

  s["default"].register("block-id", u);
}, function (t, e, n) {
  "use strict";

  var _o35,
      r = this && this.__extends || (_o35 = function o(t, e) {
    return (_o35 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o35(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = n(135),
      u = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      var e = t.attributes[this.options.name] || this.options["default"];
      return void 0 === e ? null : a.stripTags(e, this.options.allowedTags);
    }, e;
  }(s["default"]);

  e["default"] = u, s["default"].register("html", u);
}, function (t, e, n) {
  "use strict";

  var _o36,
      r = this && this.__extends || (_o36 = function o(t, e) {
    return (_o36 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o36(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(33),
      a = i(n(48)),
      u = n(140),
      c = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      var e = this,
          n = s.select("core/block-editor").getBlocksByClientId(t.clientId)[0].innerBlocks,
          o = [];
      n.forEach(function (t) {
        !function t(e) {
          u.schemaDefinitions[e.name] ? o.push(e) : e.innerBlocks.forEach(function (e) {
            t(e);
          });
        }(t);
      }), n = o, this.options.allowedBlocks && (n = n.filter(function (t) {
        return e.options.allowedBlocks.includes(t.name);
      })), !0 === this.options.onlyFirst && (n = n.slice(0, 1));
      var r = n.map(function (t) {
        var e = u.schemaDefinitions[t.name];
        return e ? e.render(t) : null;
      }).filter(function (t) {
        return null !== t;
      });
      return !0 === this.options.onlyFirst ? r[0] : r;
    }, e;
  }(a["default"]);

  a["default"].register("inner-blocks", c);
}, function (t, e, n) {
  "use strict";

  var o = n(23),
      r = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(2),
      s = r(n(551)),
      a = r(n(552)),
      u = r(n(553)),
      c = r(n(554)),
      l = r(n(555));

  e["default"] = function (t) {
    var e = JSON.parse(t.template);
    return t.tree = function t(e, n) {
      if (Array.isArray(e)) {
        var r = e.map(function (e) {
          return t(e, n);
        });
        return new a["default"](r);
      }

      if ("object" === o(e)) {
        var f = i.mapValues(e, function (e) {
          return t(e, n);
        });
        return new s["default"](f);
      }

      if ("number" == typeof e) {
        var p = e.toString();

        if (p.startsWith(n.separator) && p.endsWith(n.separator)) {
          var d = p.slice(n.separator.length, -n.separator.length);
          return new u["default"](n.instructions[d]);
        }

        return new c["default"](e);
      }

      if ("string" == typeof e) {
        if (-1 === e.indexOf(n.separator)) return new c["default"](e);
        var h = e.split(n.separator).map(function (t, e) {
          return e % 2 ? n.instructions[t] : t;
        }).filter(function (t) {
          return "" !== t;
        });
        return new l["default"](h);
      }

      return new c["default"](e);
    }(e, t), t;
  };
}, function (t, e, n) {
  "use strict";

  var _o37,
      r = this && this.__extends || (_o37 = function o(t, e) {
    return (_o37 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o37(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(2),
      a = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.object = e, n;
    }

    return r(e, t), e.prototype.render = function (t) {
      for (var e = s.mapValues(this.object, function (e) {
        return e.render(t);
      }), n = 0, o = Object.entries(e); n < o.length; n++) {
        var r = o[n],
            i = r[0];
        null == r[1] && delete e[i];
      }

      return e;
    }, e;
  }(i(n(111))["default"]);

  e["default"] = a;
}, function (t, e, n) {
  "use strict";

  var _o38,
      r = this && this.__extends || (_o38 = function o(t, e) {
    return (_o38 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o38(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.array = e, n;
    }

    return r(e, t), e.prototype.render = function (t) {
      return this.array.map(function (e) {
        return e.render(t);
      });
    }, e;
  }(i(n(111))["default"]);

  e["default"] = s;
}, function (t, e, n) {
  "use strict";

  var _o39,
      r = this && this.__extends || (_o39 = function o(t, e) {
    return (_o39 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o39(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.instruction = e, n;
    }

    return r(e, t), e.prototype.render = function (t) {
      return this.instruction.render(t);
    }, e;
  }(i(n(111))["default"]);

  e["default"] = s;
}, function (t, e, n) {
  "use strict";

  var _o40,
      r = this && this.__extends || (_o40 = function o(t, e) {
    return (_o40 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o40(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.constant = e, n;
    }

    return r(e, t), e.prototype.render = function () {
      return this.constant;
    }, e;
  }(i(n(111))["default"]);

  e["default"] = s;
}, function (t, e, n) {
  "use strict";

  var _o41,
      r = this && this.__extends || (_o41 = function o(t, e) {
    return (_o41 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o41(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(111)),
      a = i(n(44)),
      u = function (t) {
    function e(e) {
      var n = t.call(this) || this;
      return n.values = e, n;
    }

    return r(e, t), e.prototype.render = function (t) {
      return this.values.map(function (e) {
        return "string" == typeof e ? e : (e || a["default"].warning("cannot render value ", e), e.render(t));
      }).join("");
    }, e;
  }(s["default"]);

  e["default"] = u;
}, function (t, e, n) {
  "use strict";

  var _o42,
      r = this && this.__extends || (_o42 = function o(t, e) {
    return (_o42 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o42(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = n(135),
      u = n(557),
      c = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      var e = u.getInnerBlocksAttributes(t.clientId, this.options.blocks);
      if (!0 === this.options.onlyFirst ? e = e.slice(0, 1) : !0 === this.options.skipFirst && (e = e.slice(1)), 0 === e.length && this.options.nullWhenEmpty) return null;
      var n = e.map(function (t) {
        return t.value;
      }).join(this.options.split || " ");
      return a.stripTags(n, this.options.allowedTags);
    }, e;
  }(s["default"]);

  s["default"].register("inner-blocks-html", c);
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.getInnerBlocksAttributes = void 0;
  var o = n(33);

  e.getInnerBlocksAttributes = function (t, e) {
    for (var n = o.select("core/block-editor").getBlock(t).innerBlocks, r = [], i = 0, s = n = n.filter(function (t) {
      return (t.name in e);
    }); i < s.length; i++) {
      var a = s[i],
          u = e[a.name];
      r.push({
        name: a.name,
        value: a.attributes[u]
      });
    }

    return r;
  };
}, function (t, e, n) {
  "use strict";

  var _o43,
      r = this && this.__extends || (_o43 = function o(t, e) {
    return (_o43 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o43(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = n(33),
      u = n(110),
      c = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      var e = this,
          n = a.select("core/block-editor").getBlocksByClientId(t.clientId)[0].innerBlocks;
      if (this.options.allowedBlocks && (n = n.filter(function (t) {
        return e.options.allowedBlocks.includes(t.name);
      })), !0 === this.options.onlyFirst ? n = n.slice(0, 1) : !0 === this.options.skipFirst && (n = n.slice(1)), 0 === n.length && this.options.nullWhenEmpty) return null;
      var o = n.map(function (t) {
        return {
          "@id": u.getBlockSchemaId(t)
        };
      });
      return 1 === o.length ? o[0] : o;
    }, e;
  }(s["default"]);

  s["default"].register("inner-blocks-id", c);
}, function (t, e, n) {
  "use strict";

  var _o44,
      r = this && this.__extends || (_o44 = function o(t, e) {
    return (_o44 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o44(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (t) {
      var e = t.attributes.employmentType,
          n = t.attributes,
          o = n.isVolunteer,
          r = n.isInternship;
      if (!o && !r) return e;
      var i = [e];
      return o && i.push("VOLUNTEER"), r && i.push("INTERN"), i;
    }, e;
  }(s["default"]);

  e["default"] = a, s["default"].register("job-employment-type", a);
}, function (t, e, n) {
  "use strict";

  var _o45,
      r = this && this.__extends || (_o45 = function o(t, e) {
    return (_o45 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o45(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = n(33),
      a = i(n(48)),
      u = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function () {
      return s.select("core/editor").getPermalink();
    }, e;
  }(a["default"]);

  a["default"].register("permalink", u);
}, function (t, e, n) {
  "use strict";

  var _o46,
      r = this && this.__extends || (_o46 = function o(t, e) {
    return (_o46 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) {
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      }
    })(t, e);
  }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

    function __() {
      this.constructor = t;
    }

    _o46(t, e), t.prototype = null === e ? Object.create(e) : (__.prototype = e.prototype, new __());
  }),
      i = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var s = i(n(48)),
      a = function (t) {
    function e() {
      return null !== t && t.apply(this, arguments) || this;
    }

    return r(e, t), e.prototype.render = function (e) {
      return t.prototype.render.call(this, e).map(function (t) {
        return {
          "@type": "HowToStep",
          text: t
        };
      });
    }, e;
  }(i(n(255))["default"]);

  e["default"] = a, s["default"].register("recipe-instructions", a);
}, function (t, e) {
  t.exports = window.wp.plugins;
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.WarningBlock = void 0;
  var o = n(564);
  e.WarningBlock = {
    title: "Warning",
    category: "common",
    attributes: {
      removedBlock: {
        type: "object"
      },
      warningText: {
        type: "string"
      },
      isRequired: {
        type: "boolean"
      }
    },
    supports: {
      inserter: !1
    },
    edit: o.edit,
    save: function save() {
      return null;
    }
  };
}, function (t, e, n) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.edit = void 0;
  var o = n(1),
      r = n(10),
      i = n(67);

  e.edit = function (t) {
    var e = t.clientId,
        n = t.attributes,
        s = n.removedBlock,
        a = n.warningText,
        u = n.isRequired;
    return o.createElement("div", {
      key: "warning-div",
      className: ["yoast-warning-block", u ? "required" : "recommended"].join(" ")
    }, [o.createElement("p", {
      key: "warning-paragraph",
      className: "yoast-warning-block-message",
      dangerouslySetInnerHTML: {
        __html: a
      }
    }), o.createElement("div", {
      key: "buttons-div"
    }, [o.createElement("button", {
      key: "button-yes",
      onClick: function onClick() {
        i.removeBlock(e);
      }
    }, r.__("Yes", "yoast-schema-blocks")), o.createElement("button", {
      key: "button-no",
      onClick: function onClick() {
        i.restoreBlock(e, s);
      }
    }, r.__("No, please undo this", "yoast-schema-blocks"))])]);
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.processBlock = e.processSchema = void 0;
  var r = n(2),
      i = o(n(242)),
      s = o(n(34)),
      a = o(n(140)),
      u = o(n(48)),
      c = o(n(44)),
      l = n(566),
      f = o(n(567)),
      p = 0;

  function d(t, e) {
    if (t.isA("array-open")) return function (t) {
      var e = [];

      for (t.shift(); !t[0].isA("array-close");) {
        e.push(d(t[0], t));
      }

      return t.shift(), e;
    }(e);
    if (t.isA("object-open")) return function (t) {
      var e = {};

      for (t.shift(); !t[0].isA("object-close");) {
        if (!t[0].isA("key")) throw "Template parse error: Object must contain key-value pairs";
        e[t.shift().value] = d(t[0], t);
      }

      return t.shift(), e;
    }(e);
    if (t.isA("empty-object")) return e.shift(), {};
    if (t.isA("value")) return e.shift().value;
    throw "Invalid token found.";
  }

  function h(t, e, n, o) {
    var i = {
      name: t.value
    },
        s = n.create(t.value, function (t) {
      do {
        p++;
      } while (t.includes(p.toString()));

      return p;
    }(o), i);

    if (s) {
      for (; e[0] && e[0].isA("key");) {
        var a = r.camelCase(e.shift().value);
        s.options[a] = d(e[0], e);
      }

      return s;
    }

    c["default"].error("Could not instantiate instuctionClass " + n.name);
  }

  function _(t, e, n) {
    for (var o = f["default"](t), r = l.generateUniqueSeparator(t, e.separatorCharacters), i = new e(r);;) {
      var s = o.shift();
      if (!s) break;
      if (s.isA("constant")) i.template += s.value;else if (s.isA("definition")) {
        var a = h(s, o, n, r);
        i.instructions[a.id] = a, a.renderable() && (i.template += r + a.id + r);
      }
    }

    return e.parser(i);
  }

  e.processSchema = function (t) {
    return _(t, a["default"], u["default"]);
  }, e.processBlock = function (t) {
    return _(t, i["default"], s["default"]);
  }, e["default"] = _;
}, function (t, e, n) {
  "use strict";

  function o(t, e) {
    for (var n = "", o = 0; o < t; o++) {
      n += e[Math.floor(Math.random() * e.length)];
    }

    return n;
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.generateUniqueSeparator = e.generateSeparator = void 0, e.generateSeparator = o, e.generateUniqueSeparator = function (t, e) {
    for (var n = 2;;) {
      var r = o(Math.floor(n), e);
      if (-1 === t.indexOf(r)) return r;
      n += .2;
    }
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = new (o(n(568))["default"])();
  r.rule("default", /(.*?)({{[a-zA-Z-]+|$)/, function (t, e) {
    e[1] && e[1].length > 0 && t.accept("constant", e[1]), e[2] && "{{" === e[2].slice(0, 2) && (t.state("definition"), t.accept("definition", e[2].slice(2)), t.data("nested", []));
  }, "open-instruction"), r.rule("definition", /\s*}}/, function (t) {
    t.untag("undefined"), t.state("default"), t.ignore();
  }, "close-instruction"), r.rule("definition", /\s*([a-zA-Z][a-zA-Z0-9-_]*)=/, function (t, e) {
    t.accept("key", e[1]), t.state("definition-value");
  }, "options-object-key"), r.rule("definition-value", /\s*\{\s*}/, function (t) {
    t.accept("empty-object"), t.tagged("array") || t.tagged("object") || t.state("definition");
  }, "empty-object"), r.rule("definition-value", /\s*\{/, function (t) {
    t.tag("object"), t.accept("object-open"), t.state("definition-key");
    var e = t.data("nested");
    e.push("object"), t.data("nested", e), t.tagged("array") && t.untag("array");
  }, "open-object"), r.rule("definition-value #object", /\s*}/, function (t) {
    var e = t.data("nested");
    if (e.pop(), t.data("nested", e), t.accept("object-close"), 0 === e.length) return t.untag("object"), void t.state("definition");
    "array" === e[e.length - 1] && (t.untag("object"), t.tag("array"));
  }, "close-object"), r.rule("definition-key #object", /\s*"([^"\\]+|\\.)*":/, function (t, e) {
    t.accept("key", e[1]), t.state("definition-value");
  }, "object-key"), r.rule("definition-value #object", /\s*,/, function (t) {
    t.state("definition-key"), t.ignore();
  }, "object-comma"), r.rule("definition-value", /\s*\[/, function (t) {
    t.tag("array"), t.accept("array-open");
    var e = t.data("nested");
    e.push("array"), t.data("nested", e), t.tagged("object") && t.untag("object");
  }, "open-array"), r.rule("definition-value #array", /\s*]/, function (t) {
    var e = t.data("nested");
    if (e.pop(), t.data("nested", e), t.accept("array-close"), 0 === e.length) return t.untag("array"), void t.state("definition");
    "object" === e[e.length - 1] && (t.untag("array"), t.tag("object"));
  }, "close-array"), r.rule("definition-value #array", /\s*,/, function (t) {
    t.ignore();
  }, "array-comma"), r.rule("definition-value", /\s*(\d+)/, function (t, e) {
    t.accept("value", parseInt(e[1], 10)), t.tagged("array") || t.tagged("object") || t.state("definition");
  }, "number-value"), r.rule("definition-value", /\s*(true|false)/, function (t, e) {
    t.accept("value", "true" === e[1]), t.tagged("array") || t.tagged("object") || t.state("definition");
  }, "boolean-value"), r.rule("definition-value", /\s*"([^"\\]+|\\.)*"/, function (t, e) {
    t.accept("value", e[1]), t.tagged("array") || t.tagged("object") || t.state("definition");
  }, "string-value"), e["default"] = function (t) {
    return r.reset(), r.input(t), r.tokens();
  };
}, function (t, e, n) {
  t.exports = function t(e, n, o) {
    function r(s, a) {
      if (!n[s]) {
        if (!e[s]) {
          if (i) return i(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }

        var c = n[s] = {
          exports: {}
        };
        e[s][0].call(c.exports, function (t) {
          return r(e[s][1][t] || t);
        }, c, c.exports, t, e, n, o);
      }

      return n[s].exports;
    }

    for (var i = !1, s = 0; s < o.length; s++) {
      r(o[s]);
    }

    return r;
  }({
    1: [function (t, e, n) {
      "use strict";

      function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }

      function r(t, e) {
        return !e || "object" !== o(e) && "function" != typeof e ? function (t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t;
        }(t) : e;
      }

      function i(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (i = function i(t) {
          if (null === t || !function (t) {
            return -1 !== Function.toString.call(t).indexOf("[native code]");
          }(t)) return t;
          if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");

          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }

          function n() {
            return s(t, arguments, c(this).constructor);
          }

          return n.prototype = Object.create(t.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), u(n, t);
        })(t);
      }

      function s(t, e, n) {
        return (s = a() ? Reflect.construct : function (t, e, n) {
          var o = [null];
          o.push.apply(o, e);
          var r = new (Function.bind.apply(t, o))();
          return n && u(r, n.prototype), r;
        }).apply(null, arguments);
      }

      function a() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;

        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      }

      function u(t, e) {
        return (u = Object.setPrototypeOf || function (t, e) {
          return t.__proto__ = e, t;
        })(t, e);
      }

      function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
      }

      function l(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }

      function f(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function p(t, e, n) {
        return e && f(t.prototype, e), n && f(t, n), t;
      }

      var d = function d(t, e) {
        var n = t.length,
            o = e - 20;
        o < 0 && (o = 0);
        var r = e + 20;
        r > n && (r = n);

        var i = function i(t) {
          return t.charCodeAt(0).toString(16).toUpperCase();
        },
            s = function s(t, e, n) {
          return t.substr(e, n).replace(/\\/g, "\\\\").replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (t) {
            return "\\x0" + i(t);
          }).replace(/[\x10-\x1F\x80-\xFF]/g, function (t) {
            return "\\x" + i(t);
          }).replace(/[\u0100-\u0FFF]/g, function (t) {
            return "\\u0" + i(t);
          }).replace(/[\u1000-\uFFFF]/g, function (t) {
            return "\\u" + i(t);
          });
        };

        return {
          prologTrunc: o > 0,
          prologText: s(t, o, e - o),
          tokenText: s(t, e, 1),
          epilogText: s(t, e + 1, r - (e + 1)),
          epilogTrunc: r < n
        };
      },
          h = function () {
        function t(e, n, o) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
              i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
              s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
          l(this, t), this.type = e, this.value = n, this.text = o, this.pos = r, this.line = i, this.column = s;
        }

        return p(t, [{
          key: "toString",
          value: function value() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function (t, e) {
              return e;
            };
            return "".concat(t("type", this.type), " ") + "(value: ".concat(t("value", JSON.stringify(this.value)), ", ") + "text: ".concat(t("text", JSON.stringify(this.text)), ", ") + "pos: ".concat(t("pos", this.pos), ", ") + "line: ".concat(t("line", this.line), ", ") + "column: ".concat(t("column", this.column), ")");
          }
        }, {
          key: "isA",
          value: function value(t, e) {
            return t === this.type && (2 !== arguments.length || e === this.value);
          }
        }]), t;
      }(),
          _ = function (t) {
        !function (t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && u(t, e);
        }(n, i(Error));

        var e = function (t) {
          var e = a();
          return function () {
            var n,
                o = c(t);

            if (e) {
              var i = c(this).constructor;
              n = Reflect.construct(o, arguments, i);
            } else n = o.apply(this, arguments);

            return r(this, n);
          };
        }(n);

        function n(t, o, r, i, s) {
          var a;
          return l(this, n), (a = e.call(this, t)).name = "ParsingError", a.message = t, a.pos = o, a.line = r, a.column = i, a.input = s, a;
        }

        return p(n, [{
          key: "toString",
          value: function value() {
            for (var t = d(this.input, this.pos), e = "line ".concat(this.line, " (column ").concat(this.column, "): "), n = "", o = 0; o < e.length + t.prologText.length; o++) {
              n += " ";
            }

            return "Parsing Error: " + this.message + "\n" + e + t.prologText + t.tokenText + t.epilogText + "\n" + n + "^";
          }
        }]), n;
      }(),
          y = function () {
        function t(e) {
          l(this, t), this._tokenizr = e, this._data = {}, this._repeat = !1, this._reject = !1, this._ignore = !1, this._match = null;
        }

        return p(t, [{
          key: "data",
          value: function value(t, e) {
            var n = this._data[t];
            return 2 === arguments.length && (this._data[t] = e), n;
          }
        }, {
          key: "info",
          value: function value() {
            return {
              line: this._tokenizr._line,
              column: this._tokenizr._column,
              pos: this._tokenizr._pos,
              len: this._match[0].length
            };
          }
        }, {
          key: "push",
          value: function value() {
            var t;
            return (t = this._tokenizr).push.apply(t, arguments), this;
          }
        }, {
          key: "pop",
          value: function value() {
            var t;
            return (t = this._tokenizr).pop.apply(t, arguments);
          }
        }, {
          key: "state",
          value: function value() {
            var t, e;
            return arguments.length > 0 ? ((e = this._tokenizr).state.apply(e, arguments), this) : (t = this._tokenizr).state.apply(t, arguments);
          }
        }, {
          key: "tag",
          value: function value() {
            var t;
            return (t = this._tokenizr).tag.apply(t, arguments), this;
          }
        }, {
          key: "tagged",
          value: function value() {
            var t;
            return (t = this._tokenizr).tagged.apply(t, arguments);
          }
        }, {
          key: "untag",
          value: function value() {
            var t;
            return (t = this._tokenizr).untag.apply(t, arguments), this;
          }
        }, {
          key: "repeat",
          value: function value() {
            return this._tokenizr._log("    REPEAT"), this._repeat = !0, this;
          }
        }, {
          key: "reject",
          value: function value() {
            return this._tokenizr._log("    REJECT"), this._reject = !0, this;
          }
        }, {
          key: "ignore",
          value: function value() {
            return this._tokenizr._log("    IGNORE"), this._ignore = !0, this;
          }
        }, {
          key: "accept",
          value: function value(t, e) {
            return arguments.length < 2 && (e = this._match[0]), this._tokenizr._log("    ACCEPT: type: ".concat(t, ", value: ") + "".concat(JSON.stringify(e), " (").concat(o(e), '), text: "').concat(this._match[0], '"')), this._tokenizr._pending.push(new h(t, e, this._match[0], this._tokenizr._pos, this._tokenizr._line, this._tokenizr._column)), this;
          }
        }, {
          key: "stop",
          value: function value() {
            return this._tokenizr._stopped = !0, this;
          }
        }]), t;
      }(),
          v = function () {
        function t() {
          l(this, t), this._before = null, this._after = null, this._finish = null, this._rules = [], this._debug = !1, this.reset();
        }

        return p(t, [{
          key: "reset",
          value: function value() {
            return this._input = "", this._len = 0, this._eof = !1, this._pos = 0, this._line = 1, this._column = 1, this._state = ["default"], this._tag = {}, this._transaction = [], this._pending = [], this._stopped = !1, this._ctx = new y(this), this;
          }
        }, {
          key: "error",
          value: function value(t) {
            return new _(t, this._pos, this._line, this._column, this._input);
          }
        }, {
          key: "debug",
          value: function value(t) {
            return this._debug = t, this;
          }
        }, {
          key: "_log",
          value: function value(t) {
            this._debug && console.log("tokenizr: ".concat(t));
          }
        }, {
          key: "input",
          value: function value(t) {
            if ("string" != typeof t) throw new Error('parameter "input" not a String');
            return this.reset(), this._input = t, this._len = t.length, this;
          }
        }, {
          key: "push",
          value: function value(t) {
            if (1 !== arguments.length) throw new Error("invalid number of arguments");
            if ("string" != typeof t) throw new Error('parameter "state" not a String');
            return this._log("    STATE (PUSH): " + "old: <".concat(this._state[this._state.length - 1], ">, ") + "new: <".concat(t, ">")), this._state.push(t), this;
          }
        }, {
          key: "pop",
          value: function value() {
            if (0 !== arguments.length) throw new Error("invalid number of arguments");
            if (this._state.length < 2) throw new Error("no more custom states to pop");
            return this._log("    STATE (POP): " + "old: <".concat(this._state[this._state.length - 1], ">, ") + "new: <".concat(this._state[this._state.length - 2], ">")), this._state.pop();
          }
        }, {
          key: "state",
          value: function value(t) {
            if (1 === arguments.length) {
              if ("string" != typeof t) throw new Error('parameter "state" not a String');
              return this._log("    STATE (SET): " + "old: <".concat(this._state[this._state.length - 1], ">, ") + "new: <".concat(t, ">")), this._state[this._state.length - 1] = t, this;
            }

            if (0 === arguments.length) return this._state[this._state.length - 1];
            throw new Error("invalid number of arguments");
          }
        }, {
          key: "tag",
          value: function value(t) {
            if (1 !== arguments.length) throw new Error("invalid number of arguments");
            if ("string" != typeof t) throw new Error('parameter "tag" not a String');
            return this._log("    TAG (ADD): ".concat(t)), this._tag[t] = !0, this;
          }
        }, {
          key: "tagged",
          value: function value(t) {
            if (1 !== arguments.length) throw new Error("invalid number of arguments");
            if ("string" != typeof t) throw new Error('parameter "tag" not a String');
            return !0 === this._tag[t];
          }
        }, {
          key: "untag",
          value: function value(t) {
            if (1 !== arguments.length) throw new Error("invalid number of arguments");
            if ("string" != typeof t) throw new Error('parameter "tag" not a String');
            return this._log("    TAG (DEL): ".concat(t)), delete this._tag[t], this;
          }
        }, {
          key: "before",
          value: function value(t) {
            return this._before = t, this;
          }
        }, {
          key: "after",
          value: function value(t) {
            return this._after = t, this;
          }
        }, {
          key: "finish",
          value: function value(t) {
            return this._finish = t, this;
          }
        }, {
          key: "rule",
          value: function value(t, e, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "unknown";

            if (2 === arguments.length && "function" == typeof e) {
              var i = [t, e];
              e = i[0], n = i[1], t = "*";
            } else if (3 === arguments.length && "function" == typeof e) {
              var s = [t, e, n];
              e = s[0], n = s[1], r = s[2], t = "*";
            }

            if ("string" != typeof t) throw new Error('parameter "state" not a String');
            if (!("object" === o(e) && e instanceof RegExp)) throw new Error('parameter "pattern" not a RegExp');
            if ("function" != typeof n) throw new Error('parameter "action" not a Function');
            if ("string" != typeof r) throw new Error('parameter "name" not a String');
            t = t.split(/\s*,\s*/g).map(function (t) {
              var e = t.split(/\s+/g),
                  n = e.filter(function (t) {
                return null === t.match(/^#/);
              }),
                  o = e.filter(function (t) {
                return null !== t.match(/^#/);
              }).map(function (t) {
                return t.replace(/^#/, "");
              });
              if (1 !== n.length) throw new Error("exactly one state required");
              return {
                state: n[0],
                tags: o
              };
            });
            var a = "g";

            try {
              "boolean" == typeof new RegExp("", "y").sticky && (a = "y");
            } catch (t) {}

            return "boolean" == typeof e.multiline && e.multiline && (a += "m"), "boolean" == typeof e.dotAll && e.dotAll && (a += "s"), "boolean" == typeof e.ignoreCase && e.ignoreCase && (a += "i"), "boolean" == typeof e.unicode && e.unicode && (a += "u"), e = new RegExp(e.source, a), this._log("rule: configure rule (state: ".concat(t, ", pattern: ").concat(e.source, ")")), this._rules.push({
              state: t,
              pattern: e,
              action: n,
              name: r
            }), this;
          }
        }, {
          key: "_progress",
          value: function value(t, e) {
            for (var n = this._line, o = this._column, r = this._input, i = t; i < e; i++) {
              var s = r.charAt(i);
              "\r" === s ? this._column = 1 : "\n" === s ? (this._line++, this._column = 1) : "\t" === s ? this._column += 8 - this._column % 8 : this._column++;
            }

            this._log("    PROGRESS: characters: ".concat(e - t, ", ") + "from: <line ".concat(n, ", column ").concat(o, ">, ") + "to: <line ".concat(this._line, ", column ").concat(this._column, ">"));
          }
        }, {
          key: "_tokenize",
          value: function value() {
            var t = this,
                e = function e() {
              t._eof || (null !== t._finish && t._finish.call(t._ctx, t._ctx), t._eof = !0, t._pending.push(new h("EOF", "", "", t._pos, t._line, t._column)));
            };

            if (!(this._stopped || this._pos >= this._len)) {
              for (var n = !0; n;) {
                if (n = !1, this._debug) {
                  var o = d(this._input, this._pos),
                      r = Object.keys(this._tag).map(function (t) {
                    return "#".concat(t);
                  }).join(" ");

                  this._log("INPUT: state: <".concat(this._state[this._state.length - 1], ">, tags: <").concat(r, ">, text: ") + (o.prologTrunc ? "..." : '"') + "".concat(o.prologText, "<").concat(o.tokenText, ">").concat(o.epilogText) + (o.epilogTrunc ? "..." : '"') + ", at: <line ".concat(this._line, ", column ").concat(this._column, ">"));
                }

                for (var i = 0; i < this._rules.length; i++) {
                  if (this._debug) {
                    var s = this._rules[i].state.map(function (t) {
                      var e = t.state;
                      return t.tags.length > 0 && (e += " " + t.tags.map(function (t) {
                        return "#".concat(t);
                      }).join(" ")), e;
                    }).join(", ");

                    this._log("  RULE: state(s): <".concat(s, ">, ") + "pattern: ".concat(this._rules[i].pattern.source));
                  }

                  var a = !1,
                      u = this._rules[i].state.map(function (t) {
                    return t.state;
                  }),
                      c = u.indexOf("*");

                  if (c < 0 && (c = u.indexOf(this._state[this._state.length - 1])), c >= 0) {
                    a = !0;
                    var l = this._rules[i].state[c].tags;
                    (l = l.filter(function (e) {
                      return !t._tag[e];
                    })).length > 0 && (a = !1);
                  }

                  if (a) {
                    this._rules[i].pattern.lastIndex = this._pos;

                    var f = this._rules[i].pattern.exec(this._input);

                    if (this._rules[i].pattern.lastIndex = this._pos, null !== (f = this._rules[i].pattern.exec(this._input)) && f.index === this._pos) {
                      if (this._debug && this._log("    MATCHED: " + JSON.stringify(f)), this._ctx._match = f, this._ctx._repeat = !1, this._ctx._reject = !1, this._ctx._ignore = !1, null !== this._before && this._before.call(this._ctx, this._ctx, f, this._rules[i]), this._rules[i].action.call(this._ctx, this._ctx, f), null !== this._after && this._after.call(this._ctx, this._ctx, f, this._rules[i]), this._ctx._reject) continue;

                      if (this._ctx._repeat) {
                        n = !0;
                        break;
                      }

                      if (this._ctx._ignore) {
                        if (this._progress(this._pos, this._rules[i].pattern.lastIndex), this._pos = this._rules[i].pattern.lastIndex, this._pos >= this._len) return void e();
                        n = !0;
                        break;
                      }

                      if (this._pending.length > 0) return this._progress(this._pos, this._rules[i].pattern.lastIndex), this._pos = this._rules[i].pattern.lastIndex, void (this._pos >= this._len && e());
                      throw new Error('action of pattern "' + this._rules[i].pattern.source + '" neither rejected nor accepted any token(s)');
                    }
                  }
                }
              }

              throw this.error("token not recognized");
            }

            e();
          }
        }, {
          key: "token",
          value: function value() {
            if (0 === this._pending.length && this._tokenize(), this._pending.length > 0) {
              var t = this._pending.shift();

              return this._transaction.length > 0 && this._transaction[0].push(t), this._log("TOKEN: ".concat(t.toString())), t;
            }

            return null;
          }
        }, {
          key: "tokens",
          value: function value() {
            for (var t, e = []; null !== (t = this.token());) {
              e.push(t);
            }

            return e;
          }
        }, {
          key: "peek",
          value: function value(t) {
            void 0 === t && (t = 0);

            for (var e = 0; e < this._pending.length + t; e++) {
              this._tokenize();
            }

            if (t >= this._pending.length) throw new Error("not enough tokens available for peek operation");
            return this._log("PEEK: ".concat(this._pending[t].toString())), this._pending[t];
          }
        }, {
          key: "skip",
          value: function value(t) {
            void 0 === t && (t = 1);

            for (var e = 0; e < this._pending.length + t; e++) {
              this._tokenize();
            }

            if (t > this._pending.length) throw new Error("not enough tokens available for skip operation");

            for (; t-- > 0;) {
              this.token();
            }

            return this;
          }
        }, {
          key: "consume",
          value: function value(t, e) {
            for (var n = this, r = 0; r < this._pending.length + 1; r++) {
              this._tokenize();
            }

            if (0 === this._pending.length) throw new Error("not enough tokens available for consume operation");
            var i = this.token();

            this._log("CONSUME: ".concat(i.toString()));

            var s = function s() {
              throw new _("expected: <type: ".concat(t, ", value: ").concat(JSON.stringify(e), " (").concat(o(e), ")>, ") + "found: <type: ".concat(i.type, ", value: ").concat(JSON.stringify(i.value), " (").concat(o(i.value), ")>"), i.pos, i.line, i.column, n._input);
            };

            return 2 !== arguments.length || i.isA(t, e) ? i.isA(t) || s() : s(JSON.stringify(e), o(e)), i;
          }
        }, {
          key: "begin",
          value: function value() {
            return this._log("BEGIN: level ".concat(this._transaction.length)), this._transaction.unshift([]), this;
          }
        }, {
          key: "depth",
          value: function value() {
            if (0 === this._transaction.length) throw new Error("cannot determine depth -- no active transaction");
            return this._transaction[0].length;
          }
        }, {
          key: "commit",
          value: function value() {
            if (0 === this._transaction.length) throw new Error("cannot commit transaction -- no active transaction");

            var t = this._transaction.shift();

            return this._transaction.length > 0 && (this._transaction[0] = this._transaction[0].concat(t)), this._log("COMMIT: level ".concat(this._transaction.length)), this;
          }
        }, {
          key: "rollback",
          value: function value() {
            if (0 === this._transaction.length) throw new Error("cannot rollback transaction -- no active transaction");

            var t = this._transaction.shift();

            return this._pending = t.concat(this._pending), this._log("ROLLBACK: level ".concat(this._transaction.length)), this;
          }
        }, {
          key: "alternatives",
          value: function value() {
            for (var t = null, e = [], n = arguments.length, o = new Array(n), r = 0; r < n; r++) {
              o[r] = arguments[r];
            }

            for (var i = 0; i < o.length; i++) {
              try {
                this.begin(), t = o[i].call(this), this.commit();
                break;
              } catch (t) {
                this._log("EXCEPTION: ".concat(t.toString())), e.push({
                  ex: t,
                  depth: this.depth()
                }), this.rollback();
                continue;
              }
            }

            if (null === t && e.length > 0) throw (e = e.sort(function (t, e) {
              return t.depth - e.depth;
            }))[0].ex;
            return t;
          }
        }]), t;
      }();

      v.Token = h, v.ParsingError = _, v.ActionContext = y, e.exports = v;
    }, {}]
  }, {}, [1])(1);
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(257),
      i = n(140),
      s = o(n(44));

  e["default"] = function () {
    r.addFilter("blocks.registerBlockType", "wordpress-seo/schema-blocks/schema-attribute", function (t, e) {
      return Object.keys(i.schemaDefinitions).includes(e) ? (s["default"].debug("Adding schema to: ", e), t.attributes || (t.attributes = {}), t.attributes["yoast-schema"] = {
        type: "object"
      }, t) : t;
    });
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__spreadArray || function (t, e) {
    for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) {
      t[r] = e[n];
    }

    return t;
  },
      r = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.validateBlocks = void 0;

  var i,
      s = n(2),
      a = n(33),
      u = n(140),
      c = r(n(571)),
      l = n(80),
      f = n(32),
      p = r(n(573)),
      d = r(n(44)),
      h = n(258),
      _ = n(574),
      y = r(n(256)),
      v = !1;

  function m(t) {
    var e = [];
    return t.forEach(function (t) {
      var n = l.getBlockDefinition(t.name);
      n ? e.push(n.validate(t)) : (d["default"].warning("Unable to validate block of type [" + t.name + "] " + t.clientId), e.push(new f.BlockValidationResult(t.clientId, t.name, f.BlockValidation.Unknown, f.BlockPresence.Unknown)), t.innerBlocks && t.innerBlocks.length > 0 && e.push.apply(e, m(t.innerBlocks)));
    }), e;
  }

  e.validateBlocks = m, e["default"] = function () {
    a.subscribe(s.debounce(function () {
      if (!v) {
        var t = a.select("core/block-editor").getBlocks();

        if (t !== i) {
          !function (t) {
            for (var e = 0, n = t; e < n.length; e++) {
              var o = n[e],
                  r = u.schemaDefinitions[o.name];

              if (r) {
                var i = Object.values(r.instructions).find(function (t) {
                  return t instanceof y["default"];
                }).options,
                    s = i.requiredFor,
                    a = i.recommendedFor,
                    c = i.name;
                d["default"].debug(c + " is required for " + s), d["default"].debug(c + " is recommended for " + a);
              }
            }
          }(t), v = !0;

          var e = m(t),
              n = _.missingBlocks(t),
              r = o(o([], e), n);

          p["default"](r), c["default"](t, i), function t(e, n, o, r) {
            void 0 === o && (o = []), void 0 === r && (r = !1), d["default"].info("Generating schema!");

            for (var i = function i(_i) {
              var c = e[_i],
                  l = o[_i];
              if (c === l) return "continue";
              var f = n.find(function (t) {
                return t.clientId === c.clientId;
              });
              if (f && !h.isResultValidForSchema(f.result)) return function (t) {
                a.dispatch("core/block-editor").updateBlockAttributes(t.clientId, {
                  "yoast-schema": null
                });
              }(c), "continue";
              var p = u.schemaDefinitions[c.name];
              if (function (t, e) {
                return void 0 !== t && (!(!e || !t.separateInGraph()) || !e && !t.onlyNested());
              }(p, r)) return function (t, e) {
                var n = e.render(t);
                d["default"].debug("Generated schema for block: ", t, n), s.isEqual(n, t.attributes["yoast-schema"]) || a.dispatch("core/block-editor").updateBlockAttributes(t.clientId, {
                  "yoast-schema": n
                });
              }(c, p), Array.isArray(c.innerBlocks) && t(c.innerBlocks, n, l ? l.innerBlocks : [], !0), "continue";
              Array.isArray(c.innerBlocks) && t(c.innerBlocks, n, l ? l.innerBlocks : [], r);
            }, c = 0; c < e.length; c++) {
              i(c);
            }
          }(t, r, i), i = t, v = !1;
        }
      }
    }, 250, {
      trailing: !0
    }));
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r,
      i = n(33),
      s = n(108),
      a = n(10),
      u = n(80),
      c = o(n(252)),
      l = o(n(136)),
      f = n(137),
      p = n(67),
      d = n(572);

  function h(t, e, n, o) {
    t.forEach(function (t) {
      var u = e.innerBlocks.findIndex(function (e) {
        return e.clientId === t.clientId;
      }),
          c = "";
      n && (c = n[t.name]);

      var l = function (t, e, n) {
        e || (e = function (t, e) {
          switch (e) {
            case r.BLOCK_REQUIRED:
              /* translators: %1$s: the block name that is removed, %2$s: the anchor to a page about required blocks, %3$s the closing anchor tag. */
              return a.sprintf(a.__("You've just removed the ‘%1$s’ block, but this is a %2$srequired block for Schema output%3$s. Without this block no Schema will be generated. Are you sure you want to do this?", "yoast-schema-blocks"), t, '<a href="' + window.yoastSchemaBlocks.requiredLink + '" target="_blank">', "</a>");

            case r.BLOCK_RECOMMENDED:
              /* translators: %1$s: the block name that is removed, %2$s: the anchor to a page about recommended blocks, %3$s the closing anchor tag. */
              return a.sprintf(a.__("You've just removed the ‘%1$s’ block, but this is a %2$srecommended block for Schema output%3$s. Are you sure you want to do this?", "yoast-schema-blocks"), t, '<a href="' + window.yoastSchemaBlocks.recommendedLink + '" target="_blank">', "</a>");
          }
        }(p.getBlockType(t.name).title, n));
        var o = {
          removedBlock: t,
          isRequired: n === r.BLOCK_REQUIRED,
          warningText: e
        };
        return s.createBlock("yoast/warning-block", o);
      }(t, c, o);

      i.dispatch("core/block-editor").insertBlock(l, u, e.clientId);
    });
  }

  function _(t) {
    var e = {};
    return t.forEach(function (t) {
      e[t.name] = t.warning || "";
    }), e;
  }

  !function (t) {
    t[t.BLOCK_REQUIRED = 0] = "BLOCK_REQUIRED", t[t.BLOCK_RECOMMENDED = 1] = "BLOCK_RECOMMENDED";
  }(r || (r = {})), e["default"] = function (t, e) {
    void 0 === e && (e = []);
    var n = f.mapBlocksRecursively(t, function (t) {
      return t.clientId;
    });
    d.removeObsoleteWarnings(f.getAllBlocks(t)), l["default"](e, function (t) {
      if (t.innerBlocks && 0 !== t.innerBlocks.length) {
        var e = t.innerBlocks.filter(function (t) {
          return !n.includes(t.clientId);
        });

        if (0 !== e.length) {
          var o,
              i,
              s = (o = t.name, (i = u.getBlockDefinition(o)) ? Object.values(i.instructions).find(function (t) {
            return t instanceof c["default"];
          }) : null);
          s && (function (t, e, n) {
            var o = n.options.requiredBlocks || [];
            h(e.filter(function (t) {
              return o.some(function (e) {
                return t.name === e.name;
              });
            }), t, _(o), r.BLOCK_REQUIRED);
          }(t, e, s), function (t, e, n) {
            var o = n.options.recommendedBlocks || [];
            h(e.filter(function (t) {
              return o.some(function (e) {
                return t.name === e.name;
              });
            }), t, _(o), r.BLOCK_RECOMMENDED);
          }(t, e, s));
        }
      }
    });
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.removeObsoleteWarnings = void 0;
  var r = o(n(136)),
      i = n(67);

  e.removeObsoleteWarnings = function (t) {
    var e = t.filter(function (t) {
      return "yoast/warning-block" === t.name;
    });
    0 !== e.length && r["default"](e, function (e) {
      var n = e.attributes;
      (function (t, e) {
        return t.filter(function (t) {
          return t.name === e;
        }).length < 1;
      })(t, n.removedBlock.name) || i.removeBlock(e.clientId);
    });
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(33),
      i = o(n(44)),
      s = n(81);

  e["default"] = function (t) {
    if (!(t.length < 1)) {
      var e = r.dispatch(s.YOAST_SCHEMA_BLOCKS_STORE_NAME);
      e ? (e.resetBlockValidation(), t.forEach(function (t) {
        i["default"].debug("storing validation: ", t), e.addBlockValidation(t);
      })) : i["default"].debug("No Store! Cannot store validations.");
    }
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__spreadArray || function (t, e) {
    for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) {
      t[r] = e[n];
    }

    return t;
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.missingBlocks = void 0;
  var r = n(33),
      i = n(32),
      s = n(137),
      a = n(81);

  e.missingBlocks = function (t) {
    var e = s.mapBlocksRecursively(t, function (t) {
      return t.name;
    });
    return o(o([], function (t) {
      return r.select(a.YOAST_SCHEMA_BLOCKS_STORE_NAME).getRequiredBlockNames().filter(function (e) {
        return !t.includes(e);
      }).map(function (t) {
        return i.BlockValidationResult.MissingBlock(t, i.BlockPresence.Required);
      });
    }(e)), function (t) {
      return r.select(a.YOAST_SCHEMA_BLOCKS_STORE_NAME).getRecommendedBlockNames().filter(function (e) {
        return !t.includes(e);
      }).map(function (t) {
        return i.BlockValidationResult.MissingBlock(t, i.BlockPresence.Recommended);
      });
    }(e));
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__assign || function () {
    return (o = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) {
        for (var r in e = arguments[n]) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  },
      r = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(79),
      s = n(1),
      a = n(257),
      u = r(n(576));

  e["default"] = function (t, e) {
    a.addFilter("blocks.registerBlockType", "yoast/wordpress-seo/injectSidebar", function (n, r) {
      if (!t.includes(r)) return n;
      var a = n.edit;
      return n.edit = function (t) {
        return s.createElement(s.Fragment, null, s.createElement(a, o({}, t)), s.createElement(i.InspectorControls, null, u["default"](t, e)));
      }, n;
    });
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = n(1),
      i = n(80),
      s = n(67),
      a = n(110),
      u = o(n(44)),
      c = n(45);

  e["default"] = function (t, e) {
    var n = [];
    e && (n = a.getParentIdOfType(t.clientId, e));
    var o = [];
    return n.length > 0 && n.forEach(function (e) {
      var n = s.getBlockByClientId(e),
          r = i.getBlockDefinition(n.name);

      if (r) {
        u["default"].debug(t.clientId + " inherited sidebar from " + n.name + " definition");
        var c = a.createBlockEditProps(n);
        o.push.apply(o, r.sidebarElements(c));
      }
    }), r.createElement(c.PanelBody, null, o);
  };
}, function (t, e, n) {
  "use strict";

  var o = this && this.__assign || function () {
    return (o = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) {
        for (var r in e = arguments[n]) {
          Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }
      }

      return t;
    }).apply(this, arguments);
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.PureBlockSuggestionsPresenter = void 0;
  var r = n(2),
      i = n(81),
      s = n(108),
      a = n(33),
      u = n(1),
      c = n(137),
      l = n(258);

  function f(t) {
    var e = t.suggestedBlockTitle,
        n = t.suggestedBlockName;
    return u.createElement("li", {
      className: "yoast-block-suggestion",
      key: e
    }, e, u.createElement("button", {
      className: "yoast-block-suggestion-button",
      onClick: function onClick() {
        var t = s.createBlock(n);
        c.insertBlock(t);
      }
    }, " Add "));
  }

  function p(t) {
    var e = t.blockTitle,
        n = t.isValid,
        o = u.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "-2 3 18 16",
      stroke: "currentColor",
      height: "12",
      width: "22"
    }, u.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 2.5,
      d: "M5 13l4 4L19 7"
    })),
        r = u.createElement("span", {
      className: "yoast-block-suggestion-checkmark"
    }, o);
    return u.createElement("li", {
      className: "yoast-block-suggestion yoast-block-suggestion--added",
      key: "BlockSuggestionAdded" + e
    }, e, n ? r : null);
  }

  function d(t) {
    var e = t.heading,
        n = t.suggestions,
        o = t.blockNames;
    return !n || n.length < 1 || !o || o.length < 1 ? null : u.createElement("div", null, u.createElement("div", {
      className: "yoast-block-sidebar-title"
    }, e), u.createElement("ul", {
      className: "yoast-block-suggestions"
    }, o.map(function (t, e) {
      var o = n.find(function (e) {
        return e.name === t;
      }),
          r = o && l.isValidResult(o.result),
          i = o && l.isMissingResult(o.result),
          s = o && l.isEmptyResult(o.result);
      return r || s ? u.createElement(p, {
        key: e,
        isValid: r,
        blockTitle: o.title
      }) : i ? u.createElement(f, {
        key: e,
        suggestedBlockTitle: o.title,
        suggestedBlockName: o.name
      }) : void 0;
    }, this)));
  }

  e.PureBlockSuggestionsPresenter = d, e["default"] = a.withSelect(function (t, e) {
    return {
      suggestions: t(i.YOAST_SCHEMA_BLOCKS_STORE_NAME).getValidationsForBlockNames(e.blockNames).map(function (e) {
        var n = t("core/blocks").getBlockType(e.name);
        return o({
          title: r.get(n, "title", "")
        }, e);
      })
    };
  })(d);
}, function (t, e, n) {
  "use strict";

  var o = this && this.__spreadArray || function (t, e) {
    for (var n = 0, o = e.length, r = t.length; n < o; n++, r++) {
      t[r] = e[n];
    }

    return t;
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.sanitizeParentName = e.createAnalysisMessages = void 0;
  var r = n(10),
      i = n(32);

  function s(t) {
    return t.some(function (t) {
      return t.result >= i.BlockValidation.Invalid;
    }) ? {
      text: r.sprintf(
      /* translators: %s expands to the schema block name. */
      r.__("Not all required information has been provided! %s schema will not be generated for your page.", "yoast-schema-blocks"), "JobPosting"),
      color: "red"
    } : {
      text: r.__("Good job! All required information has been provided.", "yoast-schema-blocks"),
      color: "green"
    };
  }

  e.createAnalysisMessages = function (t) {
    return t ? o(o(o([], function (t) {
      return t.filter(function (t) {
        return t.message && t.blockPresence === i.BlockPresence.Required;
      }).map(function (t) {
        return {
          color: "red",
          text: t.message
        };
      });
    }(t)), function (t) {
      return t.filter(function (t) {
        return t.message && t.blockPresence === i.BlockPresence.Recommended;
      }).map(function (t) {
        return {
          color: "orange",
          text: t.message
        };
      });
    }(t)), [s(t)]) : [];
  }, e.sanitizeParentName = function (t) {
    return t.startsWith("Yoast ") ? t.substr(6).toLowerCase() : t.toLowerCase();
  };
}]);