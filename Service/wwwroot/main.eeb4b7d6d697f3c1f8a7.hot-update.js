webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/bookPage/BookInfoPage/bookInfoPage.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/bookPage/CommentsListItem/commentsListItem.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/bookPage/CommentsSection/commentsSection.scss":
false,

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/bookPage/RatingPanel/ratingPanel.scss":
false,

/***/ "./src/components/bookPage/BookInfoPage/bookInfoPage.jsx":
/*!***************************************************************!*\
  !*** ./src/components/bookPage/BookInfoPage/bookInfoPage.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\src\\components\\bookPage\\BookInfoPage\\bookInfoPage.jsx: Unexpected token (38:50)\n\n\u001b[0m \u001b[90m 36 | \u001b[39m    async getBook(id) {\u001b[0m\n\u001b[0m \u001b[90m 37 | \u001b[39m        \u001b[36mconst\u001b[39m result \u001b[33m=\u001b[39m await bookService\u001b[33m.\u001b[39mgetById(id)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 38 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39msetState({ book\u001b[33m:\u001b[39m result\u001b[33m,\u001b[39m isLoading\u001b[33m:\u001b[39m  })\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 39 | \u001b[39m    }\u001b[0m\n\u001b[0m \u001b[90m 40 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 41 | \u001b[39m    render() {\u001b[0m\n    at Object._raise (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:723:17)\n    at Object.raiseWithData (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:716:17)\n    at Object.raise (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:710:17)\n    at Object.unexpected (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:8610:16)\n    at Object.parseExprAtom (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9893:20)\n    at Object.parseExprAtom (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:4543:20)\n    at Object.parseExprSubscripts (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeUnary (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9459:21)\n    at Object.parseExprOps (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9329:23)\n    at Object.parseMaybeConditional (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9302:23)\n    at Object.parseMaybeAssign (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9257:21)\n    at Object.parseObjectProperty (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10341:101)\n    at Object.parseObjPropValue (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10366:101)\n    at Object.parseObjectMember (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10290:10)\n    at Object.parseObj (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10211:25)\n    at Object.parseExprAtom (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9836:28)\n    at Object.parseExprAtom (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:4543:20)\n    at Object.parseExprSubscripts (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9479:23)\n    at Object.parseMaybeUnary (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9459:21)\n    at Object.parseExprOps (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9329:23)\n    at Object.parseMaybeConditional (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9302:23)\n    at Object.parseMaybeAssign (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9257:21)\n    at Object.parseExprListItem (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10553:18)\n    at Object.parseCallExpressionArguments (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9660:22)\n    at Object.parseSubscript (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9566:31)\n    at Object.parseSubscripts (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9496:19)\n    at Object.parseExprSubscripts (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9485:17)\n    at Object.parseMaybeUnary (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9459:21)\n    at Object.parseExprOps (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9329:23)\n    at Object.parseMaybeConditional (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9302:23)\n    at Object.parseMaybeAssign (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9257:21)\n    at Object.parseExpression (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:9209:23)\n    at Object.parseStatementContent (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11045:23)\n    at Object.parseStatement (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:10916:17)\n    at Object.parseBlockOrModuleBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11490:25)\n    at Object.parseBlockBody (D:\\лабы\\Narnia-2.0\\Narnia-2.0\\Frontend\\node_modules\\@babel\\parser\\lib\\index.js:11477:10)");

/***/ }),

/***/ "./src/components/bookPage/BookInfoPage/bookInfoPage.scss":
false,

/***/ "./src/components/bookPage/CommentsListItem/commentsListItem.jsx":
false,

/***/ "./src/components/bookPage/CommentsListItem/commentsListItem.scss":
false,

/***/ "./src/components/bookPage/CommentsSection/commentsSection.jsx":
false,

/***/ "./src/components/bookPage/CommentsSection/commentsSection.scss":
false,

/***/ "./src/components/bookPage/RatingPanel/ratingPanel.jsx":
false,

/***/ "./src/components/bookPage/RatingPanel/ratingPanel.scss":
false,

/***/ "./src/styles/icons/dislike.svg":
false,

/***/ "./src/styles/icons/like.svg":
false

})
//# sourceMappingURL=main.eeb4b7d6d697f3c1f8a7.hot-update.js.map