"use strict";
/**
 * Defines an enumeration
 */
var State;
(function (State) {
    State[State["NEW"] = 0] = "NEW";
    State[State["LOADED"] = 1] = "LOADED";
    State[State["CHANGED"] = 2] = "CHANGED";
    State[State["DELETED"] = 3] = "DELETED";
})(State || (State = {}));
/**
 * Provides a function to iterate over enum types. Therefore the corresponding enumType must be of type object.
 */
var enumIterator = function (enumType) {
    for (var enumProp in enumType) {
        console.log("Enum Property ".concat(enumProp));
    }
    return enumType;
};
var enumType = enumIterator(State);
enumType.CHANGED;
//# sourceMappingURL=app.js.map