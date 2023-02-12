"use strict";
/**
 * in TypeScript it is not even necessary to provide a generic type if not required.
 * Let's assume there is a parameter which is optional but when it is provided it is not clear of which type it is.
 * Here the optional generic type can be useful.
 */
var ProductPerson = /** @class */ (function () {
    function ProductPerson() {
    }
    return ProductPerson;
}());
/**
 * Here an instance of a 'ProductPerson' is created. But here is not need to provide any settings. So even the settings generic type can be omit.
 */
var ProductPersonFactory = /** @class */ (function () {
    function ProductPersonFactory() {
    }
    ProductPersonFactory.prototype.create = function (settings) {
        return new ProductPerson();
    };
    return ProductPersonFactory;
}());
var ProductCar = /** @class */ (function () {
    function ProductCar(name, constructionYear) {
        this.name = name;
    }
    return ProductCar;
}());
/**
 * Here an instance of 'ProductCar' is created. The required settings a type safe provided.
 */
var ProductCarFactory = /** @class */ (function () {
    function ProductCarFactory() {
    }
    ProductCarFactory.prototype.create = function (settings) {
        return new ProductCar(settings.name, settings.constructionYear);
    };
    return ProductCarFactory;
}());
//# sourceMappingURL=app.js.map