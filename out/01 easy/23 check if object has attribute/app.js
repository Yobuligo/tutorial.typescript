"use strict";
// as there is no way to check if an object is an instance of a type
// it is possible to use instead the possibility to check, if an object has a specific attribute
// and you can do it like that
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Employee = /** @class */ (function () {
    function Employee() {
        this.privileges = ["add", "delete"];
        this.firstname = "Stacey";
        this.lastname = "Starfish";
    }
    return Employee;
}());
var Admin = /** @class */ (function () {
    function Admin() {
        this.privileges = ["add", "delete"];
    }
    return Admin;
}());
var something = new Employee();
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