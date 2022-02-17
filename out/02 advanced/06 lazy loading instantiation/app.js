"use strict";
/**
 * If objects are expensive to be created a lazy load can be used instead
 * The following shows an example as idea how to solve the problem
 */
Object.defineProperty(exports, "__esModule", { value: true });
var TextPrinter_1 = require("../../01 easy/09 inline interface implementation/TextPrinter");
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Printer = /** @class */ (function () {
    function Printer() {
        var _this = this;
        this.textPrinter = (0, GlobalFunctions_1.lazy)(function () { return _this.createTextPrinter(); });
    }
    Printer.prototype.print = function (message) {
        this.textPrinter.instance.print({
            getText: function () {
                return message;
            },
        });
    };
    Printer.prototype.createTextPrinter = function () {
        (0, GlobalFunctions_1.println)("create Instance of text printer.");
        return new TextPrinter_1.TextPrinter();
    };
    return Printer;
}());
var printer = new Printer();
(0, GlobalFunctions_1.println)("Even so property 'printer' is initialized, the property 'printer.textPrinter' is not initialized");
(0, GlobalFunctions_1.println)("only after the first call of 'printer.print()' it gets initialized");
printer.print("First call of function 'print'");
(0, GlobalFunctions_1.println)("Following another text should be printed by 'printer'. Lazy objects are reused and only initialized once. So it must not be initialized again.");
printer.print("Second call of function 'print'. New instance should be created.");
//# sourceMappingURL=app.js.map