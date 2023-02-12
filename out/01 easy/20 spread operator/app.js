"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
// Also see examples on https://plusreturn.com/blog/6-awesome-tricks-with-the-spread-and-rest-operators-in-typescript-and-javascript-objects/
// Copy all values from one array in another
var values = ["one", "two", "three"];
var values2 = __spreadArray([], values, true);
(0, GlobalFunctions_1.println)(values2);
// provides the possibility to hand over elements as varargs to e.g. a constructor
var List = /** @class */ (function () {
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.elements = [];
        this.elements = elements;
    }
    List.prototype.printList = function () {
        (0, GlobalFunctions_1.println)(this.elements);
    };
    return List;
}());
// hand over single value
var list = new List(1);
list.printList();
// hand over several single values
list = new List(1, 2, 3, 4, 5);
list.printList();
// hand over an array to a spread operator which was defined before
var elements = [11, 12, 13, 14, 15];
list = new (List.bind.apply(List, __spreadArray([void 0], elements, false)))();
list.printList();
// hand over an array to a spread operator
list = new (List.bind.apply(List, __spreadArray([void 0], [11, 12, 13, 14, 15], false)))();
list.printList();
// the spread operator can also be used for objects to take over all properties of an object
// 'mySecondPerson takes of all properties of 'myFirstPerson' and adds the property age
var myFirstPerson = {
    firstname: "Peter",
    lastname: "Hoffmann",
};
var mySecondPerson = __assign(__assign({}, myFirstPerson), { age: 28 });
// So the spread operator can be used to clone / copy objects
var myThirdPerson = __assign({}, myFirstPerson);
// It is even possible to copy several objects into one.
// Here a new object 'myFourthPerson' is initialized with the properties of 'myFirstPerson' and 'cat'
// In case the objects would have the same properties, the last would win. This means if cat also had a prop 'firstname', its value would win.
var cat = {
    name: "Kitty",
    age: 3,
};
var myFourthPerson = __assign(__assign({}, myFirstPerson), cat);
// Resetting properties while copying. Here a copy of 'myFirstPerson' is created but the firstname is directly reset to 'Changed Firstname'
var myFifthPerson = __assign(__assign({}, myFirstPerson), { firstname: "Changed Firstname" });
// Adding new properties. Here a copy of 'myFirstPerson' is created which gets a new property 'age'
var mySixthPerson = __assign(__assign({}, myFirstPerson), { age: 28 });
console.log(mySixthPerson.age);
//# sourceMappingURL=app.js.map