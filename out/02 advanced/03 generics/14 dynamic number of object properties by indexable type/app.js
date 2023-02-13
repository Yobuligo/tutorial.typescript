"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In TypeScript it is possible to declare objects which have a dynamic number of properties.
 * This provides the possibility to e.g. add various properties or even methods to an object
 *
 * Belongs to "Index Properties / index property / index properties / Indexable type" (see easy -> basics)
 */
// Here an object is declared with 2 methods.
// the property name is given followed by colon (':') and the method or the property value.
// it is even possible to omit the ':' like for method 'method2'. So it looks like a function is directly declared. Anyway the corresponding property would have the name of the function, like in that example 'method2'.
var variousNumbers = {
    method: function () { },
    methods2: function () { },
    prop: "Stacey",
};
variousNumbers.method();
variousNumbers.methods2();
var dynamicMethods = {
    first: function (parameter) {
        console.log("I can access type safe the property firstname of the parameter object by ".concat(parameter.firstname));
    },
    second: function (parameter) {
        console.log("I can add as many methods as desired");
    },
};
// And what is it good for? E.g. I can use that dynamically added methods and call them directly instead of having e.g. an enumeration which needs to be analyzed in a switch statement. So it could be used to trigger an event
dynamicMethods.first({ firstname: "Stacey", lastname: "Starfish" });
// Within a framework it would be possible to call the methods dynamically. Here each method would be called automatically and I can hand over type safe an object 'person' which is required for each method.
for (var propName in dynamicMethods) {
    var person_1 = { firstname: "Stacey", lastname: "Starfish" };
    var prop = dynamicMethods[propName];
    prop(person_1);
}
//# sourceMappingURL=app.js.map