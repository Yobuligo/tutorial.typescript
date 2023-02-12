"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextPrinter_1 = require("../../../01 easy/09 inline interface implementation/TextPrinter");
/**
 * This class is responsible for administer 3 different values (first, second, third).
 * By generics the type of each type is defined
 */
var Triple = /** @class */ (function () {
    function Triple(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    return Triple;
}());
var triple = new Triple("string", 123, new TextPrinter_1.TextPrinter());
// Type safe access to property 'third'. It is known that it is a TextPrinter
triple.third.print({
    getText: function () {
        return "Type safe property access";
    },
});
//# sourceMappingURL=app.js.map