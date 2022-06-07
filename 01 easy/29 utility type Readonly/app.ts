/**
 * Readonly is a specific "Utility Type". It can be used to define that a variable or even properties of an object are readonly.
 */

const myList: Readonly<string[]> = ["Stacey", "Bertha"];

/**
 * The following to add a new line wouldn't work as the array list is readonly.
 */
// myList.push("123")
