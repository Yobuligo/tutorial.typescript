namespace Playground {
  interface ICloneable {
    clone(): this;
  }

  abstract class Entity implements ICloneable {
    clone(): this {
      return { ...this };
    }
  }

  class Person extends Entity {
    firstname: string = "Stacey";
    age = 28;
    lastname = "";
  }

  const person = new Person();
  person.lastname = "Starfish";
  const newPerson = person.clone();
  newPerson.lastname = "Ant";

  debugger;
}
