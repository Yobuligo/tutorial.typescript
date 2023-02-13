"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Class that represents a person object with properties firstname, lastname and a function to print the name
 * Use 'export' to have the ability to import the class in other files (see app.ts)
 */
var Person = /** @class */ (function () {
    function Person() {
        this.firstname = "";
        this.lastname = "";
    }
    // use ${attribute/function} to add the result to a string
    Person.prototype.printName = function () {
        (0, GlobalFunctions_1.println)("My name is ".concat(this.firstname, " ").concat(this.lastname, "."));
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map