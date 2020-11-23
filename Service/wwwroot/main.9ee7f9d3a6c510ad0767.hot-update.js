webpackHotUpdate("main",{

/***/ "./src/components/booksList/BooksListItem/booksListItem.jsx":
/*!******************************************************************!*\
  !*** ./src/components/booksList/BooksListItem/booksListItem.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BooksListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var store_context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/context/userContext */ "./src/store/context/userContext.js");
/* harmony import */ var components_common_OpenDetailsPageButton_openDetailsPageButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/OpenDetailsPageButton/openDetailsPageButton */ "./src/components/common/OpenDetailsPageButton/openDetailsPageButton.jsx");
/* harmony import */ var components_common_ShoppingCartCounter_shoppingCartCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/ShoppingCartCounter/shoppingCartCounter */ "./src/components/common/ShoppingCartCounter/shoppingCartCounter.jsx");
/* harmony import */ var components_common_FavoriteButton_favoriteButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/FavoriteButton/favoriteButton */ "./src/components/common/FavoriteButton/favoriteButton.jsx");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var services_favoritesService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! services/favoritesService */ "./src/services/favoritesService.js");
/* harmony import */ var helpers_favoriteItemHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helpers/favoriteItemHelper */ "./src/helpers/favoriteItemHelper.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var helpers_urlHelper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! helpers/urlHelper */ "./src/helpers/urlHelper.js");
/* harmony import */ var constants_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! constants/routing */ "./src/constants/routing.js");
/* harmony import */ var styles_icons_edit_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styles/icons/edit.svg */ "./src/styles/icons/edit.svg");
/* harmony import */ var _booksListItem_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./booksListItem.scss */ "./src/components/booksList/BooksListItem/booksListItem.scss");
/* harmony import */ var _booksListItem_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_booksListItem_scss__WEBPACK_IMPORTED_MODULE_14__);
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

















var BooksListItem = /*#__PURE__*/function (_React$Component) {
  _inherits(BooksListItem, _React$Component);

  var _super = _createSuper(BooksListItem);

  function BooksListItem(props, context) {
    var _this;

    _classCallCheck(this, BooksListItem);

    _this = _super.call(this, props, context);

    _defineProperty(_assertThisInitialized(_this), "toggleFavoriteState", function () {
      _this.state.isFavorite ? services_favoritesService__WEBPACK_IMPORTED_MODULE_8__["default"].deleteItem(_this.props.book, helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getId()) : services_favoritesService__WEBPACK_IMPORTED_MODULE_8__["default"].add(_this.props.book, helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getId());

      _this.setState({
        isFavorite: !_this.state.isFavorite
      });
    });

    _this.state = {
      isFavorite: helpers_favoriteItemHelper__WEBPACK_IMPORTED_MODULE_9__["default"].isFavorite(_this.props.book, _this.context.favoriteBooks)
    };
    return _this;
  }

  _createClass(BooksListItem, [{
    key: "render",
    value: function render() {
      var book = this.props.book;
      var authors = [];
      book.authors.forEach(function (author) {
        authors.push(author);
      });
      var genres = [];
      book.genres.forEach(function (genre) {
        genres.push(genre);
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "book",
        src: book.image,
        className: "books-list-item__image"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list-item__information"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list-item__title"
      }, book.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list-item__authors"
      }, book.authors.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list-item__genres"
      }, genres.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list-item__price"
      }, book.price, " \u0440."), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getRole() === 'admin' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: helpers_urlHelper__WEBPACK_IMPORTED_MODULE_11__["default"].getUrlWithParameter(constants_routing__WEBPACK_IMPORTED_MODULE_12__["default"].addBookPage.url, /:id/, book.id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "books-list-item__button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: styles_icons_edit_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
        iconClassName: "books-list-item__button-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_OpenDetailsPageButton_openDetailsPageButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
        bookId: book.id,
        className: "books-list-item__open-details-page-button"
      }), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getRole() === 'user' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_FavoriteButton_favoriteButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        book: book,
        className: "books-list-item__favorite-button"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_ShoppingCartCounter_shoppingCartCounter__WEBPACK_IMPORTED_MODULE_5__["default"], {
        bookId: book.id
      }))));
    }
  }]);

  return BooksListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BooksListItem, "propTypes", {
  book: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    authors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    genres: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
    price: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    pagesCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    publishingYear: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }).isRequired
});

_defineProperty(BooksListItem, "contextType", store_context_userContext__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);



/***/ })

})
//# sourceMappingURL=main.9ee7f9d3a6c510ad0767.hot-update.js.map