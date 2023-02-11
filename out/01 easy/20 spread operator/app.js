"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
// Also see examples on https://plusreturn.com/blog/6-awesome-tricks-with-the-spread-and-rest-operators-in-typescript-and-javascript-objects/
// Copy all values from one array in another
let values = ["one", "two", "three"];
let values2 = [...values];
GlobalFunctions_1.println(values2);
// provides the possibility to hand over elements as varargs to e.g. a constructor
class List {
    constructor(...elements) {
        this.elements = [];
        this.elements = elements;
    }
    printList() {
        GlobalFunctions_1.println(this.elements);
    }
}
// hand over single value
let list = new List(1);
list.printList();
// hand over several single values
list = new List(1, 2, 3, 4, 5);
list.printList();
// hand over an array to a spread operator which was defined before
const elements = [11, 12, 13, 14, 15];
list = new List(...elements);
list.printList();
// hand over an array to a spread operator
list = new List(...[11, 12, 13, 14, 15]);
list.printList();
// the spread operator can also be used for objects to take over all properties of an object
// 'mySecondPerson takes of all properties of 'myFirstPerson' and adds the property age
const myFirstPerson = {
    firstname: "Peter",
    lastname: "Hoffmann",
};
const mySecondPerson = Object.assign({}, myFirstPerson, { age: 28 });
// So the spread operator can be used to clone / copy objects
const myThirdPerson = Object.assign({}, myFirstPerson);
// It is even possible to copy several objects into one.
// Here a new object 'myFourthPerson' is initialized with the properties of 'myFirstPerson' and 'cat'
// In case the objects would have the same properties, the last would win. This means if cat also had a prop 'firstname', its value would win.
const cat = {
    name: "Kitty",
    age: 3,
};
const myFourthPerson = Object.assign({}, myFirstPerson, cat);
// Resetting properties while copying. Here a copy of 'myFirstPerson' is created but the firstname is directly reset to 'Changed Firstname'
const myFifthPerson = Object.assign({}, myFirstPerson, { firstname: "Changed Firstname" });
// Adding new properties. Here a copy of 'myFirstPerson' is created which gets a new property 'age'
const mySixthPerson = Object.assign({}, myFirstPerson, { age: 28 });
console.log(mySixthPerson.age);
//# sourceMappingURL=app.js.map