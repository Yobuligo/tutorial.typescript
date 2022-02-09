"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the extension function must be imported manually
require("./BooleanExtension");
require("./stringExtension");
// Declare Boolean variable, initialize it with false and call extension function ifFalse
var falseValue = false;
falseValue.ifFalse(function () { return console.log("I am false"); });
// Declare Boolean variable, initialize it with true and call extension function ifTrue
var trueValue = true;
trueValue.ifTrue(function () { return console.log("I am true"); });
// Declare string variable, initialize it by setting a text and call extension function ifNotEmpty
var text = "Here is my Text";
text.ifNotEmpty(function (value) {
    // The following code is executed if 'text' is not empty. Value is the 'text' object itself.
    console.log("Value is my text object and it is filled with ".concat(value));
});
// Declare string variable, initialize it by setting space as text and call extension function ifNotEmpty
var emptyText = "";
text.ifNotEmpty(function (value) {
    console.log("This code will never be executed as ".concat(emptyText, " is space."));
});
//# sourceMappingURL=app.js.map