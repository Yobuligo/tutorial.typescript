"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
// declare a variable 'person' and provide the attributes 'firstname', 'lastname' and cast it by '<IPerson>' to the type 'IPerson'.
let person = {
    firstname: "Stacey",
    lastname: "Starfish",
};
(0, GlobalFunctions_1.println)(`Hey this is ${person.firstname} ${person.lastname}`);
// Cast a string to a number
const myNumber = Number("123");
(0, GlobalFunctions_1.println)(myNumber);
//# sourceMappingURL=app.js.map