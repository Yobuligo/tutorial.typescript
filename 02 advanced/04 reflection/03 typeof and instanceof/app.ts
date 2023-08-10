/**
 * There are two concepts which can be used for reflection.
 * With the operator typeof it is possible to analyze if a variable is of a specific type.
 * With the operator instanceof it is possible to analyze if an object reference is of a specific class type.
 */

namespace TypeOfAndInstanceOf {
  class Person {
    firstname: string = "Stacey";
  }

  const analyzeValue = <T>(value: T) => {
    switch (typeof value) {
      case "string":
        return console.log("Is a string");
      case "number":
        return console.log("Is a number");
      case "boolean":
        return console.log("Is a boolean");
      case "object": {
        if (value instanceof Date) {
          return console.log("Is a date");
        }
        return console.log("Unknown object type");
      }
    }
  };

  analyzeValue("Hello World");
  analyzeValue(28);
  analyzeValue(true);
  analyzeValue(new Date());
  analyzeValue(new Person());
}
