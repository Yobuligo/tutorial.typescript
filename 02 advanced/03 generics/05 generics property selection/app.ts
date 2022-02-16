import { println } from "../../../GlobalFunctions";

/**
 * Class that is responsible for returning a type safe property of the given 'instance' 
 * while 'instance' can have any type. Although each type is supported, we want to know the type. So we use the generics type T.
 */
export class PropertySelector<T> {
  constructor(private instance: T) {}

  selectProperty<P>(selector: (instance: T) => P): P {
    return selector(this.instance);
  }
}

class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number
  ) {}
}

const person = new Person("Stacey", "Starfish", 30);
const propertySelector = new PropertySelector<Person>(person);
const selectedProperty = propertySelector.selectProperty((instance) => {
  return instance.age;
});

// I know the type of 'selectedProperty' by type inference, which means I can call the specific functions, which makes the code more stable

if (typeof selectedProperty == "number") {
  println("the selected property is a number");
}
