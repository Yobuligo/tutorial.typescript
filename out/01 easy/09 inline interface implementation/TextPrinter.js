"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * The text printer is responsible for printing text.
 * The text is given by 'ITextProvider'
 */
class TextPrinter {
    print(textProvider) {
        GlobalFunctions_1.println(textProvider.getText());
    }
}
exports.TextPrinter = TextPrinter;
//# sourceMappingURL=TextPrinter.js.map