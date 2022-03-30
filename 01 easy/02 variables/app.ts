// declare an unchangeable constants
const constantValue: string = "Thanks to const, I am a constant";

// constantValue = 341243 -> not possible
console.log(constantValue);

// declare a changeable variable of type string
let changeableValue: string;
changeableValue = "Thanks to let, I am changeable";
console.log(changeableValue);
changeableValue = "Now I am changed";
console.log(changeableValue);

// declares a number
const first: number = 5;

// declares a boolean
const checkCode: boolean = true;

// declares a union type (a type that can have various types). Here the types string and number are possible
let value: string | number = "String Value";
value = 123;

// declares a literal type. A literal type is an own defined type which is represented as literal
// here variable 'literalValue' can only have one of the two values 'as-number' or 'as-text'.
// actually something like an enumeration
let literalValue: "as-number" | "as-text" = "as-number";
console.log(literalValue);
