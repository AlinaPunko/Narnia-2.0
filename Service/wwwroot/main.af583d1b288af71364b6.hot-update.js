webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AccountMenu/accountMenu.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AccountMenu/accountMenu.scss ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".account-menu--opened {\n  width: 200px;\n  height: fit-content;\n  background-color: #ffffff;\n  border-bottom: 1px #808080 solid;\n  border-left: 1px #808080 solid;\n  visibility: visible;\n  transition-duration: 1s;\n  transition-property: width, visibility; }\n\n.account-menu--closed {\n  width: 0;\n  visibility: hidden;\n  transition-duration: 1s;\n  transition-property: width, visibility; }\n  .account-menu--closed .account-menu__links {\n    padding-left: 0; }\n\n.account-menu {\n  position: absolute;\n  top: 48px;\n  right: 0; }\n\n.account-menu__links {\n  padding-left: 10px;\n  transition-duration: 1s;\n  transition-property: padding; }\n", ""]);



/***/ }),

/***/ "./src/components/AccountMenu/accountMenu.jsx":
/*!****************************************************!*\
  !*** ./src/components/AccountMenu/accountMenu.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SideMenuLink/sideMenuLink */ "./src/components/SideMenuLink/sideMenuLink.jsx");
/* harmony import */ var helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/serviceWrapper */ "./src/helpers/serviceWrapper.js");
/* harmony import */ var services_userService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/userService */ "./src/services/userService.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var styles_icons_signin_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/icons/signin.svg */ "./src/styles/icons/signin.svg");
/* harmony import */ var styles_icons_signup_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/icons/signup.svg */ "./src/styles/icons/signup.svg");
/* harmony import */ var styles_icons_signout_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/icons/signout.svg */ "./src/styles/icons/signout.svg");
/* harmony import */ var styles_icons_account_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/icons/account.svg */ "./src/styles/icons/account.svg");
/* harmony import */ var styles_icons_cart_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styles/icons/cart.svg */ "./src/styles/icons/cart.svg");
/* harmony import */ var _accountMenu_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./accountMenu.scss */ "./src/components/AccountMenu/accountMenu.scss");
/* harmony import */ var _accountMenu_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_accountMenu_scss__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var AccountMenu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AccountMenu, _React$PureComponent);

  var _super = _createSuper(AccountMenu);

  function AccountMenu() {
    var _this;

    _classCallCheck(this, AccountMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "signOutClick", function () {
      helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].deleteId();
      helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].deleteRole();
      helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].deleteToken();
      helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_4__["default"].callService(services_userService__WEBPACK_IMPORTED_MODULE_5__["default"].signOut, null, null);
    });

    return _this;
  }

  _createClass(AccountMenu, [{
    key: "render",
    value: function render() {
      var menuClass = 'account-menu';

      if (this.props.showMenu) {
        menuClass += ' account-menu--opened';
      } else {
        menuClass += ' account-menu--closed';
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: menuClass,
        onClick: this.props.closeFunction
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "account-menu__links"
      }, (helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getId() === '' || helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getId() === null) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/login"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Sign In",
        icon: styles_icons_signin_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/join"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Sign Up",
        icon: styles_icons_signup_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
      })))), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getRole() === 'admin' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/join"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Sign Up Admin",
        icon: styles_icons_signup_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Active orders",
        icon: styles_icons_cart_svg__WEBPACK_IMPORTED_MODULE_11__["default"]
      })))), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getId() !== '' && helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getId() !== null && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/profile"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "My Profile",
        icon: styles_icons_account_svg__WEBPACK_IMPORTED_MODULE_10__["default"]
      }))), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getRole() === 'user' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/order"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Shopping cart",
        icon: styles_icons_cart_svg__WEBPACK_IMPORTED_MODULE_11__["default"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "My orders",
        icon: styles_icons_cart_svg__WEBPACK_IMPORTED_MODULE_11__["default"]
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: this.signOutClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Sign Out",
        icon: styles_icons_signout_svg__WEBPACK_IMPORTED_MODULE_9__["default"]
      }))))));
    }
  }]);

  return AccountMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(AccountMenu, "propTypes", {
  showMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  closeFunction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});



/***/ }),

/***/ "./src/components/AccountMenu/accountMenu.scss":
/*!*****************************************************!*\
  !*** ./src/components/AccountMenu/accountMenu.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./accountMenu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AccountMenu/accountMenu.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./accountMenu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AccountMenu/accountMenu.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./accountMenu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/AccountMenu/accountMenu.scss");

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

/***/ "./src/styles/icons/account.svg":
/*!**************************************!*\
  !*** ./src/styles/icons/account.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icons-account",
  "use": "icons-account-usage",
  "viewBox": "0 0 24 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 32\" id=\"icons-account\">\r\n<title>user</title>\r\n<path d=\"M12 16c-6.625 0-12 5.375-12 12 0 2.211 1.789 4 4 4h16c2.211 0 4-1.789 4-4 0-6.625-5.375-12-12-12zM6 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/styles/icons/cart.svg":
/*!***********************************!*\
  !*** ./src/styles/icons/cart.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icons-cart",
  "use": "icons-cart-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icons-cart\">\n<title>cart</title>\n<path d=\"M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z\" />\n<path d=\"M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z\" />\n<path d=\"M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/styles/icons/signin.svg":
/*!*************************************!*\
  !*** ./src/styles/icons/signin.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icons-signin",
  "use": "icons-signin-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icons-signin\">\r\n<title>enter</title>\r\n<path d=\"M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/styles/icons/signout.svg":
/*!**************************************!*\
  !*** ./src/styles/icons/signout.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icons-signout",
  "use": "icons-signout-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icons-signout\">\r\n<title>exit</title>\r\n<path d=\"M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./src/styles/icons/signup.svg":
/*!*************************************!*\
  !*** ./src/styles/icons/signup.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "./node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "./node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "icons-signup",
  "use": "icons-signup-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"icons-signup\">\r\n<title>clipboard</title>\r\n<path d=\"M29 4h-9c0-2.209-1.791-4-4-4s-4 1.791-4 4h-9c-0.552 0-1 0.448-1 1v26c0 0.552 0.448 1 1 1h26c0.552 0 1-0.448 1-1v-26c0-0.552-0.448-1-1-1zM16 2c1.105 0 2 0.895 2 2s-0.895 2-2 2c-1.105 0-2-0.895-2-2s0.895-2 2-2zM28 30h-24v-24h4v3c0 0.552 0.448 1 1 1h14c0.552 0 1-0.448 1-1v-3h4v24z\" />\r\n<path d=\"M14 26.828l-6.414-7.414 1.828-1.828 4.586 3.586 8.586-7.586 1.829 1.828z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ })

})
//# sourceMappingURL=main.af583d1b288af71364b6.hot-update.js.map