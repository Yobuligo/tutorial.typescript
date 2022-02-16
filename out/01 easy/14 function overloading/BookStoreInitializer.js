"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStoreInitializer = void 0;
var Book_1 = require("./Book");
/**
 * This class represents a book store initializer.
 */
var BookStoreInitializer = /** @class */ (function () {
    function BookStoreInitializer() {
    }
    BookStoreInitializer.prototype.initialize = function () {
        var books = [];
        books.push(new Book_1.Book("1492037656", "Programming TypeScript: Making Your JavaScript Applications Scale"));
        books.push(new Book_1.Book("1492053740", "Effective TypeScript: 62 Specific Ways to Improve Your TypeScript", "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript."));
        books.push(new Book_1.Book("148427010X", "Essential TypeScript 4: From Beginner to Pro"));
        return books;
    };
    return BookStoreInitializer;
}());
exports.BookStoreInitializer = BookStoreInitializer;
//# sourceMappingURL=BookStoreInitializer.js.map