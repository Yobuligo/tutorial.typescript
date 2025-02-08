/**
 * Record is another predefined Utility type in TypeScript.
 * It is same type of key value pair represented by an object, while the key can be of type string, number or symbol.
 */

namespace Record {
  // Name age mapping
  const nameAge: Record<string, number> = { peter: 28, verena: 25, rene: 20 };

  // And here the corresponding own definition. An indexed property.
  type NameAge<TKey extends string | number | symbol, TValue> = {
    [P in TKey]: TValue;
  };

  const nameAge2: NameAge<string, number> = { peter: 28, verena: 25, rene: 20 };
}
