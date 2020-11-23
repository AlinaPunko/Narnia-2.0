webpackHotUpdate("main",{

/***/ "./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.jsx":
/*!*******************************************************************************************!*\
  !*** ./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrdersWithStatusesSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var helpers_dateHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! helpers/dateHelper */ "./src/helpers/dateHelper.js");
/* harmony import */ var services_orderService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! services/orderService */ "./src/services/orderService.js");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/icons/preloader.svg */ "./src/styles/icons/preloader.svg");
/* harmony import */ var _ordersWithStatusesSection_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordersWithStatusesSection.scss */ "./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss");
/* harmony import */ var _ordersWithStatusesSection_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ordersWithStatusesSection_scss__WEBPACK_IMPORTED_MODULE_5__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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








var ApproveOrder = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ApproveOrder, _React$PureComponent);

  var _super = _createSuper(ApproveOrder);

  function ApproveOrder() {
    _classCallCheck(this, ApproveOrder);

    return _super.apply(this, arguments);
  }

  _createClass(ApproveOrder, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "approve-button"
      }, "Approve");
    }
  }]);

  return ApproveOrder;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var CancelOrder = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(CancelOrder, _React$PureComponent2);

  var _super2 = _createSuper(CancelOrder);

  function CancelOrder() {
    var _this;

    _classCallCheck(this, CancelOrder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "cancelOrder", function () {});

    return _this;
  }

  _createClass(CancelOrder, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "cancel-button",
        onClick: this.cancelOrder
      }, "Cancel");
    }
  }]);

  return CancelOrder;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var OrdersWithStatusesSection = /*#__PURE__*/function (_React$PureComponent3) {
  _inherits(OrdersWithStatusesSection, _React$PureComponent3);

  var _super3 = _createSuper(OrdersWithStatusesSection);

  function OrdersWithStatusesSection() {
    var _this2;

    _classCallCheck(this, OrdersWithStatusesSection);

    _this2 = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this2), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].getPending();

            case 2:
              result = _context.sent;

              _this2.setState({
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

    _defineProperty(_assertThisInitialized(_this2), "renderOrders", function () {
      return _this2.state.orders.map(function (order) {
        var booksParagraphs = [];
        order.books.forEach(function (element) {
          booksParagraphs.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, element.authors.join(','), " \"", element.title, "\" - ", element.amount, " items"));
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          className: "orders-with-statuses-section__orders-line"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "orders-with-statuses-section__line-td"
        }, order.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "orders-with-statuses-section__line-td"
        }, booksParagraphs), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "orders-with-statuses-section__line-td"
        }, helpers_dateHelper__WEBPACK_IMPORTED_MODULE_1__["default"].getDate(order.date)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "orders-with-statuses-section__line-td"
        }, order.sum), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "orders-with-statuses-section__line-td"
        }, order.status, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CancelOrder, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApproveOrder, null))));
      });
    });

    _this2.state = {
      orders: [],
      isLoading: true
    };
    return _this2;
  }

  _createClass(OrdersWithStatusesSection, [{
    key: "render",
    value: function render() {
      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "orders-with-statuses-section__preloader"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          iconClassName: "orders-with-statuses-section__preloader-icon",
          icon: styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "orders-with-statuses-section"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "orders-with-statuses-section__title"
      }, "Pending orders"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "orders-with-statuses-section__orders-table"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        className: "orders-with-statuses-section__orders-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "orders-with-statuses-section__header-td"
      }, "Id"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "orders-with-statuses-section__header-td"
      }, "Books"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "orders-with-statuses-section__header-td"
      }, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "orders-with-statuses-section__header-td"
      }, "Total price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "orders-with-statuses-section__header-td"
      }, "Status ")), this.renderOrders()));
    }
  }]);

  return OrdersWithStatusesSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=main.beafb4886947a9dede17.hot-update.js.map