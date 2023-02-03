/**
 * Defines an enumeration
 */
enum State {
  NEW,
  LOADED,
  CHANGED,
  DELETED,
}

/**
 * Provides a function to iterate over enum types. Therefore the corresponding enumType must be of type object.
 */
const enumIterator = <T extends object>(enumType: T): T => {
  for (let enumProp in enumType) {
    console.log(`Enum Property ${enumProp}`);
  }
  return enumType;
};

const enumType = enumIterator(State);
enumType.CHANGED;
