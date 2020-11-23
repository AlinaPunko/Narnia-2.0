webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/UserInfoSection/userInfoSection.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/UserInfoSection/userInfoSection.scss ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".user-info-section {\n  padding: 10px; }\n\n.user-info-section__field {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 0; }\n\n.user-info-section__field-title {\n  padding: 0 5px;\n  font-family: \"Lucida Sans\", sans-serif; }\n\n.user-info-section__field-input {\n  width: 50%;\n  padding: 5px;\n  border: 1px #106cc8 solid;\n  border-radius: 5px; }\n", ""]);



/***/ }),

/***/ "./src/components/orderPage/UserInfoSection/userInfoSection.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/orderPage/UserInfoSection/userInfoSection.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserInfoSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var services_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/userService */ "./src/services/userService.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/icons/preloader.svg */ "./src/styles/icons/preloader.svg");
/* harmony import */ var _userInfoSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userInfoSection.scss */ "./src/components/orderPage/UserInfoSection/userInfoSection.scss");
/* harmony import */ var _userInfoSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_userInfoSection_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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








var UserInfoSection = /*#__PURE__*/function (_React$Component) {
  _inherits(UserInfoSection, _React$Component);

  var _super = _createSuper(UserInfoSection);

  function UserInfoSection(props) {
    var _this;

    _classCallCheck(this, UserInfoSection);

    _this = _super.call(this, props);
    _this.state = {
      isLoading: true,
      name: '',
      email: '',
      address: '',
      phone: ''
    };
    return _this;
  }

  _createClass(UserInfoSection, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return services_userService__WEBPACK_IMPORTED_MODULE_1__["default"].getUser(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getId());

              case 2:
                user = _context.sent;
                this.setState({
                  isLoading: false,
                  name: user.name,
                  address: user.address,
                  phone: user.phone,
                  email: user.email
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-info-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-info-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "user-info-section__field-title"
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "name",
        type: "text",
        value: this.state.name,
        className: "user-info-section__field-input",
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-info-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "user-info-section__field-title"
      }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "email",
        type: "email",
        value: this.state.email,
        className: "user-info-section__field-input",
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-info-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "user-info-section__field-title"
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "address",
        type: "text",
        value: this.state.address,
        className: "user-info-section__field-input",
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-info-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "user-info-section__field-title"
      }, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "phone",
        type: "tel",
        value: this.state.phone,
        className: "user-info-section__field-input",
        disabled: true
      })), this.state.isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-info-section__preloader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
        iconClassName: "user-info-section__preloader-icon",
        icon: styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
      })));
    }
  }]);

  return UserInfoSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/orderPage/UserInfoSection/userInfoSection.scss":
/*!***********************************************************************!*\
  !*** ./src/components/orderPage/UserInfoSection/userInfoSection.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./userInfoSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/UserInfoSection/userInfoSection.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./userInfoSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/UserInfoSection/userInfoSection.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./userInfoSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/UserInfoSection/userInfoSection.scss");

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

/***/ })

})
//# sourceMappingURL=main.31aa77caf4b2f0f5ffe3.hot-update.js.map