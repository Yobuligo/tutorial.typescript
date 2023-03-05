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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var GlobalFunctions_1 = require("../../../GlobalFunctions");
/**
 * Even so having a ICloneable interface etc. is nice and type safe.
 * The easiest way is to use the internal clone function of TypeScript {... new Teacher() }
 * The greatest disadvantage probably is that I have no control over what must be cloned.
 */
var GenericCloneableShort;
(function (GenericCloneableShort) {
    var index = 0;
    var TestDefault = /** @class */ (function () {
        function TestDefault() {
            index++;
            this.index = index;
        }
        return TestDefault;
    }());
    var Test = new TestDefault();
    var Person = /** @class */ (function () {
        function Person() {
            this.firstname = "Stacey";
        }
        return Person;
    }());
    var Teacher = /** @class */ (function (_super) {
        __extends(Teacher, _super);
        function Teacher() {
            var _this = _super.call(this) || this;
            _this.refTest = Test;
            _this.subject = "Math";
            _this.constructorTest = new TestDefault();
            return _this;
        }
        return Teacher;
    }(Person));
    var clone = __assign({}, new Teacher());
    (0, GlobalFunctions_1.println)("Clone is ".concat(clone.firstname, " with subject ").concat(clone.subject, ", with constructor test ").concat(clone.constructorTest.index, ", with ref test ").concat(clone.refTest.index));
    var clone2 = __assign({}, new Teacher());
    (0, GlobalFunctions_1.println)("Clone is ".concat(clone2.firstname, " with subject ").concat(clone2.subject, ", with constructor test ").concat(clone2.constructorTest.index, ", with ref test ").concat(clone.refTest.index));
})(GenericCloneableShort || (GenericCloneableShort = {}));
//# sourceMappingURL=app.js.map