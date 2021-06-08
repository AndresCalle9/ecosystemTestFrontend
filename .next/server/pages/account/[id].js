(function() {
var exports = {};
exports.id = 838;
exports.ids = [838];
exports.modules = {

/***/ 5478:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/utils/fetchApi.js + 1 modules
var fetchApi = __webpack_require__(8560);
// EXTERNAL MODULE: ./src/utils/formatterPeso.js
var formatterPeso = __webpack_require__(289);
// EXTERNAL MODULE: ./src/utils/formatterUsd.js
var formatterUsd = __webpack_require__(867);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/TransactionCard/TransactionCard.module.scss
var TransactionCard_module = __webpack_require__(561);
var TransactionCard_module_default = /*#__PURE__*/__webpack_require__.n(TransactionCard_module);
;// CONCATENATED MODULE: ./src/components/TransactionCard/TransactionCard.jsx








function TransactionCard({
  info,
  dni,
  acc
}) {
  const {
    amount,
    currency,
    date,
    id
  } = info;
  const price = currency == "COP" ? (0,formatterPeso/* default */.Z)(amount) : (0,formatterUsd/* default */.Z)(amount);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (TransactionCard_module_default()).card,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: ["Transaction id: ", id]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Amount: "
      }), price]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Date: "
      }), date]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/transaction/${id}?dni=${dni}&acc=${acc}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "button",
          children: "See details"
        })
      })
    })]
  });
}

/* harmony default export */ var TransactionCard_TransactionCard = (TransactionCard);
// EXTERNAL MODULE: ./src/styles/pages/account.module.scss
var account_module = __webpack_require__(5558);
var account_module_default = /*#__PURE__*/__webpack_require__.n(account_module);
;// CONCATENATED MODULE: ./src/pages/account/[id].jsx







const getServerSideProps = async ctx => {
  try {
    const transactionsData = await (0,fetchApi/* default */.Z)(`api/user/accounts/transactions/${ctx.params.id}/${ctx.query.dni}`, "GET");

    if (!transactionsData) {
      return {
        statusCode: 503
      };
    }

    const {
      transactions
    } = await transactionsData.json();
    return {
      props: {
        transactions,
        dni: ctx.query.dni,
        account_id: ctx.params.id,
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

function transactions({
  transactions,
  dni,
  account_id
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (account_module_default()).container,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
      children: ["Transactions of account id: ", account_id]
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/mean?acc=${account_id}&dni=${dni}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "button",
          children: "Get transaction\xB4s mean"
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (account_module_default()).transactionsContainer,
      children: transactions.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(TransactionCard_TransactionCard, {
          info: item,
          dni: dni,
          acc: account_id
        }, item.id);
      })
    })]
  });
}

/* harmony default export */ var _id_ = (transactions);

/***/ }),

/***/ 561:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "TransactionCard_card__kKiXk"
};


/***/ }),

/***/ 5558:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "account_container__3eMp6",
	"transactionsContainer": "account_transactionsContainer__28r3n"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,485], function() { return __webpack_exec__(5478); });
module.exports = __webpack_exports__;

})();