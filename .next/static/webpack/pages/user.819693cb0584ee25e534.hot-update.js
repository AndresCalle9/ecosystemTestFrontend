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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AccountCard/AccountCard */ \"./src/components/AccountCard/AccountCard.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/user/index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nconst index = ({\n  accounts\n}) => {\n  _s();\n\n  const {\n    0: userData,\n    1: setUserData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    \"\": \"\"\n  });\n\n  const setSessionData = async () => {\n    setUserData(await JSON.parse(sessionStorage.getItem(\"userData\")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setSessionData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: userData.Name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Personal Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Dni: \", userData.Dni]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        children: \"Account Bank Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, undefined), accounts.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2__.default, {\n          info: item,\n          dni: userData.Dni\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 18\n        }, undefined);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(index, \"vrBxbx9oo6eS+7TyubOQWvFb3a4=\");\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3VzZXIvaW5kZXguanN4PzJkZTgiXSwibmFtZXMiOlsiaW5kZXgiLCJhY2NvdW50cyIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJ1c2VTdGF0ZSIsInNldFNlc3Npb25EYXRhIiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlRWZmZWN0IiwiTmFtZSIsIkRuaSIsIm1hcCIsIml0ZW0iLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUF3Q0EsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQUE7O0FBQzVCLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQztBQUN2QyxRQUFJO0FBRG1DLEdBQUQsQ0FBeEM7O0FBSUEsUUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDakNGLGVBQVcsQ0FBQyxNQUFNRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCLFVBQXZCLENBQVgsQ0FBUCxDQUFYO0FBRUQsR0FIRDs7QUFLQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RMLGtCQUFjO0FBQ2YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0gsUUFBUSxDQUFDUztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQSw0QkFBU1QsUUFBUSxDQUFDVSxHQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBT0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVHWCxRQUFRLENBQUNZLEdBQVQsQ0FBY0MsSUFBRCxJQUFVO0FBQ3RCLDRCQUFPLDhEQUFDLHdFQUFEO0FBQWEsY0FBSSxFQUFFQSxJQUFuQjtBQUF1QyxhQUFHLEVBQUVaLFFBQVEsQ0FBQ1U7QUFBckQsV0FBOEJFLElBQUksQ0FBQ0MsRUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNELE9BRkEsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnQkQsQ0E5QkQ7O0dBQU1mLEs7OztBQWdDTiwrREFBZUEsS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy91c2VyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQWNjb3VudENhcmQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWNjb3VudENhcmQvQWNjb3VudENhcmRcIjtcbmltcG9ydCB7IEFQSV9URVNUIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbENvbnN0XCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRyYW5zYWN0aW9uc0RhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7QVBJX1RFU1R9L2FwaS91c2VyL2FjY291bnRzLyR7Y3R4LnBhcmFtcy5kbml9YCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICBcbiAgICAgIGlmICghdHJhbnNhY3Rpb25zRGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnN0ICB7dHJhbnNhY3Rpb25zfSAgPSBhd2FpdCB0cmFuc2FjdGlvbnNEYXRhLmpzb24oKTtcbiAgXG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHRyYW5zYWN0aW9ucyxcbiAgICAgICAgICBkbmk6IGN0eC5xdWVyeS5kbmksXG4gICAgICAgICAgYWNjb3VudF9pZDogY3R4LnBhcmFtcy5pZCxcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGN0eC5zdGF0dXNDb2RlID0gNTAzO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuY29uc3QgaW5kZXggPSAoe2FjY291bnRzfSkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBcIlwiOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBzZXRTZXNzaW9uRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRVc2VyRGF0YShhd2FpdCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRGF0YVwiKSkpO1xuICAgIFxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2Vzc2lvbkRhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT57dXNlckRhdGEuTmFtZX08L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAgPHA+RG5pOiB7dXNlckRhdGEuRG5pfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDM+QWNjb3VudCBCYW5rIEluZm9ybWF0aW9uPC9oMz5cbiAgICAgICAge2FjY291bnRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8QWNjb3VudENhcmQgaW5mbz17aXRlbX0ga2V5PXtpdGVtLmlkfSBkbmk9e3VzZXJEYXRhLkRuaX0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/user/index.jsx\n");

/***/ })

});