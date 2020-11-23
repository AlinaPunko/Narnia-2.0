webpackHotUpdate("main",{

/***/ "./src/components/SideMenu/sideMenu.jsx":
/*!**********************************************!*\
  !*** ./src/components/SideMenu/sideMenu.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SideMenuLink/sideMenuLink */ "./src/components/SideMenuLink/sideMenuLink.jsx");
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
/* harmony import */ var styles_icons_favorite_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styles/icons/favorite.svg */ "./src/styles/icons/favorite.svg");
/* harmony import */ var styles_icons_home_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/icons/home.svg */ "./src/styles/icons/home.svg");
/* harmony import */ var styles_icons_upload_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/icons/upload.svg */ "./src/styles/icons/upload.svg");
/* harmony import */ var styles_icons_add_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/icons/add.svg */ "./src/styles/icons/add.svg");
/* harmony import */ var styles_icons_authors_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/icons/authors.svg */ "./src/styles/icons/authors.svg");
/* harmony import */ var _sideMenu_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sideMenu.scss */ "./src/components/SideMenu/sideMenu.scss");
/* harmony import */ var _sideMenu_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_sideMenu_scss__WEBPACK_IMPORTED_MODULE_10__);
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













var SideMenu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SideMenu, _React$PureComponent);

  var _super = _createSuper(SideMenu);

  function SideMenu() {
    _classCallCheck(this, SideMenu);

    return _super.apply(this, arguments);
  }

  _createClass(SideMenu, [{
    key: "render",
    value: function render() {
      var menuClass = 'side-menu';

      if (this.props.showMenu) {
        menuClass += ' side-menu--opened';
      } else menuClass += ' side-menu--closed';

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: menuClass,
        onClick: this.props.closeFunction
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-menu__header"
      }, "Book Store"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "side-menu__links"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Home",
        icon: styles_icons_home_svg__WEBPACK_IMPORTED_MODULE_6__["default"]
      }))), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getRole() === 'admin' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/book/0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Add book",
        icon: styles_icons_upload_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/author/0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Add author",
        icon: styles_icons_add_svg__WEBPACK_IMPORTED_MODULE_8__["default"]
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/authors"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Authors",
        icon: styles_icons_authors_svg__WEBPACK_IMPORTED_MODULE_9__["default"]
      }))), helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getId() !== '' && helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_4__["default"].getId() !== null && loca && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/favorites"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_SideMenuLink_sideMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
        text: "Favorite books",
        icon: styles_icons_favorite_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
      })))));
    }
  }]);

  return SideMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(SideMenu, "propTypes", {
  showMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  closeFunction: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
});



/***/ })

})
//# sourceMappingURL=main.790e182c7d72560f80d5.hot-update.js.map