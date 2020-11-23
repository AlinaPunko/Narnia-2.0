webpackHotUpdate("main",{

/***/ "./src/helpers/serviceWrapper.js":
/*!***************************************!*\
  !*** ./src/helpers/serviceWrapper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function callService(_x, _x2, _x3) {
  return _callService.apply(this, arguments);
}

function _callService() {
  _callService = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(service, data, errorRef) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return service(data);

          case 2:
            result = _context.sent;
            debugger;

            if (!(result instanceof Error)) {
              _context.next = 11;
              break;
            }

            errorRef.current.innerHTML = '';

            if (!Array.isArray(result.message)) {
              _context.next = 9;
              break;
            }

            result.message.forEach(function (message) {
              errorRef.current.innerHTML += "".concat(message, "</br>");
            });
            return _context.abrupt("return");

          case 9:
            errorRef.current.innerHTML = result.message.message;
            return _context.abrupt("return");

          case 11:
            return _context.abrupt("return", result);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _callService.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  callService: callService
});

/***/ })

})
//# sourceMappingURL=main.b35016299eee5afea77b.hot-update.js.map