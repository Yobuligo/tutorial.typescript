"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * Class that represents a person
 */
class Person {
}
/**
 * Class which is responsible for creating instance from a generics type
 */
class Factory {
    create() {
        let type;
        return new type();
    }
}
/**
 * An even more easy approach is to use the simple object creation in TypeScript / JavaScript
 */
class ObjectFactory {
    create() {
        return {};
    }
}
const factory = new Factory();
const person = factory.create();
person.firstname = "Stacey";
person.lastname = "Starfish";
GlobalFunctions_1.println(`${person.firstname} ${person.lastname} was created.`);
const person2 = new ObjectFactory().create();
person.firstname = "Stacey";
person.lastname = "Starfish";
GlobalFunctions_1.println(`${person.firstname} ${person.lastname} was created.`);
//# sourceMappingURL=app.js.map