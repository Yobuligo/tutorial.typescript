"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var BookFilter_1 = require("./BookFilter");
var BookPresenter_1 = require("./BookPresenter");
var BookStore_1 = require("./BookStore");
// !!! Function overloading in 'BookStore.ts'
var bookStore = new BookStore_1.BookStore();
var bookPresenter = new BookPresenter_1.BookPresenter();
// find all
(0, GlobalFunctions_1.println)("find all");
bookStore.find().forEach(function (book) { return bookPresenter.present(book); });
(0, GlobalFunctions_1.newLine)();
// find by a given id
(0, GlobalFunctions_1.println)("find by ISBN");
bookPresenter.present(bookStore.find("148427010X"));
(0, GlobalFunctions_1.newLine)();
// find via 'IBookFilter'
(0, GlobalFunctions_1.println)("find by filter");
bookStore
    .findByBookFilter(new BookFilter_1.BookFilter(null, "Improve"))
    .forEach(function (book) { return bookPresenter.present(book); });
//# sourceMappingURL=app.js.map