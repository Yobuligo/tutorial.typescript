// Tuples are like structures or records. They have a fix set of fields like a row in a table.
// Each field has a name.

type Tuple = [id: number, firstname: string, lastname: string];

const myTuple: Tuple = [1, "Stacey", "Starfish"];

// Tuples can be organized in lists
const myTuples: Tuple[] = [];
myTuples.push(myTuple);
myTuples.push([2, "Robin", "Rabbit"]);
