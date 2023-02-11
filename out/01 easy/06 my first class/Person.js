"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Class that represents a person object with properties firstname, lastname and a function to print the name
 * Use 'export' to have the ability to import the class in other files (see app.ts)
 */
class Person {
    // use ${attribute/function} to add the result to a string
    printName() {
        GlobalFunctions_1.println(`My name is ${this.firstname} ${this.lastname}.`);
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map