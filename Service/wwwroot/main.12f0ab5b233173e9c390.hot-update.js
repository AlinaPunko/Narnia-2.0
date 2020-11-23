webpackHotUpdate("main",{

/***/ "./src/services/orderService.js":
/*!**************************************!*\
  !*** ./src/services/orderService.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var helpers_requestHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers/requestHelper */ "./src/helpers/requestHelper.js");
/* harmony import */ var constants_serviceUrls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/serviceUrls */ "./src/constants/serviceUrls.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




function add(_x) {
  return _add.apply(this, arguments);
}

function _add() {
  _add = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(order) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return helpers_requestHelper__WEBPACK_IMPORTED_MODULE_0__["default"].post(constants_serviceUrls__WEBPACK_IMPORTED_MODULE_1__["default"].orderUrls.add, order);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _add.apply(this, arguments);
}

function getPending() {
  return _getPending.apply(this, arguments);
}

function _getPending() {
  _getPending = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return helpers_requestHelper__WEBPACK_IMPORTED_MODULE_0__["default"].get(constants_serviceUrls__WEBPACK_IMPORTED_MODULE_1__["default"].orderUrls.getPending);

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPending.apply(this, arguments);
}

function getAll() {
  return _getAll.apply(this, arguments);
}

function _getAll() {
  _getAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return helpers_requestHelper__WEBPACK_IMPORTED_MODULE_0__["default"].get(constants_serviceUrls__WEBPACK_IMPORTED_MODULE_1__["default"].orderUrls.getAll);

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getAll.apply(this, arguments);
}

function getByUserId(_x2) {
  return _getByUserId.apply(this, arguments);
}

function _getByUserId() {
  _getByUserId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id) {
    var result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return helpers_requestHelper__WEBPACK_IMPORTED_MODULE_0__["default"].get(constants_serviceUrls__WEBPACK_IMPORTED_MODULE_1__["default"].orderUrls.getByUserId(id));

          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getByUserId.apply(this, arguments);
}

function UpdateStatus(_x3) {
  return _UpdateStatus.apply(this, arguments);
}

function _UpdateStatus() {
  _UpdateStatus = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(order) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _UpdateStatus.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  add: add,
  getPending: getPending,
  getByUserId: getByUserId,
  getAll: getAll
});

/***/ })

})
//# sourceMappingURL=main.12f0ab5b233173e9c390.hot-update.js.map