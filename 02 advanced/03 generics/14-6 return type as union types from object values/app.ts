/**
 * I have an object, which is of kind index properties.
 * For this type I want to return a type, which is a union type of all value types of this object.
 *
 * E.g. I have a function fillPlaceholders. When filling placeholder I will either return a string, if the placeholder is a string or I want e.g. to return a JSX-Element.
 */

namespace ReturnTypeAsUnionTypesFromObjectValues {
  const toUnionTypes = <T extends object>(config: T): T[keyof T] => {
    for (const propName in config) {
      return config[propName] as T[keyof T];
    }
    throw new Error(`Config must not be empty`);
  };

  const isTypeString = toUnionTypes({
    name: "Stacey",
  });

  const isTypeNumber = toUnionTypes({
    age: 28,
  });

  const isTypeStringAndNumber = toUnionTypes({
    name: "Stacey",
    age: 28,
  });
}
