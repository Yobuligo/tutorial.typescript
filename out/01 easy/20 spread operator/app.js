"use strict";
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
var list = new List(1);
list.printList();
list = new List(1, 2, 3, 4, 5);
list.printList();
//# sourceMappingURL=app.js.map