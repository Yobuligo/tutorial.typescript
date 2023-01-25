"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KClass = exports.Lazy = exports.Triple = exports.Pair = void 0;
class Pair {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
exports.Pair = Pair;
class Triple {
    constructor(first, second, third) {
        this.first = first;
        this.second = second;
        this.third = third;
    }
}
exports.Triple = Triple;
/**
 * This class is responsible for initializing and administer an object lazily
 */
class Lazy {
    constructor(instanceInitializer) {
        this.instanceInitializer = instanceInitializer;
        this._initialized = false;
    }
    get initialized() {
        return this._initialized;
    }
    get instance() {
        if (!this._initialized) {
            this._instance = this.instanceInitializer();
            this._initialized = true;
        }
        return this._instance;
    }
    set instance(value) {
        this._instance = value;
        this._initialized = true;
    }
}
exports.Lazy = Lazy;
class KClass {
    constructor(name) {
        this.name = name;
    }
}
exports.KClass = KClass;
//# sourceMappingURL=GlobalClasses.js.map