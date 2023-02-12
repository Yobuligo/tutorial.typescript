"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
// creates an object with the properties 'firstname', 'age' and a function 'print'. Finally it is directly assigned to variable person.
// 'person' extends class 'object'
var person = {
    firstname: "Stacey",
    age: 20,
    print: function () {
        (0, GlobalFunctions_1.println)("My name is ".concat(this.firstname, ". I am ").concat(this.age, " years old."));
    },
};
// calls function 'print' on the variable
person.print();
//# sourceMappingURL=app.js.map