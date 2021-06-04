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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/fetchApi */ \"./src/utils/fetchApi.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @sweetalert/with-react */ \"@sweetalert/with-react\");\n/* harmony import */ var _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sweetalert_with_react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/andrescalleuribe/Dev-in-med/EcosystemsTest/frontend/src/pages/index.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst index = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: \"\",\n    dni: \"\",\n    password: \"\"\n  });\n  const {\n    0: loginInfo,\n    1: setLoginInfo\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    dni: \"\",\n    password: \"\"\n  });\n  const {\n    0: newUserFlag,\n    1: setNewUserFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const {\n    0: loginFlag,\n    1: setLoginFlag\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  const handleInputChange = e => {\n    setUser(_objectSpread(_objectSpread({}, user), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const handleInputLoginChange = e => {\n    setLoginInfo(_objectSpread(_objectSpread({}, loginInfo), {}, {\n      [e.target.name]: e.target.value\n    }));\n  };\n\n  const sendUser = async e => {\n    e.preventDefault();\n    const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__.default)(\"api/user/create\", \"POST\", user);\n    console.log(res);\n\n    if (res.status === 201) {\n      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_4___default()({\n        title: \"Success\",\n        text: \"User created successfully\",\n        icon: \"success\",\n        buttons: true,\n        dangerMode: false\n      });\n      setLoginFlag(true);\n      setNewUserFlag(false);\n      router.push(\"/\");\n    } else {\n      _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_4___default()({\n        title: \"Error\",\n        text: \"Something went wrong, please try again\",\n        icon: \"warning\",\n        buttons: true,\n        dangerMode: true\n      });\n      router.push(\"/\");\n    }\n  };\n\n  const login = async e => {\n    e.preventDefault();\n\n    try {\n      const res = await (0,_utils_fetchApi__WEBPACK_IMPORTED_MODULE_2__.default)(\"api/user/login\", \"POST\", loginInfo);\n      const data = await res.json();\n      console.log(data);\n\n      if (res.status === 200) {\n        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_4___default()({\n          title: \"Success\",\n          text: \"Login was successfully\",\n          icon: \"success\",\n          buttons: true,\n          dangerMode: false\n        });\n        await sessionStorage.setItem(\"id\", data.user._id);\n        await sessionStorage.setItem(\"userData\", JSON.stringify(data.user));\n        await sessionStorage.setItem(\"session\", true);\n        await sessionStorage.setItem(\"token\", data.token);\n        router.push(\"/user\");\n      } else {\n        _sweetalert_with_react__WEBPACK_IMPORTED_MODULE_4___default()({\n          title: \"Error\",\n          text: \"Dni or Password invalid\",\n          icon: \"warning\",\n          buttons: true,\n          dangerMode: true\n        });\n        router.push(\"/\");\n      }\n    } catch (error) {\n      return error;\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => setNewUserFlag(!newUserFlag),\n        children: \"Sing Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: () => setLoginFlag(!loginFlag),\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, undefined), newUserFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Sing Up\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: sendUser,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Name\",\n          name: \"name\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Dni\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Dni\",\n          name: \"dni\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Password\",\n          name: \"password\",\n          onChange: handleInputChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          type: \"submit\",\n          children: \"Create User\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 9\n    }, undefined), loginFlag && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Log In\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 11\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: login,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Dni\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Dni\",\n          name: \"dni\",\n          onChange: handleInputLoginChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 144,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n          children: \"Password\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 151,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          placeholder: \"Password\",\n          name: \"password\",\n          onChange: handleInputLoginChange,\n          required: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          className: \"button\",\n          type: \"submit\",\n          children: \"Log In\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 159,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 142,\n        columnNumber: 11\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 140,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy9wYWdlcy9pbmRleC5qc3g/MGVkNyJdLCJuYW1lcyI6WyJpbmRleCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJuYW1lIiwiZG5pIiwicGFzc3dvcmQiLCJsb2dpbkluZm8iLCJzZXRMb2dpbkluZm8iLCJuZXdVc2VyRmxhZyIsInNldE5ld1VzZXJGbGFnIiwibG9naW5GbGFnIiwic2V0TG9naW5GbGFnIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJbnB1dExvZ2luQ2hhbmdlIiwic2VuZFVzZXIiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImZldGNoQXBpIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInN3YWwiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwiYnV0dG9ucyIsImRhbmdlck1vZGUiLCJwdXNoIiwibG9naW4iLCJkYXRhIiwianNvbiIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIl9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0b2tlbiIsImVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUVBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFLEVBRHlCO0FBRS9CQyxPQUFHLEVBQUUsRUFGMEI7QUFHL0JDLFlBQVEsRUFBRTtBQUhxQixHQUFELENBQWhDO0FBS0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCTCwrQ0FBUSxDQUFDO0FBQ3pDRSxPQUFHLEVBQUUsRUFEb0M7QUFFekNDLFlBQVEsRUFBRTtBQUYrQixHQUFELENBQTFDO0FBSUEsUUFBTTtBQUFBLE9BQUNHLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBOUM7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJULCtDQUFRLENBQUMsS0FBRCxDQUExQzs7QUFFQSxRQUFNVSxpQkFBaUIsR0FBSUMsQ0FBRCxJQUFPO0FBQy9CWixXQUFPLGlDQUNGRCxJQURFO0FBRUwsT0FBQ2EsQ0FBQyxDQUFDQyxNQUFGLENBQVNYLElBQVYsR0FBaUJVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQztBQUZyQixPQUFQO0FBSUQsR0FMRDs7QUFPQSxRQUFNQyxzQkFBc0IsR0FBSUgsQ0FBRCxJQUFPO0FBQ3BDTixnQkFBWSxpQ0FDUEQsU0FETztBQUVWLE9BQUNPLENBQUMsQ0FBQ0MsTUFBRixDQUFTWCxJQUFWLEdBQWlCVSxDQUFDLENBQUNDLE1BQUYsQ0FBU0M7QUFGaEIsT0FBWjtBQUlELEdBTEQ7O0FBT0EsUUFBTUUsUUFBUSxHQUFHLE1BQU9KLENBQVAsSUFBYTtBQUM1QkEsS0FBQyxDQUFDSyxjQUFGO0FBRUEsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLHdEQUFRLENBQUMsaUJBQUQsRUFBb0IsTUFBcEIsRUFBNEJwQixJQUE1QixDQUExQjtBQUNBcUIsV0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7O0FBQ0EsUUFBSUEsR0FBRyxDQUFDSSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJDLG1FQUFJLENBQUM7QUFDSEMsYUFBSyxFQUFFLFNBREo7QUFFSEMsWUFBSSxFQUFFLDJCQUZIO0FBR0hDLFlBQUksRUFBRSxTQUhIO0FBSUhDLGVBQU8sRUFBRSxJQUpOO0FBS0hDLGtCQUFVLEVBQUU7QUFMVCxPQUFELENBQUo7QUFPQWxCLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FGLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FYLFlBQU0sQ0FBQ2dDLElBQVAsQ0FBWSxHQUFaO0FBQ0QsS0FYRCxNQVdPO0FBQ0xOLG1FQUFJLENBQUM7QUFDSEMsYUFBSyxFQUFFLE9BREo7QUFFSEMsWUFBSSxFQUFFLHdDQUZIO0FBR0hDLFlBQUksRUFBRSxTQUhIO0FBSUhDLGVBQU8sRUFBRSxJQUpOO0FBS0hDLGtCQUFVLEVBQUU7QUFMVCxPQUFELENBQUo7QUFPQS9CLFlBQU0sQ0FBQ2dDLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQTFCRDs7QUE0QkEsUUFBTUMsS0FBSyxHQUFHLE1BQU9sQixDQUFQLElBQWE7QUFDekJBLEtBQUMsQ0FBQ0ssY0FBRjs7QUFFQSxRQUFJO0FBQ0YsWUFBTUMsR0FBRyxHQUFHLE1BQU1DLHdEQUFRLENBQUMsZ0JBQUQsRUFBbUIsTUFBbkIsRUFBMkJkLFNBQTNCLENBQTFCO0FBQ0EsWUFBTTBCLElBQUksR0FBRyxNQUFNYixHQUFHLENBQUNjLElBQUosRUFBbkI7QUFDQVosYUFBTyxDQUFDQyxHQUFSLENBQVlVLElBQVo7O0FBQ0EsVUFBSWIsR0FBRyxDQUFDSSxNQUFKLEtBQWUsR0FBbkIsRUFBd0I7QUFDdEJDLHFFQUFJLENBQUM7QUFDSEMsZUFBSyxFQUFFLFNBREo7QUFFSEMsY0FBSSxFQUFFLHdCQUZIO0FBR0hDLGNBQUksRUFBRSxTQUhIO0FBSUhDLGlCQUFPLEVBQUUsSUFKTjtBQUtIQyxvQkFBVSxFQUFFO0FBTFQsU0FBRCxDQUFKO0FBT0EsY0FBTUssY0FBYyxDQUFDQyxPQUFmLENBQXVCLElBQXZCLEVBQTZCSCxJQUFJLENBQUNoQyxJQUFMLENBQVVvQyxHQUF2QyxDQUFOO0FBQ0EsY0FBTUYsY0FBYyxDQUFDQyxPQUFmLENBQXVCLFVBQXZCLEVBQW1DRSxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBSSxDQUFDaEMsSUFBcEIsQ0FBbkMsQ0FBTjtBQUNBLGNBQU1rQyxjQUFjLENBQUNDLE9BQWYsQ0FBdUIsU0FBdkIsRUFBa0MsSUFBbEMsQ0FBTjtBQUNBLGNBQU1ELGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixPQUF2QixFQUFnQ0gsSUFBSSxDQUFDTyxLQUFyQyxDQUFOO0FBQ0F6QyxjQUFNLENBQUNnQyxJQUFQLENBQVksT0FBWjtBQUNELE9BYkQsTUFhTztBQUNMTixxRUFBSSxDQUFDO0FBQ0hDLGVBQUssRUFBRSxPQURKO0FBRUhDLGNBQUksRUFBRSx5QkFGSDtBQUdIQyxjQUFJLEVBQUUsU0FISDtBQUlIQyxpQkFBTyxFQUFFLElBSk47QUFLSEMsb0JBQVUsRUFBRTtBQUxULFNBQUQsQ0FBSjtBQU9BL0IsY0FBTSxDQUFDZ0MsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEtBM0JELENBMkJFLE9BQU9VLEtBQVAsRUFBYztBQUNkLGFBQU9BLEtBQVA7QUFDRDtBQUNGLEdBakNEOztBQW1DQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsOEJBQ0U7QUFBUSxlQUFPLEVBQUUsTUFBTS9CLGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBUSxlQUFPLEVBQUUsTUFBTUcsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBS0dGLFdBQVcsaUJBQ1Y7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sZ0JBQVEsRUFBRVMsUUFBaEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxxQkFBVyxFQUFDLE1BRmQ7QUFHRSxjQUFJLEVBQUMsTUFIUDtBQUlFLGtCQUFRLEVBQUVMLGlCQUpaO0FBS0Usa0JBQVE7QUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUscUJBQVcsRUFBQyxLQUZkO0FBR0UsY0FBSSxFQUFDLEtBSFA7QUFJRSxrQkFBUSxFQUFFQSxpQkFKWjtBQUtFLGtCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQWlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkYsZUFrQkU7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHFCQUFXLEVBQUMsVUFGZDtBQUdFLGNBQUksRUFBQyxVQUhQO0FBSUUsa0JBQVEsRUFBRUEsaUJBSlo7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbEJGLGVBeUJFO0FBQVEsbUJBQVMsRUFBQyxRQUFsQjtBQUEyQixjQUFJLEVBQUMsUUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkosRUF3Q0dGLFNBQVMsaUJBQ1I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sZ0JBQVEsRUFBRXFCLEtBQWhCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUNFLGNBQUksRUFBQyxNQURQO0FBRUUscUJBQVcsRUFBQyxLQUZkO0FBR0UsY0FBSSxFQUFDLEtBSFA7QUFJRSxrQkFBUSxFQUFFZixzQkFKWjtBQUtFLGtCQUFRO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGLGVBVUU7QUFDRSxjQUFJLEVBQUMsTUFEUDtBQUVFLHFCQUFXLEVBQUMsVUFGZDtBQUdFLGNBQUksRUFBQyxVQUhQO0FBSUUsa0JBQVEsRUFBRUEsc0JBSlo7QUFLRSxrQkFBUTtBQUxWO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsZUFpQkU7QUFBUSxtQkFBUyxFQUFDLFFBQWxCO0FBQTJCLGNBQUksRUFBQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFxRUQsQ0FqS0Q7O0FBbUtBLCtEQUFlbkIsS0FBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaEFwaSBmcm9tIFwiLi4vdXRpbHMvZmV0Y2hBcGlcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN3YWwgZnJvbSBcIkBzd2VldGFsZXJ0L3dpdGgtcmVhY3RcIjtcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIGRuaTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtsb2dpbkluZm8sIHNldExvZ2luSW5mb10gPSB1c2VTdGF0ZSh7XG4gICAgZG5pOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW25ld1VzZXJGbGFnLCBzZXROZXdVc2VyRmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2dpbkZsYWcsIHNldExvZ2luRmxhZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFVzZXIoe1xuICAgICAgLi4udXNlcixcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRMb2dpbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0TG9naW5JbmZvKHtcbiAgICAgIC4uLmxvZ2luSW5mbyxcbiAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgc2VuZFVzZXIgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoQXBpKFwiYXBpL3VzZXIvY3JlYXRlXCIsIFwiUE9TVFwiLCB1c2VyKTtcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgIHN3YWwoe1xuICAgICAgICB0aXRsZTogXCJTdWNjZXNzXCIsXG4gICAgICAgIHRleHQ6IFwiVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgYnV0dG9uczogdHJ1ZSxcbiAgICAgICAgZGFuZ2VyTW9kZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHNldExvZ2luRmxhZyh0cnVlKTtcbiAgICAgIHNldE5ld1VzZXJGbGFnKGZhbHNlKTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3dhbCh7XG4gICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgIHRleHQ6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcsIHBsZWFzZSB0cnkgYWdhaW5cIixcbiAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGRhbmdlck1vZGU6IHRydWUsXG4gICAgICB9KTtcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgbG9naW4gPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaEFwaShcImFwaS91c2VyL2xvZ2luXCIsIFwiUE9TVFwiLCBsb2dpbkluZm8pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgc3dhbCh7XG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxuICAgICAgICAgIHRleHQ6IFwiTG9naW4gd2FzIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgICAgZGFuZ2VyTW9kZTogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiaWRcIiwgZGF0YS51c2VyLl9pZCk7XG4gICAgICAgIGF3YWl0IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ1c2VyRGF0YVwiLCBKU09OLnN0cmluZ2lmeShkYXRhLnVzZXIpKTtcbiAgICAgICAgYXdhaXQgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInNlc3Npb25cIiwgdHJ1ZSk7XG4gICAgICAgIGF3YWl0IHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLnRva2VuKTtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvdXNlclwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3YWwoe1xuICAgICAgICAgIHRpdGxlOiBcIkVycm9yXCIsXG4gICAgICAgICAgdGV4dDogXCJEbmkgb3IgUGFzc3dvcmQgaW52YWxpZFwiLFxuICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgICAgZGFuZ2VyTW9kZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE5ld1VzZXJGbGFnKCFuZXdVc2VyRmxhZyl9PlNpbmcgVXA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRMb2dpbkZsYWcoIWxvZ2luRmxhZyl9PkxvZyBJbjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7bmV3VXNlckZsYWcgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMT5TaW5nIFVwPC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZFVzZXJ9PlxuICAgICAgICAgICAgPGxhYmVsPk5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsPkRuaTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRuaVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJkbmlcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgIENyZWF0ZSBVc2VyXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2xvZ2luRmxhZyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPkxvZyBJbjwvaDE+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2xvZ2lufT5cbiAgICAgICAgICAgIDxsYWJlbD5Ebmk8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEbmlcIlxuICAgICAgICAgICAgICBuYW1lPVwiZG5pXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0TG9naW5DaGFuZ2V9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRMb2dpbkNoYW5nZX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgTG9nIEluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "./src/utils/fetchApi.js":
/*!*******************************!*\
  !*** ./src/utils/fetchApi.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_globalConst__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/globalConst */ \"./src/utils/globalConst.js\");\n\n\nconst fetchApi = async (endPoint, method, body) => {\n  const res = await fetch(`${_utils_globalConst__WEBPACK_IMPORTED_MODULE_0__.API_TEST}/${endPoint}`, {\n    method: method,\n    headers: {\n      \"Content-Type\": \"application/json\"\n    },\n    body: JSON.stringify(body)\n  });\n  return res;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchApi);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9mZXRjaEFwaS5qcz8yMWI1Il0sIm5hbWVzIjpbImZldGNoQXBpIiwiZW5kUG9pbnQiLCJtZXRob2QiLCJib2R5IiwicmVzIiwiZmV0Y2giLCJBUElfVEVTVCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxPQUFPQyxRQUFQLEVBQWdCQyxNQUFoQixFQUF1QkMsSUFBdkIsS0FBZ0M7QUFDOUMsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyx3REFBUyxJQUFHTCxRQUFTLEVBQXpCLEVBQTRCO0FBQzlDQyxVQUFNLEVBQUVBLE1BRHNDO0FBRTlDSyxXQUFPLEVBQUU7QUFDUCxzQkFBZ0I7QUFEVCxLQUZxQztBQUs5Q0osUUFBSSxFQUFFSyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sSUFBZjtBQUx3QyxHQUE1QixDQUF2QjtBQU9HLFNBQU9DLEdBQVA7QUFDTCxDQVREOztBQVdBLCtEQUFlSixRQUFmIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2ZldGNoQXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJX1RFU1QgfSBmcm9tIFwiLi4vdXRpbHMvZ2xvYmFsQ29uc3RcIjtcblxuY29uc3QgZmV0Y2hBcGkgPSBhc3luYyAoZW5kUG9pbnQsbWV0aG9kLGJvZHkpID0+IHtcbiAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9URVNUfS8ke2VuZFBvaW50fWAsIHtcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZmV0Y2hBcGk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/fetchApi.js\n");

/***/ }),

/***/ "./src/utils/globalConst.js":
/*!**********************************!*\
  !*** ./src/utils/globalConst.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API_TEST\": function() { return /* binding */ API_TEST; }\n/* harmony export */ });\nconst API_TEST = 'http://localhost:5000';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcz83M2RiIl0sIm5hbWVzIjpbIkFQSV9URVNUIl0sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLHVCQUFqQiIsImZpbGUiOiIuL3NyYy91dGlscy9nbG9iYWxDb25zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVEVTVCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/globalConst.js\n");

/***/ }),

/***/ "@sweetalert/with-react":
/*!*****************************************!*\
  !*** external "@sweetalert/with-react" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@sweetalert/with-react");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();