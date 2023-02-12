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
/**
 * An even more easy approach is to use the simple object creation in TypeScript / JavaScript
 */
var ObjectFactory = /** @class */ (function () {
    function ObjectFactory() {
    }
    ObjectFactory.prototype.create = function () {
        return {};
    };
    return ObjectFactory;
}());
var factory = new Factory();
var person = factory.create();
person.firstname = "Stacey";
person.lastname = "Starfish";
(0, GlobalFunctions_1.println)("".concat(person.firstname, " ").concat(person.lastname, " was created."));
var person2 = new ObjectFactory().create();
person.firstname = "Stacey";
person.lastname = "Starfish";
(0, GlobalFunctions_1.println)("".concat(person.firstname, " ").concat(person.lastname, " was created."));
//# sourceMappingURL=app.js.map