/**
 * Readonly is a specific "Utility Type". It can be used to define that a variable or even properties of an object are readonly.
 */
const myList = ["Stacey", "Bertha"];
/**
 * The following to add a new line wouldn't work as the array list is readonly.
 */
// myList.push("123")
class ReadOnlyObject {
    constructor() {
        this.name = "";
        this.title = "";
    }
}
const readOnlyObject = new ReadOnlyObject();
// readOnlyObject.name = "123"
//# sourceMappingURL=app.js.map