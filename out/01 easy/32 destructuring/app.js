"use strict";
// Destructuring means actually to extract elements from arrays or objects
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const myArray = [1, 2, 3];
const [one, , three] = myArray;
GlobalFunctions_1.println(one, three);
const myLeaf = { isLeaf: true, name: "My leaf name" };
const { isLeaf } = myLeaf;
// Destructured properties of objects can be aliased, e.g. when two properties have the same name
const myOakTree = { isLeaf: true, name: "Oak" };
const myPineTree = { isLeaf: false, name: "Pine" };
// declare aliases for names
const { name: oakName } = myOakTree;
const { name: pineName } = myPineTree;
console.log(`Now I can access ${oakName} and ${pineName}`);
//# sourceMappingURL=app.js.map