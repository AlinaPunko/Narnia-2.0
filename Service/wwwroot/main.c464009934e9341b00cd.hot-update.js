webpackHotUpdate("main",{

/***/ "./src/components/ProfilePage/ProfileSection/profileSection.jsx":
/*!**********************************************************************!*\
  !*** ./src/components/ProfilePage/ProfileSection/profileSection.jsx ***!
  \**********************************************************************/
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
/* harmony import */ var validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validationConfigs/profileValidationConfig */ "./src/validationConfigs/profileValidationConfig.js");
/* harmony import */ var services_userService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/userService */ "./src/services/userService.js");
/* harmony import */ var helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/serviceWrapper */ "./src/helpers/serviceWrapper.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var _profileSection_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profileSection.scss */ "./src/components/ProfilePage/ProfileSection/profileSection.scss");
/* harmony import */ var _profileSection_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_profileSection_scss__WEBPACK_IMPORTED_MODULE_8__);
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











var ProfileSection = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ProfileSection, _React$PureComponent);

  var _super = _createSuper(ProfileSection);

  function ProfileSection(props) {
    var _this;

    _classCallCheck(this, ProfileSection);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "deletePhoto", function () {
      _this.setState({
        photo: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onNameChange", function (e) {
      _this.setState({
        name: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onEmailChange", function (e) {
      _this.setState({
        email: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBirthdateChange", function (e) {
      _this.setState({
        birthdate: e.target.value.slice(0, 10)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAddressChange", function (e) {
      _this.setState({
        address: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPhoneChange", function (e) {
      _this.setState({
        phone: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addPhoto", function () {
      var input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/x-png,image/gif,image/jpeg';

      input.onchange = function () {
        var filesSelected = input.files;

        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
          var fileReader = new FileReader();

          fileReader.onload = function (fileLoadedEvent) {
            _this.setState({
              photo: fileLoadedEvent.target.result
            });
          };

          fileReader.readAsDataURL(fileToLoad);
        }
      };

      input.click();
    });

    _defineProperty(_assertThisInitialized(_this), "save", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var userData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();

                if (!_this.validator.allValid()) {
                  _context.next = 9;
                  break;
                }

                userData = _objectSpread({}, _this.state);
                _context.next = 5;
                return helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_6__["default"].callService(services_userService__WEBPACK_IMPORTED_MODULE_5__["default"].updateUser, userData, _this.errorFieldRef);

              case 5:
                alert('The user was updated');

                _this.props.history.push('/');

                _context.next = 11;
                break;

              case 9:
                _this.validator.showMessages();

                _this.forceUpdate();

              case 11:
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

    _defineProperty(_assertThisInitialized(_this), "close", function (e) {
      e.preventDefault();

      _this.props.history.push('/');
    });

    _defineProperty(_assertThisInitialized(_this), "getValidationResult", function () {
      var messages = [_this.validator.message(validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].email.fieldName, _this.state.email, validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].email.rule), _this.validator.message(validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].name.fieldName, _this.state.name, validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].name.rule), _this.validator.message(validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].phone.fieldName, _this.state.phone, validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].phone.rule), _this.validator.message(validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].address.fieldName, _this.state.address, validationConfigs_profileValidationConfig__WEBPACK_IMPORTED_MODULE_4__["default"].address.rule)];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__validation-result",
        ref: _this.errorFieldRef
      }, messages);
    });

    _this.validator = new simple_react_validator__WEBPACK_IMPORTED_MODULE_2___default.a();
    _this.errorFieldRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      photo: '',
      name: '',
      email: '',
      birthdate: '',
      address: '',
      phone: ''
    };
    return _this;
  }

  _createClass(ProfileSection, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var user;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return services_userService__WEBPACK_IMPORTED_MODULE_5__["default"].getUser(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getId());

              case 2:
                user = _context2.sent;
                this.setState({
                  id: user.id,
                  name: user.name,
                  address: user.address,
                  phone: user.phone,
                  email: user.email,
                  photo: user.photo,
                  birthdate: user.birthdate ? user.birthdate.slice(0, 10) : ''
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      if (helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getId() === '' || helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_7__["default"].getId() === null) {
        this.props.history.push('/login');
        return null;
      }

      if (this.state.isLoading) {
        {
          this.state.isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "books-list__preloader"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
            iconClassName: "books-list__preloader-icon",
            icon: preloader
          }));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "profile-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "profile-section__title"
      }, "Your profile"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "profile-section__form"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__image-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "profile-section__user-image",
        alt: "",
        src: this.state.photo
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "profile-section__add-image-button",
        type: "button",
        onClick: this.addPhoto
      }, "Add image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "profile-section__delete-image-button",
        type: "button",
        onClick: this.deletePhoto
      }, "Delete image"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__user-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "profile-section__field-title"
      }, "Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "name",
        type: "text",
        value: this.state.name,
        className: "profile-section__field-input",
        onChange: this.onNameChange,
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "profile-section__field-title"
      }, "E-mail"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "email",
        type: "email",
        value: this.state.email,
        className: "profile-section__field-input",
        disabled: true
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "profile-section__field-title"
      }, "Birthdate"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "birthdate",
        type: "date",
        value: this.state.birthdate,
        className: "profile-section__field-input",
        onChange: this.onBirthdateChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "profile-section__field-title"
      }, "Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "address",
        type: "text",
        value: this.state.address,
        className: "profile-section__field-input",
        onChange: this.onAddressChange
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "profile-section__field"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "profile-section__field-title"
      }, "Phone"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        name: "phone",
        type: "tel",
        pattern: "375[0-9]{2}[0-9]{7}",
        value: this.state.phone,
        className: "profile-section__field-input",
        onChange: this.onPhoneChange
      })), this.getValidationResult(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        className: "profile-section__save-button",
        onClick: this.save,
        value: "Save"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "reset",
        className: "profile-section__close-button",
        onClick: this.close,
        value: "Close"
      }))));
    }
  }]);

  return ProfileSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(ProfileSection, "propTypes", {
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ProfileSection));

/***/ })

})
//# sourceMappingURL=main.c464009934e9341b00cd.hot-update.js.map