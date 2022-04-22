"use strict";
/**
 * Test your code here before moving it in a concrete chapter
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("./GlobalFunctions");
// Meta definition specific for [IHaveId].
// Instead of a class a const is used which could even have the same name like the interface
// the name is provided by default
// additional methods can be assigned by a static function implementation
var IHaveId = function () { };
IHaveId.is = function (object) {
    return "id" in object;
};
// Usage
var Test = /** @class */ (function () {
    function Test() {
        this.id = "12";
    }
    return Test;
}());
(0, GlobalFunctions_1.println)(IHaveId.name);
(0, GlobalFunctions_1.println)(IHaveId.is(new Test()));
//# sourceMappingURL=greenField.js.map