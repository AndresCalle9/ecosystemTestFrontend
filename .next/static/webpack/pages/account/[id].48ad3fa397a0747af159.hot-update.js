/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/account/[id]",{

/***/ "./src/components/TransactionCard/TransactionCard.jsx":
/*!************************************************************!*\
  !*** ./src/components/TransactionCard/TransactionCard.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/components/TransactionCard/TransactionCard.jsx\";\n\n\n\n\n\nfunction TransactionCard({\n  info,\n  dni,\n  acc\n}) {\n  const {\n    amount,\n    currency,\n    date,\n    state,\n    type,\n    id\n  } = info;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: [\"Transaction id: \", id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Status: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 10\n      }, this), state ? \"Successfull\" : \"Pending\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Amount: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 10\n      }, this), price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Date: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 10\n      }, this), date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Type: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 10\n      }, this), type]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/transaction/${id}?dni=${dni}?acc=${acc}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          children: \"See details\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n_c = TransactionCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TransactionCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"TransactionCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25DYXJkL1RyYW5zYWN0aW9uQ2FyZC5qc3g/MDE3MCJdLCJuYW1lcyI6WyJUcmFuc2FjdGlvbkNhcmQiLCJpbmZvIiwiZG5pIiwiYWNjIiwiYW1vdW50IiwiY3VycmVuY3kiLCJkYXRlIiwic3RhdGUiLCJ0eXBlIiwiaWQiLCJwcmljZSIsImZvcm1hdHRlclBlc28iLCJmb3JtYXR0ZXJVc2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUI7QUFBRUMsTUFBRjtBQUFRQyxLQUFSO0FBQWFDO0FBQWIsQ0FBekIsRUFBNEM7QUFDMUMsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLFlBQVY7QUFBb0JDLFFBQXBCO0FBQTBCQyxTQUExQjtBQUFpQ0MsUUFBakM7QUFBdUNDO0FBQXZDLE1BQThDUixJQUFwRDtBQUNBLFFBQU1TLEtBQUssR0FDVEwsUUFBUSxJQUFJLEtBQVosR0FBb0JNLDZEQUFhLENBQUNQLE1BQUQsQ0FBakMsR0FBNENRLDREQUFZLENBQUNSLE1BQUQsQ0FEMUQ7QUFFQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEscUNBQXFCSyxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsOEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxFQUFtQkYsS0FBSyxHQUFFLGFBQUYsR0FBaUIsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLDhCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsRUFBbUJHLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBQSw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEVBQWlCSixJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFO0FBQUEsOEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxFQUFpQkUsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxnQkFBZUMsRUFBRyxRQUFPUCxHQUFJLFFBQU9DLEdBQUksRUFBckQ7QUFBQSw2QkFDRTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztLQW5CUUgsZTtBQXFCVCwrREFBZUEsZUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RyYW5zYWN0aW9uQ2FyZC9UcmFuc2FjdGlvbkNhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZvcm1hdHRlclBlc28gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclBlc29cIjtcbmltcG9ydCBmb3JtYXR0ZXJVc2QgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclVzZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5mdW5jdGlvbiBUcmFuc2FjdGlvbkNhcmQoeyBpbmZvLCBkbmksIGFjY30pIHtcbiAgY29uc3QgeyBhbW91bnQsIGN1cnJlbmN5LCBkYXRlLCBzdGF0ZSwgdHlwZSwgaWQgfSA9IGluZm87XG4gIGNvbnN0IHByaWNlID1cbiAgICBjdXJyZW5jeSA9PSBcIkNPUFwiID8gZm9ybWF0dGVyUGVzbyhhbW91bnQpIDogZm9ybWF0dGVyVXNkKGFtb3VudCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMz5UcmFuc2FjdGlvbiBpZDoge2lkfTwvaDM+XG4gICAgICA8cD48Yj5TdGF0dXM6IDwvYj57c3RhdGU/IFwiU3VjY2Vzc2Z1bGxcIjogXCJQZW5kaW5nXCJ9PC9wPlxuICAgICAgPHA+PGI+QW1vdW50OiA8L2I+e3ByaWNlfTwvcD5cbiAgICAgIDxwPjxiPkRhdGU6IDwvYj57ZGF0ZX08L3A+XG4gICAgICA8cD48Yj5UeXBlOiA8L2I+e3R5cGV9PC9wPlxuXG4gICAgICA8TGluayBocmVmPXtgL3RyYW5zYWN0aW9uLyR7aWR9P2RuaT0ke2RuaX0/YWNjPSR7YWNjfWB9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8YnV0dG9uPlNlZSBkZXRhaWxzPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25DYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TransactionCard/TransactionCard.jsx\n");

/***/ })

});