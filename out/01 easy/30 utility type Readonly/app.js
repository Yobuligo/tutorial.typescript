/**
 * Readonly is a specific "Utility Type". It can be used to define that a variable or even properties of an object are readonly.
 * At the end it takes a type T and returns another type with the same shape as T but with all fields set to readonly.
 */
var myList = ["Stacey", "Bertha"];
/**
 * The following to add a new line wouldn't work as the array list is readonly.
 */
// myList.push("123")
var ReadOnlyObject = /** @class */ (function () {
    function ReadOnlyObject() {
        this.name = "";
        this.title = "";
    }
    return ReadOnlyObject;
}());
var readOnlyObject = new ReadOnlyObject();
//# sourceMappingURL=app.js.map