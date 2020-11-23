webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsList/authorsList.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsList/authorsList.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".authors-list {\n  width: 100%;\n  margin: 20px auto 0 auto; }\n  @media (min-width: 1024px) {\n    .authors-list {\n      width: 60%; } }\n\n.authors-list__title {\n  margin: 10px auto;\n  font-size: 26px;\n  font-family: 'Lucida Sans', sans-serif;\n  text-align: center; }\n\n.authors-list__list {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  width: 100%; }\n\n.authors-list__preloader-icon {\n  width: 100%;\n  height: 100%; }\n\n.authors-list__preloader {\n  height: 50px; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsListItem/authorsListItem.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsListItem/authorsListItem.scss ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".authors-list-item {\n  width: 80%;\n  margin: 5px;\n  padding: 5px;\n  font-family: 'Lucida Sans', sans-serif;\n  box-shadow: 0 0 10px 5px #dddddd; }\n  @media (min-width: 425px) {\n    .authors-list-item {\n      width: 40%; } }\n  @media (min-width: 1024px) {\n    .authors-list-item {\n      width: 30%; } }\n\n.authors-list-item__name {\n  padding-bottom: 10px;\n  font-size: 22px; }\n\n.authors-list-item__country,\n.authors-list-item__birthdate {\n  padding: 5px 0;\n  font-size: 18px; }\n\n.authors-list-item__button {\n  padding: 5px;\n  background-color: transparent;\n  border: 1px solid gray;\n  border-radius: 3px; }\n\n.authors-list-item__button-icon {\n  width: 15px;\n  height: 15px; }\n", ""]);



/***/ }),

/***/ "./src/components/authorsList/AuthorsList/authorsList.jsx":
/*!****************************************************************!*\
  !*** ./src/components/authorsList/AuthorsList/authorsList.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthorsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var services_authorService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! services/authorService */ "./src/services/authorService.js");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var components_authorsList_AuthorsListItem_authorsListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/authorsList/AuthorsListItem/authorsListItem */ "./src/components/authorsList/AuthorsListItem/authorsListItem.jsx");
/* harmony import */ var styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styles/icons/preloader.svg */ "./src/styles/icons/preloader.svg");
/* harmony import */ var _authorsList_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authorsList.scss */ "./src/components/authorsList/AuthorsList/authorsList.scss");
/* harmony import */ var _authorsList_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_authorsList_scss__WEBPACK_IMPORTED_MODULE_5__);
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








var AuthorsList = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AuthorsList, _React$PureComponent);

  var _super = _createSuper(AuthorsList);

  function AuthorsList() {
    var _this;

    _classCallCheck(this, AuthorsList);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var authors;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return services_authorService__WEBPACK_IMPORTED_MODULE_1__["default"].get();

            case 2:
              authors = _context.sent;

              if (authors) {
                _this.setState({
                  authors: authors,
                  isLoading: false
                });
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _this.state = {
      authors: [],
      isLoading: true
    };
    return _this;
  }

  _createClass(AuthorsList, [{
    key: "renderAuthors",
    value: function renderAuthors() {
      return this.state.authors.map(function (author) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_authorsList_AuthorsListItem_authorsListItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
          author: author,
          key: author.id
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "authors-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "authors-list__title"
      }, "Authors"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "authors-list__list"
      }, this.renderAuthors())), this.state.isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "authors-list__preloader"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
        iconClassName: "authors-list__preloader-icon",
        icon: styles_icons_preloader_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
      })));
    }
  }]);

  return AuthorsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);



/***/ }),

/***/ "./src/components/authorsList/AuthorsList/authorsList.scss":
/*!*****************************************************************!*\
  !*** ./src/components/authorsList/AuthorsList/authorsList.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./authorsList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsList/authorsList.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./authorsList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsList/authorsList.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./authorsList.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsList/authorsList.scss");

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

/***/ }),

/***/ "./src/components/authorsList/AuthorsListItem/authorsListItem.jsx":
/*!************************************************************************!*\
  !*** ./src/components/authorsList/AuthorsListItem/authorsListItem.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthorsListItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var constants_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/routing */ "./src/constants/routing.js");
/* harmony import */ var helpers_dateHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/dateHelper */ "./src/helpers/dateHelper.js");
/* harmony import */ var helpers_urlHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helpers/urlHelper */ "./src/helpers/urlHelper.js");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/Icon/icon */ "./src/components/common/Icon/icon.jsx");
/* harmony import */ var styles_icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/icons/edit.svg */ "./src/styles/icons/edit.svg");
/* harmony import */ var _authorsListItem_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authorsListItem.scss */ "./src/components/authorsList/AuthorsListItem/authorsListItem.scss");
/* harmony import */ var _authorsListItem_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_authorsListItem_scss__WEBPACK_IMPORTED_MODULE_9__);
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












var AuthorsListItem = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(AuthorsListItem, _React$PureComponent);

  var _super = _createSuper(AuthorsListItem);

  function AuthorsListItem() {
    _classCallCheck(this, AuthorsListItem);

    return _super.apply(this, arguments);
  }

  _createClass(AuthorsListItem, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "authors-list-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "authors-list-item__name"
      }, this.props.author.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "authors-list-item__country"
      }, "Country: ", this.props.author.country), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "authors-list-item__birthdate"
      }, "Birthdate: ", helpers_dateHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getDate(this.props.author.birthdate)), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_6__["default"].getRole() === 'admin' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: helpers_urlHelper__WEBPACK_IMPORTED_MODULE_5__["default"].getUrlWithParameter(constants_routing__WEBPACK_IMPORTED_MODULE_3__["default"].authorPage.url, /:id/, this.props.author.id)
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "authors-list-item__button"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_common_Icon_icon__WEBPACK_IMPORTED_MODULE_7__["default"], {
        icon: styles_icons_edit_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
        iconClassName: "authors-list-item__button-icon"
      }))));
    }
  }]);

  return AuthorsListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(AuthorsListItem, "propTypes", {
  author: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    country: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    birthdate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired
});



/***/ }),

/***/ "./src/components/authorsList/AuthorsListItem/authorsListItem.scss":
/*!*************************************************************************!*\
  !*** ./src/components/authorsList/AuthorsListItem/authorsListItem.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./authorsListItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsListItem/authorsListItem.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./authorsListItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsListItem/authorsListItem.scss", function() {
		var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./authorsListItem.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/authorsList/AuthorsListItem/authorsListItem.scss");

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
//# sourceMappingURL=main.af9771cf8622c329afaa.hot-update.js.map