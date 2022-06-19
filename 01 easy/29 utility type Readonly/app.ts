/**
 * Readonly is a specific "Utility Type". It can be used to define that a variable or even properties of an object are readonly.
 * At the end it takes a type T and returns another type with the same shape as T but with all fields set to readonly.
 */

const myList: Readonly<string[]> = ["Stacey", "Bertha"];

/**
 * The following to add a new line wouldn't work as the array list is readonly.
 */
// myList.push("123")

class ReadOnlyObject {
  name: string = "";
  title: string = "";
}

const readOnlyObject: Readonly<ReadOnlyObject> = new ReadOnlyObject();
// readOnlyObject.name = "123"

type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
