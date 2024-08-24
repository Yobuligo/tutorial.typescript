/**
 * In same cases we want to define a type, which contains only of keys of a given type.
 * KeyOf types are handed over as array list when used.
 * But it is different if we declare a type. A type definition cannot have arrays, but instead separate keys separated by a |.
 *
 * An example to use it would be e.g. a get method for REST-requests, where the get should return only several fields of an entity.
 */

namespace DefineSeparateKeysWithKeyOf {
  /**
   * Define any type
   */
  interface IPerson {
    id: string;
    firstname: string;
    lastname: string;
    age: number;
  }

  /**
   * This is an example how we can provide a list of keys from a type *{@link T}*
   */
  const getKeys = <T>(keys: (keyof T)[]): (keyof T)[] => {
    throw new Error();
  };

  /**
   * The keys are returned as array list
   */
  const result = getKeys<IPerson>(["age", "lastname"]);

  /**
   * Now we want to declare a new type which is a subset of a given type *{@link T}*.
   * We have to provide a type and a second generic type *{@link K}*. We can provide several keys separate by |.
   * The type is an indexed property type with type {@link P}, which is in *{@link K}* (so a list of keys of *{@link T}*).
   */
  type Subset<T, K extends keyof T> = { [P in K]: T[P] };

  /**
   * Define a new type as Subset from IPerson for better readability
   */
  type IPersonShort = Subset<IPerson, "age" | "firstname">;

  /**
   * Now we can use the type
   */
  const test: IPersonShort = {
    age: 123,
    firstname: "Stacey",
  };
}
