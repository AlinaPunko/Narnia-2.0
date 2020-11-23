webpackHotUpdate("main",{

/***/ "./src/components/favoritesPage/FavoriteListItem/favoriteListItem.jsx":
/*!****************************************************************************!*\
  !*** ./src/components/favoritesPage/FavoriteListItem/favoriteListItem.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FavoriteListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_ShoppingCartCounter_shoppingCartCounter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/ShoppingCartCounter/shoppingCartCounter */ "./src/components/common/ShoppingCartCounter/shoppingCartCounter.jsx");
/* harmony import */ var components_common_OpenDetailsPageButton_openDetailsPageButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/OpenDetailsPageButton/openDetailsPageButton */ "./src/components/common/OpenDetailsPageButton/openDetailsPageButton.jsx");
/* harmony import */ var _favoriteListItem_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favoriteListItem.scss */ "./src/components/favoritesPage/FavoriteListItem/favoriteListItem.scss");
/* harmony import */ var _favoriteListItem_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_favoriteListItem_scss__WEBPACK_IMPORTED_MODULE_4__);
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







var FavoriteListItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(FavoriteListItem, _React$PureComponent);

  var _super = _createSuper(FavoriteListItem);

  function FavoriteListItem() {
    var _this;

    _classCallCheck(this, FavoriteListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "deleteItem", function () {
      var deleteItem = _this.props.deleteItem;
      deleteItem(_this.props.book.id);
    });

    return _this;
  }

  _createClass(FavoriteListItem, [{
    key: "render",
    value: function render() {
      var _this$props$book = this.props.book,
          id = _this$props$book.id,
          title = _this$props$book.title,
          image = _this$props$book.image,
          pagesCount = _this$props$book.pagesCount,
          publishingYear = _this$props$book.publishingYear,
          price = _this$props$book.price,
          authors = _this$props$book.authors,
          genres = _this$props$book.genres;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorite-list-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorite-list-item__title"
      }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorite-list-item__authors"
      }, authors.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorite-list-item__genres"
      }, genres.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorite-list-item__pages"
      }, "Pages: ", pagesCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorite-list-item__publishing-year"
      }, "Publishing year: ", publishingYear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "favorite-list-item__price"
      }, "Price: ", price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_ShoppingCartCounter_shoppingCartCounter__WEBPACK_IMPORTED_MODULE_2__["default"], {
        bookId: id,
        className: "book-details-page__icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_OpenDetailsPageButton_openDetailsPageButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bookId: id,
        className: "favorite-list-item__open-details-page-button"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "favorite-list-item__remove-favorite-button",
        onClick: this.deleteItem
      }, "Remove favorite")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "Item_image",
        className: "favorite-list-item__image",
        src: image
      }));
    }
  }]);

  return FavoriteListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(FavoriteListItem, "propTypes", {
  book: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    authors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    genres: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    pagesCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    publishingYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});



/***/ })

})
//# sourceMappingURL=main.ee38f7c044e0fce91ae5.hot-update.js.map