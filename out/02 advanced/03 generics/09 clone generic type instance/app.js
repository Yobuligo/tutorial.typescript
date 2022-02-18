"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../../GlobalFunctions");
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Cloner = /** @class */ (function () {
    function Cloner() {
    }
    Cloner.prototype.clone = function (source, type) {
        var target = new type();
        for (var property in source) {
            target[property] = source[property];
        }
        return target;
    };
    return Cloner;
}());
var person = new Person();
person.firstname = "Stacey";
person.lastname = "Starfish";
var newPerson = new Cloner().clone(person, Person);
(0, GlobalFunctions_1.println)("".concat(person.firstname, " ").concat(person.lastname, " was cloned."));
//# sourceMappingURL=app.js.map