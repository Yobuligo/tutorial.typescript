/**
 * There are conditional types to map a return type depending on another type.
 * In the following example it should be checked, if a config object contains a specific type.
 * If so, the configure function should return that specific type, otherwise always string
 */

namespace ConditionalTypes {
  class JSXElement {
    propName: string = "property name";
  }

  /**
   * How to read that condition? Actually we have 2 conditions, an outer and an inner condition.
   *
   * First we have a type T.
   *
   * Out condition: Now we want to infer the key types of T. The inferred type is the introduce type U. Therefore we use the T extends {...} operator.
   * That is our first condition. T extends {...} ? <inner-condition> : string
   * Only if T extends {...} then handle the <inner-condition> otherwise we return the type string.
   *
   * And if T extends {...}, which means we have an indexed property type, then we have the type U inferred, which is required for the inner condition:
   * U extends JSXElement ? JSXElement : string
   * Only with our U extends JSXElement, then we return the type JSXElement, otherwise also string
   *
   * if T would be e.g. { firstname: "Stacey", age: 28 }, then U would be string | number.
   *
   * Now we want to analyze U,
   */
  type ConditionalReturnType<T> = T extends { [key: string]: infer U }
    ? U extends JSXElement
      ? JSXElement
      : string
    : string;

  const configure = <T extends object>(config: T): ConditionalReturnType<T> => {
    throw new Error();
  };

  // variable first is of type string, as our config does not contain a property of type JSXElement
  const first = configure({ firstname: "Stacey" });

  // variable second is of type JSXElement, as our config contain a property of type JSXElement
  const second = configure({ link: new JSXElement() });

  // variable third is of type string, as all properties different of type JSXElement are converted to string
  const third = configure({ age: 28 });
}
