webpackHotUpdate("main",{

/***/ "./src/components/ordersPage/UserOrdersSection/userOrdersSection.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/ordersPage/UserOrdersSection/userOrdersSection.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserOrdersSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var services_orderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/orderService */ "./src/services/orderService.js");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/icons/preloader.svg */ "./src/styles/icons/preloader.svg");
/* harmony import */ var _userOrdersSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./userOrdersSection.scss */ "./src/components/ordersPage/UserOrdersSection/userOrdersSection.scss");
/* harmony import */ var _userOrdersSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_userOrdersSection_scss__WEBPACK_IMPORTED_MODULE_5__);
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var UserOrdersSection = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(UserOrdersSection, _React$PureComponent);

  var _super = _createSuper(UserOrdersSection);

  function UserOrdersSection() {
    var _this;

    _classCallCheck(this, UserOrdersSection);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].getByUserId(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getId());

            case 2:
              result = _context.sent;

              _this.setState({
                orders: result,
                isLoading: false
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "renderOrders", function () {
      console.log(_this.state.orders);

      _this.state.orders.map(function (order) {});
    });

    _this.state = {
      orders: [],
      isLoading: true
    };
    return _this;
  }

  _createClass(UserOrdersSection, [{
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "user-orders-section__preloader"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          iconClassName: "user-orders-section__preloader-icon",
          icon: styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "user-orders-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "user-orders-section__title"
      }, "My orders"), this.state.orders.length === 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "user-orders-section__title"
      }, "You haven't bougth any books yet"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "user-orders-section__orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "user-orders-section__orders"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "user-orders-section__orders"
      }, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Books"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Total price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, "Status")), this.renderOrders()));
    }
  }]);

  return UserOrdersSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=main.b2c73db416b04dd48152.hot-update.js.map