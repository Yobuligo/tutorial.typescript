"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
/**
 * Class that represents a person.
 * The properties and functions are provided via interface 'IPerson'
 * Use 'export' to have the ability to import the class in other files (see app.ts)
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.print = function () {
        console.log("My name is ".concat(this.firstname, " ").concat(this.lastname, "."));
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map