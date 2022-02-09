"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
//use 'export' to have the ability to import the class in another file (like app.ts)
var Person = /** @class */ (function () {
    function Person() {
    }
    //add functions
    Person.prototype.printName = function () {
        console.log("My name is ".concat(this.firstname, " ").concat(this.lastname, "."));
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map