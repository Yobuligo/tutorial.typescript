"use strict";
// it is something like ?.let in Koltin or the ?: Elvis Operator?
// If an object is null or undefined than take an alternative
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const objectInstance = null;
const objectInstance2 = objectInstance !== null && objectInstance !== void 0 ? objectInstance : "234324";
function getResult() {
    return { data: {} };
}
const sum = (_b = (_a = getResult().data.row) === null || _a === void 0 ? void 0 : _a.result) !== null && _b !== void 0 ? _b : +123;
const person = {
    firstname: "Stacey",
    lastname: "Starfish",
};
// only access the identity card, if it was set
(0, GlobalFunctions_1.println)(person === null || person === void 0 ? void 0 : person.identityCard.birthday);
// only call method if it is not undefined
person.onEvent();
//# sourceMappingURL=app.js.map