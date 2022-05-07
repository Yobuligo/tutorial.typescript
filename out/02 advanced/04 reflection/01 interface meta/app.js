"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IHaveId = void 0;
var GlobalFunctions_1 = require("../../../GlobalFunctions");
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
var Test = /** @class */ (function () {
    function Test() {
        this.id = "12";
    }
    return Test;
}());
(0, GlobalFunctions_1.println)(exports.IHaveId.name);
(0, GlobalFunctions_1.println)(exports.IHaveId.is(new Test()));
//# sourceMappingURL=app.js.map