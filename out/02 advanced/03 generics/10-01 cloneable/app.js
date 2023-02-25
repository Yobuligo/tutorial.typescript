"use strict";
/**
 * There following example shows how an implementation of cloneable can looks like
 */
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
var GlobalFunctions_1 = require("../../../GlobalFunctions");
var Cloneable;
(function (Cloneable) {
    var Human = /** @class */ (function () {
        function Human() {
        }
        return Human;
    }());
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher(firstname) {
            var _this = _super.call(this) || this;
            _this.firstname = firstname;
            return _this;
        }
        Teacher.prototype.clone = function () {
            return new Teacher(this.firstname);
        };
        return Teacher;
    }(Human));
    var Worker = /** @class */ (function (_super) {
        __extends(Worker, _super);
        function Worker(lastname) {
            var _this = _super.call(this) || this;
            _this.lastname = lastname;
            return _this;
        }
        Worker.prototype.clone = function () {
            return new Worker(this.lastname);
        };
        return Worker;
    }(Human));
    var teacher = new Teacher("Stacey");
    (0, GlobalFunctions_1.println)(teacher.clone().firstname);
    var worker = new Worker("Starfish");
    (0, GlobalFunctions_1.println)(worker.clone().lastname);
})(Cloneable || (Cloneable = {}));
//# sourceMappingURL=app.js.map