"use strict";
/**
 * As it is not possible to check against an interface type, as it only exists at design time but not at runtime, there is a expression type guard.
 * An object can be checked if it is of a specific type.
 * See also "09 Check is instance of interface"
 *
 * In the example there is simple interface {@link IHaveId} with an attribute id of type string.
 * The idea behind type guards is to claim that an object has a specific type if it has a specific property constellation.
 * So to claim an object is of type {@link IHaveId}. I have to check if that object has attribute id of type string.
 */
var TypeGuard;
(function (TypeGuard) {
    /**
     * Here type guard comes into play. If this function returns true this means that value is of type {@link IHaveId}.
     */
    var isIHaveId = function (instance) {
        var prop = "id" in instance;
        return "id" in instance && typeof instance.id === "string";
    };
    /**
     * This functions checks an object if it is of type {@link IHaveId}. In that case I can access type safe the property id.
     */
    var printId = function (instance) {
        if (isIHaveId(instance)) {
            console.log(instance.id);
        }
    };
    var Person = /** @class */ (function () {
        function Person() {
            this.firstname = "Stacey";
            this.lastname = "Starfish";
        }
        return Person;
    }());
    var Teacher = /** @class */ (function () {
        function Teacher() {
            this.id = "Teacher";
        }
        return Teacher;
    }());
    var person = new Person();
    var teacher = new Teacher();
    printId(person);
    printId(teacher);
})(TypeGuard || (TypeGuard = {}));
//# sourceMappingURL=app.js.map