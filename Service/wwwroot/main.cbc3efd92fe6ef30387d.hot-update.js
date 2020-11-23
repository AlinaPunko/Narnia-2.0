webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/BooksSection/booksSection.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/BooksSection/booksSection.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".books-section {\n  margin: 0 auto; }\n\n.books-section-list-item {\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: space-between;\n  min-height: 0;\n  margin: 20px;\n  padding: 10px;\n  font-family: 'Lucida Sans', sans-serif;\n  box-shadow: 0 0 10px 5px #dddddd; }\n  @media (min-width: 425px) {\n    .books-section-list-item {\n      flex-direction: row; } }\n\n.books-section-list-item__title {\n  font-size: 26px; }\n\n.books-section-list-item__authors,\n.books-section-list-item__genres,\n.books-section-list-item__publishing-year,\n.books-section-list-item__pages,\n.books-section-list-item__amount {\n  padding: 5px 0;\n  font-size: 16px; }\n\n.books-section-list-item__description {\n  width: 90%;\n  padding: 20px 0;\n  font-size: 14px; }\n\n.books-section-list-item__image {\n  width: auto;\n  height: 150px; }\n\n.books-section__total-price {\n  font-size: 24px;\n  font-family: 'Lucida Sans', sans-serif; }\n\n.books-section__save-button {\n  width: auto;\n  margin: 10px auto;\n  padding: 5px;\n  color: #ffffff;\n  font-size: 20px;\n  font-family: 'Lucida Sans', sans-serif;\n  background-color: #106cc8;\n  border: none; }\n\n.books-section-list-item__buttons {\n  display: flex; }\n\n.books-section-list-item__details-button,\n.books-section-list-item__favorite-button {\n  margin: 5px;\n  padding: 10px;\n  color: #ffffff;\n  text-transform: uppercase;\n  background-color: #106cc8;\n  border: none; }\n", ""]);



/***/ }),

/***/ "./src/components/orderPage/BooksSection/booksSection.jsx":
/*!****************************************************************!*\
  !*** ./src/components/orderPage/BooksSection/booksSection.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BooksSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_OpenDetailsPageButton_openDetailsPageButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/OpenDetailsPageButton/openDetailsPageButton */ "./src/components/common/OpenDetailsPageButton/openDetailsPageButton.jsx");
/* harmony import */ var components_common_FavoriteButton_favoriteButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/FavoriteButton/favoriteButton */ "./src/components/common/FavoriteButton/favoriteButton.jsx");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var services_bookService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/bookService */ "./src/services/bookService.js");
/* harmony import */ var services_orderService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/orderService */ "./src/services/orderService.js");
/* harmony import */ var _booksSection_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booksSection.scss */ "./src/components/orderPage/BooksSection/booksSection.scss");
/* harmony import */ var _booksSection_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_booksSection_scss__WEBPACK_IMPORTED_MODULE_7__);
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










var BooksSection = /*#__PURE__*/function (_React$Component) {
  _inherits(BooksSection, _React$Component);

  var _super = _createSuper(BooksSection);

  function BooksSection(props) {
    var _this;

    _classCallCheck(this, BooksSection);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _localStorageHelper$g, books, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element, bookInfo;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _localStorageHelper$g = helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getUserItems(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getId()), books = _localStorageHelper$g.books;
              result = [];
              _iteratorNormalCompletion = true;
              _didIteratorError = false;
              _iteratorError = undefined;
              _context.prev = 5;
              _iterator = books[Symbol.iterator]();

            case 7:
              if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                _context.next = 18;
                break;
              }

              element = _step.value;
              _context.next = 11;
              return services_bookService__WEBPACK_IMPORTED_MODULE_5__["default"].getById(element.bookId);

            case 11:
              bookInfo = _context.sent;
              bookInfo.amount = element.amount;

              _this.setState({
                sum: _this.state.sum + bookInfo.price * bookInfo.amount
              });

              result.push(bookInfo);

            case 15:
              _iteratorNormalCompletion = true;
              _context.next = 7;
              break;

            case 18:
              _context.next = 24;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](5);
              _didIteratorError = true;
              _iteratorError = _context.t0;

            case 24:
              _context.prev = 24;
              _context.prev = 25;

              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }

            case 27:
              _context.prev = 27;

              if (!_didIteratorError) {
                _context.next = 30;
                break;
              }

              throw _iteratorError;

            case 30:
              return _context.finish(27);

            case 31:
              return _context.finish(24);

            case 32:
              _this.setState({
                books: result
              });

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 20, 24, 32], [25,, 27, 31]]);
    })));

    _defineProperty(_assertThisInitialized(_this), "renderBooks", function () {
      var components = [];
      var books = _this.state.books;
      books.forEach(function (element) {
        var authors = [];
        element.authors.forEach(function (author) {
          authors.push(author);
        });
        var genres = [];
        element.genres.forEach(function (genre) {
          genres.push(genre);
        });
        components.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__title"
        }, element.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__authors"
        }, "Authors: ", authors.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__genres"
        }, "Genres: ", genres.join(', ')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__pages"
        }, "Pages: ", element.pagesCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__publishing-year"
        }, "Publishing year: ", element.publishingYear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__price"
        }, "Price: ", element.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__amount"
        }, "Amount: ", element.amount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "books-section-list-item__buttons"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_OpenDetailsPageButton_openDetailsPageButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
          bookId: element.id,
          className: "books-section-list-item__details-button"
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_FavoriteButton_favoriteButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          book: element,
          className: "books-section-list-item__favorite-button"
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          alt: "Item_image",
          className: "books-section-list-item__image",
          src: element.image
        })));
      });
      return components;
    });

    _defineProperty(_assertThisInitialized(_this), "saveOrder", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var order, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              order = _this.state;
              order.userId = helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getId();
              _context2.next = 4;
              return services_orderService__WEBPACK_IMPORTED_MODULE_6__["default"].add(order);

            case 4:
              result = _context2.sent;
              // if (result) {
              alert('We received your order, the manager will call you as soon as possible');
              helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].deleteUsersCart(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getId());

              _this.props.history.push('/'); // }


            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _this.state = {
      books: [],
      sum: 0
    };
    return _this;
  }

  _createClass(BooksSection, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "books-section"
      }, this.renderBooks(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "books-section__total-price"
      }, "Total price: ", parseFloat(this.state.sum.toFixed(2))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "books-section__save-button",
        type: "button",
        onClick: this.saveOrder
      }, "Pay for order"));
    }
  }]);

  return BooksSection;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(BooksSection, "propTypes", {
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

/***/ "./src/components/orderPage/BooksSection/booksSection.scss":
/*!*****************************************************************!*\
  !*** ./src/components/orderPage/BooksSection/booksSection.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./booksSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/BooksSection/booksSection.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./booksSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/BooksSection/booksSection.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./booksSection.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/BooksSection/booksSection.scss");

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
//# sourceMappingURL=main.cbc3efd92fe6ef30387d.hot-update.js.map