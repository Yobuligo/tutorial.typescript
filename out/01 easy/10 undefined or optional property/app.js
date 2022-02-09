"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * This class is responsible for keeping attributes of a person and printing them
 */
var Person = /** @class */ (function () {
    // define constructor with optional parameter 'nickname'
    function Person(firstname, lastname, nickname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.nickname = nickname;
    }
    return Person;
}());
/**
 * This class is responsible for printing attributes of a person
 */
var PersonPrinter = /** @class */ (function () {
    function PersonPrinter() {
    }
    PersonPrinter.prototype.print = function (person) {
        (0, GlobalFunctions_1.println)("Hello my name is ".concat(person.firstname, " ").concat(person.lastname, "."));
        // Check if the optional property 'nickname' was set
        if (person.nickname != null) {
            (0, GlobalFunctions_1.println)("My nickname is ".concat(person.nickname));
        }
    };
    return PersonPrinter;
}());
new PersonPrinter().print(new Person("Stacey", "Starfish"));
(0, GlobalFunctions_1.println)("");
new PersonPrinter().print(new Person("Stacey", "Starfish", "Fishy"));
//# sourceMappingURL=app.js.map