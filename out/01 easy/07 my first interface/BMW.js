"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        GlobalFunctions_1.println(`Sounds like a BMW`);
    }
}
exports.BMW = BMW;
//# sourceMappingURL=BMW.js.map