"use strict";
// as there is no way to check if an object is an instance of a type
// it is possible to use instead the possibility to check, if an object has a specific attribute
// and you can do it like that
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
class Employee {
    constructor() {
        this.privileges = ["add", "delete"];
        this.firstname = "Stacey";
        this.lastname = "Starfish";
    }
}
class Admin {
    constructor() {
        this.privileges = ["add", "delete"];
    }
}
let something = new Employee();
if ("firstname" in something) {
    (0, GlobalFunctions_1.println)(something.firstname);
}
else {
    (0, GlobalFunctions_1.println)("Employee has no property firstname");
}
something = new Admin();
if ("firstname" in something) {
    (0, GlobalFunctions_1.println)(something.firstname);
}
else {
    (0, GlobalFunctions_1.println)("Admin has no property firstname");
}
//# sourceMappingURL=app.js.map