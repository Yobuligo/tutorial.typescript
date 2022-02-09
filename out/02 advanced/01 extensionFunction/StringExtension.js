"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
String.prototype.ifNotEmpty = function (block) {
    if (this != "") {
        block(this);
    }
};
//# sourceMappingURL=StringExtension.js.map