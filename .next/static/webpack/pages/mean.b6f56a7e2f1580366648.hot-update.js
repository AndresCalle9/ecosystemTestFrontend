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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/globalConst */ \"./src/utils/globalConst.js\");\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/mean/index.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction index({\n  acc,\n  dni\n}) {\n  _s();\n\n  const {\n    0: reportFlag,\n    1: setReportFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: dates,\n    1: setDates\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    initial: \"\",\n    end: \"\"\n  });\n\n  const handleDate = e => {\n    setDates(_objectSpread(_objectSpread({}, dates), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const sendDates = async () => {\n    const meanData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__.default)(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_3__.API_TEST}api/user/accounts/transactions/${acc}/${dni}`, \"POST\", dates);\n    const mean = await meanData.json();\n    console.log(mean);\n    setReportFlag(!reportFlag);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Transaction media\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        htmlFor: \"\",\n        children: \"Select dates\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"initial\",\n        children: \"Initial Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"initial\",\n        id: \"initial\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"end\",\n        children: \"Final date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"end\",\n        id: \"end\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: sendDates,\n        children: \"Generate mean\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n_s(index, \"ng5vS5gc3hR7qkR79BwROue3p8k=\");\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lYW4vaW5kZXguanN4Pzg4OTEiXSwibmFtZXMiOlsiaW5kZXgiLCJhY2MiLCJkbmkiLCJyZXBvcnRGbGFnIiwic2V0UmVwb3J0RmxhZyIsInVzZVN0YXRlIiwiZGF0ZXMiLCJzZXREYXRlcyIsImluaXRpYWwiLCJlbmQiLCJoYW5kbGVEYXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNlbmREYXRlcyIsIm1lYW5EYXRhIiwiZmV0Y2hBcGkiLCJBUElfVEVTVCIsIm1lYW4iLCJqc29uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFjQSxTQUFTQSxLQUFULENBQWU7QUFBQ0MsS0FBRDtBQUFLQztBQUFMLENBQWYsRUFBMEI7QUFBQTs7QUFDeEIsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBNUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLCtDQUFRLENBQUM7QUFDakNHLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsT0FBRyxFQUFFO0FBRjRCLEdBQUQsQ0FBbEM7O0FBS0EsUUFBTUMsVUFBVSxHQUFJQyxDQUFELElBQU87QUFDeEJKLFlBQVEsaUNBQ0hELEtBREc7QUFFTixPQUFDSyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsSUFBVixHQUFpQkYsQ0FBQyxDQUFDQyxNQUFGLENBQVNFO0FBRnBCLE9BQVI7QUFJRCxHQUxEOztBQU9BLFFBQU1DLFNBQVMsR0FBRyxZQUFZO0FBQzVCLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyx3REFBUSxDQUM1QixHQUFFQyx3REFBUyxrQ0FBaUNqQixHQUFJLElBQUdDLEdBQUksRUFEM0IsRUFFN0IsTUFGNkIsRUFHN0JJLEtBSDZCLENBQS9CO0FBTUEsVUFBTWEsSUFBSSxHQUFHLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUFuQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBZixpQkFBYSxDQUFDLENBQUNELFVBQUYsQ0FBYjtBQUNELEdBVkQ7O0FBWUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFJLGVBQU8sRUFBQyxFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFPLGVBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQyxTQUF4QjtBQUFrQyxVQUFFLEVBQUMsU0FBckM7QUFBK0MsZ0JBQVEsRUFBRU87QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTyxlQUFPLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsS0FBeEI7QUFBOEIsVUFBRSxFQUFDLEtBQWpDO0FBQXVDLGdCQUFRLEVBQUVBO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQU1FO0FBQVEsZUFBTyxFQUFFSyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O0dBdkNRZixLOzs7QUF5Q1QsK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvbWVhbi9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFQSV9URVNUIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbENvbnN0XCI7XG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSBcIi4uLy4uL3V0aWxzL2ZldGNoQXBpXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkbmk6IGN0eC5xdWVyeS5kbmksXG4gICAgICAgICAgYWNjOiBjdHgucXVlcnkuYWNjLFxuICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgXG4gIH07XG5cbmZ1bmN0aW9uIGluZGV4KHthY2MsZG5pfSkge1xuICBjb25zdCBbcmVwb3J0RmxhZywgc2V0UmVwb3J0RmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoe1xuICAgIGluaXRpYWw6IFwiXCIsXG4gICAgZW5kOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVEYXRlID0gKGUpID0+IHtcbiAgICBzZXREYXRlcyh7XG4gICAgICAuLi5kYXRlcyxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZERhdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1lYW5EYXRhID0gYXdhaXQgZmV0Y2hBcGkoXG4gICAgICBgJHtBUElfVEVTVH1hcGkvdXNlci9hY2NvdW50cy90cmFuc2FjdGlvbnMvJHthY2N9LyR7ZG5pfWAsXG4gICAgICBcIlBPU1RcIixcbiAgICAgIGRhdGVzXG4gICAgKTtcblxuICAgIGNvbnN0IG1lYW4gPSBhd2FpdCBtZWFuRGF0YS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cobWVhbik7XG4gICAgc2V0UmVwb3J0RmxhZyghcmVwb3J0RmxhZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRyYW5zYWN0aW9uIG1lZGlhPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBodG1sRm9yPVwiXCI+U2VsZWN0IGRhdGVzPC9oMz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbml0aWFsXCI+SW5pdGlhbCBEYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImluaXRpYWxcIiBpZD1cImluaXRpYWxcIiBvbkNoYW5nZT17aGFuZGxlRGF0ZX0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmRcIj5GaW5hbCBkYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZFwiIGlkPVwiZW5kXCIgb25DaGFuZ2U9e2hhbmRsZURhdGV9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZERhdGVzfT5HZW5lcmF0ZSBtZWFuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/mean/index.jsx\n");

/***/ })

});