/**
 * The following code shows how to use keyOf to set a property of an object generic and type safe
 */
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var PropertyUpdater = /** @class */ (function () {
    function PropertyUpdater(object) {
        this.object = object;
    }
    PropertyUpdater.prototype.update = function (prop, value) {
        this.object[prop] = value;
    };
    PropertyUpdater.prototype.registerOnUpdate = function (prop, eventHandler) {
        eventHandler(prop, this.object[prop]);
    };
    return PropertyUpdater;
}());
var book = new Book();
var propertyUpdater = new PropertyUpdater(book);
propertyUpdater.update("isbn", "My ISBN"); // only strings are allowed for property isbn
propertyUpdater.update("publishedAt", new Date()); // only Dates are allowed
propertyUpdater.update("numberSoldBooks", 123); // only numbers are allowed
propertyUpdater.registerOnUpdate("publishedAt", function (prop, value) { }); // You can see that "prop" is "publishedAt" and value is type Date. Access value type safe.
//# sourceMappingURL=app.js.map