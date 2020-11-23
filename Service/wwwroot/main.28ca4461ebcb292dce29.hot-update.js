webpackHotUpdate("main",{

/***/ "./src/components/booksList/BooksList/booksList.jsx":
/*!**********************************************************!*\
  !*** ./src/components/booksList/BooksList/booksList.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store/context/userContext */ "./src/store/context/userContext.js");
/* harmony import */ var services_favoritesService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/favoritesService */ "./src/services/favoritesService.js");
/* harmony import */ var services_bookService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/bookService */ "./src/services/bookService.js");
/* harmony import */ var components_booksList_BooksListItem_booksListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/booksList/BooksListItem/booksListItem */ "./src/components/booksList/BooksListItem/booksListItem.jsx");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/icons/preloader.svg */ "./src/styles/icons/preloader.svg");
/* harmony import */ var _booksList_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./booksList.scss */ "./src/components/booksList/BooksList/booksList.scss");
/* harmony import */ var _booksList_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_booksList_scss__WEBPACK_IMPORTED_MODULE_10__);
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













var BooksList = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(BooksList, _React$PureComponent);

  var _super = _createSuper(BooksList);

  function BooksList(props, context) {
    var _this;

    _classCallCheck(this, BooksList);

    _this = _super.call(this, props, context);
    _this.bookPerPage = 12;
    _this.state = {
      page: 1,
      isLoading: true,
      renderedBooks: _this.bookPerPage
    };
    _this.handleScroll = _this.handleScroll.bind(_assertThisInitialized(_this));
    _this.loadFavoriteBooks = _this.loadFavoriteBooks.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(BooksList, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.loadFavoriteBooks();

              case 2:
                this.loadBooks();
                window.addEventListener('scroll', this.handleScroll);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "loadFavoriteBooks",
    value: function () {
      var _loadFavoriteBooks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var favoriteBooks;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_8__["default"].getId() || helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_8__["default"])) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.next = 4;
                return services_favoritesService__WEBPACK_IMPORTED_MODULE_4__["default"].getItems(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_8__["default"].getId());

              case 4:
                favoriteBooks = _context2.sent;
                this.context.setFavoriteBooks(favoriteBooks);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function loadFavoriteBooks() {
        return _loadFavoriteBooks.apply(this, arguments);
      }

      return loadFavoriteBooks;
    }()
  }, {
    key: "loadBooks",
    value: function () {
      var _loadBooks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return services_bookService__WEBPACK_IMPORTED_MODULE_5__["default"].getAll();

              case 2:
                result = _context3.sent;
                this.props.addBooks(result);
                this.setState({
                  isLoading: false
                });

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadBooks() {
        return _loadBooks.apply(this, arguments);
      }

      return loadBooks;
    }()
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var lastBook = document.querySelector('.books-list > div:last-child');
      var lastBookOffset = lastBook.offsetTop + lastBook.clientHeight;
      var pageOffset = window.pageYOffset + window.innerHeight;

      if (pageOffset > lastBookOffset) {
        this.loadMore();
      }

      this.setState({
        isLoading: false
      });
    }
  }, {
    key: "loadMore",
    value: function loadMore() {
      var _this$state = this.state,
          page = _this$state.page,
          renderedBooks = _this$state.renderedBooks;
      this.setState({
        isLoading: true,
        page: page + 1,
        renderedBooks: renderedBooks + this.bookPerPage
      });
    }
  }, {
    key: "renderBooks",
    value: function renderBooks() {
      var displayedBooks = this.props.books.slice(0, this.state.renderedBooks);
      return displayedBooks.map(function (book) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_booksList_BooksListItem_booksListItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          book: book,
          key: book.id
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list"
      }, this.renderBooks()), this.state.isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-list__preloader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        iconClassName: "books-list__preloader-icon",
        icon: styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_9__["default"]
      })));
    }
  }]);

  return BooksList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(BooksList, "propTypes", {
  books: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  addBooks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});

_defineProperty(BooksList, "contextType", store_context_userContext__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])()(BooksList));

/***/ })

})
//# sourceMappingURL=main.28ca4461ebcb292dce29.hot-update.js.map