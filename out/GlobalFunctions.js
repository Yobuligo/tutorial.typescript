"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lazy = exports.TODO = exports.newLine = exports.println = void 0;
var GlobalClasses_1 = require("./GlobalClasses");
/**
 * This function is responsible for wrapping the function console.log.
 */
function println() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log.apply(console, data);
}
exports.println = println;
/**
 * This function is responsible for creating a new line at the console
 */
function newLine() {
    println("");
}
exports.newLine = newLine;
/**
 * This function is responsible for raising a TODO exception
 */
function TODO(message) {
    if (message === void 0) { message = "Not implemented exception"; }
    throw new Error(message);
}
exports.TODO = TODO;
/**
 * This function is responsible for creating a lazy instance
 */
function lazy(instanceInitializer) {
    return new GlobalClasses_1.Lazy(instanceInitializer);
}
exports.lazy = lazy;
//# sourceMappingURL=GlobalFunctions.js.map