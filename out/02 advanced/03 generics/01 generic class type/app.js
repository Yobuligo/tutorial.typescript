"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * Class that is responsible for containing a value. Next to the creation we can access that value.
 * And we want to know the type of that value to write type safe, secure and stable code afterwards.
 * So we dont use the type 'any' but introduce a generic type T.
 * And T can have each possible type in typescript.
 * - Basic types (number, string, etc.)
 * - Reference types (object instances)
 * - Enum types (E.g. Color with Color.BLUE, Color.GREEN, etc.)
 *
 * Instead of T we could also take every other letter as well as terms.
 */
var ValueContainer = /** @class */ (function () {
    function ValueContainer(value) {
        this.value = value;
    }
    return ValueContainer;
}());
var Printable = /** @class */ (function () {
    function Printable() {
    }
    Printable.prototype.print = function () {
        (0, GlobalFunctions_1.println)("I am printable");
    };
    return Printable;
}());
var Color;
(function (Color) {
    Color[Color["GREEN"] = 0] = "GREEN";
    Color[Color["BLUE"] = 1] = "BLUE";
})(Color || (Color = {}));
var valueContainerString = new ValueContainer("String");
var valueContainerNumber = new ValueContainer(123);
var valueContainerReference = new ValueContainer(new Printable());
var valueContainerColor = new ValueContainer(Color.GREEN);
// Thanks to generics we exactly know 'value' is here a number so I can build a sum
// 'valueContainerString + 123' wouldn't work
var result = valueContainerNumber.value + 10;
(0, GlobalFunctions_1.println)(result);
// Thanks to generics we know 'value' is here a printable. So I can call function 'print'.
valueContainerReference.value.print();
//# sourceMappingURL=app.js.map