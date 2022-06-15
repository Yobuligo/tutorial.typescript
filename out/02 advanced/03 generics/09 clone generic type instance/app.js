"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * Class that represents a person
 */
class Person {
}
/**
 * Class that is responsible for cloning source objects of a generic type
 */
class Cloner {
    clone(source, type) {
        let target = new type();
        for (const property in source) {
            target[property] = source[property];
        }
        return target;
    }
}
// Create person and initialize properties
const person = new Person();
person.firstname = "Stacey";
person.lastname = "Starfish";
// Clone person
const newPerson = new Cloner().clone(person, Person);
(0, GlobalFunctions_1.println)(`${person.firstname} ${person.lastname} was cloned.`);
//# sourceMappingURL=app.js.map