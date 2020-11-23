webpackHotUpdate("main",{

/***/ "./src/components/SignUpPage/signUpPage.jsx":
/*!**************************************************!*\
  !*** ./src/components/SignUpPage/signUpPage.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-react-validator */ "./node_modules/simple-react-validator/dist/simple-react-validator.min.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_common_Input_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Input/input */ "./src/components/common/Input/input.jsx");
/* harmony import */ var components_common_PhotoSelector_photoSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/PhotoSelector/photoSelector */ "./src/components/common/PhotoSelector/photoSelector.jsx");
/* harmony import */ var validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! validationConfigs/signUpValidationConfig */ "./src/validationConfigs/signUpValidationConfig.js");
/* harmony import */ var helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers/serviceWrapper */ "./src/helpers/serviceWrapper.js");
/* harmony import */ var services_signUpService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! services/signUpService */ "./src/services/signUpService.js");
/* harmony import */ var helpers_redirectHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helpers/redirectHelper */ "./src/helpers/redirectHelper.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var _signUpPage_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signUpPage.scss */ "./src/components/SignUpPage/signUpPage.scss");
/* harmony import */ var _signUpPage_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_signUpPage_scss__WEBPACK_IMPORTED_MODULE_11__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var SignUpPage = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SignUpPage, _React$PureComponent);

  var _super = _createSuper(SignUpPage);

  function SignUpPage(props, context) {
    var _this;

    _classCallCheck(this, SignUpPage);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "changeName", function (event) {
      _this.setState({
        name: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeBirthdate", function (event) {
      _this.setState({
        birthdate: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changePassword", function (event) {
      _this.setState({
        password: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeConfirmedPassword", function (event) {
      _this.setState({
        confirmedPassword: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changePhone", function (event) {
      _this.setState({
        phone: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeAddress", function (event) {
      _this.setState({
        address: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeEmail", function (event) {
      _this.setState({
        email: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changePhoto", function (photo) {
      _this.setState({
        photo: photo
      });
    });

    _defineProperty(_assertThisInitialized(_this), "signUp", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var userData, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (!_this.validator.allValid()) {
                  _context.next = 18;
                  break;
                }

                userData = _objectSpread({}, _this.state);

                if (!(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getRole() === 'admin')) {
                  _context.next = 10;
                  break;
                }

                userData.role = 'admin';
                _context.next = 7;
                return helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_7__["default"].callService(services_signUpService__WEBPACK_IMPORTED_MODULE_8__["default"].signUpAdmin, userData, _this.errorFieldRef);

              case 7:
                result = _context.sent;
                _context.next = 14;
                break;

              case 10:
                userData.role = 'user';
                _context.next = 13;
                return helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_7__["default"].callService(services_signUpService__WEBPACK_IMPORTED_MODULE_8__["default"].signUp, userData, _this.errorFieldRef);

              case 13:
                result = _context.sent;

              case 14:
                debugger;

                if (result) {
                  alert('Success');
                  helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].addId(result.id);
                  helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].addRole(result.role);
                  helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].addToken(result.token);
                  helpers_redirectHelper__WEBPACK_IMPORTED_MODULE_9__["default"].redirectToHomePage(_this.props.history);
                }

                _context.next = 20;
                break;

              case 18:
                _this.validator.showMessages();

                _this.forceUpdate();

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "renderValidationResult", function () {
      var messages = [_this.validator.message(validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].email.fieldName, _this.state.email, validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].email.rule), _this.validator.message(validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].password.fieldName, _this.state.password, validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].password.rule), _this.validator.message(validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].name.fieldName, _this.state.name, validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].name.rule), _this.validator.message(validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].phone.fieldName, _this.state.phone, validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].phone.rule), _this.validator.message(validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].address.fieldName, _this.state.address, validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].address.rule), _this.validator.message(validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].confirmedPassword.fieldName, _this.state.confirmedPassword, validationConfigs_signUpValidationConfig__WEBPACK_IMPORTED_MODULE_6__["default"].confirmedPassword.rule(_this.state.password))];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sign-up-page__validation-result",
        ref: _this.errorFieldRef
      }, messages);
    });

    _this.validator = new simple_react_validator__WEBPACK_IMPORTED_MODULE_2___default.a();
    _this.errorFieldRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      photo: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirmedPassword: '',
      birthdate: '',
      role: 'user'
    };
    return _this;
  }

  _createClass(SignUpPage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "sign-up-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "sign-up-page__title"
      }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "sign-up-page__form",
        onSubmit: this.signUp
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "name",
        type: "text",
        label: "Name:",
        onChange: this.changeName,
        value: this.state.name
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "email",
        type: "email",
        label: "E-mail:",
        onChange: this.changeEmail,
        value: this.state.email
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "address",
        type: "text",
        label: "Address:",
        onChange: this.changeAddress,
        value: this.state.address
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "password",
        type: "password",
        label: "Password:",
        onChange: this.changePassword,
        value: this.state.password
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "confirmedPassword",
        type: "password",
        label: "Confirm password:",
        onChange: this.changeConfirmedPassword,
        value: this.state.confirmedPassword
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sign-up-page__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "sign-up-page__field-title"
      }, "Phone: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "phone",
        type: "tel",
        pattern: "375[0-9]{2}[0-9]{7}",
        value: this.state.phone,
        className: "sign-up-page__field-input",
        onChange: this.changePhone
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
        name: "birthdate",
        type: "date",
        label: "Select birthdate:",
        onChange: this.changeBirthdate,
        value: this.state.birthdate
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_PhotoSelector_photoSelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onChange: this.changePhoto
      }), this.renderValidationResult(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "sign-up-page__form-button"
      }, "Sign Up")));
    }
  }]);

  return SignUpPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(SignUpPage, "propTypes", {
  history: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    length: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
    action: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
    location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      pathname: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
      search: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
      hash: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
      key: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
    }),
    push: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
  }).isRequired
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SignUpPage));

/***/ })

})
//# sourceMappingURL=main.57a8f2fb7899eb043f7a.hot-update.js.map