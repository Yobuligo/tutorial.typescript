"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lazy = exports.Triple = exports.Pair = void 0;
var Pair = /** @class */ (function () {
    function Pair(first, second) {
        this.first = first;
        this.second = second;
    }
    return Pair;
}());
exports.Pair = Pair;
var Triple = /** @class */ (function () {
    function Triple(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
    return Triple;
}());
exports.Triple = Triple;
/**
 * This class is responsible for initializing and administer an object lazily
 */
var Lazy = /** @class */ (function () {
    function Lazy(instanceInitializer) {
        this.instanceInitializer = instanceInitializer;
        this._initialized = false;
    }
    Object.defineProperty(Lazy.prototype, "initialized", {
        get: function () {
            return this._initialized;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lazy.prototype, "instance", {
        get: function () {
            if (!this._initialized) {
                this._instance = this.instanceInitializer();
                this._initialized = true;
            }
            return this._instance;
        },
        set: function (value) {
            this._instance = value;
            this._initialized = true;
        },
        enumerable: false,
        configurable: true
    });
    return Lazy;
}());
exports.Lazy = Lazy;
//# sourceMappingURL=GlobalClasses.js.map