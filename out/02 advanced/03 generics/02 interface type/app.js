// Represents a specific car, a BMW
var BWM = /** @class */ (function () {
    function BWM() {
    }
    return BWM;
}());
// Represents a specific car, an Audi
var Audi = /** @class */ (function () {
    function Audi() {
    }
    return Audi;
}());
// Represents a BMW Factory which implements ICarFactory. And here we have to say which type of cars are crafted by that factory. Here BWM
var BWMFactory = /** @class */ (function () {
    function BWMFactory() {
    }
    BWMFactory.prototype.createCar = function () {
        return new BWM();
    };
    return BWMFactory;
}());
// Represents an Audi Factory which implements ICarFactory. And here we have to say which type of cars are crafted by that factory. Here Audi
var AudiFactory = /** @class */ (function () {
    function AudiFactory() {
    }
    AudiFactory.prototype.createCar = function () {
        return new Audi();
    };
    return AudiFactory;
}());
//# sourceMappingURL=app.js.map