/**
 * In TypeScript it is even possible to call a static method polymorph.
 * So the result of a static method call depends on the concrete class it is called.
 * So it is possible to provide static methods for e.g. a data access object for CRUD operations at a central point,
 * but it considers the subclass the method is called for.
 */

namespace PolymorphismForStaticMethods {
  /**
   * This is an abstract class, which provides static methods.
   * Anyway the parameters and returned value depends on the subclass the static method is called for.
   */
  abstract class Base {
    /**
     * Here parameter {@link this} is very special. TypeScript automatically injects not an instance of that class, but the class type itself.
     * So If class {@link Base} was inherited to class Animal, the method create, would inject Animal for parameter this.
     *
     * Here the class type is directly the constructor type. So we can call new for this type and create an instance of the concrete class (so not Base, but the subclass)
     */
    static create<T>(this: new () => T): T {
      return new this();
    }

    /**
     * Here we use the same concept for defining a static find method, that returns instances of the subclass.
     */
    static find<T>(this: new () => T): T[] {
      throw new Error("Not implemented");
    }
  }

  /**
   * Animal is a subclass of Base. So it inherits the static method, which are this time type safe, and considering the type of the subclass, here Animal
   */
  class Animal extends Base {
    name = "Stacey";
  }

  // A static method class create would create an instance of Animal and not Base
  const animal = Animal.create();
  console.log(animal.name);
}
