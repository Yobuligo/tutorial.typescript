"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
// declare a variable 'person' and provide the attributes 'firstname', 'lastname' and cast it by '<IPerson>' to the type 'IPerson'.
var person = {
    firstname: "Stacey",
    lastname: "Starfish",
};
// An alternative is to use the keyword for assertion "as"
var person2 = { firstname: "Bertha", lastname: "Bear" };
(0, GlobalFunctions_1.println)("Hey this is ".concat(person.firstname, " ").concat(person.lastname));
(0, GlobalFunctions_1.println)("Hey this is ".concat(person2.firstname, " ").concat(person2.lastname));
// Cast a string to a number
var myNumber = Number("123");
(0, GlobalFunctions_1.println)(myNumber);
//# sourceMappingURL=app.js.map