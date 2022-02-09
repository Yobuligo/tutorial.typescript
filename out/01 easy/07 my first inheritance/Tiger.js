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
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tiger = void 0;
var GlobalFunctions_1 = require("../../GlobalFunctions");
var Animal_1 = require("./Animal");
/**
 * Instances of that class represent a Tiger.
 * A tiger is an animal and extends class 'Animal'
 * The abstract function 'makeNoise' is redefined
 */
var Tiger = /** @class */ (function (_super) {
    __extends(Tiger, _super);
    function Tiger() {
        return _super.call(this, "Tiger") || this;
    }
    Tiger.prototype.makeNoise = function () {
        (0, GlobalFunctions_1.println)("Roar");
    };
    return Tiger;
}(Animal_1.Animal));
exports.Tiger = Tiger;
//# sourceMappingURL=Tiger.js.map