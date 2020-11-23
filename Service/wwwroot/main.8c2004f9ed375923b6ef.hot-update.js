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
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var components_ordersPage_UserOrdersSection_userOrdersSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ordersPage/UserOrdersSection/userOrdersSection */ "./src/components/ordersPage/UserOrdersSection/userOrdersSection.jsx");
/* harmony import */ var components_ordersPage_UserOrdersSection_userOrdersSection__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_ordersPage_UserOrdersSection_userOrdersSection__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ordersPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordersPage.scss */ "./src/components/ordersPage/OrdersPage/ordersPage.scss");
/* harmony import */ var _ordersPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ordersPage_scss__WEBPACK_IMPORTED_MODULE_4__);
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
      if (helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getId() === '' || helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getId() === null) {
        this.props.history.push('/login');
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "orders-page"
      }, helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_2__["default"].getRole() === 'admin' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OrderWithStatusesSection, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ordersPage_UserOrdersSection_userOrdersSection__WEBPACK_IMPORTED_MODULE_3___default.a, null));
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



/***/ }),

/***/ "./src/components/ordersPage/UserOrdersSection/UserOrdersSection.jsx":
false,

/***/ "./src/components/ordersPage/UserOrdersSection/userOrdersSection.jsx":
/*!***************************************************************************!*\
  !*** ./src/components/ordersPage/UserOrdersSection/userOrdersSection.jsx ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\src\\components\\ordersPage\\UserOrdersSection\\userOrdersSection.jsx: Unexpected token (5:15)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mdefault\u001b[39m \u001b[36mclass\u001b[39m \u001b[33mUserOrdersSection\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mPureComponent\u001b[39m{\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m    render(){\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m        \u001b[36mreturn\u001b[39m()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 7 | \u001b[39m}\u001b[0m\n    at Object._raise (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:723:17)\n    at Object.raiseWithData (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:716:17)\n    at Object.raise (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:710:17)\n    at Object.unexpected (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:8610:16)\n    at Object.parseParenAndDistinguishExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10066:12)\n    at Object.parseExprAtom (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9814:21)\n    at Object.parseExprAtom (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:4543:20)\n    at Object.parseExprSubscripts (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeUnary (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9459:21)\n    at Object.parseExprOps (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9329:23)\n    at Object.parseMaybeConditional (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9302:23)\n    at Object.parseMaybeAssign (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9257:21)\n    at Object.parseExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9209:23)\n    at Object.parseReturnStatement (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11283:28)\n    at Object.parseStatementContent (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10964:21)\n    at Object.parseStatement (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10916:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11490:25)\n    at Object.parseBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11477:10)\n    at Object.parseBlock (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11461:10)\n    at Object.parseFunctionBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10477:24)\n    at Object.parseFunctionBodyAndFinish (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10446:10)\n    at Object.parseMethod (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10408:10)\n    at Object.pushClassMethod (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11896:30)\n    at Object.parseClassMemberWithIsStatic (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11813:12)\n    at Object.parseClassMember (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11755:10)\n    at D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11710:14\n    at Object.withTopicForbiddingContext (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10791:14)\n    at Object.parseClassBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11687:10)\n    at Object.parseClass (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11661:22)\n    at Object.parseExportDefaultExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:12087:19)\n    at Object.parseExport (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:12000:31)\n    at Object.parseStatementContent (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11020:27)\n    at Object.parseStatement (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10916:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11490:25)\n    at Object.parseBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11477:10)\n    at Object.parseTopLevel (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10847:10)");

/***/ })

})
//# sourceMappingURL=main.8c2004f9ed375923b6ef.hot-update.js.map