import { println } from "../../../GlobalFunctions";

/**
 * Class that represents a person
 */
class Person {
  firstname: string;
  lastname: string;
}

/**
 * Class which is responsible for creating instance from a generics type
 */
class Factory {
  create<T>(): T {
    let type: new () => T;
    return new type();
  }
}

const factory = new Factory();
const person = factory.create<Person>();
person.firstname = "Stacey";
person.lastname = "Starfish";
println(`${person.firstname} ${person.lastname} was created.`);
