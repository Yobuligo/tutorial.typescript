"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//use 'prototype' to provide an implementation for the declared extension function
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