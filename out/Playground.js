"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResult = void 0;
const getResult = (value) => {
    return value;
};
exports.getResult = getResult;
class ResultUser {
    calc() {
        var _a;
        const result = (_a = (0, exports.getResult)()) !== null && _a !== void 0 ? _a : this.raiseException();
        console.log(`${result}`);
    }
    raiseException() {
        throw new Error("Value initial");
    }
}
const resultUser = new ResultUser();
resultUser.calc();
//# sourceMappingURL=Playground.js.map