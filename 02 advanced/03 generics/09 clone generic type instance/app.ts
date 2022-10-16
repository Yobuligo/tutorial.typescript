import { println } from "../../../GlobalFunctions";

/**
 * Class that represents a person
 */
class Person {
  firstname: string;
  lastname: string;
}

/**
 * Class that is responsible for cloning source objects of a generic type
 */
class Cloner {
  clone<T>(source: T, type: new () => T): T {
    let target = new type();
    for (const property in source) {
      target[property] = source[property];
    }
    return target;
  }
}

/**
 * An even more easy approach is to use the simple object creation in TypeScript / JavaScript
 */
class ObjectCloner {
  clone<T>(source: T): T {
    return { ...source };
  }
}

// Create person and initialize properties
const person = new Person();
person.firstname = "Stacey";
person.lastname = "Starfish";

// Clone person
const newPerson = new Cloner().clone(person, Person);
println(`${person.firstname} ${person.lastname} was cloned.`);

const newPerson2 = new ObjectCloner().clone(person);
println(`${person.firstname} ${person.lastname} was cloned.`);
