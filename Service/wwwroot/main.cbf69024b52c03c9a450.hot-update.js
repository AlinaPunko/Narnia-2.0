webpackHotUpdate("main",{

/***/ "./src/constants/serviceUrls.js":
/*!**************************************!*\
  !*** ./src/constants/serviceUrls.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _orderUrls;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  bookUrls: {
    getAllBooks: '/api/Books',
    add: '/api/Books/Add',
    update: '/api/Books/Update',
    getBookById: function getBookById(id) {
      return "/api/Books/GetById?id=".concat(id);
    },
    addComment: '/api/Books/AddComment',
    rateBook: '/api/Books/Rate',
    getUserRates: function getUserRates(bookId, userId) {
      return "/api/Books/GetUserRates?bookId=".concat(bookId, "&userId=").concat(userId);
    }
  },
  favoriteBookUrls: {
    addFavorite: '/api/FavoriteBooks/Add',
    getFavoritesByUserId: function getFavoritesByUserId(userId) {
      return "/api/FavoriteBooks/GetByUserId?id=".concat(userId);
    },
    deleteFavorite: '/api/FavoriteBooks/Delete'
  },
  authorUrls: {
    get: '/api/Authors',
    getById: function getById(id) {
      return "/api/Authors/GetById?id=".concat(id);
    },
    add: '/api/Authors/Add',
    update: '/api/Authors/Update'
  },
  userUrls: {
    getUser: function getUser(id) {
      return "/api/User/GetById?id=".concat(id);
    },
    updateUser: '/api/User/Update',
    signIn: '/api/User/Login',
    signUp: '/api/User/Register',
    signUpAdmin: '/api/User/Register-Admin',
    signOut: '/api/User/Logout'
  },
  orderUrls: (_orderUrls = {
    add: '/api/Orders/Add',
    getByUserId: function getByUserId(userId) {
      return "/api/Orders/GetByUserId?id=".concat(userId);
    },
    getPending: 'api/Orders/Pending'
  }, _defineProperty(_orderUrls, "getPending", 'api/Orders/Pending'), _defineProperty(_orderUrls, "update", 'api/Orders/UpdateStatus'), _orderUrls)
});

/***/ })

})
//# sourceMappingURL=main.cbf69024b52c03c9a450.hot-update.js.map