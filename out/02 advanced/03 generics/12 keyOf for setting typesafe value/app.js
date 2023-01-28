/**
 * The following code shows how to use keyOf to set a property of an object generic and type safe
 */
class Book {
}
class PropertyUpdater {
    constructor(object) {
        this.object = object;
    }
    update(prop, value) {
        this.object[prop] = value;
    }
    registerOnUpdate(prop, eventHandler) {
        eventHandler(prop, this.object[prop]);
    }
}
const book = new Book();
const propertyUpdater = new PropertyUpdater(book);
propertyUpdater.update("isbn", "My ISBN"); // only strings are allowed for property isbn
propertyUpdater.update("publishedAt", new Date()); // only Dates are allowed
propertyUpdater.update("numberSoldBooks", 123); // only numbers are allowed
propertyUpdater.registerOnUpdate("publishedAt", (prop, value) => { }); // You can see that "prop" is "publishedAt" and value is type Date. Access value type safe.
//# sourceMappingURL=app.js.map