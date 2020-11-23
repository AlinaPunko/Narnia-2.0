webpackHotUpdate("main",{

/***/ "./src/helpers/requestHelper.js":
/*!**************************************!*\
  !*** ./src/helpers/requestHelper.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/localStorageHelper */ "./src/helpers/localStorageHelper.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



function get(url) {
  return fetch(url, {
    method: 'GET',
    accept: 'application/json',
    credentials: 'include',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getToken())
    })
  }).then( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {
      var error, contentType;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(response.status !== 200)) {
                _context.next = 7;
                break;
              }

              error = new Error(response.statusText);
              error.code = response.status;
              _context.next = 5;
              return response.json();

            case 5:
              error.message = _context.sent;
              return _context.abrupt("return", error);

            case 7:
              contentType = response.headers.get('content-type');

              if (!(contentType && contentType.includes('application/json'))) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", response.json());

            case 10:
              return _context.abrupt("return", response.text());

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()).catch(function (error) {
    return new Error("Network Error!".concat(error));
  });
}

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getToken())
    }),
    accept: 'application/json',
    credentials: 'include',
    body: JSON.stringify(data)
  }).then( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(response) {
      var error, c, contentType;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(response.status !== 200)) {
                _context2.next = 10;
                break;
              }

              error = new Error(response.statusText);
              console.log(error);
              error.code = response.status;
              _context2.next = 6;
              return response.json;

            case 6:
              c = _context2.sent;
              console.log(c);
              error.message = c;
              return _context2.abrupt("return", error);

            case 10:
              if (!(response.status === 401)) {
                _context2.next = 13;
                break;
              }

              window.location.href = '/login';
              return _context2.abrupt("return");

            case 13:
              contentType = response.headers.get('content-type');

              if (!(contentType && contentType.includes('application/json'))) {
                _context2.next = 16;
                break;
              }

              return _context2.abrupt("return", response.json());

            case 16:
              return _context2.abrupt("return", response.text());

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }()).catch(function (error) {
    return new Error("Network Error!".concat(error));
  });
}

function put(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getToken())
    }),
    accept: 'application/json',
    credentials: 'include',
    body: JSON.stringify(data)
  }).then( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(response) {
      var error, contentType;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(response.status !== 200)) {
                _context3.next = 7;
                break;
              }

              error = new Error(response.statusText);
              error.code = response.status;
              _context3.next = 5;
              return response.json();

            case 5:
              error.message = _context3.sent;
              return _context3.abrupt("return", error);

            case 7:
              contentType = response.headers.get('content-type');

              if (!(contentType && contentType.includes('application/json'))) {
                _context3.next = 10;
                break;
              }

              return _context3.abrupt("return", response.json());

            case 10:
              return _context3.abrupt("return", response.text());

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }()).catch(function (error) {
    return new Error("Network Error!".concat(error));
  });
}

function deleteRequest(url, data) {
  return fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(helpers_localStorageHelper__WEBPACK_IMPORTED_MODULE_0__["default"].getToken())
    }),
    accept: 'application/json',
    credentials: 'include',
    body: JSON.stringify(data)
  }).then( /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(response) {
      var error, contentType;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(response.status !== 200)) {
                _context4.next = 7;
                break;
              }

              error = new Error(response.statusText);
              error.code = response.status;
              _context4.next = 5;
              return response.json();

            case 5:
              error.message = _context4.sent;
              return _context4.abrupt("return", error);

            case 7:
              contentType = response.headers.get('content-type');

              if (!(contentType && contentType.includes('application/json'))) {
                _context4.next = 10;
                break;
              }

              return _context4.abrupt("return", response.json());

            case 10:
              return _context4.abrupt("return", response.text());

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function (_x4) {
      return _ref4.apply(this, arguments);
    };
  }()).catch(function (error) {
    return new Error("Network Error!".concat(error));
  });
}

/* harmony default export */ __webpack_exports__["default"] = ({
  get: get,
  post: post,
  put: put,
  deleteRequest: deleteRequest
});

/***/ })

})
//# sourceMappingURL=main.ba12539c22d75bef7161.hot-update.js.map