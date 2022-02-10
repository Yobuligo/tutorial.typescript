"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMW = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Class that represents a BWM and implements interface 'ICar'
 */
var BMW = /** @class */ (function () {
    function BMW() {
        this.name = "BMW";
        this.spoilerSize = 123;
    }
    BMW.prototype.start = function () {
        (0, GlobalFunctions_1.println)("Sounds like a BMW");
    };
    return BMW;
}());
exports.BMW = BMW;
//# sourceMappingURL=BMW.js.map