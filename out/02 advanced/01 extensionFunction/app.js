"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./BooleanExtension");
require("./stringExtension");
var falseValue = false;
falseValue.ifFalse(function () { return console.log("I am false"); });
var trueValue = true;
trueValue.ifTrue(function () { return console.log("I am true"); });
var text = "Here is my Text";
text.ifNotEmpty(function (value) {
    //The following code is executed if 'text' is not empty. Value is the 'text' object itself.
    console.log("Value is my text object and it is filled with ".concat(value));
});
//# sourceMappingURL=app.js.map