"use strict";
// it is something like ?.let in Koltin or the ?: Elvis Operator?
// If an object is null or undefined than take an alternative
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caller = void 0;
const GlobalFunctions_1 = require("../../GlobalFunctions");
class Caller {
    callMe() {
        console.log(`The Caller was called`);
    }
}
exports.Caller = Caller;
const objectInstance = null;
const objectInstance2 = objectInstance !== null && objectInstance !== void 0 ? objectInstance : "234324";
const getValue = (value) => {
    return value;
};
const raiseError = (message) => {
    throw new Error(message);
};
// Elvis Operator ??
try {
    // Elvis operator && check if getValue returns a value, otherwise raise an exception.
    const value = (_a = getValue()) !== null && _a !== void 0 ? _a : raiseError("Value is undefined");
    console.log(`Value is ${value}`);
}
catch (e) {
    console.log(e);
}
try {
    // Elvis operator && check if getValue returns a value, otherwise raise an exception.
    const value = (_b = getValue("value")) !== null && _b !== void 0 ? _b : raiseError("Value is undefined");
    console.log(`Value is ${value}`);
}
catch (e) {
    console.log(e);
}
// Use ?. to only call a method if the calling reference is neither null not undefined
let value = getValue();
value === null || value === void 0 ? void 0 : value.callMe();
value = getValue(new Caller());
value === null || value === void 0 ? void 0 : value.callMe();
const person = {
    firstname: "Stacey",
    lastname: "Starfish",
};
// only access the identity card, if it was set
(0, GlobalFunctions_1.println)(person === null || person === void 0 ? void 0 : person.identityCard.birthday);
// only call method if it is not undefined
person.onEvent();
//# sourceMappingURL=app.js.map