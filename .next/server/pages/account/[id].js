/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/account/[id]";
exports.ids = ["pages/account/[id]"];
exports.modules = {

/***/ "./src/components/TransactionCard/TransactionCard.jsx":
/*!************************************************************!*\
  !*** ./src/components/TransactionCard/TransactionCard.jsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/components/TransactionCard/TransactionCard.jsx\";\n\n\n\n\n\nfunction TransactionCard({\n  info\n}) {\n  const {\n    amount,\n    currency,\n    date,\n    state,\n    type,\n    id\n  } = info;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Account id: \", info.id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmQuanN4PzAxNzAiXSwibmFtZXMiOlsiVHJhbnNhY3Rpb25DYXJkIiwiaW5mbyIsImFtb3VudCIsImN1cnJlbmN5IiwiZGF0ZSIsInN0YXRlIiwidHlwZSIsImlkIiwicHJpY2UiLCJmb3JtYXR0ZXJQZXNvIiwiZm9ybWF0dGVyVXNkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUI7QUFBQ0M7QUFBRCxDQUF6QixFQUFpQztBQUM3QixRQUFNO0FBQUVDLFVBQUY7QUFBVUMsWUFBVjtBQUFvQkMsUUFBcEI7QUFBMEJDLFNBQTFCO0FBQWlDQyxRQUFqQztBQUF1Q0M7QUFBdkMsTUFBNkNOLElBQW5EO0FBQ0EsUUFBTU8sS0FBSyxHQUFHTCxRQUFRLElBQUksS0FBWixHQUFvQk0sNkRBQWEsQ0FBQ1AsTUFBRCxDQUFqQyxHQUEyQ1EsNERBQVksQ0FBQ1IsTUFBRCxDQUFyRTtBQUNBLHNCQUNJO0FBQUEsMkJBQ0E7QUFBQSxpQ0FBaUJELElBQUksQ0FBQ00sRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0FBRUQsK0RBQWVQLGVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2FjdGlvbkNhcmQvVHJhbnNhY3Rpb25DYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmb3JtYXR0ZXJQZXNvIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJQZXNvXCI7XG5pbXBvcnQgZm9ybWF0dGVyVXNkIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJVc2RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gVHJhbnNhY3Rpb25DYXJkKHtpbmZvfSkge1xuICAgIGNvbnN0IHsgYW1vdW50LCBjdXJyZW5jeSwgZGF0ZSwgc3RhdGUsIHR5cGUsIGlkfSA9IGluZm87XG4gICAgY29uc3QgcHJpY2UgPSBjdXJyZW5jeSA9PSBcIkNPUFwiID8gZm9ybWF0dGVyUGVzbyhhbW91bnQpOiBmb3JtYXR0ZXJVc2QoYW1vdW50KTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDI+QWNjb3VudCBpZDoge2luZm8uaWR9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TransactionCard/TransactionCard.jsx\n");

/***/ }),

/***/ "./src/pages/account/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/account/[id].jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globalConst */ \"./src/utils/globalConst.js\");\n/* harmony import */ var _components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TransactionCard/TransactionCard */ \"./src/components/TransactionCard/TransactionCard.jsx\");\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/account/[id].jsx\";\n\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const transactionsData = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_2__.API_TEST}/api/user/accounts/transactions/${ctx.params.id}/${ctx.query.dni}`, {\n      method: \"GET\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    });\n\n    if (!transactionsData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    console.log(transactionsData);\n    const {\n      transactions\n    } = await transactionsData.json();\n    return {\n      props: {\n        transactions: transactions,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nfunction transactions({\n  transactions\n}) {\n  console.log(transactions);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: \"Transactions\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: transactions.transactions.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          info: item\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 14\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transactions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hY2NvdW50L1tpZF0uanN4PzkwMDIiXSwibmFtZXMiOlsiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwidHJhbnNhY3Rpb25zRGF0YSIsImZldGNoIiwiQVBJX1RFU1QiLCJwYXJhbXMiLCJpZCIsInF1ZXJ5IiwiZG5pIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1c0NvZGUiLCJjb25zb2xlIiwibG9nIiwidHJhbnNhY3Rpb25zIiwianNvbiIsInByb3BzIiwiZSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUlPLE1BQU1BLGtCQUFrQixHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUMvQyxNQUFJO0FBQ0YsVUFBTUMsZ0JBQWdCLEdBQUcsTUFBTUMsS0FBSyxDQUNqQyxHQUFFQyx3REFBUyxtQ0FBa0NILEdBQUcsQ0FBQ0ksTUFBSixDQUFXQyxFQUFHLElBQUdMLEdBQUcsQ0FBQ00sS0FBSixDQUFVQyxHQUFJLEVBRDNDLEVBRWxDO0FBQ0VDLFlBQU0sRUFBRSxLQURWO0FBRUVDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBRlgsS0FGa0MsQ0FBcEM7O0FBVUEsUUFBSSxDQUFDUixnQkFBTCxFQUF1QjtBQUNyQixhQUFPO0FBQ0xTLGtCQUFVLEVBQUU7QUFEUCxPQUFQO0FBR0Q7O0FBQ0RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxnQkFBWjtBQUNBLFVBQU87QUFBQ1k7QUFBRCxRQUFrQixNQUFNWixnQkFBZ0IsQ0FBQ2EsSUFBakIsRUFBL0I7QUFFQSxXQUFPO0FBQ0xDLFdBQUssRUFBRTtBQUNMRixvQkFBWSxFQUFFQSxZQURUO0FBRUxILGtCQUFVLEVBQUU7QUFGUDtBQURGLEtBQVA7QUFNRCxHQXpCRCxDQXlCRSxPQUFPTSxDQUFQLEVBQVU7QUFDVmhCLE9BQUcsQ0FBQ1UsVUFBSixHQUFpQixHQUFqQjtBQUNBLFdBQU87QUFDTEssV0FBSyxFQUFFO0FBQ0xMLGtCQUFVLEVBQUU7QUFEUDtBQURGLEtBQVA7QUFLRDtBQUNGLENBbENNOztBQW9DUCxTQUFTRyxZQUFULENBQXNCO0FBQUVBO0FBQUYsQ0FBdEIsRUFBd0M7QUFDdENGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFaO0FBQ0Esc0JBQ0U7QUFBQSw0QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBQSxnQkFDQ0EsWUFBWSxDQUFDQSxZQUFiLENBQTBCSSxHQUExQixDQUErQkMsSUFBRCxJQUFVO0FBQ3ZDLDRCQUFPLDhEQUFDLGdGQUFEO0FBQWlCLGNBQUksRUFBRUE7QUFBdkIsV0FBa0NBLElBQUksQ0FBQ2IsRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNELE9BRkE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7QUFFRCwrREFBZVEsWUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hY2NvdW50L1tpZF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJX1RFU1QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsQ29uc3RcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25DYXJkL1RyYW5zYWN0aW9uQ2FyZFwiO1xuXG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbnNEYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtBUElfVEVTVH0vYXBpL3VzZXIvYWNjb3VudHMvdHJhbnNhY3Rpb25zLyR7Y3R4LnBhcmFtcy5pZH0vJHtjdHgucXVlcnkuZG5pfWAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXRyYW5zYWN0aW9uc0RhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRyYW5zYWN0aW9uc0RhdGEpXG4gICAgY29uc3QgIHt0cmFuc2FjdGlvbnN9ICA9IGF3YWl0IHRyYW5zYWN0aW9uc0RhdGEuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHRyYW5zYWN0aW9uczogdHJhbnNhY3Rpb25zLFxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjdHguc3RhdHVzQ29kZSA9IDUwMztcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgc3RhdHVzQ29kZTogNTAzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiB0cmFuc2FjdGlvbnMoeyB0cmFuc2FjdGlvbnMgfSkge1xuICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbnMpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGgzPlRyYW5zYWN0aW9uczwvaDM+XG4gICAgPGRpdj5cbiAgICB7dHJhbnNhY3Rpb25zLnRyYW5zYWN0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiA8VHJhbnNhY3Rpb25DYXJkIGluZm89e2l0ZW19IGtleT17aXRlbS5pZH0gLz47XG4gICAgfSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/account/[id].jsx\n");

/***/ }),

/***/ "./src/utils/formatterPeso.js":
/*!************************************!*\
  !*** ./src/utils/formatterPeso.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst formatterPeso = price => {\n  const priceNumber = Number(price);\n  const priceWithFormat = new Intl.NumberFormat('es-CO', {\n    style: 'currency',\n    currency: 'COP',\n    minimumFractionDigits: 0\n  });\n  return priceWithFormat.format(priceNumber);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatterPeso);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9mb3JtYXR0ZXJQZXNvLmpzP2JiMDAiXSwibmFtZXMiOlsiZm9ybWF0dGVyUGVzbyIsInByaWNlIiwicHJpY2VOdW1iZXIiLCJOdW1iZXIiLCJwcmljZVdpdGhGb3JtYXQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCJdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBRS9CLFFBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDRixLQUFELENBQTFCO0FBQ0EsUUFBTUcsZUFBZSxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNyREMsU0FBSyxFQUFFLFVBRDhDO0FBRXJEQyxZQUFRLEVBQUUsS0FGMkM7QUFHckRDLHlCQUFxQixFQUFFO0FBSDhCLEdBQS9CLENBQXhCO0FBS0EsU0FBUUwsZUFBZSxDQUFDTSxNQUFoQixDQUF1QlIsV0FBdkIsQ0FBUjtBQUNELENBVEQ7O0FBV0UsK0RBQWVGLGFBQWYiLCJmaWxlIjoiLi9zcmMvdXRpbHMvZm9ybWF0dGVyUGVzby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdHRlclBlc28gPSAocHJpY2UpID0+IHtcbiAgXG4gIGNvbnN0IHByaWNlTnVtYmVyID0gTnVtYmVyKHByaWNlKVxuICBjb25zdCBwcmljZVdpdGhGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VzLUNPJywge1xuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgIGN1cnJlbmN5OiAnQ09QJyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgfSlcbiAgcmV0dXJuIChwcmljZVdpdGhGb3JtYXQuZm9ybWF0KHByaWNlTnVtYmVyKSlcbn1cblxuICBleHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJQZXNvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/formatterPeso.js\n");

/***/ }),

/***/ "./src/utils/formatterUsd.js":
/*!***********************************!*\
  !*** ./src/utils/formatterUsd.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst formatterUsd = price => {\n  const priceNumber = Number(price);\n  const priceWithFormat = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 0\n  });\n  return priceWithFormat.format(priceNumber);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatterUsd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9mb3JtYXR0ZXJVc2QuanM/ZWVlZSJdLCJuYW1lcyI6WyJmb3JtYXR0ZXJVc2QiLCJwcmljZSIsInByaWNlTnVtYmVyIiwiTnVtYmVyIiwicHJpY2VXaXRoRm9ybWF0IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUU1QixRQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0YsS0FBRCxDQUExQjtBQUNBLFFBQU1HLGVBQWUsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDckRDLFNBQUssRUFBRSxVQUQ4QztBQUVyREMsWUFBUSxFQUFFLEtBRjJDO0FBR3JEQyx5QkFBcUIsRUFBRTtBQUg4QixHQUEvQixDQUF4QjtBQUtBLFNBQVFMLGVBQWUsQ0FBQ00sTUFBaEIsQ0FBdUJSLFdBQXZCLENBQVI7QUFDRCxDQVRIOztBQVdJLCtEQUFlRixZQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2Zvcm1hdHRlclVzZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdHRlclVzZCA9IChwcmljZSkgPT4ge1xuICBcbiAgICBjb25zdCBwcmljZU51bWJlciA9IE51bWJlcihwcmljZSlcbiAgICBjb25zdCBwcmljZVdpdGhGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgICB9KVxuICAgIHJldHVybiAocHJpY2VXaXRoRm9ybWF0LmZvcm1hdChwcmljZU51bWJlcikpXG4gIH1cbiAgXG4gICAgZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyVXNkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/formatterUsd.js\n");

/***/ }),

/***/ "./src/utils/globalConst.js":
/*!**********************************!*\
  !*** ./src/utils/globalConst.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_TEST\": function() { return /* binding */ API_TEST; }\n/* harmony export */ });\nconst API_TEST = 'http://localhost:5000';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcz83M2RiIl0sIm5hbWVzIjpbIkFQSV9URVNUIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLHVCQUFqQiIsImZpbGUiOiIuL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVEVTVCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/globalConst.js\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./src/pages/account/[id].jsx"); });
module.exports = __webpack_exports__;

})();