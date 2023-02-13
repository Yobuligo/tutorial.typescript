"use strict";
/**
 * In Kotlin it is possible to have Companion Objects.
 * Instead of having only static methods on a class the companion object provides access to methods of an instance based objects
 * For a class which have a companion object it feels like it provides only access to static methods.
 * But actually it is a specific object.
 * That concept provides the possibility to call a static method of a super class but to get type safe access of objects of the sub class.
 *
 * That is used for example for DataObjects to have find, save, delete methods on the specific DataObject-Class.
 * So there is no need to have access to the DataAccessObjects. Instead the user of a DataObject-Class only has to know that specific class.
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
var SuperClass = /** @class */ (function () {
    function SuperClass() {
    }
    // it is required to have a separate parameter "this" which must be of type "type" (new (): T).
    // This causes the framework to pass in the class type of the calling class.
    // Like each instance method "this" will be actually injected in each instance method but is not required.
    // But here this is injected. But instead of being the object instance it is the class instance which keeps the information of the calling class.
    SuperClass.findById = function (id) {
        return new this();
    };
    SuperClass.findAll = function () {
        return [];
    };
    // Alternative
    SuperClass.save = function (instance) {
        return instance;
    };
    return SuperClass;
}());
var SubClass = /** @class */ (function (_super) {
    __extends(SubClass, _super);
    function SubClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.myAttribute = "";
        return _this;
    }
    return SubClass;
}(SuperClass));
// When calling the static method findById as static method on "SubClass" it returns type safe instances of "SubClass"
// even so that static method is implemented on the super class "SuperClass"
var subClass = SubClass.findById(123);
console.log(subClass.myAttribute);
//# sourceMappingURL=app.js.map