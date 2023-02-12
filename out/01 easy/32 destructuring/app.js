"use strict";
// Destructuring means actually to extract elements from arrays or objects
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var myArray = [1, 2, 3];
var one = myArray[0], three = myArray[2];
(0, GlobalFunctions_1.println)(one, three);
var myLeaf = { isLeaf: true, name: "My leaf name" };
var isLeaf = myLeaf.isLeaf;
// Destructured properties of objects can be aliased, e.g. when two properties have the same name
var myOakTree = { isLeaf: true, name: "Oak" };
var myPineTree = { isLeaf: false, name: "Pine" };
// declare aliases for names
var oakName = myOakTree.name;
var pineName = myPineTree.name;
console.log("Now I can access ".concat(oakName, " and ").concat(pineName));
//# sourceMappingURL=app.js.map