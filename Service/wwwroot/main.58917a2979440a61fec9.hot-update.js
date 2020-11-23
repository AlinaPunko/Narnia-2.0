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

/* eslint-disable max-classes-per-file */







var ApproveOrder = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(ApproveOrder, _React$PureComponent);

  var _super = _createSuper(ApproveOrder);

  function ApproveOrder() {
    var _this;

    _classCallCheck(this, ApproveOrder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "approveOrder", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(orderId) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].UpdateStatus({
                  orderId: orderId,
                  Status: 'Approved'
                });

              case 2:
                _this.forceUpdate();

              case 3:
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

    return _this;
  }

  _createClass(ApproveOrder, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "approve-button",
        type: "button",
        onClick: this.approveOrder
      }, "Approve");
    }
  }]);

  return ApproveOrder;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var CancelOrder = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(CancelOrder, _React$PureComponent2);

  var _super2 = _createSuper(CancelOrder);

  function CancelOrder() {
    var _this2;

    _classCallCheck(this, CancelOrder);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "cancelOrder", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(orderId) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].UpdateStatus({
                  orderId: orderId,
                  Status: 'Cancelled'
                });

              case 2:
                _this2.forceUpdate();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this2;
  }

  _createClass(CancelOrder, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "cancel-button",
        type: "button",
        onClick: this.props.cancelOrder
      }, "Cancel");
    }
  }]);

  return CancelOrder;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var OrdersWithStatusesSection = /*#__PURE__*/function (_React$PureComponent3) {
  _inherits(OrdersWithStatusesSection, _React$PureComponent3);

  var _super3 = _createSuper(OrdersWithStatusesSection);

  function OrdersWithStatusesSection() {
    var _this3;

    _classCallCheck(this, OrdersWithStatusesSection);

    _this3 = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this3), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var pendingOrders, allOrders;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].getPending();

            case 2:
              pendingOrders = _context3.sent;
              _context3.next = 5;
              return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].getAll();

            case 5:
              allOrders = _context3.sent;

              _this3.setState({
                pendingOrders: pendingOrders,
                allOrders: allOrders,
                isLoading: false
              });

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));

    _defineProperty(_assertThisInitialized(_this3), "renderAllOrders", function () {
      return _this3.state.allOrders.map(function (order) {
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
        }, order.status));
      });
    });

    _defineProperty(_assertThisInitialized(_this3), "renderPendingOrders", function () {
      return _this3.state.pendingOrders.map(function (order) {
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
        }, order.status, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CancelOrder, {
          orderId: order.id
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApproveOrder, {
          orderId: order.id
        }))));
      });
    });

    _this3.state = {
      pendingOrders: [],
      allOrders: [],
      isLoading: true
    };
    return _this3;
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
      }, "Status ")), this.renderPendingOrders()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "orders-with-statuses-section__title"
      }, "All orders"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
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
      }, "Status ")), this.renderAllOrders()));
    }
  }]);

  return OrdersWithStatusesSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ })

})
//# sourceMappingURL=main.58917a2979440a61fec9.hot-update.js.map