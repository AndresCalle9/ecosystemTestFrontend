(function() {
var exports = {};
exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 4237:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8560);
/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(289);
/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(867);
/* harmony import */ var _styles_pages_mean_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6313);
/* harmony import */ var _styles_pages_mean_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_mean_module_scss__WEBPACK_IMPORTED_MODULE_5__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getServerSideProps = async ctx => {
  return {
    props: {
      dni: ctx.query.dni,
      acc: ctx.query.acc,
      statusCode: 200
    }
  };
};

function index({
  acc,
  dni
}) {
  const {
    0: reportFlag,
    1: setReportFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: dates,
    1: setDates
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    initial: "",
    end: ""
  });
  const {
    0: price,
    1: setPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);

  const handleDate = e => {
    setDates(_objectSpread(_objectSpread({}, dates), {}, {
      [e.target.name]: e.target.value
    }));
  };

  const sendDates = async () => {
    const meanData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(`api/user/accounts/transaction/mean/${acc}/${dni}`, "POST", dates);
    const {
      mean,
      currency
    } = await meanData.json();
    setPrice(currency == "COP" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(mean) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(mean));
    setReportFlag(!reportFlag);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_pages_mean_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: "Transaction media"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_pages_mean_module_scss__WEBPACK_IMPORTED_MODULE_5___default().datesInputs),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
        htmlFor: "",
        children: "Select dates"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: "initial",
        children: "Initial Date"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: "date",
        name: "initial",
        id: "initial",
        onChange: handleDate
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
        htmlFor: "end",
        children: "Final date"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
        type: "date",
        name: "end",
        id: "end",
        onChange: handleDate
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "button",
        onClick: sendDates,
        children: "Generate mean"
      })]
    }), reportFlag && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_styles_pages_mean_module_scss__WEBPACK_IMPORTED_MODULE_5___default().report),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
        children: "Media period"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
          children: "Media: "
        }), price]
      })]
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 6313:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "mean_container__Ta_fL",
	"datesInputs": "mean_datesInputs__F7lCl",
	"report": "mean_report__3v7Nk",
	"conatiner": "mean_conatiner__1ae8u"
};


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [485], function() { return __webpack_exec__(4237); });
module.exports = __webpack_exports__;

})();