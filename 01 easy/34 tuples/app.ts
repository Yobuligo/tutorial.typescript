/**
 * Tuples are like structures or records. They have a fix set of fields like a row in a table.
 * Each field has a name.
 * 
 * A alternative to tuples is to use objects. The different is, that for tuples you have to use [] and for objects {}.
 * In addition for tuples you, from my point of view there is no way of destructuring to extract only specific parameters.
 */

type Tuple = [id: number, firstname: string, lastname: string];

const myTuple: Tuple = [1, "Stacey", "Starfish"];

// Tuples can be organized in lists
const myTuples: Tuple[] = [];
myTuples.push(myTuple);
myTuples.push([2, "Robin", "Rabbit"]);
