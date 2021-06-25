module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/layouts/DefaultLayout.jsx":
/*!**********************************************!*\
  !*** ./components/layouts/DefaultLayout.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_Head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Head */ "./components/layouts/modules/Head.jsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Fateh\\THE FATEH\\themeforest-Wn8tK53x-martfury-multipurpose-marketplace-react-ecommerce-template\\martfury_react_package_2_1_0\\react-app\\components\\layouts\\DefaultLayout.jsx";





const DefaultLayout = ({
  children
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
  className: "layout--default",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_Head__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: "loader-wrapper",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loader-section section-left"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "loader-section section-right"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["BackTop"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: "ps-btn--backtop",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "icon-arrow-up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/modules/Head.jsx":
/*!*********************************************!*\
  !*** ./components/layouts/modules/Head.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Fateh\\THE FATEH\\themeforest-Wn8tK53x-martfury-multipurpose-marketplace-react-ecommerce-template\\martfury_react_package_2_1_0\\react-app\\components\\layouts\\modules\\Head.jsx";



const StyleSheets = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
    children: "Martfury - React eCommerce Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "shortcut icon",
    href: "/static/img/favi.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "32x32"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "icon",
    href: "/static/img/favi.png",
    sizes: "192x192"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "apple-touch-icon-precomposed",
    href: "/static/img/favi.png"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "IE=edge"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "format-detection",
    content: "telephone=no"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "apple-mobile-web-app-capable",
    content: "yes"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "author",
    content: "nouthemes"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "keywords",
    content: "Martfury, React, eCommerce, Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
    name: "description",
    content: "Martfury - React eCommerce Template"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    href: "https://fonts.googleapis.com/css?family=Work+Sans:300,400,500,600,700&amp;subset=latin-ext",
    rel: "stylesheet"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    href: "/static/fonts/Linearicons/Font/demo-files/demo.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    href: "/static/fonts/font-awesome/css/font-awesome.min.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/bootstrap.min.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/css/slick.min.css"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 5
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (StyleSheets);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://nextjs.org/docs/messages/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://nextjs.org/docs/messages/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/store */ "./store/store.js");
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ~/components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout.jsx");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ~/scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _scss_home_default_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ~/scss/home-default.scss */ "./scss/home-default.scss");
/* harmony import */ var _scss_home_default_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_home_default_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _scss_market_place_1_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ~/scss/market-place-1.scss */ "./scss/market-place-1.scss");
/* harmony import */ var _scss_market_place_1_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_1_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _scss_market_place_2_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ~/scss/market-place-2.scss */ "./scss/market-place-2.scss");
/* harmony import */ var _scss_market_place_2_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_2_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _scss_market_place_3_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ~/scss/market-place-3.scss */ "./scss/market-place-3.scss");
/* harmony import */ var _scss_market_place_3_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_3_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _scss_market_place_4_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ~/scss/market-place-4.scss */ "./scss/market-place-4.scss");
/* harmony import */ var _scss_market_place_4_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_scss_market_place_4_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _scss_electronic_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ~/scss/electronic.scss */ "./scss/electronic.scss");
/* harmony import */ var _scss_electronic_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_scss_electronic_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _scss_furniture_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ~/scss/furniture.scss */ "./scss/furniture.scss");
/* harmony import */ var _scss_furniture_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_scss_furniture_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _scss_organic_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ~/scss/organic.scss */ "./scss/organic.scss");
/* harmony import */ var _scss_organic_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_scss_organic_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _scss_technology_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ~/scss/technology.scss */ "./scss/technology.scss");
/* harmony import */ var _scss_technology_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_scss_technology_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _scss_autopart_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ~/scss/autopart.scss */ "./scss/autopart.scss");
/* harmony import */ var _scss_autopart_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_scss_autopart_scss__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ~/scss/custom.scss */ "./scss/custom.scss");
/* harmony import */ var _scss_custom_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_scss_custom_scss__WEBPACK_IMPORTED_MODULE_21__);

var _jsxFileName = "D:\\Fateh\\THE FATEH\\themeforest-Wn8tK53x-martfury-multipurpose-marketplace-react-ecommerce-template\\martfury_react_package_2_1_0\\react-app\\pages\\_app.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistStore"])(props.store);
  }

  componentDidMount() {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
    this.setState({
      open: true
    });
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;

    const getLayout = Component.getLayout || (page => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: page
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 24
    }, this));

    return getLayout( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: store,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_7__["PersistGate"], {
        loading: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 30
        }, this),
        persistor: this.persistor,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_4___default()(_store_store__WEBPACK_IMPORTED_MODULE_8__["default"])(next_redux_saga__WEBPACK_IMPORTED_MODULE_5___default()(MyApp)));

/***/ }),

/***/ "./public/static/data/blog-grid.json":
/*!*******************************************!*\
  !*** ./public/static/data/blog-grid.json ***!
  \*******************************************/
/*! exports provided: blogCategories, postFeatures, posts, recentPosts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"blogCategories\":[{\"id\":\"1\",\"text\":\"Business\"},{\"id\":\"2\",\"text\":\"Entertaiment\"},{\"id\":\"3\",\"text\":\"Fashion\"},{\"id\":\"4\",\"text\":\"Life style\"},{\"id\":\"5\",\"text\":\"Others\"},{\"id\":\"6\",\"text\":\"Technology\"},{\"id\":\"7\",\"text\":\"Others\"}],\"postFeatures\":{\"id\":\"1\",\"title\":\"Harman Kadon Onyx Studio Mini, Reviews & Experiences\",\"thumbnail\":\"/static/img/blog/grid/large.jpg\",\"type\":\"large\",\"categories\":[\"Technology\"]},\"posts\":[{\"id\":\"2\",\"title\":\"Experience Great Sound With Beats’s Headphone\",\"thumbnail\":\"/static/img/blog/grid/1.jpg\",\"type\":\"normal\",\"badge\":\"icon-volume-high\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"},{\"id\":\"6\",\"text\":\"Technology\"}]},{\"id\":\"3\",\"title\":\"Products Necessery For Mom\",\"thumbnail\":\"/static/img/blog/grid/2.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"4\",\"title\":\"Home Interior: Modern Style 2017\",\"thumbnail\":\"/static/img/blog/grid/3.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"5\",\"title\":\"DeerCo – A New Look About Startup In Product Manufacture Field7\",\"thumbnail\":\"/static/img/blog/grid/4.jpg\",\"type\":\"normal\",\"badge\":\"icon-picture\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"}]},{\"id\":\"6\",\"title\":\"B&O Play – Best Headphone For You\",\"thumbnail\":\"/static/img/blog/grid/5.jpg\",\"type\":\"normal\",\"badge\":\"icon-camera-play\",\"categories\":[{\"id\":\"6\",\"text\":\"Technology\"}]},{\"id\":\"7\",\"title\":\"Unique Products For Your Kitchen From IKEA Design\",\"thumbnail\":\"/static/img/blog/grid/6.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"1\",\"text\":\"Business\"},{\"id\":\"6\",\"text\":\"Technology\"}]}],\"recentPosts\":[{\"id\":\"3\",\"title\":\"Products Necessery For Mom\",\"thumbnail\":\"/static/img/blog/grid/2.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"4\",\"title\":\"Home Interior: Modern Style 2017\",\"thumbnail\":\"/static/img/blog/grid/3.jpg\",\"type\":\"normal\",\"categories\":[{\"id\":\"4\",\"text\":\"Life style\"}]},{\"id\":\"5\",\"title\":\"DeerCo – A New Look About Startup In Product Manufacture Field7\",\"thumbnail\":\"/static/img/blog/grid/4.jpg\",\"type\":\"normal\",\"badge\":\"icon-picture\",\"categories\":[{\"id\":\"2\",\"text\":\"Entertaiment\"}]},{\"id\":\"6\",\"title\":\"B&O Play – Best Headphone For You\",\"thumbnail\":\"/static/img/blog/grid/5.jpg\",\"type\":\"normal\",\"badge\":\"icon-camera-play\",\"categories\":[{\"id\":\"6\",\"text\":\"Technology\"}]}]}");

/***/ }),

/***/ "./repositories/CollectionRepository.js":
/*!**********************************************!*\
  !*** ./repositories/CollectionRepository.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class CollectionRepository {
  async getCollections(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/collections?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getCategoriesBySlug(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/product-categories?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCollectionSlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/collections?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getProductsByCategorySlug(slug) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/product-categories?slug_in=${slug}`).then(response => {
      if (response.data && response.data.length > 0) {
        return {
          items: response.data[0].products
        };
      } else {
        return null;
      }

      return response.data;
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new CollectionRepository());

/***/ }),

/***/ "./repositories/MediaRepository.js":
/*!*****************************************!*\
  !*** ./repositories/MediaRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/product-helper */ "./utilities/product-helper.js");



class MediaRespository {
  async getBannersBySlugs(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/banners?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBannersBySlug(payload) {
    const endPoint = `banners?slug_in=${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/${endPoint}`).then(response => {
      if (response.data) {
        return response.data[0].items;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPromotionsBySlug(payload) {
    const endPoint = `promotions?slug_in=${payload}`;
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/${endPoint}`).then(response => {
      if (response.data) {
        return response.data[0].items;
      } else {
        return null;
      }
    }).catch(error => {
      console.log(JSON.stringify(error));
      return null;
    });
    return reponse;
  }

  async getPromotionsBySlugs(payload) {
    const query = Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_1__["convertSlugsQueryString"])(payload);
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/promotions?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new MediaRespository());

/***/ }),

/***/ "./repositories/ProductRepository.js":
/*!*******************************************!*\
  !*** ./repositories/ProductRepository.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Repository */ "./repositories/Repository.js");


class ProductRepository {
  async getRecords(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__["serializeQuery"])(params)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProducts(params) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__["serializeQuery"])(params)}`).then(response => {
      return {
        items: response.data,
        totalItems: response.data.length
      };
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getBrands() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/brands`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductCategories() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/product-categories`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getTotalRecords() {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/products/count`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsById(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/products/${payload}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByCategory(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/product-categories?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrand(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/brands?slug=${payload}`).then(response => {
      if (response.data) {
        if (response.data.length > 0) {
          return response.data[0];
        }
      } else {
        return null;
      }
    }).catch(() => {
      return null;
    });
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByBrands(payload) {
    let query = '';
    payload.forEach(item => {
      if (query === '') {
        query = `id_in=${item}`;
      } else {
        query = query + `&id_in=${item}`;
      }
    });
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/brands?${query}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

  async getProductsByPriceRange(payload) {
    const reponse = await _Repository__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_Repository__WEBPACK_IMPORTED_MODULE_0__["baseUrl"]}/products?${Object(_Repository__WEBPACK_IMPORTED_MODULE_0__["serializeQuery"])(payload)}`).then(response => {
      return response.data;
    }).catch(error => ({
      error: JSON.stringify(error)
    }));
    return reponse;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new ProductRepository());

/***/ }),

/***/ "./repositories/Repository.js":
/*!************************************!*\
  !*** ./repositories/Repository.js ***!
  \************************************/
/*! exports provided: basePostUrl, baseStoreURL, customHeaders, baseUrl, default, serializeQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basePostUrl", function() { return basePostUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseStoreURL", function() { return baseStoreURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customHeaders", function() { return customHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeQuery", function() { return serializeQuery; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const baseDomain = 'https://beta.apinouthemes.com'; // API for products

const basePostUrl = 'https://beta.apinouthemes.com'; // API for post

const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

const customHeaders = {
  Accept: 'application/json'
};
const baseUrl = `${baseDomain}`;
/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseUrl,
  headers: customHeaders
}));
const serializeQuery = query => {
  return Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`).join('&');
};

/***/ }),

/***/ "./scss/autopart.scss":
/*!****************************!*\
  !*** ./scss/autopart.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/custom.scss":
/*!**************************!*\
  !*** ./scss/custom.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/electronic.scss":
/*!******************************!*\
  !*** ./scss/electronic.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/furniture.scss":
/*!*****************************!*\
  !*** ./scss/furniture.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/home-default.scss":
/*!********************************!*\
  !*** ./scss/home-default.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/market-place-1.scss":
/*!**********************************!*\
  !*** ./scss/market-place-1.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/market-place-2.scss":
/*!**********************************!*\
  !*** ./scss/market-place-2.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/market-place-3.scss":
/*!**********************************!*\
  !*** ./scss/market-place-3.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/market-place-4.scss":
/*!**********************************!*\
  !*** ./scss/market-place-4.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/organic.scss":
/*!***************************!*\
  !*** ./scss/organic.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/technology.scss":
/*!******************************!*\
  !*** ./scss/technology.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/app/action.js":
/*!*****************************!*\
  !*** ./store/app/action.js ***!
  \*****************************/
/*! exports provided: actionTypes, switchDemoPanel, switchDemoPanelSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchDemoPanel", function() { return switchDemoPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "switchDemoPanelSuccess", function() { return switchDemoPanelSuccess; });
const actionTypes = {
  SWITCH_DEMO_PANEL: 'SWITCH_DEMO_PANEL',
  SWITCH_DEMO_PANEL_SUCCESS: 'SWITCH_DEMO_PANEL_SUCCESS'
};
function switchDemoPanel(payload) {
  return {
    type: actionTypes.SWITCH_DEMO_PANEL,
    payload
  };
}
function switchDemoPanelSuccess(payload) {
  return {
    type: actionTypes.SWITCH_DEMO_PANEL_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/app/reducer.js":
/*!******************************!*\
  !*** ./store/app/reducer.js ***!
  \******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/app/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isShowDemoPanel: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].SWITCH_DEMO_PANEL_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isShowDemoPanel: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/app/saga.js":
/*!***************************!*\
  !*** ./store/app/saga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/app/action.js");



function* switchDemoPanel({
  payload
}) {
  try {
    console.log(payload.payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["switchDemoPanelSuccess"])(payload));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].SWITCH_DEMO_PANEL, switchDemoPanel)]);
}

/***/ }),

/***/ "./store/auth/action.js":
/*!******************************!*\
  !*** ./store/auth/action.js ***!
  \******************************/
/*! exports provided: actionTypes, login, loginSuccess, logOut, logOutSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOut", function() { return logOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutSuccess", function() { return logOutSuccess; });
const actionTypes = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGOUT: 'LOGOUT',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION'
};
function login() {
  return {
    type: actionTypes.LOGIN_REQUEST
  };
}
function loginSuccess() {
  return {
    type: actionTypes.LOGIN_SUCCESS
  };
}
function logOut() {
  return {
    type: actionTypes.LOGOUT
  };
}
function logOutSuccess() {
  return {
    type: actionTypes.LOGOUT_SUCCESS
  };
}

/***/ }),

/***/ "./store/auth/reducer.js":
/*!*******************************!*\
  !*** ./store/auth/reducer.js ***!
  \*******************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  isLoggedIn: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGIN_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: true
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].LOGOUT_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        isLoggedIn: false
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/auth/saga.js":
/*!****************************!*\
  !*** ./store/auth/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/auth/action.js");




const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Wellcome back',
    description: 'You are login successful!'
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Good bye!',
    description: 'Your account has been logged out!'
  });
};

function* loginSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"])());
    modalSuccess('success');
  } catch (err) {
    console.log(err);
  }
}

function* logOutSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["logOutSuccess"])());
    modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].LOGIN_REQUEST, loginSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].LOGOUT, logOutSaga)]);
}

/***/ }),

/***/ "./store/cart/action.js":
/*!******************************!*\
  !*** ./store/cart/action.js ***!
  \******************************/
/*! exports provided: actionTypes, getCart, getCartSuccess, getCartError, addItem, removeItem, increaseItemQty, decreaseItemQty, updateCartSuccess, updateCartError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCart", function() { return getCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartSuccess", function() { return getCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCartError", function() { return getCartError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseItemQty", function() { return increaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseItemQty", function() { return decreaseItemQty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartSuccess", function() { return updateCartSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCartError", function() { return updateCartError; });
const actionTypes = {
  GET_CART: 'GET_CART',
  GET_CART_SUCCESS: 'GET_CART_SUCCESS',
  GET_CART_ERROR: 'GET_CART_ERROR',
  GET_CART_TOTAL_QUANTITY: 'GET_CART_TOTAL_QUANTITY',
  GET_CART_TOTAL_QUANTITY_SUCCESS: 'GET_CART_TOTAL_QUANTITY_SUCCESS',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
  CLEAR_CART_SUCCESS: 'CLEAR_CART_SUCCESS',
  CLEAR_CART_ERROR: 'CLEAR_CART_ERROR',
  INCREASE_QTY: 'INCREASE_QTY',
  INCREASE_QTY_SUCCESS: 'INCREASE_QTY_SUCCESS',
  INCREASE_QTY_ERROR: 'INCREASE_QTY_ERROR',
  DECREASE_QTY: 'DECREASE_QTY',
  UPDATE_CART: 'UPDATE_CART',
  UPDATE_CART_SUCCESS: 'UPDATE_CART_SUCCESS',
  UPDATE_CART_ERROR: 'UPDATE_CART_ERROR'
};
function getCart() {
  return {
    type: actionTypes.GET_CART
  };
}
function getCartSuccess() {
  return {
    type: actionTypes.GET_CART_SUCCESS
  };
}
function getCartError(error) {
  return {
    type: actionTypes.GET_CART_ERROR,
    error
  };
}
function addItem(product) {
  return {
    type: actionTypes.ADD_ITEM,
    product
  };
}
function removeItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM,
    product
  };
}
function increaseItemQty(product) {
  return {
    type: actionTypes.INCREASE_QTY,
    product
  };
}
function decreaseItemQty(product) {
  return {
    type: actionTypes.DECREASE_QTY,
    product
  };
}
function updateCartSuccess(payload) {
  return {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload
  };
}
function updateCartError(payload) {
  return {
    type: actionTypes.UPDATE_CART_ERROR,
    payload
  };
}

/***/ }),

/***/ "./store/cart/reducer.js":
/*!*******************************!*\
  !*** ./store/cart/reducer.js ***!
  \*******************************/
/*! exports provided: initCart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCart", function() { return initCart; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/cart/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCart = {
  cartItems: [],
  amount: 0,
  cartTotal: 0
};

function reducer(state = initCart, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_CART_SUCCESS:
      return _objectSpread({}, state);

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_CART_SUCCESS:
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CLEAR_CART_SUCCESS:
      return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, state), {
        cartItems: action.payload.cartItems
      }), {
        amount: action.payload.amount
      }), {
        cartTotal: action.payload.cartTotal
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_CART_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_CART_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/cart/saga.js":
/*!****************************!*\
  !*** ./store/cart/saga.js ***!
  \****************************/
/*! exports provided: calculateAmount, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateAmount", function() { return calculateAmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/cart/action.js");




const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Success',
    description: 'This product has been added to your cart!',
    duration: 1
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Remove A Item',
    description: 'This product has been removed from your cart!',
    duration: 1
  });
};

const calculateAmount = obj => Object.values(obj).reduce((acc, {
  quantity,
  price
}) => acc + quantity * price, 0).toFixed(2);

function* getCartSaga() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCartSuccess"])());
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCartError"])(err));
  }
}

function* addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    const localCart = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    let currentCart = JSON.parse(localCart);
    let existItem = currentCart.cartItems.find(item => item.id === product.id);

    if (existItem) {
      existItem.quantity += product.quantity;
    } else {
      if (!product.quantity) {
        product.quantity = 1;
      }

      currentCart.cartItems.push(product);
    }

    currentCart.amount = calculateAmount(currentCart.cartItems);
    currentCart.cartTotal++;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCartSuccess"])(currentCart));
    modalSuccess('success');
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCartError"])(err));
  }
}

function* removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let index = localCart.cartItems.findIndex(item => item.id === product.id);
    localCart.cartTotal = localCart.cartTotal - product.quantity;
    localCart.cartItems.splice(index, 1);
    localCart.amount = calculateAmount(localCart.cartItems);

    if (localCart.cartItems.length === 0) {
      localCart.cartItems = [];
      localCart.amount = 0;
      localCart.cartTotal = 0;
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCartSuccess"])(localCart));
    modalWarning('warning');
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCartError"])(err));
  }
}

function* increaseQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity++;
      localCart.cartTotal++;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCartSuccess"])(localCart));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCartError"])(err));
  }
}

function* decreaseItemQtySaga(payload) {
  try {
    const {
      product
    } = payload;
    const localCart = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).cart);
    let selectedItem = localCart.cartItems.find(item => item.id === product.id);

    if (selectedItem) {
      selectedItem.quantity--;
      localCart.cartTotal--;
      localCart.amount = calculateAmount(localCart.cartItems);
    }

    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCartSuccess"])(localCart));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCartError"])(err));
  }
}

function* clearCartSaga() {
  try {
    const emptyCart = {
      cartItems: [],
      amount: 0,
      cartTotal: 0
    };
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCartSuccess"])(emptyCart));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCartError"])(err));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_CART, getCartSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].ADD_ITEM, addItemSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].REMOVE_ITEM, removeItemSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].INCREASE_QTY, increaseQtySaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].DECREASE_QTY, decreaseItemQtySaga)]);
}

/***/ }),

/***/ "./store/collection/action.js":
/*!************************************!*\
  !*** ./store/collection/action.js ***!
  \************************************/
/*! exports provided: actionTypes, getCollections, getCollectionsSuccess, getCategories, getCategoriesSuccess, getCollection, getCollectionSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollections", function() { return getCollections; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionsSuccess", function() { return getCollectionsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategoriesSuccess", function() { return getCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollectionSuccess", function() { return getCollectionSuccess; });
const actionTypes = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTIONS_SUCCESS: 'GET_COLLECTIONS_SUCCESS',
  GET_COLLECTION: 'GET_COLLECTION',
  GET_COLLECTION_SUCCESS: 'GET_COLLECTION_SUCCESS',
  GET_CATEGORIES: 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'GET_CATEGORIES_SUCCESS'
};
function getCollections(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionsSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}
function getCategories(payload) {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload
  };
}
function getCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload
  };
}
function getCollection(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS,
    payload
  };
}
function getCollectionSuccess(payload) {
  return {
    type: actionTypes.GET_COLLECTIONS_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/collection/reducer.js":
/*!*************************************!*\
  !*** ./store/collection/reducer.js ***!
  \*************************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/collection/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  collections: [],
  categories: [],
  collection: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_COLLECTIONS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        collections: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_COLLECTION_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        collection: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_CATEGORIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        categories: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/collection/saga.js":
/*!**********************************!*\
  !*** ./store/collection/saga.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/collection/action.js");
/* harmony import */ var _repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repositories/CollectionRepository */ "./repositories/CollectionRepository.js");




Object(es6_promise__WEBPACK_IMPORTED_MODULE_1__["polyfill"])();

function* getCollections({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getCollections, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCollectionsSuccess"])(data));
  } catch (err) {
    console.log(err);
  }
}

function* getCollectionByCategories({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_CollectionRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getCategoriesBySlug, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCategoriesSuccess"])(data));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_COLLECTIONS, getCollections)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_CATEGORIES, getCollectionByCategories)]);
}

/***/ }),

/***/ "./store/compare/action.js":
/*!*********************************!*\
  !*** ./store/compare/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, getCompareList, getCompareListSuccess, addItemToCompare, removeCompareItem, clearCompare, updateCompareListSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompareList", function() { return getCompareList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompareListSuccess", function() { return getCompareListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToCompare", function() { return addItemToCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCompareItem", function() { return removeCompareItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCompare", function() { return clearCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCompareListSuccess", function() { return updateCompareListSuccess; });
const actionTypes = {
  GET_COMPARE_LIST: 'GET_COMPARE_LIST',
  GET_COMPARE_LIST_SUCCESS: 'GET_COMPARE_LIST_SUCCESS',
  GET_COMPARE_LIST_ERROR: 'GET_COMPARE_LIST_ERROR',
  ADD_ITEM_COMPARE: 'ADD_ITEM_COMPARE',
  REMOVE_ITEM_COMPARE: 'REMOVE_ITEM_COMPARE',
  UPDATE_COMPARE_LIST: 'UPDATE_COMPARE_LIST',
  UPDATE_COMPARE_LIST_SUCCESS: 'UPDATE_COMPARE_LIST_SUCCESS',
  UPDATE_COMPARE_LIST_ERROR: 'UPDATE_COMPARE_LIST_ERROR',
  CLEAR_COMPARE_LIST: 'CLEAR_COMPARE_LIST'
};
function getCompareList() {
  return {
    type: actionTypes.GET_COMPARE_LIST
  };
}
function getCompareListSuccess(data) {
  return {
    type: actionTypes.GET_COMPARE_LIST_SUCCESS,
    data
  };
}
function addItemToCompare(product) {
  return {
    type: actionTypes.ADD_ITEM_COMPARE,
    product
  };
}
function removeCompareItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_COMPARE,
    product
  };
}
function clearCompare() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateCompareListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_COMPARE_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/compare/reducer.js":
/*!**********************************!*\
  !*** ./store/compare/reducer.js ***!
  \**********************************/
/*! exports provided: initCart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCart", function() { return initCart; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/compare/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initCart = {
  compareItems: [],
  compareTotal: 0
};

function reducer(state = initCart, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_COMPARE_LIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        cart: action.data
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_COMPARE_LIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        compareItems: action.payload.compareItems,
        compareTotal: action.payload.compareTotal
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_COMPARE_LIST_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/compare/saga.js":
/*!*******************************!*\
  !*** ./store/compare/saga.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/compare/action.js");




const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Added to compare list!',
    description: 'This product has been added to compare list!'
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Removed to compare list',
    description: 'This product has been removed from compare list!'
  });
};

function* getCompareListSaga() {
  try {
    const localCompareList = JSON.parse(localStorage.getItem('persist:martfury')).cart;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getCompareListSuccess"])(localCompareList));
  } catch (err) {
    console.log(err);
  }
}

function* addItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let existItem = localCompare.compareItems.find(item => item.id === product.id);

    if (!existItem) {
      product.quantity = 1;
      localCompare.compareItems.push(product);
      localCompare.compareTotal++;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCompareListSuccess"])(localCompare));
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeItemSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localCompare = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).compare);
    let index = localCompare.compareItems.indexOf(product);
    localCompare.compareTotal = localCompare.compareTotal - 1;
    localCompare.compareItems.splice(index, 1);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCompareListSuccess"])(localCompare));
    modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearCompareListSaga() {
  try {
    const emptyCart = {
      compareItems: [],
      compareTotal: 0
    };
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateCompareListSuccess"])(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_COMPARE_LIST, getCompareListSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].ADD_ITEM_COMPARE, addItemSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].REMOVE_ITEM_COMPARE, removeItemSaga)]);
}

/***/ }),

/***/ "./store/media/action.js":
/*!*******************************!*\
  !*** ./store/media/action.js ***!
  \*******************************/
/*! exports provided: actionTypes, getBannersBySlugs, getBannersSuccess, getPromotionsBySlugs, getPromotionsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannersBySlugs", function() { return getBannersBySlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBannersSuccess", function() { return getBannersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromotionsBySlugs", function() { return getPromotionsBySlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromotionsSuccess", function() { return getPromotionsSuccess; });
const actionTypes = {
  GET_BANNERS: 'GET_BANNERS',
  GET_BANNERS_SUCCESS: 'GET_BANNERS_SUCCESS',
  GET_PROMOTIONS: 'GET_PROMOTIONS',
  GET_PROMOTIONS_SUCCESS: 'GET_PROMOTIONS_SUCCESS'
};
function getBannersBySlugs(payload) {
  return {
    type: actionTypes.GET_BANNERS,
    payload
  };
}
function getBannersSuccess(payload) {
  return {
    type: actionTypes.GET_BANNERS_SUCCESS,
    payload
  };
}
function getPromotionsBySlugs(payload) {
  return {
    type: actionTypes.GET_PROMOTIONS,
    payload
  };
}
function getPromotionsSuccess(payload) {
  return {
    type: actionTypes.GET_PROMOTIONS_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/media/reducer.js":
/*!********************************!*\
  !*** ./store/media/reducer.js ***!
  \********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/media/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  banners: [],
  promotions: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_BANNERS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        banners: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_PROMOTIONS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        promotions: action.payload
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/media/saga.js":
/*!*****************************!*\
  !*** ./store/media/saga.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/media/action.js");
/* harmony import */ var _repositories_MediaRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../repositories/MediaRepository */ "./repositories/MediaRepository.js");




Object(es6_promise__WEBPACK_IMPORTED_MODULE_1__["polyfill"])();

function* getBannersBySlugs({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_MediaRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getBannersBySlugs, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getBannersSuccess"])(data));
  } catch (err) {
    console.log(err);
  }
}

function* getPromotionsBySlugs({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_MediaRepository__WEBPACK_IMPORTED_MODULE_3__["default"].getPromotionsBySlugs, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getPromotionsSuccess"])(data));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_BANNERS, getBannersBySlugs)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_PROMOTIONS, getPromotionsBySlugs)]);
}

/***/ }),

/***/ "./store/post/action.js":
/*!******************************!*\
  !*** ./store/post/action.js ***!
  \******************************/
/*! exports provided: actionTypes, getPosts, getPostsSuccess, getPostsError, getFeaturedPost, getFeaturedPostSuccess, getFeaturedPostError, getRecentPosts, getRecentPostsSuccess, getRecentPostsError, getPostCategories, getPostCategoriesSuccess, getPostCategoriesError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsSuccess", function() { return getPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostsError", function() { return getPostsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedPost", function() { return getFeaturedPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedPostSuccess", function() { return getFeaturedPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeaturedPostError", function() { return getFeaturedPostError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentPosts", function() { return getRecentPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentPostsSuccess", function() { return getRecentPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentPostsError", function() { return getRecentPostsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostCategories", function() { return getPostCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostCategoriesSuccess", function() { return getPostCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostCategoriesError", function() { return getPostCategoriesError; });
const actionTypes = {
  GET_POSTS: 'GET_POSTS',
  GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'GET_POSTS_ERROR',
  GET_FEATURED_POST: 'GET_FEATURED_POST',
  GET_FEATURED_POST_SUCCESS: 'GET_FEATURED_POST_SUCCESS',
  GET_FEATURED_POST_ERROR: 'GET_FEATURED_POST_ERROR',
  GET_RECENT_POSTS: 'GET_RECENT_POSTS',
  GET_RECENT_POSTS_SUCCESS: 'GET_RECENT_POSTS_SUCCESS',
  GET_RECENT_POSTS_ERROR: 'GET_RECENT_POSTS_ERROR',
  GET_POST_CATEGORIES: 'GET_POST_CATEGORIES',
  GET_POST_CATEGORIES_SUCCESS: 'GET_POST_CATEGORIES_SUCCESS',
  GET_POST_CATEGORIES_ERROR: 'GET_POST_CATEGORIES_ERROR'
};
function getPosts() {
  return {
    type: actionTypes.GET_POSTS
  };
}
function getPostsSuccess(data) {
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    data
  };
}
function getPostsError(error) {
  return {
    type: actionTypes.GET_POSTS_ERROR,
    error
  };
}
function getFeaturedPost() {
  return {
    type: actionTypes.GET_FEATURED_POST
  };
}
function getFeaturedPostSuccess(data) {
  return {
    type: actionTypes.GET_FEATURED_POST_SUCCESS,
    data
  };
}
function getFeaturedPostError(error) {
  return {
    type: actionTypes.GET_FEATURED_POST_ERROR,
    error
  };
}
function getRecentPosts() {
  return {
    type: actionTypes.GET_RECENT_POSTS
  };
}
function getRecentPostsSuccess(data) {
  return {
    type: actionTypes.GET_RECENT_POSTS_SUCCESS,
    data
  };
}
function getRecentPostsError(error) {
  return {
    type: actionTypes.GET_RECENT_POSTS_ERROR,
    error
  };
}
function getPostCategories() {
  return {
    type: actionTypes.GET_POST_CATEGORIES
  };
}
function getPostCategoriesSuccess(data) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_SUCCESS,
    data
  };
}
function getPostCategoriesError(error) {
  return {
    type: actionTypes.GET_POST_CATEGORIES_ERROR,
    error
  };
}

/***/ }),

/***/ "./store/post/reducer.js":
/*!*******************************!*\
  !*** ./store/post/reducer.js ***!
  \*******************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/post/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  posts: [],
  featuredPost: null,
  recentPost: [],
  categories: [],
  error: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        posts: action.data
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_FEATURED_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        featuredPost: action.data
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_RECENT_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        recentPost: action.data
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_POST_CATEGORIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        categories: action.data
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_FEATURED_POST_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_RECENT_POSTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_POST_CATEGORIES_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/post/saga.js":
/*!****************************!*\
  !*** ./store/post/saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_data_blog_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/static/data/blog-grid */ "./public/static/data/blog-grid.json");
var _public_static_data_blog_grid__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/static/data/blog-grid */ "./public/static/data/blog-grid.json", 1);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./store/post/action.js");




Object(es6_promise__WEBPACK_IMPORTED_MODULE_1__["polyfill"])();

function* getPostsSaga() {
  try {
    const data = _public_static_data_blog_grid__WEBPACK_IMPORTED_MODULE_2__.posts;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getPostsSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getPostsError"])(err));
  }
}

function* getFeaturedPostSaga() {
  try {
    const data = _public_static_data_blog_grid__WEBPACK_IMPORTED_MODULE_2__.postFeatures;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getFeaturedPostSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getFeaturedPostError"])(err));
  }
}

function* getRecentPostSaga() {
  try {
    const data = _public_static_data_blog_grid__WEBPACK_IMPORTED_MODULE_2__.recentPosts;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getRecentPostsSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getRecentPostsError"])(err));
  }
}

function* getPostCategories() {
  try {
    const data = _public_static_data_blog_grid__WEBPACK_IMPORTED_MODULE_2__.blogCategories;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getPostCategoriesSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getPostCategoriesError"])(err));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_POSTS, getPostsSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_FEATURED_POST, getFeaturedPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_RECENT_POSTS, getRecentPostSaga), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_POST_CATEGORIES, getPostCategories)]);
}

/***/ }),

/***/ "./store/product/action.js":
/*!*********************************!*\
  !*** ./store/product/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, getProducts, getTotalProducts, getBrands, getBrandsSuccess, getProductCategories, getProductCategoriesSuccess, getTotalProductsSuccess, getProductsSuccess, getProductByKeywordsSuccess, getSingleProductsSuccess, getProductsError, getProductsByCategory, getProductsByBrand, getProductsByKeyword, getProductsById, getProductsByPrice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProducts", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProducts", function() { return getTotalProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrands", function() { return getBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrandsSuccess", function() { return getBrandsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCategories", function() { return getProductCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCategoriesSuccess", function() { return getProductCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductsSuccess", function() { return getTotalProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsSuccess", function() { return getProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductByKeywordsSuccess", function() { return getProductByKeywordsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProductsSuccess", function() { return getSingleProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsError", function() { return getProductsError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByCategory", function() { return getProductsByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByBrand", function() { return getProductsByBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByKeyword", function() { return getProductsByKeyword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsById", function() { return getProductsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByPrice", function() { return getProductsByPrice; });
const actionTypes = {
  GET_PRODUCTS: 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS: 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR: 'GET_PRODUCTS_ERROR',
  GET_PRODUCTS_BY_CATEGORY: 'GET_PRODUCTS_BY_CATEGORY',
  GET_PRODUCTS_BY_PRICE_RANGE: 'GET_PRODUCTS_BY_PRICE_RANGE',
  GET_PRODUCTS_BY_BRAND: 'GET_PRODUCTS_BY_BRAND',
  GET_PRODUCTS_BY_KEYWORD: 'GET_PRODUCTS_BY_KEYWORD',
  GET_PRODUCTS_BY_KEYWORD_SUCCESS: 'GET_PRODUCTS_BY_KEYWORD_SUCCESS',
  GET_PRODUCT_BY_ID: 'GET_PRODUCT_BY_ID',
  GET_PRODUCT_BY_ID_SUCCESS: 'GET_PRODUCT_BY_ID_SUCCESS',
  GET_TOTAL_OF_PRODUCTS: 'GET_TOTAL_OF_PRODUCTS',
  GET_TOTAL_OF_PRODUCTS_SUCCESS: 'GET_TOTAL_OF_PRODUCTS_SUCCESS',
  GET_BRANDS: 'GET_BRANDS',
  GET_BRANDS_SUCCESS: 'GET_BRANDS_SUCCESS',
  GET_PRODUCT_CATEGORIES: 'GET_PRODUCT_CATEGORIES',
  GET_PRODUCT_CATEGORIES_SUCCESS: 'GET_PRODUCT_CATEGORIES_SUCCESS'
};
function getProducts(payload) {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload
  };
}
function getTotalProducts() {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS
  };
}
function getBrands() {
  return {
    type: actionTypes.GET_BRANDS
  };
}
function getBrandsSuccess(payload) {
  return {
    type: actionTypes.GET_BRANDS_SUCCESS,
    payload
  };
}
function getProductCategories() {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES
  };
}
function getProductCategoriesSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCT_CATEGORIES_SUCCESS,
    payload
  };
}
function getTotalProductsSuccess(payload) {
  return {
    type: actionTypes.GET_TOTAL_OF_PRODUCTS_SUCCESS,
    payload
  };
}
function getProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    data
  };
}
function getProductByKeywordsSuccess(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD_SUCCESS,
    payload
  };
}
function getSingleProductsSuccess(data) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID_SUCCESS,
    data
  };
}
function getProductsError(error) {
  return {
    type: actionTypes.GET_PRODUCTS_ERROR,
    error
  };
}
function getProductsByCategory(category) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_CATEGORY,
    category
  };
}
function getProductsByBrand(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_BRAND,
    payload
  };
}
function getProductsByKeyword(keyword) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_KEYWORD,
    keyword
  };
}
function getProductsById(id) {
  return {
    type: actionTypes.GET_PRODUCT_BY_ID,
    id
  };
}
function getProductsByPrice(payload) {
  return {
    type: actionTypes.GET_PRODUCTS_BY_PRICE_RANGE,
    payload
  };
}

/***/ }),

/***/ "./store/product/reducer.js":
/*!**********************************!*\
  !*** ./store/product/reducer.js ***!
  \**********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/product/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  allProducts: null,
  singleProduct: null,
  error: false,
  totalProducts: 0,
  categories: null,
  brands: [],
  productsLoading: true,
  productLoading: true,
  searchResults: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        allProducts: action.data,
        productsLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_TOTAL_OF_PRODUCTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        totalProducts: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_BRANDS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        brands: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_PRODUCT_CATEGORIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        categories: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_PRODUCT_BY_ID_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        singleProduct: action.data,
        productLoading: false
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_PRODUCTS_BY_KEYWORD_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        searchResults: action.payload
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_PRODUCTS_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/product/saga.js":
/*!*******************************!*\
  !*** ./store/product/saga.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! es6-promise */ "es6-promise");
/* harmony import */ var es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../repositories/ProductRepository */ "./repositories/ProductRepository.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action */ "./store/product/action.js");




Object(es6_promise__WEBPACK_IMPORTED_MODULE_1__["polyfill"])();

function* getProducts({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getRecords, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsSuccess"])(data));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsError"])(err));
  }
}

function* getTotalOfProducts() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getTotalRecords);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getTotalProductsSuccess"])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getBrands() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getBrands);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getBrandsSuccess"])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductCategories() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getProductCategories);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductCategoriesSuccess"])(result));
  } catch (err) {
    console.log(err);
  }
}

function* getProductById({
  id
}) {
  try {
    const product = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getProductsById, id);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getSingleProductsSuccess"])(product));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsError"])(err));
  }
}

function* getProductByCategory({
  category
}) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getProductsByCategory, category);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsSuccess"])(result));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getTotalProductsSuccess"])(result.length));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsError"])(err));
  }
}

function* getProductByPriceRange({
  payload
}) {
  try {
    const products = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getProductsByPriceRange, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsSuccess"])(products));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getTotalProductsSuccess"])(products.length));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsError"])(err));
  }
}

function* getProductByBrand({
  payload
}) {
  try {
    const brands = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getProductsByBrands, payload);
    const products = [];
    brands.forEach(brand => {
      brand.products.forEach(product => {
        products.push(product);
      });
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsSuccess"])(products));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getTotalProductsSuccess"])(products.length));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsError"])(err));
  }
}

function* getProductByKeyword({
  keyword
}) {
  try {
    const searchParams = {
      title_contains: keyword
    };
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_repositories_ProductRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getRecords, searchParams);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductByKeywordsSuccess"])(result));
  } catch (err) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_3__["getProductsError"])(err));
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PRODUCTS, getProducts)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_TOTAL_OF_PRODUCTS, getTotalOfProducts)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_BRANDS, getBrands)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PRODUCT_CATEGORIES, getProductCategories)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PRODUCTS_BY_CATEGORY, getProductByCategory)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PRODUCTS_BY_PRICE_RANGE, getProductByPriceRange)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PRODUCTS_BY_BRAND, getProductByBrand)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PRODUCTS_BY_KEYWORD, getProductByKeyword)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_3__["actionTypes"].GET_PRODUCT_BY_ID, getProductById)]);
}

/***/ }),

/***/ "./store/rootReducer.js":
/*!******************************!*\
  !*** ./store/rootReducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/reducer */ "./store/post/reducer.js");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reducer */ "./store/product/reducer.js");
/* harmony import */ var _setting_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting/reducer */ "./store/setting/reducer.js");
/* harmony import */ var _cart_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/reducer */ "./store/cart/reducer.js");
/* harmony import */ var _compare_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compare/reducer */ "./store/compare/reducer.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/reducer */ "./store/auth/reducer.js");
/* harmony import */ var _wishlist_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist/reducer */ "./store/wishlist/reducer.js");
/* harmony import */ var _collection_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection/reducer */ "./store/collection/reducer.js");
/* harmony import */ var _media_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/reducer */ "./store/media/reducer.js");
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/reducer */ "./store/app/reducer.js");











/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  post: _post_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  product: _product_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  setting: _setting_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  cart: _cart_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  compare: _compare_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  wishlist: _wishlist_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  collection: _collection_reducer__WEBPACK_IMPORTED_MODULE_8__["default"],
  media: _media_reducer__WEBPACK_IMPORTED_MODULE_9__["default"],
  app: _app_reducer__WEBPACK_IMPORTED_MODULE_10__["default"]
}));

/***/ }),

/***/ "./store/rootSaga.js":
/*!***************************!*\
  !*** ./store/rootSaga.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post/saga */ "./store/post/saga.js");
/* harmony import */ var _product_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/saga */ "./store/product/saga.js");
/* harmony import */ var _setting_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting/saga */ "./store/setting/saga.js");
/* harmony import */ var _cart_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/saga */ "./store/cart/saga.js");
/* harmony import */ var _auth_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/saga */ "./store/auth/saga.js");
/* harmony import */ var _compare_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compare/saga */ "./store/compare/saga.js");
/* harmony import */ var _wishlist_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist/saga */ "./store/wishlist/saga.js");
/* harmony import */ var _collection_saga__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collection/saga */ "./store/collection/saga.js");
/* harmony import */ var _media_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./media/saga */ "./store/media/saga.js");
/* harmony import */ var _app_saga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app/saga */ "./store/app/saga.js");











function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_post_saga__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_product_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_setting_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_cart_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_auth_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_compare_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(_wishlist_saga__WEBPACK_IMPORTED_MODULE_7__["default"])(), Object(_collection_saga__WEBPACK_IMPORTED_MODULE_8__["default"])(), Object(_media_saga__WEBPACK_IMPORTED_MODULE_9__["default"])(), Object(_app_saga__WEBPACK_IMPORTED_MODULE_10__["default"])()]);
}

/***/ }),

/***/ "./store/setting/action.js":
/*!*********************************!*\
  !*** ./store/setting/action.js ***!
  \*********************************/
/*! exports provided: actionTypes, changeCurrency, changeCurrencySuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCurrency", function() { return changeCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeCurrencySuccess", function() { return changeCurrencySuccess; });
const actionTypes = {
  CHANGE_CURRENCY: 'CHANGE_CURRENCY',
  CHANGE_CURRENCY_SUCCESS: 'CHANGE_CURRENCY_SUCCESS'
};
function changeCurrency(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY,
    currency
  };
}
function changeCurrencySuccess(currency) {
  return {
    type: actionTypes.CHANGE_CURRENCY_SUCCESS,
    currency
  };
}

/***/ }),

/***/ "./store/setting/reducer.js":
/*!**********************************!*\
  !*** ./store/setting/reducer.js ***!
  \**********************************/
/*! exports provided: initialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/setting/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  currency: {
    symbol: '$',
    text: 'USD'
  }
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].CHANGE_CURRENCY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        currency: action.currency
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/setting/saga.js":
/*!*******************************!*\
  !*** ./store/setting/saga.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./store/setting/action.js");



function* changeCurrencySaga({
  currency
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_1__["changeCurrencySuccess"])(currency));
  } catch (err) {
    console.error(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].CHANGE_CURRENCY, changeCurrencySaga)]);
}

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducer */ "./store/rootReducer.js");
/* harmony import */ var _rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rootSaga */ "./store/rootSaga.js");







const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const persistConfig = {
  key: 'martfury',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default()),
  whitelist: ['cart', 'compare', 'auth', 'wishlist']
};
const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"]);

function configureStore(initialState) {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./store/wishlist/action.js":
/*!**********************************!*\
  !*** ./store/wishlist/action.js ***!
  \**********************************/
/*! exports provided: actionTypes, getWishlistList, getWishlistListSuccess, addItemToWishlist, removeWishlistItem, clearWishlist, updateWishlistListSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistList", function() { return getWishlistList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWishlistListSuccess", function() { return getWishlistListSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToWishlist", function() { return addItemToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWishlistItem", function() { return removeWishlistItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearWishlist", function() { return clearWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWishlistListSuccess", function() { return updateWishlistListSuccess; });
const actionTypes = {
  GET_WISHLIST_LIST: 'GET_WISHLIST_LIST',
  GET_WISHLIST_LIST_SUCCESS: 'GET_WISHLIST_LIST_SUCCESS',
  GET_WISHLIST_LIST_ERROR: 'GET_WISHLIST_LIST_ERROR',
  ADD_ITEM_WISHLISH: 'ADD_ITEM_WISHLISH',
  REMOVE_ITEM_WISHLISH: 'REMOVE_ITEM_WISHLISH',
  UPDATE_WISHLISH_LIST: 'UPDATE_WISHLISH_LIST',
  UPDATE_WISHLISH_LIST_SUCCESS: 'UPDATE_WISHLISH_LIST_SUCCESS',
  UPDATE_WISHLISH_LIST_ERROR: 'UPDATE_WISHLISH_LIST_ERROR',
  CLEAR_WISHLISH_LIST: 'CLEAR_WISHLISH_LIST'
};
function getWishlistList() {
  return {
    type: actionTypes.GET_WISHLIST_LIST
  };
}
function getWishlistListSuccess(data) {
  return {
    type: actionTypes.GET_WISHLIST_LIST_SUCCESS,
    data
  };
}
function addItemToWishlist(product) {
  return {
    type: actionTypes.ADD_ITEM_WISHLISH,
    product
  };
}
function removeWishlistItem(product) {
  return {
    type: actionTypes.REMOVE_ITEM_WISHLISH,
    product
  };
}
function clearWishlist() {
  return {
    type: actionTypes.CLEAR_CART
  };
}
function updateWishlistListSuccess(payload) {
  return {
    type: actionTypes.UPDATE_WISHLISH_LIST_SUCCESS,
    payload
  };
}

/***/ }),

/***/ "./store/wishlist/reducer.js":
/*!***********************************!*\
  !*** ./store/wishlist/reducer.js ***!
  \***********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./store/wishlist/action.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  wishlistItems: [],
  wishlistTotal: 0
};

function reducer(state = initState, action) {
  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_WISHLIST_LIST_SUCCESS:
      return _objectSpread({}, state);

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].UPDATE_WISHLISH_LIST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {
        wishlistItems: action.payload.wishlistItems,
        wishlistTotal: action.payload.wishlistTotal
      });

    case _action__WEBPACK_IMPORTED_MODULE_0__["actionTypes"].GET_WISHLIST_LIST_ERROR:
      return _objectSpread(_objectSpread({}, state), {
        error: action.error
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./store/wishlist/saga.js":
/*!********************************!*\
  !*** ./store/wishlist/saga.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./store/wishlist/action.js");




const modalSuccess = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Added to wishlisht!',
    description: 'This product has been added to wishlist!'
  });
};

const modalWarning = type => {
  antd__WEBPACK_IMPORTED_MODULE_1__["notification"][type]({
    message: 'Removed from wishlist',
    description: 'This product has been removed from wishlist!'
  });
};

function* getWishlistListSaga() {
  try {
    const localWishlistList = JSON.parse(localStorage.getItem('persist:martfury')).wishlist;
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["getWishlistListSuccess"])(localWishlistList));
  } catch (err) {
    console.log(err);
  }
}

function* addItemToWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let existItem = localWishlist.wishlistItems.find(item => item.id === product.id);

    if (!existItem) {
      localWishlist.wishlistItems.push(product);
      localWishlist.wishlistTotal++;
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateWishlistListSuccess"])(localWishlist));
      modalSuccess('success');
    }
  } catch (err) {
    console.log(err);
  }
}

function* removeItemWishlistSaga(payload) {
  try {
    const {
      product
    } = payload;
    let localWishlist = JSON.parse(JSON.parse(localStorage.getItem('persist:martfury')).wishlist);
    let index = localWishlist.wishlistItems.indexOf(product);
    localWishlist.wishlistTotal = localWishlist.wishlistTotal - 1;
    localWishlist.wishlistItems.splice(index, 1);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateWishlistListSuccess"])(localWishlist));
    modalWarning('warning');
  } catch (err) {
    console.log(err);
  }
}

function* clearWishlistListSaga() {
  try {
    const emptyCart = {
      wishlistItems: [],
      wishlistTotal: 0
    };
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_action__WEBPACK_IMPORTED_MODULE_2__["updateWishlistListSuccess"])(emptyCart));
  } catch (err) {
    console.log(err);
  }
}

function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].GET_WISHLIST_LIST, getWishlistListSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].ADD_ITEM_WISHLISH, addItemToWishlistSaga)]);
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action__WEBPACK_IMPORTED_MODULE_2__["actionTypes"].REMOVE_ITEM_WISHLISH, removeItemWishlistSaga)]);
}

/***/ }),

/***/ "./utilities/product-helper.js":
/*!*************************************!*\
  !*** ./utilities/product-helper.js ***!
  \*************************************/
/*! exports provided: formatCurrency, getColletionBySlug, getItemBySlug, convertSlugsQueryString, StrapiProductBadge, StrapiProductPrice, StrapiProductPriceExpanded, StrapiProductThumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColletionBySlug", function() { return getColletionBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemBySlug", function() { return getItemBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertSlugsQueryString", function() { return convertSlugsQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrapiProductBadge", function() { return StrapiProductBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrapiProductPrice", function() { return StrapiProductPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrapiProductPriceExpanded", function() { return StrapiProductPriceExpanded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrapiProductThumbnail", function() { return StrapiProductThumbnail; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _repositories_Repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/repositories/Repository */ "./repositories/Repository.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Fateh\\THE FATEH\\themeforest-Wn8tK53x-martfury-multipurpose-marketplace-react-ecommerce-template\\martfury_react_package_2_1_0\\react-app\\utilities\\product-helper.js";

/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */




function formatCurrency(num) {
  if (num !== undefined) {
    return parseFloat(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {}
}
function getColletionBySlug(collections, slug) {
  if (collections.length > 0) {
    const result = collections.find(item => item.slug === slug.toString());

    if (result !== undefined) {
      return result.products;
    } else {
      return [];
    }
  } else {
    return [];
  }
}
function getItemBySlug(banners, slug) {
  if (banners.length > 0) {
    const banner = banners.find(item => item.slug === slug.toString());

    if (banner !== undefined) {
      return banner;
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function convertSlugsQueryString(payload) {
  let query = '';

  if (payload.length > 0) {
    payload.forEach(item => {
      if (query === '') {
        query = `slug_in=${item}`;
      } else {
        query = query + `&slug_in=${item}`;
      }
    });
  }

  return query;
}
function StrapiProductBadge(product) {
  let view;

  if (product.badge && product.badge !== null) {
    view = product.badge.map(badge => {
      if (badge.type === 'sale') {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-product__badge",
          children: badge.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 24
        }, this);
      } else if (badge.type === 'outStock') {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-product__badge out-stock",
          children: badge.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-product__badge hot",
          children: badge.value
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this);
      }
    });
  }

  return view;
}
function StrapiProductPrice(product) {
  let view;

  if (product.is_sale === true) {
    view = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sale_price)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }, this);
  } else {
    view = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }, this);
  }

  return view;
}
function StrapiProductPriceExpanded(product) {
  let view;

  if (product.is_sale === true) {
    view = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "ps-product__price sale",
      children: ["$", formatCurrency(product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
        className: "ml-2",
        children: ["$", formatCurrency(product.sale_price)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("small", {
        children: "18% off"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, this);
  } else {
    view = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "ps-product__price",
      children: ["$", formatCurrency(product.price)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }, this);
  }

  return view;
}
function StrapiProductThumbnail(product) {
  let view;

  if (product.thumbnail) {
    view = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: `${_repositories_Repository__WEBPACK_IMPORTED_MODULE_3__["baseUrl"]}${product.thumbnail.url}`,
            alt: product.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }, this);
  } else {
    view = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/product/[pid]",
      as: `/product/${product.id}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/static/img/not-found.jpg",
            alt: "martfury"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }, this);
  }

  return view;
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.jsx */"./pages/_app.jsx");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXRzL0RlZmF1bHRMYXlvdXQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0cy9tb2R1bGVzL0hlYWQuanN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanN4Iiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9Db2xsZWN0aW9uUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvTWVkaWFSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9yZXBvc2l0b3JpZXMvUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hcHAvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FwcC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FwcC9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGgvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2F1dGgvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9hdXRoL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY2FydC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY2FydC9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NhcnQvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb2xsZWN0aW9uL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb2xsZWN0aW9uL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvY29sbGVjdGlvbi9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbXBhcmUvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbXBhcmUvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9jb21wYXJlL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvbWVkaWEvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL21lZGlhL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvbWVkaWEvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9wb3N0L2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9wb3N0L3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcG9zdC9zYWdhLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3Byb2R1Y3QvYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3Byb2R1Y3QvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9wcm9kdWN0L3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvcm9vdFNhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc2V0dGluZy9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvc2V0dGluZy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3NldHRpbmcvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS93aXNobGlzdC9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvd2lzaGxpc3QvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS93aXNobGlzdC9zYWdhLmpzIiwid2VicGFjazovLy8uL3V0aWxpdGllcy9wcm9kdWN0LWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJlczYtcHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtc2FnYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sYXp5bG9hZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsiRGVmYXVsdExheW91dCIsImNoaWxkcmVuIiwiU3R5bGVTaGVldHMiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsIm9uQ2xpY2siLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiTWF0aCIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJtYXAiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsInZhbHVlIiwibGluayIsImRvY3VtZW50Iiwid2luZG93IiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsInIiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJjbiIsIm5hdmlnYXRvciIsIm91dHB1dCIsInByZWZldGNoVmlhRG9tIiwiY3JlYXRlUm91dGVMb2FkZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZ2V0IiwiUm91dGVyIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJjbGVhblBhdGhuYW1lIiwicGFnZXMiLCJwYWdlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImRhdGEiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJzaG91bGRSZXNvbHZlSHJlZiIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJwYXJzZWQiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiY3JlYXRlVXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicHVzaFRvIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJNeUFwcCIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsInN0b3JlIiwiY29tcG9uZW50RGlkTW91bnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsInNldFN0YXRlIiwib3BlbiIsImdldExheW91dCIsIndpdGhSZWR1eCIsImNyZWF0ZVN0b3JlIiwid2l0aFJlZHV4U2FnYSIsIkNvbGxlY3Rpb25SZXBvc2l0b3J5IiwiZ2V0Q29sbGVjdGlvbnMiLCJwYXlsb2FkIiwiZm9yRWFjaCIsInJlcG9uc2UiLCJSZXBvc2l0b3J5IiwiYmFzZVVybCIsInRoZW4iLCJyZXNwb25zZSIsImNhdGNoIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldENhdGVnb3JpZXNCeVNsdWciLCJnZXRQcm9kdWN0c0J5Q29sbGVjdGlvblNsdWciLCJzbHVnIiwibGVuZ3RoIiwiaXRlbXMiLCJwcm9kdWN0cyIsImxvZyIsImdldFByb2R1Y3RzQnlDYXRlZ29yeVNsdWciLCJNZWRpYVJlc3Bvc2l0b3J5IiwiZ2V0QmFubmVyc0J5U2x1Z3MiLCJnZXRCYW5uZXJzQnlTbHVnIiwiZW5kUG9pbnQiLCJnZXRQcm9tb3Rpb25zQnlTbHVnIiwiZ2V0UHJvbW90aW9uc0J5U2x1Z3MiLCJjb252ZXJ0U2x1Z3NRdWVyeVN0cmluZyIsIlByb2R1Y3RSZXBvc2l0b3J5IiwiZ2V0UmVjb3JkcyIsInNlcmlhbGl6ZVF1ZXJ5IiwiZ2V0UHJvZHVjdHMiLCJ0b3RhbEl0ZW1zIiwiZ2V0QnJhbmRzIiwiZ2V0UHJvZHVjdENhdGVnb3JpZXMiLCJnZXRUb3RhbFJlY29yZHMiLCJnZXRQcm9kdWN0c0J5SWQiLCJnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkiLCJnZXRQcm9kdWN0c0J5QnJhbmQiLCJnZXRQcm9kdWN0c0J5QnJhbmRzIiwiZ2V0UHJvZHVjdHNCeVByaWNlUmFuZ2UiLCJiYXNlRG9tYWluIiwiYmFzZVBvc3RVcmwiLCJiYXNlU3RvcmVVUkwiLCJjdXN0b21IZWFkZXJzIiwiQWNjZXB0IiwiYXhpb3MiLCJjcmVhdGUiLCJoZWFkZXJzIiwia2V5cyIsImpvaW4iLCJhY3Rpb25UeXBlcyIsIlNXSVRDSF9ERU1PX1BBTkVMIiwiU1dJVENIX0RFTU9fUEFORUxfU1VDQ0VTUyIsInN3aXRjaERlbW9QYW5lbCIsInR5cGUiLCJzd2l0Y2hEZW1vUGFuZWxTdWNjZXNzIiwiaW5pdFN0YXRlIiwiaXNTaG93RGVtb1BhbmVsIiwicmVkdWNlciIsImFjdGlvbiIsInB1dCIsInJvb3RTYWdhIiwidGFrZUV2ZXJ5IiwiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dPVVQiLCJMT0dPVVRfU1VDQ0VTUyIsIkNIRUNLX0FVVEhPUklaQVRJT04iLCJsb2dpbiIsImxvZ2luU3VjY2VzcyIsImxvZ091dCIsImxvZ091dFN1Y2Nlc3MiLCJpc0xvZ2dlZEluIiwibW9kYWxTdWNjZXNzIiwibm90aWZpY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJtb2RhbFdhcm5pbmciLCJsb2dpblNhZ2EiLCJsb2dPdXRTYWdhIiwiR0VUX0NBUlQiLCJHRVRfQ0FSVF9TVUNDRVNTIiwiR0VUX0NBUlRfRVJST1IiLCJHRVRfQ0FSVF9UT1RBTF9RVUFOVElUWSIsIkdFVF9DQVJUX1RPVEFMX1FVQU5USVRZX1NVQ0NFU1MiLCJBRERfSVRFTSIsIlJFTU9WRV9JVEVNIiwiQ0xFQVJfQ0FSVCIsIkNMRUFSX0NBUlRfU1VDQ0VTUyIsIkNMRUFSX0NBUlRfRVJST1IiLCJJTkNSRUFTRV9RVFkiLCJJTkNSRUFTRV9RVFlfU1VDQ0VTUyIsIklOQ1JFQVNFX1FUWV9FUlJPUiIsIkRFQ1JFQVNFX1FUWSIsIlVQREFURV9DQVJUIiwiVVBEQVRFX0NBUlRfU1VDQ0VTUyIsIlVQREFURV9DQVJUX0VSUk9SIiwiZ2V0Q2FydCIsImdldENhcnRTdWNjZXNzIiwiZ2V0Q2FydEVycm9yIiwiYWRkSXRlbSIsInByb2R1Y3QiLCJyZW1vdmVJdGVtIiwiaW5jcmVhc2VJdGVtUXR5IiwiZGVjcmVhc2VJdGVtUXR5IiwidXBkYXRlQ2FydFN1Y2Nlc3MiLCJ1cGRhdGVDYXJ0RXJyb3IiLCJpbml0Q2FydCIsImNhcnRJdGVtcyIsImFtb3VudCIsImNhcnRUb3RhbCIsImR1cmF0aW9uIiwiY2FsY3VsYXRlQW1vdW50Iiwib2JqIiwidmFsdWVzIiwicmVkdWNlIiwiYWNjIiwicXVhbnRpdHkiLCJwcmljZSIsInRvRml4ZWQiLCJnZXRDYXJ0U2FnYSIsImFkZEl0ZW1TYWdhIiwibG9jYWxDYXJ0IiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FydCIsImN1cnJlbnRDYXJ0IiwiZXhpc3RJdGVtIiwiZmluZCIsInJlbW92ZUl0ZW1TYWdhIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJpbmNyZWFzZVF0eVNhZ2EiLCJzZWxlY3RlZEl0ZW0iLCJkZWNyZWFzZUl0ZW1RdHlTYWdhIiwiY2xlYXJDYXJ0U2FnYSIsImVtcHR5Q2FydCIsIkdFVF9DT0xMRUNUSU9OUyIsIkdFVF9DT0xMRUNUSU9OU19TVUNDRVNTIiwiR0VUX0NPTExFQ1RJT04iLCJHRVRfQ09MTEVDVElPTl9TVUNDRVNTIiwiR0VUX0NBVEVHT1JJRVMiLCJHRVRfQ0FURUdPUklFU19TVUNDRVNTIiwiZ2V0Q29sbGVjdGlvbnNTdWNjZXNzIiwiZ2V0Q2F0ZWdvcmllcyIsImdldENhdGVnb3JpZXNTdWNjZXNzIiwiZ2V0Q29sbGVjdGlvbiIsImdldENvbGxlY3Rpb25TdWNjZXNzIiwiaW5pdGlhbFN0YXRlIiwiY29sbGVjdGlvbnMiLCJjYXRlZ29yaWVzIiwiY29sbGVjdGlvbiIsInBvbHlmaWxsIiwiY2FsbCIsImdldENvbGxlY3Rpb25CeUNhdGVnb3JpZXMiLCJHRVRfQ09NUEFSRV9MSVNUIiwiR0VUX0NPTVBBUkVfTElTVF9TVUNDRVNTIiwiR0VUX0NPTVBBUkVfTElTVF9FUlJPUiIsIkFERF9JVEVNX0NPTVBBUkUiLCJSRU1PVkVfSVRFTV9DT01QQVJFIiwiVVBEQVRFX0NPTVBBUkVfTElTVCIsIlVQREFURV9DT01QQVJFX0xJU1RfU1VDQ0VTUyIsIlVQREFURV9DT01QQVJFX0xJU1RfRVJST1IiLCJDTEVBUl9DT01QQVJFX0xJU1QiLCJnZXRDb21wYXJlTGlzdCIsImdldENvbXBhcmVMaXN0U3VjY2VzcyIsImFkZEl0ZW1Ub0NvbXBhcmUiLCJyZW1vdmVDb21wYXJlSXRlbSIsImNsZWFyQ29tcGFyZSIsInVwZGF0ZUNvbXBhcmVMaXN0U3VjY2VzcyIsImNvbXBhcmVJdGVtcyIsImNvbXBhcmVUb3RhbCIsImdldENvbXBhcmVMaXN0U2FnYSIsImxvY2FsQ29tcGFyZUxpc3QiLCJsb2NhbENvbXBhcmUiLCJjb21wYXJlIiwiaW5kZXhPZiIsImNsZWFyQ29tcGFyZUxpc3RTYWdhIiwiR0VUX0JBTk5FUlMiLCJHRVRfQkFOTkVSU19TVUNDRVNTIiwiR0VUX1BST01PVElPTlMiLCJHRVRfUFJPTU9USU9OU19TVUNDRVNTIiwiZ2V0QmFubmVyc1N1Y2Nlc3MiLCJnZXRQcm9tb3Rpb25zU3VjY2VzcyIsImJhbm5lcnMiLCJwcm9tb3Rpb25zIiwiTWVkaWFSZXBvc2l0b3J5IiwiR0VUX1BPU1RTIiwiR0VUX1BPU1RTX1NVQ0NFU1MiLCJHRVRfUE9TVFNfRVJST1IiLCJHRVRfRkVBVFVSRURfUE9TVCIsIkdFVF9GRUFUVVJFRF9QT1NUX1NVQ0NFU1MiLCJHRVRfRkVBVFVSRURfUE9TVF9FUlJPUiIsIkdFVF9SRUNFTlRfUE9TVFMiLCJHRVRfUkVDRU5UX1BPU1RTX1NVQ0NFU1MiLCJHRVRfUkVDRU5UX1BPU1RTX0VSUk9SIiwiR0VUX1BPU1RfQ0FURUdPUklFUyIsIkdFVF9QT1NUX0NBVEVHT1JJRVNfU1VDQ0VTUyIsIkdFVF9QT1NUX0NBVEVHT1JJRVNfRVJST1IiLCJnZXRQb3N0cyIsImdldFBvc3RzU3VjY2VzcyIsImdldFBvc3RzRXJyb3IiLCJnZXRGZWF0dXJlZFBvc3QiLCJnZXRGZWF0dXJlZFBvc3RTdWNjZXNzIiwiZ2V0RmVhdHVyZWRQb3N0RXJyb3IiLCJnZXRSZWNlbnRQb3N0cyIsImdldFJlY2VudFBvc3RzU3VjY2VzcyIsImdldFJlY2VudFBvc3RzRXJyb3IiLCJnZXRQb3N0Q2F0ZWdvcmllcyIsImdldFBvc3RDYXRlZ29yaWVzU3VjY2VzcyIsImdldFBvc3RDYXRlZ29yaWVzRXJyb3IiLCJwb3N0cyIsImZlYXR1cmVkUG9zdCIsInJlY2VudFBvc3QiLCJnZXRQb3N0c1NhZ2EiLCJibG9nR3JpZCIsImdldEZlYXR1cmVkUG9zdFNhZ2EiLCJwb3N0RmVhdHVyZXMiLCJnZXRSZWNlbnRQb3N0U2FnYSIsInJlY2VudFBvc3RzIiwiYmxvZ0NhdGVnb3JpZXMiLCJHRVRfUFJPRFVDVFMiLCJHRVRfUFJPRFVDVFNfU1VDQ0VTUyIsIkdFVF9QUk9EVUNUU19FUlJPUiIsIkdFVF9QUk9EVUNUU19CWV9DQVRFR09SWSIsIkdFVF9QUk9EVUNUU19CWV9QUklDRV9SQU5HRSIsIkdFVF9QUk9EVUNUU19CWV9CUkFORCIsIkdFVF9QUk9EVUNUU19CWV9LRVlXT1JEIiwiR0VUX1BST0RVQ1RTX0JZX0tFWVdPUkRfU1VDQ0VTUyIsIkdFVF9QUk9EVUNUX0JZX0lEIiwiR0VUX1BST0RVQ1RfQllfSURfU1VDQ0VTUyIsIkdFVF9UT1RBTF9PRl9QUk9EVUNUUyIsIkdFVF9UT1RBTF9PRl9QUk9EVUNUU19TVUNDRVNTIiwiR0VUX0JSQU5EUyIsIkdFVF9CUkFORFNfU1VDQ0VTUyIsIkdFVF9QUk9EVUNUX0NBVEVHT1JJRVMiLCJHRVRfUFJPRFVDVF9DQVRFR09SSUVTX1NVQ0NFU1MiLCJnZXRUb3RhbFByb2R1Y3RzIiwiZ2V0QnJhbmRzU3VjY2VzcyIsImdldFByb2R1Y3RDYXRlZ29yaWVzU3VjY2VzcyIsImdldFRvdGFsUHJvZHVjdHNTdWNjZXNzIiwiZ2V0UHJvZHVjdHNTdWNjZXNzIiwiZ2V0UHJvZHVjdEJ5S2V5d29yZHNTdWNjZXNzIiwiZ2V0U2luZ2xlUHJvZHVjdHNTdWNjZXNzIiwiZ2V0UHJvZHVjdHNFcnJvciIsImNhdGVnb3J5IiwiZ2V0UHJvZHVjdHNCeUtleXdvcmQiLCJrZXl3b3JkIiwiZ2V0UHJvZHVjdHNCeVByaWNlIiwiYWxsUHJvZHVjdHMiLCJzaW5nbGVQcm9kdWN0IiwidG90YWxQcm9kdWN0cyIsImJyYW5kcyIsInByb2R1Y3RzTG9hZGluZyIsInByb2R1Y3RMb2FkaW5nIiwic2VhcmNoUmVzdWx0cyIsImdldFRvdGFsT2ZQcm9kdWN0cyIsImdldFByb2R1Y3RCeUlkIiwiZ2V0UHJvZHVjdEJ5Q2F0ZWdvcnkiLCJnZXRQcm9kdWN0QnlQcmljZVJhbmdlIiwiZ2V0UHJvZHVjdEJ5QnJhbmQiLCJicmFuZCIsImdldFByb2R1Y3RCeUtleXdvcmQiLCJ0aXRsZV9jb250YWlucyIsImNvbWJpbmVSZWR1Y2VycyIsInBvc3QiLCJzZXR0aW5nIiwid2lzaGxpc3QiLCJtZWRpYSIsImFwcCIsIlBvc3RTYWdhIiwiUHJvZHVjdFNhZ2EiLCJTZXR0aW5nU2FnYSIsIkNhcnRTYWdhIiwiQXV0aFNhZ2EiLCJDb21wYXJlU2FnYSIsIldpc2hsaXN0U2FnYSIsIkNvbGxlY3Rpb25TYWdhIiwiTWVkaWFTYWdhIiwiQ0hBTkdFX0NVUlJFTkNZIiwiQ0hBTkdFX0NVUlJFTkNZX1NVQ0NFU1MiLCJjaGFuZ2VDdXJyZW5jeSIsImN1cnJlbmN5IiwiY2hhbmdlQ3VycmVuY3lTdWNjZXNzIiwic3ltYm9sIiwiY2hhbmdlQ3VycmVuY3lTYWdhIiwiYmluZE1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInBlcnNpc3RDb25maWciLCJzdG9yYWdlIiwid2hpdGVsaXN0IiwicGVyc2lzdGVkUmVkdWNlciIsInBlcnNpc3RSZWR1Y2VyIiwicm9vdFJlZHVjZXIiLCJjb25maWd1cmVTdG9yZSIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJzYWdhVGFzayIsInJ1biIsIkdFVF9XSVNITElTVF9MSVNUIiwiR0VUX1dJU0hMSVNUX0xJU1RfU1VDQ0VTUyIsIkdFVF9XSVNITElTVF9MSVNUX0VSUk9SIiwiQUREX0lURU1fV0lTSExJU0giLCJSRU1PVkVfSVRFTV9XSVNITElTSCIsIlVQREFURV9XSVNITElTSF9MSVNUIiwiVVBEQVRFX1dJU0hMSVNIX0xJU1RfU1VDQ0VTUyIsIlVQREFURV9XSVNITElTSF9MSVNUX0VSUk9SIiwiQ0xFQVJfV0lTSExJU0hfTElTVCIsImdldFdpc2hsaXN0TGlzdCIsImdldFdpc2hsaXN0TGlzdFN1Y2Nlc3MiLCJhZGRJdGVtVG9XaXNobGlzdCIsInJlbW92ZVdpc2hsaXN0SXRlbSIsImNsZWFyV2lzaGxpc3QiLCJ1cGRhdGVXaXNobGlzdExpc3RTdWNjZXNzIiwid2lzaGxpc3RJdGVtcyIsIndpc2hsaXN0VG90YWwiLCJnZXRXaXNobGlzdExpc3RTYWdhIiwibG9jYWxXaXNobGlzdExpc3QiLCJhZGRJdGVtVG9XaXNobGlzdFNhZ2EiLCJsb2NhbFdpc2hsaXN0IiwicmVtb3ZlSXRlbVdpc2hsaXN0U2FnYSIsImNsZWFyV2lzaGxpc3RMaXN0U2FnYSIsImZvcm1hdEN1cnJlbmN5IiwibnVtIiwidW5kZWZpbmVkIiwicGFyc2VGbG9hdCIsInRvU3RyaW5nIiwiZ2V0Q29sbGV0aW9uQnlTbHVnIiwiZ2V0SXRlbUJ5U2x1ZyIsImJhbm5lciIsIlN0cmFwaVByb2R1Y3RCYWRnZSIsInZpZXciLCJiYWRnZSIsIlN0cmFwaVByb2R1Y3RQcmljZSIsImlzX3NhbGUiLCJzYWxlX3ByaWNlIiwiU3RyYXBpUHJvZHVjdFByaWNlRXhwYW5kZWQiLCJTdHJhcGlQcm9kdWN0VGh1bWJuYWlsIiwidGh1bWJuYWlsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEw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Q0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBIZWFkIGZyb20gJy4vbW9kdWxlcy9IZWFkJztcbmltcG9ydCB7IEJhY2tUb3AgfSBmcm9tICdhbnRkJztcbmNvbnN0IERlZmF1bHRMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtLWRlZmF1bHRcIj5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8ZGl2IGlkPVwibG9hZGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyLXNlY3Rpb24gc2VjdGlvbi1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci1zZWN0aW9uIHNlY3Rpb24tcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCYWNrVG9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcy1idG4tLWJhY2t0b3BcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWFycm93LXVwXCI+PC9pPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvQmFja1RvcD5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERlZmF1bHRMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuY29uc3QgU3R5bGVTaGVldHMgPSAoKSA9PiAoXG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYXJ0ZnVyeSAtIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2aS5wbmdcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2ZhdmkucG5nXCIgc2l6ZXM9XCIzMngzMlwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3N0YXRpYy9pbWcvZmF2aS5wbmdcIiBzaXplcz1cIjE5MngxOTJcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uLXByZWNvbXBvc2VkXCIgaHJlZj1cIi9zdGF0aWMvaW1nL2ZhdmkucG5nXCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJmb3JtYXQtZGV0ZWN0aW9uXCIgY29udGVudD1cInRlbGVwaG9uZT1ub1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlXCIgY29udGVudD1cInllc1wiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwibm91dGhlbWVzXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIk1hcnRmdXJ5LCBSZWFjdCwgZUNvbW1lcmNlLCBUZW1wbGF0ZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJNYXJ0ZnVyeSAtIFJlYWN0IGVDb21tZXJjZSBUZW1wbGF0ZVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVdvcmsrU2FuczozMDAsNDAwLDUwMCw2MDAsNzAwJmFtcDthbXA7c3Vic2V0PWxhdGluLWV4dFwiXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgaHJlZj1cIi9zdGF0aWMvZm9udHMvTGluZWFyaWNvbnMvRm9udC9kZW1vLWZpbGVzL2RlbW8uY3NzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiL3N0YXRpYy9mb250cy9mb250LWF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCJcbiAgICAgICAgLz5cbiAgICAgICAgXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0L2Nzc1wiXG4gICAgICAgICAgICBocmVmPVwiL3N0YXRpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAgICAgaHJlZj1cIi9zdGF0aWMvY3NzL3NsaWNrLm1pbi5jc3NcIlxuICAgICAgICAvPlxuICAgIDwvSGVhZD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlU2hlZXRzO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIuYXNQYXRoKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZywgcHJlZmV0Y2g/OiBib29sZWFuKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCEpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcsIHByZWZldGNoPzogYm9vbGVhbikge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgKCkgPT4ge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICAgIC50aGVuKCh7IHNjcmlwdHMsIGNzcyB9KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgICAgICBdIGFzIGNvbnN0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLnRoZW4oKGVudHJ5cG9pbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXSxcbiAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSlcbiAgICAgICAgKVxuICAgICAgICAgIC50aGVuKCh7IGVudHJ5cG9pbnQsIHN0eWxlcyB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgICA+KHsgc3R5bGVzOiBzdHlsZXMhIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbiAgICAgICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCkgPT4ge30pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKClcblxuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJlxuICAgICAgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlclxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKVxuICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKVxuXG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSB8fFxuICAgICAgICBwYXRoTG93ZXIgPT09ICcvJyArIGxvY2FsZUxvd2VyKVxuICAgICAgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArXG4gICAgICAgICAgcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBsZXQgYmFzZTogVVJMXG5cbiAgdHJ5IHtcbiAgICBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgfSBjYXRjaCAoXykge1xuICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKVxuICB9XG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIHVybCwgdHJ1ZSlcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCBocmVmSGFkT3JpZ2luID0gcmVzb2x2ZWRIcmVmLnN0YXJ0c1dpdGgob3JpZ2luKVxuICBjb25zdCBhc0hhZE9yaWdpbiA9IHJlc29sdmVkQXMgJiYgcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbilcblxuICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpXG4gIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzXG5cbiAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKVxuICBjb25zdCBwcmVwYXJlZEFzID0gYXNcbiAgICA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlci5hc1BhdGgsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lOiBzdHJpbmcsIHBhZ2VzOiBzdHJpbmdbXSkge1xuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVub3JtYWxpemVQYWdlUGF0aChwYXRobmFtZSEpKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lXG4gIH1cblxuICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAgIHBhdGhuYW1lID0gcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoV3JhcEFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiZcbiAgICAgICAgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmXG4gICAgICAgICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGNvbnN0IHNob3VsZFJlc29sdmVIcmVmID0gdXJsID09PSBhcyB8fCAob3B0aW9ucyBhcyBhbnkpLl9oXG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgIHBhdGhuYW1lID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKVxuXG4gICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKFxuICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lLFxuICAgICAgICAgICAgICBwYWdlc1xuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgbGV0IHJld3JpdGVzOiBhbnlcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBwYXJzZWQucXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcylcblxuICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgUHJldmlld0RhdGEgfSBmcm9tICduZXh0L3R5cGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogKHN0cmluZyB8IG51bWJlcilbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGxvY2FsZVxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBBbGwgY29uZmlndXJlZCBsb2NhbGVzXG4gICAqL1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmVkIGRlZmF1bHQgbG9jYWxlXG4gICAqL1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogc3RyaW5nW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICB1bnN0YWJsZV9Kc1ByZWxvYWQ/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIHNjcmlwdExvYWRlcjogeyBhZnRlckludGVyYWN0aXZlPzogc3RyaW5nW107IGJlZm9yZUludGVyYWN0aXZlPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgZGlzYWJsZU9wdGltaXplZExvYWRpbmc/OiBib29sZWFuXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IFByZXZpZXdEYXRhXG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxuICBOZXh0V2ViVml0YWxzTWV0cmljLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgeyBOZXh0V2ViVml0YWxzTWV0cmljIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHsgUGVyc2lzdEdhdGUgfSBmcm9tICdyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0JztcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICd+L3N0b3JlL3N0b3JlJztcbmltcG9ydCBEZWZhdWx0TGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9sYXlvdXRzL0RlZmF1bHRMYXlvdXQnO1xuaW1wb3J0ICd+L3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCAnfi9zY3NzL2hvbWUtZGVmYXVsdC5zY3NzJztcbmltcG9ydCAnfi9zY3NzL21hcmtldC1wbGFjZS0xLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvbWFya2V0LXBsYWNlLTIuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9tYXJrZXQtcGxhY2UtMy5zY3NzJztcbmltcG9ydCAnfi9zY3NzL21hcmtldC1wbGFjZS00LnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvZWxlY3Ryb25pYy5zY3NzJztcbmltcG9ydCAnfi9zY3NzL2Z1cm5pdHVyZS5zY3NzJztcbmltcG9ydCAnfi9zY3NzL29yZ2FuaWMuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy90ZWNobm9sb2d5LnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvYXV0b3BhcnQuc2Nzcyc7XG5pbXBvcnQgJ34vc2Nzcy9lbGVjdHJvbmljLnNjc3MnO1xuaW1wb3J0ICd+L3Njc3MvY3VzdG9tLnNjc3MnO1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShwcm9wcy5zdG9yZSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fbmV4dCcpLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBnZXRMYXlvdXQgPVxuICAgICAgICAgICAgQ29tcG9uZW50LmdldExheW91dCB8fFxuICAgICAgICAgICAgKChwYWdlKSA9PiA8RGVmYXVsdExheW91dCBjaGlsZHJlbj17cGFnZX0gLz4pO1xuICAgICAgICByZXR1cm4gZ2V0TGF5b3V0KFxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFBlcnNpc3RHYXRlXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG4gICAgICAgICAgICAgICAgICAgIHBlcnNpc3Rvcj17dGhpcy5wZXJzaXN0b3J9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoY3JlYXRlU3RvcmUpKHdpdGhSZWR1eFNhZ2EoTXlBcHApKTtcbiIsImltcG9ydCBSZXBvc2l0b3J5LCB7IGJhc2VVcmwgfSBmcm9tICcuL1JlcG9zaXRvcnknO1xuXG5jbGFzcyBDb2xsZWN0aW9uUmVwb3NpdG9yeSB7XG4gICAgYXN5bmMgZ2V0Q29sbGVjdGlvbnMocGF5bG9hZCkge1xuICAgICAgICBsZXQgcXVlcnkgPSAnJztcbiAgICAgICAgcGF5bG9hZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBgc2x1Z19pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBxdWVyeSArIGAmc2x1Z19pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9jb2xsZWN0aW9ucz8ke3F1ZXJ5fWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q2F0ZWdvcmllc0J5U2x1ZyhwYXlsb2FkKSB7XG4gICAgICAgIGxldCBxdWVyeSA9ICcnO1xuICAgICAgICBwYXlsb2FkLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChxdWVyeSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IGBzbHVnX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgYCZzbHVnX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH0vcHJvZHVjdC1jYXRlZ29yaWVzPyR7cXVlcnl9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeUNvbGxlY3Rpb25TbHVnKHNsdWcpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH0vY29sbGVjdGlvbnM/c2x1Z19pbj0ke3NsdWd9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgaXRlbXM6IHJlc3BvbnNlLmRhdGFbMF0ucHJvZHVjdHMgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5U2x1ZyhzbHVnKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChcbiAgICAgICAgICAgIGAke2Jhc2VVcmx9L3Byb2R1Y3QtY2F0ZWdvcmllcz9zbHVnX2luPSR7c2x1Z31gXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBpdGVtczogcmVzcG9uc2UuZGF0YVswXS5wcm9kdWN0cyB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBDb2xsZWN0aW9uUmVwb3NpdG9yeSgpO1xuIiwiaW1wb3J0IFJlcG9zaXRvcnksIHsgYmFzZVVybCB9IGZyb20gJy4vUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBjb252ZXJ0U2x1Z3NRdWVyeVN0cmluZyB9IGZyb20gJy4uL3V0aWxpdGllcy9wcm9kdWN0LWhlbHBlcic7XG5cbmNsYXNzIE1lZGlhUmVzcG9zaXRvcnkge1xuICAgIGFzeW5jIGdldEJhbm5lcnNCeVNsdWdzKHBheWxvYWQpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gYHNsdWdfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyBgJnNsdWdfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybH0vYmFubmVycz8ke3F1ZXJ5fWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0QmFubmVyc0J5U2x1ZyhwYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IGVuZFBvaW50ID0gYGJhbm5lcnM/c2x1Z19pbj0ke3BheWxvYWR9YDtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9LyR7ZW5kUG9pbnR9YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhWzBdLml0ZW1zO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9tb3Rpb25zQnlTbHVnKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgZW5kUG9pbnQgPSBgcHJvbW90aW9ucz9zbHVnX2luPSR7cGF5bG9hZH1gO1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybH0vJHtlbmRQb2ludH1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFbMF0uaXRlbXM7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvcikpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb21vdGlvbnNCeVNsdWdzKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgcXVlcnkgPSBjb252ZXJ0U2x1Z3NRdWVyeVN0cmluZyhwYXlsb2FkKTtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9L3Byb21vdGlvbnM/JHtxdWVyeX1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHtcbiAgICAgICAgICAgICAgICBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpLFxuICAgICAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNZWRpYVJlc3Bvc2l0b3J5KCk7XG4iLCJpbXBvcnQgUmVwb3NpdG9yeSwgeyBiYXNlVXJsLCBzZXJpYWxpemVRdWVyeSB9IGZyb20gJy4vUmVwb3NpdG9yeSc7XG5cbmNsYXNzIFByb2R1Y3RSZXBvc2l0b3J5IHtcbiAgICBhc3luYyBnZXRSZWNvcmRzKHBhcmFtcykge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsfS9wcm9kdWN0cz8ke3NlcmlhbGl6ZVF1ZXJ5KHBhcmFtcyl9YFxuICAgICAgICApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHMocGFyYW1zKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChcbiAgICAgICAgICAgIGAke2Jhc2VVcmx9L3Byb2R1Y3RzPyR7c2VyaWFsaXplUXVlcnkocGFyYW1zKX1gXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zOiByZXNwb25zZS5kYXRhLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbEl0ZW1zOiByZXNwb25zZS5kYXRhLmxlbmd0aCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldEJyYW5kcygpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9L2JyYW5kc2ApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdENhdGVnb3JpZXMoKSB7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9wcm9kdWN0LWNhdGVnb3JpZXNgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFRvdGFsUmVjb3JkcygpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9L3Byb2R1Y3RzL2NvdW50YClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+ICh7IGVycm9yOiBKU09OLnN0cmluZ2lmeShlcnJvcikgfSkpO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5SWQocGF5bG9hZCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoYCR7YmFzZVVybH0vcHJvZHVjdHMvJHtwYXlsb2FkfWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeUNhdGVnb3J5KHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH0vcHJvZHVjdC1jYXRlZ29yaWVzP3NsdWc9JHtwYXlsb2FkfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeUJyYW5kKHBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KFxuICAgICAgICAgICAgYCR7YmFzZVVybH0vYnJhbmRzP3NsdWc9JHtwYXlsb2FkfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGFbMF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVwb25zZTtcbiAgICB9XG5cbiAgICBhc3luYyBnZXRQcm9kdWN0c0J5QnJhbmRzKHBheWxvYWQpIHtcbiAgICAgICAgbGV0IHF1ZXJ5ID0gJyc7XG4gICAgICAgIHBheWxvYWQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5ID09PSAnJykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gYGlkX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgYCZpZF9pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlcG9uc2UgPSBhd2FpdCBSZXBvc2l0b3J5LmdldChgJHtiYXNlVXJsfS9icmFuZHM/JHtxdWVyeX1gKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cblxuICAgIGFzeW5jIGdldFByb2R1Y3RzQnlCcmFuZHMocGF5bG9hZCkge1xuICAgICAgICBsZXQgcXVlcnkgPSAnJztcbiAgICAgICAgcGF5bG9hZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBgaWRfaW49JHtpdGVtfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyBgJmlkX2luPSR7aXRlbX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVwb25zZSA9IGF3YWl0IFJlcG9zaXRvcnkuZ2V0KGAke2Jhc2VVcmx9L2JyYW5kcz8ke3F1ZXJ5fWApXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiAoeyBlcnJvcjogSlNPTi5zdHJpbmdpZnkoZXJyb3IpIH0pKTtcbiAgICAgICAgcmV0dXJuIHJlcG9uc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0UHJvZHVjdHNCeVByaWNlUmFuZ2UocGF5bG9hZCkge1xuICAgICAgICBjb25zdCByZXBvbnNlID0gYXdhaXQgUmVwb3NpdG9yeS5nZXQoXG4gICAgICAgICAgICBgJHtiYXNlVXJsfS9wcm9kdWN0cz8ke3NlcmlhbGl6ZVF1ZXJ5KHBheWxvYWQpfWBcbiAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gKHsgZXJyb3I6IEpTT04uc3RyaW5naWZ5KGVycm9yKSB9KSk7XG4gICAgICAgIHJldHVybiByZXBvbnNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IFByb2R1Y3RSZXBvc2l0b3J5KCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuY29uc3QgYmFzZURvbWFpbiA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgcHJvZHVjdHNcbmV4cG9ydCBjb25zdCBiYXNlUG9zdFVybCA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgcG9zdFxuZXhwb3J0IGNvbnN0IGJhc2VTdG9yZVVSTCA9ICdodHRwczovL2JldGEuYXBpbm91dGhlbWVzLmNvbSc7IC8vIEFQSSBmb3IgdmVuZG9yKHN0b3JlKVxuXG5leHBvcnQgY29uc3QgY3VzdG9tSGVhZGVycyA9IHtcbiAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn07XG5cbmV4cG9ydCBjb25zdCBiYXNlVXJsID0gYCR7YmFzZURvbWFpbn1gO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVcmwsXG4gICAgaGVhZGVyczogY3VzdG9tSGVhZGVycyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2VyaWFsaXplUXVlcnkgPSAocXVlcnkpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocXVlcnkpXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgICAoa2V5KSA9PlxuICAgICAgICAgICAgICAgIGAke2VuY29kZVVSSUNvbXBvbmVudChrZXkpfT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeVtrZXldKX1gXG4gICAgICAgIClcbiAgICAgICAgLmpvaW4oJyYnKTtcbn07XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgU1dJVENIX0RFTU9fUEFORUw6ICdTV0lUQ0hfREVNT19QQU5FTCcsXG4gICAgU1dJVENIX0RFTU9fUEFORUxfU1VDQ0VTUzogJ1NXSVRDSF9ERU1PX1BBTkVMX1NVQ0NFU1MnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaERlbW9QYW5lbChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuU1dJVENIX0RFTU9fUEFORUwsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaERlbW9QYW5lbFN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlNXSVRDSF9ERU1PX1BBTkVMX1NVQ0NFU1MsIHBheWxvYWQgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xuICAgIGlzU2hvd0RlbW9QYW5lbDogZmFsc2UsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuU1dJVENIX0RFTU9fUEFORUxfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBpc1Nob3dEZW1vUGFuZWw6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuXG5pbXBvcnQgeyBhY3Rpb25UeXBlcywgc3dpdGNoRGVtb1BhbmVsU3VjY2VzcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZnVuY3Rpb24qIHN3aXRjaERlbW9QYW5lbCh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBheWxvYWQucGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChzd2l0Y2hEZW1vUGFuZWxTdWNjZXNzKHBheWxvYWQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5TV0lUQ0hfREVNT19QQU5FTCwgc3dpdGNoRGVtb1BhbmVsKV0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIExPR0lOX1JFUVVFU1Q6ICdMT0dJTl9SRVFVRVNUJyxcbiAgICBMT0dJTl9TVUNDRVNTOiAnTE9HSU5fU1VDQ0VTUycsXG4gICAgTE9HT1VUOiAnTE9HT1VUJyxcbiAgICBMT0dPVVRfU1VDQ0VTUzogJ0xPR09VVF9TVUNDRVNTJyxcbiAgICBDSEVDS19BVVRIT1JJWkFUSU9OOiAnQ0hFQ0tfQVVUSE9SSVpBVElPTicsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HSU5fUkVRVUVTVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW5TdWNjZXNzKCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1MgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5MT0dPVVQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ091dFN1Y2Nlc3MoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuTE9HT1VUX1NVQ0NFU1MgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0ge1xuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkxPR0lOX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgaXNMb2dnZWRJbjogdHJ1ZSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5MT0dPVVRfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBpc0xvZ2dlZEluOiBmYWxzZSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7bm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCB7IGFjdGlvblR5cGVzLCBsb2dpblN1Y2Nlc3MsIGxvZ091dFN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XG5cbmNvbnN0IG1vZGFsU3VjY2VzcyA9IHR5cGUgPT4ge1xuICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XG4gICAgICAgIG1lc3NhZ2U6ICdXZWxsY29tZSBiYWNrJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdZb3UgYXJlIGxvZ2luIHN1Y2Nlc3NmdWwhJyxcbiAgICB9KTtcbn07XG5cbmNvbnN0IG1vZGFsV2FybmluZyA9IHR5cGUgPT4ge1xuICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XG4gICAgICAgIG1lc3NhZ2U6ICdHb29kIGJ5ZSEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1lvdXIgYWNjb3VudCBoYXMgYmVlbiBsb2dnZWQgb3V0IScsXG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiogbG9naW5TYWdhKCkge1xuICAgIHRyeSB7XG4gICAgICAgIHlpZWxkIHB1dChsb2dpblN1Y2Nlc3MoKSk7XG4gICAgICAgIG1vZGFsU3VjY2Vzcygnc3VjY2VzcycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGxvZ091dFNhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KGxvZ091dFN1Y2Nlc3MoKSk7XG4gICAgICAgIG1vZGFsV2FybmluZygnd2FybmluZycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkxPR0lOX1JFUVVFU1QsIGxvZ2luU2FnYSldKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5MT0dPVVQsIGxvZ091dFNhZ2EpXSk7XG59XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgR0VUX0NBUlQ6ICdHRVRfQ0FSVCcsXG4gICAgR0VUX0NBUlRfU1VDQ0VTUzogJ0dFVF9DQVJUX1NVQ0NFU1MnLFxuICAgIEdFVF9DQVJUX0VSUk9SOiAnR0VUX0NBUlRfRVJST1InLFxuXG4gICAgR0VUX0NBUlRfVE9UQUxfUVVBTlRJVFk6ICdHRVRfQ0FSVF9UT1RBTF9RVUFOVElUWScsXG4gICAgR0VUX0NBUlRfVE9UQUxfUVVBTlRJVFlfU1VDQ0VTUzogJ0dFVF9DQVJUX1RPVEFMX1FVQU5USVRZX1NVQ0NFU1MnLFxuXG4gICAgQUREX0lURU06ICdBRERfSVRFTScsXG4gICAgUkVNT1ZFX0lURU06ICdSRU1PVkVfSVRFTScsXG5cbiAgICBDTEVBUl9DQVJUOiAnQ0xFQVJfQ0FSVCcsXG4gICAgQ0xFQVJfQ0FSVF9TVUNDRVNTOiAnQ0xFQVJfQ0FSVF9TVUNDRVNTJyxcbiAgICBDTEVBUl9DQVJUX0VSUk9SOiAnQ0xFQVJfQ0FSVF9FUlJPUicsXG5cbiAgICBJTkNSRUFTRV9RVFk6ICdJTkNSRUFTRV9RVFknLFxuICAgIElOQ1JFQVNFX1FUWV9TVUNDRVNTOiAnSU5DUkVBU0VfUVRZX1NVQ0NFU1MnLFxuICAgIElOQ1JFQVNFX1FUWV9FUlJPUjogJ0lOQ1JFQVNFX1FUWV9FUlJPUicsXG5cbiAgICBERUNSRUFTRV9RVFk6ICdERUNSRUFTRV9RVFknLFxuICAgIFVQREFURV9DQVJUOiAnVVBEQVRFX0NBUlQnLFxuXG4gICAgVVBEQVRFX0NBUlRfU1VDQ0VTUzogJ1VQREFURV9DQVJUX1NVQ0NFU1MnLFxuICAgIFVQREFURV9DQVJUX0VSUk9SOiAnVVBEQVRFX0NBUlRfRVJST1InLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnQoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NBUlQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRTdWNjZXNzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DQVJUX1NVQ0NFU1MsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcnRFcnJvcihlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DQVJUX0VSUk9SLFxuICAgICAgICBlcnJvcixcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSXRlbShwcm9kdWN0KSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQUREX0lURU0sIHByb2R1Y3QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUl0ZW0ocHJvZHVjdCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLlJFTU9WRV9JVEVNLCBwcm9kdWN0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmNyZWFzZUl0ZW1RdHkocHJvZHVjdCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLklOQ1JFQVNFX1FUWSwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjcmVhc2VJdGVtUXR5KHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5ERUNSRUFTRV9RVFksIHByb2R1Y3QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNhcnRTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfQ0FSVF9TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDYXJ0RXJyb3IocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9DQVJUX0VSUk9SLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRDYXJ0ID0ge1xuICAgIGNhcnRJdGVtczogW10sXG4gICAgYW1vdW50OiAwLFxuICAgIGNhcnRUb3RhbDogMCxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0Q2FydCwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9DQVJUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQ0FSVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydEl0ZW1zIH0sXG4gICAgICAgICAgICAgICAgLi4ueyBhbW91bnQ6IGFjdGlvbi5wYXlsb2FkLmFtb3VudCB9LFxuICAgICAgICAgICAgICAgIC4uLnsgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0VG90YWwgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuQ0xFQVJfQ0FSVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGNhcnRJdGVtczogYWN0aW9uLnBheWxvYWQuY2FydEl0ZW1zIH0sXG4gICAgICAgICAgICAgICAgLi4ueyBhbW91bnQ6IGFjdGlvbi5wYXlsb2FkLmFtb3VudCB9LFxuICAgICAgICAgICAgICAgIC4uLnsgY2FydFRvdGFsOiBhY3Rpb24ucGF5bG9hZC5jYXJ0VG90YWwgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0NBUlRfRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgZXJyb3I6IGFjdGlvbi5lcnJvciB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfQ0FSVF9FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5cbmltcG9ydCB7XG4gICAgYWN0aW9uVHlwZXMsXG4gICAgZ2V0Q2FydEVycm9yLFxuICAgIGdldENhcnRTdWNjZXNzLFxuICAgIHVwZGF0ZUNhcnRTdWNjZXNzLFxuICAgIHVwZGF0ZUNhcnRFcnJvcixcbn0gZnJvbSAnLi9hY3Rpb24nO1xuXG5jb25zdCBtb2RhbFN1Y2Nlc3MgPSAodHlwZSkgPT4ge1xuICAgIG5vdGlmaWNhdGlvblt0eXBlXSh7XG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHByb2R1Y3QgaGFzIGJlZW4gYWRkZWQgdG8geW91ciBjYXJ0IScsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0pO1xufTtcbmNvbnN0IG1vZGFsV2FybmluZyA9ICh0eXBlKSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ1JlbW92ZSBBIEl0ZW0nLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgcHJvZHVjdCBoYXMgYmVlbiByZW1vdmVkIGZyb20geW91ciBjYXJ0IScsXG4gICAgICAgIGR1cmF0aW9uOiAxLFxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUFtb3VudCA9IChvYmopID0+XG4gICAgT2JqZWN0LnZhbHVlcyhvYmopXG4gICAgICAgIC5yZWR1Y2UoKGFjYywgeyBxdWFudGl0eSwgcHJpY2UgfSkgPT4gYWNjICsgcXVhbnRpdHkgKiBwcmljZSwgMClcbiAgICAgICAgLnRvRml4ZWQoMik7XG5cbmZ1bmN0aW9uKiBnZXRDYXJ0U2FnYSgpIHtcbiAgICB0cnkge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2FydFN1Y2Nlc3MoKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dChnZXRDYXJ0RXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogYWRkSXRlbVNhZ2EocGF5bG9hZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcGF5bG9hZDtcbiAgICAgICAgY29uc3QgbG9jYWxDYXJ0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc2lzdDptYXJ0ZnVyeScpKVxuICAgICAgICAgICAgLmNhcnQ7XG4gICAgICAgIGxldCBjdXJyZW50Q2FydCA9IEpTT04ucGFyc2UobG9jYWxDYXJ0KTtcbiAgICAgICAgbGV0IGV4aXN0SXRlbSA9IGN1cnJlbnRDYXJ0LmNhcnRJdGVtcy5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGV4aXN0SXRlbSkge1xuICAgICAgICAgICAgZXhpc3RJdGVtLnF1YW50aXR5ICs9IHByb2R1Y3QucXVhbnRpdHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoIXByb2R1Y3QucXVhbnRpdHkpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnF1YW50aXR5ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRDYXJ0LmNhcnRJdGVtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnRDYXJ0LmFtb3VudCA9IGNhbGN1bGF0ZUFtb3VudChjdXJyZW50Q2FydC5jYXJ0SXRlbXMpO1xuICAgICAgICBjdXJyZW50Q2FydC5jYXJ0VG90YWwrKztcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZUNhcnRTdWNjZXNzKGN1cnJlbnRDYXJ0KSk7XG4gICAgICAgIG1vZGFsU3VjY2Vzcygnc3VjY2VzcycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2FydEVycm9yKGVycikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHJlbW92ZUl0ZW1TYWdhKHBheWxvYWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHBheWxvYWQ7XG4gICAgICAgIGxldCBsb2NhbENhcnQgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc2lzdDptYXJ0ZnVyeScpKS5jYXJ0XG4gICAgICAgICk7XG4gICAgICAgIGxldCBpbmRleCA9IGxvY2FsQ2FydC5jYXJ0SXRlbXMuZmluZEluZGV4KFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcbiAgICAgICAgKTtcbiAgICAgICAgbG9jYWxDYXJ0LmNhcnRUb3RhbCA9IGxvY2FsQ2FydC5jYXJ0VG90YWwgLSBwcm9kdWN0LnF1YW50aXR5O1xuICAgICAgICBsb2NhbENhcnQuY2FydEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGxvY2FsQ2FydC5hbW91bnQgPSBjYWxjdWxhdGVBbW91bnQobG9jYWxDYXJ0LmNhcnRJdGVtcyk7XG4gICAgICAgIGlmIChsb2NhbENhcnQuY2FydEl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbG9jYWxDYXJ0LmNhcnRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgbG9jYWxDYXJ0LmFtb3VudCA9IDA7XG4gICAgICAgICAgICBsb2NhbENhcnQuY2FydFRvdGFsID0gMDtcbiAgICAgICAgfVxuICAgICAgICB5aWVsZCBwdXQodXBkYXRlQ2FydFN1Y2Nlc3MobG9jYWxDYXJ0KSk7XG4gICAgICAgIG1vZGFsV2FybmluZygnd2FybmluZycpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q2FydEVycm9yKGVycikpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGluY3JlYXNlUXR5U2FnYShwYXlsb2FkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwYXlsb2FkO1xuICAgICAgICBsZXQgbG9jYWxDYXJ0ID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BlcnNpc3Q6bWFydGZ1cnknKSkuY2FydFxuICAgICAgICApO1xuICAgICAgICBsZXQgc2VsZWN0ZWRJdGVtID0gbG9jYWxDYXJ0LmNhcnRJdGVtcy5maW5kKFxuICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnF1YW50aXR5Kys7XG4gICAgICAgICAgICBsb2NhbENhcnQuY2FydFRvdGFsKys7XG4gICAgICAgICAgICBsb2NhbENhcnQuYW1vdW50ID0gY2FsY3VsYXRlQW1vdW50KGxvY2FsQ2FydC5jYXJ0SXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDYXJ0U3VjY2Vzcyhsb2NhbENhcnQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldENhcnRFcnJvcihlcnIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBkZWNyZWFzZUl0ZW1RdHlTYWdhKHBheWxvYWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHBheWxvYWQ7XG4gICAgICAgIGNvbnN0IGxvY2FsQ2FydCA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzaXN0Om1hcnRmdXJ5JykpLmNhcnRcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IGxvY2FsQ2FydC5jYXJ0SXRlbXMuZmluZChcbiAgICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkSXRlbSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLnF1YW50aXR5LS07XG4gICAgICAgICAgICBsb2NhbENhcnQuY2FydFRvdGFsLS07XG4gICAgICAgICAgICBsb2NhbENhcnQuYW1vdW50ID0gY2FsY3VsYXRlQW1vdW50KGxvY2FsQ2FydC5jYXJ0SXRlbXMpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDYXJ0U3VjY2Vzcyhsb2NhbENhcnQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldENhcnRFcnJvcihlcnIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBjbGVhckNhcnRTYWdhKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVtcHR5Q2FydCA9IHtcbiAgICAgICAgICAgIGNhcnRJdGVtczogW10sXG4gICAgICAgICAgICBhbW91bnQ6IDAsXG4gICAgICAgICAgICBjYXJ0VG90YWw6IDAsXG4gICAgICAgIH07XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVDYXJ0U3VjY2VzcyhlbXB0eUNhcnQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZUNhcnRFcnJvcihlcnIpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQ0FSVCwgZ2V0Q2FydFNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQUREX0lURU0sIGFkZEl0ZW1TYWdhKV0pO1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLlJFTU9WRV9JVEVNLCByZW1vdmVJdGVtU2FnYSldKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5JTkNSRUFTRV9RVFksIGluY3JlYXNlUXR5U2FnYSldKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5ERUNSRUFTRV9RVFksIGRlY3JlYXNlSXRlbVF0eVNhZ2EpXSk7XG59XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgR0VUX0NPTExFQ1RJT05TOiAnR0VUX0NPTExFQ1RJT05TJyxcbiAgICBHRVRfQ09MTEVDVElPTlNfU1VDQ0VTUzogJ0dFVF9DT0xMRUNUSU9OU19TVUNDRVNTJyxcblxuICAgIEdFVF9DT0xMRUNUSU9OOiAnR0VUX0NPTExFQ1RJT04nLFxuICAgIEdFVF9DT0xMRUNUSU9OX1NVQ0NFU1M6ICdHRVRfQ09MTEVDVElPTl9TVUNDRVNTJyxcblxuICAgIEdFVF9DQVRFR09SSUVTOiAnR0VUX0NBVEVHT1JJRVMnLFxuICAgIEdFVF9DQVRFR09SSUVTX1NVQ0NFU1M6ICdHRVRfQ0FURUdPUklFU19TVUNDRVNTJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xsZWN0aW9ucyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NPTExFQ1RJT05TLCBwYXlsb2FkIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xsZWN0aW9uc1N1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DT0xMRUNUSU9OU19TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXRlZ29yaWVzKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQ0FURUdPUklFUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllc1N1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DQVRFR09SSUVTX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbGxlY3Rpb24ocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DT0xMRUNUSU9OUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvblN1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9DT0xMRUNUSU9OU19TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBjb2xsZWN0aW9uczogW10sXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgY29sbGVjdGlvbjoge30sXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0NPTExFQ1RJT05TX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgY29sbGVjdGlvbnM6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9DT0xMRUNUSU9OX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgY29sbGVjdGlvbjogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0NBVEVHT1JJRVNfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBjYXRlZ29yaWVzOiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAnZXM2LXByb21pc2UnO1xuaW1wb3J0IHtcbiAgICBhY3Rpb25UeXBlcyxcbiAgICBnZXRDYXRlZ29yaWVzU3VjY2VzcyxcbiAgICBnZXRDb2xsZWN0aW9uc1N1Y2Nlc3MsXG59IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCBDb2xsZWN0aW9uUmVwb3NpdG9yeSBmcm9tICcuLi8uLi9yZXBvc2l0b3JpZXMvQ29sbGVjdGlvblJlcG9zaXRvcnknO1xucG9seWZpbGwoKTtcblxuZnVuY3Rpb24qIGdldENvbGxlY3Rpb25zKHsgcGF5bG9hZCB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoQ29sbGVjdGlvblJlcG9zaXRvcnkuZ2V0Q29sbGVjdGlvbnMsIHBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q29sbGVjdGlvbnNTdWNjZXNzKGRhdGEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5mdW5jdGlvbiogZ2V0Q29sbGVjdGlvbkJ5Q2F0ZWdvcmllcyh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKFxuICAgICAgICAgICAgQ29sbGVjdGlvblJlcG9zaXRvcnkuZ2V0Q2F0ZWdvcmllc0J5U2x1ZyxcbiAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgKTtcbiAgICAgICAgeWllbGQgcHV0KGdldENhdGVnb3JpZXNTdWNjZXNzKGRhdGEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQ09MTEVDVElPTlMsIGdldENvbGxlY3Rpb25zKV0pO1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQ0FURUdPUklFUywgZ2V0Q29sbGVjdGlvbkJ5Q2F0ZWdvcmllcyksXG4gICAgXSk7XG59XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgR0VUX0NPTVBBUkVfTElTVDogJ0dFVF9DT01QQVJFX0xJU1QnLFxuICAgIEdFVF9DT01QQVJFX0xJU1RfU1VDQ0VTUzogJ0dFVF9DT01QQVJFX0xJU1RfU1VDQ0VTUycsXG4gICAgR0VUX0NPTVBBUkVfTElTVF9FUlJPUjogJ0dFVF9DT01QQVJFX0xJU1RfRVJST1InLFxuXG4gICAgQUREX0lURU1fQ09NUEFSRTogJ0FERF9JVEVNX0NPTVBBUkUnLFxuICAgIFJFTU9WRV9JVEVNX0NPTVBBUkU6ICdSRU1PVkVfSVRFTV9DT01QQVJFJyxcblxuICAgIFVQREFURV9DT01QQVJFX0xJU1Q6ICdVUERBVEVfQ09NUEFSRV9MSVNUJyxcbiAgICBVUERBVEVfQ09NUEFSRV9MSVNUX1NVQ0NFU1M6ICdVUERBVEVfQ09NUEFSRV9MSVNUX1NVQ0NFU1MnLFxuICAgIFVQREFURV9DT01QQVJFX0xJU1RfRVJST1I6ICdVUERBVEVfQ09NUEFSRV9MSVNUX0VSUk9SJyxcblxuICAgIENMRUFSX0NPTVBBUkVfTElTVDogJ0NMRUFSX0NPTVBBUkVfTElTVCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFyZUxpc3QoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0NPTVBBUkVfTElTVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29tcGFyZUxpc3RTdWNjZXNzKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQ09NUEFSRV9MSVNUX1NVQ0NFU1MsXG4gICAgICAgIGRhdGEsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Ub0NvbXBhcmUocHJvZHVjdCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkFERF9JVEVNX0NPTVBBUkUsIHByb2R1Y3QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBhcmVJdGVtKHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfSVRFTV9DT01QQVJFLCBwcm9kdWN0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNvbXBhcmUoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuQ0xFQVJfQ0FSVCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29tcGFyZUxpc3RTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfQ09NUEFSRV9MSVNUX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdENhcnQgPSB7XG4gICAgY29tcGFyZUl0ZW1zOiBbXSxcbiAgICBjb21wYXJlVG90YWw6IDAsXG59O1xuXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlID0gaW5pdENhcnQsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfQ09NUEFSRV9MSVNUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgY2FydDogYWN0aW9uLmRhdGEgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuVVBEQVRFX0NPTVBBUkVfTElTVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVJdGVtczogYWN0aW9uLnBheWxvYWQuY29tcGFyZUl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICBjb21wYXJlVG90YWw6IGFjdGlvbi5wYXlsb2FkLmNvbXBhcmVUb3RhbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfQ09NUEFSRV9MSVNUX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGVycm9yOiBhY3Rpb24uZXJyb3IgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgeyBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gICAgYWN0aW9uVHlwZXMsXG4gICAgZ2V0Q29tcGFyZUxpc3RTdWNjZXNzLFxuICAgIHVwZGF0ZUNvbXBhcmVMaXN0U3VjY2VzcyxcbiAgICBhZGRJdGVtU3VjY2Vzcyxcbn0gZnJvbSAnLi9hY3Rpb24nO1xuXG5jb25zdCBtb2RhbFN1Y2Nlc3MgPSB0eXBlID0+IHtcbiAgICBub3RpZmljYXRpb25bdHlwZV0oe1xuICAgICAgICBtZXNzYWdlOiAnQWRkZWQgdG8gY29tcGFyZSBsaXN0IScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBwcm9kdWN0IGhhcyBiZWVuIGFkZGVkIHRvIGNvbXBhcmUgbGlzdCEnLFxuICAgIH0pO1xufTtcblxuY29uc3QgbW9kYWxXYXJuaW5nID0gdHlwZSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ1JlbW92ZWQgdG8gY29tcGFyZSBsaXN0JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIHByb2R1Y3QgaGFzIGJlZW4gcmVtb3ZlZCBmcm9tIGNvbXBhcmUgbGlzdCEnLFxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24qIGdldENvbXBhcmVMaXN0U2FnYSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBsb2NhbENvbXBhcmVMaXN0ID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzaXN0Om1hcnRmdXJ5JylcbiAgICAgICAgKS5jYXJ0O1xuICAgICAgICB5aWVsZCBwdXQoZ2V0Q29tcGFyZUxpc3RTdWNjZXNzKGxvY2FsQ29tcGFyZUxpc3QpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBhZGRJdGVtU2FnYShwYXlsb2FkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwYXlsb2FkO1xuICAgICAgICBsZXQgbG9jYWxDb21wYXJlID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BlcnNpc3Q6bWFydGZ1cnknKSkuY29tcGFyZVxuICAgICAgICApO1xuXG4gICAgICAgIGxldCBleGlzdEl0ZW0gPSBsb2NhbENvbXBhcmUuY29tcGFyZUl0ZW1zLmZpbmQoXG4gICAgICAgICAgICBpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoIWV4aXN0SXRlbSkge1xuICAgICAgICAgICAgcHJvZHVjdC5xdWFudGl0eSA9IDE7XG4gICAgICAgICAgICBsb2NhbENvbXBhcmUuY29tcGFyZUl0ZW1zLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICBsb2NhbENvbXBhcmUuY29tcGFyZVRvdGFsKys7XG4gICAgICAgICAgICB5aWVsZCBwdXQodXBkYXRlQ29tcGFyZUxpc3RTdWNjZXNzKGxvY2FsQ29tcGFyZSkpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogcmVtb3ZlSXRlbVNhZ2EocGF5bG9hZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcGF5bG9hZDtcbiAgICAgICAgbGV0IGxvY2FsQ29tcGFyZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzaXN0Om1hcnRmdXJ5JykpLmNvbXBhcmVcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGluZGV4ID0gbG9jYWxDb21wYXJlLmNvbXBhcmVJdGVtcy5pbmRleE9mKHByb2R1Y3QpO1xuICAgICAgICBsb2NhbENvbXBhcmUuY29tcGFyZVRvdGFsID0gbG9jYWxDb21wYXJlLmNvbXBhcmVUb3RhbCAtIDE7XG4gICAgICAgIGxvY2FsQ29tcGFyZS5jb21wYXJlSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZUNvbXBhcmVMaXN0U3VjY2Vzcyhsb2NhbENvbXBhcmUpKTtcbiAgICAgICAgbW9kYWxXYXJuaW5nKCd3YXJuaW5nJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogY2xlYXJDb21wYXJlTGlzdFNhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZW1wdHlDYXJ0ID0ge1xuICAgICAgICAgICAgY29tcGFyZUl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGNvbXBhcmVUb3RhbDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZUNvbXBhcmVMaXN0U3VjY2VzcyhlbXB0eUNhcnQpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQ09NUEFSRV9MSVNULCBnZXRDb21wYXJlTGlzdFNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQUREX0lURU1fQ09NUEFSRSwgYWRkSXRlbVNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuUkVNT1ZFX0lURU1fQ09NUEFSRSwgcmVtb3ZlSXRlbVNhZ2EpXSk7XG59XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgR0VUX0JBTk5FUlM6ICdHRVRfQkFOTkVSUycsXG4gICAgR0VUX0JBTk5FUlNfU1VDQ0VTUzogJ0dFVF9CQU5ORVJTX1NVQ0NFU1MnLFxuXG4gICAgR0VUX1BST01PVElPTlM6ICdHRVRfUFJPTU9USU9OUycsXG4gICAgR0VUX1BST01PVElPTlNfU1VDQ0VTUzogJ0dFVF9QUk9NT1RJT05TX1NVQ0NFU1MnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhbm5lcnNCeVNsdWdzKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfQkFOTkVSUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFubmVyc1N1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9CQU5ORVJTX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb21vdGlvbnNCeVNsdWdzKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUFJPTU9USU9OUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvbW90aW9uc1N1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QUk9NT1RJT05TX1NVQ0NFU1MsXG4gICAgICAgIHBheWxvYWQsXG4gICAgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGJhbm5lcnM6IFtdLFxuICAgIHByb21vdGlvbnM6IFtdLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9CQU5ORVJTX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgYmFubmVyczogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX1BST01PVElPTlNfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBwcm9tb3Rpb25zOiBhY3Rpb24ucGF5bG9hZCB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgY2FsbCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAnZXM2LXByb21pc2UnO1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMsIGdldEJhbm5lcnNTdWNjZXNzLCBnZXRQcm9tb3Rpb25zU3VjY2VzcyB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCBNZWRpYVJlcG9zaXRvcnkgZnJvbSAnLi4vLi4vcmVwb3NpdG9yaWVzL01lZGlhUmVwb3NpdG9yeSc7XG5cbnBvbHlmaWxsKCk7XG5cbmZ1bmN0aW9uKiBnZXRCYW5uZXJzQnlTbHVncyh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCBjYWxsKE1lZGlhUmVwb3NpdG9yeS5nZXRCYW5uZXJzQnlTbHVncywgcGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRCYW5uZXJzU3VjY2VzcyhkYXRhKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UHJvbW90aW9uc0J5U2x1Z3MoeyBwYXlsb2FkIH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0geWllbGQgY2FsbChNZWRpYVJlcG9zaXRvcnkuZ2V0UHJvbW90aW9uc0J5U2x1Z3MsIHBheWxvYWQpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvbW90aW9uc1N1Y2Nlc3MoZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9CQU5ORVJTLCBnZXRCYW5uZXJzQnlTbHVncyldKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfUFJPTU9USU9OUywgZ2V0UHJvbW90aW9uc0J5U2x1Z3MpXSk7XG59XG4iLCJleHBvcnQgY29uc3QgYWN0aW9uVHlwZXMgPSB7XG4gICAgR0VUX1BPU1RTOiAnR0VUX1BPU1RTJyxcbiAgICBHRVRfUE9TVFNfU1VDQ0VTUzogJ0dFVF9QT1NUU19TVUNDRVNTJyxcbiAgICBHRVRfUE9TVFNfRVJST1I6ICdHRVRfUE9TVFNfRVJST1InLFxuXG4gICAgR0VUX0ZFQVRVUkVEX1BPU1Q6ICdHRVRfRkVBVFVSRURfUE9TVCcsXG4gICAgR0VUX0ZFQVRVUkVEX1BPU1RfU1VDQ0VTUzogJ0dFVF9GRUFUVVJFRF9QT1NUX1NVQ0NFU1MnLFxuICAgIEdFVF9GRUFUVVJFRF9QT1NUX0VSUk9SOiAnR0VUX0ZFQVRVUkVEX1BPU1RfRVJST1InLFxuXG4gICAgR0VUX1JFQ0VOVF9QT1NUUzogJ0dFVF9SRUNFTlRfUE9TVFMnLFxuICAgIEdFVF9SRUNFTlRfUE9TVFNfU1VDQ0VTUzogJ0dFVF9SRUNFTlRfUE9TVFNfU1VDQ0VTUycsXG4gICAgR0VUX1JFQ0VOVF9QT1NUU19FUlJPUjogJ0dFVF9SRUNFTlRfUE9TVFNfRVJST1InLFxuXG4gICAgR0VUX1BPU1RfQ0FURUdPUklFUzogJ0dFVF9QT1NUX0NBVEVHT1JJRVMnLFxuICAgIEdFVF9QT1NUX0NBVEVHT1JJRVNfU1VDQ0VTUzogJ0dFVF9QT1NUX0NBVEVHT1JJRVNfU1VDQ0VTUycsXG4gICAgR0VUX1BPU1RfQ0FURUdPUklFU19FUlJPUjogJ0dFVF9QT1NUX0NBVEVHT1JJRVNfRVJST1InLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QT1NUUyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zdHNTdWNjZXNzKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUE9TVFNfU1VDQ0VTUyxcbiAgICAgICAgZGF0YVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3N0c0Vycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1BPU1RTX0VSUk9SLFxuICAgICAgICBlcnJvclxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RmVhdHVyZWRQb3N0KCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9GRUFUVVJFRF9QT1NUIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGZWF0dXJlZFBvc3RTdWNjZXNzKGRhdGEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfRkVBVFVSRURfUE9TVF9TVUNDRVNTLFxuICAgICAgICBkYXRhXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZlYXR1cmVkUG9zdEVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0ZFQVRVUkVEX1BPU1RfRVJST1IsXG4gICAgICAgIGVycm9yXG4gICAgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNlbnRQb3N0cygpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUkVDRU5UX1BPU1RTIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNlbnRQb3N0c1N1Y2Nlc3MoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9SRUNFTlRfUE9TVFNfU1VDQ0VTUyxcbiAgICAgICAgZGF0YVxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWNlbnRQb3N0c0Vycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1JFQ0VOVF9QT1NUU19FUlJPUixcbiAgICAgICAgZXJyb3JcbiAgICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RDYXRlZ29yaWVzKCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QT1NUX0NBVEVHT1JJRVMgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RDYXRlZ29yaWVzU3VjY2VzcyhkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1BPU1RfQ0FURUdPUklFU19TVUNDRVNTLFxuICAgICAgICBkYXRhXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc3RDYXRlZ29yaWVzRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUE9TVF9DQVRFR09SSUVTX0VSUk9SLFxuICAgICAgICBlcnJvclxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHBvc3RzOiBbXSxcbiAgICBmZWF0dXJlZFBvc3Q6IG51bGwsXG4gICAgcmVjZW50UG9zdDogW10sXG4gICAgY2F0ZWdvcmllczogW10sXG4gICAgZXJyb3I6IGZhbHNlLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9QT1NUU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IHBvc3RzOiBhY3Rpb24uZGF0YSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfRkVBVFVSRURfUE9TVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGZlYXR1cmVkUG9zdDogYWN0aW9uLmRhdGEgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX1JFQ0VOVF9QT1NUU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IHJlY2VudFBvc3Q6IGFjdGlvbi5kYXRhIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9QT1NUX0NBVEVHT1JJRVNfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBjYXRlZ29yaWVzOiBhY3Rpb24uZGF0YSB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9QT1NUU19FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9GRUFUVVJFRF9QT1NUX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGVycm9yOiBhY3Rpb24uZXJyb3IgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX1JFQ0VOVF9QT1NUU19FUlJPUjpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBlcnJvcjogYWN0aW9uLmVycm9yIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9QT1NUX0NBVEVHT1JJRVNfRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgZXJyb3I6IGFjdGlvbi5lcnJvciB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGFsbCwgcHV0LCB0YWtlTGF0ZXN0LCB0YWtlRXZlcnkgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgcG9seWZpbGwgfSBmcm9tICdlczYtcHJvbWlzZSc7XG5cbmltcG9ydCBibG9nR3JpZCBmcm9tICcuLi8uLi9wdWJsaWMvc3RhdGljL2RhdGEvYmxvZy1ncmlkJztcblxuaW1wb3J0IHtcbiAgICBhY3Rpb25UeXBlcyxcbiAgICBnZXRQb3N0c1N1Y2Nlc3MsXG4gICAgZ2V0RmVhdHVyZWRQb3N0U3VjY2VzcyxcbiAgICBnZXRQb3N0Q2F0ZWdvcmllc1N1Y2Nlc3MsXG4gICAgZ2V0UmVjZW50UG9zdHNTdWNjZXNzLFxuICAgIGdldFBvc3RzRXJyb3IsXG4gICAgZ2V0UmVjZW50UG9zdHNFcnJvcixcbiAgICBnZXRGZWF0dXJlZFBvc3RFcnJvcixcbiAgICBnZXRQb3N0Q2F0ZWdvcmllc0Vycm9yLFxufSBmcm9tICcuL2FjdGlvbic7XG5cbnBvbHlmaWxsKCk7XG5cbmZ1bmN0aW9uKiBnZXRQb3N0c1NhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGJsb2dHcmlkLnBvc3RzO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UG9zdHNTdWNjZXNzKGRhdGEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldFBvc3RzRXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0RmVhdHVyZWRQb3N0U2FnYSgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYmxvZ0dyaWQucG9zdEZlYXR1cmVzO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0RmVhdHVyZWRQb3N0U3VjY2VzcyhkYXRhKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dChnZXRGZWF0dXJlZFBvc3RFcnJvcihlcnIpKTtcbiAgICB9XG59XG5mdW5jdGlvbiogZ2V0UmVjZW50UG9zdFNhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGJsb2dHcmlkLnJlY2VudFBvc3RzO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UmVjZW50UG9zdHNTdWNjZXNzKGRhdGEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldFJlY2VudFBvc3RzRXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UG9zdENhdGVnb3JpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGJsb2dHcmlkLmJsb2dDYXRlZ29yaWVzO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UG9zdENhdGVnb3JpZXNTdWNjZXNzKGRhdGEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldFBvc3RDYXRlZ29yaWVzRXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9QT1NUUywgZ2V0UG9zdHNTYWdhKSxcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9GRUFUVVJFRF9QT1NULCBnZXRGZWF0dXJlZFBvc3RTYWdhKSxcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9SRUNFTlRfUE9TVFMsIGdldFJlY2VudFBvc3RTYWdhKSxcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9QT1NUX0NBVEVHT1JJRVMsIGdldFBvc3RDYXRlZ29yaWVzKSxcbiAgICBdKTtcbn1cbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBHRVRfUFJPRFVDVFM6ICdHRVRfUFJPRFVDVFMnLFxuICAgIEdFVF9QUk9EVUNUU19TVUNDRVNTOiAnR0VUX1BST0RVQ1RTX1NVQ0NFU1MnLFxuICAgIEdFVF9QUk9EVUNUU19FUlJPUjogJ0dFVF9QUk9EVUNUU19FUlJPUicsXG5cbiAgICBHRVRfUFJPRFVDVFNfQllfQ0FURUdPUlk6ICdHRVRfUFJPRFVDVFNfQllfQ0FURUdPUlknLFxuICAgIEdFVF9QUk9EVUNUU19CWV9QUklDRV9SQU5HRTogJ0dFVF9QUk9EVUNUU19CWV9QUklDRV9SQU5HRScsXG4gICAgR0VUX1BST0RVQ1RTX0JZX0JSQU5EOiAnR0VUX1BST0RVQ1RTX0JZX0JSQU5EJyxcbiAgICBHRVRfUFJPRFVDVFNfQllfS0VZV09SRDogJ0dFVF9QUk9EVUNUU19CWV9LRVlXT1JEJyxcbiAgICBHRVRfUFJPRFVDVFNfQllfS0VZV09SRF9TVUNDRVNTOiAnR0VUX1BST0RVQ1RTX0JZX0tFWVdPUkRfU1VDQ0VTUycsXG5cbiAgICBHRVRfUFJPRFVDVF9CWV9JRDogJ0dFVF9QUk9EVUNUX0JZX0lEJyxcbiAgICBHRVRfUFJPRFVDVF9CWV9JRF9TVUNDRVNTOiAnR0VUX1BST0RVQ1RfQllfSURfU1VDQ0VTUycsXG5cblxuICAgIEdFVF9UT1RBTF9PRl9QUk9EVUNUUzogJ0dFVF9UT1RBTF9PRl9QUk9EVUNUUycsXG4gICAgR0VUX1RPVEFMX09GX1BST0RVQ1RTX1NVQ0NFU1M6ICdHRVRfVE9UQUxfT0ZfUFJPRFVDVFNfU1VDQ0VTUycsXG5cbiAgICBHRVRfQlJBTkRTOiAnR0VUX0JSQU5EUycsXG4gICAgR0VUX0JSQU5EU19TVUNDRVNTOiAnR0VUX0JSQU5EU19TVUNDRVNTJyxcblxuICAgIEdFVF9QUk9EVUNUX0NBVEVHT1JJRVM6ICdHRVRfUFJPRFVDVF9DQVRFR09SSUVTJyxcbiAgICBHRVRfUFJPRFVDVF9DQVRFR09SSUVTX1NVQ0NFU1M6ICdHRVRfUFJPRFVDVF9DQVRFR09SSUVTX1NVQ0NFU1MnLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3RzKHBheWxvYWQpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVFMsIHBheWxvYWQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRvdGFsUHJvZHVjdHMoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1RPVEFMX09GX1BST0RVQ1RTIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCcmFuZHMoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0JSQU5EUyB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnJhbmRzU3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX0JSQU5EU19TVUNDRVNTLCBwYXlsb2FkIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllcygpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVF9DQVRFR09SSUVTIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0Q2F0ZWdvcmllc1N1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7IHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUX0NBVEVHT1JJRVNfU1VDQ0VTUywgcGF5bG9hZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxQcm9kdWN0c1N1Y2Nlc3MocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9UT1RBTF9PRl9QUk9EVUNUU19TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c1N1Y2Nlc3MoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUU19TVUNDRVNTLFxuICAgICAgICBkYXRhLFxuICAgIH07XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdEJ5S2V5d29yZHNTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVFNfQllfS0VZV09SRF9TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTaW5nbGVQcm9kdWN0c1N1Y2Nlc3MoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUX0JZX0lEX1NVQ0NFU1MsXG4gICAgICAgIGRhdGEsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3RzRXJyb3IoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVFNfRVJST1IsXG4gICAgICAgIGVycm9yLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVFNfQllfQ0FURUdPUlksXG4gICAgICAgIGNhdGVnb3J5LFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0J5QnJhbmQocGF5bG9hZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUU19CWV9CUkFORCxcbiAgICAgICAgcGF5bG9hZCxcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZHVjdHNCeUtleXdvcmQoa2V5d29yZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUU19CWV9LRVlXT1JELFxuICAgICAgICBrZXl3b3JkLFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9kdWN0c0J5SWQoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVF9CWV9JRCxcbiAgICAgICAgaWQsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3RzQnlQcmljZShwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1BST0RVQ1RTX0JZX1BSSUNFX1JBTkdFLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBhbGxQcm9kdWN0czogbnVsbCxcbiAgICBzaW5nbGVQcm9kdWN0OiBudWxsLFxuICAgIGVycm9yOiBmYWxzZSxcbiAgICB0b3RhbFByb2R1Y3RzOiAwLFxuICAgIGNhdGVnb3JpZXM6IG51bGwsXG4gICAgYnJhbmRzOiBbXSxcbiAgICBwcm9kdWN0c0xvYWRpbmc6IHRydWUsXG4gICAgcHJvZHVjdExvYWRpbmc6IHRydWUsXG4gICAgc2VhcmNoUmVzdWx0czogbnVsbCxcbn07XG5cbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVFNfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLi4ueyBhbGxQcm9kdWN0czogYWN0aW9uLmRhdGEsIHByb2R1Y3RzTG9hZGluZzogZmFsc2UgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX1RPVEFMX09GX1BST0RVQ1RTX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgdG90YWxQcm9kdWN0czogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX0JSQU5EU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGJyYW5kczogYWN0aW9uLnBheWxvYWQgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX1BST0RVQ1RfQ0FURUdPUklFU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGNhdGVnb3JpZXM6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUX0JZX0lEX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgc2luZ2xlUHJvZHVjdDogYWN0aW9uLmRhdGEsIHByb2R1Y3RMb2FkaW5nOiBmYWxzZSB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVFNfQllfS0VZV09SRF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IHNlYXJjaFJlc3VsdHM6IGFjdGlvbi5wYXlsb2FkIH0sXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX1BST0RVQ1RTX0VSUk9SOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGVycm9yOiBhY3Rpb24uZXJyb3IgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUV2ZXJ5LCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAnZXM2LXByb21pc2UnO1xuaW1wb3J0IFByb2R1Y3RSZXBvc2l0b3J5IGZyb20gJy4uLy4uL3JlcG9zaXRvcmllcy9Qcm9kdWN0UmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7XG4gICAgYWN0aW9uVHlwZXMsXG4gICAgZ2V0UHJvZHVjdHNFcnJvcixcbiAgICBnZXRQcm9kdWN0c1N1Y2Nlc3MsXG4gICAgZ2V0U2luZ2xlUHJvZHVjdHNTdWNjZXNzLFxuICAgIGdldFRvdGFsUHJvZHVjdHNTdWNjZXNzLFxuICAgIGdldFByb2R1Y3RDYXRlZ29yaWVzU3VjY2VzcyxcbiAgICBnZXRCcmFuZHNTdWNjZXNzLFxuICAgIGdldFByb2R1Y3RCeUtleXdvcmRzU3VjY2Vzcyxcbn0gZnJvbSAnLi9hY3Rpb24nO1xucG9seWZpbGwoKTtcblxuZnVuY3Rpb24qIGdldFByb2R1Y3RzKHsgcGF5bG9hZCB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHlpZWxkIGNhbGwoUHJvZHVjdFJlcG9zaXRvcnkuZ2V0UmVjb3JkcywgcGF5bG9hZCk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0c1N1Y2Nlc3MoZGF0YSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNFcnJvcihlcnIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBnZXRUb3RhbE9mUHJvZHVjdHMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChQcm9kdWN0UmVwb3NpdG9yeS5nZXRUb3RhbFJlY29yZHMpO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0VG90YWxQcm9kdWN0c1N1Y2Nlc3MocmVzdWx0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0QnJhbmRzKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoUHJvZHVjdFJlcG9zaXRvcnkuZ2V0QnJhbmRzKTtcbiAgICAgICAgeWllbGQgcHV0KGdldEJyYW5kc1N1Y2Nlc3MocmVzdWx0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UHJvZHVjdENhdGVnb3JpZXMoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChQcm9kdWN0UmVwb3NpdG9yeS5nZXRQcm9kdWN0Q2F0ZWdvcmllcyk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0Q2F0ZWdvcmllc1N1Y2Nlc3MocmVzdWx0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UHJvZHVjdEJ5SWQoeyBpZCB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHlpZWxkIGNhbGwoUHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvZHVjdHNCeUlkLCBpZCk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRTaW5nbGVQcm9kdWN0c1N1Y2Nlc3MocHJvZHVjdCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNFcnJvcihlcnIpKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uKiBnZXRQcm9kdWN0QnlDYXRlZ29yeSh7IGNhdGVnb3J5IH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFxuICAgICAgICAgICAgUHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvZHVjdHNCeUNhdGVnb3J5LFxuICAgICAgICAgICAgY2F0ZWdvcnlcbiAgICAgICAgKTtcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzU3VjY2VzcyhyZXN1bHQpKTtcbiAgICAgICAgeWllbGQgcHV0KGdldFRvdGFsUHJvZHVjdHNTdWNjZXNzKHJlc3VsdC5sZW5ndGgpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzRXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UHJvZHVjdEJ5UHJpY2VSYW5nZSh7IHBheWxvYWQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0geWllbGQgY2FsbChcbiAgICAgICAgICAgIFByb2R1Y3RSZXBvc2l0b3J5LmdldFByb2R1Y3RzQnlQcmljZVJhbmdlLFxuICAgICAgICAgICAgcGF5bG9hZFxuICAgICAgICApO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNTdWNjZXNzKHByb2R1Y3RzKSk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRUb3RhbFByb2R1Y3RzU3VjY2Vzcyhwcm9kdWN0cy5sZW5ndGgpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzRXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UHJvZHVjdEJ5QnJhbmQoeyBwYXlsb2FkIH0pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBicmFuZHMgPSB5aWVsZCBjYWxsKFxuICAgICAgICAgICAgUHJvZHVjdFJlcG9zaXRvcnkuZ2V0UHJvZHVjdHNCeUJyYW5kcyxcbiAgICAgICAgICAgIHBheWxvYWRcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSBbXTtcbiAgICAgICAgYnJhbmRzLmZvckVhY2goYnJhbmQgPT4ge1xuICAgICAgICAgICAgYnJhbmQucHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB5aWVsZCBwdXQoZ2V0UHJvZHVjdHNTdWNjZXNzKHByb2R1Y3RzKSk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRUb3RhbFByb2R1Y3RzU3VjY2Vzcyhwcm9kdWN0cy5sZW5ndGgpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgeWllbGQgcHV0KGdldFByb2R1Y3RzRXJyb3IoZXJyKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogZ2V0UHJvZHVjdEJ5S2V5d29yZCh7IGtleXdvcmQgfSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHtcbiAgICAgICAgICAgIHRpdGxlX2NvbnRhaW5zOiBrZXl3b3JkLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFByb2R1Y3RSZXBvc2l0b3J5LmdldFJlY29yZHMsIHNlYXJjaFBhcmFtcyk7XG4gICAgICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0QnlLZXl3b3Jkc1N1Y2Nlc3MocmVzdWx0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHlpZWxkIHB1dChnZXRQcm9kdWN0c0Vycm9yKGVycikpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUUywgZ2V0UHJvZHVjdHMpXSk7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9UT1RBTF9PRl9QUk9EVUNUUywgZ2V0VG90YWxPZlByb2R1Y3RzKSxcbiAgICBdKTtcbiAgICB5aWVsZCBhbGwoW3Rha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfQlJBTkRTLCBnZXRCcmFuZHMpXSk7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUX0NBVEVHT1JJRVMsIGdldFByb2R1Y3RDYXRlZ29yaWVzKSxcbiAgICBdKTtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX1BST0RVQ1RTX0JZX0NBVEVHT1JZLCBnZXRQcm9kdWN0QnlDYXRlZ29yeSksXG4gICAgXSk7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgdGFrZUV2ZXJ5KFxuICAgICAgICAgICAgYWN0aW9uVHlwZXMuR0VUX1BST0RVQ1RTX0JZX1BSSUNFX1JBTkdFLFxuICAgICAgICAgICAgZ2V0UHJvZHVjdEJ5UHJpY2VSYW5nZVxuICAgICAgICApLFxuICAgIF0pO1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5HRVRfUFJPRFVDVFNfQllfQlJBTkQsIGdldFByb2R1Y3RCeUJyYW5kKSxcbiAgICBdKTtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICB0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX1BST0RVQ1RTX0JZX0tFWVdPUkQsIGdldFByb2R1Y3RCeUtleXdvcmQpLFxuICAgIF0pO1xuICAgIHlpZWxkIGFsbChbdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkdFVF9QUk9EVUNUX0JZX0lELCBnZXRQcm9kdWN0QnlJZCldKTtcbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdC9yZWR1Y2VyJztcbmltcG9ydCBwcm9kdWN0IGZyb20gJy4vcHJvZHVjdC9yZWR1Y2VyJztcbmltcG9ydCBzZXR0aW5nIGZyb20gJy4vc2V0dGluZy9yZWR1Y2VyJztcbmltcG9ydCBjYXJ0IGZyb20gJy4vY2FydC9yZWR1Y2VyJztcbmltcG9ydCBjb21wYXJlIGZyb20gJy4vY29tcGFyZS9yZWR1Y2VyJztcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aC9yZWR1Y2VyJztcbmltcG9ydCB3aXNobGlzdCBmcm9tICcuL3dpc2hsaXN0L3JlZHVjZXInO1xuaW1wb3J0IGNvbGxlY3Rpb24gZnJvbSAnLi9jb2xsZWN0aW9uL3JlZHVjZXInO1xuaW1wb3J0IG1lZGlhIGZyb20gJy4vbWVkaWEvcmVkdWNlcic7XG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwL3JlZHVjZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGF1dGgsXG4gICAgcG9zdCxcbiAgICBwcm9kdWN0LFxuICAgIHNldHRpbmcsXG4gICAgY2FydCxcbiAgICBjb21wYXJlLFxuICAgIHdpc2hsaXN0LFxuICAgIGNvbGxlY3Rpb24sXG4gICAgbWVkaWEsXG4gICAgYXBwLFxufSk7XG4iLCJpbXBvcnQgeyBhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IFBvc3RTYWdhIGZyb20gJy4vcG9zdC9zYWdhJztcbmltcG9ydCBQcm9kdWN0U2FnYSBmcm9tICcuL3Byb2R1Y3Qvc2FnYSc7XG5pbXBvcnQgU2V0dGluZ1NhZ2EgZnJvbSAnLi9zZXR0aW5nL3NhZ2EnO1xuaW1wb3J0IENhcnRTYWdhIGZyb20gJy4vY2FydC9zYWdhJztcbmltcG9ydCBBdXRoU2FnYSBmcm9tICcuL2F1dGgvc2FnYSc7XG5pbXBvcnQgQ29tcGFyZVNhZ2EgZnJvbSAnLi9jb21wYXJlL3NhZ2EnO1xuaW1wb3J0IFdpc2hsaXN0U2FnYSBmcm9tICcuL3dpc2hsaXN0L3NhZ2EnO1xuaW1wb3J0IENvbGxlY3Rpb25TYWdhIGZyb20gJy4vY29sbGVjdGlvbi9zYWdhJztcbmltcG9ydCBNZWRpYVNhZ2EgZnJvbSAnLi9tZWRpYS9zYWdhJztcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAvc2FnYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW1xuICAgICAgICBQb3N0U2FnYSgpLFxuICAgICAgICBQcm9kdWN0U2FnYSgpLFxuICAgICAgICBTZXR0aW5nU2FnYSgpLFxuICAgICAgICBDYXJ0U2FnYSgpLFxuICAgICAgICBBdXRoU2FnYSgpLFxuICAgICAgICBDb21wYXJlU2FnYSgpLFxuICAgICAgICBXaXNobGlzdFNhZ2EoKSxcbiAgICAgICAgQ29sbGVjdGlvblNhZ2EoKSxcbiAgICAgICAgTWVkaWFTYWdhKCksXG4gICAgICAgIEFwcCgpLFxuICAgIF0pO1xufVxuIiwiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICAgIENIQU5HRV9DVVJSRU5DWTogJ0NIQU5HRV9DVVJSRU5DWScsXG4gICAgQ0hBTkdFX0NVUlJFTkNZX1NVQ0NFU1M6ICdDSEFOR0VfQ1VSUkVOQ1lfU1VDQ0VTUycsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ3VycmVuY3koY3VycmVuY3kpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DSEFOR0VfQ1VSUkVOQ1ksIGN1cnJlbmN5IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VDdXJyZW5jeVN1Y2Nlc3MoY3VycmVuY3kpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DSEFOR0VfQ1VSUkVOQ1lfU1VDQ0VTUywgY3VycmVuY3kgfTtcbn1cbiIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi9hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIHN5bWJvbDogJyQnLFxuICAgICAgICB0ZXh0OiAnVVNEJyxcbiAgICB9LFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkNIQU5HRV9DVVJSRU5DWV9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57IGN1cnJlbmN5OiBhY3Rpb24uY3VycmVuY3kgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgYWxsLCBwdXQsIHRha2VFdmVyeSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5cbmltcG9ydCB7IGFjdGlvblR5cGVzLCBjaGFuZ2VDdXJyZW5jeVN1Y2Nlc3MgfSBmcm9tICcuL2FjdGlvbic7XG5cbmZ1bmN0aW9uKiBjaGFuZ2VDdXJyZW5jeVNhZ2EoeyBjdXJyZW5jeSB9KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgcHV0KGNoYW5nZUN1cnJlbmN5U3VjY2VzcyhjdXJyZW5jeSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuQ0hBTkdFX0NVUlJFTkNZLCBjaGFuZ2VDdXJyZW5jeVNhZ2EpXSk7XG59XG4iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXNhZ2EnO1xuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcbmltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcic7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi9yb290U2FnYSc7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gbWlkZGxld2FyZSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gPSByZXF1aXJlKCdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKTtcbn07XG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gICAga2V5OiAnbWFydGZ1cnknLFxuICAgIHN0b3JhZ2UsXG4gICAgd2hpdGVsaXN0OiBbJ2NhcnQnLCAnY29tcGFyZScsICdhdXRoJywgJ3dpc2hsaXN0J10sXG59O1xuXG5jb25zdCBwZXJzaXN0ZWRSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xuXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICAgICAgcGVyc2lzdGVkUmVkdWNlcixcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxuICAgICAgICBiaW5kTWlkZGxld2FyZShbc2FnYU1pZGRsZXdhcmVdKVxuICAgICk7XG5cbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZTtcbiIsImV4cG9ydCBjb25zdCBhY3Rpb25UeXBlcyA9IHtcbiAgICBHRVRfV0lTSExJU1RfTElTVDogJ0dFVF9XSVNITElTVF9MSVNUJyxcbiAgICBHRVRfV0lTSExJU1RfTElTVF9TVUNDRVNTOiAnR0VUX1dJU0hMSVNUX0xJU1RfU1VDQ0VTUycsXG4gICAgR0VUX1dJU0hMSVNUX0xJU1RfRVJST1I6ICdHRVRfV0lTSExJU1RfTElTVF9FUlJPUicsXG5cbiAgICBBRERfSVRFTV9XSVNITElTSDogJ0FERF9JVEVNX1dJU0hMSVNIJyxcbiAgICBSRU1PVkVfSVRFTV9XSVNITElTSDogJ1JFTU9WRV9JVEVNX1dJU0hMSVNIJyxcblxuICAgIFVQREFURV9XSVNITElTSF9MSVNUOiAnVVBEQVRFX1dJU0hMSVNIX0xJU1QnLFxuICAgIFVQREFURV9XSVNITElTSF9MSVNUX1NVQ0NFU1M6ICdVUERBVEVfV0lTSExJU0hfTElTVF9TVUNDRVNTJyxcbiAgICBVUERBVEVfV0lTSExJU0hfTElTVF9FUlJPUjogJ1VQREFURV9XSVNITElTSF9MSVNUX0VSUk9SJyxcblxuICAgIENMRUFSX1dJU0hMSVNIX0xJU1Q6ICdDTEVBUl9XSVNITElTSF9MSVNUJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaXNobGlzdExpc3QoKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogYWN0aW9uVHlwZXMuR0VUX1dJU0hMSVNUX0xJU1QgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpc2hsaXN0TGlzdFN1Y2Nlc3MoZGF0YSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGFjdGlvblR5cGVzLkdFVF9XSVNITElTVF9MSVNUX1NVQ0NFU1MsXG4gICAgICAgIGRhdGEsXG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEl0ZW1Ub1dpc2hsaXN0KHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5BRERfSVRFTV9XSVNITElTSCwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlV2lzaGxpc3RJdGVtKHByb2R1Y3QpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5SRU1PVkVfSVRFTV9XSVNITElTSCwgcHJvZHVjdCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJXaXNobGlzdCgpIHtcbiAgICByZXR1cm4geyB0eXBlOiBhY3Rpb25UeXBlcy5DTEVBUl9DQVJUIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaXNobGlzdExpc3RTdWNjZXNzKHBheWxvYWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBhY3Rpb25UeXBlcy5VUERBVEVfV0lTSExJU0hfTElTVF9TVUNDRVNTLFxuICAgICAgICBwYXlsb2FkLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4vYWN0aW9uJztcblxuZXhwb3J0IGNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgICB3aXNobGlzdEl0ZW1zOiBbXSxcbiAgICB3aXNobGlzdFRvdGFsOiAwLFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkdFVF9XSVNITElTVF9MSVNUX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfV0lTSExJU0hfTElTVF9TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICAuLi57XG4gICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0SXRlbXM6IGFjdGlvbi5wYXlsb2FkLndpc2hsaXN0SXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIHdpc2hsaXN0VG90YWw6IGFjdGlvbi5wYXlsb2FkLndpc2hsaXN0VG90YWwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgYWN0aW9uVHlwZXMuR0VUX1dJU0hMSVNUX0xJU1RfRVJST1I6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIC4uLnsgZXJyb3I6IGFjdGlvbi5lcnJvciB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBhbGwsIHB1dCwgdGFrZUV2ZXJ5IH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcbmltcG9ydCB7IG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHtcbiAgICBhY3Rpb25UeXBlcyxcbiAgICBnZXRXaXNobGlzdExpc3RTdWNjZXNzLFxuICAgIHVwZGF0ZVdpc2hsaXN0TGlzdFN1Y2Nlc3MsXG59IGZyb20gJy4vYWN0aW9uJztcblxuY29uc3QgbW9kYWxTdWNjZXNzID0gdHlwZSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ0FkZGVkIHRvIHdpc2hsaXNodCEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgcHJvZHVjdCBoYXMgYmVlbiBhZGRlZCB0byB3aXNobGlzdCEnLFxuICAgIH0pO1xufTtcblxuY29uc3QgbW9kYWxXYXJuaW5nID0gdHlwZSA9PiB7XG4gICAgbm90aWZpY2F0aW9uW3R5cGVdKHtcbiAgICAgICAgbWVzc2FnZTogJ1JlbW92ZWQgZnJvbSB3aXNobGlzdCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBwcm9kdWN0IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB3aXNobGlzdCEnLFxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24qIGdldFdpc2hsaXN0TGlzdFNhZ2EoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgbG9jYWxXaXNobGlzdExpc3QgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BlcnNpc3Q6bWFydGZ1cnknKVxuICAgICAgICApLndpc2hsaXN0O1xuICAgICAgICB5aWVsZCBwdXQoZ2V0V2lzaGxpc3RMaXN0U3VjY2Vzcyhsb2NhbFdpc2hsaXN0TGlzdCkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIGFkZEl0ZW1Ub1dpc2hsaXN0U2FnYShwYXlsb2FkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSBwYXlsb2FkO1xuICAgICAgICBsZXQgbG9jYWxXaXNobGlzdCA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwZXJzaXN0Om1hcnRmdXJ5JykpLndpc2hsaXN0XG4gICAgICAgICk7XG5cbiAgICAgICAgbGV0IGV4aXN0SXRlbSA9IGxvY2FsV2lzaGxpc3Qud2lzaGxpc3RJdGVtcy5maW5kKFxuICAgICAgICAgICAgaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKCFleGlzdEl0ZW0pIHtcbiAgICAgICAgICAgIGxvY2FsV2lzaGxpc3Qud2lzaGxpc3RJdGVtcy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICAgICAgbG9jYWxXaXNobGlzdC53aXNobGlzdFRvdGFsKys7XG4gICAgICAgICAgICB5aWVsZCBwdXQodXBkYXRlV2lzaGxpc3RMaXN0U3VjY2Vzcyhsb2NhbFdpc2hsaXN0KSk7XG4gICAgICAgICAgICBtb2RhbFN1Y2Nlc3MoJ3N1Y2Nlc3MnKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24qIHJlbW92ZUl0ZW1XaXNobGlzdFNhZ2EocGF5bG9hZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gcGF5bG9hZDtcbiAgICAgICAgbGV0IGxvY2FsV2lzaGxpc3QgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc2lzdDptYXJ0ZnVyeScpKS53aXNobGlzdFxuICAgICAgICApO1xuICAgICAgICBsZXQgaW5kZXggPSBsb2NhbFdpc2hsaXN0Lndpc2hsaXN0SXRlbXMuaW5kZXhPZihwcm9kdWN0KTtcbiAgICAgICAgbG9jYWxXaXNobGlzdC53aXNobGlzdFRvdGFsID0gbG9jYWxXaXNobGlzdC53aXNobGlzdFRvdGFsIC0gMTtcbiAgICAgICAgbG9jYWxXaXNobGlzdC53aXNobGlzdEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHlpZWxkIHB1dCh1cGRhdGVXaXNobGlzdExpc3RTdWNjZXNzKGxvY2FsV2lzaGxpc3QpKTtcbiAgICAgICAgbW9kYWxXYXJuaW5nKCd3YXJuaW5nJyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiogY2xlYXJXaXNobGlzdExpc3RTYWdhKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVtcHR5Q2FydCA9IHtcbiAgICAgICAgICAgIHdpc2hsaXN0SXRlbXM6IFtdLFxuICAgICAgICAgICAgd2lzaGxpc3RUb3RhbDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgeWllbGQgcHV0KHVwZGF0ZVdpc2hsaXN0TGlzdFN1Y2Nlc3MoZW1wdHlDYXJ0KSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFt0YWtlRXZlcnkoYWN0aW9uVHlwZXMuR0VUX1dJU0hMSVNUX0xJU1QsIGdldFdpc2hsaXN0TGlzdFNhZ2EpXSk7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgdGFrZUV2ZXJ5KGFjdGlvblR5cGVzLkFERF9JVEVNX1dJU0hMSVNILCBhZGRJdGVtVG9XaXNobGlzdFNhZ2EpLFxuICAgIF0pO1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIHRha2VFdmVyeShhY3Rpb25UeXBlcy5SRU1PVkVfSVRFTV9XSVNITElTSCwgcmVtb3ZlSXRlbVdpc2hsaXN0U2FnYSksXG4gICAgXSk7XG59XG4iLCIvKlxuICogUmVhY3QgdGVtcGxhdGUgaGVscGVyc1xuICogQXV0aG9yOiBOb3V0aGVtZXNcbiAqIERldmVsb3BlZDogZGlhcnlmb3JsaWZlXG4gKiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcbmltcG9ydCB7IGJhc2VVcmwgfSBmcm9tICd+L3JlcG9zaXRvcmllcy9SZXBvc2l0b3J5JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShudW0pIHtcbiAgICBpZiAobnVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtKVxuICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2csICckMSwnKTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbGxldGlvbkJ5U2x1Zyhjb2xsZWN0aW9ucywgc2x1Zykge1xuICAgIGlmIChjb2xsZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbGxlY3Rpb25zLmZpbmQoXG4gICAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBzbHVnLnRvU3RyaW5nKClcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LnByb2R1Y3RzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW1CeVNsdWcoYmFubmVycywgc2x1Zykge1xuICAgIGlmIChiYW5uZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgYmFubmVyID0gYmFubmVycy5maW5kKChpdGVtKSA9PiBpdGVtLnNsdWcgPT09IHNsdWcudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmIChiYW5uZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGJhbm5lcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFNsdWdzUXVlcnlTdHJpbmcocGF5bG9hZCkge1xuICAgIGxldCBxdWVyeSA9ICcnO1xuICAgIGlmIChwYXlsb2FkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGF5bG9hZC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAocXVlcnkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBgc2x1Z19pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVlcnkgPSBxdWVyeSArIGAmc2x1Z19pbj0ke2l0ZW19YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBxdWVyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFN0cmFwaVByb2R1Y3RCYWRnZShwcm9kdWN0KSB7XG4gICAgbGV0IHZpZXc7XG4gICAgaWYgKHByb2R1Y3QuYmFkZ2UgJiYgcHJvZHVjdC5iYWRnZSAhPT0gbnVsbCkge1xuICAgICAgICB2aWV3ID0gcHJvZHVjdC5iYWRnZS5tYXAoKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmFkZ2UudHlwZSA9PT0gJ3NhbGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2VcIj57YmFkZ2UudmFsdWV9PC9kaXY+O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChiYWRnZS50eXBlID09PSAnb3V0U3RvY2snKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBvdXQtc3RvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtiYWRnZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBob3RcIj57YmFkZ2UudmFsdWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RyYXBpUHJvZHVjdFByaWNlKHByb2R1Y3QpIHtcbiAgICBsZXQgdmlldztcbiAgICBpZiAocHJvZHVjdC5pc19zYWxlID09PSB0cnVlKSB7XG4gICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZSBzYWxlXCI+XG4gICAgICAgICAgICAgICAgJHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnByaWNlKX1cbiAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm1sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnNhbGVfcHJpY2UpfVxuICAgICAgICAgICAgICAgIDwvZGVsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZVwiPlxuICAgICAgICAgICAgICAgICR7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RyYXBpUHJvZHVjdFByaWNlRXhwYW5kZWQocHJvZHVjdCkge1xuICAgIGxldCB2aWV3O1xuICAgIGlmIChwcm9kdWN0LmlzX3NhbGUgPT09IHRydWUpIHtcbiAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlIHNhbGVcIj5cbiAgICAgICAgICAgICAgICAke2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxuICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwibWwtMlwiPlxuICAgICAgICAgICAgICAgICAgICAke2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3Quc2FsZV9wcmljZSl9XG4gICAgICAgICAgICAgICAgPC9kZWw+XG4gICAgICAgICAgICAgICAgPHNtYWxsPjE4JSBvZmY8L3NtYWxsPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXcgPSAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZVwiPlxuICAgICAgICAgICAgICAgICR7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3RyYXBpUHJvZHVjdFRodW1ibmFpbChwcm9kdWN0KSB7XG4gICAgbGV0IHZpZXc7XG5cbiAgICBpZiAocHJvZHVjdC50aHVtYm5haWwpIHtcbiAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9bcGlkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtiYXNlVXJsfSR7cHJvZHVjdC50aHVtYm5haWwudXJsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmlldyA9IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9bcGlkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvaW1nL25vdC1mb3VuZC5qcGdcIiBhbHQ9XCJtYXJ0ZnVyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB2aWV3O1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlczYtcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sYXp5bG9hZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2FcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYS9lZmZlY3RzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=