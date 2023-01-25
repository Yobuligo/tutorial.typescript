"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = void 0;
function repeat(times, block) {
    for (let i = 0; i < times; i++) {
        block(i);
    }
}
exports.repeat = repeat;
//# sourceMappingURL=repeat.js.map