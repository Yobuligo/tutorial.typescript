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
 * Class which is responsible for creating instance from a generics type
 */
var Factory = /** @class */ (function () {
    function Factory() {
    }
    Factory.prototype.create = function () {
        var type;
        return new type();
    };
    return Factory;
}());
var factory = new Factory();
var person = factory.create();
person.firstname = "Stacey";
person.lastname = "Starfish";
(0, GlobalFunctions_1.println)("".concat(person.firstname, " ").concat(person.lastname, " was created."));
//# sourceMappingURL=app.js.map