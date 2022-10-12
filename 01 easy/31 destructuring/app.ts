// Destructuring means actually to extract elements from arrays or objects

import { println } from "../../GlobalFunctions";

const myArray = [1, 2, 3];
const [one, , three] = myArray;
println(one, three);

const myLeaf = { isLeaf: true, name: "My Name" };
const { isLeaf } = myLeaf;
