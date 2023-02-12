"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./../../../01 easy/06 my first class/Person");
/**
 * The typeOf operator can be used to get a string with the type of an object.
 * Possible values are undefined, null = object, valid Object = object, boolean, number, bigint, string, symbol, function
 */
var printValueType = function (value) {
    console.log(typeof value);
};
// "That must be a string"
printValueType("");
// and that a number
printValueType(123);
// and here an object
var personInstance = new Person_1.Person();
printValueType(personInstance);
//# sourceMappingURL=app.js.map