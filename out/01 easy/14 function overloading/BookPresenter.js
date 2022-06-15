"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPresenter = void 0;
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * This class represents a BookPresenter
 * It presents books by printing properties at the console
 */
class BookPresenter {
    present(book) {
        if (book != null) {
            if (book.description != null) {
                (0, GlobalFunctions_1.println)(`'${book.isbn}' '${book.title}' '${book.description}'`);
            }
            else {
                (0, GlobalFunctions_1.println)(`'${book.isbn}' '${book.title}'`);
            }
        }
    }
}
exports.BookPresenter = BookPresenter;
//# sourceMappingURL=BookPresenter.js.map