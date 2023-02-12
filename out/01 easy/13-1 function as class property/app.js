"use strict";
/**
 * In TypeScript classes must not only have properties and methods but they can also have functions.
 * That helps to transfer the reference of that class function to call it later.
 */
var ClassFunction = /** @class */ (function () {
    function ClassFunction(text) {
        var _this = this;
        this.text = text;
        this.printText = function () {
            console.log("The text was ".concat(_this.text));
        };
    }
    return ClassFunction;
}());
var classFunction = new ClassFunction("Demo");
var refToFunction = classFunction.printText;
console.log("The variable refToFunction refers to the class function printText. It is possible to call this function later. Lets do it now");
refToFunction();
//# sourceMappingURL=app.js.map