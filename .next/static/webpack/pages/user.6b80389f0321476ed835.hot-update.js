/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./src/components/AccountCard/AccountCard.jsx":
/*!****************************************************!*\
  !*** ./src/components/AccountCard/AccountCard.jsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/components/AccountCard/AccountCard.jsx\";\n\n\n\n\n\nfunction AccountCard({\n  info\n}) {\n  const {\n    amount,\n    currency,\n    id\n  } = info;\n  const {\n    dni\n  } = dni;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Account id: \", id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Balance: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 10\n      }, this), price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Currency: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 10\n      }, this), currency]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/transactions/${id}/${dni}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          children: \"See transactions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_c = AccountCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"AccountCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWNjb3VudENhcmQvQWNjb3VudENhcmQuanN4Pzg5MzciXSwibmFtZXMiOlsiQWNjb3VudENhcmQiLCJpbmZvIiwiYW1vdW50IiwiY3VycmVuY3kiLCJpZCIsImRuaSIsInByaWNlIiwiZm9ybWF0dGVyUGVzbyIsImZvcm1hdHRlclVzZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsU0FBU0EsV0FBVCxDQUFxQjtBQUFDQztBQUFELENBQXJCLEVBQTZCO0FBQ3pCLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxZQUFWO0FBQW9CQztBQUFwQixNQUEwQkgsSUFBaEM7QUFDQSxRQUFNO0FBQUNJO0FBQUQsTUFBUUEsR0FBZDtBQUNBLFFBQU1DLEtBQUssR0FBR0gsUUFBUSxJQUFJLEtBQVosR0FBb0JJLDZEQUFhLENBQUNMLE1BQUQsQ0FBakMsR0FBMkNNLDREQUFZLENBQUNOLE1BQUQsQ0FBckU7QUFDRixzQkFDRTtBQUFBLDRCQUNJO0FBQUEsaUNBQWlCRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVFO0FBQUEsOEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxFQUFvQkUsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLDhCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsRUFBcUJILFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUcsaUJBQWdCQyxFQUFHLElBQUdDLEdBQUksRUFBdkM7QUFBQSw2QkFDQTtBQUFBLCtCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztLQWhCUUwsVztBQWtCVCwrREFBZUEsV0FBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0FjY291bnRDYXJkL0FjY291bnRDYXJkLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBmb3JtYXR0ZXJQZXNvIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJQZXNvXCI7XG5pbXBvcnQgZm9ybWF0dGVyVXNkIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJVc2RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuXG5cbmZ1bmN0aW9uIEFjY291bnRDYXJkKHtpbmZvfSkge1xuICAgIGNvbnN0IHsgYW1vdW50LCBjdXJyZW5jeSwgaWR9ID0gaW5mbztcbiAgICBjb25zdCB7ZG5pfSA9IGRuaVxuICAgIGNvbnN0IHByaWNlID0gY3VycmVuY3kgPT0gXCJDT1BcIiA/IGZvcm1hdHRlclBlc28oYW1vdW50KTogZm9ybWF0dGVyVXNkKGFtb3VudCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiA+XG4gICAgICAgIDxoMj5BY2NvdW50IGlkOiB7aWR9PC9oMj5cbiAgICAgIDxwPjxiPkJhbGFuY2U6IDwvYj57cHJpY2V9PC9wPlxuICAgICAgPHA+PGI+Q3VycmVuY3k6IDwvYj57Y3VycmVuY3l9PC9wPlxuICAgICAgPExpbmsgaHJlZj17YC90cmFuc2FjdGlvbnMvJHtpZH0vJHtkbml9YH0+XG4gICAgICA8YT5cbiAgICAgICAgICA8YnV0dG9uPlNlZSB0cmFuc2FjdGlvbnM8L2J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AccountCard/AccountCard.jsx\n");

/***/ })

});