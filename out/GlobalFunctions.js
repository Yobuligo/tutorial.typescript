"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TODO = exports.newLine = exports.println = void 0;
function println() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
}
exports.println = println;
function newLine() {
    println("");
}
exports.newLine = newLine;
function TODO(message) {
    if (message === void 0) { message = "Not implemented exception"; }
    throw new Error(message);
}
exports.TODO = TODO;
//# sourceMappingURL=GlobalFunctions.js.map