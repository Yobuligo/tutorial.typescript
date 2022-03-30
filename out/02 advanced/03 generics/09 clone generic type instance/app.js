"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * Class that represents a person
 */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
/**
 * Class that is responsible for cloning source objects of a generic type
 */
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
// Create person and initialize properties
var person = new Person();
person.firstname = "Stacey";
person.lastname = "Starfish";
// Clone person
var newPerson = new Cloner().clone(person, Person);
(0, GlobalFunctions_1.println)("".concat(person.firstname, " ").concat(person.lastname, " was cloned."));
//# sourceMappingURL=app.js.map