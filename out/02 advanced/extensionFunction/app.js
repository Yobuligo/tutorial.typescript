"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./BooleanExtension");
var falseValue = false;
falseValue.ifFalse(function () { return console.log("I am false"); });
var trueValue = true;
trueValue.ifTrue(function () { return console.log("I am true"); });
//# sourceMappingURL=app.js.map