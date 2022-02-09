"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.println = void 0;
function println() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
}
exports.println = println;
//# sourceMappingURL=GlobalFunctions.js.map