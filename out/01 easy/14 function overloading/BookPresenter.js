"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPresenter = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * This class represents a BookPresenter
 * It presents books by printing properties at the console
 */
var BookPresenter = /** @class */ (function () {
    function BookPresenter() {
    }
    BookPresenter.prototype.present = function (book) {
        if (book != null) {
            if (book.description != null) {
                (0, GlobalFunctions_1.println)("'".concat(book.isbn, "' '").concat(book.title, "' '").concat(book.description, "'"));
            }
            else {
                (0, GlobalFunctions_1.println)("'".concat(book.isbn, "' '").concat(book.title, "'"));
            }
        }
    };
    return BookPresenter;
}());
exports.BookPresenter = BookPresenter;
//# sourceMappingURL=BookPresenter.js.map