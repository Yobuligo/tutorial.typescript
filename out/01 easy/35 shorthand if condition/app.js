"use strict";
/**
 * In TypeScript there is a shorthand if condition.
 * In some cases it make the code shorter without to lose readability.
 */
var number1 = 123;
var number2 = 123;
// if number1 === number2 return number1 else 12345
var numberResult = number1 === number2 ? number1 : 12345;
console.log("Result is ".concat(numberResult));
// if number1 !== number2 return number1 else 12345
numberResult = number1 !== number2 ? number1 : 12345;
console.log("Result is ".concat(numberResult));
// shorter
var bool = false;
numberResult = bool ? 12345 : 54321;
console.log("Result is ".concat(numberResult));
//# sourceMappingURL=app.js.map