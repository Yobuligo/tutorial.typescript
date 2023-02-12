"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Abstract class animal, with constructor, abstract function makeNoise
 */
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = "";
        this.name = name;
    }
    Animal.prototype.sayYourName = function () {
        (0, GlobalFunctions_1.println)("My name is ".concat(this.name));
    };
    Animal.prototype.introduce = function () {
        this.makeNoise();
        this.sayYourName();
    };
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map