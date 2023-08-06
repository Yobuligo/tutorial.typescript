/**
 * The following example shows how more or less real companion objects, in comparison to Kotlin, can be implemented.
 * What are the requirements?
 *      1. I want to have a separate companion object that provides functionality. Another class T should be extended by the function of the companion object. But these functions should be static, so available for all instances of T
 *      2. Each class that is extended by this companion object, should have its own instance of the companion object.
 *      3. The class T shouldn't lose its extensibility.
 *
 * This can be achieved by Mixin. Mixin is a way to create new types in TypeScript by other types.
 * In addition it is possible to call a function when declaring the "extends class" while this function returns a class type.
 * Third, in TypeScript it is possible to provide functions that can take a parameter which can be used for extending a class
 *
 * Achieved with Mixins (https://www.typescriptlang.org/docs/handbook/mixins.html)
 */

namespace CompanionObject {
  /**
   * Provide a generic constructor type, that can have arguments
   */
  type GenericConstructor = new (...args: any[]) => {};
  type Constructor<T> = new (...args: any[]) => T;

  /**
   * Implement a function that returns a class. This class can be extended by a type that is injected into that function.
   * This class represents the companion object which contains all new methods that should extend another function.
   * So this companion object is actually extended dynamically by a various type {@link TBase}. So the companion object can be reused for certain classes.
   * The companion object is some kind of middle class between the concrete class and the class the normal class should be extended by.
   * E.g. Animal should be extended by Creature. But Animal should also get a companion object that contains methods to persist and load instances.
   */
  function CompanionEntity<TBase extends GenericConstructor>(Base: TBase) {
    return class Entity extends Base {
      private static data: any[] = [];

      static add<T>(this: Constructor<T>, entity: T) {
        Entity.data.push(entity);
      }

      static delete<T>(this: Constructor<T>, entity: T) {
        const index = Entity.data.findIndex((element) => element === entity);
        Entity.data.splice(index, 1);
      }

      static findAll<T>(this: Constructor<T>): T[] {
        return Entity.data;
      }
    };
  }

  /**
   * Implement any super class
   */
  class Creature {
    constructor(readonly name: string) {}
  }

  /**
   * Implement a concrete class that should be extended and get all functions of the companion object.
   * There instead of inheriting from a specific class, call the method that provides the companion object.
   * As this function has a parameter for a super class, it can be injected
   */
  class Animal extends CompanionEntity(Creature) {
    age: number = 12;
  }

  /**
   * It is possible to access the properties and functions of the super class {@link Creature}
   * It is also possible to access the properties of the class itself.
   * And finally it is possible to access the functions of the companion object.
   */
  const animal = new Animal("Lion");
  console.log(animal.name);
  console.log(animal.age);

  Animal.add(animal);
  const animals = Animal.findAll();
  Animal.delete(animal);
}
