"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// the extension function must be imported manually
const GlobalFunctions_1 = require("../../GlobalFunctions");
require("./BooleanExtension");
require("./stringExtension");
// Declare Boolean variable, initialize it with false and call extension function ifFalse
const falseValue = false;
falseValue.ifFalse(() => (0, GlobalFunctions_1.println)("I am false"));
// Declare Boolean variable, initialize it with true and call extension function ifTrue
const trueValue = true;
trueValue.ifTrue(() => (0, GlobalFunctions_1.println)("I am true"));
// Declare string variable, initialize it by setting a text and call extension function ifNotEmpty
const text = "Here is my Text";
text.ifNotEmpty(value => {
    // The following code is executed if 'text' is not empty. Value is the 'text' object itself.
    (0, GlobalFunctions_1.println)(`Value is my text object and it is filled with ${value}`);
});
// Declare string variable, initialize it by setting space as text and call extension function ifNotEmpty
const emptyText = "";
text.ifNotEmpty((value) => {
    (0, GlobalFunctions_1.println)(`This code will never be executed as 'emptyText' is space.`);
});
//# sourceMappingURL=app.js.map