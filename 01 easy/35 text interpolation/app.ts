// Text interpolation can be used to embed variables into text.
// This works as follows

interface IObject {}

const var1 = "This is a variable";
const var2 = 123;
const var3: IObject = {};

console.log(`Here is the text for ${var1} and ${var2} and ${var3}`);
