/**
 * In TypeScript there is a short notation for the if condition.
 * It is realized via the ternary operator () ? : -> condition then else
 * In some cases it make the code shorter without to lose readability.
 */

const number1: number = 123;
const number2: number = 123;

// if number1 === number2 return number1 else 12345
let numberResult = number1 === number2 ? number1 : 12345;
console.log(`Result is ${numberResult}`);

// if number1 !== number2 return number1 else 12345
numberResult = number1 !== number2 ? number1 : 12345;
console.log(`Result is ${numberResult}`);

// shorter
const bool = false;
numberResult = bool ? 12345 : 54321;
console.log(`Result is ${numberResult}`);
