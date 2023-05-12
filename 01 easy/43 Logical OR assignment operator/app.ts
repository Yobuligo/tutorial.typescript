/**
 * The logical OR assignment operator checks if the value on the left is falsy (which means when checking in an if condition, it would return false (e.g. if(undefined) would return false)),
 * in that case the right side value will be assigned to the variable of the left side.
 */

namespace LogicalAndAssignment {
  // This would print 123, as x was falsy before and therefore it was reassigned with 123
  let x = 0;
  x ||= 123;
  console.log(x);

  // the long version would be
  if (!x) {
    x = 123;
  }

  // As y is not falsy, the value 1234 wouldn't be assigned, so y stays 123
  let y = 123;
  y ||= 1234;
  console.log(y);

  // Falsy values are
  let zeroNumber = 0;
  let emptyString = "";
  let undefinedValue = undefined;
  let nullValue = null;
}
