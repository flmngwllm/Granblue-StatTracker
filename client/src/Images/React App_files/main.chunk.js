(this["webpackJsonpclient"] = this["webpackJsonpclient"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Nav */ "./src/components/Nav.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
/* harmony import */ var _components_Characters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Characters */ "./src/components/Characters.js");
/* harmony import */ var _components_Signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Signup */ "./src/components/Signup.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/User */ "./src/components/User.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/App.js";










function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/user/:id",
    component: _components_User__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/signup",
    component: _components_Signup__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/characters",
    component: _components_Characters__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    component: _components_Home__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Images/granback.jpg":
/*!*********************************!*\
  !*** ./src/Images/granback.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/granback.889009c9.jpg";

/***/ }),

/***/ "./src/components/Characters.js":
/*!**************************************!*\
  !*** ./src/components/Characters.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _gql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gql/queries */ "./src/gql/queries.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/components/Characters.js";





class Characters extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: _gql_queries__WEBPACK_IMPORTED_MODULE_2__["queryCharacters"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, ({
      loading,
      error,
      data
    }) => {
      if (loading) {
        return "...Loading";
      }

      if (error) {
        return `Error! ${error.message}`;
      }

      return data.characters.map(character => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: character._id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 29
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: character.image,
        alt: "character",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 31
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 31
        }
      }, character.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 31
        }
      }, character.description)));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Characters);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users */ "./src/components/Users.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Images_granback_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/granback.jpg */ "./src/Images/granback.jpg");
/* harmony import */ var _Images_granback_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Images_granback_jpg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/components/Home.js";




const Background = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
    background-image: url(${_Images_granback_jpg__WEBPACK_IMPORTED_MODULE_3___default.a});
    background-size: cover;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    
`;

class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Background, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 14
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 14
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Users */ "./src/components/Users.js");
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/components/Nav.js";




const menu = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Users__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
})));

class Nav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }
    }, "Stat Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 6
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/characters",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, "Characters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      overlay: menu,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }, "Users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"].Item, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      to: "/signup",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 6
      }
    }, "Signup"))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Signup.js":
/*!**********************************!*\
  !*** ./src/components/Signup.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gql_mutations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gql/mutations */ "./src/gql/mutations.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/components/Signup.js";




const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

class Signup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    let name, email;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Mutation"], {
      forwardRef: true,
      mutation: _gql_mutations__WEBPACK_IMPORTED_MODULE_1__["Add_User"],
      onCompleted: () => this.props.history.push('/'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, (addUser, {
      loading,
      error
    }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 19
      }
    }, "Create new user", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"], Object.assign({}, layout, {
      name: "basic",
      initialValues: {
        remember: true
      },
      onFinish: onFinish,
      onFinishFailed: onFinishFailed,
      onSubmit: e => {
        e.preventDefault();
        addUser({
          variables: {
            name: name.value,
            email: email.value
          }
        });
        name.value = "";
        email.value = "";
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      label: "Name",
      name: "name",
      ref: node => {
        name = node;
      },
      rules: [{
        required: true,
        message: 'Please input your name!'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, {
      label: "Email",
      name: "email",
      ref: node => {
        email = node;
      },
      rules: [{
        required: true,
        message: 'Please input your email!'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Form"].Item, Object.assign({}, tailLayout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      type: "primary",
      htmlType: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }, "Submit"))), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 30
      }
    }, "Loading..."), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 28
      }
    }, "Error : Please try again ")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./src/components/User.js":
/*!********************************!*\
  !*** ./src/components/User.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gql_queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gql/queries */ "./src/gql/queries.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/components/User.js";





class User extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
      query: _gql_queries__WEBPACK_IMPORTED_MODULE_1__["querySingleUser"],
      variables: {
        id: this.props.match.params.id
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, ({
      loading,
      error,
      data
    }) => {
      if (loading) {
        return "loading";
      }

      if (error) {
        return `Error! ${error.message}`;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }
      }, data.user.name, data.user.email, data.user.description, data.user.totalwins, data.user.charactersID, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LoadingOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 29
        }
      }));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./src/components/Users.js":
/*!*********************************!*\
  !*** ./src/components/Users.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _gql_queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gql/queries */ "./src/gql/queries.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/components/Users.js";





class Users extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
      query: _gql_queries__WEBPACK_IMPORTED_MODULE_2__["queryUsers"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, ({
      loading,
      error,
      data
    }) => {
      if (loading) {
        return "...Loading";
      }

      if (error) {
        return `Error! ${error.message}`;
      }

      return data.users.map(user => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: user._id,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 28
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: `/user/${user._id}`,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 30
        }
      }, user.name)));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Users);

/***/ }),

/***/ "./src/gql/mutations.js":
/*!******************************!*\
  !*** ./src/gql/mutations.js ***!
  \******************************/
/*! exports provided: Add_User, Update_User, DeleteUser, AddCharacter, UpdateCharacter, DeleteCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Add_User", function() { return Add_User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update_User", function() { return Update_User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUser", function() { return DeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCharacter", function() { return AddCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCharacter", function() { return UpdateCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteCharacter", function() { return DeleteCharacter; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);

const Add_User = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation addUser($name: String!, $email: String, $description: String, $totalwins: Int, $charactersID: ID){
    addUser(name: $name, email: $email, description: $description, totalwins: $totalwins, charactersID: $charactersID){
        _id
        email
        name
        description
        totalwins
        charactersID{
            name  
            description
            wins
            losses
            percentage
            image
        }
    }
}
`;
const Update_User = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation UpdateUser($id: String!, $name: String!, $email: String, $description: String, $totalwins: Int, $charactersID: ID){
    updateUser(id: $id, name: $name, email: $email, description: $description, totalwins: $totalwins, charactersID: $charactersID){
        _id
        email
        name
        description
        totalwins
        charactersID{
            name 
            description 
            wins
            losses
            percentage
            image
        }
    }
}
`;
const DeleteUser = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation($id: String!){
    deleteUser(id: $id){
        id
        email
        description
        name
        description
        totalwins
        charactersID
    }
}
`;
const AddCharacter = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation($name: String, $description: String, $wins: Int, $losses: Int, $percentage: Int, $image: String){
    addCharacter(name: $name, description: $description, wins: $wins, losses: $losses, percentage: $percentage, image: $image){
        name
        description
        wins
        losses
        percentage
        image
    }
}
`;
const UpdateCharacter = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation($id: String!, $name: String,  $description: String, $wins: Int, $losses: Int, $percentage: Int, $image: String){
    updateCharacter(id: $id, name: $name, description: $description, wins: $wins, losses: $losses, percentage: $percentage, image: $image){
        id
        name 
        description
        wins
        losses
        percentage
        image
    }
}
`;
const DeleteCharacter = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
mutation($id: String!){
    deleteCharacter(id: $id){
        id
        name
        description
        wins
        losses
        percentage
        image
    }
}
`;

/***/ }),

/***/ "./src/gql/queries.js":
/*!****************************!*\
  !*** ./src/gql/queries.js ***!
  \****************************/
/*! exports provided: queryUsers, querySingleUser, queryCharacters, querySingleCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryUsers", function() { return queryUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySingleUser", function() { return querySingleUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryCharacters", function() { return queryCharacters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySingleCharacter", function() { return querySingleCharacter; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
 //Defininig apollo graphql queries so it can access queries from graphql backend

const queryUsers = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
{
    users{
        _id
        name
        email
        totalwins
        charactersID{
            name 
            description
            wins
            losses
            percentage
            image
        }
    }
}
`;
const querySingleUser = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query($id: ID){
    user(id: $id){
        _id
        name
        email
        totalwins
        charactersID{
            name
            description  
            wins
            losses
            percentage
            image
        }
    }
}
`;
const queryCharacters = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
{
    characters{
        name
        description
        wins
        losses
        percentage
        image
    }
}
`;
const querySingleCharacter = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
query($id: String!){
    character(id: $id){
        name
        description
        wins
        losses 
        percentage
        image
    }
}
`;

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
var _jsxFileName = "/Users/chaosmegaman/Desktop/React/Granblue/client/src/index.js";






 //Instatiating the apollo client

const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_5__["default"]();
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], {
  client: client,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}))), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/chaosmegaman/Desktop/React/Granblue/client/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/chaosmegaman/Desktop/React/Granblue/client/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/chaosmegaman/Desktop/React/Granblue/client/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map