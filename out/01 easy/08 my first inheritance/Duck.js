"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const Animal_1 = require("./Animal");
/**
 * Instances of that class represent a Duck.
 * A duck is an animal and extends class 'Animal'
 * The abstract function 'makeNoise' is redefined
 */
class Duck extends Animal_1.Animal {
    constructor() {
        super("Duck");
    }
    makeNoise() {
        GlobalFunctions_1.println("croak");
    }
}
exports.Duck = Duck;
//# sourceMappingURL=Duck.js.map