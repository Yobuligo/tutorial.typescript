/**
 * In some cases it is required to not only provide an instance of a specific type, but the type itself should be a specific class type.
 * This can be achieved by using typeof <type>. As alternative 'new () => <type>' can be used as well
 */

namespace typeOfInClasses {
  interface IPerson {
    firstname: string;
  }

  class Person implements IPerson {
    firstname: string = "Stacey";
  }

  class Teacher extends Person {
    subject: string[] = ["English", "Psychology"];
  }

  class Factory {}

  /**
   * Here the typeof operator is used to specify that only types of type 'Person' can be added.
   * But it is possible to inject the type 'Person' itself or even all subtypes of 'Person'.
   *
   * Attention: It is not possible to use an interface type or Type in connection with typeof
   * So (type: typeof IPerson) would result in a syntax error.
   */
  function createInstance(type: typeof Person): Person {
    return new type();
  }

  // create a person
  const person = createInstance(Person);

  // create a teacher, even so variable 'teacher' would be of type 'Person' it is an instance of 'Teacher'
  const teacher = createInstance(Teacher);

  // create a factory doesn't work, as 'Factory' is no subtype of 'Person'
  //   const factory = createInstance(Factory);
}
