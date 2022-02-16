"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStore = void 0;
require("../../ExtensionFunctions");
var BookStoreInitializer_1 = require("./BookStoreInitializer");
/**
 * This class represents a book store
 */
var BookStore = /** @class */ (function () {
    function BookStore() {
        this.books = new BookStoreInitializer_1.BookStoreInitializer().initialize();
    }
    BookStore.prototype.find = function (isbn) {
        if (isbn != null) {
            return this.findByIsbn(isbn);
        }
        return this.books;
    };
    BookStore.prototype.findByBookFilter = function (bookFilter) {
        var _this = this;
        return [].apply(function (it) {
            _this.books.forEach(function (book) {
                if (_this.fitsIsbn(bookFilter, book) ||
                    _this.fitsTitle(bookFilter, book) ||
                    _this.fitsDescription(bookFilter, book)) {
                    it.push(book);
                }
            });
        });
    };
    BookStore.prototype.findByIsbn = function (isbn) {
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.isbn == isbn) {
                return book;
            }
        }
        return null;
    };
    BookStore.prototype.fitsIsbn = function (bookFilter, book) {
        return bookFilter.isbn != null && book.isbn == bookFilter.isbn;
    };
    BookStore.prototype.fitsTitle = function (bookFilter, book) {
        return (bookFilter.title != null && book.title.indexOf(bookFilter.title, 0) !== -1);
    };
    BookStore.prototype.fitsDescription = function (bookFilter, book) {
        return (bookFilter.description != null &&
            book.description != null &&
            book.description.indexOf(bookFilter.description, 0) !== -1);
    };
    return BookStore;
}());
exports.BookStore = BookStore;
//# sourceMappingURL=BookStore.js.map