"use strict";
// declare an unchangeable constants
var constantValue = "Thanks to const, I am a constant";
// constantValue = 341243 -> not possible
console.log(constantValue);
// declare a changeable variable of type string
var changeableValue;
changeableValue = "Thanks to let, I am changeable";
console.log(changeableValue);
changeableValue = "Now I am changed";
console.log(changeableValue);
// declares a number
var first = 5;
// declares a boolean
var checkCode = true;
// declares a bigint (stores integers greater than 2^53) onyl available since ES2020
// const salery: bigint = 123123123n
// declares a union type (a type that can have various types). Here the types string and number are possible
var value = "String Value";
value = 123;
// declares a literal type. A literal type is an own defined type which is represented as literal
// here variable 'literalValue' can only have one of the two values 'as-number' or 'as-text'.
// actually something like an enumeration
var literalValue = "as-number";
console.log(literalValue);
//# sourceMappingURL=app.js.map