"use strict";
/**
 * In some cases it is required to not only provide an instance of a specific type, but the type itself should be a specific class type.
 * This can be achieved by using typeof <type>. As alternative 'new () => <type>' can be used as well
 */
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
var typeOfInClasses;
(function (typeOfInClasses) {
    var Person = /** @class */ (function () {
        function Person() {
            this.firstname = "Stacey";
        }
        return Person;
    }());
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.subject = ["English", "Psychology"];
            return _this;
        }
        return Teacher;
    }(Person));
    var Factory = /** @class */ (function () {
        function Factory() {
        }
        return Factory;
    }());
    /**
     * Here the typeof operator is used to specify that only types of type 'Person' can be added.
     * But it is possible to inject the type 'Person' itself or even all subtypes of 'Person'.
     *
     * Attention: It is not possible to use an interface type or Type in connection with typeof
     * So (type: typeof IPerson) would result in a syntax error.
     */
    function createInstance(type) {
        return new type();
    }
    // create a person
    var person = createInstance(Person);
    // create a teacher, even so variable 'teacher' would be of type 'Person' it is an instance of 'Teacher'
    var teacher = createInstance(Teacher);
    // create a factory doesn't work, as 'Factory' is no subtype of 'Person'
    //   const factory = createInstance(Factory);
})(typeOfInClasses || (typeOfInClasses = {}));
//# sourceMappingURL=app.js.map