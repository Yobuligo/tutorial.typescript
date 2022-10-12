"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * This class is responsible for keeping attributes of a person and printing them
 */
class Person {
    // define constructor with optional parameter 'nickname'
    constructor(firstname, lastname, nickname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.nickname = nickname;
    }
}
/**
 * This class is responsible for printing attributes of a person
 */
class PersonPrinter {
    print(person) {
        GlobalFunctions_1.println(`Hello my name is ${person.firstname} ${person.lastname}.`);
        // Check if the optional property 'nickname' was set
        if (person.nickname != null) {
            GlobalFunctions_1.println(`My nickname is ${person.nickname}`);
        }
    }
}
new PersonPrinter().print(new Person("Stacey", "Starfish"));
GlobalFunctions_1.newLine();
new PersonPrinter().print(new Person("Stacey", "Starfish", "Fishy"));
//# sourceMappingURL=app.js.map