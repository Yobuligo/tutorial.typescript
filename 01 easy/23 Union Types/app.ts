/**
 * A union type defines a type that can be 1..n types.
 * E.g.
 * - a type can either be a string or a number
 * - a type can either be a Person or a Product
 */

namespace UnionTypes {
  // ValueType can either be a string or a number
  type ValueType = number | string;
  const entity: ValueType = "123";
}
