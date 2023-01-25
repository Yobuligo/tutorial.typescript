"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audi = void 0;
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Class that represents an Audi  BWM and implements interface 'ICar'
 */
class Audi {
    constructor() {
        this.name = "Audi";
    }
    start() {
        (0, GlobalFunctions_1.println)("Sounds like an Audi");
    }
}
exports.Audi = Audi;
//# sourceMappingURL=Audi.js.map