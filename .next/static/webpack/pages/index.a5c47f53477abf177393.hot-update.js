/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sweetalert/with-react */ \"./node_modules/@sweetalert/with-react/dist/sweetalert.js\");\n/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/index.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nconst index = () => {\n  _s();\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    name: \"\",\n    dni: \"\",\n    password: \"\"\n  });\n  const {\n    0: loginInfo,\n    1: setLoginInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    dni: \"\",\n    password: \"\"\n  });\n  const {\n    0: newUserFlag,\n    1: setNewUserFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: loginFlag,\n    1: setLoginFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n\n  const handleInputChange = e => {\n    setUser(_objectSpread(_objectSpread({}, user), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const handleInputLoginChange = e => {\n    setLoginInfo(_objectSpread(_objectSpread({}, loginInfo), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const sendUser = async e => {\n    e.preventDefault();\n    const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__.default)(\"api/user/create\", \"POST\", user);\n\n    if (res.status === 201) {\n      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n        title: \"Success\",\n        text: \"User created successfully\",\n        icon: \"success\",\n        buttons: true,\n        dangerMode: false\n      });\n      setLoginFlag(true);\n      setNewUserFlag(false);\n      router.push(\"/\");\n    } else {\n      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n        title: \"Error\",\n        text: \"Something went wrong, please try again\",\n        icon: \"warning\",\n        buttons: true,\n        dangerMode: true\n      });\n      router.push(\"/\");\n    }\n  };\n\n  const login = async e => {\n    e.preventDefault();\n\n    try {\n      const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__.default)(\"api/user/login\", \"POST\", loginInfo);\n      const data = await res.json();\n\n      if (res.status === 200) {\n        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n          title: \"Success\",\n          text: \"Login was successfully\",\n          icon: \"success\",\n          buttons: true,\n          dangerMode: false\n        });\n        await sessionStorage.setItem(\"id\", data.user._id);\n        await sessionStorage.setItem(\"userData\", JSON.stringify(data.user));\n        await sessionStorage.setItem(\"session\", true);\n        await sessionStorage.setItem(\"token\", data.token);\n        router.push(`/user?dni=${data.user.Dni}`);\n      } else {\n        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n          title: \"Error\",\n          text: \"Dni or Password invalid\",\n          icon: \"warning\",\n          buttons: true,\n          dangerMode: true\n        });\n        router.push(\"/\");\n      }\n    } catch (error) {\n      return error;\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"button\",\n        onClick: () => setNewUserFlag(!newUserFlag),\n        children: \"Sing Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"button\",\n        onClick: () => setLoginFlag(!loginFlag),\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 7\n    }, undefined), newUserFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Sing Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: sendUser,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Name\",\n          name: \"name\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Dni\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Dni\",\n          name: \"dni\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Password\",\n          name: \"password\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          type: \"submit\",\n          children: \"Create User\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 9\n    }, undefined), loginFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: login,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Dni\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 141,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Dni\",\n          name: \"dni\",\n          onChange: handleInputLoginChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Password\",\n          name: \"password\",\n          onChange: handleInputLoginChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          type: \"submit\",\n          children: \"Log In\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(index, \"Fx3lAF4NVOHIGtG/7K04q05NtYc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkbmkiLCJwYXNzd29yZCIsImxvZ2luSW5mbyIsInNldExvZ2luSW5mbyIsIm5ld1VzZXJGbGFnIiwic2V0TmV3VXNlckZsYWciLCJsb2dpbkZsYWciLCJzZXRMb2dpbkZsYWciLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0TG9naW5DaGFuZ2UiLCJzZW5kVXNlciIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2hBcGkiLCJzdGF0dXMiLCJzd2FsIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnMiLCJkYW5nZXJNb2RlIiwicHVzaCIsImxvZ2luIiwiZGF0YSIsImpzb24iLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJfaWQiLCJKU09OIiwic3RyaW5naWZ5IiwidG9rZW4iLCJEbmkiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxNQUFNO0FBQUE7O0FBQ2xCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLCtDQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsT0FBRyxFQUFFLEVBRjBCO0FBRy9CQyxZQUFRLEVBQUU7QUFIcUIsR0FBRCxDQUFoQztBQUtBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkwsK0NBQVEsQ0FBQztBQUN6Q0UsT0FBRyxFQUFFLEVBRG9DO0FBRXpDQyxZQUFRLEVBQUU7QUFGK0IsR0FBRCxDQUExQztB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxRUQsQ0EvSkQ7O0dBQU1uQixLO1VBQ1dFLGtEOzs7QUFnS2pCLCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoQXBpIGZyb20gXCIuLi91dGlscy9mZXRjaEFwaVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgc3dhbCBmcm9tIFwiQHN3ZWV0YWxlcnQvd2l0aC1yZWFjdFwiO1xuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xuICAgIG5hbWU6IFwiXCIsXG4gICAgZG5pOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2xvZ2luSW5mbywgc2V0TG9naW5JbmZvXSA9IHVzZVN0YXRlKHtcbiAgICBkbmk6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbbmV3VXNlckZsYWcsIHNldE5ld1VzZXJGbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvZ2luRmxhZywgc2V0TG9naW5GbGFnXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VXNlcih7XG4gICAgICAuLi51c2VyLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbnB1dExvZ2luQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRMb2dpbkluZm8oe1xuICAgICAgLi4ubG9naW5JbmZvLFxuICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZW5kVXNlciA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hBcGkoXCJhcGkvdXNlci9jcmVhdGVcIiwgXCJQT1NUXCIsIHVzZXIpO1xuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIHN3YWwoe1xuICAgICAgICB0aXRsZTogXCJTdWNjZXNzXCIsXG4gICAgICAgIHRleHQ6IFwiVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgZGFuZ2VyTW9kZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHNldExvZ2luRmxhZyh0cnVlKTtcbiAgICAgIHNldE5ld1VzZXJGbGFnKGZhbHNlKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dhbCh7XG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgIHRleHQ6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW5cIixcbiAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEFwaShcImFwaS91c2VyL2xvZ2luXCIsIFwiUE9TVFwiLCBsb2dpbkluZm8pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHN3YWwoe1xuICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3NcIixcbiAgICAgICAgICB0ZXh0OiBcIkxvZ2luIHdhcyBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgICAgIGRhbmdlck1vZGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIGRhdGEudXNlci5faWQpO1xuICAgICAgICBhd2FpdCBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS51c2VyKSk7XG4gICAgICAgIGF3YWl0IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzZXNzaW9uXCIsIHRydWUpO1xuICAgICAgICBhd2FpdCBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XG4gICAgICAgIHJvdXRlci5wdXNoKGAvdXNlcj9kbmk9JHtkYXRhLnVzZXIuRG5pfWApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dhbCh7XG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3JcIixcbiAgICAgICAgICB0ZXh0OiBcIkRuaSBvciBQYXNzd29yZCBpbnZhbGlkXCIsXG4gICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0TmV3VXNlckZsYWcoIW5ld1VzZXJGbGFnKX0+U2luZyBVcDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldExvZ2luRmxhZyghbG9naW5GbGFnKX0+TG9nIEluPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtuZXdVc2VyRmxhZyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlNpbmcgVXA8L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kVXNlcn0+XG4gICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWw+RG5pPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRG5pXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRuaVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgQ3JlYXRlIFVzZXJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7bG9naW5GbGFnICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+TG9nIEluPC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17bG9naW59PlxuICAgICAgICAgICAgPGxhYmVsPkRuaTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRuaVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkbmlcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRMb2dpbkNoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dExvZ2luQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});