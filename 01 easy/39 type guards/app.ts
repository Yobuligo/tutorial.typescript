/**
 * As it is not possible to check against an interface type, as it only exists at design time but not at runtime, there is a expression type guard.
 * An object can be checked if it is of a specific type.
 * See also "09 Check is instance of interface"
 *
 * In the example there is simple interface {@link IHaveId} with an attribute id of type string.
 * The idea behind type guards is to claim that an object has a specific type if it has a specific property constellation.
 * So to claim an object is of type {@link IHaveId}. I have to check if that object has attribute id of type string.
 */

namespace TypeGuard {
  interface IHaveId {
    id: string;
  }

  /**
   * Here type guard comes into play. If this function returns true this means that value is of type {@link IHaveId}.
   */
  const isIHaveId = (instance: object): instance is IHaveId => {
    const prop = "id" in instance;
    return "id" in instance && typeof instance.id === "string";
  };

  /**
   * This functions checks an object if it is of type {@link IHaveId}. In that case I can access type safe the property id.
   */
  const printId = (instance: object) => {
    if (isIHaveId(instance)) {
      console.log(instance.id);
    }
  };

  class Person {
    firstname = "Stacey";
    lastname = "Starfish";
  }

  class Teacher implements IHaveId {
    id: string = "Teacher";
  }

  const person = new Person();
  const teacher = new Teacher();

  printId(person);
  printId(teacher);
}
