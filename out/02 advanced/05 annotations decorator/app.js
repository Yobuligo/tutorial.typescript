"use strict";
/**
 * A decorator can be considered like annotations in Kotlin but less powerful.
 * A decorator is a function that is called and which can have parameters.
 * The decorator function can return a target (the class type) and it is even possible to change the props of the class type
 * The decorator function has to be enabled.
 *
 * Decorators can be used for classes, methods, functions or properties
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
// Adds the property path to a class a sets the value of parameter {path}
var Path = function (path) {
    return function (target) {
        target.path = path;
    };
};
/**
 * Property Decorator
 */
var Prop = function (target, name) {
    console.log(target);
    console.log(name);
};
/**
 * Method Decorator
 */
var Method = function (target, name) {
    console.log(target);
    console.log(name);
};
// Declares the class DecoratorClass and adds the Decorator @Path
var DecoratorClass = /** @class */ (function () {
    function DecoratorClass() {
        this.myProperty = "Test";
    }
    DecoratorClass.prototype.test = function () {
        (0, GlobalFunctions_1.println)("Test");
    };
    __decorate([
        Prop,
        __metadata("design:type", Object)
    ], DecoratorClass.prototype, "myProperty", void 0);
    __decorate([
        Method,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DecoratorClass.prototype, "test", null);
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