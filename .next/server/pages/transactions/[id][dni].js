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
exports.id = "pages/transactions/[id][dni]";
exports.ids = ["pages/transactions/[id][dni]"];
exports.modules = {

/***/ "./src/pages/transactions/[id][dni].jsx":
/*!**********************************************!*\
  !*** ./src/pages/transactions/[id][dni].jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globalConst */ \"./src/utils/globalConst.js\");\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/transactions/[id][dni].jsx\";\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const transactionsData = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_2__.API_TEST}//api/user/accounts/transactions/${ctx.params.id}/${ctx.params.dni}`, {\n      method: \"GET\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    });\n\n    if (!transactionsData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    console.log(transactionsData);\n    const {\n      transactions\n    } = await transactionsData.json();\n    return {\n      props: {\n        transactions: transactions,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nfunction transactions({\n  transactions\n}) {\n  console.log(transactions);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: \"hola\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transactions);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy90cmFuc2FjdGlvbnMvW2lkXVtkbmldLmpzeD80NTg3Il0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInRyYW5zYWN0aW9uc0RhdGEiLCJmZXRjaCIsIkFQSV9URVNUIiwicGFyYW1zIiwiaWQiLCJkbmkiLCJtZXRob2QiLCJoZWFkZXJzIiwic3RhdHVzQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2FjdGlvbnMiLCJqc29uIiwicHJvcHMiLCJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHTyxNQUFNQSxrQkFBa0IsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFDL0MsTUFBSTtBQUNGLFVBQU1DLGdCQUFnQixHQUFHLE1BQU1DLEtBQUssQ0FDakMsR0FBRUMsd0RBQVMsb0NBQW1DSCxHQUFHLENBQUNJLE1BQUosQ0FBV0MsRUFBRyxJQUFHTCxHQUFHLENBQUNJLE1BQUosQ0FBV0UsR0FBSSxFQUQ3QyxFQUVsQztBQUNFQyxZQUFNLEVBQUUsS0FEVjtBQUVFQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUZYLEtBRmtDLENBQXBDOztBQVVBLFFBQUksQ0FBQ1AsZ0JBQUwsRUFBdUI7QUFDckIsYUFBTztBQUNMUSxrQkFBVSxFQUFFO0FBRFAsT0FBUDtBQUdEOztBQUNEQyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsZ0JBQVo7QUFDQSxVQUFNO0FBQUVXO0FBQUYsUUFBbUIsTUFBTVgsZ0JBQWdCLENBQUNZLElBQWpCLEVBQS9CO0FBRUEsV0FBTztBQUNMQyxXQUFLLEVBQUU7QUFDTEYsb0JBQVksRUFBRUEsWUFEVDtBQUVMSCxrQkFBVSxFQUFFO0FBRlA7QUFERixLQUFQO0FBTUQsR0F6QkQsQ0F5QkUsT0FBT00sQ0FBUCxFQUFVO0FBQ1ZmLE9BQUcsQ0FBQ1MsVUFBSixHQUFpQixHQUFqQjtBQUNBLFdBQU87QUFDTEssV0FBSyxFQUFFO0FBQ0xMLGtCQUFVLEVBQUU7QUFEUDtBQURGLEtBQVA7QUFLRDtBQUNGLENBbENNOztBQW9DUCxTQUFTRyxZQUFULENBQXNCO0FBQUVBO0FBQUYsQ0FBdEIsRUFBd0M7QUFDdENGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUFaO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3RyYW5zYWN0aW9ucy9baWRdW2RuaV0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJX1RFU1QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsQ29uc3RcIjtcblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRyYW5zYWN0aW9uc0RhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke0FQSV9URVNUfS8vYXBpL3VzZXIvYWNjb3VudHMvdHJhbnNhY3Rpb25zLyR7Y3R4LnBhcmFtcy5pZH0vJHtjdHgucGFyYW1zLmRuaX1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCF0cmFuc2FjdGlvbnNEYXRhKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiA1MDMsXG4gICAgICB9O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0cmFuc2FjdGlvbnNEYXRhKVxuICAgIGNvbnN0IHsgdHJhbnNhY3Rpb25zIH0gPSBhd2FpdCB0cmFuc2FjdGlvbnNEYXRhLmpzb24oKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICB0cmFuc2FjdGlvbnM6IHRyYW5zYWN0aW9ucyxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY3R4LnN0YXR1c0NvZGUgPSA1MDM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdHJhbnNhY3Rpb25zKHsgdHJhbnNhY3Rpb25zIH0pIHtcbiAgY29uc29sZS5sb2codHJhbnNhY3Rpb25zKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPmhvbGE8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvbnM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/transactions/[id][dni].jsx\n");

/***/ }),

/***/ "./src/utils/globalConst.js":
/*!**********************************!*\
  !*** ./src/utils/globalConst.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_TEST\": function() { return /* binding */ API_TEST; }\n/* harmony export */ });\nconst API_TEST = 'http://localhost:5000';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcz83M2RiIl0sIm5hbWVzIjpbIkFQSV9URVNUIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLHVCQUFqQiIsImZpbGUiOiIuL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVEVTVCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/globalConst.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/transactions/[id][dni].jsx"));
module.exports = __webpack_exports__;

})();