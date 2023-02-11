"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
// declare a variable 'person' and provide the attributes 'firstname', 'lastname' and cast it by '<IPerson>' to the type 'IPerson'.
let person = {
    firstname: "Stacey",
    lastname: "Starfish",
};
// An alternative is to use the keyword for assertion "as"
let person2 = { firstname: "Bertha", lastname: "Bear" };
GlobalFunctions_1.println(`Hey this is ${person.firstname} ${person.lastname}`);
GlobalFunctions_1.println(`Hey this is ${person2.firstname} ${person2.lastname}`);
// Cast a string to a number
const myNumber = Number("123");
GlobalFunctions_1.println(myNumber);
//# sourceMappingURL=app.js.map