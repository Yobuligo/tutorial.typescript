import { println } from "../../../GlobalFunctions";

/**
 * Class that represents a person
 */
class Person {
  firstname: string = "";
  lastname: string = "";
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

// Create person and initialize properties
const person = new Person();
person.firstname = "Stacey";
person.lastname = "Starfish";

// Clone person
const newPerson = new Cloner().clone(person, Person);
println(`${person.firstname} ${person.lastname} was cloned.`);

/**
 * A newer implementation in comparison to *Cloner*.
 * There is no need to inject the constructor. Instead the constructor is read from the source.
 */
class Cloner2 {
  clone<T>(source: T): T {
    const target = new (source as any).constructor();
    for (const prop in source) {
      target[prop] = source[prop];
    }
    return target;
  }
}

const personClone = new Cloner2().clone(person);
println(`${person.firstname} ${person.lastname} was cloned.`);
