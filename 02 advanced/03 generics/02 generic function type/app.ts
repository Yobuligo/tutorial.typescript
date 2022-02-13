/**
 * Class that contains a value of any type
 */
class ValueContainer<T> {
  instance?: T;
}

/**
 * Next to generics for classes and interfaces we can have generics for functions.
 * This means the generic type is only known while calling that function. But not after initializing the corresponding class.
 *
 * This class is responsible for creating ValueContainers
 */
class ValueContainerFactory {
  // Creates a ValueContainer. As the valueContainer needs a generic type information we have to provide it.
  // Here we provide it via the function 'create'
  create<T>(): ValueContainer<T> {
    return new ValueContainer<T>();
  }
}

// when creating the factory there is no need to provide any generics type information
const valueContainerFactory = new ValueContainerFactory();
const valueContainerString = valueContainerFactory.create<string>();

// Thanks the generics information given to the create function of the valueContainerFactory we know instance must be of type 'string'
// and I only can provide strings but not e.g. numbers
valueContainerString.instance = "My String";
