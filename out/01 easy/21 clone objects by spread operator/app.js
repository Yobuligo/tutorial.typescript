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
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var User = /** @class */ (function () {
    function User(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    return User;
}());
var user = new User("Stacey", "Starfish", 30);
var copy = __assign({}, user);
(0, GlobalFunctions_1.println)(copy);
//# sourceMappingURL=app.js.map