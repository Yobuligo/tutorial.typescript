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

/**
 * An even more easy approach is to use the simple object creation in TypeScript / JavaScript
 */
class ObjectFactory {
  create<T>(): T {
    return {} as T;
  }
}

const factory = new Factory();
const person = factory.create<Person>();
person.firstname = "Stacey";
person.lastname = "Starfish";
println(`${person.firstname} ${person.lastname} was created.`);

const person2 = new ObjectFactory().create<Person>();
person.firstname = "Stacey";
person.lastname = "Starfish";
println(`${person.firstname} ${person.lastname} was created.`);
