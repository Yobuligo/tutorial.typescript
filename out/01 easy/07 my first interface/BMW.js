"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMW = void 0;
const GlobalFunctions_1 = require("../../GlobalFunctions");
/**
 * Class that represents a BWM and implements interface 'ICar'
 */
class BMW {
    constructor() {
        this.name = "BMW";
        this.spoilerSize = 123;
    }
    start() {
        (0, GlobalFunctions_1.println)(`Sounds like a BMW`);
    }
}
exports.BMW = BMW;
//# sourceMappingURL=BMW.js.map