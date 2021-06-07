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
exports.id = "pages/mean";
exports.ids = ["pages/mean"];
exports.modules = {

/***/ "./src/pages/mean/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/mean/index.jsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/mean/index.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst getServerSideProps = async ctx => {\n  return {\n    props: {\n      dni: ctx.query.dni,\n      acc: ctx.query.acc,\n      statusCode: 200\n    }\n  };\n};\n\nfunction index({\n  acc,\n  dni\n}) {\n  const {\n    0: reportFlag,\n    1: setReportFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: dates,\n    1: setDates\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    initial: \"\",\n    end: \"\"\n  });\n  const {\n    0: price,\n    1: setPrice\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n\n  const handleDate = e => {\n    setDates(_objectSpread(_objectSpread({}, dates), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const sendDates = async () => {\n    const meanData = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__.default)(`api/user/accounts/transaction/mean/${acc}/${dni}`, \"POST\", dates);\n    const {\n      mean,\n      currency\n    } = await meanData.json();\n    setPrice(currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__.default)(mean) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__.default)(mean));\n    setReportFlag(!reportFlag);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Transaction media\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n        htmlFor: \"\",\n        children: \"Select dates\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"initial\",\n        children: \"Initial Date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"initial\",\n        id: \"initial\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        htmlFor: \"end\",\n        children: \"Final date\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"date\",\n        name: \"end\",\n        id: \"end\",\n        onChange: handleDate\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: sendDates,\n        children: \"Generate mean\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), reportFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Media period\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 15\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n          children: \"Media: \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 18\n        }, this), price]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 15\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9tZWFuL2luZGV4LmpzeD84ODkxIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInByb3BzIiwiZG5pIiwicXVlcnkiLCJhY2MiLCJzdGF0dXNDb2RlIiwiaW5kZXgiLCJyZXBvcnRGbGFnIiwic2V0UmVwb3J0RmxhZyIsInVzZVN0YXRlIiwiZGF0ZXMiLCJzZXREYXRlcyIsImluaXRpYWwiLCJlbmQiLCJwcmljZSIsInNldFByaWNlIiwiaGFuZGxlRGF0ZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzZW5kRGF0ZXMiLCJtZWFuRGF0YSIsImZldGNoQXBpIiwibWVhbiIsImN1cnJlbmN5IiwianNvbiIsImZvcm1hdHRlclBlc28iLCJmb3JtYXR0ZXJVc2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxrQkFBa0IsR0FBRyxNQUFPQyxHQUFQLElBQWU7QUFFM0MsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTEMsU0FBRyxFQUFFRixHQUFHLENBQUNHLEtBQUosQ0FBVUQsR0FEVjtBQUVMRSxTQUFHLEVBQUVKLEdBQUcsQ0FBQ0csS0FBSixDQUFVQyxHQUZWO0FBR0xDLGdCQUFVLEVBQUU7QUFIUDtBQURGLEdBQVA7QUFRSCxDQVZJOztBQVlQLFNBQVNDLEtBQVQsQ0FBZTtBQUFDRixLQUFEO0FBQUtGO0FBQUwsQ0FBZixFQUEwQjtBQUN4QixRQUFNO0FBQUEsT0FBQ0ssVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkYsK0NBQVEsQ0FBQztBQUNqQ0csV0FBTyxFQUFFLEVBRHdCO0FBRWpDQyxPQUFHLEVBQUU7QUFGNEIsR0FBRCxDQUFsQztBQUlBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQk4sK0NBQVEsQ0FBQyxDQUFELENBQWxDOztBQUVBLFFBQU1PLFVBQVUsR0FBSUMsQ0FBRCxJQUFPO0FBQ3hCTixZQUFRLGlDQUNIRCxLQURHO0FBRU4sT0FBQ08sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLElBQVYsR0FBaUJGLENBQUMsQ0FBQ0MsTUFBRixDQUFTRTtBQUZwQixPQUFSO0FBSUQsR0FMRDs7QUFPQSxRQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUM1QixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsd0RBQVEsQ0FDNUIsc0NBQXFDbkIsR0FBSSxJQUFHRixHQUFJLEVBRHBCLEVBRTdCLE1BRjZCLEVBRzdCUSxLQUg2QixDQUEvQjtBQUtBLFVBQU07QUFBQ2MsVUFBRDtBQUFPQztBQUFQLFFBQW1CLE1BQU1ILFFBQVEsQ0FBQ0ksSUFBVCxFQUEvQjtBQUNBWCxZQUFRLENBQUNVLFFBQVEsSUFBSSxLQUFaLEdBQW9CRSw2REFBYSxDQUFDSCxJQUFELENBQWpDLEdBQXlDSSw0REFBWSxDQUFDSixJQUFELENBQXRELENBQVI7QUFDQWhCLGlCQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUFiO0FBQ0QsR0FURDs7QUFXQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDhCQUNFO0FBQUksZUFBTyxFQUFDLEVBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sZUFBTyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLFNBQXhCO0FBQWtDLFVBQUUsRUFBQyxTQUFyQztBQUErQyxnQkFBUSxFQUFFUztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFPLGVBQU8sRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkYsZUFLRTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQyxLQUF4QjtBQUE4QixVQUFFLEVBQUMsS0FBakM7QUFBdUMsZ0JBQVEsRUFBRUE7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxGLGVBTUU7QUFBUSxlQUFPLEVBQUVLLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFVR2QsVUFBVSxpQkFDUDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLGdDQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFILEVBQWtCTyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7QUFFRCwrREFBZVIsS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9tZWFuL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoQXBpIGZyb20gXCIuLi8uLi91dGlscy9mZXRjaEFwaVwiO1xuaW1wb3J0IGZvcm1hdHRlclBlc28gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclBlc29cIjtcbmltcG9ydCBmb3JtYXR0ZXJVc2QgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclVzZFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgZG5pOiBjdHgucXVlcnkuZG5pLFxuICAgICAgICAgIGFjYzogY3R4LnF1ZXJ5LmFjYyxcbiAgICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIFxuICB9O1xuXG5mdW5jdGlvbiBpbmRleCh7YWNjLGRuaX0pIHtcbiAgY29uc3QgW3JlcG9ydEZsYWcsIHNldFJlcG9ydEZsYWddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKHtcbiAgICBpbml0aWFsOiBcIlwiLFxuICAgIGVuZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBoYW5kbGVEYXRlID0gKGUpID0+IHtcbiAgICBzZXREYXRlcyh7XG4gICAgICAuLi5kYXRlcyxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZERhdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG1lYW5EYXRhID0gYXdhaXQgZmV0Y2hBcGkoXG4gICAgICBgYXBpL3VzZXIvYWNjb3VudHMvdHJhbnNhY3Rpb24vbWVhbi8ke2FjY30vJHtkbml9YCxcbiAgICAgIFwiUE9TVFwiLFxuICAgICAgZGF0ZXNcbiAgICApO1xuICAgIGNvbnN0IHttZWFuLCBjdXJyZW5jeX0gPSBhd2FpdCBtZWFuRGF0YS5qc29uKCk7XG4gICAgc2V0UHJpY2UoY3VycmVuY3kgPT0gXCJDT1BcIiA/IGZvcm1hdHRlclBlc28obWVhbik6IGZvcm1hdHRlclVzZChtZWFuKSk7XG4gICAgc2V0UmVwb3J0RmxhZyghcmVwb3J0RmxhZyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlRyYW5zYWN0aW9uIG1lZGlhPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMyBodG1sRm9yPVwiXCI+U2VsZWN0IGRhdGVzPC9oMz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbml0aWFsXCI+SW5pdGlhbCBEYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImluaXRpYWxcIiBpZD1cImluaXRpYWxcIiBvbkNoYW5nZT17aGFuZGxlRGF0ZX0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbmRcIj5GaW5hbCBkYXRlPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImVuZFwiIGlkPVwiZW5kXCIgb25DaGFuZ2U9e2hhbmRsZURhdGV9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZERhdGVzfT5HZW5lcmF0ZSBtZWFuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtyZXBvcnRGbGFnICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+TWVkaWEgcGVyaW9kPC9oMj5cbiAgICAgICAgICAgICAgPHA+PGI+TWVkaWE6IDwvYj57cHJpY2V9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/mean/index.jsx\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["src_utils_fetchApi_js-src_utils_formatterPeso_js-src_utils_formatterUsd_js"], function() { return __webpack_exec__("./src/pages/mean/index.jsx"); });
module.exports = __webpack_exports__;

})();