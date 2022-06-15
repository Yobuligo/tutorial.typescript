// declare an unchangeable constants
const constantValue = "Thanks to const, I am a constant";
// constantValue = 341243 -> not possible
console.log(constantValue);
// declare a changeable variable of type string
let changeableValue;
changeableValue = "Thanks to let, I am changeable";
console.log(changeableValue);
changeableValue = "Now I am changed";
console.log(changeableValue);
// declares a number
const first = 5;
// declares a boolean
const checkCode = true;
// declares a union type (a type that can have various types). Here the types string and number are possible
let value = "String Value";
value = 123;
// declares a literal type. A literal type is an own defined type which is represented as literal
// here variable 'literalValue' can only have one of the two values 'as-number' or 'as-text'.
// actually something like an enumeration
let literalValue = "as-number";
console.log(literalValue);
//# sourceMappingURL=app.js.map