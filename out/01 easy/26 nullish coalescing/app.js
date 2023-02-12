"use strict";
/**
 * The nullish coalescing (??) operator is a logical operator that
 * returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
 *
 * It is something like ?.let in Kotlin or the ?: Elvis Operator?. In TypeScript it is called 'Optional Chaining'.
 * With the Elvis Operator ?? it is possible to execute code in case a condition / a method returns a null or undefined
 */
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caller = void 0;
var Caller = /** @class */ (function () {
    function Caller() {
    }
    Caller.prototype.callMe = function () {
        console.log("The Caller was called");
    };
    return Caller;
}());
exports.Caller = Caller;
var getValue = function (value) {
    return value;
};
var raiseError = function (message) {
    throw new Error(message);
};
// Elvis Operator ??
try {
    // Elvis operator && check if getValue returns a value, otherwise raise an exception.
    var value_1 = (_a = getValue()) !== null && _a !== void 0 ? _a : raiseError("Value is undefined");
    console.log("Value is ".concat(value_1));
}
catch (e) {
    console.log(e);
}
try {
    // Elvis operator && check if getValue returns a value, otherwise raise an exception.
    var value_2 = (_b = getValue("value")) !== null && _b !== void 0 ? _b : raiseError("Value is undefined");
    console.log("Value is ".concat(value_2));
}
catch (e) {
    console.log(e);
}
// Optional Chaining
// Use ?. to only call a method if the calling reference is neither null not undefined
var value = getValue();
value === null || value === void 0 ? void 0 : value.callMe();
// In that case method callMe is called as an instance for Caller is provided
value = getValue(new Caller());
value === null || value === void 0 ? void 0 : value.callMe();
// Use !. to force the call if you know that the reference is not null or undefined. Shouldn't be used, as conditions can change
value = getValue();
value.callMe();
//# sourceMappingURL=app.js.map