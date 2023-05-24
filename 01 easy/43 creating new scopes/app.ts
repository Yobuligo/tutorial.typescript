/**
 * In TypeScript you can have various scopes of code.
 * A scope means that you have a set of own variables. E.g. in a two separates methods you can declare a variable firstname.
 * In TypeScript scopes are everywhere. E.g. in switch-case statements you can have own variables for each case.
 * In addition you can define a scope wherever you want
 * Each scope is defined between {}
 */

namespace Scopes {
  const value: number = 123;
  switch (value) {
    case 1: {
      // I can declare a separate variable "value", as the case statement has an own scope.
      const value = "Test";
    }
  }

  // Here a separate scope it declared which is not even a function, case statement, loop, etc.
  // This is just an example to understand how scopes are defined, to understand that each {} is a separate scope
  {
    const value = "Another value";
  }
}
