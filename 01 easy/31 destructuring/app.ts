// Destructuring means actually to extract elements from arrays or objects

import { println } from "../../GlobalFunctions";

const myArray = [1, 2, 3];
const [one, , three] = myArray;
println(one, three);

const myLeaf = { isLeaf: true, name: "My leaf name" };
const { isLeaf } = myLeaf;

// Destructured properties of objects can be aliased, e.g. when two properties have the same name
const myOakTree = { isLeaf: true, name: "Oak" };
const myPineTree = { isLeaf: false, name: "Pine" };
// aliases for names
const { name: oakName } = myOakTree;
const { name: pineName } = myPineTree;
