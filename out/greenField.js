"use strict";
/**
 * Test your code here before moving it into a concrete chapter
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("./GlobalFunctions");
function getPropOfObject(object, key) {
    return object[key];
}
var person123 = { name: "Stacey", age: 32 };
var project = { name: "", title: "", description: "" };
(0, GlobalFunctions_1.println)(getPropOfObject(person123, "name123"));
//# sourceMappingURL=greenField.js.map