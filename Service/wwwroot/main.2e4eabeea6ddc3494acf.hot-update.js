webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".orders-with-statuses-section__title {\n  padding: 10px 0;\n  font-size: 30px;\n  font-family: \"Lucida Sans\", sans-serif;\n  text-align: center; }\n\n.orders-with-statuses-section__preloader-icon {\n  width: 100%;\n  height: 100%; }\n\n.orders-with-statuses-section__preloader {\n  height: 50px; }\n\n.orders-with-statuses-section__orders-table {\n  width: 100%;\n  font-family: \"Lucida Sans\", sans-serif;\n  text-align: center;\n  border: 1px;\n  border-color: #106cc8; }\n\n.orders-with-statuses-section__orders-header {\n  background-color: mistyrose; }\n\n.orders-with-statuses-section__header-td {\n  padding: 10px 0;\n  font-size: 25px; }\n\n.orders-with-statuses-section__line-td {\n  padding: 5px 0;\n  font-size: 20px;\n  white-space: pre-line; }\n\n.cancel-button {\n  font-size: 20px;\n  background-color: white;\n  border: 2px red solid;\n  border-radius: 5px; }\n\n.approve-button {\n  font-size: 20px;\n  background-color: white;\n  border: 2px forestgreen solid;\n  border-radius: 5px; }\n", ""]);



/***/ }),

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

/* eslint-disable max-classes-per-file */







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
        className: "approve-button",
        type: "button",
        onClick: this.props.approveOrder
      }, "Approve");
    }
  }]);

  return ApproveOrder;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

var CancelOrder = /*#__PURE__*/function (_React$PureComponent2) {
  _inherits(CancelOrder, _React$PureComponent2);

  var _super2 = _createSuper(CancelOrder);

  function CancelOrder() {
    _classCallCheck(this, CancelOrder);

    return _super2.apply(this, arguments);
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
    var _this;

    _classCallCheck(this, OrdersWithStatusesSection);

    _this = _super3.call(this);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var pendingOrders, allOrders;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].getPending();

            case 2:
              pendingOrders = _context.sent;
              _context.next = 5;
              return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].getAll();

            case 5:
              allOrders = _context.sent;

              _this.setState({
                pendingOrders: pendingOrders,
                allOrders: allOrders,
                isLoading: false
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "approveOrder", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(orderId) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].UpdateStatus({
                  orderId: orderId,
                  Status: 'Approved'
                });

              case 2:
                _this.forceUpdate();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "cancelOrder", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(orderId) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return services_orderService__WEBPACK_IMPORTED_MODULE_2__["default"].UpdateStatus({
                  orderId: orderId,
                  Status: 'Cancelled'
                });

              case 2:
                _this.forceUpdate();

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "renderAllOrders", function () {
      return _this.state.allOrders.map(function (order) {
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

    _defineProperty(_assertThisInitialized(_this), "renderPendingOrders", function () {
      return _this.state.pendingOrders.map(function (order) {
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
          approveOrder: _this.approve
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ApproveOrder, null))));
      });
    });

    _this.state = {
      pendingOrders: [],
      allOrders: [],
      isLoading: true
    };
    return _this;
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



/***/ }),

/***/ "./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss":
/*!********************************************************************************************!*\
  !*** ./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ordersWithStatusesSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ordersWithStatusesSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ordersWithStatusesSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ordersPage/OrdersWithStatusesSection/ordersWithStatusesSection.scss");

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
//# sourceMappingURL=main.2e4eabeea6ddc3494acf.hot-update.js.map