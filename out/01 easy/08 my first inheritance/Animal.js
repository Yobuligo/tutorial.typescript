"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Abstract class animal, with constructor, abstract function makeNoise
 */
class Animal {
    constructor(name) {
        this.name = "";
        this.name = name;
    }
    sayYourName() {
        (0, GlobalFunctions_1.println)(`My name is ${this.name}`);
    }
    introduce() {
        this.makeNoise();
        this.sayYourName();
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map