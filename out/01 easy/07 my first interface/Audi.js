"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Audi = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Class that represents an Audi  BWM and implements interface 'ICar'
 */
var Audi = /** @class */ (function () {
    function Audi() {
        this.name = "Audi";
    }
    Audi.prototype.start = function () {
        (0, GlobalFunctions_1.println)("Sounds like an Audi");
    };
    return Audi;
}());
exports.Audi = Audi;
//# sourceMappingURL=Audi.js.map