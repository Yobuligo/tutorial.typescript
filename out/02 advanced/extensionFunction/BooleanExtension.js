"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Boolean.prototype.ifTrue = function (block) {
    if (this) {
        block();
    }
};
Boolean.prototype.ifFalse = function (block) {
    if (!this) {
        block();
    }
};
//# sourceMappingURL=BooleanExtension.js.map