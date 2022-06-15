"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextPrinter = void 0;
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * The text printer is responsible for printing text.
 * The text is given by 'ITextProvider'
 */
class TextPrinter {
    print(textProvider) {
        (0, GlobalFunctions_1.println)(textProvider.getText());
    }
}
exports.TextPrinter = TextPrinter;
//# sourceMappingURL=TextPrinter.js.map