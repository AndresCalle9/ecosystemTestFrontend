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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var _components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TransactionCard/TransactionCard */ \"./src/components/TransactionCard/TransactionCard.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/account/[id].jsx\";\n\n\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const transactionsData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__.default)(`api/user/accounts/transactions/${ctx.params.id}/${ctx.query.dni}`, \"GET\");\n\n    if (!transactionsData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    const {\n      transactions\n    } = await transactionsData.json();\n    return {\n      props: {\n        transactions,\n        dni: ctx.query.dni,\n        account_id: ctx.params.id,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nfunction transactions({\n  transactions,\n  dni,\n  account_id\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"Transactions of account id: \", account_id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/mean?acc=${account_id}&dni=${dni}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          children: \"Get transaction\\xB4s mean\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: transactions.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          info: item,\n          dni: dni,\n          acc: account_id\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 14\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transactions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hY2NvdW50L1tpZF0uanN4PzkwMDIiXSwibmFtZXMiOlsiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwidHJhbnNhY3Rpb25zRGF0YSIsImZldGNoQXBpIiwicGFyYW1zIiwiaWQiLCJxdWVyeSIsImRuaSIsInN0YXR1c0NvZGUiLCJ0cmFuc2FjdGlvbnMiLCJqc29uIiwicHJvcHMiLCJhY2NvdW50X2lkIiwiZSIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHTyxNQUFNQSxrQkFBa0IsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDL0MsTUFBSTtBQUNGLFVBQU1DLGdCQUFnQixHQUFHLE1BQU1DLHdEQUFRLENBQUUsa0NBQWlDRixHQUFHLENBQUNHLE1BQUosQ0FBV0MsRUFBRyxJQUFHSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsR0FBSSxFQUFsRSxFQUFxRSxLQUFyRSxDQUF2Qzs7QUFFQSxRQUFJLENBQUNMLGdCQUFMLEVBQXVCO0FBQ3JCLGFBQU87QUFDTE0sa0JBQVUsRUFBRTtBQURQLE9BQVA7QUFHRDs7QUFDRCxVQUFPO0FBQUNDO0FBQUQsUUFBa0IsTUFBTVAsZ0JBQWdCLENBQUNRLElBQWpCLEVBQS9CO0FBRUEsV0FBTztBQUNMQyxXQUFLLEVBQUU7QUFDTEYsb0JBREs7QUFFTEYsV0FBRyxFQUFFTixHQUFHLENBQUNLLEtBQUosQ0FBVUMsR0FGVjtBQUdMSyxrQkFBVSxFQUFFWCxHQUFHLENBQUNHLE1BQUosQ0FBV0MsRUFIbEI7QUFJTEcsa0JBQVUsRUFBRTtBQUpQO0FBREYsS0FBUDtBQVFELEdBbEJELENBa0JFLE9BQU9LLENBQVAsRUFBVTtBQUNWWixPQUFHLENBQUNPLFVBQUosR0FBaUIsR0FBakI7QUFDQSxXQUFPO0FBQ0xHLFdBQUssRUFBRTtBQUNMSCxrQkFBVSxFQUFFO0FBRFA7QUFERixLQUFQO0FBS0Q7QUFDRixDQTNCTTs7QUE2QlAsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQSxjQUFGO0FBQWdCRixLQUFoQjtBQUFxQks7QUFBckIsQ0FBdEIsRUFBeUQ7QUFDdkQsc0JBQ0U7QUFBQSw0QkFDQTtBQUFBLGlEQUFpQ0EsVUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREEsZUFFQSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBSyxhQUFZQSxVQUFXLFFBQU9MLEdBQUksRUFBakQ7QUFBQSw2QkFDSTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQU9BO0FBQUEsZ0JBQ0NFLFlBQVksQ0FBQ0ssR0FBYixDQUFrQkMsSUFBRCxJQUFVO0FBQzFCLDRCQUFPLDhEQUFDLGdGQUFEO0FBQWlCLGNBQUksRUFBRUEsSUFBdkI7QUFBMkMsYUFBRyxFQUFFUixHQUFoRDtBQUFxRCxhQUFHLEVBQUVLO0FBQTFELFdBQWtDRyxJQUFJLENBQUNWLEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRCxPQUZBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0FBRUQsK0RBQWVJLFlBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWNjb3VudC9baWRdLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaEFwaSBmcm9tIFwiLi4vLi4vdXRpbHMvZmV0Y2hBcGlcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25DYXJkL1RyYW5zYWN0aW9uQ2FyZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25zRGF0YSA9IGF3YWl0IGZldGNoQXBpKGBhcGkvdXNlci9hY2NvdW50cy90cmFuc2FjdGlvbnMvJHtjdHgucGFyYW1zLmlkfS8ke2N0eC5xdWVyeS5kbml9YCwgXCJHRVRcIik7XG5cbiAgICBpZiAoIXRyYW5zYWN0aW9uc0RhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0ICB7dHJhbnNhY3Rpb25zfSAgPSBhd2FpdCB0cmFuc2FjdGlvbnNEYXRhLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICB0cmFuc2FjdGlvbnMsXG4gICAgICAgIGRuaTogY3R4LnF1ZXJ5LmRuaSxcbiAgICAgICAgYWNjb3VudF9pZDogY3R4LnBhcmFtcy5pZCxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY3R4LnN0YXR1c0NvZGUgPSA1MDM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdHJhbnNhY3Rpb25zKHsgdHJhbnNhY3Rpb25zLCBkbmksIGFjY291bnRfaWQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPGgxPlRyYW5zYWN0aW9ucyBvZiBhY2NvdW50IGlkOiB7YWNjb3VudF9pZH08L2gxPlxuICAgIDxMaW5rIGhyZWYgPSB7YC9tZWFuP2FjYz0ke2FjY291bnRfaWR9JmRuaT0ke2RuaX1gfSA+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxidXR0b24+R2V0IHRyYW5zYWN0aW9uwrRzIG1lYW48L2J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDxkaXY+XG4gICAge3RyYW5zYWN0aW9ucy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiA8VHJhbnNhY3Rpb25DYXJkIGluZm89e2l0ZW19IGtleT17aXRlbS5pZH0gZG5pPXtkbml9IGFjYz17YWNjb3VudF9pZH0vPjtcbiAgICB9KX1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9ucztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/account/[id].jsx\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_utils_fetchApi_js-src_utils_formatterPeso_js-src_utils_formatterUsd_js"], function() { return __webpack_exec__("./src/pages/account/[id].jsx"); });
module.exports = __webpack_exports__;

})();