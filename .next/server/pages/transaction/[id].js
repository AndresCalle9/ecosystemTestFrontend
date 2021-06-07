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
exports.id = "pages/transaction/[id]";
exports.ids = ["pages/transaction/[id]"];
exports.modules = {

/***/ "./src/pages/transaction/[id].jsx":
/*!****************************************!*\
  !*** ./src/pages/transaction/[id].jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globalConst */ \"./src/utils/globalConst.js\");\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n/* harmony import */ var _styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/pages/transaction.module.scss */ \"./src/styles/pages/transaction.module.scss\");\n/* harmony import */ var _styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/transaction/[id].jsx\";\n\n\n\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const transactionData = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_2__.API_TEST}/api/user/accounts/transaction/${ctx.params.id}/${ctx.query.dni}/${ctx.query.acc}`, {\n      method: \"GET\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    });\n\n    if (!transactionData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    const {\n      transactionDetails\n    } = await transactionData.json();\n    return {\n      props: {\n        transactionDetails,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nfunction transaction({\n  transactionDetails\n}) {\n  const {\n    amount,\n    currency,\n    date,\n    state,\n    type,\n    id\n  } = transactionDetails;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_pages_transaction_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      children: [\"Transaction id \", id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Status: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, this), state ? \"Successfull\" : \"Pending\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Amount: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, this), price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Date: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Type: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 9\n      }, this), type]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transaction);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy90cmFuc2FjdGlvbi9baWRdLmpzeD9lZjJhIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInRyYW5zYWN0aW9uRGF0YSIsImZldGNoIiwiQVBJX1RFU1QiLCJwYXJhbXMiLCJpZCIsInF1ZXJ5IiwiZG5pIiwiYWNjIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1c0NvZGUiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJqc29uIiwicHJvcHMiLCJlIiwidHJhbnNhY3Rpb24iLCJhbW91bnQiLCJjdXJyZW5jeSIsImRhdGUiLCJzdGF0ZSIsInR5cGUiLCJwcmljZSIsImZvcm1hdHRlclBlc28iLCJmb3JtYXR0ZXJVc2QiLCJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsa0JBQWtCLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQy9DLE1BQUk7QUFDRixVQUFNQyxlQUFlLEdBQUcsTUFBTUMsS0FBSyxDQUNoQyxHQUFFQyx3REFBUyxrQ0FBaUNILEdBQUcsQ0FBQ0ksTUFBSixDQUFXQyxFQUFHLElBQUdMLEdBQUcsQ0FBQ00sS0FBSixDQUFVQyxHQUFJLElBQUdQLEdBQUcsQ0FBQ00sS0FBSixDQUFVRSxHQUFJLEVBRDVELEVBRWpDO0FBQ0VDLFlBQU0sRUFBRSxLQURWO0FBRUVDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBRlgsS0FGaUMsQ0FBbkM7O0FBVUEsUUFBSSxDQUFDVCxlQUFMLEVBQXNCO0FBQ3BCLGFBQU87QUFDTFUsa0JBQVUsRUFBRTtBQURQLE9BQVA7QUFHRDs7QUFDRCxVQUFNO0FBQUVDO0FBQUYsUUFBeUIsTUFBTVgsZUFBZSxDQUFDWSxJQUFoQixFQUFyQztBQUVBLFdBQU87QUFDTEMsV0FBSyxFQUFFO0FBQ0xGLDBCQURLO0FBRUxELGtCQUFVLEVBQUU7QUFGUDtBQURGLEtBQVA7QUFNRCxHQXhCRCxDQXdCRSxPQUFPSSxDQUFQLEVBQVU7QUFDVmYsT0FBRyxDQUFDVyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0EsV0FBTztBQUNMRyxXQUFLLEVBQUU7QUFDTEgsa0JBQVUsRUFBRTtBQURQO0FBREYsS0FBUDtBQUtEO0FBQ0YsQ0FqQ007O0FBbUNQLFNBQVNLLFdBQVQsQ0FBcUI7QUFBRUo7QUFBRixDQUFyQixFQUE2QztBQUMzQyxRQUFNO0FBQUVLLFVBQUY7QUFBVUMsWUFBVjtBQUFvQkMsUUFBcEI7QUFBMEJDLFNBQTFCO0FBQWlDQyxRQUFqQztBQUF1Q2hCO0FBQXZDLE1BQThDTyxrQkFBcEQ7QUFDQSxRQUFNVSxLQUFLLEdBQ1RKLFFBQVEsSUFBSSxLQUFaLEdBQW9CSyw2REFBYSxDQUFDTixNQUFELENBQWpDLEdBQTRDTyw0REFBWSxDQUFDUCxNQUFELENBRDFEO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVRLHdGQUFoQjtBQUFBLDRCQUNFO0FBQUEsb0NBQW9CcEIsRUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR2UsS0FBSyxHQUFHLGFBQUgsR0FBbUIsU0FGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFNRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0UsS0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVVFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHSCxJQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGLGVBY0U7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdFLElBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFxQkQ7O0FBRUQsK0RBQWVMLFdBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvdHJhbnNhY3Rpb24vW2lkXS5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBUElfVEVTVCB9IGZyb20gXCIuLi8uLi91dGlscy9nbG9iYWxDb25zdFwiO1xuaW1wb3J0IGZvcm1hdHRlclBlc28gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclBlc29cIjtcbmltcG9ydCBmb3JtYXR0ZXJVc2QgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdHRlclVzZFwiO1xuaW1wb3J0IHMgZnJvbSBcIi4uLy4uL3N0eWxlcy9wYWdlcy90cmFuc2FjdGlvbi5tb2R1bGUuc2Nzc1wiXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdHJhbnNhY3Rpb25EYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgICBgJHtBUElfVEVTVH0vYXBpL3VzZXIvYWNjb3VudHMvdHJhbnNhY3Rpb24vJHtjdHgucGFyYW1zLmlkfS8ke2N0eC5xdWVyeS5kbml9LyR7Y3R4LnF1ZXJ5LmFjY31gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKCF0cmFuc2FjdGlvbkRhdGEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgdHJhbnNhY3Rpb25EZXRhaWxzIH0gPSBhd2FpdCB0cmFuc2FjdGlvbkRhdGEuanNvbigpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHRyYW5zYWN0aW9uRGV0YWlscyxcbiAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgfSxcbiAgICB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY3R4LnN0YXR1c0NvZGUgPSA1MDM7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufTtcblxuZnVuY3Rpb24gdHJhbnNhY3Rpb24oeyB0cmFuc2FjdGlvbkRldGFpbHMgfSkge1xuICBjb25zdCB7IGFtb3VudCwgY3VycmVuY3ksIGRhdGUsIHN0YXRlLCB0eXBlLCBpZCB9ID0gdHJhbnNhY3Rpb25EZXRhaWxzO1xuICBjb25zdCBwcmljZSA9XG4gICAgY3VycmVuY3kgPT0gXCJDT1BcIiA/IGZvcm1hdHRlclBlc28oYW1vdW50KSA6IGZvcm1hdHRlclVzZChhbW91bnQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XG4gICAgICA8aDI+VHJhbnNhY3Rpb24gaWQge2lkfTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPGI+U3RhdHVzOiA8L2I+XG4gICAgICAgIHtzdGF0ZSA/IFwiU3VjY2Vzc2Z1bGxcIiA6IFwiUGVuZGluZ1wifVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPkFtb3VudDogPC9iPlxuICAgICAgICB7cHJpY2V9XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGI+RGF0ZTogPC9iPlxuICAgICAgICB7ZGF0ZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5UeXBlOiA8L2I+XG4gICAgICAgIHt0eXBlfVxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2FjdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/transaction/[id].jsx\n");

/***/ }),

/***/ "./src/utils/formatterPeso.js":
/*!************************************!*\
  !*** ./src/utils/formatterPeso.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst formatterPeso = price => {\n  const priceNumber = Number(price);\n  const priceWithFormat = new Intl.NumberFormat('es-CO', {\n    style: 'currency',\n    currency: 'COP',\n    minimumFractionDigits: 0\n  });\n  return priceWithFormat.format(priceNumber);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatterPeso);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9mb3JtYXR0ZXJQZXNvLmpzP2JiMDAiXSwibmFtZXMiOlsiZm9ybWF0dGVyUGVzbyIsInByaWNlIiwicHJpY2VOdW1iZXIiLCJOdW1iZXIiLCJwcmljZVdpdGhGb3JtYXQiLCJJbnRsIiwiTnVtYmVyRm9ybWF0Iiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdCJdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLGFBQWEsR0FBSUMsS0FBRCxJQUFXO0FBRS9CLFFBQU1DLFdBQVcsR0FBR0MsTUFBTSxDQUFDRixLQUFELENBQTFCO0FBQ0EsUUFBTUcsZUFBZSxHQUFHLElBQUlDLElBQUksQ0FBQ0MsWUFBVCxDQUFzQixPQUF0QixFQUErQjtBQUNyREMsU0FBSyxFQUFFLFVBRDhDO0FBRXJEQyxZQUFRLEVBQUUsS0FGMkM7QUFHckRDLHlCQUFxQixFQUFFO0FBSDhCLEdBQS9CLENBQXhCO0FBS0EsU0FBUUwsZUFBZSxDQUFDTSxNQUFoQixDQUF1QlIsV0FBdkIsQ0FBUjtBQUNELENBVEQ7O0FBV0UsK0RBQWVGLGFBQWYiLCJmaWxlIjoiLi9zcmMvdXRpbHMvZm9ybWF0dGVyUGVzby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdHRlclBlc28gPSAocHJpY2UpID0+IHtcbiAgXG4gIGNvbnN0IHByaWNlTnVtYmVyID0gTnVtYmVyKHByaWNlKVxuICBjb25zdCBwcmljZVdpdGhGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VzLUNPJywge1xuICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgIGN1cnJlbmN5OiAnQ09QJyxcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgfSlcbiAgcmV0dXJuIChwcmljZVdpdGhGb3JtYXQuZm9ybWF0KHByaWNlTnVtYmVyKSlcbn1cblxuICBleHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJQZXNvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/formatterPeso.js\n");

/***/ }),

/***/ "./src/utils/formatterUsd.js":
/*!***********************************!*\
  !*** ./src/utils/formatterUsd.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst formatterUsd = price => {\n  const priceNumber = Number(price);\n  const priceWithFormat = new Intl.NumberFormat('en-US', {\n    style: 'currency',\n    currency: 'USD',\n    minimumFractionDigits: 0\n  });\n  return priceWithFormat.format(priceNumber);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatterUsd);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9mb3JtYXR0ZXJVc2QuanM/ZWVlZSJdLCJuYW1lcyI6WyJmb3JtYXR0ZXJVc2QiLCJwcmljZSIsInByaWNlTnVtYmVyIiwiTnVtYmVyIiwicHJpY2VXaXRoRm9ybWF0IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXQiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLEdBQUlDLEtBQUQsSUFBVztBQUU1QixRQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0YsS0FBRCxDQUExQjtBQUNBLFFBQU1HLGVBQWUsR0FBRyxJQUFJQyxJQUFJLENBQUNDLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDckRDLFNBQUssRUFBRSxVQUQ4QztBQUVyREMsWUFBUSxFQUFFLEtBRjJDO0FBR3JEQyx5QkFBcUIsRUFBRTtBQUg4QixHQUEvQixDQUF4QjtBQUtBLFNBQVFMLGVBQWUsQ0FBQ00sTUFBaEIsQ0FBdUJSLFdBQXZCLENBQVI7QUFDRCxDQVRIOztBQVdJLCtEQUFlRixZQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2Zvcm1hdHRlclVzZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdHRlclVzZCA9IChwcmljZSkgPT4ge1xuICBcbiAgICBjb25zdCBwcmljZU51bWJlciA9IE51bWJlcihwcmljZSlcbiAgICBjb25zdCBwcmljZVdpdGhGb3JtYXQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywge1xuICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICBjdXJyZW5jeTogJ1VTRCcsXG4gICAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDBcbiAgICB9KVxuICAgIHJldHVybiAocHJpY2VXaXRoRm9ybWF0LmZvcm1hdChwcmljZU51bWJlcikpXG4gIH1cbiAgXG4gICAgZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyVXNkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/formatterUsd.js\n");

/***/ }),

/***/ "./src/utils/globalConst.js":
/*!**********************************!*\
  !*** ./src/utils/globalConst.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_TEST\": function() { return /* binding */ API_TEST; }\n/* harmony export */ });\nconst API_TEST = 'http://localhost:5000';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcz83M2RiIl0sIm5hbWVzIjpbIkFQSV9URVNUIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLHVCQUFqQiIsImZpbGUiOiIuL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVEVTVCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/globalConst.js\n");

/***/ }),

/***/ "./src/styles/pages/transaction.module.scss":
/*!**************************************************!*\
  !*** ./src/styles/pages/transaction.module.scss ***!
  \**************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"transaction_container__1X6oP\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9zdHlsZXMvcGFnZXMvdHJhbnNhY3Rpb24ubW9kdWxlLnNjc3M/ZDg2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcGFnZXMvdHJhbnNhY3Rpb24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJ0cmFuc2FjdGlvbl9jb250YWluZXJfXzFYNm9QXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/pages/transaction.module.scss\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/transaction/[id].jsx"));
module.exports = __webpack_exports__;

})();