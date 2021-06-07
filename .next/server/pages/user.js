/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/user";
exports.ids = ["pages/user"];
exports.modules = {

/***/ "./src/components/AccountCard/AccountCard.jsx":
/*!****************************************************!*\
  !*** ./src/components/AccountCard/AccountCard.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _AccountCard_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AccountCard.module.scss */ \"./src/components/AccountCard/AccountCard.module.scss\");\n/* harmony import */ var _AccountCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AccountCard_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/components/AccountCard/AccountCard.jsx\";\n\n\n\n\n\n\nfunction AccountCard({\n  info,\n  dni\n}) {\n  const {\n    amount,\n    currency,\n    id\n  } = info;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_2__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_3__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_AccountCard_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n      children: [\"Account id: \", id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Balance: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 10\n      }, this), price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Currency: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 10\n      }, this), currency]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n      href: `/account/${id}?dni=${dni}`,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          children: \"See transactions\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AccountCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FjY291bnRDYXJkL0FjY291bnRDYXJkLmpzeD84OTM3Il0sIm5hbWVzIjpbIkFjY291bnRDYXJkIiwiaW5mbyIsImRuaSIsImFtb3VudCIsImN1cnJlbmN5IiwiaWQiLCJwcmljZSIsImZvcm1hdHRlclBlc28iLCJmb3JtYXR0ZXJVc2QiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxTQUFTQSxXQUFULENBQXFCO0FBQUNDLE1BQUQ7QUFBT0M7QUFBUCxDQUFyQixFQUFrQztBQUM5QixRQUFNO0FBQUVDLFVBQUY7QUFBVUMsWUFBVjtBQUFvQkM7QUFBcEIsTUFBMEJKLElBQWhDO0FBQ0EsUUFBTUssS0FBSyxHQUFHRixRQUFRLElBQUksS0FBWixHQUFvQkcsNkRBQWEsQ0FBQ0osTUFBRCxDQUFqQyxHQUEyQ0ssNERBQVksQ0FBQ0wsTUFBRCxDQUFyRTtBQUNGLHNCQUNFO0FBQUssYUFBUyxFQUFJTSxzRUFBbEI7QUFBQSw0QkFDSTtBQUFBLGlDQUFpQkosRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFRTtBQUFBLDhCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsRUFBb0JDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILEVBQXFCRixRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLFlBQVdDLEVBQUcsUUFBT0gsR0FBSSxFQUF0QztBQUFBLDZCQUNBO0FBQUEsK0JBQ0k7QUFBUSxtQkFBUyxFQUFDLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztBQUVELCtEQUFlRixXQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQWNjb3VudENhcmQvQWNjb3VudENhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGZvcm1hdHRlclBlc28gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclBlc29cIjtcbmltcG9ydCBmb3JtYXR0ZXJVc2QgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclVzZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHMgZnJvbSBcIi4vQWNjb3VudENhcmQubW9kdWxlLnNjc3NcIlxuXG5cblxuZnVuY3Rpb24gQWNjb3VudENhcmQoe2luZm8sIGRuaX0pIHtcbiAgICBjb25zdCB7IGFtb3VudCwgY3VycmVuY3ksIGlkfSA9IGluZm87XG4gICAgY29uc3QgcHJpY2UgPSBjdXJyZW5jeSA9PSBcIkNPUFwiID8gZm9ybWF0dGVyUGVzbyhhbW91bnQpOiBmb3JtYXR0ZXJVc2QoYW1vdW50KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzLmNhcmR9PlxuICAgICAgICA8aDM+QWNjb3VudCBpZDoge2lkfTwvaDM+XG4gICAgICA8cD48Yj5CYWxhbmNlOiA8L2I+e3ByaWNlfTwvcD5cbiAgICAgIDxwPjxiPkN1cnJlbmN5OiA8L2I+e2N1cnJlbmN5fTwvcD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvYWNjb3VudC8ke2lkfT9kbmk9JHtkbml9YH0+XG4gICAgICA8YT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiPlNlZSB0cmFuc2FjdGlvbnM8L2J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AccountCard/AccountCard.jsx\n");

/***/ }),

/***/ "./src/pages/user/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/user/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AccountCard/AccountCard */ \"./src/components/AccountCard/AccountCard.jsx\");\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var _styles_pages_user_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/pages/user.module.scss */ \"./src/styles/pages/user.module.scss\");\n/* harmony import */ var _styles_pages_user_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_user_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/user/index.jsx\";\n\n\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const accountsData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_3__.default)(`api/user/accounts/${ctx.query.dni}`, \"GET\");\n\n    if (!accountsData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    const {\n      accounts\n    } = await accountsData.json();\n    return {\n      props: {\n        accounts,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nconst index = ({\n  accounts\n}) => {\n  const {\n    0: userData,\n    1: setUserData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    \"\": \"\"\n  });\n\n  const setSessionData = async () => {\n    setUserData(await JSON.parse(sessionStorage.getItem(\"userData\")));\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setSessionData();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_pages_user_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: userData.Name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_pages_user_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subcontainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Personal Information\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Dni: \", userData.Dni]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"Account Bank Information\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_pages_user_module_scss__WEBPACK_IMPORTED_MODULE_4___default().accountsContainer),\n      children: accounts.map(item => {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AccountCard_AccountCard__WEBPACK_IMPORTED_MODULE_2__.default, {\n          info: item,\n          dni: userData.Dni\n        }, item.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 18\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy91c2VyL2luZGV4LmpzeD8yZGU4Il0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImFjY291bnRzRGF0YSIsImZldGNoQXBpIiwicXVlcnkiLCJkbmkiLCJzdGF0dXNDb2RlIiwiYWNjb3VudHMiLCJqc29uIiwicHJvcHMiLCJlIiwiaW5kZXgiLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwidXNlU3RhdGUiLCJzZXRTZXNzaW9uRGF0YSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInVzZUVmZmVjdCIsInMiLCJOYW1lIiwiRG5pIiwibWFwIiwiaXRlbSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsa0JBQWtCLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQy9DLE1BQUk7QUFDRixVQUFNQyxZQUFZLEdBQUcsTUFBTUMsd0RBQVEsQ0FDaEMscUJBQW9CRixHQUFHLENBQUNHLEtBQUosQ0FBVUMsR0FBSSxFQURGLEVBRWpDLEtBRmlDLENBQW5DOztBQUtBLFFBQUksQ0FBQ0gsWUFBTCxFQUFtQjtBQUNqQixhQUFPO0FBQ0xJLGtCQUFVLEVBQUU7QUFEUCxPQUFQO0FBR0Q7O0FBQ0QsVUFBTTtBQUFFQztBQUFGLFFBQWUsTUFBTUwsWUFBWSxDQUFDTSxJQUFiLEVBQTNCO0FBRUEsV0FBTztBQUNMQyxXQUFLLEVBQUU7QUFDTEYsZ0JBREs7QUFFTEQsa0JBQVUsRUFBRTtBQUZQO0FBREYsS0FBUDtBQU1ELEdBbkJELENBbUJFLE9BQU9JLENBQVAsRUFBVTtBQUNWVCxPQUFHLENBQUNLLFVBQUosR0FBaUIsR0FBakI7QUFDQSxXQUFPO0FBQ0xHLFdBQUssRUFBRTtBQUNMSCxrQkFBVSxFQUFFO0FBRFA7QUFERixLQUFQO0FBS0Q7QUFDRixDQTVCTTs7QUE4QlAsTUFBTUssS0FBSyxHQUFHLENBQUM7QUFBRUo7QUFBRixDQUFELEtBQWtCO0FBQzlCLFFBQU07QUFBQSxPQUFDSyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsK0NBQVEsQ0FBQztBQUN2QyxRQUFJO0FBRG1DLEdBQUQsQ0FBeEM7O0FBSUEsUUFBTUMsY0FBYyxHQUFHLFlBQVk7QUFDakNGLGVBQVcsQ0FBQyxNQUFNRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsY0FBYyxDQUFDQyxPQUFmLENBQXVCLFVBQXZCLENBQVgsQ0FBUCxDQUFYO0FBQ0QsR0FGRDs7QUFJQUMsa0RBQVMsQ0FBQyxNQUFNO0FBQ2RMLGtCQUFjO0FBQ2YsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFTSxpRkFBaEI7QUFBQSw0QkFDRTtBQUFBLGdCQUFLVCxRQUFRLENBQUNVO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUssZUFBUyxFQUFFRCxvRkFBaEI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUEsNEJBQVNULFFBQVEsQ0FBQ1csR0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGLGVBUUU7QUFBSyxlQUFTLEVBQUVGLHlGQUFoQjtBQUFBLGdCQUNHZCxRQUFRLENBQUNpQixHQUFULENBQWNDLElBQUQsSUFBVTtBQUN0Qiw0QkFBTyw4REFBQyx3RUFBRDtBQUFhLGNBQUksRUFBRUEsSUFBbkI7QUFBdUMsYUFBRyxFQUFFYixRQUFRLENBQUNXO0FBQXJELFdBQThCRSxJQUFJLENBQUNDLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVA7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQTdCRDs7QUErQkEsK0RBQWVmLEtBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlci9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFjY291bnRDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FjY291bnRDYXJkL0FjY291bnRDYXJkXCI7XG5pbXBvcnQgZmV0Y2hBcGkgZnJvbSBcIi4uLy4uL3V0aWxzL2ZldGNoQXBpXCI7XG5pbXBvcnQgcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3BhZ2VzL3VzZXIubW9kdWxlLnNjc3NcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhY2NvdW50c0RhdGEgPSBhd2FpdCBmZXRjaEFwaShcbiAgICAgIGBhcGkvdXNlci9hY2NvdW50cy8ke2N0eC5xdWVyeS5kbml9YCxcbiAgICAgIFwiR0VUXCJcbiAgICApO1xuXG4gICAgaWYgKCFhY2NvdW50c0RhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgYWNjb3VudHMgfSA9IGF3YWl0IGFjY291bnRzRGF0YS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgYWNjb3VudHMsXG4gICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGN0eC5zdGF0dXNDb2RlID0gNTAzO1xuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IGluZGV4ID0gKHsgYWNjb3VudHMgfSkgPT4ge1xuICBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcbiAgICBcIlwiOiBcIlwiLFxuICB9KTtcblxuICBjb25zdCBzZXRTZXNzaW9uRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRVc2VyRGF0YShhd2FpdCBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ1c2VyRGF0YVwiKSkpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2Vzc2lvbkRhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgIDxoMT57dXNlckRhdGEuTmFtZX08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3Muc3ViY29udGFpbmVyfT5cbiAgICAgICAgPGgyPlBlcnNvbmFsIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgICAgPHA+RG5pOiB7dXNlckRhdGEuRG5pfTwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDI+QWNjb3VudCBCYW5rIEluZm9ybWF0aW9uPC9oMj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFjY291bnRzQ29udGFpbmVyfT5cbiAgICAgICAge2FjY291bnRzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8QWNjb3VudENhcmQgaW5mbz17aXRlbX0ga2V5PXtpdGVtLmlkfSBkbmk9e3VzZXJEYXRhLkRuaX0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/user/index.jsx\n");

/***/ }),

/***/ "./src/components/AccountCard/AccountCard.module.scss":
/*!************************************************************!*\
  !*** ./src/components/AccountCard/AccountCard.module.scss ***!
  \************************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"AccountCard_card__2hIo5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL0FjY291bnRDYXJkL0FjY291bnRDYXJkLm1vZHVsZS5zY3NzPzUxNDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2NvdW50Q2FyZC9BY2NvdW50Q2FyZC5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJBY2NvdW50Q2FyZF9jYXJkX18yaElvNVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AccountCard/AccountCard.module.scss\n");

/***/ }),

/***/ "./src/styles/pages/user.module.scss":
/*!*******************************************!*\
  !*** ./src/styles/pages/user.module.scss ***!
  \*******************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"user_container__2byro\",\n\t\"accountsContainer\": \"user_accountsContainer__HEJ2v\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvcGFnZXMvdXNlci5tb2R1bGUuc2Nzcz82OTllIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3BhZ2VzL3VzZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJ1c2VyX2NvbnRhaW5lcl9fMmJ5cm9cIixcblx0XCJhY2NvdW50c0NvbnRhaW5lclwiOiBcInVzZXJfYWNjb3VudHNDb250YWluZXJfX0hFSjJ2XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/pages/user.module.scss\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","src_utils_fetchApi_js-src_utils_formatterPeso_js-src_utils_formatterUsd_js"], function() { return __webpack_exec__("./src/pages/user/index.jsx"); });
module.exports = __webpack_exports__;

})();