"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextPrinter = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * The text printer is responsible for printing text.
 * The text is given by 'ITextProvider'
 */
var TextPrinter = /** @class */ (function () {
    function TextPrinter() {
    }
    TextPrinter.prototype.print = function (textProvider) {
        (0, GlobalFunctions_1.println)(textProvider.getText());
    };
    return TextPrinter;
}());
exports.TextPrinter = TextPrinter;
//# sourceMappingURL=TextPrinter.js.map