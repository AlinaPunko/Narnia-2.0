webpackHotUpdate("main",{

/***/ "./src/components/ordersPage/OrdersPage/ordersPage.jsx":
/*!*************************************************************!*\
  !*** ./src/components/ordersPage/OrdersPage/ordersPage.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrdersPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var services_orderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/orderService */ "./src/services/orderService.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/icons/preloader.svg */ "./src/styles/icons/preloader.svg");
/* harmony import */ var _ordersPage_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordersPage.scss */ "./src/components/ordersPage/OrdersPage/ordersPage.scss");
/* harmony import */ var _ordersPage_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ordersPage_scss__WEBPACK_IMPORTED_MODULE_5__);
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








var OrdersPage = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(OrdersPage, _React$PureComponent);

  var _super = _createSuper(OrdersPage);

  function OrdersPage() {
    _classCallCheck(this, OrdersPage);

    return _super.apply(this, arguments);
  }

  _createClass(OrdersPage, [{
    key: "render",
    value: function render() {
      if (helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getId() === '' || helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getId() === null) {
        this.props.history.push('/login');
        return null;
      }

      if (helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_3__["default"].getRole() === 'admin') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "orders-page"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          className: "orders-page__title"
        }, "Orders waiting for approval"));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "orders-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "orders-page__title"
      }, "Your orders"));
    }
  }]);

  return OrdersPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(OrdersPage, "propTypes", {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    length: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    action: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      hash: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
      key: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }),
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired
});



/***/ })

})
//# sourceMappingURL=main.917cc2a158bf18bd0006.hot-update.js.map