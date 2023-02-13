"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KClass = exports.Lazy = exports.Triple = exports.Pair = void 0;
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
        this._instance = undefined;
    }
    Object.defineProperty(Lazy.prototype, "initialized", {
        get: function () {
            return this._instance === undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lazy.prototype, "instance", {
        get: function () {
            if (this._instance === undefined) {
                this._instance = this.instanceInitializer();
            }
            return this._instance;
        },
        set: function (value) {
            this._instance = value;
        },
        enumerable: false,
        configurable: true
    });
    return Lazy;
}());
exports.Lazy = Lazy;
var KClass = /** @class */ (function () {
    function KClass(name) {
        this.name = name;
    }
    return KClass;
}());
exports.KClass = KClass;
//# sourceMappingURL=GlobalClasses.js.map