webpackHotUpdate("main",{

/***/ "./src/components/addBookPage/AddBookPage/addBookPage.jsx":
/*!****************************************************************!*\
  !*** ./src/components/addBookPage/AddBookPage/addBookPage.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddBookPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! simple-react-validator */ "./node_modules/simple-react-validator/dist/simple-react-validator.min.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_common_Input_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Input/input */ "./src/components/common/Input/input.jsx");
/* harmony import */ var services_bookService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/bookService */ "./src/services/bookService.js");
/* harmony import */ var services_authorService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/authorService */ "./src/services/authorService.js");
/* harmony import */ var helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/serviceWrapper */ "./src/helpers/serviceWrapper.js");
/* harmony import */ var helpers_redirectHelper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers/redirectHelper */ "./src/helpers/redirectHelper.js");
/* harmony import */ var components_addBookPage_AddAuthorBlock_addAuthorBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/addBookPage/AddAuthorBlock/addAuthorBlock */ "./src/components/addBookPage/AddAuthorBlock/addAuthorBlock.jsx");
/* harmony import */ var components_addBookPage_AddGenreBlock_addGenreBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/addBookPage/AddGenreBlock/addGenreBlock */ "./src/components/addBookPage/AddGenreBlock/addGenreBlock.jsx");
/* harmony import */ var components_common_PhotoSelector_photoSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/common/PhotoSelector/photoSelector */ "./src/components/common/PhotoSelector/photoSelector.jsx");
/* harmony import */ var validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! validationConfigs/bookValidationConfig */ "./src/validationConfigs/bookValidationConfig.js");
/* harmony import */ var _addBookPage_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./addBookPage.scss */ "./src/components/addBookPage/AddBookPage/addBookPage.scss");
/* harmony import */ var _addBookPage_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_addBookPage_scss__WEBPACK_IMPORTED_MODULE_12__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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















var AddBookPage = /*#__PURE__*/function (_React$Component) {
  _inherits(AddBookPage, _React$Component);

  var _super = _createSuper(AddBookPage);

  function AddBookPage() {
    var _this;

    _classCallCheck(this, AddBookPage);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var book;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getAllAuthors();

              _this.setState;

              if (!(_this.props.match.params.id !== '0')) {
                _context.next = 9;
                break;
              }

              _context.next = 5;
              return services_bookService__WEBPACK_IMPORTED_MODULE_4__["default"].getById(_this.props.match.params.id);

            case 5:
              book = _context.sent;

              if (book) {
                _this.setState({
                  id: book.id,
                  image: book.image,
                  title: book.title,
                  publishingYear: book.publishingYear,
                  pagesCount: book.pagesCount,
                  price: book.price,
                  description: book.description,
                  count: book.count,
                  genres: book.genres,
                  authors: book.authors,
                  setState: false
                });
              }

              _context.next = 10;
              break;

            case 9:
              _this.setState({
                isLoading: false
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "getAllAuthors", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_6__["default"].callService(services_authorService__WEBPACK_IMPORTED_MODULE_5__["default"].get, null, null);

            case 2:
              result = _context2.sent;

              if (result) {
                _this.setState({
                  allAuthors: result
                });
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "deleteImage", function () {
      _this.setState({
        image: ''
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeTitle", function (event) {
      _this.setState({
        title: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changePrice", function (event) {
      _this.setState({
        price: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changePagesCount", function (event) {
      _this.setState({
        pagesCount: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeDescription", function (event) {
      _this.setState({
        description: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changePublishingYear", function (event) {
      _this.setState({
        publishingYear: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeCount", function (event) {
      _this.setState({
        count: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeImage", function (image) {
      _this.setState({
        image: image
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addAuthor", function (author) {
      var authors = _this.state.authors;
      authors.push(author);

      _this.setState({
        authors: authors
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteAuthor", function (author) {
      var authors = _this.state.authors;
      authors.splice(authors.indexOf(author), 1);

      _this.setState({
        authors: authors
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deleteGenre", function (genre) {
      var genres = _this.state.genres;
      genres.splice(genres.indexOf(genre), 1);

      _this.setState({
        genres: genres
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addGenre", function (genre) {
      var genres = _this.state.genres;
      genres.push(genre);

      _this.setState({
        genres: genres
      });
    });

    _defineProperty(_assertThisInitialized(_this), "save", /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {
        var bookData, result;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                e.preventDefault();

                if (!_this.validator.allValid()) {
                  _context3.next = 15;
                  break;
                }

                bookData = _objectSpread({}, _this.state);

                if (!(_this.state.id === 0)) {
                  _context3.next = 9;
                  break;
                }

                _context3.next = 6;
                return helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_6__["default"].callService(services_bookService__WEBPACK_IMPORTED_MODULE_4__["default"].add, bookData, _this.errorFieldRef);

              case 6:
                result = _context3.sent;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return helpers_serviceWrapper__WEBPACK_IMPORTED_MODULE_6__["default"].callService(services_bookService__WEBPACK_IMPORTED_MODULE_4__["default"].update, bookData, _this.errorFieldRef);

              case 11:
                result = _context3.sent;

              case 12:
                helpers_redirectHelper__WEBPACK_IMPORTED_MODULE_7__["default"].redirectToHomePage(_this.props.history);
                _context3.next = 17;
                break;

              case 15:
                _this.validator.showMessages();

                _this.forceUpdate();

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "renderValidationResult", function () {
      var messages = [_this.validator.message(validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].title.fieldName, _this.state.title, validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].title.rule), _this.validator.message(validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].price.fieldName, _this.state.price, validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].price.rule), _this.validator.message(validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].image.fieldName, _this.state.image, validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].image.rule), _this.validator.message(validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].publishingYear.fieldName, _this.state.publishingYear, validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].publishingYear.rule), _this.validator.message(validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].description.fieldName, _this.state.description, validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].description.rule), _this.validator.message(validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].pagesCount.fieldName, _this.state.pagesCount, validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].pagesCount.rule), _this.validator.message(validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].count.fieldName, _this.state.count, validationConfigs_bookValidationConfig__WEBPACK_IMPORTED_MODULE_11__["default"].count.rule)];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "add-book-page__validation-result",
        ref: _this.errorFieldRef
      }, messages);
    });

    _this.validator = new simple_react_validator__WEBPACK_IMPORTED_MODULE_2___default.a();
    _this.errorFieldRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      id: 0,
      image: '',
      title: '',
      publishingYear: '',
      pagesCount: '',
      price: '',
      description: '',
      count: '',
      genres: [],
      authors: [],
      allAuthors: [],
      isLoading: true
    };
    return _this;
  }

  _createClass(AddBookPage, [{
    key: "render",
    value: function render() {
      if (localStorageHelper.getRole() !== 'admin') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          className: "add-book-page__title"
        }, "You don't have permission to do it");
      }

      if (this.state.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "add-book-page__preloader"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
          iconClassName: "add-book-page__preloader-icon",
          icon: preloader
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "add-book-page"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "add-book-page__title"
      }, "Add or update book"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "add-book-page__form",
        onSubmit: this.save
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "add-book-page__image-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "add-book-page__book-image",
        alt: "book",
        src: this.state.image
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_PhotoSelector_photoSelector__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: this.changeImage
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "add-book-page__form-button",
        type: "button",
        onClick: this.deleteImage
      }, "Delete photo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "description",
        type: "text",
        label: "Description:",
        onChange: this.changeDescription,
        value: this.state.description
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "title",
        type: "text",
        label: "Title:",
        onChange: this.changeTitle,
        value: this.state.title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "price",
        type: "text",
        label: "Price:",
        onChange: this.changePrice,
        value: this.state.price
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "pages",
        type: "text",
        label: "Pages:",
        onChange: this.changePagesCount,
        value: this.state.pagesCount
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "count",
        type: "text",
        label: "Count:",
        onChange: this.changeCount,
        value: this.state.count
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Input_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: "publishingYear",
        type: "text",
        label: "Publishing Year:",
        onChange: this.changePublishingYear,
        value: this.state.publishingYear
      }), this.renderValidationResult()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "add-book-page__author-genres"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_addBookPage_AddGenreBlock_addGenreBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
        genres: this.state.genres,
        addGenre: this.addGenre,
        deleteGenre: this.deleteGenre
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_addBookPage_AddAuthorBlock_addAuthorBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
        authors: this.state.authors,
        allAuthors: this.state.allAuthors,
        addAuthor: this.addAuthor,
        deleteAuthor: this.deleteAuthor
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "submit",
        className: "add-book-page__form-button"
      }, "Add book")));
    }
  }]);

  return AddBookPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(AddBookPage, "propTypes", {
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
  }).isRequired,
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
//# sourceMappingURL=main.cc81dfd6d4e2e621bf5f.hot-update.js.map