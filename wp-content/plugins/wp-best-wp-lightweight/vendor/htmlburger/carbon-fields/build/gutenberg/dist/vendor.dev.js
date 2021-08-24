"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = "./packages/vendor/index.js");
  /******/
})(
/************************************************************************/

/******/
{
  /***/
  "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
    \***************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeHelpersArrayWithHolesJs(module, exports) {
    eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
    \*********************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeHelpersIterableToArrayLimitJs(module, exports) {
    eval("function _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
  /*!****************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
    \****************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeHelpersNonIterableRestJs(module, exports) {
    eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\nmodule.exports = _nonIterableRest;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");
    /***/
  },

  /***/
  "./node_modules/@babel/runtime/helpers/slicedToArray.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
    \**************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesBabelRuntimeHelpersSlicedToArrayJs(module, exports, __webpack_require__) {
    eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/index.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/index.js ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _middlewares_nonce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/nonce */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js\");\n/* harmony import */ var _middlewares_root_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/root-url */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js\");\n/* harmony import */ var _middlewares_preloading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/preloading */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js\");\n/* harmony import */ var _middlewares_fetch_all_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/fetch-all-middleware */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js\");\n/* harmony import */ var _middlewares_namespace_endpoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/namespace-endpoint */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js\");\n/* harmony import */ var _middlewares_http_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/http-v1 */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js\");\n/* harmony import */ var _middlewares_user_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./middlewares/user-locale */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js\");\n\n\n\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\n/**\n * Default set of header values which should be sent with every request unless\n * explicitly provided through apiFetch options.\n *\n * @type {Object}\n */\n\nvar DEFAULT_HEADERS = {\n  // The backend uses the Accept header as a condition for considering an\n  // incoming request as a REST request.\n  //\n  // See: https://core.trac.wordpress.org/ticket/44534\n  Accept: 'application/json, */*;q=0.1'\n};\n/**\n * Default set of fetch option values which should be sent with every request\n * unless explicitly provided through apiFetch options.\n *\n * @type {Object}\n */\n\nvar DEFAULT_OPTIONS = {\n  credentials: 'include'\n};\nvar middlewares = [];\n\nfunction registerMiddleware(middleware) {\n  middlewares.push(middleware);\n}\n\nfunction apiFetch(options) {\n  var raw = function raw(nextOptions) {\n    var url = nextOptions.url,\n        path = nextOptions.path,\n        data = nextOptions.data,\n        _nextOptions$parse = nextOptions.parse,\n        parse = _nextOptions$parse === void 0 ? true : _nextOptions$parse,\n        remainingOptions = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(nextOptions, [\"url\", \"path\", \"data\", \"parse\"]);\n\n    var body = nextOptions.body,\n        headers = nextOptions.headers; // Merge explicitly-provided headers with default values.\n\n    headers = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, DEFAULT_HEADERS, headers); // The `data` property is a shorthand for sending a JSON body.\n\n    if (data) {\n      body = JSON.stringify(data);\n      headers['Content-Type'] = 'application/json';\n    }\n\n    var responsePromise = window.fetch(url || path, Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, DEFAULT_OPTIONS, remainingOptions, {\n      body: body,\n      headers: headers\n    }));\n\n    var checkStatus = function checkStatus(response) {\n      if (response.status >= 200 && response.status < 300) {\n        return response;\n      }\n\n      throw response;\n    };\n\n    var parseResponse = function parseResponse(response) {\n      if (parse) {\n        if (response.status === 204) {\n          return null;\n        }\n\n        return response.json ? response.json() : Promise.reject(response);\n      }\n\n      return response;\n    };\n\n    return responsePromise.then(checkStatus).then(parseResponse).catch(function (response) {\n      if (!parse) {\n        throw response;\n      }\n\n      var invalidJsonError = {\n        code: 'invalid_json',\n        message: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('The response is not a valid JSON response.')\n      };\n\n      if (!response || !response.json) {\n        throw invalidJsonError;\n      }\n\n      return response.json().catch(function () {\n        throw invalidJsonError;\n      }).then(function (error) {\n        var unknownError = {\n          code: 'unknown_error',\n          message: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__[\"__\"])('An unknown error occurred.')\n        };\n        throw error || unknownError;\n      });\n    });\n  };\n\n  var steps = [raw, _middlewares_fetch_all_middleware__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _middlewares_http_v1__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _middlewares_namespace_endpoint__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _middlewares_user_locale__WEBPACK_IMPORTED_MODULE_9__[\"default\"]].concat(middlewares).reverse();\n\n  var runMiddleware = function runMiddleware(index) {\n    return function (nextOptions) {\n      var nextMiddleware = steps[index];\n      var next = runMiddleware(index + 1);\n      return nextMiddleware(nextOptions, next);\n    };\n  };\n\n  return runMiddleware(0)(options);\n}\n\napiFetch.use = registerMiddleware;\napiFetch.createNonceMiddleware = _middlewares_nonce__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\napiFetch.createPreloadingMiddleware = _middlewares_preloading__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\napiFetch.createRootURLMiddleware = _middlewares_root_url__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\napiFetch.fetchAllMiddleware = _middlewares_fetch_all_middleware__WEBPACK_IMPORTED_MODULE_6__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiFetch);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/index.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js":
  /*!********************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleMiddlewaresFetchAllMiddlewareJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ \"./node_modules/@wordpress/api-fetch/node_modules/@wordpress/url/build-module/index.js\");\n\n\n\n\n/**\n * WordPress dependencies\n */\n // Apply query arguments to both URL and Path, whichever is present.\n\nvar modifyQuery = function modifyQuery(_ref, queryArgs) {\n  var path = _ref.path,\n      url = _ref.url,\n      options = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"path\", \"url\"]);\n\n  return Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, options, {\n    url: url && Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__[\"addQueryArgs\"])(url, queryArgs),\n    path: path && Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__[\"addQueryArgs\"])(path, queryArgs)\n  });\n}; // Duplicates parsing functionality from apiFetch.\n\n\nvar parseResponse = function parseResponse(response) {\n  return response.json ? response.json() : Promise.reject(response);\n};\n\nvar parseLinkHeader = function parseLinkHeader(linkHeader) {\n  if (!linkHeader) {\n    return {};\n  }\n\n  var match = linkHeader.match(/<([^>]+)>; rel=\"next\"/);\n  return match ? {\n    next: match[1]\n  } : {};\n};\n\nvar getNextPageUrl = function getNextPageUrl(response) {\n  var _parseLinkHeader = parseLinkHeader(response.headers.get('link')),\n      next = _parseLinkHeader.next;\n\n  return next;\n};\n\nvar requestContainsUnboundedQuery = function requestContainsUnboundedQuery(options) {\n  var pathIsUnbounded = options.path && options.path.indexOf('per_page=-1') !== -1;\n  var urlIsUnbounded = options.url && options.url.indexOf('per_page=-1') !== -1;\n  return pathIsUnbounded || urlIsUnbounded;\n}; // The REST API enforces an upper limit on the per_page option. To handle large\n// collections, apiFetch consumers can pass `per_page=-1`; this middleware will\n// then recursively assemble a full response array from all available pages.\n\n\nvar fetchAllMiddleware =\n/*#__PURE__*/\nfunction () {\n  var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n  /*#__PURE__*/\n  regeneratorRuntime.mark(function _callee(options, next) {\n    var response, results, nextPage, mergedResults, nextResponse, nextResults;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(options.parse === false)) {\n              _context.next = 2;\n              break;\n            }\n\n            return _context.abrupt(\"return\", next(options));\n\n          case 2:\n            if (requestContainsUnboundedQuery(options)) {\n              _context.next = 4;\n              break;\n            }\n\n            return _context.abrupt(\"return\", next(options));\n\n          case 4:\n            _context.next = 6;\n            return next(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, modifyQuery(options, {\n              per_page: 100\n            }), {\n              // Ensure headers are returned for page 1.\n              parse: false\n            }));\n\n          case 6:\n            response = _context.sent;\n            _context.next = 9;\n            return parseResponse(response);\n\n          case 9:\n            results = _context.sent;\n\n            if (Array.isArray(results)) {\n              _context.next = 12;\n              break;\n            }\n\n            return _context.abrupt(\"return\", results);\n\n          case 12:\n            nextPage = getNextPageUrl(response);\n\n            if (nextPage) {\n              _context.next = 15;\n              break;\n            }\n\n            return _context.abrupt(\"return\", results);\n\n          case 15:\n            // Iteratively fetch all remaining pages until no \"next\" header is found.\n            mergedResults = [].concat(results);\n\n          case 16:\n            if (!nextPage) {\n              _context.next = 27;\n              break;\n            }\n\n            _context.next = 19;\n            return next(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, options, {\n              // Ensure the URL for the next page is used instead of any provided path.\n              path: undefined,\n              url: nextPage,\n              // Ensure we still get headers so we can identify the next page.\n              parse: false\n            }));\n\n          case 19:\n            nextResponse = _context.sent;\n            _context.next = 22;\n            return parseResponse(nextResponse);\n\n          case 22:\n            nextResults = _context.sent;\n            mergedResults = mergedResults.concat(nextResults);\n            nextPage = getNextPageUrl(nextResponse);\n            _context.next = 16;\n            break;\n\n          case 27:\n            return _context.abrupt(\"return\", mergedResults);\n\n          case 28:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this);\n  }));\n\n  return function fetchAllMiddleware(_x, _x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchAllMiddleware);\n//# sourceMappingURL=fetch-all-middleware.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js":
  /*!*******************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleMiddlewaresHttpV1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n\n\n/**\n * Set of HTTP methods which are eligible to be overridden.\n *\n * @type {Set}\n */\nvar OVERRIDE_METHODS = new Set(['PATCH', 'PUT', 'DELETE']);\n/**\n * Default request method.\n *\n * \"A request has an associated method (a method). Unless stated otherwise it\n * is `GET`.\"\n *\n * @see  https://fetch.spec.whatwg.org/#requests\n *\n * @type {string}\n */\n\nvar DEFAULT_METHOD = 'GET';\n/**\n * API Fetch middleware which overrides the request method for HTTP v1\n * compatibility leveraging the REST API X-HTTP-Method-Override header.\n *\n * @param {Object}   options Fetch options.\n * @param {Function} next    [description]\n *\n * @return {*} The evaluated result of the remaining middleware chain.\n */\n\nfunction httpV1Middleware(options, next) {\n  var _options = options,\n      _options$method = _options.method,\n      method = _options$method === void 0 ? DEFAULT_METHOD : _options$method;\n\n  if (OVERRIDE_METHODS.has(method.toUpperCase())) {\n    options = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, options, {\n      headers: Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, options.headers, {\n        'X-HTTP-Method-Override': method,\n        'Content-Type': 'application/json'\n      }),\n      method: 'POST'\n    });\n  }\n\n  return next(options, next);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (httpV1Middleware);\n//# sourceMappingURL=http-v1.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js":
  /*!******************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleMiddlewaresNamespaceEndpointJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n\n\nvar namespaceAndEndpointMiddleware = function namespaceAndEndpointMiddleware(options, next) {\n  var path = options.path;\n  var namespaceTrimmed, endpointTrimmed;\n\n  if (typeof options.namespace === 'string' && typeof options.endpoint === 'string') {\n    namespaceTrimmed = options.namespace.replace(/^\\/|\\/$/g, '');\n    endpointTrimmed = options.endpoint.replace(/^\\//, '');\n\n    if (endpointTrimmed) {\n      path = namespaceTrimmed + '/' + endpointTrimmed;\n    } else {\n      path = namespaceTrimmed;\n    }\n  }\n\n  delete options.namespace;\n  delete options.endpoint;\n  return next(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, options, {\n    path: path\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (namespaceAndEndpointMiddleware);\n//# sourceMappingURL=namespace-endpoint.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js":
  /*!*****************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleMiddlewaresNonceJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * External dependencies\n */\n\n\nvar createNonceMiddleware = function createNonceMiddleware(nonce) {\n  var usedNonce = nonce;\n  /**\n   * This is not ideal but it's fine for now.\n   *\n   * Configure heartbeat to refresh the wp-api nonce, keeping the editor\n   * authorization intact.\n   */\n\n  Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__[\"addAction\"])('heartbeat.tick', 'core/api-fetch/create-nonce-middleware', function (response) {\n    if (response['rest-nonce']) {\n      usedNonce = response['rest-nonce'];\n    }\n  });\n  return function (options, next) {\n    var headers = options.headers || {}; // If an 'X-WP-Nonce' header (or any case-insensitive variation\n    // thereof) was specified, no need to add a nonce header.\n\n    var addNonceHeader = true;\n\n    for (var headerName in headers) {\n      if (headers.hasOwnProperty(headerName)) {\n        if (headerName.toLowerCase() === 'x-wp-nonce') {\n          addNonceHeader = false;\n          break;\n        }\n      }\n    }\n\n    if (addNonceHeader) {\n      // Do not mutate the original headers object, if any.\n      headers = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, headers, {\n        'X-WP-Nonce': usedNonce\n      });\n    }\n\n    return next(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, options, {\n      headers: headers\n    }));\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createNonceMiddleware);\n//# sourceMappingURL=nonce.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleMiddlewaresPreloadingJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\nvar createPreloadingMiddleware = function createPreloadingMiddleware(preloadedData) {\n  return function (options, next) {\n    function getStablePath(path) {\n      var splitted = path.split('?');\n      var query = splitted[1];\n      var base = splitted[0];\n\n      if (!query) {\n        return base;\n      } // 'b=1&c=2&a=5'\n\n\n      return base + '?' + query // [ 'b=1', 'c=2', 'a=5' ]\n      .split('&') // [ [ 'b, '1' ], [ 'c', '2' ], [ 'a', '5' ] ]\n      .map(function (entry) {\n        return entry.split('=');\n      }) // [ [ 'a', '5' ], [ 'b, '1' ], [ 'c', '2' ] ]\n      .sort(function (a, b) {\n        return a[0].localeCompare(b[0]);\n      }) // [ 'a=5', 'b=1', 'c=2' ]\n      .map(function (pair) {\n        return pair.join('=');\n      }) // 'a=5&b=1&c=2'\n      .join('&');\n    }\n\n    var _options$parse = options.parse,\n        parse = _options$parse === void 0 ? true : _options$parse;\n\n    if (typeof options.path === 'string') {\n      var method = options.method || 'GET';\n      var path = getStablePath(options.path);\n\n      if (parse && 'GET' === method && preloadedData[path]) {\n        return Promise.resolve(preloadedData[path].body);\n      } else if ('OPTIONS' === method && preloadedData[method][path]) {\n        return Promise.resolve(preloadedData[method][path]);\n      }\n    }\n\n    return next(options);\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPreloadingMiddleware);\n//# sourceMappingURL=preloading.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js":
  /*!********************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleMiddlewaresRootUrlJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js\");\n/* harmony import */ var _namespace_endpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./namespace-endpoint */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js\");\n\n\n/**\n * Internal dependencies\n */\n\n\nvar createRootURLMiddleware = function createRootURLMiddleware(rootURL) {\n  return function (options, next) {\n    return Object(_namespace_endpoint__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(options, function (optionsWithPath) {\n      var url = optionsWithPath.url;\n      var path = optionsWithPath.path;\n      var apiRoot;\n\n      if (typeof path === 'string') {\n        apiRoot = rootURL;\n\n        if (-1 !== rootURL.indexOf('?')) {\n          path = path.replace('?', '&');\n        }\n\n        path = path.replace(/^\\//, ''); // API root may already include query parameter prefix if site is\n        // configured to use plain permalinks.\n\n        if ('string' === typeof apiRoot && -1 !== apiRoot.indexOf('?')) {\n          path = path.replace('?', '&');\n        }\n\n        url = apiRoot + path;\n      }\n\n      return next(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, optionsWithPath, {\n        url: url\n      }));\n    });\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRootURLMiddleware);\n//# sourceMappingURL=root-url.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchBuildModuleMiddlewaresUserLocaleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ \"./node_modules/@wordpress/api-fetch/node_modules/@wordpress/url/build-module/index.js\");\n/**\n * WordPress dependencies\n */\n\n\nfunction userLocaleMiddleware(options, next) {\n  if (typeof options.url === 'string' && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"hasQueryArg\"])(options.url, '_locale')) {\n    options.url = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"addQueryArgs\"])(options.url, {\n      _locale: 'user'\n    });\n  }\n\n  if (typeof options.path === 'string' && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"hasQueryArg\"])(options.path, '_locale')) {\n    options.path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"addQueryArgs\"])(options.path, {\n      _locale: 'user'\n    });\n  }\n\n  return next(options, next);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userLocaleMiddleware);\n//# sourceMappingURL=user-locale.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchNode_modulesBabelRuntimeHelpersEsmAsyncToGeneratorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchNode_modulesBabelRuntimeHelpersEsmDefinePropertyJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _defineProperty; });\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/defineProperty.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchNode_modulesBabelRuntimeHelpersEsmObjectSpreadJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectSpread; });\n/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\nfunction _objectSpread(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n    var ownKeys = Object.keys(source);\n\n    if (typeof Object.getOwnPropertySymbols === 'function') {\n      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n      }));\n    }\n\n    ownKeys.forEach(function (key) {\n      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]);\n    });\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectSpread.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchNode_modulesBabelRuntimeHelpersEsmObjectWithoutPropertiesJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutProperties; });\n/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesWordpressApiFetchNode_modulesBabelRuntimeHelpersEsmObjectWithoutPropertiesLooseJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _objectWithoutPropertiesLoose; });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js?");
    /***/
  },

  /***/
  "./node_modules/@wordpress/api-fetch/node_modules/@wordpress/url/build-module/index.js":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/@wordpress/api-fetch/node_modules/@wordpress/url/build-module/index.js ***!
    \*********************************************************************************************/

  /*! exports provided: isURL, getProtocol, isValidProtocol, getAuthority, isValidAuthority, getPath, isValidPath, getQueryString, isValidQueryString, getFragment, isValidFragment, addQueryArgs, getQueryArg, hasQueryArg, removeQueryArgs, prependHTTP, safeDecodeURI, filterURLForDisplay */

  /***/
  function node_modulesWordpressApiFetchNode_modulesWordpressUrlBuildModuleIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isURL\", function() { return isURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProtocol\", function() { return getProtocol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidProtocol\", function() { return isValidProtocol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAuthority\", function() { return getAuthority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidAuthority\", function() { return isValidAuthority; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPath\", function() { return getPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidPath\", function() { return isValidPath; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryString\", function() { return getQueryString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidQueryString\", function() { return isValidQueryString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFragment\", function() { return getFragment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidFragment\", function() { return isValidFragment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addQueryArgs\", function() { return addQueryArgs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryArg\", function() { return getQueryArg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasQueryArg\", function() { return hasQueryArg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeQueryArgs\", function() { return removeQueryArgs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prependHTTP\", function() { return prependHTTP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeDecodeURI\", function() { return safeDecodeURI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterURLForDisplay\", function() { return filterURLForDisplay; });\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ \"./node_modules/qs/lib/index.js\");\n/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\nvar URL_REGEXP = /^(?:https?:)?\\/\\/\\S+$/i;\nvar EMAIL_REGEXP = /^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\\.[a-z]{2,63}$/i;\nvar USABLE_HREF_REGEXP = /^(?:[a-z]+:|#|\\?|\\.|\\/)/i;\n/**\n * Determines whether the given string looks like a URL.\n *\n * @param {string} url The string to scrutinise.\n *\n * @return {boolean} Whether or not it looks like a URL.\n */\n\nfunction isURL(url) {\n  return URL_REGEXP.test(url);\n}\n/**\n * Returns the protocol part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @return {?string} The protocol part of the URL.\n */\n\nfunction getProtocol(url) {\n  var matches = /^([^\\s:]+:)/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n/**\n * Tests if a url protocol is valid.\n *\n * @param {string} protocol The url protocol.\n *\n * @return {boolean} True if the argument is a valid protocol (e.g. http:, tel:).\n */\n\nfunction isValidProtocol(protocol) {\n  if (!protocol) {\n    return false;\n  }\n\n  return /^[a-z\\-.\\+]+[0-9]*:$/i.test(protocol);\n}\n/**\n * Returns the authority part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @return {?string} The authority part of the URL.\n */\n\nfunction getAuthority(url) {\n  var matches = /^[^\\/\\s:]+:(?:\\/\\/)?\\/?([^\\/\\s#?]+)[\\/#?]{0,1}\\S*$/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n/**\n * Checks for invalid characters within the provided authority.\n *\n * @param {string} authority A string containing the URL authority.\n *\n * @return {boolean} True if the argument contains a valid authority.\n */\n\nfunction isValidAuthority(authority) {\n  if (!authority) {\n    return false;\n  }\n\n  return /^[^\\s#?]+$/.test(authority);\n}\n/**\n * Returns the path part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @return {?string} The path part of the URL.\n */\n\nfunction getPath(url) {\n  var matches = /^[^\\/\\s:]+:(?:\\/\\/)?[^\\/\\s#?]+[\\/]([^\\s#?]+)[#?]{0,1}\\S*$/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n/**\n * Checks for invalid characters within the provided path.\n *\n * @param {string} path The URL path.\n *\n * @return {boolean} True if the argument contains a valid path\n */\n\nfunction isValidPath(path) {\n  if (!path) {\n    return false;\n  }\n\n  return /^[^\\s#?]+$/.test(path);\n}\n/**\n * Returns the query string part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @return {?string} The query string part of the URL.\n */\n\nfunction getQueryString(url) {\n  var matches = /^\\S+?\\?([^\\s#]+)/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n/**\n * Checks for invalid characters within the provided query string.\n *\n * @param {string} queryString The query string.\n *\n * @return {boolean} True if the argument contains a valid query string.\n */\n\nfunction isValidQueryString(queryString) {\n  if (!queryString) {\n    return false;\n  }\n\n  return /^[^\\s#?\\/]+$/.test(queryString);\n}\n/**\n * Returns the fragment part of the URL.\n *\n * @param {string} url The full URL\n *\n * @return {?string} The fragment part of the URL.\n */\n\nfunction getFragment(url) {\n  var matches = /^\\S+?(#[^\\s\\?]*)/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n/**\n * Checks for invalid characters within the provided fragment.\n *\n * @param {string} fragment The url fragment.\n *\n * @return {boolean} True if the argument contains a valid fragment.\n */\n\nfunction isValidFragment(fragment) {\n  if (!fragment) {\n    return false;\n  }\n\n  return /^#[^\\s#?\\/]*$/.test(fragment);\n}\n/**\n * Appends arguments as querystring to the provided URL. If the URL already\n * includes query arguments, the arguments are merged with (and take precedent\n * over) the existing set.\n *\n * @param {?string} url  URL to which arguments should be appended. If omitted,\n *                       only the resulting querystring is returned.\n * @param {Object}  args Query arguments to apply to URL.\n *\n * @return {string} URL with arguments applied.\n */\n\nfunction addQueryArgs() {\n  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  var args = arguments.length > 1 ? arguments[1] : undefined;\n  var baseUrl = url; // Determine whether URL already had query arguments.\n\n  var queryStringIndex = url.indexOf('?');\n\n  if (queryStringIndex !== -1) {\n    // Merge into existing query arguments.\n    args = Object.assign(Object(qs__WEBPACK_IMPORTED_MODULE_0__[\"parse\"])(url.substr(queryStringIndex + 1)), args); // Change working base URL to omit previous query arguments.\n\n    baseUrl = baseUrl.substr(0, queryStringIndex);\n  }\n\n  return baseUrl + '?' + Object(qs__WEBPACK_IMPORTED_MODULE_0__[\"stringify\"])(args);\n}\n/**\n * Returns a single query argument of the url\n *\n * @param {string} url URL\n * @param {string} arg Query arg name\n *\n * @return {Array|string} Query arg value.\n */\n\nfunction getQueryArg(url, arg) {\n  var queryStringIndex = url.indexOf('?');\n  var query = queryStringIndex !== -1 ? Object(qs__WEBPACK_IMPORTED_MODULE_0__[\"parse\"])(url.substr(queryStringIndex + 1)) : {};\n  return query[arg];\n}\n/**\n * Determines whether the URL contains a given query arg.\n *\n * @param {string} url URL\n * @param {string} arg Query arg name\n *\n * @return {boolean} Whether or not the URL contains the query aeg.\n */\n\nfunction hasQueryArg(url, arg) {\n  return getQueryArg(url, arg) !== undefined;\n}\n/**\n * Removes arguments from the query string of the url\n *\n * @param {string} url  URL\n * @param {...string} args Query Args\n *\n * @return {string} Updated URL\n */\n\nfunction removeQueryArgs(url) {\n  var queryStringIndex = url.indexOf('?');\n  var query = queryStringIndex !== -1 ? Object(qs__WEBPACK_IMPORTED_MODULE_0__[\"parse\"])(url.substr(queryStringIndex + 1)) : {};\n  var baseUrl = queryStringIndex !== -1 ? url.substr(0, queryStringIndex) : url;\n\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  args.forEach(function (arg) {\n    return delete query[arg];\n  });\n  return baseUrl + '?' + Object(qs__WEBPACK_IMPORTED_MODULE_0__[\"stringify\"])(query);\n}\n/**\n * Prepends \"http://\" to a url, if it looks like something that is meant to be a TLD.\n *\n * @param  {string} url The URL to test\n *\n * @return {string}     The updated URL\n */\n\nfunction prependHTTP(url) {\n  if (!USABLE_HREF_REGEXP.test(url) && !EMAIL_REGEXP.test(url)) {\n    return 'http://' + url;\n  }\n\n  return url;\n}\n/**\n * Safely decodes a URI with `decodeURI`. Returns the URI unmodified if\n * `decodeURI` throws an error.\n *\n * @param {string} uri URI to decode.\n *\n * @return {string} Decoded URI if possible.\n */\n\nfunction safeDecodeURI(uri) {\n  try {\n    return decodeURI(uri);\n  } catch (uriError) {\n    return uri;\n  }\n}\n/**\n * Returns a URL for display.\n *\n * @param {string} url Original URL.\n *\n * @return {string} Displayed URL.\n */\n\nfunction filterURLForDisplay(url) {\n  // Remove protocol and www prefixes.\n  var filteredURL = url.replace(/^(?:https?:)\\/\\/(?:www\\.)?/, ''); // Ends with / and only has that single slash, strip it.\n\n  if (filteredURL.match(/^[^\\/]+\\/$/)) {\n    return filteredURL.replace('/', '');\n  }\n\n  return filteredURL;\n}\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/node_modules/@wordpress/url/build-module/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-basics/index.js":
  /*!**********************************************!*\
    !*** ./node_modules/callbag-basics/index.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagBasicsIndexJs(module, exports, __webpack_require__) {
    eval("module.exports = {\n  forEach: __webpack_require__(/*! callbag-for-each */ \"./node_modules/callbag-for-each/readme.js\"),\n  fromObs: __webpack_require__(/*! callbag-from-obs */ \"./node_modules/callbag-from-obs/readme.js\"),\n  fromIter: __webpack_require__(/*! callbag-from-iter */ \"./node_modules/callbag-from-iter/index.js\"),\n  fromEvent: __webpack_require__(/*! callbag-from-event */ \"./node_modules/callbag-from-event/index.js\"),\n  fromPromise: __webpack_require__(/*! callbag-from-promise */ \"./node_modules/callbag-from-promise/index.js\"),\n  interval: __webpack_require__(/*! callbag-interval */ \"./node_modules/callbag-interval/index.js\"),\n  map: __webpack_require__(/*! callbag-map */ \"./node_modules/callbag-map/readme.js\"),\n  scan: __webpack_require__(/*! callbag-scan */ \"./node_modules/callbag-scan/readme.js\"),\n  flatten: __webpack_require__(/*! callbag-flatten */ \"./node_modules/callbag-flatten/index.js\"),\n  take: __webpack_require__(/*! callbag-take */ \"./node_modules/callbag-take/index.js\"),\n  skip: __webpack_require__(/*! callbag-skip */ \"./node_modules/callbag-skip/index.js\"),\n  filter: __webpack_require__(/*! callbag-filter */ \"./node_modules/callbag-filter/readme.js\"),\n  merge: __webpack_require__(/*! callbag-merge */ \"./node_modules/callbag-merge/readme.js\"),\n  concat: __webpack_require__(/*! callbag-concat */ \"./node_modules/callbag-concat/readme.js\"),\n  combine: __webpack_require__(/*! callbag-combine */ \"./node_modules/callbag-combine/readme.js\"),\n  share: __webpack_require__(/*! callbag-share */ \"./node_modules/callbag-share/index.js\"),\n  pipe: __webpack_require__(/*! callbag-pipe */ \"./node_modules/callbag-pipe/readme.js\")\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/callbag-basics/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-combine/readme.js":
  /*!************************************************!*\
    !*** ./node_modules/callbag-combine/readme.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagCombineReadmeJs(module, exports) {
    eval("/**\n * callbag-combine\n * ---------------\n *\n * Callbag factory that combines the latest data points from multiple (2 or\n * more) callbag sources. It delivers those latest values as an array. Works\n * with both pullable and listenable sources.\n *\n * `npm install callbag-combine`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const observe = require('callbag-observe');\n *     const combine = require('callbag-combine');\n *\n *     const source = combine(interval(100), interval(350));\n *\n *     observe(x => console.log(x))(source); // [2,0]\n *                                           // [3,0]\n *                                           // [4,0]\n *                                           // [5,0]\n *                                           // [6,0]\n *                                           // [6,1]\n *                                           // [7,1]\n *                                           // [8,1]\n *                                           // ...\n */\n\nconst EMPTY = {};\n\nconst combine = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(1, []);\n    sink(2);\n    return;\n  }\n  let Ns = n; // start counter\n  let Nd = n; // data counter\n  let Ne = n; // end counter\n  const vals = new Array(n);\n  const sourceTalkbacks = new Array(n);\n  const talkback = (t, d) => {\n    if (t !== 2) return;\n    for (let i = 0; i < n; i++) sourceTalkbacks[i](2);\n  };\n  sources.forEach((source, i) => {\n    vals[i] = EMPTY;\n    source(0, (t, d) => {\n      if (t === 0) {\n        sourceTalkbacks[i] = d;\n        if (--Ns === 0) sink(0, talkback);\n      } else if (t === 1) {\n        const _Nd = !Nd ? 0 : vals[i] === EMPTY ? --Nd : Nd;\n        vals[i] = d;\n        if (_Nd === 0) {\n          const arr = new Array(n);\n          for (let j = 0; j < n; ++j) arr[j] = vals[j];\n          sink(1, arr);\n        }\n      } else if (t === 2) {\n        if (--Ne === 0) sink(2);\n      } else {\n        sink(t, d);\n      }\n    });\n  });\n};\n\nmodule.exports = combine;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-combine/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-concat/readme.js":
  /*!***********************************************!*\
    !*** ./node_modules/callbag-concat/readme.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagConcatReadmeJs(module, exports) {
    eval("/**\n * callbag-concat\n * --------------\n *\n * Callbag factory that concatenates the data from multiple (2 or more)\n * callbag sources. It starts each source at a time: waits for the previous\n * source to end before starting the next source. Works with both pullable\n * and listenable sources.\n *\n * `npm install callbag-concat`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const concat = require('callbag-concat');\n *\n *     const source = concat(fromIter([10,20,30]), fromIter(['a','b']));\n *\n *     iterate(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // a\n *                                           // b\n */\n\nconst concat = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(2);\n    return;\n  }\n  let i = 0;\n  let sourceTalkback;\n  const talkback = (t, d) => {\n    if (t === 1 || t === 2) {\n      sourceTalkback(t, d);\n    }\n  };\n  (function next() {\n    if (i === n) {\n      sink(2);\n      return;\n    }\n    sources[i](0, (t, d) => {\n      if (t === 0) {\n        sourceTalkback = d;\n        if (i === 0) sink(0, talkback);\n        else sourceTalkback(1);\n      } else if (t === 1) {\n        sink(1, d);\n      } else if (t === 2) {\n        i++;\n        next();\n      }\n    });\n  })();\n};\n\nmodule.exports = concat;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-concat/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-drop-repeats/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/callbag-drop-repeats/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagDropRepeatsIndexJs(module, exports) {
    eval("const dropRepeats = pred => src => (start, sink) => {\n  const INIT = {};\n  let cache = INIT;\n  let ask;\n  const equals = pred || ((a, b) => a === b);\n  start === 0 && src(start, (t, d) => {\n    if (t === start) ask = d;\n    if (t === 1) return cache !== INIT && equals(cache, d) ? ask(t) : sink(t, cache = d);\n    sink(t, d);\n  });\n};\n\nmodule.exports = dropRepeats;\n\n//# sourceURL=webpack:///./node_modules/callbag-drop-repeats/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-filter/readme.js":
  /*!***********************************************!*\
    !*** ./node_modules/callbag-filter/readme.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagFilterReadmeJs(module, exports) {
    eval("/**\n * callbag-filter\n * --------------\n *\n * Callbag operator that conditionally lets data pass through. Works on either\n * pullable or listenable sources.\n *\n * `npm install callbag-filter`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const filter = require('callbag-filter');\n *\n *     const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 3\n *                                           // 5\n */\n\nconst filter = condition => source => (start, sink) => {\n  if (start !== 0) return;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (condition(d)) sink(t, d);\n      else talkback(1);\n    }\n    else sink(t, d);\n  });\n};\n\nmodule.exports = filter;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-filter/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-flatten/index.js":
  /*!***********************************************!*\
    !*** ./node_modules/callbag-flatten/index.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagFlattenIndexJs(module, exports) {
    eval("const flatten = source => (start, sink) => {\n  if (start !== 0) return;\n  const exists = x => typeof x !== 'undefined';\n  const absent = x => typeof x === 'undefined';\n  const noop = () => {};\n  let outerEnded = false;\n  let outerTalkback;\n  let innerTalkback;\n  function talkback(t) {\n    if (t === 1) (innerTalkback || outerTalkback || noop)(1);\n    if (t === 2) {\n      innerTalkback && innerTalkback(2);\n      outerTalkback && outerTalkback(2);\n    }\n  }\n  source(0, (T, D) => {\n    if (T === 0) {\n      outerTalkback = D;\n      sink(0, talkback);\n    } else if (T === 1) {\n      const innerSource = D;\n      if (innerTalkback) innerTalkback(2);\n      innerSource(0, (t, d) => {\n        if (t === 0) {\n          innerTalkback = d;\n          innerTalkback(1);\n        } else if (t === 1) sink(1, d);\n        else if (t === 2 && absent(d)) {\n          if (outerEnded) sink(2);\n          else {\n            innerTalkback = void 0;\n            outerTalkback(1);\n          }\n        }\n        else if (t === 2 && exists(d)) sink(2, d);\n      });\n    } else if (T === 2 && absent(D)) {\n      if (!innerTalkback) sink(2);\n      else outerEnded = true;\n    } else if (T === 2 && exists(D)) sink(2, D);\n  });\n};\n\nmodule.exports = flatten;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-flatten/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-for-each/readme.js":
  /*!*************************************************!*\
    !*** ./node_modules/callbag-for-each/readme.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagForEachReadmeJs(module, exports) {
    eval("/**\n * callbag-for-each\n * ----------------\n *\n * Callbag sink that consume both pullable and listenable sources. When called\n * on a pullable source, it will iterate through its data. When called on a\n * listenable source, it will observe its data.\n *\n * `npm install callbag-for-each`\n *\n * Examples\n * --------\n *\n * Consume a pullable source:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = fromIter([10,20,30,40])\n *\n *     forEach(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // 40\n *\n * Consume a listenable source:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = interval(1000);\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst forEach = operation => source => {\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) talkback = d;\n    if (t === 1) operation(d);\n    if (t === 1 || t === 0) talkback(1);\n  });\n};\n\nmodule.exports = forEach;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-for-each/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-from-event/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/callbag-from-event/index.js ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagFromEventIndexJs(module, exports) {
    eval("const fromEvent = (node, name) => (start, sink) => {\n  if (start !== 0) return;\n  const handler = ev => sink(1, ev);\n  sink(0, t => {\n    if (t === 2) node.removeEventListener(name, handler);\n  });\n  node.addEventListener(name, handler);\n};\n\nmodule.exports = fromEvent;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-event/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-from-iter/index.js":
  /*!*************************************************!*\
    !*** ./node_modules/callbag-from-iter/index.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagFromIterIndexJs(module, exports) {
    eval("const fromIter = iter => (start, sink) => {\n  if (start !== 0) return;\n  const iterator =\n    typeof Symbol !== 'undefined' && iter[Symbol.iterator]\n      ? iter[Symbol.iterator]()\n      : iter;\n  let inloop = false;\n  let got1 = false;\n  let res;\n  function loop() {\n    inloop = true;\n    while (got1) {\n      got1 = false;\n      res = iterator.next();\n      if (res.done) sink(2);\n      else sink(1, res.value);\n    }\n    inloop = false;\n  }\n  sink(0, t => {\n    if (t === 1) {\n      got1 = true;\n      if (!inloop && !(res && res.done)) loop();\n    }\n  });\n};\n\nmodule.exports = fromIter;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-iter/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-from-obs/readme.js":
  /*!*************************************************!*\
    !*** ./node_modules/callbag-from-obs/readme.js ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagFromObsReadmeJs(module, exports) {
    eval("/**\n * callbag-from-obs\n * --------------\n *\n * Convert an observable (or subscribable) to a callbag listenable source.\n *\n * `npm install callbag-from-obs`\n *\n * Example:\n *\n * Convert an RxJS Observable:\n *\n *     const Rx = require('rxjs');\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const source = fromObs(Rx.Observable.interval(1000).take(4));\n *\n *     observe(x => console.log(x)(source); // 0\n *                                          // 1\n *                                          // 2\n *                                          // 3\n *\n * Convert anything that has the `.subscribe` method:\n *\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const subscribable = {\n *       subscribe: (observer) => {\n *         let i = 0;\n *         setInterval(() => observer.next(i++), 1000);\n *       }\n *     };\n *\n *     const source = fromObs(subscribable);\n *\n *     observe(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst fromObs = observable => (start, sink) => {\n  if (start !== 0) return;\n  let dispose;\n  sink(0, t => {\n    if (t === 2 && dispose) {\n      if (dispose.unsubscribe) dispose.unsubscribe();\n      else dispose();\n    }\n  });\n  dispose = observable.subscribe({\n    next: x => sink(1, x),\n    error: e => sink(2, e),\n    complete: () => sink(2)\n  });\n};\n\nmodule.exports = fromObs;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-obs/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-from-promise/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/callbag-from-promise/index.js ***!
    \****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagFromPromiseIndexJs(module, exports) {
    eval("const fromPromise = promise => (start, sink) => {\n  if (start !== 0) return;\n  let ended = false;\n  const onfulfilled = val => {\n    if (ended) return;\n    sink(1, val);\n    sink(2);\n  };\n  const onrejected = err => {\n    if (ended) return;\n    sink(2, err);\n  };\n  promise.then(onfulfilled, onrejected);\n  sink(0, t => {\n    if (t === 2) ended = true;\n  });\n};\n\nmodule.exports = fromPromise;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-promise/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-interval/index.js":
  /*!************************************************!*\
    !*** ./node_modules/callbag-interval/index.js ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagIntervalIndexJs(module, exports) {
    eval("const interval = period => (start, sink) => {\n  if (start !== 0) return;\n  let i = 0;\n  const id = setInterval(() => {\n    sink(1, i++);\n  }, period);\n  sink(0, t => {\n    if (t === 2) clearInterval(id);\n  });\n};\n\nmodule.exports = interval;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-interval/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-map/readme.js":
  /*!********************************************!*\
    !*** ./node_modules/callbag-map/readme.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagMapReadmeJs(module, exports) {
    eval("/**\n * callbag-map\n * -----------\n *\n * Callbag operator that applies a transformation on data passing through it.\n * Works on either pullable or listenable sources.\n *\n * `npm install callbag-map`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const map = require('callbag-map');\n *\n *     const source = map(x => x * 0.1)(fromIter([10,20,30,40]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 2\n *                                           // 3\n *                                           // 4\n */\n\nconst map = f => source => (start, sink) => {\n  if (start !== 0) return;\n  source(0, (t, d) => {\n    sink(t, t === 1 ? f(d) : d)\n  });\n};\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-map/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-merge/readme.js":
  /*!**********************************************!*\
    !*** ./node_modules/callbag-merge/readme.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagMergeReadmeJs(module, exports) {
    eval("/**\n * callbag-merge\n * -------------\n *\n * Callbag factory that merges data from multiple callbag sources. Works well\n * with listenable sources, and while it may work for some pullable sources,\n * it is only designed for listenable sources.\n *\n * `npm install callbag-merge`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const merge = require('callbag-merge');\n *\n *     const source = merge(interval(100), interval(350));\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 0\n *                                           // 3\n *                                           // 4\n *                                           // 5\n *                                           // ...\n */\n\nfunction merge(...sources) {\n  return (start, sink) => {\n    if (start !== 0) return;\n    const n = sources.length;\n    const sourceTalkbacks = new Array(n);\n    let startCount = 0;\n    let endCount = 0;\n    const talkback = t => {\n      if (t === 0) return;\n      for (let i = 0; i < n; i++) sourceTalkbacks[i] && sourceTalkbacks[i](t);\n    };\n    for (let i = 0; i < n; i++) {\n      sources[i](0, (t, d) => {\n        if (t === 0) {\n          sourceTalkbacks[i] = d;\n          if (++startCount === 1) sink(0, talkback);\n        } else if (t === 2) {\n          sourceTalkbacks[i] = void 0;\n          if (++endCount === n) sink(2);\n        } else sink(t, d);\n      });\n    }\n  };\n}\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-merge/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-pipe/readme.js":
  /*!*********************************************!*\
    !*** ./node_modules/callbag-pipe/readme.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagPipeReadmeJs(module, exports) {
    eval("/**\n * callbag-pipe\n * ------------\n *\n * Utility function for plugging callbags together in chain. This utility\n * actually doesn't rely on Callbag specifics, and is basically the same as\n * Ramda's `pipe` or lodash's `flow`. Anyway, this exists just to play nicely\n * with the ecosystem, and to facilitate the import of the function.\n *\n * `npm install callbag-pipe`\n *\n * Example:\n *\n * Create a source with `pipe`, then pass it to a `forEach`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     const source = pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10)\n *     );\n *\n *     forEach(x => console.log(x))(source); // X2,Y0\n *                                           // X3,Y0\n *                                           // X4,Y0\n *                                           // X5,Y0\n *                                           // X6,Y0\n *                                           // X6,Y1\n *                                           // X7,Y1\n *                                           // X8,Y1\n *                                           // X9,Y1\n *                                           // X9,Y2\n *\n *\n * Or use `pipe` to go all the way from source to sink:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10),\n *       forEach(x => console.log(x))\n *     );\n *     // X2,Y0\n *     // X3,Y0\n *     // X4,Y0\n *     // X5,Y0\n *     // X6,Y0\n *     // X6,Y1\n *     // X7,Y1\n *     // X8,Y1\n *     // X9,Y1\n *     // X9,Y2\n *\n *\n * Nesting\n * -------\n *\n * To use pipe inside another pipe, you need to give the inner pipe an\n * argument, e.g. `s => pipe(s, ...`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       s => pipe(s,\n *         map(([x, y]) => `X${x},Y${y}`),\n *         take(10)\n *       ),\n *       forEach(x => console.log(x))\n *     );\n *\n *\n * This means you can use pipe to create a new operator:\n *\n *     const mapThenTake = (f, amount) =>\n *       s => pipe(s, map(f), take(amount));\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       mapThenTake(([x, y]) => `X${x},Y${y}`, 10),\n *       forEach(x => console.log(x))\n *     );\n *\n */\n\nfunction pipe(...cbs) {\n  let res = cbs[0];\n  for (let i = 1, n = cbs.length; i < n; i++) res = cbs[i](res);\n  return res;\n}\n\nmodule.exports = pipe;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-pipe/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-scan/readme.js":
  /*!*********************************************!*\
    !*** ./node_modules/callbag-scan/readme.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagScanReadmeJs(module, exports) {
    eval("/**\n * callbag-scan\n * ------------\n *\n * Callbag operator that combines consecutive values from the same source.\n * It's essentially like array `.reduce`, but delivers a new accumulated value\n * for each value from the callbag source. Works on either pullable or\n * listenable sources.\n *\n * `npm install callbag-scan`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const scan = require('callbag-scan');\n *\n *     const iterSource = fromIter([1,2,3,4,5]);\n *     const scanned = scan((prev, x) => prev + x, 0)(iterSource);\n *\n *     scanned(0, iterate(x => console.log(x))); // 1\n *                                               // 3\n *                                               // 6\n *                                               // 10\n *                                               // 15\n */\n\nfunction scan(reducer, seed) {\n  let hasAcc = arguments.length === 2;\n  return source => (start, sink) => {\n    if (start !== 0) return;\n    let acc = seed;\n    source(0, (t, d) => {\n      if (t === 1) {\n        acc = hasAcc ? reducer(acc, d) : ((hasAcc = true), d);\n        sink(1, acc);\n      } else sink(t, d);\n    });\n  };\n}\n\nmodule.exports = scan;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-scan/readme.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-share/index.js":
  /*!*********************************************!*\
    !*** ./node_modules/callbag-share/index.js ***!
    \*********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagShareIndexJs(module, exports) {
    eval("const share = source => {\n  let sinks = [];\n  let sourceTalkback;\n\n  return function shared(start, sink) {\n    if (start !== 0) return;\n    sinks.push(sink);\n\n    const talkback = (t, d) => {\n      if (t === 0) return;\n      if (t === 2) {\n        const i = sinks.indexOf(sink);\n        if (i > -1) sinks.splice(i, 1);\n        if (!sinks.length) sourceTalkback(2);\n      } else {\n        sourceTalkback(t, d);\n      }\n    };\n\n    if (sinks.length === 1) {\n      source(0, (t, d) => {\n        if (t === 0) {\n          sourceTalkback = d;\n          sink(0, talkback);\n        } else for (let s of sinks.slice(0)) s(t, d);\n        if (t === 2) sinks = [];\n      });\n      return\n    }\n\n    sink(0, talkback);\n  }\n}\n\nmodule.exports = share;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-share/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-skip/index.js":
  /*!********************************************!*\
    !*** ./node_modules/callbag-skip/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagSkipIndexJs(module, exports) {
    eval("const skip = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let skipped = 0;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (skipped < max) {\n        skipped++;\n        talkback(1);\n      } else sink(t, d);\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = skip;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-skip/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-start-with/index.js":
  /*!**************************************************!*\
    !*** ./node_modules/callbag-start-with/index.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesCallbagStartWithIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n\nconst startWith = (...xs) => inputSource => (start, outputSink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  let inputTalkback;\n  let trackPull = false;\n  let lastPull;\n\n  outputSink(0, (ot, od) => {\n    if (trackPull && ot === 1) {\n      lastPull = [1, od];\n    }\n\n    if (ot === 2) {\n      disposed = true;\n      xs.length = 0;\n    }\n\n    if (!inputTalkback) return;\n    inputTalkback(ot, od);\n  });\n\n  while (xs.length !== 0) {\n    if (xs.length === 1) {\n      trackPull = true;\n    }\n    outputSink(1, xs.shift());\n  }\n\n  if (disposed) return;\n\n  inputSource(0, (it, id) => {\n    if (it === 0) {\n      inputTalkback = id;\n      trackPull = false;\n\n      if (lastPull) {\n        inputTalkback(...lastPull);\n        lastPull = null;\n      }\n      return;\n    }\n    outputSink(it, id);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startWith);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-start-with/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-take/index.js":
  /*!********************************************!*\
    !*** ./node_modules/callbag-take/index.js ***!
    \********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagTakeIndexJs(module, exports) {
    eval("const take = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let taken = 0;\n  let sourceTalkback;\n  function talkback(t, d) {\n    if (taken < max) sourceTalkback(t, d);\n  }\n  source(0, (t, d) => {\n    if (t === 0) {\n      sourceTalkback = d;\n      sink(0, talkback);\n    } else if (t === 1) {\n      if (taken < max) {\n        taken++;\n        sink(t, d);\n        if (taken === max) {\n          sink(2);\n          sourceTalkback(2);\n        }\n      }\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = take;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-take/index.js?");
    /***/
  },

  /***/
  "./node_modules/callbag-to-obs/readme.js":
  /*!***********************************************!*\
    !*** ./node_modules/callbag-to-obs/readme.js ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function node_modulesCallbagToObsReadmeJs(module, exports, __webpack_require__) {
    eval("/**\n * callbag-to-obs\n * ---------------\n *\n * Convert a listenable callbag source to an observable (or subscribable).\n * The Observable is an object following the ECMAScript Observable proposal\n * https://github.com/tc39/proposal-observable and at a minimum has the method\n * \"subscribe(observer)\" attached to it.\n *\n * `npm install callbag-to-obs`\n *\n * Example:\n *\n *     const {pipe, interval, take, filter, map} = require('callbag-basics');\n *     const toObservable = require('callbag-to-obs');\n *\n *     const observable = pipe(\n *       interval(1000), // 0,1,2,3,4,5,6,7,...\n *       take(5), // 0,1,2,3,4\n *       filter(x => x !== 0), // 1,2,3,4\n *       map(x => x * 10), // 10,20,30,40\n *       toObservable\n *     );\n *\n *     observable.subscribe({\n *       next: x => console.log(x)\n *     });\n */\n\nconst $$observable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\").default;\n\nfunction normalize(observer) {\n  if (!observer.start) observer.start = () => { };\n  if (!observer.next) observer.next = () => { };\n  if (!observer.error) observer.error = () => { };\n  if (!observer.complete) observer.complete = () => { };\n}\n\nfunction toObservable(source) {\n  return {\n    subscribe: function subscribe(observer) {\n      normalize(observer);\n      let talkback;\n      const sub = {\n        unsubscribe: function unsubscribe() {\n          if (talkback) talkback(2);\n        },\n      };\n      observer.start(sub);\n      try {\n        source(0, (t, d) => {\n          if (t === 0) talkback = d;\n          if (t === 1) observer.next(d);\n          if (t === 2 && d) observer.error(d);\n          else if (t === 2) talkback = void 0, observer.complete(d);\n        });\n      } catch (err) {\n        observer.error(err);\n      }\n      return sub;\n    },\n\n    [$$observable]: function () { return this; },\n  };\n}\n\nmodule.exports = toObservable;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-to-obs/readme.js?");
    /***/
  },

  /***/
  "./node_modules/classnames/index.js":
  /*!******************************************!*\
    !*** ./node_modules/classnames/index.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesClassnamesIndexJs(module, exports, __webpack_require__) {
    eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");
    /***/
  },

  /***/
  "./node_modules/immer/dist/immer.module.js":
  /*!*************************************************!*\
    !*** ./node_modules/immer/dist/immer.module.js ***!
    \*************************************************/

  /*! exports provided: produce, applyPatches, nothing, setAutoFreeze, setUseProxies, original, default */

  /***/
  function node_modulesImmerDistImmerModuleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"produce\", function() { return produce; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyPatches\", function() { return applyPatches$1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nothing\", function() { return nothing; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAutoFreeze\", function() { return setAutoFreeze; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUseProxies\", function() { return setUseProxies; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"original\", function() { return original; });\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) {\n  return typeof obj;\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar defineProperty = function (obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n};\n\nfunction generatePatches(state, basepath, patches, inversePatches, baseValue, resultValue) {\n    if (patches) if (Array.isArray(baseValue)) generateArrayPatches(state, basepath, patches, inversePatches, baseValue, resultValue);else generateObjectPatches(state, basepath, patches, inversePatches, baseValue, resultValue);\n}\n\nfunction generateArrayPatches(state, basepath, patches, inversePatches, baseValue, resultValue) {\n    var shared = Math.min(baseValue.length, resultValue.length);\n    for (var i = 0; i < shared; i++) {\n        if (state.assigned[i] && baseValue[i] !== resultValue[i]) {\n            var path = basepath.concat(i);\n            patches.push({ op: \"replace\", path: path, value: resultValue[i] });\n            inversePatches.push({ op: \"replace\", path: path, value: baseValue[i] });\n        }\n    }\n    if (shared < resultValue.length) {\n        // stuff was added\n        for (var _i = shared; _i < resultValue.length; _i++) {\n            var _path = basepath.concat(_i);\n            patches.push({ op: \"add\", path: _path, value: resultValue[_i] });\n        }\n        inversePatches.push({\n            op: \"replace\",\n            path: basepath.concat(\"length\"),\n            value: baseValue.length\n        });\n    } else if (shared < baseValue.length) {\n        // stuff was removed\n        patches.push({\n            op: \"replace\",\n            path: basepath.concat(\"length\"),\n            value: resultValue.length\n        });\n        for (var _i2 = shared; _i2 < baseValue.length; _i2++) {\n            var _path2 = basepath.concat(_i2);\n            inversePatches.push({ op: \"add\", path: _path2, value: baseValue[_i2] });\n        }\n    }\n}\n\nfunction generateObjectPatches(state, basepath, patches, inversePatches, baseValue, resultValue) {\n    each(state.assigned, function (key, assignedValue) {\n        var origValue = baseValue[key];\n        var value = resultValue[key];\n        var op = !assignedValue ? \"remove\" : key in baseValue ? \"replace\" : \"add\";\n        if (origValue === baseValue && op === \"replace\") return;\n        var path = basepath.concat(key);\n        patches.push(op === \"remove\" ? { op: op, path: path } : { op: op, path: path, value: value });\n        inversePatches.push(op === \"add\" ? { op: \"remove\", path: path } : op === \"remove\" ? { op: \"add\", path: path, value: origValue } : { op: \"replace\", path: path, value: origValue });\n    });\n}\n\nfunction applyPatches(draft, patches) {\n    for (var i = 0; i < patches.length; i++) {\n        var patch = patches[i];\n        var path = patch.path;\n\n        if (path.length === 0 && patch.op === \"replace\") {\n            draft = patch.value;\n        } else {\n            var base = draft;\n            for (var _i3 = 0; _i3 < path.length - 1; _i3++) {\n                base = base[path[_i3]];\n                if (!base || (typeof base === \"undefined\" ? \"undefined\" : _typeof(base)) !== \"object\") throw new Error(\"Cannot apply patch, path doesn't resolve: \" + path.join(\"/\"));\n            }\n            var key = path[path.length - 1];\n            switch (patch.op) {\n                case \"replace\":\n                case \"add\":\n                    // TODO: add support is not extensive, it does not support insertion or `-` atm!\n                    base[key] = patch.value;\n                    break;\n                case \"remove\":\n                    if (Array.isArray(base)) {\n                        if (key === base.length - 1) base.length -= 1;else throw new Error(\"Remove can only remove the last key of an array, index: \" + key + \", length: \" + base.length);\n                    } else delete base[key];\n                    break;\n                default:\n                    throw new Error(\"Unsupported patch operation: \" + patch.op);\n            }\n        }\n    }\n    return draft;\n}\n\nvar NOTHING = typeof Symbol !== \"undefined\" ? Symbol(\"immer-nothing\") : defineProperty({}, \"immer-nothing\", true);\n\nvar PROXY_STATE = typeof Symbol !== \"undefined\" ? Symbol(\"immer-proxy-state\") : \"__$immer_state\";\n\nvar RETURNED_AND_MODIFIED_ERROR = \"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.\";\n\nfunction verifyMinified() {}\n\nvar inProduction = typeof process !== \"undefined\" && \"development\" === \"production\" || verifyMinified.name !== \"verifyMinified\";\n\nvar autoFreeze = !inProduction;\nvar useProxies = typeof Proxy !== \"undefined\" && typeof Reflect !== \"undefined\";\n\n/**\n * Automatically freezes any state trees generated by immer.\n * This protects against accidental modifications of the state tree outside of an immer function.\n * This comes with a performance impact, so it is recommended to disable this option in production.\n * It is by default enabled.\n *\n * @returns {void}\n */\nfunction setAutoFreeze(enableAutoFreeze) {\n    autoFreeze = enableAutoFreeze;\n}\n\nfunction setUseProxies(value) {\n    useProxies = value;\n}\n\nfunction getUseProxies() {\n    return useProxies;\n}\n\nfunction isProxy(value) {\n    return !!value && !!value[PROXY_STATE];\n}\n\nfunction isProxyable(value) {\n    if (!value) return false;\n    if ((typeof value === \"undefined\" ? \"undefined\" : _typeof(value)) !== \"object\") return false;\n    if (Array.isArray(value)) return true;\n    var proto = Object.getPrototypeOf(value);\n    return proto === null || proto === Object.prototype;\n}\n\nfunction freeze(value) {\n    if (autoFreeze) {\n        Object.freeze(value);\n    }\n    return value;\n}\n\nfunction original(value) {\n    if (value && value[PROXY_STATE]) {\n        return value[PROXY_STATE].base;\n    }\n    // otherwise return undefined\n}\n\nvar assign = Object.assign || function assign(target, value) {\n    for (var key in value) {\n        if (has(value, key)) {\n            target[key] = value[key];\n        }\n    }\n    return target;\n};\n\nfunction shallowCopy(value) {\n    if (Array.isArray(value)) return value.slice();\n    var target = value.__proto__ === undefined ? Object.create(null) : {};\n    return assign(target, value);\n}\n\nfunction each(value, cb) {\n    if (Array.isArray(value)) {\n        for (var i = 0; i < value.length; i++) {\n            cb(i, value[i]);\n        }\n    } else {\n        for (var key in value) {\n            cb(key, value[key]);\n        }\n    }\n}\n\nfunction has(thing, prop) {\n    return Object.prototype.hasOwnProperty.call(thing, prop);\n}\n\n// given a base object, returns it if unmodified, or return the changed cloned if modified\nfunction finalize(base, path, patches, inversePatches) {\n    if (isProxy(base)) {\n        var state = base[PROXY_STATE];\n        if (state.modified === true) {\n            if (state.finalized === true) return state.copy;\n            state.finalized = true;\n            var result = finalizeObject(useProxies ? state.copy : state.copy = shallowCopy(base), state, path, patches, inversePatches);\n            generatePatches(state, path, patches, inversePatches, state.base, result);\n            return result;\n        } else {\n            return state.base;\n        }\n    }\n    finalizeNonProxiedObject(base);\n    return base;\n}\n\nfunction finalizeObject(copy, state, path, patches, inversePatches) {\n    var base = state.base;\n    each(copy, function (prop, value) {\n        if (value !== base[prop]) {\n            // if there was an assignment on this property, we don't need to generate\n            // patches for the subtree\n            var _generatePatches = patches && !has(state.assigned, prop);\n            copy[prop] = finalize(value, _generatePatches && path.concat(prop), _generatePatches && patches, inversePatches);\n        }\n    });\n    return freeze(copy);\n}\n\nfunction finalizeNonProxiedObject(parent) {\n    // If finalize is called on an object that was not a proxy, it means that it is an object that was not there in the original\n    // tree and it could contain proxies at arbitrarily places. Let's find and finalize them as well\n    if (!isProxyable(parent)) return;\n    if (Object.isFrozen(parent)) return;\n    each(parent, function (i, child) {\n        if (isProxy(child)) {\n            parent[i] = finalize(child);\n        } else finalizeNonProxiedObject(child);\n    });\n    // always freeze completely new data\n    freeze(parent);\n}\n\nfunction is(x, y) {\n    // From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js\n    if (x === y) {\n        return x !== 0 || 1 / x === 1 / y;\n    } else {\n        return x !== x && y !== y;\n    }\n}\n\n// @ts-check\n\nvar proxies = null;\n\nvar objectTraps = {\n    get: get$1,\n    has: function has$$1(target, prop) {\n        return prop in source(target);\n    },\n    ownKeys: function ownKeys(target) {\n        return Reflect.ownKeys(source(target));\n    },\n\n    set: set$1,\n    deleteProperty: deleteProperty,\n    getOwnPropertyDescriptor: getOwnPropertyDescriptor,\n    defineProperty: defineProperty$1,\n    setPrototypeOf: function setPrototypeOf() {\n        throw new Error(\"Immer does not support `setPrototypeOf()`.\");\n    }\n};\n\nvar arrayTraps = {};\neach(objectTraps, function (key, fn) {\n    arrayTraps[key] = function () {\n        arguments[0] = arguments[0][0];\n        return fn.apply(this, arguments);\n    };\n});\narrayTraps.deleteProperty = function (state, prop) {\n    if (isNaN(parseInt(prop))) throw new Error(\"Immer does not support deleting properties from arrays: \" + prop);\n    return objectTraps.deleteProperty.call(this, state[0], prop);\n};\narrayTraps.set = function (state, prop, value) {\n    if (prop !== \"length\" && isNaN(parseInt(prop))) throw new Error(\"Immer does not support setting non-numeric properties on arrays: \" + prop);\n    return objectTraps.set.call(this, state[0], prop, value);\n};\n\nfunction createState(parent, base) {\n    return {\n        modified: false, // this tree is modified (either this object or one of it's children)\n        assigned: {}, // true: value was assigned to these props, false: was removed\n        finalized: false,\n        parent: parent,\n        base: base,\n        copy: undefined,\n        proxies: {}\n    };\n}\n\nfunction source(state) {\n    return state.modified === true ? state.copy : state.base;\n}\n\nfunction get$1(state, prop) {\n    if (prop === PROXY_STATE) return state;\n    if (state.modified) {\n        var value = state.copy[prop];\n        if (value === state.base[prop] && isProxyable(value))\n            // only create proxy if it is not yet a proxy, and not a new object\n            // (new objects don't need proxying, they will be processed in finalize anyway)\n            return state.copy[prop] = createProxy(state, value);\n        return value;\n    } else {\n        if (has(state.proxies, prop)) return state.proxies[prop];\n        var _value = state.base[prop];\n        if (!isProxy(_value) && isProxyable(_value)) return state.proxies[prop] = createProxy(state, _value);\n        return _value;\n    }\n}\n\nfunction set$1(state, prop, value) {\n    // TODO: optimize\n    state.assigned[prop] = true;\n    if (!state.modified) {\n        if (prop in state.base && is(state.base[prop], value) || has(state.proxies, prop) && state.proxies[prop] === value) return true;\n        markChanged(state);\n    }\n    state.copy[prop] = value;\n    return true;\n}\n\nfunction deleteProperty(state, prop) {\n    state.assigned[prop] = false;\n    markChanged(state);\n    delete state.copy[prop];\n    return true;\n}\n\nfunction getOwnPropertyDescriptor(state, prop) {\n    var owner = state.modified ? state.copy : has(state.proxies, prop) ? state.proxies : state.base;\n    var descriptor = Reflect.getOwnPropertyDescriptor(owner, prop);\n    if (descriptor && !(Array.isArray(owner) && prop === \"length\")) descriptor.configurable = true;\n    return descriptor;\n}\n\nfunction defineProperty$1() {\n    throw new Error(\"Immer does not support defining properties on draft objects.\");\n}\n\nfunction markChanged(state) {\n    if (!state.modified) {\n        state.modified = true;\n        state.copy = shallowCopy(state.base);\n        // copy the proxies over the base-copy\n        Object.assign(state.copy, state.proxies); // yup that works for arrays as well\n        if (state.parent) markChanged(state.parent);\n    }\n}\n\n// creates a proxy for plain objects / arrays\nfunction createProxy(parentState, base) {\n    if (isProxy(base)) throw new Error(\"Immer bug. Plz report.\");\n    var state = createState(parentState, base);\n    var proxy = Array.isArray(base) ? Proxy.revocable([state], arrayTraps) : Proxy.revocable(state, objectTraps);\n    proxies.push(proxy);\n    return proxy.proxy;\n}\n\nfunction produceProxy(baseState, producer, patchListener) {\n    if (isProxy(baseState)) {\n        // See #100, don't nest producers\n        var returnValue = producer.call(baseState, baseState);\n        return returnValue === undefined ? baseState : returnValue;\n    }\n    var previousProxies = proxies;\n    proxies = [];\n    var patches = patchListener && [];\n    var inversePatches = patchListener && [];\n    try {\n        // create proxy for root\n        var rootProxy = createProxy(undefined, baseState);\n        // execute the thunk\n        var _returnValue = producer.call(rootProxy, rootProxy);\n        // and finalize the modified proxy\n        var result = void 0;\n        // check whether the draft was modified and/or a value was returned\n        if (_returnValue !== undefined && _returnValue !== rootProxy) {\n            // something was returned, and it wasn't the proxy itself\n            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);\n\n            // See #117\n            // Should we just throw when returning a proxy which is not the root, but a subset of the original state?\n            // Looks like a wrongly modeled reducer\n            result = finalize(_returnValue);\n            if (patches) {\n                patches.push({ op: \"replace\", path: [], value: result });\n                inversePatches.push({ op: \"replace\", path: [], value: baseState });\n            }\n        } else {\n            result = finalize(rootProxy, [], patches, inversePatches);\n        }\n        // revoke all proxies\n        each(proxies, function (_, p) {\n            return p.revoke();\n        });\n        patchListener && patchListener(patches, inversePatches);\n        return result;\n    } finally {\n        proxies = previousProxies;\n    }\n}\n\n// @ts-check\n\nvar descriptors = {};\nvar states = null;\n\nfunction createState$1(parent, proxy, base) {\n    return {\n        modified: false,\n        assigned: {}, // true: value was assigned to these props, false: was removed\n        hasCopy: false,\n        parent: parent,\n        base: base,\n        proxy: proxy,\n        copy: undefined,\n        finished: false,\n        finalizing: false,\n        finalized: false\n    };\n}\n\nfunction source$1(state) {\n    return state.hasCopy ? state.copy : state.base;\n}\n\nfunction _get(state, prop) {\n    assertUnfinished(state);\n    var value = source$1(state)[prop];\n    if (!state.finalizing && value === state.base[prop] && isProxyable(value)) {\n        // only create a proxy if the value is proxyable, and the value was in the base state\n        // if it wasn't in the base state, the object is already modified and we will process it in finalize\n        prepareCopy(state);\n        return state.copy[prop] = createProxy$1(state, value);\n    }\n    return value;\n}\n\nfunction _set(state, prop, value) {\n    assertUnfinished(state);\n    state.assigned[prop] = true; // optimization; skip this if there is no listener\n    if (!state.modified) {\n        if (is(source$1(state)[prop], value)) return;\n        markChanged$1(state);\n        prepareCopy(state);\n    }\n    state.copy[prop] = value;\n}\n\nfunction markChanged$1(state) {\n    if (!state.modified) {\n        state.modified = true;\n        if (state.parent) markChanged$1(state.parent);\n    }\n}\n\nfunction prepareCopy(state) {\n    if (state.hasCopy) return;\n    state.hasCopy = true;\n    state.copy = shallowCopy(state.base);\n}\n\n// creates a proxy for plain objects / arrays\nfunction createProxy$1(parent, base) {\n    var proxy = shallowCopy(base);\n    each(base, function (i) {\n        Object.defineProperty(proxy, \"\" + i, createPropertyProxy(\"\" + i));\n    });\n    var state = createState$1(parent, proxy, base);\n    createHiddenProperty(proxy, PROXY_STATE, state);\n    states.push(state);\n    return proxy;\n}\n\nfunction createPropertyProxy(prop) {\n    return descriptors[prop] || (descriptors[prop] = {\n        configurable: true,\n        enumerable: true,\n        get: function get$$1() {\n            return _get(this[PROXY_STATE], prop);\n        },\n        set: function set$$1(value) {\n            _set(this[PROXY_STATE], prop, value);\n        }\n    });\n}\n\nfunction assertUnfinished(state) {\n    if (state.finished === true) throw new Error(\"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? \" + JSON.stringify(state.copy || state.base));\n}\n\n// this sounds very expensive, but actually it is not that expensive in practice\n// as it will only visit proxies, and only do key-based change detection for objects for\n// which it is not already know that they are changed (that is, only object for which no known key was changed)\nfunction markChangesSweep() {\n    // intentionally we process the proxies in reverse order;\n    // ideally we start by processing leafs in the tree, because if a child has changed, we don't have to check the parent anymore\n    // reverse order of proxy creation approximates this\n    for (var i = states.length - 1; i >= 0; i--) {\n        var state = states[i];\n        if (state.modified === false) {\n            if (Array.isArray(state.base)) {\n                if (hasArrayChanges(state)) markChanged$1(state);\n            } else if (hasObjectChanges(state)) markChanged$1(state);\n        }\n    }\n}\n\nfunction markChangesRecursively(object) {\n    if (!object || (typeof object === \"undefined\" ? \"undefined\" : _typeof(object)) !== \"object\") return;\n    var state = object[PROXY_STATE];\n    if (!state) return;\n    var proxy = state.proxy,\n        base = state.base;\n\n    if (Array.isArray(object)) {\n        if (hasArrayChanges(state)) {\n            markChanged$1(state);\n            state.assigned.length = true;\n            if (proxy.length < base.length) for (var i = proxy.length; i < base.length; i++) {\n                state.assigned[i] = false;\n            } else for (var _i = base.length; _i < proxy.length; _i++) {\n                state.assigned[_i] = true;\n            }each(proxy, function (index, child) {\n                if (!state.assigned[index]) markChangesRecursively(child);\n            });\n        }\n    } else {\n        var _diffKeys = diffKeys(base, proxy),\n            added = _diffKeys.added,\n            removed = _diffKeys.removed;\n\n        if (added.length > 0 || removed.length > 0) markChanged$1(state);\n        each(added, function (_, key) {\n            state.assigned[key] = true;\n        });\n        each(removed, function (_, key) {\n            state.assigned[key] = false;\n        });\n        each(proxy, function (key, child) {\n            if (!state.assigned[key]) markChangesRecursively(child);\n        });\n    }\n}\n\nfunction diffKeys(from, to) {\n    // TODO: optimize\n    var a = Object.keys(from);\n    var b = Object.keys(to);\n    return {\n        added: b.filter(function (key) {\n            return a.indexOf(key) === -1;\n        }),\n        removed: a.filter(function (key) {\n            return b.indexOf(key) === -1;\n        })\n    };\n}\n\nfunction hasObjectChanges(state) {\n    var baseKeys = Object.keys(state.base);\n    var keys = Object.keys(state.proxy);\n    return !shallowEqual(baseKeys, keys);\n}\n\nfunction hasArrayChanges(state) {\n    var proxy = state.proxy;\n\n    if (proxy.length !== state.base.length) return true;\n    // See #116\n    // If we first shorten the length, our array interceptors will be removed.\n    // If after that new items are added, result in the same original length,\n    // those last items will have no intercepting property.\n    // So if there is no own descriptor on the last position, we know that items were removed and added\n    // N.B.: splice, unshift, etc only shift values around, but not prop descriptors, so we only have to check\n    // the last one\n    var descriptor = Object.getOwnPropertyDescriptor(proxy, proxy.length - 1);\n    // descriptor can be null, but only for newly created sparse arrays, eg. new Array(10)\n    if (descriptor && !descriptor.get) return true;\n    // For all other cases, we don't have to compare, as they would have been picked up by the index setters\n    return false;\n}\n\nfunction produceEs5(baseState, producer, patchListener) {\n    if (isProxy(baseState)) {\n        // See #100, don't nest producers\n        var returnValue = producer.call(baseState, baseState);\n        return returnValue === undefined ? baseState : returnValue;\n    }\n    var prevStates = states;\n    states = [];\n    var patches = patchListener && [];\n    var inversePatches = patchListener && [];\n    try {\n        // create proxy for root\n        var rootProxy = createProxy$1(undefined, baseState);\n        // execute the thunk\n        var _returnValue = producer.call(rootProxy, rootProxy);\n        // and finalize the modified proxy\n        each(states, function (_, state) {\n            state.finalizing = true;\n        });\n        var result = void 0;\n        // check whether the draft was modified and/or a value was returned\n        if (_returnValue !== undefined && _returnValue !== rootProxy) {\n            // something was returned, and it wasn't the proxy itself\n            if (rootProxy[PROXY_STATE].modified) throw new Error(RETURNED_AND_MODIFIED_ERROR);\n            result = finalize(_returnValue);\n            if (patches) {\n                patches.push({ op: \"replace\", path: [], value: result });\n                inversePatches.push({ op: \"replace\", path: [], value: baseState });\n            }\n        } else {\n            if (patchListener) markChangesRecursively(rootProxy);\n            markChangesSweep(); // this one is more efficient if we don't need to know which attributes have changed\n            result = finalize(rootProxy, [], patches, inversePatches);\n        }\n        // make sure all proxies become unusable\n        each(states, function (_, state) {\n            state.finished = true;\n        });\n        patchListener && patchListener(patches, inversePatches);\n        return result;\n    } finally {\n        states = prevStates;\n    }\n}\n\nfunction shallowEqual(objA, objB) {\n    //From: https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js\n    if (is(objA, objB)) return true;\n    if ((typeof objA === \"undefined\" ? \"undefined\" : _typeof(objA)) !== \"object\" || objA === null || (typeof objB === \"undefined\" ? \"undefined\" : _typeof(objB)) !== \"object\" || objB === null) {\n        return false;\n    }\n    var keysA = Object.keys(objA);\n    var keysB = Object.keys(objB);\n    if (keysA.length !== keysB.length) return false;\n    for (var i = 0; i < keysA.length; i++) {\n        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction createHiddenProperty(target, prop, value) {\n    Object.defineProperty(target, prop, {\n        value: value,\n        enumerable: false,\n        writable: true\n    });\n}\n\n/**\n * produce takes a state, and runs a function against it.\n * That function can freely mutate the state, as it will create copies-on-write.\n * This means that the original state will stay unchanged, and once the function finishes, the modified state is returned\n *\n * @export\n * @param {any} baseState - the state to start with\n * @param {Function} producer - function that receives a proxy of the base state as first argument and which can be freely modified\n * @param {Function} patchListener - optional function that will be called with all the patches produced here\n * @returns {any} a new state, or the base state if nothing was modified\n */\nfunction produce(baseState, producer, patchListener) {\n    // prettier-ignore\n    if (arguments.length < 1 || arguments.length > 3) throw new Error(\"produce expects 1 to 3 arguments, got \" + arguments.length);\n\n    // curried invocation\n    if (typeof baseState === \"function\") {\n        // prettier-ignore\n        if (typeof producer === \"function\") throw new Error(\"if first argument is a function (curried invocation), the second argument to produce cannot be a function\");\n\n        var initialState = producer;\n        var recipe = baseState;\n\n        return function () {\n            var args = arguments;\n\n            var currentState = args[0] === undefined && initialState !== undefined ? initialState : args[0];\n\n            return produce(currentState, function (draft) {\n                args[0] = draft; // blegh!\n                return recipe.apply(draft, args);\n            });\n        };\n    }\n\n    // prettier-ignore\n    {\n        if (typeof producer !== \"function\") throw new Error(\"if first argument is not a function, the second argument to produce should be a function\");\n        if (patchListener !== undefined && typeof patchListener !== \"function\") throw new Error(\"the third argument of a producer should not be set or a function\");\n    }\n\n    // if state is a primitive, don't bother proxying at all\n    if ((typeof baseState === \"undefined\" ? \"undefined\" : _typeof(baseState)) !== \"object\" || baseState === null) {\n        var returnValue = producer(baseState);\n        return returnValue === undefined ? baseState : normalizeResult(returnValue);\n    }\n\n    if (!isProxyable(baseState)) throw new Error(\"the first argument to an immer producer should be a primitive, plain object or array, got \" + (typeof baseState === \"undefined\" ? \"undefined\" : _typeof(baseState)) + \": \\\"\" + baseState + \"\\\"\");\n    return normalizeResult(getUseProxies() ? produceProxy(baseState, producer, patchListener) : produceEs5(baseState, producer, patchListener));\n}\n\nfunction normalizeResult(result) {\n    return result === NOTHING ? undefined : result;\n}\n\nvar applyPatches$1 = produce(applyPatches);\n\nvar nothing = NOTHING;\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (produce);\n//# sourceMappingURL=immer.module.js.map\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/immer/dist/immer.module.js?");
    /***/
  },

  /***/
  "./node_modules/nanoid/index.browser.js":
  /*!**********************************************!*\
    !*** ./node_modules/nanoid/index.browser.js ***!
    \**********************************************/

  /*! no static exports found */

  /***/
  function node_modulesNanoidIndexBrowserJs(module, exports, __webpack_require__) {
    eval("if (true) {\n  if (typeof self === 'undefined' || (!self.crypto && !self.msCrypto)) {\n    throw new Error(\n      'Your browser does not have secure random generator. ' +\n      'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'\n    )\n  }\n}\n\nvar crypto = self.crypto || self.msCrypto\n\n/*\n * This alphabet uses a-z A-Z 0-9 _- symbols.\n * Symbols order was changed for better gzip compression.\n */\nvar url = 'Uint8ArdomValuesObj012345679BCDEFGHIJKLMNPQRSTWXYZ_cfghkpqvwxyz-'\n\nmodule.exports = function (size) {\n  size = size || 21\n  var id = ''\n  var bytes = crypto.getRandomValues(new Uint8Array(size))\n  while (0 < size--) {\n    id += url[bytes[size] & 63]\n  }\n  return id\n}\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/index.browser.js?");
    /***/
  },

  /***/
  "./node_modules/process/browser.js":
  /*!*****************************************!*\
    !*** ./node_modules/process/browser.js ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function node_modulesProcessBrowserJs(module, exports) {
    eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");
    /***/
  },

  /***/
  "./node_modules/qs/lib/formats.js":
  /*!****************************************!*\
    !*** ./node_modules/qs/lib/formats.js ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function node_modulesQsLibFormatsJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\n\nvar replace = String.prototype.replace;\nvar percentTwenties = /%20/g;\n\nmodule.exports = {\n    'default': 'RFC3986',\n    formatters: {\n        RFC1738: function (value) {\n            return replace.call(value, percentTwenties, '+');\n        },\n        RFC3986: function (value) {\n            return value;\n        }\n    },\n    RFC1738: 'RFC1738',\n    RFC3986: 'RFC3986'\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/formats.js?");
    /***/
  },

  /***/
  "./node_modules/qs/lib/index.js":
  /*!**************************************!*\
    !*** ./node_modules/qs/lib/index.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesQsLibIndexJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\n\nvar stringify = __webpack_require__(/*! ./stringify */ \"./node_modules/qs/lib/stringify.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/qs/lib/parse.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\n\nmodule.exports = {\n    formats: formats,\n    parse: parse,\n    stringify: stringify\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/index.js?");
    /***/
  },

  /***/
  "./node_modules/qs/lib/parse.js":
  /*!**************************************!*\
    !*** ./node_modules/qs/lib/parse.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesQsLibParseJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\n\nvar has = Object.prototype.hasOwnProperty;\n\nvar defaults = {\n    allowDots: false,\n    allowPrototypes: false,\n    arrayLimit: 20,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    decoder: utils.decode,\n    delimiter: '&',\n    depth: 5,\n    ignoreQueryPrefix: false,\n    interpretNumericEntities: false,\n    parameterLimit: 1000,\n    parseArrays: true,\n    plainObjects: false,\n    strictNullHandling: false\n};\n\nvar interpretNumericEntities = function (str) {\n    return str.replace(/&#(\\d+);/g, function ($0, numberStr) {\n        return String.fromCharCode(parseInt(numberStr, 10));\n    });\n};\n\n// This is what browsers will submit when the ✓ character occurs in an\n// application/x-www-form-urlencoded body and the encoding of the page containing\n// the form is iso-8859-1, or when the submitted form has an accept-charset\n// attribute of iso-8859-1. Presumably also with other charsets that do not contain\n// the ✓ character, such as us-ascii.\nvar isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')\n\n// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.\nvar charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')\n\nvar parseValues = function parseQueryStringValues(str, options) {\n    var obj = {};\n    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\\?/, '') : str;\n    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;\n    var parts = cleanStr.split(options.delimiter, limit);\n    var skipIndex = -1; // Keep track of where the utf8 sentinel was found\n    var i;\n\n    var charset = options.charset;\n    if (options.charsetSentinel) {\n        for (i = 0; i < parts.length; ++i) {\n            if (parts[i].indexOf('utf8=') === 0) {\n                if (parts[i] === charsetSentinel) {\n                    charset = 'utf-8';\n                } else if (parts[i] === isoSentinel) {\n                    charset = 'iso-8859-1';\n                }\n                skipIndex = i;\n                i = parts.length; // The eslint settings do not allow break;\n            }\n        }\n    }\n\n    for (i = 0; i < parts.length; ++i) {\n        if (i === skipIndex) {\n            continue;\n        }\n        var part = parts[i];\n\n        var bracketEqualsPos = part.indexOf(']=');\n        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;\n\n        var key, val;\n        if (pos === -1) {\n            key = options.decoder(part, defaults.decoder, charset);\n            val = options.strictNullHandling ? null : '';\n        } else {\n            key = options.decoder(part.slice(0, pos), defaults.decoder, charset);\n            val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);\n        }\n\n        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {\n            val = interpretNumericEntities(val);\n        }\n        if (has.call(obj, key)) {\n            obj[key] = utils.combine(obj[key], val);\n        } else {\n            obj[key] = val;\n        }\n    }\n\n    return obj;\n};\n\nvar parseObject = function (chain, val, options) {\n    var leaf = val;\n\n    for (var i = chain.length - 1; i >= 0; --i) {\n        var obj;\n        var root = chain[i];\n\n        if (root === '[]' && options.parseArrays) {\n            obj = [].concat(leaf);\n        } else {\n            obj = options.plainObjects ? Object.create(null) : {};\n            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;\n            var index = parseInt(cleanRoot, 10);\n            if (!options.parseArrays && cleanRoot === '') {\n                obj = { 0: leaf };\n            } else if (\n                !isNaN(index)\n                && root !== cleanRoot\n                && String(index) === cleanRoot\n                && index >= 0\n                && (options.parseArrays && index <= options.arrayLimit)\n            ) {\n                obj = [];\n                obj[index] = leaf;\n            } else {\n                obj[cleanRoot] = leaf;\n            }\n        }\n\n        leaf = obj;\n    }\n\n    return leaf;\n};\n\nvar parseKeys = function parseQueryStringKeys(givenKey, val, options) {\n    if (!givenKey) {\n        return;\n    }\n\n    // Transform dot notation to bracket notation\n    var key = options.allowDots ? givenKey.replace(/\\.([^.[]+)/g, '[$1]') : givenKey;\n\n    // The regex chunks\n\n    var brackets = /(\\[[^[\\]]*])/;\n    var child = /(\\[[^[\\]]*])/g;\n\n    // Get the parent\n\n    var segment = brackets.exec(key);\n    var parent = segment ? key.slice(0, segment.index) : key;\n\n    // Stash the parent if it exists\n\n    var keys = [];\n    if (parent) {\n        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties\n        if (!options.plainObjects && has.call(Object.prototype, parent)) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n\n        keys.push(parent);\n    }\n\n    // Loop through children appending to the array until we hit depth\n\n    var i = 0;\n    while ((segment = child.exec(key)) !== null && i < options.depth) {\n        i += 1;\n        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {\n            if (!options.allowPrototypes) {\n                return;\n            }\n        }\n        keys.push(segment[1]);\n    }\n\n    // If there's a remainder, just add whatever is left\n\n    if (segment) {\n        keys.push('[' + key.slice(segment.index) + ']');\n    }\n\n    return parseObject(keys, val, options);\n};\n\nmodule.exports = function (str, opts) {\n    var options = opts ? utils.assign({}, opts) : {};\n\n    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {\n        throw new TypeError('Decoder has to be a function.');\n    }\n\n    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;\n    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;\n    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;\n    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;\n    options.parseArrays = options.parseArrays !== false;\n    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;\n    options.allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;\n    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;\n    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;\n    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;\n    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;\n\n    if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {\n        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n    if (typeof options.charset === 'undefined') {\n        options.charset = defaults.charset;\n    }\n\n    if (str === '' || str === null || typeof str === 'undefined') {\n        return options.plainObjects ? Object.create(null) : {};\n    }\n\n    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;\n    var obj = options.plainObjects ? Object.create(null) : {};\n\n    // Iterate over the keys and setup the new object\n\n    var keys = Object.keys(tempObj);\n    for (var i = 0; i < keys.length; ++i) {\n        var key = keys[i];\n        var newObj = parseKeys(key, tempObj[key], options);\n        obj = utils.merge(obj, newObj, options);\n    }\n\n    return utils.compact(obj);\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/parse.js?");
    /***/
  },

  /***/
  "./node_modules/qs/lib/stringify.js":
  /*!******************************************!*\
    !*** ./node_modules/qs/lib/stringify.js ***!
    \******************************************/

  /*! no static exports found */

  /***/
  function node_modulesQsLibStringifyJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/qs/lib/utils.js\");\nvar formats = __webpack_require__(/*! ./formats */ \"./node_modules/qs/lib/formats.js\");\n\nvar arrayPrefixGenerators = {\n    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching\n        return prefix + '[]';\n    },\n    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching\n        return prefix + '[' + key + ']';\n    },\n    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching\n        return prefix;\n    }\n};\n\nvar isArray = Array.isArray;\nvar push = Array.prototype.push;\nvar pushToArray = function (arr, valueOrArray) {\n    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);\n};\n\nvar toISO = Date.prototype.toISOString;\n\nvar defaults = {\n    addQueryPrefix: false,\n    allowDots: false,\n    charset: 'utf-8',\n    charsetSentinel: false,\n    delimiter: '&',\n    encode: true,\n    encoder: utils.encode,\n    encodeValuesOnly: false,\n    // deprecated\n    indices: false,\n    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching\n        return toISO.call(date);\n    },\n    skipNulls: false,\n    strictNullHandling: false\n};\n\nvar stringify = function stringify( // eslint-disable-line func-name-matching\n    object,\n    prefix,\n    generateArrayPrefix,\n    strictNullHandling,\n    skipNulls,\n    encoder,\n    filter,\n    sort,\n    allowDots,\n    serializeDate,\n    formatter,\n    encodeValuesOnly,\n    charset\n) {\n    var obj = object;\n    if (typeof filter === 'function') {\n        obj = filter(prefix, obj);\n    } else if (obj instanceof Date) {\n        obj = serializeDate(obj);\n    }\n\n    if (obj === null) {\n        if (strictNullHandling) {\n            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;\n        }\n\n        obj = '';\n    }\n\n    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {\n        if (encoder) {\n            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);\n            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];\n        }\n        return [formatter(prefix) + '=' + formatter(String(obj))];\n    }\n\n    var values = [];\n\n    if (typeof obj === 'undefined') {\n        return values;\n    }\n\n    var objKeys;\n    if (Array.isArray(filter)) {\n        objKeys = filter;\n    } else {\n        var keys = Object.keys(obj);\n        objKeys = sort ? keys.sort(sort) : keys;\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (skipNulls && obj[key] === null) {\n            continue;\n        }\n\n        if (Array.isArray(obj)) {\n            pushToArray(values, stringify(\n                obj[key],\n                generateArrayPrefix(prefix, key),\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        } else {\n            pushToArray(values, stringify(\n                obj[key],\n                prefix + (allowDots ? '.' + key : '[' + key + ']'),\n                generateArrayPrefix,\n                strictNullHandling,\n                skipNulls,\n                encoder,\n                filter,\n                sort,\n                allowDots,\n                serializeDate,\n                formatter,\n                encodeValuesOnly,\n                charset\n            ));\n        }\n    }\n\n    return values;\n};\n\nmodule.exports = function (object, opts) {\n    var obj = object;\n    var options = opts ? utils.assign({}, opts) : {};\n\n    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {\n        throw new TypeError('Encoder has to be a function.');\n    }\n\n    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;\n    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;\n    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;\n    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;\n    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;\n    var sort = typeof options.sort === 'function' ? options.sort : null;\n    var allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;\n    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;\n    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;\n    var charset = options.charset || defaults.charset;\n    if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {\n        throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');\n    }\n\n    if (typeof options.format === 'undefined') {\n        options.format = formats['default'];\n    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {\n        throw new TypeError('Unknown format option provided.');\n    }\n    var formatter = formats.formatters[options.format];\n    var objKeys;\n    var filter;\n\n    if (typeof options.filter === 'function') {\n        filter = options.filter;\n        obj = filter('', obj);\n    } else if (Array.isArray(options.filter)) {\n        filter = options.filter;\n        objKeys = filter;\n    }\n\n    var keys = [];\n\n    if (typeof obj !== 'object' || obj === null) {\n        return '';\n    }\n\n    var arrayFormat;\n    if (options.arrayFormat in arrayPrefixGenerators) {\n        arrayFormat = options.arrayFormat;\n    } else if ('indices' in options) {\n        arrayFormat = options.indices ? 'indices' : 'repeat';\n    } else {\n        arrayFormat = 'indices';\n    }\n\n    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];\n\n    if (!objKeys) {\n        objKeys = Object.keys(obj);\n    }\n\n    if (sort) {\n        objKeys.sort(sort);\n    }\n\n    for (var i = 0; i < objKeys.length; ++i) {\n        var key = objKeys[i];\n\n        if (skipNulls && obj[key] === null) {\n            continue;\n        }\n        pushToArray(keys, stringify(\n            obj[key],\n            key,\n            generateArrayPrefix,\n            strictNullHandling,\n            skipNulls,\n            encode ? encoder : null,\n            filter,\n            sort,\n            allowDots,\n            serializeDate,\n            formatter,\n            encodeValuesOnly,\n            charset\n        ));\n    }\n\n    var joined = keys.join(delimiter);\n    var prefix = options.addQueryPrefix === true ? '?' : '';\n\n    if (options.charsetSentinel) {\n        if (charset === 'iso-8859-1') {\n            // encodeURIComponent('&#10003;'), the \"numeric entity\" representation of a checkmark\n            prefix += 'utf8=%26%2310003%3B&';\n        } else {\n            // encodeURIComponent('✓')\n            prefix += 'utf8=%E2%9C%93&';\n        }\n    }\n\n    return joined.length > 0 ? prefix + joined : '';\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/stringify.js?");
    /***/
  },

  /***/
  "./node_modules/qs/lib/utils.js":
  /*!**************************************!*\
    !*** ./node_modules/qs/lib/utils.js ***!
    \**************************************/

  /*! no static exports found */

  /***/
  function node_modulesQsLibUtilsJs(module, exports, __webpack_require__) {
    "use strict";

    eval("\n\nvar has = Object.prototype.hasOwnProperty;\n\nvar hexTable = (function () {\n    var array = [];\n    for (var i = 0; i < 256; ++i) {\n        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());\n    }\n\n    return array;\n}());\n\nvar compactQueue = function compactQueue(queue) {\n    while (queue.length > 1) {\n        var item = queue.pop();\n        var obj = item.obj[item.prop];\n\n        if (Array.isArray(obj)) {\n            var compacted = [];\n\n            for (var j = 0; j < obj.length; ++j) {\n                if (typeof obj[j] !== 'undefined') {\n                    compacted.push(obj[j]);\n                }\n            }\n\n            item.obj[item.prop] = compacted;\n        }\n    }\n};\n\nvar arrayToObject = function arrayToObject(source, options) {\n    var obj = options && options.plainObjects ? Object.create(null) : {};\n    for (var i = 0; i < source.length; ++i) {\n        if (typeof source[i] !== 'undefined') {\n            obj[i] = source[i];\n        }\n    }\n\n    return obj;\n};\n\nvar merge = function merge(target, source, options) {\n    if (!source) {\n        return target;\n    }\n\n    if (typeof source !== 'object') {\n        if (Array.isArray(target)) {\n            target.push(source);\n        } else if (typeof target === 'object') {\n            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {\n                target[source] = true;\n            }\n        } else {\n            return [target, source];\n        }\n\n        return target;\n    }\n\n    if (typeof target !== 'object') {\n        return [target].concat(source);\n    }\n\n    var mergeTarget = target;\n    if (Array.isArray(target) && !Array.isArray(source)) {\n        mergeTarget = arrayToObject(target, options);\n    }\n\n    if (Array.isArray(target) && Array.isArray(source)) {\n        source.forEach(function (item, i) {\n            if (has.call(target, i)) {\n                if (target[i] && typeof target[i] === 'object') {\n                    target[i] = merge(target[i], item, options);\n                } else {\n                    target.push(item);\n                }\n            } else {\n                target[i] = item;\n            }\n        });\n        return target;\n    }\n\n    return Object.keys(source).reduce(function (acc, key) {\n        var value = source[key];\n\n        if (has.call(acc, key)) {\n            acc[key] = merge(acc[key], value, options);\n        } else {\n            acc[key] = value;\n        }\n        return acc;\n    }, mergeTarget);\n};\n\nvar assign = function assignSingleSource(target, source) {\n    return Object.keys(source).reduce(function (acc, key) {\n        acc[key] = source[key];\n        return acc;\n    }, target);\n};\n\nvar decode = function (str, decoder, charset) {\n    var strWithoutPlus = str.replace(/\\+/g, ' ');\n    if (charset === 'iso-8859-1') {\n        // unescape never throws, no try...catch needed:\n        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);\n    }\n    // utf-8\n    try {\n        return decodeURIComponent(strWithoutPlus);\n    } catch (e) {\n        return strWithoutPlus;\n    }\n};\n\nvar encode = function encode(str, defaultEncoder, charset) {\n    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.\n    // It has been adapted here for stricter adherence to RFC 3986\n    if (str.length === 0) {\n        return str;\n    }\n\n    var string = typeof str === 'string' ? str : String(str);\n\n    if (charset === 'iso-8859-1') {\n        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {\n            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';\n        });\n    }\n\n    var out = '';\n    for (var i = 0; i < string.length; ++i) {\n        var c = string.charCodeAt(i);\n\n        if (\n            c === 0x2D // -\n            || c === 0x2E // .\n            || c === 0x5F // _\n            || c === 0x7E // ~\n            || (c >= 0x30 && c <= 0x39) // 0-9\n            || (c >= 0x41 && c <= 0x5A) // a-z\n            || (c >= 0x61 && c <= 0x7A) // A-Z\n        ) {\n            out += string.charAt(i);\n            continue;\n        }\n\n        if (c < 0x80) {\n            out = out + hexTable[c];\n            continue;\n        }\n\n        if (c < 0x800) {\n            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        if (c < 0xD800 || c >= 0xE000) {\n            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);\n            continue;\n        }\n\n        i += 1;\n        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));\n        out += hexTable[0xF0 | (c >> 18)]\n            + hexTable[0x80 | ((c >> 12) & 0x3F)]\n            + hexTable[0x80 | ((c >> 6) & 0x3F)]\n            + hexTable[0x80 | (c & 0x3F)];\n    }\n\n    return out;\n};\n\nvar compact = function compact(value) {\n    var queue = [{ obj: { o: value }, prop: 'o' }];\n    var refs = [];\n\n    for (var i = 0; i < queue.length; ++i) {\n        var item = queue[i];\n        var obj = item.obj[item.prop];\n\n        var keys = Object.keys(obj);\n        for (var j = 0; j < keys.length; ++j) {\n            var key = keys[j];\n            var val = obj[key];\n            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {\n                queue.push({ obj: obj, prop: key });\n                refs.push(val);\n            }\n        }\n    }\n\n    compactQueue(queue);\n\n    return value;\n};\n\nvar isRegExp = function isRegExp(obj) {\n    return Object.prototype.toString.call(obj) === '[object RegExp]';\n};\n\nvar isBuffer = function isBuffer(obj) {\n    if (obj === null || typeof obj === 'undefined') {\n        return false;\n    }\n\n    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));\n};\n\nvar combine = function combine(a, b) {\n    return [].concat(a, b);\n};\n\nmodule.exports = {\n    arrayToObject: arrayToObject,\n    assign: assign,\n    combine: combine,\n    compact: compact,\n    decode: decode,\n    encode: encode,\n    isBuffer: isBuffer,\n    isRegExp: isRegExp,\n    merge: merge\n};\n\n\n//# sourceURL=webpack:///./node_modules/qs/lib/utils.js?");
    /***/
  },

  /***/
  "./node_modules/refract-callbag/index.es.js":
  /*!**************************************************!*\
    !*** ./node_modules/refract-callbag/index.es.js ***!
    \**************************************************/

  /*! exports provided: withEffects, compose, asProps, toProps, PROPS_EFFECT, useRefract, toRender, COMPONENT_EFFECT */

  /***/
  function node_modulesRefractCallbagIndexEsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withEffects\", function() { return withEffects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asProps\", function() { return asProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toProps\", function() { return toProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROPS_EFFECT\", function() { return PROPS_EFFECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRefract\", function() { return useRefract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRender\", function() { return toRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COMPONENT_EFFECT\", function() { return COMPONENT_EFFECT; });\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = Object.setPrototypeOf ||\r\n    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = Object.assign || function __assign(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n    }\r\n    return t;\r\n};\n\nvar PROPS_EFFECT = '@@refract/effect/props';\r\nvar COMPONENT_EFFECT = '@@refract/effect/component';\r\nvar toProps = function (props) { return ({\r\n    type: PROPS_EFFECT,\r\n    payload: {\r\n        replace: false,\r\n        props: props\r\n    }\r\n}); };\r\nvar asProps = function (props) { return ({\r\n    type: PROPS_EFFECT,\r\n    payload: {\r\n        replace: true,\r\n        props: props\r\n    }\r\n}); };\r\nvar toRender = function (data) { return ({\r\n    type: COMPONENT_EFFECT,\r\n    payload: data\r\n}); };\n\nvar MOUNT_EVENT = '@@refract/event/mount';\r\nvar UNMOUNT_EVENT = '@@refract/event/unmount';\r\nvar DataType;\r\n(function (DataType) {\r\n    DataType[\"EVENT\"] = \"event\";\r\n    DataType[\"PROPS\"] = \"props\";\r\n    DataType[\"CALLBACK\"] = \"callback\";\r\n})(DataType || (DataType = {}));\r\nvar isEvent = function (eventName) { return function (data, index) {\r\n    return data.type === DataType.EVENT &&\r\n        data.payload.name === eventName;\r\n}; };\r\nvar isProps = function (data) { return data.type === DataType.PROPS; };\r\nvar isCallback = function (propName) { return function (data) {\r\n    return data.type === DataType.CALLBACK &&\r\n        data.payload.name === propName;\r\n}; };\r\nvar createEventData = function (name, value) { return ({\r\n    type: DataType.EVENT,\r\n    payload: {\r\n        name: name,\r\n        value: value\r\n    }\r\n}); };\r\nvar createPropsData = function (props) { return ({\r\n    type: DataType.PROPS,\r\n    payload: props\r\n}); };\r\nvar createCallbackData = function (name, args) { return ({\r\n    type: DataType.CALLBACK,\r\n    payload: {\r\n        name: name,\r\n        args: args\r\n    }\r\n}); };\r\nvar shallowEquals = function (left, right) {\r\n    return left === right ||\r\n        (Object.keys(left).length === Object.keys(right).length &&\r\n            Object.keys(left).every(function (leftKey) { return left[leftKey] === right[leftKey]; }));\r\n};\n\nvar fromObs = __webpack_require__(/*! callbag-from-obs */ \"./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js\");\r\nvar toObs = __webpack_require__(/*! callbag-to-obs */ \"./node_modules/callbag-to-obs/readme.js\");\r\nvar dropRepeats = __webpack_require__(/*! callbag-drop-repeats */ \"./node_modules/callbag-drop-repeats/index.js\");\r\nvar map = __webpack_require__(/*! callbag-map */ \"./node_modules/callbag-map/readme.js\");\r\nvar pipe = __webpack_require__(/*! callbag-pipe */ \"./node_modules/callbag-pipe/readme.js\");\r\nvar filter = __webpack_require__(/*! callbag-filter */ \"./node_modules/callbag-filter/readme.js\");\r\nvar subscribeToSink = function (sink, next, error) {\r\n    return toObs(sink).subscribe({\r\n        next: next,\r\n        error: error\r\n    });\r\n};\r\nvar getComponentBase = function (data, pushEvent) {\r\n    var fromEvent = function (eventName, valueTransformer) {\r\n        return pipe(data, filter(isEvent(eventName)), map(function (data) {\r\n            var value = data.payload.value;\r\n            return valueTransformer ? valueTransformer(value) : value;\r\n        }));\r\n    };\r\n    var useEvent = function () {\r\n        var args = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            args[_i] = arguments[_i];\r\n        }\r\n        var eventName = args[0];\r\n        var hasSeedValue = args.length > 1;\r\n        var seedValue = args[2];\r\n        var events$ = fromEvent(eventName);\r\n        var pushEventValue = pushEvent(eventName);\r\n        return [\r\n            !hasSeedValue ? events$ : pipe(events$, Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(seedValue)),\r\n            pushEventValue\r\n        ];\r\n    };\r\n    return {\r\n        mount: pipe(data, filter(isEvent(MOUNT_EVENT)), map(function () { return undefined; })),\r\n        unmount: pipe(data, filter(isEvent(UNMOUNT_EVENT)), map(function () { return undefined; })),\r\n        fromEvent: fromEvent,\r\n        pushEvent: pushEvent,\r\n        useEvent: useEvent\r\n    };\r\n};\r\nvar getObserve = function (getProp, data, decoratedProps) {\r\n    return function observe(propName, valueTransformer) {\r\n        if (decoratedProps &&\r\n            propName &&\r\n            typeof getProp(propName) === 'function') {\r\n            return pipe(data(), filter(isCallback(propName)), map(function (data) {\r\n                var args = data.payload.args;\r\n                return valueTransformer ? valueTransformer(args) : args[0];\r\n            }));\r\n        }\r\n        if (propName) {\r\n            return pipe(data(), filter(isProps), map(function (data) {\r\n                var prop = data.payload[propName];\r\n                return valueTransformer ? valueTransformer(prop) : prop;\r\n            }), dropRepeats());\r\n        }\r\n        return pipe(data(), filter(isProps), map(function (data) { return data.payload; }), dropRepeats(shallowEquals));\r\n    };\r\n};\r\nvar createComponent = function (getProp, dataObservable, pushEvent, decoratedProps) {\r\n    var data = function () { return fromObs(dataObservable); };\r\n    return __assign({ observe: getObserve(getProp, data, decoratedProps) }, getComponentBase(data(), pushEvent));\r\n};\n\nvar configureComponent = function (aperture, instance, isValidElement$$1, isComponentClass, handler, errorHandler, mergeProps, decorateProps) {\r\n    if (isValidElement$$1 === void 0) { isValidElement$$1 = function () { return false; }; }\r\n    if (isComponentClass === void 0) { isComponentClass = function () { return false; }; }\r\n    instance.state = {\r\n        renderEffect: false,\r\n        children: null,\r\n        props: {}\r\n    };\r\n    var setState = function (state) {\r\n        if (instance.unmounted) {\r\n            return;\r\n        }\r\n        if (instance.mounted) {\r\n            instance.setState(state);\r\n        }\r\n        else {\r\n            instance.state = __assign({}, instance.state, state);\r\n        }\r\n    };\r\n    var finalHandler = function (initialProps, initialContext) {\r\n        var effectHandler = handler\r\n            ? handler(initialProps, initialContext)\r\n            : function () { return void 0; };\r\n        return function (effect) {\r\n            if (isValidElement$$1(effect)) {\r\n                setState({\r\n                    renderEffect: true,\r\n                    children: effect\r\n                });\r\n            }\r\n            else if (effect && effect.type === PROPS_EFFECT) {\r\n                var payload = effect.payload;\r\n                setState({\r\n                    replace: payload.replace,\r\n                    props: mergeProps\r\n                        ? __assign({}, instance.state.props, payload.props) : payload.props\r\n                });\r\n            }\r\n            else {\r\n                effectHandler(effect);\r\n            }\r\n        };\r\n    };\r\n    var decoratedProps = {};\r\n    var listeners = [];\r\n    var addListener = function (listener) {\r\n        listeners = listeners.concat(listener);\r\n    };\r\n    var removeListener = function (listener) {\r\n        listeners = listeners.filter(function (l) { return l !== listener; });\r\n    };\r\n    var pushEvent = function (eventName) { return function (val) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createEventData(eventName, val));\r\n        });\r\n    }; };\r\n    var decorateProp = function (container, prop, propName) {\r\n        if (propName === 'children' || isComponentClass(prop)) {\r\n            return;\r\n        }\r\n        container[propName] = function () {\r\n            var args = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                args[_i] = arguments[_i];\r\n            }\r\n            listeners.forEach(function (listener) {\r\n                listener.next(createCallbackData(propName, args));\r\n            });\r\n            return prop.apply(void 0, args);\r\n        };\r\n    };\r\n    if (decorateProps) {\r\n        Object.keys(instance.props).forEach(function (propName) {\r\n            if (typeof instance.props[propName] === 'function') {\r\n                decorateProp(decoratedProps, instance.props[propName], propName);\r\n            }\r\n        });\r\n    }\r\n    var dataObservable = (_a = {\r\n            subscribe: function (listener) {\r\n                addListener(listener);\r\n                listener.next(createPropsData(instance.props));\r\n                return { unsubscribe: function () { return removeListener(listener); } };\r\n            }\r\n        },\r\n        _a[symbol_observable__WEBPACK_IMPORTED_MODULE_1__[\"default\"]] = function () {\r\n            return this;\r\n        },\r\n        _a);\r\n    var component = createComponent(function (propName) { return instance.props[propName]; }, dataObservable, pushEvent, decorateProps);\r\n    var sinkObservable = aperture(component, instance.props, instance.context);\r\n    var sinkSubscription = subscribeToSink(sinkObservable, finalHandler(instance.props, instance.context), errorHandler\r\n        ? errorHandler(instance.props, instance.context)\r\n        : undefined);\r\n    instance.reDecorateProps = function (nextProps) {\r\n        if (decorateProps) {\r\n            Object.keys(nextProps).forEach(function (propName) {\r\n                if (typeof instance.props[propName] === 'function' &&\r\n                    nextProps[propName] !== instance.props[propName]) {\r\n                    decorateProp(decoratedProps, nextProps[propName], propName);\r\n                }\r\n            });\r\n        }\r\n    };\r\n    instance.pushProps = function (props) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createPropsData(props));\r\n        });\r\n    };\r\n    instance.triggerMount = function () {\r\n        pushEvent(MOUNT_EVENT)();\r\n    };\r\n    instance.triggerUnmount = function () {\r\n        pushEvent(UNMOUNT_EVENT)();\r\n        sinkSubscription.unsubscribe();\r\n    };\r\n    instance.getChildProps = function () {\r\n        var state = instance.state;\r\n        var stateProps = state.props;\r\n        if (state.replace === true) {\r\n            return __assign({}, stateProps, { pushEvent: pushEvent });\r\n        }\r\n        var additionalProps = __assign({}, decoratedProps, { pushEvent: pushEvent });\r\n        if (state.replace === false) {\r\n            return __assign({}, instance.props, additionalProps, stateProps);\r\n        }\r\n        return __assign({}, instance.props, additionalProps);\r\n    };\r\n    instance.havePropsChanged = function (newProps, newState) {\r\n        var state = instance.state;\r\n        if (state.renderEffect) {\r\n            return state.children !== newState.children;\r\n        }\r\n        var haveStatePropsChanged = !shallowEquals(state.props, newState.props);\r\n        if (newState.replace === true) {\r\n            return haveStatePropsChanged;\r\n        }\r\n        var havePropsChanged = !shallowEquals(instance.props, newProps);\r\n        if (newState.replace === false) {\r\n            return havePropsChanged || haveStatePropsChanged;\r\n        }\r\n        return havePropsChanged;\r\n    };\r\n    var _a;\r\n};\n\nvar isComponentClass = function (ComponentClass) {\r\n    return Boolean(ComponentClass &&\r\n        ComponentClass.prototype &&\r\n        ComponentClass.prototype.isReactComponent);\r\n};\r\nvar Empty = function () { return null; };\r\nvar withEffects = function (aperture, config) {\r\n    if (config === void 0) { config = {}; }\r\n    return function (BaseComponent) {\r\n        if (BaseComponent === void 0) { BaseComponent = Empty; }\r\n        return _a = /** @class */ (function (_super) {\r\n                __extends(WithEffects, _super);\r\n                function WithEffects(props, context) {\r\n                    var _this = _super.call(this, props, context) || this;\r\n                    _this.mounted = false;\r\n                    _this.unmounted = false;\r\n                    configureComponent(aperture, _this, react__WEBPACK_IMPORTED_MODULE_2__[\"isValidElement\"], isComponentClass, config.handler, config.errorHandler, config.mergeProps, config.decorateProps !== false);\r\n                    return _this;\r\n                }\r\n                WithEffects.prototype.componentDidMount = function () {\r\n                    this.mounted = true;\r\n                    this.triggerMount();\r\n                };\r\n                WithEffects.prototype.componentWillReceiveProps = function (nextProps) {\r\n                    this.reDecorateProps(nextProps);\r\n                    this.pushProps(nextProps);\r\n                };\r\n                WithEffects.prototype.shouldComponentUpdate = function (nextProps, nextState) {\r\n                    return this.havePropsChanged(nextProps, nextState);\r\n                };\r\n                WithEffects.prototype.componentWillUnmount = function () {\r\n                    this.unmounted = true;\r\n                    this.triggerUnmount();\r\n                };\r\n                WithEffects.prototype.render = function () {\r\n                    if (this.state.children) {\r\n                        return this.state.children;\r\n                    }\r\n                    return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(BaseComponent, this.getChildProps());\r\n                };\r\n                return WithEffects;\r\n            }(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"])),\r\n            _a.contextType = config.Context,\r\n            _a;\r\n        var _a;\r\n    };\r\n};\n\nvar identity = function (arg) { return arg; };\r\nvar compose = function () {\r\n    var fns = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        fns[_i] = arguments[_i];\r\n    }\r\n    if (fns.length === 0) {\r\n        return identity;\r\n    }\r\n    if (fns.length === 1) {\r\n        return fns[0];\r\n    }\r\n    return function (arg) {\r\n        return fns.reduceRight(function (previousResult, fn) { return fn(previousResult); }, arg);\r\n    };\r\n};\n\nvar configureHook = function (aperture, data, handler, errorHandler) {\r\n    if (handler === void 0) { handler = function () { return function () { return void 0; }; }; }\r\n    var returnedData;\r\n    var lastData = data;\r\n    var setComponentData;\r\n    var finalHandler = function (initialData) {\r\n        var effectHandler = handler(initialData);\r\n        return function (effect) {\r\n            if (effect && effect.type === COMPONENT_EFFECT) {\r\n                if (setComponentData) {\r\n                    setComponentData(effect.payload);\r\n                }\r\n                else {\r\n                    returnedData = effect.payload;\r\n                }\r\n            }\r\n            else {\r\n                effectHandler(effect);\r\n            }\r\n        };\r\n    };\r\n    var listeners = [];\r\n    var addListener = function (listener) {\r\n        listeners = listeners.concat(listener);\r\n    };\r\n    var removeListener = function (listener) {\r\n        listeners = listeners.filter(function (l) { return l !== listener; });\r\n    };\r\n    var pushEvent = function (eventName) { return function (val) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createEventData(eventName, val));\r\n        });\r\n    }; };\r\n    var dataObservable = (_a = {\r\n            subscribe: function (listener) {\r\n                addListener(listener);\r\n                listener.next(createPropsData(lastData));\r\n                return { unsubscribe: function () { return removeListener(listener); } };\r\n            }\r\n        },\r\n        _a[symbol_observable__WEBPACK_IMPORTED_MODULE_1__[\"default\"]] = function () {\r\n            return this;\r\n        },\r\n        _a);\r\n    var component = createComponent(function (propName) { return data[propName]; }, dataObservable, pushEvent, false);\r\n    var sinkObservable = aperture(component, data);\r\n    var sinkSubscription = subscribeToSink(sinkObservable, finalHandler(data), errorHandler ? errorHandler(data) : undefined);\r\n    var pushMountEvent = function () {\r\n        pushEvent(MOUNT_EVENT)();\r\n    };\r\n    var pushUnmountEvent = function () {\r\n        pushEvent(UNMOUNT_EVENT)();\r\n    };\r\n    return {\r\n        data: returnedData,\r\n        unsubscribe: function () {\r\n            pushUnmountEvent();\r\n            sinkSubscription.unsubscribe();\r\n        },\r\n        pushMountEvent: pushMountEvent,\r\n        pushData: function (data) {\r\n            lastData = data;\r\n            listeners.forEach(function (listener) {\r\n                listener.next(createPropsData(data));\r\n            });\r\n        },\r\n        registerSetData: function (setData) {\r\n            setComponentData = function (data) { return setData(function (hook) { return (__assign({}, hook, { data: data })); }); };\r\n        }\r\n    };\r\n    var _a;\r\n};\n\n// @ts-ignore\r\nvar useRefract = function (aperture, data, config) {\r\n    if (config === void 0) { config = {}; }\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(configureHook(aperture, data, config.handler, config.errorHandler)), hook = _a[0], setData = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useLayoutEffect\"])(function () {\r\n        hook.registerSetData(setData);\r\n        hook.pushMountEvent();\r\n        return function () { return hook.unsubscribe(); };\r\n    }, []);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\r\n        hook.pushData(data);\r\n    });\r\n    return hook.data;\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/index.es.js?");
    /***/
  },

  /***/
  "./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js":
  /*!******************************************************************************!*\
    !*** ./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js ***!
    \******************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesRefractCallbagNode_modulesCallbagFromObsReadmeJs(module, exports, __webpack_require__) {
    eval("/**\n * callbag-from-obs\n * --------------\n *\n * Convert an observable (or subscribable) to a callbag listenable source.\n *\n * `npm install callbag-from-obs`\n *\n * Example:\n *\n * Convert an RxJS Observable:\n *\n *     const Rx = require('rxjs');\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const source = fromObs(Rx.Observable.interval(1000).take(4));\n *\n *     observe(x => console.log(x)(source); // 0\n *                                          // 1\n *                                          // 2\n *                                          // 3\n *\n * Convert anything that has the `.subscribe` method:\n *\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const subscribable = {\n *       subscribe: (observer) => {\n *         let i = 0;\n *         setInterval(() => observer.next(i++), 1000);\n *       }\n *     };\n *\n *     const source = fromObs(subscribable);\n *\n *     observe(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst $$observable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\").default;\n\nconst fromObs = observable => (start, sink) => {\n  if (start !== 0) return;\n  let dispose;\n  sink(0, t => {\n    if (t === 2 && dispose) {\n      if (dispose.unsubscribe) dispose.unsubscribe();\n      else dispose();\n    }\n  });\n  observable = observable[$$observable] ? observable[$$observable]() : observable;\n  dispose = observable.subscribe({\n    next: x => sink(1, x),\n    error: e => sink(2, e),\n    complete: () => sink(2)\n  });\n};\n\nmodule.exports = fromObs;\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/node_modules/callbag-from-obs/readme.js?");
    /***/
  },

  /***/
  "./node_modules/symbol-observable/es/index.js":
  /*!****************************************************!*\
    !*** ./node_modules/symbol-observable/es/index.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSymbolObservableEsIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");
    /***/
  },

  /***/
  "./node_modules/symbol-observable/es/ponyfill.js":
  /*!*******************************************************!*\
    !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesSymbolObservableEsPonyfillJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/global.js":
  /*!***********************************!*\
    !*** (webpack)/buildin/global.js ***!
    \***********************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinGlobalJs(module, exports) {
    eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");
    /***/
  },

  /***/
  "./node_modules/webpack/buildin/harmony-module.js":
  /*!*******************************************!*\
    !*** (webpack)/buildin/harmony-module.js ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function node_modulesWebpackBuildinHarmonyModuleJs(module, exports) {
    eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");
    /***/
  },

  /***/
  "./packages/vendor/index.js":
  /*!**********************************!*\
    !*** ./packages/vendor/index.js ***!
    \**********************************/

  /*! no exports provided */

  /***/
  function packagesVendorIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.module.js\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ \"./node_modules/@wordpress/api-fetch/build-module/index.js\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! refract-callbag */ \"./node_modules/refract-callbag/index.es.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! callbag-basics */ \"./node_modules/callbag-basics/index.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_14__);\n\n\n/**\n * External dependencies.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n * Prevent the conflicts with WordPress's Underscore lib and other 3rd party plugins.\n */\n\nlodash__WEBPACK_IMPORTED_MODULE_12__[\"noConflict\"]();\n/**\n * Setup the vendor variables used by Carbon Fields.\n */\n\n\nwindow.cf = window.cf || {};\nwindow.cf.vendor = [['react', react__WEBPACK_IMPORTED_MODULE_1___default.a], ['react-dom', react_dom__WEBPACK_IMPORTED_MODULE_2___default.a], ['nanoid', nanoid__WEBPACK_IMPORTED_MODULE_3___default.a], ['immer', immer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]], ['@wordpress/api-fetch', _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__], ['@wordpress/compose', _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__], ['@wordpress/element', _wordpress_element__WEBPACK_IMPORTED_MODULE_7__], ['@wordpress/hooks', _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__], ['@wordpress/data', _wordpress_data__WEBPACK_IMPORTED_MODULE_9__], ['@wordpress/i18n', _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__], ['classnames', classnames__WEBPACK_IMPORTED_MODULE_11__], ['lodash', lodash__WEBPACK_IMPORTED_MODULE_12__], ['refract-callbag', refract_callbag__WEBPACK_IMPORTED_MODULE_13__], ['callbag-basics', callbag_basics__WEBPACK_IMPORTED_MODULE_14__]].reduce(function (vendors, _ref) {\n  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n      key = _ref2[0],\n      implementation = _ref2[1];\n\n  vendors[key] = implementation;\n  return vendors;\n}, {});\n/**\n * Setup the enviroment variables used by Carbon Fields.\n */\n\nwindow.cf.hooks = _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__;\nwindow.cf.element = _wordpress_element__WEBPACK_IMPORTED_MODULE_7__;\n\n//# sourceURL=webpack:///./packages/vendor/index.js?");
    /***/
  },

  /***/
  "@wordpress/compose":
  /*!*********************************!*\
    !*** external ["wp","compose"] ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function wordpressCompose(module, exports) {
    eval("module.exports = wp[\"compose\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22compose%22%5D?");
    /***/
  },

  /***/
  "@wordpress/data":
  /*!******************************!*\
    !*** external ["wp","data"] ***!
    \******************************/

  /*! no static exports found */

  /***/
  function wordpressData(module, exports) {
    eval("module.exports = wp[\"data\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22data%22%5D?");
    /***/
  },

  /***/
  "@wordpress/element":
  /*!*********************************!*\
    !*** external ["wp","element"] ***!
    \*********************************/

  /*! no static exports found */

  /***/
  function wordpressElement(module, exports) {
    eval("module.exports = wp[\"element\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22element%22%5D?");
    /***/
  },

  /***/
  "@wordpress/hooks":
  /*!*******************************!*\
    !*** external ["wp","hooks"] ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function wordpressHooks(module, exports) {
    eval("module.exports = wp[\"hooks\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22hooks%22%5D?");
    /***/
  },

  /***/
  "@wordpress/i18n":
  /*!******************************!*\
    !*** external ["wp","i18n"] ***!
    \******************************/

  /*! no static exports found */

  /***/
  function wordpressI18n(module, exports) {
    eval("module.exports = wp[\"i18n\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22i18n%22%5D?");
    /***/
  },

  /***/
  "lodash":
  /*!*************************!*\
    !*** external "lodash" ***!
    \*************************/

  /*! no static exports found */

  /***/
  function lodash(module, exports) {
    eval("module.exports = lodash;\n\n//# sourceURL=webpack:///external_%22lodash%22?");
    /***/
  },

  /***/
  "react":
  /*!************************!*\
    !*** external "React" ***!
    \************************/

  /*! no static exports found */

  /***/
  function react(module, exports) {
    eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");
    /***/
  },

  /***/
  "react-dom":
  /*!***************************!*\
    !*** external "ReactDOM" ***!
    \***************************/

  /*! no static exports found */

  /***/
  function reactDom(module, exports) {
    eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");
    /***/
  }
  /******/

});