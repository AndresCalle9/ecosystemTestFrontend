/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/mean",{

/***/ "./src/pages/mean/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/mean/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/mean/index.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction index({\n  acc,\n  dni\n}) {\n  _s();\n\n  const {\n    0: reportFlag,\n    1: setReportFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: dates,\n    1: setDates\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    initial: \"\",\n    end: \"\"\n  });\n\n  const handleDate = e => {\n    setDates(_objectSpread(_objectSpread({}, dates), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const sendDates = async () => {\n    const meanData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__.default)(`api/user/accounts/transactions/${acc}/${dni}`, \"POST\", dates);\n    const mean = await meanData.json();\n    console.log(mean);\n    setReportFlag(!reportFlag);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Transaction media\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        htmlFor: \"\",\n        children: \"Select dates\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"initial\",\n        children: \"Initial Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"initial\",\n        id: \"initial\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"end\",\n        children: \"Final date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"end\",\n        id: \"end\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: sendDates,\n        children: \"Generate mean\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), reportFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Media period\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 15\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n          children: \"Amount: \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 18\n        }, this), price]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n_s(index, \"ng5vS5gc3hR7qkR79BwROue3p8k=\");\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lYW4vaW5kZXguanN4Pzg4OTEiXSwibmFtZXMiOlsiaW5kZXgiLCJhY2MiLCJkbmkiLCJyZXBvcnRGbGFnIiwic2V0UmVwb3J0RmxhZyIsInVzZVN0YXRlIiwiZGF0ZXMiLCJzZXREYXRlcyIsImluaXRpYWwiLCJlbmQiLCJoYW5kbGVEYXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNlbmREYXRlcyIsIm1lYW5EYXRhIiwiZmV0Y2hBcGkiLCJtZWFuIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFjQSxTQUFTQSxLQUFULENBQWU7QUFBQ0MsS0FBRDtBQUFLQztBQUFMLENBQWYsRUFBMEI7QUFBQTs7QUFDeEIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUM7QUFDakNHLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsT0FBRyxFQUFFO0FBRjRCLEdBQUQsQ0FBbEM7O0FBS0EsUUFBTUMsVUFBVSxHQUFJQyxDQUFELElBQU87QUFDeEJKLFlBQVEsaUNBQ0hELEtBREc7QUFFTixPQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBVixHQUFpQkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFO0FBRnBCLE9BQVI7QUFJRCxHQUxEOztBQU9BLFFBQU1DLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyx3REFBUSxDQUM1QixrQ0FBaUNoQixHQUFJLElBQUdDLEdBQUksRUFEaEIsRUFFN0IsTUFGNkIsRUFHN0JJLEtBSDZCLENBQS9CO0FBS0EsVUFBTVksSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUFuQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBZCxpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNELEdBVEQ7O0FBV0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFJLGVBQU8sRUFBQyxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLGVBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQyxTQUF4QjtBQUFrQyxVQUFFLEVBQUMsU0FBckM7QUFBK0MsZ0JBQVEsRUFBRU87QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTyxlQUFPLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsS0FBeEI7QUFBOEIsVUFBRSxFQUFDLEtBQWpDO0FBQXVDLGdCQUFRLEVBQUVBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQVEsZUFBTyxFQUFFSyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBVUdaLFVBQVUsaUJBQ1A7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxnQ0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBSCxFQUFtQm1CLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQTdDUXRCLEs7OztBQStDVCwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9tZWFuL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoQXBpIGZyb20gXCIuLi8uLi91dGlscy9mZXRjaEFwaVwiO1xuaW1wb3J0IGZvcm1hdHRlclBlc28gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclBlc29cIjtcbmltcG9ydCBmb3JtYXR0ZXJVc2QgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclVzZFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZG5pOiBjdHgucXVlcnkuZG5pLFxuICAgICAgICAgIGFjYzogY3R4LnF1ZXJ5LmFjYyxcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIFxuICB9O1xuXG5mdW5jdGlvbiBpbmRleCh7YWNjLGRuaX0pIHtcbiAgY29uc3QgW3JlcG9ydEZsYWcsIHNldFJlcG9ydEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKHtcbiAgICBpbml0aWFsOiBcIlwiLFxuICAgIGVuZDogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRGF0ZSA9IChlKSA9PiB7XG4gICAgc2V0RGF0ZXMoe1xuICAgICAgLi4uZGF0ZXMsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlbmREYXRlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZWFuRGF0YSA9IGF3YWl0IGZldGNoQXBpKFxuICAgICAgYGFwaS91c2VyL2FjY291bnRzL3RyYW5zYWN0aW9ucy8ke2FjY30vJHtkbml9YCxcbiAgICAgIFwiUE9TVFwiLFxuICAgICAgZGF0ZXNcbiAgICApO1xuICAgIGNvbnN0IG1lYW4gPSBhd2FpdCBtZWFuRGF0YS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cobWVhbik7XG4gICAgc2V0UmVwb3J0RmxhZyghcmVwb3J0RmxhZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRyYW5zYWN0aW9uIG1lZGlhPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBodG1sRm9yPVwiXCI+U2VsZWN0IGRhdGVzPC9oMz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbml0aWFsXCI+SW5pdGlhbCBEYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImluaXRpYWxcIiBpZD1cImluaXRpYWxcIiBvbkNoYW5nZT17aGFuZGxlRGF0ZX0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmRcIj5GaW5hbCBkYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZFwiIGlkPVwiZW5kXCIgb25DaGFuZ2U9e2hhbmRsZURhdGV9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZERhdGVzfT5HZW5lcmF0ZSBtZWFuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtyZXBvcnRGbGFnICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+TWVkaWEgcGVyaW9kPC9oMj5cbiAgICAgICAgICAgICAgPHA+PGI+QW1vdW50OiA8L2I+e3ByaWNlfTwvcD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/mean/index.jsx\n");

/***/ }),

/***/ "./src/utils/formatterPeso.js":
/*!************************************!*\
  !*** ./src/utils/formatterPeso.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nconst formatterPeso = price => {\n  const priceNumber = Number(price);\n  const priceWithFormat = new Intl.NumberFormat('es-CO', {\n    style: 'currency',\n    currency: 'COP',\n    minimumFractionDigits: 0\n  });\n  return priceWithFormat.format(priceNumber);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatterPeso);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2Zvcm1hdHRlclBlc28uanM/YmIwMCJdLCJuYW1lcyI6WyJmb3JtYXR0ZXJQZXNvIiwicHJpY2UiLCJwcmljZU51bWJlciIsIk51bWJlciIsInByaWNlV2l0aEZvcm1hdCIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBRS9CLFFBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDRixLQUFELENBQTFCO0FBQ0EsUUFBTUcsZUFBZSxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNyREMsU0FBSyxFQUFFLFVBRDhDO0FBRXJEQyxZQUFRLEVBQUUsS0FGMkM7QUFHckRDLHlCQUFxQixFQUFFO0FBSDhCLEdBQS9CLENBQXhCO0FBS0EsU0FBUUwsZUFBZSxDQUFDTSxNQUFoQixDQUF1QlIsV0FBdkIsQ0FBUjtBQUNELENBVEQ7O0FBV0UsK0RBQWVGLGFBQWYiLCJmaWxlIjoiLi9zcmMvdXRpbHMvZm9ybWF0dGVyUGVzby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdHRlclBlc28gPSAocHJpY2UpID0+IHtcbiAgXG4gIGNvbnN0IHByaWNlTnVtYmVyID0gTnVtYmVyKHByaWNlKVxuICBjb25zdCBwcmljZVdpdGhGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VzLUNPJywge1xuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgIGN1cnJlbmN5OiAnQ09QJyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgfSlcbiAgcmV0dXJuIChwcmljZVdpdGhGb3JtYXQuZm9ybWF0KHByaWNlTnVtYmVyKSlcbn1cblxuICBleHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJQZXNvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/formatterPeso.js\n");

/***/ }),

/***/ "./src/utils/formatterUsd.js":
/*!***********************************!*\
  !*** ./src/utils/formatterUsd.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nconst formatterUsd = price => {\n  const priceNumber = Number(price);\n  const priceWithFormat = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 0\n  });\n  return priceWithFormat.format(priceNumber);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatterUsd);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2Zvcm1hdHRlclVzZC5qcz9lZWVlIl0sIm5hbWVzIjpbImZvcm1hdHRlclVzZCIsInByaWNlIiwicHJpY2VOdW1iZXIiLCJOdW1iZXIiLCJwcmljZVdpdGhGb3JtYXQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNQSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUU1QixRQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0YsS0FBRCxDQUExQjtBQUNBLFFBQU1HLGVBQWUsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDckRDLFNBQUssRUFBRSxVQUQ4QztBQUVyREMsWUFBUSxFQUFFLEtBRjJDO0FBR3JEQyx5QkFBcUIsRUFBRTtBQUg4QixHQUEvQixDQUF4QjtBQUtBLFNBQVFMLGVBQWUsQ0FBQ00sTUFBaEIsQ0FBdUJSLFdBQXZCLENBQVI7QUFDRCxDQVRIOztBQVdJLCtEQUFlRixZQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2Zvcm1hdHRlclVzZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdHRlclVzZCA9IChwcmljZSkgPT4ge1xuICBcbiAgICBjb25zdCBwcmljZU51bWJlciA9IE51bWJlcihwcmljZSlcbiAgICBjb25zdCBwcmljZVdpdGhGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgICB9KVxuICAgIHJldHVybiAocHJpY2VXaXRoRm9ybWF0LmZvcm1hdChwcmljZU51bWJlcikpXG4gIH1cbiAgXG4gICAgZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyVXNkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/formatterUsd.js\n");

/***/ })

});