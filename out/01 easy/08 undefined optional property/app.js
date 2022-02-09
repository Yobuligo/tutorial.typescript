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
        console.log("Hello my name is ".concat(person.firstname, " ").concat(person.lastname, "."));
        // Check if the optional property 'nickname' was set
        if (person.nickname != null) {
            console.log("My nickname is ".concat(person.nickname));
        }
    };
    return PersonPrinter;
}());
new PersonPrinter().print(new Person("Stacey", "Starfish"));
console.log("");
new PersonPrinter().print(new Person("Stacey", "Starfish", "Fishy"));
//# sourceMappingURL=app.js.map