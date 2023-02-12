"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextPrinter_1 = require("./TextPrinter");
var TextProvider_1 = require("./TextProvider");
// Print text via ITextProvider by the concrete text provider implementation of 'TextProvider'
new TextPrinter_1.TextPrinter().print(new TextProvider_1.TextProvider());
// Print text via ITextProvider by an inline text provider
// The text provider default implementation can be added by writing 'new TextPrinter().print({})' putting the cursor between {}
// and use code completion function e.g. Alt+Enter
new TextPrinter_1.TextPrinter().print({
    getText: function () {
        return "Text provided via inline class implementation";
    },
});
//# sourceMappingURL=app.js.map