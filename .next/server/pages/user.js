(function() {
var exports = {};
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 7972:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ user; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/utils/formatterPeso.js
var formatterPeso = __webpack_require__(289);
// EXTERNAL MODULE: ./src/utils/formatterUsd.js
var formatterUsd = __webpack_require__(867);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/AccountCard/AccountCard.module.scss
var AccountCard_module = __webpack_require__(9502);
var AccountCard_module_default = /*#__PURE__*/__webpack_require__.n(AccountCard_module);
;// CONCATENATED MODULE: ./src/components/AccountCard/AccountCard.jsx








function AccountCard({
  info,
  dni
}) {
  const {
    amount,
    currency,
    id
  } = info;
  const price = currency == "COP" ? (0,formatterPeso/* default */.Z)(amount) : (0,formatterUsd/* default */.Z)(amount);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (AccountCard_module_default()).card,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: ["Account id: ", id]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Balance: "
      }), price]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Currency: "
      }), currency]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/account/${id}?dni=${dni}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "button",
          children: "See transactions"
        })
      })
    })]
  });
}

/* harmony default export */ var AccountCard_AccountCard = (AccountCard);
// EXTERNAL MODULE: ./src/utils/fetchApi.js
var fetchApi = __webpack_require__(464);
// EXTERNAL MODULE: ./src/styles/pages/user.module.scss
var user_module = __webpack_require__(8285);
var user_module_default = /*#__PURE__*/__webpack_require__.n(user_module);
;// CONCATENATED MODULE: ./src/pages/user/index.jsx






const getServerSideProps = async ctx => {
  try {
    const accountsData = await (0,fetchApi/* default */.Z)(`api/user/accounts/${ctx.query.dni}`, "GET");

    if (!accountsData) {
      return {
        statusCode: 503
      };
    }

    const {
      accounts
    } = await accountsData.json();
    return {
      props: {
        accounts,
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

const index = ({
  accounts
}) => {
  const {
    0: userData,
    1: setUserData
  } = (0,external_react_.useState)({
    "": ""
  });

  const setSessionData = async () => {
    setUserData(await JSON.parse(sessionStorage.getItem("userData")));
  };

  (0,external_react_.useEffect)(() => {
    setSessionData();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (user_module_default()).container,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      children: userData.Name
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (user_module_default()).subcontainer,
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        children: "Personal Information"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: ["Dni: ", userData.Dni]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Account Bank Information"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (user_module_default()).accountsContainer,
      children: accounts.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(AccountCard_AccountCard, {
          info: item,
          dni: userData.Dni
        }, item.id);
      })
    })]
  });
};

/* harmony default export */ var user = (index);

/***/ }),

/***/ 464:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);


const fetchApi = async (endPoint, method, body) => {
  const res = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_0__/* .API_TEST */ .w}/${endPoint}`, {
    method: method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  return res;
};

/* harmony default export */ __webpack_exports__["Z"] = (fetchApi);

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

/***/ 9502:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "AccountCard_card__2hIo5"
};


/***/ }),

/***/ 8285:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "user_container__2byro",
	"accountsContainer": "user_accountsContainer__HEJ2v"
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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(7972); });
module.exports = __webpack_exports__;

})();