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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @sweetalert/with-react */ \"./node_modules/@sweetalert/with-react/dist/sweetalert.js\");\n/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/index.jsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_andrescalleuribe_Dev_in_med_EcosystemsTest_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nconst index = () => {\n  _s();\n\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    name: \"\",\n    dni: \"\",\n    password: \"\"\n  });\n  const {\n    0: loginInfo,\n    1: setLoginInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    dni: \"\",\n    password: \"\"\n  });\n  const {\n    0: newUserFlag,\n    1: setNewUserFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const {\n    0: loginFlag,\n    1: setLoginFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n\n  const handleInputChange = e => {\n    setUser(_objectSpread(_objectSpread({}, user), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const handleInputLoginChange = e => {\n    setLoginInfo(_objectSpread(_objectSpread({}, loginInfo), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const sendUser = async e => {\n    e.preventDefault();\n    const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__.default)(\"api/user/create\", \"POST\", user);\n    console.log(res);\n\n    if (res.status === 201) {\n      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n        title: \"Success\",\n        text: \"User created successfully\",\n        icon: \"success\",\n        buttons: true,\n        dangerMode: false\n      });\n      setLoginFlag(true);\n      setNewUserFlag(false);\n      router.push(\"/\");\n    } else {\n      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n        title: \"Error\",\n        text: \"Something went wrong, please try again\",\n        icon: \"warning\",\n        buttons: true,\n        dangerMode: true\n      });\n      router.push(\"/\");\n    }\n  };\n\n  const login = async e => {\n    e.preventDefault();\n\n    try {\n      const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__.default)(\"api/user/login\", \"POST\", loginInfo);\n      const data = await res.json();\n      console.log(data);\n\n      if (res.status === 200) {\n        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n          title: \"Success\",\n          text: \"Login was successfully\",\n          icon: \"success\",\n          buttons: true,\n          dangerMode: false\n        });\n        await sessionStorage.setItem(\"id\", data.user._id);\n        await sessionStorage.setItem(\"userData\", JSON.stringify(data.user));\n        await sessionStorage.setItem(\"session\", true);\n        await sessionStorage.setItem(\"token\", data.token);\n        router.push(\"/user\");\n      } else {\n        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_5___default()({\n          title: \"Error\",\n          text: \"Dni or Password invalid\",\n          icon: \"warning\",\n          buttons: true,\n          dangerMode: true\n        });\n        router.push(\"/\");\n      }\n    } catch (error) {\n      return error;\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => setNewUserFlag(!newUserFlag),\n        children: \"Sing Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => setLoginFlag(!loginFlag),\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, undefined), newUserFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Sing Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: sendUser,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Name\",\n          name: \"name\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Dni\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Dni\",\n          name: \"dni\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Password\",\n          name: \"password\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          type: \"submit\",\n          children: \"Create User\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }, undefined), loginFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: login,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Dni\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Dni\",\n          name: \"dni\",\n          onChange: handleInputLoginChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Password\",\n          name: \"password\",\n          onChange: handleInputLoginChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          type: \"submit\",\n          children: \"Log In\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(index, \"Fx3lAF4NVOHIGtG/7K04q05NtYc=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzeD8wZWQ3Il0sIm5hbWVzIjpbImluZGV4Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJkbmkiLCJwYXNzd29yZCIsImxvZ2luSW5mbyIsInNldExvZ2luSW5mbyIsIm5ld1VzZXJGbGFnIiwic2V0TmV3VXNlckZsYWciLCJsb2dpbkZsYWciLCJzZXRMb2dpbkZsYWciLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlucHV0TG9naW5DaGFuZ2UiLCJzZW5kVXNlciIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2hBcGkiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic3dhbCIsInRpdGxlIiwidGV4dCIsImljb24iLCJidXR0b25zIiwiZGFuZ2VyTW9kZSIsInB1c2giLCJsb2dpbiIsImRhdGEiLCJqc29uIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiX2lkIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsTUFBTTtBQUFBOztBQUNsQixRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRUEsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQywrQ0FBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUUsRUFEeUI7QUFFL0JDLE9BQUcsRUFBRSxFQUYwQjtBQUcvQkMsWUFBUSxFQUFFO0FBSHFCLEdBQUQsQ0FBaEM7QUFLQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJMLCtDQUFRLENBQUM7QUFDekNFLE9BQUcsRUFBRSxFQURvQztBQUV6Q0MsWUFBUSxFQUFFO0FBRitCLEdB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QUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXFFRCxDQWpLRDs7R0FBTW5CLEs7VUFDV0Usa0Q7OztBQWtLakIsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSBcIi4uL3V0aWxzL2ZldGNoQXBpXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzd2FsIGZyb20gXCJAc3dlZXRhbGVydC93aXRoLXJlYWN0XCI7XG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJcIixcbiAgICBkbmk6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbbG9naW5JbmZvLCBzZXRMb2dpbkluZm9dID0gdXNlU3RhdGUoe1xuICAgIGRuaTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtuZXdVc2VyRmxhZywgc2V0TmV3VXNlckZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbbG9naW5GbGFnLCBzZXRMb2dpbkZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRVc2VyKHtcbiAgICAgIC4uLnVzZXIsXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0TG9naW5DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldExvZ2luSW5mbyh7XG4gICAgICAuLi5sb2dpbkluZm8sXG4gICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRVc2VyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEFwaShcImFwaS91c2VyL2NyZWF0ZVwiLCBcIlBPU1RcIiwgdXNlcik7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICBzd2FsKHtcbiAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxuICAgICAgICB0ZXh0OiBcIlVzZXIgY3JlYXRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGRhbmdlck1vZGU6IGZhbHNlLFxuICAgICAgfSk7XG4gICAgICBzZXRMb2dpbkZsYWcodHJ1ZSk7XG4gICAgICBzZXROZXdVc2VyRmxhZyhmYWxzZSk7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3YWwoe1xuICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICB0ZXh0OiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLCBwbGVhc2UgdHJ5IGFnYWluXCIsXG4gICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgICBkYW5nZXJNb2RlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2hBcGkoXCJhcGkvdXNlci9sb2dpblwiLCBcIlBPU1RcIiwgbG9naW5JbmZvKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHN3YWwoe1xuICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3NcIixcbiAgICAgICAgICB0ZXh0OiBcIkxvZ2luIHdhcyBzdWNjZXNzZnVsbHlcIixcbiAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgICAgIGRhbmdlck1vZGU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImlkXCIsIGRhdGEudXNlci5faWQpO1xuICAgICAgICBhd2FpdCBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidXNlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YS51c2VyKSk7XG4gICAgICAgIGF3YWl0IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJzZXNzaW9uXCIsIHRydWUpO1xuICAgICAgICBhd2FpdCBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgZGF0YS50b2tlbik7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL3VzZXJcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2FsKHtcbiAgICAgICAgICB0aXRsZTogXCJFcnJvclwiLFxuICAgICAgICAgIHRleHQ6IFwiRG5pIG9yIFBhc3N3b3JkIGludmFsaWRcIixcbiAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICBidXR0b25zOiB0cnVlLFxuICAgICAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXROZXdVc2VyRmxhZyghbmV3VXNlckZsYWcpfT5TaW5nIFVwPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0TG9naW5GbGFnKCFsb2dpbkZsYWcpfT5Mb2cgSW48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAge25ld1VzZXJGbGFnICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDE+U2luZyBVcDwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRVc2VyfT5cbiAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbD5Ebmk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEbmlcIlxuICAgICAgICAgICAgICBuYW1lPVwiZG5pXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICBDcmVhdGUgVXNlclxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtsb2dpbkZsYWcgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5Mb2cgSW48L2gxPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtsb2dpbn0+XG4gICAgICAgICAgICA8bGFiZWw+RG5pPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRG5pXCJcbiAgICAgICAgICAgICAgbmFtZT1cImRuaVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dExvZ2luQ2hhbmdlfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0TG9naW5DaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});