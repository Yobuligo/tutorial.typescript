/**
 * Represents a car
 */
interface ICar {}

/**
 * Factory that is responsible for creating objects, especially for cars. So we write 'T extends ICar'.
 * And we want to know which type of car. So the factory not only returns ICar, but a generic type T which extends ICar.
 */
interface ICarFactory<T extends ICar> {
  createCar(): T;
}

/**
 * Represents a specific car, a BMW
 */
class BWM implements ICar {}

/**
 * Represents a specific car, an Audi
 */
class Audi implements ICar {}

/**
 * Represents a BMW Factory which implements ICarFactory. And here we have to say which type of cars are crafted by that factory. Here BWM
 */
class BWMFactory implements ICarFactory<BWM> {
  createCar(): BWM {
    return new BWM();
  }
}

/**
 * Represents an Audi Factory which implements ICarFactory. And here we have to say which type of cars are crafted by that factory. Here Audi
 */
class AudiFactory implements ICarFactory<Audi> {
  createCar(): Audi {
    return new Audi();
  }
}
