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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);


;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/user/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/user/index.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AccountCard/AccountCard */ \"./src/components/AccountCard/AccountCard.jsx\");\n/* harmony import */ var _components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/user/index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nconst index = () => {\n  _s();\n\n  const {\n    0: userData,\n    1: setUserData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    \"\": \"\"\n  });\n  const {\n    0: accounts,\n    1: setAccounts\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([0]);\n\n  const setSessionData = async () => {\n    let data = await JSON.parse(sessionStorage.getItem(\"userData\"));\n    setUserData(data);\n\n    if (data.Accounts) {\n      setAccounts(data.Accounts);\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setSessionData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: userData.Name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Personal Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Dni: \", userData.Dni]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Account Bank Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), accounts.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2___default()), {\n          info: item\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 18\n        }, undefined);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(index, \"SQ2aI/EDAmvF1uRjtAd5cZY8XHE=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXIvaW5kZXguanN4PzJkZTgiXSwibmFtZXMiOlsiaW5kZXgiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlU3RhdGUiLCJhY2NvdW50cyIsInNldEFjY291bnRzIiwic2V0U2Vzc2lvbkRhdGEiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiQWNjb3VudHMiLCJ1c2VFZmZlY3QiLCJOYW1lIiwiRG5pIiwibWFwIiwiaXRlbSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLCtDQUFRLENBQUM7QUFDdkMsUUFBSTtBQURtQyxHQUFELENBQXhDO0FBR0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQXhDOztBQUVBLFFBQU1HLGNBQWMsR0FBRyxZQUFZO0FBQ2pDLFFBQUlDLElBQUksR0FBRyxNQUFNQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCLFVBQXZCLENBQVgsQ0FBakI7QUFDQVQsZUFBVyxDQUFDSyxJQUFELENBQVg7O0FBQ0EsUUFBSUEsSUFBSSxDQUFDSyxRQUFULEVBQW1CO0FBQ2pCUCxpQkFBVyxDQUFDRSxJQUFJLENBQUNLLFFBQU4sQ0FBWDtBQUNEO0FBQ0YsR0FORDs7QUFRQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RQLGtCQUFjO0FBQ2YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0wsUUFBUSxDQUFDYTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSw0QkFBU2IsUUFBUSxDQUFDYyxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBT0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHWCxRQUFRLENBQUNZLEdBQVQsQ0FBY0MsSUFBRCxJQUFVO0FBQ3RCLDRCQUFPLDhEQUFDLDRFQUFEO0FBQWEsY0FBSSxFQUFFQTtBQUFuQixXQUE4QkEsSUFBSSxDQUFDQyxFQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFQO0FBQ0QsT0FGQSxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQWxDRDs7R0FBTWxCLEs7O0FBb0NOLCtEQUFlQSxLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3VzZXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBY2NvdW50Q2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BY2NvdW50Q2FyZC9BY2NvdW50Q2FyZFwiO1xuXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBcIlwiOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZShbMF0pO1xuXG4gIGNvbnN0IHNldFNlc3Npb25EYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBkYXRhID0gYXdhaXQgSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlckRhdGFcIikpO1xuICAgIHNldFVzZXJEYXRhKGRhdGEpO1xuICAgIGlmIChkYXRhLkFjY291bnRzKSB7XG4gICAgICBzZXRBY2NvdW50cyhkYXRhLkFjY291bnRzKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZXNzaW9uRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt1c2VyRGF0YS5OYW1lfTwvaDE+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+UGVyc29uYWwgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICA8cD5Ebmk6IHt1c2VyRGF0YS5Ebml9PC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMz5BY2NvdW50IEJhbmsgSW5mb3JtYXRpb248L2gzPlxuICAgICAgICB7YWNjb3VudHMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxBY2NvdW50Q2FyZCBpbmZvPXtpdGVtfSBrZXk9e2l0ZW0uaWR9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/user/index.jsx\n");

/***/ })

});