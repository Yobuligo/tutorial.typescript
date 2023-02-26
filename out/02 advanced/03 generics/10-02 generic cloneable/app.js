"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * To use the cloneable which is described in lesson 10-01 cloneable, means that the clone function has to be redefined for each class.
 * This means method *clone* has to be implemented on Person.
 * If Teacher extends Person, Teacher has to redefine method *clone*, as otherwise clone will return an instance of Person.
 * This problem can be solved as follows
 */
var GenericCloneable;
(function (GenericCloneable) {
    /**
     * The Cloner is responsible for creating a new object by handing over its constructor
     */
    var Cloner = /** @class */ (function () {
        function Cloner() {
        }
        Cloner.prototype.clone = function (type) {
            return new type();
        };
        return Cloner;
    }());
    /**
     * Person implements ICloneable.
     * To provide a generic implementation which really creates a clone of the current class and not only Person but also of the extended classes,
     * the class Cloner is used. In that class the constructor of the current instance type (Person or each extended class, like Teacher) has to be handed over to *Cloner*.
     */
    var Person = /** @class */ (function () {
        function Person() {
            this.firstname = "Stacey";
        }
        Person.prototype.clone = function () {
            return new Cloner().clone(this.constructor);
        };
        return Person;
    }());
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.subject = "Math";
            return _this;
        }
        return Teacher;
    }(Person));
    (0, GlobalFunctions_1.println)(new Person().clone().firstname);
    (0, GlobalFunctions_1.println)(new Teacher().clone().subject);
})(GenericCloneable || (GenericCloneable = {}));
//# sourceMappingURL=app.js.map