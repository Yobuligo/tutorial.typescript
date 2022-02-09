"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The following code assigns a concrete function to the declared extension functions
// To provide an extension functions, they have to be assigned to the declaration which is accessible via Boolean.prototype.*
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