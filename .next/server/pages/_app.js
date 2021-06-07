(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4745:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/Footer/Footer.module.scss
var Footer_module = __webpack_require__(2058);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Footer/Footer.jsx





const Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    className: (Footer_module_default()).footer,
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Developed by Andr\xE9s Calle"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Phone Number: +57 (300)3942697"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "Email: andrescalleuribe@gmail.com"
    })]
  });
};

/* harmony default export */ var Footer_Footer = (Footer);
// EXTERNAL MODULE: ./src/components/Header/Header.module.scss
var Header_module = __webpack_require__(9219);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Header/Header.jsx






const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("header", {
      className: (Header_module_default()).header,
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
            children: "Ecosystem Solution App"
          })
        })
      })
    })
  });
};

/* harmony default export */ var Header_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Layout/Layout.jsx






const Layout = ({
  children
}) => {
  const {
    0: session,
    1: setSession
  } = (0,external_react_.useState)({
    id: "",
    session: false,
    token: ""
  });
  (0,external_react_.useEffect)(() => {
    setSession({
      id: sessionStorage.getItem("idPPP") || "",
      session: sessionStorage.getItem("sessionPPP") || false,
      token: sessionStorage.getItem("tokenPPP") || ""
    });
  }, [children]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header_Header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
  });
};

/* harmony default export */ var Layout_Layout = (Layout);
;// CONCATENATED MODULE: ./src/pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout_Layout, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 2058:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__1_KSh"
};


/***/ }),

/***/ 9219:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "Header_header__fqqrS"
};


/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(4745); });
module.exports = __webpack_exports__;

})();