/**
 * When introducing abstraction layers it is sometimes useful to provide a type (e.g. a class or an interface),
 * that refers to itself when it comes to parameters.
 * Take a look at the following example
 */

/**
 * The comparator is responsible for comparing the current object instance with another.
 * Probably it would make sense to compare the current object instance with an object of the same type.
 * Here the parameter type "this" can be used. It refers to the current type of the implementing class or interface
 */
interface IComparator {
  compare(instance: this): number;
}

/**
 * The parameter type 'this' can not only be a class type but also an interface type.
 * Therefore the interface IAnimal is introduced which extends IComparator. Later the 'instance: this' parameter of the IComparator would be of type if 'IAnimal'.
 */
interface IAnimal extends IComparator {}

class Animal implements IComparator {
  compare(instance: this): number {
    return 0;
  }
}

interface IDevice extends IComparator {
  name: string;
}

const animal: IAnimal = new Animal();

// The method compare expects an object of type IAnimal
animal.compare(animal);
