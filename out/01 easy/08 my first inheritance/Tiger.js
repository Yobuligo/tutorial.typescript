"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalFunctions_1 = require("../../GlobalFunctions");
const Animal_1 = require("./Animal");
/**
 * Instances of that class represent a Tiger.
 * A tiger is an animal and extends class 'Animal'
 * The abstract function 'makeNoise' is redefined
 */
class Tiger extends Animal_1.Animal {
    constructor() {
        super("Tiger");
    }
    makeNoise() {
        GlobalFunctions_1.println("Roar");
    }
}
exports.Tiger = Tiger;
//# sourceMappingURL=Tiger.js.map