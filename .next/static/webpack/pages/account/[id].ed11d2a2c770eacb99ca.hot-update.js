/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/[id]",{

/***/ "./src/pages/account/[id].jsx":
/*!************************************!*\
  !*** ./src/pages/account/[id].jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TransactionCard/TransactionCard */ \"./src/components/TransactionCard/TransactionCard.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/account/[id].jsx\";\n\n\n\n\nfunction transactions({\n  transactions,\n  dni,\n  account_id\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"Transactions of account id: \", account_id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n      href: \"/mean\",\n      to: {\n        data: {\n          dni: {\n            dni\n          },\n          acc: {\n            account_id\n          }\n        }\n      },\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          children: \"Get transaction\\xB4s mean\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: transactions.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionCard_TransactionCard__WEBPACK_IMPORTED_MODULE_2__.default, {\n          info: item,\n          dni: dni,\n          acc: account_id\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 14\n        }, this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (transactions);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FjY291bnQvW2lkXS5qc3g/OTAwMiJdLCJuYW1lcyI6WyJ0cmFuc2FjdGlvbnMiLCJkbmkiLCJhY2NvdW50X2lkIiwiZGF0YSIsImFjYyIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBd0NBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBRUEsY0FBRjtBQUFnQkMsS0FBaEI7QUFBcUJDO0FBQXJCLENBQXRCLEVBQXlEO0FBQ3ZELHNCQUNFO0FBQUEsNEJBQ0E7QUFBQSxpREFBaUNBLFVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUEsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUksT0FBZDtBQUF1QixRQUFFLEVBQUk7QUFDM0JDLFlBQUksRUFBRTtBQUNKRixhQUFHLEVBQUM7QUFBQ0E7QUFBRCxXQURBO0FBRUpHLGFBQUcsRUFBQztBQUFDRjtBQUFEO0FBRkE7QUFEcUIsT0FBN0I7QUFBQSw2QkFNSTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQSxlQVlBO0FBQUEsZ0JBQ0NGLFlBQVksQ0FBQ0ssR0FBYixDQUFrQkMsSUFBRCxJQUFVO0FBQzFCLDRCQUFPLDhEQUFDLGdGQUFEO0FBQWlCLGNBQUksRUFBRUEsSUFBdkI7QUFBMkMsYUFBRyxFQUFFTCxHQUFoRDtBQUFxRCxhQUFHLEVBQUVDO0FBQTFELFdBQWtDSSxJQUFJLENBQUNDLEVBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVA7QUFDRCxPQUZBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOzs7QUFFRCwrREFBZVAsWUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hY2NvdW50L1tpZF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJX1RFU1QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsQ29uc3RcIjtcbmltcG9ydCBUcmFuc2FjdGlvbkNhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25DYXJkL1RyYW5zYWN0aW9uQ2FyZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25zRGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgYCR7QVBJX1RFU1R9L2FwaS91c2VyL2FjY291bnRzL3RyYW5zYWN0aW9ucy8ke2N0eC5wYXJhbXMuaWR9LyR7Y3R4LnF1ZXJ5LmRuaX1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCF0cmFuc2FjdGlvbnNEYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zdCAge3RyYW5zYWN0aW9uc30gID0gYXdhaXQgdHJhbnNhY3Rpb25zRGF0YS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdHJhbnNhY3Rpb25zLFxuICAgICAgICBkbmk6IGN0eC5xdWVyeS5kbmksXG4gICAgICAgIGFjY291bnRfaWQ6IGN0eC5wYXJhbXMuaWQsXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGN0eC5zdGF0dXNDb2RlID0gNTAzO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRyYW5zYWN0aW9ucyh7IHRyYW5zYWN0aW9ucywgZG5pLCBhY2NvdW50X2lkIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgIDxoMT5UcmFuc2FjdGlvbnMgb2YgYWNjb3VudCBpZDoge2FjY291bnRfaWR9PC9oMT5cbiAgICA8TGluayBocmVmID0ge1wiL21lYW5cIn0gdG8gPSB7e1xuICAgICAgZGF0YToge1xuICAgICAgICBkbmk6e2RuaX0sXG4gICAgICAgIGFjYzp7YWNjb3VudF9pZH1cbiAgICAgIH1cbiAgICB9fT5cbiAgICAgICAgPGE+XG4gICAgICAgICAgPGJ1dHRvbj5HZXQgdHJhbnNhY3Rpb27CtHMgbWVhbjwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPGRpdj5cbiAgICB7dHJhbnNhY3Rpb25zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIDxUcmFuc2FjdGlvbkNhcmQgaW5mbz17aXRlbX0ga2V5PXtpdGVtLmlkfSBkbmk9e2RuaX0gYWNjPXthY2NvdW50X2lkfS8+O1xuICAgIH0pfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNhY3Rpb25zO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/account/[id].jsx\n");

/***/ })

});