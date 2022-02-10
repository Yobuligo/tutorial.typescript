"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../GlobalFunctions");
var OctopusBefore = /** @class */ (function () {
    function OctopusBefore(name, arms) {
        this.name = "";
        this.arms = 0;
        this.name = name;
        this.arms = arms;
    }
    OctopusBefore.prototype.getName = function () {
        return this.name;
    };
    return OctopusBefore;
}());
var OctopusAfter = /** @class */ (function () {
    // by using readonly <name>: <type> a immutable class property is provided
    // by using public <name>: <type> a public mutable class property is provided
    // in both cases there is no need to declare separate class properties
    // by using public, protected, private the visibility of the property can be changed. For readonly is public by default. So 'readonly name: string' would work as well.
    function OctopusAfter(name, arms) {
        this.name = name;
        this.arms = arms;
    }
    OctopusAfter.prototype.getName = function () {
        return this.name;
    };
    return OctopusAfter;
}());
var octopus = new OctopusAfter("Otto", 8);
octopus.arms = 7; // property arm is mutable
(0, GlobalFunctions_1.println)(octopus.getName());
(0, GlobalFunctions_1.println)(octopus.arms);
//# sourceMappingURL=app.js.map