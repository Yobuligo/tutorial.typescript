/**
 * Test your code here before moving it into a concrete chapter
 */

import { println } from "./GlobalFunctions";

function getPropOfObject<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

const person123 = { name: "Stacey", age: 32 };
const project = { name: "", title: "", description: "" };
println(getPropOfObject(person123, "name"));
