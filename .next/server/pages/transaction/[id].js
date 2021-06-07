(function() {
var exports = {};
exports.id = 864;
exports.ids = [864];
exports.modules = {

/***/ 4913:
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
/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(145);
/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(289);
/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(867);
/* harmony import */ var _styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4257);
/* harmony import */ var _styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5__);







const getServerSideProps = async ctx => {
  try {
    const transactionData = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_2__/* .API_TEST */ .w}/api/user/accounts/transaction/${ctx.params.id}/${ctx.query.dni}/${ctx.query.acc}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!transactionData) {
      return {
        statusCode: 503
      };
    }

    const {
      transactionDetails
    } = await transactionData.json();
    return {
      props: {
        transactionDetails,
        statusCode: 200
      }
    };
  } catch (e) {
    ctx.statusCode = 503;
    return {
      props: {
        statusCode: 503
      }
    };
  }
};

function transaction({
  transactionDetails
}) {
  const {
    amount,
    currency,
    date,
    state,
    type,
    id
  } = transactionDetails;
  const price = currency == "COP" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(amount);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: (_styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
      children: ["Transaction id ", id]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
        children: "Status: "
      }), state ? "Successfull" : "Pending"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
        children: "Amount: "
      }), price]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
        children: "Date: "
      }), date]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
        children: "Type: "
      }), type]
    })]
  });
}

/* harmony default export */ __webpack_exports__["default"] = (transaction);

/***/ }),

/***/ 289:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const formatterPeso = price => {
  const priceNumber = Number(price);
  const priceWithFormat = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  });
  return priceWithFormat.format(priceNumber);
};

/* harmony default export */ __webpack_exports__["Z"] = (formatterPeso);

/***/ }),

/***/ 867:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const formatterUsd = price => {
  const priceNumber = Number(price);
  const priceWithFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return priceWithFormat.format(priceNumber);
};

/* harmony default export */ __webpack_exports__["Z"] = (formatterUsd);

/***/ }),

/***/ 145:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": function() { return /* binding */ API_TEST; }
/* harmony export */ });
const API_TEST = 'http://localhost:5000';

/***/ }),

/***/ 4257:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "transaction_container__1X6oP"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(4913));
module.exports = __webpack_exports__;

})();