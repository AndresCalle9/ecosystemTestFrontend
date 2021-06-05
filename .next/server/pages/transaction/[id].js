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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/globalConst */ \"./src/utils/globalConst.js\");\n/* harmony import */ var _utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/formatterPeso */ \"./src/utils/formatterPeso.js\");\n/* harmony import */ var _utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/formatterUsd */ \"./src/utils/formatterUsd.js\");\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/transaction/[id].jsx\";\n\n\n\n\nconst getServerSideProps = async ctx => {\n  try {\n    const transactionData = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_2__.API_TEST}/api/user/accounts/transaction/${ctx.params.id}/${ctx.query.dni}/${ctx.query.acc}`, {\n      method: \"GET\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    });\n\n    if (!transactionData) {\n      return {\n        statusCode: 503\n      };\n    }\n\n    const {\n      transactionDetails\n    } = await transactionData.json();\n    return {\n      props: {\n        transactionDetails,\n        statusCode: 200\n      }\n    };\n  } catch (e) {\n    ctx.statusCode = 503;\n    return {\n      props: {\n        statusCode: 503\n      }\n    };\n  }\n};\n\nfunction transaction({\n  transactionDetails\n}) {\n  const {\n    amount,\n    currency,\n    date,\n    state,\n    type,\n    id\n  } = transactionDetails;\n  const price = currency == \"COP\" ? (0,_utils_formatterPeso__WEBPACK_IMPORTED_MODULE_3__.default)(amount) : (0,_utils_formatterUsd__WEBPACK_IMPORTED_MODULE_4__.default)(amount);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: [\"transaction id \", id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Status: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, this), state ? \"Successfull\" : \"Pending\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Amount: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), price]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Date: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), date]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n        children: \"Type: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, this), type]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (transaction);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy90cmFuc2FjdGlvbi9baWRdLmpzeD9lZjJhIl0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsInRyYW5zYWN0aW9uRGF0YSIsImZldGNoIiwiQVBJX1RFU1QiLCJwYXJhbXMiLCJpZCIsInF1ZXJ5IiwiZG5pIiwiYWNjIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1c0NvZGUiLCJ0cmFuc2FjdGlvbkRldGFpbHMiLCJqc29uIiwicHJvcHMiLCJlIiwidHJhbnNhY3Rpb24iLCJhbW91bnQiLCJjdXJyZW5jeSIsImRhdGUiLCJzdGF0ZSIsInR5cGUiLCJwcmljZSIsImZvcm1hdHRlclBlc28iLCJmb3JtYXR0ZXJVc2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGtCQUFrQixHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUMvQyxNQUFJO0FBQ0YsVUFBTUMsZUFBZSxHQUFHLE1BQU1DLEtBQUssQ0FDaEMsR0FBRUMsd0RBQVMsa0NBQWlDSCxHQUFHLENBQUNJLE1BQUosQ0FBV0MsRUFBRyxJQUFHTCxHQUFHLENBQUNNLEtBQUosQ0FBVUMsR0FBSSxJQUFHUCxHQUFHLENBQUNNLEtBQUosQ0FBVUUsR0FBSSxFQUQ1RCxFQUVqQztBQUNFQyxZQUFNLEVBQUUsS0FEVjtBQUVFQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUZYLEtBRmlDLENBQW5DOztBQVVBLFFBQUksQ0FBQ1QsZUFBTCxFQUFzQjtBQUNwQixhQUFPO0FBQ0xVLGtCQUFVLEVBQUU7QUFEUCxPQUFQO0FBR0Q7O0FBQ0QsVUFBTTtBQUFFQztBQUFGLFFBQXlCLE1BQU1YLGVBQWUsQ0FBQ1ksSUFBaEIsRUFBckM7QUFFQSxXQUFPO0FBQ0xDLFdBQUssRUFBRTtBQUNMRiwwQkFESztBQUVMRCxrQkFBVSxFQUFFO0FBRlA7QUFERixLQUFQO0FBTUQsR0F4QkQsQ0F3QkUsT0FBT0ksQ0FBUCxFQUFVO0FBQ1ZmLE9BQUcsQ0FBQ1csVUFBSixHQUFpQixHQUFqQjtBQUNBLFdBQU87QUFDTEcsV0FBSyxFQUFFO0FBQ0xILGtCQUFVLEVBQUU7QUFEUDtBQURGLEtBQVA7QUFLRDtBQUNGLENBakNNOztBQW1DUCxTQUFTSyxXQUFULENBQXFCO0FBQUVKO0FBQUYsQ0FBckIsRUFBNkM7QUFDM0MsUUFBTTtBQUFFSyxVQUFGO0FBQVVDLFlBQVY7QUFBb0JDLFFBQXBCO0FBQTBCQyxTQUExQjtBQUFpQ0MsUUFBakM7QUFBdUNoQjtBQUF2QyxNQUE4Q08sa0JBQXBEO0FBQ0EsUUFBTVUsS0FBSyxHQUNUSixRQUFRLElBQUksS0FBWixHQUFvQkssNkRBQWEsQ0FBQ04sTUFBRCxDQUFqQyxHQUE0Q08sNERBQVksQ0FBQ1AsTUFBRCxDQUQxRDtBQUVBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxvQ0FBb0JaLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdlLEtBQUssR0FBRyxhQUFILEdBQW1CLFNBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBTUU7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUdFLEtBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFVRTtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0gsSUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQWNFO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixFQUVHRSxJQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBcUJEOztBQUVELCtEQUFlTCxXQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3RyYW5zYWN0aW9uL1tpZF0uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQVBJX1RFU1QgfSBmcm9tIFwiLi4vLi4vdXRpbHMvZ2xvYmFsQ29uc3RcIjtcbmltcG9ydCBmb3JtYXR0ZXJQZXNvIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJQZXNvXCI7XG5pbXBvcnQgZm9ybWF0dGVyVXNkIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXR0ZXJVc2RcIjtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbkRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgIGAke0FQSV9URVNUfS9hcGkvdXNlci9hY2NvdW50cy90cmFuc2FjdGlvbi8ke2N0eC5wYXJhbXMuaWR9LyR7Y3R4LnF1ZXJ5LmRuaX0vJHtjdHgucXVlcnkuYWNjfWAsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXRyYW5zYWN0aW9uRGF0YSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogNTAzLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB0cmFuc2FjdGlvbkRldGFpbHMgfSA9IGF3YWl0IHRyYW5zYWN0aW9uRGF0YS5qc29uKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdHJhbnNhY3Rpb25EZXRhaWxzLFxuICAgICAgICBzdGF0dXNDb2RlOiAyMDAsXG4gICAgICB9LFxuICAgIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjdHguc3RhdHVzQ29kZSA9IDUwMztcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgc3RhdHVzQ29kZTogNTAzLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG5mdW5jdGlvbiB0cmFuc2FjdGlvbih7IHRyYW5zYWN0aW9uRGV0YWlscyB9KSB7XG4gIGNvbnN0IHsgYW1vdW50LCBjdXJyZW5jeSwgZGF0ZSwgc3RhdGUsIHR5cGUsIGlkIH0gPSB0cmFuc2FjdGlvbkRldGFpbHM7XG4gIGNvbnN0IHByaWNlID1cbiAgICBjdXJyZW5jeSA9PSBcIkNPUFwiID8gZm9ybWF0dGVyUGVzbyhhbW91bnQpIDogZm9ybWF0dGVyVXNkKGFtb3VudCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT50cmFuc2FjdGlvbiBpZCB7aWR9PC9oMT5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5TdGF0dXM6IDwvYj5cbiAgICAgICAge3N0YXRlID8gXCJTdWNjZXNzZnVsbFwiIDogXCJQZW5kaW5nXCJ9XG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPGI+QW1vdW50OiA8L2I+XG4gICAgICAgIHtwcmljZX1cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8Yj5EYXRlOiA8L2I+XG4gICAgICAgIHtkYXRlfVxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxiPlR5cGU6IDwvYj5cbiAgICAgICAge3R5cGV9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zYWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/transaction/[id].jsx\n");

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