(function() {
var exports = {};
exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 9916:
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
// EXTERNAL MODULE: ./src/components/ProductCard/ProductCard.module.scss
var ProductCard_module = __webpack_require__(3733);
var ProductCard_module_default = /*#__PURE__*/__webpack_require__.n(ProductCard_module);
;// CONCATENATED MODULE: ./src/components/ProductCard/ProductCard.jsx





function ProductCard({
  info,
  status,
  date
}) {
  const {
    ProductName,
    Currency,
    Tax
  } = info;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ProductCard_module_default()).card,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
      children: ["Product: ", ProductName]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Tax: "
      }), Tax]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Currency: "
      }), Currency]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Date: "
      }), date]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Status: "
      }), status]
    })]
  });
}

/* harmony default export */ var ProductCard_ProductCard = (ProductCard);
// EXTERNAL MODULE: ./src/utils/fetchApi.js + 1 modules
var fetchApi = __webpack_require__(8560);
// EXTERNAL MODULE: ./src/styles/pages/user.module.scss
var user_module = __webpack_require__(8285);
var user_module_default = /*#__PURE__*/__webpack_require__.n(user_module);
;// CONCATENATED MODULE: ./src/pages/user/index.jsx








const getServerSideProps = async ctx => {
  try {
    const accountsData = await (0,fetchApi/* default */.Z)(`api/user/accounts/${ctx.query.dni}`, "GET");
    const productsData = await (0,fetchApi/* default */.Z)(`api/user/products/${ctx.query.dni}`, "GET");

    if (!accountsData || !productsData) {
      return {
        statusCode: 503
      };
    }

    const {
      accounts
    } = await accountsData.json();
    const {
      products
    } = await productsData.json();
    return {
      props: {
        accounts,
        products,
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
  accounts,
  products
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
    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      children: "Products Requested"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (user_module_default()).accountsContainer,
      children: products.map(item => {
        return /*#__PURE__*/jsx_runtime_.jsx(ProductCard_ProductCard, {
          info: item.product,
          status: item.status,
          date: item.date
        }, item.date);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/newproduct?dni=${userData.Dni}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          className: "button",
          children: "Add new product"
        })
      })
    })]
  });
};

/* harmony default export */ var user = (index);

/***/ }),

/***/ 9502:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "AccountCard_card__2hIo5"
};


/***/ }),

/***/ 3733:
/***/ (function(module) {

// Exports
module.exports = {
	"card": "ProductCard_card__2rr7c"
};


/***/ }),

/***/ 8285:
/***/ (function(module) {

// Exports
module.exports = {
	"container": "user_container__2byro",
	"form": "user_form__22r5C",
	"accountsContainer": "user_accountsContainer__HEJ2v",
	"card": "user_card__AcGNA"
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
var __webpack_exports__ = __webpack_require__.X(0, [664,485], function() { return __webpack_exec__(9916); });
module.exports = __webpack_exports__;

})();