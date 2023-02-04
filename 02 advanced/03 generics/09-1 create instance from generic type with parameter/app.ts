/**
 * Next to creating instances by an empty constructor it is also possible to create instances by generic with parameters.
 */

class ObjectFactory {
  /**
   * The create method takes the parameter type, which can be used to create instances of a class
   * Here the creation needs the two constructor parameters firstname and lastname
   */
  create<T>(
    type: new (firstname: string, lastname: string) => T,
    firstname: string,
    lastname: string
  ): T {
    return new type(firstname, lastname);
  }
}

class SpecialPerson {
  constructor(public firstname: string, public lastname: string) {}
}

const objectFactory = new ObjectFactory();
const specialPerson = objectFactory.create(SpecialPerson, "Stacey", "Starfish");
console.log(
  `created person was ${specialPerson.firstname} ${specialPerson.lastname}`
);

/**
 * The following example shows how to provide a generic approach to create object instances with a various amount of parameters
 */
class GenericObjectFactory {
  create<T>(type: new (...[]) => T, params?: any) {
    return new type(...params);
  }
}

const genericObjectFactory = new GenericObjectFactory();
const specialPerson2 = genericObjectFactory.create(SpecialPerson, [
  "Stacey",
  "Starfish",
]);
console.log(
  `created person was ${specialPerson.firstname} ${specialPerson.lastname}`
);
