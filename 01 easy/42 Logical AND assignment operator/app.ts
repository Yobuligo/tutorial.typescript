/**
 * The logical and assignment operator checks if the value on the left is truthy (which means when checking in an if condition, it would return true (e.g. if(1) would return true)),
 * in that case the right side value will be assigned to the variable of the left side.
 */

namespace LogicalAndAssignment {
  // This would print 123, as x was truthy before it was reassigned
  let x = 1;
  x &&= 123;
  console.log(x);

  // the long version would be
  if (x) {
    x = 123;
  }

  // As y is not truthy, the value 1234 wouldn't be assigned, so y stays 123
  let y = 0;
  y &&= 1234;
  console.log(y);

  // Other falsy values would be
  let emptyString = "";
  let undefinedValue = undefined;
  let nullValue = null;
}
