/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user",{

/***/ "./src/pages/user/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/user/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AccountCard/AccountCard */ \"./src/components/AccountCard/AccountCard.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/user/index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nconst index = ({\n  accounts\n}) => {\n  _s();\n\n  const {\n    0: userData,\n    1: setUserData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    \"\": \"\"\n  });\n  console.log(accounts);\n\n  const setSessionData = async () => {\n    setUserData(await JSON.parse(sessionStorage.getItem(\"userData\")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setSessionData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: userData.Name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Personal Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Dni: \", userData.Dni]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Account Bank Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(index, \"vrBxbx9oo6eS+7TyubOQWvFb3a4=\");\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXIvaW5kZXguanN4PzJkZTgiXSwibmFtZXMiOlsiaW5kZXgiLCJhY2NvdW50cyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTZXNzaW9uRGF0YSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsIk5hbWUiLCJEbmkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBdUNBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFnQjtBQUFBOztBQUM1QixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUM7QUFDdkMsUUFBSTtBQURtQyxHQUFELENBQXhDO0FBR0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTCxRQUFaOztBQUVBLFFBQU1NLGNBQWMsR0FBRyxZQUFZO0FBQ2pDSixlQUFXLENBQUMsTUFBTUssSUFBSSxDQUFDQyxLQUFMLENBQVdDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixVQUF2QixDQUFYLENBQVAsQ0FBWDtBQUVELEdBSEQ7O0FBS0FDLGtEQUFTLENBQUMsTUFBTTtBQUNkTCxrQkFBYztBQUNmLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtMLFFBQVEsQ0FBQ1c7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsNEJBQVNYLFFBQVEsQ0FBQ1ksR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU9FO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0JELENBL0JEOztHQUFNZCxLOzs7QUFpQ04sK0RBQWVBLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlci9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjY291bnRDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FjY291bnRDYXJkL0FjY291bnRDYXJkXCI7XG5pbXBvcnQgeyBBUElfVEVTVCB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxDb25zdFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50c0RhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7QVBJX1RFU1R9L2FwaS91c2VyL2FjY291bnRzLyR7Y3R4LnF1ZXJ5LmRuaX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gIFxuICAgICAgaWYgKCFhY2NvdW50c0RhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhhY2NvdW50c0RhdGEpXG4gICAgICBjb25zdCAge2FjY291bnRzfSAgPSBhd2FpdCBhY2NvdW50c0RhdGEuanNvbigpO1xuICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgYWNjb3VudHMsXG4gICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjdHguc3RhdHVzQ29kZSA9IDUwMztcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc3RhdHVzQ29kZTogNTAzLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbmNvbnN0IGluZGV4ID0gKHthY2NvdW50c30pID0+IHtcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XG4gICAgXCJcIjogXCJcIixcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGFjY291bnRzKVxuXG4gIGNvbnN0IHNldFNlc3Npb25EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFVzZXJEYXRhKGF3YWl0IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJEYXRhXCIpKSk7XG4gICAgXG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZXNzaW9uRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt1c2VyRGF0YS5OYW1lfTwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UGVyc29uYWwgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICA8cD5Ebmk6IHt1c2VyRGF0YS5Ebml9PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5BY2NvdW50IEJhbmsgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICB7Lyoge2FjY291bnRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8QWNjb3VudENhcmQgaW5mbz17aXRlbX0ga2V5PXtpdGVtLmlkfSBkbmk9e3VzZXJEYXRhLkRuaX0gLz47XG4gICAgICAgIH0pfSAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/user/index.jsx\n");

/***/ })

});