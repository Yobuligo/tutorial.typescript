"use strict";
// Destructuring means actually to extract elements from arrays or objects
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const myArray = [1, 2, 3];
const [one, , three] = myArray;
GlobalFunctions_1.println(one, three);
const myLeaf = { isLeaf: true, name: "My Name" };
const { isLeaf } = myLeaf;
//# sourceMappingURL=app.js.map