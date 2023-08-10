/**
 * Here is how to define a generic parameter which must be of type of a generic type.
 * Actually a generic is an index property or a simple object with key value pairs
 */

namespace GenericParameterOfTypeEnumType {
  type EnumType = { [name: string]: any };

  class EnumContainer<T extends EnumType> {
    constructor(readonly value: T) {}
  }

  enum Gender {
    MALE,
    FEMALE,
  }

  interface IPerson {
    firstname: string;
    lastname: string;
  }

  const enumContainer = new EnumContainer(Gender);
}
