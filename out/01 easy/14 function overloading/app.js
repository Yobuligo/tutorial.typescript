"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const BookFilter_1 = require("./BookFilter");
const BookPresenter_1 = require("./BookPresenter");
const BookStore_1 = require("./BookStore");
// !!! Function overloading in 'BookStore.ts'
const bookStore = new BookStore_1.BookStore();
const bookPresenter = new BookPresenter_1.BookPresenter();
// find all
GlobalFunctions_1.println("find all");
bookStore.find().forEach((book) => bookPresenter.present(book));
GlobalFunctions_1.newLine();
// find by a given id
GlobalFunctions_1.println("find by ISBN");
bookPresenter.present(bookStore.find("148427010X"));
GlobalFunctions_1.newLine();
// find via 'IBookFilter'
GlobalFunctions_1.println("find by filter");
bookStore
    .findByBookFilter(new BookFilter_1.BookFilter(null, `Improve`))
    .forEach((book) => bookPresenter.present(book));
//# sourceMappingURL=app.js.map