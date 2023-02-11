"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * Class that is responsible for returning a type safe property of the given 'instance'
 * while 'instance' can have any type. Although each type is supported, we want to know the type. So we use the generics type T.
 */
class PropertySelector {
    constructor(instance) {
        this.instance = instance;
    }
    selectProperty(selector) {
        return selector(this.instance);
    }
}
exports.PropertySelector = PropertySelector;
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}
const person = new Person("Stacey", "Starfish", 30);
const propertySelector = new PropertySelector(person);
const selectedProperty = propertySelector.selectProperty((instance) => {
    return instance.age;
});
// I know the type of 'selectedProperty' by type inference, which means I can call the specific functions, which makes the code more stable
if (typeof selectedProperty == "number") {
    GlobalFunctions_1.println("the selected property is a number");
}
//# sourceMappingURL=app.js.map