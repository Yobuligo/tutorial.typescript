"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
class User {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}
let user = new User("Stacey", "Starfish", 30);
let copy = Object.assign({}, user);
(0, GlobalFunctions_1.println)(copy);
//# sourceMappingURL=app.js.map