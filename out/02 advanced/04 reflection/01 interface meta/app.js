"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../../GlobalFunctions");
// Meta definition specific for [IHaveId].
// Instead of a class a const is used for providing reflection info,
// which could even have the same name like the interface
// name: the name is provided by default from typescript
// is: additional methods can be assigned by a static function implementation
exports.IHaveId = function () { };
exports.IHaveId.is = function (object) {
    return "id" in object;
};
// Usage
class Test {
    constructor() {
        this.id = "12";
    }
}
GlobalFunctions_1.println(exports.IHaveId.name);
GlobalFunctions_1.println(exports.IHaveId.is(new Test()));
//# sourceMappingURL=app.js.map