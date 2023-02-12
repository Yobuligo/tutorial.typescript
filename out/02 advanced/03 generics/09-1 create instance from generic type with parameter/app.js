"use strict";
/**
 * Next to creating instances by an empty constructor it is also possible to create instances by generic with parameters.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ObjectFactory = /** @class */ (function () {
    function ObjectFactory() {
    }
    /**
     * The create method takes the parameter type, which can be used to create instances of a class
     * Here the creation needs the two constructor parameters firstname and lastname
     */
    ObjectFactory.prototype.create = function (type, firstname, lastname) {
        return new type(firstname, lastname);
    };
    return ObjectFactory;
}());
var SpecialPerson = /** @class */ (function () {
    function SpecialPerson(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return SpecialPerson;
}());
var objectFactory = new ObjectFactory();
var specialPerson = objectFactory.create(SpecialPerson, "Stacey", "Starfish");
console.log("created person was ".concat(specialPerson.firstname, " ").concat(specialPerson.lastname));
/**
 * The following example shows how to provide a generic approach to create object instances with a various amount of parameters
 */
var GenericObjectFactory = /** @class */ (function () {
    function GenericObjectFactory() {
    }
    GenericObjectFactory.prototype.create = function (type, params) {
        return new (type.bind.apply(type, __spreadArray([void 0], params, false)))();
    };
    return GenericObjectFactory;
}());
var genericObjectFactory = new GenericObjectFactory();
var specialPerson2 = genericObjectFactory.create(SpecialPerson, [
    "Stacey",
    "Starfish",
]);
console.log("created person was ".concat(specialPerson.firstname, " ").concat(specialPerson.lastname));
//# sourceMappingURL=app.js.map