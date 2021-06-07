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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/components/TransactionCard/TransactionCard.jsx\";\n\n\n\n\n\nfunction TransactionCard({\n  info,\n  dni,\n  acc\n}) {\n  const {\n    amount,\n    currency,\n    date,\n    id\n  } = info;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: [\"Transaction id: \", id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Amount: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 10\n      }, this), price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Date: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 10\n      }, this), date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/transaction/${id}?dni=${dni}&acc=${acc}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          children: \"See details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmQuanN4PzAxNzAiXSwibmFtZXMiOlsiVHJhbnNhY3Rpb25DYXJkIiwiaW5mbyIsImRuaSIsImFjYyIsImFtb3VudCIsImN1cnJlbmN5IiwiZGF0ZSIsImlkIiwicHJpY2UiLCJmb3JtYXR0ZXJQZXNvIiwiZm9ybWF0dGVyVXNkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUI7QUFBRUMsTUFBRjtBQUFRQyxLQUFSO0FBQWFDO0FBQWIsQ0FBekIsRUFBNEM7QUFDMUMsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLFlBQVY7QUFBb0JDLFFBQXBCO0FBQTBCQztBQUExQixNQUFpQ04sSUFBdkM7QUFDQSxRQUFNTyxLQUFLLEdBQ1RILFFBQVEsSUFBSSxLQUFaLEdBQW9CSSw2REFBYSxDQUFDTCxNQUFELENBQWpDLEdBQTRDTSw0REFBWSxDQUFDTixNQUFELENBRDFEO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLHFDQUFxQkcsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDhCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsRUFBbUJDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEVBQWlCRixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUtFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLGdCQUFlQyxFQUFHLFFBQU9MLEdBQUksUUFBT0MsR0FBSSxFQUFyRDtBQUFBLDZCQUNFO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0FBRUQsK0RBQWVILGVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2FjdGlvbkNhcmQvVHJhbnNhY3Rpb25DYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmb3JtYXR0ZXJQZXNvIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJQZXNvXCI7XG5pbXBvcnQgZm9ybWF0dGVyVXNkIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJVc2RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZnVuY3Rpb24gVHJhbnNhY3Rpb25DYXJkKHsgaW5mbywgZG5pLCBhY2N9KSB7XG4gIGNvbnN0IHsgYW1vdW50LCBjdXJyZW5jeSwgZGF0ZSwgaWQgfSA9IGluZm87XG4gIGNvbnN0IHByaWNlID1cbiAgICBjdXJyZW5jeSA9PSBcIkNPUFwiID8gZm9ybWF0dGVyUGVzbyhhbW91bnQpIDogZm9ybWF0dGVyVXNkKGFtb3VudCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5UcmFuc2FjdGlvbiBpZDoge2lkfTwvaDM+XG4gICAgICA8cD48Yj5BbW91bnQ6IDwvYj57cHJpY2V9PC9wPlxuICAgICAgPHA+PGI+RGF0ZTogPC9iPntkYXRlfTwvcD5cblxuICAgICAgPExpbmsgaHJlZj17YC90cmFuc2FjdGlvbi8ke2lkfT9kbmk9JHtkbml9JmFjYz0ke2FjY31gfT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGJ1dHRvbj5TZWUgZGV0YWlsczwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zYWN0aW9uQ2FyZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TransactionCard/TransactionCard.jsx\n");

/***/ }),

/***/ "./src/pages/account/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/account/[id].jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globalConst */ \"./src/utils/globalConst.js\");\n/* harmony import */ var _components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TransactionCard/TransactionCard */ \"./src/components/TransactionCard/TransactionCard.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/account/[id].jsx\";\n\n\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const transactionsData = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_2__.API_TEST}/api/user/accounts/transactions/${ctx.params.id}/${ctx.query.dni}`, {\n      method: \"GET\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    });\n\n    if (!transactionsData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    const {\n      transactions\n    } = await transactionsData.json();\n    return {\n      props: {\n        transactions,\n        dni: ctx.query.dni,\n        account_id: ctx.params.id,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nfunction transactions({\n  transactions,\n  dni,\n  account_id\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"Transactions of account id: \", account_id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/mean?acc=${account_id}&dni=${dni}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          children: \"Get transaction\\xB4s mean\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: transactions.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          info: item,\n          dni: dni,\n          acc: account_id\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 14\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transactions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hY2NvdW50L1tpZF0uanN4PzkwMDIiXSwibmFtZXMiOlsiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwidHJhbnNhY3Rpb25zRGF0YSIsImZldGNoIiwiQVBJX1RFU1QiLCJwYXJhbXMiLCJpZCIsInF1ZXJ5IiwiZG5pIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1c0NvZGUiLCJ0cmFuc2FjdGlvbnMiLCJqc29uIiwicHJvcHMiLCJhY2NvdW50X2lkIiwiZSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxrQkFBa0IsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDL0MsTUFBSTtBQUNGLFVBQU1DLGdCQUFnQixHQUFHLE1BQU1DLEtBQUssQ0FDakMsR0FBRUMsd0RBQVMsbUNBQWtDSCxHQUFHLENBQUNJLE1BQUosQ0FBV0MsRUFBRyxJQUFHTCxHQUFHLENBQUNNLEtBQUosQ0FBVUMsR0FBSSxFQUQzQyxFQUVsQztBQUNFQyxZQUFNLEVBQUUsS0FEVjtBQUVFQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUZYLEtBRmtDLENBQXBDOztBQVVBLFFBQUksQ0FBQ1IsZ0JBQUwsRUFBdUI7QUFDckIsYUFBTztBQUNMUyxrQkFBVSxFQUFFO0FBRFAsT0FBUDtBQUdEOztBQUNELFVBQU87QUFBQ0M7QUFBRCxRQUFrQixNQUFNVixnQkFBZ0IsQ0FBQ1csSUFBakIsRUFBL0I7QUFFQSxXQUFPO0FBQ0xDLFdBQUssRUFBRTtBQUNMRixvQkFESztBQUVMSixXQUFHLEVBQUVQLEdBQUcsQ0FBQ00sS0FBSixDQUFVQyxHQUZWO0FBR0xPLGtCQUFVLEVBQUVkLEdBQUcsQ0FBQ0ksTUFBSixDQUFXQyxFQUhsQjtBQUlMSyxrQkFBVSxFQUFFO0FBSlA7QUFERixLQUFQO0FBUUQsR0ExQkQsQ0EwQkUsT0FBT0ssQ0FBUCxFQUFVO0FBQ1ZmLE9BQUcsQ0FBQ1UsVUFBSixHQUFpQixHQUFqQjtBQUNBLFdBQU87QUFDTEcsV0FBSyxFQUFFO0FBQ0xILGtCQUFVLEVBQUU7QUFEUDtBQURGLEtBQVA7QUFLRDtBQUNGLENBbkNNOztBQXFDUCxTQUFTQyxZQUFULENBQXNCO0FBQUVBLGNBQUY7QUFBZ0JKLEtBQWhCO0FBQXFCTztBQUFyQixDQUF0QixFQUF5RDtBQUN2RCxzQkFDRTtBQUFBLDRCQUNBO0FBQUEsaURBQWlDQSxVQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxlQUVBLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFLLGFBQVlBLFVBQVcsUUFBT1AsR0FBSSxFQUFqRDtBQUFBLDZCQUNJO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBT0E7QUFBQSxnQkFDQ0ksWUFBWSxDQUFDSyxHQUFiLENBQWtCQyxJQUFELElBQVU7QUFDMUIsNEJBQU8sOERBQUMsZ0ZBQUQ7QUFBaUIsY0FBSSxFQUFFQSxJQUF2QjtBQUEyQyxhQUFHLEVBQUVWLEdBQWhEO0FBQXFELGFBQUcsRUFBRU87QUFBMUQsV0FBa0NHLElBQUksQ0FBQ1osRUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBUDtBQUNELE9BRkE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFlRDs7QUFFRCwrREFBZU0sWUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hY2NvdW50L1tpZF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJX1RFU1QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsQ29uc3RcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25DYXJkL1RyYW5zYWN0aW9uQ2FyZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25zRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7QVBJX1RFU1R9L2FwaS91c2VyL2FjY291bnRzL3RyYW5zYWN0aW9ucy8ke2N0eC5wYXJhbXMuaWR9LyR7Y3R4LnF1ZXJ5LmRuaX1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCF0cmFuc2FjdGlvbnNEYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCAge3RyYW5zYWN0aW9uc30gID0gYXdhaXQgdHJhbnNhY3Rpb25zRGF0YS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdHJhbnNhY3Rpb25zLFxuICAgICAgICBkbmk6IGN0eC5xdWVyeS5kbmksXG4gICAgICAgIGFjY291bnRfaWQ6IGN0eC5wYXJhbXMuaWQsXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGN0eC5zdGF0dXNDb2RlID0gNTAzO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRyYW5zYWN0aW9ucyh7IHRyYW5zYWN0aW9ucywgZG5pLCBhY2NvdW50X2lkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxoMT5UcmFuc2FjdGlvbnMgb2YgYWNjb3VudCBpZDoge2FjY291bnRfaWR9PC9oMT5cbiAgICA8TGluayBocmVmID0ge2AvbWVhbj9hY2M9JHthY2NvdW50X2lkfSZkbmk9JHtkbml9YH0gPlxuICAgICAgICA8YT5cbiAgICAgICAgICA8YnV0dG9uPkdldCB0cmFuc2FjdGlvbsK0cyBtZWFuPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8ZGl2PlxuICAgIHt0cmFuc2FjdGlvbnMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gPFRyYW5zYWN0aW9uQ2FyZCBpbmZvPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IGRuaT17ZG5pfSBhY2M9e2FjY291bnRfaWR9Lz47XG4gICAgfSl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/account/[id].jsx\n");

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