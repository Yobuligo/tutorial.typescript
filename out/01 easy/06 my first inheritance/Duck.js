"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + string(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duck = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Animal_1 = require("./Animal");
/**
 * Instances of that class represent a Duck.
 * A duck is an animal and extends class 'Animal'
 * The abstract function 'makeNoise' is redefined
 */
var Duck = /** @class */ (function (_super) {
    __extends(Duck, _super);
    function Duck() {
        return _super.call(this, "Duck") || this;
    }
    Duck.prototype.makeNoise = function () {
        (0, GlobalFunctions_1.println)("croak");
    };
    return Duck;
}(Animal_1.Animal));
exports.Duck = Duck;
//# sourceMappingURL=Duck.js.map