"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The following code assigns a concrete function to the declared extension function
// To provide an extension function, it has to be assigned to the declaration which is accessible via string.prototype.*
String.prototype.ifNotEmpty = function (block) {
    if (this != "") {
        block(this);
    }
};
//# sourceMappingURL=stringExtension.js.map