/**
 * Represents a specific car, a BMW
 */
class BWM {
}
/**
 * Represents a specific car, an Audi
 */
class Audi {
}
/**
 * Represents a BMW Factory which implements ICarFactory. And here we have to say which type of cars are crafted by that factory. Here BWM
 */
class BWMFactory {
    createCar() {
        return new BWM();
    }
}
/**
 * Represents an Audi Factory which implements ICarFactory. And here we have to say which type of cars are crafted by that factory. Here Audi
 */
class AudiFactory {
    createCar() {
        return new Audi();
    }
}
//# sourceMappingURL=app.js.map