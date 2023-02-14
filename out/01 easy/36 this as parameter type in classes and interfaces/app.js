"use strict";
/**
 * When introducing abstraction layers it is sometimes useful to provide a type (e.g. a class or an interface),
 * that refers to itself when it comes to parameters.
 * Take a look at the following example
 */
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.compare = function (instance) {
        return 0;
    };
    return Animal;
}());
var animal = new Animal();
// The method compare expects an object of type IAnimal
animal.compare(animal);
//# sourceMappingURL=app.js.map