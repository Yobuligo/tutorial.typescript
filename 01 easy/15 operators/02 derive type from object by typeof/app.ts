/**
 * typeof can even be used to derive types from an object
 */

namespace DeriveTypeFromObjectByTypeOf {
  class Person {
    age = 28;
    firstname = "Stacey";
  }

  function createObject<R>(object: R): R {
    return object;
  }

  const instance = createObject({
    test: new Person(),
    otherProp: 123,
  });

  type NewType = typeof instance;

  /**
   * NewType has now 2 properties
   *    1. test: Person
   *    2. otherProp: Number
   */
  const newType: NewType = {} as NewType
  console.log(newType.otherProp)
  console.log(newType.test.age)
}
