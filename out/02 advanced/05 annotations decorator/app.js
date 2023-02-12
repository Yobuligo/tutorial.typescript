/**
 * A decorator can be considered like annotations in Kotlin but less powerful.
 * A decorator is a function that is called and which can have parameters.
 * The decorator function can return a target (the class type) and it is even possible to change the props of the class type
 * The decorator function has to be enabled.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Adds the property path to a class a sets the value of parameter {path}
var Path = function (path) {
    return function (target) {
        target.path = path;
    };
};
// Declares the class DecoratorClass and adds the Decorator @Path
var DecoratorClass = /** @class */ (function () {
    function DecoratorClass() {
    }
    DecoratorClass = __decorate([
        Path("/test")
    ], DecoratorClass);
    return DecoratorClass;
}());
// Declares a function to print a property path of a type if exists
var printPath = function (type) {
    if (type.path !== undefined) {
        console.log("Path of ".concat(type.name, " is ").concat(type.path));
    }
};
// call function to print the path
printPath(DecoratorClass);
//# sourceMappingURL=app.js.map