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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/globalConst */ \"./src/utils/globalConst.js\");\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/mean/index.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction index({\n  acc,\n  dni\n}) {\n  _s();\n\n  const {\n    0: reportFlag,\n    1: setReportFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: dates,\n    1: setDates\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    initial: \"\",\n    end: \"\"\n  });\n\n  const handleDate = e => {\n    setDates(_objectSpread(_objectSpread({}, dates), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const sendDates = async () => {\n    const meanData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_4__.default)(`/api/user/accounts/transactions/${acc}/${dni}`, \"POST\", dates);\n    const mean = await meanData.json();\n    console.log(mean);\n    setReportFlag(!reportFlag);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Transaction media\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        htmlFor: \"\",\n        children: \"Select dates\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"initial\",\n        children: \"Initial Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"initial\",\n        id: \"initial\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"end\",\n        children: \"Final date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"end\",\n        id: \"end\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: sendDates,\n        children: \"Generate mean\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\n\n_s(index, \"ng5vS5gc3hR7qkR79BwROue3p8k=\");\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL21lYW4vaW5kZXguanN4Pzg4OTEiXSwibmFtZXMiOlsiaW5kZXgiLCJhY2MiLCJkbmkiLCJyZXBvcnRGbGFnIiwic2V0UmVwb3J0RmxhZyIsInVzZVN0YXRlIiwiZGF0ZXMiLCJzZXREYXRlcyIsImluaXRpYWwiLCJlbmQiLCJoYW5kbGVEYXRlIiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNlbmREYXRlcyIsIm1lYW5EYXRhIiwiZmV0Y2hBcGkiLCJtZWFuIiwianNvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBY0EsU0FBU0EsS0FBVCxDQUFlO0FBQUNDLEtBQUQ7QUFBS0M7QUFBTCxDQUFmLEVBQTBCO0FBQUE7O0FBQ3hCLFFBQU07QUFBQSxPQUFDQyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4QkMsK0NBQVEsQ0FBQyxLQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CRiwrQ0FBUSxDQUFDO0FBQ2pDRyxXQUFPLEVBQUUsRUFEd0I7QUFFakNDLE9BQUcsRUFBRTtBQUY0QixHQUFELENBQWxDOztBQUtBLFFBQU1DLFVBQVUsR0FBSUMsQ0FBRCxJQUFPO0FBQ3hCSixZQUFRLGlDQUNIRCxLQURHO0FBRU4sT0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVYsR0FBaUJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRTtBQUZwQixPQUFSO0FBSUQsR0FMRDs7QUFPQSxRQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUM1QixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsd0RBQVEsQ0FDNUIsbUNBQWtDaEIsR0FBSSxJQUFHQyxHQUFJLEVBRGpCLEVBRTdCLE1BRjZCLEVBRzdCSSxLQUg2QixDQUEvQjtBQUtBLFVBQU1ZLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQVQsRUFBbkI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQWQsaUJBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDRCxHQVREOztBQVdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsOEJBQ0U7QUFBSSxlQUFPLEVBQUMsRUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxlQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsU0FBeEI7QUFBa0MsVUFBRSxFQUFDLFNBQXJDO0FBQStDLGdCQUFRLEVBQUVPO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU8sZUFBTyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLEtBQXhCO0FBQThCLFVBQUUsRUFBQyxLQUFqQztBQUF1QyxnQkFBUSxFQUFFQTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFRLGVBQU8sRUFBRUssU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFEOztHQXRDUWYsSzs7O0FBd0NULCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL21lYW4vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBUElfVEVTVCB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxDb25zdFwiO1xuaW1wb3J0IGZldGNoQXBpIGZyb20gXCIuLi8uLi91dGlscy9mZXRjaEFwaVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZG5pOiBjdHgucXVlcnkuZG5pLFxuICAgICAgICAgIGFjYzogY3R4LnF1ZXJ5LmFjYyxcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIFxuICB9O1xuXG5mdW5jdGlvbiBpbmRleCh7YWNjLGRuaX0pIHtcbiAgY29uc3QgW3JlcG9ydEZsYWcsIHNldFJlcG9ydEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKHtcbiAgICBpbml0aWFsOiBcIlwiLFxuICAgIGVuZDogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlRGF0ZSA9IChlKSA9PiB7XG4gICAgc2V0RGF0ZXMoe1xuICAgICAgLi4uZGF0ZXMsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlbmREYXRlcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBtZWFuRGF0YSA9IGF3YWl0IGZldGNoQXBpKFxuICAgICAgYC9hcGkvdXNlci9hY2NvdW50cy90cmFuc2FjdGlvbnMvJHthY2N9LyR7ZG5pfWAsXG4gICAgICBcIlBPU1RcIixcbiAgICAgIGRhdGVzXG4gICAgKTtcbiAgICBjb25zdCBtZWFuID0gYXdhaXQgbWVhbkRhdGEuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKG1lYW4pO1xuICAgIHNldFJlcG9ydEZsYWcoIXJlcG9ydEZsYWcpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5UcmFuc2FjdGlvbiBtZWRpYTwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDMgaHRtbEZvcj1cIlwiPlNlbGVjdCBkYXRlczwvaDM+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5pdGlhbFwiPkluaXRpYWwgRGF0ZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJpbml0aWFsXCIgaWQ9XCJpbml0aWFsXCIgb25DaGFuZ2U9e2hhbmRsZURhdGV9IC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW5kXCI+RmluYWwgZGF0ZTwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJlbmRcIiBpZD1cImVuZFwiIG9uQ2hhbmdlPXtoYW5kbGVEYXRlfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3NlbmREYXRlc30+R2VuZXJhdGUgbWVhbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/mean/index.jsx\n");

/***/ })

});