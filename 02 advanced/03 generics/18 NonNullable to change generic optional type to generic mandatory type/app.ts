/**
 * Sometimes a type can be of a type or undefined (like string | undefined) but this type should be mandatory.
 * Lets assume the type is T and so you don't know what type T is.
 * If T is string | undefined there is actually no way to say, no T must not be null.
 * But there is a way. There is a build in type NonNullable it is either T and (intersection type ) it is {}, which means type of a valid object.
 * This means even so T would be string | undefined the type NonNullable<string | undefined> would translate it to a non nullable value, as {} is not null.
 *
 * Why should I do that, as obviously the type can be null. Well I want to do it, if I check the type previously and can ensure that the type is not null or undefined.
 * Here is an example
 */

/**
 * This function checks if the provided value, of type T, is not null and not undefined.
 * So it can be ensured that value is bound. In addition I can ensure that when calling the function block, the value is not null, even so it could be null
 */
const ifNotNull = <T>(value: T, block: (value: NonNullable<T>) => void) => {
  if (value !== null && value !== undefined) {
    block(value);
  }
};

/**
 * This function returns a string, but perhaps it could be return an undefined value.
 */
const returnValue = (): string | undefined => {
  return "";
};

/**
 * When calling function ifNotNull, the value which is passed into the block function is "string", even so the function returnValue
 * could potentially return a null or undefined value, even because ifNotNull ensures to check value and to provide a value which is not null and null undefined.
 */
ifNotNull(returnValue(), (value) => {});
