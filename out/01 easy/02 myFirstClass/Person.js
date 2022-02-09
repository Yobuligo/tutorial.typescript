"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.printName = function () {
        console.log("My name is ".concat(this.firstname, " ").concat(this.lastname, "."));
    };
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map