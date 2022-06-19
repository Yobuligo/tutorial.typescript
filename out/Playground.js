"use strict";
/**
 * Test your code here before moving it into a concrete chapter
 */
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("./GlobalFunctions");
class MyPerson {
    constructor() {
        this.firstname = "";
        this.age = 28;
        this.birthday = new Date("1987-11-17");
    }
}
const myPerson = new MyPerson();
myPerson.firstname = "Verena";
myPerson.birthday = new Date("1987-11-17");
myPerson[""];
const newType = myPerson;
(0, GlobalFunctions_1.println)(newType);
// const clone: Readonly<MyPerson> = myPerson
// clone.firstname = "Stacey"
// println(clone)
//# sourceMappingURL=Playground.js.map