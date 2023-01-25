"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiger = void 0;
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
        (0, GlobalFunctions_1.println)("Roar");
    }
}
exports.Tiger = Tiger;
//# sourceMappingURL=Tiger.js.map