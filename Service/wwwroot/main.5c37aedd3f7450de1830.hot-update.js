webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/orderPage/BooksSection/booksSection.scss":
false,

/***/ "./src/components/orderPage/BooksSection/booksSection.jsx":
/*!****************************************************************!*\
  !*** ./src/components/orderPage/BooksSection/booksSection.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\src\\components\\orderPage\\BooksSection\\booksSection.jsx: Deleting local variable in strict mode (100:8)\n\n\u001b[0m \u001b[90m  98 | \u001b[39m    saveOrder \u001b[33m=\u001b[39m async () \u001b[33m=>\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m  99 | \u001b[39m        \u001b[36mconst\u001b[39m order \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 100 | \u001b[39m        \u001b[36mdelete\u001b[39m or\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 101 | \u001b[39m        order\u001b[33m.\u001b[39muserId \u001b[33m=\u001b[39m localStorageHelper\u001b[33m.\u001b[39mgetId()\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 102 | \u001b[39m        await orderService\u001b[33m.\u001b[39madd(order)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 103 | \u001b[39m        alert(\u001b[32m'We received your order, the manager will call you as soon as possible'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:723:17)\n    at Object.raiseWithData (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:716:17)\n    at Object.raise (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:710:17)\n    at Object.parseMaybeUnary (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9448:16)\n    at Object.parseExprOps (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9329:23)\n    at Object.parseMaybeConditional (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9302:23)\n    at Object.parseMaybeAssign (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9257:21)\n    at Object.parseExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9209:23)\n    at Object.parseStatementContent (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11045:23)\n    at Object.parseStatement (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10916:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11490:25)\n    at Object.parseBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11477:10)\n    at Object.parseBlock (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11461:10)\n    at Object.parseFunctionBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10477:24)\n    at Object.parseArrowExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10432:10)\n    at Object.parseAsyncArrowFromCallExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9681:10)\n    at Object.parseSubscript (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9573:21)\n    at Object.parseSubscripts (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9496:19)\n    at Object.parseExprSubscripts (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9485:17)\n    at Object.parseMaybeUnary (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9459:21)\n    at Object.parseExprOps (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9329:23)\n    at Object.parseMaybeConditional (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9302:23)\n    at Object.parseMaybeAssign (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9257:21)\n    at Object.parseClassProperty (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11934:25)\n    at Object.pushClassProperty (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11885:30)\n    at Object.parseClassMemberWithIsStatic (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11818:14)\n    at Object.parseClassMember (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11755:10)\n    at D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11710:14\n    at Object.withTopicForbiddingContext (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10791:14)\n    at Object.parseClassBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11687:10)\n    at Object.parseClass (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11661:22)\n    at Object.parseExportDefaultExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:12087:19)\n    at Object.parseExport (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:12000:31)\n    at Object.parseStatementContent (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11020:27)\n    at Object.parseStatement (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10916:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11490:25)");

/***/ }),

/***/ "./src/components/orderPage/BooksSection/booksSection.scss":
false

})
//# sourceMappingURL=main.5c37aedd3f7450de1830.hot-update.js.map