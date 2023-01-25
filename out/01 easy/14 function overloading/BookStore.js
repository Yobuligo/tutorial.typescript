"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStore = void 0;
require("../../ExtensionFunctions");
const BookStoreInitializer_1 = require("./BookStoreInitializer");
/**
 * This class represents a book store
 */
class BookStore {
    constructor() {
        this.books = new BookStoreInitializer_1.BookStoreInitializer().initialize();
    }
    find(isbn) {
        if (isbn != null) {
            return this.findByIsbn(isbn);
        }
        return this.books;
    }
    findByBookFilter(bookFilter) {
        return [].apply((it) => {
            this.books.forEach((book) => {
                if (this.fitsIsbn(bookFilter, book) ||
                    this.fitsTitle(bookFilter, book) ||
                    this.fitsDescription(bookFilter, book)) {
                    it.push(book);
                }
            });
        });
    }
    findByIsbn(isbn) {
        for (let book of this.books) {
            if (book.isbn == isbn) {
                return book;
            }
        }
        return null;
    }
    fitsIsbn(bookFilter, book) {
        return bookFilter.isbn != null && book.isbn == bookFilter.isbn;
    }
    fitsTitle(bookFilter, book) {
        return (bookFilter.title != null && book.title.indexOf(bookFilter.title, 0) !== -1);
    }
    fitsDescription(bookFilter, book) {
        return (bookFilter.description != null &&
            book.description != null &&
            book.description.indexOf(bookFilter.description, 0) !== -1);
    }
}
exports.BookStore = BookStore;
//# sourceMappingURL=BookStore.js.map