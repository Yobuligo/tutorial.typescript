var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// Rest operator: The rest operator is related to the spread operator. It can be used for variables which are then converted to an array
// the following example shows the variable 'args' which is converted to an array
// e.g. it is possible to call methods, which are only available on arrays
function convertToArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (element) {
        element === "Test";
    });
}
// With the rest operator it is possible to create a copy of an object and exclude specific properties
var cat = {
    name: "Chase",
    type: "cat",
    color: "black",
};
// will create a new object 'newCat' from 'cat' as template without copying the prop 'type'
var type = cat.type, newCat = __rest(cat, ["type"]);
// Property type isn't available on 'newCat'
// newCat.type
//# sourceMappingURL=app.js.map