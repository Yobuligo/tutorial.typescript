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
const factory = new Factory();
const person = factory.create();
person.firstname = "Stacey";
person.lastname = "Starfish";
GlobalFunctions_1.println(`${person.firstname} ${person.lastname} was created.`);
//# sourceMappingURL=app.js.map