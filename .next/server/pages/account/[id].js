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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _TransactionCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransactionCard.module.scss */ \"./src/components/TransactionCard/TransactionCard.module.scss\");\n/* harmony import */ var _TransactionCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TransactionCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/components/TransactionCard/TransactionCard.jsx\";\n\n\n\n\n\n\nfunction TransactionCard({\n  info,\n  dni,\n  acc\n}) {\n  const {\n    amount,\n    currency,\n    date,\n    id\n  } = info;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_TransactionCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: [\"Transaction id: \", id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Amount: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 10\n      }, this), price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Date: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 10\n      }, this), date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/transaction/${id}?dni=${dni}&acc=${acc}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          children: \"See details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmQuanN4PzAxNzAiXSwibmFtZXMiOlsiVHJhbnNhY3Rpb25DYXJkIiwiaW5mbyIsImRuaSIsImFjYyIsImFtb3VudCIsImN1cnJlbmN5IiwiZGF0ZSIsImlkIiwicHJpY2UiLCJmb3JtYXR0ZXJQZXNvIiwiZm9ybWF0dGVyVXNkIiwicyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QjtBQUFFQyxNQUFGO0FBQVFDLEtBQVI7QUFBYUM7QUFBYixDQUF6QixFQUE0QztBQUMxQyxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsWUFBVjtBQUFvQkMsUUFBcEI7QUFBMEJDO0FBQTFCLE1BQWlDTixJQUF2QztBQUNBLFFBQU1PLEtBQUssR0FDVEgsUUFBUSxJQUFJLEtBQVosR0FBb0JJLDZEQUFhLENBQUNMLE1BQUQsQ0FBakMsR0FBNENNLDREQUFZLENBQUNOLE1BQUQsQ0FEMUQ7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU8sMEVBQWhCO0FBQUEsNEJBQ0U7QUFBQSxxQ0FBcUJKLEVBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEVBQW1CQyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsOEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxFQUFpQkYsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFLRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxnQkFBZUMsRUFBRyxRQUFPTCxHQUFJLFFBQU9DLEdBQUksRUFBckQ7QUFBQSw2QkFDRTtBQUFBLCtCQUNFO0FBQVEsbUJBQVMsRUFBQyxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDs7QUFFRCwrREFBZUgsZUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZvcm1hdHRlclBlc28gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclBlc29cIjtcbmltcG9ydCBmb3JtYXR0ZXJVc2QgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclVzZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHMgZnJvbSBcIi4vVHJhbnNhY3Rpb25DYXJkLm1vZHVsZS5zY3NzXCJcblxuZnVuY3Rpb24gVHJhbnNhY3Rpb25DYXJkKHsgaW5mbywgZG5pLCBhY2N9KSB7XG4gIGNvbnN0IHsgYW1vdW50LCBjdXJyZW5jeSwgZGF0ZSwgaWQgfSA9IGluZm87XG4gIGNvbnN0IHByaWNlID1cbiAgICBjdXJyZW5jeSA9PSBcIkNPUFwiID8gZm9ybWF0dGVyUGVzbyhhbW91bnQpIDogZm9ybWF0dGVyVXNkKGFtb3VudCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY2FyZH0+XG4gICAgICA8aDM+VHJhbnNhY3Rpb24gaWQ6IHtpZH08L2gzPlxuICAgICAgPHA+PGI+QW1vdW50OiA8L2I+e3ByaWNlfTwvcD5cbiAgICAgIDxwPjxiPkRhdGU6IDwvYj57ZGF0ZX08L3A+XG5cbiAgICAgIDxMaW5rIGhyZWY9e2AvdHJhbnNhY3Rpb24vJHtpZH0/ZG5pPSR7ZG5pfSZhY2M9JHthY2N9YH0+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCI+U2VlIGRldGFpbHM8L2J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2FjdGlvbkNhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TransactionCard/TransactionCard.jsx\n");

/***/ }),

/***/ "./src/pages/account/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/account/[id].jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var _components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/TransactionCard/TransactionCard */ \"./src/components/TransactionCard/TransactionCard.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_pages_account_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/pages/account.module.scss */ \"./src/styles/pages/account.module.scss\");\n/* harmony import */ var _styles_pages_account_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_account_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/account/[id].jsx\";\n\n\n\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const transactionsData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__.default)(`api/user/accounts/transactions/${ctx.params.id}/${ctx.query.dni}`, \"GET\");\n\n    if (!transactionsData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    const {\n      transactions\n    } = await transactionsData.json();\n    return {\n      props: {\n        transactions,\n        dni: ctx.query.dni,\n        account_id: ctx.params.id,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nfunction transactions({\n  transactions,\n  dni,\n  account_id\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_pages_account_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Transactions of account id: \", account_id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/mean?acc=${account_id}&dni=${dni}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          children: \"Get transaction\\xB4s mean\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_pages_account_module_scss__WEBPACK_IMPORTED_MODULE_5___default().transactionsContainer),\n      children: transactions.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_3__.default, {\n          info: item,\n          dni: dni,\n          acc: account_id\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 14\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transactions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9hY2NvdW50L1tpZF0uanN4PzkwMDIiXSwibmFtZXMiOlsiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4IiwidHJhbnNhY3Rpb25zRGF0YSIsImZldGNoQXBpIiwicGFyYW1zIiwiaWQiLCJxdWVyeSIsImRuaSIsInN0YXR1c0NvZGUiLCJ0cmFuc2FjdGlvbnMiLCJqc29uIiwicHJvcHMiLCJhY2NvdW50X2lkIiwiZSIsInMiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdPLE1BQU1BLGtCQUFrQixHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUMvQyxNQUFJO0FBQ0YsVUFBTUMsZ0JBQWdCLEdBQUcsTUFBTUMsd0RBQVEsQ0FBRSxrQ0FBaUNGLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxFQUFHLElBQUdKLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxHQUFJLEVBQWxFLEVBQXFFLEtBQXJFLENBQXZDOztBQUVBLFFBQUksQ0FBQ0wsZ0JBQUwsRUFBdUI7QUFDckIsYUFBTztBQUNMTSxrQkFBVSxFQUFFO0FBRFAsT0FBUDtBQUdEOztBQUNELFVBQU87QUFBQ0M7QUFBRCxRQUFrQixNQUFNUCxnQkFBZ0IsQ0FBQ1EsSUFBakIsRUFBL0I7QUFFQSxXQUFPO0FBQ0xDLFdBQUssRUFBRTtBQUNMRixvQkFESztBQUVMRixXQUFHLEVBQUVOLEdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxHQUZWO0FBR0xLLGtCQUFVLEVBQUVYLEdBQUcsQ0FBQ0csTUFBSixDQUFXQyxFQUhsQjtBQUlMRyxrQkFBVSxFQUFFO0FBSlA7QUFERixLQUFQO0FBUUQsR0FsQkQsQ0FrQkUsT0FBT0ssQ0FBUCxFQUFVO0FBQ1ZaLE9BQUcsQ0FBQ08sVUFBSixHQUFpQixHQUFqQjtBQUNBLFdBQU87QUFDTEcsV0FBSyxFQUFFO0FBQ0xILGtCQUFVLEVBQUU7QUFEUDtBQURGLEtBQVA7QUFLRDtBQUNGLENBM0JNOztBQTZCUCxTQUFTQyxZQUFULENBQXNCO0FBQUVBLGNBQUY7QUFBZ0JGLEtBQWhCO0FBQXFCSztBQUFyQixDQUF0QixFQUF5RDtBQUN2RCxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsb0ZBQWhCO0FBQUEsNEJBQ0E7QUFBQSxpREFBaUNGLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUEsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUssYUFBWUEsVUFBVyxRQUFPTCxHQUFJLEVBQWpEO0FBQUEsNkJBQ0k7QUFBQSwrQkFDRTtBQUFRLG1CQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZBLGVBT0E7QUFBSyxlQUFTLEVBQUVPLGdHQUFoQjtBQUFBLGdCQUNDTCxZQUFZLENBQUNNLEdBQWIsQ0FBa0JDLElBQUQsSUFBVTtBQUMxQiw0QkFBTyw4REFBQyxnRkFBRDtBQUFpQixjQUFJLEVBQUVBLElBQXZCO0FBQTJDLGFBQUcsRUFBRVQsR0FBaEQ7QUFBcUQsYUFBRyxFQUFFSztBQUExRCxXQUFrQ0ksSUFBSSxDQUFDWCxFQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ0QsT0FGQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztBQUVELCtEQUFlSSxZQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FjY291bnQvW2lkXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSBcIi4uLy4uL3V0aWxzL2ZldGNoQXBpXCI7XG5pbXBvcnQgVHJhbnNhY3Rpb25DYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzIGZyb20gXCIuLi8uLi9zdHlsZXMvcGFnZXMvYWNjb3VudC5tb2R1bGUuc2Nzc1wiXG5cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbnNEYXRhID0gYXdhaXQgZmV0Y2hBcGkoYGFwaS91c2VyL2FjY291bnRzL3RyYW5zYWN0aW9ucy8ke2N0eC5wYXJhbXMuaWR9LyR7Y3R4LnF1ZXJ5LmRuaX1gLCBcIkdFVFwiKTtcblxuICAgIGlmICghdHJhbnNhY3Rpb25zRGF0YSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogNTAzLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgIHt0cmFuc2FjdGlvbnN9ICA9IGF3YWl0IHRyYW5zYWN0aW9uc0RhdGEuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHRyYW5zYWN0aW9ucyxcbiAgICAgICAgZG5pOiBjdHgucXVlcnkuZG5pLFxuICAgICAgICBhY2NvdW50X2lkOiBjdHgucGFyYW1zLmlkLFxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjdHguc3RhdHVzQ29kZSA9IDUwMztcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgc3RhdHVzQ29kZTogNTAzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiB0cmFuc2FjdGlvbnMoeyB0cmFuc2FjdGlvbnMsIGRuaSwgYWNjb3VudF9pZCB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICA8aDI+VHJhbnNhY3Rpb25zIG9mIGFjY291bnQgaWQ6IHthY2NvdW50X2lkfTwvaDI+XG4gICAgPExpbmsgaHJlZiA9IHtgL21lYW4/YWNjPSR7YWNjb3VudF9pZH0mZG5pPSR7ZG5pfWB9ID5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIj5HZXQgdHJhbnNhY3Rpb27CtHMgbWVhbjwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPGRpdiBjbGFzc05hbWU9e3MudHJhbnNhY3Rpb25zQ29udGFpbmVyfT5cbiAgICB7dHJhbnNhY3Rpb25zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIDxUcmFuc2FjdGlvbkNhcmQgaW5mbz17aXRlbX0ga2V5PXtpdGVtLmlkfSBkbmk9e2RuaX0gYWNjPXthY2NvdW50X2lkfS8+O1xuICAgIH0pfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNhY3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/account/[id].jsx\n");

/***/ }),

/***/ "./src/components/TransactionCard/TransactionCard.module.scss":
/*!********************************************************************!*\
  !*** ./src/components/TransactionCard/TransactionCard.module.scss ***!
  \********************************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"TransactionCard_card__kKiXk\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmQubW9kdWxlLnNjc3M/ZDZhYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmQubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiVHJhbnNhY3Rpb25DYXJkX2NhcmRfX2tLaVhrXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TransactionCard/TransactionCard.module.scss\n");

/***/ }),

/***/ "./src/styles/pages/account.module.scss":
/*!**********************************************!*\
  !*** ./src/styles/pages/account.module.scss ***!
  \**********************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"account_container__3eMp6\",\n\t\"transactionsContainer\": \"account_transactionsContainer__28r3n\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvcGFnZXMvYWNjb3VudC5tb2R1bGUuc2Nzcz9kMTE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3BhZ2VzL2FjY291bnQubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJhY2NvdW50X2NvbnRhaW5lcl9fM2VNcDZcIixcblx0XCJ0cmFuc2FjdGlvbnNDb250YWluZXJcIjogXCJhY2NvdW50X3RyYW5zYWN0aW9uc0NvbnRhaW5lcl9fMjhyM25cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/pages/account.module.scss\n");

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