/**
 * Sometimes it is nice to add some examples. This can be achieved by using @example
 */

namespace DocWithExample {
  /**
   * An implementation of this interface represents a factory. It is responsible for creating instances object instances.
   *
   * @example
   * class Person{}
   *
   * const factory: IFactory = // create instance of the factory
   * const person = factory.create(Person)
   */
  export interface IFactory {
    create<T>(type: new () => T): T;
  }
}
