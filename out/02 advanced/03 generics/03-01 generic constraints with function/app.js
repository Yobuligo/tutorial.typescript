"use strict";
/**
 * It is even possible to use a function as generic constraint.
 */
var Executor = /** @class */ (function () {
    function Executor(block) {
        this.block = block;
    }
    Executor.prototype.execute = function () {
        this.block(123);
    };
    return Executor;
}());
//# sourceMappingURL=app.js.map