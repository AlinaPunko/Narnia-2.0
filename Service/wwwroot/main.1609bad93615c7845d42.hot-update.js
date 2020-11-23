webpackHotUpdate("main",{

/***/ "./src/components/bookPage/BookInfoPage/bookInfoPage.jsx":
/*!***************************************************************!*\
  !*** ./src/components/bookPage/BookInfoPage/bookInfoPage.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookInfoPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_common_ShoppingCartCounter_shoppingCartCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/ShoppingCartCounter/shoppingCartCounter */ "./src/components/common/ShoppingCartCounter/shoppingCartCounter.jsx");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var components_common_FavoriteButton_favoriteButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/FavoriteButton/favoriteButton */ "./src/components/common/FavoriteButton/favoriteButton.jsx");
/* harmony import */ var components_bookPage_CommentsSection_commentsSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/bookPage/CommentsSection/commentsSection */ "./src/components/bookPage/CommentsSection/commentsSection.jsx");
/* harmony import */ var components_bookPage_RatingPanel_ratingPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/bookPage/RatingPanel/ratingPanel */ "./src/components/bookPage/RatingPanel/ratingPanel.jsx");
/* harmony import */ var services_bookService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! services/bookService */ "./src/services/bookService.js");
/* harmony import */ var helpers_urlHelper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helpers/urlHelper */ "./src/helpers/urlHelper.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var constants_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! constants/routing */ "./src/constants/routing.js");
/* harmony import */ var styles_icons_edit_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styles/icons/edit.svg */ "./src/styles/icons/edit.svg");
/* harmony import */ var _bookInfoPage_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bookInfoPage.scss */ "./src/components/bookPage/BookInfoPage/bookInfoPage.scss");
/* harmony import */ var _bookInfoPage_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_bookInfoPage_scss__WEBPACK_IMPORTED_MODULE_13__);
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
















var BookInfoPage = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BookInfoPage, _React$PureComponent);

  var _super = _createSuper(BookInfoPage);

  function BookInfoPage(props) {
    var _this;

    _classCallCheck(this, BookInfoPage);

    _this = _super.call(this, props);
    _this.state = {
      book: null
    };

    _this.getBook(_this.props.match.params.id);

    return _this;
  }

  _createClass(BookInfoPage, [{
    key: "getBook",
    value: function () {
      var _getBook = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return services_bookService__WEBPACK_IMPORTED_MODULE_8__["default"].getById(id);

              case 2:
                result = _context.sent;
                this.setState({
                  book: result
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getBook(_x) {
        return _getBook.apply(this, arguments);
      }

      return getBook;
    }()
  }, {
    key: "render",
    value: function render() {
      var book = this.state.book;

      if (!book) {
        return null;
      }

      var authors = [];

      if (book.authors) {
        book.authors.forEach(function (author) {
          authors.push(author);
        });
      }

      var genres = [];

      if (book.genres) {
        book.genres.forEach(function (genre) {
          genres.push(genre);
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "book-details-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "book-details-page__content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "book-details-page__title"
      }, book.title, helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getRole() === 'admin' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: helpers_urlHelper__WEBPACK_IMPORTED_MODULE_9__["default"].getUrlWithParameter(constants_routing__WEBPACK_IMPORTED_MODULE_11__["default"].addBookPage.url, /:id/, this.props.match.params.id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "book-details-page__button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_4__["default"], {
        icon: styles_icons_edit_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
        iconClassName: "book-details-page__icon"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "book-details-page__authors"
      }, authors.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "book-details-page__genres"
      }, genres.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "book-details-page__pages"
      }, "Pages: ", book.pagesCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "book-details-page__publishing-year"
      }, "Publishing year: ", book.publishingYear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "book-details-page__price"
      }, "Price: ", book.price), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getId() && helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getId()(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_FavoriteButton_favoriteButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        book: book,
        className: "book-details-page__button"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_ShoppingCartCounter_shoppingCartCounter__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bookId: book.id,
        className: "book-details-page__icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "book-details-page__description"
      }, book.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_bookPage_RatingPanel_ratingPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {
        rating: book.rating,
        bookId: book.id
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "Item_image",
        className: "book-details-page__image",
        src: book.image
      })), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_10__["default"].getId() && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_bookPage_CommentsSection_commentsSection__WEBPACK_IMPORTED_MODULE_6__["default"], {
        bookId: book.id,
        comments: book.comments
      }));
    }
  }]);

  return BookInfoPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(BookInfoPage, "propTypes", {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    path: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    isExact: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    params: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
    }).isRequired
  }).isRequired
});



/***/ })

})
//# sourceMappingURL=main.1609bad93615c7845d42.hot-update.js.map