"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertySelector = void 0;
var GlobalFunctions_1 = require("../../../GlobalFunctions");
var PropertySelector = /** @class */ (function () {
    function PropertySelector(instance) {
        this.instance = instance;
    }
    PropertySelector.prototype.selectProperty = function (selector) {
        return selector(this.instance);
    };
    return PropertySelector;
}());
exports.PropertySelector = PropertySelector;
var Person = /** @class */ (function () {
    function Person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    return Person;
}());
var person = new Person("Stacey", "Starfish", 30);
var propertySelector = new PropertySelector(person);
var selectedProperty = propertySelector.selectProperty(function (instance) {
    return instance.age;
});
// I know the type of 'selectedProperty' by type inference, which means I can call the specific functions, which makes the code more stable
if (typeof selectedProperty == "number") {
    (0, GlobalFunctions_1.println)("the selected property is a number");
}
//# sourceMappingURL=app.js.map