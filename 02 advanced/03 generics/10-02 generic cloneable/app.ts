import { println } from "../../../GlobalFunctions";

/**
 * To use the cloneable which is described in lesson 10-01 cloneable, means that the clone function has to be redefined for each class.
 * This means method *clone* has to be implemented on Person.
 * If Teacher extends Person, Teacher has to redefine method *clone*, as otherwise clone will return an instance of Person.
 * This problem can be solved as follows
 */
namespace GenericCloneable {
  interface ICloneable {
    clone(): this;
  }

  /**
   * The Cloner is responsible for creating a new object by handing over its constructor
   */
  class Cloner {
    clone<T>(type: new () => T) {
      return new type();
    }
  }

  /**
   * Person implements ICloneable.
   * To provide a generic implementation which really creates a clone of the current class and not only Person but also of the extended classes,
   * the class Cloner is used. In that class the constructor of the current instance type (Person or each extended class, like Teacher) has to be handed over to *Cloner*.
   */
  class Person implements ICloneable {
    firstname = "Stacey";

    clone(): this {
      return new Cloner().clone((this as any).constructor);
    }
  }

  class Teacher extends Person {
    subject = "Math";
  }

  println(new Person().clone().firstname);
  println(new Teacher().clone().subject);
}
