"use strict";
// it is something like ?.let in Koltin or the ?: Elvis Operator?
// If an object is null or undefined than take an alternative
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const objectInstance = null;
const objectInstance2 = objectInstance ?  ? "234324" :  : ;
const person = {
    firstname: "Stacey",
    lastname: "Starfish",
};
// only access the identity card, if it was set
GlobalFunctions_1.println(person ? .identityCard.birthday : );
//# sourceMappingURL=app.js.map